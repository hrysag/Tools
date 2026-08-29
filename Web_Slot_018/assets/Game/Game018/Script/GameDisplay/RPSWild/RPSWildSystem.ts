import { _decorator, Component, Node, Vec3 } from 'cc';
import { RPSWildAnimationController } from './RPSWildAnimationController';
import { RPSWildData, RPSWildState, RPSWild_AniState, RPSWildResult, RPSGuessRoundData } from './RPSWildDef';
import { SlotMachineIndexInfo } from '../../MyUtils/AnimationSystem/Definitions/AnimationDataOptions';
import { SingleSlot } from './SingleSlot/SingleSlot';
import { DefinitionGameConfigData } from '../../DefinitionGameData/DefinitionGameConfigData';
import { RPSBattle } from './RPSBattle';
import { RPSResultTitle } from './RPSResultTitle';
import { RPSWildValue } from './RPSWildDef';
import { RPSCollection } from './RPSCollection';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
import { SoundList, AudioSourceList } from '../../DefinitionGameData/SoundList';

const { ccclass, property } = _decorator;
const { WILD_LIST } = DefinitionGameConfigData;

@ccclass('RPSWildSystem')
export class RPSWildSystem extends Component {

    //--非常危險的東西,只要企劃一改位置就要炸了..美術異想天開搞出這種東西
    @property({ type: RPSBattle, visible: true, displayName: 'wildBattle', tooltip: '猜拳撞擊動畫' })
    private _wildBattle: RPSBattle = null;

    @property({ type: RPSResultTitle, visible: true, displayName: 'resultTitle', tooltip: '猜拳結果的動畫' })
    private _resultTitle: RPSResultTitle = null;

    @property({ type: RPSCollection, visible: true, displayName: 'collection system', tooltip: '猜拳燈號顯示系統' })
    private _collectionLightSystem: RPSCollection = null;

    @property({ type: Node, visible: true, displayName: 'WildCollectionNode', tooltip: 'WildCollectionNode' })
    private _wildCollectionNode: Node = null;

    @property({ type: Node, visible: true, displayName: 'SingleSlotItemNode', tooltip: 'SingleSlotItemNode' })
    private _singleSlotItemNode: Node = null;

    private _wild_left: RPSWildAnimationController = null;
    private _wild_right: RPSWildAnimationController = null;
    private _singleSlot_L: SingleSlot = null;
    private _singleSlot_R: SingleSlot = null;
    private _wildState: RPSWildState = RPSWildState.WILD_3;//----預設無猜拳狀態
    private _previousValue: number;
    private _thisRoundCampForLight: number;//--reSpin系列的開啟燈號的陣營
    private _isWorking: boolean = false;//--是否在wild系統當中
    private _resolvePromiseRollEnd: (() => void) | undefined; // promise resolve 函式
    private _guess_Round: number = 0;//--猜拳的回合數
    private _wildIconCount: number = 0;//--wild icon的數量(要2個才會啟動)
    private _wildSystemActivationCount: number = 0;//--wild系統啟動的次數(要2第二次才會改變wild state=0)
    private _wildWinCountThreshold: number = 0;//--(不含NG開啟那把)要開始計算勝敗場的臨界值(要wildSystemActivationCount>=2才會開始累計勝場計算)
    private _canNextWildRound: boolean = false;//--是否可以進入下一回合(猜拳是否可以開始計算勝場回合數)
    private _canRemoveAndCloseWild: boolean = false;//--是否可以關閉wild系統
    private _isRolling: boolean = false;//--是否在滾輪當中
    private _isCampDecided: boolean = false;//--是否已經決定陣營(尚未進行第一次決定陣營的旋轉)
    private _level: number = 0;
    private _changeIndex: { next: RPSWild_AniState, state: RPSWildState } = { next: RPSWild_AniState.NUN, state: RPSWildState.WILD_3 };//--wild狀態的改變(目前只會有next的狀態)
    private _testWildTotalCount: number = 0;
    private _firstRolling: boolean = false;//--是否第一次滾輪(用來判斷是否要改變wild狀態)
    private _isForceStopped: boolean = false;//--0702新增
    private _isLastWildRound: boolean = false;//--0731新增,是否是最後一輪wild(用來判斷是否要改變wild狀態)
    //private _firstOneAppear: boolean = false;//--是否第一次出現wild(用來判斷是否要改變wild狀態)
    get isLastWildRound(): boolean {
        return this._isLastWildRound;
    }

    get isCampDecided(): boolean {
        return this._isCampDecided;
    }
    //--wild3的狀態要移除
    get isRolling(): boolean {
        return this._isRolling;
    }

    get canRemoveAndCloseWild(): boolean {
        return this._canRemoveAndCloseWild;
    }

    get canNextWildRound(): boolean {
        return this._canNextWildRound;
    }

    get wildIconCount(): number {
        return this._wildIconCount;
    }

    get guess_Round(): number {
        return this._guess_Round;
    }

    get isWorking(): boolean {
        return this._isWorking;
    }

    get wildState(): RPSWildState {
        return this._wildState;
    }

    set wildState(value: RPSWildState) {
        this._wildState = value;
    }

    get wild_left(): RPSWildAnimationController {
        return this._wild_left;
    }

    get wild_right(): RPSWildAnimationController {
        return this._wild_right;
    }

    get singleSlotItemNode(): Node {
        return this._singleSlotItemNode;
    }

    set isLastWildRound(value: boolean) {
        this._isLastWildRound = value;
    }

    set guess_Round(value: number) {
        this._guess_Round = value;
    }

    public init(): void {
        this._wildBattle.init();
        this._resultTitle.init();
        this._collectionLightSystem.init();
        this._previousValue = -1;
        this._thisRoundCampForLight = -1;
        //new renderer.MaterialInstance()

    }

    //--每一新局都會resetWild
    public resetWild(): void {
        this._isLastWildRound = false;
        this._wild_left = null;
        this._wild_right = null;
        this._singleSlot_L?.clean();
        this._singleSlot_L = null;
        this._singleSlot_R?.clean();
        this._singleSlot_R = null;
        this._previousValue = -1;
        this._thisRoundCampForLight = -1;
        this._resultTitle.thisRoundCampForLight = -1;
        this._isWorking = false;
        this._wildIconCount = 0;
        this._isCampDecided = false;
        this._wildSystemActivationCount = 0;
        this._canNextWildRound = false;
        this._canRemoveAndCloseWild = false;
        this._isRolling = false;
        //this._firstOneAppear = false;
        this._level = 0;
        this._firstRolling = false;
        this._changeIndex = { next: RPSWild_AniState.NUN, state: RPSWildState.WILD_3 };
        //this._guess_Round = 0;
        this._resolvePromiseRollEnd = undefined;
        this._collectionLightSystem.closeCollectionLightSystem();
        this._wildBattle.closeAllRPSItem();
    }

    //--20250731 新增
    public hideCollectionLights(): void {
        this._collectionLightSystem.hideCollectionLights();
    }

    //--20250731 新增
    public appearCollectionLights(): void {
        this._collectionLightSystem.appearCollectionLights();
    }

    /**
     * 滿足左右兩個陣營都獲得wild的條件下
     * 即進入wild系統
     * 否則就是聽牌沒有達成的狀態
     */
    public addWildIconCount(): void {
        this._wildIconCount++;
        if (this._wildIconCount >= 2) {
            this._isWorking = true;
            this._wildState = RPSWildState.WILD_0;
        }

    }

    public startWildSystem(): void {
        this._wildSystemActivationCount++;
        //--開啟wild系統的時候,NG那把也會記入計算
        if (this._wildSystemActivationCount > this._wildWinCountThreshold) {
            //--Wildstate
            //RPSWildState.WILD_3-->要拔掉用working來判斷20250408
            //this._wildState = RPSWildState.WILD_0;
            /**
             * 是否可以開始計算勝場回合數
             * 否則會一直在wild0的狀態
             */
            this._canNextWildRound = true;
        }
    }

    //--兩邊都有wild卻是平手或是一勝一敗的狀態(沒有freeGame)
    public checkWildWithoutReSpin(): void {
        if (this._wild_left && this._wild_right) {
            this._wildState = RPSWildState.WILD_3;
            this._canRemoveAndCloseWild = true;
        }
    }

    public closeWildSymbolItemForTransition(): void {
        this._singleSlotItemNode.active = false;
        this._wildState = RPSWildState.WILD_3;
        this._canRemoveAndCloseWild = true;
    }

    public closeWildSystemVisible(): void {
        this._wildCollectionNode.active = false;
        this._singleSlotItemNode.active = false;
        this.node.active = false;
    }

    public openWildSystemVisible(): void {
        this._wildCollectionNode.active = true;
        this.node.active = true;
        this._singleSlotItemNode.active = true;
    }

    public resetSingleSlot(): void {
        this._singleSlot_L?.reset();
        this._singleSlot_R?.reset();
    }

    //---滾輪使用最大時間(需要外部介入停止)
    public setSlotMaxnumTime(): void {
        this._singleSlot_L?.useMaxnumRollingTime();
        this._singleSlot_R?.useMaxnumRollingTime();
    }

    //---滾輪使用預設時間
    public useSlotDefaultTime(): void {
        this._singleSlot_L?.useDefaultRollingTime();
        this._singleSlot_R?.useDefaultRollingTime();
    }

    //--設定滾輪時間
    public setSlotTime(t: number): void {
        this._singleSlot_L?.changeRollingTotalTime(t);
        this._singleSlot_R?.changeRollingTotalTime(t);
    }

    //--第二輪猜拳開始會走這種停的模式
    public async stopSlotRolling(): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {

            this._isForceStopped = true;

            const promises: Promise<void>[] = [
                this._singleSlot_L.stopRolling(),
                this._singleSlot_R.stopRolling()
            ];

            try {

                await Promise.all(promises);
                //--如果(rollWild)resolve還活著的話,就釋放掉
                if (this._resolvePromiseRollEnd) {
                    this._resolvePromiseRollEnd();
                    this._resolvePromiseRollEnd = undefined;
                }
                //--釋放rollWild的resolve
                this._isRolling = false;
                await this.playWildAppearAni();
                this.changeDefaultTargetSkin();//--change default ani(for skin)

                resolve();//--自己的resolve

            } catch (e) {
                reject(e);
            }

        });

    }

    public setWildIcon(wildIconComponent: RPSWildAnimationController, wildData: RPSWildData, slotInfo: SlotMachineIndexInfo): void {
        //this._isWorking = true;
        const targetNode = wildIconComponent.node.parent.children[0].getChildByName('Mask').children[0];
        //--這個要想一下怎麼改..這樣很危險
        let singleSlotComponent = targetNode.getComponent(SingleSlot);
        if (wildData.camp == 0) {
            this._wild_left = wildIconComponent;
            this._singleSlot_L = singleSlotComponent;

        } else if (wildData.camp == 1) {
            this._wild_right = wildIconComponent;
            this._singleSlot_R = singleSlotComponent;
        }
        singleSlotComponent.init(wildData.camp);
        singleSlotComponent.node.active = false;
        wildIconComponent.init();
        wildIconComponent.slotMachineIndexInfo = slotInfo;
        wildIconComponent.campData = wildData.camp;
        wildIconComponent.setFrontSpineSkin();
        wildIconComponent.changeSkin(this.getWildRPSData(wildData.wild));
    }

    //--在wild1 wild2的時候,要重置icon的資料(主要針對slotMachineIndexInfo)
    //--可以刪了..外面做掉了
    public reSetWildIconData(): void {

    }

    public playWildFirstAppearAni(camp: number): void {
        let playWildAniData: string;
        if (camp == 0) {
            playWildAniData = this._wild_left.getAniNameByWildRoundState(RPSWildState.WILD_0, RPSWild_AniState.APPEAR);
            this._wild_left.playAni(playWildAniData);

        } else if (camp == 1) {
            playWildAniData = this._wild_right.getAniNameByWildRoundState(RPSWildState.WILD_0, RPSWild_AniState.APPEAR);
            this._wild_right.playAni(playWildAniData);
        }
    }



    //--沒有兩個wild的狀態下,進行的一般中線表演流程
    public playWildConnectAniWithoutDoubleWild(): void {
        let playWildAniData: string;
        let target: RPSWildAnimationController;
        if (this._wild_left) {
            target = this._wild_left;
            playWildAniData = this._wild_left.getAniNameByWildRoundState(RPSWildState.WILD_0, RPSWild_AniState.CONNECT);

        } else if (this._wild_right) {
            target = this._wild_right;
            playWildAniData = this._wild_right.getAniNameByWildRoundState(RPSWildState.WILD_0, RPSWild_AniState.CONNECT);
        }

        if (target) {
            target.playAni(playWildAniData);
        }

    }

    //--沒有兩個wild的狀態下,進行的一般中線表演流程
    public closeWildAniNodeWithoutDoubleWild(): void {
        let target: RPSWildAnimationController;
        if (this._wild_left) {
            target = this._wild_left;

        } else if (this._wild_right) {
            target = this._wild_right;
        }

        if (target) {
            target.stopAni();
            target.node.active = false;
        }

    }


    //--沒有兩個wild的狀態下,進行的一般中線表演流程
    public openWildAniNodeWithoutDoubleWild(): void {
        let target: RPSWildAnimationController;
        if (this._wild_left) {
            target = this._wild_left;

        } else if (this._wild_right) {
            target = this._wild_right;
        }

        if (target) {
            target.node.active = true;
        }
    }

    private changeDefaultTargetSkin(): void {
        //--change default ani(for skin)
        let startIndexState = RPSWildState.WILD_1;
        if (this._isCampDecided) {
            if (this._wildState > RPSWildState.WILD_1) {
                startIndexState = this._wildState;
            }
        }
        const key = this._wild_left.getAniNameByWildRoundState(startIndexState, RPSWild_AniState.CONNECT);
        this._wild_left?.changeDefaultTarget(key);
        this._wild_right?.changeDefaultTarget(key);
    }


    private async playConnectAni(wildState?: RPSWildState): Promise<void> {

        let state = wildState ? wildState : this._wildState;
        const playWildAniData_L = this._wild_left.getAniNameByWildRoundState(state, RPSWild_AniState.CONNECT);
        const playWildAniData_R = this._wild_right.getAniNameByWildRoundState(state, RPSWild_AniState.CONNECT);
        const promises: Promise<void>[] = [
            this._wild_left.playAniInPromise(playWildAniData_L),
            this._wild_right.playAniInPromise(playWildAniData_R)
        ];

        await Promise.all(promises);
    }

    private async playAniInPromiseForFirstRound(wildState: RPSWildState): Promise<void> {

        const playWildAniData_L = this._wild_left.getAniNameByWildRoundState(wildState, RPSWild_AniState.CONNECT);
        const playWildAniData_R = this._wild_right.getAniNameByWildRoundState(wildState, RPSWild_AniState.CONNECT);
        const promises: Promise<void>[] = [
            this._wild_left.playAniInPromiseForFirstRound(playWildAniData_L),
            this._wild_right.playAniInPromiseForFirstRound(playWildAniData_R)
        ];

        await Promise.all(promises);
    }



    private async showAppearWithoutCampDecided(): Promise<void> {

        const playWildAniData_L = this._wild_left.getAniNameByWildRoundState(RPSWildState.WILD_1, RPSWild_AniState.APPEAR);
        const playWildAniData_R = this._wild_right.getAniNameByWildRoundState(RPSWildState.WILD_1, RPSWild_AniState.APPEAR);
        const promises: Promise<void>[] = [
            this._wild_left.playAniInPromise(playWildAniData_L),
            this._wild_right.playAniInPromise(playWildAniData_R)
        ];

        await Promise.all(promises);
    }

    //--做完換skin(狀態變更)
    private playWildAppearAni(): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            this._singleSlot_L.node.active = false;
            this._singleSlot_R.node.active = false;
            const leftSkin = this.getWildRPSData(this._wild_left.slotMachineIndexInfo.iconID);
            const rightSkin = this.getWildRPSData(this._wild_right.slotMachineIndexInfo.iconID);
            this._wild_left.changeSkin(leftSkin);
            this._wild_right.changeSkin(rightSkin);
            const playWildAniData_L = this._wild_left.getAniNameByWildRoundState(this._wildState, RPSWild_AniState.APPEAR);
            const playWildAniData_R = this._wild_right.getAniNameByWildRoundState(this._wildState, RPSWild_AniState.APPEAR);

            const promises: Promise<void>[] = [
                this._wild_left.playAniInPromise(playWildAniData_L),
                this._wild_right.playAniInPromise(playWildAniData_R)
            ];

            try {
                await Promise.all(promises);
                //-2 wild2_appear wild2_appear
                resolve();
            } catch (e) {
                reject(e);
            }

        });
    }

    private forcePlayConnectAniForRPSStart(): Promise<void> {
        //--強制播放連線動畫(拳頭)
        return new Promise<void>(async (resolve, reject) => {
            if (this._wild_left && this._wild_right) {

                this._singleSlot_L.node.active = false;
                this._singleSlot_R.node.active = false;
                try {
                    await this.showAppearWithoutCampDecided();//--0708只留這個
                    //await this.playAniInPromiseForFirstRound(RPSWildState.WILD_1);

                    //this._singleSlot_L.node.active = true;
                    //this._singleSlot_R.node.active = true;
                    resolve();

                } catch (e) {
                    //this._singleSlot_L.node.active = true;
                    //this._singleSlot_R.node.active = true;
                    reject(e);
                }
            }
        });
    }
    //--0701強call (第二輪後的猜拳_isCampDecided=true)
    public checkWildIsCampDecidedAndPlay(): void {
        if (this._isCampDecided && this._wild_left && this._wild_right) {
            this.playConnectAni();
        }
    }

    public setResultTitle(resultRound: number): void {
        this._resultTitle.showResultTitle(resultRound);
    }
    //--這邊可能會修改..
    public changeWildOutFrame(guessRoundData?: RPSGuessRoundData): Promise<void> {
        //--如果要呈現輸贏LV的進退.要改成送結果近來比對
        //console.log('check_cahngeWildOutFrame', this._wildState);

        return new Promise<void>(async (resolve, reject) => {

            let promises: Promise<void>[];
            if (this._changeIndex.next != RPSWild_AniState.NUN) {

                //--第一次放大框的猜拳要播的音效
                if (this._changeIndex.next == RPSWild_AniState.NEXT && this._changeIndex.state == RPSWildState.WILD_0) {
                    AudioManager.instance.playSound(SoundList.FgIconDebut, SOUND_TYPE.ONE_SHOT, AudioSourceList.BasicAS);
                }

                if (this._changeIndex.next == RPSWild_AniState.NEXT && this._changeIndex.state == RPSWildState.WILD_1) {
                    AudioManager.instance.playSound(SoundList.FgIconLock, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
                }

                //--next=1
                promises = [
                    this._wild_left.changeWildOutFrame(this._changeIndex.state, this._changeIndex.next),
                    this._wild_right.changeWildOutFrame(this._changeIndex.state, this._changeIndex.next)
                ];

                try {
                    this._singleSlot_L.node.active = false;
                    this._singleSlot_R.node.active = false;
                    await Promise.all(promises);
                    this._changeIndex = { next: RPSWild_AniState.NUN, state: this._wildState };
                    resolve();

                } catch (e) {
                    this._changeIndex = { next: RPSWild_AniState.NUN, state: this._wildState };
                    reject(e);
                }

            } else {
                this._changeIndex = { next: RPSWild_AniState.NUN, state: this._wildState };
                resolve();
            }

        });

    }

    public async checkRoundAndStartRollWild(): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            if (this._wildState == RPSWildState.WILD_0) {
                //this._wildBattle.setRoundData(this._guess_Round);
                let roundData: RPSGuessRoundData =
                {
                    round: this._wildState,
                    targetTokenIds: null
                }
                await this.rollWild(roundData);
                resolve();
            } else {
                await this.rollWild();
                resolve();
            }
        })
    }

    //--就負責轉而以
    public rollWild(guessRoundData?: RPSGuessRoundData): Promise<void> {

        this._isForceStopped = false;
        this._testWildTotalCount++;
        this._isRolling = true;
        //---s=起始,e=結束(左邊軸的轉輪設定)
        let slotInfo_L: { s: number, e: number } = { s: 0, e: 0 };
        //--s=起始,e=結束(右邊軸的轉輪設定)
        let slotInfo_R: { s: number, e: number } = { s: 0, e: 0 };
        //--滾動播放的ani key
        let playWildAniData_Left: string;
        let playWildAniData_Right: string;
        //--滾動結束後battle的播放icon資料
        let targetRollInfo_L_forBattle: SlotMachineIndexInfo;
        let targetRollInfo_R_forBattle: SlotMachineIndexInfo;

        /*
        console.log(
            'check_wildState_rollWild\n',
            'this._wildState:', this._wildState, '\n',
            'Left_iconID:', this._wild_left.slotMachineIndexInfo.iconID, '\n',
            'Right_iconID:', this._wild_right.slotMachineIndexInfo.iconID, '\n',
            'guessRoundData:', guessRoundData
        );*/

        if (this._wildState == RPSWildState.WILD_0) {

            //--將icon切換為rolling狀態+設定轉輪的資料
            //--左邊軸
            if (!this._firstRolling) {
                slotInfo_L.s = this.getRandomUniqueItem(WILD_LIST, this._previousValue);//--第一次亂數產生 
                slotInfo_R.s = this.getRandomUniqueItem(WILD_LIST, this._previousValue);
                this._firstRolling = true;
            } else {
                slotInfo_L.s = null;
                slotInfo_R.s = null;
            }

            slotInfo_L.e = this._wild_left.slotMachineIndexInfo.iconID;
            playWildAniData_Left = this._wild_left.getAniNameByWildRoundState(guessRoundData.round, RPSWild_AniState.ROLL);
            targetRollInfo_L_forBattle = this._wild_left.slotMachineIndexInfo;
            //--右邊軸

            slotInfo_R.e = this._wild_right.slotMachineIndexInfo.iconID;
            playWildAniData_Right = this._wild_right.getAniNameByWildRoundState(guessRoundData.round, RPSWild_AniState.ROLL);
            targetRollInfo_R_forBattle = this._wild_right.slotMachineIndexInfo;


        } else if (this._wildState >= RPSWildState.WILD_1) {
            //-(贏了一次就直接到L2的外框)
            //--<左邊軸>
            slotInfo_L.s = null;//--使用上一個結束的圖片
            slotInfo_L.e = this._wild_left.slotMachineIndexInfo.iconID;
            playWildAniData_Left = this._wild_left.getAniNameByWildRoundState(this._wildState, RPSWild_AniState.ROLL);
            targetRollInfo_L_forBattle = this._wild_left.slotMachineIndexInfo;
            //--<右邊軸>
            slotInfo_R.s = null;//--使用上一個結束的圖片
            slotInfo_R.e = this._wild_right.slotMachineIndexInfo.iconID;
            playWildAniData_Right = this._wild_right.getAniNameByWildRoundState(this._wildState, RPSWild_AniState.ROLL);
            targetRollInfo_R_forBattle = this._wild_right.slotMachineIndexInfo;

        }
        //--左邊滾動狀態的ani
        this._wild_left.playAni(playWildAniData_Left);
        //--設定左邊猜拳
        this._wildBattle.setResultForGuess(targetRollInfo_L_forBattle.reelIndex, targetRollInfo_L_forBattle.iconIndex, targetRollInfo_L_forBattle.iconID);
        //--右邊滾動狀態的ani
        this._wild_right.playAni(playWildAniData_Right);
        //--設定右邊猜拳
        this._wildBattle.setResultForGuess(targetRollInfo_R_forBattle.reelIndex, targetRollInfo_R_forBattle.iconIndex, targetRollInfo_R_forBattle.iconID);

        return new Promise<void>(async (resolve, reject) => {

            this._resolvePromiseRollEnd = resolve;
            let promises: Promise<void>[] = [
                this._singleSlot_L.runPromiseRolling(slotInfo_L.e, slotInfo_L.s),
                this._singleSlot_R.runPromiseRolling(slotInfo_R.e, slotInfo_R.s)
            ]
            this._singleSlot_L.node.active = true;
            this._singleSlot_R.node.active = true;
            AudioManager.instance.playSound(SoundList.FgIconSpin, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);

            try {

                await Promise.all(promises);
                //--沒有強制停輪和resolve還活著的情況下才會執行
                if (!this._isForceStopped && this._resolvePromiseRollEnd) {
                    //--接上appear+connect
                    //--第一輪的處理要額外做(此時_isCampDecided=false,尚未決定陣營)
                    //-showAppearWithoutCampDecided
                    if (!this._isCampDecided) {
                        await this.forcePlayConnectAniForRPSStart();
                    }
                    this._resolvePromiseRollEnd();
                    this._resolvePromiseRollEnd = undefined;
                }

            } catch (e) {
                reject(e);
            }
        })

    }



    public getWildIconAniType(value?: string): string {
        let targetWildIcon: RPSWildAnimationController = this._wild_left;
        if (value) {
            targetWildIcon = (value == "L") ? targetWildIcon : this._wild_right;
        }
        //console.log('getWildIconAniType', this._wildState);
        return targetWildIcon.getAniNameByWildRoundState(this._wildState, RPSWild_AniState.BATTLE);
    }

    public async guessRPS(battleData: string): Promise<void> {


        //---0708取消
        /*
        this._wild_left.playAni(battleData);//-只有播放框的狀態(拳頭被拿掉)
        this._wild_right.playAni(battleData);//-只有播放框的狀態(拳頭被拿掉)
        this._singleSlot_L.node.active = false;//--轉軸
        this._singleSlot_R.node.active = false;
        await this._wildBattle.playRPSMotion();//--出拳
        this._singleSlot_L.node.active = true;
        this._singleSlot_R.node.active = true;
        */

        const resultRound = this.getResultForRound();
        const firstCampForLight = this.getThisRoundCampForLight(resultRound);
        if (this._thisRoundCampForLight == -1) {
            this._thisRoundCampForLight = firstCampForLight;
            this._resultTitle.thisRoundCampForLight = firstCampForLight;//--把開啟陣營的資料寫進去
        }
        await this._resultTitle.showResultTitle(resultRound);
        //--每次都來猜
        if (this._thisRoundCampForLight != -1) {
            this.checkOpenCollectionLightSystem(firstCampForLight);
        }

        //--滿足累加條件後才開始計算蒐集狀態
        if (this._canNextWildRound) {
            //--接勝敗結果+亮燈顯示
            const levelValue = this.getThisRoundLevelValue(resultRound);
            this.writeEveryRoundForLevel(levelValue);
            await this._collectionLightSystem.setLevel(levelValue);
        }

        if (this._resolvePromiseRollEnd) {
            this._resolvePromiseRollEnd();
            this._resolvePromiseRollEnd = undefined;
        }
    }


    /**
     * 20250408-改變wildState都在這裡改變
     * 有勝負且_canNextWildRound=true的狀態下才會判斷
     * (平手不改變狀態)
        ani wild0=第一次出現
        ani wild0 to wild1--第一次猜拳(決定陣營)
        決定陣營的那一把如果平手的話-->退回wild1 to wild0
        直到分出勝負的那一次(決定陣營)-->開啟wild0 to wild1(一旦決定陣營後就沒有退回了)
        開啟wild1之後的下一把就進入wild2
     */
    /**
     * //--0=平手,1=左邊贏,2=右邊贏,3=重新旋轉
     * @param value 猜拳輸贏結果-0=平手,1=左邊贏,2=右邊贏,3=重新旋轉(目前沒送)
     */
    public checkWildStateToNextRound(): void {
        //--平手狀態不改變
        if (!this._isCampDecided) {
            this._wildState = RPSWildState.WILD_0;
            //this._previousWildState = 0;
            this._level = 0;
        } else {

        }

        /*
        console.log(
            'checkWildStateToNextRound--' + this._wildState + '\n' +
            '_canNextWildRound--' + this._canNextWildRound + '\n' +
            '_isCampDecided--' + this._isCampDecided + '\n' +
            '_testWildTotalCount--' + this._testWildTotalCount);

        console.log('breakOut');
        */

    }

    //-NG一進來的時候
    public setOpenWildForBegin(): void {
        this._changeIndex = { next: RPSWild_AniState.NEXT, state: this._wildState };
    }

    /**
     * 開啟燈號系統只會成立判斷一次,即為NG開啟第一次猜拳的時候
     * PS此時的計數器要更新一次,因為計數器的更新都是在每一輪開始前(checkNextRound)
     * 由於NG啟動的猜拳他並不會進入checkNextRound所以這邊要自己去累加
     * @param firstCampForLight 猜拳結果
     */
    private checkOpenCollectionLightSystem(firstCampForLight: number): void {
        if (firstCampForLight != -1 && !this._isCampDecided) {
            this._isCampDecided = true;
            if (this._wild_left) this._wild_left.isCampDecided = true;
            if (this._wild_right) this._wild_right.isCampDecided = true;
            this._collectionLightSystem.openCollectionLightSystem(firstCampForLight);
            this.checkWildStateToNextRound();
            /**
             * startWildSystem是checkNextRound(每局開始)才會去call
             * NG開啟的猜拳他並不會進入checkNextRound
             * 所以這邊要自己去累加
             */
            this.startWildSystem();
            this._testWildTotalCount++;
        }
    }

    //--猜拳換框都會在call完guessRPS之後來決定是否換框

    private writeEveryRoundForLevel(levelValue: number): void {
        const isCanUpgrade = this.isCanUpgradeWildState(levelValue);
        let changeIndex: RPSWild_AniState = RPSWild_AniState.NUN;
        if (isCanUpgrade.bol) {
            changeIndex = RPSWild_AniState.NEXT;
        }
        this._changeIndex = { next: changeIndex, state: isCanUpgrade.state };

    }

    private isCanUpgradeWildState(levelValue: number): { bol: boolean, state: RPSWildState } {
        if (levelValue == 0) return { bol: false, state: RPSWildState.WILD_3 };//--平手不處理
        let previousLevel: number = this._level;
        this._level += levelValue;

        if (this._level < 1) {
            this._level = 0;//--這種情況..有點不太可能會發生
        }

        //--level正數表示升級,負數表示降級(不處理平手狀態)
        if (previousLevel < this._level) {
            if (!this._isCampDecided || !this._canNextWildRound) {
                this._wildState = RPSWildState.WILD_0;//--0 to 1
                this._level = 0;
                return { bol: false, state: this._wildState };
            } else {
                if (this._wildState == RPSWildState.WILD_0) {
                    this._wildState = RPSWildState.WILD_2;//1 to 2

                    return { bol: true, state: RPSWildState.WILD_1 };
                } else {
                    return { bol: true, state: RPSWildState.WILD_2 };
                }

                //--因為2之後的狀態都是一樣的,所以不用寫
            }
        } else {
            return { bol: false, state: RPSWildState.WILD_3 };
        }


    }

    /**
     * 
     * @param resultFirstGuess 猜拳結果
     * @returns 本系列的燈號陣營(wildState=0決定)
     */
    private getThisRoundCampForLight(resultFirstGuess: number): number {
        //--0=平手,1=左邊贏,2=右邊贏,3=重新旋轉
        if (resultFirstGuess != 0 && resultFirstGuess != 3) {
            return (resultFirstGuess == 1) ? 1 : 2;
        }
        return -1;
    }
    /**
     * PS-如果與開啟陣營相同的話,則為1,否則為-1
     * (目前沒做回朔燈號的機制..企劃書沒寫?,但美術有做)
     * @param resultFirstGuess 猜拳結果
     * @returns 要升級(亮燈)累加的分數
     */
    private getThisRoundLevelValue(resultFirstGuess: number): number {
        if (resultFirstGuess == 1 || resultFirstGuess == 2) {
            return (resultFirstGuess == this._thisRoundCampForLight) ? 1 : -1;
        } else if (resultFirstGuess == 0) {
            return 0;//--平手
        }
        return 0;//---例外狀況(反正RPSCollection那邊拿到0就會return)
    }

    private getResultForRound(): number {
        let leftResult = this._wild_left.slotMachineIndexInfo.iconID;
        let rightResult = this._wild_right.slotMachineIndexInfo.iconID;
        if (leftResult === rightResult) {
            return 0;//--平手
        }
        if (
            (leftResult === RPSWildValue.S && rightResult === RPSWildValue.P) ||
            (leftResult === RPSWildValue.R && rightResult === RPSWildValue.S) ||
            (leftResult === RPSWildValue.P && rightResult === RPSWildValue.R)
        ) {
            return 1;//--左邊贏
        } else {
            return 2//--右邊贏
        }
    }

    private getWildRPSData(iconId: number): RPSWildResult {
        if (iconId == 6) {
            return RPSWildResult.S;//--剪刀     
        } else if (iconId == 7) {
            return RPSWildResult.R;//--石頭 
        } else if (iconId == 8) {
            return RPSWildResult.P;//--布
        }
    }

    private getRandomUniqueItem<T>(array: T[], previousItem: T | null = null): T | undefined {
        if (array.length === 0) {
            return undefined; // 如果陣列為空，則返回 undefined
        }

        let randomIndex: number;
        let randomItem: T;

        do {
            randomIndex = Math.floor(Math.random() * array.length);
            randomItem = array[randomIndex];
        } while (previousItem !== null && randomItem === previousItem);

        return randomItem;
    }

}



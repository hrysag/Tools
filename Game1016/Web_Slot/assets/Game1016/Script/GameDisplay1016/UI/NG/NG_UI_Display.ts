import { _decorator, Component, Node, Vec3, v3, Label, UITransform, sp, game } from 'cc';
import { IBasicGUI } from '../IBasicGUI';
import { SpineAniPlayInfoList, SpineCtrlPropDef, AnimationStateList, ClearTrackTypeState } from 'db://assets/Game1016/Script/MyUtils/AnimationSystemV2/Components/AniStateLists/AnimationPlayStateBase';
import { ContainerWholeBehavior } from '../../../MyUtils/BasicShowContainerManager/Component/ContainerWholeBehavior';
import { AnimationController, GameUtilsTools, AnimationStateType, GameState, } from '../../../ReferencePath';
import { GlobalAccessReader } from '../../../DefinitionGameData1016/AccessDefs/GlobalAccess';
import { GameGlobalData, GameGlobalKeys } from '../../../DefinitionGameData1016/GameGlobalData1016';
import { AsyncScope } from '../../../MyUtils/AsyncScope/AsyncScope';
import { SoundList, AudioSourceList, MusicList } from '../../../DefinitionGameData1016/SoundList1016';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/ModuleEntry';
//import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';

const { ccclass, property } = _decorator;
const ANIMATION_NGUI_TYPE = {
    RS_OPEN_DOOR: 'door_L_Open',
    RS_CLOSE_DOOR: 'door_L_Close',//---關門用這個動畫
    RS_DEFAULT_DOOR: 'door_L_Close_Default',
    FG_OPEN_DOOR: 'door_R_Open',
    FG_CLOSE_DEFAULT_DOOR: 'door_R_Close_Default',
    RS_COUNT: 'ReSpin_Num',
    RS_DEFAULT_COUNT: 'ReSpin_Num_Default',
    FG_COUNT: 'Freespin_Num',
    FG_DEFAULT_COUNT: 'Freespin_Default'
}

const LOG_TITLE = 'NG_UI_Display';
const SIGNAL_KEY = 'NG_UI_CTRL_SIGNAL';
@ccclass('NG_UI_Display')
export class NG_UI_Display extends ContainerWholeBehavior implements IBasicGUI {

    @property({ type: SpineAniPlayInfoList, displayName: 'SpineAniPlayInfoList', visible: true, tooltip: '播放資料清單' })
    protected _animationPlayInfoList: SpineAniPlayInfoList = new SpineAniPlayInfoList();

    @property({ type: sp.Skeleton, visible: true, displayName: 'fuckingArts', tooltip: '美術太天才了大開眼界' })
    private _doorSpine: sp.Skeleton = null;

    @property({ type: Node, visible: true, displayName: 'ReSpinCountNode', tooltip: 'ReSpinCount節點' })
    private _reSpinCountNode: Node = null;

    @property({ type: Node, visible: true, displayName: 'FGCountNode', tooltip: 'FGCount節點' })
    private _fgCountNode: Node = null;

    private _labelReSpinCount: Label = null;
    private _labelFGCount: Label = null;
    private _dirtyFlag: boolean = false;
    private _currentGameState: GameState = GameState.NULL;

    protected _resolvePromise: (() => void) | undefined;
    private _isRsOpen: boolean = false;
    private _isFGOpen: boolean = false;
    private _countRS: number = 0;
    private _countFG: number = 0;
    private _async: AsyncScope;

    protected onLoad(): void {
        if (this._dirtyFlag) return;
        this._dirtyFlag = true;
    }

    protected start(): void {
        this.init();
    }

    public init(): void {
        if (!this._dirtyFlag) return;
        this._labelReSpinCount = this._reSpinCountNode.getComponent(Label);
        this._labelFGCount = this._fgCountNode.getComponent(Label);
        this.setReSpinCount(0);
        this.setFGCount(0);
        this._async = AsyncScope.getInstance();
        super.init();
    }

    private reset(): void {
        this._isRsOpen = false;
        this._isFGOpen = false;
        this._countRS = 0;
        this._countFG = 0;
    }

    private findAndGetPlayData(aniState: string): SpineCtrlPropDef | null {
        for (const aniData of this._animationPlayInfoList.clipsInfo) {
            if (aniData.targetName === aniState) {
                return aniData;
            }
        }
        return null;
    }

    //---給控制器去呼叫使用的(遊戲狀態改變時呼叫)-備用
    public override changeGameMode(gameState: GameState): void {
        this._currentGameState = gameState;
    }

    public override closeContainerTween(): void {

        const gameState = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
        if (gameState == GameState.FREE_GAME || gameState == GameState.NULL) {
            super.closeContainerTween();
        }

    }

    public override openContainerTween(): void {

        const gameState = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
        if (gameState == GameState.NORMAL) {
            super.openContainerTween();
        }

    }

    /**
     * TrackEntry--->
     * export interface AnimationStateListener {
                start(entry: TrackEntry): void;
                interrupt(entry: TrackEntry): void;
                end(entry: TrackEntry): void;
                dispose(entry: TrackEntry): void;
                complete(entry: TrackEntry): void;
                event(entry: TrackEntry, event: Event): void;
            }
        check that--->
        https://github.com/cocos/cocos-engine/blob/10ec595/cocos/spine/skeleton.ts#L1801
        PS 它傳出來的trackEntry是sp.spine.TrackEntry..但很尷尬就沒有lister的定義給你??
        trackEntry.listener===>它根本不給你...乖乖用spine最上層的接口去掛事件吧
     * @returns 
     */
    //private playSpinePromise(aniState: SpineCtrlPropDef,duration?:number): Promise<{ timedOut: boolean }> {
    private playSpinePromise(aniState: SpineCtrlPropDef, duration?: number): Promise<void> {

        let entry: sp.spine.TrackEntry;
        let loops = 0;
        if (duration) {
            const targetDuration = this._doorSpine.findAnimation(aniState.targetName)?.duration;
            if (targetDuration) {
                if (targetDuration != duration) {
                    aniState.timeScale = targetDuration / duration;
                }
            }
        }

        //return new Promise<{ timedOut: boolean }>((resolve, reject) => {
        return new Promise<void>((resolve, reject) => {
            entry = (this._doorSpine.setAnimation(aniState.trackIndex, aniState.targetName, aniState.loop)) as unknown as sp.spine.TrackEntry;
            if (aniState.timeScale != null) (entry as any).timeScale = aniState.timeScale;

            const completeLister = () => {
                if (++loops >= aniState.repeatCount) {
                    this._doorSpine.setCompleteListener(null);
                    //resolve({ timedOut: false });
                    resolve();
                }
            }
            this._doorSpine.setCompleteListener(completeLister);
            //entry.listener.complete = completeLister;
            //entry.listener.end = endLister;

        });
    }

    //--保底promise--
    private playSpineWithTimeout(aniState: SpineCtrlPropDef, timeOut: number, duration?: number): any {

        return GameUtilsTools.withTimeout(
            this.playSpinePromise(aniState, duration),
            timeOut,
            { anim: aniState.targetName },
            `playSpineWithTimeout-${aniState.targetName}`,
            true
        )
    }

    /**
     * 
     *  private playSpineWithTimeout(aniState: SpineCtrlPropDef, timeOut: number,duration?:number): any {
        
        return GameUtilsTools.withTimeout<{ timedOut: boolean }, { anim: string }>(
            this.playSpinePromise(aniState,duration),
            timeOut,
            { anim: aniState.targetName },
            `playSpineWithTimeout-${aniState.targetName}`,
            true,
            { timedOut: true }
        )
    }
     */

    public async openReSpinCountUI(): Promise<void> {
        //--開門:0.5sec
        if (this._isRsOpen) return Promise.resolve();
        const timeout = 0.5;
        const data = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.RS_OPEN_DOOR);
        if (data) {
            const gamestate = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
            let dt: number = 0;
            if (gamestate == GameState.FREE_GAME) {
                dt = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.other?.fg_openCountBoard);
            } else {
                dt = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.other?.openCountBoard);
            }
            //const dt = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.other?.openCountBoard);
            this._isRsOpen = true;
            const signal = this._async.createAbortScope(SIGNAL_KEY);
            this._doorSpine.timeScale = 1;//--20260209-FIX-開門動畫有被改過,所以每次開門前先還原
            const outCancel = (value) => {
                //--取消使用-直接開門--(因為美術沒有一個是整個打開的狀態,這邊就加速處理到最後一格)
                this._doorSpine.timeScale = 100;//--直接加快播到最後
                //this._doorSpine.clearTrack(data.trackIndex);
                //const defaultRSDoor = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.RS_DEFAULT_DOOR);
                //this._doorSpine.setAnimation(defaultRSDoor.trackIndex, defaultRSDoor.targetName, false);
            }
            AudioManager.instance.playSound(SoundList.frame_open, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
            const p = this._async.withTimeout(
                this.playSpinePromise(data, dt),
                timeout,//--race time
                { opt: 'open_respin_count_ui', tag: LOG_TITLE },
                'NG_UI_Display:openReSpinCountUI',
                true,
                null,
                signal,
                SIGNAL_KEY,
                outCancel
            )

            const flag = GlobalAccessReader.getGlobalData(GameGlobalKeys.InterruptProcess);
            //if(this._isInterrupting)
            if (flag) {
                console.log();
                this._async.abortAll(SIGNAL_KEY);
            }

            const result = await p.promise;

        }

    }

    public async closeReSpinCountUI(): Promise<void> {

        if (!this._isRsOpen) return Promise.resolve();
        const timeout = 0.5;
        const data = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.RS_CLOSE_DOOR);
        if (data) {
            this._isRsOpen = false;
            const dt = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.other?.openCountBoard);
            const signal = this._async.createAbortScope(SIGNAL_KEY);
            const outCancel = (value) => {
                //--取消使用-直接開門--(因為美術沒有一個是整個打開的狀態,這邊就加速處理到最後一格)

                //this._doorSpine.timeScale=100;//--直接加快播到最後
                //this._doorSpine.clearTrack(data.trackIndex);
                //const defaultRSDoor = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.RS_DEFAULT_DOOR);
                //this._doorSpine.setAnimation(defaultRSDoor.trackIndex, defaultRSDoor.targetName, false);
            }

            const p = this._async.withTimeout(
                this.playSpinePromise(data, dt),
                timeout,//--race time
                { opt: 'closeReSpinCountUI_ui', tag: LOG_TITLE },
                'NG_UI_Display:closeReSpinCountUI',
                true,
                null,
                signal,
                SIGNAL_KEY,
                outCancel
            )

            const flag = GlobalAccessReader.getGlobalData(GameGlobalKeys.InterruptProcess);
            //if(this._isInterrupting)
            if (flag) {
                console.log();
                this._async.abortAll(SIGNAL_KEY);
            }

            const result = await p.promise;
            //const result = await this.playSpineWithTimeout(data, 0.5);
            //console.log('check_result race', result);
            //GameUtilsTools.debugLog(LOG_TITLE, 'closeReSpinCountUI', { result });
        }
    }

    public async openFGCountUI(): Promise<void> {

        if (this._isFGOpen) return Promise.resolve();
        const timeout = 0.5;
        const data = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.FG_OPEN_DOOR);
        if (data) {
            this._isFGOpen = true;
            //const result = await this.playSpineWithTimeout(data, 0.5);
            const dt = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.other?.openCountBoard);
            const signal = this._async.createAbortScope(SIGNAL_KEY);

            this._doorSpine.timeScale = 1;
            const outCancel = (value) => {
                //--取消使用-直接開門--(因為美術沒有一個是整個打開的狀態,這邊就加速處理到最後一格)

                this._doorSpine.timeScale = 100;//--直接加快播到最後
                //this._doorSpine.clearTrack(data.trackIndex);
                //const defaultRSDoor = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.RS_DEFAULT_DOOR);
                //this._doorSpine.setAnimation(defaultRSDoor.trackIndex, defaultRSDoor.targetName, false);
            }
            AudioManager.instance.playSound(SoundList.frame_open, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
            const p = this._async.withTimeout(
                this.playSpinePromise(data, dt),
                timeout,//--race time
                { opt: 'openFGCountUI_ui', tag: LOG_TITLE },
                'NG_UI_Display:openFGCountUI',
                true,
                null,
                signal,
                SIGNAL_KEY,
                outCancel
            )

            const flag = GlobalAccessReader.getGlobalData(GameGlobalKeys.InterruptProcess);
            //if(this._isInterrupting)
            if (flag) {

                this._async.abortAll(SIGNAL_KEY);
            }

            const result = await p.promise;
            //GameUtilsTools.debugLog(LOG_TITLE, 'openFGCountUI', { result });
        }
    }

    //--美術沒做這個動畫
    public async closeFGCountUI(): Promise<void> {

        if (!this._isFGOpen) return Promise.resolve();
        const timeout = 0.5;
        const data = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.FG_CLOSE_DEFAULT_DOOR);
        if (data) {
            const dt = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.other?.openCountBoard);
            this._isFGOpen = false;

            const signal = this._async.createAbortScope(SIGNAL_KEY);
            this._doorSpine.timeScale = 1;
            const outCancel = (value) => {
                //--取消使用-直接開門--(因為美術沒有一個是整個打開的狀態,這邊就加速處理到最後一格)
                console.log('closeFGCountUI outCancel', value);
                this._doorSpine.timeScale = 100;//--直接加快播到最後
                //this._doorSpine.clearTrack(data.trackIndex);
                //const defaultRSDoor = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.RS_DEFAULT_DOOR);
                //this._doorSpine.setAnimation(defaultRSDoor.trackIndex, defaultRSDoor.targetName, false);
            }

            const p = this._async.withTimeout(
                this.playSpinePromise(data, dt),
                timeout,//--race time
                { opt: 'closeFGCountUI_ui', tag: LOG_TITLE },
                'NG_UI_Display:closeFGCountUI',
                true,
                null,
                signal,
                SIGNAL_KEY,
                outCancel
            )

            const flag = GlobalAccessReader.getGlobalData(GameGlobalKeys.InterruptProcess);
            //if(this._isInterrupting)
            if (flag) {

                this._async.abortAll(SIGNAL_KEY);
            }

            const result = await p.promise;

            //const result = await this.playSpineWithTimeout(data, 0.5);
            //GameUtilsTools.debugLog(LOG_TITLE, 'closeFGCountUI', { result });
        }
    }

    public closeAllUI(): void {

        this._countRS = 0;
        this._countFG = 0;
        this.setReSpinCount();
        this.setFGCount();

        const defaultRSDoor = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.RS_DEFAULT_DOOR);
        this._doorSpine.setAnimation(defaultRSDoor.trackIndex, defaultRSDoor.targetName, defaultRSDoor.loop);
        const defaultFGDoor = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.FG_CLOSE_DEFAULT_DOOR);
        this._doorSpine.setAnimation(defaultFGDoor.trackIndex, defaultFGDoor.targetName, defaultFGDoor.loop);
        this.reset();
        //const defaultFGCount = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.FG_DEFAULT_COUNT);
        //this._doorSpine.setAnimation(defaultFGCount.trackIndex, defaultFGCount.targetName, defaultFGCount.loop);
        //const defaultRSCount = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.RS_DEFAULT_COUNT);
        //this._doorSpine.setAnimation(defaultRSCount.trackIndex, defaultRSCount.targetName, defaultRSCount.loop);

        //this._aniController.playAni({aniState:ANIMATION_NGUI_TYPE.CLOSE_FG_COUNT});
    }

    public async triggerFGCountUp(value: number): Promise<void> {

        const timeout = 0.5;
        this.setFGCount(value);
        const data = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.FG_COUNT);
        if (data) {
            const gamestate = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);
            let dt: number = 0;
            if (gamestate == GameState.FREE_GAME) {

                dt = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.other?.fg_countBoard);
            } else {
                dt = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.other?.countBoard);
            }
            //const dt = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.other?.countBoard);
            //const result = await this.playSpineWithTimeout(data, 0.5);
            const outCancel = (value) => {
                //--取消使用-直接開門--(因為美術沒有一個是整個打開的狀態,這邊就加速處理到最後一格)
                console.log('otriggerFGCountUp Cancel', value);
                //this._doorSpine.clearTrack(data.trackIndex);

            }
            const signal = this._async.createAbortScope(SIGNAL_KEY);
            AudioManager.instance.playSound(SoundList.number_increase, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
            const p = this._async.withTimeout(
                this.playSpinePromise(data, dt),
                timeout,//--race time
                { opt: 'triggerFGCountUp', tag: LOG_TITLE },
                'NG_UI_Display:triggerFGCountUp',
                true,
                null,
                signal,
                SIGNAL_KEY,
                outCancel
            )

            const flag = GlobalAccessReader.getGlobalData(GameGlobalKeys.InterruptProcess);
            if (flag) {

                this._async.abortAll(SIGNAL_KEY);
            }
            const result = await p.promise;
            //GameUtilsTools.debugLog(LOG_TITLE, 'triggerFGCountUp', { result });
        }
        //this._aniController.playAni({ aniState: ANIMATION_NGUI_TYPE.FG_NUM_UP });
        //return Promise.resolve();
        //await this._aniController.playAniInPromise({ aniState: ANIMATION_NGUI_TYPE.FG_NUM_UP })
        //---測試用<強制愈時resolve>  
        /*
        await GameUtilsTools.withTimeout(
            this._aniController.playAniInPromise({ aniState: ANIMATION_NGUI_TYPE.FG_NUM_UP }),
            2,
            { opt: 'play_fg_count_up', tag: this._aniController.node.name },
            'NG_UI_Display:triggerFGCountUp',
            false
        )*/
    }

    //--這邊外部等粒子飛到定位後再呼叫
    public async triggerReSpinCountUp(value: number): Promise<void> {

        //--數字跳0.4sec
        const timeout = 0.4;
        this.setReSpinCount(value);
        const data = this.findAndGetPlayData(ANIMATION_NGUI_TYPE.RS_COUNT);
        if (data) {
            const dt = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.other?.countBoard);
            //const result = await this.playSpineWithTimeout(data, 0.5,dt);
            const outCancel = (value) => {
                //--取消使用-直接開門--(因為美術沒有一個是整個打開的狀態,這邊就加速處理到最後一格)
                console.log('openReSpinCountUI outCancel', value);
                //this._doorSpine.clearTrack(data.trackIndex);

            }
            const signal = this._async.createAbortScope(SIGNAL_KEY);
            AudioManager.instance.playSound(SoundList.number_increase, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
            this.playVoice();
            const p = this._async.withTimeout(
                this.playSpinePromise(data, dt),
                timeout,//--race time
                { opt: 'triggerReSpinCountUp', tag: LOG_TITLE },
                'NG_UI_Display:triggerReSpinCountUp',
                true,
                null,
                signal,
                SIGNAL_KEY,
                outCancel
            )

            const flag = GlobalAccessReader.getGlobalData(GameGlobalKeys.InterruptProcess);
            if (flag) {

                this._async.abortAll(SIGNAL_KEY);
            }

            const result = await p.promise;
            //GameUtilsTools.debugLog(LOG_TITLE, 'triggerReSpinCountUp', { result });
        }

    }

    private playVoice(): void {

        let voiceList = [SoundList.Respin_06, SoundList.Respin_07];
        const randomIndex = GameUtilsTools.getRangeRandomInt(0, voiceList.length - 1);
        AudioManager.instance.playSound(voiceList[randomIndex], SOUND_TYPE.ONE_SHOT, AudioSourceList.RsVs);

    }

    private countRS(value: number): number {
        this._countRS += value;
        return this._countRS;
    }

    private countFG(value: number): number {
        this._countFG += value;
        return this._countFG;
    }

    public setReSpinCount(value?: number): void {
        //this._countRS += value;
        if (value) this.countRS(value);
        this._labelReSpinCount.string = this._countRS.numberComma();
    }

    public setFGCount(value?: number): void {
        if (value) this.countFG(value);
        //this._countFG += value;
        this._labelFGCount.string = this._countFG.numberComma();
    }

    public getFGCountWPos(): Vec3 {
        let parentUiTransform = this._fgCountNode.parent.getComponent(UITransform);
        if (parentUiTransform) {
            let lPos = this._fgCountNode.position.clone();
            let wPos = parentUiTransform.convertToWorldSpaceAR(lPos);
            return wPos;
        }
        return v3(0, 0, 0);
    }

    public getReSpinCountWPos(): Vec3 {
        let parentUiTransform = this._reSpinCountNode.parent.getComponent(UITransform);
        if (parentUiTransform) {
            let lPos = this._reSpinCountNode.position.clone();
            let wPos = parentUiTransform.convertToWorldSpaceAR(lPos);
            return wPos;
        }
        return v3(0, 0, 0);
    }

}



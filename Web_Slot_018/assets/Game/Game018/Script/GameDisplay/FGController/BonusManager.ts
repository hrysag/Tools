import { _decorator, Component, Node, Vec3, UITransform, Graphics, color, Layers, CCInteger, tween, ParticleSystem, bezier, v3 } from 'cc';
import { DefinitionGameConfigData } from '../../DefinitionGameData/DefinitionGameConfigData';
import { FG_BonusBarAniController } from './BonusComponent/FG_BonusBarAniController';
import { AnimationControllersPoolManager } from '../../MyUtils/AnimationSystem/AnimationControllersPoolManager';
import { FindComponent } from '../../MyUtils/FindComponent';
import { AnimationController } from '../../MyUtils/AnimationSystem/Components/AnimationController';
import { BonusInfo, BonusInfoForRound } from './BonusComponent/FG_bonusDataDef';
import { FG_BonusCountTimes } from './BonusComponent/FG_BonusCountTimes';
import { ParticleExtension } from '../../MyUtils/AnimationSystem/Components/ParticleExtension';
import { IWindowResize } from 'db://assets/Scripts/Utils/IWindowResize';
import { Orientation } from 'db://assets/Scripts/Utils/Config';
import { GameUtils } from '../../MyUtils/GameUtils';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
import { SoundList, AudioSourceList } from '../../DefinitionGameData/SoundList';
import { BonusParticlePool } from './BonusParticlePool';

const { ccclass, property } = _decorator;
const {
    BONUS_MULTIPLIER,
    SPECIAL_SYMBOL_LIST,
    DEFAULT_FG_ROUNDS,
    BONUS_MULTIPLIER_REDUCE
} = DefinitionGameConfigData;
const CollectionBoxNode_Name = 'FG_CollectBox_all';//--FG_CollectBox_all prefab name
const BonusCountTimes_Name = 'FG_UI_Remaining_bot';//--FG_UI_Remaining_bot prefab name

@ccclass('BonusManager')
export class BonusManager extends IWindowResize {

    //@property({ type: Node, displayName: 'bonusBarContainer', visible: true, tooltip: '放bonus collectionBox的node' })
    private _targetBonusBarContainer: Node = null;

    @property({ type: Node, displayName: 'Ali_bonusBarContainer', visible: true, tooltip: 'ali放bonus collectionBox的node' })
    private _ali_BonusBarContainer: Node = null;

    @property({ type: Node, displayName: 'Thieves_bonusBarContainer', visible: true, tooltip: 'Thieves放bonus collectionBox的node' })
    private _thieves_BonusBarContainer: Node = null;

    @property({ type: Node, displayName: 'bonusCountTimesContainer', visible: true, tooltip: '裝bonusTime的node' })
    private _freeSpineCountTimesContainer: Node = null;

    @property({ type: Node, displayName: 'bonusParticleContainer', visible: true, tooltip: '裝particle的node' })
    private _bonusParticleContainer: Node = null;

    @property({ type: CCInteger, displayName: 'maximumCount', visible: true, tooltip: 'bonusMaximum count' })
    private _maximumCount: number = 0;//--bonus最大數量


    @property({ type: Node, displayName: 'landscapeContainer', visible: true, tooltip: 'landscape的node' })
    private _landscapeNode: Node = null;

    @property({ type: Node, displayName: 'portraitContainer', visible: true, tooltip: 'portrait的node' })
    private _portraitNode: Node = null;

    private _freeSpineCountTimesPrefabNode: Node = null;
    private _freeSpineTimes: FG_BonusCountTimes = null;

    private _bonusAniController: FG_BonusBarAniController = null;
    private _bonusBarPrefabNode: Node = null;
    private _totalRounds: number = 0;//--總局數
    private _currentRounds: number = 0;//--當前局數
    private _currentBonusCount: number = 0;//-當前總bonus數量(for播放)
    private _currentMultiplier: number = 0;
    private _isWorking: boolean = false;//--是否在運行中
    private _camp: number = -1;//--當前的camp
    private _roundForBonusData: BonusInfo[] = [];//--bonus資料
    private _gameRotationResolution: Orientation = null;
    private _bonusParticlePool: BonusParticlePool = null;//--bonus particle pool

    /**
     *  1.基本5把
        2.長度超過5把代表他有獲得額外的FG
        3.出現bonus代表獲得額外局數(出現一個就多一局)
        4.出現bonus啟動上方面板倍率加成,下方要累計局數變動
        5.每次FG的每一把,在結算時如果有bonus要乘上累積的倍率
        6.bonus累計滿點時,不在啟動效果,只會累加一局
     */
    get currentMultiplier(): number {
        return this._currentMultiplier;
    }

    get isWorking(): boolean {
        return this._isWorking;
    }

    set totalRounds(value: number) {
        this._totalRounds = value;//--預設開局5把
    }

    public init(): void {
        this._isWorking = false;
        this._bonusParticlePool = new BonusParticlePool();
    }

    public resetData(): void {
        this._totalRounds = 0;
        this._currentRounds = 0;
        this._currentBonusCount = 0;
        this._currentMultiplier = 0;
        this._isWorking = false;
        this._camp = -1;
        this._roundForBonusData = [];
        //--再推回物件池後移除相關物件
        this._bonusBarPrefabNode = null;
        this._bonusAniController = null;
        this._freeSpineCountTimesPrefabNode = null;
        this._freeSpineTimes = null;
    }

    /**
     * fg2要在盤面上面不顯示的symbol id
     * 梅花5/方塊4/愛心3/黑桃2
     * @returns 2,3,4,5
     */
    public getCamp2MultiplierForReduce(): number {
        if (this._camp == 0) {
            return -1
        } else if (this._camp == 1) {
            if (BONUS_MULTIPLIER_REDUCE[this._currentMultiplier]) {
                return BONUS_MULTIPLIER_REDUCE[this._currentMultiplier];
            } else {
                return -1;
            }
        }
    }

    public openFGBonus(camp: number): void {
        this._camp = camp;
        this._targetBonusBarContainer = (this._camp == 0) ? this._ali_BonusBarContainer : this._thieves_BonusBarContainer;
        this._totalRounds = DEFAULT_FG_ROUNDS;
        this._bonusBarPrefabNode = AnimationControllersPoolManager.getInstance().getPrefabNode(CollectionBoxNode_Name);
        this._bonusBarPrefabNode.active = true;//--去觸發onload
        this._targetBonusBarContainer.addChild(this._bonusBarPrefabNode);
        this._bonusBarPrefabNode.setPosition(v3(0, 0, 0));

        this._bonusAniController = FindComponent.findComponentInChildren(this._bonusBarPrefabNode, FG_BonusBarAniController);
        this._bonusAniController.camp = this._camp;
        this._bonusAniController.setSkinAndInitSpine(this.getCurrentCampSkinName());
        this._bonusAniController.setGameScreenRotationResolution(this._gameRotationResolution);
        //this._bonusAniController.setPositions();
        this._freeSpineCountTimesPrefabNode = AnimationControllersPoolManager.getInstance().getPrefabNode(BonusCountTimes_Name);
        const container = this.getOrientationContainer();
        container.addChild(this._freeSpineCountTimesPrefabNode);
        //this.onWindowResize(this._gameRotationResolution);
        //this._freeSpineCountTimesContainer.addChild(this._freeSpineCountTimesPrefabNode);
        this._freeSpineCountTimesPrefabNode.active = true;//--去觸發onload
        this._freeSpineTimes = FindComponent.findComponentInChildren(this._freeSpineCountTimesPrefabNode, FG_BonusCountTimes);
        this._freeSpineTimes.init();
        this._freeSpineCountTimesPrefabNode.setPosition(v3(0, 0, 0));
        this._freeSpineTimes.setCamp(this._camp);
        this._isWorking = true;
        this.onWindowResize(this._gameRotationResolution);

    }



    public override onWindowResize(orientation: Orientation): void {
        this._gameRotationResolution = orientation;
        if (orientation === Orientation.Landscape) {
            this.changeToLandscape();
        } else if (orientation === Orientation.Portrait) {
            this.changeToPortrait();
        }
        if (this._bonusAniController) {
            this._bonusAniController.setGameScreenRotationResolution(this._gameRotationResolution);
        }
    }

    private moveTargetTo(target: Node, container: Node): void {
        if (!target || !container) return;

        target.removeFromParent(); // 強制脫離當前 parent
        container.addChild(target);
        target.setPosition(0, 0, 0);
    }

    private changeToLandscape(): void {

        const target = this._portraitNode.children[0] || this._landscapeNode.children[0];
        //--直接操作_freeSpineCountTimesPrefabNode不就得了?
        if (target) {
            this._landscapeNode.active = true;
            this._portraitNode.active = false;
            this.moveTargetTo(target, this._landscapeNode);
        }
    }

    private changeToPortrait(): void {

        const target = this._landscapeNode.children[0] || this._portraitNode.children[0];
        if (target) {
            this._portraitNode.active = true;
            this._landscapeNode.active = false;
            this.moveTargetTo(target, this._portraitNode);
        }

    }

    private removeOrientationInsideNode(node: Node): void {
        if (node && node.parent) {
            node.removeFromParent();
        }

    }


    private getOrientationContainer(): Node {
        if (this._gameRotationResolution == Orientation.Landscape) {
            return this._landscapeNode;
        } else if (this._gameRotationResolution == Orientation.Portrait) {
            return this._portraitNode;
        }
        return null;
    }



    private testPos(): void {
        for (let i: number = 0; i < 13; i++) {
            let testNode: Node = new Node();
            let graphic: Graphics = testNode.addComponent(Graphics);
            //-graphic 不受到UIOpacity組件影響~有夠78(color 0-255)
            graphic.fillColor = color(255, 255, 255, 128);
            graphic.rect(-10, -10, 20, 20);
            graphic.fill();
            testNode.layer = Layers.Enum.UI_2D;
            this._bonusParticleContainer.addChild(testNode);
            let wPos = this._bonusAniController.getWorldPosition(i);
            let local = this._bonusParticleContainer.getComponent(UITransform).convertToNodeSpaceAR(wPos);
            testNode.setPosition(local);
        }

    }

    /**
     * 清除本局資料,準備下一局FG
     */
    public cleanThisRoundForNext(): void {
        this._roundForBonusData = [];
        //this._currentMultiplier=0;
    }

    /**
     * 關閉FG,回收資源
     */
    public closeFGBonus(): void {
        this._isWorking = false;
        this._bonusAniController.resetData();
        this._bonusBarPrefabNode.active = false;
        this._targetBonusBarContainer.removeChild(this._bonusBarPrefabNode);
        this._freeSpineTimes.resetData();
        this._freeSpineCountTimesPrefabNode.active = false;
        this.removeOrientationInsideNode(this._freeSpineCountTimesPrefabNode);
        AnimationControllersPoolManager.getInstance().pushInstancePrefabNodeToPool(CollectionBoxNode_Name, this._bonusBarPrefabNode);
        AnimationControllersPoolManager.getInstance().pushInstancePrefabNodeToPool(BonusCountTimes_Name, this._freeSpineCountTimesPrefabNode);
        this._bonusParticlePool.destroyAllParticles();//--清除所有的particle
        this.resetData();
    }

    public changeFgCountTimes(count?: number): void {
        let showCount = (count) ? count : this._totalRounds;
        this._freeSpineTimes.setFgCountTimes(showCount);
    }

    //--進行下一輪,扣除次數顯示
    public changeTotalRounds(): void {
        this._totalRounds--;
        this.changeFgCountTimes();
    }

    /**
     * 
     * @param cards //symbolData: [[3, 2, 0], [3, 0, 4], [3, 0, 1], [0, 1, 2], [0, 4, 5], [0, 2, 3]],
     */
    public setSingleRoundData(cards: number[][]): boolean {
        if (this._isWorking) {
            //this._currentRounds++;
            /*
            // 使用 Set 提高查找效率
            const specialSymbolSet = new Set(SPECIAL_SYMBOL_LIST);

            // 將二維陣列攤平成一維陣列
            const flattenedCards = cards.flatMap(card => card);

            // 過濾特殊符號
            const specialSymbols = flattenedCards.filter(symbolId => specialSymbolSet.has(symbolId));

            // 計算特殊符號數量
            const specialSymbolCount = specialSymbols.length;

            // 累加到 bonus 計數器
            this._currentBonusCount += specialSymbolCount;
            */


            let bonusData: BonusInfo;
            this._currentRounds++;
            for (let i = 0; i < cards.length; i++) {
                const card = cards[i];
                for (let j: number = 0; j < card.length; j++) {
                    const symbolId = card[j];
                    if (SPECIAL_SYMBOL_LIST.includes(symbolId)) {
                        //this._currentBonusCount++;--播放的時候在累加
                        //--擷取資料提供播放相關動畫
                        bonusData = {
                            reelIndex: i,
                            iconIndex: j,
                            startWPos: null,
                            endWPos: null
                        };
                        this._roundForBonusData.push(bonusData);//--這是要算的資料
                    }
                }
            }
            //--取得預先計算的倍率(僅限該輪)
            //this._currentBonusCountForCalc = this._totalRounds + this._roundForBonusData.length;
            if (this._roundForBonusData.length > 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    //--取得預先算好的倍率
    public getCurrentRoundBonusData(): BonusInfoForRound {
        return { bonusIndex: this._roundForBonusData, multiplier: this._currentMultiplier };
    }

    public setWorldPosForRound(pos: Vec3[]): void {

        const len: number = pos.length;
        const roundForBonusDataLen: number = this._roundForBonusData.length;
        const uiTransform = this._bonusParticleContainer.getComponent(UITransform);
        for (let i: number = 0; i < len; i++) {
            for (let j: number = 0; j < roundForBonusDataLen; j++) {
                const localPos = uiTransform.convertToNodeSpaceAR(pos[i]);
                this._roundForBonusData[j].startWPos = localPos; //---換localPos要給particle用的(目標起點,終點)  
            }
        }
    }

    public setSingleWorldPosByIndex(reelIndex: number, iconIndex: number, pos: Vec3): void {

        for (let bonusData of this._roundForBonusData) {
            if (bonusData.reelIndex == reelIndex && bonusData.iconIndex == iconIndex) {
                const localPos = this._bonusParticleContainer.getComponent(UITransform).convertToNodeSpaceAR(pos);
                bonusData.startWPos = localPos;
                break;
            }
        }
    }

    public async playSingleBonusEffect(reelIndex: number, iconIndex: number): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            let bonusData: BonusInfo = this.getBonusData(reelIndex, iconIndex);
            //--當取得的數量>最大數量時,不再啟動累計燈號,只會做fg局號的累加(最大燈號上限=13)
            if (this._currentBonusCount < this._maximumCount) {
                const index = this._currentBonusCount;
                this.calculateBonusCount();
                this.calulateTotalRounds(1);
                this.changeFgCountTimes();//--計算是否新增局數,吻合條件會顯示
                await this.shootParticle(bonusData, index);//-噴particle
                this._bonusAniController.playSingleItemAni(index);//--上方蒐集bar開啟燈號
                this.getMultiplier();
                //await GameUtils.Defer(400);
                await GameUtils.DeferByTweenPromise(400 / 1000);//--原本單位是毫秒現在換算成秒
                resolve();
            } else {
                //AudioManager.instance.playSound(SoundList.MoneyCollect, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
                this.calulateTotalRounds(1);
                this.changeFgCountTimes();//--計算是否新增局數,吻合條件會顯示
                resolve();
            }
        });
    }




    private async shootParticle(data: BonusInfo, index: number): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {

            //let particleNode = AnimationControllersPoolManager.getInstance().getPrefabNode('FX_bonus_particle');
            let particleNode = await this._bonusParticlePool.getParticleNode();
            particleNode.active = true;
            this._bonusParticleContainer.addChild(particleNode);
            particleNode.setPosition(data.startWPos);
            let ani = FindComponent.findComponentInChildren(particleNode, AnimationController);
            ani.init();
            ani.playAni('FX_bonus_collect_loop_ani');
            let particleEmitter = FindComponent.findComponentInChildren(particleNode, ParticleSystem);
            //let particleEmitter = FindComponent.findComponentInChildren(particleNode, ParticleExtension);
            //---要看引擎的source code
            //---幹.particle 在node被active=true的時候會觸發onEnable,裡面自己會處理(自己需要再做清除 this.processor.clear())
            particleEmitter.clear();
            particleEmitter.play();
            //particleEmitter.onEnable();
            const endPos = this._bonusAniController.getWorldPosition(index);
            const endLocalPos = this._bonusParticleContainer.getComponent(UITransform).convertToNodeSpaceAR(endPos);
            let startPos = particleNode.getPosition();

            let amplitude: number = 50; // 降低振幅
            let frequency: number = 0.5; // 降低頻率
            const tempVec3 = new Vec3();
            //AudioManager.instance.playSound(SoundList.MoneyCollect, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
            tween(particleNode)
                .to(0.4, {}, {
                    onUpdate: (target, ratio) => {
                        tempVec3.x = startPos.x + (endLocalPos.x - startPos.x) * ratio; // 水平移動到終點
                        tempVec3.y = startPos.y + (endLocalPos.y - startPos.y) * ratio + Math.sin(ratio * frequency * Math.PI * 2) * amplitude; // 垂直正弦波移動
                        particleNode.setPosition(tempVec3);
                    }
                })
                .call(() => {
                    //ani.playAni('FX_bonus_collect_trigger_ani');
                    ani.playAniWithCallBack(() => {

                        //particleEmitter.stop();
                        //particleEmitter.clear();
                        //particleEmitter.stopEmitting();
                        //this._bonusParticleContainer.removeChild(particleNode);
                        //ani.resetData();
                        //AnimationControllersPoolManager.getInstance().pushInstancePrefabNodeToPool('FX_bonus_particle', particleNode);
                        //---以上為舊版本的
                        this._bonusParticleContainer.removeChild(particleNode);
                        this._bonusParticlePool.recycleParticleNode(particleNode);

                    }, 'FX_bonus_collect_trigger_ani');
                    //--recycle particle
                    resolve();
                })
                .start()
        });


    }



    private bezierMotion2(targetNode: Node, endLocalPos: Vec3): void {

        let startpos = targetNode.getPosition();
        /*
        let offset = v3(
            (endpos.x - startpos.x) * 0.3, //  0.3 来控制偏移幅度
            (endpos.y - startpos.y) * 0.5, //  0.5 来控制偏移幅度
            0
        );

        let controlpos1 = v3(startpos.x + offset.x, startpos.y + offset.y, 0);
        let controlpos2 = v3(endpos.x - offset.x, endpos.y - offset.y, 0);
        */
        let controlpos1 = v3(startpos.x / 2, 20);
        let controlpos2 = v3(startpos.x / 2, 20);

        tween({ a: 0 })
            .tag(1)
            .to(0.4, { a: 100 },
                {
                    onUpdate: (target, ratio) => {
                        //--這邊的ratio是0~1的值,代表了tween的進度 
                        let bezierX = bezier(startpos.x, controlpos1.x, controlpos2.x, endLocalPos.x, ratio);
                        let bezierY = bezier(startpos.y, controlpos1.y, controlpos2.y, endLocalPos.y, ratio);
                        targetNode.setPosition(bezierX, bezierY, 0);
                    },

                    //@ts-ignore
                    progress: (start: number, end: number, current: number, ratio: number) => {
                        //console.log('QQprogress', start, end, current, ratio);
                    },
                    easing: 'smooth' //--這邊的easing是用於bezier的
                })
            .call(() => { /*console.log('complete')*/ })
            .start();

    }


    private calculateBonusCount(count?: number): void {
        if (count) {
            this._currentBonusCount += count;
        } else {
            this._currentBonusCount++;
        }
        //--最大上限
        if (this._currentBonusCount > this._maximumCount) {
            this._currentBonusCount = this._maximumCount;
        }
    }

    private calulateTotalRounds(index: number): void {
        this._totalRounds += index;
    }

    private getBonusData(reelIndex: number, iconIndex: number): BonusInfo {
        for (let i: number = 0; i < this._roundForBonusData.length; i++) {
            const item = this._roundForBonusData[i];
            if (item.reelIndex == reelIndex && item.iconIndex == iconIndex) {
                this._roundForBonusData.splice(i, 1);
                return item;
            }
        }
    }

    private getCurrentCampSkinName(): string {
        return this._camp == 0 ? 'FG_01' : 'FG_02';
    }



    private getMultiplier(value?: number): void {
        const targetCount: number = value ? value : this._currentBonusCount;
        let multiplier: number | undefined = undefined;
        let maxKey: number = -1;// 找到小於等於 targetCount 的最大鍵
        for (const key in BONUS_MULTIPLIER) {
            const numKey: number = parseInt(key);
            if (numKey <= targetCount && numKey > maxKey) {
                maxKey = numKey;
                multiplier = BONUS_MULTIPLIER[numKey];
            }
        }

        if (multiplier !== undefined) {
            this._currentMultiplier = multiplier;
        }
    }
}



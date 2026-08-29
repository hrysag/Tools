import { _decorator, CCString, Component, Node, Vec3, UITransform } from 'cc';
import {
    AnimationControllersPoolManager,
    GameUtilsTools,
    AnimationController,
    DYN_NODE_PROPERTIES,
    IPlayAniData
} from '../../ReferencePath';
import { AniSysTools } from '../../MyUtils/AnimationSystemV2/AniTools/AniSysTools';
import { IWildMovementData, IBasicMovementData, IWildMovementDataNew } from '../../Slot/ISlotDefinitionData';
import { WildFXCtrl } from './Class/WildFXCtrl';
import { WildMovementCtrl } from './Class/WildMovementCtrl';
import { DYN_WILD_INFO } from 'db://assets/Game1016/Script/DefinitionGameData1016/GameConfigInstance';
import { GlobalAccessReader } from '../../DefinitionGameData1016/AccessDefs/GlobalAccess';
import { GameGlobalData, GameGlobalKeys } from '../../DefinitionGameData1016/GameGlobalData1016';
import { AsyncScope } from '../../MyUtils/AsyncScope/AsyncScope';
import { WildLayerCtrl } from './WildLayerCtrl';
export interface IWildMoveData {
    reelFXWpos: Vec3,
    WildMovementData: IWildMovementDataNew,
    wildNode?: Node
}
const { ccclass, property } = _decorator;
const WILD_EXPECT_ANI_ID = 'Expect';
const SIGNAL_KEY = 'WildMoveFXCtrl_Signal';
const SIGNAL_PROCESS_MOVE_KEY = 'WildMoveFXCtrl_Signal_Process_Move';
const SIGNAL_PROCESS_NO_MOVE_KEY = 'WildMoveFXCtrl_Signal_Process_No_Move';
const DEBUG_TITLE = 'WildMoveFXCtrl';
@ccclass('WildMoveFXCtrl')
export class WildMoveFXCtrl extends Component {

    @property({ type: Node, visible: true, displayName: 'wild位移上層FX表演區域', tooltip: 'wild位移上層FX表演區域' })
    private _wildMoveFXContainer: Node = null;

    @property({ type: Node, visible: true, displayName: 'wild位移表演區域', tooltip: '棄用' })
    private _wildMoveContainer: Node = null;

    @property({ type: CCString, visible: true, displayName: 'wild位移動畫Prefab id', tooltip: 'wild位移動畫PrefabId' })
    private _wildMoveAnimationPrefabId: string = 'Wild_Move_Animation';

    //@property({ type: WildLayerCtrl, visible: true, displayName: 'WildLayerCtrl', tooltip: '處理wildLayer顯示的控制項目' })
    private _wildLayerCtrl: WildLayerCtrl = null;

    private _wildFXCtrl: WildFXCtrl;
    private _wildMovementCtrl: WildMovementCtrl;

    private _wildMveDataMap: Map<number, IWildMoveData> = new Map();
    private _dirtyFlag: boolean = false;
    private _async: AsyncScope;//--註冊管理使用promise/delayTime工具  

    protected onLoad(): void {
        if (!this._dirtyFlag) {
            this._dirtyFlag = true;
            this.init();
        }
    }

    public init(): void {

        if (this._dirtyFlag) {
            //this._wildFXCtrl = new WildFXCtrl(this._wildMoveFXContainer, this._wildMoveAnimationPrefabId);
            this._wildFXCtrl = new WildFXCtrl(this._wildMoveAnimationPrefabId);
            this._wildMovementCtrl = new WildMovementCtrl(this._wildMoveContainer);
            //--20260304--new:新增需求需要把wild回歸右壓左的設計,取消進行表演時提至最上層,結束後在右壓左
            /*
            if (this._wildMoveNewContainer) {
                this._wildMovementCtrl.wildMoveNewContainer = this._wildMoveNewContainer;
            }*/

            //--20260304--new
            this._async = AsyncScope.getInstance();
        }
    }

    public register(value: WildLayerCtrl): void {

        this._wildLayerCtrl = value;

        if (this._wildMovementCtrl) {
            this._wildMovementCtrl.wildLayerCtrl = this._wildLayerCtrl;
        }

        if (this._wildFXCtrl) {
            this._wildFXCtrl.wildLayerCtrl = this._wildLayerCtrl;
        }
    }

    public reset(): void {
        this._wildMveDataMap.clear();
        this._wildMovementCtrl.reset();
    }

    public setWildMoveData(moveData: IWildMoveData): void {

        const reelIndex = moveData.WildMovementData.reelIndex;
        const wildNode = moveData.wildNode;
        //this._wildMovementCtrl.addWildAniNode(wildNode, moveData.WildMovementData.startWpos);
        this._wildMovementCtrl.addWildToMoveLayer(reelIndex, wildNode, moveData.WildMovementData.startWpos);
        if (!moveData.WildMovementData.isYoyo) {
            //-全軸移動
            this._wildFXCtrl.initWildAniLayer(reelIndex, moveData.reelFXWpos);
        }

        this._wildMveDataMap.set(reelIndex, moveData);
        //-20260304-取消使用,因為需求改變了
        //this.setWildSiblingIndex();
    }


    /**
     * <檢查指定軸上,指定iconIndex的wildNode是否存在>
     * 這個在位移前在wildMovementData當中>>
     * iconIndex-->原始在盤面的位置
     * finalIconIndex-->位移到完整軸後的位置
     * 以上這2筆資料在位移後也不會改變
     * 但是wildNode裡面的
     * DYN_WILD_INFO.WILD_CONTINUE->連續軸的資料(會包含reelIndex,iconIndex,symbolId)
     * DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO->symbol資料
     * 位移到完整軸後會被改寫過
     * 而聽牌他是只要有wild不管幾是否連續都會是吻合條件
     * @param reelId 
     * @param iconIndex 
     * @returns 
     */
    public checkExistWildNode(reelId: number, iconIndex: number): boolean {

        let exist: boolean = false;
        const wildMoveData = this._wildMveDataMap.get(reelId);
        const compare = `${reelId}:${iconIndex}:${9}`;//--擠到node裡面
        if (wildMoveData) {
            //const wildMovementData=wildMoveData.WildMovementData;
            const wildNode = wildMoveData.wildNode;
            const continueWild = wildNode[DYN_WILD_INFO.WILD_CONTINUE];
            for (const key of continueWild) {
                if (key === compare) {
                    exist = true;
                    break;
                }
            }

            //exist=true;

            /**
             * 如果是位移的情況,他註冊的iconIndex是原本的index,而不是位移後的index.
             * 而在位移後, iconList的index是被rewrite過的.
             * 所以在FG的情況下,他是先做次數的計算,然後才做得分,此時的資料已經是重寫過位置的
             * 在NG/RS是先做得分,然後才做次數,所以iconIndex不會有問題
             * 1007--
             * <<要檢查連續軸的資料去比對key才可以以確定是否存在>>
             */
            //if(wildMovementData.iconIndex===iconIndex)exist=true;
        }
        return exist;
    }

    //--取得指定軸上,指定iconIndex的wildNode,並轉移到表現層
    //--20260306-old流程,取消,直接在layer上做切換
    public getExistWildNodeAndTransferLayer(reelId: number): IWildMoveData | null {

        const wildMoveData = this._wildMveDataMap.get(reelId);
        if (wildMoveData) {
            const wpos = this._wildMovementCtrl.removeWildAniNodeAndGetWpos(reelId);
            this._wildMveDataMap.delete(reelId);
            wildMoveData.WildMovementData.startWpos = wpos;
            //console.log('afterTransferLayer', wpos, this._wildMveDataMap);
            return wildMoveData;
        }
        return null;
    }

    //--20260304--new:新增需求需要把wild回歸右壓左的設計,取消進行表演時提至最上層,結束後在右壓左
    public removeAndGetWildMoveData(reelId: number): IWildMoveData | null {

        const wildMoveData = this._wildMveDataMap.get(reelId);
        if (wildMoveData) {
            this._wildMveDataMap.delete(reelId);
            return wildMoveData;
        }
        return null;
    }


    /**
     * 在該盤面沒有任何中獎的狀態下(此時wild還沒轉移到runningPool裡面,所以要直接提供handoff資料)
     * TIPS:
     * 如果_wildMveDataMap裡面的WildMovementData.yoyo=true,表示<沒有>位移到完整軸的模式
     * 此時註冊的reelIndex與iconIndex是原本的位置,直接拿reelIndex/iconIndex
     * 如果_wildMveDataMap裡面的WildMovementData.yoyo=false,表示有位移到完整軸的模式
     * 要拿wildNode裡面的DYN_WILD_INFO.WILD_CONTINUE裡面的最後一筆資料(或是拿iconIndex最大的那筆資料(應該會是4))
     */
    public getNoWinWildHandoffData(): IPlayAniData[] {

        const wildPlayData: IPlayAniData[] = [];
        for (const [, mapValue] of this._wildMveDataMap) {
            const { reelIndex, iconIndex, symbolId, isYoyo } = mapValue.WildMovementData;
            let handoffIconIndex = iconIndex;
            if (mapValue.wildNode[DYN_NODE_PROPERTIES.LOCKED]) {
                continue;//--有位移整軸的不交還
            }
            if (!isYoyo) {
                //--有位移到完整軸的模式
                const wildNode = mapValue.wildNode;
                const continueWild = wildNode[DYN_WILD_INFO.WILD_CONTINUE];
                const lastPart = continueWild[continueWild.length - 1];
                const parts = lastPart.split(':');
                handoffIconIndex = parseInt(parts[1]);
            }
            const playData: IPlayAniData = {
                reelIndex: reelIndex,
                iconIndex: handoffIconIndex,
                symbolId: symbolId,
                aniId: '',
                tokenId: '',
            }
            wildPlayData.push(playData);
        }
        return wildPlayData;
    }

    //--找出沒有中獎的wild
    public findWildWithoutWin(winData: IPlayAniData[]): IPlayAniData[] {

        const wildPlayData: IPlayAniData[] = [];
        const aKeySet = new Set<string>(
            winData.map(a => `${a.reelIndex}_${a.iconIndex}_${a.symbolId}`)
        );
        for (const [, mapValue] of this._wildMveDataMap) {
            const { reelIndex, iconIndex, symbolId } = mapValue.WildMovementData;
            const key = `${reelIndex}_${iconIndex}_${symbolId}`;
            if (!aKeySet.has(key)) {
                const playData: IPlayAniData = {
                    reelIndex: mapValue.WildMovementData.reelIndex,
                    iconIndex: mapValue.WildMovementData.iconIndex,
                    symbolId: mapValue.WildMovementData.symbolId,
                    aniId: '',
                    tokenId: '',
                }
                wildPlayData.push(playData);
            }
        }
        return wildPlayData;
    }

    //--會進來的都是檢查過確認已經存在的wildNode(請先呼叫checkExistWildNode確認存在後再呼叫該方法)
    public playForecastWildAni(reelIndex: number): void {

        const wildData = this._wildMveDataMap.get(reelIndex);
        if (wildData) {
            const wildAniNode = wildData.wildNode;
            const aniCtrl: AnimationController = wildAniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL];
            wildAniNode[DYN_NODE_PROPERTIES.IS_PLAYING_EXPECT] = true;
            aniCtrl?.playAni({ aniState: WILD_EXPECT_ANI_ID });
        }
    }

    public stopForecastWildAni(reelIndex: number): void {

        const wildData = this._wildMveDataMap.get(reelIndex);
        if (wildData) {
            const wildAniNode = wildData.wildNode;
            const aniCtrl: AnimationController = wildAniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL];
            aniCtrl?.goBackToDefault();
        }
    }

    public stopAllForecastWildAni(): void {

        for (const [, wildData] of this._wildMveDataMap) {
            const wildAniNode = wildData.wildNode;
            if (wildAniNode[DYN_NODE_PROPERTIES.IS_PLAYING_EXPECT]) {
                wildAniNode[DYN_NODE_PROPERTIES.IS_PLAYING_EXPECT] = false;
                const aniCtrl: AnimationController = wildAniNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL];
                aniCtrl?.goBackToDefault();
            }
        }
    }

    //--位移wild
    public async triggerWildMoveAnimation(reelIndex: number): Promise<void> {

        const wildMoveData: IWildMoveData = this._wildMveDataMap.get(reelIndex);
        //const beforeMoveWild = GameUtilsTools.getTimeStamp();
        const reel = await this._wildMovementCtrl.triggerWildMoveAnimation(reelIndex, wildMoveData, this._wildFXCtrl.triggerWildFrontBgAniFrameEvtBack);
        //const afterMoveWild = GameUtilsTools.getTimeStamp();
        //GameUtilsTools.debugLog('WILD_TIME', 'wildMove_Time', { beforeMoveWild, afterMoveWild,during:afterMoveWild-beforeMoveWild }, 'log');
        //--這邊動畫速率沒有改變的話,這個會來不及播放就被回收了
        this._wildFXCtrl.removeFX(reel);
        //--其他流程接上會有執行前等待~所以這個不需要了20251214
        /*
        const afterWildWait = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.wild?.afterWildWait);
        //--現在是否為中斷狀態
        const nowInterruptMode = GlobalAccessReader.getGlobalData(GameGlobalKeys.InterruptProcess);
        if (afterWildWait > 0 && !nowInterruptMode) {
            await this.waitSeconds(SIGNAL_PROCESS_MOVE_KEY, afterWildWait);
        }*/
    }

    public async triggerWildNoMoveAnimation(reelIndex: number): Promise<void> {

        const wildMoveData: IWildMoveData = this._wildMveDataMap.get(reelIndex);
        await this._wildMovementCtrl.triggerNoWildMoveAnimation(reelIndex, wildMoveData);
        //--其他流程接上會有執行前等待~所以這個不需要了20251214
        /*
        const afterWildWait = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.wild?.afterWildWait);
        //--現在是否為中斷狀態
        const nowInterruptMode = GlobalAccessReader.getGlobalData(GameGlobalKeys.InterruptProcess);
        if (afterWildWait > 0 && !nowInterruptMode) {
            await this.waitSeconds(SIGNAL_PROCESS_NO_MOVE_KEY, afterWildWait);
        }*/

    }

    /**
     * 
     * 等待時間不可取消--企劃指名
     * 所以這邊改用waitSecondsRaw
     * @param processKey 
     * @param time 
     */
    private async waitSeconds(processKey: string, time: number): Promise<void> {

        /*
        const signal = this._async.createAbortScope(SIGNAL_KEY);
        const cancel = () => {
            //--取消後續處理..要幹嘛再說.
        }
        const p = this._async.waitSecondsTracked(time, processKey, cancel, true, signal, SIGNAL_KEY);
        await p.promise;
        */
        await this._async.waitSecondsRaw(time);
    }



    /**
     * 透過this._wildMoveContainer.children裡面的
     * aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex
     * 來設定node.siblingIndex
     * reelIndex越大,siblingIndex越大(越上面)
     * 20260304-取消使用,因為需求改變了
     */
    private setWildSiblingIndex(): void {


        const children = this._wildMoveContainer.children;
        const len = children.length;
        if (len > 0) {
            const reelIndexList: number[] = [];
            for (let i = 0; i < len; i++) {
                const aniNode = children[i];
                const symbolIconInfo = aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO];
                if (symbolIconInfo) {
                    reelIndexList.push(symbolIconInfo.reelIndex);
                }
            }
            reelIndexList.sort((a, b) => a - b);
            for (let i = 0; i < len; i++) {
                const aniNode = children[i];
                const symbolIconInfo = aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO];
                if (symbolIconInfo) {
                    const reelIndex = symbolIconInfo.reelIndex;
                    const siblingIndex = reelIndexList.indexOf(reelIndex);
                    //aniNode.setSiblingIndex(siblingIndex);
                    aniNode.setSiblingIndex(len - 1 - siblingIndex);
                }
            }
        }
    }


}



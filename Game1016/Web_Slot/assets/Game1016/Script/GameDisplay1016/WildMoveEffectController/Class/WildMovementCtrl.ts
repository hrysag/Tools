import { _decorator, CCString, Component, Node, Vec3, UITransform, v3, TweenEasing, tween, Game } from 'cc';
import { IWildMovementDataNew } from '../../../Slot/ISlotDefinitionData';
import { IWildMoveData } from '../WildMoveFXCtrl';
import {
    GameUtilsTools,
    DYN_NODE_PROPERTIES,

} from '../../../ReferencePath';
import { DYN_WILD_INFO } from '../../../DefinitionGameData1016/GameConfigInstance';
import { GlobalAccessReader } from '../../../DefinitionGameData1016/AccessDefs/GlobalAccess';
import { GameGlobalKeys } from '../../../DefinitionGameData1016/GameGlobalData1016';
import { AsyncScope } from '../../../MyUtils/AsyncScope/AsyncScope';
import { ShowResultProcessKey1016 } from '../../../DefinitionGameData1016/FlowProcessKey1016';
import { SoundList, AudioSourceList } from '../../../DefinitionGameData1016/SoundList1016';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/ModuleEntry';
import { WildLayerCtrl } from '../WildLayerCtrl';
//import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';

const WILD_LIGHT_MOVE_ANIMATION_TYPE = 'Transfer';
const WILD_LIGHT_NO_MOVE_ANIMATION_TYPE = 'No_transfer';
const DEBUG_TITLE = 'WildMovementCtrl';

export class WildMovementCtrl {

    private _moveWildResolvePromise: (() => void) | null;
    private _async: AsyncScope;//--註冊管理使用promise/delayTime工具  
    private _signal: AbortSignal;
    private _isInterrupting: boolean = false;
    private _playingSound: boolean = false;
    private _wildMoveNewContainer: Node = null;//--20260304--取消:新增需求需要把wild回歸右壓左的設計,取消進行表演時提至最上層,結束後在右壓左
    private _wildLayerCtrl: WildLayerCtrl = null;//--20260304--new:新增需求需要把wild回歸右壓左的設計,取消進行表演時提至最上層,結束後在右壓左

    constructor(
        private _wildMoveContainer: Node,
    ) {
        this._async = AsyncScope.getInstance();
    }

    set wildMoveNewContainer(value: Node) {
        this._wildMoveNewContainer = value;
    }

    set wildLayerCtrl(value: WildLayerCtrl) {
        this._wildLayerCtrl = value;
    }

    public reset(): void {
        this._playingSound = false;
    }

    public onFlowAbortCallback = (flowKey: string) => {
        //console.log('===WildMovementCtrl onFlowAbortCallback===', flowKey, this._async.dumpAllAsyncState());
    };

    //--註冊取消的函示
    private onCancelAsync = (label: string) => {
        //GameUtilsTools.debugLog(DEBUG_TITLE, `[onCancel] 取消函式被呼叫`, { label });
        //console.log();
        this._moveWildResolvePromise?.();
    }


    public forceResolveMoveWildPromise(): void {

        if (this._moveWildResolvePromise) {
            this._moveWildResolvePromise();
            this._moveWildResolvePromise = null;
        }
    }

    //--20260306-old流程,取消,直接在layer上做切換
    public addWildAniNode(aniNode: Node, wpos: Vec3): void {

        this._wildMoveContainer.addChild(aniNode);
        const uiTransform = this._wildMoveContainer.getComponent(UITransform);
        //this._wildMoveNewContainer.addChild(aniNode);//--20260304--new:新增需求需要把wild回歸右壓左的設計,取消進行表演時提至最上層,結束後在右壓左
        //const uiTransform = this._wildMoveNewContainer.getComponent(UITransform);
        const localPos = uiTransform.convertToNodeSpaceAR(wpos);
        aniNode.setPosition(localPos);
    }

    //--以下為舊有的流程-自表演容器當中拔除(20260306-old流程,取消)
    public removeWildAniNodeAndGetWpos(reelIndex: number): Vec3 | null {

        const children = this._wildMoveContainer.children;

        for (const node of children) {
            const symbolInfo = node[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO];
            if (symbolInfo && symbolInfo.reelIndex === reelIndex) {
                const lPos = node.position.clone();
                const wpos = this._wildMoveContainer.getComponent(UITransform).convertToWorldSpaceAR(lPos);
                node.removeFromParent();
                return wpos;
            }
        }
        return null;

    }

    public addWildToMoveLayer(reelIndex: number, aniNode: Node, wpos?: Vec3): void {
        this._wildLayerCtrl.setWildToMoveLayer(reelIndex, aniNode, wpos);
    }

    public addWildToWholeLayer(reelIndex: number, aniNode: Node): void {
        this._wildLayerCtrl.setWildToWholeLayer(reelIndex, aniNode);
    }

    public addWildToNoMoveWholeLayer(reelIndex: number, aniNode: Node): void {
        this._wildLayerCtrl.setWildToNoMoveWholeLayer(reelIndex, aniNode);
    }

    public async triggerNoWildMoveAnimation(reelId: number, moveData: IWildMoveData): Promise<void> {

        const wildMovementData: IWildMovementDataNew = moveData.WildMovementData;
        const wildNode: Node = moveData.wildNode;
        //----取出(這邊startIndex已經經過+1(getWildMovementData裡面),因為算的時候沒有上下兩個預備位)
        let finalLPos: Vec3;
        let finalDestination: Vec3;
        //--20260305--new
        const reelNodeContainer = this._wildLayerCtrl.getMoveContainerByReelIndex(reelId);
        //const uiTransform = this._wildMoveContainer.getComponent(UITransform);
        const uiTransform = reelNodeContainer.getComponent(UITransform);
        finalLPos = uiTransform.convertToNodeSpaceAR(wildMovementData.finalDestinationWPos);

        finalDestination = finalLPos.clone().add(v3(0, wildMovementData.offsetYLocal, 0));
        //console.log('==========NoTransferAnimation============', wildNode, wildMovementData, this._singleWildGroupResultData, this._iconList, this);
        wildNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL].playAni({ aniState: WILD_LIGHT_NO_MOVE_ANIMATION_TYPE });

        const gameDelayTime = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.wild?.noMove);
        const signal = this._async.createAbortScope(ShowResultProcessKey1016.Wild_NO_MOVEMENT, this.onFlowAbortCallback);
        const tp = this.tweenNoTransferAction(wildNode, finalDestination, gameDelayTime);
        const callbackWrapper = (value: any) => {
            tp.c(true);
            const node = value.outValue.target as Node;
            node.setPosition(value.outValue.pos);
        }

        const processTween = this._async.registerCancelablePromise(
            ShowResultProcessKey1016.Wild_NO_MOVEMENT + `_${this._testCount}`,
            tp.p,
            callbackWrapper,
            signal,
            ShowResultProcessKey1016.Wild_NO_MOVEMENT,
            { target: wildNode, pos: wildNode.position.clone() }
        )

        const flag = GlobalAccessReader.getGlobalData(GameGlobalKeys.InterruptProcess);
        //if(this._isInterrupting)
        if (flag) {

            this._async.abortAll(ShowResultProcessKey1016.Wild_NO_MOVEMENT);
        }

        await processTween;
    }

    /**
     * showAniController call這個
     * showAniController 同時也在controller裡面撥放啟動光束
     */
    private _testCount = 0;
    public async triggerWildMoveAnimation(reelId: number, moveData: IWildMoveData, callBack: (...args) => void): Promise<number> {
        // 觸發wild動畫
        const wildNode: Node = moveData.wildNode;
        const wildMovementData: IWildMovementDataNew = moveData.WildMovementData;

        let finalLPos: Vec3;
        let finalDestination: Vec3;
        //--20260305--new
        const reelNodeContainer = this._wildLayerCtrl.getMoveContainerByReelIndex(reelId);
        //const uiTransform = this._wildMoveContainer.getComponent(UITransform);
        const uiTransform = reelNodeContainer.getComponent(UITransform);
        finalLPos = uiTransform.convertToNodeSpaceAR(wildMovementData.finalDestinationWPos);
        finalDestination = finalLPos.clone().add(v3(0, wildMovementData.offsetYLocal, 0));

        wildNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL].playAniWithFrameEvtCallBack(callBack, () => { }, false, { aniState: WILD_LIGHT_MOVE_ANIMATION_TYPE }, { extraArgs: reelId });

        //--沒中獎才要取NG的時間
        //const gameDelayTime =(gameState==GameState.NORMAL)?
        //GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.wild?.others.move_Ng):
        //GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.wild?.move);

        const gameDelayTime = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.wild?.move);
        const signal = this._async.createAbortScope(ShowResultProcessKey1016.Wild_MOVEMENT, this.onFlowAbortCallback);
        this._testCount++;
        const tp = this.tweenWildAction(wildNode, finalDestination, gameDelayTime, 'backInOut');
        const callbackWrapper = (value: any) => {
            tp.c(true);
            const node = value.outValue.target as Node;
            node.setPosition(value.outValue.pos);
        }
        const processTween = this._async.registerCancelablePromise(
            ShowResultProcessKey1016.Wild_MOVEMENT + `_${this._testCount}`,
            tp.p,
            callbackWrapper,
            signal,
            ShowResultProcessKey1016.Wild_MOVEMENT,
            { target: wildNode, pos: finalDestination }
        )

        const flag = GlobalAccessReader.getGlobalData(GameGlobalKeys.InterruptProcess);
        if (flag) {
            this._async.abortAll(ShowResultProcessKey1016.Wild_MOVEMENT);
        }

        await processTween;
        wildNode[DYN_NODE_PROPERTIES.SWITCH] = null;
        wildNode[DYN_NODE_PROPERTIES.LOCKED] = true;
        wildNode[DYN_WILD_INFO.WILD_CONTINUE] = this.createContinue(reelId);
        wildNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO] =
        {
            symbolId: 9,
            reelIndex: reelId,
            iconIndex: 4
        };
        return reelId;

    }

    private createContinue(reelIndex: number): string[] {

        const aryContinue: string[] = [];
        for (let i: number = 1; i <= 4; i++) {
            const key = `${reelIndex}:${i}:${9}`;//--擠到node裡面
            aryContinue.push(key);
        }
        return aryContinue;
    }

    //--使用外部可以中斷的tweenPromise
    /**
     * 
    const h = this.tweenWildActionHandle(target, finalDestination, duration, easing);
    this._moveWildResolvePromise = () => h.cancel(true); // 仍可保留給別的流程用
    return h.promise;
     */
    private tweenWildAction(target: Node, finalDestination: Vec3, duration: number, easing?: TweenEasing): { p: Promise<void>, c: (resolveAnyway?: boolean) => void } {

        if (!this._playingSound) {
            this._playingSound = true;
            AudioManager.instance.playSound(SoundList.wild_move, SOUND_TYPE.ONE_SHOT, AudioSourceList.WildAS);
        }
        const { promise, cancel } = GameUtilsTools.TweenActionPromiseWithCancel(
            target,
            duration,
            { position: finalDestination },
            easing
        );
        // 保存 cancel 以便外部中斷
        //this._moveWildResolvePromise = () => cancel(true);
        return { p: promise, c: cancel };
    }


    //--使用可中斷的tweenPromise處理
    private tweenNoTransferAction(target: Node, toPos: Vec3, duration: number): { p: Promise<void>, c: (resolveAnyway?: boolean) => void } {

        //--20251125新增 wild移動失敗音效
        if (!this._playingSound) {
            this._playingSound = true;
            AudioManager.instance.playSound(SoundList.Wild_Ready, SOUND_TYPE.ONE_SHOT, AudioSourceList.WildAS);
        }
        const fromPos = target.position.clone();
        const toPosTween = tween(target).to(duration, { position: toPos }, { easing: 'backIn' });
        const backPosTween = tween(target).to(duration, { position: fromPos }, { easing: 'backOut' });
        const { promise, cancel } = GameUtilsTools.TweenActionSequencePromiseWithCancel(target, [
            toPosTween,
            backPosTween
        ]);
        //this._moveWildResolvePromise = () => cancel(true);
        return { p: promise, c: cancel };
    }

}
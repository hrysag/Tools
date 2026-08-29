import { _decorator, find, Node, tween, UIOpacity, v3 } from 'cc';
import { SpineController } from '../../MyUtils/AnimationSystem/Components/SpineController';
import { FindComponent } from '../../MyUtils/FindComponent';
import { Fg_UI_Component } from './FG_Ui/Fg_UI_Component';
import { CanvasRender } from './CaptureNodeScreen/Capture2test';
import { TransitionsState } from '../../DefinitionGameData/GameStateConfigDef';
import { AnimationControllersPoolManager } from '../../MyUtils/AnimationSystem/AnimationControllersPoolManager';
import { Orientation } from '../../../../../Scripts/Utils/Config';
import { FG_SpriteController } from '../ShowContainer/Components/FG_SpriteController';
import { FindNode } from '../../MyUtils/FindNode';
import { GameState } from '../../DefinitionGameData/GameStateConfigDef';
import { AutoOrientAndSetPos } from '../ShowContainer/Components/AutoOrientAndSetPos';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
import { SoundList, MusicList, AudioSourceList } from '../../DefinitionGameData/SoundList';
import { AniCtrlPropDef } from '../../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase';
const { ccclass, property } = _decorator;
const GATE_PREFAB_NAME = 'NG_CollectBox_freestart';
@ccclass('GateN2FTransition')

export class GateN2FTransition extends AutoOrientAndSetPos {

    @property({ type: Node, displayName: 'FX_FreeStart_back_HorizontalAniNode', visible: true, tooltip: '轉場光束_橫版後node', group: 'FS_Back' })
    private _fs_b_HorizontalAniNode: Node = null;
    @property({ type: Node, displayName: 'FX_FreeStart_back_VerticalAniNode', visible: true, tooltip: '轉場光束_直版後node', group: 'FS_Back' })
    private _fs_b_VerticalAniNode: Node = null;
    @property({ type: SpineController, displayName: 'FSBack_Horizontal', visible: true, tooltip: '轉場光束_橫版後sp', group: 'FS_Back' })
    private _fS_Back_HorizontalAni: SpineController = null;
    @property({ type: SpineController, displayName: 'FSBack_VerticalAni', visible: true, tooltip: '轉場光束_直版後sp', group: 'FS_Back' })
    private _fS_Back_VerticalAni: SpineController = null;


    @property({ type: Node, displayName: 'FX_FreeStart_front_HorizontalAniNode', visible: true, tooltip: '轉場光束_橫版前node', group: 'FS_Front' })
    private _fs_f_HorizontalAniNode: Node = null;
    @property({ type: Node, displayName: 'FX_FreeStart_front_VerticalAniNode', visible: true, tooltip: '轉場光束_直版前node', group: 'FS_Front' })
    private _fs_f_VerticalAniNode: Node = null;
    @property({ type: SpineController, displayName: 'FSFront_Horizontal', visible: true, tooltip: '轉場光束_橫版前sp', group: 'FS_Front' })
    private _fS_front_HorizontalAni: SpineController = null;
    @property({ type: SpineController, displayName: 'FSFront_VerticalAni', visible: true, tooltip: '轉場光束_直版前sp', group: 'FS_Front' })
    private _fs_front_VerticalAni: SpineController = null;
    @property({ type: Node, displayName: 'ScaleBGNode', visible: true, tooltip: '轉場要縮放的背景' })
    private _scaleBGNode: Node = null;
    @property({ type: Node, displayName: 'ScaleSlotMachineNode', visible: true, tooltip: '轉場要縮放的盤面' })
    private _scaleSlotMachineNode: Node = null;
    @property({ type: Node, displayName: 'ScaleSlotFrameNode', visible: true, tooltip: '轉場要縮放的SlotFrameNode' })
    private _scaleSlotFrameNode: Node = null;
    @property({ type: Fg_UI_Component, displayName: 'Fg_UI_Component', visible: true, tooltip: 'FG 轉場UIComponent' })
    private _fg_UI_Component: Fg_UI_Component = null;
    @property({ type: Node, displayName: 'GateNodeContainer', visible: true, tooltip: 'gatePrefabAni' })
    private _gateNodeContainer: Node = null;


    private _transitionState: TransitionsState = TransitionsState.NONE;
    set transitionState(value: TransitionsState) {
        this._transitionState = value;
        this._fg_UI_Component.transitionState = value;
    }
    private _targetFGSlotFrameNode: Node;//--FG的外框
    private _targetNGSlotFrameNode: Node;//--NG的外框
    private _spine_gate: SpineController = null;
    private _camp: number = -1;
    private _screenRotationResolution: Orientation = null;
    private _isTimerRunning: boolean;
    private _frontGateNode: Node = null;
    private _isRunning: boolean = false;


    private _transitionCompleteCallBack: () => void = null;
    private _changeSlotStateForCloseFG: () => void = null;
    private _changeLayerDuringTransition: () => void = null;
    private _resolvePromiseForIn: (() => void) | undefined; // promise resolve 函式(進場)
    private _resolvePromiseForOut: (() => void) | undefined; // promise resolve 函式(結算退場)


    set transitionCompleteCallBack(value: () => void) {
        this._transitionCompleteCallBack = value;
    }
    set changeSlotStateForCloseFG(value: () => void) {
        this._changeSlotStateForCloseFG = value;
    }
    set changeLayerDuringTransition(value: () => void) {
        this._changeLayerDuringTransition = value;
    }

    get isRunning(): boolean {
        return this._isRunning;
    }
    /**
     * TODO
     * 要再把這些spine拿去物件池
     */
    public init(): void {
        //--這邊只有直橫版的不同,不需要換skin
        this._fS_Back_HorizontalAni.init();
        this._fS_Back_VerticalAni.init();
        this._fS_front_HorizontalAni.init();
        this._fs_front_VerticalAni.init();
        //--FG的顯示次數/結算面板的UI click事件
        //this._fg_UI_Component.callBackForUIClick = this.uiClickHandler;
        //--FG的結算面板UI退場結束後的回調
        this._fg_UI_Component.callBackFreeBackFinish = this.uiCallFreeBackFadeOutFinish;
        this._fg_UI_Component.init();
        this._isTimerRunning = false;
        this._isRunning = false;
        //--NG的外框
        this._targetNGSlotFrameNode = FindNode.findChildByNameRecursive(this._scaleSlotFrameNode, 'NG_frame');
        //console.log('GateN2FTransition init', this._targetNGSlotFrameNode,);
    }

    public testScreenCapture(): void {
        return;
        let testCapture = new CanvasRender();

        //testCapture.renderNodeToCanvas(this._testNode).then((canvas) => {
        //    console.log('@@@@@@@@@@@@@@@check_canvas@@@@@@@@@@@@@@@@', canvas);
        //    this._target.getComponent(Sprite).spriteFrame = canvas;
        //});
        //-_target
        //this._captureScreen.getNodeCaptureScreen2();
        //let test=new CaptureNodeScreen();

        /*
        test.getNodeCaptureScreen(this._testNode,this._target).then((spriteFrame)=>{   
            console.log('@@@@@@@@@@@@@@@check_spriteFrame@@@@@@@@@@@@@@@@',spriteFrame);
            this.testCreateNode(spriteFrame);
        })*/

        let node = find('Canvas');
        console.log('chekcCanvas', node);
    }


    public openStartTransition(): void {
        this.transitionState = TransitionsState.IN;
    }

    public async setCamp(value: number): Promise<void> {

        return new Promise(async (resolve) => {
            this._camp = value;
            let skin_id, targetFGDisplayFrameName = '';
            if (this._camp == 0) {
                skin_id = 'FG_01';
                targetFGDisplayFrameName = 'FG_Ali';
            } else {
                skin_id = 'FG_02';
                targetFGDisplayFrameName = 'FG_Thieves';
            }
            //this._targetRotationContainer = (this._screenRotationResolution == Orientation.Landscape) ? this._rotationHorizontal : this._rotationVertical;
            this._frontGateNode = await this.createSpineNodeUI(GATE_PREFAB_NAME);
            this.initSpineUI(this._frontGateNode);
            this._spine_gate.changeSkin(skin_id);
            //this._targetFGSlotFrameNode = this._scaleSlotFrameNode.getChildByName(targetFGDisplayFrameName);
            this._targetFGSlotFrameNode = FindNode.findChildByNameRecursive(this._scaleSlotFrameNode, targetFGDisplayFrameName);
            await this._fg_UI_Component.changeFgUITargetForCamp(this._camp);
            this._frontGateNode.setScale(v3(1, 1, 1));
            this._frontGateNode.active = true;
            this._isRunning = true;
            this._fS_Back_HorizontalAni.node.active = true;
            this._fS_Back_VerticalAni.node.active = true;
            this._fS_front_HorizontalAni.node.active = true;
            this._fs_front_VerticalAni.node.active = true;
            resolve();
        });

    }


    //--螢幕旋轉變化
    public override otherProcessForOrientation(value: Orientation): void {

        if (this._screenRotationResolution == value) {
            return;
        }
        this._screenRotationResolution = value;
        if (value == Orientation.Landscape) {
            this._fs_b_HorizontalAniNode.getComponent(UIOpacity).opacity = 255;
            this._fs_b_VerticalAniNode.getComponent(UIOpacity).opacity = 0;
            this._fs_f_HorizontalAniNode.getComponent(UIOpacity).opacity = 255;
            this._fs_f_VerticalAniNode.getComponent(UIOpacity).opacity = 0;
        } else if (value == Orientation.Portrait) {
            this._fs_b_HorizontalAniNode.getComponent(UIOpacity).opacity = 0;
            this._fs_b_VerticalAniNode.getComponent(UIOpacity).opacity = 255;
            this._fs_f_HorizontalAniNode.getComponent(UIOpacity).opacity = 0;
            this._fs_f_VerticalAniNode.getComponent(UIOpacity).opacity = 255;
        }
    }

    public playAni(key: string): void {

        this._spine_gate.playAni(key);
        if (key == 'freestart_out') {
            AudioManager.instance.playSound(SoundList.ModeChange1, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
            this._fS_Back_HorizontalAni.playAni('freestart_out_L');
            this._fS_Back_VerticalAni.playAni('freestart_out_P');
            this._fS_front_HorizontalAni.playAni('freestart_out_L');
            this._fs_front_VerticalAni.playAni('freestart_out_P');
            //--這邊要插入轉場到FG的音樂
            //-this._camp 0/1
            let fgBGMTarget;
            if (this._camp == 0) {
                fgBGMTarget = MusicList.FgBgm1;
            } else if (this._camp == 1) {
                fgBGMTarget = MusicList.FgBgm2;
            }
            AudioManager.instance.playMusic(fgBGMTarget);
        }
    }
    //--關門後換圖
    public async playAinForStart(callBack: () => void): Promise<void> {
        return new Promise((resolve) => {
            this._resolvePromiseForIn = resolve;
            this._frontGateNode.getComponent(UIOpacity).opacity = 255;
            AudioManager.instance.playSound(SoundList.ModeChange1, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
            this._spine_gate.playAniWithCallBack(callBack, 'freestart_in');
        });
    }

    public playFadeOutOpacityAni(): void {
        let targetOpacity = this._frontGateNode.getComponent(UIOpacity);
        tween(targetOpacity)
            .to(0.16, { opacity: 0 })
            .call(() => {
                //this._transitionCompleteCallBack?.();
                if (this._resolvePromiseForIn) {
                    this._resolvePromiseForIn();
                    this._resolvePromiseForIn = undefined;
                }
                this.resetState();
            })
            .start();
    }

    public async closeFG(value: number): Promise<void> {
        return new Promise((resolve) => {
            this._resolvePromiseForOut = resolve;
            this.fgUiActionByKeyFrameEvt(value);
        });
    }
    //--結束一把FG會進來
    public cleanTransition(): void {
        this._fg_UI_Component.cleanFGUI();
        this.removeGate();
        AnimationControllersPoolManager.getInstance().pushInstancePrefabNodeToPool(GATE_PREFAB_NAME, this._frontGateNode);
        const comp = this._targetFGSlotFrameNode.getComponent(FG_SpriteController);
        if (comp) {
            comp.changeGameState(GameState.NORMAL);
        }
        let ngBG = this._scaleBGNode.getChildByName('ng_vertical_bg');
        ngBG.setScale(v3(1, 1, 1));
        this._frontGateNode = null;
        this._spine_gate = null;
        this._isRunning = false;
        this._fS_Back_HorizontalAni.spine.getState().setEmptyAnimation(0, 0);
        this._fS_Back_VerticalAni.spine.getState().setEmptyAnimation(0, 0);
        this._fS_front_HorizontalAni.spine.getState().setEmptyAnimation(0, 0);
        this._fs_front_VerticalAni.spine.getState().setEmptyAnimation(0, 0);

        this._fS_Back_HorizontalAni.node.active = false;
        this._fS_Back_VerticalAni.node.active = false;
        this._fS_front_HorizontalAni.node.active = false;
        this._fs_front_VerticalAni.node.active = false;
    }

    public resetState(): void {
        if (this._transitionState == TransitionsState.OUT) {
            this._fg_UI_Component.resetData();
        } else if (this._transitionState == TransitionsState.IN || this._transitionState == TransitionsState.NONE) {
            this._targetNGSlotFrameNode.setScale(v3(1, 1, 1));
            this._frontGateNode.active = false;
            this._frontGateNode.getComponent(UIOpacity).opacity = 255;

        }
        this._resolvePromiseForIn = undefined;
        this._resolvePromiseForOut = undefined;
    }

    private createSpineNodeUI(prefabKey: string): Promise<Node> {
        return new Promise((resolve, reject) => {
            let spineNode = AnimationControllersPoolManager.getInstance().getPrefabNode(prefabKey);
            spineNode.getComponent(UIOpacity).opacity = 0;
            spineNode.active = true;
            this._gateNodeContainer.once(Node.EventType.CHILD_ADDED, () => {
                resolve(spineNode);
            });
            this._gateNodeContainer.addChild(spineNode);

        })
    }

    private removeGate(): void {
        if (this._frontGateNode) {
            this._gateNodeContainer.removeChild(this._frontGateNode);
        }
    }

    private setupSpineAnimations(spine: SpineController, defs: { name: string; timeScale: number; loop: boolean }[]): void {
        for (const def of defs) {
            const ani = new AniCtrlPropDef();
            ani.targetName = def.name;
            ani.timeScale = def.timeScale;
            ani.loop = def.loop;
            spine.setAniDataInfo(ani);
        }
    }

    private registerKeyEvents(spine: SpineController, keys: string[], handler: (...args: any[]) => void): void {
        for (const key of keys) {
            spine.setKeyFrameEvent(key, handler);
        }
    }


    private initSpineUI(spineNode: Node): void {

        this._spine_gate = FindComponent.findComponentInChildren(spineNode, SpineController);
        this._spine_gate.init();

        this.setupSpineAnimations(this._spine_gate, [
            { name: 'freestart_in', timeScale: 1.5, loop: false },
            { name: 'freestart_out', timeScale: 1, loop: false },
            { name: 'freestart_loop', timeScale: 1, loop: true }
        ]);

        this.registerKeyEvents(this._spine_gate, [
            'back_in_reel', 'FreeStart_in',
            'zoom_in', 'zoom_in_small',
            'wiggle', 'wiggle_small',
            'fade_out'
        ], this.spineGateKeyFrameEvtHandler);

    }

    private spineGateKeyFrameEvtHandler = (...args) => {
        //console.log('spineGateKeyFrameEvtHandler', args);
        switch (args[0]) {
            case 'back_in_reel':
                break;
            case 'FreeStart_in':
                this.fgUiActionByKeyFrameEvt();
                break;
            case 'zoom_in'://--退場
                this.tweenScaleForFadeOut();
                break;
            case 'zoom_in_small'://--進場
                this.tweenScaleUpForKeyFrameEvent();
                break;
            case 'wiggle':
                this.shakeNode(this._targetNGSlotFrameNode, 0.13, 0.05, { x: 0, y: 8 });
                break;
            case 'wiggle_small':
                this.shakeNode(this._targetNGSlotFrameNode, 0.66, 0.05, { x: 2, y: 2 });
                break;
            case 'fade_out':
                this.playFadeOutOpacityAni();
                break;
        }
    }

    private uiCallFreeBackFadeOutFinish = () => {
        //--面板結束(結算)
        this._changeSlotStateForCloseFG?.();//--要通知關閉轉場切換場景回到正常狀態 
    }

    //gui進場
    private async fgUiActionByKeyFrameEvt(value?: number): Promise<void> {
        //console.log('fgUiActionByKeyFrameEvt::::', this._transitionState);
        this._isTimerRunning = true;
        if (value) {
            this._fg_UI_Component.setFgResultLabel(value); //--寫金額 
        }
        await this._fg_UI_Component.playFgFadeInOut();//--進場->LOOP完成


        /**
         * 這邊在結算時上述的動作都完成後會讓gameManager接續動作(只在結算才有_resolvePromiseForOut)
         * 會執行的動作是
         * 1.cleanAllPlayingAniForNewRound
         * 2.stopShowVerticalAni
         * 3.currentCampFg = -1;
         * 4.currentCamp = -1;
         * 5.closeFGBonus
         * 6.openWildSystemVisible
         * 7.reSetBkgContainerAni
         * 8.closeOrOpenAllGameIconBright(false)
         */

        //await GameUtils.Defer(2000);
        //--玩家點擊面板手動進入下,即會終止計時器
        if (this._transitionState == TransitionsState.IN) {
            //-_fS_Back_HorizontalAni/_fS_front_HorizontalAni的動畫播放
            this.playAni('freestart_out');//--其它的
        }
        this._fg_UI_Component.playFgFadeOut();
        if (this._resolvePromiseForOut) {
            //--如果是結算時,會有awiat _resolvePromiseForOut
            this._resolvePromiseForOut();
            this._resolvePromiseForOut = undefined;
            //await GameUtils.Defer(1000);
        }

    }


    /**
     * 
     * @param node 目標節點
     * @param shakeDuration 總震動時長 
     * @param shakeFrequency 頻率
     * @param shakeAmplitude 幅度
     */
    private shakeNode(node: Node, shakeDuration: number, shakeFrequency: number, shakeAmplitude: { x: number, y: number }): void {
        const originalPosition = node.position.clone();
        const shakeInterval = shakeFrequency;
        const shakeCount = Math.floor(shakeDuration / shakeInterval);
        const shakeActions = [];

        for (let i = 0; i < shakeCount; i++) {
            //const yOffset = (i % 2 === 0 ? shakeAmplitude : -shakeAmplitude);
            let yOffset = 0;
            let xOffset = 0;
            if (i % 2 === 0) {
                xOffset = shakeAmplitude.x;
                yOffset = shakeAmplitude.y;
            } else {
                xOffset = -shakeAmplitude.x;
                yOffset = -shakeAmplitude.y;
            }
            shakeActions.push(tween(node)
                .to(shakeInterval, { position: v3(originalPosition.x + xOffset, originalPosition.y + yOffset, originalPosition.z) })
            );
        }

        shakeActions.push(tween(node)
            .to(shakeInterval, { position: originalPosition }, { easing: 'sineOut' })
        );

        tween(node)
            .sequence(...shakeActions)
            .start();
    }

    //--fade out(evt:zoom_in)
    private tweenScaleForFadeOut(): void {
        let scaleValue = (this._screenRotationResolution == Orientation.Landscape) ? 1.5 : 2.5;
        tween(this._targetNGSlotFrameNode)
            .to(0.33, { scale: v3(scaleValue, scaleValue, scaleValue) })
            .start();
        tween(this._frontGateNode)
            .to(0.33, { scale: v3(scaleValue, scaleValue, scaleValue) })
            .start();
        this._targetFGSlotFrameNode.setScale(v3(0.65, 0.65, 0.65));
        tween(this._targetFGSlotFrameNode)
            .to(0.33, { scale: v3(1, 1, 1) })
            .start();
        //-_scaleBGNode
        this.processBGNodeFadeOutTween(scaleValue);
        /*
        this._scaleBGNode.setScale(v3(0.65, 0.65, 0.65));
        tween(this._scaleBGNode)
            .to(0.33, { scale: v3(1, 1, 1) })
            .start();
        */
        this._scaleSlotMachineNode.setScale(v3(0.65, 0.65, 0.65));
        tween(this._scaleSlotMachineNode)
            .to(0.33, { scale: v3(1, 1, 1) })
            .start();
        //--靠北他FG的面板也要轉..問題就不可能啊...
    }


    private processBGNodeFadeOutTween(scaleValue: number): void {
        let ngBG = this._scaleBGNode.getChildByName('ng_vertical_bg');
        let fgBgAli = this._scaleBGNode.getChildByName('FG_Bkg_Ali');
        let fgBgThieves = this._scaleBGNode.getChildByName('FG_Bkg_Thieves');
        /*
        let ngHorizontalNode = ngBG.getChildByName('show_horizontal');
        let ngVerticalNode = ngBG.getChildByName('show_vertical');
        ngHorizontalNode.active = false;
        ngVerticalNode.active = false;
        */
        //ngBG.active = false;

        tween(ngBG)
            .to(0.33, { scale: v3(scaleValue, scaleValue, scaleValue) })

            .call(() => {
                ngBG.setScale(v3(1, 1, 1));
                //--面板進場
                this._changeLayerDuringTransition?.();
            })
            .start();


        fgBgAli.setScale(v3(0.65, 0.65, 0.65));
        tween(fgBgAli)
            .to(0.33, { scale: v3(1, 1, 1) })
            .start();
        fgBgThieves.setScale(v3(0.65, 0.65, 0.65));
        tween(fgBgThieves)
            .to(0.33, { scale: v3(1, 1, 1) })
            .start();

    }

    //--fade in(evt:zoom_in_small)
    private tweenScaleUpForKeyFrameEvent(): void {

        //--_scaleSlotFrameNode(tween的數值有分直橫版不同)
        tween(this._targetNGSlotFrameNode)
            .to(0.66, { scale: v3(1.05, 1.05, 1.05) })
            //.tag(1)//--給tween一個tag(id)
            .start();

        //-this._frontGateNode
        tween(this._frontGateNode)
            .to(0.66, { scale: v3(1.05, 1.05, 1.05) })
            //.tag(1)//--給tween一個tag(id)
            .start();
    }

}



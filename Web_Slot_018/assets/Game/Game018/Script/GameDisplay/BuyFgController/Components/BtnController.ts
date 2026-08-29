import { _decorator, Size, Component, Node, EventTouch, EventMouse, UITransform, Graphics, color, Layers, Vec2, CameraComponent, v3, Canvas, Rect, Color, director, Label } from 'cc';
import { AnimationController } from '../../../MyUtils/AnimationSystem/Components/AnimationController';
import { FindComponent } from '../../../MyUtils/FindComponent';
import { SkeletonExtension } from '../../../../../../Scripts/GameScripts/SkeletonExtension';
import { DefinitionGameConfigData } from '../../../DefinitionGameData/DefinitionGameConfigData';
import { Orientation } from '../../../../../../Scripts/Utils/Config';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
import { SoundList, AudioSourceList } from '../../../DefinitionGameData/SoundList';
const { ccclass, property } = _decorator;
const {
    BUY_FG_MULTIPLIER
} = DefinitionGameConfigData;
@ccclass('BtnController')
export class BtnController extends Component {
    /**
     * 啟動fg面板的按鈕
     */
    @property({ visible: true, displayName: 'mouseHoverAniKey', tooltip: 'mouseHover的狀態' })
    private _mouseHoverAniKey: string = '';

    @property({ visible: true, displayName: 'mouseClickAniKey', tooltip: 'mouseClick的狀態' })
    private _mouseClickAniKey: string = '';

    @property({ visible: true, displayName: 'mouseDisable', tooltip: 'mouseDisable的狀態' })
    private _mouseDisableAniKey: string = '';

    @property({ visible: true, displayName: 'mouseNormalAniKey', tooltip: 'mouseNormal的狀態' })
    private _mouseNormalAniKey: string = '';

    @property({ type: Node, visible: true, displayName: 'CameraNode', tooltip: 'cameraNode' })
    private _cameraNode: Node = null;

    @property({ type: Node, visible: true, displayName: 'maskNode', tooltip: 'mask' })
    private _maskNode: Node = null;

    @property({ type: Node, visible: true, displayName: 'fxMaskNode_Horizontal', tooltip: '橫版mask' })
    private fxMaskNode_Horizontal: Node = null;

    @property({ type: Node, visible: true, displayName: 'fxMaskNode_Vertical', tooltip: '直版mask' })
    private fxMaskNode_Vertical: Node = null;

    @property({ type: Node, visible: true, displayName: 'mouseSensorNode', tooltip: 'mouseSensorNode' })
    private _mouseSensorNode: Node = null;

    @property({ type: Node, visible: true, displayName: 'btnNodeLanguageHorizontal', tooltip: '多語系橫版' })
    private _nodeLanguageHorizontal: Node = null;

    @property({ type: Node, visible: true, displayName: 'btnNodeLanguageVertical', tooltip: '多語系直版' })
    private _nodeLanguageVertical: Node = null;

    @property({ type: Node, visible: true, displayName: 'LabelNodeForBtnBet', tooltip: '購買FG的金額' })
    private _labelNode: Node = null;

    @property({ type: Node, visible: true, displayName: 'mouseLeaveNode', tooltip: '離開區域使用感應區' })
    private _mouseLeaveNode: Node = null;

    private _aniController: AnimationController = null;
    private _spineExtension: SkeletonExtension = null;
    private _canvasNode: Node = null;
    private _gameRotationResolution: Orientation = null;
    private _isMouseIn: boolean = false;
    private _boundaryWp: { x: number, y: number, w: number, h: number };
    private _blocking: boolean = false;//--當前是否在block狀態
    private _labelForBtnBetValue: Label = null;
    private _isDisableBuyFgBtn: boolean = false;

    public clickCallback: () => void = null;

    protected onLoad(): void {
        this.init();

    }

    public init(): void {
        this._isMouseIn = false;
        this._boundaryWp = { x: 0, y: 0, w: 0, h: 0 };
        this._aniController = FindComponent.findComponentInChildren(this.node, AnimationController);
        this._aniController.init();
        this._spineExtension = FindComponent.findComponentInChildren(this.node, SkeletonExtension);
        this._labelForBtnBetValue = FindComponent.findComponentInChildren(this._labelNode, Label);

        //this.node.preventSwallow=false;
        //this._mouseSensorNode.preventSwallow=true;
        //-https://docs.cocos.com/creator/3.8/manual/zh/engine/event/event-node.html

        /*
        this._mouseSensorNode.on(Node.EventType.TOUCH_START,this.sensorMouseHandler);
        this._mouseSensorNode.on(Node.EventType.TOUCH_END,this.sensorMouseHandler);
        this._mouseSensorNode.on(Node.EventType.MOUSE_MOVE,this.sensorMouseHandler);
        */
        //this._mouseSensorNode.on(Node.EventType.MOUSE_LEAVE,this.sensorMouseHandler);
        //window.addEventListener('mousemove', this.onMouseMove);
        //-https://forum.cocos.org/t/topic/161159 爛引擎
        //this._mouseSensorNode.on(Node.EventType.MOUSE_ENTER, this.sensorMouseHandler);
        //this._mouseSensorNode.on(Node.EventType.MOUSE_LEAVE, this.sensorMouseHandler);
    }


    private sensorMouseHandler = (e: any) => {

        e.preventSwallow = false;
        if (e.type == Node.EventType.TOUCH_START) {
            this.btnClickCallback();
        } else if (e.type == Node.EventType.TOUCH_END) {

        } else if (e.type == Node.EventType.MOUSE_MOVE) {
            let mousePos: Vec2 = e.getUILocation();
            const wpos = v3(mousePos.x, mousePos.y, 0);
            const localPos = this._mouseSensorNode.getComponent(UITransform).convertToNodeSpaceAR(wpos);
            const localPosV2: Vec2 = new Vec2(localPos.x, localPos.y);
            const boundingBox: Rect = this._mouseSensorNode.getComponent(UITransform).getBoundingBox();
            const isCurrentlyInside = boundingBox.contains(localPosV2);

            if (isCurrentlyInside && !this._isMouseIn) {

                this._isMouseIn = true;
                this.btnHoverCallback();
                //--這邊要注意，canvas它的範圍在cocos裡面不會是整個遊戲畫面
                this._canvasNode = director.getScene().getComponentInChildren(Canvas)?.node;
                this._canvasNode.on(Node.EventType.MOUSE_MOVE, this.sensorMouseHandler);
                this._mouseSensorNode.on(Node.EventType.MOUSE_LEAVE, this.sensorMouseHandler);


            } else if (!isCurrentlyInside && this._isMouseIn) {
                //console.log('canvasLeave!!');
                this._isMouseIn = false;
                this.btnLeaveCallback();
                this._canvasNode.off(Node.EventType.MOUSE_MOVE, this.sensorMouseHandler);
                this._mouseSensorNode.off(Node.EventType.MOUSE_LEAVE, this.sensorMouseHandler);


            }

            /*
            console.log('UI Mouse Pos:', mousePos);
            console.log('World Pos:', wpos);
            console.log('Local Pos (V2):', localPosV2);
            console.log('Bounding Box:', boundingBox);
            console.log('Is Currently Inside:', isCurrentlyInside);
            console.log('_isMouseInside:', this._isMouseIn);
            */

        } else if (e.type == Node.EventType.MOUSE_LEAVE) {
            //console.log('mouseLeave!!!!');

            this._canvasNode.off(Node.EventType.MOUSE_MOVE, this.sensorMouseHandler);
            this._mouseSensorNode.off(Node.EventType.MOUSE_LEAVE, this.sensorMouseHandler);
            this._isMouseIn = false;
            this.btnLeaveCallback();
        }
    }


    private btnHoverCallback = () => {
        this._aniController.playAni(this._mouseHoverAniKey);
    }

    private btnLeaveCallback = () => {
        this._aniController.playAni(this._mouseNormalAniKey);
    }

    private btnClickCallback = () => {
        AudioManager.instance.playSound(SoundList.BuyFGbutton, SOUND_TYPE.ONE_SHOT, AudioSourceList.BasicAS);
        this._aniController.playAni(this._mouseClickAniKey);
        this.clickCallback?.();
        this.disableBuyFgBtn();
        //this.blockOrOpenBtn(true);
    }

    public setPlayerBetValue(value: number): void {
        let totalMoney = (value * BUY_FG_MULTIPLIER).fixed();
        this._labelForBtnBetValue.string = totalMoney.numberComma();
        const len = this._labelForBtnBetValue.string.length;
        //let fontNodeSize = 1;
        let fontSize: number = 45.4;//default
        if (len >= 6 && len < 7) {
            //fontNodeSize = 0.7;
            fontSize = 42.4;

        } else if (len >= 7) {
            //fontNodeSize = 0.2;
            fontSize = 38.4;
        }
        //--這邊被綁到spine socket上面了
        //this._labelNode.setScale(v3(fontNodeSize, fontNodeSize, fontNodeSize));
        this._labelForBtnBetValue.fontSize = fontSize;
    }

    public openContainer(): void {
        this._aniController.playAni(this._mouseNormalAniKey);
        this._mouseSensorNode.on(Node.EventType.TOUCH_START, this.sensorMouseHandler);
        this._mouseSensorNode.on(Node.EventType.TOUCH_END, this.sensorMouseHandler);
        this._mouseSensorNode.on(Node.EventType.MOUSE_MOVE, this.sensorMouseHandler);
    }

    public closeContainer(): void {
        this._aniController.stopAni();
        this._mouseSensorNode.off(Node.EventType.TOUCH_START, this.sensorMouseHandler);
        this._mouseSensorNode.off(Node.EventType.TOUCH_END, this.sensorMouseHandler);
        this._mouseSensorNode.off(Node.EventType.MOUSE_MOVE, this.sensorMouseHandler);

        if (this._canvasNode) {
            if (this._canvasNode.hasEventListener(Node.EventType.MOUSE_MOVE)) {
                this._canvasNode.off(Node.EventType.MOUSE_MOVE, this.sensorMouseHandler);
            }
        }
    }

    public disableBuyFgBtn(): void {
        if (!this._isDisableBuyFgBtn) {
            this._isDisableBuyFgBtn = true;
            this.closeContainer();
            this.blockOrOpenBtn(true);
        }
    }

    public enableBuyFgBtn(): void {
        if (this._isDisableBuyFgBtn) {
            this._isDisableBuyFgBtn = false;
            this.openContainer();
            this.blockOrOpenBtn(false);
        }
    }

    private blockOrOpenBtn(value: boolean): void {
        this._blocking = value;
        if (value) {
            //--開啟mask
            this.closeAllFxMaskNode();
            this.enableBlockMaskNode();
        } else {
            //--關閉mask
            this.closeAllFxMaskNode();
            this.disableBlockMaskMode();
        }
    }

    private closeAllFxMaskNode(): void {
        this._maskNode.active = false;
        this.fxMaskNode_Horizontal.active = false;
        this.fxMaskNode_Vertical.active = false;
    }

    //--關閉mask(取消反黑)
    private disableBlockMaskMode(): void {
        let spineKey = '';
        if (this._gameRotationResolution == Orientation.Landscape) {
            spineKey = 'idle_L';
        } else {
            spineKey = 'idle_P';
        }
        this._spineExtension.setAnimation(0, spineKey, true);
        this._maskNode.active = false;

    }

    //---展開mask(反黑)
    private enableBlockMaskNode(): void {

        let spineKey = '';
        let targetNode: Node = null;
        if (this._gameRotationResolution == Orientation.Landscape) {
            targetNode = this.fxMaskNode_Horizontal;
            spineKey = 'disabled_L';
        } else {
            targetNode = this.fxMaskNode_Vertical;
            spineKey = 'disabled_P';
        }
        this._maskNode.active = true;
        targetNode.active = true;
        this._spineExtension.setAnimation(0, spineKey, true);

    }

    private getCurrentMaskNode(): Node {
        let targetNode: Node = null;
        if (this._gameRotationResolution == Orientation.Landscape && this.fxMaskNode_Horizontal.active) {
            targetNode = this.fxMaskNode_Horizontal;
        } else if (this._gameRotationResolution == Orientation.Portrait && this.fxMaskNode_Vertical.active) {
            targetNode = this.fxMaskNode_Vertical;
        }
        return targetNode;
    }



    //--改變sensor的大小
    private changeSensorRange(targetNode: Node): void {
        const uiTransform = targetNode.getComponent(UITransform);
        this._mouseSensorNode.getComponent(UITransform).setContentSize(uiTransform.contentSize);
        this._boundaryWp.w = uiTransform.contentSize.width;
        this._boundaryWp.h = uiTransform.contentSize.height;
        this._boundaryWp.x = uiTransform.anchorX * uiTransform.contentSize.width;
        this._boundaryWp.y = uiTransform.anchorY * uiTransform.contentSize.height;
    }


    //---只在不能click的時候顯示
    public changeRotationResolution(value?: Orientation): void {
        if (this._gameRotationResolution == value) return;
        this._gameRotationResolution = value;
        if (this._gameRotationResolution == Orientation.Landscape) {
            this._spineExtension.setAnimation(0, 'idle_L', true);
            this._nodeLanguageHorizontal.active = true;
            this._nodeLanguageVertical.active = false;
            //this.fxMaskNode_Vertical.active = false;
            //this.fxMaskNode_Horizontal.active = true;
            this.changeSensorRange(this.fxMaskNode_Horizontal);
        } else {
            this._spineExtension.setAnimation(0, 'idle_P', true);
            this._nodeLanguageHorizontal.active = false;
            this._nodeLanguageVertical.active = true;
            //this.fxMaskNode_Vertical.active = true;
            //this.fxMaskNode_Horizontal.active = false;
            this.changeSensorRange(this.fxMaskNode_Vertical);
        }
        this.closeAllFxMaskNode();
        if (this._blocking) {
            this.enableBlockMaskNode();
        }


    }

}



import { _decorator, Component, Node, CCBoolean } from 'cc';
import { ContainerWholeBehavior } from '../../../MyUtils/BasicShowContainerManager/Component/ContainerWholeBehavior';
import { AnimationController, AnimationStateType, SpineController, GameState } from '../../../ReferencePath';
//import { Orientation } from "db://assets/Scripts/Utils/Config";
import { IBkgDisplay } from '../IBkgDisplay';
import { BkgChangeColor } from '../BkgChangeColor';
import { ANI_SYS_EVENTS, AniSysEventData } from '../../../MyUtils/AnimationSystemV2/Components/AniEvents/AniSysEvents';
import { Orientation } from 'db://assets/Scripts/ModuleEntry';

const { ccclass, property } = _decorator;
const SPINE_ANI_NAME = {
    L: 'L',
    P: 'P'
}
@ccclass('RS_BG_PM_Display')
export class RS_BG_PM_Display extends ContainerWholeBehavior implements IBkgDisplay {

    @property({ type: AnimationController, visible: true, displayName: 'AnimationController', tooltip: 'BG_AM' })
    private _animationController: AnimationController | null = null;

    @property({ type: SpineController, visible: true, displayName: 'spineController', tooltip: 'BG_AM' })
    private _spineController: SpineController | null = null;

    @property({ type: CCBoolean, visible: true, displayName: '是否為背景動畫', tooltip: '預設false' })
    public isBkgAni: boolean = false;

    private _colorChangeComp: BkgChangeColor;
    private _dirtyFlag: boolean = false;
    private _showState: GameState = GameState.NORMAL;

    protected onLoad(): void {
        if (this._dirtyFlag) return;
        this._dirtyFlag = true;
        //--用node added比較保險一點,且確保它<一定>是onload之後才會被addChild進來
        this._spineController.node.once(Node.EventType.CHILD_ADDED, () => {
            this.init();
        });
        //this._spineController.node.on(ANI_SYS_EVENTS.CTRL_LOADED, this.onSpineCtrlLoaded);
        //this.name='RS_BG_PM_Display';
        //this.init();
    }

    public override init(): void {
        if (!this._dirtyFlag) return;
        super.init();
        this._colorChangeComp = this.getComponent(BkgChangeColor);
        this._animationController?.init();
        this._spineController?.init();
        this._animationController?.playAni(AnimationStateType.Default);
        this._spineController?.playAni({ aniState: SPINE_ANI_NAME.L });
    }

    /*
    private onSpineCtrlLoaded = (event: AniSysEventData): void => {
        this.init();
        this._spineController.node.off(ANI_SYS_EVENTS.CTRL_LOADED, this.onSpineCtrlLoaded);
    }*/

    //---給控制器去呼叫使用的(遊戲狀態改變時呼叫)
    public override changeGameMode(gameState: GameState): void {
        //--do something
        //this.node.active=(gameState==this._showState)?true:false;
    }

    //--override it
    protected override doDefaultResizeProcess(value: Orientation): void {

        super.doDefaultResizeProcess(value);
        if (value == Orientation.Landscape) {
            this._spineController?.playAni({ aniState: SPINE_ANI_NAME.L });
        } else if (value == Orientation.Portrait) {
            this._spineController?.playAni({ aniState: SPINE_ANI_NAME.P });
        }
    }

    //---開啟背景反黑
    public openDark(spColorMode?: boolean): void {
        this._colorChangeComp?.openDark(spColorMode);
    }
    //---關閉背景反黑
    public closeDark(spColorMode?: boolean): void {
        this._colorChangeComp?.closeDark(spColorMode);
    }
    //---漸變反黑
    public async openTweenDark(spColorMode?: boolean): Promise<void> {
        await this._colorChangeComp?.openTweenDark(spColorMode);
    }
    public async closeTweenDark(spColorMode?: boolean): Promise<void> {
        await this._colorChangeComp?.closeTweenDark(spColorMode);
    }




}



import { _decorator, Component, Node, CCBoolean } from 'cc';
import { ContainerWholeBehavior } from '../../../MyUtils/BasicShowContainerManager/Component/ContainerWholeBehavior';
import { AnimationController, AnimationStateType, SpineController, GameState } from '../../../ReferencePath';
import { IBkgDisplay } from '../IBkgDisplay';
import { BkgChangeColor } from '../BkgChangeColor';
const { ccclass, property } = _decorator;

@ccclass('FG_BG_Display')
export class FG_BG_Display extends ContainerWholeBehavior implements IBkgDisplay {


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
        this._spineController.node.once(Node.EventType.CHILD_ADDED, () => {
            this.init();
        });
        //this.name='FG_BG_Display';
        //this.init();
    }

    public override init(): void {
        if (!this._dirtyFlag) return;
        super.init();
        this._colorChangeComp = this.getComponent(BkgChangeColor);
        this._spineController?.init();
        this._spineController?.playAni({ aniState: AnimationStateType.Loop });
    }

    //---給控制器去呼叫使用的(遊戲狀態改變時呼叫)
    public override changeGameMode(gameState: GameState): void {
        //--do something
        //this.node.active=(gameState==this._showState)?true:false;
        console.log();
        if (gameState == GameState.FREE_GAME) {
            this.playAni();
        } else {
            this.stopAllAni();
        }
    }

    public override stopAllAni(): void {
        // Stop all animations
        if (this._spineController?.isPlaying) {
            this._spineController?.stopAni();
        }

        console.log();
    }

    public override playAni(value?: string): void {
        // Play animation
        this._spineController?.playAni({ aniState: AnimationStateType.Loop });
        console.log();
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



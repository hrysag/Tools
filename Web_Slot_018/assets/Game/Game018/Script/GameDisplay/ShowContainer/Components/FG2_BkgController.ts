import { _decorator, Component, Node, sp, Animation, UIOpacity } from 'cc';
import { BasicDisplayContainer } from './IBG_Ani';
import { ShareBg } from './ShareBg';
import { Orientation } from '../../../../../../Scripts/Utils/Config';
import { SpineController } from '../../../MyUtils/AnimationSystem/Components/SpineController';
import { GameState } from '../../../DefinitionGameData/GameStateConfigDef';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
import { SoundList, AudioSourceList } from '../../../DefinitionGameData/SoundList';
const { ccclass, property } = _decorator;
const SP_ANI_ID_IDLE = 'FG_idle';
const SP_ANI_ID_CONNECT = 'FG_connect';

@ccclass('FG2_BkgController')
export class FG2_BkgController extends BasicDisplayContainer {

    @property({ type: Node, visible: true, displayName: 'itemSpPortraitNode', tooltip: '直版FG,spine動畫的Node' })
    protected _itemSpPortraitNode: Node = null;

    @property({ type: ShareBg, visible: true, displayName: 'shareBg', tooltip: '共用背景' })
    private _shareBg: ShareBg = null;

    @property({ type: Node, visible: true, displayName: 'shareBgNode', tooltip: '共用背景的容器' })
    private _shareBgContainer: Node = null;

    private _spPortrait: SpineController = null;
    private _dirtyFlag: boolean = false;

    set camp(value: number) {
        this._camp = value;
        if (this._shareBg) {
            this._shareBg.camp = value;
        }
    }

    get itemSpPortraitNode(): Node {
        return this._itemSpPortraitNode;
    }

    protected onLoad(): void {
        if (!this._dirtyFlag) {
            super.onLoad();
        }
    }

    public override init(): void {

        if (!this._dirtyFlag) {
            this._dirtyFlag = true;
            super.init();
            this._spPortrait = this._itemSpPortraitNode.getComponent(SpineController);
            this._spPortrait.init();
        }
    }

    public getAndRemoveShareBg(): ShareBg | null {
        const shareTarget = this._shareBg;
        shareTarget.stopAllAni();
        this._shareBgContainer.removeChild(this._shareBg.node);
        this._shareBg = null;
        this._shareBgContainer.active = false;
        return shareTarget;
    }

    public setShareBg(shareBg: ShareBg): void {
        this._shareBg = shareBg;
        this._shareBgContainer.addChild(shareBg.node);
        shareBg.node.setPosition(0, 0, 0);
        this._shareBgContainer.active = true;
    }

    public cleanAniState(): void {
        this._spPortrait.forceToStopAniByEmpty();//-走setEmptyAnimation
        this._itemSpPortraitNode.getComponent(UIOpacity).opacity = 0;
    }

    private stopShareBgAni(): void {
        if (this._shareBg) {
            this._shareBg.stopAllAni();
        }
    }

    //--showAniController呼叫(每次startSpin時呼叫)
    public resetAniState(): void {
        if (this._gameState == GameState.FREE_GAME) {
            this._spPortrait.playAni(SP_ANI_ID_IDLE);
        }
    }

    public override stopAllAni(): void {
        //super.stopAllAni();--沒有勾選afterDoDrop 不會對_targetSpine做任何事
        this.forceToStopAni();
        this.cleanAniState();
        this.stopShareBgAni();
    }

    public visibilityForTargetSpineNode(value: boolean): void {
        if (this._targetSpineNode) {
            this._targetSpineNode.active = value;
        }
    }

    public async playWinAni(): Promise<void> {
        if (this._gameState == GameState.FREE_GAME && this._spPortrait) {
            if (this._itemSpPortraitNode.getComponent(UIOpacity).opacity == 255) {
                AudioManager.instance.playSound(SoundList.ThievesWin, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
            }
            await this._spPortrait.playAniInPromise(SP_ANI_ID_CONNECT);
            this._spPortrait.playAni(SP_ANI_ID_IDLE);
        }
    }

    public override playAni(value?: string): void {
        /**
         * 轉場的時候_targetSpineNode(FG_Bkg_front--就前面的盆栽)被拿到前面並且關閉.
         * 所以再轉場的時候Call這個會沒辦法觸發背景先播放..要等到轉場完後(開門),改變狀態時
         * 因為前面的盆栽被打開了,所以這個時候才會觸發播放背景動畫
         */
        //console.log('checkFG2_PlayAni', this._targetSpineNode.active, this._gameRotationResolution);
        if (this._targetSpineNode.active) {
            super.playAni(value);
        }
    }

    /**
     * 因為轉場動畫前景(!targetSpine)被關閉的情況下,playAni不會被觸發
     * 要開門的時候changeGameMode時才會被觸發.
     * 這樣導致轉場開門看到背景是空的
     */
    public playShareBGForTransition(): void {
        if (this._shareBg) {
            this._shareBg.changeRotationResolution(this._gameRotationResolution);
        }
    }

    public override changeRotationResolution(value: Orientation): void {
        super.changeRotationResolution(value);
        this.checkRotationResolution();
        if (this._shareBg) {
            this._shareBg.changeRotationResolution(value);
        }
    }

    protected override otherRotationResolutionProcess(value: Orientation): void {
        if (value == Orientation.Landscape) {
            this.changeToLandscape();
        } else {
            this.changeToPortrait();
        }
    }

    public startFgAndInitPlaySpPortrait(): void {
        if (this._gameState == GameState.FREE_GAME) {
            this._spPortrait?.playAni(SP_ANI_ID_IDLE);

        } else {
            if (this._spPortrait && this._itemSpPortraitNode) {
                this._spPortrait.forceToStopAniByEmpty();//-走setEmptyAnimation
                this._itemSpPortraitNode.getComponent(UIOpacity).opacity = 0;
            }

        }
    }

    //--showContainerController呼叫的(轉場進FG)
    public checkRotationResolution(): void {

        if (this._gameState == GameState.FREE_GAME) {

            if (this._gameRotationResolution == Orientation.Landscape) {
                if (this._itemSpPortraitNode) {
                    this._itemSpPortraitNode.getComponent(UIOpacity).opacity = 0;
                }

            } else if (this._gameRotationResolution == Orientation.Portrait) {
                if (this._itemSpPortraitNode) {
                    this._itemSpPortraitNode.getComponent(UIOpacity).opacity = 255;
                }
            }

        } else {
            if (this._spPortrait && this._itemSpPortraitNode) {
                this._spPortrait.forceToStopAniByEmpty();//-走setEmptyAnimation
                this._itemSpPortraitNode.getComponent(UIOpacity).opacity = 0;
            }
            this.stopShareBgAni();
        }

    }

}



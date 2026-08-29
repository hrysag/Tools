import { _decorator, Component, Node, sp, Game, UIOpacity } from 'cc';
import { BasicDisplayContainer } from './IBG_Ani';
import { ShareBg } from './ShareBg';
import { Orientation } from '../../../../../../Scripts/Utils/Config';
import { SpineController } from '../../../MyUtils/AnimationSystem/Components/SpineController';
import { GameState } from '../../../DefinitionGameData/GameStateConfigDef';
import { AniCtrlPropDef } from '../../../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
import { SoundList, AudioSourceList } from '../../../DefinitionGameData/SoundList';
const { ccclass, property } = _decorator;
const SP_ANI_ID_IDLE = 'FG_idle';
const SP_ANI_ID_CONNECT = 'FG_connect';
@ccclass('FG_BkgController')
export class FG_BkgController extends BasicDisplayContainer {

    /**
     * 這裡在FG01/02分別在不同的node裡面,所以要搬到不同的node上面
     * (FG1/2共用這個spine控制器)
     */
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

    //--這邊只做一次啟動的動作
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
        //this._shareBg.node.removeFromParent();
        console.log();
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

    //--showAniController呼叫(每次startSpin時呼叫)
    public resetAniState(): void {
        if (this._gameState == GameState.FREE_GAME) {
            this._spPortrait.playAni(SP_ANI_ID_IDLE);
        }
    }

    //-reSetBkgContainerAni
    public cleanBGAniAfterFG(): void {
        //this.clearTracks();
        //this.forceToStopBgAni();
        this.stopAllAni();
    }

    private forceToStopBgAni(): void {
        if (this._shareBg) {
            this._shareBg.stopAllAni();
        }
    }

    public override playAni(value?: string): void {
        if (value) {
            if (this._shareBg) {
                this._shareBg.playAni(value);
            }
        } else {
            this.changeRotationResolution(this._gameRotationResolution);
        }
    }

    //--showContainerController呼叫的(關閉顯示conitainer)
    public override stopAllAni(): void {
        //super.stopAllAni();//--沒有勾選afterDrop根本不會停止
        //this.forceToStopAni();
        this.forceToStopBgAni();
        this.cleanAniState();

    }

    public async playWinAni(): Promise<void> {

        if (this._gameState == GameState.FREE_GAME && this._spPortrait) {
            if (this._itemSpPortraitNode.getComponent(UIOpacity).opacity == 255) {
                AudioManager.instance.playSound(SoundList.AlibabaWin, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
            }
            await this._spPortrait.playAniInPromise(SP_ANI_ID_CONNECT);
            this._spPortrait.playAni(SP_ANI_ID_IDLE);
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



    private getSpPortraitPlayState(): string {
        const playData: AniCtrlPropDef = this._spPortrait.getCurrentSpineAniData();
        if (playData) {
            return playData.targetName;
        }
        return '';
    }

    //--iwindow呼叫的(resize)
    public override changeRotationResolution(value: Orientation): void {
        this._gameRotationResolution = value;
        if (this.node.active) {

            if (this._shareBg) {
                this._shareBg.changeRotationResolution(value);
            }
            this.checkRotationResolution();

            //--舊版本使用的要想一下這個要怎麼換
            /*
            if (!this._thieves) {
                this.checkRotationResolution();
            }*/
        }
        this.otherRotationResolutionProcess(value);
    }

    //--showContainerController呼叫的(轉場進FG)
    public checkRotationResolution(): void {

        if (this._gameState == GameState.FREE_GAME) {

            if (this._gameRotationResolution == Orientation.Landscape) {
                this._itemSpPortraitNode.getComponent(UIOpacity).opacity = 0;

            } else if (this._gameRotationResolution == Orientation.Portrait) {
                this._itemSpPortraitNode.getComponent(UIOpacity).opacity = 255;
            }

        } else {
            this._spPortrait.forceToStopAniByEmpty();//-走setEmptyAnimation
            this._itemSpPortraitNode.getComponent(UIOpacity).opacity = 0;
        }

    }

    protected override otherRotationResolutionProcess(value: Orientation): void {
        if (value == Orientation.Landscape) {
            this.changeToLandscape();
        } else {
            this.changeToPortrait();
        }
    }

    private moveTargetTo(target: Node, container: Node): void {
        if (!target || !container) return;
        target.removeFromParent(); // 強制脫離當前 parent
        container.addChild(target);
        target.setPosition(0, 0, 0);
    }

    protected override changeToLandscape(): void {
        //--很確定裡面只會裝一個才這樣寫的
        const target = this.portrait[0].children[0] || this.landscape[0].children[0];
        if (target) {
            const landscapeNode = this.landscape[0];
            const portraitNode = this.portrait[0];
            landscapeNode.active = (this._camp == 0) ? true : false;
            portraitNode.active = false;
            this.moveTargetTo(target, landscapeNode);
        }
    }

    protected override changeToPortrait(): void {

        const target = this.portrait[0].children[0] || this.landscape[0].children[0];
        if (target) {
            const landscapeNode = this.landscape[0];
            const portraitNode = this.portrait[0];
            portraitNode.active = (this._camp == 0) ? true : false;
            landscapeNode.active = false;
            this.moveTargetTo(target, portraitNode);
        }

    }

}



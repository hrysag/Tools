import { Component, Enum, _decorator, CCBoolean, sp, Node, CCString } from "cc";
import { CleanTrackType } from "../../../MyUtils/AnimationSystem/Definitions/AnimationDataOptions";
import { Orientation } from "../../../../../../Scripts/Utils/Config";
import { IGameState } from "../Components/IGameState";
import { GameState } from '../../../DefinitionGameData/GameStateConfigDef';
export interface IRotationResolution extends Component {
    changeRotationResolution(value: Orientation): void;
}

export interface IBG_Ani extends IRotationResolution {
    stopAllAni(): void;
    playAni(value?: string): void;

}



const { ccclass, property } = _decorator;
Enum(CleanTrackType);
export abstract class AbstractBasicDisplayContainer extends Component implements IBG_Ani, IGameState {

    @property({ visible: true, tooltip: '是否要播放完畢後停止' })
    protected _afterPlayDoStop: boolean = true;
    @property({ type: CleanTrackType, visible: true, tooltip: '清除全部tracks或是當前撥放的trackIndex' })
    protected _clearTracks: CleanTrackType = 0;
    protected _isPlaying: boolean = false;
    protected _isShowing: boolean = false;

    get isPlaying(): boolean {
        return this._isPlaying;
    }

    get isShowing(): boolean {
        return this._isShowing;
    }

    set isShowing(value: boolean) {
        this._isShowing = value;
    }
    /**
     * 這邊因為findComponent他不能接收抽象abstract類別
     */
    abstract stopAllAni(): void;
    abstract playAni(value?: string): void
    abstract changeRotationResolution(value: Orientation): void
    abstract changeGameState(gameState: GameState, camp?: number)

    protected abstract cleanCurrentTrack(): void
    protected abstract clearTracks(): void

    public onAniComplete(): void {
        if (this._afterPlayDoStop) {
            if (this._clearTracks == CleanTrackType.All_TRACKS) {
                this.clearTracks();
            } else if (this._clearTracks == CleanTrackType.CURRENT_TRACK) {
                this.cleanCurrentTrack();
            }
        }
        this._isPlaying = false;
    }
    //--針對沒有選取_afterPlayDoStop的物件,在需要強制停止動畫時使用
    public forceToStopAni(): void {
        if (this._clearTracks == CleanTrackType.All_TRACKS) {
            this.clearTracks();
        } else if (this._clearTracks == CleanTrackType.CURRENT_TRACK) {
            this.cleanCurrentTrack();
        }
    }
}


@ccclass('BasicDisplayContainer')
export class BasicDisplayContainer extends AbstractBasicDisplayContainer {
    @property({ type: Node, visible: true, displayName: 'targetNode', tooltip: '遊戲使用有動畫component的Node' })
    protected _targetSpineNode: Node = null;

    @property({ visible: true, displayName: 'LANDSCAPE_Ani_key', tooltip: '直版ani key' })
    protected _landscapeAniKey: string = '';

    @property({ visible: true, displayName: 'PORTRAIT_Ani_key', tooltip: '橫版ani key' })
    protected _portraitAniKey: string = '';

    @property
    public switchChild: boolean = false;

    @property([Node])
    public landscape: Node[] = [];

    @property([Node])
    public portrait: Node[] = [];


    public initCallBack: () => void = null;
    //---fuck..0702shareBG有可能錯過寫入直橫版的時機.因為它不會常駐在盜賊或是阿里的容器內(它會跳來跳去)
    public _gameRotationResolution: Orientation = Orientation.Landscape;
    protected _targetSpine: sp.Skeleton = null;
    protected _camp: number = -1;
    protected _gameState: GameState = null;
    //--檢查是否執行過init
    get targetSpine(): sp.Skeleton {
        return this._targetSpine;
    }

    set camp(value: number) {
        this._camp = value;
    }

    protected onLoad(): void {
        if (this._targetSpineNode) {
            this._targetSpine = this._targetSpineNode.getComponent(sp.Skeleton);
        }
        this.init();
    }

    public init(): void {

        if (!this._gameState) {
            this.changeGameState(GameState.NORMAL);
        }
        this.initCallBack?.();
    }

    public stopAllAni(): void {
        if (this._targetSpine && this.node.active) {
            this.onAniComplete();
        }
    }
    public playAni(value?: string): void {
        if (value) {
            this._targetSpine?.setAnimation(0, value, true);
        } else {
            this.changeRotationResolution(this._gameRotationResolution);
        }
    }

    public changeRotationResolution(value: Orientation): void {
        this._gameRotationResolution = value;
        if (this.node.active) {
            if (value == Orientation.Landscape) {
                this.playAni(this._landscapeAniKey);

            } else if (value == Orientation.Portrait) {
                this.playAni(this._portraitAniKey);
            }
        }
        this.otherRotationResolutionProcess(value);

    }


    public changeGameState(gameState: GameState, camp?: number) {
        if (this._gameState == gameState) return;
        this._gameState = gameState;
    }

    protected otherRotationResolutionProcess(value: Orientation): void {

    }

    protected cleanCurrentTrack(): void {
        const trackEntry = this._targetSpine?.getCurrent(0);
        if (trackEntry) {
            this._targetSpine?.clearTrack(trackEntry.trackIndex);
        }
        this._targetSpine?.setCompleteListener(null);
    }

    protected clearTracks(): void {

        this._targetSpine?.clearTracks();
        //-https://forum.cocos.org/t/topic/159467/8
        //-這樣清不掉
        this._targetSpine?.setCompleteListener(null);

    }

    protected changeToLandscape(): void {

        for (let i = 0; i < this.landscape.length; i += 1) {
            const landscapeNode = this.landscape[i];
            const portraitNode = this.portrait[i];
            // 注意順序
            landscapeNode.active = true;
            if (this.switchChild) {
                while (portraitNode.children.length !== 0) {
                    const target = portraitNode.children[0];
                    target.parent = landscapeNode;
                    target.setPosition(0, 0, 0);

                }
            }
            portraitNode.active = false;
        }
    }

    protected changeToPortrait(): void {

        for (let i = 0; i < this.landscape.length; i += 1) {
            const landscapeNode = this.landscape[i];
            const portraitNode = this.portrait[i];
            // 注意順序
            portraitNode.active = true;
            if (this.switchChild) {
                while (landscapeNode.children.length !== 0) {
                    // log(`切換${landscapeNode.children[0].name} to ${portraitNode.name}`);
                    const target = landscapeNode.children[0];
                    target.parent = portraitNode;
                    target.setPosition(0, 0, 0);

                }
            }
            landscapeNode.active = false;
        }
    }
}








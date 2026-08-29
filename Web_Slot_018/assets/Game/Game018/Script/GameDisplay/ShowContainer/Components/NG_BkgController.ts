import { _decorator, Component, Node, sp, Animation } from 'cc';
import { BasicDisplayContainer } from './IBG_Ani';
import { Orientation } from '../../../../../../Scripts/Utils/Config';
import { GameState } from '../../../DefinitionGameData/GameStateConfigDef';
const { ccclass, property } = _decorator;
const ANI_PLAY_ID_L = 'NG_Bkg_back_mask_L_ani';
const ANI_PLAY_ID_P = 'NG_Bkg_back_mask_P_ani';
const ANI_PLAY_ID_DEFAULT = 'NG_Bkg_back_default_ani';
@ccclass('NG_BkgController')
export class NG_BkgController extends BasicDisplayContainer {

    /**
     * NG的背景
     * PS:
     * 1.橫板模式下,NG只會有一個咖啡色的底圖
     * 2.直版模式下,NG會有一個咖啡色的底圖+範圍只有一半的會動的背景
     * mask是反向的..美術用動畫去控制mask的範圍(有L和P兩種會在兩種直橫板模式下分別控制L/P這兩個mask的containSize)
     */
    @property({ type: Node, visible: true, displayName: 'NG_Ani_Mask', tooltip: 'NG_遊戲NG_mask_ani動畫node' })
    private _ng_AniMaskLNode: Node = null;
    private _ngMaskAni: Animation = null;
    private _dirtyFlag: boolean = false;

    public override init(): void {

        if (!this._dirtyFlag) {
            this._dirtyFlag = true;
            this._ngMaskAni = this._ng_AniMaskLNode.getComponent(Animation);
            super.init();
        }
    }

    /**
     * 在changeGameMode之前先關閉動畫(只有)
     * 執行processNormalRound時機
     * 1.processNormalRound(每一局結束)
     * 2.processRound(reSpin/Fg每一局)
     * 但是只要狀態與上一次相同就不會繼續往下
     */
    public override stopAllAni(): void {
        //if (this._targetSpine && this._ngMaskAni && this.node.active) {
        if (this._targetSpine && this._ngMaskAni && !this.node.active) {
            //--20250617這邊沒有選取_afterPlayDoStop所以根本不會執行清除
            //--為了處理NG->RE_SPINE的狀態下,背景動畫被觸發重播
            //--這邊FG的時候狀態不會寫進來,因為map就是不同群組(只有同群組的狀態才會改變)
            this.onAniComplete();
        }
    }

    public override onAniComplete(): void {
        this.cleanCurrentTrack();
        this._isPlaying = false;
    }

    /*
     在changeGameMode之前先關閉動畫
     在call playAni(因為送進空字串,所以再走changeRotationResolution)
       if (value) {
            this._targetSpine.setAnimation(0, value, true);
        } else {
            this.changeRotationResolution(this._gameRotationResolution);
        }
       這邊就會被反覆觸發播放NG_bkg_back的動畫了     
    */
    public override changeRotationResolution(value: Orientation): void {

        //this._previousRotationResolution = this._gameRotationResolution;
        this._gameRotationResolution = value;
        //--檢查是否還在播放
        if (this.node.active) {
            if (value == Orientation.Landscape) {

                this.playSpineAniForResolution(this._landscapeAniKey);
                this.playAniCompAniForResolution(ANI_PLAY_ID_L);
                this.changeToLandscape();

            } else if (value == Orientation.Portrait) {

                this.playSpineAniForResolution(this._portraitAniKey);
                this.playAniCompAniForResolution(ANI_PLAY_ID_P);
                this.changeToPortrait();
            }
        }
    }

    //--如果沒有播放動畫(spineComponent) 或是 正在播放的動畫不是指定的動畫
    private playSpineAniForResolution(spineAniKey: string): void {
        const isPlaying = this.isSpineCurrentlyPlaying();
        const isSameAni = this.checkPlayingSameSpineAni(spineAniKey);
        if (!isPlaying || !isSameAni) {
            this.playAni(spineAniKey);
        }
    }
    //--如果沒有播放動畫(animationComponent) 或是 正在播放的動畫不是指定的動畫
    private playAniCompAniForResolution(aniKey: string): void {
        const isPlaying = this.isAniCompCurrentlyPlaying(aniKey);
        const isSameAni = this.checkPlayingSameAni(aniKey);
        if (!isPlaying || !isSameAni) {
            this._ngMaskAni.play(aniKey);
        }
    }

    //--檢查現在播放的Animation動畫是否為同一個名稱<for Animation component>
    private checkPlayingSameAni(aniKey: string): boolean {

        if (this._ngMaskAni) {
            const currentClip = this._ngMaskAni.getState(aniKey);
            if (currentClip) {
                return true;
            } else {
                return false;
            }
        }

    }



    //--檢查現在播放的spine動畫是否為同一個名稱<for spine>
    private checkPlayingSameSpineAni(aniKey: string): boolean {
        const entry: sp.spine.TrackEntry = this._targetSpine.getCurrent(0);
        if (!entry || !entry.animation) return false;
        if (aniKey === entry.animation.name) {
            return true;
        } else {
            return false;
        }
    }

    //--檢查當前的spine物件是否正在播放
    private isAniCompCurrentlyPlaying(aniKey: string): boolean {
        if (this._ngMaskAni) {
            const currentClip = this._ngMaskAni.getState(aniKey);
            if (currentClip && currentClip.isPlaying) {
                return true;
            } else {
                return false;
            }
        }
    }

    //--檢查當前的spine物件是否正在播放
    private isSpineCurrentlyPlaying(trackIndex: number = 0): boolean {
        //--spine animation 預設none也是會抓不到(只有播放才會有值)
        const entry: sp.spine.TrackEntry = this._targetSpine.getCurrent(trackIndex);
        if (!entry) return false;//--播完就會拿不到啦

        const duration = entry.animation?.duration ?? 0;
        if (!entry.loop) {
            return entry.trackTime < duration;
        } else {
            // loop 模式只要還存在 entry 就算持續播放中（timeScale 也要大於 0）
            return this._targetSpine.timeScale > 0;
        }
    }

    protected override cleanCurrentTrack(): void {

        let trackEntry = this._targetSpine.getCurrent(0);
        if (trackEntry) {

            //this._targetSpine.clearAnimation();
            //---creator的API(預設直接清掉第一軌的動畫,並且回到setup pos的狀態)
            /**
             * if (!this.isAnimationCached()) {
                this.clearTrack(trackIndex || 0);
                this.setToSetupPose(); 
            }
            */

            //--spine官方API,只在animationState裡面才有該API(直接過度到空動畫並且直接回到setup pos的狀態)
            this._targetSpine.getState().setEmptyAnimation(0, 0);
        }
        this._targetSpine.setCompleteListener(null);
        this._ngMaskAni.play(ANI_PLAY_ID_DEFAULT);
    }

}



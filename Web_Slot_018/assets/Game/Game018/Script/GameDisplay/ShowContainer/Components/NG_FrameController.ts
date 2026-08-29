import { _decorator, Component, Node, sp, Vec3, v3 } from 'cc';
import { BasicDisplayContainer } from './IBG_Ani';
import { Orientation } from '../../../../../../Scripts/Utils/Config';

const { ccclass, property } = _decorator;

@ccclass('NG_FrameController')
export class NG_FrameController extends BasicDisplayContainer {

    private _isSpineRunning: boolean = false;
    private _dirtyFlag: boolean = false;

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
        }
    }

    public override changeRotationResolution(value: Orientation): void {
        this._gameRotationResolution = value;
        if (value === Orientation.Landscape) {
            this.changeToLandscape();
        } else if (value === Orientation.Portrait) {
            this.changeToPortrait();

        }

        if (this.node.active) {
            //-NG_frame只有橫版的狀態..他的container要縮小而已(直版)縮小0.702，位移y軸至50.661
            if (!this.isSpineCurrentlyPlaying()) {
                this._targetSpine.setAnimation(0, this._landscapeAniKey, true);
                this._isSpineRunning = true;
            }

        }

    }

    //--先這樣拉出來寫,免得以後有得沒的或是判斷條件有變或是spine支援相關API再來處理
    private checkPlayingState(): boolean {
        if (this._targetSpine) {
            return this._isSpineRunning;
        }
        return false;
    }

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

    /*
    protected override update(dt: number): void {
        if (this._testFlag) {
            const spineEntry: sp.spine.TrackEntry = this._targetSpine.getCurrent(0);
            //spineEntry.trackEnd
            
             //* ps:取得spine時間的方法
             //* 1.spine.getCurrent(0)取得TrackEntry(沒有setAnimation的話會是null)
             //* 2.spineEntry.trackTime取得當前時間(單位/秒)
             //* 3.spineEntry.animation.duration取得動畫的總時間(單位/秒)--總時間
             //* 4.spineEntry.getAnimationTime()取得動畫的時間(單位/秒)--現在播放到哪的時間
             //* 5.spineEntry.isComplete()取得動畫是否播放完畢(如果是循環動畫第一次播放完即會變成true)
             //* 6.spineEntry.trackEnd取得動畫的結束時間(單位/秒)--預設為spine的最大上限時間(MAX.FLOAT)
             //* 7.spineEntry.trackTime取得當前時間(單位/秒)--累進(不會因為是循環就會改變..播多久就累進多久)
             //* 7.spineEntry.animationEnd取得動畫的結束時間(單位/秒)--為spine的最大上限時間(MAX.FLOAT)
             
            console.log('spineEntry::', spineEntry, spineEntry.trackEnd);
            console.log('complete::' + spineEntry.isComplete() + '\n' + 'time::' + spineEntry.trackTime + '\n' + 'animationEnd::' + spineEntry.animation.duration + '\n' + 'aniTime:' + spineEntry.getAnimationTime());
        }
    }*/

    public override stopAllAni(): void {
        if (this._targetSpine) {
            this.cleanCurrentTrack();
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
            landscapeNode.active = true;
            portraitNode.active = false;
            this.moveTargetTo(target, landscapeNode);
        }
    }

    protected override changeToPortrait(): void {

        const target = this.portrait[0].children[0] || this.landscape[0].children[0];
        if (target) {
            const landscapeNode = this.landscape[0];
            const portraitNode = this.portrait[0];
            portraitNode.active = true;
            landscapeNode.active = false;
            this.moveTargetTo(target, portraitNode);
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
            //const test = this._targetSpine.getState();
            //console.log('checkAniState::', test, this._targetSpine.animation);
            //this._targetSpine.clearTracks();
        }
        this._isSpineRunning = false;
        this._targetSpine.setCompleteListener(null);
    }



}



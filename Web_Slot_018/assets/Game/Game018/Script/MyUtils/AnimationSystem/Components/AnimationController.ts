import { _decorator, Eventify, macro, Component, Node, Animation, AnimationClip, AnimationState, CCString, CCInteger } from 'cc';
import { IAnimationControl } from '../Definitions/IAnimationControl';
import { ParticleExtension } from './ParticleExtension';
import { AnimationPlayInfo, AnimationCtrlPlayData } from '../Definitions/AnimationDataOptions';
import { SlotMachineIndexInfo } from '../Definitions/AnimationDataOptions';
import { AnimationPlayStateList, AniCtrlPropDef } from './AniStateLists/AnimationPlayStateBase';
import { FindComponent } from '../../FindComponent';




const { ccclass, property } = _decorator;

@ccclass('AnimationController')
export class AnimationController extends Component implements IAnimationControl {

    @property({ type: AnimationPlayStateList, displayName: 'animationPlayStateList', visible: true, tooltip: '單一的識別碼' })
    private _animationPlayStateList: AnimationPlayStateList;

    @property({ type: ParticleExtension, displayName: 'particleSystem', visible: true, tooltip: '粒子系統' })
    particleSystem: ParticleExtension;

    @property({ tooltip: 'prefab(放component的nodeId)的node id' })
    targetNodeId: string = '';//--prefab(放component的nodeId)的node id

    @property({ tooltip: '動畫的FPS' })
    frameRate: number = 60;

    @property({ tooltip: 'prefab單一識別碼' })
    tokenID: string = '';//--單一的識別碼
    slotMachineIndexInfo?: SlotMachineIndexInfo;
    groupID: number[];//--會有同一個物件在不同的group裡面(第四軸重複的)
    isPlaying: boolean;
    keep: boolean;//--不刪除且持續留在場景中

    //-https://www.swiftcafe.io/post/cocos-animation
    //-https://blog.csdn.net/qq_45021180/article/details/104718341

    //--用來存放原始的動畫資料reset將會塞回去
    //private _originAniData:{[key:string]:AniCtrlPropDef};
    private _originAniData: AniCtrlPropDef[];
    private _ani: Animation;
    private _gotoAndStopTime: number;
    private _defaultTarget: AniCtrlPropDef = null;
    private _currentTarget: AniCtrlPropDef = null;
    private _dirtyFirstOnLoad: boolean = false;//---用來判斷是否第一次onLoad


    protected onLoad(): void {
        if (this._dirtyFirstOnLoad) return;
        this._dirtyFirstOnLoad = true;
        this._ani = FindComponent.findComponentInChildren(this.node, Animation);
        this._gotoAndStopTime = 0;
        this._originAniData = [];

        //-_originAniData存放原本美術設定的資料
        this.saveOriginAniData(this._originAniData);

        //--在prefab裡面,已經有default的clip了
        if (!this._animationPlayStateList) {
            this._animationPlayStateList = new AnimationPlayStateList();
            this._animationPlayStateList.clipsInfo = [];
        }

        /**
         *
         * _animationPlayStateList.clipsInfo存放自定義的資料
         * 但在一開始會先寫過一次全部預設的資料到這裡面
         * 然後如果有填寫_animationPlayStateList資料的話,會覆蓋掉原本的資料
         */


        const defaultClipName = this._ani.defaultClip ? this._ani.defaultClip.name : null;

        for (const clip of this._ani.clips) {

            const state: AnimationState = this._ani.getState(clip.name);
            //如果有填寫_animationPlayStateList資料的話,會覆蓋掉原本animation的資料
            let clipData: AniCtrlPropDef = this._animationPlayStateList.clipsInfo.find(data => data.targetName === clip.name);

            if (!clipData) {
                //如果沒有資料的話,會推進去_animationPlayStateList
                clipData = new AniCtrlPropDef();

                clipData.targetName = clip.name;

                if (state) {
                    clipData.delay = state.delay;
                    clipData.repeatCount = state.repeatCount;
                    clipData.speed = state.speed;
                    clipData.wrapMode = state.wrapMode;
                } else {
                    clipData.delay = 0.0;//--engine default
                    clipData.repeatCount = 1;//--engine default
                    clipData.speed = 1.0;//--engine default
                    clipData.wrapMode = AnimationClip.WrapMode.Normal;//--engine default
                }

                this._animationPlayStateList.clipsInfo.push(clipData);

                if (defaultClipName === clip.name) {

                    this._defaultTarget = clipData;
                }
            }
        }

        //--優先權以_animationPlayStateList <useDefaultState>為主    
        if (!this._animationPlayStateList.useDefaultState) {

            this._defaultTarget = this._animationPlayStateList.clipsInfo.find(data => data.useDefault);
        }

        //--如果沒有設定default的clip的話,就會找第一個clip
        if (!this._defaultTarget) {

            this._defaultTarget = this._animationPlayStateList.clipsInfo[0];
        }


        this._ani.stop();
    }

    public init(): void {
        this.keep = false;
    }

    protected saveOriginAniData(aryTarget: AniCtrlPropDef[]): void {

        if (this._ani) {

            aryTarget.push(...this._ani.clips.map(clip => {

                const state: AnimationState = this._ani.getState(clip.name);
                const clipData = new AniCtrlPropDef();
                clipData.targetName = clip.name;

                //--20250402要處理尚未播放時getState會抓不到
                if (state) {
                    clipData.delay = state.delay;
                    clipData.repeatCount = state.repeatCount;
                    clipData.speed = state.speed;
                    clipData.wrapMode = state.wrapMode;
                }

                return clipData;
            }));
        }
    }


    protected restoreOriginAniData(): void {
        if (this._ani) {
            for (let clip of this._ani.clips) {
                let state: AnimationState = this._ani.getState(clip.name);

                let clipData: AniCtrlPropDef = this.getOgirinAniData(clip.name);

                if (this.isDefined(clipData?.delay)) {
                    state.delay = clipData.delay;
                }

                if (this.isDefined(clipData?.repeatCount)) {
                    state.repeatCount = clipData.repeatCount;
                }

                if (this.isDefined(clipData?.speed)) {
                    state.speed = clipData.speed;
                }

                if (this.isDefined(clipData?.wrapMode)) {
                    state.wrapMode = clipData.wrapMode;
                }


                //--將所有的clip的時間歸零,回到第一個frame的狀態
                state.time = 0;
                state.sample();

            }
        }
    }



    public destroyAniController(): void {

    }



    public onAniComplete = (): void => {
        this.isPlaying = false;

    };


    public setAniDataInfo(value: AnimationPlayInfo): void {


        let playData = this.getCustomizeAniCtrlDef(value.targetName);

        let targetData = value as AnimationCtrlPlayData;

        if (!playData) {
            playData = new AniCtrlPropDef();
            playData.targetName = value.targetName;
            this._animationPlayStateList.clipsInfo.push(playData);

        }


        if (this.isDefined(targetData?.wrapMode)) {
            playData.wrapMode = targetData.wrapMode;
        }

        if (this.isDefined(targetData?.speed)) {
            playData.speed = targetData.speed;
        }

        if (this.isDefined(targetData?.repeatCount)) {
            playData.repeatCount = targetData.repeatCount;
        }

        if (this.isDefined(targetData?.delay)) {
            playData.delay = targetData.delay;
        }

        this._defaultTarget = playData;

    }

    public playAniWithAniCtrDef(value: AniCtrlPropDef): void {

    }

    //public playAni(value?: AnimationPlayInfo): void {
    public playAni(value?: string): void {

        this.setAniStateForCustomizeClipData(value);
        //this._ani.once(Animation.EventType.FINISHED, this.onAniComplete);
        this._ani.once(Animation.EventType.FINISHED, () => {
            this.onAniComplete();
        });

        /*
        this.schedule(()=>{
            let aniState: AnimationState = this._ani.getState(value);
            let clip=this._ani.clips.find(clip => clip.name === value);
            console.log(
                'check_aniState:\n' +
                `  time: ${aniState.time}\n` +
                `  current: ${aniState.current}\n` +
                `  duration: ${aniState.duration}\n` +
                `  speed: ${aniState.speed}\n` +
                `  repeatCount: ${aniState.repeatCount}\n`+
                `  ratio: ${aniState.ratio}\n`+
                `  sample: ${clip.sample}`
              );
           
            //clip.
         },0.16,macro.REPEAT_FOREVER)
        */
        if (!value) {
            value = this._currentTarget.targetName;
        }

        this._ani.play(value);
        this.isPlaying = true;

    }

    public stopAni(): void {

        if (this._ani) {
            this._ani.off(Animation.EventType.FINISHED);
            this._ani.off(Animation.EventType.LASTFRAME);
            this._ani.stop();
        }

        this._gotoAndStopTime = 0;
        this._currentTarget = null;
        this.isPlaying = false;

        if (this.particleSystem) {
            this.particleSystem.stopParticle();
        }

        //--call back function要在處理
    }

    //--20250722-待補
    public stopPromiseAni(): void {

    }

    public speedUpAni(value: number): void {

    }

    public slowDownAni(value: number): void {

    }

    /**
     * 
     * @param value clip name
     * 沒有輸入的話將會針對整個動畫(全部的clip)進行暫停
     */
    public pauseAni(value?: string): void {
        if (value) {
            let aniState: AnimationState = this._ani.getState(value);
            if (aniState) {
                aniState.pause();
            }
        } else {
            this._ani.pause();
        }
    }

    /**
     * 
     * @param value clip name
     * 沒有輸入的話將會針對整個動畫(全部的clip)進行恢復
     */
    public resumeAni(value?: string): void {

        if (value) {
            let aniState: AnimationState = this._ani.getState(value);
            if (aniState) {
                aniState.resume();
            }

        } else {

            this._ani.resume();
        }
    }

    public gotoAndPlayByFrame(value: string, frame: number): void {
        let aniState: AnimationState = this._ani.getState(value);

        let timeByFrame: number = this.getTimeByFrame(value, frame);

        if (timeByFrame > 0 && aniState) {
            aniState.time = timeByFrame;

            this._ani.play(value);

        } else {

            console.error(`AnimationClip "${value}" not found `);

        }

    }

    public gotoAndPlayByTime(value: string, time: number): void {
        let aniState: AnimationState = this._ani.getState(value);

        if (aniState) {
            aniState.time = time;
            this._ani.play(value);
        }
    }


    public gotoAndStopByTime(value: string, time: number): void {
        let aniState: AnimationState = this._ani.getState(value);

        if (aniState) {
            aniState.time = time;
            aniState.pause();
        }
    }

    public gotoAndStopByFrame(value: string, frame: number): void {
        let aniState: AnimationState = this._ani.getState(value);

        let timeByFrame: number = this.getTimeByFrame(value, frame);

        if (timeByFrame > 0 && aniState) {
            aniState.time = timeByFrame;

            aniState.pause();

        } else {

            console.error(`AnimationClip "${value}" not found `);
        }
    }

    //--播放到那個time然後停止
    public playToTimeAndStop(value: string, time: number): void {
        this._gotoAndStopTime = time;

        this._currentTarget = this.getCustomizeAniCtrlDef(value);

        this.schedule(this.checkAniStateTimeEveryFrame, 1 / 60, macro.REPEAT_FOREVER);

        this.isPlaying = true;

        this._ani.play(value);
    }


    //--播放到那個Frame然後停止
    public playToFrameAndStop(value: string, frame: number): void {

        let timeByFrame: number = this.getTimeByFrame(value, frame);

        if (timeByFrame > 0) {
            this._gotoAndStopTime = timeByFrame;

            this._currentTarget = this.getCustomizeAniCtrlDef(value);

            this.schedule(this.checkAniStateTimeEveryFrame, 1 / 60, macro.REPEAT_FOREVER);

            this.isPlaying = true;

            this._ani.play(value);

        } else {

            console.error(`AnimationClip "${value}" not found `);
        }

    }

    public addEventToAniByFrame(value: string, frame: number): void {

    }

    public addEventToAniByTime(value: string, time: number): void {

    }


    public reversePlay(value: string, speed: number = -1): void {
        let aniState: AnimationState = this._ani.getState(value);

        if (aniState) {
            aniState.speed = speed;

            this._ani.play(value);
        }
    }


    public beforeDestroy(): void {

    }
    public resetData(): void {
        this.tokenID = '';//--單一的識別碼
        this.slotMachineIndexInfo = null;
        this.groupID = [];//--會有同一個物件在不同的group裡面(第四軸重複的)
        /*
        if (this.isPlaying) {
            this.stopAni();
        }*/
        this.stopAni();
        this.restoreOriginAniData();
    }

    public playAniWithCallBack(callBack: Function, value?: string): void {
        this._ani.once(Animation.EventType.FINISHED, () => {
            callBack?.();
            this.onAniComplete();
        });

        this.setAniStateForCustomizeClipData(value);
        if (!value) {
            value = this._currentTarget.targetName;
        }

        this._ani.play(value);
        this.isPlaying = true;
    }

    public playAniInPromise(value?: string): Promise<void> {


        this.setAniStateForCustomizeClipData(value);

        value = value || this._currentTarget?.targetName;


        return new Promise((resolve, reject) => {

            let aniState: AnimationState = this._ani.getState(value);

            if (!aniState) {
                console.warn('No animation state found:', value);

                reject();

                return;
            }

            const addEventListener = (eventType, callback: () => void) => {
                //--執行完後就會被移除,不需要做hasEventListener 
                this._ani.once(eventType, callback);
            };

            if (aniState.wrapMode === AnimationClip.WrapMode.Normal) {

                addEventListener(Animation.EventType.FINISHED, () => {
                    this.isPlaying = false;
                    resolve();
                });

            } else if (aniState.wrapMode === AnimationClip.WrapMode.Loop) {

                addEventListener(Animation.EventType.LASTFRAME, () => {
                    this.unscheduleAllCallbacks();
                    resolve();
                });
            }


            this.isPlaying = true;

            this._ani.play(value);

        });
    }


    //---這裡可以把它寫在一個basic class裡面 然後在繼承上來
    private getCustomizeAniCtrlDef(value: string): AniCtrlPropDef {

        return this._animationPlayStateList.clipsInfo.find(clip => clip.targetName === value);
    }

    private getTimeByFrame(value: string, frame: number): number {
        let clip: AnimationClip = this._ani.clips.find(clip => clip.name === value);

        if (clip) {
            let durationInSeconds: number = clip.duration;//-totaltime

            let totalFrame: number = Math.floor(durationInSeconds * clip.sample);

            //--確保根據總幀數和動畫總時長正確計算出目標時間(原本沒有* durationInSeconds)
            let triggerTime: number = (frame / totalFrame) * durationInSeconds;
            /**
             * 原本如果知道fps的話可以直接這樣算
             *  const time = frameNumber / this.frameRate;
             */

            return triggerTime;

        } else {

            return -1;
        }

    }


    private checkAniStateTimeEveryFrame = (): void => {
        let aniState: AnimationState = this._ani.getState(this._currentTarget.targetName);

        if (!aniState) {
            console.error(`AnimationState "${this._currentTarget.targetName}" not found.`);

            this.unschedule(this.checkAniStateTimeEveryFrame);

            this.stopAni();

            return;
        }

        //--加入誤差值是因為可能會是浮點數
        if (aniState.time >= this._gotoAndStopTime - 0.001) {
            this.unschedule(this.checkAniStateTimeEveryFrame);

            this.stopAni();

        }

    }

    private isDefined<T>(value: T | undefined | null): boolean {
        return value !== undefined && value !== null;
    }


    private setAniStateForCustomizeClipData(value: string): void {
        let clipData: AniCtrlPropDef = this.checkPlayData(value);
        if (clipData) {
            let aniState: AnimationState = this._ani.getState(value);
            if (aniState) {
                aniState.wrapMode = clipData.wrapMode ?? aniState.wrapMode;
                aniState.speed = clipData.speed ?? aniState.speed;
                aniState.repeatCount = clipData.repeatCount ?? aniState.repeatCount;
                aniState.delay = clipData.delay ?? aniState.delay;
            }
        }
    }

    private checkPlayData(targetName: string): AniCtrlPropDef {
        const foundData = this._animationPlayStateList.clipsInfo.find(data => data.targetName === targetName);
        if (foundData) {
            this._currentTarget = foundData;
            return foundData;
        }

        this._currentTarget = this._defaultTarget;
        return this._defaultTarget;
    }

    private getOgirinAniData(value: string): AniCtrlPropDef {
        return this._originAniData.find(clip => clip.targetName === value);
    }


}



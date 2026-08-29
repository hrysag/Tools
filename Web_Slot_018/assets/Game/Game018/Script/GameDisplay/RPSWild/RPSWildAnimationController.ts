import { _decorator, CCBoolean, Enum, Component, Node, sp } from 'cc';
import { IAnimationControl } from '../../MyUtils/AnimationSystem/Definitions/IAnimationControl';
import { ParticleExtension } from '../../MyUtils/AnimationSystem/Components/ParticleExtension';
import { AnimationPlayInfo, SlotMachineIndexInfo } from '../../MyUtils/AnimationSystem/Definitions/AnimationDataOptions';
import { CustomAnimationController } from '../../MyUtils/AnimationSystem/Components/CustomAnimationController';
import { AnimationPlayStateList, AniCtrlPropDef } from '../../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase';
import { FindComponent } from '../../MyUtils/FindComponent';
import { RPSWildState, RPSWildResult, RPSWild_AniState } from './RPSWildDef';
import { GameUtils } from '../../MyUtils/GameUtils';
const { ccclass, property } = _decorator;

enum CleanTrackType {
    All_TRACKS = 0,
    CURRENT_TRACK = 1
}

Enum(CleanTrackType);

@ccclass('RPSWildAnimationController')

export class RPSWildAnimationController extends CustomAnimationController {
    /**
     * 猜拳wild的動畫控制器
     */
    tokenID: string;//--單一的識別碼
    slotMachineIndexInfo?: SlotMachineIndexInfo;
    groupID: number[];//--會有同一個物件在不同的group裡面(第四軸重複的)
    isPlaying: boolean;
    particleSystem: ParticleExtension;

    @property({ visible: true, tooltip: '是否要播放完畢後停止' })
    private _afterPlayDoStop: boolean = true;

    @property({ type: CleanTrackType, visible: true, tooltip: '清除全部tracks或是當前撥放的trackIndex' })
    private _clearTracks: CleanTrackType = 0;

    @property({ type: AnimationPlayStateList, displayName: 'animationPlayStateList', visible: true, tooltip: '單一的識別碼' })
    private _animationPlayStateList: AnimationPlayStateList;

    private _spineBack: sp.Skeleton;
    private _spineFront: sp.Skeleton;
    private _mapBackSkin: Map<string, Map<number, string>>;
    private _mapAni: Map<number, Map<string, string>>;
    private _campData: number;//-0阿里(左)/1盜賊(右)
    private _targetId: string;//--目標的id

    private _defaultSkin: string = 'default';
    private _currentTarget: AniCtrlPropDef = null;
    private _defaultTarget: AniCtrlPropDef = null;
    //--預設不啟動
    private _wildState: RPSWildState = RPSWildState.WILD_3;
    private _previousWildState: RPSWildState = RPSWildState.WILD_3;
    private _level: number;
    //--0621
    private _resolveBack?: () => void;
    private _resolveFront?: () => void;
    //--0702--針對每次旋轉都要表演connect的動畫處理(尚未決定勝負的狀態下)
    private _isCampDecided: boolean = false;//--是否已經決定陣營(尚未進行第一次決定陣營的旋轉)

    //--0626
    //private _onBackSpineComplete: (() => void) | null = null;

    get spineBack(): sp.Skeleton {
        return this._spineBack;
    }
    get spineFront(): sp.Skeleton {
        return this._spineFront;
    }
    get animationPlayStateList(): AnimationPlayStateList {
        return this._animationPlayStateList;
    }
    //--狀態改變的時候要寫入
    set wildState(value: RPSWildState) {
        this._previousWildState = this._wildState;
        this._wildState = value;
    }

    get wildState(): RPSWildState {
        return this._wildState;
    }

    //--init要先設
    set campData(value: number) {
        this._campData = value;
        this._targetId = this._campData == 0 ? 'icon_08' : 'icon_09';
    }

    set isCampDecided(value: boolean) {
        this._isCampDecided = value;
    }

    protected onLoad(): void {

        //console.log('RPSWildAnimationController onLoad', this._animationPlayStateList);
    }


    public init(): void {

        let spineBackTargetNode = this.node.getChildByName('icon_08_09_bot_Skel');
        this._spineBack = FindComponent.findComponentInChildren(spineBackTargetNode, sp.Skeleton);

        let spineFrontTargetNode = this.node.getChildByName('icon_08_09_frame_Skel');
        this._spineFront = FindComponent.findComponentInChildren(spineFrontTargetNode, sp.Skeleton);

        this._mapBackSkin = new Map([
            [
                'icon_08',//--這個同時也是_spineFront的skin id
                new Map([
                    [RPSWildResult.P, 'icon_08_paper'],//--paper
                    [RPSWildResult.S, 'icon_08_scissors'],//-scissors
                    [RPSWildResult.R, 'icon_08_stone']//--rock
                ])
            ],
            [
                'icon_09',//--這個同時也是_spineFront的skin id
                new Map([
                    [RPSWildResult.P, 'icon_09_paper'],//--paper
                    [RPSWildResult.S, 'icon_09_scissors'],//-scissors
                    [RPSWildResult.R, 'icon_09_stone']//--rock
                ])
            ]
        ]);
        //---back/front的動畫id都一樣

        this._mapAni = new Map([
            [
                RPSWildState.WILD_0,
                new Map([
                    [RPSWild_AniState.APPEAR, 'wild0_appear'],//--轉輪轉到這個wild的時候(停軸使用)
                    [RPSWild_AniState.IDLE, 'wild0_idle'],//--待機使用
                    [RPSWild_AniState.CONNECT, 'wild0_connect'],//--中線使用
                    [RPSWild_AniState.BATTLE, 'wild1_battle'],//--旋轉/猜拳對戰使用
                    [RPSWild_AniState.ROLL, 'wild1_battle'],//--旋轉/猜拳對戰使用
                    [RPSWild_AniState.NEXT, 'wild0_to_wild1'],//---取得勝利要升級的時候使用
                    [RPSWild_AniState.PREV, '']//--平手的時候使用(第一個好像沒有QQ?)
                ])
            ],
            [
                RPSWildState.WILD_1,
                new Map([
                    [RPSWild_AniState.APPEAR, 'wild1_appear'],//--轉輪轉到這個wild的時候(停軸使用)
                    [RPSWild_AniState.IDLE, 'wild1_idle'],//--待機使用
                    [RPSWild_AniState.CONNECT, 'wild1_connect'],//--中線使用
                    [RPSWild_AniState.BATTLE, 'wild1_battle'],//--旋轉/猜拳對戰使用
                    [RPSWild_AniState.ROLL, 'wild1_battle'],//--旋轉/猜拳對戰使用
                    [RPSWild_AniState.NEXT, 'wild1_to_wild2'],//---取得勝利要升級的時候使用
                    [RPSWild_AniState.PREV, 'wild1_to_wild0']//--平手的時候使用(退回上一個,且狀態要回到上一個wild0)
                ])
            ],
            [
                RPSWildState.WILD_2,
                new Map([
                    [RPSWild_AniState.APPEAR, 'wild2_appear'],//--轉輪轉到這個wild的時候(停軸使用)
                    [RPSWild_AniState.IDLE, 'wild2_idle'],//--待機使用
                    [RPSWild_AniState.CONNECT, 'wild2_connect'],//--中線使用
                    [RPSWild_AniState.BATTLE, 'wild2_battle'],//--旋轉/猜拳對戰使用
                    [RPSWild_AniState.ROLL, 'wild2_battle'],//--旋轉/猜拳對戰使用
                    [RPSWild_AniState.NEXT, ''],//---取得勝利要升級的時候使用(目前只有這wild1有退回與升級)
                    [RPSWild_AniState.PREV, '']//--平手的時候使用(目前只有這wild1有退回與升級)
                ])
            ]
        ]);

        this.isPlaying = false;
        this._isCampDecided = false;
        let key = this.getAniNameByWildRoundState(RPSWildState.WILD_0, RPSWild_AniState.CONNECT);
        this._defaultTarget = this.checkSpinePlayData(key);
        this._wildState = RPSWildState.WILD_3;
        this._previousWildState = RPSWildState.WILD_3;
        this._level = 0;
    }

    public changeDefaultTarget(key: string): void {
        this._defaultTarget = this.checkSpinePlayData(key);
    }

    //---輪播的時候會用到要去撥放反覆的重線動畫
    //--PS aniData已經在stopRolling的時候有設定過了
    /*
    public setAniDataForConnect(): AniCtrlPropDef {
        const connectSuffix = 'connect';
        const cloneSuffix = '_clone';
        const wildStateKey=(this._wildState==RPSWildState.WILD_3)?RPSWildState.WILD_0:this._wildState;
        const wildConnectKey = this.getAniNameByWildRoundState(wildStateKey, RPSWild_AniState.CONNECT);
       
        
        const setAndReturn = (aniData: AniCtrlPropDef): AniCtrlPropDef => {
            this._defaultTarget = aniData;
            this._currentTarget = aniData;
            return aniData;
        };
    
        if (this._defaultTarget) {
            if (this._defaultTarget.targetName.includes(connectSuffix)) {
                if (!this._defaultTarget.targetName.includes(cloneSuffix)) {
                    const cloneAniData = this.createCloneAniConnectData(this._defaultTarget);
                    this._animationPlayStateList.clipsInfo.push(cloneAniData);
                    return setAndReturn(cloneAniData);
                }
                return setAndReturn(this._defaultTarget);
            } else {
                const clonedExisting = this.getAniData(wildConnectKey + cloneSuffix);
                if (clonedExisting) {
                    return setAndReturn(clonedExisting);
                } else {
                    const baseAniData = this.getAniData(wildConnectKey);
                    if (baseAniData) {
                        const newClone = this.createCloneAniConnectData(baseAniData);
                        this._animationPlayStateList.clipsInfo.push(newClone);
                        return setAndReturn(newClone);
                    }
                    return null;
                }
            }
        } else {
            const clonedExisting = this.getAniData(wildConnectKey + cloneSuffix);
            if (clonedExisting) {
                return setAndReturn(clonedExisting);
            } else {
                const baseAniData = this.getAniData(wildConnectKey);
                if (baseAniData) {
                    const newClone = this.createCloneAniConnectData(baseAniData);
                    this._animationPlayStateList.clipsInfo.push(newClone);
                    return setAndReturn(newClone);
                }
                return null; 
            }
        }
    }*/


    private getAniData(value: string): AniCtrlPropDef {
        return this._animationPlayStateList.clipsInfo.find(clip => clip.targetName === value);
    }

    public createCloneAniConnectData(): AniCtrlPropDef {
        const wildStateKey = (this._wildState == RPSWildState.WILD_3) ? RPSWildState.WILD_0 : this._wildState;
        const wildConnectKey = this.getAniNameByWildRoundState(wildStateKey, RPSWild_AniState.CONNECT);
        const baseAniData = this.getAniData(wildConnectKey);
        let cloneAniData = GameUtils.deepCloneForObject(baseAniData);
        cloneAniData.loop = true;
        return cloneAniData;
    }

    public playAniWithAniCtrDef(value: AniCtrlPropDef): void {

        this._spineBack.timeScale = (value.timeScale) ? value.timeScale : 1;
        //--儘管是loop=true,但每次都會觸發..
        this._spineBack.setCompleteListener(null);
        this._spineBack.setCompleteListener(this.onAniComplete);

        let trackIndex = (value.trackIndex) ? value.trackIndex : 0;
        this.isPlaying = true;
        this._spineBack.setAnimation(trackIndex, value.targetName, value.loop);

        this._spineFront.timeScale = (value.timeScale) ? value.timeScale : 1;
        trackIndex = (value.trackIndex) ? value.trackIndex : 0;
        this._spineFront.setAnimation(trackIndex, value.targetName, value.loop);
    }



    /**
     * _spineFront有較為單純的skin設定,依照陣營不同分左右兩邊而已
     * _spineBack有較為複雜的skin設定,依照陣營不同分左右兩邊,且每個陣營有三種不同的skin(猜拳的型態)
     * 做之前一定要先寫入campData
     */
    public setFrontSpineSkin(): void {

        if (this._targetId != '') {
            //let index=this.getSkinFrontEnumIndex(this._targetId);
            //@ts-ignore
            //this._spineFront._defaultSkinIndex = index;
            //@ts-ignore
            //console.log('check_skin_index',this._spineFront.defaultSkin);
            this._spineFront.setSkin(this._targetId);
            //console.log('check_skin', this._spineFront.skeletonData.getSkinsEnum());

        }
    }

    private getSkinFrontEnumIndex(skinName: string): number {
        let skinData = this._spineFront.skeletonData.getSkinsEnum();

        for (let i in skinData) {
            //console.log('check_skinData', i, skinData[i]);

            if (i == skinName) {
                return skinData[i];
            }
        }

    }

    private getSkinBackEnumIndex(skinName: string): number {
        let skinData = this._spineBack.skeletonData.getSkinsEnum();

        for (let i in skinData) {
            console.log('check_skinData', i, skinData[i]);

            if (i == skinName) {
                return skinData[i];
            }
        }

    }

    public getShowAniTargetName(wildState: RPSWildState, aniState: RPSWild_AniState): string {
        return this._mapAni.get(wildState).get(aniState);
    }

    /**
     * https://forum.cocos.org/t/creator-v2-0-1-spine-setskin/65817/5
     * 要在addChild之後才能設定skin(addChild之後才會有start/update)
     * 這裡專門用來設定_spineBack的skin
     * @param value 直接送
     */
    public changeSkin(value: RPSWildResult): void {

        if (this._spineBack) {
            let skinId = this._mapBackSkin.get(this._targetId).get(value);
            //let index=this.getSkinFrontEnumIndex(this._targetId);
            //@ts-ignore
            //this._spineBack._defaultSkinIndex = index;
            //console.log('check_skin_index', skinId);
            if (skinId) {
                this._spineBack.setSkin(skinId);
            }
        }
    }

    public onAniComplete = (): void => {


        this._spineBack.getState().setEmptyAnimation(0, 0);
        /*
        if (this._clearTracks == CleanTrackType.CURRENT_TRACK) {
            this.cleanCurrentTrack();
        } else {
            this.clearTracks();
        }*/

        this.isPlaying = false;
        /*
        //-this._afterPlayDoStop沒有勾選將不會停止相關動作
        if (this._afterPlayDoStop) {
            if (this._clearTracks == CleanTrackType.All_TRACKS) {
                this.clearTracks();
            } else if (this._clearTracks == CleanTrackType.CURRENT_TRACK) {
                this.cleanCurrentTrack();
            }
        }*/

    }

    public destroyAniController(): void {

    }

    /**
     * 這個用來改變wild的外框狀態(基本上進入猜拳模式就從0->1的狀態了,
     * 在完成出現該輪後,只要進到後續猜拳都已經有贏一把了,直接到L2的外觀
     * )
     * 只要與現在的不同狀態(RPSWildState),就必須要改變外框的狀態
     * 前一次的狀態將會記錄在_previousWildState裡面(用來判斷是否要退回上一個狀態(可能會需要))
     * @param wildState 
     */
    //public changeWildOutFrame(wildState: RPSWildState, level: number): Promise<void> {
    public changeWildOutFrame(wildState: RPSWildState, levelIndex: RPSWild_AniState): Promise<void> {

        this.wildState = wildState;
        let changeFrameData: string = this.getAniNameByWildRoundState(wildState, levelIndex);

        return new Promise<void>((resolve) => {
            if (changeFrameData == '') {
                resolve();
            } else {
                this.playAniInPromise(changeFrameData).then(() => {
                    resolve();
                });
            }
        });


    }

    public playAni(value: string): void {

        let key: string = value;
        if (value == RPSWild_AniState.IDLE && this._wildState != RPSWildState.WILD_3) {
            let targetState = this._wildState;
            //--要秀完才會changeFrame來去改變狀態..但流程修改後必須提前,所以先強塞
            if (this._wildState == RPSWildState.WILD_1) {
                targetState = RPSWildState.WILD_2;
            }
            key = this.getAniNameByWildRoundState(targetState, RPSWild_AniState.IDLE);
        }
        const playData = this.checkSpinePlayData(key);

        this._spineBack.timeScale = (playData.timeScale) ? playData.timeScale : 1;
        //--儘管是loop=true,但每次都會觸發..
        this._spineBack.setCompleteListener(null);
        let trackIndex = (playData.trackIndex) ? playData.trackIndex : 0;
        this.isPlaying = true;
        this._spineBack.setAnimation(trackIndex, playData.targetName, playData.loop);

        this._spineFront.timeScale = (playData.timeScale) ? playData.timeScale : 1;
        trackIndex = (playData.trackIndex) ? playData.trackIndex : 0;
        this._spineFront.setAnimation(trackIndex, playData.targetName, playData.loop);

    }

    public stopAni(): void {

        this._resolveBack?.();   // 確保 resolve 掉等待中的 Promise
        this._resolveFront?.();
        this._resolveBack = undefined;
        this._resolveFront = undefined;

        this._spineBack.getState().setEmptyAnimation(0, 0);
        this._spineFront.getState().setEmptyAnimation(0, 0);
        //this.onAniComplete();
        this.isPlaying = false;
    }

    //--20250722-待補
    public stopPromiseAni(): void {
        console.log();
    }

    public pauseAni(): void {

    }

    public resumeAni(): void {

    }

    public setAniDataInfo(value: AnimationPlayInfo): void {

    }

    public beforeDestroy(): void {

    }

    private forceToDoBeforeDestroy(): void {
        this.stopAni();
        if (this._clearTracks == CleanTrackType.CURRENT_TRACK) {
            this.cleanCurrentTrack();
        } else {
            this.clearTracks();
        }
        this.isPlaying = false;

        if (this._spineBack) {
            this._spineBack.setToSetupPose();
            this._spineBack.setBonesToSetupPose();
            this._spineBack.setSlotsToSetupPose();
        }
        if (this._spineFront) {
            this._spineFront.setToSetupPose();
            this._spineFront.setBonesToSetupPose();
            this._spineFront.setSlotsToSetupPose();
        }
    }
    public resetData(): void {

        this._isCampDecided = false;
        this._targetId = '';
        this._campData = -1;
        this.isPlaying = false;
        this._currentTarget = null;
        this._defaultTarget = null;
        this.tokenID = '';//--單一的識別碼
        this.slotMachineIndexInfo = null;
        this.groupID = [];
        this._wildState = RPSWildState.WILD_3;
        this._previousWildState = RPSWildState.WILD_3;
        this._level = 0;
        //this.stopAni();
        this.forceToDoBeforeDestroy();


    }

    public playAniWithCallBack(callBack: Function, value?: string): void {

    }

    public async playAniInPromiseForFirstRound(value: string): Promise<void> {
        //--this.playSpineBackAniWithPromise(value),這個控制拳頭與背景 
        await this.playSpineBackAniWithPromise(value);

    }

    public playAniInPromise(value: string): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            const promises: Promise<void>[] = [
                this.playSpineBackAniWithPromise(value),
                this.playSpineFrontAniWithPromise(value)
            ];
            try {

                await Promise.all(promises);
                resolve();

            } catch (e) {
                reject(e);
            }

            /**
             * 0708再度取消
             * 針對0702新增需求第二輪的猜拳過後不管輸贏都需要播放connect的wild動畫(已經透過RPSWildSystem.checkWildIsCampDecidedAndPlay在停輪強制播出)
             * 這個判斷是針對既有流程再有雙wild又有中線的情況下會透過playAniGroupsWithPromise播放群組動畫此時要略過
             * playAniGroupsWithPromise是透過default的值去直接啟動,所有不會帶值進來.
             * 在第二輪的猜拳已經決定了陣營,_isCampDecided=true
             */
            /*
            if (!value && this._isCampDecided) {
                resolve();
            } else {
                const promises: Promise<void>[] = [
                    this.playSpineBackAniWithPromise(value),
                    this.playSpineFrontAniWithPromise(value)
                ];
                try {

                    await Promise.all(promises);
                    resolve();

                } catch (e) {
                    reject(e);
                }
            }*/
        });
    }

    /**
     * 
     * 控制拳頭與背景
     */
    private playSpineBackAniWithPromise(value: string): Promise<void> {
        let playData = this.checkSpinePlayData(value);

        return new Promise((resolve) => {
            this._spineBack.setCompleteListener(null);

            this._resolveBack = () => {
                this._spineBack.setCompleteListener(null);
                resolve();
                this._resolveBack = undefined;
            }
            //this._onBackSpineComplete = this._resolveBack;

            this._spineBack.timeScale = (playData.timeScale) ? playData.timeScale : 1;
            //--儘管是loop=true,但每次都會觸發..
            this._spineBack.setCompleteListener(this._resolveBack);
            let trackIndex = (playData.trackIndex) ? playData.trackIndex : 0;
            this.isPlaying = true;
            this._spineBack.setAnimation(trackIndex, playData.targetName, playData.loop);
        });
    }

    /**
     * 控制外框與前景
     */
    private playSpineFrontAniWithPromise(value: string): Promise<void> {

        let playData = this.checkSpinePlayData(value);
        return new Promise((resolve) => {

            this._spineFront.setCompleteListener(null);

            this._resolveFront = () => {
                this._spineFront.setCompleteListener(null);
                resolve();
                this._resolveFront = undefined;
            }
            this._spineFront.timeScale = (playData.timeScale) ? playData.timeScale : 1;
            //--儘管是loop=true,但每次都會觸發..
            this._spineFront.setCompleteListener(this._resolveFront);
            let trackIndex = (playData.trackIndex) ? playData.trackIndex : 0;
            this.isPlaying = true;
            this._spineFront.setAnimation(trackIndex, playData.targetName, playData.loop);
        });
    }


    public getAniNameByWildRoundState(state: RPSWildState, aniState: RPSWild_AniState): string {

        let str = this._mapAni.get(state).get(aniState);
        return str;
    }

    private clearTracks(): void {

        this._spineBack.clearTracks();
        this._spineFront.clearTracks();
        this._spineBack.setCompleteListener(null);
        this._spineFront.setCompleteListener(null);
    }

    private cleanCurrentTrack(): void {

        let trackEntry = this._spineBack.getCurrent(0);
        if (trackEntry) {
            this._spineBack.clearTrack(trackEntry.trackIndex);
        }

        trackEntry = this._spineFront.getCurrent(0);
        if (trackEntry) {
            this._spineFront.clearTrack(trackEntry.trackIndex);
        }

        this._spineBack.setCompleteListener(null);
        this._spineFront.setCompleteListener(null);
    }

    private checkSpinePlayData(targetName: string): AniCtrlPropDef {

        /**
         * 因為兩個spine的animation的名稱都取一樣,
         * 所以current/default不需要區分是哪個spine(back/front)使用的
         */

        for (let data of this._animationPlayStateList.clipsInfo) {
            if (data.targetName == targetName) {
                this._currentTarget = data;
                return data;
            }
        }
        return this._defaultTarget;
    }

}
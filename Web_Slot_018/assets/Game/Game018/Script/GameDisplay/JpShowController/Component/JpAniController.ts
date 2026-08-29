import { _decorator, Component, Node } from 'cc';
import { AniCtrlPropDef } from '../../../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase';
import { SpineController } from '../../../MyUtils/AnimationSystem/Components/SpineController';
import { FindComponent } from '../../../MyUtils/FindComponent';
import { WinType } from 'db://assets/Scripts/Utils/Config';
import { Orientation } from '../../../../../../Scripts/Utils/Config';
import { GameUtils } from '../../../MyUtils/GameUtils';
const { ccclass, property } = _decorator;
const JPAniKey = ['big', 'super', 'mega', 'epic'];
const JPKeySuffix = '_win_';

@ccclass('JpAniController')
export class JpAniController extends Component {

    private _spineTarget: SpineController = null;
    private _aryJPKey: string[];
    private _mapJPKeySuffix: Map<string, string>;
    private _currentJPType: WinType;
    private _screenRotationResolution: Orientation = null;
    private _aryAniCtrlPropDefs: AniCtrlPropDef[];
    private _onSpineCompleteHandler: (entry: any) => void = undefined;


    get screenRotationResolution(): Orientation {
        return this._screenRotationResolution;
    }

    protected onLoad(): void {
        //super.onLoad();
    }

    public init(): void {
        this._spineTarget = FindComponent.findComponentInChildren(this.node, SpineController);
        this._spineTarget.init();
        this._aryJPKey = ['epic', 'mega', 'super', 'big'];
        this._mapJPKeySuffix = new Map([
            ['loop', '_win_loop'],
            ['coin', '_win_coin'],
            ['in', '_win_in']
        ]);
        //this.changeScreenRotationResolution(Orientation.Landscape);
        this._aryAniCtrlPropDefs = [];
        this._currentJPType = 0;
        this.node.active = false;

    }

    //--螢幕旋轉變化
    public changeScreenRotationResolution(value: Orientation): void {
        if (this._screenRotationResolution != value) {
            this._screenRotationResolution = value;
            this.playAniForChangeRotationResolution(value);
        }
    }

    public playJPAnimation(value: WinType, rotationType?: string): void {
        this._currentJPType = value;
        this.node.active = true;
        /*
        let rotationTypeKey = '';
        if (rotationType) {
            rotationTypeKey = rotationType;
        } else {
            rotationTypeKey = (this._screenRotationResolution == Orientation.Landscape) ? 'L' : 'P';
        }*/

        const rotationKey = rotationType ??
            (this._screenRotationResolution === Orientation.Landscape ? 'L' : 'P');

        this.showJPWin(rotationKey);
    }

    public closeAndStop(): void {

        const spine = this._spineTarget.spine;
        if (this._onSpineCompleteHandler !== undefined) {
            //console.warn('[JpAniController] 清除未完成的 spine complete listener');
            spine.setCompleteListener(null);
            this._onSpineCompleteHandler = undefined;
        }

        for (const aniData of this._aryAniCtrlPropDefs) {
            const trackEntry = spine.getCurrent(aniData.trackIndex);
            if (trackEntry) {
                spine.clearTrack(trackEntry.trackIndex);
            }
        }

        this._aryAniCtrlPropDefs = [];
        this._spineTarget.resetData();
        this.node.active = false;
    }

    private playAniForChangeRotationResolution(value: Orientation): void {

        if (!this.node.active || !this._spineTarget) return;

        const rotationType = (value == Orientation.Landscape) ? 'L' : 'P';
        const aniData_LP: AniCtrlPropDef = this._spineTarget.getCustomizeSpineTrackEntry(rotationType);
        const spine = this._spineTarget.spine;
        //--LP
        if (aniData_LP && spine) {
            spine.setAnimation(aniData_LP.trackIndex, aniData_LP.targetName, aniData_LP.loop);
        }

        /*
        if (this.node.active && this._spineTarget) {
            const rotationType = (value == Orientation.Landscape) ? 'L' : 'P';
            const aniData_LP: AniCtrlPropDef = this._spineTarget.getCustomizeSpineTrackEntry(rotationType);
            const spine = this._spineTarget.spine;
            //--LP
            if (aniData_LP && spine) {
                spine.setAnimation(aniData_LP.trackIndex, aniData_LP.targetName, aniData_LP.loop);
            }
        }*/
    }

    private getJPKey(value: WinType, key: string): string {
        let indexKey = this._aryJPKey[value];
        let keySuffix = this._mapJPKeySuffix.get(key);
        return indexKey + keySuffix;
    }

    private afterJPAniShowCompleteEvent = async (value: AniCtrlPropDef) => {

        //await GameUtils.Defer(600);
        await GameUtils.DeferByTweenPromise(600 / 1000);//--原本單位是毫秒現在換算成秒
        const spine = this._spineTarget.spine;
        //spine.setCompleteListener(null); // 清除監
        //--loop
        spine.setAnimation(value.trackIndex, value.targetName, value.loop);

    }

    private async showJPWin(rotationType: string): Promise<void> {

        const spine = this._spineTarget.spine;
        const aniData_coin = this._spineTarget.getCustomizeSpineTrackEntry(this.getJPKey(this._currentJPType, 'coin'));
        const aniData_in = this._spineTarget.getCustomizeSpineTrackEntry(this.getJPKey(this._currentJPType, 'in'));
        const aniData_loop = this._spineTarget.getCustomizeSpineTrackEntry(this.getJPKey(this._currentJPType, 'loop'));
        const aniData_LP = this._spineTarget.getCustomizeSpineTrackEntry(rotationType);

        this._aryAniCtrlPropDefs = [aniData_coin, aniData_in, aniData_loop, aniData_LP];

        // 播放 coin +  --LP 動畫
        spine.setAnimation(aniData_coin.trackIndex, aniData_coin.targetName, aniData_coin.loop);//--coin
        spine.setAnimation(aniData_LP.trackIndex, aniData_LP.targetName, aniData_LP.loop);//--LP(直橫)

        // in動畫結束後播放 loop
        spine.setCompleteListener(null); // 清除上次的監聽


        if (this._onSpineCompleteHandler) {
            spine.setCompleteListener(null);
            this._onSpineCompleteHandler = undefined;
        }

        this._onSpineCompleteHandler = (trackEntry) => {
            //spine.setAnimation(aniData_loop.trackIndex, aniData_loop.targetName, aniData_loop.loop);
            spine.setCompleteListener(null); // 清除上次的監聽
            this._onSpineCompleteHandler = undefined; // 清除監聽器引用
            this.afterJPAniShowCompleteEvent(aniData_loop);
        };

        //spine.setCompleteListener(onInComplete);
        spine.setCompleteListener(this._onSpineCompleteHandler);
        //--in
        spine.setAnimation(aniData_in.trackIndex, aniData_in.targetName, aniData_in.loop);


        /*
        let spine = this._spineTarget.spine;
        const targetKey_coin = this.getJPKey(this._currentJPType, 'coin');
        const aniData_coin: AniCtrlPropDef = this._spineTarget.getCustomizeSpineTrackEntry(targetKey_coin);
        const targetKey_in = this.getJPKey(this._currentJPType, 'in');
        const aniData_in: AniCtrlPropDef = this._spineTarget.getCustomizeSpineTrackEntry(targetKey_in);
        const targetKey_loop = this.getJPKey(this._currentJPType, 'loop');
        const aniData_loop: AniCtrlPropDef = this._spineTarget.getCustomizeSpineTrackEntry(targetKey_loop);
        const aniData_LP: AniCtrlPropDef = this._spineTarget.getCustomizeSpineTrackEntry(rotationType);
        this._aryAniCtrlPropDefs = [aniData_coin, aniData_in, aniData_loop, aniData_LP];
        //--coin
        spine.setAnimation(aniData_coin.trackIndex, aniData_coin.targetName, aniData_coin.loop);
        //--LP
        spine.setAnimation(aniData_LP.trackIndex, aniData_LP.targetName, aniData_LP.loop);


        const spineCompleteHandler = (trackEntry) => {
            spine.setCompleteListener(null);
            //--fuck..根本沒演完就送了complete
            GameUtils.Defer(600).then(() => {
                //--loop
                spine.setAnimation(aniData_loop.trackIndex, aniData_loop.targetName, aniData_loop.loop);
            });
        }
        spine.setCompleteListener(null);
        spine.setCompleteListener(spineCompleteHandler);
        //--in
        spine.setAnimation(aniData_in.trackIndex, aniData_in.targetName, aniData_in.loop);
        */
    }

}



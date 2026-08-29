import { _decorator, Component, Node, sp } from 'cc';
import { Orientation } from "../../../../../../Scripts/Utils/Config";
import { BasicDisplayContainer } from './IBG_Ani';
import { FindComponent } from '../../../MyUtils/FindComponent';
const { ccclass, property } = _decorator;

@ccclass('ShareBg')
export class ShareBg extends Component {

    @property({ type: Node, visible: true, displayName: 'ShareBkNode', tooltip: '共用BG的Node' })
    private _shareNode: Node = null;

    @property({ visible: true, displayName: 'LANDSCAPE_Ani_key', tooltip: '直版ani key' })
    private _landscapeAniKey: string = '';

    @property({ visible: true, displayName: 'PORTRAIT_Ani_key', tooltip: '橫版ani key' })
    private _portraitAniKey: string = '';

    private _shareBg: sp.Skeleton = null;
    private _mapAniKey: Map<string, Map<string, string>>;
    private _fgCamp: string = '';
    private _dirtyFlag: boolean = false;
    private _gameRotationResolution: Orientation = Orientation.Landscape;
    private _camp: number = -1;

    set camp(value: number) {
        this._camp = value;
        if (value != 0 && value != 1) {
            this._fgCamp = '';
        } else {
            this._fgCamp = (this._camp == 0) ? 'FG_01' : 'FG_02';
        }
    }

    protected onLoad(): void {

        if (!this._dirtyFlag) {
            if (this._shareNode) {
                this._dirtyFlag = true;
                this._shareBg = this._shareNode.getComponent(sp.Skeleton);
                //this._shareBg = this._shareNode.getComponent(SpineController);
                //this._shareBg.init();
                this.init();
            }

        }
    }

    public init(): void {
        this._mapAniKey = new Map([
            [
                'L',
                new Map([
                    ['FG_01', 'Fg_01_L'],
                    ['sub', 'FG_01_sub_L'],
                    ['FG_02', 'Fg_02_L']
                ])
            ],
            [
                'P',
                new Map([
                    ['FG_01', 'Fg_01_P'],
                    ['sub', 'FG_01_sub_P'],
                    ['FG_02', 'Fg_02_P']
                ])
            ]
        ]);

    }

    private playMutiTrackAni(rotationKey: string): void {
        const aniKey1 = this._mapAniKey.get(rotationKey).get(this._fgCamp);
        const aniKey2 = this._mapAniKey.get(rotationKey).get('sub');
        //this._shareBg.playMutipleAni([aniKey1, aniKey2]);
        this._shareBg.setAnimation(0, aniKey1, true);
        this._shareBg.setAnimation(1, aniKey2, true);
    }

    private cleanCurrentTrack(): void {

        //--不適用,因為共用下播放的狀態和軌道不同
        //this._shareBg?.getState().setEmptyAnimation(0, 0);

        if (this._camp == 0) {
            this._shareBg.clearTrack(0);
            this._shareBg.clearTrack(1);
        } else {
            const trackEntry = this._shareBg.getCurrent(0);
            if (trackEntry) {
                this._shareBg.clearTrack(trackEntry.trackIndex);
            }
        }
    }

    public clearTracks(): void {

        this._shareBg.clearTracks();
        this._shareBg.setCompleteListener(null);
        this.unscheduleAllCallbacks();
    }


    public cleanBGAniAfterFG(): void {
        this.clearTracks();
    }

    public stopAllAni(): void {
        this.clearTracks();
    }

    //--iwindow呼叫的(resize)
    public changeRotationResolution(value: Orientation): void {
        this._gameRotationResolution = value;
        const comp = FindComponent.findComponentInChildren(this.node.parent.parent, BasicDisplayContainer);
        if (comp) {
            if (comp._gameRotationResolution != this._gameRotationResolution) {
                this._gameRotationResolution = comp._gameRotationResolution;
            }

        }

        if (this.node.active) {
            let rotationKey: string = '';
            if (this._gameRotationResolution == Orientation.Landscape) {
                rotationKey = this._landscapeAniKey;
            } else if (this._gameRotationResolution == Orientation.Portrait) {
                rotationKey = this._portraitAniKey;
            }

            if (this._camp == 0) {
                this.playMutiTrackAni(rotationKey);
            } else if (this._camp == 1) {
                this.playAni(this._mapAniKey.get(rotationKey).get(this._fgCamp));
            }
        }

    }

    public playAni(value?: string): void {
        if (value) {
            this._shareBg?.setAnimation(0, value, true);
        } else {
            const comp = FindComponent.findComponentInChildren(this.node.parent.parent, BasicDisplayContainer);
            if (comp) {
                this._gameRotationResolution = comp._gameRotationResolution;
            }
            this.changeRotationResolution(this._gameRotationResolution);
        }
    }
}



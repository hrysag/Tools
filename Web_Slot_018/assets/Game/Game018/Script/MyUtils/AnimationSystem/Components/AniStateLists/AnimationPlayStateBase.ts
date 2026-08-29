import { _decorator } from 'cc';
//import { AnimationPlayParamsList } from '../../Definitions/AnimationDataOptions';
import { AnimationPlayParams } from '../../Definitions/AnimationDataOptions';
import { IAnimationControl } from '../../Definitions/IAnimationControl';
const { ccclass, property } = _decorator;

@ccclass('AniCtrlPropDef')

export class AniCtrlPropDef implements AnimationPlayParams {

    @property({ tooltip: '循環播放' })
    public loop: boolean = false;

    @property({ tooltip: '重複次數' })
    public repeatCount: number = 0;

    @property({ tooltip: '延遲播放' })
    public delay: number = 0;

    @property({ tooltip: '動畫片段名稱' })
    public targetName: string = '';

    @property({ tooltip: '播放速度' })
    public speed: number = 1;

    @property({ tooltip: '播放模式' })
    public wrapMode: number = 0;

    @property({ tooltip: 'timescale' })
    public timeScale: number = 1;

    @property({ tooltip: 'useDefault' })
    public useDefault: boolean = false;

    @property({ tooltip: 'trackIndex' })
    public trackIndex: number = 0;

    @property({ tooltip: 'skinName' })
    public skinName: string = '';
    //--要塞入事件通知的影格事件--
    @property({ tooltip: 'eventFrameType' })
    public eventFrameType: string = '';

    @property({ tooltip: 'useCompleteListen' })
    public useCompleteListen: boolean = true;
}

@ccclass('AnimationPlayStateList')

//export class AnimationPlayStateList implements AnimationPlayParamsList {
export class AnimationPlayStateList {

    @property({ visible: true, tooltip: '是否啟用自訂state' })
    useDefaultState: boolean = true;

    //@ts-ignore
    @property({ type: [AniCtrlPropDef], tooltip: '自定義動畫片段清單(播放幾個就放幾個)', visible: function () { return !this.useDefaultState } })
    clipsInfo: AniCtrlPropDef[] = [];

}


@ccclass('SpineSequenceItem')

export class SpineSequenceItem {

    @property({ tooltip: '動畫的序列群組名稱' })
    public SequenceId: string = '';

    @property({ tooltip: '是否循環播放這個播放列表' })
    public loopSequence: boolean = false;

    @property({ type: [AniCtrlPropDef], tooltip: '動畫片段資料' })
    public sequence: AniCtrlPropDef[] = [];
}



@ccclass('SpineSequenceList')
export class SpineSequenceList {

    @property({ type: [SpineSequenceItem], tooltip: '動畫序列清單' })
    public sequenceList: SpineSequenceItem[] = [];

    @property({ tooltip: '是否循環播<整個>播放列表' })
    public loopAllSequence: boolean = false;

}
//-IAnimationControl
export class IAniWithAniCtrl {
    public IAni: IAnimationControl;
    public aniCtrl: AniCtrlPropDef;
}



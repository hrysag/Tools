import { _decorator, Component, Node } from 'cc';
import { IAnimationControl } from '../Definitions/IAnimationControl';
import { AniCtrlPropDef } from '../Components/AniStateLists/AnimationPlayStateBase';
import { ParticleExtension } from './ParticleExtension';
import { AnimationPlayInfo, SlotMachineIndexInfo } from '../Definitions/AnimationDataOptions';

const { ccclass, property } = _decorator;

@ccclass('MixedASController')
export class MixedASController extends Component {

    tokenID: string;//--單一的識別碼
    slotMachineIndexInfo?: SlotMachineIndexInfo;
    groupID: number[];//--會有同一個物件在不同的group裡面(第四軸重複的)
    isPlaying: boolean;
    particleSystem: ParticleExtension;
    keep: boolean;

    protected onLoad(): void {

    }

    public init(): void {

    }

    public destroyAniController(): void {

    }


    public onAniComplete: () => void;

    /*
    public setAniTarget(value: AnimationPlayInfo): void {

    }*/

    public playAniWithAniCtrDef(value: AniCtrlPropDef): void {

    }

    public playAni(value: string): void {

    }

    public stopAni(): void {

    }

    public pauseAni(): void {

    }

    public resumeAni(): void {

    }

    public setAniDataInfo(value: AnimationPlayInfo): void {

    }

    public beforeDestroy(): void {

    }
    public resetData(): void {

    }

    public playAniWithCallBack(callBack: Function, value?: string): void {

    }

    //--20250722-待補
    public stopPromiseAni(): void {

    }


    public playAniInPromise(value: string): Promise<void> {
        return null
    }
}



import { _decorator, Component, Node } from 'cc';
import { IAnimationControl } from '../Definitions/IAnimationControl';
import { ParticleExtension } from './ParticleExtension';
import { AnimationPlayInfo, SlotMachineIndexInfo } from '../Definitions/AnimationDataOptions';
import { AniCtrlPropDef } from './AniStateLists/AnimationPlayStateBase';

const { ccclass, property } = _decorator;

@ccclass('CustomAnimationController')
export class CustomAnimationController extends Component implements IAnimationControl {

    tokenID: string;//--單一的識別碼
    slotMachineIndexInfo?: SlotMachineIndexInfo;
    groupID: number[];//--會有同一個物件在不同的group裡面(第四軸重複的)
    isPlaying: boolean;
    particleSystem: ParticleExtension;
    keep: boolean;//--不刪除且持續留在場景中

    protected onLoad(): void {

    }

    public init(): void {

    }

    public onAniComplete: () => void;

    public destroyAniController(): void {

    }

    public playAniWithAniCtrDef(value: AniCtrlPropDef): void {

    }

    public playAni(value: string): void {

    }

    public stopAni(): void {

    }

    //--20250722-待補
    public stopPromiseAni(): void {

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

    public playAniInPromise(value: string): Promise<void> {
        return null
    }
}



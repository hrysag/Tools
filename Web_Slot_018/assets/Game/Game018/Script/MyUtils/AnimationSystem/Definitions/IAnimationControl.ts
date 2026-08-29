import { AnimationPlayInfo, SlotMachineIndexInfo } from './AnimationDataOptions';
import { AniCtrlPropDef } from '../Components/AniStateLists/AnimationPlayStateBase';
import { ParticleExtension } from '../Components/ParticleExtension';
import { IBasicPoolObject } from '../../ObjectPoolManager/Definitions/IBasicPoolObject';
import { Component } from 'cc';




export interface IAnimationControl extends IBasicPoolObject {

    tokenID: string;//--單一的識別碼
    slotMachineIndexInfo?: SlotMachineIndexInfo;
    groupID: number[];//--會有同一個物件在不同的group裡面(第四軸重複的)
    isPlaying: boolean;
    particleSystem: ParticleExtension;
    init: () => void;
    //parentNodeId: string;
    //rootNode: Node;//--乘載這個animation的最上頭根結點(這樣做很危險啊)
    onAniComplete: () => void;
    //setAniTarget(value: AnimationPlayInfo): void;//--已經變成component了..不太需要再做這個
    //playAni(value?: AnimationPlayInfo): void;
    playAni(value: string): void;
    playAniWithAniCtrDef(value: AniCtrlPropDef): void;
    stopAni(): void;
    stopPromiseAni(): void;//--強制中止promise動畫(ex:表演到一半的時候直接停止進行下面的動作(中斷輪播之類的))
    pauseAni(): void;
    resumeAni(): void;
    setAniDataInfo(value: AnimationPlayInfo): void;//--透過此方法來設定播放屬性
    //beforeDestroy(): void;
    //resetData(): void;
    destroyAniController(): void;
    playAniWithCallBack(callBack: Function, value?: string): void;
    playAniInPromise(value?: string): Promise<void>;
}





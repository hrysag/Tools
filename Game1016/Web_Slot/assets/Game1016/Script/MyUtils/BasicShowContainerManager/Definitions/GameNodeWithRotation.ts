//import { Orientation } from 'db://assets/Scripts/Utils/Config';
import { IBasicShowContainer } from '../IBasicShowContainerManager';
import { IGameMode } from '../../ReferencePathForMyUtils';
import { Orientation } from 'db://assets/Scripts/ModuleEntry';
//--將由IBasicShowContainerManager接管
export interface IGameNodeWithRotation extends IBasicShowContainer {
    changeRotationResolution(value: Orientation): void;
}
export interface IBG_Ani extends IBasicShowContainer {
    stopAllAni(): void;
    playAni(value?: string): void;
}




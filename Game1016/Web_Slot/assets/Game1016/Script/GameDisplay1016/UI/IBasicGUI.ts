import { Vec3 } from "cc";
//--PS我也不想這樣事後用補的方式=..=
export interface IBasicGUI {
    getFGCountWPos(): Vec3 
    openFGCountUI():Promise<void>
    triggerFGCountUp(value: number): Promise<void>
}
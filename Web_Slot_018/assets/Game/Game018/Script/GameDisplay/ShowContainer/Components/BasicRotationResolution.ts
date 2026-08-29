import { Component, Enum, _decorator, CCBoolean, sp, Node, CCString } from "cc";
import { Orientation } from "../../../../../../Scripts/Utils/Config";
import { IRotationResolution } from "./IBG_Ani";

const { ccclass, property } = _decorator;

@ccclass('BasicRotationResolution')
export class BasicRotationResolution extends Component implements IRotationResolution {
    public changeRotationResolution(value: Orientation): void {

    };
}

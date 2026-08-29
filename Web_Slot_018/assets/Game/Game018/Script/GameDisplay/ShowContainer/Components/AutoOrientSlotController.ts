import { _decorator, CCBoolean, Component, Node, log, screen } from 'cc';
import { Orientation } from '../../../../../../Scripts/Utils/Config';
import { SlotMachineController018 } from '../../../Slot/SlotMachineController018';
import { AutoOrientAndSetPos } from './AutoOrientAndSetPos';

/**
 * 繼承原本的 AutoOrientation 類別
 * 這個類別是用來處理自動旋轉的擴展
 * 因為有些只是需要切換動畫的key即可
 */
const { ccclass, property } = _decorator;
@ccclass('AutoOrientSlotController')
export class AutoOrientSlotController extends AutoOrientAndSetPos {

    //--to override it
    protected override otherProcessForOrientation(orientation: Orientation): void {
        const targetComponent: SlotMachineController018 = this.node.getComponent(SlotMachineController018);
        //--重新計算每個reel icon的world position
        targetComponent.changeRotationResolution(orientation);
    }



} 
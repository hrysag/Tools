import { _decorator, CCBoolean, Component, Node, log, screen } from 'cc';
import { AutoOrientation } from '../../../../../../Scripts/Utils/AutoOrientation';
import { Orientation } from '../../../../../../Scripts/Utils/Config';
import { BasicDisplayContainer } from './IBG_Ani';
import { BasicRotationResolution } from './BasicRotationResolution';
import { FindComponent } from '../../../MyUtils/FindComponent';

/**
 * 繼承原本的 AutoOrientation 類別
 * 這個類別是用來處理自動旋轉的擴展
 * 因為有些只是需要切換動畫的key即可
 */
const { ccclass, property } = _decorator;
@ccclass('AutoOrientExtension')
export class AutoOrientExtension extends AutoOrientation {

    //this.onResizeCall=;
    /*
    public override onResize(orientation: Orientation): void {
        let targetComponent = FindComponent.findComponentInChildren(this.node, BasicRotationResolution);
        if (!targetComponent) {
            //--需要轉換的其他物件
            targetComponent = FindComponent.findComponentInChildren(this.node, BasicDisplayContainer);
        }
        if (targetComponent) {
            targetComponent.changeRotationResolution(orientation);
        }
        super.onResize(orientation);
    }*/

    public override onResizeCall = (orientation: Orientation) => {
        let targetComponent = FindComponent.findComponentInChildren(this.node, BasicRotationResolution);
        if (!targetComponent) {
            //--需要轉換的其他物件
            targetComponent = FindComponent.findComponentInChildren(this.node, BasicDisplayContainer);
        }
        if (targetComponent) {
            targetComponent.changeRotationResolution(orientation);
        }
    }


} 
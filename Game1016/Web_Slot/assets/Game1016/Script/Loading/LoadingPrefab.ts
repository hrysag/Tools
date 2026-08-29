import { _decorator, Component, Node } from 'cc';
import { IWindowResize, Orientation } from 'db://assets/Scripts/ModuleEntry';
//import { IWindowResize } from 'db://assets/Scripts/Utils/IWindowResize';
//port { Orientation } from 'db://assets/Scripts/Utils/Config';
const { ccclass, property } = _decorator;

@ccclass('LoadingPrefab')
export class LoadingPrefab extends IWindowResize {

    public onWindowResize(orientation: Orientation): void {
        if (orientation === Orientation.Landscape) {
            // Handle landscape orientation
            this.node.setPosition(0, 61, 0);
        } else if (orientation === Orientation.Portrait) {
            // Handle portrait orientation
            this.node.setPosition(0, 92, 0);
        }

    }
}



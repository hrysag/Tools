import { _decorator, CCBoolean, Component, Node, log, screen } from 'cc';
import { Orientation } from '../../../../../../Scripts/Utils/Config';
import { IWindowResize } from 'db://assets/Scripts/Utils/IWindowResize';

/**
 * 繼承原本的 AutoOrientation 類別
 * 這個類別是用來處理自動旋轉的擴展
 * 因為有些只是需要切換動畫的key即可
 */
const { ccclass, property } = _decorator;
@ccclass('AutoOrientAndSetPos')

export class AutoOrientAndSetPos extends IWindowResize {

    /**
     * 換容器+setPosition(0,0,0)
     */
    @property(CCBoolean)
    public switchChild: boolean = false;

    @property([Node])
    public landscape: Node[] = [];

    @property([Node])
    public portrait: Node[] = [];

    public override onWindowResize(orientation: Orientation): void {
        if (orientation === Orientation.Landscape) {
            this.changeToLandscape();
        }
        else if (orientation === Orientation.Portrait) {
            this.changeToPortrait();
        }
        this.otherProcessForOrientation(orientation);
    }
    //--to override it
    protected otherProcessForOrientation(orientation: Orientation): void {

    }


    protected changeToLandscape(): void {
        for (let i = 0; i < this.landscape.length; i += 1) {
            const landscapeNode = this.landscape[i];
            const portraitNode = this.portrait[i];
            // 注意順序
            landscapeNode.active = true;
            if (this.switchChild) {
                while (portraitNode.children.length !== 0) {
                    const target = portraitNode.children[0];
                    target.parent = landscapeNode;
                    target.setPosition(0, 0, 0);

                }
            }
            portraitNode.active = false;
        }
    }

    protected changeToPortrait(): void {
        for (let i = 0; i < this.landscape.length; i += 1) {
            const landscapeNode = this.landscape[i];
            const portraitNode = this.portrait[i];
            // 注意順序
            portraitNode.active = true;
            if (this.switchChild) {
                while (landscapeNode.children.length !== 0) {
                    // log(`切換${landscapeNode.children[0].name} to ${portraitNode.name}`);
                    const target = landscapeNode.children[0];
                    target.parent = portraitNode;
                    target.setPosition(0, 0, 0);

                }
            }
            landscapeNode.active = false;
        }
    }

}
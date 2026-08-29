import { _decorator, Component, Node } from 'cc';
import { IWindowResize } from 'db://assets/Scripts/Utils/IWindowResize';
import { Orientation } from 'db://assets/Scripts/Utils/Config';
import { BasicGameStateAndRotationResolution } from './IGameState';
const { ccclass, property } = _decorator;

@ccclass('NG_SP_SpriteIWindowResize')
export class NG_SP_SpriteIWindowResize extends BasicGameStateAndRotationResolution {

    protected landscapeChange(): void {
        this.node.setPosition(0, 0, 0);
        this.node.setScale(1, 1, 1);
    }

    //-NG_SP_Sprite只有橫版的狀態..他的container要縮小而已(直版)縮小0.702，位移y軸至50.661
    protected portraitChange(): void {
        this.node.setPosition(0, 50.661, 0);
        this.node.setScale(0.702, 0.702, 0.702);
    }
}
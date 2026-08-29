import { _decorator, Component, Node, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LineInfoSprite')
export class LineInfoSprite extends Component {

    @property({ type: [SpriteFrame], tooltip: "symbol圖" })
    public symbolSpriteFrame: SpriteFrame[] = [];

    protected onLoad(): void {
        this.node.getComponent(Sprite).spriteFrame = this.symbolSpriteFrame[49];
    }

    public updateLine(line: number): void {
        line--;
        this.node.getComponent(Sprite).spriteFrame = this.symbolSpriteFrame[line];

    }
}


import { _decorator, Canvas, Color, Component, Label, Node, UITransform, view } from 'cc';
const { ccclass } = _decorator;

@ccclass('ScreenInfoTest')
export class ScreenInfoTest extends Component {
    private label: Label | null = null;
    private canvasTransform: UITransform | null = null;

    start() {
        this.label = this.node.addComponent(Label);
        this.label.fontSize = 24;
        this.label.enableOutline = true;
        this.canvasTransform = this.getCanvasFromParentRecursively(this.node).getComponent(UITransform);
    }

    update(deltaTime: number) {
        let text = `Screen: ${screen.width}x${screen.height}\n`;
        text += `Window: ${window.innerWidth}x${window.innerHeight}\n`;
        text += `Design: ${view.getDesignResolutionSize().width}x${view.getDesignResolutionSize().height}\n`;
        if (this.canvasTransform) {
            text += `Canvas: ${Math.round(this.canvasTransform.width)}x${Math.round(this.canvasTransform.height)}\n`;
        }
        text += `VisibleSize: ${Math.round(view.getVisibleSize().width)}x${Math.round(view.getVisibleSize().height)}\n`;
        text += `VisiblePixels: ${Math.round(view.getVisibleSizeInPixel().width)}x${Math.round(view.getVisibleSizeInPixel().height)}\n`;

        const canvasElement = document.getElementById('GameCanvas');
        if (canvasElement) {
            text += `Client: ${canvasElement.clientWidth}x${canvasElement.clientHeight}\n`;
            text += `Offset: ${canvasElement.offsetWidth}x${canvasElement.offsetHeight}\n`;
            text += `Scroll: ${canvasElement.scrollWidth}x${canvasElement.scrollHeight}\n`;
        }

        this.label.string = text;
    }

    private getCanvasFromParentRecursively(node: Node): Canvas | null {
        let canvas = node.getComponent(Canvas);
        if (canvas) {
            return canvas;
        }

        if (node.parent) {
            return this.getCanvasFromParentRecursively(node.parent);
        }

        return null;
    }
}



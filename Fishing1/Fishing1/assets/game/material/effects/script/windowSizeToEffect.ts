import { _decorator, Component, Vec2, Size, screen, Material } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('windowSizeToEffect')
export class windowSizeToEffect extends Component {

    size: Size = new Size(1920, 1080);
    @property({ type: Material })
    material: Material;

    //設置當前畫面尺寸給material的effect
    setSize() {
        let resolution = new Vec2(this.size.width, this.size.height);
        this.material.setProperty('u_resolution', resolution);
    }

    update() {
        if (this.size.width != screen.windowSize.width || this.size.height != screen.windowSize.height) {
            this.size = screen.windowSize;
            this.setSize();//將當前畫面尺寸給material的effect
            // console.log("目前畫面尺寸",this.size)
        }
    }
}
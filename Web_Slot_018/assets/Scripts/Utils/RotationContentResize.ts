import { _decorator, Component, math, Node, Rect, UITransform, Vec2 } from 'cc';
import { Orientation } from './Config';
const { ccclass, property } = _decorator;

@ccclass('RotationContentResize')
export class RotationContentResize extends Component {

    @property(math.Size)
    private landscapeContent: math.Size = new math.Size(0, 0);

    @property(math.Size)
    private portraitContent: math.Size = new math.Size(0, 0);


    public onRotationResize(orientation: Orientation) {
        if (orientation == Orientation.Landscape) {
            this.getComponent(UITransform).setContentSize(this.landscapeContent.width, this.landscapeContent.height);
        }
        else {
            this.getComponent(UITransform).setContentSize(this.portraitContent.width, this.portraitContent.height);
        }

    }
}



import { _decorator, CCString, Component, Label, Node } from 'cc';
const { ccclass, property, requireComponent } = _decorator;


@ccclass('LocalizationLabel')
@requireComponent(Label)
export class LocalizationLabel extends Component {

    @property(CCString)
    key: string = '';

    public updateLabel(t: Function): void {
        this.key = this.key.trim();
        if (this.key) {
            this.getComponent(Label).string = t(this.key);
            return;
        }
        console.error(`Node "${this.node.name}"  No content for language`);
    }
}



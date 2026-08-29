import { _decorator, Button, Component, Node, UITransform, Widget } from 'cc';
import { RotationResize } from '../../Scripts/Utils/RotationResize';
import { GenericSound, Orientation } from '../../Scripts/Utils/Config';
import { Utility } from '../../Scripts/Utils/Utility';
import { AudioManager } from '../../Scripts/Audio/AudioManager';
import { WebViewH5 } from './WebViewH5';
const { ccclass, property } = _decorator;


@ccclass('HistoryUI')
export class HistoryUI extends Component {

    @property(Node)
    private closeBtn: Node;

    @property(Node)
    private BGNode: Node;

    @property(Node)
    private webviewRoot: Node;

    @property(Node)
    private webviewNode: Node;

    @property(Node)
    private bgBtn: Node;

    private url = '';

    public onBGBtnClickCallback: () => void = null;

    public init() {
        Utility.addEventHandlerToButton(this.closeBtn, this, 'onCloseBtnClick');
        Utility.addEventHandlerToButton(this.bgBtn, this, 'onBGBtnClick');
        this.getComponent(RotationResize).onRotationResize = this.onRotationResize.bind(this);

        this.webviewNode.getComponent(WebViewH5).init();
        this.webviewNode.getComponent(Widget).updateAlignment();
    }


    private onRotationResize(orientation: Orientation) {
        if (orientation === Orientation.Landscape) {
            this.BGNode.getComponent(UITransform).setContentSize(665, 568);
            this.webviewRoot.getComponent(UITransform).setContentSize(650, 493);
        }
        else if (orientation === Orientation.Portrait) {
            this.BGNode.getComponent(UITransform).setContentSize(665, 747);
            this.webviewRoot.getComponent(UITransform).setContentSize(650, 673);
        }
    }

    private onCloseBtnClick = () => {
        AudioManager.instance.playGenericSound(GenericSound.Public_Off);
        this.hideUI();
    }

    public showUI() {
        this.node.setActive(true);
        this.webviewNode.getComponent(WebViewH5).setUrl(this.url);
    }

    public setHistoryUrl(url) {
        this.webviewNode.getComponent(WebViewH5).setUrl(url);
        this.url = url;
    }

    public hideUI() {
        this.node.setActive(false);
        this.closeBtn.getComponent(Button).resetStatus();
        this.webviewNode.getComponent(WebViewH5).setUrl('');
    }

    private onBGBtnClick() {
        this.onBGBtnClickCallback?.();
    }
}

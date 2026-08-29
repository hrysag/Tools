import { _decorator, BlockInputEvents, Button, Component, Node } from 'cc';
import { GenericUIRes } from './GenericUIRes';
import { Utility } from '../../../Utils/Core';
import { AudioManager } from '../../../Utils/Audio';
import { GenericSound } from '../../Definition';
const { ccclass, property } = _decorator;

@ccclass('MenuUI')
export class MenuUI extends Component {

    @property(Node)
    private closeBtn: Node;

    @property(Node)
    private exitBtn: Node;

    @property(Node)
    private historyBtn: Node;

    @property(Node)
    private payTableBtn: Node;

    @property(Node)
    private ruleBtn: Node;

    @property(Node)
    private soundBtn: Node;

    @property(Node)
    private bgBtn: Node;

    public onRuleBtnClickCallback: () => void = null;
    public onPayTableBtnClickCallback: () => void = null;
    public onHistoryBtnClickCallback: () => void = null;
    public onMenuUIHideCallback: () => void = null;
    public onBGBtnClickCallback: () => void = null;
    public backURL: string = "";
    private isSoundOn: boolean = true;


    public init(): void {
        this.hideUI();
        this.addBGBlockInputEvents();
        Utility.addEventHandlerToButton(this.closeBtn, this, 'onCloseBtnClick');
        Utility.addEventHandlerToButton(this.exitBtn, this, 'onExitBtnClick');
        Utility.addEventHandlerToButton(this.ruleBtn, this, 'onRuleBtnClick');
        Utility.addEventHandlerToButton(this.payTableBtn, this, 'onPayTableBtnClick');
        Utility.addEventHandlerToButton(this.soundBtn, this, 'onSoundBtnClick');
        Utility.addEventHandlerToButton(this.historyBtn, this, 'onHistoryBtnClick');
        Utility.addEventHandlerToButton(this.bgBtn, this, 'onBGBtnClick');
    }

    public showUI(): void {
        this.node.setActive(true);
    }

    public hideUI(): void {
        this.node.setActive(false);
        this.resetAllMenuIcons();
        this.onMenuUIHideCallback?.();
    }

    public setHistoryBtnActive(isActive: boolean): void {
        this.historyBtn.active = isActive;
    }

    public getHistoryBtnActive(): boolean {
        return this.historyBtn.active;
    }

    public setHistoryBtnEnable(isEnable: boolean): void {
        this.historyBtn.getComponent(Button).interactable = isEnable;
    }

    public setExitBtnActive(isActive: boolean): void {
        this.exitBtn.active = isActive;
    }

    public getExitBtnActive(): boolean {
        return this.exitBtn.active;
    }

    private onCloseBtnClick(): void {
        AudioManager.instance.playGenericSound(GenericSound.Public_Off);
        this.hideUI();
    }

    private onExitBtnClick(): void {
        if (this.backURL && this.backURL.length > 0) {
            window.location.href = this.backURL;
        }
    }

    private onRuleBtnClick(): void {
        this.onRuleBtnClickCallback?.();
    }

    private onPayTableBtnClick(): void {
        this.onPayTableBtnClickCallback?.();
    }

    private onHistoryBtnClick(): void {
        this.onHistoryBtnClickCallback?.();
    }

    private onSoundBtnClick(): void {
        if (this.isSoundOn) {
            this.soundBtn.getComponent(Button).normalSprite = GenericUIRes.instance.soundOff;
            this.soundBtn.getComponent(Button).hoverSprite = GenericUIRes.instance.soundOffHover;
            this.soundBtn.getComponent(Button).pressedSprite = GenericUIRes.instance.soundOffPress;
            this.soundBtn.getComponent(Button).disabledSprite = GenericUIRes.instance.soundOff;
        }
        else {
            this.soundBtn.getComponent(Button).normalSprite = GenericUIRes.instance.soundOn;
            this.soundBtn.getComponent(Button).hoverSprite = GenericUIRes.instance.soundOn;
            this.soundBtn.getComponent(Button).pressedSprite = GenericUIRes.instance.soundOnPress;
            this.soundBtn.getComponent(Button).disabledSprite = GenericUIRes.instance.soundOn;
        }
        this.isSoundOn = !this.isSoundOn;
        AudioManager.instance?.setAudioEnable(this.isSoundOn);
        if (this.isSoundOn) {
            AudioManager.instance.playGenericSound(GenericSound.Public_On);
        }
    }

    private resetAllMenuIcons(): void {
        this.soundBtn.getComponent(Button).resetStatus();
        this.historyBtn.getComponent(Button).resetStatus();
        this.payTableBtn.getComponent(Button).resetStatus();
        this.ruleBtn.getComponent(Button).resetStatus();
        this.exitBtn.getComponent(Button).resetStatus();
    }

    private addBGBlockInputEvents(): void {
        // MenuUI的背景要擋住後方事件，所以要加上BlockInputEvents
        let bgNode = this.soundBtn.parent;
        if (!bgNode.getComponent(BlockInputEvents)) {
            bgNode.addComponent(BlockInputEvents);
        }
    }

    private onBGBtnClick(): void {
        this.onBGBtnClickCallback?.();
    }
}



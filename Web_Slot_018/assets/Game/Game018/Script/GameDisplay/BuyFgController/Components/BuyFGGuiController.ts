import { _decorator, Button, Component, Label, Node, tween, UIOpacity } from 'cc';
import { SpineController } from '../../../MyUtils/AnimationSystem/Components/SpineController';
import { FindComponent } from '../../../MyUtils/FindComponent';
import { DefinitionGameConfigData } from '../../../DefinitionGameData/DefinitionGameConfigData';
import { Utility } from '../../../../../../Scripts/Utils/Utility';
import { PlayerInfo } from '../../../../../../Scripts/Player/PlayerInfo';
import { BuyFeatureUIBase } from 'db://assets/GenericUI/Scripts/BuyFeatureUIBase';
import { MultiLanguageBtn } from '../../../MyUtils/MultiLanguageBtn/MultiLanguageBtn';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
import { SoundList, AudioSourceList } from '../../../DefinitionGameData/SoundList';
const { ccclass, property } = _decorator;
const {
    BUY_FG_MULTIPLIER
} = DefinitionGameConfigData;

@ccclass('BuyFGGuiController')

export class BuyFGGuiController extends BuyFeatureUIBase {

    @property({ type: Node, visible: true, displayName: 'spineBuyBgUI', tooltip: 'spineBuyBgUI' })
    private _spineBuyBgUI: Node = null;
    @property({ type: Node, visible: true, displayName: 'confirmBtnLanguageNode', tooltip: '確認按鈕語系' })
    private _confirmButtonLanguageNode: Node = null;
    @property({ type: Button, visible: true, displayName: 'blockBtn', tooltip: '遮擋底部的隱形按鈕' })
    private _blockBtn: Button = null;
    private _addAmountButton: Node = null;
    private _subtractAmountButton: Node = null;
    private _confirmButton: Node = null;
    private _cancelButton: Node = null;
    private _totalBetNode: Node = null;
    private _totalFGAmount: Node = null;
    private _buyFGPanelIsOpen: boolean = false;
    private _spController: SpineController = null;
    private _openFinish: boolean = false;
    public confirmCallback: (betValue: number, totalMultiplierValue: number) => void = null;
    public closeCallback: () => void = null;

    get buyFGPanelIsOpen(): boolean {
        return this._buyFGPanelIsOpen;
    }
    //--gameRoot有異動的時候都會進來更新
    set baseBet(value: number) {
        this.setBetValueLabel(value);
        this.calculateBaseForFgBet(value);
        this.updateBetValue();
    }

    protected onLoad(): void {
        //this._spineBuyBgUI.active = false;
    }

    public init(betValueList: number[]): void {

        super.init(betValueList);
        this.featureMultiplier = BUY_FG_MULTIPLIER;
        //this._betValueList = [...PlayerInfo.betValueList];
        //this._maxBetIndex = this._betValueList.length - 1;
        this._spController = FindComponent.findComponentInChildren(this._spineBuyBgUI, SpineController);
        this._spController.init();

        //-StartChange
        this._spController.setKeyFrameEvent('On', this.spControllerKeyFrameEvtHandler);
        this._spController.setKeyFrameEvent('Off', this.spControllerKeyFrameEvtHandler);
        this._spController.setKeyFrameEvent('FadeOut', this.spControllerKeyFrameEvtHandler);
        this._spController.setKeyFrameEvent('FadeIn', this.spControllerKeyFrameEvtHandler);
        this._spController.setKeyFrameEvent('StartChange', this.spControllerKeyFrameEvtHandler);

        this._confirmButton = this.confirmBtn.node;
        this._cancelButton = this.closeBtn.node;
        this._addAmountButton = this.increaseBtn.node;
        this._subtractAmountButton = this.decreaseBtn.node;
        this._totalBetNode = this.betValueLabel.node;
        this._totalFGAmount = this.featureTotalLabel.node;
        this.confirmBtn.node.getComponent(MultiLanguageBtn).init();
        this.updateBetValue();
        this.node.active = false;
        this._buyFGPanelIsOpen = false;
    }

    public async open(): Promise<void> {
        this._openFinish = false;
        this.checkBtnStateWithCurrentBetIndex();
        this.node.active = true;
        this._buyFGPanelIsOpen = true;
        AudioManager.instance.playSound(SoundList.BuyFGBoard, SOUND_TYPE.ONE_SHOT, AudioSourceList.BasicAS);
        await this._spController.playAniInPromise('in');
        this.registerEvtHandler();
        this._spController.playAni('loop');
        this._openFinish = true;
        this.btnInteractable(true);

    }

    public close(): void {
        this.node.active = false;
        this._buyFGPanelIsOpen = false;
        //--20250620
        this._spController.spine.getState().setEmptyAnimation(0, 0);
    }


    protected override onCloseBtnClick(): void {
        AudioManager.instance.playSound(SoundList.public_choice, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
        this.cancelClickHandler();
    }

    protected override onConfirmBtnClick(): void {

        if (this._openFinish) {
            this.unRegisterEvtHandler();
            this.btnInteractable(false);
            this.confirmClickHandler();
        }
    }

    //--[+]按鈕點擊事件
    protected override onIncreaseBtnClick(): void {
        AudioManager.instance.playSound(SoundList.public_choice, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
        super.onIncreaseBtnClick();
    }

    //--[-]按鈕點擊事件
    protected onDecreaseBtnClick(): void {
        AudioManager.instance.playSound(SoundList.public_choice, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
        super.onDecreaseBtnClick();
    }


    private checkBtnStateWithCurrentBetIndex(): void {
        if (this.currentBetIndex === 0) {
            this.decreaseBtn.interactable = false;

        } else if (this.currentBetIndex === this.maxBetIndex) {
            this.increaseBtn.interactable = false;
        } else {
            this.decreaseBtn.interactable = true;
            this.increaseBtn.interactable = true;
        }
    }

    private getBetValueIndex(value: number): number {
        let index = 0;
        for (let i = 0; i < this.betValueList.length; i++) {
            if (this.betValueList[i] == value) {
                index = i;
                break;
            }
        }
        return index;
    }

    private calculateBaseForFgBet(value: number): void {
        this.currentBetIndex = this.getBetValueIndex(value);
    }

    private confirmClickHandler = async (): Promise<void> => {
        AudioManager.instance.playSound(SoundList.BuyButton, SOUND_TYPE.ONE_SHOT, AudioSourceList.BasicAS);
        AudioManager.instance.playSound(SoundList.BuyFGLeave, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
        await this._spController.playAniInPromise('out_confirm');
        //this.node.active = false;
        this.close();
        this.confirmCallback?.(this.currentBetValue, this.currentFeatureTotal);
        this.closeCallback?.();
    }

    private cancelClickHandler = async (): Promise<void> => {
        this.btnInteractable(false);
        this.unRegisterEvtHandler();
        AudioManager.instance.playSound(SoundList.BuyFGLeave, SOUND_TYPE.ONE_SHOT, AudioSourceList.BasicAS);
        await this._spController.playAniInPromise('out_back');
        this.close();
        this.closeCallback?.();
        //this.node.active = false;
    }
    private blockBtnClickHandler = () => {
        this.cancelClickHandler();
    }
    private registerEvtHandler(): void {
        /*
        this._addAmountButton.on(Node.EventType.TOUCH_END, this.addAmountClickHandler);
        this._subtractAmountButton.on(Node.EventType.TOUCH_END, this.subtractAmountClickHandler);
        this._confirmButton.on(Node.EventType.TOUCH_END, this.confirmClickHandler);
        this._cancelButton.on(Node.EventType.TOUCH_END, this.cancelClickHandler);
        */
        this._blockBtn.interactable = true;
        this._blockBtn.node.on(Node.EventType.TOUCH_END, this.blockBtnClickHandler);
    }

    private unRegisterEvtHandler(): void {
        /*
        this._addAmountButton.off(Node.EventType.TOUCH_END, this.addAmountClickHandler);
        this._subtractAmountButton.off(Node.EventType.TOUCH_END, this.subtractAmountClickHandler);
        this._confirmButton.off(Node.EventType.TOUCH_END, this.confirmClickHandler);
        this._cancelButton.off(Node.EventType.TOUCH_END, this.cancelClickHandler);
        */
        this._blockBtn.interactable = false;
        this._blockBtn.node.off(Node.EventType.TOUCH_END, this.blockBtnClickHandler);
    }

    private fadeOutGui(): void {
        const target = [
            this._confirmButton,
            this._cancelButton,
            this._addAmountButton,
            this._subtractAmountButton,
            this._totalBetNode,
            this._totalFGAmount,
            this._confirmButtonLanguageNode
        ];

        for (let item of target) {
            let targetOpacity = item.getComponent(UIOpacity);
            tween(targetOpacity)
                .to(0.5, { opacity: 0 })
                .start();
        }

    }

    private fadeInGui(): void {
        const target = [
            this._confirmButton,
            this._cancelButton,
            this._addAmountButton,
            this._subtractAmountButton,
            this._totalBetNode,
            this._totalFGAmount,
            this._confirmButtonLanguageNode
        ];

        for (let item of target) {
            let targetOpacity = item.getComponent(UIOpacity);
            tween(targetOpacity)
                .to(0.2, { opacity: 255 })
                .start();
        }
    }

    private spControllerKeyFrameEvtHandler = (...args) => {
        //console.log('spControllerKeyFrameEvtHandler', args[0]);
        switch (args[0]) {
            case 'StartChange':
                break;
            case 'On':
                break;
            case 'Off':
                break;
            case 'FadeOut':
                this.fadeOutGui();
                break;
            case 'FadeIn'://--進場
                this.fadeInGui();
                break;

        }
    }
}



import { _decorator, Component, Node } from 'cc';
import { Debug } from '../../Scripts/Utils/Debug';
import { MainUI, NewFlashModeEnum } from './MainUI';
import { MenuUI } from './MenuUI';
import { BetSelectUI } from './BetSelectUI';
import { AUTO_INFINITY_NUMBER, AutoSpinSelectUI } from './AutoSpinSelectUI';
import { BottomBarUI } from './BottomBarUI';
import { GenericUIRes } from './GenericUIRes';
import { InfoType, InfoUI } from './InfoUI';
import { MainUIBtnState } from './GenericUIConfig';
import { AudioManager } from '../../Scripts/Audio/AudioManager';
import { GenericSound, SlotRelayLang } from '../../Scripts/Utils/Config';
import { KeySpriteFramePair } from '../../Scripts/Utils/KeySpriteFramePair';
import { Localization } from '../../Scripts/GameScripts/Localization';
import { HistoryUI } from './HistoryUI';


const { ccclass, property } = _decorator;

@ccclass('GenericUIManager')
export class GenericUIManager extends Component {

    private static _instance: GenericUIManager = null;

    @property(GenericUIRes)
    public genericUIRes: GenericUIRes;

    @property(MainUI)
    private mainUI: MainUI;

    @property(MenuUI)
    private menuUI: MenuUI;

    @property(BetSelectUI)
    private betSelectUI: BetSelectUI;

    @property(AutoSpinSelectUI)
    private autoSpinSelectUI: AutoSpinSelectUI;

    @property(BottomBarUI)
    private bottomBarUI: BottomBarUI;

    @property(InfoUI)
    private infoUI: InfoUI;

    @property(HistoryUI)
    private historyUI: HistoryUI;

    private currentTurboMode: NewFlashModeEnum = NewFlashModeEnum.None;

    public onSpinBtnClickCallback: () => void = null;
    public onAutoSpinStartClickCallback: (autoTimes: number) => void = null;
    public onBetSelectBtnClickCallback: (betValues: number) => void = null;
    public onStopBtnClickCallback: () => void = null;
    public onMenuUIShowCallback: () => void = null;
    public onSetMainUIToSpinModeCallback: () => void = null;
    public onSetMainUIToNormalModeCallback: () => void = null;
    public onNewFlashBtnSwitch: (mode: NewFlashModeEnum) => void = null;

    private _isAutoMode: boolean = false;

    /**
     * 是否自動模式
     * @returns 是否為自動模式
     */
    public get isAutoMode(): boolean {
        return this._isAutoMode;
    }

    /**
     * 設定是否為自動模式
     * @param value 是或否
     */
    public set isAutoMode(value: boolean) {
        this._isAutoMode = value;
    }

    // 剩餘FG的次數，非FG時為-1，無限次數為9999
    private autoTimes: number = -1;

    private langKey: SlotRelayLang = SlotRelayLang.tw;

    /**
     * 獲取實例
     * @returns GenericUIManager
     */
    public static get instance(): GenericUIManager {
        if (this._instance === null) {
            Debug.LogWarning("GenericUIManager _instance 為空");
        }
        return this._instance;
    }

    /**
     * 載入
     */
    onLoad(): void {
        GenericUIManager._instance = this.node.getComponent(GenericUIManager);
    }

    /**
     *  初始化  
     * @param langKey 語系
     */
    init(langKey: SlotRelayLang): void {
        this.langKey = langKey;
        this.genericUIRes.init(); // singleton的第一次初始化
        this.mainUI.init();
        this.menuUI.init();
        this.betSelectUI.init();
        this.autoSpinSelectUI.init();
        this.bottomBarUI.init();
        this.infoUI.init();
        this.historyUI.init();

        this.bottomBarUI.addBottomRichTextSprite(this.genericUIRes.bottomTextSpriteFrameMaps);
        this.mainUI.onMenuBtnClickCallback = this.onMainUIMenuBtnClick.bind(this);
        this.mainUI.onBetBtnClickCallback = this.onMainUIBetBtnClick.bind(this);
        this.mainUI.onAutoBtnClickCallback = this.onMainUIAutoBtnClick.bind(this);
        this.mainUI.onSpinBtnClickCallback = this.onMainUIonSpinBtnClick.bind(this);
        this.mainUI.onStopAutoBtnClickCallback = this.onMainUIStopAutoBtnClick.bind(this);
        this.mainUI.onMainBGClickCallback = this.onMainBGClick.bind(this);
        this.mainUI.onSpecialBtnClickCallback = this.onMainUISpecialBtnClick.bind(this);
        this.mainUI.onStopBtnClickCallback = this.onMainUIStopBtnClick.bind(this);
        this.mainUI.onNewFlashBtnSwitchCallback = this.onMainUINewFlashBtnSwitch.bind(this);
        this.menuUI.onRuleBtnClickCallback = this.onMenuUIRuleBtnClick.bind(this);
        this.menuUI.onPayTableBtnClickCallback = this.onMenuUIPayTableBtnClick.bind(this);
        this.menuUI.onHistoryBtnClickCallback = this.onMenuUIHistoryBtnClick.bind(this);
        this.menuUI.onMenuUIHideCallback = this.onMenuUIHide.bind(this);

        this.autoSpinSelectUI.onStartBtnClickCallback = this.onAutoSpinStartClick.bind(this);

        this.betSelectUI.onBetSelectBtnClickCallback = this.onBetSelectUIBetSelectBtnClick.bind(this);
        this.betSelectUI.onUIActiveChange = this.onBetSelectUIActiveChange.bind(this);
        this.autoSpinSelectUI.onUIActiveChange = this.onAutoSpinSelectUIActiveChange.bind(this);


        this.menuUI.onBGBtnClickCallback = this.onMainBGClick.bind(this);
        this.infoUI.onBGBtnClickCallback = this.onMainBGClick.bind(this);
        this.historyUI.onBGBtnClickCallback = this.onMainBGClick.bind(this);
        this.betSelectUI.onBGBtnClickCallback = this.onMainBGClick.bind(this);
        this.autoSpinSelectUI.onBGBtnClickCallback = this.onMainBGClick.bind(this);

        this.setMainUIKeyboardLock(true);
    }

    /**
     * 點擊主畫面背景
     */
    private onMainBGClick() {

        if (this.autoSpinSelectUI.node.active ||
            this.betSelectUI.node.active ||
            this.menuUI.node.active ||
            this.infoUI.node.active ||
            this.historyUI.node.active) {
            AudioManager.instance.playGenericSound(GenericSound.Public_Off);
        }

        this.hideAllUI();
    }

    /**
     * 點擊主畫面選單
     */
    private onMainUIMenuBtnClick() {
        AudioManager.instance.playGenericSound(GenericSound.Public_On);
        this.hideAllUI();
        this.menuUI.showUI();
        this.mainUI.setMenuBtnActive(false);
        this.onMenuUIShowCallback?.();
    }

    /**
     * 隱藏所有UI
     */
    private hideAllUI() {
        this.autoSpinSelectUI.hideUI();
        this.betSelectUI.hideUI();
        this.infoUI.hideUI();
        this.historyUI.hideUI();
        this.menuUI.hideUI();
    }

    /**
     * 點擊主畫面下注鈕
     */
    private onMainUIBetBtnClick() {
        if (this.betSelectUI.node.active === false) {
            AudioManager.instance.playGenericSound(GenericSound.Public_On);
            this.hideAllUI();
            this.betSelectUI.showUI();
        }
        else {
            AudioManager.instance.playGenericSound(GenericSound.Public_Off);
            this.betSelectUI.hideUI();
        }
    }

    /**
     * 點擊主畫面自動旋轉
     */
    private onMainUIAutoBtnClick() {
        if (this.autoSpinSelectUI.node.active === false) {
            AudioManager.instance.playGenericSound(GenericSound.Public_On);
            this.hideAllUI();
            this.autoSpinSelectUI.showUI();
        }
        else {
            AudioManager.instance.playGenericSound(GenericSound.Public_Off);
            this.autoSpinSelectUI.hideUI();
        }
    }

    /**
     * 點擊主畫面 Spin 按鈕
     */
    private onMainUIonSpinBtnClick() {
        this.menuUI.hideUI();
        this.hideUIToSpinMode();
        this.onSpinBtnClickCallback?.();
    }

    /**
     * 點擊開始自動 Spin
     * @param autoTimes 
     */
    private onAutoSpinStartClick(autoTimes: number) {
        AudioManager.instance.playGenericSound(GenericSound.Public_On);
        this.hideUIToSpinMode();
        this.isAutoMode = true;
        this.autoTimes = autoTimes;
        this.mainUI.openAutoMode();
        this.onAutoSpinStartClickCallback?.(autoTimes);
    }

    /**
     * 點擊主畫面停止自動旋轉
     */
    private onMainUIStopAutoBtnClick() {
        AudioManager.instance.playGenericSound(GenericSound.Public_Off);
        this.stopAutoMode();
    }

    /**
     * 停止自動旋轉
     */
    public stopAutoMode() {
        this.mainUI.closeAutoMode();
        this.autoTimes = -1;
        this.isAutoMode = false;
    }

    /**
     * 檢查自動狀態
     * @returns 是否還有下一局FG
     */
    public checkAutoStatus(): boolean {
        // 是否還有下一局FG
        let hasAutoNext = this.autoTimes > 0;

        if (this.autoTimes !== AUTO_INFINITY_NUMBER) {
            this.autoTimes--;
        }

        this.mainUI.setAutoCntLabel(this.autoTimes);

        if (this.autoTimes === -1) {
            this.isAutoMode = false;
            this.mainUI.closeAutoMode();
        }

        return hasAutoNext;
    }

    /**
     * 點擊下注金額選單裡的金額按鈕
     * @param betValues 
     */
    private onBetSelectUIBetSelectBtnClick(betValues: number) {
        this.setBetValue(betValues);
        this.onBetSelectBtnClickCallback?.(betValues);
    }

    private onMenuUIRuleBtnClick() {
        AudioManager.instance.playGenericSound(GenericSound.Public_On);
        this.infoUI.setTitle(Localization.instance.t("GenericUI.GAME_RULES"));
        this.infoUI.showUI(InfoType.Rule);
        this.menuUI.hideUI();
    }

    private onMenuUIPayTableBtnClick() {
        AudioManager.instance.playGenericSound(GenericSound.Public_On);
        this.infoUI.setTitle(Localization.instance.t("GenericUI.PAYTABLE"));
        this.infoUI.showUI(InfoType.PayTable);
        this.menuUI.hideUI();
    }

    private onMenuUIHistoryBtnClick() {
        AudioManager.instance.playGenericSound(GenericSound.Public_On);
        this.menuUI.hideUI();
        this.historyUI.showUI()
    }

    private onMenuUIHide() {
        this.mainUI.setMenuBtnActive(true);
    }

    public presetHistoryUrl(url: string) {
        if (this.getHistoryBtnActive()) {
            this.historyUI.setHistoryUrl(url);
        }
    }

    public showBottomTextWinScore(score: number) {
        this.bottomBarUI.showWinScore(score);
    }

    public setBetValue(score: number) {
        this.bottomBarUI.setTotalBet(score);
    }

    public setMainUIToSpinMode() {
        this.mainUI.setToSpinMode();
        this.menuUI.setHistoryBtnEnable(false);
    }

    public setMainUIToNormalMode() {
        this.mainUI.setToIdleMode();
        this.menuUI.setHistoryBtnEnable(true);
    }

    public get isStopClicked(): boolean {
        return this.mainUI.isStopClicked;
    }

    public get isTurboOn(): boolean {
        return this.mainUI.isTurboOn();
    }

    private hideUIToSpinMode() {
        this.autoSpinSelectUI.hideUI();
        this.betSelectUI.hideUI();
        this.infoUI.hideUI();
        this.historyUI.hideUI();
    }

    public setScreenBtnRoot(screenBtn: Node) {
        this.mainUI.setScreenBtnRoot(screenBtn);
    }

    public setUrl(urlPayTable: string, urlRule: string) {
        this.infoUI.setURL(InfoType.Rule, urlRule);
        this.infoUI.setURL(InfoType.PayTable, urlPayTable);
    }

    public showBottomTextFirst() {
        this.bottomBarUI.showBottomTextFirst();
    }

    private showBottomTextGaming() {
        this.bottomBarUI.showBottomTextGaming();
    }

    public showBottomTextIdle() {
        this.bottomBarUI.showBottomTextIdle();
    }

    public showBottomTextEmpty() {
        this.bottomBarUI.showBottomTextEmpty();
    }

    public showBottomTextStartSpin() {
        if (!this.isAutoMode) {
            this.showBottomTextGaming();
        }
        else {
            this.showBottomTextEmpty();
        }
    }

    public addBottomRichTextSprite(spriteFrameMap: KeySpriteFramePair[]) {
        this.bottomBarUI.addBottomRichTextSprite(spriteFrameMap);
    }

    public setBalance(balance: number) {
        this.bottomBarUI.setBalance(balance);
    }

    public resetMainUIStopBtn() {
        this.mainUI.resetStopBtn();
    }

    public addGamingShowTexts(text: string[]) {
        this.bottomBarUI.addGamingShowTexts(text);
    }

    public setBetSelectInfos(betValues: number[]) {
        this.betSelectUI.setInfos(betValues);
    }

    private onMainUISpecialBtnClick() {

    }

    private onMainUIStopBtnClick() {
        this.onStopBtnClickCallback?.();
    }

    private onMainUINewFlashBtnSwitch(mode: NewFlashModeEnum): void {
        this.currentTurboMode = mode;
        this.onNewFlashBtnSwitch?.(mode);
    }

    public getCurrentTurboMode(): NewFlashModeEnum {
        return this.currentTurboMode;
    }

    public setBottomText(text: string) {
        this.bottomBarUI.setDebugText(text);
    }

    public setVersion(version: string) {
        this.bottomBarUI.setVersionText(version);
    }

    public setLogoText(logo: string) {
        this.bottomBarUI.setLogoText(logo);
    }

    private onBetSelectUIActiveChange(active: boolean) {
        if (active) {
            this.mainUI.setBetBtnState(MainUIBtnState.UIOpen);
        }
        else {
            this.mainUI.setBetBtnState(MainUIBtnState.Normal);
        }
    }

    private onAutoSpinSelectUIActiveChange(active: boolean) {
        if (active) {
            this.mainUI.setAutoBtnState(MainUIBtnState.UIOpen);
        }
        else {
            this.mainUI.setAutoBtnState(MainUIBtnState.Normal);
        }
    }

    public setHistoryBtnActive(b: boolean) {
        this.menuUI.setHistoryBtnActive(b);
    }

    public getHistoryBtnActive(): boolean {
        return this.menuUI.getHistoryBtnActive();
    }

    public setMainBtnInteractable(b: boolean) {
        this.mainUI.setBetSpinAutoBtnInteractable(b);
    }

    /*
    public setHistoryBtnEnable(b: boolean) {
        this.menuUI.setHistoryBtnEnable(b);
    }
    */

    public forceClickMainUIStopBtn() {
        if (!this.isStopClicked) {
            this.mainUI.forceClickStopBtn();
        }
    }

    public setMainUIRightBtnVisible(b: boolean) {
        this.mainUI.setLandscapeRightBtnGroupVisible(b);
    }

    // 設定為true時，鎖上空白鍵 會觸發Spin與Stop的功能
    public setMainUIKeyboardLock(b: boolean) {
        this.mainUI.setKeyboardLock(b);
    }

    // 由於MainBG要能穿透點擊下方遊戲的UI 故將 preventSwallow 設定為 true
    // 會造成MainBG與其重疊的UI MouseEnter與MouseLeave事件互相快速交錯被觸發
    // 導致Hover效果無法正常顯示 ，故如果是全螢幕的遊戲被開啟時，有時要將MainBG關閉
    /*
    public setMainBGActive(b: boolean) {
        this.mainUI.setMainBGActive(b);
    }
    */

    // 獨立設定StopBtn的Active
    public setMainUIStopBtnActive(b: boolean) {
        this.mainUI.setStopBtnActive(b);
    }

    public setMainUIStopBtnInteractable(b: boolean) {
        this.mainUI.setStopBtnInteractable(b);
    }

    public setMainUISpinBtnActive(b: boolean) {
        this.mainUI.setSpinBtnActive(b);
    }

    public setMainUIRightDownBtnActive(b: boolean) {
        this.mainUI.setRightDownBtnActive(b);
    }

    public setMainUIAutoBtnActive(b: boolean) {
        this.mainUI.setAutoBtnActive(b);
    }

    public setMainUISpinBtnInteractable(b: boolean) {
        this.mainUI.setSpinBtnInteractable(b);
    }

    public show() {
        this.node.setScale(1, 1);
    }

    public hide() {
        this.node.setScale(0, 0);
    }

    public setBetUITitleLocalizationKey(key: string) {
        this.betSelectUI.setBetTitleLocalizationKey(key);
    }

    public setTwoLevelTurboMode(b: boolean) {
        this.mainUI.setTwoLevelTurboMode(b);

    }
}



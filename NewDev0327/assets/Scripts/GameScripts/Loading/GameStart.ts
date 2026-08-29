import '../../../Lib/externalDefinitions'; // 將自行定義的函式加入到全域範圍
import { _decorator, Animation, assetManager, Button, CCBoolean, Component, director, find, ImageAsset, instantiate, JsonAsset, Node, Prefab, ProgressBar, SceneAsset, sp, Sprite, SpriteFrame, Texture2D, tween, UIOpacity, UITransform } from 'cc';
import { GameSetting, GameStatus, GenericSound, SlotRelayLang } from '../Definition';
import { IPlayerInfo, SwitchType, ThousandPlaceType } from '../../NetAgent/v2/XinStar/AgentDefine';
import { IPlayerInfo as IFanTaPlayerInfo } from '../../NetAgent/v2/FanTa/AgentDefine';
import { NetworkHandler } from '../Networks/v2';
import { KeySpriteFramePair, Utility } from '../../Utils/Core';
import { ConfigType, IPlayerInfoBase } from '../../NetAgent/v2/NetAgentBase/IBaseNetAgent';
import { ScreenAdapter } from '../../Utils/Orientation';
import { GameInfoData } from './GameInfoData';
import { ErrorHandler } from '../../ErrorHandler/ErrorHandler';
import { Localization } from '../Localization';
import { AudioManager } from '../../Utils/Audio';
import { GameInfoUI } from './GameInfoUI';
import { MessageBox } from '../GenericUI/Scripts';
import { ErrorCode } from '../../ErrorHandler/ErrorHandleDefine';
import { GameRoot } from '../Controller';

const { ccclass, property } = _decorator;

const loadingBarBGContentSize = { width: 290, height: 15 };
const loadingBarContentSize = { width: 282, height: 8 };
let LOGO_Y_POS: number = 80;

const loadingBarPosition = { x: 0, y: -102 };

@ccclass('GameStart')
export class GameStart extends Component {

    @property(CCBoolean)
    private isNewLoading: boolean = false;

    @property(JsonAsset)
    public gameConfig: JsonAsset;

    //#region Config

    // 是否為展示模式，會吃上面gameConfig的isExhibition
    // 要出Demo版本時，請設為true，正式版請設為false
    // 為true時，會直接進入遊戲場景，不會連線webserver伺服器
    protected isExhibition: boolean = false;
    protected debugLocalization: boolean = false;
    protected debugLanguageKey: string = '';
    protected gameID: string = ""; // 遊戲編號 Game1001, Game002 等
    // protected gameCode: string = ''; //北分連線編號 W002 , W001 等
    protected idleTimeoutLimit: number = 600; // 閒置 timeout 時間，單位秒


    public isShowProgressBar: boolean = true;

    //#endregion

    @property(Prefab)
    public messageBoxPrefab: Prefab;

    @property(Node)
    public messageBoxRootNode: Node;

    @property(ProgressBar)
    private progressBar: ProgressBar

    @property(Node)
    private continueBtn: Node;

    @property(GameInfoUI)
    private gameInfoUI: GameInfoUI;

    // 靜態ApexWin的Sprite
    private logoSprite: Sprite;

    // 關閉 ApexWin 後，自定義的 Logo
    @property(SpriteFrame)
    private gameSplashLogo: SpriteFrame;

    // old loading
    @property({ type: GameInfoData, visible(this: GameStart) { return !this.isNewLoading } })
    private gameInfoDataList: GameInfoData[] = [];

    // old loading
    @property({ type: [KeySpriteFramePair], visible(this: GameStart) { return !this.isNewLoading } })
    private gameInfoSpriteFrameMaps: KeySpriteFramePair[] = [];

    @property(Node)
    private apexWin: Node;

    private progress: number = 0;
    private gameScene: SceneAsset = null;
    private readonly LOGO_SPINE_ANIMATION_IN: string = 'in';
    private readonly LOGO_SPINE_ANIMATION_OUT: string = 'out';
    private readonly LOGO_ANIMATION_IN: string = 'ApexLogoShow';
    private readonly LOGO_ANIMATION_OUT: string = 'ApexLogoFadeout';

    private loginResolve: Function = null;

    private logoNode: Node = null;


    protected async onLoad(): Promise<void> {

        if (this.gameConfig) {
            this.gameID = this.gameConfig.json.gameID;
            // this.gameCode = this.gameConfig.json.gameCode;
            this.idleTimeoutLimit = this.gameConfig.json.idleTimeoutLimit;
            this.isExhibition = this.gameConfig.json.isExhibition;
            this.debugLocalization = this.gameConfig.json.debugLocalization;
            this.debugLanguageKey = this.gameConfig.json.debugLanguageKey;
        }

        if (this.isNewLoading) {
            this.logoNode = find("Apex_Logo", this.apexWin);
        }
        else {
            this.logoNode = find("Logo", this.apexWin);
        }
        this.logoNode.active = false;
        this.apexWin.active = true;

        this.progressBar.node.active = false;
        this.progressBar.progress = 0;
        const agentType = this.isExhibition || Utility.isDev() ? window.AgentType.Exhibition : window.agent;
        NetworkHandler.instance.init(this.gameID, this.idleTimeoutLimit, this.isExhibition, agentType);

        // 上站環境連線北分
        const gameUrl = window.location.href;

        try {
            NetworkHandler.instance.parserBaseConfig(gameUrl);
            await NetworkHandler.instance.askWebConfig(ConfigType.SLOT);

            this.setGameSetting();

            if (GameSetting.customData) {
                try {
                    GameSetting.customDataJson = JSON.parse(GameSetting.customData);
                }
                catch (error) {
                    console.error('customData 轉 Json 失敗');
                    console.error(`customData 內容 : ${GameSetting.customData}`);
                }
            }

            if (GameSetting.useLogoURL) {
                // 使用Url遠端圖片作為遊戲Logo
                let spriteFrame = await this.loadImg(GameSetting.logoURL)
                this.gameSplashLogo = spriteFrame;
            }

            this.startGame();
        }
        catch (error) {
            //表示參數 Parser 失敗
            //ErrorHandler.Instance.TriggerError(PARSER_URL_FAIL);
            console.error(error);
            console.error("參數 Parser 失敗");
        }
    }

    protected setGameSetting(): void {
        const agentType = this.isExhibition || Utility.isDev() ? window.AgentType.Exhibition : window.agent;
        let playerInfo = NetworkHandler.instance.getPlayerInfo() as IPlayerInfo;
        switch (agentType) {
            case window.AgentType.Exhibition:
                playerInfo = playerInfo as IPlayerInfoBase;
                break;
            case window.AgentType.XinStar:
                playerInfo = playerInfo as IPlayerInfo;
                break;
            case window.AgentType.FTG:
                playerInfo = playerInfo as IFanTaPlayerInfo;
                break;
            default:
                break;
        }

        // 是否要show主頁AWLogo
        GameSetting.isShowAWLogo = playerInfo.webConfig?.PlatformSetting?.LoadingLogoType === SwitchType.Normal;
        // 是否要底部Bar的ApexWin
        GameSetting.isShowBottomAWLogo = playerInfo.webConfig?.PlatformSetting?.GameBottomLogoType === SwitchType.Normal;
        // 是否要購買功能金幣的AW Logo
        GameSetting.isShowCoinAWLogo = playerInfo.webConfig?.PlatformSetting?.BuyFeatureLogoType === SwitchType.Normal;
        // 平台下注金額列表
        GameSetting.platformBetValueList = playerInfo.webConfig?.PlatformSetting?.Range;
        // 是否需要交換千分位和小數點符號
        GameSetting.shouldSwapThousandAndDecimalSeparators = playerInfo.webConfig?.PlatformSetting?.ThousandPlace === ThousandPlaceType.EUR;

        GameSetting.payTableURL = playerInfo.webConfig?.GameSetting?.PayTable_Url;
        GameSetting.ruleURL = playerInfo.webConfig?.GameSetting?.GameRule_Url;
        GameSetting.historyURL = playerInfo.webConfig?.GameSetting?.PlayerHistory_Url;
        GameSetting.customData = playerInfo.webConfig?.GameSetting?.CustomData; // 如果設定網頁沒填，會是 undefined
    }

    protected start(): void {

    }

    protected startGame(): void {

        this.setProgressInfo();

        director.addPersistRootNode(this.node);
        GameStatus.isEnterFromGameStart = true;

        if (!GameSetting.isShowAWLogo) {
            if (this.isNewLoading) {
                const newSpriteNode = new Node("Logo");
                newSpriteNode.setParent(this.apexWin);
                newSpriteNode.setPosition(0, LOGO_Y_POS, 0);
                newSpriteNode.layer = this.apexWin.layer;
                this.logoSprite = newSpriteNode.addComponent(Sprite);
            }
            else {
                this.logoSprite = find("Logo", this.apexWin).getComponent(Sprite);
                this.logoSprite.spriteFrame = this.gameSplashLogo;
                this.logoSprite.node.setScale(1, 1)
            }
            this.logoSprite.spriteFrame = this.gameSplashLogo;
            if (this.gameSplashLogo) {
                this.logoSprite.getComponent(UITransform).setContentSize(this.gameSplashLogo.rect);
            }
            else {
                console.error('關閉 Logo後, 沒有設置獨立的遊戲Logo (gameSplashLogo)');
            }

        }
        this.apexWin.active = true;
        this.logoNode.active = true;
        this.startLoad();
    }

    protected async startLoad(): Promise<void> {
        try {

            let lang = this.getLanguage();
            GameSetting.gameLang = SlotRelayLang[lang];
            this.gameInfoUI.init(this.gameInfoSpriteFrameMaps);

            if (this.isNewLoading) {
                let spine = this.apexWin.getComponentInChildren(sp.Skeleton);
                if (spine) {
                    if (GameSetting.isShowAWLogo) {
                        await spine.playPromise(this.LOGO_SPINE_ANIMATION_IN);
                    }
                }
                else {
                    console.error('ApexWin spine not found');
                }
            }
            else {
                await this.apexWin.getComponent(Animation).playPromise(this.LOGO_ANIMATION_IN);
            }

            if (this.isShowProgressBar) {
                this.progressBar.node.active = true;
            }

            await Localization.instance.init(this.gameID, lang);
            await Localization.instance.updateAllSpriteAndLabel(SlotRelayLang[this.getLanguage()]);

            if (!this.isNewLoading) {
                let gameInfoPromiseList: Promise<void>[] = [];
                for (let item of this.gameInfoDataList) {
                    gameInfoPromiseList.push(item.loadLocalizationKey(SlotRelayLang[this.getLanguage()]));
                }
                await Promise.all(gameInfoPromiseList);
                this.gameInfoUI.setInfo(this.gameInfoDataList);
            }


            this.continueBtn.setActive(false);
            Utility.addEventHandlerToButton(this.continueBtn, this, 'onContinueBtnClick');
            this.continueBtn.getComponent(Button).interactable = true;

            let messageBox = instantiate(this.messageBoxPrefab);
            if (this.messageBoxRootNode) {
                messageBox.setParent(this.messageBoxRootNode);
            }
            MessageBox.instance.init();
            ErrorHandler.Instance.setShowErrorMessageCallback(
                (title: string, content: string, isShowConfirm: boolean, callback?: Function) => {
                    MessageBox.instance.showMsgBox(title, content, isShowConfirm, callback);
                }
            );

            await this.loadScenePromise(); // 等待場景載入完成
            // 等待連線和場景載入完成後，才會顯示繼續按鈕
            this.showContinueBtn();

            // 淡出 ApexWin Logo
            if (this.isNewLoading) {
                this.fadeOutLogo(this.apexWin);
                this.gameInfoUI.startDetect();
                this.gameInfoUI.playTargetSpine(0);
            }
            else {
                this.apexWin.getComponent(Animation).playPromise(this.LOGO_ANIMATION_OUT)
                    .then(() => {
                        this.apexWin.active = false;
                        this.gameInfoUI.startAutoChangePage();
                    });
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    private async loadScenePromise(): Promise<void> {
        director.getScene().getComponentInChildren(ScreenAdapter).forceResize();

        await this.loadScene();

        let gameRoot = director.getScene().getComponentInChildren(GameRoot);
        await gameRoot.init();

    }

    /**
     * 更新
     * @param dt NetAgent 的 Update 參數，但實際傳入並未使用
     */
    protected update(dt: number): void {
        NetworkHandler.instance.update(dt);
    }

    /**
     * 更新載入場景進度百分比
     * @param completedCount 已完成計數
     * @param totalCount 總計數
     * @param item ?未使用
     */
    private onProgress(completedCount: number, totalCount: number, item: any): void {
        let p = completedCount / totalCount;
        //console.log(`p  ${p}  this.progress  ${this.progress}   `);

        if (p > this.progress) {
            // console.log(`completedCount  ${completedCount}  totalCount  ${totalCount}   ${p.fixed()}`);
            this.progress = p;
            this.progressBar.progress = this.progress;
        }
    }

    /**
     * 繼續鍵被觸發
     */
    private onContinueBtnClick(): void {
        AudioManager.instance.playGenericSound(GenericSound.Public_On);
        this.continueBtn.getComponent(Button).interactable = false;
        let gameRoot = director.getScene().getComponentInChildren(GameRoot);
        gameRoot.showCanvas();
        this.node.destroy();
    }


    /**
     * 顯示繼續鍵
     */
    public showContinueBtn(): void {
        this.continueBtn.setActive(true);
        this.progressBar.node.setActive(false);
    }

    /**
     * 取得語系
     * @returns 語系字串
     */
    private getLanguage(): string {
        let key: string = null;
        if (this.debugLocalization) {
            key = this.debugLanguageKey;
        }
        else {
            key = NetworkHandler.instance.getLanguage();
        }
        return key;
    }

    private fadeOutLogo(logo: Node): void {
        let opacity = logo.getComponent(UIOpacity);
        if (GameSetting.isShowAWLogo) {
            this.apexWin.getComponentInChildren(sp.Skeleton).setAnimation(0, this.LOGO_SPINE_ANIMATION_OUT, false);
        }
        tween(opacity)
            .to(0.2, { opacity: 0 })
            .start();

    }

    private async loadScene(): Promise<void> {
        const scene = await Utility.preloadScenePromise(this.gameID, this.onProgress.bind(this))
        if (this.node) {
            this.gameScene = scene;
            await this.checkInnerHeight();
            await this.runScenePromise();
        }
    }

    private checkInnerHeight(): Promise<void> {
        return Utility.waitUntilPromise(() => {
            if (window.innerHeight !== 0) {
                return true;
            }
            return false;
        });
    }

    private runScenePromise(): Promise<void> {
        return new Promise((resolve, reject) => {
            director.runScene(this.gameScene, null, () => {
                resolve();
            });
        });
    }

    private setProgressInfo(): void {

        if (this.isShowProgressBar === false) {
            LOGO_Y_POS = 0;
        }

        this.progressBar.node.active = false;
        this.progressBar.node.setParent(this.apexWin);
        this.progressBar.getComponent(UITransform).setContentSize(loadingBarBGContentSize.width, loadingBarBGContentSize.height);
        this.progressBar.node.setPosition(loadingBarPosition.x, loadingBarPosition.y);
        this.progressBar.totalLength = loadingBarContentSize.width;
        this.progressBar.barSprite.node.getComponent(UITransform).setContentSize(this.progressBar.totalLength, loadingBarContentSize.height);
        this.progressBar.barSprite.node.setPosition(-141, this.progressBar.barSprite.node.position.y);
        this.progressBar.progress = 0;
        if (!this.isNewLoading) {
            let logo = find("Logo", this.apexWin);
            logo.setPosition(0, LOGO_Y_POS);
        }
        else {
            let logo = find("Apex_Logo", this.apexWin);
            logo.setPosition(0, LOGO_Y_POS);
        }
    }

    private loadImg(url: string): Promise<SpriteFrame> {
        return new Promise<SpriteFrame>((resolve, reject) => {
            assetManager.loadRemote<ImageAsset>(url, function (err: any, imageAsset: ImageAsset) {
                const spriteFrame = new SpriteFrame();
                const texture = new Texture2D();
                texture.image = imageAsset;
                spriteFrame.texture = texture;
                resolve(spriteFrame);
            });
        });
    }
}

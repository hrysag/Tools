import { ICommonSetting, IGameConfig, IGameSetting, IPlatformSetting, IPlayerInfo, SwitchType, ThousandPlaceType } from "./XinStar/AgentDefine";
import { ConfigType, Environment, MessageHeadCode } from "./NetAgentBase/IBaseNetAgent";
import { AdditionalPurchaseType } from "../CConnectManager/CConnectDefine";
import { BaseNetAgent } from "./NetAgentBase/BaseNetAgent";
import { ErrorHandler } from "../../ErrorHandler/ErrorHandler";
import { ErrorCode } from "../../ErrorHandler/ErrorHandleDefine";
import { BetData } from "../../GameScripts/Networks/v2/BetData";
import { Debug } from "../../Utils/Core";

const postDomain: string = "https://bpdev2.xin-stars.com/60887";

const LoginURL: string = `${postDomain}/Login`; // 登入網址
const BetURL: string = `${postDomain}/Bet`; // 下注網址
const OtherActionURL: string = `${postDomain}/OtherAction`; // 額外動作網址
const OtherActionWithBetURL: string = `${postDomain}/OtherAction_WithBet`; // 額外押注網址

const PlatformBetValueList: number[] = [
    100, 200, 300, 500, 800, 1000, 1500, 2000, 2500, 3000, 5000, 5500,
    6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000, 20000, 30000, 50000
];

export class ExhibitionNetAgent extends BaseNetAgent {
    protected _playerInfo: IPlayerInfo = {
        game_code: "",
        platform: "",
        name: "",
        serviceId: "",
        awKey: "",
        webConfigUrl: "",
        ParserSuccess: false
    };

    public override getPlayerInfo(): IPlayerInfo {
        return this._playerInfo;
    }

    public override parserBaseConfig(url: string): void {
        this._playerInfo.webConfigUrl = "";
        this._playerInfo.serviceId = "";
        this._playerInfo.game_code = "";
        this._playerInfo.platform = "";
        this._playerInfo.awKey = "";
        this._playerInfo.ParserSuccess = false;

        this._demo = false;
        this._language = this.getURLParameter(url, "lang");
        this._platform = 0;
        this.gameCode = this._playerInfo.game_code;
    }

    protected getURLParameter(Url: string, searchElement: string): string {
        let firstParameters = Url.split(("?"));
        let parameters = firstParameters.pop().split("&");
        for (let index = 0; index < parameters.length; index++) {
            const pair = parameters[index].split("=");

            if (pair.shift() === searchElement) {
                return pair.shift();
            }
        }
        return "tw";
    }

    public override askWebConfig(configType: ConfigType): Promise<void> {
        let commonSetting: ICommonSetting = {
            ClientKey: "",
            Client_GameEvent_API: "",
            Client_GameIssue_API: "",
            ConnectSetting: [],
            LifeSecond: 30,
            CustomData: "",
            ESAPIHistory_UrlList: []
        };
        let gameSetting: IGameSetting = {
            GameRule_Url: "",
            PayTable_Url: "",
            PlayerHistory_Url: "",
            CustomData: ""
        };
        let platformSetting: IPlatformSetting = {
            LoadingLogoType: SwitchType.Normal,
            GameBottomLogoType: SwitchType.Normal,
            BuyFeatureLogoType: SwitchType.Normal,
            ThousandPlace: ThousandPlaceType.ENG,
            Range: PlatformBetValueList
        };

        const response: IGameConfig = {
            Result: 0,
            CommonSetting: commonSetting,
            GameSetting: gameSetting,
            PlatformSetting: platformSetting,
        };
        this._playerInfo.webConfig = response;

        return Promise.resolve();
    };

    public override update(dt: number): void {
        // Exhibition 模式不需要更新
    }

    /**
     * 取牌館Login功能，可取得進入時的盤面(有的遊戲會需要)
     * @param playerToken 辨別身分的Token
     * @param gameNumber 遊戲號碼(例如 12099)
     */
    public override sendGameLoginFetch(playerToken: string, gameNumber: number): Promise<string> {
        if (!playerToken) {
            playerToken = "試玩";
            console.error("NetworkHandler sendGameLoginFetch 需要 playerToken 參數，請確認是否有傳入");
        }

        return new Promise((resolve, reject) => {
            let raw = {
                GameNumber: gameNumber,
                PlayerToken: playerToken,
            };
            let url = LoginURL;
            fetch(url, { method: "POST", body: JSON.stringify(raw) })
                .then((response) => {
                    return response.json();
                })
                .then((json: any) => {
                    if (json['Success']) {
                        let base64Data = json['SlotData']; // 60張牌的byte array
                        resolve(base64Data);
                    }
                    else {
                        console.error('錯誤的json資料');
                        console.error(json);
                        return Promise.reject(ErrorCode.Client_BetError);
                    }
                })
                .catch((reason: any) => {
                    reject("fetch login error");
                })
        });
    }

    /**
    * 登入遊戲
    * @param env AgentDefine.Environment
    * @param href Link Url
    * @returns 
    */
    public override async login(env: Environment, version: string): Promise<boolean> {
        this._isLogin = false;
        return Promise.resolve(false);
    }

    public override async spin(bet: number, additionalPurchaseType: number | AdditionalPurchaseType, otherParameter: number, gameNumber?: number, balance?: number, playerToken?: string): Promise<BetData> {
        let raw = {
            GameNumber: gameNumber,
            Bet: bet,
            PlayerToken: playerToken,
            Coin: balance,
            BuyFG: additionalPurchaseType === 0 ? undefined : additionalPurchaseType,
            OtherParameter: otherParameter,
        }

        let url = BetURL;
        return fetch(url, { method: "POST", body: JSON.stringify(raw) })
            .then((response) => {
                return response.json();
            })
            .then((json: any) => {
                if (json['Success']) {
                    let jsonMap = new Map<string, string | number>();
                    jsonMap.set('bet', json['Bet']);
                    jsonMap.set('coin', json['Coin']);
                    jsonMap.set('score', json['Score']);
                    jsonMap.set('slotData', json['SlotData']);
                    jsonMap.set('spinId', 'H5Post');
                    let betData = new BetData(jsonMap);
                    return betData;
                }
                else {
                    console.error('錯誤的json資料');
                    console.error(json);
                    return Promise.reject(ErrorCode.Client_BetError);
                }
            })
            .catch((reason: any) => {
                Debug.LogError(reason);
                ErrorHandler.Instance.TriggerError(ErrorCode.Client_BetError);
                return Promise.reject(reason);
            })
    }

    public override sendOtherAction(gameNumber: number, playerToken: string, action: number, content: number[]): void {
        let raw = {
            // GameName: "XinH5", // 此欄位已移除
            GameNumber: gameNumber,
            PlayerToken: playerToken,
            Content: [action, ...content],
        }

        let url = OtherActionURL;
        fetch(url, { method: "POST", body: JSON.stringify(raw) })
            .then((response) => {
                return response.json();
            })
            .then((json: any) => {
                if (json['Success']) {
                    let base64Data = json['Content']; // 60張牌的byte array
                    this.handleCustomCommand?.(MessageHeadCode.OtherAction, action, base64Data, null);
                }
                else {
                    console.error('錯誤的json資料');
                    console.error(json);
                    return Promise.reject(ErrorCode.Client_BetError);
                }
            });
    }

    public override sendOtherActionWithBet(gameNumber: number, bet: number, balance: number, playerToken: string, action: number, content: number[]): void {
        let raw = {
            // GameName: "XinH5", // 此欄位已移除
            GameNumber: gameNumber,
            PlayerToken: playerToken,
            Content: [action, ...content],
            Bet: bet,
            Coin: balance,
        }

        let url = OtherActionWithBetURL;
        fetch(url, { method: "POST", body: JSON.stringify(raw) })
            .then((response) => {
                return response.json();
            })
            .then((json: any) => {
                if (json['Success']) {
                    let jsonMap = new Map<string, string | number>();
                    jsonMap.set('bet', json['Bet']);
                    jsonMap.set('score', json['Score']);
                    jsonMap.set('coin', json['Coin']);
                    jsonMap.set('spinId', 'TEST');
                    jsonMap.set('slotData', json['Content']);
                    let betData = new BetData(jsonMap);
                    this.handleCustomCommand?.(MessageHeadCode.OtherActionWithBet, action, betData, null);
                }
                else {
                    console.error('錯誤的json資料');
                    console.error(json);
                    return Promise.reject(ErrorCode.Client_BetError);
                }
            });
    }
}

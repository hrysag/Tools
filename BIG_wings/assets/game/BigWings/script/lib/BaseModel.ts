import { DeviceInfo, Device } from "@casino-mono/share-tools";
import { ExchangeInfo, Model } from "@casino-mono/mvc";
import { ClientRecvAction, RecvMessage, RecvEventMassage, ClientRecvEventMap } from "./RecvMessage";
import { ClientSenderActionParams } from "./SendMessage";
import { BaseDataModel } from "./BaseDataModel";
import * as mvc from '@casino-mono/mvc';
/**
 * 資料Model模型
 */
export class BaseModel extends Model<ClientRecvEventMap, ClientSenderActionParams> {

    public url: string;
    // 機台代碼
    public get gameCode(): string {
        return this.dataModel.gameCode || "";
    }
    // 取分析資料
    public get analysisInfo() {
        return (this.dataModel as BaseDataModel).analysisInfo;
    }
    // 取資料
    public get data(): BaseDataModel {
        return this.dataModel as BaseDataModel;
    }
    public get deviceInfo(): DeviceInfo {
        return Device.deviceInfo();
    }

    constructor() {
        super();
        this.configReceiveEvent();
    }
    // 初始化資料
    protected initDataModel(): BaseDataModel {
        return new BaseDataModel();
    }
    // 設定接收事件
    protected configReceiveEvent() {
        if (this.connection) {
            const { receiver, socket } = this.connection;
            Object.values(ClientRecvAction).forEach((action) => {
                receiver.on(action as any, this.handleReceiveEvent.bind(this));
            });
            socket.once('open', () => receiver.emit('open', { event: true } as any));
        }
    }
    // 事件對應方法
    protected handleReceiveEvent(message: RecvEventMassage<keyof ClientRecvEventMap>): void {
        const { action, event, error, result } = message;


        if (!event && error) this.onErrorMessage(message);

        switch (action) {
            case ClientRecvAction.Ready:
                this.isReady(message.data);
                break;
            case ClientRecvAction.UpdateMarquee:
                this.updateMarquee(message.data);
                break;
            case ClientRecvAction.Login:
                this.onLogin(result.data);
                break;
            case ClientRecvAction.TakeMachine:
                this.onTakeMachine(result.data);
                break;
            case ClientRecvAction.LoadInfo:
                this.onLoadInfo(result.data);
                break;
            case ClientRecvAction.GetMachineDetail:
                this.onGetMachineDetail(result.data);
                break;
            case ClientRecvAction.CreditExchange:
                this.onCreditExchange(message.data);
                break;
            case ClientRecvAction.BalanceExchange:
                this.onBalanceExchange(message.data);
                break;
            case ClientRecvAction.BeginGame:
                this.onBeginGame(result.data);
                break;
            case ClientRecvAction.EndGame:
                this.onEndGame(result.data);
                break;
            case ClientRecvAction.Gamble:
                this.onGamble(result.data);
                break;
            case ClientRecvAction.HitJackpot:
                this.onHitJackpot(message.data);
                break;


        }
    }
    protected isReady(data: RecvMessage.ReadyData): void {
        // const { Ready } = ClientRecvAction;
        // const { version, ts } = data;
        // console.info(`isReady version: ${version} ServerTime:${new Date(ts)}`);
    }
    // Event: 更新跑馬燈 資料
    protected updateMarquee(str: string): void {
        super.updateMarquee(str);
    }
    /**
     * Event: 登入資料
     * @description dataModel.userId is the user
     * @param data 
     */
    protected onLogin(data: mvc.onLogin): void {
        super.onLogin(data);
        console.info(`onLogin`, data);
        this.dataModel.userId = String(data.UserID);
        // this.dataModel.sid = data.Sid;
        // this.dataModel.gameID = data.GameID;
        // this.dataModel.test = data.Test;
        // this.dataModel.exchangeRate = data.ExchangeRate;
    }
    // Event: 佔機台
    protected onTakeMachine(data: mvc.onTakeMachine): void {
        super.onTakeMachine(data);
        if (data && data.GameCode) {
            this.data.gameCode = String(data.GameCode);
            console.info(`onTakeMachine`);
        }
    }
    // Event: 遊戲資訊
    protected onLoadInfo(data: mvc.onLoadInfo): void {
        super.onLoadInfo(data);
    }
    // Event: 機台資訊
    protected onGetMachineDetail(data: mvc.onGetMachineDetail): void {
        super.onGetMachineDetail(data);
    }
    // Event: 換分
    protected onCreditExchange(data: mvc.onCreditExchange): void {
        super.onCreditExchange(data);
    }
    // Event: 洗分
    protected onBalanceExchange(data: mvc.onBalanceExchange): void {
        super.onBalanceExchange(data);
    }
    // Event: 開始遊戲
    protected onBeginGame(_data: any): void {
        const data = (_data as RecvMessage.BeginGameData);
        this.data.credit = data.Credit;
        this.data.creditEnd = data.Credit_End;
        this.data.wagersID = data.WagersID;
    }
    protected onEndGame(_data: any): void {
        const data = (_data as RecvMessage.EndGameData);
        this.data.credit = data.Credit;
    }
    protected onGamble(_data: any): void {
        const data = (_data as RecvMessage.GambleData);
        // gamble data
    }
    // Event: 中彩池
    protected onHitJackpot(data: mvc.onHitJackpot<RecvMessage.IBeginGameData>): void {
        super.onHitJackpot(data);
    }


    public getExchangeInfo(): ExchangeInfo {
        const { balance, base, washInfo, betBase, credit } = this.data;
        return {
            credit,
            betBase,
            balance,
            base,
            washInfo
        };
    }
    // Event: 錯誤事件
    protected onErrorMessage(message: RecvMessage.ErrorMessage): void {
        const { action, error, errCode, event } = message;
        console.info(`action: ${action} = ${event} error: ${error} errcode: ${errCode}`);
        //TODO: Error dispatch event view
    }
    // 進行Websocket連線
    public async connect(path?: string): Promise<boolean> {
        if (!path) {
            path = await this.getConnectPath();
        }
        return new Promise((resolve, reject) => {
            this.connection.socket.once(ClientRecvAction.WSClose, (event) => reject(event.code));
            this.connection.receiver.once(ClientRecvAction.Ready as any, () => resolve(true));
            this.connection.connect(this.url = path, true).catch(() => reject(false));
        });
    }
    // 送出事件並回應
    public send<T extends keyof ClientSenderActionParams>(action: T, data: ClientSenderActionParams[T]): Promise<any> {
        return new Promise((resolve, reject) => {
            const { sender, receiver } = this.connection;
            data.requestId = this.data.requestId;
            sender.callServer(action as any, data);
            receiver.once(action, (result) => this.onRecv(result, resolve, reject));
        });
    };
    // 回傳事件
    protected onRecv(result: any, resolve: any, reject: any): void {
        if (result.event) {
            resolve(result.data || result);
        } else {
            reject(result);
        }
    }
}
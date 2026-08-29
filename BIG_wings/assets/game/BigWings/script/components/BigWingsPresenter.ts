import { BasePresenter } from "../lib/BasePresenter";
import { _decorator } from "cc";
import { ClientRecvAction, RecvMessage } from "../lib/RecvMessage";
import { ClientSendAction } from "../lib/SendMessage";
import { BigWingsView } from "./BigWingsView";

const { ccclass, menu } = _decorator;

@ccclass('BigWingPresenter')
@menu('BigWings/BigWingPresenter')
export class BigWingsPresenter extends BasePresenter {

    /**
     * 開始遊戲
     * @param opts 下注參數betInfo
     * @description { BetCredit: number }
     * @returns RecvMessage.MachjongBeginGameData 碰碰胡遊戲結果
     */
    async beginGame(betInfo?: object | number): Promise<RecvMessage.BeginGameMessage> {
        const { sender, receiver, model } = this;
        const { gameType } = model.dataModel;
        const type = (typeof betInfo);

        if (type == "number") {
            betInfo = { BetCredit: betInfo };
        } else if (Array.isArray(betInfo)) {
            betInfo = {
                BetCredit: betInfo[0],
                HitFree: betInfo[1]
            };
            // return Promise.reject({ event: false, message: `beginGame: Invalid betInfo value for ${betInfo}` });
        }

        return new Promise((resolve, reject) => {
            sender.callServer(ClientSendAction.BeginGame as any, {
                action: ClientSendAction.BeginGame,
                gameType,
                betInfo,
            });
            receiver.once(ClientRecvAction.BeginGame, (result) => {
                (result.result.event ? resolve : reject)(result);
            });
        });
    }

    async gamble(): Promise<RecvMessage.GambleMessage> {
        return new Promise((resolve, reject) => {
            const { sender, receiver, model } = this;
            const { Gamble } = ClientSendAction;
            const { sid, wagersID, gameType, gameCode } = model.data;

            sender.callServer(Gamble as any, {
                action: Gamble,
                sid,
                wagersID,
                gameType,
                gameCode

            });
            receiver.once(ClientRecvAction.Gamble, (result) => {
                (result.result.event ? resolve : reject)(result);
            });
        });
    }
}
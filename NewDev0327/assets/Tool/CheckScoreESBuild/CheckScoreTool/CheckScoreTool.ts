import { _decorator, Component } from 'cc';
import { BetData, NetworkEvent, NetworkHandler } from 'db://assets/Scripts/GameScripts/Networks';
import { AdditionalPurchaseType } from 'db://assets/Scripts/NetAgent/CConnectManager/CConnectDefine';
const { ccclass, property } = _decorator;

@ccclass('CheckScoreTool')
export class CheckScoreTool extends Component {

    public gameNumber: number = 12099;
    public token: string = "TestPlayerToken001";

    public start(): void {
        NetworkHandler.instance.addEventListener(NetworkEvent.Bet, this.onReceiveBet.bind(this))
    }

    public onBtnClick(): void {
        NetworkHandler.instance.sendBet(this.gameNumber, 100, 10000, AdditionalPurchaseType.None, this.token);
    }

    public onReceiveBet(betData: BetData): void {
        let base64Result = betData.slotData;
        let binaryBufferResult = betData.slotDataBinaryBuffer;
        let serverOdds = (betData.score / betData.bet).fixed();

        // 這行要加入自己計算Odds的邏輯
        let myOdds = 0;


        if (serverOdds === myOdds) {
            console.log(`Server Odds: ${serverOdds} My Odds: ${myOdds}, OK!!!!!`);
            NetworkHandler.instance.sendBet(this.gameNumber, 100, 10000, AdditionalPurchaseType.None, this.token);
        }
        else {
            console.error(`Server Odds: ${serverOdds} My Odds: ${myOdds}, Please check your code!`);
            console.error(`base64Result: ${base64Result}`);
            return;
        }
    }
}



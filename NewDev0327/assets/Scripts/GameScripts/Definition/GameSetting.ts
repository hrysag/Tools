import { _decorator } from 'cc';
import { SlotRelayLang } from './Config';
const { ccclass, property } = _decorator;

@ccclass('GameSetting')
export class GameSetting {

    public static _gameLang: SlotRelayLang = SlotRelayLang.tw

    public static _gameLogo: string = "ApexWin";

    public static isShowAWLogo: boolean = true; // 是否顯示AW Logo，預設為true

    public static logoURL: string = "https://testgame.apex-win.com/h5_game/img/testlogo.jpg";

    public static useLogoURL: boolean = false; // 是否使用logoURL作為遊戲Logo，預設為false

    public static isShowBottomAWLogo: boolean = true; // 是否顯示底部AW Logo，預設為true

    public static isShowCoinAWLogo: boolean = true; // 是否顯示硬幣AW Logo，預設為true 但暫時不使用 先預留欄位

    public static shouldSwapThousandAndDecimalSeparators: boolean = false; // 是否需要交換千分位和小數點符號，預設為false

    private static keyboardLockCnt: number = 0; // 鍵盤鎖定計數器

    public static historyURL: string = "https://dev-gamerecord.apex-win.com/#/game-list?lang=[lang]&history=[json]";

    public static payTableURL: string = "https://gameapi.apex-win.com/ApexWin?gameID=[gameID]&lang=[lang]&page=introduction";

    public static ruleURL: string = "https://gameapi.apex-win.com/ApexWin?gameID=[gameID]&lang=[lang]&page=operation";

    public static customData: string = ""; // 自訂資料欄位，預設為空字串

    public static customDataJson: any = {}; // 自訂資料欄位的Json物件，預設為 {}

    // 該平台所有可提供下注的金額列表，由Server提供，這邊先寫台灣站的設定，讓離線時可以使用
    public static _platformBetValueList: number[] = [
        100, 200, 300, 500, 800, 1000, 1500, 2000, 2500, 3000, 5000, 5500,
        6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000, 20000, 30000, 50000
    ];

    public static get gameLogo(): string {
        return this._gameLogo;
    }

    public static set gameLogo(value: string) {
        this._gameLogo = value;
    }


    public static get gameLang(): SlotRelayLang {
        return this._gameLang;
    }

    public static set gameLang(value: SlotRelayLang) {
        this._gameLang = value;
    }

    public static get platformBetValueList(): number[] {
        return this._platformBetValueList;
    }

    public static set platformBetValueList(value: number[]) {
        this._platformBetValueList = value;
    }

    public static keyboardLock(): void {
        this.keyboardLockCnt++;
    }

    public static keyboardUnlock(): void {
        this.keyboardLockCnt--;
        if (this.keyboardLockCnt < 0) {
            this.keyboardLockCnt = 0;
        }
    }

    public static isKeyboardLocked(): boolean {
        return this.keyboardLockCnt > 0;
    }
}


export class GameStatus {
    public static isBuyBonusOpen: boolean = false;
    public static isExtraBetOpen: boolean = false;
    public static isBuyBonusOn: boolean = false;
    public static isExtraBetOn: boolean = false;
    public static isEnterFromGameStart: boolean = false; // 是否從遊戲開始畫面進入遊戲
}
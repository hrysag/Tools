import { CommandEventMap, CommandEventName, CostumeEventMap, CostumeEventName, IfCommand, IfCostume, IfToolBar, ToolBarEventName, ToolbarEventMap } from "@casino-mono/mvc";
import { Component, ccenum, _decorator, EventMouse, input, Input, EventHandler, Button, Node, Vec3, tween, Prefab, Enum, UIOpacity, Animation, Label, js, sp, Graphics, Color } from "cc";
const { ccclass, property, menu } = _decorator;
import { Emitter, EventMap, InternalEventNames, InternalListener, Listener } from "strict-event-emitter";
import { Roller, RollerEvent } from "../wheel/Roller";
import { UtilsKit } from "../lib/UtilsKit";
import { BigWingsRoller, BigWingsRollerEvent } from "../wheel/BigWingsRoller";
import { symbolWin_TA } from "../../../../techArt/game/mahjong/script/symbolWin_TA";
import { PrefabInstancePoolManager } from "../tools/PrefabInstancePoolManager";
import { symbolResource_TA } from "../../../../techArt/game/mahjong/script/symbolResource_TA";
import { FreeGameData, MockData } from "../mock/MockData";
import { CalculationCupboard, WinLineType } from "./CalculationCupboard";
import { MainGame } from "./MainGame";
import { LineInfo } from "./LineInfo";
import { BigWingsSymbol } from "../wheel/BigWingsSymbol";
import { SymbolInfo } from "../wheel/SymbolInfo";
import { GameCommand, GameCommandMode } from "./GameCommand";
import { RecvMessage, DataType } from "../lib/RecvMessage";
import { BaseGame } from "../lib/BaseGame";
import { Info } from "./Info";
import { BigWingsWheel } from "../wheel/BigWingsWheel";
import SoundController from "../SoundController";
import { WinAndMarquee } from "./WinAndMarquee";

export enum TransitionType {
    MAIN = "main", // main game
    FREE = "free", // free game
}
/**
 * 收到 begin game data 後延遲停止時間(單位:毫秒)
 */
enum DelayTimeToStop {
    FREE = 200, // free game
    AUTO = 200, // 自動狀態
    SPEED_UP = 0, // 加速狀態
    NORMAL = 2000, // 正常狀態
}
/**
 * 此局結束後延遲多久後自動開始下一局(單位:毫秒)
 */
enum DelayTimeToAutoSpin {
    FREE = 200, // free game
    AUTO = 200, // 自動狀態
}

@ccclass('GameManager')
@menu('BigWings/GameManager')
export class GameManager extends Component implements BaseGame {
    /** 餘額 */
    public credit: number;
    /** 下注比例 */
    public betBase: string;
    /** 下注比例列表 */
    public base: string;
    /** 線數 */
    public line: number;
    /** 下注比例 */
    public lineBet: number;
    /** 總押注 */
    public bet: number;
    /** 單號 */
    public wagersID: string;
    /** 結果牌型 */
    public cards?: any;
    /** 贏得分數 */
    public payoff: number;
    /** 每線結果 */
    public lines?: DataType.LineData[];
    public wild?: DataType.WildData;
    public scatter?: DataType.FreeData;
    public bonus?: any;
    public free?: any;
    public freeTimes: number;
    public doubleTime: number;
    public winJPType?: number;
    public winJPAmount?: number;
    public levelID?: number;
    public brickNum?: number;
    public axisLocation?: string;
    rates?: { [key: string]: number[]; };
    lineList?: Object;
    public betCreditList?: number[];
    public defaultBetCredit?: number;
    /** @deprecated */
    public isCash: boolean;
    public isExchangePageOpen: boolean;

    public readonly events: Emitter<CostumeEventMap> = new Emitter();
    @property({ type: GameCommand, tooltip: '遊戲按鈕相關物件' })
    command: GameCommand;

    @property({ type: SymbolInfo, tooltip: '賠率表' })
    protected symbolInfo: SymbolInfo;

    @property({ type: MainGame, tooltip: '主遊戲' })
    protected mainGame: MainGame;

    /**
     * 這邊結構改變
     * @deprecated 
     */
    toolbar?: IfToolBar<ToolbarEventMap>;

    @property({ type: BigWingsRoller })
    private roller: BigWingsRoller;

    @property({ type: Info })
    protected info: Info;

    @property({ type: Node })
    private Marquee: Node;

    @property({ type: Node, tooltip: "symbol中獎動畫層" })
    private symbolWinLayer: Node = null;
    @property({ type: Prefab, tooltip: "symbol中獎 Prefab" })
    private symbolWin: Prefab = null!;
    @property({ type: Node, tooltip: "免費遊戲剩餘次數介面" })
    private freeGameTimes: Node = null;
    @property({ type: Node, tooltip: "免費遊戲獲得" })
    private freeGameGet: Node = null;
    @property({ type: Node, tooltip: "免費遊戲結算" })
    private totalWin: Node = null;
    @property({ type: Node, tooltip: "free紀錄顯示" })
    private freeGet: Node = null;
    @property({ type: Node, tooltip: "大獎動畫" })
    private BigWinAni: Node = null;
    @property({ type: Node, tooltip: "背景" })
    private Bg: Node = null;
    @property({ type: Node, tooltip: "樹葉" })
    private Leaf: Node = null;
    @property({ type: Node, tooltip: "得分框(跑馬燈)" })
    private scoreGrid: Node = null;
    @property({ type: Node, tooltip: "剩餘免費次數" })
    private remainFT: Node = null;
    @property({ type: Node, tooltip: "主架構" })
    private SlotGameUI: Node = null;



    @property({ type: symbolResource_TA, tooltip: "symbol資源" })
    private symbolResourceTA: symbolResource_TA = null;

    public static isFree: boolean = false; // 是否在 Free Game 中
    private currentCardIndex: number; // 目前顯示到牌組(cards)中的第幾組資料
    private arrCleanAll: Array<boolean>; // 每一牌組顯示後是否清除全部牌
    private arrListenStartIndex: Array<number>; // 每一牌組實做聽牌效果的起始轉輪 Index

    private playingLineIndex: number = 0;
    private loopRound: number = 0;
    private _isLooping: boolean = false;
    private loopCb: Function = null;
    protected test = false;
    protected rejectDelayingToStop = null;



    @property({ type: Node, tooltip: "black" })
    private black: Node;

    onLoad() {
        console.log("onLoad");
        //按鈕觸發設置
        const thisScriptName = js.getClassName(this);

        //spin按鈕
        // const spinBtnEventHandler = new EventHandler();
        // spinBtnEventHandler.target = this.node;
        // spinBtnEventHandler.component = thisScriptName;
        // spinBtnEventHandler.handler = 'clickSpin';
        // this.btnSpin.getComponent(Button).clickEvents.push(spinBtnEventHandler);

        // this.btnSpin.getComponent(Button).interactable = true;

        this.roller.node.on(RollerEvent.StopEnd, this.checkResult, this);

        this.command.node.on(CommandEventName.SPIN, this.onSpin, this);
        this.command.node.on(CommandEventName.BUY_FREEGAME, this.onSpin, this);
        this.command.node.on(CommandEventName.STOP, () => this.onStop(0), this);

        // this.freeGameGet.setPosition(new Vec3(0, 0, 0));


        let g: Graphics = this.black.getComponent(Graphics);
        g.clear();
        g.fillColor = new Color(0, 0, 0, 180);
        g.rect(-540, -440, 1080, 803);
        g.fill();
        this.black.active = false;

        SoundController.load().then(() => {
            //SoundController.playBGM();
        });


    }
    protected start(): void {
        console.log("Start");
        this.freeTimes = 0;
        // this.BigWinAni.active = false
        // let big_win = this.BigWinAni.getChildByName('BigWin').getComponent(sp.Skeleton)
        // big_win.set


    }
    protected setup(): void {
        // this.events.emit(CostumeEventName.END);
        // this.events.emit(CostumeEventName.FREE);
        // this.events.emit(CostumeEventName.HIT_BONUS);
        // this.events.emit(CostumeEventName.END_BONUS);
        // this.events.emit(CostumeEventName.DOUBLE_UP);
    }

    protected createToolbar(): any {

    }
    protected createCommand(): any {
        // GUI Setup Command
    }
    /**
     * 連線取得OnloadInfo會觸發setupGame
     */
    public setupGame(): void {
        // onLoadInfo Success
        if (this.betCreditList) {
            this.symbolInfo.rates = this.rates;
            this.mainGame.lineList = this.lineList;
            this.command.currentBet = this.defaultBetCredit;
            this.command.arrBet = this.betCreditList;
            this.roller.createListenItem(this.symbolInfo);

            // this.mainGame.lineTest();
        }

    }

    /**
     * 彩池更新
     * @param value 
     */
    public updateJackpot(value: number[]): void {
        // TODO: Jackpot panel update value array
    }
    /**
     * 跑馬燈更新
     * @param message 訊息更新
     */
    public updateMarquee(message: string): void {
        // TODO: Marquee panel update message
        console.log("updateMarquee", message);
        // this.Marquee.getComponent(Animation).defaultClip.wrapMode=22
        // this.Marquee.getComponent(Animation)..repeatCount=10
        // this.Marquee.getComponent(Animation).play()

    }
    /** 更新資訊 */
    updateInfo(): void {
        console.log("update info");
        // updateRatio
        // updateTotalBet
        // bet 
        // updateBfgPrice
    };
    updateBet(): void {
        // bet = this._lineBet;
        // info.updateTotalBetJump(this._lineBet)
        // updateBfgPrice(this._lineBet * 6 * 10)

    };
    protected async onSpin() {
        console.log("GameManager onSpin");
        this.cards = null;
        this.currentCardIndex = 0;
        // this.roller.speedUp(this.command.doSpeedUp);
        this.roller.launch();
        if (!GameManager.isFree) this.scoreGrid.getComponent(WinAndMarquee).playMarquee(true);
        this.symbolInfo.close();
        this.mainGame.resetLine();

        this.black.active = false;
        this.unschedule(this.loopCb);
        this.roller.resetSpine();
        this.roller.checkWildStay();

        this.command.mode(GameCommandMode.SPINNING);

        if (GameManager.isFree) {
            // this.freeGameTimes.getChildByName('label').getComponent(Label).string = (this.freeTimes - 1).toString();
        }
    }
    protected onStop(time = null) {
        this.rejectDelayingToStop("reject delaying to stop because of manual");
        this.rejectDelayingToStop = null;

        this.command.lock();

        let arrCards: Array<Array<number>> = [];
        console.error(this.cards);

        console.log("arrCleanAll", this.arrCleanAll);

        // this.roller.listenStartIndex = this.arrListenStartIndex[this.currentCardIndex];
        this.roller.stop(this.cards, null, this.command.doSpeedUp ? 0 : time);
    }


    async begin(data?: RecvMessage.BeginGameData) {

        if (!data || this.test) data = MockData.getData();
        console.log("beginGame Data", data);

        this.cards = data.Cards;
        this.lines = data.Lines;
        this.scatter = data["FreeGame"];
        this.free = data["FreeGameSpin"];
        this.payoff = data["PayTotal"];
        this.wild = data.Wild;

        // if (!this.free || this.free.FreeGameTime == 0) {
        //     this.bet = data["BetTotal"];
        // }

        this.delayToStop().then(() => {
            this.onStop();
        }).catch((reason: any) => {
            console.log(reason);
        });
    };
    public disableExchange(): void {
        // 開關換分面板?!
    }
    public clear(): void {

    }

    // protected async clickSpin() {
    //     if (!this.roller.isRunnung) {
    //         this.cards = null;
    //         this.currentCardIndex = 0;
    //         this.roller.launch();

    //         if (GameManager.isFree) {
    //             this.freeGameTimes.getChildByName('label').getComponent(Label).string = (this.freeTimes - 1).toString();
    //         }

    //         // 單機版用
    //         this.begin();
    //     } else if (this.cards) {
    //         this.stop();
    //         this.btnSpin.getComponent(Button).interactable = false;
    //     }
    // }

    protected stop() {
        // let arrCards: Array<Array<number>> = [];
        // for (let i: number = 0; i < 5; i++) {
        //     arrCards.push(this.cards[this.currentCardIndex].slice(i * 4, (i + 1) * 4));
        // }

        // let extendedCards: Array<Array<number>>;
        // let fillUpData: { ExtendedCards: Array<Array<number>>, CleanAll: Array<boolean>, ListenStartIndex: Array<number>; } = (<BigWingsRoller>this.roller).takeBigWingsFillUpData(this.cards, this.lines, this.scatter, GameManager.isFree);
        // extendedCards = fillUpData.ExtendedCards;
        // this.arrCleanAll = fillUpData.CleanAll;
        // this.arrListenStartIndex = fillUpData.ListenStartIndex;

        // this.roller.listenStartIndex = this.arrListenStartIndex[this.currentCardIndex];
        // this.roller.stop(arrCards, extendedCards);
    }


    /**
     * 轉場景
     * @param transitionType free game or main game
     */
    protected runTransition(transitionType: TransitionType): Promise<void> {
        return;
    }

    protected async checkResult() {
        console.error("checkResult");
        await this.displayBigWin();
        await this.displayJPWinning();
        await this.displayLockWild();
        await this.displayScore();
        await this.displayFree();
        this.displayEachLine();
        this.over();
    }


    private async displayBigWin(): Promise<void> {

    }
    private async displayJPWinning(): Promise<void> {

    }
    private async displayLockWild(): Promise<void> {

    }
    private async displayScore(): Promise<void> {
        if (this.payoff > 0) {
            let isBig = this.payoff >= this.lineBet * 20;

            this.scoreGrid.getComponent(WinAndMarquee).updateScore(this.payoff, this.lineBet, !isBig, GameManager.isFree);

            await this.playWinLines();
            console.error("playLineover");
        }
    }



    /**
     * 播放中獎動畫
     * @param grids symbol 位置
     * @param 所有中獎 symbol
     */
    private async playWinLines(): Promise<void> {
        console.error("Lines:", this.lines);
        console.error("Wild:", this.wild);
        this.lines.forEach(l => this.mainGame.showLine(l.LineID));
        // let hasWildWheel = Object.values(this.wild.Reel);
        let allGrids = this.lines.reduce((a, b) => a.concat(b.Grids), []).filter((e, i, arr) => arr.indexOf(e) == i);
        let promises = [];
        allGrids.forEach(grid => {
            let wheelIndex = Math.floor((grid - 1) / 4);
            // if (hasWildWheel.indexOf(wheelIndex + 1) == -1) {
            if (!(<BigWingsWheel>this.roller.arrWheel[wheelIndex]).isWildStaying()) {
                let rollerSym = (<BigWingsSymbol>this.roller.getSymbolByIndex(grid));
                rollerSym.node.active = false;
                // console.error("playingGrid:", grid, "id:", rollerSym.symbolID);
                promises.push((<BigWingsRoller>this.roller).symArr[grid - 1].win(rollerSym.symbolID));
            } else {
                // if that wheel has expanded wild
                promises.push((<BigWingsWheel>this.roller.arrWheel[wheelIndex]).playWildWin());
            }
        });
        await Promise.all(promises);
    }
    // private displayEachLine = (): void => {
    private displayEachLine(): void {
        if (GameManager.isFree || this.command.isAuto || this.payoff == 0) return;
        // console.error("displayEachLine");

        // console.log("this.playingLineIndex", this.playingLineIndex);
        // console.log("this.loopRound", this.loopRound);
        this.roller.resetSpine();
        // this._drawLines.forEach((l) => l.visible = false);

        this.black.active = true;


        if (this.playingLineIndex == this.lines.length) {
            this.playingLineIndex = 0;
            this.loopRound++;
            this.displayEachLine();
            // this.scheduleOnce(this.displayEachLine.bind(this), 0);

        } else {
            // if (this.loopRound == 0) MusicTools.playMusic("sfx_payline")
            let line = this.lines[this.playingLineIndex];
            // this._drawLines.find(l => l.name === `LineID${line.LineID}`).visible = true;
            this.mainGame.resetLine();
            this.mainGame.showLine(line.LineID);
            console.log("looping:", line.LineID);
            // this.lineInfo.updateElement(line.LineID, line.Element, line.Payoff);
            this.roller.arrWheel.forEach(e => (<BigWingsWheel>e).wildSym.node.active = false);
            let promises = [];
            for (let grid of line.Grids) {
                let wheelIndex = Math.floor((grid - 1) / 4);
                // if (hasWildWheel.indexOf(wheelIndex + 1) == -1) {
                if (!(<BigWingsWheel>this.roller.arrWheel[wheelIndex]).isWildStaying()) {
                    let rollerSym = (<BigWingsSymbol>this.roller.getSymbolByIndex(grid));
                    rollerSym.node.active = false;
                    promises.push((<BigWingsRoller>this.roller).symArr[grid - 1].win(rollerSym.symbolID));
                } else {
                    // if that wheel has expanded wild
                    promises.push((<BigWingsWheel>this.roller.arrWheel[wheelIndex]).playWildWin());
                }
            }


            // await Promise.all(promises);
            // this._lineInfo.show(line.Element.slice(0, line.GridNum), line.Payoff, line.LineID);

            this.playingLineIndex++;
            this.loopCb = this.displayEachLine.bind(this);
            this.scheduleOnce(this.loopCb, 2);
        }

    };


    private async displayFree(): Promise<void> {
        if (this.scatter.HitFree) {
            GameManager.isFree = true;
            console.log(this.scatter.Grids);
            let freeGrids = this.scatter.Grids.split(",").map(e => +e);
            this.roller.resetSpine();
            // this._drawLines.forEach((l) => l.visible = false);

            let promises = [];
            // MusicTools.tempMuteBgm(true);
            // MusicTools.playMusic("sfx_fg_alarm")
            freeGrids.forEach((grid) => {
                let rollerSym = (<BigWingsSymbol>this.roller.getSymbolByIndex(grid));
                rollerSym.node.active = false;
                promises.push((<BigWingsRoller>this.roller).symArr[grid - 1].win(rollerSym.symbolID));
            });
            await Promise.all(promises);
            // await sleep(0.5);

        }
    }
    protected async over(): Promise<void> {
        console.error("OVER");

        // console.error("free times:", this._freeTimes);

        // if (DemoController.ISFREE && this._freeTimes == 0) {
        //     await this.endFreeGame(Tools.MathTool.plus(this._freePayTotal, this._payoffBeforeFree));
        //     this._mainGame.reset();
        // }


        // if (this.command.isAuto && this._autoTimes == 0) {
        //     this.command.isAuto = false;
        //     this._command.stopAuto();
        // }
        this.command.mode(GameCommandMode.BETTING);
        this.node.emit(CostumeEventName.END);
    }
    protected delayToStop() {
        return new Promise(async (resolve, reject) => {

            this.rejectDelayingToStop = reject;

            let delayTimeToStop: number;
            if (this.command.doSpeedUp) {
                delayTimeToStop = DelayTimeToStop.SPEED_UP;
            } else if (GameManager.isFree) {
                delayTimeToStop = DelayTimeToStop.FREE;
            } else {
                if (this.command.isAuto) {
                    delayTimeToStop = DelayTimeToStop.AUTO;
                } else {
                    delayTimeToStop = DelayTimeToStop.NORMAL;
                    this.scheduleOnce(() => this.command.mode(GameCommandMode.CAN_STOP), 0.5);


                }
            }

            if (delayTimeToStop > 0) {
                await UtilsKit.Defer(delayTimeToStop);
            }

            resolve(null);
        });
    }


    public async changeToFg(): Promise<void> {
        let bg = this.Bg.getChildByName('bg');
        let fgBg = this.Bg.getChildByName('fgBg');

        let buyFreeGame = this.command.node.getChildByName('BuyFreeGame');
        let bet = this.command.node.getChildByName('Bet');
        let spin = this.command.node.getChildByName('btnSpin');
        let auto = this.command.node.getChildByName('Auto');
        let turbo = this.command.node.getChildByName('Turbo');

        let bgSp = this.Bg.getChildByName('BGSpine').getComponent(sp.Skeleton);
        let lfSp = this.Leaf.getComponent(sp.Skeleton);
        bgSp.setAnimation(0, 'transition', false);
        bgSp.addAnimation(0, 'fg_loop', true, 0);
        lfSp.setAnimation(0, 'transition', false);
        lfSp.addAnimation(0, 'fg_loop', true, 0);
        await UtilsKit.Defer(250);
        let logo = this.Bg.getChildByName('Logo');
        this.moveTest(this.roller.node);
        this.moveTest(logo);
        this.moveTest(bg);
        this.moveTest(buyFreeGame);
        this.moveTest(bet);
        this.moveTest(spin);
        this.moveTest(auto);
        this.moveTest(turbo);
        this.moveTest(this.scoreGrid);

        await UtilsKit.Defer(750);
        // this.roller.getComponent(UIOpacity).opacity = 0;

        // logo.getComponent(UIOpacity).opacity = 0;
        // logo.position = new Vec3(536.849, 1701.32);
        // this.scoreGrid.getComponent(UIOpacity).opacity = 0;
        // this.scoreGrid.position = new Vec3(541.278, 698.366);
        bg.setPosition(540, 960);
        bg.active = false;
        fgBg.active = true;
        await UtilsKit.Defer(500);
        let zone = this.Bg.getChildByName('displayZone');
        zone.addChild(this.roller.node);
        zone.addChild(logo);
        zone.addChild(this.scoreGrid);
        this.roller.node.setPosition(540, 1210);
        logo.setPosition(536.849, 1701.32);
        this.scoreGrid.setPosition(541.278, 698.366);
        await UtilsKit.Defer(1500);
        // opacity = 0會讓setPosition 只有移動本體node children直接放置
        // tween(this.roller.node)
        //     .delay(0.5)
        //     .to(0, { position: new Vec3(540, 1210) })
        //     .start();
        // tween(this.roller.getComponent(UIOpacity))
        //     .to(3, { opacity: 255 })
        //     .start();
        // tween(logo)
        //     .delay(0.5)
        //     .to(0, { position: new Vec3(536.849, 1701.32) })
        //     .start();
        // tween(logo.getComponent(UIOpacity))
        //     .to(3, { opacity: 255 })
        //     .start();
        tween(this.remainFT.getComponent(UIOpacity))
            .to(3, { opacity: 255 })
            .start();
        // tween(this.scoreGrid.getComponent(UIOpacity))
        //     .to(3, { opacity: 255 })
        //     .start();
        await UtilsKit.Defer(1000);
        this.Bg.addChild(logo);
        this.SlotGameUI.insertChild(this.roller.node, 1);
        this.SlotGameUI.insertChild(this.scoreGrid, 3);

        SoundController.playBGM({ isFree: true });
    }

    protected moveTest(node: Node): void {
        let data = { move: 0, posY: node.position.y };
        tween(data)
            .to(0.2, { move: 128 }, { onUpdate: () => { node.setPosition(node.position.x, data.posY - data.move); } })
            .to(0.2, { move: 486 }, { onUpdate: () => { node.setPosition(node.position.x, data.posY - data.move); } })
            .to(0.333, { move: 1920 }, { onUpdate: () => { node.setPosition(node.position.x, data.posY - data.move); } })
            .start();
    }




    /**
     * 播放 Scatter 動畫
     * @param grids symbol 位置
     * @param times 贏得次數
     * @returns 
     */
    // private playScatterWinAnimation(grids: Array<number>, times: number): Promise<void> {
    //     // return new Promise(async (resolve) => {
    //     //     await this.playSymbolWinAnimation(grids);

    //     //     // 還是得 call eliminate，為了讓轉輪順利執行掉落
    //     //     // this.roller.eliminate(grids);

    //     //     this.freeTimes += times;

    //     //     // 獲得免費遊戲動態字
    //     //     // const fontType = this.fontType[0];
    //     //     // fontType.active = true;
    //     //     // fontType.getChildByName('label').getComponent(Label).string = `+${times}`;
    //     //     // fontType.getChildByName('getAgain').active = GameManager.isFree;

    //     //     await UtilsKit.Defer(2200);

    //     //     // 等待指向線特效出現
    //     //     const timesGetLabel: Label = this.freeGet.getChildByName('freeGetTx').getChildByName('label').getComponent(Label);
    //     //     if (this.freeGet.active) {
    //     //         let previousTimes: number = Number(timesGetLabel.string.split("+")[1]);
    //     //         timesGetLabel.string = `+${previousTimes + times}`;
    //     //         this.freeGet.getComponent(Animation).play('freeGetAgain');
    //     //     } else {
    //     //         timesGetLabel.string = `+${times}`;
    //     //         this.freeGet.getComponent(UIOpacity).opacity = 0;
    //     //         this.freeGet.active = true; // 顯示獲得免費遊戲紀錄
    //     //         this.freeGet.getComponent(Animation).play('freeGet');
    //     //     }

    //     //     const timesLabel: Node = this.freeGameTimes.getChildByName('label');
    //     //     if (this.freeGameTimes.active) {
    //     //         timesLabel.getComponent(Animation).play(); // 播放縮放動態
    //     //         timesLabel.getComponent(Label).string = (this.freeTimes - 1).toString();
    //     //     } else {
    //     //         timesLabel.getComponent(Label).string = this.freeTimes.toString();
    //     //     }

    //     //     resolve();
    //     // });
    // }



}

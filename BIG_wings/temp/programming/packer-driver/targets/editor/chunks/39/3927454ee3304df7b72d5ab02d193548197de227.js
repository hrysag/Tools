System.register(["__unresolved_0", "cc", "@casino-mono/mvc", "strict-event-emitter", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CommandEventName, CostumeEventName, Component, _decorator, Node, tween, Prefab, UIOpacity, js, sp, Graphics, Color, Emitter, RollerEvent, UtilsKit, BigWingsRoller, symbolResource_TA, MockData, MainGame, SymbolInfo, GameCommand, GameCommandMode, Info, SoundController, WinAndMarquee, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _class3, _crd, ccclass, property, menu, TransitionType, DelayTimeToStop, DelayTimeToAutoSpin, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCommandEventName(extras) {
    _reporterNs.report("CommandEventName", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCostumeEventMap(extras) {
    _reporterNs.report("CostumeEventMap", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCostumeEventName(extras) {
    _reporterNs.report("CostumeEventName", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfToolBar(extras) {
    _reporterNs.report("IfToolBar", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToolbarEventMap(extras) {
    _reporterNs.report("ToolbarEventMap", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEmitter(extras) {
    _reporterNs.report("Emitter", "strict-event-emitter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerEvent(extras) {
    _reporterNs.report("RollerEvent", "../wheel/Roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilsKit(extras) {
    _reporterNs.report("UtilsKit", "../lib/UtilsKit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBigWingsRoller(extras) {
    _reporterNs.report("BigWingsRoller", "../wheel/BigWingsRoller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsymbolResource_TA(extras) {
    _reporterNs.report("symbolResource_TA", "../../../../techArt/game/mahjong/script/symbolResource_TA", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMockData(extras) {
    _reporterNs.report("MockData", "../mock/MockData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainGame(extras) {
    _reporterNs.report("MainGame", "./MainGame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBigWingsSymbol(extras) {
    _reporterNs.report("BigWingsSymbol", "../wheel/BigWingsSymbol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolInfo(extras) {
    _reporterNs.report("SymbolInfo", "../wheel/SymbolInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameCommand(extras) {
    _reporterNs.report("GameCommand", "./GameCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameCommandMode(extras) {
    _reporterNs.report("GameCommandMode", "./GameCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecvMessage(extras) {
    _reporterNs.report("RecvMessage", "../lib/RecvMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataType(extras) {
    _reporterNs.report("DataType", "../lib/RecvMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseGame(extras) {
    _reporterNs.report("BaseGame", "../lib/BaseGame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfo(extras) {
    _reporterNs.report("Info", "./Info", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBigWingsWheel(extras) {
    _reporterNs.report("BigWingsWheel", "../wheel/BigWingsWheel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "../SoundController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinAndMarquee(extras) {
    _reporterNs.report("WinAndMarquee", "./WinAndMarquee", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      tween = _cc.tween;
      Prefab = _cc.Prefab;
      UIOpacity = _cc.UIOpacity;
      js = _cc.js;
      sp = _cc.sp;
      Graphics = _cc.Graphics;
      Color = _cc.Color;
    }, function (_casinoMonoMvc) {
      CommandEventName = _casinoMonoMvc.CommandEventName;
      CostumeEventName = _casinoMonoMvc.CostumeEventName;
    }, function (_strictEventEmitter) {
      Emitter = _strictEventEmitter.Emitter;
    }, function (_unresolved_2) {
      RollerEvent = _unresolved_2.RollerEvent;
    }, function (_unresolved_3) {
      UtilsKit = _unresolved_3.UtilsKit;
    }, function (_unresolved_4) {
      BigWingsRoller = _unresolved_4.BigWingsRoller;
    }, function (_unresolved_5) {
      symbolResource_TA = _unresolved_5.symbolResource_TA;
    }, function (_unresolved_6) {
      MockData = _unresolved_6.MockData;
    }, function (_unresolved_7) {
      MainGame = _unresolved_7.MainGame;
    }, function (_unresolved_8) {
      SymbolInfo = _unresolved_8.SymbolInfo;
    }, function (_unresolved_9) {
      GameCommand = _unresolved_9.GameCommand;
      GameCommandMode = _unresolved_9.GameCommandMode;
    }, function (_unresolved_10) {
      Info = _unresolved_10.Info;
    }, function (_unresolved_11) {
      SoundController = _unresolved_11.default;
    }, function (_unresolved_12) {
      WinAndMarquee = _unresolved_12.WinAndMarquee;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4451eFnYBlLgYRA2OWep3We", "GameManager", undefined);

      __checkObsolete__(['Component', 'ccenum', '_decorator', 'EventMouse', 'input', 'Input', 'EventHandler', 'Button', 'Node', 'Vec3', 'tween', 'Prefab', 'Enum', 'UIOpacity', 'Animation', 'Label', 'js', 'sp', 'Graphics', 'Color']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      _export("TransitionType", TransitionType = /*#__PURE__*/function (TransitionType) {
        TransitionType["MAIN"] = "main";
        TransitionType["FREE"] = "free";
        return TransitionType;
      }({}));
      /**
       * 收到 begin game data 後延遲停止時間(單位:毫秒)
       */


      DelayTimeToStop = /*#__PURE__*/function (DelayTimeToStop) {
        DelayTimeToStop[DelayTimeToStop["FREE"] = 200] = "FREE";
        DelayTimeToStop[DelayTimeToStop["AUTO"] = 200] = "AUTO";
        DelayTimeToStop[DelayTimeToStop["SPEED_UP"] = 0] = "SPEED_UP";
        DelayTimeToStop[DelayTimeToStop["NORMAL"] = 2000] = "NORMAL";
        return DelayTimeToStop;
      }(DelayTimeToStop || {});
      /**
       * 此局結束後延遲多久後自動開始下一局(單位:毫秒)
       */


      DelayTimeToAutoSpin = /*#__PURE__*/function (DelayTimeToAutoSpin) {
        DelayTimeToAutoSpin[DelayTimeToAutoSpin["FREE"] = 200] = "FREE";
        DelayTimeToAutoSpin[DelayTimeToAutoSpin["AUTO"] = 200] = "AUTO";
        return DelayTimeToAutoSpin;
      }(DelayTimeToAutoSpin || {});

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = menu('BigWings/GameManager'), _dec3 = property({
        type: _crd && GameCommand === void 0 ? (_reportPossibleCrUseOfGameCommand({
          error: Error()
        }), GameCommand) : GameCommand,
        tooltip: '遊戲按鈕相關物件'
      }), _dec4 = property({
        type: _crd && SymbolInfo === void 0 ? (_reportPossibleCrUseOfSymbolInfo({
          error: Error()
        }), SymbolInfo) : SymbolInfo,
        tooltip: '賠率表'
      }), _dec5 = property({
        type: _crd && MainGame === void 0 ? (_reportPossibleCrUseOfMainGame({
          error: Error()
        }), MainGame) : MainGame,
        tooltip: '主遊戲'
      }), _dec6 = property({
        type: _crd && BigWingsRoller === void 0 ? (_reportPossibleCrUseOfBigWingsRoller({
          error: Error()
        }), BigWingsRoller) : BigWingsRoller
      }), _dec7 = property({
        type: _crd && Info === void 0 ? (_reportPossibleCrUseOfInfo({
          error: Error()
        }), Info) : Info
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node,
        tooltip: "symbol中獎動畫層"
      }), _dec10 = property({
        type: Prefab,
        tooltip: "symbol中獎 Prefab"
      }), _dec11 = property({
        type: Node,
        tooltip: "免費遊戲剩餘次數介面"
      }), _dec12 = property({
        type: Node,
        tooltip: "免費遊戲獲得"
      }), _dec13 = property({
        type: Node,
        tooltip: "免費遊戲結算"
      }), _dec14 = property({
        type: Node,
        tooltip: "free紀錄顯示"
      }), _dec15 = property({
        type: Node,
        tooltip: "大獎動畫"
      }), _dec16 = property({
        type: Node,
        tooltip: "背景"
      }), _dec17 = property({
        type: Node,
        tooltip: "樹葉"
      }), _dec18 = property({
        type: Node,
        tooltip: "得分框(跑馬燈)"
      }), _dec19 = property({
        type: Node,
        tooltip: "剩餘免費次數"
      }), _dec20 = property({
        type: Node,
        tooltip: "主架構"
      }), _dec21 = property({
        type: _crd && symbolResource_TA === void 0 ? (_reportPossibleCrUseOfsymbolResource_TA({
          error: Error()
        }), symbolResource_TA) : symbolResource_TA,
        tooltip: "symbol資源"
      }), _dec22 = property({
        type: Node,
        tooltip: "black"
      }), _dec(_class = _dec2(_class = (_class2 = (_class3 = class GameManager extends Component {
        constructor(...args) {
          super(...args);

          /** 餘額 */
          this.credit = void 0;

          /** 下注比例 */
          this.betBase = void 0;

          /** 下注比例列表 */
          this.base = void 0;

          /** 線數 */
          this.line = void 0;

          /** 下注比例 */
          this.lineBet = void 0;

          /** 總押注 */
          this.bet = void 0;

          /** 單號 */
          this.wagersID = void 0;

          /** 結果牌型 */
          this.cards = void 0;

          /** 贏得分數 */
          this.payoff = void 0;

          /** 每線結果 */
          this.lines = void 0;
          this.wild = void 0;
          this.scatter = void 0;
          this.bonus = void 0;
          this.free = void 0;
          this.freeTimes = void 0;
          this.doubleTime = void 0;
          this.winJPType = void 0;
          this.winJPAmount = void 0;
          this.levelID = void 0;
          this.brickNum = void 0;
          this.axisLocation = void 0;
          this.rates = void 0;
          this.lineList = void 0;
          this.betCreditList = void 0;
          this.defaultBetCredit = void 0;

          /** @deprecated */
          this.isCash = void 0;
          this.isExchangePageOpen = void 0;
          this.events = new (_crd && Emitter === void 0 ? (_reportPossibleCrUseOfEmitter({
            error: Error()
          }), Emitter) : Emitter)();

          _initializerDefineProperty(this, "command", _descriptor, this);

          _initializerDefineProperty(this, "symbolInfo", _descriptor2, this);

          _initializerDefineProperty(this, "mainGame", _descriptor3, this);

          /**
           * 這邊結構改變
           * @deprecated 
           */
          this.toolbar = void 0;

          _initializerDefineProperty(this, "roller", _descriptor4, this);

          _initializerDefineProperty(this, "info", _descriptor5, this);

          _initializerDefineProperty(this, "Marquee", _descriptor6, this);

          _initializerDefineProperty(this, "symbolWinLayer", _descriptor7, this);

          _initializerDefineProperty(this, "symbolWin", _descriptor8, this);

          _initializerDefineProperty(this, "freeGameTimes", _descriptor9, this);

          _initializerDefineProperty(this, "freeGameGet", _descriptor10, this);

          _initializerDefineProperty(this, "totalWin", _descriptor11, this);

          _initializerDefineProperty(this, "freeGet", _descriptor12, this);

          _initializerDefineProperty(this, "BigWinAni", _descriptor13, this);

          _initializerDefineProperty(this, "Bg", _descriptor14, this);

          _initializerDefineProperty(this, "Leaf", _descriptor15, this);

          _initializerDefineProperty(this, "scoreGrid", _descriptor16, this);

          _initializerDefineProperty(this, "remainFT", _descriptor17, this);

          _initializerDefineProperty(this, "SlotGameUI", _descriptor18, this);

          _initializerDefineProperty(this, "symbolResourceTA", _descriptor19, this);

          // 是否在 Free Game 中
          this.currentCardIndex = void 0;
          // 目前顯示到牌組(cards)中的第幾組資料
          this.arrCleanAll = void 0;
          // 每一牌組顯示後是否清除全部牌
          this.arrListenStartIndex = void 0;
          // 每一牌組實做聽牌效果的起始轉輪 Index
          this.playingLineIndex = 0;
          this.loopRound = 0;
          this._isLooping = false;
          this.loopCb = null;
          this.test = false;
          this.rejectDelayingToStop = null;

          _initializerDefineProperty(this, "black", _descriptor20, this);
        }

        onLoad() {
          console.log("onLoad"); //按鈕觸發設置

          const thisScriptName = js.getClassName(this); //spin按鈕
          // const spinBtnEventHandler = new EventHandler();
          // spinBtnEventHandler.target = this.node;
          // spinBtnEventHandler.component = thisScriptName;
          // spinBtnEventHandler.handler = 'clickSpin';
          // this.btnSpin.getComponent(Button).clickEvents.push(spinBtnEventHandler);
          // this.btnSpin.getComponent(Button).interactable = true;

          this.roller.node.on((_crd && RollerEvent === void 0 ? (_reportPossibleCrUseOfRollerEvent({
            error: Error()
          }), RollerEvent) : RollerEvent).StopEnd, this.checkResult, this);
          this.command.node.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
            error: Error()
          }), CommandEventName) : CommandEventName).SPIN, this.onSpin, this);
          this.command.node.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
            error: Error()
          }), CommandEventName) : CommandEventName).BUY_FREEGAME, this.onSpin, this);
          this.command.node.on((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
            error: Error()
          }), CommandEventName) : CommandEventName).STOP, () => this.onStop(0), this); // this.freeGameGet.setPosition(new Vec3(0, 0, 0));

          let g = this.black.getComponent(Graphics);
          g.clear();
          g.fillColor = new Color(0, 0, 0, 180);
          g.rect(-540, -440, 1080, 803);
          g.fill();
          this.black.active = false;
          (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).load().then(() => {//SoundController.playBGM();
          });
        }

        start() {
          console.log("Start");
          this.freeTimes = 0; // this.BigWinAni.active = false
          // let big_win = this.BigWinAni.getChildByName('BigWin').getComponent(sp.Skeleton)
          // big_win.set
        }

        setup() {// this.events.emit(CostumeEventName.END);
          // this.events.emit(CostumeEventName.FREE);
          // this.events.emit(CostumeEventName.HIT_BONUS);
          // this.events.emit(CostumeEventName.END_BONUS);
          // this.events.emit(CostumeEventName.DOUBLE_UP);
        }

        createToolbar() {}

        createCommand() {// GUI Setup Command
        }
        /**
         * 連線取得OnloadInfo會觸發setupGame
         */


        setupGame() {
          // onLoadInfo Success
          if (this.betCreditList) {
            this.symbolInfo.rates = this.rates;
            this.mainGame.lineList = this.lineList;
            this.command.currentBet = this.defaultBetCredit;
            this.command.arrBet = this.betCreditList;
            this.roller.createListenItem(this.symbolInfo); // this.mainGame.lineTest();
          }
        }
        /**
         * 彩池更新
         * @param value 
         */


        updateJackpot(value) {// TODO: Jackpot panel update value array
        }
        /**
         * 跑馬燈更新
         * @param message 訊息更新
         */


        updateMarquee(message) {
          // TODO: Marquee panel update message
          console.log("updateMarquee", message); // this.Marquee.getComponent(Animation).defaultClip.wrapMode=22
          // this.Marquee.getComponent(Animation)..repeatCount=10
          // this.Marquee.getComponent(Animation).play()
        }
        /** 更新資訊 */


        updateInfo() {
          console.log("update info"); // updateRatio
          // updateTotalBet
          // bet 
          // updateBfgPrice
        }

        updateBet() {// bet = this._lineBet;
          // info.updateTotalBetJump(this._lineBet)
          // updateBfgPrice(this._lineBet * 6 * 10)
        }

        async onSpin() {
          console.log("GameManager onSpin");
          this.cards = null;
          this.currentCardIndex = 0; // this.roller.speedUp(this.command.doSpeedUp);

          this.roller.launch();
          if (!GameManager.isFree) this.scoreGrid.getComponent(_crd && WinAndMarquee === void 0 ? (_reportPossibleCrUseOfWinAndMarquee({
            error: Error()
          }), WinAndMarquee) : WinAndMarquee).playMarquee(true);
          this.symbolInfo.close();
          this.mainGame.resetLine();
          this.black.active = false;
          this.unschedule(this.loopCb);
          this.roller.resetSpine();
          this.roller.checkWildStay();
          this.command.mode((_crd && GameCommandMode === void 0 ? (_reportPossibleCrUseOfGameCommandMode({
            error: Error()
          }), GameCommandMode) : GameCommandMode).SPINNING);

          if (GameManager.isFree) {// this.freeGameTimes.getChildByName('label').getComponent(Label).string = (this.freeTimes - 1).toString();
          }
        }

        onStop(time = null) {
          this.rejectDelayingToStop("reject delaying to stop because of manual");
          this.rejectDelayingToStop = null;
          this.command.lock();
          let arrCards = [];
          console.error(this.cards);
          console.log("arrCleanAll", this.arrCleanAll); // this.roller.listenStartIndex = this.arrListenStartIndex[this.currentCardIndex];

          this.roller.stop(this.cards, null, this.command.doSpeedUp ? 0 : time);
        }

        async begin(data) {
          if (!data || this.test) data = (_crd && MockData === void 0 ? (_reportPossibleCrUseOfMockData({
            error: Error()
          }), MockData) : MockData).getData();
          console.log("beginGame Data", data);
          this.cards = data.Cards;
          this.lines = data.Lines;
          this.scatter = data["FreeGame"];
          this.free = data["FreeGameSpin"];
          this.payoff = data["PayTotal"];
          this.wild = data.Wild; // if (!this.free || this.free.FreeGameTime == 0) {
          //     this.bet = data["BetTotal"];
          // }

          this.delayToStop().then(() => {
            this.onStop();
          }).catch(reason => {
            console.log(reason);
          });
        }

        disableExchange() {// 開關換分面板?!
        }

        clear() {} // protected async clickSpin() {
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


        stop() {// let arrCards: Array<Array<number>> = [];
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


        runTransition(transitionType) {
          return;
        }

        async checkResult() {
          console.error("checkResult");
          await this.displayBigWin();
          await this.displayJPWinning();
          await this.displayLockWild();
          await this.displayScore();
          await this.displayFree();
          this.displayEachLine();
          this.over();
        }

        async displayBigWin() {}

        async displayJPWinning() {}

        async displayLockWild() {}

        async displayScore() {
          if (this.payoff > 0) {
            let isBig = this.payoff >= this.lineBet * 20;
            this.scoreGrid.getComponent(_crd && WinAndMarquee === void 0 ? (_reportPossibleCrUseOfWinAndMarquee({
              error: Error()
            }), WinAndMarquee) : WinAndMarquee).updateScore(this.payoff, this.lineBet, !isBig, GameManager.isFree);
            await this.playWinLines();
            console.error("playLineover");
          }
        }
        /**
         * 播放中獎動畫
         * @param grids symbol 位置
         * @param 所有中獎 symbol
         */


        async playWinLines() {
          console.error("Lines:", this.lines);
          console.error("Wild:", this.wild);
          this.lines.forEach(l => this.mainGame.showLine(l.LineID)); // let hasWildWheel = Object.values(this.wild.Reel);

          let allGrids = this.lines.reduce((a, b) => a.concat(b.Grids), []).filter((e, i, arr) => arr.indexOf(e) == i);
          let promises = [];
          allGrids.forEach(grid => {
            let wheelIndex = Math.floor((grid - 1) / 4); // if (hasWildWheel.indexOf(wheelIndex + 1) == -1) {

            if (!this.roller.arrWheel[wheelIndex].isWildStaying()) {
              let rollerSym = this.roller.getSymbolByIndex(grid);
              rollerSym.node.active = false; // console.error("playingGrid:", grid, "id:", rollerSym.symbolID);

              promises.push(this.roller.symArr[grid - 1].win(rollerSym.symbolID));
            } else {
              // if that wheel has expanded wild
              promises.push(this.roller.arrWheel[wheelIndex].playWildWin());
            }
          });
          await Promise.all(promises);
        } // private displayEachLine = (): void => {


        displayEachLine() {
          if (GameManager.isFree || this.command.isAuto || this.payoff == 0) return; // console.error("displayEachLine");
          // console.log("this.playingLineIndex", this.playingLineIndex);
          // console.log("this.loopRound", this.loopRound);

          this.roller.resetSpine(); // this._drawLines.forEach((l) => l.visible = false);

          this.black.active = true;

          if (this.playingLineIndex == this.lines.length) {
            this.playingLineIndex = 0;
            this.loopRound++;
            this.displayEachLine(); // this.scheduleOnce(this.displayEachLine.bind(this), 0);
          } else {
            // if (this.loopRound == 0) MusicTools.playMusic("sfx_payline")
            let line = this.lines[this.playingLineIndex]; // this._drawLines.find(l => l.name === `LineID${line.LineID}`).visible = true;

            this.mainGame.resetLine();
            this.mainGame.showLine(line.LineID);
            console.log("looping:", line.LineID); // this.lineInfo.updateElement(line.LineID, line.Element, line.Payoff);

            this.roller.arrWheel.forEach(e => e.wildSym.node.active = false);
            let promises = [];

            for (let grid of line.Grids) {
              let wheelIndex = Math.floor((grid - 1) / 4); // if (hasWildWheel.indexOf(wheelIndex + 1) == -1) {

              if (!this.roller.arrWheel[wheelIndex].isWildStaying()) {
                let rollerSym = this.roller.getSymbolByIndex(grid);
                rollerSym.node.active = false;
                promises.push(this.roller.symArr[grid - 1].win(rollerSym.symbolID));
              } else {
                // if that wheel has expanded wild
                promises.push(this.roller.arrWheel[wheelIndex].playWildWin());
              }
            } // await Promise.all(promises);
            // this._lineInfo.show(line.Element.slice(0, line.GridNum), line.Payoff, line.LineID);


            this.playingLineIndex++;
            this.loopCb = this.displayEachLine.bind(this);
            this.scheduleOnce(this.loopCb, 2);
          }
        }

        async displayFree() {
          if (this.scatter.HitFree) {
            GameManager.isFree = true;
            console.log(this.scatter.Grids);
            let freeGrids = this.scatter.Grids.split(",").map(e => +e);
            this.roller.resetSpine(); // this._drawLines.forEach((l) => l.visible = false);

            let promises = []; // MusicTools.tempMuteBgm(true);
            // MusicTools.playMusic("sfx_fg_alarm")

            freeGrids.forEach(grid => {
              let rollerSym = this.roller.getSymbolByIndex(grid);
              rollerSym.node.active = false;
              promises.push(this.roller.symArr[grid - 1].win(rollerSym.symbolID));
            });
            await Promise.all(promises); // await sleep(0.5);
          }
        }

        async over() {
          console.error("OVER"); // console.error("free times:", this._freeTimes);
          // if (DemoController.ISFREE && this._freeTimes == 0) {
          //     await this.endFreeGame(Tools.MathTool.plus(this._freePayTotal, this._payoffBeforeFree));
          //     this._mainGame.reset();
          // }
          // if (this.command.isAuto && this._autoTimes == 0) {
          //     this.command.isAuto = false;
          //     this._command.stopAuto();
          // }

          this.command.mode((_crd && GameCommandMode === void 0 ? (_reportPossibleCrUseOfGameCommandMode({
            error: Error()
          }), GameCommandMode) : GameCommandMode).BETTING);
          this.node.emit((_crd && CostumeEventName === void 0 ? (_reportPossibleCrUseOfCostumeEventName({
            error: Error()
          }), CostumeEventName) : CostumeEventName).END);
        }

        delayToStop() {
          return new Promise(async (resolve, reject) => {
            this.rejectDelayingToStop = reject;
            let delayTimeToStop;

            if (this.command.doSpeedUp) {
              delayTimeToStop = DelayTimeToStop.SPEED_UP;
            } else if (GameManager.isFree) {
              delayTimeToStop = DelayTimeToStop.FREE;
            } else {
              if (this.command.isAuto) {
                delayTimeToStop = DelayTimeToStop.AUTO;
              } else {
                delayTimeToStop = DelayTimeToStop.NORMAL;
                this.scheduleOnce(() => this.command.mode((_crd && GameCommandMode === void 0 ? (_reportPossibleCrUseOfGameCommandMode({
                  error: Error()
                }), GameCommandMode) : GameCommandMode).CAN_STOP), 0.5);
              }
            }

            if (delayTimeToStop > 0) {
              await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
                error: Error()
              }), UtilsKit) : UtilsKit).Defer(delayTimeToStop);
            }

            resolve(null);
          });
        }

        async changeToFg() {
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
          await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
            error: Error()
          }), UtilsKit) : UtilsKit).Defer(250);
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
          await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
            error: Error()
          }), UtilsKit) : UtilsKit).Defer(750); // this.roller.getComponent(UIOpacity).opacity = 0;
          // logo.getComponent(UIOpacity).opacity = 0;
          // logo.position = new Vec3(536.849, 1701.32);
          // this.scoreGrid.getComponent(UIOpacity).opacity = 0;
          // this.scoreGrid.position = new Vec3(541.278, 698.366);

          bg.setPosition(540, 960);
          bg.active = false;
          fgBg.active = true;
          await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
            error: Error()
          }), UtilsKit) : UtilsKit).Defer(500);
          let zone = this.Bg.getChildByName('displayZone');
          zone.addChild(this.roller.node);
          zone.addChild(logo);
          zone.addChild(this.scoreGrid);
          this.roller.node.setPosition(540, 1210);
          logo.setPosition(536.849, 1701.32);
          this.scoreGrid.setPosition(541.278, 698.366);
          await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
            error: Error()
          }), UtilsKit) : UtilsKit).Defer(1500); // opacity = 0會讓setPosition 只有移動本體node children直接放置
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

          tween(this.remainFT.getComponent(UIOpacity)).to(3, {
            opacity: 255
          }).start(); // tween(this.scoreGrid.getComponent(UIOpacity))
          //     .to(3, { opacity: 255 })
          //     .start();

          await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
            error: Error()
          }), UtilsKit) : UtilsKit).Defer(1000);
          this.Bg.addChild(logo);
          this.SlotGameUI.insertChild(this.roller.node, 1);
          this.SlotGameUI.insertChild(this.scoreGrid, 3);
          (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).playBGM({
            isFree: true
          });
        }

        moveTest(node) {
          let data = {
            move: 0,
            posY: node.position.y
          };
          tween(data).to(0.2, {
            move: 128
          }, {
            onUpdate: () => {
              node.setPosition(node.position.x, data.posY - data.move);
            }
          }).to(0.2, {
            move: 486
          }, {
            onUpdate: () => {
              node.setPosition(node.position.x, data.posY - data.move);
            }
          }).to(0.333, {
            move: 1920
          }, {
            onUpdate: () => {
              node.setPosition(node.position.x, data.posY - data.move);
            }
          }).start();
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


      }, _class3.isFree = false, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "command", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "symbolInfo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mainGame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "roller", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "info", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Marquee", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "symbolWinLayer", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "symbolWin", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "freeGameTimes", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "freeGameGet", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "totalWin", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "freeGet", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "BigWinAni", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Bg", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Leaf", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "scoreGrid", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "remainFT", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "SlotGameUI", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "symbolResourceTA", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "black", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3927454ee3304df7b72d5ab02d193548197de227.js.map
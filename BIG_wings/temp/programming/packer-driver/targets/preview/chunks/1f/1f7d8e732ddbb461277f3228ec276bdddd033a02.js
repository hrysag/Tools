System.register(["__unresolved_0", "cc", "@casino-mono/mvc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CommandEventName, Component, _decorator, Node, Button, Label, tween, Vec3, BaseAutoSet, BetSetPanel, SymbolInfo, UtilsKit, BuyFreeGamePanel, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _crd, ccclass, property, menu, GameCommandMode, GameCommand;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCommandEventName(extras) {
    _reporterNs.report("CommandEventName", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseAutoSet(extras) {
    _reporterNs.report("BaseAutoSet", "./BaseAutoSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetSetPanel(extras) {
    _reporterNs.report("BetSetPanel", "./BetSetPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolInfo(extras) {
    _reporterNs.report("SymbolInfo", "../wheel/SymbolInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilsKit(extras) {
    _reporterNs.report("UtilsKit", "../lib/UtilsKit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyFreeGamePanel(extras) {
    _reporterNs.report("BuyFreeGamePanel", "./BuyFreeGamePanel", _context.meta, extras);
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
      Button = _cc.Button;
      Label = _cc.Label;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_casinoMonoMvc) {
      CommandEventName = _casinoMonoMvc.CommandEventName;
    }, function (_unresolved_2) {
      BaseAutoSet = _unresolved_2.BaseAutoSet;
    }, function (_unresolved_3) {
      BetSetPanel = _unresolved_3.BetSetPanel;
    }, function (_unresolved_4) {
      SymbolInfo = _unresolved_4.SymbolInfo;
    }, function (_unresolved_5) {
      UtilsKit = _unresolved_5.UtilsKit;
    }, function (_unresolved_6) {
      BuyFreeGamePanel = _unresolved_6.BuyFreeGamePanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91e28XA891MEq1tvyM4zh5u", "GameCommand", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'CCBoolean', 'log', 'js', 'EventHandler', 'Button', 'Animation', 'Label', 'animation', 'AnimationState', 'AnimationClip', 'UITransform', 'tween', 'Vec3', 'debug']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      _export("GameCommandMode", GameCommandMode = /*#__PURE__*/function (GameCommandMode) {
        GameCommandMode["BETTING"] = "betting";
        GameCommandMode["SPINNING"] = "spinning";
        GameCommandMode["CAN_STOP"] = "can_stop";
        return GameCommandMode;
      }({}));

      _export("GameCommand", GameCommand = (_dec = ccclass('GameCommand'), _dec2 = menu('BigWings/GameCommand'), _dec3 = property({
        type: Button,
        tooltip: "spin 按鈕"
      }), _dec4 = property({
        type: Button,
        tooltip: "BFG 按鈕"
      }), _dec5 = property({
        type: _crd && BuyFreeGamePanel === void 0 ? (_reportPossibleCrUseOfBuyFreeGamePanel({
          error: Error()
        }), BuyFreeGamePanel) : BuyFreeGamePanel,
        tooltip: "BuyFreeGame 面板"
      }), _dec6 = property({
        type: Button,
        tooltip: "+ 按鈕"
      }), _dec7 = property({
        type: Button,
        tooltip: "- 按鈕"
      }), _dec8 = property({
        type: Button,
        tooltip: "押注列表按鈕"
      }), _dec9 = property({
        type: _crd && BetSetPanel === void 0 ? (_reportPossibleCrUseOfBetSetPanel({
          error: Error()
        }), BetSetPanel) : BetSetPanel,
        tooltip: "押注列表"
      }), _dec10 = property({
        type: Button,
        tooltip: "加速按鈕"
      }), _dec11 = property({
        type: Button,
        tooltip: "取消加速按鈕"
      }), _dec12 = property({
        type: Button,
        tooltip: "auto 按鈕"
      }), _dec13 = property({
        type: Button,
        tooltip: "auto stop 按鈕"
      }), _dec14 = property({
        type: Node,
        tooltip: "auto 次數 Node"
      }), _dec15 = property({
        type: _crd && BaseAutoSet === void 0 ? (_reportPossibleCrUseOfBaseAutoSet({
          error: Error()
        }), BaseAutoSet) : BaseAutoSet,
        tooltip: "auto 次數設定面板"
      }), _dec16 = property({
        type: Node,
        tooltip: "目前 auto 次數 Node"
      }), _dec17 = property({
        type: Node,
        tooltip: "彈出設定面板"
      }), _dec18 = property({
        type: _crd && SymbolInfo === void 0 ? (_reportPossibleCrUseOfSymbolInfo({
          error: Error()
        }), SymbolInfo) : SymbolInfo,
        tooltip: '賠率表'
      }), _dec(_class = _dec2(_class = (_class2 = class GameCommand extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "btnSpin", _descriptor, this);

          _initializerDefineProperty(this, "buyFreeGame", _descriptor2, this);

          _initializerDefineProperty(this, "buyFreeGamePanel", _descriptor3, this);

          _initializerDefineProperty(this, "betPlus", _descriptor4, this);

          _initializerDefineProperty(this, "betMinus", _descriptor5, this);

          _initializerDefineProperty(this, "betSetPanelBtn", _descriptor6, this);

          _initializerDefineProperty(this, "betSetPanel", _descriptor7, this);

          _initializerDefineProperty(this, "btnSpeedUp", _descriptor8, this);

          _initializerDefineProperty(this, "btnSpeedUpStop", _descriptor9, this);

          _initializerDefineProperty(this, "btnAuto", _descriptor10, this);

          _initializerDefineProperty(this, "btnAutoStop", _descriptor11, this);

          _initializerDefineProperty(this, "autoSetNode", _descriptor12, this);

          _initializerDefineProperty(this, "autoSetPanel", _descriptor13, this);

          _initializerDefineProperty(this, "currentAutoNumberNode", _descriptor14, this);

          _initializerDefineProperty(this, "popUpPanel", _descriptor15, this);

          _initializerDefineProperty(this, "symbolInfo", _descriptor16, this);

          this._gameMode = void 0;
          // 遊戲按鈕模式
          this._isAuto = false;
          // 是否為自動狀態
          this._currentAutoNumber = 0;
          // 目前自動次數
          this._doSpeedUp = false;
          this.autoPanelOpen = false;
          this.betPanelOpen = false;
        }

        // 是否加速
        get event() {
          return this.node;
        }

        get gameMode() {
          return this._gameMode;
        }

        get isAuto() {
          return this._isAuto;
        }

        set currentAutoNumber(n) {
          this._currentAutoNumber = n;
          var lableNode = this.currentAutoNumberNode.getChildByName("label");
          var infinityNode = this.currentAutoNumberNode.getChildByName("infinite");

          if (n >= 0) {
            infinityNode.active = false;
            lableNode.active = true;
            lableNode.getComponent(Label).string = n.toString();
          } else {
            infinityNode.active = true;
            lableNode.active = false;
          }

          if (n == 0) {
            this._isAuto = false;
          } else {
            this._isAuto = true;
          }

          this.btnSpin.node.active = !this._isAuto;
          this.btnAutoStop.node.active = this._isAuto;
          this.currentAutoNumberNode.active = this._isAuto;
        }

        set arrBet(arr) {
          this.betSetPanel.BetCreditList = arr;
        }

        set currentBet(n) {
          this.betSetPanel.currentBet = n;
        }

        get currentBet() {
          return this.betSetPanel.currentBet;
        }

        get currentAutoNumber() {
          return this._currentAutoNumber;
        }

        get doSpeedUp() {
          return this._doSpeedUp;
        }

        onLoad() {
          console.log("command onload");
          this.autoSetPanel.currentAutoLabel = this.autoSetNode;
          (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
            error: Error()
          }), UtilsKit) : UtilsKit).BindEvents([{
            bindTarget: this.btnSpin,
            callback: this.handleSpin
          }, {
            bindTarget: this.btnAuto,
            callback: this.handleAuto
          }, {
            bindTarget: this.btnAutoStop,
            callback: this.handleAutoStop
          }, {
            bindTarget: this.betPlus,
            callback: this.handlePlus
          }, {
            bindTarget: this.betMinus,
            callback: this.handleMinus
          }, {
            bindTarget: this.btnSpeedUp,
            callback: this.handleSpeedUp
          }, {
            bindTarget: this.btnSpeedUpStop,
            callback: this.handleSpeedUp
          }, {
            bindTarget: this.buyFreeGame,
            callback: this.openBuyFreeGamePanel
          }, {
            bindTarget: this.betSetPanel,
            event: (_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).UPDATE_LINEBET,
            callback: this.handleLineBet
          }, {
            bindTarget: this.betSetPanelBtn,
            callback: this.handleBet
          }, {
            bindTarget: this.buyFreeGamePanel,
            event: (_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).BUY_FREEGAME,
            callback: this.handleBuyFreeGame
          }], {
            defaultEvent: "click",
            defaultTarget: this
          });
        } // public setup(): void {
        //     // Trigger testcase
        //     this.event.emit(CommandEventName.SPIN);
        //     this.event.emit(CommandEventName.MAX_BET);
        //     let loop: boolean = false;
        //     this.event.emit(CommandEventName.LINE_BET, loop);
        //     this.event.emit(CommandEventName.LINE_BET_MINUS, loop);
        //     this.event.emit(CommandEventName.LINE, loop);
        //     this.event.emit(CommandEventName.LINE_MINUS, loop);
        //     this.event.emit(CommandEventName.DOUBLE);
        //     let lineBet = 0;
        //     this.event.emit(CommandEventName.UPDATE_LINEBET, lineBet);
        //     let line = 0;
        //     this.event.emit(CommandEventName.UPDATE_LINE, line);
        //     let betBae: string = '1:1'
        //     this.event.emit(CommandEventName.CHANGE_RATIO, betBae);
        //     this.event.emit(CommandEventName.EXCHANGE);
        // }


        handleSpin() {
          console.log("那這邊有嗎");

          if (this._gameMode == GameCommandMode.CAN_STOP) {
            this.event.emit((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).STOP);
          } else {
            // if (this.autoSetPanel.node.active) {
            //     this.currentAutoNumber = this.autoSetPanel.currentAutoNumber;
            //     this.autoSetPanel.node.active = false;
            //     this.autoSetNode.active = false;
            // } else {
            //     this.currentAutoNumber = 0;
            // }
            this.event.emit((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
              error: Error()
            }), CommandEventName) : CommandEventName).SPIN, 2); // 要改bet
          }
        }

        handleAuto() {
          this.betPanelOpen = false;
          this.autoPanelOpen = !this.autoPanelOpen;
          this.popPanelVis();
          this.autoSetPanel.node.active = true;
          this.betSetPanel.node.active = false;
        }

        popPanelVis() {
          //原本大雄的寫法 但是因爲底層用tween 如果y已經在彈出狀態不會改變 而cocos因為是播Animation一定執行一次y從最小值到最大值
          // console.log(this.popUpPanel.getChildByName('content').position)
          // if (this.betPanelOpen || this.autoPanelOpen) this.popUpPanel.getComponent(Animation).getState('setShow').wrapMode = AnimationClip.WrapMode.Normal
          // else this.popUpPanel.getComponent(Animation).getState('setShow').wrapMode = AnimationClip.WrapMode.Reverse;
          // this.popUpPanel.getComponent(Animation).play();
          if (this.betPanelOpen || this.autoPanelOpen) {
            tween(this.popUpPanel).to(0.2, {
              position: new Vec3(this.popUpPanel.position.x, 1390, 0)
            }).start();
          } else tween(this.popUpPanel).to(0.2, {
            position: new Vec3(this.popUpPanel.position.x, 0, 0)
          }).start();
        }

        hideAllPopPanel() {
          tween(this.popUpPanel).to(0.2, {
            position: new Vec3(this.popUpPanel.position.x, 0, 0)
          }).start();
          this.autoPanelOpen = false;
          this.betPanelOpen = false;
        }

        handleBet() {
          this.autoPanelOpen = false;
          this.betPanelOpen = !this.betPanelOpen;
          this.popPanelVis();
          this.autoSetPanel.node.active = false;
          this.betSetPanel.node.active = true;
        }

        handleAutoStop() {
          this.currentAutoNumber = 0;
        }

        handlePlus() {
          this.betSetPanel.next();
        }

        handleMinus() {
          this.betSetPanel.previous();
        }

        handleLineBet(bet) {
          console.log(bet);
          this.node.emit((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
            error: Error()
          }), CommandEventName) : CommandEventName).UPDATE_LINEBET, bet);
        }

        openBuyFreeGamePanel() {
          this.buyFreeGamePanel.openPanel();
        }

        handleSpeedUp() {
          this.btnSpeedUp.node.active = !this.btnSpeedUp.node.active;
          this.btnSpeedUpStop.node.active = !this.btnSpeedUpStop.node.active;
          this._doSpeedUp = !this.btnSpeedUp.node.active;
        }

        handleBuyFreeGame() {
          console.log("handle BuyFreeGame"); // 後面參數是 [betCredit: "這個是bet", HitFree: true]

          this.event.emit((_crd && CommandEventName === void 0 ? (_reportPossibleCrUseOfCommandEventName({
            error: Error()
          }), CommandEventName) : CommandEventName).BUY_FREEGAME, [2, true]);
        }
        /**
        * 按鈕模式
        * @param mode 模式
        */


        mode(gameMode) {
          this._gameMode = gameMode;

          switch (gameMode) {
            case GameCommandMode.BETTING:
              this.bettingMode();
              break;

            case GameCommandMode.SPINNING:
              this.spinningMode();
              break;

            case GameCommandMode.CAN_STOP:
              this.canStopMode();
              break;
          }
        }

        bettingMode() {
          this.btnSpin.interactable = true;
          this.betPlus.interactable = true;
          this.betMinus.interactable = true;
          this.betSetPanelBtn.interactable = true;
          this.btnAuto.interactable = true;
          this.buyFreeGame.interactable = true;
          this.symbolInfo.enable = true;
        }

        spinningMode() {
          this.btnSpin.interactable = false;
          this.betPlus.interactable = false;
          this.betMinus.interactable = false;
          this.betSetPanelBtn.interactable = false;
          this.btnAuto.interactable = false;
          this.buyFreeGame.interactable = false;
        }

        canStopMode() {
          this.btnSpin.interactable = true;
          this.betPlus.interactable = false;
          this.betMinus.interactable = false;
          this.betSetPanelBtn.interactable = false;
          this.btnAuto.interactable = false;
          this.buyFreeGame.interactable = false;
        }

        lock() {
          this.btnSpin.interactable = false;
          this.betPlus.interactable = false;
          this.betMinus.interactable = false;
          this.betSetPanelBtn.interactable = false;
          this.btnAuto.interactable = false;
          this.buyFreeGame.interactable = false;
          this.symbolInfo.enable = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnSpin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buyFreeGame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "buyFreeGamePanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "betPlus", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "betMinus", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "betSetPanelBtn", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "betSetPanel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnSpeedUp", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "btnSpeedUpStop", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "btnAuto", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "btnAutoStop", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "autoSetNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "autoSetPanel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "currentAutoNumberNode", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "popUpPanel", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "symbolInfo", [_dec18], {
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
//# sourceMappingURL=1f7d8e732ddbb461277f3228ec276bdddd033a02.js.map
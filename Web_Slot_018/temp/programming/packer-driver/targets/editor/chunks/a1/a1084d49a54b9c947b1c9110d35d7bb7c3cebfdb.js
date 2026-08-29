System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BtnController, BuyFGGuiController, NotifyCation, NotifySubject, GameViewEvents, AutoOrientAndSetPos, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, BuyFgController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBtnController(extras) {
    _reporterNs.report("BtnController", "./Components/BtnController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyFGGuiController(extras) {
    _reporterNs.report("BuyFGGuiController", "./Components/BuyFGGuiController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifyCation(extras) {
    _reporterNs.report("NotifyCation", "../../MyUtils/EventSystem/NotifyCation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifySubject(extras) {
    _reporterNs.report("NotifySubject", "../../DefinitionGameData/EventTypesDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewEvents(extras) {
    _reporterNs.report("GameViewEvents", "../../DefinitionGameData/EventTypesDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../../../../Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoOrientAndSetPos(extras) {
    _reporterNs.report("AutoOrientAndSetPos", "../ShowContainer/Components/AutoOrientAndSetPos", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BtnController = _unresolved_2.BtnController;
    }, function (_unresolved_3) {
      BuyFGGuiController = _unresolved_3.BuyFGGuiController;
    }, function (_unresolved_4) {
      NotifyCation = _unresolved_4.NotifyCation;
    }, function (_unresolved_5) {
      NotifySubject = _unresolved_5.NotifySubject;
    }, function (_unresolved_6) {
      GameViewEvents = _unresolved_6.GameViewEvents;
    }, function (_unresolved_7) {
      AutoOrientAndSetPos = _unresolved_7.AutoOrientAndSetPos;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d93dbpXsMtDeLZp1tdkVV8S", "BuyFgController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'CCString']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BuyFgController", BuyFgController = (_dec = ccclass('BuyFgController'), _dec2 = property({
        type: _crd && BtnController === void 0 ? (_reportPossibleCrUseOfBtnController({
          error: Error()
        }), BtnController) : BtnController,
        visible: true,
        displayName: 'BuyFgBtnNode',
        tooltip: 'BuyFgNode'
      }), _dec3 = property({
        type: _crd && BuyFGGuiController === void 0 ? (_reportPossibleCrUseOfBuyFGGuiController({
          error: Error()
        }), BuyFGGuiController) : BuyFGGuiController,
        visible: true,
        displayName: 'BuyFgNode',
        tooltip: 'BuyFgNode'
      }), _dec(_class = (_class2 = class BuyFgController extends (_crd && AutoOrientAndSetPos === void 0 ? (_reportPossibleCrUseOfAutoOrientAndSetPos({
        error: Error()
      }), AutoOrientAndSetPos) : AutoOrientAndSetPos) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_btnController", _descriptor, this);

          _initializerDefineProperty(this, "_buyFGGuiController", _descriptor2, this);

          this._isBuyFG = false;

          //--關閉buyFG的頁面按鈕的遮蔽或是開啟的處理
          this.fgCloseCallback = () => {
            this.enableBuyFgBtn(); //--先開啟

            if (this._isBuyFG) {
              this.disableBuyFgBtn();
            }
          };

          //---_buyFGGuiController會再接著執行fgCloseCallback
          this.fgGuiConFirmCallback = (betValue, totalMultiplierValue) => {
            //--打事件強call
            const evtData = {
              eventType: (_crd && GameViewEvents === void 0 ? (_reportPossibleCrUseOfGameViewEvents({
                error: Error()
              }), GameViewEvents) : GameViewEvents).BUY_FG,
              eventData: {
                betValue: betValue,
                totalBetValue: totalMultiplierValue
              }
            };
            this._isBuyFG = true;
            (_crd && NotifyCation === void 0 ? (_reportPossibleCrUseOfNotifyCation({
              error: Error()
            }), NotifyCation) : NotifyCation).getInstance().emitSync((_crd && NotifySubject === void 0 ? (_reportPossibleCrUseOfNotifySubject({
              error: Error()
            }), NotifySubject) : NotifySubject).GAME_VIEW_SUBJECT, evtData.eventType, evtData);
          };

          //--buyBtn的callback(按下去的時候本身就會disable)
          this.btnClickCallback = () => {
            //--要去拿bet的資料
            const evtData = {
              eventType: (_crd && GameViewEvents === void 0 ? (_reportPossibleCrUseOfGameViewEvents({
                error: Error()
              }), GameViewEvents) : GameViewEvents).GET_CURRENT_BET
            };
            (_crd && NotifyCation === void 0 ? (_reportPossibleCrUseOfNotifyCation({
              error: Error()
            }), NotifyCation) : NotifyCation).getInstance().emitSync((_crd && NotifySubject === void 0 ? (_reportPossibleCrUseOfNotifySubject({
              error: Error()
            }), NotifySubject) : NotifySubject).GAME_VIEW_SUBJECT, evtData.eventType); //this._buyFGGuiController.open();
          };
        }

        set isBuyFG(value) {
          this._isBuyFG = value;
        }

        init(betValueList) {
          this._btnController.clickCallback = this.btnClickCallback;
          this._buyFGGuiController.confirmCallback = this.fgGuiConFirmCallback;
          this._buyFGGuiController.closeCallback = this.fgCloseCallback;

          this._buyFGGuiController.init(betValueList); //this._btnController.init();


          this._btnController.openContainer(); //this.openContainer();

        }

        otherProcessForOrientation(orientation) {
          this._btnController.changeRotationResolution(orientation);
        }

        moveTargetTo(target, container) {
          if (!target || !container) return;
          target.removeFromParent(); // 強制脫離當前 parent

          container.addChild(target);
          target.setPosition(0, 0, 0);
        }

        changeToLandscape() {
          const target = this.landscape[0].children[0] || this.portrait[0].children[0];

          if (target) {
            this.landscape[0].active = true;
            this.portrait[0].active = false;
            this.moveTargetTo(target, this.landscape[0]);
          }
        }

        changeToPortrait() {
          const target = this.landscape[0].children[0] || this.portrait[0].children[0];

          if (target) {
            this.portrait[0].active = true;
            this.landscape[0].active = false;
            this.moveTargetTo(target, this.portrait[0]);
          }
        }

        setPlayerBetValue(value) {
          this._buyFGGuiController.baseBet = value;

          this._btnController.setPlayerBetValue(value);
        }

        closeForFG() {
          this.node.active = false;
        }

        openForFGFinish() {
          this.node.active = true;
        }

        disableBuyFgBtn() {
          this._btnController.disableBuyFgBtn();
        }

        enableBuyFgBtn() {
          this._btnController.enableBuyFgBtn();
        }

        reOpenBuyFgBtn() {
          this._isBuyFG = false;
          this.enableBuyFgBtn();
        }

        setCurrentBetAndOpenBuyFG(betValue) {
          this.setPlayerBetValue(betValue);

          this._buyFGGuiController.open();
        } //--空白按鍵判斷使用(當面板開啟時,空白按鍵不能啟動spin)


        getBuyFgPanelIsOpen() {
          return this._buyFGGuiController.buyFGPanelIsOpen;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_btnController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_buyFGGuiController", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a1084d49a54b9c947b1c9110d35d7bb7c3cebfdb.js.map
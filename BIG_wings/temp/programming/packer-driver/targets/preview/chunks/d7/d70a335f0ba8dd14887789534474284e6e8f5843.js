System.register(["__unresolved_0", "cc", "@casino-mono/mvc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AbstractExchangePanel, Button, CCFloat, CCInteger, CCObject, CCString, Component, Label, _decorator, Node, Input, Toggle, CCBoolean, customButton, ExchangePanel, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _crd, ccclass, menu, property, GROUP_FORM, AUTO_EXCHANGE_GROUP, QUICK_EXCHANGE_GROUP, SUBMIT_GROUP, CocosExchangePanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAbstractExchangePanel(extras) {
    _reporterNs.report("AbstractExchangePanel", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExchangeInfo(extras) {
    _reporterNs.report("ExchangeInfo", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExchangePanelEventMap(extras) {
    _reporterNs.report("ExchangePanelEventMap", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEmitter(extras) {
    _reporterNs.report("Emitter", "strict-event-emitter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcustomButton(extras) {
    _reporterNs.report("customButton", "../../../../common/script/ui/customButton", _context.meta, extras);
  }

  _export("ExchangePanel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      CCFloat = _cc.CCFloat;
      CCInteger = _cc.CCInteger;
      CCObject = _cc.CCObject;
      CCString = _cc.CCString;
      Component = _cc.Component;
      Label = _cc.Label;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Input = _cc.Input;
      Toggle = _cc.Toggle;
      CCBoolean = _cc.CCBoolean;
    }, function (_casinoMonoMvc) {
      AbstractExchangePanel = _casinoMonoMvc.AbstractExchangePanel;
    }, function (_unresolved_2) {
      customButton = _unresolved_2.customButton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c6e83e2s6ZGgYF5S3xyKClv", "ExchangePanel", undefined);

      __checkObsolete__(['Button', 'CCFloat', 'CCInteger', 'CCObject', 'CCString', 'Component', 'Label', '_decorator', 'Node', 'warn', 'Input', 'Toggle', 'CCBoolean']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);
      GROUP_FORM = {
        name: 'Form',
        style: 'section'
      };
      AUTO_EXCHANGE_GROUP = {
        name: 'AutoExchange',
        style: 'section',
        id: '3'
      };
      QUICK_EXCHANGE_GROUP = {
        name: 'QuickExchangeToolbar',
        style: 'section',
        id: '2'
      };
      SUBMIT_GROUP = {
        name: 'Submit Button',
        style: 'section',
        id: '4'
      };

      // 無法繼承IfExchangePanel update 事件衝突
      _export("CocosExchangePanel", CocosExchangePanel = (_dec = ccclass('ExchangePanel'), _dec2 = menu("BigWings/ExchangePanel"), _dec3 = property({
        type: CCObject,
        visible: false,
        tooltip: '介面暫存資訊'
      }), _dec4 = property({
        type: CCObject,
        visible: false,
        tooltip: '介面暫存資訊'
      }), _dec5 = property({
        type: CCString,
        displayName: "UserName"
      }), _dec6 = property({
        type: CCString,
        displayName: "BetBase",
        tooltip: '換分比例'
      }), _dec7 = property({
        type: CCString
      }), _dec8 = property({
        type: CCFloat,
        group: {
          name: 'washInfo',
          style: 'section'
        }
      }), _dec9 = property({
        type: CCFloat,
        group: {
          name: 'washInfo',
          style: 'section'
        }
      }), _dec10 = property({
        type: Label,
        group: GROUP_FORM
      }), _dec11 = property({
        type: CCString,
        group: GROUP_FORM,
        visible: function visible() {
          return !!this.title;
        }
      }), _dec12 = property({
        type: Label,
        group: GROUP_FORM
      }), _dec13 = property({
        type: CCFloat,
        tooltip: '可用餘額',
        displayName: 'Balance Text',
        group: {
          name: 'Form',
          style: 'section'
        },
        visible: function visible() {
          return !!this.balanceLabel;
        }
      }), _dec14 = property({
        type: Label,
        group: GROUP_FORM
      }), _dec15 = property({
        type: CCFloat,
        tooltip: '目前分數',
        displayName: 'Credit Text',
        group: GROUP_FORM,
        visible: function visible() {
          return !!this.creditLabel;
        }
      }), _dec16 = property({
        type: Label,
        group: {
          name: 'Excahnge',
          style: 'section',
          id: '3'
        }
      }), _dec17 = property({
        type: CCInteger,
        tooltip: '兌換分數',
        displayName: 'Exchange.Text',
        group: {
          name: 'Excahnge',
          style: 'section',
          id: '3'
        },
        visible: function visible() {
          return !!this.exchangeLabel;
        }
      }), _dec18 = property({
        type: Button,
        tooltip: '重製按鈕',
        group: {
          name: 'Excahnge',
          style: 'section',
          id: '3'
        }
      }), _dec19 = property({
        type: Label,
        displayName: 'Invalid',
        tooltip: "換分提示",
        group: {
          name: 'Excahnge',
          style: 'section',
          id: '3'
        }
      }), _dec20 = property({
        type: Node,
        displayName: "Button Group",
        tooltip: '快速換分按鈕列',
        group: QUICK_EXCHANGE_GROUP
      }), _dec21 = property({
        type: CCString,
        displayName: "Value List",
        group: QUICK_EXCHANGE_GROUP
      }), _dec22 = property({
        type: Toggle,
        tooltip: '自動換分切換按鈕',
        group: AUTO_EXCHANGE_GROUP
      }), _dec23 = property({
        type: CCBoolean,
        tooltip: '是否開啟自動換分',
        group: AUTO_EXCHANGE_GROUP
      }), _dec24 = property({
        type: Node,
        tooltip: '提示按鈕',
        group: AUTO_EXCHANGE_GROUP
      }), _dec25 = property({
        type: Label,
        tooltip: '自動換分',
        group: AUTO_EXCHANGE_GROUP
      }), _dec26 = property({
        type: Label,
        tooltip: '自動換分',
        group: AUTO_EXCHANGE_GROUP
      }), _dec27 = property({
        type: CCString,
        tooltip: '自動換分標題文字',
        group: AUTO_EXCHANGE_GROUP,
        visible: function visible() {
          return !!this.autoExchangeLabelOff || !!this.autoExchangeLabelOn;
        }
      }), _dec28 = property({
        type: Label,
        tooltip: '自動換分提示框:物件',
        group: AUTO_EXCHANGE_GROUP
      }), _dec29 = property({
        type: CCString,
        tooltip: '自動換分提示框:說明文字',
        group: AUTO_EXCHANGE_GROUP,
        visible: function visible() {
          return !!this.autoExchangeTooltip;
        }
      }), _dec30 = property({
        type: _crd && customButton === void 0 ? (_reportPossibleCrUseOfcustomButton({
          error: Error()
        }), customButton) : customButton,
        tooltip: '送出按鈕',
        group: SUBMIT_GROUP
      }), _dec31 = property({
        type: Label,
        tooltip: '送出按鈕文字',
        group: SUBMIT_GROUP
      }), _dec32 = property({
        type: CCString,
        group: SUBMIT_GROUP,
        visible: function visible() {
          return !!this.submitButtonLabel;
        }
      }), _dec(_class = _dec2(_class = (_class2 = class CocosExchangePanel extends Component {
        get userName() {
          return this.exchangePanel.userName;
        }

        set userName(value) {
          var {
            dataElements,
            exchangePanel
          } = this;
          dataElements.userName = exchangePanel.userName = value;
        }

        get betBase() {
          return this.exchangePanel.betBase;
        }

        set betBase(value) {
          var {
            exchangeInfo,
            exchangePanel
          } = this;
          exchangeInfo.betBase = exchangePanel.betBase = value;
        }

        get base() {
          return this.exchangeInfo.base;
        }

        set base(value) {
          var {
            exchangeInfo,
            exchangePanel
          } = this;
          exchangeInfo.base = value;
          exchangePanel.update(this.exchangeInfo);
          console.log("exchangeInfo.base = " + exchangePanel.base);
        }

        get transCredit() {
          var _this$exchangeInfo$wa;

          return ((_this$exchangeInfo$wa = this.exchangeInfo.washInfo) == null ? void 0 : _this$exchangeInfo$wa.transCredit) || 0;
        }

        set transCredit(value) {
          var {
            exchangeInfo
          } = this;

          if (!exchangeInfo.washInfo) {
            exchangeInfo.washInfo = {
              transCredit: 0,
              amount: 0
            };
          }

          exchangeInfo.washInfo.transCredit = value;
          var {
            transCredit,
            amount
          } = exchangeInfo.washInfo;

          if (transCredit === 0 && amount === 0) {
            delete exchangeInfo.washInfo;
          }
        }

        get amount() {
          var _this$exchangeInfo$wa2;

          return ((_this$exchangeInfo$wa2 = this.exchangeInfo.washInfo) == null ? void 0 : _this$exchangeInfo$wa2.amount) || 0;
        }

        set amount(value) {
          var {
            exchangeInfo
          } = this;

          if (!exchangeInfo.washInfo) {
            exchangeInfo.washInfo = {
              transCredit: 0,
              amount: 0
            };
          }

          exchangeInfo.washInfo.amount = value;
          var {
            transCredit,
            amount
          } = exchangeInfo.washInfo;

          if (transCredit === 0 && amount === 0) {
            delete exchangeInfo.washInfo;
          }
        } // 標題


        get titleText() {
          return this.title ? this.title.string : '';
        }

        set titleText(value) {
          if (this.title) this.title.string = value;
        } // 餘額


        get balance() {
          return this.exchangeInfo.balance;
        }

        set balance(value) {
          var {
            exchangeInfo,
            exchangePanel
          } = this;
          exchangePanel.balance = value;
          this.balanceLabel.string = String(value);
        } // 分數


        get credit() {
          return this.exchangePanel.credit;
        }

        set credit(value) {
          var {
            exchangeInfo,
            exchangePanel
          } = this;
          exchangePanel.credit = value;
          this.creditLabel.string = String(value);
        } // 兌換分數


        get exchange() {
          return this.exchangePanel.exchange;
        }

        set exchange(value) {
          var {
            dataElements,
            exchangePanel,
            resetButton,
            exchangeInvalidFeedback
          } = this;
          exchangePanel.exchange = value;
          this.exchangeLabel.string = String(value);
          var isValid = exchangePanel.exchange > 0;

          if (resetButton != null) {
            resetButton.node.active = isValid;
          }

          if (exchangeInvalidFeedback && isValid) {
            exchangeInvalidFeedback.node.parent.active = false;
          }
        }

        get isAutoExchange() {
          return this.dataElements.isAuto;
        }

        set isAutoExchange(value) {
          if (this.autoExchangeToggle && value != this.dataElements.isAuto) {
            this.autoExchangeToggle.isChecked = value;
          }

          this.dataElements.isAuto = value;
        }

        get autoExchangeLabelText() {
          if (this.autoExchangeLabelOff) {
            return this.autoExchangeLabelOff.string;
          } else if (this.autoExchangeLabelOn) {
            return this.autoExchangeLabelOn.string;
          } else {
            return '';
          }
        }

        set autoExchangeLabelText(value) {
          var {
            autoExchangeLabelOff,
            autoExchangeLabelOn
          } = this;

          if (autoExchangeLabelOff) {
            autoExchangeLabelOff.string = value;
          }

          if (autoExchangeLabelOn) {
            autoExchangeLabelOn.string = value;
          }
        }

        get submitButtonText() {
          if (this.submitButtonLabel) {
            return this.submitButtonLabel.string;
          }
        }

        set submitButtonText(value) {
          if (this.submitButtonLabel) {
            this.submitButtonLabel.string = value;
          }
        }

        get isShow() {
          return this.exchangePanel.isShow;
        }

        get exBalance() {
          return this.exchangePanel.exBalance;
        }

        get nowMaxChange() {
          return this.exchangePanel.nowMaxChange;
        }

        get event() {
          return this.exchangePanel.event;
        }

        constructor() {
          super();
          this.exchangePanel = new ExchangePanel();

          _initializerDefineProperty(this, "exchangeInfo", _descriptor, this);

          _initializerDefineProperty(this, "dataElements", _descriptor2, this);

          _initializerDefineProperty(this, "title", _descriptor3, this);

          _initializerDefineProperty(this, "balanceLabel", _descriptor4, this);

          _initializerDefineProperty(this, "creditLabel", _descriptor5, this);

          _initializerDefineProperty(this, "exchangeLabel", _descriptor6, this);

          _initializerDefineProperty(this, "resetButton", _descriptor7, this);

          _initializerDefineProperty(this, "exchangeInvalidFeedback", _descriptor8, this);

          _initializerDefineProperty(this, "quickExBar", _descriptor9, this);

          _initializerDefineProperty(this, "quickExBarValues", _descriptor10, this);

          this.quickExBarLabels = [];

          _initializerDefineProperty(this, "autoExchangeToggle", _descriptor11, this);

          _initializerDefineProperty(this, "autoTipButton", _descriptor12, this);

          _initializerDefineProperty(this, "autoExchangeLabelOn", _descriptor13, this);

          _initializerDefineProperty(this, "autoExchangeLabelOff", _descriptor14, this);

          _initializerDefineProperty(this, "autoExchangeTooltip", _descriptor15, this);

          _initializerDefineProperty(this, "autoExchangeTooltipText", _descriptor16, this);

          _initializerDefineProperty(this, "submitButton", _descriptor17, this);

          _initializerDefineProperty(this, "submitButtonLabel", _descriptor18, this);

          this.backdrop = null;
          this.exchangePanel.event.on('display', () => this.updateDisplay());
        }

        create() {
          var {
            quickExBar,
            exchangeInvalidFeedback,
            backdrop,
            submitButton,
            submitButtonLabel
          } = this;

          if (!backdrop) {
            this.backdrop = this.node.getChildByName('black');
          }

          if (submitButton && !submitButtonLabel) {
            this.submitButtonLabel = submitButton.node.getChildByName('label').getComponent(Label);
          }
        }

        onLoad() {
          var _this$resetButton;

          this.create(); //this.title = this.node.getChildByName('title').getComponent(Label);

          (_this$resetButton = this.resetButton) == null ? void 0 : _this$resetButton.node.on(Button.EventType.CLICK, () => this.exchange = 0);
          console.log("this.quickExBarValues: " + this.quickExBarValues);
          var {
            quickExBar,
            submitButton,
            exchangeInvalidFeedback,
            backdrop,
            autoExchangeTooltip,
            autoExchangeToggle,
            autoTipButton
          } = this;

          if (quickExBar) {
            quickExBar.forEach((button, index) => {
              var label = button.getChildByName('label').getComponent(Label);
              this.quickExBarLabels.push(label);
              label.string = this.quickExBarValues[index];
              button.on(Button.EventType.CLICK, () => {
                var {
                  exchangePanel
                } = this;
                console.log("\n                    balance: " + exchangePanel.balance + "\n                    " + exchangePanel.exchange + " + " + +this.quickExBarValues[index] + " = " + (exchangePanel.exchange + +this.quickExBarValues[index]));
                this.addExchange(+this.quickExBarValues[index]);
                this.exchange = exchangePanel.exchange;
              });
            });
          }

          if (submitButton) {
            submitButton.node.on(Button.EventType.CLICK, () => {
              if (this.exchange === 0) exchangeInvalidFeedback.node.parent.active = true;
              var {
                betBase,
                exchange
              } = this.exchangePanel;
              console.warn("Submited: { betBase: " + betBase + ", amount: " + exchange + " }");
              this.creditExchange(betBase, exchange);
            });
          }

          if (exchangeInvalidFeedback) {
            exchangeInvalidFeedback.node.parent.active = false;
          }

          if (backdrop) {
            backdrop.on(Input.EventType.TOUCH_END, () => {
              if (autoExchangeTooltip) autoExchangeTooltip.node.parent.active = false;
            });
          }

          console.log("toggling", autoExchangeToggle);

          if (autoExchangeToggle) {
            autoExchangeToggle.node.on(Toggle.EventType.CLICK, () => {
              console.log("toggling");
            });
          }

          if (autoTipButton) {
            autoTipButton.on(Button.EventType.CLICK, () => {
              if (autoExchangeTooltip) autoExchangeTooltip.node.parent.active = true;
            });
          }

          this.node.on(Node.EventType.ACTIVE_IN_HIERARCHY_CHANGED, () => {
            console.log("ACTIVE_IN_HIERARCHY_CHANGED", this.node.active);
            this.node.active ? this.show() : this.close();
          });
        }

        setup() {}

        clear() {}

        start() {
          var {
            exchangeInfo,
            exchangePanel
          } = this;
          exchangePanel.update(exchangeInfo); // 這邊是將介面設定暫存值寫到物件

          this.updateDisplay();
        }
        /** 換分？ */


        getChangeCredit(credit, fromBase, toBase) {
          this.exchangePanel.getChangeCredit(credit, fromBase, toBase);
        }
        /** 更新資訊 */


        dataUpdate(info) {
          this.exchangePanel.update(info);
        }

        updateDisplay() {
          // TODO: should draw be need display
          var {
            exchangePanel,
            exchangeInfo,
            dataElements
          } = this;
          console.log("after.updateDisplay\n  balance: " + exchangePanel.balance + " > " + exchangeInfo.balance + "\n  credit: " + exchangePanel.credit + " > " + exchangeInfo.credit + "\n  exchange: " + exchangePanel.exchange + " > " + dataElements.exchange);
          dataElements.exchange = exchangePanel.exchange;
          exchangeInfo.balance = exchangePanel.balance;
          exchangeInfo.credit = exchangePanel.credit;
        }

        addExchange(value) {
          this.exchangePanel.addExchange(value);
        }
        /**
         * 最大值換分
         */


        maxChange() {
          this.exchangePanel.maxChange();
        }

        show() {
          this.exchangePanel.show(); // this.node.active = true;

          this.setup();
        }

        close() {
          this.exchangePanel.close(); // this.node.active = false;

          this.clear();
        }
        /** 按鈕事件 */


        creditExchange(ratio, amount) {
          this.exchangePanel.creditExchange(ratio, amount);
        }
        /** 按鈕事件 */


        balanceExchange() {
          this.exchangePanel.balanceExchange();
        }
        /** 按鈕事件 */


        changeRatio(ratio) {
          this.exchangePanel.changeRatio(ratio);
        }
        /** 按鈕事件 */


        leaveGame() {
          this.exchangePanel.leaveGame();
        }

        registerEventListener() {}
        /** 更新快速換分按鈕 */


        updateQuickExchangeBar(values) {
          var {
            quickExBar
          } = this;

          if (quickExBar) {
            quickExBar.forEach((button, index) => {
              this.quickExBarValues[index] = values[index] || "0";
              this.quickExBarLabels[index].string = this.quickExBarValues[index];
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "exchangeInfo", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return {
            balance: 3000.12,
            base: '1:1,1:10',
            betBase: '1:1'
          };
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dataElements", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return {
            userName: '',
            exchange: 0,
            isAuto: false
          };
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "userName", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "userName"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "betBase", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "betBase"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "base", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "base"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "transCredit", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "transCredit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "amount", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "amount"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "titleText", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "titleText"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "balanceLabel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "balance", [_dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "balance"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "creditLabel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "credit", [_dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "credit"), _class2.prototype), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "exchangeLabel", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "exchange", [_dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "exchange"), _class2.prototype), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "resetButton", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "exchangeInvalidFeedback", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "quickExBar", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "quickExBarValues", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ['50', '500', '5000'];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "autoExchangeToggle", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "isAutoExchange", [_dec23], Object.getOwnPropertyDescriptor(_class2.prototype, "isAutoExchange"), _class2.prototype), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "autoTipButton", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "autoExchangeLabelOn", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "autoExchangeLabelOff", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "autoExchangeLabelText", [_dec27], Object.getOwnPropertyDescriptor(_class2.prototype, "autoExchangeLabelText"), _class2.prototype), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "autoExchangeTooltip", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "autoExchangeTooltipText", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '進入遊戲或餘額不足時，將自動兌換(預設分數)。';
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "submitButton", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "submitButtonLabel", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "submitButtonText", [_dec32], Object.getOwnPropertyDescriptor(_class2.prototype, "submitButtonText"), _class2.prototype)), _class2)) || _class) || _class));

      _export("ExchangePanel", ExchangePanel = class ExchangePanel extends (_crd && AbstractExchangePanel === void 0 ? (_reportPossibleCrUseOfAbstractExchangePanel({
        error: Error()
      }), AbstractExchangePanel) : AbstractExchangePanel) {
        constructor() {
          super(...arguments);
          this._betBase = "1:1";
          this._userName = "****";
        }

        set userName(value) {
          this._userName = value;
        }

        get userName() {
          return this._userName;
        }

        updateDisplay() {
          this.event.emit('display');
        }

        creditExchange(ratio, amount) {
          super.creditExchange(ratio, amount);
        }

        balanceExchange() {
          super.balanceExchange();
        }

        changeRatio(ratio) {
          super.changeRatio(ratio);
        }

        leaveGame() {
          super.leaveGame();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d70a335f0ba8dd14887789534474284e6e8f5843.js.map
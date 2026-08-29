System.register(["__unresolved_0", "cc", "decimal.js", "strict-event-emitter"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Decimal, Emitter, ExchangePanelEventDispatcher, AbstractExchangePanel, _crd, ExchangePanelEventName;

  function _reportPossibleCrUseOfDecimal(extras) {
    _reporterNs.report("Decimal", "decimal.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEmitter(extras) {
    _reporterNs.report("Emitter", "strict-event-emitter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMap(extras) {
    _reporterNs.report("EventMap", "strict-event-emitter", _context.meta, extras);
  }

  _export({
    ExchangePanelEventDispatcher: void 0,
    AbstractExchangePanel: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_decimalJs) {
      Decimal = _decimalJs.default;
    }, function (_strictEventEmitter) {
      Emitter = _strictEventEmitter.Emitter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c8227I4LqJKVqlCcXOTBb/m", "Exchange", undefined);

      _export("ExchangePanelEventName", ExchangePanelEventName = /*#__PURE__*/function (ExchangePanelEventName) {
        ExchangePanelEventName["CREDIT_EXCHANGE"] = "creditExchange";
        ExchangePanelEventName["BALANCE_EXCHANGE"] = "balanceExchange";
        ExchangePanelEventName["CHANGE_RATIO"] = "changeRatio";
        ExchangePanelEventName["LEAVE_GAME"] = "leaveGame";
        ExchangePanelEventName["AUTO_EXCHANGE"] = "autoExchange";
        ExchangePanelEventName["SAVE_RECORD"] = "saveRecord";
        ExchangePanelEventName["FULL_EXCHANGE"] = "fullExchange";
        return ExchangePanelEventName;
      }({}));

      ;

      _export("ExchangePanelEventDispatcher", ExchangePanelEventDispatcher = class ExchangePanelEventDispatcher extends (_crd && Emitter === void 0 ? (_reportPossibleCrUseOfEmitter({
        error: Error()
      }), Emitter) : Emitter) {});

      /**
       * 開洗分面板抽象類別  
       * 定義相關事件, 屬性 ,基本方法  
       * 後續開洗分面板需繼承此類別繼續實作顯示相關邏輯  
       */
      _export("AbstractExchangePanel", AbstractExchangePanel = class AbstractExchangePanel {
        get event() {
          return this._event;
        }

        get isShow() {
          return this._isShow;
        }

        get balance() {
          return this._balance;
        }

        get credit() {
          return this._credit;
        }

        get exchange() {
          return this._exchange;
        }

        set balance(value) {
          if (isNaN(value)) return;
          if (typeof value != 'number') return;
          this._balance = value;
          this.updateDisplay();
        }

        set credit(value) {
          if (isNaN(value)) return;
          if (typeof value != 'number') return;
          this._credit = value;
          this.updateDisplay();
        }

        set exchange(value) {
          if (isNaN(value)) return;
          if (typeof value != 'number') return;
          if (this.nowMaxChange < value) return;
          if (value == this._exchange) return;
          if (value < 0) return;
          this._exchange = value;
          this.updateDisplay();
        }

        set userName(value) {
          this._userName = value;
          this.updateDisplay();
        }

        set betBase(value) {
          this._betBase = value;
          this.updateDisplay();
        }

        get betBase() {
          return this._betBase;
        }

        get base() {
          return this._base;
        }

        get washInfo() {
          return this._washInfo;
        }

        get ratio() {
          var ary = this.betBase.split(':').map(v => new (_crd && Decimal === void 0 ? (_reportPossibleCrUseOfDecimal({
            error: Error()
          }), Decimal) : Decimal)(v.replace("K", "000")));
          return ary[0].div(ary[1]);
        }

        get exBalance() {
          var ary = this._betBase.split(':').map(v => new (_crd && Decimal === void 0 ? (_reportPossibleCrUseOfDecimal({
            error: Error()
          }), Decimal) : Decimal)(v.replace("K", "000")));

          return new (_crd && Decimal === void 0 ? (_reportPossibleCrUseOfDecimal({
            error: Error()
          }), Decimal) : Decimal)(this._balance).minus(new (_crd && Decimal === void 0 ? (_reportPossibleCrUseOfDecimal({
            error: Error()
          }), Decimal) : Decimal)(this._exchange).times(ary[0]).div(ary[1])).toNumber();
        }

        get nowMaxChange() {
          var canChange = new (_crd && Decimal === void 0 ? (_reportPossibleCrUseOfDecimal({
            error: Error()
          }), Decimal) : Decimal)(this._balance).div(this.ratio);
          var maxChange = new (_crd && Decimal === void 0 ? (_reportPossibleCrUseOfDecimal({
            error: Error()
          }), Decimal) : Decimal)(this._theMachChange).minus(this._credit);
          console.log("the max change is " + this._theMachChange);
          console.log('canChange: ', canChange.toNumber());
          console.log('maxChange: ', maxChange.toNumber());
          if (canChange.greaterThan(maxChange)) return maxChange.toNumber();
          return canChange.toNumber();
        }

        constructor() {
          this._event = new (_crd && Emitter === void 0 ? (_reportPossibleCrUseOfEmitter({
            error: Error()
          }), Emitter) : Emitter)();
          this._isShow = false;
          this._balance = 0;
          this._credit = 0;
          this._exchange = 0;
          this._betBase = '';
          this._base = '';
          this._washInfo = void 0;
          this._theMachChange = 50000000;
          this._userName = "";
          this.close();
        }

        getChangeCredit(credit, fromBase, toBase) {
          var ary = fromBase.split(':').map(v => new (_crd && Decimal === void 0 ? (_reportPossibleCrUseOfDecimal({
            error: Error()
          }), Decimal) : Decimal)(v.replace("K", "000")));
          var fromCredit = new (_crd && Decimal === void 0 ? (_reportPossibleCrUseOfDecimal({
            error: Error()
          }), Decimal) : Decimal)(credit).times(ary[0]).div(ary[1]);
          var toAry = toBase.split(':').map(v => new (_crd && Decimal === void 0 ? (_reportPossibleCrUseOfDecimal({
            error: Error()
          }), Decimal) : Decimal)(v.replace("K", "000")));
          var toCredit = fromCredit.times(toAry[1]).div(toAry[0]);
          return toCredit.toNumber();
        }

        update(info) {
          if (info) {
            if (info.credit != null) this._credit = info.credit;
            if (info.balance != null) this._balance = info.balance;
            if (info.betBase != null) this._betBase = info.betBase;
            if (info.base != null) this._base = info.base;
            if (info.washInfo != null) this._washInfo = info.washInfo;
          }

          this.updateDisplay();
        }

        show() {
          this._isShow = true;
        }

        close() {
          this._isShow = false;
        }

        addExchange(value) {
          if (typeof value != 'number') return;
          this._exchange = Math.min(new (_crd && Decimal === void 0 ? (_reportPossibleCrUseOfDecimal({
            error: Error()
          }), Decimal) : Decimal)(this._exchange).plus(value).toNumber(), this.nowMaxChange);
          this.updateDisplay();
        }

        maxChange() {
          this._exchange = this.nowMaxChange;
          this.updateDisplay();
        }

        updateDisplay() {}

        creditExchange(ratio, amount) {
          this.event.emit(ExchangePanelEventName.CREDIT_EXCHANGE, {
            betBase: ratio,
            amount
          });
        }

        balanceExchange() {
          this.event.emit(ExchangePanelEventName.BALANCE_EXCHANGE);
        }

        changeRatio(ratio) {
          this.event.emit(ExchangePanelEventName.CHANGE_RATIO, {
            ratio
          });
        }

        leaveGame() {
          this.event.emit(ExchangePanelEventName.LEAVE_GAME);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cf001601682ad67da0583d1733232b0f9da0cf09.js.map
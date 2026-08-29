System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, Enum, game, macro, UniReelView, StopType, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, UniSlotMachine;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUniReelView(extras) {
    _reporterNs.report("UniReelView", "./UniReelView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStopType(extras) {
    _reporterNs.report("StopType", "./UniReel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReel(extras) {
    _reporterNs.report("IReel", "./Interface/IReel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
      Enum = _cc.Enum;
      game = _cc.game;
      macro = _cc.macro;
    }, function (_unresolved_2) {
      UniReelView = _unresolved_2.UniReelView;
    }, function (_unresolved_3) {
      StopType = _unresolved_3.StopType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d4830lWeFB7JKrP0ZjY+6d", "UniSlotMachine", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'Enum', 'game', 'macro']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UniSlotMachine", UniSlotMachine = (_dec = ccclass('UniSlotMachine'), _dec2 = property({
        type: _crd && UniReelView === void 0 ? (_reportPossibleCrUseOfUniReelView({
          error: Error()
        }), UniReelView) : UniReelView,
        visible: true
      }), _dec3 = property({
        type: Enum(_crd && StopType === void 0 ? (_reportPossibleCrUseOfStopType({
          error: Error()
        }), StopType) : StopType)
      }), _dec4 = property({
        type: CCFloat,
        visible: true,
        tooltip: '正常模式滾動時間，單位:秒',
        min: 0
      }), _dec5 = property({
        type: CCFloat,
        visible: true,
        tooltip: '快速模式滾動時間，單位:秒',
        min: 0
      }), _dec(_class = (_class2 = class UniSlotMachine extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_reelView", _descriptor, this);

          _initializerDefineProperty(this, "stopType", _descriptor2, this);

          _initializerDefineProperty(this, "_normalRollTime", _descriptor3, this);

          _initializerDefineProperty(this, "_fastRollTime", _descriptor4, this);

          this._iconResultData = [];
          //紀錄最終顯示的資料
          this._startRoll = false;
          //判斷是否開始滾動，有可能滾動前會做彈跳
          this._canStop = false;
          //滾動時間滿足以及收到伺服器資料才能停止
          this._isTurboMode = false;
          //判斷是否為快速模式
          this._isStopClick = false;
          this._startTime = 0;
        }

        //判斷是否點擊了stop按鈕
        get reelAmount() {
          return this._reelView.reelAmount;
        }

        //滾動時間紀錄
        init() {
          this._reelView.init();

          this._reelView.isFastModeCallback = this.isFastMode.bind(this);
        }

        async startRoll(isTurboMode, reelIDs) {
          this.reset();
          this._isTurboMode = isTurboMode;
          await this._reelView.startRoll(reelIDs); //等待所有滾輪開始滾動再開始計時

          this._startRoll = true;
          this._startTime = game.totalTime;
        }

        async stopRoll(resultData) {
          this._iconResultData = resultData;
          await this.canStopRoll();
          await this._reelView.stopRoll(this._iconResultData, this.stopType);
        }

        setReadyHand(currentReadyHandReelID) {
          this._reelView.setReadyHand(currentReadyHandReelID);
        }

        getIconAmount(reelID) {
          return this._reelView.getIconAmount(reelID);
        }

        stopRollCallBack() {
          this._isStopClick = true;

          if (this._canStop) {
            this._reelView.fastStopRoll();
          }
        }

        async canStopRoll() {
          return new Promise(resolve => {
            let callback = () => {
              let standardTime = this.isFastMode() ? this._fastRollTime : this._normalRollTime;
              standardTime *= 1000; //轉成毫秒

              let fillTime = game.totalTime - this._startTime >= standardTime;
              let receiveData = this._iconResultData.length > 0;

              if (fillTime && receiveData && this._startRoll) {
                this.unschedule(callback);
                this._canStop = true;
                resolve();
              }
            };

            this.schedule(callback, 0, macro.REPEAT_FOREVER);
          });
        }

        isFastMode() {
          return this._isStopClick || this._isTurboMode;
        }

        reset() {
          this._iconResultData.length = 0;
          this._startRoll = false;
          this._canStop = false;
          this._isStopClick = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_reelView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "stopType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && StopType === void 0 ? (_reportPossibleCrUseOfStopType({
            error: Error()
          }), StopType) : StopType).RunoutData;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_normalRollTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.5;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_fastRollTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c31046591b45f45a8c2512a4adaf38c1b05fa43c.js.map
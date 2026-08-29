System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "cc/env", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, game, macro, randomRangeInt, v2, RunTimeData, GameModeExample, EDITOR_NOT_IN_PREVIEW, SymbolEventType, LayoutType, ReelBounceConfig, SymbolNumber, UniReel, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, property, executeInEditMode, ReelExample;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIconExample(extras) {
    _reporterNs.report("IconExample", "./IconExample", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRunTimeData(extras) {
    _reporterNs.report("RunTimeData", "./DataSetting/RunTimeData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelSettingData(extras) {
    _reporterNs.report("ReelSettingData", "./DataSetting/ReelSettingData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameModeExample(extras) {
    _reporterNs.report("GameModeExample", "./DataSetting/ControllerSettingData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolEventType(extras) {
    _reporterNs.report("SymbolEventType", "./DataSetting/SymbolEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayoutType(extras) {
    _reporterNs.report("LayoutType", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelBounceConfig(extras) {
    _reporterNs.report("ReelBounceConfig", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStopType(extras) {
    _reporterNs.report("StopType", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolNumber(extras) {
    _reporterNs.report("SymbolNumber", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniReel(extras) {
    _reporterNs.report("UniReel", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      game = _cc.game;
      macro = _cc.macro;
      randomRangeInt = _cc.randomRangeInt;
      v2 = _cc.v2;
    }, function (_unresolved_2) {
      RunTimeData = _unresolved_2.RunTimeData;
    }, function (_unresolved_3) {
      GameModeExample = _unresolved_3.GameModeExample;
    }, function (_ccEnv) {
      EDITOR_NOT_IN_PREVIEW = _ccEnv.EDITOR_NOT_IN_PREVIEW;
    }, function (_unresolved_4) {
      SymbolEventType = _unresolved_4.SymbolEventType;
    }, function (_unresolved_5) {
      LayoutType = _unresolved_5.LayoutType;
      ReelBounceConfig = _unresolved_5.ReelBounceConfig;
      SymbolNumber = _unresolved_5.SymbolNumber;
      UniReel = _unresolved_5.UniReel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bdc8d6bmulCzLzXFZeaq8s8", "ReelExample", undefined);

      __checkObsolete__(['_decorator', 'Component', 'game', 'macro', 'Node', 'randomRangeInt', 'v2']);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);

      _export("ReelExample", ReelExample = (_dec = ccclass('ReelExample'), _dec2 = executeInEditMode(), _dec3 = property(_crd && ReelBounceConfig === void 0 ? (_reportPossibleCrUseOfReelBounceConfig({
        error: Error()
      }), ReelBounceConfig) : ReelBounceConfig), _dec(_class = _dec2(_class = (_class2 = class ReelExample extends (_crd && UniReel === void 0 ? (_reportPossibleCrUseOfUniReel({
        error: Error()
      }), UniReel) : UniReel) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bounceConfig", _descriptor, this);

          this.moveInterval = void 0;
          this._currentRandomData = [];
          this.reelSettingData = null;
        }

        init(reelID) {
          this.reelSettingData = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance.reelData;
          this._iconAmount = this.reelSettingData.iconAmount;
          this.layoutType = this.reelSettingData.layoutType;
          this.inverseDirection = this.reelSettingData.inverseDirection;
          this.iconSize = v2(this.reelSettingData.iconSize.x, this.reelSettingData.iconSize.y);
          this.iconSpacing = this.reelSettingData.iconSpacing;
          super.init(reelID);
          this.onStartRoll = this.upBouncing;
          this.onStopRoll = this.setIconBlur.bind(this, false);
        }

        getResultIconList() {
          return this.iconList.slice(1, this.iconList.length - 1);
        }

        update() {
          if (EDITOR_NOT_IN_PREVIEW) {
            this.initLayout();
            this.reelSettingData = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
              error: Error()
            }), RunTimeData) : RunTimeData).instance.reelData;

            if (this.reelSettingData) {
              this.layoutType = this.reelSettingData.layoutType;
              this.inverseDirection = this.reelSettingData.inverseDirection;
              this.iconSize = v2(this.reelSettingData.iconSize.x, this.reelSettingData.iconSize.y);
              this.iconSpacing = this.reelSettingData.iconSpacing;
            }
          }

          if (this.reelSettingData) {
            this.bounceConfig.startBounce = this.reelSettingData.startBounce;
            this.bounceConfig.endBounce = this.reelSettingData.endBounce;
            this.bounceConfig.useRealCurve = this.reelSettingData.useRealCurve;
            this.bounceConfig.downBounceEasing = this.reelSettingData.downBounceEasing;
            this.bounceConfig.downBounceRealCurve = this.reelSettingData.downBounceRealCurve;
            this.bounceConfig.downBounceDuration = this.reelSettingData.downBounceDuration;
            this.bounceConfig.upBounceEasing = this.reelSettingData.upBounceEasing;
            this.bounceConfig.upBounceRealCurve = this.reelSettingData.upBounceRealCurve;
            this.bounceConfig.upBounceDuration = this.reelSettingData.upBounceDuration;
            this.bounceConfig.bounceDis = this.reelSettingData.bounceDis;
            this.moveInterval = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
              error: Error()
            }), RunTimeData) : RunTimeData).instance.controllerData.gameMode === (_crd && GameModeExample === void 0 ? (_reportPossibleCrUseOfGameModeExample({
              error: Error()
            }), GameModeExample) : GameModeExample).NG ? this.reelSettingData.ngMoveInterval : this.reelSettingData.fgMoveInterval;
          }
        }

        startRoll() {
          this.reset();
          this.setIconBlur(true);
          super.startRoll();
        }

        setIconBlur(isBlur) {
          for (var index = 0; index < this.iconList.length; index++) {
            var icon = this.iconList[index];
            icon.setIsBlur(isBlur);
          }
        }

        setData(symbolData, randomDataLength) {
          var randomData = [];

          for (var index = 0; index < randomDataLength; index++) {
            //為了間隔停止，根據randomDataLength生成隨機資料
            var symbol = this.createRandomSymbol();
            randomData.push(symbol);
          }

          var resultData = [this.createRandomSymbol(), ...symbolData, ...randomData];

          for (var _index = resultData.length - 1; _index >= 0; _index--) {
            var _symbol = resultData[_index];
            this.data.enqueue(_symbol);
          }
        }

        stopRollAsync(stopType) {
          var _superprop_getStopRollAsync = () => super.stopRollAsync,
              _this = this;

          return _asyncToGenerator(function* () {
            yield _superprop_getStopRollAsync().call(_this, stopType);

            if (_this.bounceConfig.endBounce) {
              yield _this.bouncingAsync(_this.bounceConfig.bounceDis, true);

              _this.onBounceMax();

              yield _this.bouncingAsync(_this.bounceConfig.bounceDis, false);
            }

            _this.onRollEnd();
          })();
        }

        upBouncing() {
          if (this.bounceConfig.startBounce) {
            this.resetMovements();
            this.bouncingAsync(this.bounceConfig.bounceDis, false);
            this.bouncingAsync(this.bounceConfig.bounceDis, true);
          }
        }

        bouncingAsync(dis, isDown) {
          return new Promise(resolve => {
            var easing = isDown ? this.bounceConfig.downBounceEasing : this.bounceConfig.upBounceEasing;
            var duration = isDown ? this.bounceConfig.downBounceDuration : this.bounceConfig.upBounceDuration;
            var realCurve = this.bounceConfig.useRealCurve ? isDown ? this.bounceConfig.downBounceRealCurve : this.bounceConfig.upBounceRealCurve : null;
            var moveDir = this.moveDir.multiplyScalar(dis);

            if (!isDown) {
              moveDir = moveDir.negative();
            }

            for (var i = 0; i < this._iconList.length; ++i) {
              this._iconList[i].moveBy(moveDir, duration, easing, realCurve);
            }

            this._iconList[0].addCallback(() => resolve());
          });
        }

        onBounceMax() {
          this.onSymbolEvent((_crd && SymbolEventType === void 0 ? (_reportPossibleCrUseOfSymbolEventType({
            error: Error()
          }), SymbolEventType) : SymbolEventType).OnBounceMax);
        }

        onRollEnd() {
          this.onSymbolEvent((_crd && SymbolEventType === void 0 ? (_reportPossibleCrUseOfSymbolEventType({
            error: Error()
          }), SymbolEventType) : SymbolEventType).RollEnd);
        }

        onSymbolEvent(symbolEvent) {
          for (var index = 0; index < this.iconList.length; index++) {
            var icon = this.iconList[index];
            var symbolID = icon.symbol.symbolID;
            var symbolData = this.reelSettingData.symbolDataList[symbolID];
            var event = symbolData.eventList.find(event => event.eventType === symbolEvent);

            if (event) {
              icon.playAnim(event.animName);

              if (symbolEvent === (_crd && SymbolEventType === void 0 ? (_reportPossibleCrUseOfSymbolEventType({
                error: Error()
              }), SymbolEventType) : SymbolEventType).ReadyHand) {
                icon.setBrightness(false);
              }
            }
          }
        }

        stopPlayWin() {
          for (var index = 0; index < this.iconList.length; index++) {
            this.iconList[index].stopPlayWin();
          }
        }

        clearRandomData() {
          while (this.data.count > this.iconAmount + 1) {
            //把隨機資料直接移除直到剩餘伺服器資料
            var symbol = this.data.dequeue();
            this.destroySymbol(symbol);
          }
        }

        setIconBrightness(isDark) {
          for (var index = 0; index < this._iconList.length; index++) {
            this._iconList[index].setBrightness(isDark);
          }
        }

        showReadyHand(duration) {
          var readyHandRealCurve = this.reelSettingData.readyHandRealCurve;
          var startTime = game.totalTime;
          var durationMs = duration * 1000;

          var callback = () => {
            var progress = (game.totalTime - startTime) / durationMs;

            for (var index = 0; index < this.iconList.length; index++) {
              var icon = this.iconList[index];
              icon.timeScale = readyHandRealCurve.evaluate(progress);
            }

            if (progress >= 1) {
              this.unschedule(callback);
            }
          };

          this.schedule(callback, 0, macro.REPEAT_FOREVER);
        }

        generateRandomIconData() {
          var resultSymbols = [];

          for (var index = 0; index < this.iconAmount + 2; index++) {
            var symbolID = randomRangeInt(0, this.reelSettingData.symbolDataList.length);
            var symbol = (_crd && SymbolNumber === void 0 ? (_reportPossibleCrUseOfSymbolNumber({
              error: Error()
            }), SymbolNumber) : SymbolNumber).pool.instance();
            symbol.symbolID = symbolID;
            resultSymbols.push(symbol);
          }

          return resultSymbols;
        }

        initIconSymbol() {
          var data = this.generateRandomIconData();

          for (var index = 0; index < this.iconList.length; index++) {
            var icon = this.iconList[index];
            icon.symbol = data[index];
          }
        }

        reset() {
          for (var index = 0; index < this.iconList.length; index++) {
            var icon = this.iconList[index];
            icon.timeScale = 1;
            icon.setBrightness(false);
          }
        }

        onLayoutChange(layoutType) {
          if (layoutType === (_crd && LayoutType === void 0 ? (_reportPossibleCrUseOfLayoutType({
            error: Error()
          }), LayoutType) : LayoutType).Vertical) {} else {}
        }

        createRandomSymbol() {
          if (this._currentRandomData.length <= 0) {
            this._currentRandomData = this.generateRandomIconData();
          }

          return this._currentRandomData.pop();
        }

        destroySymbol(symbol) {
          (_crd && SymbolNumber === void 0 ? (_reportPossibleCrUseOfSymbolNumber({
            error: Error()
          }), SymbolNumber) : SymbolNumber).pool.destroy(symbol);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bounceConfig", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=09703d90fa139e86ff2782eb218d3c5962bfae44.js.map
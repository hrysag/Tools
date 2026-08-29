System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, randomRangeInt, PublicReelConfigTest, UniReel, SymbolNumber, ReelBounceConfig, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, REEL_AMOUNT, NORMAL_SYMBOLS_LIST, MAGNIFICATION_SYMBOLS_LIST, WILD_ID, UniReelTempo;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUniIconTempo(extras) {
    _reporterNs.report("UniIconTempo", "./UniIconTempo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicReelConfigTest(extras) {
    _reporterNs.report("PublicReelConfigTest", "../../../../ReelTemplate/v2/Example/Scripts/PublicReelConfigTest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStopType(extras) {
    _reporterNs.report("StopType", "../../../../ReelTemplate/v3", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniReel(extras) {
    _reporterNs.report("UniReel", "../../../../ReelTemplate/v3", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolNumber(extras) {
    _reporterNs.report("SymbolNumber", "../../../../ReelTemplate/v3/Example/Scripts/SymbolNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelBounceConfig(extras) {
    _reporterNs.report("ReelBounceConfig", "../../../../ReelTemplate/v3/Example/Scripts/ReelBounceConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      randomRangeInt = _cc.randomRangeInt;
    }, function (_unresolved_2) {
      PublicReelConfigTest = _unresolved_2.PublicReelConfigTest;
    }, function (_unresolved_3) {
      UniReel = _unresolved_3.UniReel;
    }, function (_unresolved_4) {
      SymbolNumber = _unresolved_4.SymbolNumber;
    }, function (_unresolved_5) {
      ReelBounceConfig = _unresolved_5.ReelBounceConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a27d7OcJmdFxrSONSZBfFhc", "UniReelTempo", undefined);

      __checkObsolete__(['_decorator', 'randomRangeInt']);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        REEL_AMOUNT,
        NORMAL_SYMBOLS_LIST,
        MAGNIFICATION_SYMBOLS_LIST,
        WILD_ID
      } = _crd && PublicReelConfigTest === void 0 ? (_reportPossibleCrUseOfPublicReelConfigTest({
        error: Error()
      }), PublicReelConfigTest) : PublicReelConfigTest);

      _export("UniReelTempo", UniReelTempo = (_dec = ccclass('UniReelTempo'), _dec2 = property(_crd && ReelBounceConfig === void 0 ? (_reportPossibleCrUseOfReelBounceConfig({
        error: Error()
      }), ReelBounceConfig) : ReelBounceConfig), _dec(_class = (_class2 = class UniReelTempo extends (_crd && UniReel === void 0 ? (_reportPossibleCrUseOfUniReel({
        error: Error()
      }), UniReel) : UniReel) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bounceConfig", _descriptor, this);

          this._currentRandomData = [];
        }

        init(reelID) {
          super.init(reelID);
          this.onStartRoll = this.upBouncing;
        }
        /**
        * 滾輪急停時呼叫，把data裡面的資料清空到剩下iconList的長度
        */


        clearRandomData() {
          while (this.data.count > this.iconAmount + 2) {
            //把隨機資料直接移除直到剩餘伺服器資料
            let data = this.data.dequeue();
            this.destroySymbol(data);
          }
        }

        setIconBrightness(isDark, iconIndex) {
          if (iconIndex) {
            for (let i = 0; i < iconIndex.length; i++) {
              let index = iconIndex[i];

              this._iconList[index].setBrightness(isDark);
            }
          } else {
            for (let index = 0; index < this._iconList.length; index++) {
              this._iconList[index].setBrightness(isDark);
            }
          }
        }

        setData(symbolData, randomDataLength) {
          let randomData = [];

          for (let index = 0; index < randomDataLength; index++) {
            //為了間隔停止，根據randomDataLength生成隨機資料
            const symbol = this.createRandomSymbol();
            randomData.push(symbol);
          }

          let resultData = [this.createRandomSymbol(), ...symbolData, ...randomData];

          for (let index = resultData.length - 1; index >= 0; index--) {
            const symbol = resultData[index];
            this.data.enqueue(symbol);
          }
        }

        async stopRollAsync(stopType) {
          await super.stopRollAsync(stopType);
          await this.downBouncing();
        }

        upBouncing() {
          if (this.bounceConfig.startBounce) {
            this.resetMovements();
            this.rollingBouncingAsync(this.bounceConfig.bounceDis);
          }
        }

        async downBouncing() {
          if (this.bounceConfig.endBounce) {
            await this.rollingBouncingAsync(-this.bounceConfig.bounceDis);
          }
        }

        createRandomSymbol() {
          if (this._currentRandomData.length <= 0) {
            this._currentRandomData = this.generateRandomSymbolList();
          }

          return this._currentRandomData.pop();
        }

        destroySymbol(symbol) {
          (_crd && SymbolNumber === void 0 ? (_reportPossibleCrUseOfSymbolNumber({
            error: Error()
          }), SymbolNumber) : SymbolNumber).pool.destroy(symbol);
        }

        generateRandomSymbolList() {
          let allSymbolList = this.reelID === REEL_AMOUNT - 1 ? [...MAGNIFICATION_SYMBOLS_LIST] : [...NORMAL_SYMBOLS_LIST];
          let uniqueSymbolIDList = REEL_AMOUNT - 1 ? [...MAGNIFICATION_SYMBOLS_LIST] : [WILD_ID];
          let resultSymbols = [];

          for (let index = 0; index < this.iconAmount + 2; index++) {
            let randomIndex = randomRangeInt(0, allSymbolList.length);
            let symbolID = allSymbolList[randomIndex];

            if (uniqueSymbolIDList.length > 0 && uniqueSymbolIDList.includes(symbolID)) {
              let uniqueSymbolIndex = allSymbolList.indexOf(symbolID);
              allSymbolList.splice(uniqueSymbolIndex, 1);
            }

            let symbol = (_crd && SymbolNumber === void 0 ? (_reportPossibleCrUseOfSymbolNumber({
              error: Error()
            }), SymbolNumber) : SymbolNumber).pool.instance();
            symbol.symbolID = symbolID; // symbol.randomValue(); 也可以他自己產生隨機資料

            resultSymbols.push(symbol);
          }

          return resultSymbols;
        }

        initIconSymbol() {
          let data = this.generateRandomSymbolList();

          for (let index = 0; index < this.iconList.length; index++) {
            const icon = this.iconList[index];
            icon.symbol = data[index];
          }
        }

        async rollingBouncingAsync(dis) {
          return new Promise((resolve, reject) => {
            let downEasing = this.bounceConfig.downBounceEasing;
            let downDuration = this.bounceConfig.downBounceDuration;
            let upEasing = this.bounceConfig.upBounceEasing;
            let upDuration = this.bounceConfig.upBounceDuration;
            let downRealCurve = this.bounceConfig.useRealCurve ? this.bounceConfig.downBounceRealCurve : null;
            let upRealCurve = this.bounceConfig.useRealCurve ? this.bounceConfig.upBounceRealCurve : null;

            for (let i = 0; i < this._iconList.length; ++i) {
              this._iconList[i].moveBy(this.moveDir.multiplyScalar(dis).negative(), downDuration, downEasing, downRealCurve);

              this._iconList[i].moveBy(this.moveDir.multiplyScalar(dis), upDuration, upEasing, upRealCurve);
            }

            this._iconList[0].addCallback(() => resolve());
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bounceConfig", [_dec2], {
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
//# sourceMappingURL=8a5261666dc0c995c5579f526d5e770a82648e88.js.map
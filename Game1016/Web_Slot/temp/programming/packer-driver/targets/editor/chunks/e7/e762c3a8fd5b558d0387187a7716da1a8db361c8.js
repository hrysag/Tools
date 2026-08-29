System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Enum, randomRangeInt, SymbolNumber, PublicReelConfigTest, Utility, ReelBounceConfig, EaseType, UniDropReel, DropType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, REEL_AMOUNT, NORMAL_SYMBOLS_LIST, MAGNIFICATION_SYMBOLS_LIST, WILD_ID, SlotType, UniDropReelExample;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSymbolNumber(extras) {
    _reporterNs.report("SymbolNumber", "../SymbolNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPublicReelConfigTest(extras) {
    _reporterNs.report("PublicReelConfigTest", "../../../../ReelTemplate_2/Example/Scripts/PublicReelConfigTest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "db://assets/Scripts/Utils/Utility", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStopType(extras) {
    _reporterNs.report("StopType", "../../../Scripts/UniReel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelBounceConfig(extras) {
    _reporterNs.report("ReelBounceConfig", "../ReelBounceConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEaseType(extras) {
    _reporterNs.report("EaseType", "db://assets/Scripts/Core/TweenExt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniDropIconExample(extras) {
    _reporterNs.report("UniDropIconExample", "./UniDropIconExample", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniDropReel(extras) {
    _reporterNs.report("UniDropReel", "../../../Scripts/DropReel/UniDropReel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropType(extras) {
    _reporterNs.report("DropType", "../../../Scripts/DropReel/UniDropIconBase", _context.meta, extras);
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
      Enum = _cc.Enum;
      randomRangeInt = _cc.randomRangeInt;
    }, function (_unresolved_2) {
      SymbolNumber = _unresolved_2.SymbolNumber;
    }, function (_unresolved_3) {
      PublicReelConfigTest = _unresolved_3.PublicReelConfigTest;
    }, function (_unresolved_4) {
      Utility = _unresolved_4.Utility;
    }, function (_unresolved_5) {
      ReelBounceConfig = _unresolved_5.ReelBounceConfig;
    }, function (_unresolved_6) {
      EaseType = _unresolved_6.EaseType;
    }, function (_unresolved_7) {
      UniDropReel = _unresolved_7.UniDropReel;
    }, function (_unresolved_8) {
      DropType = _unresolved_8.DropType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e6280V9SQZL8avJTdIGoPHS", "UniDropReelExample", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'Enum', 'Node', 'randomRangeInt', 'RealCurve']);

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

      SlotType = /*#__PURE__*/function (SlotType) {
        SlotType[SlotType["None"] = 0] = "None";
        SlotType[SlotType["Drop"] = 1] = "Drop";
        SlotType[SlotType["Rolling"] = 2] = "Rolling";
        return SlotType;
      }(SlotType || {});

      _export("UniDropReelExample", UniDropReelExample = (_dec = ccclass('DropUniReelExample'), _dec2 = property(_crd && ReelBounceConfig === void 0 ? (_reportPossibleCrUseOfReelBounceConfig({
        error: Error()
      }), ReelBounceConfig) : ReelBounceConfig), _dec3 = property({
        type: Enum(SlotType),
        visible: true,
        readonly: true
      }), _dec4 = property({
        type: CCFloat,
        tooltip: 'Icon掉落間隔的時間'
      }), _dec(_class = (_class2 = class UniDropReelExample extends (_crd && UniDropReel === void 0 ? (_reportPossibleCrUseOfUniDropReel({
        error: Error()
      }), UniDropReel) : UniDropReel) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bounceConfig", _descriptor, this);

          _initializerDefineProperty(this, "_slotType", _descriptor2, this);

          _initializerDefineProperty(this, "iconDropSpaceTime", _descriptor3, this);

          this._currentRandomData = [];
        }

        init(reelID) {
          super.init(reelID);
          this.onStartRoll = this.upBouncing;
          this.onStartDropOut = this.setStartDropOut;
          this.onStartRefill = this.setStartRefill;
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

          let resultData = this._slotType === SlotType.Drop ? [...symbolData] : [this.createRandomSymbol(), ...symbolData, ...randomData];

          for (let index = resultData.length - 1; index >= 0; index--) {
            const symbol = resultData[index];
            this.data.enqueue(symbol);
          }
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

        startRoll() {
          this._slotType = SlotType.Rolling;
          super.startRoll();
        }

        async stopRollAsync(stopType) {
          await super.stopRollAsync(stopType);
          await this.downBouncing();
        }

        async startDropRefillAsync(dropOutIds, ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType).Linear, easedValueCustom = null) {
          await this.dropEliminate(dropOutIds);
          await super.startDropRefillAsync(dropOutIds, ease, easedValueCustom);
        }

        startDropOut(idList, ease, easedValueCustom) {
          this._slotType = SlotType.Drop;
          super.startDropOut(idList, ease, easedValueCustom);
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

        drop(ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType).Linear, easedValueCustom = null) {
          const dropIcons = this._iconList.filter(icon => icon.dropType !== (_crd && DropType === void 0 ? (_reportPossibleCrUseOfDropType({
            error: Error()
          }), DropType) : DropType).NoDrop).reverse();

          const lastIcon = dropIcons[dropIcons.length - 1];

          for (let i = 0; i < dropIcons.length; i++) {
            if (this.iconDropSpaceTime > 0) {
              const delay = i * this.iconDropSpaceTime;
              this.scheduleOnce(() => {
                this.runDrop(dropIcons[i], lastIcon, ease, easedValueCustom);
              }, delay);
            } else {
              this.runDrop(dropIcons[i], lastIcon, ease, easedValueCustom);
            }
          }
        }

        runDrop(icon, lastIcon, ease, easedValueCustom) {
          const dropCount = this.getDropCount(icon);
          const dropDis = this.moveDir.clone().multiplyScalar(this.moveDis * dropCount);
          const dropTime = this.moveInterval * dropCount;
          icon.moveBy(dropDis, dropTime, ease, easedValueCustom);
          icon.addCallback(() => {
            this.dropComplete(icon, lastIcon);
          });
        }

        dropComplete(dropIcon, lastIcon) {
          const isValidDrop = dropIcon.dropType !== (_crd && DropType === void 0 ? (_reportPossibleCrUseOfDropType({
            error: Error()
          }), DropType) : DropType).DropOut && this.bounceConfig.endBounce;

          if (!isValidDrop) {
            this.setDropFinished(dropIcon, lastIcon);
            return;
          }

          this.dropBouncingAsync(dropIcon, lastIcon);
        }

        setStartDropOut(idList) {}

        setStartRefill(dropOutIds) {
          for (let i = 0; i < dropOutIds.length; i++) {
            const index = dropOutIds[i];
            this.iconList[index].show();
          }
        }

        async dropEliminate(removeIdList) {
          for (let i = 0; i < removeIdList.length; i++) {
            const index = removeIdList[i];
            this.iconList[index].hide();
          }

          await (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).waitPromise(0.5);
        }

        async dropBouncingAsync(dropIcon, lastIcon) {
          return new Promise((resolve, reject) => {
            let dis = -this.bounceConfig.bounceDis;
            let downEasing = this.bounceConfig.downBounceEasing;
            let downDuration = this.bounceConfig.downBounceDuration;
            let upEasing = this.bounceConfig.upBounceEasing;
            let upDuration = this.bounceConfig.upBounceDuration;
            let downRealCurve = this.bounceConfig.useRealCurve ? this.bounceConfig.downBounceRealCurve : null;
            let upRealCurve = this.bounceConfig.useRealCurve ? this.bounceConfig.upBounceRealCurve : null;
            dropIcon.moveBy(this.moveDir.multiplyScalar(dis).negative(), downDuration, downEasing, downRealCurve);
            dropIcon.moveBy(this.moveDir.multiplyScalar(dis), upDuration, upEasing, upRealCurve);
            dropIcon.addCallback(() => {
              this.setDropFinished(dropIcon, lastIcon);
            });
          });
        }

        setDropFinished(dropIcon, lastIcon) {
          dropIcon.dropType = (_crd && DropType === void 0 ? (_reportPossibleCrUseOfDropType({
            error: Error()
          }), DropType) : DropType).NoDrop;

          if (dropIcon === lastIcon) {
            var _this$waitForDropComp;

            (_this$waitForDropComp = this.waitForDropComplete) == null || _this$waitForDropComp.call(this);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bounceConfig", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_slotType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return SlotType.None;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconDropSpaceTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e762c3a8fd5b558d0387187a7716da1a8db361c8.js.map
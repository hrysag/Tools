System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UniReel, GameState, SymbolNumber, ReelBounceConfig1016, DefinitionGameConfigData, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ALL_SYMBOL_LIST_NG, ALL_SYMBOL_LIST_RE, ALL_SYMBOL_LIST_FG, UNIQUE_SYMBOL_LIST_NG, UNIQUE_SYMBOL_LIST_RE, UNIQUE_SYMBOL_LIST_FG, UniReelExample1016;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfStopType(extras) {
    _reporterNs.report("StopType", "./ReferencePathForUniSlot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniReel(extras) {
    _reporterNs.report("UniReel", "./ReferencePathForUniSlot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameMode(extras) {
    _reporterNs.report("IGameMode", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniIconExample(extras) {
    _reporterNs.report("UniIconExample1016", "./UniIconExample1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolNumber(extras) {
    _reporterNs.report("SymbolNumber", "./SymbolNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelBounceConfig(extras) {
    _reporterNs.report("ReelBounceConfig1016", "./ReelBounceConfig1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData", "../DefinitionGameData/GameConfigInstance", _context.meta, extras);
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
      UniReel = _unresolved_2.UniReel;
    }, function (_unresolved_3) {
      GameState = _unresolved_3.GameState;
    }, function (_unresolved_4) {
      SymbolNumber = _unresolved_4.SymbolNumber;
    }, function (_unresolved_5) {
      ReelBounceConfig1016 = _unresolved_5.ReelBounceConfig1016;
    }, function (_unresolved_6) {
      DefinitionGameConfigData = _unresolved_6.DefinitionGameConfigData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "df703g+7OtOrZ2o8Z/hgtt2", "UniReelExample1016", undefined);

      __checkObsolete__(['_decorator', 'randomRangeInt']); //--這個比較特殊一點要解構的方式抽出config裡面的變數就要單獨出來免得造成循環引用


      //import { PublicReelConfigTest } from '../../../ReelTemplate_2/deprecation/Example/Scripts/PublicReelConfigTest';
      ({
        ccclass,
        property
      } = _decorator);
      ({
        ALL_SYMBOL_LIST_NG,
        ALL_SYMBOL_LIST_RE,
        ALL_SYMBOL_LIST_FG,
        UNIQUE_SYMBOL_LIST_NG,
        UNIQUE_SYMBOL_LIST_RE,
        UNIQUE_SYMBOL_LIST_FG
      } = _crd && DefinitionGameConfigData === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData) : DefinitionGameConfigData);

      _export("UniReelExample1016", UniReelExample1016 = (_dec = ccclass('UniReelExample1016'), _dec2 = property(_crd && ReelBounceConfig1016 === void 0 ? (_reportPossibleCrUseOfReelBounceConfig({
        error: Error()
      }), ReelBounceConfig1016) : ReelBounceConfig1016), _dec(_class = (_class2 = class UniReelExample1016 extends (_crd && UniReel === void 0 ? (_reportPossibleCrUseOfUniReel({
        error: Error()
      }), UniReel) : UniReel) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bounceConfig", _descriptor, this);

          this._currentRandomData = [];
          //--interface IGameMode
          this.gameState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL;
        }

        init(reelID) {
          //--阻止UniReel的initIconSymbol呼叫
          this.createIcon(this.iconAmount + 2); // 預備兩個icon，上跟下

          this.initLayout();
          this.onStartRoll = this.upBouncing;
        } //--interface IGameMode改變遊戲狀態當下都會呼叫這個方法


        changeGameState(value) {
          this.gameState = value;
        } //--設定初始盤面的資料


        setInitIconData(data) {
          const symbolList = this.createYourOwnSymbolList(data);

          for (let index = 0; index < this.iconList.length; index++) {
            const icon = this.iconList[index];
            icon.symbol = symbolList[index];
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

          if (this.bounceConfig.endBounce) {
            await this.bouncingAsync(-this.bounceConfig.bounceDis);
          }
        } //--??


        upBouncing() {
          if (this.bounceConfig.startBounce) {
            this.resetMovements();
            this.bouncingAsync(this.bounceConfig.bounceDis);
          }
        } //--??


        async bouncingAsync(dis) {
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
        } //---這邊改掉


        generateRandomSymbolList() {
          const sourceList = this.getTargetAllSymbolList();
          const uniqueList = this.getTargetUniqueSymbolList();
          const pickedSymbols = [];
          const possibleSymbols = [];
          const usedUniqueSymbols = [];
          const iconAmount = this.iconAmount; // 產生所有可能的符號組合

          for (let i = 0; i < sourceList.length; i++) {
            possibleSymbols.push(sourceList[i]);
          }

          possibleSymbols.push(...uniqueList); // 隨機選擇符號

          for (let i = 0; i < iconAmount; i++) {
            if (possibleSymbols.length === 0) {
              break; // 如果沒有剩餘的符號，則跳出迴圈
            }

            const randomIndex = Math.floor(Math.random() * possibleSymbols.length);
            const symbolTarget = possibleSymbols[randomIndex]; // 檢查唯一性

            if (uniqueList && uniqueList.includes(symbolTarget)) {
              if (usedUniqueSymbols.includes(symbolTarget)) {
                // 如果已經使用過，則重新選擇
                i--;
                possibleSymbols.splice(randomIndex, 1); // 移除已經使用過的符號

                continue;
              } else {
                usedUniqueSymbols.push(symbolTarget);
              }
            }

            const symbol = (_crd && SymbolNumber === void 0 ? (_reportPossibleCrUseOfSymbolNumber({
              error: Error()
            }), SymbolNumber) : SymbolNumber).pool.instance();
            symbol.symbolID = symbolTarget; // symbol.randomValue(); 也可以他自己產生隨機資料
            //resultSymbols.push(symbol);

            pickedSymbols.push(symbol);
            possibleSymbols.splice(randomIndex, 1); // 移除已經選取的符號
          }

          return pickedSymbols;
        }

        createYourOwnSymbolList(value) {
          const symbolList = [];

          for (let index = 0; index < value.length; index++) {
            const symbol = (_crd && SymbolNumber === void 0 ? (_reportPossibleCrUseOfSymbolNumber({
              error: Error()
            }), SymbolNumber) : SymbolNumber).pool.instance();
            symbol.symbolID = value[index];
            symbolList.push(symbol);
          }

          return symbolList;
        }

        getTargetAllSymbolList() {
          if (this.gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL) {
            return ALL_SYMBOL_LIST_NG;
          } else if (this.gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            return ALL_SYMBOL_LIST_FG;
          } else if (this.gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE) {
            return ALL_SYMBOL_LIST_RE;
          }
        }

        getTargetUniqueSymbolList() {
          let targetList;

          if (this.gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL) {
            targetList = UNIQUE_SYMBOL_LIST_NG;
          } else if (this.gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            targetList = UNIQUE_SYMBOL_LIST_FG;
          } else if (this.gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE) {
            targetList = UNIQUE_SYMBOL_LIST_RE;
          }

          return targetList[this.reelID];
        } //--這樣不行啦..初始盤面要從外面塞,不然這樣會有機會讓盤面產生吻合條件可以連線的物件
        //--這是UniReel在initialize的時候會呼叫的


        initIconSymbol() {
          //return;
          let data = this.generateRandomSymbolList();

          for (let index = 0; index < this.iconList.length; index++) {
            const icon = this.iconList[index];
            icon.symbol = data[index];
          }
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
//# sourceMappingURL=c26b9fc756f66a1bbfe3dadea8159665a085d3f2.js.map
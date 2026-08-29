System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, color, Sprite, SpriteFrame, tween, instantiate, sp, RunTimeData, SymbolEventType, SymbolControllerExample, UniIconBase, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, IconExample;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRunTimeData(extras) {
    _reporterNs.report("RunTimeData", "./DataSetting/RunTimeData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolEventType(extras) {
    _reporterNs.report("SymbolEventType", "./DataSetting/SymbolEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolControllerExample(extras) {
    _reporterNs.report("SymbolControllerExample", "./SymbolControllerExample", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolNumber(extras) {
    _reporterNs.report("SymbolNumber", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniIconBase(extras) {
    _reporterNs.report("UniIconBase", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      color = _cc.color;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      instantiate = _cc.instantiate;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      RunTimeData = _unresolved_2.RunTimeData;
    }, function (_unresolved_3) {
      SymbolEventType = _unresolved_3.SymbolEventType;
    }, function (_unresolved_4) {
      SymbolControllerExample = _unresolved_4.SymbolControllerExample;
    }, function (_unresolved_5) {
      UniIconBase = _unresolved_5.UniIconBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "446b5U56a9AkJbYp9AQm0p+", "IconExample", undefined);

      __checkObsolete__(['_decorator', 'color', 'Node', 'Animation', 'Sprite', 'SpriteFrame', 'tween', 'v3', 'Tween', 'UITransform', 'size', 'Prefab', 'instantiate', 'sp', 'AnimationClip', 'CCInteger', 'Scene', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IconExample", IconExample = (_dec = ccclass('IconExample'), _dec2 = property({
        range: [0, 255]
      }), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec5 = property(_crd && SymbolControllerExample === void 0 ? (_reportPossibleCrUseOfSymbolControllerExample({
        error: Error()
      }), SymbolControllerExample) : SymbolControllerExample), _dec(_class = (_class2 = class IconExample extends (_crd && UniIconBase === void 0 ? (_reportPossibleCrUseOfUniIconBase({
        error: Error()
      }), UniIconBase) : UniIconBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "darkBrightness", _descriptor, this);

          _initializerDefineProperty(this, "blurSprite", _descriptor2, this);

          _initializerDefineProperty(this, "blurSpriteFrameList", _descriptor3, this);

          _initializerDefineProperty(this, "symbolList", _descriptor4, this);

          this.currentSymbol = null;
          this.playAnimResolve = null;
          this.isBlur = false;
          this.isDark = false;
        }

        init() {
          super.init();
          var reelData = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance.reelData;
          var symbolDataList = reelData.symbolDataList;
          this.blurSpriteFrameList = symbolDataList.map(data => data.blurSpriteFrame);
          var prefabList = symbolDataList.map(data => data.prefab);
          this.symbolList = this.createSymbol(prefabList);
        }

        createSymbol(prefabList) {
          var nodeList = [];

          for (var index = 0; index < prefabList.length; index++) {
            var _Prefab = prefabList[index];
            var node = instantiate(_Prefab);
            this.node.addChild(node);
            var symbolCtrl = node.addComponent(_crd && SymbolControllerExample === void 0 ? (_reportPossibleCrUseOfSymbolControllerExample({
              error: Error()
            }), SymbolControllerExample) : SymbolControllerExample);
            var defaultAnim = this.getSymbolAnim(index, (_crd && SymbolEventType === void 0 ? (_reportPossibleCrUseOfSymbolEventType({
              error: Error()
            }), SymbolEventType) : SymbolEventType).Default);
            node.active = true;
            symbolCtrl.init(defaultAnim);
            nodeList.push(symbolCtrl);
            node.active = false;
          }

          return nodeList;
        }

        get symbol() {
          return this._symbol;
        }

        set symbol(value) {
          this._symbol = value;
          this.updateSymbol();
        }

        setIsBlur(isBlur) {
          this.isBlur = isBlur;

          if (!this.blurSpriteFrameList[this.symbol.symbolID]) {
            //檢查有無模糊圖
            this.blurSprite.node.active = false;

            if (this.currentSymbol) {
              this.currentSymbol.node.active = true;
            }
          } else {
            this.blurSprite.node.active = this.isBlur;

            if (this.currentSymbol) {
              this.currentSymbol.node.active = !this.isBlur;
            }
          }
        }

        updateSymbol() {
          var symbolID = this.symbol.symbolID;

          if (this.currentSymbol) {
            this.currentSymbol.node.active = false;
          }

          this.currentSymbol = this.symbolList[symbolID];
          this.currentSymbol.node.active = this.blurSpriteFrameList[symbolID] ? !this.isBlur : true;

          if (this.blurSpriteFrameList[symbolID]) {
            //檢查有無模糊圖
            this.blurSprite.spriteFrame = this.blurSpriteFrameList[symbolID];
            this.blurSprite.node.active = this.isBlur;
          }

          this.setBrightness(this.isDark);
        }

        getSymbolAnim(symbolID, symbolEventType) {
          var symbolData = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance.reelData.symbolDataList[symbolID];
          var event = symbolData.eventList.find(event => event.eventType === symbolEventType);

          if (event) {
            return event.animName;
          }

          return '';
        }

        setBrightness(isDark) {
          this.isDark = isDark;
          var brightness = isDark ? this.darkBrightness : 255;
          this.blurSprite.color = color(brightness, brightness, brightness, this.blurSprite.color.a);
          var spineList = this.currentSymbol.getComponentsInChildren(sp.Skeleton);

          for (var i = 0; i < spineList.length; i++) {
            spineList[i].color = color(brightness, brightness, brightness, spineList[i].color.a);
          }
        }

        playAnim(animName) {
          return new Promise((resolve, reject) => {
            this.playAnimResolve = resolve;

            if (!this.currentSymbol.isSprite) {
              this.currentSymbol.playAnim(animName);
              var time = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
                error: Error()
              }), RunTimeData) : RunTimeData).instance.processData.winAnimTime;
              this.startTimer(time, resolve);
            } else {
              resolve();
            }
          });
        }

        startTimer(time, callback) {
          var timer = {
            time: 0
          };
          tween(timer).to(time, {
            time: time
          }).call(() => {
            callback();
          }).start();
        }

        stopPlayWin() {
          var _this$playAnimResolve;

          this.stopAnim();
          (_this$playAnimResolve = this.playAnimResolve) == null || _this$playAnimResolve.call(this);
        }

        stopAnim() {
          var eventList = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance.reelData.symbolDataList[this.symbol.symbolID].eventList;
          var defaultEvent = eventList.find(event => event.eventType === (_crd && SymbolEventType === void 0 ? (_reportPossibleCrUseOfSymbolEventType({
            error: Error()
          }), SymbolEventType) : SymbolEventType).Default);
          var defaultAnim = defaultEvent ? defaultEvent.animName : null;
          this.currentSymbol.stopAnim(defaultAnim);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "darkBrightness", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "blurSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "blurSpriteFrameList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "symbolList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6e33a8444ae39843baf92766c67ec4007ac40d1b.js.map
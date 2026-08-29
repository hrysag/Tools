System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SpriteFrame, Prefab, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, symbolResource_TA;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SpriteFrame = _cc.SpriteFrame;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ad7781Wn91JpKVSSNmHJZfX", "symbolResource_TA", undefined);

      __checkObsolete__(['_decorator', 'Component', 'SpriteFrame', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("symbolResource_TA", symbolResource_TA = (_dec = ccclass('symbolResource_TA'), _dec2 = property({
        type: [SpriteFrame],
        tooltip: "symbol圖"
      }), _dec3 = property({
        type: [SpriteFrame],
        tooltip: "symbol模糊圖"
      }), _dec4 = property({
        type: [SpriteFrame],
        tooltip: "胡牌牌型語系貼圖"
      }), _dec5 = property({
        type: [SpriteFrame],
        tooltip: "胡牌牌型標題語系貼圖"
      }), _dec6 = property({
        type: Prefab,
        tooltip: "symbol靜態節點"
      }), _dec7 = property({
        type: Prefab,
        tooltip: "符號中獎"
      }), _dec(_class = (_class2 = class symbolResource_TA extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "symbolSF", _descriptor, this);

          _initializerDefineProperty(this, "symbolBlurSF", _descriptor2, this);

          _initializerDefineProperty(this, "huTypeSF", _descriptor3, this);

          _initializerDefineProperty(this, "huTypeTitleSF", _descriptor4, this);

          _initializerDefineProperty(this, "symbolNode", _descriptor5, this);

          _initializerDefineProperty(this, "symbolWin", _descriptor6, this);
        } //symbolId對應資源array位置
        // public symbolArrayID = {
        //     1: 0,
        //     2: 1,
        //     3: 2,
        //     4: 3,
        //     5: 4,
        //     6: 5,
        //     7: 6,
        //     8: 7,
        //     9: 8,
        //     10: 9,
        //     11: 10,
        //     12: 11,
        //     13: 12,
        //     14: 13,
        //     15: 14,
        //     16: 15,
        //     17: 16,
        //     18: 17,
        //     19: 18,
        //     20: 19,
        //     21: 20,
        //     22: 21,
        //     23: 22,
        //     24: 23,
        //     25: 24,
        //     26: 25,
        //     27: 26,
        //     28: 27,
        //     29: 28,
        //     30: 29,
        //     31: 30,
        //     32: 31,
        //     33: 32,
        //     34: 33,
        //     35: 34,
        //     36: 35,
        //     37: 36,
        //     38: 37,
        //     39: 38,
        //     40: 39,
        //     41: 40,
        //     42: 41,
        //     43: 42,
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "symbolSF", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "symbolBlurSF", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "huTypeSF", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "huTypeTitleSF", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "symbolNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "symbolWin", [_dec7], {
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
//# sourceMappingURL=69fb3c90040486eba270cc502caeb1583503285f.js.map
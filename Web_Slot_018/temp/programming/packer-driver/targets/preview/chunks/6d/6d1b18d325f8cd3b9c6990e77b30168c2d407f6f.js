System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, Node, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _class4, _class5, _descriptor3, _crd, ccclass, property, WildBattleData, RPSGuessData;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4c99q95cBGCL42O7WYa37I", "RPSDataDef", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCInteger', 'Node', 'CCString', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WildBattleData", WildBattleData = (_dec = ccclass('WildBattleData'), _dec2 = property({
        type: CCInteger,
        tooltip: 'item_serverNumber'
      }), _dec3 = property({
        type: Node,
        tooltip: 'RPSNodeItems'
      }), _dec(_class = (_class2 = class WildBattleData {
        constructor() {
          _initializerDefineProperty(this, "iconId", _descriptor, this);

          _initializerDefineProperty(this, "rpsNode", _descriptor2, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rpsNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _export("RPSGuessData", RPSGuessData = (_dec4 = ccclass('RPSGuessData'), _dec5 = property({
        type: [WildBattleData],
        tooltip: 'RPSItems for reel'
      }), _dec4(_class4 = (_class5 = class RPSGuessData {
        constructor() {
          _initializerDefineProperty(this, "RPSGuessData", _descriptor3, this);
        }

      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "RPSGuessData", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6d1b18d325f8cd3b9c6990e77b30168c2d407f6f.js.map
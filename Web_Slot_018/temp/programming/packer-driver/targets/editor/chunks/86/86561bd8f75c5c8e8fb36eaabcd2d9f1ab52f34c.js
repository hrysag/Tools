System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _dec6, _dec7, _class4, _class5, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, GameNodeHashInfo, GameModeNode;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "31be6j5IkJGUJgAQP7xZ9ID", "ChangeGameModeNodeDef", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'Component', 'CCInteger', 'Node', 'CCString', 'CCFloat']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameNodeHashInfo", GameNodeHashInfo = (_dec = ccclass('GameNodeHashInfo'), _dec2 = property({
        visible: true,
        displayName: 'NodeName'
      }), _dec3 = property({
        type: Node,
        visible: true,
        displayName: 'Node'
      }), _dec(_class = (_class2 = class GameNodeHashInfo {
        constructor() {
          _initializerDefineProperty(this, "nodeName", _descriptor, this);

          _initializerDefineProperty(this, "displayNode", _descriptor2, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "displayNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _export("GameModeNode", GameModeNode = (_dec4 = ccclass('GameModeNode'), _dec5 = property({
        visible: true,
        displayName: 'GameCamp',
        tooltip: '陣營名稱'
      }), _dec6 = property({
        visible: true,
        displayName: 'IsShow',
        tooltip: '是否顯示'
      }), _dec7 = property({
        type: GameNodeHashInfo,
        visible: true,
        displayName: 'GameNodeHashInfo',
        tooltip: '顯示的NodeList'
      }), _dec4(_class4 = (_class5 = class GameModeNode {
        constructor() {
          _initializerDefineProperty(this, "gameCamp", _descriptor3, this);

          _initializerDefineProperty(this, "isShow", _descriptor4, this);

          _initializerDefineProperty(this, "gameNodeHashInfo", _descriptor5, this);
        }

      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "gameCamp", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "isShow", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "gameNodeHashInfo", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=86561bd8f75c5c8e8fb36eaabcd2d9f1ab52f34c.js.map
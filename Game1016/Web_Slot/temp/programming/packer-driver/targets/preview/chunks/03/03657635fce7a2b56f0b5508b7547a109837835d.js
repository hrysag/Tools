System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ContainerWholeBehavior, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _dec6, _class4, _class5, _descriptor3, _descriptor4, _crd, ccclass, property, GameNodeHashInfo, GameNodeContainer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfContainerWholeBehavior(extras) {
    _reporterNs.report("ContainerWholeBehavior", "../Component/ContainerWholeBehavior", _context.meta, extras);
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
      ContainerWholeBehavior = _unresolved_2.ContainerWholeBehavior;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6b369NIP7NFu6xaHw6oKJ/8", "GameNodeContainer", undefined);

      __checkObsolete__(['_decorator', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameNodeHashInfo", GameNodeHashInfo = (_dec = ccclass('GameNodeHashInfo'), _dec2 = property({
        visible: true,
        displayName: 'NodeName'
      }), _dec3 = property({
        type: _crd && ContainerWholeBehavior === void 0 ? (_reportPossibleCrUseOfContainerWholeBehavior({
          error: Error()
        }), ContainerWholeBehavior) : ContainerWholeBehavior,
        visible: true,
        displayName: 'Node'
      }), _dec(_class = (_class2 = class GameNodeHashInfo {
        constructor() {
          _initializerDefineProperty(this, "nodeName", _descriptor, this);

          /**
          這裡無法直接寫 T，Cocos Editor 不認得泛型型別，
          需要指定一個最基礎的父類別讓編輯器知道可以拖入什麼東西。
          但程式碼中，它的型別會是正確的 CBehavior 泛型
           */
          _initializerDefineProperty(this, "displayNode", _descriptor2, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "displayNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _export("GameNodeContainer", GameNodeContainer = (_dec4 = ccclass('GameNodeContainer'), _dec5 = property({
        visible: true,
        displayName: 'IsShow',
        tooltip: '是否顯示'
      }), _dec6 = property({
        type: [GameNodeHashInfo],
        visible: true,
        displayName: 'GameNodeHashInfo',
        tooltip: '顯示的NodeList'
      }), _dec4(_class4 = (_class5 = class GameNodeContainer {
        constructor() {
          _initializerDefineProperty(this, "isShow", _descriptor3, this);

          _initializerDefineProperty(this, "gameNodeHashInfo", _descriptor4, this);
        }

      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "isShow", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "gameNodeHashInfo", [_dec6], {
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
//# sourceMappingURL=03657635fce7a2b56f0b5508b7547a109837835d.js.map
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, Prefab, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, PrefabList;

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
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21329OnNRtCWo2cz+UquDO7", "PrefabList", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab', 'CCInteger']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PrefabList", PrefabList = (_dec = ccclass('PrefabList'), _dec2 = property({
        type: Prefab,
        visible: true,
        tooltip: 'Prefab樣板'
      }), _dec3 = property({
        type: Node,
        visible: true,
        tooltip: 'instances list'
      }), _dec4 = property({
        visible: true
      }), _dec(_class = (_class2 = class PrefabList extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "prefab", _descriptor, this);

          _initializerDefineProperty(this, "nodeList", _descriptor2, this);

          _initializerDefineProperty(this, "_count", _descriptor3, this);
        }

        get count() {
          return this._count;
        }

        createInstance(rootNode, count = this._count, bClearChild = true) {
          if (bClearChild) {
            this.clear();
          }

          for (let i = 0; i < count; i++) {
            let prefabNode = instantiate(this.prefab);

            if (rootNode) {
              prefabNode.parent = rootNode;
            }

            this.nodeList.push(prefabNode);
          }
        }

        clear() {
          for (let i = 0; i < this.nodeList.length; i++) {
            this.nodeList[i].destroy();
          }

          this.nodeList = [];
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_count", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=31c9e09afb31d46d7be85d005a253d2d7a39f2ae.js.map
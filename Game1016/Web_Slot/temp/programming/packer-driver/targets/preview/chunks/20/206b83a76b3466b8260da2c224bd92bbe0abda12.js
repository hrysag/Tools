System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, game, instantiate, Prefab, profiler, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, TriTestController;

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
      game = _cc.game;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      profiler = _cc.profiler;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a0347q3nhA+qpGTVoG1BJ+", "TriTestController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'game', 'instantiate', 'Node', 'Prefab', 'profiler']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TriTestController", TriTestController = (_dec = ccclass('TriTestController'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = (_class2 = class TriTestController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "mesh1000", _descriptor, this);

          _initializerDefineProperty(this, "WH_BH", _descriptor2, this);

          _initializerDefineProperty(this, "WH_BL", _descriptor3, this);

          _initializerDefineProperty(this, "WL_BL", _descriptor4, this);
        }

        start() {
          profiler.showStats();
        }

        onFPS30() {
          game.frameRate = 30;
        }

        onFPS60() {
          game.frameRate = 60;
        }

        createMesh1000() {
          for (var i = 0; i < 5; i++) {
            var node = instantiate(this.mesh1000);
            node.parent = this.node;
          }
        }

        createWH_BH() {
          for (var i = 0; i < 5; i++) {
            var node = instantiate(this.WH_BH);
            node.parent = this.node;
          }
        }

        createWH_BL() {
          for (var i = 0; i < 5; i++) {
            var node = instantiate(this.WH_BL);
            node.parent = this.node;
          }
        }

        createWL_BL() {
          for (var i = 0; i < 5; i++) {
            var node = instantiate(this.WL_BL);
            node.parent = this.node;
          }
        }

        destroyAll() {
          var children = [...this.node.children];

          for (var i = 0; i < children.length; i++) {
            children[i].destroy();
          }
        }

        destroyOne() {
          if (this.node.children.length > 0) {
            this.node.children[0].destroy();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mesh1000", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "WH_BH", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "WH_BL", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "WL_BL", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=206b83a76b3466b8260da2c224bd92bbe0abda12.js.map
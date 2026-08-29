System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ParticleSystem2D, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, particle2DAutoSwitch;

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
      ParticleSystem2D = _cc.ParticleSystem2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dfea7ZRwbNLQo5/0kccF/Bg", "particle2DAutoSwitch", undefined);

      __checkObsolete__(['_decorator', 'Component', 'ParticleSystem2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("particle2DAutoSwitch", particle2DAutoSwitch = (_dec = ccclass('particle2DAutoSwitch'), _dec2 = property({
        type: [ParticleSystem2D],
        tooltip: "粒子物件，跟隨啟用/禁用狀態，設置播放與停止"
      }), _dec(_class = (_class2 = class particle2DAutoSwitch extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "particles", _descriptor, this);
        }

        onEnable() {
          for (var particle of this.particles) {
            particle.resetSystem(); //重播粒子 
          }
        }

        onDisable() {
          for (var particle of this.particles) {
            particle.stopSystem(); //停止粒子 
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "particles", [_dec2], {
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
//# sourceMappingURL=250fb7defe6057beb97caaf55b72237c29b99919.js.map
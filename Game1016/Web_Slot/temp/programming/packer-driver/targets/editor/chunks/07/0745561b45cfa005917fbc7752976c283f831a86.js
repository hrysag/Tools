System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, ParticleSystem, UIOpacity, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, property, requireComponent, ParticleOpacitySet;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      ParticleSystem = _cc.ParticleSystem;
      UIOpacity = _cc.UIOpacity;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c9479nrEatDy4KVQ4+8M4NX", "ParticleOpacitySet", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Node', 'ParticleSystem', 'UIOpacity']);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("ParticleOpacitySet", ParticleOpacitySet = (_dec = ccclass('ParticleOpacitySet'), _dec2 = requireComponent(UIOpacity), _dec3 = property(Color), _dec(_class = _dec2(_class = (_class2 = class ParticleOpacitySet extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "color", _descriptor, this);
        }

        update(deltaTime) {
          let c = this.color;

          if (this.getComponent(UIOpacity)) {
            c.a = this.getComponent(UIOpacity).opacity;
          }

          this.getComponent(ParticleSystem).materials[0].setProperty('tintColor', c);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "color", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Color(0, 0, 0, 255);
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0745561b45cfa005917fbc7752976c283f831a86.js.map
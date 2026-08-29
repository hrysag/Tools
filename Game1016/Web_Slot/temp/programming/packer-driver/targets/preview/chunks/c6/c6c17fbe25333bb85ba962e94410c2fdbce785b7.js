System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCString, Component, sp, CCBoolean, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, SpinePlayOnEnable;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCString = _cc.CCString;
      Component = _cc.Component;
      sp = _cc.sp;
      CCBoolean = _cc.CCBoolean;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c40e4gZrfJOZakn35urypGn", "SpinePlayOnEnable", undefined);

      __checkObsolete__(['_decorator', 'CCString', 'Component', 'Node', 'sp', 'CCBoolean']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpinePlayOnEnable", SpinePlayOnEnable = (_dec = ccclass('SpinePlayOnEnable'), _dec2 = property(CCString), _dec3 = property(CCBoolean), _dec(_class = (_class2 = class SpinePlayOnEnable extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "animationName", _descriptor, this);

          _initializerDefineProperty(this, "loop", _descriptor2, this);
        }

        onEnable() {
          var spine = this.node.getComponent(sp.Skeleton);

          if (spine) {
            spine.setAnimation(0, this.animationName, this.loop);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "animationName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loop", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c6c17fbe25333bb85ba962e94410c2fdbce785b7.js.map
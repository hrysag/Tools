System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sp, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, spinePlayOnEnable;

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
      sp = _cc.sp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ce5c0Pe2/dEloMvYhG9T5C4", "spinePlayOnEnable", undefined);

      __checkObsolete__(['_decorator', 'Component', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("spinePlayOnEnable", spinePlayOnEnable = (_dec = ccclass('spinePlayOnEnable'), _dec2 = property({
        tooltip: "是:執行起始+循環動態，否:執行單一動態"
      }), _dec3 = property({
        visible: function visible() {
          if (!this.isInLoop) this.inAnimName = '';
          return this.isInLoop;
        },
        tooltip: "循環起始動態名稱"
      }), _dec4 = property({
        visible: function visible() {
          if (!this.isInLoop) this.loopAnimName = '';
          return this.isInLoop;
        },
        tooltip: "循環動態名稱"
      }), _dec(_class = (_class2 = class spinePlayOnEnable extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "isInLoop", _descriptor, this);

          _initializerDefineProperty(this, "inAnimName", _descriptor2, this);

          _initializerDefineProperty(this, "loopAnimName", _descriptor3, this);
        }

        onEnable() {
          var skel = this.getComponent(sp.Skeleton);

          if (this.isInLoop) {
            skel.setAnimation(0, this.inAnimName, false); //播放進入動態

            skel.setCompleteListener(() => {
              skel.setAnimation(0, this.loopAnimName, true); //播放循環動態
            });
          } else {
            skel.setAnimation(0, skel.animation, skel.loop); //播放預設動態
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isInLoop", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "inAnimName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'in';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loopAnimName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'loop';
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8bc0db4a3e60afcfbaacf3b3ade975f0663f2da3.js.map
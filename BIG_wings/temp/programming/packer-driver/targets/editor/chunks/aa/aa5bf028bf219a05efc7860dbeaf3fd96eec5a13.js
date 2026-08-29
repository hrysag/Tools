System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Animation, error, AnimationClip, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, playAnimOnEnable;

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
      Animation = _cc.Animation;
      error = _cc.error;
      AnimationClip = _cc.AnimationClip;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f498deuWB9APJely2L6DpBb", "playAnimOnEnable", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Animation', 'error', 'AnimationClip']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("playAnimOnEnable", playAnimOnEnable = (_dec = ccclass('playAnimOnEnable'), _dec2 = property({
        tooltip: "是:執行起始+循環動態，否:執行單一動態"
      }), _dec3 = property({
        type: AnimationClip,
        visible: function () {
          if (!this.isInLoop) this.inAnim = null;
          return this.isInLoop;
        },
        tooltip: "循環起始動態名稱"
      }), _dec4 = property({
        type: AnimationClip,
        visible: function () {
          if (!this.isInLoop) this.loopAnim = null;
          return this.isInLoop;
        },
        tooltip: "循環動態名稱"
      }), _dec(_class = (_class2 = class playAnimOnEnable extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "isInLoop", _descriptor, this);

          _initializerDefineProperty(this, "inAnim", _descriptor2, this);

          _initializerDefineProperty(this, "loopAnim", _descriptor3, this);
        }

        onEnable() {
          const anim = this.getComponent(Animation);

          if (this.isInLoop) {
            if (anim.clips.length === 0) {
              error(`[ERROR] ${this.node.name} has no clip to play!!!`);
              return;
            }

            anim.getState(this.inAnim.name).setTime(0);
            anim.play(this.inAnim.name);
            anim.on(Animation.EventType.FINISHED, () => {
              anim.getState(this.loopAnim.name).setTime(0);
              anim.play(this.loopAnim.name);
            });
          } else {
            if (anim.clips.length === 0) {
              error(`[ERROR] ${this.node.name} has no clip to play!!!`);
              return;
            }

            let name = '';
            if (anim.defaultClip) name = anim.defaultClip.name; //優先播放默認動態
            else name = anim.clips[0].name;
            anim.getState(name).setTime(0);
            anim.play(name);
          }
        }

        onDisable() {
          const anim = this.getComponent(Animation);

          if (anim.clips.length === 0) {
            return;
          }

          this.getComponent(Animation).stop();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isInLoop", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "inAnim", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loopAnim", [_dec4], {
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
//# sourceMappingURL=aa5bf028bf219a05efc7860dbeaf3fd96eec5a13.js.map
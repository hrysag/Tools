System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Button, Component, tween, Vec2, SpriteAttiveHandler, SpriteDissolveHandler, SpriteDistortionHandler, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, ExampleMain;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSpriteAttiveHandler(extras) {
    _reporterNs.report("SpriteAttiveHandler", "../../Script/SpriteAdditiveHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteDissolveHandler(extras) {
    _reporterNs.report("SpriteDissolveHandler", "../../Script/SpriteDissolveHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteDistortionHandler(extras) {
    _reporterNs.report("SpriteDistortionHandler", "../../Script/SpriteDistortionHandler", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Button = _cc.Button;
      Component = _cc.Component;
      tween = _cc.tween;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      SpriteAttiveHandler = _unresolved_2.SpriteAttiveHandler;
    }, function (_unresolved_3) {
      SpriteDissolveHandler = _unresolved_3.SpriteDissolveHandler;
    }, function (_unresolved_4) {
      SpriteDistortionHandler = _unresolved_4.SpriteDistortionHandler;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7621e4SwHBDxbXR0o633oR+", "ExampleMain", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Button', 'Component', 'Node', 'tween', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ExampleMain", ExampleMain = (_dec = ccclass('ExampleMain'), _dec2 = property(_crd && SpriteAttiveHandler === void 0 ? (_reportPossibleCrUseOfSpriteAttiveHandler({
        error: Error()
      }), SpriteAttiveHandler) : SpriteAttiveHandler), _dec3 = property(_crd && SpriteAttiveHandler === void 0 ? (_reportPossibleCrUseOfSpriteAttiveHandler({
        error: Error()
      }), SpriteAttiveHandler) : SpriteAttiveHandler), _dec4 = property(Animation), _dec5 = property(Animation), _dec6 = property(Button), _dec7 = property(_crd && SpriteDissolveHandler === void 0 ? (_reportPossibleCrUseOfSpriteDissolveHandler({
        error: Error()
      }), SpriteDissolveHandler) : SpriteDissolveHandler), _dec8 = property(Button), _dec9 = property(_crd && SpriteDistortionHandler === void 0 ? (_reportPossibleCrUseOfSpriteDistortionHandler({
        error: Error()
      }), SpriteDistortionHandler) : SpriteDistortionHandler), _dec10 = property(Button), _dec11 = property(Button), _dec(_class = (_class2 = class ExampleMain extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sp_addtive", _descriptor, this);

          _initializerDefineProperty(this, "sp_rotate", _descriptor2, this);

          _initializerDefineProperty(this, "anim", _descriptor3, this);

          _initializerDefineProperty(this, "rotateAnim", _descriptor4, this);

          _initializerDefineProperty(this, "additiveBtn", _descriptor5, this);

          _initializerDefineProperty(this, "sp_dissolve", _descriptor6, this);

          _initializerDefineProperty(this, "dissolveBtn", _descriptor7, this);

          _initializerDefineProperty(this, "sp_distort", _descriptor8, this);

          _initializerDefineProperty(this, "distorionBtn", _descriptor9, this);

          _initializerDefineProperty(this, "rotateBtn", _descriptor10, this);
        }

        onLoad() {
          this.additiveBtn.node.on(Button.EventType.CLICK, () => {
            this.sp_addtive.add_alpha = 255;
            this.anim.play('refresh');
          }, this);
          this.rotateBtn.node.on(Button.EventType.CLICK, () => {
            this.sp_rotate.add_alpha = 255;
            this.rotateAnim.play('rotate');
          }, this);
          this.dissolveBtn.node.on(Button.EventType.CLICK, () => {
            this.sp_dissolve.level = 0;
            tween(this.sp_dissolve).to(2, {
              level: 1
            }).start();
          }, this);
          this.distorionBtn.node.on(Button.EventType.CLICK, () => {
            this.sp_distort.distort_offset = new Vec2(0, 0);
            tween(this.sp_distort).to(2, {
              distort_offset: new Vec2(0, 1)
            }).start();
          }, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sp_addtive", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sp_rotate", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "anim", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rotateAnim", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "additiveBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sp_dissolve", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "dissolveBtn", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "sp_distort", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "distorionBtn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "rotateBtn", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fa28379cf2d335053afe4254e0836c3cd4767d29.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioClip, Component, SpriteFrame, Debug, KeySpriteFramePair, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _class3, _crd, ccclass, property, GenericUIRes;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../../../Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeySpriteFramePair(extras) {
    _reporterNs.report("KeySpriteFramePair", "../../../Utils/Core", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioClip = _cc.AudioClip;
      Component = _cc.Component;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      Debug = _unresolved_2.Debug;
      KeySpriteFramePair = _unresolved_2.KeySpriteFramePair;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f589acFL9RNTqrdkXuniUug", "GenericUIRes", undefined);

      __checkObsolete__(['_decorator', 'AudioClip', 'Component', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GenericUIRes", GenericUIRes = (_dec = ccclass('GenericUIRes'), _dec2 = property(AudioClip), _dec3 = property([_crd && KeySpriteFramePair === void 0 ? (_reportPossibleCrUseOfKeySpriteFramePair({
        error: Error()
      }), KeySpriteFramePair) : KeySpriteFramePair]), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec13 = property(SpriteFrame), _dec14 = property(SpriteFrame), _dec15 = property(SpriteFrame), _dec16 = property(SpriteFrame), _dec17 = property(SpriteFrame), _dec18 = property(SpriteFrame), _dec19 = property(SpriteFrame), _dec20 = property(SpriteFrame), _dec21 = property(SpriteFrame), _dec22 = property(SpriteFrame), _dec23 = property(SpriteFrame), _dec24 = property(SpriteFrame), _dec25 = property(SpriteFrame), _dec26 = property(SpriteFrame), _dec27 = property(SpriteFrame), _dec28 = property(SpriteFrame), _dec29 = property(SpriteFrame), _dec30 = property(SpriteFrame), _dec31 = property(SpriteFrame), _dec32 = property(SpriteFrame), _dec33 = property(SpriteFrame), _dec34 = property(SpriteFrame), _dec35 = property(SpriteFrame), _dec36 = property(SpriteFrame), _dec37 = property(SpriteFrame), _dec38 = property(SpriteFrame), _dec39 = property(SpriteFrame), _dec40 = property(SpriteFrame), _dec41 = property(SpriteFrame), _dec(_class = (_class2 = (_class3 = class GenericUIRes extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "genericSoundAudioClipList", _descriptor, this);

          _initializerDefineProperty(this, "bottomTextSpriteFrameMaps", _descriptor2, this);

          _initializerDefineProperty(this, "fromBtnNormal", _descriptor3, this);

          _initializerDefineProperty(this, "fromBtnHover", _descriptor4, this);

          _initializerDefineProperty(this, "fromBtnSelected", _descriptor5, this);

          _initializerDefineProperty(this, "flashOnSprite", _descriptor6, this);

          _initializerDefineProperty(this, "flashOffSprite", _descriptor7, this);

          _initializerDefineProperty(this, "flashOffHover", _descriptor8, this);

          _initializerDefineProperty(this, "newFlash_0", _descriptor9, this);

          _initializerDefineProperty(this, "newFlash_0_hover", _descriptor10, this);

          _initializerDefineProperty(this, "newFlash_1", _descriptor11, this);

          _initializerDefineProperty(this, "newFlash_1_hover", _descriptor12, this);

          _initializerDefineProperty(this, "newFlash_2", _descriptor13, this);

          _initializerDefineProperty(this, "newFlash_2_hover", _descriptor14, this);

          _initializerDefineProperty(this, "newFlash_press", _descriptor15, this);

          _initializerDefineProperty(this, "spinArrowNormal", _descriptor16, this);

          _initializerDefineProperty(this, "spinArrowDisabled", _descriptor17, this);

          _initializerDefineProperty(this, "stopIconNormal", _descriptor18, this);

          _initializerDefineProperty(this, "stopIconDisabled", _descriptor19, this);

          _initializerDefineProperty(this, "autoBtnNormal", _descriptor20, this);

          _initializerDefineProperty(this, "autoBtnHover", _descriptor21, this);

          _initializerDefineProperty(this, "autoBtnUIOpen", _descriptor22, this);

          _initializerDefineProperty(this, "autoBtnDisabled", _descriptor23, this);

          _initializerDefineProperty(this, "betBtnNormal", _descriptor24, this);

          _initializerDefineProperty(this, "betBtnHover", _descriptor25, this);

          _initializerDefineProperty(this, "betBtnUIOpen", _descriptor26, this);

          _initializerDefineProperty(this, "betBtnDisabled", _descriptor27, this);

          _initializerDefineProperty(this, "newBetBtnNormal", _descriptor28, this);

          _initializerDefineProperty(this, "newBetBtnHover", _descriptor29, this);

          _initializerDefineProperty(this, "newBetBtnUIOpen", _descriptor30, this);

          _initializerDefineProperty(this, "newBetBtnDisabled", _descriptor31, this);

          _initializerDefineProperty(this, "soundOn", _descriptor32, this);

          _initializerDefineProperty(this, "soundOnPress", _descriptor33, this);

          _initializerDefineProperty(this, "soundOff", _descriptor34, this);

          _initializerDefineProperty(this, "soundOffHover", _descriptor35, this);

          _initializerDefineProperty(this, "soundOffPress", _descriptor36, this);

          _initializerDefineProperty(this, "autoFormBtnNormal", _descriptor37, this);

          _initializerDefineProperty(this, "autoFormBtnHover", _descriptor38, this);

          _initializerDefineProperty(this, "autoFormBtnSelected", _descriptor39, this);

          _initializerDefineProperty(this, "autoFormBtnHold", _descriptor40, this);
        }

        static get instance() {
          if (this._instance === null) {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).LogError("GenericUIRes _instance 為空");
          }

          return this._instance;
        }

        init() {
          GenericUIRes._instance = this.node.getComponent(GenericUIRes);
        }

      }, _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "genericSoundAudioClipList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bottomTextSpriteFrameMaps", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "fromBtnNormal", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "fromBtnHover", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "fromBtnSelected", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "flashOnSprite", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "flashOffSprite", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "flashOffHover", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "newFlash_0", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "newFlash_0_hover", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "newFlash_1", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "newFlash_1_hover", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "newFlash_2", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "newFlash_2_hover", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "newFlash_press", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "spinArrowNormal", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "spinArrowDisabled", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "stopIconNormal", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "stopIconDisabled", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "autoBtnNormal", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "autoBtnHover", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "autoBtnUIOpen", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "autoBtnDisabled", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "betBtnNormal", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "betBtnHover", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "betBtnUIOpen", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "betBtnDisabled", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "newBetBtnNormal", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "newBetBtnHover", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "newBetBtnUIOpen", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "newBetBtnDisabled", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "soundOn", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "soundOnPress", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "soundOff", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "soundOffHover", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "soundOffPress", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "autoFormBtnNormal", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "autoFormBtnHover", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "autoFormBtnSelected", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "autoFormBtnHold", [_dec41], {
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
//# sourceMappingURL=f53d8dc6d5b518e35ad1924990f38fd2ac500865.js.map
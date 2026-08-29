System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCString, Component, resources, Sprite, SpriteFrame, GameSetting, SlotRelayLang, Debug, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, requireComponent, property, LocalizationSprite;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameSetting(extras) {
    _reporterNs.report("GameSetting", "../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../../Utils/Core", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCString = _cc.CCString;
      Component = _cc.Component;
      resources = _cc.resources;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      GameSetting = _unresolved_2.GameSetting;
      SlotRelayLang = _unresolved_2.SlotRelayLang;
    }, function (_unresolved_3) {
      Debug = _unresolved_3.Debug;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "34c12L4MZVIUL+6GR4L6QrX", "LocalizationSprite", undefined);

      __checkObsolete__(['_decorator', 'CCString', 'Component', 'Node', 'resources', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        requireComponent,
        property
      } = _decorator);

      _export("LocalizationSprite", LocalizationSprite = (_dec = ccclass('LocalizationSprite'), _dec2 = requireComponent(Sprite), _dec3 = property(CCString), _dec(_class = _dec2(_class = (_class2 = class LocalizationSprite extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "resourcePath", _descriptor, this);
        }

        updateLocalization() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var lang = (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
              error: Error()
            }), GameSetting) : GameSetting).gameLang;
            yield _this.loadImage(lang);
          })();
        }

        loadImage(langKey) {
          var langString = (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
            error: Error()
          }), SlotRelayLang) : SlotRelayLang)[langKey];

          if (this.resourcePath === "") {
            return Promise.resolve();
          }

          this.resourcePath = this.resourcePath.trim();

          if (this.resourcePath) {
            var path = "Game/ImageLocalization/" + langString + "/" + this.resourcePath + "/spriteFrame";
            return new Promise((resolve, reject) => {
              resources.load(path, SpriteFrame, (err, spriteFrame) => {
                if (err) {
                  // 如果不存在該圖片，則使用英文圖片
                  if (err.message.includes("Bundle resources doesn't contain") && langKey !== (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                    error: Error()
                  }), SlotRelayLang) : SlotRelayLang).en) {
                    this.loadImage((_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                      error: Error()
                    }), SlotRelayLang) : SlotRelayLang).en).then(() => {
                      resolve();
                    });
                  } else {
                    (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                      error: Error()
                    }), Debug) : Debug).LogWarning("LocalizationSprite loadImage err: " + err.message);
                    resolve();
                  }
                } else {
                  this.getComponent(Sprite).spriteFrame = spriteFrame;
                  resolve();
                }
              });
            });
          } else {
            console.error("Node \"" + this.node.name + "\" LocalizationSprite No resource path");
            return Promise.resolve();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "resourcePath", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b96a545ec34565680c394e40a904a1aa69fdfa90.js.map
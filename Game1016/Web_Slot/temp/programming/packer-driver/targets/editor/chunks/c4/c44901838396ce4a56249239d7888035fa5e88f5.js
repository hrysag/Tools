System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCString, resources, SpriteFrame, SlotRelayLang, Debug, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, GameInfoData;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

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
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      SlotRelayLang = _unresolved_2.SlotRelayLang;
    }, function (_unresolved_3) {
      Debug = _unresolved_3.Debug;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a9c7daKjNJKnoKv/NE43L6K", "GameInfoData", undefined);

      __checkObsolete__(['_decorator', 'CCString', 'Component', 'Node', 'resources', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameInfoData", GameInfoData = (_dec = ccclass('GameInfoData'), _dec2 = property({
        displayName: "SpriteFrame",
        type: SpriteFrame,
        serializable: true
      }), _dec3 = property({
        displayName: "KeyI18n",
        type: CCString,
        serializable: true
      }), _dec4 = property({
        displayName: "localizationSpriteKey",
        serializable: true
      }), _dec(_class = (_class2 = class GameInfoData {
        constructor() {
          _initializerDefineProperty(this, "spriteFrame", _descriptor, this);

          _initializerDefineProperty(this, "key", _descriptor2, this);

          _initializerDefineProperty(this, "localizationSpriteKey", _descriptor3, this);
        }

        loadLocalizationKey(langKey) {
          if (this.localizationSpriteKey) {
            return this.loadImage(langKey, this.localizationSpriteKey);
          } else {
            return Promise.resolve();
          }
        }

        loadImage(langKey, path) {
          const langString = (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
            error: Error()
          }), SlotRelayLang) : SlotRelayLang)[langKey];
          let resourcePath = path.trim();

          if (resourcePath) {
            let path = `Game/ImageLocalization/${langString}/${resourcePath}/spriteFrame`;
            return new Promise((resolve, reject) => {
              resources.load(path, SpriteFrame, (err, spriteFrame) => {
                if (err) {
                  // 如果不存在該圖片，則使用英文圖片
                  if (err.message.includes("Bundle resources doesn't contain") && langKey !== (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                    error: Error()
                  }), SlotRelayLang) : SlotRelayLang).en) {
                    this.loadImage((_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                      error: Error()
                    }), SlotRelayLang) : SlotRelayLang).en, path).then(() => {
                      resolve();
                    });
                  } else {
                    (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                      error: Error()
                    }), Debug) : Debug).LogWarning("GameInfoData loadImage err: " + err.message);
                    resolve();
                  }
                } else {
                  this.spriteFrame = spriteFrame;
                  resolve();
                }
              });
            });
          } else {
            console.error(`GameInfoData "${this.localizationSpriteKey}"  No resource path`);
            return Promise.resolve();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "key", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "localizationSpriteKey", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c44901838396ce4a56249239d7888035fa5e88f5.js.map
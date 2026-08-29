System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, SpriteAtlas, resources, SpriteFrame, Sprite, SlotRelayLang, Debug, LocalizationSpine, SkeletonExtension, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, requireComponent, property, LocalizationSpineTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSlotAttaches(extras) {
    _reporterNs.report("SlotAttaches", "db://assets/Scripts/GameScripts/SlotAttaches", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "db://assets/Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "db://assets/Scripts/Utils/Debug", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalizationSpine(extras) {
    _reporterNs.report("LocalizationSpine", "db://assets/Scripts/GameScripts/LocalizationSpine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonExtension(extras) {
    _reporterNs.report("SkeletonExtension", "db://assets/Scripts/GameScripts/SkeletonExtension", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      SpriteAtlas = _cc.SpriteAtlas;
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      SlotRelayLang = _unresolved_2.SlotRelayLang;
    }, function (_unresolved_3) {
      Debug = _unresolved_3.Debug;
    }, function (_unresolved_4) {
      LocalizationSpine = _unresolved_4.LocalizationSpine;
    }, function (_unresolved_5) {
      SkeletonExtension = _unresolved_5.SkeletonExtension;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f7111KPIfdMB4379gTDTsz/", "LocalizationSpineTest", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'SpriteAtlas', 'Component', 'resources', 'SpriteFrame', 'Sprite', 'director']);

      ({
        ccclass,
        requireComponent,
        property
      } = _decorator);

      _export("LocalizationSpineTest", LocalizationSpineTest = (_dec = ccclass('LocalizationSpineTest'), _dec2 = requireComponent(_crd && SkeletonExtension === void 0 ? (_reportPossibleCrUseOfSkeletonExtension({
        error: Error()
      }), SkeletonExtension) : SkeletonExtension), _dec3 = property({
        type: SpriteAtlas,
        visible: true,
        displayName: 'testSpriteAtlas'
      }), _dec4 = property({
        type: Sprite,
        visible: true,
        displayName: 'testSprite'
      }), _dec(_class = _dec2(_class = (_class2 = class LocalizationSpineTest extends (_crd && LocalizationSpine === void 0 ? (_reportPossibleCrUseOfLocalizationSpine({
        error: Error()
      }), LocalizationSpine) : LocalizationSpine) {
        constructor() {
          super();

          _initializerDefineProperty(this, "testSpriteAtlas", _descriptor, this);

          _initializerDefineProperty(this, "testSprite", _descriptor2, this);
        }

        async loadAllSpine(langKey) {
          let promiseList = [];
          const langString = (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
            error: Error()
          }), SlotRelayLang) : SlotRelayLang)[langKey];
          let localizationSpine = this.getComponent(_crd && SkeletonExtension === void 0 ? (_reportPossibleCrUseOfSkeletonExtension({
            error: Error()
          }), SkeletonExtension) : SkeletonExtension);

          if (localizationSpine === null) {
            console.error(`Node "${this.node.name}" LocalizationSpine No SpineAttach`);
          }

          let attachments = localizationSpine.slotAttaches;

          for (let i = 0; i < attachments.length; i++) {
            let name = attachments[i].spriteFrame.name;
            promiseList.push(this.loadSpine2(langString, name, attachments[i]));
          }

          await Promise.all(promiseList);
          localizationSpine.checkAndUpdateSlot();
        }

        loadSpine2(langString, name, attachment) {
          //const spritePath = `Game/ImageLocalization/${langString}/${name}/spriteFrame`; // 這是 spriteFrame 的路徑（從 auto-atlas 切出來的）
          //console.log('🔍 @@ Loading SpriteFrame:', spritePath, this.testSpriteAtlas);
          //let bundle = assetManager.getBundle('resources');
          //console.log('checkBundle:', bundle);
          let path = `Game/ImageLocalization/${langString}/${name}/spriteFrame`;
          return new Promise((resolve, reject) => {
            resources.load(path, SpriteFrame, (err, texture) => {
              if (err) {
                console.log(err); // 如果不存在該圖片，則使用英文圖片

                if (err.message.includes("Bundle resources doesn't contain")) {
                  this.loadSpine2((_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                    error: Error()
                  }), SlotRelayLang) : SlotRelayLang)[(_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                    error: Error()
                  }), SlotRelayLang) : SlotRelayLang).en], name, attachment).then(() => {
                    resolve();
                  });
                } else {
                  (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                    error: Error()
                  }), Debug) : Debug).LogWarning("LocalizationSpine loadImage err: " + err.message);
                  resolve();
                }
              } else {
                attachment.spriteFrame = texture;
                this.testSprite.spriteFrame = texture;
                console.log('testSprite@@@@@@:', this.testSprite);
                resolve();
              }
            });
          });
          /*
          //--這樣可以直接取得 spriteFrame--
          return new Promise<void>((resolve, reject) => {
              let spr = this.testSpriteAtlas.getSpriteFrame(name);
              console.log('spr:', spr);
              this.testSprite.spriteFrame = spr;
              console.log('testSprite:', this.testSprite);
              resolve();
          });*/
          //--這樣也是可以的,但spine是沒法度--

          /*
          if (bundle) {
                return new Promise<void>((resolve, reject) => {
                  bundle.load(spritePath, SpriteFrame, (err, spriteFrame) => {
                      if (err) {
                          reject(err);
                      } else {
                          attachment.spriteFrame = spriteFrame;
                          console.log('🔍 @@ Loaded Success_spriteFrame', spriteFrame);
                          this.testSprite.spriteFrame = spriteFrame;
                          resolve();
                      }
                      });
              });
            } else {
              console.warn('Bundle not found');
          }*/

          /*
          return new Promise<void>((resolve) => {
              resources.load(spritePath, SpriteFrame, (err, spriteFrame) => {
                  if (err) {
                      console.warn(`❌ Failed to load spriteFrame ${spritePath}:`, err.message);
                        // fallback 到英文語系
                      if (langString !== 'en') {
                          this.loadSpine2('en', name, attachment).then(resolve);
                      } else {
                          Debug.LogWarning(`LocalizationSpine loadImage err: ${err.message}`);
                          resolve();
                      }
                      return;
                  }
                    attachment.spriteFrame = spriteFrame;
                  resolve();
              });
          });*/
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "testSpriteAtlas", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "testSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1ce23ecb8f49381f9bf2ba6a7998393f1273c83b.js.map
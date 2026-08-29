System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, Button, SpriteFrame, assetManager, error, SpriteAtlas, UIOpacity, log, ButtonSpriteData, _dec, _dec2, _dec3, _dec4, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _class4, _crd, ccclass, menu, property, LocalizedUI;

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
      Sprite = _cc.Sprite;
      Button = _cc.Button;
      SpriteFrame = _cc.SpriteFrame;
      assetManager = _cc.assetManager;
      error = _cc.error;
      SpriteAtlas = _cc.SpriteAtlas;
      UIOpacity = _cc.UIOpacity;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a597fw/1I5FnZyEpTpRm6Iz", "LocalizedUI", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Asset', 'Sprite', 'Button', 'SpriteFrame', 'assetManager', 'error', 'SpriteAtlas', 'AssetManager', 'UIOpacity', 'log']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);
      ButtonSpriteData = class ButtonSpriteData {
        constructor() {
          this.normalSprite = '';
          this.hoverSprite = '';
          this.pressedSprite = '';
          this.disabledSprite = '';
        }

      };

      _export("default", LocalizedUI = (_dec = ccclass('LocalizedUI'), _dec2 = menu('i18n/LocalizedUI'), _dec3 = property(SpriteAtlas), _dec4 = property({
        tooltip: 'ProjectName/spritePath'
      }), _dec(_class2 = _dec2(_class2 = (_class3 = (_class4 = class LocalizedUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "buttonAtlas", _descriptor, this);

          _initializerDefineProperty(this, "spritePath", _descriptor2, this);

          _initializerDefineProperty(this, "isSpriteOnly", _descriptor3, this);

          this.resource = null;
          this.isDestroy = false;
          this.haveUpdated = false;
          this.defOpacity = 255;
        }

        onLoad() {
          const opacity = this.node.getComponent(UIOpacity);
          this.defOpacity = opacity ? opacity.opacity : this.defOpacity;

          if (!this.haveUpdated && opacity) {
            opacity.opacity = 0;
          }

          this.fetchRender();
        }

        onEnable() {
          const opacity = this.node.getComponent(UIOpacity);

          if (!this.haveUpdated && opacity) {
            opacity.opacity = 0;
          }
        }

        onDestroy() {
          this.isDestroy = true;
        }

        decRef() {
          if (this.resource) {
            this.resource.decRef();
            this.resource = null;
          }
        }

        updateUI() {
          this.fetchRender();
        }

        fetchRender() {
          if (LocalizedUI.language === '') {
            error(`LocalizedUI language not initialized`);
            return;
          }

          const sprite = this.getComponent(Sprite);
          const button = this.getComponent(Button);
          const spriteFrame = sprite ? sprite.spriteFrame : button ? button.normalSprite : undefined;
          const bundleName = this.spritePath.split('/')[0];
          const bundle = assetManager.getBundle(bundleName);

          if (!bundle) {
            var _this$node$parent;

            error(`No bundle loaded : ${bundleName}, ${this.name}, ${(_this$node$parent = this.node.parent) == null ? void 0 : _this$node$parent.name}`);
            return;
          }

          if (spriteFrame) {
            if (this.isSpriteOnly) {
              this.checkSpriteWithoutAtlas(bundle);
            } else if (this.spritePath !== '') {
              this.checkSpriteWithAtlas(bundle);
            }
          }
        }

        checkSpriteWithoutAtlas(bundle) {
          const sprite = this.getComponent(Sprite);

          if (sprite) {
            const bundleName = this.spritePath.split('/')[0];
            const path = this.useCurrentLangKey(this.spritePath.replace(bundleName, ''));
            this.updateSpriteOnly(bundle, sprite, `${path}/spriteFrame`);
          }
        }

        checkSpriteWithAtlas(bundle) {
          const sprite = this.getComponent(Sprite);
          const button = this.getComponent(Button);
          const newSpritePath = this.useCurrentLangKey(this.spritePath);

          if (sprite) {
            this.updateSprite(bundle, sprite, newSpritePath);
          }

          if (button) {
            this.updateButton(bundle, button, newSpritePath);
          }
        }

        updateSpriteOnly(bundle, sprite, newSpritePath) {
          const path = newSpritePath.substr(newSpritePath.indexOf('/'));
          bundle.load(path, SpriteFrame, (err, spriteFrame) => {
            if (this.isDestroy) {
              return;
            }

            if (err) {
              error(`${err} in ${this.name} ${newSpritePath}`);
            } else {
              this.resource = spriteFrame;
              this.resource.addRef();
              sprite.spriteFrame = spriteFrame;
              this.setDefOpacity();
            }
          });
        }

        updateSprite(bundle, sprite, newSpritePath) {
          const path = newSpritePath.substr(newSpritePath.indexOf('/'));
          bundle.load(path, SpriteAtlas, (err, atlas) => {
            if (this.isDestroy) {
              return;
            }

            if (err) {
              var _this$node$parent2;

              log(`${this.name}, ${(_this$node$parent2 = this.node.parent) == null ? void 0 : _this$node$parent2.name}`);
              error(`${err} in ${this.name} ${newSpritePath}`);
            } else {
              if (this.node === null) {
                error(this);
              }

              this.resource = atlas;
              this.resource.addRef();
              sprite.spriteFrame = atlas.getSpriteFrame(sprite.spriteFrame.name);
              this.setDefOpacity();
            }
          });
        }

        updateButton(bundle, button, newSpritePath) {
          const path = newSpritePath.substr(newSpritePath.indexOf('/'));
          bundle.load(path, SpriteAtlas, (err, atlas) => {
            if (this.isDestroy) {
              return;
            }

            if (err) {
              error(`${err} in ${this.name} ${newSpritePath}`);
            } else {
              this.resource = atlas;
              this.resource.addRef();
              button.normalSprite = atlas.getSpriteFrame(button.normalSprite.name);
              button.hoverSprite = atlas.getSpriteFrame(button.hoverSprite.name);
              button.pressedSprite = atlas.getSpriteFrame(button.pressedSprite.name);
              button.disabledSprite = atlas.getSpriteFrame(button.disabledSprite.name);
              this.setDefOpacity();
            }
          });
        }

        useCurrentLangKey(path) {
          const langKey = this.getLangKey(path);

          if (this.isSpriteOnly) {
            return path.replace(langKey, `${LocalizedUI.language}`);
          } else {
            return path.replace(langKey, `_${LocalizedUI.language}`);
          }
        }

        getLangKey(path) {
          if (path.indexOf('_tw') > -1) {
            return '_tw';
          } else if (path.indexOf('_cn') > -1) {
            return '_cn';
          } else if (path.indexOf('_en') > -1) {
            return '_en';
          } else if (path.indexOf('_vi') > -1) {
            return '_vi';
          } else if (path.indexOf('_th') > -1) {
            return '_th';
          } else if (path.indexOf('tw') > -1) {
            return 'tw';
          } else if (path.indexOf('cn') > -1) {
            return 'cn';
          } else if (path.indexOf('en') > -1) {
            return 'en';
          } else if (path.indexOf('vi') > -1) {
            return 'vi';
          } else if (path.indexOf('th') > -1) {
            return 'th';
          }

          return '';
        }

        setDefOpacity() {
          const opacity = this.node.getComponent(UIOpacity);
          this.haveUpdated = true;

          if (opacity) {
            opacity.opacity = this.defOpacity;
          }
        }

      }, _class4.language = '', _class4), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "buttonAtlas", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "spritePath", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "isSpriteOnly", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class3)) || _class2) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=92c61875a4158e4dc8818c63fbb8b7a433d52c53.js.map
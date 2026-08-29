System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SpriteFrame, assetManager, error, SpriteAtlas, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, menu, property, LocalizedSpirtFrames;

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
      SpriteFrame = _cc.SpriteFrame;
      assetManager = _cc.assetManager;
      error = _cc.error;
      SpriteAtlas = _cc.SpriteAtlas;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e92eLwNF5GWo8UUzR/hMTT", "LocalizedSpirtFrames", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Asset', 'Sprite', 'Button', 'SpriteFrame', 'assetManager', 'error', 'SpriteAtlas', 'AssetManager', 'log']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("default", LocalizedSpirtFrames = (_dec = ccclass('LocalizedSpirtFrames'), _dec2 = menu('i18n/LocalizedSpirtFrames'), _dec3 = property({
        tooltip: 'ProjectName/spritePath'
      }), _dec4 = property([SpriteFrame]), _dec5 = property(SpriteAtlas), _dec(_class = _dec2(_class = (_class2 = (_class3 = class LocalizedSpirtFrames extends Component {
        constructor(...args) {
          super(...args);
          this.spNames = [];

          _initializerDefineProperty(this, "spritePath", _descriptor, this);

          _initializerDefineProperty(this, "spriteFrames", _descriptor2, this);

          _initializerDefineProperty(this, "atlas", _descriptor3, this);

          this.resource = null;
        }

        onLoad() {
          this.fetchRender();
        }

        getIndex(idx) {
          return this.spriteFrames[idx];
        }

        decRef() {
          if (this.resource) {
            this.resource.decRef();
            this.resource = null;
          }
        }

        fetchRender() {
          if (LocalizedSpirtFrames.language === '') {
            error(`LocalizedSpirtFrames language not initialized`);
            return;
          }

          const bundleName = this.spritePath.split('/')[0];
          const bundle = assetManager.getBundle(bundleName);

          if (!bundle) {
            error(`No bundle loaded : ${bundleName}`);
            return;
          }

          const dir = this.spritePath.slice(0, this.spritePath.length - 2);
          const newSpritePath = dir + LocalizedSpirtFrames.language;
          this.getSpriteFrameName(this.atlas);

          if (this.spritePath !== '' && this.spritePath !== newSpritePath) {
            const path = newSpritePath.substr(newSpritePath.indexOf('/'));
            this.spritePath = newSpritePath;
            bundle.load(path, SpriteAtlas, (err, atlas) => {
              if (err) {
                error(`${err} in ${this.name} ${newSpritePath}`);
              } else {
                this.resource = atlas;
                this.resource.addRef();

                for (let i = 0; i < this.spriteFrames.length; i++) {
                  const spriteFrames = this.spriteFrames[i];

                  if (spriteFrames !== null) {
                    this.spriteFrames[i] = atlas.getSpriteFrame(this.spNames[i]);
                  }
                }
              }
            });
          }
        }

        getSpriteFrameName(atlas) {
          const keys = Object.keys(atlas.spriteFrames);

          for (const sp of this.spriteFrames) {
            for (const key of keys) {
              if (sp === atlas.spriteFrames[key]) {
                this.spNames.push(key);
                break;
              }
            }
          }
        }

      }, _class3.language = '', _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spritePath", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrames", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "atlas", [_dec5], {
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
//# sourceMappingURL=0b95235cf3193453d6c8ac39cbf7167ff4737030.js.map
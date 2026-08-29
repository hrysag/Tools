System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, CCString, Component, resources, Sprite, SpriteFrame, ButtonStatus, GameSetting, SlotRelayLang, Debug, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, requireComponent, property, LocalizationButton;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfButtonStatus(extras) {
    _reporterNs.report("ButtonStatus", "../Definition", _context.meta, extras);
  }

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
      Button = _cc.Button;
      CCString = _cc.CCString;
      Component = _cc.Component;
      resources = _cc.resources;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      ButtonStatus = _unresolved_2.ButtonStatus;
      GameSetting = _unresolved_2.GameSetting;
      SlotRelayLang = _unresolved_2.SlotRelayLang;
    }, function (_unresolved_3) {
      Debug = _unresolved_3.Debug;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "633f8zoT89LubGD/ND9SNzp", "LocalizationButton", undefined);

      __checkObsolete__(['_decorator', 'Button', 'CCString', 'Component', 'resources', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        requireComponent,
        property
      } = _decorator);

      _export("LocalizationButton", LocalizationButton = (_dec = ccclass('LocalizationButton'), _dec2 = requireComponent(Button), _dec3 = property(CCString), _dec(_class = _dec2(_class = (_class2 = class LocalizationButton extends Component {
        constructor(...args) {
          super(...args);

          // 只填入按鈕前綴名稱 後面要加上 _狀態_語言名稱
          // btn_normal_tw  btn_pressed_tw  btn_hover_tw  btn_disabled_tw
          _initializerDefineProperty(this, "resourcePath", _descriptor, this);
        }

        async updateLocalization() {
          let lang = (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).gameLang;
          await this.loadButtonImage(lang);
        }

        loadButtonImage(langKey) {
          return Promise.all([this.loadImageByStatus(langKey, (_crd && ButtonStatus === void 0 ? (_reportPossibleCrUseOfButtonStatus({
            error: Error()
          }), ButtonStatus) : ButtonStatus).Normal), this.loadImageByStatus(langKey, (_crd && ButtonStatus === void 0 ? (_reportPossibleCrUseOfButtonStatus({
            error: Error()
          }), ButtonStatus) : ButtonStatus).Pressed), this.loadImageByStatus(langKey, (_crd && ButtonStatus === void 0 ? (_reportPossibleCrUseOfButtonStatus({
            error: Error()
          }), ButtonStatus) : ButtonStatus).Hover), this.loadImageByStatus(langKey, (_crd && ButtonStatus === void 0 ? (_reportPossibleCrUseOfButtonStatus({
            error: Error()
          }), ButtonStatus) : ButtonStatus).Disabled)]);
        }

        loadImageByStatus(langKey, status) {
          const langString = (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
            error: Error()
          }), SlotRelayLang) : SlotRelayLang)[langKey];

          if (this.resourcePath === "") {
            return Promise.resolve();
          }

          this.resourcePath = this.resourcePath.trim();

          if (this.resourcePath) {
            let path = `Game/ImageLocalization/${langString}/${this.resourcePath}_${status}/spriteFrame`;
            return new Promise((resolve, reject) => {
              resources.load(path, SpriteFrame, (err, spriteFrame) => {
                if (err) {
                  // 如果不存在該圖片，則使用英文圖片
                  if (err.message.includes("Bundle resources doesn't contain") && langKey !== (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                    error: Error()
                  }), SlotRelayLang) : SlotRelayLang).en) {
                    this.loadImageByStatus((_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                      error: Error()
                    }), SlotRelayLang) : SlotRelayLang).en, status).then(() => {
                      resolve();
                    });
                  } else {
                    (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                      error: Error()
                    }), Debug) : Debug).LogWarning("LocalizationButton loadImage err: " + err.message);
                    resolve();
                  }
                } else {
                  switch (status) {
                    case (_crd && ButtonStatus === void 0 ? (_reportPossibleCrUseOfButtonStatus({
                      error: Error()
                    }), ButtonStatus) : ButtonStatus).Normal:
                      this.getComponent(Button).normalSprite = spriteFrame;
                      this.getComponent(Button).target.getComponent(Sprite).spriteFrame = spriteFrame;
                      break;

                    case (_crd && ButtonStatus === void 0 ? (_reportPossibleCrUseOfButtonStatus({
                      error: Error()
                    }), ButtonStatus) : ButtonStatus).Pressed:
                      this.getComponent(Button).pressedSprite = spriteFrame;
                      break;

                    case (_crd && ButtonStatus === void 0 ? (_reportPossibleCrUseOfButtonStatus({
                      error: Error()
                    }), ButtonStatus) : ButtonStatus).Hover:
                      this.getComponent(Button).hoverSprite = spriteFrame;
                      break;

                    case (_crd && ButtonStatus === void 0 ? (_reportPossibleCrUseOfButtonStatus({
                      error: Error()
                    }), ButtonStatus) : ButtonStatus).Disabled:
                      this.getComponent(Button).disabledSprite = spriteFrame;
                      break;
                  }

                  resolve();
                }
              });
            });
          } else {
            console.error(`Node "${this.node.name}" LocalizationButton No resource path`);
            return Promise.resolve();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "resourcePath", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=082f496d388dbf3e66e8da0b487e88881dd4a6c1.js.map
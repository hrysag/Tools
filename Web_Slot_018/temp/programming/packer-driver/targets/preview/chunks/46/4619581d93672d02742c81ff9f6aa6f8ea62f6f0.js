System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioClip, Component, resources, AudioResource, IdStringPair, SlotRelayLang, Debug, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, requireComponent, property, LocalizationSound;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioResource(extras) {
    _reporterNs.report("AudioResource", "../Utils/AudioResource", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIdStringPair(extras) {
    _reporterNs.report("IdStringPair", "../Utils/IdStringPair", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "../Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../Utils/Debug", _context.meta, extras);
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
      resources = _cc.resources;
    }, function (_unresolved_2) {
      AudioResource = _unresolved_2.AudioResource;
    }, function (_unresolved_3) {
      IdStringPair = _unresolved_3.IdStringPair;
    }, function (_unresolved_4) {
      SlotRelayLang = _unresolved_4.SlotRelayLang;
    }, function (_unresolved_5) {
      Debug = _unresolved_5.Debug;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57a24ulZGhMaYtnPwBocKy6", "LocalizationSound", undefined);

      __checkObsolete__(['_decorator', 'AudioClip', 'Component', 'Node', 'resources']);

      ({
        ccclass,
        requireComponent,
        property
      } = _decorator);

      _export("LocalizationSound", LocalizationSound = (_dec = ccclass('LocalizationSound'), _dec2 = requireComponent(_crd && AudioResource === void 0 ? (_reportPossibleCrUseOfAudioResource({
        error: Error()
      }), AudioResource) : AudioResource), _dec3 = property([_crd && IdStringPair === void 0 ? (_reportPossibleCrUseOfIdStringPair({
        error: Error()
      }), IdStringPair) : IdStringPair]), _dec(_class = _dec2(_class = (_class2 = class LocalizationSound extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "soundList", _descriptor, this);
        }

        loadSound(langKey) {
          var promiseList = this.soundList.map(item => {
            return this.loadOneSound(langKey, item.content, item.key);
          });
          return Promise.all(promiseList);
        }

        loadOneSound(langKey, path, id) {
          var langString = (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
            error: Error()
          }), SlotRelayLang) : SlotRelayLang)[langKey];

          var _path = path.trim();

          if (_path) {
            var _path2 = "Game/AudioLocalization/" + langString + "/" + _path;

            return new Promise((resolve, reject) => {
              resources.load(_path2, AudioClip, (err, audioClip) => {
                if (err) {
                  // 如果不存在該圖片，則使用英文圖片
                  if (err.message.includes("Bundle resources doesn't contain") && langKey !== (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                    error: Error()
                  }), SlotRelayLang) : SlotRelayLang).en) {
                    this.loadOneSound((_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                      error: Error()
                    }), SlotRelayLang) : SlotRelayLang).en, _path2, id).then(() => {
                      resolve();
                    });
                  } else {
                    (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                      error: Error()
                    }), Debug) : Debug).LogWarning("LocalizationSprite loadImage err: " + err.message);
                    resolve();
                  }
                } else {
                  this.getComponent(_crd && AudioResource === void 0 ? (_reportPossibleCrUseOfAudioResource({
                    error: Error()
                  }), AudioResource) : AudioResource).soundAudioClipList[id] = audioClip;
                  resolve();
                }
              });
            });
          } else {
            console.error("Node \"" + this.node.name + "\" LocalizationSprite No resource path");
            return Promise.resolve();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "soundList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4619581d93672d02742c81ff9f6aa6f8ea62f6f0.js.map
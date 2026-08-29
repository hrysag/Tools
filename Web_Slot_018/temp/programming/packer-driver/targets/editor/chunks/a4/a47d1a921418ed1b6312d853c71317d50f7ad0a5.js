System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AudioSource, AudioClip, randomRangeInt, WinType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, WinScoreSound, JpSoundController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWinType(extras) {
    _reporterNs.report("WinType", "db://assets/Scripts/Utils/Config", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioSource = _cc.AudioSource;
      AudioClip = _cc.AudioClip;
      randomRangeInt = _cc.randomRangeInt;
    }, function (_unresolved_2) {
      WinType = _unresolved_2.WinType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "73175KA0WdHc4SVHZx3WJqw", "JpSoundController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'AudioSource', 'AudioClip', 'randomRangeInt']);

      ({
        ccclass,
        property
      } = _decorator);

      WinScoreSound = /*#__PURE__*/function (WinScoreSound) {
        WinScoreSound[WinScoreSound["Win_Sound"] = 0] = "Win_Sound";
        WinScoreSound[WinScoreSound["Voice_BigWin"] = 1] = "Voice_BigWin";
        WinScoreSound[WinScoreSound["Voice_SuperWin"] = 2] = "Voice_SuperWin";
        WinScoreSound[WinScoreSound["Voice_MegaWin"] = 3] = "Voice_MegaWin";
        WinScoreSound[WinScoreSound["Voice_EpicWin"] = 4] = "Voice_EpicWin";
        return WinScoreSound;
      }(WinScoreSound || {});

      _export("JpSoundController", JpSoundController = (_dec = ccclass('JpSoundController'), _dec2 = property(AudioSource), _dec3 = property(AudioClip), _dec4 = property(AudioClip), _dec5 = property(AudioClip), _dec6 = property(AudioClip), _dec7 = property(AudioClip), _dec8 = property(AudioClip), _dec9 = property(AudioClip), _dec(_class = (_class2 = class JpSoundController extends Component {
        constructor(...args) {
          super(...args);

          //---照搬原本公板的音效設定
          _initializerDefineProperty(this, "audioSource", _descriptor, this);

          _initializerDefineProperty(this, "winSoundNormalClip", _descriptor2, this);

          _initializerDefineProperty(this, "winSoundEpicClip", _descriptor3, this);

          _initializerDefineProperty(this, "winSoundEnd", _descriptor4, this);

          _initializerDefineProperty(this, "bigWinClips", _descriptor5, this);

          _initializerDefineProperty(this, "superWinClips", _descriptor6, this);

          _initializerDefineProperty(this, "megaWinClips", _descriptor7, this);

          _initializerDefineProperty(this, "epicWinClips", _descriptor8, this);
        }

        playJPSound(value) {
          let voiceClips = [];
          let voiceType = WinScoreSound.Voice_BigWin;

          if (value == (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
            error: Error()
          }), WinType) : WinType).EpicWin) {
            voiceType = WinScoreSound.Voice_EpicWin;
            voiceClips = this.epicWinClips;
          } else if (value == (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
            error: Error()
          }), WinType) : WinType).MegaWin) {
            voiceType = WinScoreSound.Voice_MegaWin;
            voiceClips = this.megaWinClips;
          } else if (value == (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
            error: Error()
          }), WinType) : WinType).SuperWin) {
            voiceType = WinScoreSound.Voice_SuperWin;
            voiceClips = this.superWinClips;
          } else if (value == (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
            error: Error()
          }), WinType) : WinType).BigWin) {
            voiceType = WinScoreSound.Voice_BigWin;
            voiceClips = this.bigWinClips;
          }

          if (value === (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
            error: Error()
          }), WinType) : WinType).EpicWin) {
            this.playSound(this.winSoundEpicClip);
          } else {
            this.playSound(this.winSoundNormalClip);
          }

          this.scheduleOnce(() => {
            this.playSoundOneShotRandom(voiceClips);
          }, 0.5);
        }

        playSoundOneShotRandom(audioClips) {
          if (this.audioSource) {
            let len = audioClips.length;
            let randomClip = audioClips[randomRangeInt(0, len)];
            this.playSoundOneShot(randomClip);
          }
        }

        playSoundOneShot(audioClips) {
          if (this.audioSource) {
            this.audioSource.playOneShot(audioClips);
          }
        }

        playSound(audioClips) {
          if (this.audioSource) {
            this.audioSource.stop();
            this.audioSource.loop = false;
            this.audioSource.clip = audioClips;
            this.audioSource.play();
          }
        }

        stopSound() {
          if (this.audioSource) {
            this.audioSource.stop();
          }
        } //--JP結束播放的


        playSoundEnd(value) {
          if (value) {
            this.playSoundOneShot(this.winSoundEnd);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "winSoundNormalClip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "winSoundEpicClip", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "winSoundEnd", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bigWinClips", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "superWinClips", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "megaWinClips", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "epicWinClips", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a47d1a921418ed1b6312d853c71317d50f7ad0a5.js.map
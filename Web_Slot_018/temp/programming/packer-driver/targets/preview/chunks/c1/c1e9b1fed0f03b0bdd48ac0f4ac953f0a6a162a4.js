System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioClip, AudioSource, Component, KeyCode, Node, randomRangeInt, WinSingle, WinType, Debug, Utility, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, WinScoreSound, ShowWin;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWinSingle(extras) {
    _reporterNs.report("WinSingle", "./WinSingle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinType(extras) {
    _reporterNs.report("WinType", "db://assets/Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "db://assets/Scripts/Utils/Debug", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "db://assets/Scripts/Utils/Utility", _context.meta, extras);
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
      AudioSource = _cc.AudioSource;
      Component = _cc.Component;
      KeyCode = _cc.KeyCode;
      Node = _cc.Node;
      randomRangeInt = _cc.randomRangeInt;
    }, function (_unresolved_2) {
      WinSingle = _unresolved_2.WinSingle;
    }, function (_unresolved_3) {
      WinType = _unresolved_3.WinType;
    }, function (_unresolved_4) {
      Debug = _unresolved_4.Debug;
    }, function (_unresolved_5) {
      Utility = _unresolved_5.Utility;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fd063s7GMtBaotbKx/ziZJv", "ShowWin", undefined);

      __checkObsolete__(['_decorator', 'AudioClip', 'AudioSource', 'Component', 'EventKeyboard', 'KeyCode', 'Node', 'randomRangeInt']);

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

      _export("ShowWin", ShowWin = (_dec = ccclass('ShowWin'), _dec2 = property(_crd && WinSingle === void 0 ? (_reportPossibleCrUseOfWinSingle({
        error: Error()
      }), WinSingle) : WinSingle), _dec3 = property(_crd && WinSingle === void 0 ? (_reportPossibleCrUseOfWinSingle({
        error: Error()
      }), WinSingle) : WinSingle), _dec4 = property(_crd && WinSingle === void 0 ? (_reportPossibleCrUseOfWinSingle({
        error: Error()
      }), WinSingle) : WinSingle), _dec5 = property(_crd && WinSingle === void 0 ? (_reportPossibleCrUseOfWinSingle({
        error: Error()
      }), WinSingle) : WinSingle), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(AudioSource), _dec9 = property(AudioClip), _dec10 = property(AudioClip), _dec11 = property(AudioClip), _dec12 = property(AudioClip), _dec13 = property(AudioClip), _dec14 = property(AudioClip), _dec15 = property(AudioClip), _dec(_class = (_class2 = class ShowWin extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "epicWin", _descriptor, this);

          _initializerDefineProperty(this, "megaWin", _descriptor2, this);

          _initializerDefineProperty(this, "superWin", _descriptor3, this);

          _initializerDefineProperty(this, "bigWin", _descriptor4, this);

          _initializerDefineProperty(this, "scoreLabelNode", _descriptor5, this);

          _initializerDefineProperty(this, "bgMask", _descriptor6, this);

          _initializerDefineProperty(this, "audioSource", _descriptor7, this);

          _initializerDefineProperty(this, "winSoundNormalClip", _descriptor8, this);

          _initializerDefineProperty(this, "winSoundEpicClip", _descriptor9, this);

          _initializerDefineProperty(this, "winSoundEnd", _descriptor10, this);

          _initializerDefineProperty(this, "bigWinClips", _descriptor11, this);

          _initializerDefineProperty(this, "superWinClips", _descriptor12, this);

          _initializerDefineProperty(this, "megaWinClips", _descriptor13, this);

          _initializerDefineProperty(this, "epicWinClips", _descriptor14, this);

          this.currentWin = void 0;
        }

        onLoad() {
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.bgMask, this, 'onBGClick');
        }

        showSpecialWin(odds, totalBet, needShowEpic) {
          if (needShowEpic === void 0) {
            needShowEpic = false;
          }

          return new Promise((resolve, reject) => {
            var type = (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
              error: Error()
            }), WinType) : WinType).BigWin;

            if (odds >= 25 && odds <= 50) {
              type = (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
                error: Error()
              }), WinType) : WinType).BigWin;
            } else if (odds > 50 && odds <= 100) {
              type = (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
                error: Error()
              }), WinType) : WinType).SuperWin;
            } else if (odds > 100 && odds <= 200) {
              type = (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
                error: Error()
              }), WinType) : WinType).MegaWin;
            } else if (odds > 200) {
              if (needShowEpic) {
                type = (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
                  error: Error()
                }), WinType) : WinType).EpicWin;
              } else {
                type = (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
                  error: Error()
                }), WinType) : WinType).MegaWin;
              }
            } else {
              (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                error: Error()
              }), Debug) : Debug).LogError("\u932F\u8AA4\u500D\u6578 " + odds);
            }

            var totalScore = odds * totalBet;
            totalScore = totalScore.fixed();
            this.showWin(type, totalScore, resolve);
          });
        }

        showWin(type, score, onEnd) {
          if (onEnd === void 0) {
            onEnd = null;
          }

          var voiceType = WinScoreSound.Voice_BigWin;
          this.bgMask.setActive(true);
          var scoreRunDuration = 4.8;
          var idleLoopDuration = 2;
          var voiceClips = [];

          switch (type) {
            case (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
              error: Error()
            }), WinType) : WinType).EpicWin:
              this.currentWin = this.epicWin;
              voiceType = WinScoreSound.Voice_EpicWin;
              voiceClips = this.epicWinClips;
              break;

            case (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
              error: Error()
            }), WinType) : WinType).MegaWin:
              this.currentWin = this.megaWin;
              voiceType = WinScoreSound.Voice_MegaWin;
              voiceClips = this.megaWinClips;
              break;

            case (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
              error: Error()
            }), WinType) : WinType).SuperWin:
              this.currentWin = this.superWin;
              voiceType = WinScoreSound.Voice_SuperWin;
              voiceClips = this.superWinClips;
              break;

            case (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
              error: Error()
            }), WinType) : WinType).BigWin:
              this.currentWin = this.bigWin;
              voiceType = WinScoreSound.Voice_BigWin;
              voiceClips = this.bigWinClips;
              break;
          }

          if (type === (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
            error: Error()
          }), WinType) : WinType).EpicWin) {
            this.playSound(this.winSoundEpicClip);
          } else {
            this.playSound(this.winSoundNormalClip);
          }

          this.scheduleOnce(() => {
            this.playSoundOneShotRandom(voiceClips);
          }, 0.5);
          this.currentWin.setScoreLabel(this.scoreLabelNode);
          this.currentWin.showWin(score, scoreRunDuration, idleLoopDuration, this.onScoreRunEnd.bind(this), () => {
            this.bgMask.setActive(false);
            onEnd == null || onEnd();
          });
        }

        onScoreRunEnd(isClickEnd) {
          if (isClickEnd) {
            this.stopSound();
          }

          this.playSoundOneShot(this.winSoundEnd);
        }

        showWinPromise(type, score) {
          return new Promise((resolve, reject) => {
            this.showWin(type, score, resolve);
          });
        }

        onBGClick() {
          if (this.currentWin.node.active) {
            var _this$currentWin$onBG, _this$currentWin;

            (_this$currentWin$onBG = (_this$currentWin = this.currentWin).onBGClickCB) == null || _this$currentWin$onBG.call(_this$currentWin);
          }
        }

        playSoundRandom(audioClips) {
          if (this.audioSource) {
            var len = audioClips.length;
            var randomClip = audioClips[randomRangeInt(0, len)];
            this.playSound(randomClip);
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

        playSoundOneShotRandom(audioClips) {
          if (this.audioSource) {
            var len = audioClips.length;
            var randomClip = audioClips[randomRangeInt(0, len)];
            this.playSoundOneShot(randomClip);
          }
        }

        playSoundOneShot(audioClips) {
          if (this.audioSource) {
            this.audioSource.playOneShot(audioClips);
          }
        }

        stopSound() {
          if (this.audioSource) {
            this.audioSource.stop();
          }
        }

        Test() {
          this.showWinPromise((_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
            error: Error()
          }), WinType) : WinType).BigWin, 200000).then(() => {// console.log('end');
          });
        }

        onKeyDownOrPressing(event) {
          if (event.keyCode === KeyCode.SPACE) {
            if (this.bgMask.active) {
              this.onBGClick();
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "epicWin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "megaWin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "superWin", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bigWin", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabelNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bgMask", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "winSoundNormalClip", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "winSoundEpicClip", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "winSoundEnd", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "bigWinClips", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "superWinClips", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "megaWinClips", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "epicWinClips", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c1e9b1fed0f03b0bdd48ac0f4ac953f0a6a162a4.js.map
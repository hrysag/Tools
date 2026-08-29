System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioSource, Component, director, tween, warn, Debug, Utility, BindTarget, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _crd, ccclass, property, SOUND_TYPE, AudioManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../Utils/Debug", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../Utils/Utility", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioSource = _cc.AudioSource;
      Component = _cc.Component;
      director = _cc.director;
      tween = _cc.tween;
      warn = _cc.warn;
    }, function (_unresolved_2) {
      Debug = _unresolved_2.Debug;
    }, function (_unresolved_3) {
      Utility = _unresolved_3.Utility;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "22e4dpA/35PUZmob9/Oyg2N", "AudioManager", undefined);

      __checkObsolete__(['_decorator', 'AudioClip', 'AudioSource', 'Component', 'director', 'Node', 'Tween', 'tween', 'warn']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SOUND_TYPE", SOUND_TYPE = /*#__PURE__*/function (SOUND_TYPE) {
        SOUND_TYPE[SOUND_TYPE["NORMAL"] = 0] = "NORMAL";
        SOUND_TYPE[SOUND_TYPE["ONE_SHOT"] = 1] = "ONE_SHOT";
        return SOUND_TYPE;
      }({}));

      _export("AudioManager", AudioManager = (_dec = ccclass('AudioManager'), _dec2 = property(AudioSource), _dec3 = property(AudioSource), _dec4 = property(AudioSource), _dec5 = property([AudioSource]), _dec(_class = (_class2 = (_class3 = class AudioManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "musicAudioSource", _descriptor, this);

          _initializerDefineProperty(this, "music2AudioSource", _descriptor2, this);

          _initializerDefineProperty(this, "soundAudioSource", _descriptor3, this);

          _initializerDefineProperty(this, "soundAudioSources", _descriptor4, this);

          this.musicAudioClips = null;
          this.soundAudioClips = null;
          this.genericSoundAudioClips = null;
          this.fadeMusicTween = null;
          this.fadeMusic2Tween = null;
          this._isAudioEnable = true;
          this.musicVolume = 1;
          this.music2Volume = 1;
          this.activeOnsShotSoundCnt = 0;
          this.lastOneShotSoundClip = null;
        }

        static get instance() {
          if (this._instance === null) {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).LogError("AudioManager _instance 為空");
          }

          return this._instance;
        }

        onLoad() {
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log("AudioManager onLoad");

          if (!AudioManager._instance) {
            AudioManager._instance = this.node.getComponent(AudioManager);
          } else {
            this.node.destroy();
            return;
          }

          director.addPersistRootNode(this.node);
        }

        setGenericSoundAudioClips(clips) {
          this.genericSoundAudioClips = clips;
        }

        setMusicAudioClips(clips) {
          this.musicAudioClips = clips;
        }

        setSoundAudioClips(clips) {
          this.soundAudioClips = clips;
        }

        playGenericSound(id, type, isLoop, sourceID) {
          if (type === void 0) {
            type = SOUND_TYPE.ONE_SHOT;
          }

          if (isLoop === void 0) {
            isLoop = false;
          }

          if (sourceID === void 0) {
            sourceID = -1;
          }

          if (!this.genericSoundAudioClips) {
            return;
          }

          var targetSource = sourceID === -1 ? this.soundAudioSource : this.soundAudioSources[sourceID];
          var soundClip = this.genericSoundAudioClips[id];

          if (type === SOUND_TYPE.ONE_SHOT) {
            targetSource.playOneShot(soundClip);
          } else if (type === SOUND_TYPE.NORMAL) {
            targetSource.clip = soundClip;
            targetSource.loop = isLoop;
            targetSource.play();
          }
        }

        playSound(clipID, type, sourceID) {
          if (type === void 0) {
            type = SOUND_TYPE.ONE_SHOT;
          }

          if (sourceID === void 0) {
            sourceID = -1;
          }

          if (!this.soundAudioClips) {
            return;
          }

          var targetSource = sourceID === -1 ? this.soundAudioSource : this.soundAudioSources[sourceID];
          var soundClip = this.soundAudioClips[clipID];

          if (type === SOUND_TYPE.ONE_SHOT) {
            if (this.lastOneShotSoundClip !== soundClip) {
              this.activeOnsShotSoundCnt = 0;
            }

            var volume = 1 / Math.pow(3, this.activeOnsShotSoundCnt);
            targetSource.playOneShot(soundClip, volume);
            this.activeOnsShotSoundCnt++;
            this.scheduleOnce(() => {
              this.activeOnsShotSoundCnt--;

              if (this.activeOnsShotSoundCnt < 0) {
                this.activeOnsShotSoundCnt = 0;
              }
            }, 0.01);
            this.lastOneShotSoundClip = soundClip;
          } else if (type === SOUND_TYPE.NORMAL) {
            targetSource.loop = false;
            targetSource.clip = soundClip;
            targetSource.play();
          }
        }

        playSoundLoop(id, sourceID) {
          if (sourceID === void 0) {
            sourceID = -1;
          }

          if (!this.soundAudioClips) {
            return;
          }

          var targetSource = sourceID === -1 ? this.soundAudioSource : this.soundAudioSources[sourceID];
          targetSource.clip = this.soundAudioClips[id];
          targetSource.loop = true;
          targetSource.play();
        }

        stopSound(sourceID) {
          if (sourceID === void 0) {
            sourceID = [-1];
          }

          if (!this.soundAudioClips) {
            return;
          }

          for (var i = 0; i < sourceID.length; i++) {
            if (sourceID[i] === -1) {
              this.soundAudioSource.stop();
            } else {
              this.soundAudioSources[sourceID[i]].stop();
            }
          }
        }

        stopAllSound() {
          for (var i = 0; i < this.soundAudioSources.length; i++) {
            this.soundAudioSource.stop();
            this.soundAudioSources[i].stop();
          }
        }

        playSoundClip(clip, sourceID) {
          if (sourceID === void 0) {
            sourceID = -1;
          }

          var targetSource = sourceID === -1 ? this.soundAudioSource : this.soundAudioSources[sourceID];
          targetSource.playOneShot(clip);
        }

        playSoundRandom(ids, sourceID) {
          if (sourceID === void 0) {
            sourceID = -1;
          }

          if (!this.soundAudioClips) {
            return;
          }

          var targetSource = sourceID === -1 ? this.soundAudioSource : this.soundAudioSources[sourceID];
          var len = ids.length;
          var id = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).getRandomInt(len);
          targetSource.playOneShot(this.soundAudioClips[ids[id]]);
        } // playSoundConsecutively 專用 請勿隨意呼叫


        playSoundPromise(id, sourceID) {
          if (sourceID === void 0) {
            sourceID = -1;
          }

          var targetSource = sourceID === -1 ? this.soundAudioSource : this.soundAudioSources[sourceID];
          return new Promise((resolve, reject) => {
            targetSource.clip = this.soundAudioClips[id];
            targetSource.loop = false;
            targetSource.node.off(AudioSource.EventType.ENDED);
            targetSource.node.once(AudioSource.EventType.ENDED, () => {
              resolve == null || resolve(null);
            }, this);
            targetSource.play();
          });
        }

        playSoundConsecutively(ids, sourceID) {
          if (sourceID === void 0) {
            sourceID = -1;
          }

          if (!this.soundAudioClips) {
            return;
          }

          var len = ids.length;

          if (len <= 0) {
            return Promise.resolve();
          } else if (len === 1) {
            return this.playSoundPromise(ids[0], sourceID);
          } else {
            return this.playSoundPromise(ids[0], sourceID).then(() => {
              return this.playSoundConsecutively(ids.slice(1));
            });
          }
        } //#region Music


        stopFadeMusicTween() {
          if (this.fadeMusicTween) {
            this.fadeMusicTween.stop();
            this.fadeMusicTween = null;
            this.setMusicVolume(1);
          }
        }

        stopFadeMusic2Tween() {
          if (this.fadeMusic2Tween) {
            this.fadeMusic2Tween.stop();
            this.fadeMusic2Tween = null;
            this.setMusic2Volume(1);
          }
        }

        fadeMusicVolume(startVolume, targetVolume, duration, callback) {
          if (duration === void 0) {
            duration = 0.5;
          }

          if (callback === void 0) {
            callback = null;
          }

          this.stopFadeMusicTween();
          var target = new BindTarget();
          target.volume = startVolume;
          this.fadeMusicTween = tween(target).to(duration, {
            volume: targetVolume
          }, {
            onUpdate: (v, progress) => {
              this.setMusicVolume(v.volume);
            }
          }).call(() => {
            this.fadeMusicTween = null;
            callback == null || callback();
          }).start();
        }

        fadeMusic2Volume(startVolume, targetVolume, duration, callback) {
          if (duration === void 0) {
            duration = 0.5;
          }

          if (callback === void 0) {
            callback = null;
          }

          this.stopFadeMusic2Tween();
          var target = new BindTarget();
          target.volume = startVolume;
          this.fadeMusic2Tween = tween(target).to(duration, {
            volume: targetVolume
          }, {
            onUpdate: (v, progress) => {
              this.setMusic2Volume(v.volume);
            }
          }).call(() => {
            this.fadeMusic2Tween = null;
            callback == null || callback();
          }).start();
        }

        fadeMusicVolumePromise(startVolume, targetVolume, duration) {
          if (duration === void 0) {
            duration = 0.5;
          }

          return new Promise((resolve, reject) => {
            this.fadeMusicVolume(startVolume, targetVolume, duration, () => {
              resolve == null || resolve(null);
            });
          });
        }

        fadeMusic2VolumePromise(startVolume, targetVolume, duration) {
          if (duration === void 0) {
            duration = 0.5;
          }

          return new Promise((resolve, reject) => {
            this.fadeMusic2Volume(startVolume, targetVolume, duration, () => {
              resolve == null || resolve(null);
            });
          });
        }

        pauseMusic() {
          this.musicAudioSource.pause();
        }

        pauseMusic2() {
          this.music2AudioSource.pause();
        }

        playMusic(id) {
          this.stopFadeMusicTween();

          if (!this.musicAudioClips || !this.musicAudioClips[id]) {
            console.error("playMusic id error", id);
            return;
          }

          if (this.musicAudioSource.clip === this.musicAudioClips[id]) {
            warn("playMusic id is playing", id);
            return;
          }

          this.playMusicClip(this.musicAudioClips[id]);
        }

        playMusic2(id) {
          // this.stopFadeMusic2Tween();
          if (!this.musicAudioClips || !this.musicAudioClips[id]) {
            console.error("playMusic2 id error", id);
            return;
          }

          if (this.music2AudioSource.clip === this.musicAudioClips[id]) {
            warn("playMusic2 id is playing", id);
            return;
          }

          this.playMusic2Clip(this.musicAudioClips[id]);
        }

        resumeMusic() {
          this.musicAudioSource.play();
        }

        resume2Music() {
          this.music2AudioSource.play();
        }

        playMusicClip(clip) {
          this.musicAudioSource.stop();
          this.musicAudioSource.clip = clip;
          this.musicAudioSource.loop = true;
          this.musicAudioSource.play();
        }

        playMusic2Clip(clip) {
          this.music2AudioSource.stop();
          this.music2AudioSource.clip = clip;
          this.music2AudioSource.loop = true;
          this.music2AudioSource.play();
        }

        stopMusic() {
          this.musicAudioSource.stop();
          this.musicAudioSource.clip = null;
        }

        stopMusic2() {
          this.music2AudioSource.stop();
          this.music2AudioSource.clip = null;
        }

        playMusicOncePromise(id) {
          return new Promise((resolve, reject) => {
            this.musicAudioSource.stop();
            this.musicAudioSource.clip = this.musicAudioClips[id];
            this.musicAudioSource.loop = false;
            this.musicAudioSource.node.once(AudioSource.EventType.ENDED, () => {
              resolve == null || resolve(null);
            }, this);
            this.musicAudioSource.play();
          });
        }

        playMusic2OncePromise(id) {
          return new Promise((resolve, reject) => {
            this.music2AudioSource.stop();
            this.music2AudioSource.clip = this.musicAudioClips[id];
            this.music2AudioSource.loop = false;
            this.music2AudioSource.node.once(AudioSource.EventType.ENDED, () => {
              resolve == null || resolve(null);
            }, this);
            this.music2AudioSource.play();
          });
        }

        setAudioEnable(b) {
          var audioSources = director.getScene().getComponentsInChildren(AudioSource);
          this._isAudioEnable = b;

          for (var item of audioSources) {
            if (this._isAudioEnable) {
              item.volume = 1;
            } else {
              item.volume = 0;
            }
          } // 強制將音樂音量設為目標音量(因為音樂有可能因為fade效果不直接是1)


          if (this._isAudioEnable) {
            this.setMusicVolume(this.musicVolume);
            this.setMusic2Volume(this.music2Volume);
          }
        }

        setMusicVolume(volume) {
          this.musicVolume = volume;

          if (!this._isAudioEnable) {
            return;
          }

          this.musicAudioSource.volume = volume;
        }

        setMusic2Volume(volume) {
          this.music2Volume = volume;

          if (!this._isAudioEnable) {
            return;
          }

          if (!this.music2AudioSource) {
            return;
          }

          this.music2AudioSource.volume = volume;
        }

        getMusicVolume() {
          return this.musicVolume;
        }

        getMusic2Volume() {
          return this.music2Volume;
        }

        isAudioEnable() {
          return this._isAudioEnable;
        } //#endregion


      }, _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "musicAudioSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "music2AudioSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "soundAudioSource", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "soundAudioSources", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      BindTarget = class BindTarget {
        constructor() {
          this.volume = 1;
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=22b145ffc25cbf906be1a842990667e39605c6e8.js.map
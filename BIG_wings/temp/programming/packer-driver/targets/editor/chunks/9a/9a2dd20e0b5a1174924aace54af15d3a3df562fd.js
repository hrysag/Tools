System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, _decorator, AudioMgr, _dec, _class, _descriptor, _class2, _crd, property, AudioUnitEvent, AudioState, AudioType, AudioUnit;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIPlayConfig(extras) {
    _reporterNs.report("IPlayConfig", "./IPlayConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "./AudioMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AudioMgr = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d0e4923yx9D76UK5ZxaoHmL", "AudioUnit", undefined);

      __checkObsolete__(['AudioClip', '_decorator', 'Enum', 'AudioSource']);

      ({
        property
      } = _decorator);

      AudioUnitEvent = /*#__PURE__*/function (AudioUnitEvent) {
        AudioUnitEvent["Init"] = "init";
        AudioUnitEvent["Play"] = "play";
        AudioUnitEvent["Pause"] = "pause";
        AudioUnitEvent["Resume"] = "resume";
        AudioUnitEvent["Stop"] = "stop";
        AudioUnitEvent["End"] = "end";
        return AudioUnitEvent;
      }(AudioUnitEvent || {});

      AudioState = /*#__PURE__*/function (AudioState) {
        AudioState[AudioState["Stop"] = 1] = "Stop";
        AudioState[AudioState["Pause"] = 2] = "Pause";
        AudioState[AudioState["Play"] = 4] = "Play";
        return AudioState;
      }(AudioState || {});

      AudioType = /*#__PURE__*/function (AudioType) {
        AudioType[AudioType["Effect"] = -99] = "Effect";
        AudioType[AudioType["Music"] = -98] = "Music";
        return AudioType;
      }(AudioType || {});

      AudioUnit = (_dec = property({
        displayName: "AudioClip",
        type: AudioClip
      }), (_class = (_class2 = class AudioUnit {
        constructor() {
          _initializerDefineProperty(this, "clip", _descriptor, this);

          this.state = AudioState.Stop;
          this.type = AudioType.Effect;
          this.usePlay = true;
          this._event = null;
          this._init = false;
          this._audioSource = null;
          this._volume = 1;
          this._loop = false;
          this._currentTime = 0;
          this.groups = [];
        }

        get event() {
          var _this$_event;

          return (_this$_event = this._event) != null ? _this$_event : this._event = new EventTarget();
        }

        get init() {
          return this._init;
        }

        get audioSource() {
          return this._audioSource;
        }

        get volume() {
          return this._volume;
        }

        get loop() {
          return this._loop;
        }

        get currentTime() {
          if (this.audioSource) {
            this._currentTime = this.audioSource.currentTime;
          }

          return this._currentTime;
        }

        get totalTime() {
          return this.audioSource ? this.audioSource.duration : 0;
        }

        set init(value) {
          this.setInit(value);
        }

        set audioSource(value) {
          this.setAudioSource(value);
        }

        set volume(value) {
          this.set_volume(value);
        }

        set loop(value) {
          this.set_loop(value);
        }

        set currentTime(value) {
          this.set_currentTime(value);
        }

        setAudioSource(audioSource) {
          this._audioSource = audioSource;

          if (audioSource) {
            this.volume = this._volume;
            this.loop = this._loop;
            this.currentTime = this._currentTime;
          }
        }

        setInit(value) {
          this._init = value;

          if (value) {
            this.event.dispatchEvent(new Event(AudioUnit.EventType.Init));
          }
        }

        set_volume(value) {
          // volume value limit to 0~1
          if (value < 0) value = 0;
          if (value > 1) value = 1;
          console.log('set_volume', value);
          this._volume = value;

          if (this.audioSource) {
            this.audioSource.volume = value;
          }
        }

        set_loop(value) {
          this._loop = value;

          if (this.audioSource) {
            this.audioSource.loop = value;
          }
        }

        set_currentTime(value) {
          this._currentTime = value;

          if (this.audioSource) {
            this.audioSource.currentTime = value;
          }
        }

        clone(name) {
          const audio = new AudioUnit();
          audio.clip = this.clip;
          audio.usePlay = this.usePlay;
          audio.volume = this.volume;
          audio.loop = this.loop;
          audio.currentTime = this.currentTime;
          audio.type = this.type;
          audio.groups = this.groups;
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).setAudioUnit(audio, name);
          return audio;
        }

      }, _class2.EventType = AudioUnitEvent, _class2.State = AudioState, _class2.Type = AudioType, _class2), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "clip", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class));

      _export("default", AudioUnit);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9a2dd20e0b5a1174924aace54af15d3a3df562fd.js.map
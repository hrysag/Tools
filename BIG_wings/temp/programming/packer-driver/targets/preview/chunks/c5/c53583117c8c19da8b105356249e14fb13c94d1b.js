System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "cc/env"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, InstanceBase, AudioUnit, director, log, Director, Node, assetManager, AudioClip, AudioSource, error, warn, debug, ObjectPool, EDITOR, AudioMgr, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfInstanceBase(extras) {
    _reporterNs.report("InstanceBase", "../InstanceBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioUnit(extras) {
    _reporterNs.report("AudioUnit", "./AudioUnit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayConfig(extras) {
    _reporterNs.report("IPlayConfig", "./IPlayConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectPool(extras) {
    _reporterNs.report("ObjectPool", "../ObjectPool", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      log = _cc.log;
      Director = _cc.Director;
      Node = _cc.Node;
      assetManager = _cc.assetManager;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      error = _cc.error;
      warn = _cc.warn;
      debug = _cc.debug;
    }, function (_unresolved_2) {
      InstanceBase = _unresolved_2.default;
    }, function (_unresolved_3) {
      AudioUnit = _unresolved_3.default;
    }, function (_unresolved_4) {
      ObjectPool = _unresolved_4.ObjectPool;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1f019O/6jpHnr4GHx+3K7mv", "AudioMgr", undefined);

      __checkObsolete__(['director', 'log', 'Director', 'Node', 'assetManager', 'AssetManager', 'AudioClip', 'AudioSource', 'error', 'warn', 'debug']);

      AudioMgr = class AudioMgr extends (_crd && InstanceBase === void 0 ? (_reportPossibleCrUseOfInstanceBase({
        error: Error()
      }), InstanceBase) : InstanceBase) {
        constructor() {
          super();
          this._audio_node = void 0;
          this._audioSourcePool = void 0;

          /**
           * audioSource uuid as key , map to audioUnit
           */
          this._audioUnitMap = new Map();
          this._unitNameMap = new Map();
          this._currentPlayingCount = 0;
          this._timer_set = new Set();
          this.bundleMap = new Map();
          this._mute = false;
          this._musicMute = false;
          log("AudioMgr constructor");
          this.init();
        }

        initSourcePool() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var _this$_audioSourcePoo;

            (_this$_audioSourcePoo = _this._audioSourcePool) == null ? void 0 : _this$_audioSourcePoo.clear();
            _this._audioSourcePool = new (_crd && ObjectPool === void 0 ? (_reportPossibleCrUseOfObjectPool({
              error: Error()
            }), ObjectPool) : ObjectPool)({
              create: () => {
                var audioSource = new AudioSource();
                audioSource.node = _this._audio_node;
                return audioSource;
              },
              clear: ary_audioSource => {
                ary_audioSource.forEach(audioSource => {
                  audioSource.destroy();
                });
              },
              reset: audioSource => {
                audioSource.playOnAwake = false;

                _this._audioUnitMap.delete(audioSource.uuid);

                return audioSource;
              },
              initFillCount: AudioSource.maxAudioChannel >> 1,
              maxHoldCount: AudioSource.maxAudioChannel
            });
          })();
        }

        init() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var _this2$_audio_node;

            if (EDITOR) return;
            log("AudioMgr init MaxAudioChannel: " + AudioSource.maxAudioChannel);
            var scene = director.getScene();

            if (!scene) {
              log("AudioMgr init: scene is not loaded, wait for scene loaded"); //if scene is not loaded, wait for scene loaded

              yield new Promise(resolve => director.once(Director.EVENT_AFTER_SCENE_LAUNCH, resolve));
              log("AudioMgr init: scene is loaded");
              scene = director.getScene();
            }

            (_this2$_audio_node = _this2._audio_node) == null ? void 0 : _this2$_audio_node.destroy();
            _this2._audio_node = new Node('audio');
            log("[AudioMgr init] create audio node", _this2._audio_node.uuid);
            scene.addChild(_this2._audio_node);
            director.addPersistRootNode(_this2._audio_node); //使用一個 persist node 來管理所有的 audioSource

            yield _this2.initSourcePool(); //----- bind audio source event

            _this2._audio_node.on(AudioSource.EventType.STARTED, audioSource => {
              var audioUnit = _this2._audioUnitMap.get(audioSource.uuid);

              if (audioUnit) {
                _this2._node_audio_started(audioUnit);
              }
            }, _this2);

            _this2._audio_node.on(AudioSource.EventType.ENDED, audioSource => {
              var audioUnit = _this2._audioUnitMap.get(audioSource.uuid);

              if (audioUnit) {
                _this2._node_audio_ended(audioUnit);
              }
            }, _this2); //-----

          })();
        }

        addBundle(bundle) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (typeof bundle === 'string') {
              var bundleName = bundle;

              if (!_this3.bundleMap.has(bundleName)) {
                bundle = assetManager.getBundle(bundleName);

                if (!bundle) {
                  bundle = yield new Promise((resolve, reject) => {
                    assetManager.loadBundle(bundleName, (err, bundle) => err ? reject(err) : resolve(bundle));
                  });

                  _this3.bundleMap.set(bundleName, bundle);
                }
              } else {
                return;
              }
            }

            log("[AudioMgr addBundle] bundle:", bundle);
            var clips = yield new Promise((resolve, reject) => {
              bundle.loadDir('', AudioClip, (err, clips) => err ? reject(err) : resolve(clips));
            });
            log("[AudioMgr addBundle] clips:", clips);
            var units = clips.map(clip => {
              var unit = _this3.getAudioUnit(clip);

              log("[AudioMgr addBundle] add audio unit", unit, clip.name);

              _this3.setAudioUnit(unit);

              return unit;
            });
            return units;
          })();
        }

        setAudioUnit(audio, name) {
          if (typeof name == 'undefined') name = audio.clip.name;

          if (this._unitNameMap.has(name)) {
            throw new Error("[AudioMgr setAudioUnit] audio unit name " + name + " is duplicated");
          }

          this._unitNameMap.set(name, audio);
        }

        getUnitByName(name) {
          return this._unitNameMap.get(name);
        }

        play(audio, config) {
          var unit = typeof audio === 'string' ? this.getUnitByName(audio) : audio;
          log("[AudioMgr play] audio unit", unit, this._unitNameMap);

          if (!unit) {
            warn("[AudioMgr play] audio unit not found", audio);
            return;
          }

          Object.assign(unit, config);

          this._play(unit);
        }

        addAudio(path, bundle) {
          return _asyncToGenerator(function* () {
            if (bundle === void 0) {
              bundle = 'resources';
            }

            log("[AudioMgr addAudio] path: " + path + ", bundle: " + bundle);

            if (typeof bundle === 'string') {
              var bundleName = bundle;
              bundle = assetManager.getBundle(bundleName);
              log("[AudioMgr addAudio] get bundle", bundle);

              if (!bundle) {
                log("[AudioMgr addAudio] bundle not found, load bundle", bundle);
                bundle = yield new Promise((resolve, reject) => {
                  assetManager.loadBundle(bundleName, (err, bundle) => {
                    if (err) {
                      error("[AudioMgr addAudio] load bundle error", err);
                      reject(err);
                    } else {
                      resolve(bundle);
                    }
                  });
                });
                log("[AudioMgr addAudio] bundle loaded", bundle);
              }
            }

            var clip = yield new Promise((resolve, reject) => {
              bundle.load(path, AudioClip, (err, clip) => err ? reject(err) : resolve(clip));
            });
            log("[AudioMgr addAudio] clip loaded", clip);
          })();
        }

        _play(audio) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var last_state = audio.state;

            if (last_state == (_crd && AudioUnit === void 0 ? (_reportPossibleCrUseOfAudioUnit({
              error: Error()
            }), AudioUnit) : AudioUnit).State.Pause) {
              var _audio$event;

              (_audio$event = audio.event) == null ? void 0 : _audio$event.dispatchEvent(new Event((_crd && AudioUnit === void 0 ? (_reportPossibleCrUseOfAudioUnit({
                error: Error()
              }), AudioUnit) : AudioUnit).EventType.Resume));
            }

            audio.state = (_crd && AudioUnit === void 0 ? (_reportPossibleCrUseOfAudioUnit({
              error: Error()
            }), AudioUnit) : AudioUnit).State.Play;

            if (last_state == (_crd && AudioUnit === void 0 ? (_reportPossibleCrUseOfAudioUnit({
              error: Error()
            }), AudioUnit) : AudioUnit).State.Stop) {
              ++_this4._currentPlayingCount;
              log("[AudioMgr] \u76EE\u524D\u64AD\u653E\u6578\u91CF: " + _this4._currentPlayingCount + " play"); //取得 audioSource

              var source = yield _this4._audioSourcePool.get(); //setup audioSource

              audio.audioSource = source; //bind clio to audioSource

              source.clip = audio.clip;

              _this4._audioUnitMap.set(source.uuid, audio);
            }

            if (audio.usePlay) {
              if (last_state === (_crd && AudioUnit === void 0 ? (_reportPossibleCrUseOfAudioUnit({
                error: Error()
              }), AudioUnit) : AudioUnit).State.Stop && _this4._currentPlayingCount > AudioSource.maxAudioChannel) {
                warn("[AudioMgr] \u76EE\u524D\u64AD\u653E\u6578\u91CF: " + _this4._currentPlayingCount + " \u8D85\u904E\u6700\u5927\u64AD\u653E\u6578\u91CF\u9650\u5236");

                _this4.stop(audio);

                return;
              }

              audio.audioSource.play();
            } else {
              log("[AudioMgr] playOneShot", audio);
              audio.audioSource.playOneShot(audio.clip);

              _this4._node_audio_started(audio);

              var timer = setTimeout(() => {
                _this4._timer_set.delete(timer);

                _this4._node_audio_ended(audio);

                if (audio.loop) {
                  _this4.play(audio);
                }
              }, audio.totalTime * 1000);

              _this4._timer_set.add(timer);
            }
          })();
        }

        stop(audio) {
          var unit = typeof audio === 'string' ? this.getUnitByName(audio) : audio;
          if (!unit) return;
          if (unit.state === (_crd && AudioUnit === void 0 ? (_reportPossibleCrUseOfAudioUnit({
            error: Error()
          }), AudioUnit) : AudioUnit).State.Stop) return;
          --this._currentPlayingCount;
          debug("[AudioMgr] \u76EE\u524D\u64AD\u653E\u6578\u91CF: " + this._currentPlayingCount + " stop");
          unit.state = (_crd && AudioUnit === void 0 ? (_reportPossibleCrUseOfAudioUnit({
            error: Error()
          }), AudioUnit) : AudioUnit).State.Stop;
          unit.audioSource.stop();
          unit.event.dispatchEvent(new Event((_crd && AudioUnit === void 0 ? (_reportPossibleCrUseOfAudioUnit({
            error: Error()
          }), AudioUnit) : AudioUnit).EventType.Stop)); //回收 audioSource

          this._audioSourcePool.put(unit.audioSource);

          unit.audioSource = null; //重置進度

          unit.currentTime = 0;
        }

        getAudioUnit(clip) {
          var audioUnit = new (_crd && AudioUnit === void 0 ? (_reportPossibleCrUseOfAudioUnit({
            error: Error()
          }), AudioUnit) : AudioUnit)();
          audioUnit.clip = clip;
          return audioUnit;
        }

        _node_audio_started(audio) {
          log("[AudioMgr] audio started");
          if (!audio) return;
          audio.event.dispatchEvent(new Event((_crd && AudioUnit === void 0 ? (_reportPossibleCrUseOfAudioUnit({
            error: Error()
          }), AudioUnit) : AudioUnit).EventType.Play));
        }

        _node_audio_ended(audio) {
          if (!audio) return;

          if (audio.state !== (_crd && AudioUnit === void 0 ? (_reportPossibleCrUseOfAudioUnit({
            error: Error()
          }), AudioUnit) : AudioUnit).State.Stop) {
            var _audio$event2;

            --this._currentPlayingCount;
            log("[AudioMgr] \u76EE\u524D\u64AD\u653E\u6578\u91CF: " + this._currentPlayingCount + " ended");
            audio.state = (_crd && AudioUnit === void 0 ? (_reportPossibleCrUseOfAudioUnit({
              error: Error()
            }), AudioUnit) : AudioUnit).State.Stop;
            (_audio$event2 = audio.event) == null ? void 0 : _audio$event2.dispatchEvent(new Event((_crd && AudioUnit === void 0 ? (_reportPossibleCrUseOfAudioUnit({
              error: Error()
            }), AudioUnit) : AudioUnit).EventType.End)); //回收 audioSource

            this._audioSourcePool.put(audio.audioSource);

            audio.audioSource = null;
            audio.currentTime = 0;
          }
        }

        get isMute() {
          return this._mute;
        }

        get isMusicMute() {
          return this._musicMute;
        }

        toggleMute() {
          this._mute = !this._mute;
          this.checkMute();
        }

        toggleMusicMute() {
          if (!this._mute) return;
          this._musicMute = !this._musicMute;
          this.checkMute();
        }

        checkMute() {
          if (this._mute) {
            this._audio_node.active = false;
          } else {
            this._audio_node.active = true;

            this._audioUnitMap.forEach(audioUnit => {
              if (audioUnit.type == (_crd && AudioUnit === void 0 ? (_reportPossibleCrUseOfAudioUnit({
                error: Error()
              }), AudioUnit) : AudioUnit).Type.Music) {
                audioUnit.volume = this._musicMute ? 0 : 1;
              }
            });
          }
        }

      };

      _export("default", AudioMgr.instance());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c53583117c8c19da8b105356249e14fb13c94d1b.js.map
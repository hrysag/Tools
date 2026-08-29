System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, director, BasicSound, log, SoundsManager, _crd;

  function _reportPossibleCrUseOfBasicSound(extras) {
    _reporterNs.report("BasicSound", "./BasicSound", _context.meta, extras);
  }

  _export("SoundsManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      director = _cc.director;
      log = _cc.log;
    }, function (_unresolved_2) {
      BasicSound = _unresolved_2.BasicSound;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d0146nHOQ9JqaXbBW31LzeS", "SoundsManager", undefined);

      /**
       * Created by EricHuang on 2023/12/14.
       */
      __checkObsolete__(['AudioClip']);

      __checkObsolete__(['Node']);

      __checkObsolete__(['director']);

      __checkObsolete__(['log']);

      _export("SoundsManager", SoundsManager = class SoundsManager {
        static getInstance() {
          return SoundsManager._instance ? SoundsManager._instance : new SoundsManager();
        }

        constructor() {
          this._mapSounds = void 0;
          this._mapAudioClips = void 0;
          this._bgSoundList = void 0;
          this._bgSound = void 0;
          this._bgVolume = void 0;
          this._isMute = false;
          this._isBgMute = false;

          if (SoundsManager._instance != null) {
            throw new Error('plz use getInstance()');
          }

          SoundsManager._instance = this;
          this._mapSounds = {};
          this._mapAudioClips = {};
          this._bgSoundList = [];
          this._bgSound = [];
          this._bgVolume = 1;
          log('check_init_constructor_SoundMgr'); //--test----
          //--看起來那個node必須存在且持久,一旦node.active=false該AudioSource即失效

          /*
          let testAudioSource=this.addComponent(BasicSound);
          
          testAudioSource.clip=LoadingResManager.getInstance().getAudio('sounds/BGM01');
          
          
          testAudioSource.play();
           window.setInterval(()=>{
              log(testAudioSource.isPlayingOfSound);
          },1000)
          */
        }

        addAudioClip(id, clip) {
          if (!this._mapAudioClips[id] && clip) {
            this._mapAudioClips[id] = clip;
          }
        }

        addSound(id, sound) {
          if (!this._mapSounds[id]) {
            this._mapSounds[id] = sound;
          }
        }

        createSound(soundId, clipId) {
          if (!this._mapSounds[soundId]) {
            if (this._mapAudioClips[clipId]) {
              var audioNode = new Node(soundId);
              var audio = audioNode.addComponent(_crd && BasicSound === void 0 ? (_reportPossibleCrUseOfBasicSound({
                error: Error()
              }), BasicSound) : BasicSound);
              audio.id = soundId;
              audio.clip = this._mapAudioClips[clipId];
              director.addPersistRootNode(audioNode);
              this._mapSounds[soundId] = audio;
            }
          }
        }

        getSound(id) {
          return this._mapSounds[id];
        }

        play(id, loop) {
          //if(this._mapSounds[id] && !this._isMute)
          //--因為mute他只是將Volume去改為0--20240311
          if (this._mapSounds[id]) {
            this._mapSounds[id].playSound(loop);

            if (this._isMute) {
              this._mapSounds[id].volume = 0;
            } else {
              this._mapSounds[id].volume = 1;
            }
          }
        }

        isPlaying(id) {
          var b = null;

          if (this._mapSounds[id]) {
            b = this._mapSounds[id].isPlayingOfSound;
          }

          return b;
        }

        stop(id) {
          if (this._mapSounds[id]) {
            this._mapSounds[id].stopSound();
          }
        }

        stopAll() {
          for (var i in this._mapSounds) {
            this._mapSounds[i].stopSound();
          }
        }

        setVolume(id, vol) {
          var s = this.getSound(id);

          if (s) {
            //log("setting sounds");
            //log(s);
            s.volume = vol;
          }
        }

        muteSingle(id) {
          var s = this.getSound(id);

          if (s) {
            //log("setting sounds");
            //log(s);
            s.stop();
          }
        }

        mute() {
          this._isMute = !this._isMute;

          if (this._isMute) {
            this.setAllVolume(0);
          } else {
            this.setAllVolume(1);
            this.checkBGMusic();
          } //this.stop(id);

        }

        bgMute() {
          this._isBgMute = !this._isBgMute;
          this.checkBGMusic();
        }

        setBgVolume(value) {
          this._bgVolume = value;
          this.checkBGMusic();
        }

        setAllVolume(vol) {
          for (var i in this._mapSounds) {
            this._mapSounds[i].volume = vol;
          }
        }

        pause(id) {
          if (this._mapSounds[id]) {
            this._mapSounds[id].pauseSound();
          }
        }

        setBgSoundList(list) {
          this._bgSoundList = list;
          this._bgSound = []; //--根本沒用到

          for (var i of list) {
            var s = this.getSound(i);

            if (s) {
              this._bgSound.push(s);
            }
          }
        }

        playBGMusic(sound) {
          if (!~this._bgSoundList.indexOf(sound)) {
            log('[SoundController] can not find name : ' + sound + ' in list');
            return;
          }

          var len = this._bgSoundList.length;

          for (var i = 0; i < len; i++) {
            this.stop(this._bgSoundList[i]);
          }

          this.play(sound, true);
        }

        checkBGMusic() {
          if (!this._isMute && !this._isBgMute) {
            for (var i = 0; i < this._bgSound.length; i++) {
              var sound = this._bgSound[i];

              if (sound) {
                sound.volume = this._bgVolume;
              }
            }
          } else if (this._isMute || this._isBgMute) {
            for (var _i = 0; _i < this._bgSound.length; _i++) {
              var _sound = this._bgSound[_i];
              if (_sound) _sound.volume = 0;
            }
          }
        }

      });

      SoundsManager._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f9adb8203ffa3db2565690defadbf4f2c8db5189.js.map
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioSource, BasicSound, _crd;

  _export("BasicSound", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioSource = _cc.AudioSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cd4d1uDABRC47edqyxB+Zyl", "BasicSound", undefined);
      /**
       * Created by EricHuang on 2023/12/14.
       */


      __checkObsolete__(['AudioClip', 'AudioSource']);

      _export("BasicSound", BasicSound = class BasicSound extends AudioSource {
        /*
        set playingAudioClip(value:AudioClip)
        {
            this._playingAudioClip=value;
        }
         get playingAudioClip():AudioClip
        {
            return this._playingAudioClip;
        }*/
        get isPlayingOfSound() {
          var isplay = false;

          if (this.currentTime != 0) {
            isplay = true;
          }

          this._isPlayingOfSound = isplay;
          return isplay;
        }

        constructor() {
          super();
          this.id = "";
          this.isloop = false;
          this.mute = false;
          this.auto = false;
          this.isPause = false;
          this.statesOfBasicSound = void 0;
          //private _playingAudioClip:AudioClip;
          this._isPlayingOfSound = void 0;
          this.statesOfBasicSound = BasicSound.STOP_MODE;
          this._isPlayingOfSound = false;
        }

        onLoad() {
          this.playOnAwake = false; //--關閉自動播放
        }

        playSound(loop) {
          if (loop != undefined) {
            this.isloop = loop;
            this.loop = this.isloop;
          }

          if (!this.clip) {
            return;
          }

          this.volume = 1; //--沒有gain!!!?????應該被封裝住了

          this.isPause = false;
          this._isPlayingOfSound = true;
          this.statesOfBasicSound = BasicSound.PLAY_MODE;
          this.play();
        }

        stopSound() {
          this.stop();
          this._isPlayingOfSound = false;
          this.statesOfBasicSound = BasicSound.STOP_MODE;
        }

        pauseSound() {
          this.pause();
          this.isPause = true;
          this.statesOfBasicSound = BasicSound.PAUSE_MODE;
        }

      });

      BasicSound.PLAY_MODE = "play_mode";
      BasicSound.STOP_MODE = "stop_mode";
      BasicSound.PAUSE_MODE = "pause_mode";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=09ba149e57d95b4d44b874bcf0946ae43afe2f1c.js.map
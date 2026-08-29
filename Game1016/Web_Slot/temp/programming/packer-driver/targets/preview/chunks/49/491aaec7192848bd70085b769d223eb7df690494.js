System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, MusicList, GameState, AudioManager, GameBGSoundCtrl1016, _crd, ccclass, property;

  function _reportPossibleCrUseOfIGameMode(extras) {
    _reporterNs.report("IGameMode", "../MyUtils/BasicGameViewManager/IBasicGameModeManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicList(extras) {
    _reporterNs.report("MusicList", "../DefinitionGameData1016/SoundList1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  _export("GameBGSoundCtrl1016", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      MusicList = _unresolved_2.MusicList;
    }, function (_unresolved_3) {
      GameState = _unresolved_3.GameState;
    }, function (_unresolved_4) {
      AudioManager = _unresolved_4.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7c399ILVVpBPaVNvp+aMMRP", "GameBGSoundCtrl1016", undefined);

      __checkObsolete__(['_decorator', 'AudioSource']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameBGSoundCtrl1016", GameBGSoundCtrl1016 = class GameBGSoundCtrl1016 {
        constructor() {
          this._musicAudioSource = null;
          //--播放的背景音樂
          this._afterLoadingFlag = false;
          //--第一次的背景音樂播放會在loading的時候就運作了
          this._isPauseBGM = false;
          //---原本的設計真的是......

          /**
           * 有關_isPlayNG_BGM的說明
           * 20260126在預設loading頁面就會播放.
           * 避免玩家在沒有RS的情況下直接進入FG導致因為_isPlayNG_BGM=false
           * 而無法關閉聲音
           */
          this._isPlayNG_BGM = true;
          this._isPlayRS_BGM = false;
          this._isPlayFG_BGM = false;
        }

        set afterLoadingFlag(value) {
          this._afterLoadingFlag = value;
        } //--可以刪了


        set musicAudioSource(value) {
          this._musicAudioSource = value;
        } // Implement specific logic for changing game state


        changeGameState(value) {
          if (value == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL && !this._afterLoadingFlag) {
            this._afterLoadingFlag = true;
            return;
          }

          switch (value) {
            case (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).NORMAL:
              this.processPlayNgMusic1();
              break;

            case (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).RE_SPINE:
              this.processPlayMusicToRs((_crd && MusicList === void 0 ? (_reportPossibleCrUseOfMusicList({
                error: Error()
              }), MusicList) : MusicList).RespinBgm, value);
              break;

            case (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME:
              this.processPlayMusicToFG((_crd && MusicList === void 0 ? (_reportPossibleCrUseOfMusicList({
                error: Error()
              }), MusicList) : MusicList).FgBgm, value);
              break;
          }
        } //--企劃要求以百分比來改變音量--

        /**
         * 將百分比數值轉換為 0-1 的浮點數
         * @param percent 百分比 (0-100)
         * 
         */


        setMusicVolume(percent) {
          //--確保在0-100之間
          var safePercent = Math.max(0, Math.min(100, percent));
          var volume = safePercent / 100;

          if (this._isPlayFG_BGM || this._isPlayRS_BGM) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.setMusic2Volume(volume);
          } else if (this._isPlayNG_BGM) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.setMusicVolume(volume);
          }
        } //--這只有離開FG會call


        fadeOutFGWithBGM() {
          if (this._isPlayFG_BGM) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.fadeMusic2Volume(1, 0, 0.5, () => {
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.stopMusic2();
            });
            this._isPlayFG_BGM = false;
          }

          return;
        } //--這只有進FG會call


        fadeOutNGorRSWithBGM() {
          if (this._isPlayRS_BGM) {
            this._isPlayRS_BGM = false;
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.fadeMusic2Volume(1, 0, 0.5, () => {
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.stopMusic2();
            });
          }

          if (this._isPlayNG_BGM) {
            this._isPlayNG_BGM = false;
            this._isPauseBGM = false;
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.fadeMusicVolume(1, 0, 0.5, () => {
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.stopMusic();
            });
          }

          return;
        }

        processPlayNgMusic1() {
          if (this._isPlayRS_BGM || this._isPlayFG_BGM) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.fadeMusic2Volume(1, 0, 0.5, () => {
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.stopMusic2();
            });
            this._isPlayRS_BGM = false;
            this._isPlayFG_BGM = false;
          }

          if (this._isPauseBGM) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.resumeMusic();
            this._isPauseBGM = false;
          } else {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playMusic((_crd && MusicList === void 0 ? (_reportPossibleCrUseOfMusicList({
              error: Error()
            }), MusicList) : MusicList).ngBgm);
          }

          this._isPlayNG_BGM = true;
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.fadeMusicVolume(0, 1, 0.5);
        }

        processPlayMusicToRs(id, gs) {
          if (gs == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE) {
            this._isPlayNG_BGM = false;
            this._isPlayRS_BGM = true; //-musicAudioSource
            //if (this._musicAudioSource.clip != null) {

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.fadeMusicVolume(1, 0, 0.5, () => {
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.pauseMusic();
              this._isPauseBGM = true;
            }); //}
          }

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playMusic2(id); //--用第2個去播

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.fadeMusic2Volume(0, 1, 0.5);
        }

        processPlayMusicToFG(id, gs) {
          if (this._isPlayNG_BGM) {
            this._isPlayNG_BGM = false;
            this._isPauseBGM = false;
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.fadeMusicVolume(1, 0, 0.5, () => {
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.stopMusic();
            });
          }

          if (gs == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            this._isPlayFG_BGM = true;
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playMusic2(id);
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.fadeMusic2Volume(0, 1, 0.5);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=491aaec7192848bd70085b769d223eb7df690494.js.map
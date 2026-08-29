System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, game, Game, Debug, GenericUIManager, NewFlashModeEnum, GameTimeScale, _crd;

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "./Debug", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIManager(extras) {
    _reporterNs.report("GenericUIManager", "../../GenericUI/Scripts/GenericUIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNewFlashModeEnum(extras) {
    _reporterNs.report("NewFlashModeEnum", "../../GenericUI/Scripts/MainUI", _context.meta, extras);
  }

  _export("GameTimeScale", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      game = _cc.game;
      Game = _cc.Game;
    }, function (_unresolved_2) {
      Debug = _unresolved_2.Debug;
    }, function (_unresolved_3) {
      GenericUIManager = _unresolved_3.GenericUIManager;
    }, function (_unresolved_4) {
      NewFlashModeEnum = _unresolved_4.NewFlashModeEnum;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d6bceaWdBpMMJQKMgYAIdu3", "GameTimeScale", undefined);

      __checkObsolete__(['game', 'Game']);

      _export("GameTimeScale", GameTimeScale = class GameTimeScale {
        static get timeScale() {
          return this._timeScale;
        }

        static set maxSpeedMultiplier(value) {
          this._maxSpeedMultiplier = value;
        }

        static set timeScale(value) {
          var _this$onTimeScaleChan;

          if (value < 0.1 || value > 10) {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).LogError("setGameTimeScale error: scale must be between 0.1 and 10");
            return;
          }

          this._timeScale = value;
          (_this$onTimeScaleChan = this.onTimeScaleChangeCallback) == null || _this$onTimeScaleChan.call(this._timeScale);
        }

        static forceResetTimeScaleStart() {
          this.timeScale = 1;
        }

        static forceResetTimeScaleEnd() {
          if ((_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance === null) {
            return;
          }

          if ((_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.getCurrentTurboMode() === (_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
            error: Error()
          }), NewFlashModeEnum) : NewFlashModeEnum).NewFlash2) {
            GameTimeScale.timeScale = this._maxSpeedMultiplier;
          } else {
            GameTimeScale.timeScale = 1;
          }
        }

      }); //@ts-ignore


      GameTimeScale.onTimeScaleChangeCallback = null;
      GameTimeScale._timeScale = 1;
      GameTimeScale._maxSpeedMultiplier = 1;

      game._calculateDT = function (useFixedDeltaTime) {
        //@ts-ignore
        this._useFixedDeltaTime = useFixedDeltaTime;

        if (useFixedDeltaTime) {
          //@ts-ignore
          this._startTime = performance.now();
          return this.frameTime / 1000;
        }

        var now = performance.now(); //@ts-ignore

        this._deltaTime = now > this._startTime ? (now - this._startTime) / 1000 : 0; //@ts-ignore

        if (this._deltaTime > Game.DEBUG_DT_THRESHOLD) {
          //@ts-ignore
          this._deltaTime = this.frameTime / 1000;
        } //@ts-ignore


        this._startTime = now; //@ts-ignore

        return this._deltaTime * GameTimeScale.timeScale;
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b584af88fca81564ec12199f2c409330da92319e.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, game, Game, Debug, GameTimeScale, _crd;

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "./Debug", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d6bceaWdBpMMJQKMgYAIdu3", "GameTimeScale", undefined);

      __checkObsolete__(['game', 'Game']);

      _export("GameTimeScale", GameTimeScale = class GameTimeScale {
        static get timeScale() {
          return this._timeScale;
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

      }); //@ts-ignore


      GameTimeScale.onTimeScaleChangeCallback = null;
      GameTimeScale._timeScale = 1;

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
//# sourceMappingURL=a55415263e8470dee63d71978b707e56eb9fe1d2.js.map
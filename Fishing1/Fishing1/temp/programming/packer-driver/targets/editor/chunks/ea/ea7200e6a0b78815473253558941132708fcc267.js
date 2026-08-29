System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AniEffectBaseCommand, DgKillDragonTitleCommand, _crd;

  function _reportPossibleCrUseOfAniEffectBaseCommand(extras) {
    _reporterNs.report("AniEffectBaseCommand", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDgKillDragonTitleAni(extras) {
    _reporterNs.report("DgKillDragonTitleAni", "../aniEffects/DgKillDragonTitleAni", _context.meta, extras);
  }

  _export("DgKillDragonTitleCommand", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AniEffectBaseCommand = _unresolved_2.AniEffectBaseCommand;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eb914qdWhhMHJNfR7LPBh/i", "DgKillDragonTitleCommand", undefined);
      /**
       * Created by EricHuang on 2023/10/20.
       */


      _export("DgKillDragonTitleCommand", DgKillDragonTitleCommand = class DgKillDragonTitleCommand extends (_crd && AniEffectBaseCommand === void 0 ? (_reportPossibleCrUseOfAniEffectBaseCommand({
        error: Error()
      }), AniEffectBaseCommand) : AniEffectBaseCommand) {
        constructor(...args) {
          super();
          this._dgKillDragonTitleAni = void 0;
          this._dgKillDragonTitleAni = args[0];
        }

        resetRoomData(value) {}

        setDataAfterSetRoom(value) {}

        execute(value) {
          this._dgKillDragonTitleAni.showTitle();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ea7200e6a0b78815473253558941132708fcc267.js.map
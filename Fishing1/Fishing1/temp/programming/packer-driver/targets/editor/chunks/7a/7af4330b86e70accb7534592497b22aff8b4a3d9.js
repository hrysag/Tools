System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AniEffectBaseCommand, log, CrazyAniEffectCommand, _crd;

  function _reportPossibleCrUseOfAniEffectBaseCommand(extras) {
    _reporterNs.report("AniEffectBaseCommand", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrazyAniEffect(extras) {
    _reporterNs.report("CrazyAniEffect", "../aniEffects/CrazyAniEffect", _context.meta, extras);
  }

  _export("CrazyAniEffectCommand", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      AniEffectBaseCommand = _unresolved_2.AniEffectBaseCommand;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "472fa/R2NFHeYEKjXqKXsAE", "CrazyAniEffectCommand", undefined);
      /**
       * Created by EricHuang on 2023/11/20.
       */


      __checkObsolete__(['log']);

      _export("CrazyAniEffectCommand", CrazyAniEffectCommand = class CrazyAniEffectCommand extends (_crd && AniEffectBaseCommand === void 0 ? (_reportPossibleCrUseOfAniEffectBaseCommand({
        error: Error()
      }), AniEffectBaseCommand) : AniEffectBaseCommand) {
        constructor(...args) {
          super();
          this._crazyAniEffect = void 0;
          log('AwardDiscAniEffectCommand', args);
          this._crazyAniEffect = args[0];
        }

        resetRoomData(value) {
          this._crazyAniEffect.resetRoomData();
        }

        setDataAfterSetRoom(value) {
          this._crazyAniEffect.setDataAfterSetRoom(value.positions);
        }

        execute(value) {
          log('execute___crazyAniEffectCommand', value);

          if (value.other.open) {
            this._crazyAniEffect.openCrazyPropEffect(value.other.table);
          } else {
            this._crazyAniEffect.closeCrazyPropEffect(value.other.table);
          } //this._crazyAniEffect.showCallPropEffect(value.other.index,value.other.swp,value.other.ewp);

        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7af4330b86e70accb7534592497b22aff8b4a3d9.js.map
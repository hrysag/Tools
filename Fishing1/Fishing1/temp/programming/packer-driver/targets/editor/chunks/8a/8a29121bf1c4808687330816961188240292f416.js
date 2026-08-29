System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AniEffectBaseCommand, PowerUpAniCommand, _crd;

  function _reportPossibleCrUseOfAniEffectBaseCommand(extras) {
    _reporterNs.report("AniEffectBaseCommand", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerUpAni(extras) {
    _reporterNs.report("PowerUpAni", "../aniEffects/PowerUpAni", _context.meta, extras);
  }

  _export("PowerUpAniCommand", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      AniEffectBaseCommand = _unresolved_2.AniEffectBaseCommand;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "60c091YnRBBLoAehoGrSriz", "PowerUpAniCommand", undefined);
      /**
       * Created by EricHuang on 2023/10/26.
       */


      __checkObsolete__(['log']);

      _export("PowerUpAniCommand", PowerUpAniCommand = class PowerUpAniCommand extends (_crd && AniEffectBaseCommand === void 0 ? (_reportPossibleCrUseOfAniEffectBaseCommand({
        error: Error()
      }), AniEffectBaseCommand) : AniEffectBaseCommand) {
        constructor(...args) {
          super(); //log('PowerUpAniCommand',args);

          this._powerUpAni = void 0;
          this._powerUpAni = args[0];
        }

        resetRoomData(value) {}

        setDataAfterSetRoom(value) {
          this._powerUpAni.setDataAfterSetRoom(value.exchangePositions, value.playerIndex);
        }

        execute(value) {
          //log('execute_PowerUpAniCommand',value);
          this._powerUpAni.showPowerUp(value.other.index, value.other.pwvalue);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a29121bf1c4808687330816961188240292f416.js.map
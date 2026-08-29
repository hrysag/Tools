System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AniEffectBaseCommand, log, MoneyEffectCommand, _crd;

  function _reportPossibleCrUseOfAniEffectBaseCommand(extras) {
    _reporterNs.report("AniEffectBaseCommand", "../../../../game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "../../../../game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoneyEffect(extras) {
    _reporterNs.report("MoneyEffect", "../anieffects/MoneyEffect", _context.meta, extras);
  }

  _export("MoneyEffectCommand", void 0);

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

      _cclegacy._RF.push({}, "59c02eoNdpKrIJ8vM74yLjL", "MoneyEffectCommand", undefined);
      /**
       * Created by EricHuang on 2023/10/08.
       */


      __checkObsolete__(['log']);

      _export("MoneyEffectCommand", MoneyEffectCommand = class MoneyEffectCommand extends (_crd && AniEffectBaseCommand === void 0 ? (_reportPossibleCrUseOfAniEffectBaseCommand({
        error: Error()
      }), AniEffectBaseCommand) : AniEffectBaseCommand) {
        constructor(...args) {
          super();
          this._moneyEffect = void 0;
          log('MoneyEffectCommand_', args);
          this._moneyEffect = args[0];
        }

        resetRoomData(value) {}

        setDataAfterSetRoom(value) {
          /**
           *  coinEndinfo:this._aniPositionInfo.coniEndinfo,
              playerIndex:this._playerIndex,
           */
          this._moneyEffect.setDataAfterSetRoom(value.coinEndinfo);
        }

        execute(value) {
          this._moneyEffect.showMoneyAnimation(value.other.isPlayer, value.other.x, value.other.y, value.other.playerIndex);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3f935953a10ce2795c26971fb71cae692bf5d789.js.map
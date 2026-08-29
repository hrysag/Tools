System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AniEffectBaseCommand, log, AwardDiscAniEffectCommand, _crd;

  function _reportPossibleCrUseOfAniEffectBaseCommand(extras) {
    _reporterNs.report("AniEffectBaseCommand", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAwardDiscAniEffect(extras) {
    _reporterNs.report("AwardDiscAniEffect", "../aniEffects/AwardDiscAniEffect", _context.meta, extras);
  }

  _export("AwardDiscAniEffectCommand", void 0);

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

      _cclegacy._RF.push({}, "cc2fbLQfbRKDZVYMp2SIlio", "AwardDiscAniEffectCommand", undefined);
      /**
       * Created by EricHuang on 2023/10/23.
       */


      __checkObsolete__(['log']);

      _export("AwardDiscAniEffectCommand", AwardDiscAniEffectCommand = class AwardDiscAniEffectCommand extends (_crd && AniEffectBaseCommand === void 0 ? (_reportPossibleCrUseOfAniEffectBaseCommand({
        error: Error()
      }), AniEffectBaseCommand) : AniEffectBaseCommand) {
        constructor() {
          super();
          this._awardDiscAniEffect = void 0;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          log('AwardDiscAniEffectCommand', args);
          this._awardDiscAniEffect = args[0];
        }

        resetRoomData(value) {
          this._awardDiscAniEffect.resetRoomData();
        }

        setDataAfterSetRoom(value) {
          this._awardDiscAniEffect.setDataAfterSetRoom(value.positions, value.playerIndex);
        }

        execute(value) {
          log('execute_AwardDiscAniEffectCommand', value);

          this._awardDiscAniEffect.playAndShowPayOff(value.other); //-test

        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9fb5007aa160079b81c215c1d9a9d144dbe6e0f5.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AniEffectBaseCommand, log, ShakeAniEffectCommand, _crd;

  function _reportPossibleCrUseOfAniEffectBaseCommand(extras) {
    _reporterNs.report("AniEffectBaseCommand", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShakeAniEffect(extras) {
    _reporterNs.report("ShakeAniEffect", "../aniEffects/ShakeAniEffect", _context.meta, extras);
  }

  _export("ShakeAniEffectCommand", void 0);

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

      _cclegacy._RF.push({}, "42eae1AUh1BaqdgFoD6S13w", "ShakeAniEffectCommand", undefined);
      /**
       * Created by EricHuang on 2023/10/23.
       */


      __checkObsolete__(['log']);

      _export("ShakeAniEffectCommand", ShakeAniEffectCommand = class ShakeAniEffectCommand extends (_crd && AniEffectBaseCommand === void 0 ? (_reportPossibleCrUseOfAniEffectBaseCommand({
        error: Error()
      }), AniEffectBaseCommand) : AniEffectBaseCommand) {
        constructor(...args) {
          super();
          this._shakeAniEffect = void 0;
          log('ShakeAniEffectCommand', args);
          this._shakeAniEffect = args[0];
        }

        resetRoomData(value) {}

        setDataAfterSetRoom(value) {}

        execute(value) {
          log('execute_ShakeAniEffectCommand', value);

          this._shakeAniEffect.shakeEffect(value.other);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1c7d200da40f05c16841c959b5f4861a653d1276.js.map
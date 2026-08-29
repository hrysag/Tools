System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AniEffectBaseCommand, log, JumpDigitsEffectCommand, _crd;

  function _reportPossibleCrUseOfAniEffectBaseCommand(extras) {
    _reporterNs.report("AniEffectBaseCommand", "../../../../game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "../../../../game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJumpDigitsEffect(extras) {
    _reporterNs.report("JumpDigitsEffect", "../anieffects/JumpDigitsEffect", _context.meta, extras);
  }

  _export("JumpDigitsEffectCommand", void 0);

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

      _cclegacy._RF.push({}, "7f107X5EC1OtaQ3A3y1dIC9", "JumpDigitsEffectCommand", undefined);
      /**
       * Created by EricHuang on 2023/10/09.
       */


      __checkObsolete__(['log']);

      _export("JumpDigitsEffectCommand", JumpDigitsEffectCommand = class JumpDigitsEffectCommand extends (_crd && AniEffectBaseCommand === void 0 ? (_reportPossibleCrUseOfAniEffectBaseCommand({
        error: Error()
      }), AniEffectBaseCommand) : AniEffectBaseCommand) {
        constructor(...args) {
          super();
          this._JumpDigitsEffect = void 0;
          log('JumpDigitsEffectCommand__', args);
          this._JumpDigitsEffect = args[0];
        }

        setDataAfterSetRoom(value) {}

        resetRoomData(value) {}
        /**
         * 
         * @param value 
         *  showNumber:2500, 
            x:value[0].info.endX,
            y:value[0].info.endY,
            strTexture?:....
         */


        execute(value) {
          this._JumpDigitsEffect.showJumpDigits(value.other.showNumber, value.other.x, value.other.y, value.other.strTexture);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2e4b3bf3db69a36d3e828eb557a73935dffac06c.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AniEffectBaseCommand, log, FrozenAniEffectCommand, _crd;

  function _reportPossibleCrUseOfAniEffectBaseCommand(extras) {
    _reporterNs.report("AniEffectBaseCommand", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFrozenAniEffect(extras) {
    _reporterNs.report("FrozenAniEffect", "../aniEffects/FrozenAniEffect", _context.meta, extras);
  }

  _export("FrozenAniEffectCommand", void 0);

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

      _cclegacy._RF.push({}, "885cdYE+iJBaK8kXaW2Bumj", "FrozenAniEffectCommand", undefined);
      /**
       * Created by EricHuang on 2023/10/23.
       */


      __checkObsolete__(['log']);

      _export("FrozenAniEffectCommand", FrozenAniEffectCommand = class FrozenAniEffectCommand extends (_crd && AniEffectBaseCommand === void 0 ? (_reportPossibleCrUseOfAniEffectBaseCommand({
        error: Error()
      }), AniEffectBaseCommand) : AniEffectBaseCommand) {
        constructor() {
          super();
          this._frozenAniEffect = void 0;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          log('frozenAniEffectCommand', args);
          this._frozenAniEffect = args[0]; //this._frozenAniEffect.on(AnimationEffectEvent.COMPLETE,this.sendEvt);
        }

        resetRoomData(value) {}
        /*
        private sendEvt=(e:EventSendObject)=>
        {
            log('giftBomb_finish_GiftBombEffectCommand',e);
             this.emit(e.type,e);
        }*/


        setDataAfterSetRoom(value) {}

        execute(value) {
          log('check_frozenAniEffectCommand_execute', value);

          if (value.other.freeze) {
            this._frozenAniEffect.openFrozenEffect();
          } else {
            this._frozenAniEffect.closeFrozenEffect();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=887e686cab2f9171fff9571738bf617c1cd8dbfe.js.map
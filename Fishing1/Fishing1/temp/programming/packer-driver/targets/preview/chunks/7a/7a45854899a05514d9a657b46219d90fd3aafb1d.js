System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AniEffectBaseCommand, GetPropAniEffectCommand, _crd;

  function _reportPossibleCrUseOfAniEffectBaseCommand(extras) {
    _reporterNs.report("AniEffectBaseCommand", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetPropAniEffect(extras) {
    _reporterNs.report("GetPropAniEffect", "../aniEffects/GetPropAniEffect", _context.meta, extras);
  }

  _export("GetPropAniEffectCommand", void 0);

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

      _cclegacy._RF.push({}, "3abda7fWj5PSpLJHw1aDSab", "GetPropAniEffectCommand", undefined);
      /**
       * Created by EricHuang on 2023/11/24.
       */


      __checkObsolete__(['log']);

      _export("GetPropAniEffectCommand", GetPropAniEffectCommand = class GetPropAniEffectCommand extends (_crd && AniEffectBaseCommand === void 0 ? (_reportPossibleCrUseOfAniEffectBaseCommand({
        error: Error()
      }), AniEffectBaseCommand) : AniEffectBaseCommand) {
        constructor() {
          super();
          this._getPropAniEffect = void 0;
          this._getPropAniEffect = arguments.length <= 0 ? undefined : arguments[0]; //this._getPropAniEffect.on(AnimationEffectEvent.COMPLETE,this.sendEvt);
        }
        /*
        private sendEvt=(e:EventSendObject)=>
        {
            log('Explosion_finish_commands',e); 
            this.emit(e.type,e);
        }*/


        resetRoomData(value) {}

        setDataAfterSetRoom(value) {
          this._getPropAniEffect.setDataAfterSetRoom(value.menuPositions);
        }

        execute(value) {
          this._getPropAniEffect.showGetPropEffect(value.other.propType, value.other.wp);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7a45854899a05514d9a657b46219d90fd3aafb1d.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AniEffectBaseCommand, log, DgAnnounceAniCommand, _crd;

  function _reportPossibleCrUseOfAniEffectBaseCommand(extras) {
    _reporterNs.report("AniEffectBaseCommand", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDgAnnounceAni(extras) {
    _reporterNs.report("DgAnnounceAni", "../aniEffects/DgAnnounceAni", _context.meta, extras);
  }

  _export("DgAnnounceAniCommand", void 0);

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

      _cclegacy._RF.push({}, "4b584RAUDRFZIyrIOz9tY9L", "DgAnnounceAniCommand", undefined);
      /**
       * Created by EricHuang on 2023/10/23.
       */


      __checkObsolete__(['log']);

      _export("DgAnnounceAniCommand", DgAnnounceAniCommand = class DgAnnounceAniCommand extends (_crd && AniEffectBaseCommand === void 0 ? (_reportPossibleCrUseOfAniEffectBaseCommand({
        error: Error()
      }), AniEffectBaseCommand) : AniEffectBaseCommand) {
        constructor(...args) {
          super();
          this._dgAnnounceAni = void 0;
          log('DgAnnounceAniCommand', args);
          this._dgAnnounceAni = args[0];
        }

        resetRoomData(value) {}

        setDataAfterSetRoom(value) {}

        execute(value) {
          //this._dgTitleAni.showOpenEffect();
          this._dgAnnounceAni.showAnnounceForGD(value.other.id, value.other.payOff);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b828d6253a585dfa89c703c464463da9e550ef3e.js.map
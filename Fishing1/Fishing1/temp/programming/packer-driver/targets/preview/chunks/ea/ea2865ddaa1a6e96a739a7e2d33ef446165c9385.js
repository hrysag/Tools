System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AniEffectBaseCommand, log, DgCommingCommand, _crd;

  function _reportPossibleCrUseOfAniEffectBaseCommand(extras) {
    _reporterNs.report("AniEffectBaseCommand", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "../../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDgCommingTitleAni(extras) {
    _reporterNs.report("DgCommingTitleAni", "../aniEffects/DgCommingTitleAni", _context.meta, extras);
  }

  _export("DgCommingCommand", void 0);

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

      _cclegacy._RF.push({}, "138f01hqtZPvbmxKQ4zh4ps", "DgCommingCommand", undefined);
      /**
       * Created by EricHuang on 2023/10/17.
       */


      __checkObsolete__(['log']);

      _export("DgCommingCommand", DgCommingCommand = class DgCommingCommand extends (_crd && AniEffectBaseCommand === void 0 ? (_reportPossibleCrUseOfAniEffectBaseCommand({
        error: Error()
      }), AniEffectBaseCommand) : AniEffectBaseCommand) {
        constructor() {
          super();
          this._dgTitleAni = void 0;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          log('DgCommingCommand', args);
          this._dgTitleAni = args[0];
        }

        resetRoomData(value) {}

        setDataAfterSetRoom(value) {}

        execute(value) {
          this._dgTitleAni.showOpenEffect();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ea2865ddaa1a6e96a739a7e2d33ef446165c9385.js.map
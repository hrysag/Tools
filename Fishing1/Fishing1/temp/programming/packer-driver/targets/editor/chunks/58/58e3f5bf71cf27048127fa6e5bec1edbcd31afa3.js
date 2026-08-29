System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AniEffectCommandFactory, _crd;

  function _reportPossibleCrUseOfIfAniEffectCommand(extras) {
    _reporterNs.report("IfAniEffectCommand", "./AniEffectDefinitionsBase", _context.meta, extras);
  }

  _export("AniEffectCommandFactory", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b56bczpERNPMJl4ZiM/2gvT", "AniEffectCommandFactory", undefined);
      /**
       * Created by EricHuang on 2023/10/07.
       */


      _export("AniEffectCommandFactory", AniEffectCommandFactory = class AniEffectCommandFactory {
        static createCommand(constructor, ...args) {
          return new constructor(...args);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=58e3f5bf71cf27048127fa6e5bec1edbcd31afa3.js.map
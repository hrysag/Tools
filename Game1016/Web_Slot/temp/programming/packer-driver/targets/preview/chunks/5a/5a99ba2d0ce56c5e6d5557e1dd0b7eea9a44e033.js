System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, StateBase, _crd;

  _export("StateBase", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1c4f9fhcOBDTalRhmHT68Vi", "StateBase", undefined);

      // StateBase.ts
      _export("StateBase", StateBase = class StateBase {
        constructor(stateName) {
          this.previousStateName = "";
          this.stateName = "";
          this.nextStateName = "";
          this.stateName = stateName;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5a99ba2d0ce56c5e6d5557e1dd0b7eea9a44e033.js.map
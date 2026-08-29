System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, InstanceBase, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a3666PSVrBJ1b4bLB2JOdcj", "InstanceBase", undefined);

      InstanceBase = class InstanceBase {
        static instance(...args_as_) {
          const self = this;

          if (!self._instance) {
            self._instance = new self(...args_as_);
          }

          return self._instance;
        }

      };

      _export("default", InstanceBase);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b902032cdbf27ff1b9f76a3567908fc42ff871e2.js.map
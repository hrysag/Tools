System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, TestStateEnum;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d6ff0zobv1Nlbqssk7ZqOzY", "StateTestConfig", undefined);

      _export("TestStateEnum", TestStateEnum = /*#__PURE__*/function (TestStateEnum) {
        TestStateEnum["Idle"] = "Idle";
        TestStateEnum["Spin"] = "Spin";
        TestStateEnum["Win"] = "Win";
        return TestStateEnum;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=359dfebe89a3d43a2229399e8c3ad67de550bb4e.js.map
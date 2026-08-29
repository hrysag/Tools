System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, globalAccessImpl, _crd, GlobalAccessReader;

  function _reportPossibleCrUseOfglobalAccessImpl(extras) {
    _reporterNs.report("globalAccessImpl", "./GlobalAccessImpl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      globalAccessImpl = _unresolved_2.globalAccessImpl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5ab73EDqjpJ3qvTJRoWwk5K", "GlobalAccess", undefined);

      /**
       * 對外暴露的讀取外部全局數據的接口
       * 只能讀取，不能寫入
       */
      _export("GlobalAccessReader", GlobalAccessReader = {
        getGlobalData: (_crd && globalAccessImpl === void 0 ? (_reportPossibleCrUseOfglobalAccessImpl({
          error: Error()
        }), globalAccessImpl) : globalAccessImpl).getGlobalData.bind(_crd && globalAccessImpl === void 0 ? (_reportPossibleCrUseOfglobalAccessImpl({
          error: Error()
        }), globalAccessImpl) : globalAccessImpl),
        snapshot: (_crd && globalAccessImpl === void 0 ? (_reportPossibleCrUseOfglobalAccessImpl({
          error: Error()
        }), globalAccessImpl) : globalAccessImpl).snapshot.bind(_crd && globalAccessImpl === void 0 ? (_reportPossibleCrUseOfglobalAccessImpl({
          error: Error()
        }), globalAccessImpl) : globalAccessImpl)
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=87f7660278ce2989e9da56a6995d46150b808f19.js.map
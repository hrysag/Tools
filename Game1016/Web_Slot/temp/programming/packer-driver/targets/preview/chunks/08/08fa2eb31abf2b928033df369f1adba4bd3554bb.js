System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, globalAccessImpl, _crd, GlobalAccessWriter;

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

      _cclegacy._RF.push({}, "87632UrpSFE/6srQbNo8cWb", "GlobalAccessWriter", undefined);
      /**
       * @author Eric 20230819
       * @description: 提供全域資料存取的寫入介面
       * 只有gamemanager能夠使用
       */


      _export("GlobalAccessWriter", GlobalAccessWriter = {
        register: (_crd && globalAccessImpl === void 0 ? (_reportPossibleCrUseOfglobalAccessImpl({
          error: Error()
        }), globalAccessImpl) : globalAccessImpl).register.bind(_crd && globalAccessImpl === void 0 ? (_reportPossibleCrUseOfglobalAccessImpl({
          error: Error()
        }), globalAccessImpl) : globalAccessImpl),
        setGlobalData: (_crd && globalAccessImpl === void 0 ? (_reportPossibleCrUseOfglobalAccessImpl({
          error: Error()
        }), globalAccessImpl) : globalAccessImpl).setGlobalData.bind(_crd && globalAccessImpl === void 0 ? (_reportPossibleCrUseOfglobalAccessImpl({
          error: Error()
        }), globalAccessImpl) : globalAccessImpl),
        patch: (_crd && globalAccessImpl === void 0 ? (_reportPossibleCrUseOfglobalAccessImpl({
          error: Error()
        }), globalAccessImpl) : globalAccessImpl).patch.bind(_crd && globalAccessImpl === void 0 ? (_reportPossibleCrUseOfglobalAccessImpl({
          error: Error()
        }), globalAccessImpl) : globalAccessImpl),
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
//# sourceMappingURL=08fa2eb31abf2b928033df369f1adba4bd3554bb.js.map
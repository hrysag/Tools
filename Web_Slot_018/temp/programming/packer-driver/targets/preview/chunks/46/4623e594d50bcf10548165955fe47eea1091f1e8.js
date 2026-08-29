System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CDispatcherAddr, CDispatcherManager, _crd;

  function _reportPossibleCrUseOfCDispatcherAddr(extras) {
    _reporterNs.report("CDispatcherAddr", "./CDispatcherAddr", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      CDispatcherAddr = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01868JFl1dC85ZqG9kUSUl+", "CDispatcherManager", undefined);

      _export("default", CDispatcherManager = class CDispatcherManager {
        constructor(gatewayList) {
          this.m_colDispatcher = new Map();
          this._dispatcherQueue = [];

          for (var i = 0; i < gatewayList.length; ++i) {
            var address = new (_crd && CDispatcherAddr === void 0 ? (_reportPossibleCrUseOfCDispatcherAddr({
              error: Error()
            }), CDispatcherAddr) : CDispatcherAddr)(gatewayList[i]);

            if (!this.m_colDispatcher.has(address._sKey)) {
              this.m_colDispatcher.set(address._sKey, address);
            }
          }
        }

        Clear() {
          this.m_colDispatcher.clear();
        }

        AddDispatcher(bt) {
          var address = new (_crd && CDispatcherAddr === void 0 ? (_reportPossibleCrUseOfCDispatcherAddr({
            error: Error()
          }), CDispatcherAddr) : CDispatcherAddr)(bt);

          if (!this.m_colDispatcher.has(address._sKey)) {
            this.m_colDispatcher.set(address._sKey, address);
          }
        }

        RemoveDispatcher(bt) {
          var address = new (_crd && CDispatcherAddr === void 0 ? (_reportPossibleCrUseOfCDispatcherAddr({
            error: Error()
          }), CDispatcherAddr) : CDispatcherAddr)(bt);
          this.m_colDispatcher.delete(address._sKey);
        }

        GetDispatcher_Ran() {
          if (this._dispatcherQueue.length === 0) {
            var list = Array.from(this.m_colDispatcher.values());
            list.forEach(addr => this._dispatcherQueue.push(addr));
          }

          if (this._dispatcherQueue.length <= 0) {
            return null;
          }

          var index = Math.floor(Math.random() * this._dispatcherQueue.length);
          return this._dispatcherQueue.splice(index, 1).pop();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4623e594d50bcf10548165955fe47eea1091f1e8.js.map
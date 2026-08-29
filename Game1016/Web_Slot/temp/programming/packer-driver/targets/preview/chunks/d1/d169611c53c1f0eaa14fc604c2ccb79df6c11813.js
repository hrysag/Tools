System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, MainServiceID, LiveSeconds, MaxRetryCount, RetryIntervalSeconds;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "529dajcZ8JCYbQ8nwHBepT6", "CConncetConfig", undefined);

      /**
       * CConnectManger 設定
       */
      // 主要的分流 ServiceID
      _export("MainServiceID", MainServiceID = 1); // 連線維持時間(秒)


      _export("LiveSeconds", LiveSeconds = 60); // 最大重試次數


      _export("MaxRetryCount", MaxRetryCount = 3); //重試連線間隔時間(秒)


      _export("RetryIntervalSeconds", RetryIntervalSeconds = 6);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d169611c53c1f0eaa14fc604c2ccb79df6c11813.js.map
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, CConnectLog, _crd, LogLevel;

  _export("CConnectLog", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "38f94XEYLZLobDtzGJ+aFkn", "CConnectLog", undefined);

      _export("LogLevel", LogLevel = /*#__PURE__*/function (LogLevel) {
        LogLevel[LogLevel["Error"] = 0] = "Error";
        LogLevel[LogLevel["Warning"] = 1] = "Warning";
        LogLevel[LogLevel["Info"] = 2] = "Info";
        LogLevel[LogLevel["Debug"] = 3] = "Debug";
        return LogLevel;
      }({}));

      _export("CConnectLog", CConnectLog = class CConnectLog {
        constructor() {
          this._visibleLevel = LogLevel.Debug;
        }

        static get Instance() {
          if (!CConnectLog._sInstance) {
            CConnectLog._sInstance = new CConnectLog();
          }

          return CConnectLog._sInstance;
        }

        SetVisibleLevel(level) {
          this._visibleLevel = level;
        }

        DebugLog(...data) {
          if (this._visibleLevel < LogLevel.Debug) {
            return;
          }

          const logArray = data;
          console.log(`[Debug] ${new Date().toLocaleTimeString()}`, ...logArray);
        }

        InfoLog(...data) {
          if (this._visibleLevel < LogLevel.Info) {
            return;
          }

          const logArray = data;
          console.log(`[Info] ${new Date().toLocaleTimeString()}`, ...logArray);
        }

        WarningLog(...data) {
          if (this._visibleLevel < LogLevel.Warning) {
            return;
          }

          const logArray = data;
          console.warn(`[Warning] ${new Date().toLocaleTimeString()}`, ...logArray);
        }

        ErrorLog(...data) {
          if (this._visibleLevel < LogLevel.Error) {
            return;
          }

          const logArray = data;
          console.error(`[Error] ${new Date().toLocaleTimeString()}`, ...logArray);
        }

      });

      CConnectLog._sInstance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4adfe47e2510525b388ea62a1aff5ec435c8e993.js.map
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

        DebugLog() {
          if (this._visibleLevel < LogLevel.Debug) {
            return;
          }

          for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
            data[_key] = arguments[_key];
          }

          var logArray = data;
          console.log("[Debug] " + new Date().toLocaleTimeString(), ...logArray);
        }

        InfoLog() {
          if (this._visibleLevel < LogLevel.Info) {
            return;
          }

          for (var _len2 = arguments.length, data = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            data[_key2] = arguments[_key2];
          }

          var logArray = data;
          console.log("[Info] " + new Date().toLocaleTimeString(), ...logArray);
        }

        WarningLog() {
          if (this._visibleLevel < LogLevel.Warning) {
            return;
          }

          for (var _len3 = arguments.length, data = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            data[_key3] = arguments[_key3];
          }

          var logArray = data;
          console.warn("[Warning] " + new Date().toLocaleTimeString(), ...logArray);
        }

        ErrorLog() {
          if (this._visibleLevel < LogLevel.Error) {
            return;
          }

          for (var _len4 = arguments.length, data = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            data[_key4] = arguments[_key4];
          }

          var logArray = data;
          console.error("[Error] " + new Date().toLocaleTimeString(), ...logArray);
        }

      });

      CConnectLog._sInstance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=99206f1f27f728673c847483c878545e0474c042.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Device, URLParameter, PlayerLoaderInfoImpl, _crd, timestamps;

  function encodeFormData(data) {
    if (!data) return ""; // Always return a string

    var pairs = []; // To hold name=value pairs

    for (var name in data) {
      // For each name
      if (!data.hasOwnProperty(name)) continue; // Skip inherited

      if (typeof data[name] === "function") continue; // Skip methods

      let value = "";

      if (typeof data[name] != 'undefined' && typeof data[name].toString == 'function') {
        value = data[name].toString();
      }

      name = encodeURIComponent(name.replace(" ", "+")); // Encode name

      value = encodeURIComponent(value.replace(" ", "+")); // Encode value

      pairs.push(name + "=" + value); // Remember name=value pair
    }

    return pairs.join('&'); // Return joined pairs separated with &
  }

  function _reportPossibleCrUseOfDevice(extras) {
    _reporterNs.report("Device", "../environment/device/Device", _context.meta, extras);
  }

  function _reportPossibleCrUseOfURLParameter(extras) {
    _reporterNs.report("URLParameter", "../environment/url/URLParameter", _context.meta, extras);
  }

  _export("PlayerLoaderInfoImpl", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Device = _unresolved_2.Device;
    }, function (_unresolved_3) {
      URLParameter = _unresolved_3.URLParameter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6657f7Mc/ROLovI1Xr9YSgG", "PlayerLoaderInfo", undefined);

      timestamps = ['entrance', 'loader', 'ws', 'login', 'takeMachine', 'loadInfo', 'getMachineDetail', 'onGetMachineDetail', 'done'];

      _export("PlayerLoaderInfoImpl", PlayerLoaderInfoImpl = class PlayerLoaderInfoImpl {
        constructor() {
          this.timestamp = {};
          this.info = void 0;
        }

        get portal() {
          let portal = '';

          switch ((_crd && URLParameter === void 0 ? (_reportPossibleCrUseOfURLParameter({
            error: Error()
          }), URLParameter) : URLParameter).platform) {
            case 'AIO':
              if ((_crd && URLParameter === void 0 ? (_reportPossibleCrUseOfURLParameter({
                error: Error()
              }), URLParameter) : URLParameter).mua) portal = (_crd && URLParameter === void 0 ? (_reportPossibleCrUseOfURLParameter({
                error: Error()
              }), URLParameter) : URLParameter).mua;else portal = "AIO";
              break;

            case 'app':
              portal = "APP";
              break;

            case null:
              if ((_crd && Device === void 0 ? (_reportPossibleCrUseOfDevice({
                error: Error()
              }), Device) : Device).mobile || (_crd && Device === void 0 ? (_reportPossibleCrUseOfDevice({
                error: Error()
              }), Device) : Device).tablet) portal = "Phone";else portal = "PC";
              break;

            default:
              portal = "其他";
              break;
          }

          return portal;
        }
        /**
         * user 需要手動設定對應的資訊
         */


        setInfo(info) {
          this.info = info;
        }
        /**
         * 
         * entrance: 進入頁面.  
         * loader: loader 載入完成.  
         * ws: ws 連線完成.  
         * login: ws 收到onLogin  
         * takeMachine: ws 收到onTakeMachine
         * loadInfo: ws 收到onLoadInfo
         * getMachineDetail : call getMachineDetail
         * onGetMachineDetail : ws 收到onGetMachineDetail
         * done : 遊戲開始
         */


        setTimeStemp(key) {
          if (!timestamps.includes(key)) return;

          if (this.timestamp[key] == null) {
            this.timestamp[key] = Date.now();
          }
        }

        getTimeStamp(key) {
          return this.timestamp[key] || 0;
        }

        send() {
          if (!this.canSend()) return;

          let GetMachineDetail = () => {
            const loadinfo = this.getTimeStamp('loadInfo');
            const costOfGetMachineDetail = this.getTimeStamp('onGetMachineDetail') - this.getTimeStamp('getMachineDetail');
            return loadinfo + costOfGetMachineDetail;
          };

          let Complete = () => {
            return Math.max(this.getTimeStamp('done'), this.getTimeStamp('onGetMachineDetail'));
          };

          let data = { ...this.info,
            Portal: this.portal,
            Entrance: this.getTimeStamp('entrance'),
            Loader: this.getTimeStamp('loader'),
            WebSocket: this.getTimeStamp('ws'),
            LoginCheck: this.getTimeStamp('login'),
            TakeMachine: this.getTimeStamp('takeMachine'),
            OnLoadInfo2: this.getTimeStamp('loadInfo'),
            GetMachineDetail: GetMachineDetail(),
            Complete: Complete()
          };
          this.postData(data);
        }

        postData(data) {
          fetch(`${location.origin}/ipl/portal.php/game/casinofrontend_entrance/loadingtime`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: encodeFormData(data)
          }).then(res => {}).catch(err => {});
        }

        canSend() {
          const checkNotSet = ['loader', 'ws', 'login', 'takeMachine', 'loadInfo', 'done'];

          for (let i = 0; i < checkNotSet.length; i++) {
            const key = checkNotSet[i];

            if (this.timestamp[key] == null || this.timestamp[key] == 0) {
              return false;
            }
          }

          return true;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=62ccd9cde0a1eff28f97c04aedd9e0e5d5ed5034.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Device, NativeBridge, AIOBridgeClass, _crd, AIOBridge;

  function _reportPossibleCrUseOfDevice(extras) {
    _reporterNs.report("Device", "./Device", _context.meta, extras);
  }

  _export("AIOBridgeClass", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Device = _unresolved_2.Device;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06da97kizlM045McAfL6sey", "AIOBridge", undefined);

      NativeBridge = class NativeBridge {
        constructor() {
          this.callbacksCount = 1;
          this.callbacks = {};
        }

        resultForCallback(callbackId, args) {
          try {
            var callback = this.callbacks[callbackId];

            if (!callback) {
              return;
            }

            callback.apply(null, args);
          } catch (e) {
            alert(e);
          }
        }

        call(functionName, args, callback) {
          var hasCallback = callback && typeof callback == "function";
          var callbackId = hasCallback ? this.callbacksCount++ : 0;

          if (hasCallback) {
            this.callbacks[callbackId] = callback;
          }

          var iframe = document.createElement("IFRAME");

          if (iframe) {
            var _iframe$parentNode;

            iframe.setAttribute("src", "js-frame:" + functionName + ":" + callbackId + ":" + encodeURIComponent(JSON.stringify(args)));
            document.documentElement.appendChild(iframe);
            (_iframe$parentNode = iframe.parentNode) == null ? void 0 : _iframe$parentNode.removeChild(iframe);
            iframe = null;
          }
        }

      };

      _export("AIOBridgeClass", AIOBridgeClass = class AIOBridgeClass {
        constructor() {
          this.nativeBridge = void 0;

          this.iosAppToJsMessage = response => {};

          this.nativeBridge = new NativeBridge();
        }

        // private androidAppToJsMessage = (message: string) => { };
        androidJsToAppMessage(message) {
          var _MyHandler;

          (_MyHandler = window['MyHandler']) == null ? void 0 : _MyHandler.JsToAppMessage(message);
        }

        iosJsToAppMessage(message) {
          this.nativeBridge.call("JsToAppMessage", [message], this.iosAppToJsMessage);
        }

        jsToAppMessage(message) {
          var device = {
            isiPad: navigator.userAgent.match(/iPad/i) !== null,
            isiPhone: navigator.userAgent.match(/iPhone/i) !== null,
            isandroid: navigator.userAgent.match(/Android/i) !== null
          };

          if ((_crd && Device === void 0 ? (_reportPossibleCrUseOfDevice({
            error: Error()
          }), Device) : Device).aio) {
            if (device.isiPad || device.isiPhone) {
              this.iosJsToAppMessage(message);
            } else if (device.isandroid) {
              this.androidJsToAppMessage(message);
            }
          }
        }

        onLoaded() {
          this.jsToAppMessage('{ event : "LOADED", "data":"" }');
        } // Back to AIO


        exitGame() {
          this.jsToAppMessage('{"event":"EXIT", "data":""}');
        } // Back to AIO's Login Panel


        logout() {
          this.jsToAppMessage('{"event":"SESSION_INVALIDATE", "data":""}');
        }

        accountSuspended() {
          this.jsToAppMessage('{"event":"ACCOUNT_SUSPENDED", "data":""}');
        }

        maintaining() {
          this.jsToAppMessage('{"event":"MAINTAINING", "data":""}');
        } // if webgl not support


        showWebGLAlert() {
          this.jsToAppMessage('{"event":"EVENT_WEBGL_NOTSUPPORT", "data":""}');
        }

      });
      /**
       * AIO 相關功能接口
       */


      _export("AIOBridge", AIOBridge = new AIOBridgeClass());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e76e6253f2ede97469cc81c3d059a1f6697e5c95.js.map
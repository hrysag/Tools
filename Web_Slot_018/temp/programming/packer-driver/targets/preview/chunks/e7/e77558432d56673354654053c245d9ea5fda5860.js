System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, NetListener, NetObserver, _crd, NetEvent;

  _export({
    NetListener: void 0,
    NetObserver: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bfdb6Z0yI9GuZK47mHXE8Mt", "NetObserver", undefined);

      /**
       * Net 事件
       */
      _export("NetEvent", NetEvent = /*#__PURE__*/function (NetEvent) {
        NetEvent[NetEvent["Disconnected"] = 0] = "Disconnected";
        NetEvent[NetEvent["ServiceKick"] = 1] = "ServiceKick";
        return NetEvent;
      }({}));
      /**
       * 監聽者
       */


      _export("NetListener", NetListener = class NetListener {
        constructor(name, process) {
          this.name = name;
          this.process = process;
        }

        get Name() {
          return this.name;
        }

        Notify(event, value) {
          this.process(event, value);
        }

      });
      /**
       * 觀察者
       */


      _export("NetObserver", NetObserver = class NetObserver {
        constructor() {
          this._listeners = [];
        }
        /**
         * 註冊監聽者
         * @param listener 
         */


        Register(listener) {
          this._listeners.push(listener);
        }
        /**
         * 移除監聽者
         * @param name 監聽者名稱 
         */


        Remove(name) {
          for (var x = 0; x < this._listeners.length; x++) {
            if (this._listeners[x].Name === name) {
              this._listeners.splice(x, 1);

              x++;
            }
          }
        }
        /**
         * 通知所有監聽者
         * @param event 
         * @param value 
         */


        Notify(event, value) {
          for (var x = 0; x < this._listeners.length; x++) {
            this._listeners[x].Notify(event, value);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e77558432d56673354654053c245d9ea5fda5860.js.map
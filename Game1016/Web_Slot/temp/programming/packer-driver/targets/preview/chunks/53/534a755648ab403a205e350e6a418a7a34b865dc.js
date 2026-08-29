System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventDispatcher, _crd;

  function _reportPossibleCrUseOfBaseEvent(extras) {
    _reporterNs.report("BaseEvent", "./BaseEvent", _context.meta, extras);
  }

  _export("EventDispatcher", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b116dO53VRHi5plWTk0v73h", "EventDispatcher", undefined);
      /**
       * Created by EricHuang on 2016/4/14.
       */


      _export("EventDispatcher", EventDispatcher = class EventDispatcher {
        //--20221021--eric
        constructor() {
          this._objEvent = void 0;
          this._aryBubbles = void 0;
          this._evtStack = void 0;
          this._objEvent = {};
          this._aryBubbles = [];
          this._evtStack = []; //this._target=t;
        }

        addEventListener(evtType, listener) {
          var listeners = this._objEvent[evtType]; //--update--20221021--eric

          if (!listeners) {
            this._objEvent[evtType] = [listener];
          } else if (listeners.indexOf(listener) == -1) {
            listeners[listeners.length] = listener;
          }
        }

        removeEventListener(evtType, listener) {
          var handlers = this._objEvent[evtType];
          var numListeners = handlers ? handlers.length : 0; //console.log('check_removeEventListener',numListeners);

          if (numListeners > 0) {
            var index = handlers.indexOf(listener);

            if (index != -1) {
              if (this._evtStack.indexOf(evtType) == -1) {
                handlers.splice(index, 1);
              } else {
                var restListeners = handlers.slice(0, index); //console.log('wtf_remove');

                for (var i = index + 1; i < numListeners; ++i) {
                  restListeners[i - 1] = handlers[i];
                }

                this._objEvent[evtType] = restListeners;
              }
            }
          }
        }

        removeEventListeners(s) {
          if (s === void 0) {
            s = "";
          }

          if (this._objEvent[s] !== undefined) {
            delete this._objEvent[s];
          } else if (s == "") {
            //console.log("dispatcher__WTF");
            this._objEvent = {}; //this._objEvent=null;
          }
        }

        hasEventListener(evtType, listener) {
          /*
          var handlers = this._objEvent[evtType];
          var b:boolean = (handlers) ? true : false;
          console.log('check_@_hasEventListener',handlers);
          
          return b;
          */
          //----2023-0111-update---eric 
          var listeners = this._objEvent ? this._objEvent[evtType] : null;

          if (listeners == null) {
            return false;
          } else {
            if (listener != null) {
              return listeners.indexOf(listener) != -1;
            } else {
              return listeners.length != 0;
            }
          }
        }

        dispatchEvent(evt) {
          //evt.target = this;
          var previousTarget = evt.target;
          evt.target = this;
          this.invokeEvt(evt);
          if (previousTarget != null) evt.target = previousTarget;
        }

        invokeEvt(evt) {
          var handlers = this._objEvent ? this._objEvent[evt.type] : null;
          var numListeners = handlers == null ? 0 : handlers.length; //console.log('check_arylen',numListeners);

          if (numListeners) {
            evt.currentTarget = this;
            this._evtStack[this._evtStack.length] = evt.type;

            for (var i = 0; i < numListeners; ++i) {
              handlers[i](evt);

              if (evt.stopCommunication) {
                this._evtStack.pop();

                return true;
              }
            }

            this._evtStack.pop();

            return evt.stopOtherListener;
          } else {
            return false;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=534a755648ab403a205e350e6a418a7a34b865dc.js.map
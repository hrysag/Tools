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
          let listeners = this._objEvent[evtType]; //--update--20221021--eric

          if (!listeners) {
            this._objEvent[evtType] = [listener];
          } else if (listeners.indexOf(listener) == -1) {
            listeners[listeners.length] = listener;
          }
        }

        removeEventListener(evtType, listener) {
          let handlers = this._objEvent[evtType];
          let numListeners = handlers ? handlers.length : 0; //console.log('check_removeEventListener',numListeners);

          if (numListeners > 0) {
            let index = handlers.indexOf(listener);

            if (index != -1) {
              if (this._evtStack.indexOf(evtType) == -1) {
                handlers.splice(index, 1);
              } else {
                let restListeners = handlers.slice(0, index); //console.log('wtf_remove');

                for (let i = index + 1; i < numListeners; ++i) {
                  restListeners[i - 1] = handlers[i];
                }

                this._objEvent[evtType] = restListeners;
              }
            }
          }
        }

        removeEventListeners(s = "") {
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
          let listeners = this._objEvent ? this._objEvent[evtType] : null;

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
          let handlers = this._objEvent ? this._objEvent[evt.type] : null;
          let numListeners = handlers == null ? 0 : handlers.length; //console.log('check_arylen',numListeners);

          if (numListeners) {
            evt.currentTarget = this;
            this._evtStack[this._evtStack.length] = evt.type;

            for (let i = 0; i < numListeners; ++i) {
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
//# sourceMappingURL=b2963beafc87125afb46167b6f94b0ba1be8cf05.js.map
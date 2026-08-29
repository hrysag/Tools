System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, Observer, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  _export("Observer", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "08353PSOkpAOrpSxEQZyFwz", "Observer", undefined);
      /**
       * Created by EricHuang on 2023/9/06.
       */


      //--傳統的ObserverSubject
      __checkObsolete__(['log']); //--傳統的Observer


      _export("Observer", Observer = class Observer {
        get isOnce() {
          return this._once;
        }

        get callback() {
          return this._callback;
        }

        constructor(callBackFun, contextID, once) {
          /**
           * 
           * @param callBackFun 只能使用lambda function
           * @param once 是否只送一次
           * 
           */
          this._callback = void 0;
          this._once = void 0;
          this.id = void 0;
          this._callback = callBackFun;
          this._once = once;
          this.id = contextID;
        }
        /*
        public compar(callback: Function):boolean
        {
            return this._callback === callback;
        }*/


        compar(callback, observerID) {
          if (callback) {
            return observerID == this.id && callback == this.callback;
          } else {
            return observerID == this.id;
          }
        }

        notify(sub) //public async notify(sub:string,...args: any):Promise<any> 
        {
          var _arguments = arguments,
              _this = this;

          return _asyncToGenerator(function* () {
            for (var _len = _arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = _arguments[_key];
            }

            log('check_notify@@', sub, args);
            return _this._callback.call(_this, sub, args);
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=696c800ed97078dbf88bec9af600ef74dc515ea3.js.map
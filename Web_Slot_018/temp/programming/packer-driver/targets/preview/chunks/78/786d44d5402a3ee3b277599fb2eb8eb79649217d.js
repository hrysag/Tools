System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Observer, _crd, observerIdSymbol;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  _export("Observer", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "08437kSwjpKj5TL+5naY1XO", "Observer", undefined);
      /**
       * Created by EricHuang 
       */
      //--傳統的ObserverSubject
      //--傳統的Observer


      observerIdSymbol = Symbol('observerId'); //  利用Symbol來建立獨一的key(ES6)

      _export("Observer", Observer = class Observer {
        //public id: string;----以symbol取代
        get isOnce() {
          return this._once;
        }

        get callback() {
          return this._callback;
        }

        constructor(callBackFun, instance, once) {
          //-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
          //-https://pjchender.dev/javascript/js-symbols/

          /**
           * 
           * @param callBackFun 只能使用lambda function
           * @param once 是否只送一次
           * 
           */
          this[observerIdSymbol] = void 0;
          // 使用 Symbol 作為唯一標識符
          this._callback = void 0;
          this._once = void 0;
          this._instance = void 0;
          this._callback = callBackFun;
          this._once = once != null ? once : false;
          this[observerIdSymbol] = Symbol(); // 生成唯一的 Symbol

          this._instance = instance;
        } //public compar(callback: Function, observer: Observer): boolean {


        compar(callback, instance) {
          /*
          if (callback) {
                return this[observerIdSymbol] === observer[observerIdSymbol] && callback === this.callback;
            } else {
                return this[observerIdSymbol] === observer[observerIdSymbol];
          }*/
          if (instance) {
            return callback === this.callback && instance === this._instance;
          } else {
            return callback === this.callback;
          }
        }

        notify(sub) {
          var _arguments = arguments,
              _this = this;

          return _asyncToGenerator(function* () {
            for (var _len = _arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = _arguments[_key];
            }

            return _this._callback.call(_this, sub, args);
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=786d44d5402a3ee3b277599fb2eb8eb79649217d.js.map
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Observer, _crd, observerIdSymbol;

  _export("Observer", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e89f1n/6MdGcqjzgbhDWtTv", "Observer", undefined);
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

        async notify(sub, ...args) {
          // return this._callback.call(this, sub, args);
          return this._callback.apply(this._instance, args); //--20250819
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=576999a4a19401cb07bc8301e6ef49a1b29f4e84.js.map
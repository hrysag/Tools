System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, Observer, _crd;

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

        async notify(sub, ...args) //public async notify(sub:string,...args: any):Promise<any> 
        {
          log('check_notify@@', sub, args);
          return this._callback.call(this, sub, args);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=678fab14fae92354313de04cd7e3ad5487cf9875.js.map
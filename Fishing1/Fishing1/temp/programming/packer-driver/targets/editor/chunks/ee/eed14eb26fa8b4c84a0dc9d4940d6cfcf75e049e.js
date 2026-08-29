System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, TestConnectStrategy, _crd;

  function _reportPossibleCrUseOfIfConnectStrategy(extras) {
    _reporterNs.report("IfConnectStrategy", "../game/strategy/Strategy", _context.meta, extras);
  }

  _export("TestConnectStrategy", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f54b42hnopDzrxgB3ttLIVw", "TestConnectStrategy", undefined);
      /**
       * Created by EricHuang on 2023/9/12.
       * 
       */


      __checkObsolete__(['log']);

      //--for test
      _export("TestConnectStrategy", TestConnectStrategy = class TestConnectStrategy {
        /**
         * 有可能每一代的捕魚產品他傳送的資料差距過大,或是
         * 有新增不同的特殊功能之類的,所以與server來回的這段就直接用策略模式來達到
         * 因不同產品的需求來做抽換
         */
        //public  strategyConnectDataFromPomelo:(code: string, data: any)=>Promise<any> 
        //=async(code: string, data: any):Promise<any> =>
        //--箭頭函是沒辦法在定義成屬性後用async
        constructor() {
          log('hellooo_TestConnectStrategy');
        }

        strategyConnectDataFromPomelo(code, data) {
          let sendEvent;
          let returnObj;

          switch (code) {
            case 'test1':
              returnObj = {
                id: data.id,
                set: data.set
              };
              break;

            case 'test2':
              returnObj = {
                bullet: data.bullet,
                info: data.info
              };
              break;
          }

          sendEvent = {
            type: code,
            sendObject: returnObj
          };
          return sendEvent;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eed14eb26fa8b4c84a0dc9d4940d6cfcf75e049e.js.map
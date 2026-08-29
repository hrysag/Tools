System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GlobalAccessFacade, _crd;

  function _reportPossibleCrUseOfGlobalReader(extras) {
    _reporterNs.report("GlobalReader", "./IGameGlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalWriter(extras) {
    _reporterNs.report("GlobalWriter", "./IGameGlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicGameGlobalData(extras) {
    _reporterNs.report("BasicGameGlobalData", "./BasicGameGlobalData", _context.meta, extras);
  }

  _export("GlobalAccessFacade", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4c8d0agU4dJiIzqQ2Ii3fuz", "GlobalAccessFacade", undefined);
      /**
       * @author:Eric 20250805
       * @description:
       * 這個是給舊版程式碼使用的..因為之前在開發的時候已經寫一狗票了..要改我很麻煩
       * 只好用這個facade來包裝.
       * 
       */


      _export("GlobalAccessFacade", GlobalAccessFacade = class GlobalAccessFacade {
        constructor() {
          this._reader = null;
          this._writer = null;
        }

        // GameManager 在 init 後呼叫，注入 writer（不要暴露寫入金鑰）
        register(store, writer) {
          this._reader = store.getReader();
          this._writer = writer;
        }
        /**
         * 
         * @param key 需要金鑰才能讀寫,沒有就只能讀
         * @param value 
         */


        setGlobalData(key, value) {
          if (!this._writer) throw new Error("GlobalAccessFacade not registered (no writer). Call register() after init().");

          this._writer.set(key, value);
        }

        getGlobalData(key) {
          if (!this._reader) throw new Error("GlobalAccessFacade not registered (no reader). Call register() after init().");
          return this._reader.get(key);
        }

        patch(partial) {
          if (!this._writer) throw new Error("GlobalAccessFacade not registered (no writer). Call register() after init().");

          this._writer.patch(partial);
        }

        snapshot() {
          if (!this._reader) throw new Error("GlobalAccessFacade not registered (no reader). Call register() after init().");
          return this._reader.snapshot();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2e36e0b8ef5c54737c3a3f48b1690c268440de14.js.map
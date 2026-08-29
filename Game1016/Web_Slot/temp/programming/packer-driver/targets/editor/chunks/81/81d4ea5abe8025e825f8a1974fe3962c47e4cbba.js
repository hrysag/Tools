System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GLOBAL_DATA_WRITE_KEY, BasicGameGlobalData, _crd;

  function _reportPossibleCrUseOfGLOBAL_DATA_WRITE_KEY(extras) {
    _reporterNs.report("GLOBAL_DATA_WRITE_KEY", "./GlobalDataWriteKey", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalReader(extras) {
    _reporterNs.report("GlobalReader", "./IGameGlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalWriter(extras) {
    _reporterNs.report("GlobalWriter", "./IGameGlobalData", _context.meta, extras);
  }

  _export("BasicGameGlobalData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GLOBAL_DATA_WRITE_KEY = _unresolved_2.GLOBAL_DATA_WRITE_KEY;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc2e1nur1xNO4vbzsiC5/fp", "BasicGameGlobalData", undefined);
      /**
       * @author:Eric 20250805 
       * @description:
       * 使用singleton模式來管理遊戲全局數據
       * 利用泛型來支持不同類型的數據
       * 你可以自己訂一個個物件 裡面的屬性就是你想要記錄的資料
       * 當使用get/set方法時，會強制要求這個keyValue並須對應T所擁有的型別才能寫入與讀出
       * -https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
       */


      _export("BasicGameGlobalData", BasicGameGlobalData = class BasicGameGlobalData {
        static getInstance() {
          if (!BasicGameGlobalData._instance) {
            BasicGameGlobalData._instance = new BasicGameGlobalData();
          }

          return BasicGameGlobalData._instance;
        }

        constructor() {
          this._data = void 0;
          this._inited = false;

          if (BasicGameGlobalData._instance) {
            throw new Error("BasicGameGlobalData is a singleton class, use getInstance() to access it.");
          }

          BasicGameGlobalData._instance = this;
        }

        init(data) {
          if (this._inited) throw new Error("BasicGameGlobalData already initialized.");
          this._data = data;
          this._inited = true;
        }

        getReader() {
          return {
            get: this.get.bind(this),
            snapshot: this.snapshot.bind(this)
          };
        }

        createWriter(writeKey) {
          this.ensureInit();
          if (writeKey !== (_crd && GLOBAL_DATA_WRITE_KEY === void 0 ? (_reportPossibleCrUseOfGLOBAL_DATA_WRITE_KEY({
            error: Error()
          }), GLOBAL_DATA_WRITE_KEY) : GLOBAL_DATA_WRITE_KEY)) throw new Error("Write access denied.");
          return {
            set: (key, value) => {
              this._data[key] = value;
            },
            patch: partial => {
              Object.assign(this._data, partial);
            }
          };
        } // ---- internal ----


        ensureInit() {
          if (!this._inited) throw new Error("BasicGameGlobalData is not initialized.");
        }

        get(key) {
          this.ensureInit();
          return this._data[key];
        }

        snapshot() {
          this.ensureInit(); //-https://flytoleisure.medium.com/javassript-%E9%97%9C%E6%96%BCobject-freeze%E7%9A%84%E6%B7%BA%E5%87%8D%E7%B5%90%E5%8F%8A%E6%87%89%E5%B0%8D%E6%96%B9%E6%B3%95-2b0592869222
          //-這裡用clone的方式來避免外部直接改動_data

          return Object.freeze({ ...this._data
          });
        }

      });

      BasicGameGlobalData._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=81d4ea5abe8025e825f8a1974fe3962c47e4cbba.js.map
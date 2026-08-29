System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ElementPool, ElementPoolManager, _crd;

  /**
   * 添加物件池 ID (麻煩需要經由 ElementPoolManager 的 Class 加上此 class decorator)
   * @param poolID 物件池 ID
   * @returns class decorator
   */
  function AddPoolID(poolID) {
    return function (constructor) {
      var _class;

      console.log("AddPoolID", constructor);
      return _class = class extends constructor {}, _class.poolID = poolID, _class;
    };
  }

  _export({
    AddPoolID: AddPoolID,
    ElementPoolManager: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "506daqft8NCfaMx8Pfb0Ho7", "ElementPoolManager", undefined);

      ElementPool = class ElementPool {
        constructor() {
          this.ref = void 0;
          this.arr = void 0;
          this._cloneID = 0;
          this.arr = [];
        }

        takeOut() {
          let element;

          if (this.arr.length > 0) {
            element = this.arr.pop();
          } else {
            element = this.ref.clone(this.ref.constructor.name + this._cloneID.toString());
            this._cloneID++;
          }

          return element;
        }

        pushIn(element) {
          if (!this.ref) {
            this.ref = element;
          }

          this.arr.push(element);
        }

      };

      _export("ElementPoolManager", ElementPoolManager = class ElementPoolManager {
        constructor() {
          this.pool = {};
        }

        static get instance() {
          if (!ElementPoolManager._instance) {
            ElementPoolManager._instance = new ElementPoolManager();
          }

          return ElementPoolManager._instance;
        }

        /**
         * 取出物件
         * @param elementClass 物件 Class
         * @returns (實體)物件
         */
        takeOut(elementClass) {
          let className = elementClass["poolID"];
          let element;

          if (!this.pool[className]) {
            this.pool[className] = new ElementPool();
            element = new elementClass();
            element.init();
            this.pool[className].pushIn(element);
          }

          return this.pool[className].takeOut();
        }
        /**
         * 存放(回收)物件
         * @param element (實體)物件
         */


        pushIn(element) {
          const className = element.constructor["poolID"];

          if (!this.pool[className]) {
            this.pool[className] = new ElementPool();
          }

          this.pool[className].pushIn(element);
        }

      });

      ElementPoolManager._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ac3575459f6f88456971d0f8a8f565e2ee3d8c5e.js.map
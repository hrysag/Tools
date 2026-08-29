System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  // 在方法前加入該裝飾器，可在方法執行完時顯示方法總執行時間
  // 測試範例: TestUnitExample.ts
  function LogExecutionTime(target, propertyKey, descriptor) {
    const original = descriptor.value;

    descriptor.value = async function (...args) {
      const startTime = Date.now();
      const result = await original.apply(this, args);
      const endTime = Date.now();
      console.log(`${this.constructor.name}.${propertyKey} | execute ${(endTime - startTime) / 1000}s`);
      return result;
    };

    return descriptor;
  }

  _export("LogExecutionTime", LogExecutionTime);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9d50fmV3JVNeYekHWH0C1TG", "LogExecutionTIme", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0160cd3f0b588e6a3622aca3bc204fd5c8558dec.js.map
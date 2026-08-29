System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, autoTestRegistry;

  // 在方法前加入該裝飾器，可讓方法顯示在 TestTool → TestScript 的裝飾器測試按鈕列表
  // 測試範例: TestUnitExample.ts
  function UnitTest(...args) {
    return function (target, propertyKey) {
      if (!autoTestRegistry.has(target.constructor)) {
        autoTestRegistry.set(target.constructor, []);
      }

      autoTestRegistry.get(target.constructor).push({
        name: propertyKey,
        args
      });
    };
  }

  _export("UnitTest", UnitTest);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "89f86gPxhtC4o6WUwewdRde", "TestableFunction", undefined);

      _export("autoTestRegistry", autoTestRegistry = new Map());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=940f7d5bfb24ad7f3d61ee237c16465b01d9bfa8.js.map
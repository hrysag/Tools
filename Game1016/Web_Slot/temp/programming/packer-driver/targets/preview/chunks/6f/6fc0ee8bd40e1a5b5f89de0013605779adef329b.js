System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  // 在方法前加入該裝飾器，可在方法執行完時顯示方法總執行時間
  // 測試範例: TestUnitExample.ts
  function LogExecutionTime(target, propertyKey, descriptor) {
    var original = descriptor.value;
    descriptor.value = /*#__PURE__*/_asyncToGenerator(function* () {
      var startTime = Date.now();

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var result = yield original.apply(this, args);
      var endTime = Date.now();
      console.log(this.constructor.name + "." + propertyKey + " | execute " + (endTime - startTime) / 1000 + "s");
      return result;
    });
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
//# sourceMappingURL=6fc0ee8bd40e1a5b5f89de0013605779adef329b.js.map
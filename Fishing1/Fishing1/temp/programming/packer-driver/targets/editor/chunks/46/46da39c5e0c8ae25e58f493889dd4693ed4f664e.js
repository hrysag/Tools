System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  /**
   * 在type的建構對象，向名稱name的array属性中添加string值property，
   * 在T的對象中(class),添加動態的屬性
   * @param name 要添加屬性的class名稱
   * @param type 添加到的目標抽象對象
   * @param property 屬性名稱
   */
  function PropertyDecorator(name, type, property) {
    if (!type.constructor.hasOwnProperty(name)) {
      //type.connector 返回type的class，比喻type=AbstractViewModel，其中的type.constructor=login_view_model型別
      type.constructor[name] = [].concat(Object.getPrototypeOf(type).constructor[name] || []);
    }

    if (-1 === type.constructor[name].indexOf(property)) {
      type.constructor[name].push(property);
    }
  }

  _export("PropertyDecorator", PropertyDecorator);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eda2f1BpBpJ0ognwU7yx8HN", "PropertyDecorator", undefined);
      /**
       * Created by EricHuang on 2023/9/06.
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=46da39c5e0c8ae25e58f493889dd4693ed4f664e.js.map
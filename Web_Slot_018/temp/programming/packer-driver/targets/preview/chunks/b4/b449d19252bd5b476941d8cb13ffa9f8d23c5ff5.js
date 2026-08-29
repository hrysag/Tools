System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, BasicPoolObject;

  function _reportPossibleCrUseOfIBasicPoolObject(extras) {
    _reporterNs.report("IBasicPoolObject", "../Definitions/IBasicPoolObject", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "caeb5o8ejVI9qiBND09xbHC", "BasicPoolObject", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BasicPoolObject", BasicPoolObject = (_dec = ccclass('BasicPoolObject'), _dec(_class = class BasicPoolObject extends Component {
        beforeDestroy() {}

        resetData() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b449d19252bd5b476941d8cb13ffa9f8d23c5ff5.js.map
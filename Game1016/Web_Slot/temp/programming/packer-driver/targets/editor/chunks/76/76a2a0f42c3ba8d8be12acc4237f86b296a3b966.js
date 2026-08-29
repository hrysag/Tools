System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, BasicPoolObject;

  function _reportPossibleCrUseOfIBasicPoolObjComponent(extras) {
    _reporterNs.report("IBasicPoolObjComponent", "../Definitions/IBasicPoolObject", _context.meta, extras);
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

      _cclegacy._RF.push({}, "9dc67YGTJNNro3VS3wiLv2I", "BasicPoolObject", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BasicPoolObject", BasicPoolObject = (_dec = ccclass('BasicPoolObject'), _dec(_class = class BasicPoolObject extends Component {
        onObjInstance() {}

        onAfterDestroy() {} //-不能用onDestroy這個字component拿去用了


        beforeDestroy() {}

        resetData() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=76a2a0f42c3ba8d8be12acc4237f86b296a3b966.js.map
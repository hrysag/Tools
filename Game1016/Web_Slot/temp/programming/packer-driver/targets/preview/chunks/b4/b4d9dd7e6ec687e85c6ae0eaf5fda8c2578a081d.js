System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, IWindowResize;

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "./Config", _context.meta, extras);
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

      _cclegacy._RF.push({}, "d1913WfvpZCH4lahpnN3o18", "IWindowResize", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IWindowResize", IWindowResize = (_dec = ccclass('IWindowResize'), _dec(_class = class IWindowResize extends Component {
        onWindowResize(orientation) {
          throw new Error('Method not implemented.');
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b4d9dd7e6ec687e85c6ae0eaf5fda8c2578a081d.js.map
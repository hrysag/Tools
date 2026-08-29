System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Debug, _dec, _class, _crd, ccclass, property, AniEventTest;

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../../Scripts/ModuleEntry", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Debug = _unresolved_2.Debug;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b741dAL345FU4fRNMTHzlRF", "AniEventTest", undefined);

      __checkObsolete__(['_decorator', 'Component', 'log', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AniEventTest", AniEventTest = (_dec = ccclass('AniEventTest'), _dec(_class = class AniEventTest extends Component {
        start() {}

        update(deltaTime) {}

        onAniEvent() {
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log("onAniEvent call !!!");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cae966ce1c38a8fac076d228d4b6cd1e8378cbfc.js.map
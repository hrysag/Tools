System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ReelView, _dec, _class, _crd, ccclass, property, ReelViewTest;

  function _reportPossibleCrUseOfReelView(extras) {
    _reporterNs.report("ReelView", "../../ReelView", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ReelView = _unresolved_2.ReelView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2400ap/9OlDwJN5coks9cSi", "ReelViewTest", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ReelViewTest", ReelViewTest = (_dec = ccclass('ReelViewTest'), _dec(_class = class ReelViewTest extends (_crd && ReelView === void 0 ? (_reportPossibleCrUseOfReelView({
        error: Error()
      }), ReelView) : ReelView) {
        setAllReelBrightness(isDark) {
          for (var reelID = 0; reelID < this.reelAmount; reelID++) {
            this.setIconBrightness(reelID, isDark);
          }
        }

        allReelRollEnd() {
          this.setAllReelBrightness(false);
          super.allReelRollEnd();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d1c6394afbc2740efc0e0c9ff75a77ca0cda13e2.js.map
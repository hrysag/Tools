System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ReelView, _dec, _class, _crd, ccclass, property, ReelViewTest;

  function _reportPossibleCrUseOfReelView(extras) {
    _reporterNs.report("ReelView", "../../Scripts/ReelView", _context.meta, extras);
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

      _cclegacy._RF.push({}, "e382a6iqexDoZWw9H7mt2BC", "ReelViewTest", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ReelViewTest", ReelViewTest = (_dec = ccclass('ReelViewTest'), _dec(_class = class ReelViewTest extends (_crd && ReelView === void 0 ? (_reportPossibleCrUseOfReelView({
        error: Error()
      }), ReelView) : ReelView) {
        setAllReelBrightness(isDark) {
          for (let reelID = 0; reelID < this.reelAmount; reelID++) {
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
//# sourceMappingURL=b6dfac5b353ae7bfb7c11bf88413ee29936478b4.js.map
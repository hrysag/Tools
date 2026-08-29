System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, IconReelView, _dec, _class, _crd, ccclass, property, IconReelViewTest;

  function _reportPossibleCrUseOfIconReelView(extras) {
    _reporterNs.report("IconReelView", "../../Scripts/IconReelView", _context.meta, extras);
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
      IconReelView = _unresolved_2.IconReelView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10a5aFUxutN7ruzryXIQCP1", "IconReelViewTest", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IconReelViewTest", IconReelViewTest = (_dec = ccclass('IconReelViewTest'), _dec(_class = class IconReelViewTest extends (_crd && IconReelView === void 0 ? (_reportPossibleCrUseOfIconReelView({
        error: Error()
      }), IconReelView) : IconReelView) {
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
//# sourceMappingURL=7c2cdbde2a2ac5809c110d70791462600e2690b5.js.map
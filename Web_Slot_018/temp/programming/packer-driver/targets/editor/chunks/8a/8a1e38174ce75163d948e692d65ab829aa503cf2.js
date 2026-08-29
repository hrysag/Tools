System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, HistoryItemInfo, _crd, ccclass, property;

  _export("HistoryItemInfo", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "84b40fL+Y9LD5P75Yn2LRhK", "HistoryItemInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HistoryItemInfo", HistoryItemInfo = class HistoryItemInfo {
        constructor() {
          this.gameCode = '';
          this.date = 0;
          this.bet = 0;
          this.winScore = 0;
          this.betID = '';
          this.slotData = '';
          this.playerId = '';
          this.version = '';
          this.beforeTotal = 0;
          this.afterTotal = 0;
          this.featureRatio = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a1e38174ce75163d948e692d65ab829aa503cf2.js.map
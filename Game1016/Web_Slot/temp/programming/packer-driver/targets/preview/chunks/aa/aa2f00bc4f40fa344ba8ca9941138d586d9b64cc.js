System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AbstractProcessSlotSymbolAniData, ProcessSlotSymbolAniData1016, _crd;

  function _reportPossibleCrUseOfAbstractProcessSlotSymbolAniData(extras) {
    _reporterNs.report("AbstractProcessSlotSymbolAniData", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProcessInput(extras) {
    _reporterNs.report("IProcessInput", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayAniData(extras) {
    _reporterNs.report("IPlayAniData", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISymbolAniKey(extras) {
    _reporterNs.report("ISymbolAniKey", "../ReferencePath", _context.meta, extras);
  }

  _export("ProcessSlotSymbolAniData1016", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AbstractProcessSlotSymbolAniData = _unresolved_2.AbstractProcessSlotSymbolAniData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "853e71cNQVCqbsO60Qtt+L2", "ProcessSlotSymbolAniData1016", undefined);

      /**
       * 有些專案會有複雜的情況,可能雖然是同一個prefab但是會有不同的skin或是不同的animation key
       * 在這邊可以實做這些輔助你要播放的索引資料.
       * 這樣就可以把這些繁瑣的塞資料過程抽離主要流程且容易擴增
       * TIP:
       * 如果你不想要懶人建立prefab的話,可以利用IPlayAniData的資料幫助你手動建立與填入相關播放資訊
       */
      _export("ProcessSlotSymbolAniData1016", ProcessSlotSymbolAniData1016 = class ProcessSlotSymbolAniData1016 extends (_crd && AbstractProcessSlotSymbolAniData === void 0 ? (_reportPossibleCrUseOfAbstractProcessSlotSymbolAniData({
        error: Error()
      }), AbstractProcessSlotSymbolAniData) : AbstractProcessSlotSymbolAniData) {
        constructor() {
          super();
          this._prefabKey = void 0;
          this._prefabKey = new Map([[0, 'icon_00'], [1, 'icon_01'], [2, 'icon_02'], [3, 'icon_03'], [4, 'icon_04'], [5, 'icon_05'], [6, 'icon_06'], [7, 'icon_07'], [8, 'icon_08'], [9, 'icon_09'], [10, 'icon_10_inGame'], [99, 'Iconbox_inGame'] //--連線框
          ]);
        } //---這邊可以實作復合的邏輯去產出不同的 prefabKey


        getPrefabKey(inp) {
          return this.getKeyFromMap(inp.symbolId) || 'default_icon';
        } //--就是存這筆資料在map當中


        createPlayAniData(inp, containerNodeId) {
          var playAniData = {
            aniId: '',
            // 預設動畫ID
            reelIndex: inp.reelIndex,
            iconIndex: inp.iconIndex,
            symbolId: inp.symbolId,
            prefabKey: this.getPrefabKey(inp),
            // 使用 getPrefabKey 方法獲取 prefabKey
            tokenId: '',
            wPos: null,
            aniInfo: null,
            groupId: inp.groupId || -1 // 預設值為 -1

          };
          return playAniData;
        }

        getKeyFromMap(key) {
          return this._prefabKey.get(key);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aa2f00bc4f40fa344ba8ca9941138d586d9b64cc.js.map
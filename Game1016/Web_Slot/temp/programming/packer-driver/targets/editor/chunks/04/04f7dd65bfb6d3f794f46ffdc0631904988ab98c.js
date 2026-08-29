System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AbstractProcessSlotSymbolAniData, _crd;

  function _reportPossibleCrUseOfIProcessSlotSymbolAniData(extras) {
    _reporterNs.report("IProcessSlotSymbolAniData", "./IAniBuilder", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProcessInput(extras) {
    _reporterNs.report("IProcessInput", "./IAniBuilder", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayAniData(extras) {
    _reporterNs.report("IPlayAniData", "./IAniBuilder", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISymbolAniKey(extras) {
    _reporterNs.report("ISymbolAniKey", "./IAniBuilder", _context.meta, extras);
  }

  _export("AbstractProcessSlotSymbolAniData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e5bcax2r5FLqI6R1PAKyqK7", "AbstractProcessSlotSymbolAniData", undefined);

      _export("AbstractProcessSlotSymbolAniData", AbstractProcessSlotSymbolAniData = class AbstractProcessSlotSymbolAniData {
        //getAnimationPlayInfo(inp: T): AnimationPlayInfo | null {
        getAnimationPlayInfo(inp) {
          return null; // 預設外部自行塞；要內建規則就 override
        }
        /**
         * 
         * @param inp 
         * interface IProcessInput
            {
                symbolId: number;       // server symbol id
                reelIndex: number;
                iconIndex: number;
                score: number;
                groupId?: number[];       // 伺服器給的中線群組（若有）
                worldPos?: Vec3;        // 需要時才填
            }
         * @returns
         * interface ISymbolAniKey {
                symbolId: number;
                reelIndex: number;
                symbolIndex: number;
                aniId:string;
                groupId?: number[]; // 可選，server給的中線群組（若有）
                prefabKey?: string; // 可選，預設的prefabKey
            } 
         */


        getAniKey(inp) {
          const base = this.buildBaseAniKey(inp);
          return base; // 轉型為 K，確保符合 ISymbolAniKey 的結構
        }

        setAniGroup(inp, groupId) {
          inp.groupId = groupId;
        }

        buildBaseAniKey(inp) {
          const base = {
            symbolId: inp.symbolId,
            reelIndex: inp.reelIndex,
            // 若你的 ISymbolAniKey 需要的是 symbolIndex，請把來源對齊：
            iconIndex: inp.iconIndex,
            groupId: inp.groupId,
            aniId: ""
          };
          base.prefabKey = this.getPrefabKey(inp);
          return base;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=04f7dd65bfb6d3f794f46ffdc0631904988ab98c.js.map
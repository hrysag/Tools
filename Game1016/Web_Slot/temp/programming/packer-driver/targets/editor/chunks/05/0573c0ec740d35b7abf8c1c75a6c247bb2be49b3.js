System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AbstractProcessSlotSymbolAniData, BasicProcessSlotSymbolAniDataExample, _crd;

  function _reportPossibleCrUseOfAbstractProcessSlotSymbolAniData(extras) {
    _reporterNs.report("AbstractProcessSlotSymbolAniData", "./AbstractProcessSlotSymbolAniData", _context.meta, extras);
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

  _export("BasicProcessSlotSymbolAniDataExample", void 0);

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

      _cclegacy._RF.push({}, "d2811/LBzFOGLUrPYt4TEcB", "BasicProcessSlotSymbolAniDataExample", undefined);

      /**
       * 基本的處理動畫資料類別
       * T= IProcessInput,
       * P= IPlayAniData,
       * K= ISymbolAniKey
       */
      _export("BasicProcessSlotSymbolAniDataExample", BasicProcessSlotSymbolAniDataExample = class BasicProcessSlotSymbolAniDataExample extends (_crd && AbstractProcessSlotSymbolAniData === void 0 ? (_reportPossibleCrUseOfAbstractProcessSlotSymbolAniData({
        error: Error()
      }), AbstractProcessSlotSymbolAniData) : AbstractProcessSlotSymbolAniData) {
        getPrefabKey(inp) {
          //--自己寫產生的條件
          return '';
        }

        createPlayAniData(inp, containerNodeId) {
          //--自己寫產生的條件
          return null;
        }

        getAniKey(inp) {
          //--自己寫產生的條件
          //const base = this.buildBaseAniKey(inp);
          //return base as K; // 轉型為 K，確保符合 ISymbolAniKey 的結構
          return null;
        }

        getAnimationPlayInfo(inp) {
          //--自己寫產生的條件
          // 預設外部自行塞；要內建規則就 override
          return null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0573c0ec740d35b7abf8c1c75a6c247bb2be49b3.js.map
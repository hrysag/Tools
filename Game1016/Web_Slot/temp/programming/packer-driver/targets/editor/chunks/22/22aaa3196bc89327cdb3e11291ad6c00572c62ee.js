System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SymbolAniHandoffManager, DirtyHandoffManager, _crd;

  function _reportPossibleCrUseOfSymbolAniHandoffManager(extras) {
    _reporterNs.report("SymbolAniHandoffManager", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReelInfo(extras) {
    _reporterNs.report("IReelInfo", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunctionType(extras) {
    _reporterNs.report("FunctionType", "./IFunctionOwnerAgent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFunctionOwnerAgent(extras) {
    _reporterNs.report("IFunctionOwnerAgent", "./IFunctionOwnerAgent", _context.meta, extras);
  }

  _export("DirtyHandoffManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SymbolAniHandoffManager = _unresolved_2.SymbolAniHandoffManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cadd2HbsnpCAYSoX74hHDeD", "DirtyHandoffManager", undefined);

      _export("DirtyHandoffManager", DirtyHandoffManager = class DirtyHandoffManager extends (_crd && SymbolAniHandoffManager === void 0 ? (_reportPossibleCrUseOfSymbolAniHandoffManager({
        error: Error()
      }), SymbolAniHandoffManager) : SymbolAniHandoffManager) {
        /**
         * 這個DirtyHandoffManager是為了處理那些需要跨系統呼叫的dirty handoff
         * 主要是為了讓某些系統可以在不直接依賴其他系統的情況下進行操作
         */
        constructor() {
          super();
        }

        processOwnerFunction(processType) {
          // 在這裡實現跨系統呼叫owner的邏輯
          // 例如，根據processType的類型來決定要執行什麼操作
          const owner = this.getOwnerById(processType.ownerId);

          if (!owner) {
            console.warn(`Owner with ID ${processType.ownerId} not found.`);
            return;
          }

          owner.crossProcess(processType);
        }

        processMultiOwnerFunction(processTypes) {
          // 處理多個擁有者的函數呼叫
          for (const processType of processTypes) {
            this.processOwnerFunction(processType);
          }
        }

        processMultiFunctionBySameOwner(processTypes, owner) {
          // 處理同一個擁有者的多個函數呼叫
          const ownerAgent = this.getOwnerById(owner);

          if (!ownerAgent) {
            console.warn(`Owner with ID ${owner} not found.`);
            return;
          }

          ownerAgent.crossMultiProcess(processTypes);
        } // 可以在這裡添加特定於DirtyHandoffManager的方法


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=22aaa3196bc89327cdb3e11291ad6c00572c62ee.js.map
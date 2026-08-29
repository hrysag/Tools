System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CrossSystemAniServiceFacade, DirtyCrossSysServiceFacade, _crd;

  function _reportPossibleCrUseOfCrossSystemAniServiceFacade(extras) {
    _reporterNs.report("CrossSystemAniServiceFacade", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayAniData(extras) {
    _reporterNs.report("IPlayAniData", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISymbolAniKey(extras) {
    _reporterNs.report("ISymbolAniKey", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReelInfo(extras) {
    _reporterNs.report("IReelInfo", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIDirtyCrossSysServiceFacade(extras) {
    _reporterNs.report("IDirtyCrossSysServiceFacade", "./IDirtyCrossSysServiceFacade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunctionType(extras) {
    _reporterNs.report("FunctionType", "./IFunctionOwnerAgent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFunctionOwnerAgent(extras) {
    _reporterNs.report("IFunctionOwnerAgent", "./IFunctionOwnerAgent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDirtyHandoffManager(extras) {
    _reporterNs.report("DirtyHandoffManager", "./DirtyHandoffManager", _context.meta, extras);
  }

  _export("DirtyCrossSysServiceFacade", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      CrossSystemAniServiceFacade = _unresolved_2.CrossSystemAniServiceFacade;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fcd7bclsE9JpbdBXflW25hB", "DirtyCrossSysServiceFacade", undefined);

      __checkObsolete__(['Node']);

      _export("DirtyCrossSysServiceFacade", DirtyCrossSysServiceFacade = class DirtyCrossSysServiceFacade extends (_crd && CrossSystemAniServiceFacade === void 0 ? (_reportPossibleCrUseOfCrossSystemAniServiceFacade({
        error: Error()
      }), CrossSystemAniServiceFacade) : CrossSystemAniServiceFacade) {
        processOwnerFunction(processType) {
          this._handoffManager.processOwnerFunction(processType);
        }

        processMultiOwnerFunction(processTypes) {
          this._handoffManager.processMultiOwnerFunction(processTypes);
        }

        processMultiFunctionBySameOwner(processTypes, owner) {
          this._handoffManager.processMultiFunctionBySameOwner(processTypes, owner);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f88d7208185af01cb0de46e846b89630fdb955d1.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UniReel, StopType, UniIconBase, UniReelView, UniSlotMachine, UniMovement, _crd;

  function _reportPossibleCrUseOfUniReel(extras) {
    _reporterNs.report("UniReel", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStopType(extras) {
    _reporterNs.report("StopType", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniIconBase(extras) {
    _reporterNs.report("UniIconBase", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolBase(extras) {
    _reporterNs.report("SymbolBase", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniReelView(extras) {
    _reporterNs.report("UniReelView", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniSlotMachine(extras) {
    _reporterNs.report("UniSlotMachine", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniMovement(extras) {
    _reporterNs.report("UniMovement", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReel(extras) {
    _reporterNs.report("IReel", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      UniReel = _unresolved_2.UniReel;
      StopType = _unresolved_2.StopType;
      UniIconBase = _unresolved_2.UniIconBase;
      UniReelView = _unresolved_2.UniReelView;
      UniSlotMachine = _unresolved_2.UniSlotMachine;
      UniMovement = _unresolved_2.UniMovement;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "60aa6u0kZFDYIFqhXeA0IzL", "ReferencePathForUniSlot", undefined); //----uniSlotMachineToolkit--


      //import { IDIAgentFactory } from './DIFactory/IDIAgentFactory';
      //import { DIAgentFactory } from './DIFactory/DIAgentFactory';
      //import { IMatchWildGroupResult, Direction } from './';
      //--匯出值
      _export("UniReel", UniReel);

      _export("StopType", StopType);

      _export("UniIconBase", UniIconBase);

      _export("UniReelView", UniReelView);

      _export("UniSlotMachine", UniSlotMachine);

      _export("UniMovement", UniMovement); //--interface(匯出型別)


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bb401dff71b8cda6fbdb99f87a020f6531916c70.js.map
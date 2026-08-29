System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SlotMediator, _crd;

  function _reportPossibleCrUseOfIMediatorColleague(extras) {
    _reporterNs.report("IMediatorColleague", "./IMediator/ISlotCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISlotCommand(extras) {
    _reporterNs.report("ISlotCommand", "./IMediator/ISlotCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISlotMediator(extras) {
    _reporterNs.report("ISlotMediator", "./IMediator/ISlotCommand", _context.meta, extras);
  }

  _export("SlotMediator", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b767ei5pqFBrZRPc2SUVCrz", "SlotMediator", undefined);

      _export("SlotMediator", SlotMediator = class SlotMediator {
        constructor(_machine, _reelView) {
          this._machine = _machine;
          this._reelView = _reelView;
        }

        sendToMachine(cmd) {
          //console.log('SlotMediator sendToMachine', cmd);
          this._machine.onMediatorCommand(cmd);
        }
        /*
        //--目前不需要先拔掉
        public broadcastToAllReels(cmd: ISlotCommand): void {
            //console.log('SlotMediator broadcastToAllReels', cmd);
        }*/

        /*
        //--目前不需要先拔掉
        public sendToReel(reelIndex: number, cmd: ISlotCommand): void {
            //console.log('SlotMediator sendToReel', reelIndex, cmd);
            this._reelView.onMediatorCommand(cmd);
        }*/


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e97b0c8b9ffa5d1df5e05cc83d302fdb10de8ffb.js.map
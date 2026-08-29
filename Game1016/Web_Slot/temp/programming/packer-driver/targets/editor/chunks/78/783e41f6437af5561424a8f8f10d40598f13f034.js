System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, SlotRequestEvent, SlotResponseSubject, SlotNotifySubject;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e3732ILKytIvpxnbVrB2ea8", "DefinitionEventData1016", undefined);

      //--請求主題
      _export("SlotRequestEvent", SlotRequestEvent = /*#__PURE__*/function (SlotRequestEvent) {
        SlotRequestEvent["GET_WORLD_POSITION"] = "GetWorldPosition_Event";
        SlotRequestEvent["GET_SP_MOVEMENT"] = "GetSpMovement_Event";
        SlotRequestEvent["SET_W_AFTER_MOVEMENT"] = "SetWildAfterMovement_Event";
        return SlotRequestEvent;
      }({})); //--訂閱回覆主題


      _export("SlotResponseSubject", SlotResponseSubject = /*#__PURE__*/function (SlotResponseSubject) {
        SlotResponseSubject["RES_GAME_SLOT_SUBJECT"] = "ResGameSlotSubject";
        return SlotResponseSubject;
      }({}));

      _export("SlotNotifySubject", SlotNotifySubject = /*#__PURE__*/function (SlotNotifySubject) {
        SlotNotifySubject["GAME_SLOT_SUBJECT"] = "GameSlot_Subject";
        return SlotNotifySubject;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=783e41f6437af5561424a8f8f10d40598f13f034.js.map
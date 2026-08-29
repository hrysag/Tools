System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, AnimationEffectEvent, AutoAndLockEvent, GameEventBase, BaseEvent, LoadingEvent, GUIEvent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27e2dRNC+BGSr31zQbeozJw", "eventBase", undefined);
      /**
       * Created by EricHuang on 2023/9/17.
       * 
       */


      _export("AnimationEffectEvent", AnimationEffectEvent = /*#__PURE__*/function (AnimationEffectEvent) {
        AnimationEffectEvent["COMPLETE"] = "AnimationEffectEvent_complete";
        return AnimationEffectEvent;
      }({}));

      _export("AutoAndLockEvent", AutoAndLockEvent = /*#__PURE__*/function (AutoAndLockEvent) {
        AutoAndLockEvent["FISH_LOCK_IS_CLEAN"] = "AutoAndLockEvent_LockFishIsClean";
        AutoAndLockEvent["FISH_ADD_LOCK_AIM"] = "AutoAndLockEvent_addLockAim";
        AutoAndLockEvent["KILL_TARGET_BULLET"] = "AutoAndLockEvent_killtargetBullet";
        AutoAndLockEvent["KILL_TARGET_BULLETS"] = "AutoAndLockEvent_killtargetBullets";
        AutoAndLockEvent["REMOVE_FISH_AIMLOCK"] = "AutoAndLockEvent_removeFishAimLock";
        AutoAndLockEvent["UPDATE_BULLET_LOCK_TARGET"] = "AutoAndLockEvent_resetEndPositionAndFishTargetId";
        return AutoAndLockEvent;
      }({}));

      _export("GameEventBase", GameEventBase = /*#__PURE__*/function (GameEventBase) {
        GameEventBase["CLICK_SHOOT"] = "mouseBehaviorBase_click_shoot";
        GameEventBase["AUTO_SHOOT"] = "mouseBehaviorBase_auto_shoot";
        GameEventBase["BLOCK_CLICK"] = "mouseBehaviorBase_block_click";
        GameEventBase["KEYBOARD_DOWN"] = "mouseBehaviorBase_block_click";
        GameEventBase["CONNECTOR_EVT"] = "connector_evt";
        GameEventBase["CONNECTOR_PING_EVT"] = "connector_evt_Ping";
        return GameEventBase;
      }({}));

      _export("BaseEvent", BaseEvent = /*#__PURE__*/function (BaseEvent) {
        BaseEvent["COMPLETE"] = "baseEvent_complete";
        BaseEvent["CHANGE"] = "baseEvent_change";
        BaseEvent["REMOVED"] = "baseEvent_removed";
        BaseEvent["IO_ERROR"] = "baseEvent_ioError";
        BaseEvent["PLAY_ANI"] = "baseEvent_playAnimationn";
        return BaseEvent;
      }({}));

      _export("LoadingEvent", LoadingEvent = /*#__PURE__*/function (LoadingEvent) {
        LoadingEvent["LAYOUT_IS_READY"] = "LoadingEvent_LAYOUT_IS_READY";
        LoadingEvent["SINGLE_UI_IS_READY"] = "LoadingEvent_SINGLE_UI_IS_READY";
        LoadingEvent["SOUND_IS_READY"] = "LoadingEvent_SOUND_IS_READY";
        LoadingEvent["ASSETS_IS_READY"] = "LoadingEvent_ASSETS_IS_READY";
        LoadingEvent["ASSETS_IS_UPDATE"] = "LoadingEvent_ASSETS_IS_UPDATE";
        return LoadingEvent;
      }({}));

      _export("GUIEvent", GUIEvent = /*#__PURE__*/function (GUIEvent) {
        GUIEvent["ASSETS_IS_READY"] = "GUI_assetloadComplete";
        GUIEvent["SINGLE_UI_IS_READY"] = "GUI_singleUILayoutComplete";
        GUIEvent["LAYOUT_IS_READY"] = "GUI_LayoutIsReady";
        GUIEvent["LOBBY_IS_READY"] = "GUI_LobbyIsReady";
        GUIEvent["CHANG_BULLETS"] = "GUI_ChangeBullets";
        GUIEvent["CLEAN_BULLETS"] = "GUI_CleanAll_Bullets";
        GUIEvent["BTNAREA_EVT"] = "GUI_btnAreaEvent";
        GUIEvent["OPEN_READY_PLAYERINFO"] = "GUI_openCompleteEvt_PlayerInfo";
        GUIEvent["SET_PLAYER_ROOM"] = "GUI_setPlayerRoom";
        GUIEvent["SET_PLAYER_ROOM_EXIT"] = "GUI_setPlayerRoom_exit";
        GUIEvent["OPEN_EXCHANGE"] = "open_creditChange";
        GUIEvent["OPEN_EXCHANGE_FIRST"] = "open_creditChange_first";
        GUIEvent["CREDIT_EXCHANGE_ENTER"] = "CREDIT_EXCHANGE_ENTER";
        GUIEvent["CREDIT_EXCHANGE_EXIT"] = "CREDIT_EXCHANGE_EXIT";
        GUIEvent["BTN_MUTE"] = "GUI_MUTE";
        GUIEvent["BTN_HISTORY"] = "GUI_HISTORY";
        GUIEvent["BTN_HELP"] = "GUI_HELP";
        GUIEvent["BTN_DEPOSIT"] = "GUI_DEPOSIT";
        GUIEvent["BTN_EXIT"] = "GUI_EXIT";
        GUIEvent["BTN_EXCHANGE"] = "GUI_EXCHANGE";
        GUIEvent["BTN_AIM"] = "GUI_AIM";
        GUIEvent["BTN_MENU"] = "GUI_MENU";
        GUIEvent["USE_PROP"] = "GUI_USEPROP";
        GUIEvent["AUTO_SHOOT"] = "GUI_AUTO_SHOOT";
        GUIEvent["AIM_SHOOT"] = "GUI_AIM_SHOOT";
        GUIEvent["LOCK_DIRECTION_SHOOT"] = "GUI_LOCK_DIRECTION_SHOOT";
        GUIEvent["ALERT_CLOSE"] = "GUI_alert_close";
        GUIEvent["GUI_READY_CLOSE"] = "GUI_readyToClose";
        return GUIEvent;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=772aa81f354289a4ad7d95c01bc80572459106f5.js.map
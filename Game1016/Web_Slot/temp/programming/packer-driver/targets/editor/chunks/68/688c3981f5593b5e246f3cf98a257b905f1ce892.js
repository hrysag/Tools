System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd, DYN_NODE_PROPERTIES, CleanTrackType;

  function _reportPossibleCrUseOfIReelInfo(extras) {
    _reporterNs.report("IReelInfo", "../../BasicGameDataDefinition/BasicGameDataDefinition", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "63e41ijApJMua8/WJLEuHRc", "AnimationDataOptions", undefined);

      __checkObsolete__(['Vec3']);

      _export("DYN_NODE_PROPERTIES", DYN_NODE_PROPERTIES = {
        PREFAB_ID: 'prefabId',
        TOKEN_ID: 'tokenId',
        GROUP_ID: 'groupId',
        SYMBOL_ICON_INFO: 'symbolIconInfo',
        ANIMATION_CTRL: 'animationCtrl',
        //--減少每次find的消耗
        ADDED: 'prefabAdded',
        //---被創造過了(回收銷毀)
        LOCKED: 'locked',
        //--鎖定軸
        SWITCH: 'switchPos',
        //--改變位置(由腳往上長的,且最後一張是補牌)
        READY_HAND_STATUS: 'readyHandStatus',
        //--聽牌狀態
        FAST_MODE: 'fastMode',
        //--快速模式
        WHOLE_BOARD_READY_HAND: 'wholeBoardReadyHand',
        //--整個盤面有任意軸聽牌
        PLAY_COUNT: 'playCount',
        //--播放次數--沒用到
        IS_PLAYING_EXPECT: 'playingExpect',
        //--是否正在播放聽牌動畫
        REFERENCE_TARGET: 'referenceTarget',
        //--參考目標(用來對齊位置)
        OTHER: 'other' //--任意資料---因為這個資料被汙染了..showProcess有再用

      }); //--用來記錄for slotMachine的索引資料--
      //--20250812-使用IReelInfo取代原先的SlotMachineIndexInfo
      //--20250812-GroupAniData取代為interface原先的type(被拔出去給全遊戲使用)
      //--20250813-playIAniData取代為interface原先是type
      //--基礎共用的播放定義屬性


      ; //--for animation
      //--animation 特有的參數...

      ; // Spine 特有的參數...

      ; // MixedAnimation 特有的參數...

      ;

      _export("CleanTrackType", CleanTrackType = /*#__PURE__*/function (CleanTrackType) {
        CleanTrackType[CleanTrackType["All_TRACKS"] = 0] = "All_TRACKS";
        CleanTrackType[CleanTrackType["CURRENT_TRACK"] = 1] = "CURRENT_TRACK";
        CleanTrackType[CleanTrackType["EMPTY_ANI"] = 2] = "EMPTY_ANI";
        CleanTrackType[CleanTrackType["ALL_ANI"] = 3] = "ALL_ANI";
        return CleanTrackType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=688c3981f5593b5e246f3cf98a257b905f1ce892.js.map
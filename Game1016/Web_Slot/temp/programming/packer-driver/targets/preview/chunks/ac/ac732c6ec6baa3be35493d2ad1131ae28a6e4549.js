System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, DYN_NODE_PROPERTIES, AniSysTools, SymbolAniMediatorHooks1016, _crd;

  function _reportPossibleCrUseOfISymbolAniMediatorHooks(extras) {
    _reporterNs.report("ISymbolAniMediatorHooks", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayAniData(extras) {
    _reporterNs.report("IPlayAniData", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDYN_NODE_PROPERTIES(extras) {
    _reporterNs.report("DYN_NODE_PROPERTIES", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAnimationControl(extras) {
    _reporterNs.report("IAnimationControl", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniSysTools(extras) {
    _reporterNs.report("AniSysTools", "../MyUtils/AnimationSystemV2/AniTools/AniSysTools", _context.meta, extras);
  }

  _export("SymbolAniMediatorHooks1016", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      DYN_NODE_PROPERTIES = _unresolved_2.DYN_NODE_PROPERTIES;
    }, function (_unresolved_3) {
      AniSysTools = _unresolved_3.AniSysTools;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "17044xWMbxOJqpZnjbBqnyk", "SymbolAniMediatorHooks1016", undefined);

      /**
       * 用來修飾 SymbolAniMediator產出的 Node
       */
      __checkObsolete__(['Node']);

      _export("SymbolAniMediatorHooks1016", SymbolAniMediatorHooks1016 = class SymbolAniMediatorHooks1016 {
        constructor() {} //--builderMediator會呼叫


        decorate(target, playData) {
          var slotMachineIndexInfo = {
            reelIndex: playData.reelIndex,
            iconIndex: playData.iconIndex,
            symbolId: playData.symbolId
          };
          target[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID] = playData.prefabKey;
          target[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] = playData.tokenId;
          target[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID] = []; //--在reel建立起的時候尚未知道表演群組,要中線得分後才知道

          target[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO] = slotMachineIndexInfo;
          target[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ADDED] = false; //--是否被創造出來加入過表演層(回收是null)

          target[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).LOCKED] = false; //--是否被創造出來加入過表演層(回收是null)

          target[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).OTHER] = null; //--是否被創造出來加入過表演層(回收是null)

          target[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).IS_PLAYING_EXPECT] = false; //--是否播放聽牌動畫

          target[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).REFERENCE_TARGET] = null; //--參考目標(用來對齊位置)

          var aniInterfaceComponent;
          aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
            error: Error()
          }), AniSysTools) : AniSysTools).findAndGetIAniComponent(target);

          if (aniInterfaceComponent) {
            aniInterfaceComponent.slotMachineIndexInfo = slotMachineIndexInfo; //aniInterfaceComponent.setAniDataInfo(playData.aniInfo);

            aniInterfaceComponent.tokenID = playData.tokenId;
            target[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL] = aniInterfaceComponent; //--直接在node動態的掛上,省去以後都要find的消耗
            //aniInterfaceComponent.groupID = [playData.groupId];//-只有在得分的狀態才能知道groupId
          }
        }

        setAniGroup(inp, groupId) {
          if (inp[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID]) {
            inp[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].push(groupId);
          } else {
            inp[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID] = [groupId];
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ac732c6ec6baa3be35493d2ad1131ae28a6e4549.js.map
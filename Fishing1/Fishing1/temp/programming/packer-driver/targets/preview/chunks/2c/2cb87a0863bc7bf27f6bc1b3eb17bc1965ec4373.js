System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AbstractView, AnimationEffectEvent, AniEffectTypeMap, AniEffectID, log, AniEffectView, _crd;

  function _reportPossibleCrUseOfAbstractView(extras) {
    _reporterNs.report("AbstractView", "../../../abstract/mvvm/AbstractView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationEffectViewBase(extras) {
    _reporterNs.report("AnimationEffectViewBase", "../../../game/views/animationEffectViewBase/AnimationEffectViewBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitAniEffect(extras) {
    _reporterNs.report("InitAniEffect", "../../../game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "../../../game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfAniEffectCommand(extras) {
    _reporterNs.report("IfAniEffectCommand", "../../../game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationEffectEvent(extras) {
    _reporterNs.report("AnimationEffectEvent", "../../../game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventSendObject(extras) {
    _reporterNs.report("EventSendObject", "../../../game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniEffectTypeMap(extras) {
    _reporterNs.report("AniEffectTypeMap", "./AniEffectDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniEffectID(extras) {
    _reporterNs.report("AniEffectID", "./AniEffectDefinitions", _context.meta, extras);
  }

  _export("AniEffectView", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      AbstractView = _unresolved_2.AbstractView;
    }, function (_unresolved_3) {
      AnimationEffectEvent = _unresolved_3.AnimationEffectEvent;
    }, function (_unresolved_4) {
      AniEffectTypeMap = _unresolved_4.AniEffectTypeMap;
      AniEffectID = _unresolved_4.AniEffectID;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f2460crAPdDFKBpbNtDOJC5", "AniEffectView", undefined);
      /**
       * Created by EricHuang on 2023/10/08.
       */
      //setPositionsInfo


      __checkObsolete__(['primitives']);

      //--這是給最上層sysytem繼承操作的
      __checkObsolete__(['log']);

      _export("AniEffectView", AniEffectView = class AniEffectView extends (_crd && AbstractView === void 0 ? (_reportPossibleCrUseOfAbstractView({
        error: Error()
      }), AbstractView) : AbstractView) {
        set aniEffect(value) {
          this._aniEffect = value;
          this._aniEffect.stageNode = this.node; //primitives.plane()

          this._aniEffect.on((_crd && AnimationEffectEvent === void 0 ? (_reportPossibleCrUseOfAnimationEffectEvent({
            error: Error()
          }), AnimationEffectEvent) : AnimationEffectEvent).COMPLETE, this.aniAndEffectComplete);
        }

        constructor() {
          super();
          this._aniEffect = void 0;

          this.aniAndEffectComplete = e => {};

          this._classId = 'AniEffectView';
        }

        init() {}
        /**
         * 
         * @param value 0-3 PlayertableIndex
         */


        setPlayerTableIndex(value) {
          this._aniEffect.playerIndex = value;
        }
        /**
         * 
        * positions-->砲管出口的位置
        * coniEndinfo--->也是金幣的位置--
        * exchangePositions--->玩家分數顯示框資訊
        * mountPositions-->所有玩家mount資料--20230315新增
         */


        setPositionsInfo(value) {
          this._aniEffect.aniPositionInfo = value; //this._aniEffect.stageNode=this.node;

          log('aniEffect_setPositionsInfo', value);
        }

        setAniEffetcClasses() {
          var _this$_aniEffect;

          (_this$_aniEffect = this._aniEffect) == null ? void 0 : _this$_aniEffect.setCommands();
        }

        setCommand(commandDefinition) {
          this._aniEffect.addCommand(commandDefinition);
        }

        setCommands() {
          this._aniEffect.setCommands();
        }

        setDataAfterSetRoom() {
          this._aniEffect.setDataAfterSetRoom();
        }

        resetRoomData() {
          this._aniEffect.resetRoomData();
        }

        getCommand(command) {
          return this._aniEffect.getCommand(command);
        }

        getCommandInstance(instanceId) {
          return this._aniEffect.getInstances(instanceId);
        }

        //--預設的效果庫
        executeAnimation(executeOption) {
          var r = null;

          switch (executeOption.aniEffectTypeId) {
            case (_crd && AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfAniEffectTypeMap({
              error: Error()
            }), AniEffectTypeMap) : AniEffectTypeMap).ANI_showPayoffMoneyAndDigits:
              this._aniEffect.executeAnimation({
                command: (_crd && AniEffectID === void 0 ? (_reportPossibleCrUseOfAniEffectID({
                  error: Error()
                }), AniEffectID) : AniEffectID).ANI_Money,
                other: executeOption.other.money
              });

              this._aniEffect.executeAnimation({
                command: (_crd && AniEffectID === void 0 ? (_reportPossibleCrUseOfAniEffectID({
                  error: Error()
                }), AniEffectID) : AniEffectID).ANI_JumpDigits,
                other: executeOption.other.digits
              });

              r = 0;
              break;
          }

          return r;
        } //--interface abstract


        getData(dataKey, value) {} //--interface abstract


        excute(value) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2cb87a0863bc7bf27f6bc1b3eb17bc1965ec4373.js.map
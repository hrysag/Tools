System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UITransform, v3, tween, GameUtilsTools, DYN_NODE_PROPERTIES, DYN_WILD_INFO, GlobalAccessReader, GameGlobalKeys, AsyncScope, ShowResultProcessKey1016, SoundList, AudioSourceList, AudioManager, SOUND_TYPE, WildMovementCtrl, _crd, WILD_LIGHT_MOVE_ANIMATION_TYPE, WILD_LIGHT_NO_MOVE_ANIMATION_TYPE, DEBUG_TITLE;

  function _reportPossibleCrUseOfIWildMovementDataNew(extras) {
    _reporterNs.report("IWildMovementDataNew", "../../../Slot/ISlotDefinitionData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWildMoveData(extras) {
    _reporterNs.report("IWildMoveData", "../WildMoveFXCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDYN_NODE_PROPERTIES(extras) {
    _reporterNs.report("DYN_NODE_PROPERTIES", "../../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDYN_WILD_INFO(extras) {
    _reporterNs.report("DYN_WILD_INFO", "../../../DefinitionGameData1016/GameConfigInstance", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalAccessReader(extras) {
    _reporterNs.report("GlobalAccessReader", "../../../DefinitionGameData1016/AccessDefs/GlobalAccess", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobalKeys(extras) {
    _reporterNs.report("GameGlobalKeys", "../../../DefinitionGameData1016/GameGlobalData1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAsyncScope(extras) {
    _reporterNs.report("AsyncScope", "../../../MyUtils/AsyncScope/AsyncScope", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowResultProcessKey(extras) {
    _reporterNs.report("ShowResultProcessKey1016", "../../../DefinitionGameData1016/FlowProcessKey1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../../../DefinitionGameData1016/SoundList1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioSourceList(extras) {
    _reporterNs.report("AudioSourceList", "../../../DefinitionGameData1016/SoundList1016", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOUND_TYPE(extras) {
    _reporterNs.report("SOUND_TYPE", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWildLayerCtrl(extras) {
    _reporterNs.report("WildLayerCtrl", "../WildLayerCtrl", _context.meta, extras);
  }

  _export("WildMovementCtrl", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      GameUtilsTools = _unresolved_2.GameUtilsTools;
      DYN_NODE_PROPERTIES = _unresolved_2.DYN_NODE_PROPERTIES;
    }, function (_unresolved_3) {
      DYN_WILD_INFO = _unresolved_3.DYN_WILD_INFO;
    }, function (_unresolved_4) {
      GlobalAccessReader = _unresolved_4.GlobalAccessReader;
    }, function (_unresolved_5) {
      GameGlobalKeys = _unresolved_5.GameGlobalKeys;
    }, function (_unresolved_6) {
      AsyncScope = _unresolved_6.AsyncScope;
    }, function (_unresolved_7) {
      ShowResultProcessKey1016 = _unresolved_7.ShowResultProcessKey1016;
    }, function (_unresolved_8) {
      SoundList = _unresolved_8.SoundList;
      AudioSourceList = _unresolved_8.AudioSourceList;
    }, function (_unresolved_9) {
      AudioManager = _unresolved_9.AudioManager;
      SOUND_TYPE = _unresolved_9.SOUND_TYPE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cbc97Eu0bJAbq+Lf0T8lBxF", "WildMovementCtrl", undefined);

      __checkObsolete__(['_decorator', 'CCString', 'Component', 'Node', 'Vec3', 'UITransform', 'v3', 'TweenEasing', 'tween', 'Game']);

      //import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
      WILD_LIGHT_MOVE_ANIMATION_TYPE = 'Transfer';
      WILD_LIGHT_NO_MOVE_ANIMATION_TYPE = 'No_transfer';
      DEBUG_TITLE = 'WildMovementCtrl';

      _export("WildMovementCtrl", WildMovementCtrl = class WildMovementCtrl {
        //--20260304--new:新增需求需要把wild回歸右壓左的設計,取消進行表演時提至最上層,結束後在右壓左
        constructor(_wildMoveContainer) {
          this._moveWildResolvePromise = void 0;
          this._async = void 0;
          //--註冊管理使用promise/delayTime工具  
          this._signal = void 0;
          this._isInterrupting = false;
          this._playingSound = false;
          this._wildMoveNewContainer = null;
          //--20260304--取消:新增需求需要把wild回歸右壓左的設計,取消進行表演時提至最上層,結束後在右壓左
          this._wildLayerCtrl = null;

          this.onFlowAbortCallback = flowKey => {//console.log('===WildMovementCtrl onFlowAbortCallback===', flowKey, this._async.dumpAllAsyncState());
          };

          //--註冊取消的函示
          this.onCancelAsync = label => {
            var _this$_moveWildResolv;

            //GameUtilsTools.debugLog(DEBUG_TITLE, `[onCancel] 取消函式被呼叫`, { label });
            //console.log();
            (_this$_moveWildResolv = this._moveWildResolvePromise) == null || _this$_moveWildResolv.call(this);
          };

          /**
           * showAniController call這個
           * showAniController 同時也在controller裡面撥放啟動光束
           */
          this._testCount = 0;
          this._wildMoveContainer = _wildMoveContainer;
          this._async = (_crd && AsyncScope === void 0 ? (_reportPossibleCrUseOfAsyncScope({
            error: Error()
          }), AsyncScope) : AsyncScope).getInstance();
        }

        set wildMoveNewContainer(value) {
          this._wildMoveNewContainer = value;
        }

        set wildLayerCtrl(value) {
          this._wildLayerCtrl = value;
        }

        reset() {
          this._playingSound = false;
        }

        forceResolveMoveWildPromise() {
          if (this._moveWildResolvePromise) {
            this._moveWildResolvePromise();

            this._moveWildResolvePromise = null;
          }
        } //--20260306-old流程,取消,直接在layer上做切換


        addWildAniNode(aniNode, wpos) {
          this._wildMoveContainer.addChild(aniNode);

          const uiTransform = this._wildMoveContainer.getComponent(UITransform); //this._wildMoveNewContainer.addChild(aniNode);//--20260304--new:新增需求需要把wild回歸右壓左的設計,取消進行表演時提至最上層,結束後在右壓左
          //const uiTransform = this._wildMoveNewContainer.getComponent(UITransform);


          const localPos = uiTransform.convertToNodeSpaceAR(wpos);
          aniNode.setPosition(localPos);
        } //--以下為舊有的流程-自表演容器當中拔除(20260306-old流程,取消)


        removeWildAniNodeAndGetWpos(reelIndex) {
          const children = this._wildMoveContainer.children;

          for (const node of children) {
            const symbolInfo = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO];

            if (symbolInfo && symbolInfo.reelIndex === reelIndex) {
              const lPos = node.position.clone();

              const wpos = this._wildMoveContainer.getComponent(UITransform).convertToWorldSpaceAR(lPos);

              node.removeFromParent();
              return wpos;
            }
          }

          return null;
        }

        addWildToMoveLayer(reelIndex, aniNode, wpos) {
          this._wildLayerCtrl.setWildToMoveLayer(reelIndex, aniNode, wpos);
        }

        addWildToWholeLayer(reelIndex, aniNode) {
          this._wildLayerCtrl.setWildToWholeLayer(reelIndex, aniNode);
        }

        addWildToNoMoveWholeLayer(reelIndex, aniNode) {
          this._wildLayerCtrl.setWildToNoMoveWholeLayer(reelIndex, aniNode);
        }

        async triggerNoWildMoveAnimation(reelId, moveData) {
          const wildMovementData = moveData.WildMovementData;
          const wildNode = moveData.wildNode; //----取出(這邊startIndex已經經過+1(getWildMovementData裡面),因為算的時候沒有上下兩個預備位)

          let finalLPos;
          let finalDestination; //--20260305--new

          const reelNodeContainer = this._wildLayerCtrl.getMoveContainerByReelIndex(reelId); //const uiTransform = this._wildMoveContainer.getComponent(UITransform);


          const uiTransform = reelNodeContainer.getComponent(UITransform);
          finalLPos = uiTransform.convertToNodeSpaceAR(wildMovementData.finalDestinationWPos);
          finalDestination = finalLPos.clone().add(v3(0, wildMovementData.offsetYLocal, 0)); //console.log('==========NoTransferAnimation============', wildNode, wildMovementData, this._singleWildGroupResultData, this._iconList, this);

          wildNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL].playAni({
            aniState: WILD_LIGHT_NO_MOVE_ANIMATION_TYPE
          });
          const gameDelayTime = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList).get(cfg => {
            var _cfg$wild;

            return (_cfg$wild = cfg.wild) == null ? void 0 : _cfg$wild.noMove;
          });

          const signal = this._async.createAbortScope((_crd && ShowResultProcessKey1016 === void 0 ? (_reportPossibleCrUseOfShowResultProcessKey({
            error: Error()
          }), ShowResultProcessKey1016) : ShowResultProcessKey1016).Wild_NO_MOVEMENT, this.onFlowAbortCallback);

          const tp = this.tweenNoTransferAction(wildNode, finalDestination, gameDelayTime);

          const callbackWrapper = value => {
            tp.c(true);
            const node = value.outValue.target;
            node.setPosition(value.outValue.pos);
          };

          const processTween = this._async.registerCancelablePromise((_crd && ShowResultProcessKey1016 === void 0 ? (_reportPossibleCrUseOfShowResultProcessKey({
            error: Error()
          }), ShowResultProcessKey1016) : ShowResultProcessKey1016).Wild_NO_MOVEMENT + `_${this._testCount}`, tp.p, callbackWrapper, signal, (_crd && ShowResultProcessKey1016 === void 0 ? (_reportPossibleCrUseOfShowResultProcessKey({
            error: Error()
          }), ShowResultProcessKey1016) : ShowResultProcessKey1016).Wild_NO_MOVEMENT, {
            target: wildNode,
            pos: wildNode.position.clone()
          });

          const flag = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess); //if(this._isInterrupting)

          if (flag) {
            this._async.abortAll((_crd && ShowResultProcessKey1016 === void 0 ? (_reportPossibleCrUseOfShowResultProcessKey({
              error: Error()
            }), ShowResultProcessKey1016) : ShowResultProcessKey1016).Wild_NO_MOVEMENT);
          }

          await processTween;
        }

        async triggerWildMoveAnimation(reelId, moveData, callBack) {
          // 觸發wild動畫
          const wildNode = moveData.wildNode;
          const wildMovementData = moveData.WildMovementData;
          let finalLPos;
          let finalDestination; //--20260305--new

          const reelNodeContainer = this._wildLayerCtrl.getMoveContainerByReelIndex(reelId); //const uiTransform = this._wildMoveContainer.getComponent(UITransform);


          const uiTransform = reelNodeContainer.getComponent(UITransform);
          finalLPos = uiTransform.convertToNodeSpaceAR(wildMovementData.finalDestinationWPos);
          finalDestination = finalLPos.clone().add(v3(0, wildMovementData.offsetYLocal, 0));
          wildNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL].playAniWithFrameEvtCallBack(callBack, () => {}, false, {
            aniState: WILD_LIGHT_MOVE_ANIMATION_TYPE
          }, {
            extraArgs: reelId
          }); //--沒中獎才要取NG的時間
          //const gameDelayTime =(gameState==GameState.NORMAL)?
          //GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.wild?.others.move_Ng):
          //GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.wild?.move);

          const gameDelayTime = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList).get(cfg => {
            var _cfg$wild2;

            return (_cfg$wild2 = cfg.wild) == null ? void 0 : _cfg$wild2.move;
          });

          const signal = this._async.createAbortScope((_crd && ShowResultProcessKey1016 === void 0 ? (_reportPossibleCrUseOfShowResultProcessKey({
            error: Error()
          }), ShowResultProcessKey1016) : ShowResultProcessKey1016).Wild_MOVEMENT, this.onFlowAbortCallback);

          this._testCount++;
          const tp = this.tweenWildAction(wildNode, finalDestination, gameDelayTime, 'backInOut');

          const callbackWrapper = value => {
            tp.c(true);
            const node = value.outValue.target;
            node.setPosition(value.outValue.pos);
          };

          const processTween = this._async.registerCancelablePromise((_crd && ShowResultProcessKey1016 === void 0 ? (_reportPossibleCrUseOfShowResultProcessKey({
            error: Error()
          }), ShowResultProcessKey1016) : ShowResultProcessKey1016).Wild_MOVEMENT + `_${this._testCount}`, tp.p, callbackWrapper, signal, (_crd && ShowResultProcessKey1016 === void 0 ? (_reportPossibleCrUseOfShowResultProcessKey({
            error: Error()
          }), ShowResultProcessKey1016) : ShowResultProcessKey1016).Wild_MOVEMENT, {
            target: wildNode,
            pos: finalDestination
          });

          const flag = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).InterruptProcess);

          if (flag) {
            this._async.abortAll((_crd && ShowResultProcessKey1016 === void 0 ? (_reportPossibleCrUseOfShowResultProcessKey({
              error: Error()
            }), ShowResultProcessKey1016) : ShowResultProcessKey1016).Wild_MOVEMENT);
          }

          await processTween;
          wildNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SWITCH] = null;
          wildNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).LOCKED] = true;
          wildNode[(_crd && DYN_WILD_INFO === void 0 ? (_reportPossibleCrUseOfDYN_WILD_INFO({
            error: Error()
          }), DYN_WILD_INFO) : DYN_WILD_INFO).WILD_CONTINUE] = this.createContinue(reelId);
          wildNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO] = {
            symbolId: 9,
            reelIndex: reelId,
            iconIndex: 4
          };
          return reelId;
        }

        createContinue(reelIndex) {
          const aryContinue = [];

          for (let i = 1; i <= 4; i++) {
            const key = `${reelIndex}:${i}:${9}`; //--擠到node裡面

            aryContinue.push(key);
          }

          return aryContinue;
        } //--使用外部可以中斷的tweenPromise

        /**
         * 
        const h = this.tweenWildActionHandle(target, finalDestination, duration, easing);
        this._moveWildResolvePromise = () => h.cancel(true); // 仍可保留給別的流程用
        return h.promise;
         */


        tweenWildAction(target, finalDestination, duration, easing) {
          if (!this._playingSound) {
            this._playingSound = true;
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).wild_move, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
              error: Error()
            }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
              error: Error()
            }), AudioSourceList) : AudioSourceList).WildAS);
          }

          const {
            promise,
            cancel
          } = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).TweenActionPromiseWithCancel(target, duration, {
            position: finalDestination
          }, easing); // 保存 cancel 以便外部中斷
          //this._moveWildResolvePromise = () => cancel(true);

          return {
            p: promise,
            c: cancel
          };
        } //--使用可中斷的tweenPromise處理


        tweenNoTransferAction(target, toPos, duration) {
          //--20251125新增 wild移動失敗音效
          if (!this._playingSound) {
            this._playingSound = true;
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).Wild_Ready, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
              error: Error()
            }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
              error: Error()
            }), AudioSourceList) : AudioSourceList).WildAS);
          }

          const fromPos = target.position.clone();
          const toPosTween = tween(target).to(duration, {
            position: toPos
          }, {
            easing: 'backIn'
          });
          const backPosTween = tween(target).to(duration, {
            position: fromPos
          }, {
            easing: 'backOut'
          });
          const {
            promise,
            cancel
          } = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
            error: Error()
          }), GameUtilsTools) : GameUtilsTools).TweenActionSequencePromiseWithCancel(target, [toPosTween, backPosTween]); //this._moveWildResolvePromise = () => cancel(true);

          return {
            p: promise,
            c: cancel
          };
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=206535d30a1c3c918d3242a7bfb7ab8ae7946921.js.map
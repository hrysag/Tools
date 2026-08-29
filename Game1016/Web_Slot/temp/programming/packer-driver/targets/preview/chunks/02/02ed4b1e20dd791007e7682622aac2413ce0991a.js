System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCString, Component, Node, DYN_NODE_PROPERTIES, WildFXCtrl, WildMovementCtrl, DYN_WILD_INFO, AsyncScope, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, WILD_EXPECT_ANI_ID, SIGNAL_KEY, SIGNAL_PROCESS_MOVE_KEY, SIGNAL_PROCESS_NO_MOVE_KEY, DEBUG_TITLE, WildMoveFXCtrl;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAnimationController(extras) {
    _reporterNs.report("AnimationController", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDYN_NODE_PROPERTIES(extras) {
    _reporterNs.report("DYN_NODE_PROPERTIES", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayAniData(extras) {
    _reporterNs.report("IPlayAniData", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWildMovementDataNew(extras) {
    _reporterNs.report("IWildMovementDataNew", "../../Slot/ISlotDefinitionData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWildFXCtrl(extras) {
    _reporterNs.report("WildFXCtrl", "./Class/WildFXCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWildMovementCtrl(extras) {
    _reporterNs.report("WildMovementCtrl", "./Class/WildMovementCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDYN_WILD_INFO(extras) {
    _reporterNs.report("DYN_WILD_INFO", "db://assets/Game1016/Script/DefinitionGameData1016/GameConfigInstance", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAsyncScope(extras) {
    _reporterNs.report("AsyncScope", "../../MyUtils/AsyncScope/AsyncScope", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWildLayerCtrl(extras) {
    _reporterNs.report("WildLayerCtrl", "./WildLayerCtrl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCString = _cc.CCString;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      DYN_NODE_PROPERTIES = _unresolved_2.DYN_NODE_PROPERTIES;
    }, function (_unresolved_3) {
      WildFXCtrl = _unresolved_3.WildFXCtrl;
    }, function (_unresolved_4) {
      WildMovementCtrl = _unresolved_4.WildMovementCtrl;
    }, function (_unresolved_5) {
      DYN_WILD_INFO = _unresolved_5.DYN_WILD_INFO;
    }, function (_unresolved_6) {
      AsyncScope = _unresolved_6.AsyncScope;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "79365ZmaglBTbtBBuRn1SgO", "WildMoveFXCtrl", undefined);

      __checkObsolete__(['_decorator', 'CCString', 'Component', 'Node', 'Vec3', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);
      WILD_EXPECT_ANI_ID = 'Expect';
      SIGNAL_KEY = 'WildMoveFXCtrl_Signal';
      SIGNAL_PROCESS_MOVE_KEY = 'WildMoveFXCtrl_Signal_Process_Move';
      SIGNAL_PROCESS_NO_MOVE_KEY = 'WildMoveFXCtrl_Signal_Process_No_Move';
      DEBUG_TITLE = 'WildMoveFXCtrl';

      _export("WildMoveFXCtrl", WildMoveFXCtrl = (_dec = ccclass('WildMoveFXCtrl'), _dec2 = property({
        type: Node,
        visible: true,
        displayName: 'wild位移上層FX表演區域',
        tooltip: 'wild位移上層FX表演區域'
      }), _dec3 = property({
        type: Node,
        visible: true,
        displayName: 'wild位移表演區域',
        tooltip: '棄用'
      }), _dec4 = property({
        type: CCString,
        visible: true,
        displayName: 'wild位移動畫Prefab id',
        tooltip: 'wild位移動畫PrefabId'
      }), _dec(_class = (_class2 = class WildMoveFXCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_wildMoveFXContainer", _descriptor, this);

          _initializerDefineProperty(this, "_wildMoveContainer", _descriptor2, this);

          _initializerDefineProperty(this, "_wildMoveAnimationPrefabId", _descriptor3, this);

          //@property({ type: WildLayerCtrl, visible: true, displayName: 'WildLayerCtrl', tooltip: '處理wildLayer顯示的控制項目' })
          this._wildLayerCtrl = null;
          this._wildFXCtrl = void 0;
          this._wildMovementCtrl = void 0;
          this._wildMveDataMap = new Map();
          this._dirtyFlag = false;
          this._async = void 0;
        }

        //--註冊管理使用promise/delayTime工具  
        onLoad() {
          if (!this._dirtyFlag) {
            this._dirtyFlag = true;
            this.init();
          }
        }

        init() {
          if (this._dirtyFlag) {
            //this._wildFXCtrl = new WildFXCtrl(this._wildMoveFXContainer, this._wildMoveAnimationPrefabId);
            this._wildFXCtrl = new (_crd && WildFXCtrl === void 0 ? (_reportPossibleCrUseOfWildFXCtrl({
              error: Error()
            }), WildFXCtrl) : WildFXCtrl)(this._wildMoveAnimationPrefabId);
            this._wildMovementCtrl = new (_crd && WildMovementCtrl === void 0 ? (_reportPossibleCrUseOfWildMovementCtrl({
              error: Error()
            }), WildMovementCtrl) : WildMovementCtrl)(this._wildMoveContainer); //--20260304--new:新增需求需要把wild回歸右壓左的設計,取消進行表演時提至最上層,結束後在右壓左

            /*
            if (this._wildMoveNewContainer) {
                this._wildMovementCtrl.wildMoveNewContainer = this._wildMoveNewContainer;
            }*/
            //--20260304--new

            this._async = (_crd && AsyncScope === void 0 ? (_reportPossibleCrUseOfAsyncScope({
              error: Error()
            }), AsyncScope) : AsyncScope).getInstance();
          }
        }

        register(value) {
          this._wildLayerCtrl = value;

          if (this._wildMovementCtrl) {
            this._wildMovementCtrl.wildLayerCtrl = this._wildLayerCtrl;
          }

          if (this._wildFXCtrl) {
            this._wildFXCtrl.wildLayerCtrl = this._wildLayerCtrl;
          }
        }

        reset() {
          this._wildMveDataMap.clear();

          this._wildMovementCtrl.reset();
        }

        setWildMoveData(moveData) {
          var reelIndex = moveData.WildMovementData.reelIndex;
          var wildNode = moveData.wildNode; //this._wildMovementCtrl.addWildAniNode(wildNode, moveData.WildMovementData.startWpos);

          this._wildMovementCtrl.addWildToMoveLayer(reelIndex, wildNode, moveData.WildMovementData.startWpos);

          if (!moveData.WildMovementData.isYoyo) {
            //-全軸移動
            this._wildFXCtrl.initWildAniLayer(reelIndex, moveData.reelFXWpos);
          }

          this._wildMveDataMap.set(reelIndex, moveData); //-20260304-取消使用,因為需求改變了
          //this.setWildSiblingIndex();

        }
        /**
         * <檢查指定軸上,指定iconIndex的wildNode是否存在>
         * 這個在位移前在wildMovementData當中>>
         * iconIndex-->原始在盤面的位置
         * finalIconIndex-->位移到完整軸後的位置
         * 以上這2筆資料在位移後也不會改變
         * 但是wildNode裡面的
         * DYN_WILD_INFO.WILD_CONTINUE->連續軸的資料(會包含reelIndex,iconIndex,symbolId)
         * DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO->symbol資料
         * 位移到完整軸後會被改寫過
         * 而聽牌他是只要有wild不管幾是否連續都會是吻合條件
         * @param reelId 
         * @param iconIndex 
         * @returns 
         */


        checkExistWildNode(reelId, iconIndex) {
          var exist = false;

          var wildMoveData = this._wildMveDataMap.get(reelId);

          var compare = reelId + ":" + iconIndex + ":" + 9; //--擠到node裡面

          if (wildMoveData) {
            //const wildMovementData=wildMoveData.WildMovementData;
            var wildNode = wildMoveData.wildNode;
            var continueWild = wildNode[(_crd && DYN_WILD_INFO === void 0 ? (_reportPossibleCrUseOfDYN_WILD_INFO({
              error: Error()
            }), DYN_WILD_INFO) : DYN_WILD_INFO).WILD_CONTINUE];

            for (var key of continueWild) {
              if (key === compare) {
                exist = true;
                break;
              }
            } //exist=true;

            /**
             * 如果是位移的情況,他註冊的iconIndex是原本的index,而不是位移後的index.
             * 而在位移後, iconList的index是被rewrite過的.
             * 所以在FG的情況下,他是先做次數的計算,然後才做得分,此時的資料已經是重寫過位置的
             * 在NG/RS是先做得分,然後才做次數,所以iconIndex不會有問題
             * 1007--
             * <<要檢查連續軸的資料去比對key才可以以確定是否存在>>
             */
            //if(wildMovementData.iconIndex===iconIndex)exist=true;

          }

          return exist;
        } //--取得指定軸上,指定iconIndex的wildNode,並轉移到表現層
        //--20260306-old流程,取消,直接在layer上做切換


        getExistWildNodeAndTransferLayer(reelId) {
          var wildMoveData = this._wildMveDataMap.get(reelId);

          if (wildMoveData) {
            var wpos = this._wildMovementCtrl.removeWildAniNodeAndGetWpos(reelId);

            this._wildMveDataMap.delete(reelId);

            wildMoveData.WildMovementData.startWpos = wpos; //console.log('afterTransferLayer', wpos, this._wildMveDataMap);

            return wildMoveData;
          }

          return null;
        } //--20260304--new:新增需求需要把wild回歸右壓左的設計,取消進行表演時提至最上層,結束後在右壓左


        removeAndGetWildMoveData(reelId) {
          var wildMoveData = this._wildMveDataMap.get(reelId);

          if (wildMoveData) {
            this._wildMveDataMap.delete(reelId);

            return wildMoveData;
          }

          return null;
        }
        /**
         * 在該盤面沒有任何中獎的狀態下(此時wild還沒轉移到runningPool裡面,所以要直接提供handoff資料)
         * TIPS:
         * 如果_wildMveDataMap裡面的WildMovementData.yoyo=true,表示<沒有>位移到完整軸的模式
         * 此時註冊的reelIndex與iconIndex是原本的位置,直接拿reelIndex/iconIndex
         * 如果_wildMveDataMap裡面的WildMovementData.yoyo=false,表示有位移到完整軸的模式
         * 要拿wildNode裡面的DYN_WILD_INFO.WILD_CONTINUE裡面的最後一筆資料(或是拿iconIndex最大的那筆資料(應該會是4))
         */


        getNoWinWildHandoffData() {
          var wildPlayData = [];

          for (var [, mapValue] of this._wildMveDataMap) {
            var {
              reelIndex,
              iconIndex,
              symbolId,
              isYoyo
            } = mapValue.WildMovementData;
            var handoffIconIndex = iconIndex;

            if (mapValue.wildNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).LOCKED]) {
              continue; //--有位移整軸的不交還
            }

            if (!isYoyo) {
              //--有位移到完整軸的模式
              var wildNode = mapValue.wildNode;
              var continueWild = wildNode[(_crd && DYN_WILD_INFO === void 0 ? (_reportPossibleCrUseOfDYN_WILD_INFO({
                error: Error()
              }), DYN_WILD_INFO) : DYN_WILD_INFO).WILD_CONTINUE];
              var lastPart = continueWild[continueWild.length - 1];
              var parts = lastPart.split(':');
              handoffIconIndex = parseInt(parts[1]);
            }

            var playData = {
              reelIndex: reelIndex,
              iconIndex: handoffIconIndex,
              symbolId: symbolId,
              aniId: '',
              tokenId: ''
            };
            wildPlayData.push(playData);
          }

          return wildPlayData;
        } //--找出沒有中獎的wild


        findWildWithoutWin(winData) {
          var wildPlayData = [];
          var aKeySet = new Set(winData.map(a => a.reelIndex + "_" + a.iconIndex + "_" + a.symbolId));

          for (var [, mapValue] of this._wildMveDataMap) {
            var {
              reelIndex,
              iconIndex,
              symbolId
            } = mapValue.WildMovementData;
            var key = reelIndex + "_" + iconIndex + "_" + symbolId;

            if (!aKeySet.has(key)) {
              var playData = {
                reelIndex: mapValue.WildMovementData.reelIndex,
                iconIndex: mapValue.WildMovementData.iconIndex,
                symbolId: mapValue.WildMovementData.symbolId,
                aniId: '',
                tokenId: ''
              };
              wildPlayData.push(playData);
            }
          }

          return wildPlayData;
        } //--會進來的都是檢查過確認已經存在的wildNode(請先呼叫checkExistWildNode確認存在後再呼叫該方法)


        playForecastWildAni(reelIndex) {
          var wildData = this._wildMveDataMap.get(reelIndex);

          if (wildData) {
            var wildAniNode = wildData.wildNode;
            var aniCtrl = wildAniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];
            wildAniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).IS_PLAYING_EXPECT] = true;
            aniCtrl == null || aniCtrl.playAni({
              aniState: WILD_EXPECT_ANI_ID
            });
          }
        }

        stopForecastWildAni(reelIndex) {
          var wildData = this._wildMveDataMap.get(reelIndex);

          if (wildData) {
            var wildAniNode = wildData.wildNode;
            var aniCtrl = wildAniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];
            aniCtrl == null || aniCtrl.goBackToDefault();
          }
        }

        stopAllForecastWildAni() {
          for (var [, wildData] of this._wildMveDataMap) {
            var wildAniNode = wildData.wildNode;

            if (wildAniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).IS_PLAYING_EXPECT]) {
              wildAniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).IS_PLAYING_EXPECT] = false;
              var aniCtrl = wildAniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];
              aniCtrl == null || aniCtrl.goBackToDefault();
            }
          }
        } //--位移wild


        triggerWildMoveAnimation(reelIndex) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var wildMoveData = _this._wildMveDataMap.get(reelIndex); //const beforeMoveWild = GameUtilsTools.getTimeStamp();


            var reel = yield _this._wildMovementCtrl.triggerWildMoveAnimation(reelIndex, wildMoveData, _this._wildFXCtrl.triggerWildFrontBgAniFrameEvtBack); //const afterMoveWild = GameUtilsTools.getTimeStamp();
            //GameUtilsTools.debugLog('WILD_TIME', 'wildMove_Time', { beforeMoveWild, afterMoveWild,during:afterMoveWild-beforeMoveWild }, 'log');
            //--這邊動畫速率沒有改變的話,這個會來不及播放就被回收了

            _this._wildFXCtrl.removeFX(reel); //--其他流程接上會有執行前等待~所以這個不需要了20251214

            /*
            const afterWildWait = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.wild?.afterWildWait);
            //--現在是否為中斷狀態
            const nowInterruptMode = GlobalAccessReader.getGlobalData(GameGlobalKeys.InterruptProcess);
            if (afterWildWait > 0 && !nowInterruptMode) {
                await this.waitSeconds(SIGNAL_PROCESS_MOVE_KEY, afterWildWait);
            }*/

          })();
        }

        triggerWildNoMoveAnimation(reelIndex) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var wildMoveData = _this2._wildMveDataMap.get(reelIndex);

            yield _this2._wildMovementCtrl.triggerNoWildMoveAnimation(reelIndex, wildMoveData); //--其他流程接上會有執行前等待~所以這個不需要了20251214

            /*
            const afterWildWait = GlobalAccessReader.getGlobalData(GameGlobalKeys.DelayTimeList).get(cfg => cfg.wild?.afterWildWait);
            //--現在是否為中斷狀態
            const nowInterruptMode = GlobalAccessReader.getGlobalData(GameGlobalKeys.InterruptProcess);
            if (afterWildWait > 0 && !nowInterruptMode) {
                await this.waitSeconds(SIGNAL_PROCESS_NO_MOVE_KEY, afterWildWait);
            }*/
          })();
        }
        /**
         * 
         * 等待時間不可取消--企劃指名
         * 所以這邊改用waitSecondsRaw
         * @param processKey 
         * @param time 
         */


        waitSeconds(processKey, time) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            /*
            const signal = this._async.createAbortScope(SIGNAL_KEY);
            const cancel = () => {
                //--取消後續處理..要幹嘛再說.
            }
            const p = this._async.waitSecondsTracked(time, processKey, cancel, true, signal, SIGNAL_KEY);
            await p.promise;
            */
            yield _this3._async.waitSecondsRaw(time);
          })();
        }
        /**
         * 透過this._wildMoveContainer.children裡面的
         * aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].reelIndex
         * 來設定node.siblingIndex
         * reelIndex越大,siblingIndex越大(越上面)
         * 20260304-取消使用,因為需求改變了
         */


        setWildSiblingIndex() {
          var children = this._wildMoveContainer.children;
          var len = children.length;

          if (len > 0) {
            var reelIndexList = [];

            for (var i = 0; i < len; i++) {
              var aniNode = children[i];
              var symbolIconInfo = aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO];

              if (symbolIconInfo) {
                reelIndexList.push(symbolIconInfo.reelIndex);
              }
            }

            reelIndexList.sort((a, b) => a - b);

            for (var _i = 0; _i < len; _i++) {
              var _aniNode = children[_i];
              var _symbolIconInfo = _aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO];

              if (_symbolIconInfo) {
                var reelIndex = _symbolIconInfo.reelIndex;
                var siblingIndex = reelIndexList.indexOf(reelIndex); //aniNode.setSiblingIndex(siblingIndex);

                _aniNode.setSiblingIndex(len - 1 - siblingIndex);
              }
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_wildMoveFXContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_wildMoveContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_wildMoveAnimationPrefabId", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'Wild_Move_Animation';
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=02ed4b1e20dd791007e7682622aac2413ce0991a.js.map
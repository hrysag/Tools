System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, v3, UITransform, AnimationNodesControllerBase, DYN_NODE_PROPERTIES, AniSysTools, GameUtils, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ClassicalSlotAniController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAnimationNodesControllerBase(extras) {
    _reporterNs.report("AnimationNodesControllerBase", "./AnimationNodesControllerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayIAniData(extras) {
    _reporterNs.report("playIAniData", "../AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDYN_NODE_PROPERTIES(extras) {
    _reporterNs.report("DYN_NODE_PROPERTIES", "../AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniSysTools(extras) {
    _reporterNs.report("AniSysTools", "./AniTools/AniSysTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAnimationControl(extras) {
    _reporterNs.report("IAnimationControl", "./Definitions/IAnimationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinScoreData(extras) {
    _reporterNs.report("WinScoreData", "../AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupAniData(extras) {
    _reporterNs.report("GroupAniData", "../AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "./Components/SpineController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      v3 = _cc.v3;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      AnimationNodesControllerBase = _unresolved_2.AnimationNodesControllerBase;
    }, function (_unresolved_3) {
      DYN_NODE_PROPERTIES = _unresolved_3.DYN_NODE_PROPERTIES;
    }, function (_unresolved_4) {
      AniSysTools = _unresolved_4.AniSysTools;
    }, function (_unresolved_5) {
      GameUtils = _unresolved_5.GameUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ce915MUlJtHKIHnmdLbM8ml", "ClassicalSlotAniController", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Node', 'Vec3', 'v3', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ClassicalSlotAniController", ClassicalSlotAniController = (_dec = ccclass('ClassicalSlotAniController'), _dec2 = property({
        type: [CCInteger],
        visible: true,
        serializable: true,
        displayName: 'WILD_ID',
        tooltip: 'wild icon ids'
      }), _dec3 = property({
        type: [CCInteger],
        visible: true,
        serializable: true,
        displayName: 'BONUS_ID',
        tooltip: 'bonus icon ids'
      }), _dec(_class = (_class2 = class ClassicalSlotAniController extends (_crd && AnimationNodesControllerBase === void 0 ? (_reportPossibleCrUseOfAnimationNodesControllerBase({
        error: Error()
      }), AnimationNodesControllerBase) : AnimationNodesControllerBase) {
        //--算得分需要的資料(betValue,baseOdds,totalOdd)
        set winLinesGroupData(value) {
          this._winLinesGroupData = value;
        }

        constructor() {
          super();

          _initializerDefineProperty(this, "_wildID", _descriptor, this);

          _initializerDefineProperty(this, "_bonusID", _descriptor2, this);

          this._winLinesGroupData = void 0;
          //--每一局清空一次
          this._scoreData = void 0;

          /**
           * 特殊的檢查條件(同軸同格不重複相同元素)
           * @param args 
           * @returns 
           */
          this.checkSpRuleForExist = (...args) => {
            const data = args[0];
            const iconIndex = data.SymbolIconInfoData.iconIndex;
            const iconID = data.SymbolIconInfoData.iconID;
            let returnData = {
              flag: false,
              tokenId: ''
            };

            for (let aniNode of this._aryRunningNode) {
              //--這邊是針對第四軸的特殊檢查(軸的編號要改成變數來讀)

              /*
              if (!aniNode[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO]) {
                  console.log('NOOO_node', aniNode.name);
              } else {
                  console.log('YESSS_node', aniNode.name);
              }*/
              if (aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex == 3) {
                if (aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconIndex == iconIndex && aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconID == iconID) {
                  returnData = {
                    flag: true,
                    tokenId: aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                      error: Error()
                    }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID]
                  };
                  return returnData;
                }
              }
            }

            return returnData;
          };

          this._scoreData = null;
        }

        addAnimationData(IAniData) {
          let token = Date.now();
          let spRuleCheck = this.checkSpRuleForExist(IAniData);

          if (!spRuleCheck.flag) {
            //--沒有重複
            //console.log('沒有重複', IAniData.prefabKey);
            IAniData.tokenID = token + "_" + (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).getRangeRandom(0, 100);
            IAniData.duplicateTokenId = '';
          } else {
            //console.log('@@有重複', IAniData.prefabKey, spRuleCheck.tokenId);
            IAniData.tokenID = '';
            IAniData.duplicateTokenId = spRuleCheck.tokenId;
          }

          let targetNode = super.addAnimationData(IAniData); //--重複的狀況下會回null
          //--重複的狀況下

          if (!targetNode) {
            if (IAniData.duplicateTokenId != '') {
              targetNode = this.getAniNodeByTokenId(IAniData.duplicateTokenId); //this.duplicateGroupTargetNode(IAniData);

              this.addGroupToNode(targetNode, IAniData.groupID);
            }
          }

          return targetNode;
        }

        setExistAniNode(aniSpineNode, IAniData) {
          let spRuleCheck = this.checkSpRuleForExist(IAniData);

          if (!spRuleCheck.flag) {
            //--沒有重複
            //console.log('沒有重複_setExistAniNode', IAniData.prefabKey);
            aniSpineNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].push(IAniData.groupID);
            aniSpineNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex = IAniData.SymbolIconInfoData.reelIndex;
            aniSpineNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconIndex = IAniData.SymbolIconInfoData.iconIndex;
            aniSpineNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconID = IAniData.SymbolIconInfoData.iconID;
            aniSpineNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].groupID = IAniData.SymbolIconInfoData.groupID;
            const localNodeContainer = this._aniNodeStageContainerMap[IAniData.containerNodeId];
            let localPos = v3(0, 0, 0);

            if (IAniData.wPos) {
              localPos = localNodeContainer.getComponent(UITransform).convertToNodeSpaceAR(IAniData.wPos);
            }

            localNodeContainer.addChild(aniSpineNode); //aniSpineNode.setPosition(v3(0, 0, 0));

            aniSpineNode.active = true;

            this._aryRunningNode.push(aniSpineNode);

            let aniInterfaceComponent = null;
            aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(aniSpineNode);

            if (aniInterfaceComponent) {
              aniInterfaceComponent.slotMachineIndexInfo.groupID = IAniData.SymbolIconInfoData.groupID;
              aniInterfaceComponent.slotMachineIndexInfo.iconID = IAniData.SymbolIconInfoData.iconID;
              aniInterfaceComponent.slotMachineIndexInfo.iconIndex = IAniData.SymbolIconInfoData.iconIndex;
              aniInterfaceComponent.slotMachineIndexInfo.reelIndex = IAniData.SymbolIconInfoData.reelIndex;
              aniInterfaceComponent.setAniDataInfo(IAniData.aniInfo);
              aniInterfaceComponent.groupID.push(IAniData.groupID);
            } else {
              console.warn('No compatible animation controller found on targetNode.', aniSpineNode.name);
            }

            aniSpineNode.setPosition(localPos);
          } else {//console.log('@@有重複_setExistAniNode', IAniData.prefabKey, spRuleCheck.tokenId);
            //IAniData.tokenID = '';
            //IAniData.duplicateTokenId = spRuleCheck.tokenId;
          }
        } //--有得分的時候會播放得分的動畫,但在同時,其他沒中的icon也會有自己的idle狀態動畫
        //--如果企劃要這麼78要求的話,這邊要再調整


        playWinAndIdleInThisRound(winScoreData, lines) {} //--for test---


        playInSequence() {
          //console.log('checkPlayInSequence', this._aryRunningNode);
          let component = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
            error: Error()
          }), AniSysTools) : AniSysTools).findAndGetIAniComponent(this._aryRunningNode[0]);
          component.playSequence('trigger');
        }

        async playWinInThisRound(winScoreData, lines) {
          //--播放全部group的動畫
          //--顯示得分的動畫
          //--進入輪播模式---這個就自己玩耍了
          //--呼叫結束
          this._scoreData = winScoreData;
          return new Promise(async (resolve, reject) => {
            if (lines) this.winLinesGroupData = lines; //--依照winLine的長度產生對應的aryGroupIDs

            this.changeSpNodeChildrenIndexToTop(); //--交換位置(賠率高的在越上面)

            const groupID = this.generateArray(this._winLinesGroupData.length);
            const totalScore = (winScoreData.totalOdd * winScoreData.betValue).fixed();
            this.showWinScoreAni(totalScore);
            await this.playAniGroupsWithPromise(groupID); //--這種隨流程走的其他裝飾性的動畫要再想辦法解決怎麼串接
            //--將其他的動畫系統開啟播放(非icon表演的動畫)

            this.playOtherWinShowAni();
            this.playAniGroupInSequence();
            /**
             * 要再調整一下自動玩的得獎流程..有點不順
             */

            resolve();
          });
        } //--這邊要包含4重彩的動畫


        async showWinScoreAni(totalScore) {//let baseWinMoney: number = (winScoreData.baseOdds * winScoreData.betValue).fixed();
          //const multiplierValue: number = winScoreData.multiNum;
          //const isSpecialWin: boolean = winScoreData.totalOdd >= SPECIAL_WIN_THRESHOLD ? true : false;
        }

        async playAniGroupInSequence() {
          let playIndex = 0;

          while (this._winLinesGroupData.length > 0) {
            this.closeAllNode(); //go to next frame
            //await GameUtils.DeferByScheduleOnceWithComponent(this, 0);
            //console.log('check_playIndex', this._winLinesGroupData[playIndex], playIndex);

            this.openNodeByIconsWithReelIndexInArray(this._winLinesGroupData[playIndex]);
            await this.playAnisByGroupWithPromise(playIndex); //await GameUtils.Defer(100);

            await (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).DeferByTweenPromise(100 / 1000); // 使用定義的延遲常數，將毫秒轉換為秒

            playIndex++;

            if (playIndex >= this._winLinesGroupData.length) {
              playIndex = 0;
            }
          }
        }

        playAnisByGroupWithTimeStepPromise(groupId, timeStep, trackId) {
          return new Promise(async (resolve, reject) => {
            const aniGroups = this.getAniNodeListByGroups(groupId);
            let iAnimationControl;

            for (let i = 0; i < aniGroups.length; i++) {
              aniGroups[i].active = true;
              iAnimationControl = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(aniGroups[i]);
              iAnimationControl.playAni(trackId);
            } //await GameUtils.Defer(timeStep);


            await (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).DeferByTweenPromise(timeStep / 1000); // 使用定義的延遲常數，將毫秒轉換為秒

            resolve();
          });
        }

        async playAniGroupsWithPromise(groups) {
          return new Promise(async (resolve, reject) => {
            let aniGroups = this.getAniNodeListByGroups(groups); //--test--
            //this.forTestDeBug(aniGroups, 'forTestDeBug_playGroupsPromise');
            //--test--

            let promises = [];
            let iAnimationControl;

            for (let i = 0; i < aniGroups.length; i++) {
              aniGroups[i].active = true;
              iAnimationControl = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(aniGroups[i]); //-TODO-這邊如果要塞入播放的track index或是clip name的話要setAnimation?

              promises.push(iAnimationControl.playAniInPromise());
            }

            try {
              await Promise.all(promises);
              resolve();
            } catch (e) {
              reject(e);
            }
          });
        } //public stopMultiFrameAni():void
        //--這裡可以用來停止其他非icon表演的動畫系統


        stopOtherWinShowAni() {} //--這裡可以用來播放其他非icon表演的動畫系統
        //--做await async的處理


        playOtherWinShowAni() {//this._multiFrameClass.playAni();
        }

        generateArray(length) {
          if (length <= 0) {
            return null;
          }

          const result = [];

          for (let i = 0; i < length; i++) {
            result.push(i);
          }

          return result;
        }
        /**
         * 
         * @param iconIndexs 這個是用來指定要開啟的icon的index
         * 分別比照reelIndex和iconIndex來開啟對應的icon
         */


        openNodeByIconsWithReelIndexInArray(iconIndexs) {
          for (let node of this._aryRunningNode) {
            for (let j = 0; j < iconIndexs.length; j++) {
              if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex == iconIndexs[j].reelIndex && node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconIndex == iconIndexs[j].iconIndex) {
                node.active = true;
              }
            }
          }
        } //--將wild icon放到最上層


        changeSpNodeChildrenIndexToTop() {
          for (let target of this._aryRunningNode) {
            if (this._wildID.includes(target[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconID) || this._bonusID.includes(target[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconID)) {
              target.setSiblingIndex(target.parent.children.length - 1);
            }
          }
        }
        /**
         * 重複的軸上的icon進行寫入groupID
         * (只有重複軸的會進來)
         * @param aniData 
         */


        duplicateGroupTargetNode(aniData) {
          this.addGroupToNodeByTokenId(aniData.duplicateTokenId, aniData.groupID);
        }

        addGroupToNode(node, groupId) {
          if (node) {
            node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].push(groupId);
          }
        }

        addGroupToNodeByTokenId(token, groupId) {
          let targetNode = this.getAniNodeByTokenId(token);

          if (targetNode) {
            targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].push(groupId); //console.log('addGroupToNodeByTokenId', this._aryRunningNode, targetNode.name, groupId);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_wildID", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_bonusID", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=73e766205f93a1ecaefb5d8d5c5bafe0b42586e8.js.map
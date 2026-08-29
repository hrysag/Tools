System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, UITransform, v3, UIOpacity, AnimationControllersPoolManager, DisplayStageNodeForAniNodePropertyDef, DYN_NODE_PROPERTIES, AniSysTools, AnimationStateType, FindComponent, LocalizationSpine, Localization, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, AnimationNodesControllerBase;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAnimationControllersPoolManager(extras) {
    _reporterNs.report("AnimationControllersPoolManager", "../ObjectPoolManager/AnimationControllersPoolManager/AnimationControllersPoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDisplayStageNodeForAniNodePropertyDef(extras) {
    _reporterNs.report("DisplayStageNodeForAniNodePropertyDef", "./Definitions/DisplayStageNodeForAniNodePropertyDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDYN_NODE_PROPERTIES(extras) {
    _reporterNs.report("DYN_NODE_PROPERTIES", "./Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniSysTools(extras) {
    _reporterNs.report("AniSysTools", "./AniTools/AniSysTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationStateType(extras) {
    _reporterNs.report("AnimationStateType", "./Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAniWithAniCtrl(extras) {
    _reporterNs.report("IAniWithAniCtrl", "./Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAnimationControl(extras) {
    _reporterNs.report("IAnimationControl", "./Definitions/IAnimationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayAniData(extras) {
    _reporterNs.report("IPlayAniData", "../AniHandoffManager/AniBuilder/IAniBuilder", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../FindComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlaySelector(extras) {
    _reporterNs.report("PlaySelector", "./Definitions/IPlayOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalizationSpine(extras) {
    _reporterNs.report("LocalizationSpine", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalization(extras) {
    _reporterNs.report("Localization", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      AnimationControllersPoolManager = _unresolved_2.AnimationControllersPoolManager;
    }, function (_unresolved_3) {
      DisplayStageNodeForAniNodePropertyDef = _unresolved_3.DisplayStageNodeForAniNodePropertyDef;
    }, function (_unresolved_4) {
      DYN_NODE_PROPERTIES = _unresolved_4.DYN_NODE_PROPERTIES;
    }, function (_unresolved_5) {
      AniSysTools = _unresolved_5.AniSysTools;
    }, function (_unresolved_6) {
      AnimationStateType = _unresolved_6.AnimationStateType;
    }, function (_unresolved_7) {
      FindComponent = _unresolved_7.FindComponent;
    }, function (_unresolved_8) {
      LocalizationSpine = _unresolved_8.LocalizationSpine;
      Localization = _unresolved_8.Localization;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "28f2f+VZoRLII5ThB/vGvLj", "AnimationNodesControllerBase", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'UITransform', 'v3', 'UIOpacity']); //import { Localization } from 'db://assets/Scripts/GameScripts/Localization';
      //import { SlotRelayLang } from 'db://assets/Scripts/Utils/Config';
      //import { LocalizationSpine } from 'db://assets/Scripts/GameScripts/LocalizationSpine';


      ({
        ccclass,
        property
      } = _decorator);
      /*
      const  DYN_NODE_PROPERTIES = {
          PREFAB_ID: 'prefabID',
          TOKEN_ID:'tokenID',
          GROUP_ID:'groupID'
      }*/

      _export("AnimationNodesControllerBase", AnimationNodesControllerBase = (_dec = ccclass('AnimationNodesControllerBase'), _dec2 = property({
        type: [_crd && DisplayStageNodeForAniNodePropertyDef === void 0 ? (_reportPossibleCrUseOfDisplayStageNodeForAniNodePropertyDef({
          error: Error()
        }), DisplayStageNodeForAniNodePropertyDef) : DisplayStageNodeForAniNodePropertyDef],
        visible: true,
        displayName: 'AniNodeStageList',
        tooltip: '動畫節點需要添加到的節點舞台清單'
      }), _dec(_class = (_class2 = class AnimationNodesControllerBase extends Component {
        get aryRunningNode() {
          return this._aryRunningNode;
        }

        constructor() {
          var _this;

          super();
          _this = this;

          /*
          @property({ type: PrefabAdapter, visible: true, displayName: 'PrefabAdapter', tooltip: '將要在物件持運作的prefab掛入' })
          protected _prefabAdapter: PrefabAdapter = null;
          */
          _initializerDefineProperty(this, "_aniNodeStageContainerList", _descriptor, this);

          this._aniNodeStageContainerMap = {};
          this._aryRunningNode = [];
          //--這個是用來存放正在播放的node
          this._currentLanguageKey = void 0;

          /**
          * 特殊的檢查條件(同軸同格不重複相同元素)
          * @param args 
          * @returns 
          */
          this.checkSpRuleForExist = function () {
            var data = arguments.length <= 0 ? undefined : arguments[0];
            var reelIndex = data.reelIndex;
            var iconIndex = data.iconIndex;
            var iconId = data.symbolId;
            var returnData = {
              flag: false,
              tokenId: ''
            };

            for (var aniNode of _this._aryRunningNode) {
              if (aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].iconIndex == iconIndex && aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex == reelIndex && aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId == iconId) {
                returnData = {
                  flag: true,
                  tokenId: aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID]
                };
                break;
              }
            }

            return returnData;
          };
        }

        onLoad() {
          //--注入指定的舞台容器
          if (this._aniNodeStageContainerList.length > 0) {
            for (var displayStageNode of this._aniNodeStageContainerList) {
              this._aniNodeStageContainerMap[displayStageNode.key] = displayStageNode.node;
            }
          }

          this._currentLanguageKey = (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
            error: Error()
          }), Localization) : Localization).instance.currentLangKey;
          /*
          AnimationControllersPoolManager.getInstance().init();
          if (this._prefabAdapter) {
              AnimationControllersPoolManager.getInstance().setPrefabForPropertyList(this._prefabAdapter.prefabForPropertyList);
          }*/
        }

        init() {} //--可以動態的註冊container


        registerContainer(type, container) {
          if (!this._aniNodeStageContainerMap[type]) {
            this._aniNodeStageContainerMap[type] = container;
          }
        }

        unregisterContainer(type) {
          if (this._aniNodeStageContainerMap[type]) {
            delete this._aniNodeStageContainerMap[type];
          }
        }
        /*
        public getPrefabNode(prefabKey: string): Node {
            return AnimationControllersPoolManager.getInstance().getInstantiatedObjFromPool(prefabKey);
        }*/


        addAniToContainer(targetNode, IAniData, group) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var localNodeContainer = _this2._aniNodeStageContainerMap[IAniData.containerNodeId];
            /*
            let localPos: Vec3 = v3(0, 0, 0);
            if (IAniData.wPos) {
                localPos = localNodeContainer.getComponent(UITransform).convertToNodeSpaceAR(IAniData.wPos);
            }*/

            if (!targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ADDED]) {
              //--這邊要注意排列的順序,wild的顯示layer應該比其他symbol的顯示要高
              if (IAniData.groupId != null) {
                targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].push(IAniData.groupId);
              }

              if (group) {
                targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID] = [...targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID], ...group];
              }
            }

            yield _this2.addAniNode(targetNode, localNodeContainer);
          })();
        }

        initAniComp(targetNode, IAniData) {
          //--抽出component 接手動畫資料處理(這邊一定要在添加到scene之後才能接著做)
          if (!targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ADDED]) {
            var aniInterfaceComponent = null;

            if (targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL]) {
              aniInterfaceComponent = targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];
            } else {
              aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(targetNode);

              if (aniInterfaceComponent) {
                targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL] = aniInterfaceComponent;
              }
            }

            if (aniInterfaceComponent) {
              aniInterfaceComponent.init();
              aniInterfaceComponent.slotMachineIndexInfo = {
                reelIndex: IAniData.reelIndex,
                iconIndex: IAniData.iconIndex,
                symbolId: IAniData.symbolId
              };

              if (IAniData.aniInfo) {
                aniInterfaceComponent.setAniDataInfo(IAniData.aniInfo);
              }

              aniInterfaceComponent.tokenID = IAniData.tokenId; //aniInterfaceComponent.groupID.push(IAniData.groupId);
            } else {
              console.warn('No compatible animation controller found on targetNode.', targetNode.name);
            }

            targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ADDED] = true;
          }
        }

        initLanguageAniNode(targetNode) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (!targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ADDED]) {
              yield _this3.loadLanguageObject(targetNode);
            }
          })();
        }
        /**
         * 新產生的或是從交換器當中抽取回來的都進來這裡推到pool裡面
         * @param targetNode 
         * @param IAniData 
         * @param group 
         * @returns 
         */


        addAnimationData(targetNode, IAniData, group) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            /*
            const localNodeContainer = this._aniNodeStageContainerMap[IAniData.containerNodeId];
            let localPos: Vec3 = v3(0, 0, 0);
            if (IAniData.wPos) {
                localPos = localNodeContainer.getComponent(UITransform).convertToNodeSpaceAR(IAniData.wPos);
            }
             if (!targetNode[DYN_NODE_PROPERTIES.ADDED]) {
                //--這邊要注意排列的順序,wild的顯示layer應該比其他symbol的顯示要高
                if (IAniData.groupId != null) {
                    targetNode[DYN_NODE_PROPERTIES.GROUP_ID].push(IAniData.groupId);
                }
                if (group) {
                    targetNode[DYN_NODE_PROPERTIES.GROUP_ID] = [...targetNode[DYN_NODE_PROPERTIES.GROUP_ID], ...group];
                }
            }
             await this.addAniNode(targetNode, localNodeContainer);
            */
            yield _this4.addAniToContainer(targetNode, IAniData, group);
            yield _this4.initLanguageAniNode(targetNode);
            /*
            if (!targetNode[DYN_NODE_PROPERTIES.ADDED]) {
                await this.loadLanguageObject(targetNode);
            }*/

            _this4._aryRunningNode.push(targetNode);

            _this4.initAniComp(targetNode, IAniData); //--抽出component 接手動畫資料處理(這邊一定要在添加到scene之後才能接著做)

            /*
            if (!targetNode[DYN_NODE_PROPERTIES.ADDED]) {
                let aniInterfaceComponent: IAnimationControl | null = null;
                if (targetNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL]) {
                    aniInterfaceComponent = targetNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL] as IAnimationControl;
                } else {
                    aniInterfaceComponent = AniSysTools.findAndGetIAniComponent(targetNode) as IAnimationControl;
                    if (aniInterfaceComponent) {
                        targetNode[DYN_NODE_PROPERTIES.ANIMATION_CTRL] = aniInterfaceComponent;
                    }
                }
                 if (aniInterfaceComponent) {
                    aniInterfaceComponent.init();
                    aniInterfaceComponent.slotMachineIndexInfo = {
                        reelIndex: IAniData.reelIndex,
                        iconIndex: IAniData.iconIndex,
                        symbolId: IAniData.symbolId
                    }
                     if (IAniData.aniInfo) {
                        aniInterfaceComponent.setAniDataInfo(IAniData.aniInfo);
                    }
                    aniInterfaceComponent.tokenID = IAniData.tokenId;
                } else {
                    console.warn('No compatible animation controller found on targetNode.', targetNode.name);
                }
                 targetNode[DYN_NODE_PROPERTIES.ADDED] = true;
            }*/


            var localPos = v3(0, 0, 0);

            if (IAniData.wPos) {
              var localNodeContainer = _this4._aniNodeStageContainerMap[IAniData.containerNodeId];
              localPos = localNodeContainer.getComponent(UITransform).convertToNodeSpaceAR(IAniData.wPos);
            }

            targetNode.setPosition(localPos);
            return targetNode;
          })();
        } //--查詢是否存在相同的node


        checkIsExistAniNode(checkData) {
          var ruleCheck = this.checkSpRuleForExist(checkData);
          return ruleCheck;
        }

        //--將已經存在_aryRunning的node繼續添加groupId
        setExistAniNode(IAniData) {
          if (IAniData.duplicateTokenId != '') {
            var targetNode = this.getAniNodeByTokenId(IAniData.duplicateTokenId);
            this.addGroupToNode(targetNode, IAniData.groupId);
          }
        }

        addAniNode(aniNode, container) {
          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              container.once(Node.EventType.CHILD_ADDED, () => {
                resolve(aniNode);
              });

              if (aniNode.getComponent(UIOpacity)) {
                aniNode.getComponent(UIOpacity).opacity = 0; //--會先讀取多語系的spine圖片,所以先關閉opacity
              }

              aniNode.active = true;
              container.addChild(aniNode);
            });
          })();
        }

        loadLanguageObject(aniNode) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            var localizationSpine = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
              error: Error()
            }), FindComponent) : FindComponent).findComponentInChildren(aniNode, _crd && LocalizationSpine === void 0 ? (_reportPossibleCrUseOfLocalizationSpine({
              error: Error()
            }), LocalizationSpine) : LocalizationSpine);

            if (localizationSpine) {
              yield localizationSpine.loadAllSpine(_this5._currentLanguageKey);
            }
          })();
        } //--重複物件繼續寫入groupId


        duplicateGroupTargetNode(aniData) {
          this.addGroupToNodeByTokenId(aniData.duplicateTokenId, aniData.groupId);
        } //--groupId=播放的群組


        addGroupToNode(node, groupId) {
          if (node) {
            node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].push(groupId);
          }
        }

        addGroupToNodeByTokenId(token, groupId) {
          var targetNode = this.getAniNodeByTokenId(token);

          if (targetNode) {
            targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].push(groupId); //console.log('addGroupToNodeByTokenId', this._aryRunningNode, targetNode.name, groupId);
          }
        } //========================================相關抽取操作_aryRunningNode========================================


        getAniNodeByTokenId(tokenId) {
          for (var node of this._aryRunningNode) {
            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] == tokenId) {
              return node;
            }
          }

          return null;
        }

        getAniNodesByGroupId(groupId) {
          var aryNode = [];

          for (var node of this._aryRunningNode) {
            var groupList = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID];

            if (groupList != null && groupList.includes(groupId)) {
              aryNode.push(node);
            }
          }

          return aryNode;
        }

        getAniNodeByReelAndIconIndex(reelIndex, iconIndex) {
          for (var node of this._aryRunningNode) {
            var symbolInfo = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO];

            if (symbolInfo && symbolInfo.reelIndex === reelIndex && symbolInfo.iconIndex === iconIndex) {
              return node;
            }
          }

          return null;
        }

        getAniNodesBySameSymbolId(symbolId) {
          var aryNode = [];

          for (var node of this._aryRunningNode) {
            var symbolInfo = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO];

            if (symbolInfo && symbolInfo.symbolId === symbolId) {
              aryNode.push(node);
            }
          }

          return aryNode;
        }

        getAniListByGroupsCutCondition(groupIdList, exclude, cutDuplication) {
          if (cutDuplication === void 0) {
            cutDuplication = true;
          }

          var nodes = this.getAniNodeListByGroups(groupIdList, cutDuplication);

          for (var i = nodes.length - 1; i >= 0; i--) {
            if (exclude.includes(nodes[i][(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].symbolId)) {
              nodes.splice(i, 1);
            }
          }

          return nodes;
        }
        /**
         * 透過一串groupID來取得ani物件.回傳資料將會是展開的ani物件
         * @param groups 
         * @param cutDuplication 替除重複的資料(一個ani有多種group身分)
         * @returns IAnimationPlugin
         */


        getAniNodeListByGroups(groupIdList, cutDuplication) {
          if (cutDuplication === void 0) {
            cutDuplication = true;
          }

          var result = [];
          if (!Array.isArray(groupIdList) || groupIdList.length === 0) return result;
          var groupSet = new Set(groupIdList);
          var addedTokenIds = cutDuplication ? new Set() : null;

          for (var node of this._aryRunningNode) {
            var groups = node == null ? void 0 : node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID];
            var token = node == null ? void 0 : node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID]; // 缺必要屬性就跳過

            if (!Array.isArray(groups) || token == null) continue;

            if (cutDuplication) {
              // 只要任一 group 吻合就推一次
              for (var i = 0; i < groups.length; i++) {
                if (groupSet.has(groups[i])) {
                  if (!addedTokenIds.has(token)) {
                    result.push(node);
                    addedTokenIds.add(token);
                  }

                  break; // 已推過這個 node，就跳出
                }
              }
            } else {
              // 不去重：吻合幾個 group 就推幾次（展開）
              for (var _i = 0; _i < groups.length; _i++) {
                if (groupSet.has(groups[_i])) {
                  result.push(node);
                }
              }
            }
          }

          return result;
        }

        getAniWithRemoveFromPoolByName(name) {
          for (var i = 0; i < this._aryRunningNode.length; i++) {
            var node = this._aryRunningNode[i];

            if (node.name === name) {
              this._aryRunningNode.splice(i, 1);

              return node;
            }
          }

          return null;
        }

        getAniWithRemoveFromPoolByTokenId(tokenId) {
          for (var i = 0; i < this._aryRunningNode.length; i++) {
            var node = this._aryRunningNode[i];

            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] === tokenId) {
              this._aryRunningNode.splice(i, 1);

              return node;
            }
          }

          return null;
        } //--這裡只是將物件從running裡面移除


        getAniWithRemoveFromPoolByGroupId(groupId) {
          var aryNode = [];

          for (var i = this._aryRunningNode.length - 1; i >= 0; i--) {
            var node = this._aryRunningNode[i];
            var groupList = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID];

            if (groupList != null && groupList.includes(groupId)) {
              aryNode.push(node);

              this._aryRunningNode.splice(i, 1);
            }
          }

          return aryNode;
        }

        getAniWithRemoveFromPoolByGroups(groupIdList, cutDuplication) {
          if (cutDuplication === void 0) {
            cutDuplication = true;
          }

          var result = [];
          if (!Array.isArray(groupIdList) || groupIdList.length === 0) return result;
          var groupSet = new Set(groupIdList);
          var addedTokenIds = cutDuplication ? new Set() : null;
          var hits = [];

          for (var i = 0; i < this._aryRunningNode.length; i++) {
            var node = this._aryRunningNode[i];
            var groups = node == null ? void 0 : node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID];
            var token = node == null ? void 0 : node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID];
            if (!Array.isArray(groups) || token == null) continue;
            var matchCount = 0;

            for (var j = 0; j < groups.length; j++) {
              if (groupSet.has(groups[j])) matchCount++;
            }

            if (matchCount > 0) {
              hits.push({
                idx: i,
                node,
                token,
                matchCount
              });
            }
          }

          if (cutDuplication) {
            for (var h of hits) {
              if (!addedTokenIds.has(h.token)) {
                result.push(h.node);
                addedTokenIds.add(h.token);
              }
            }
          } else {
            for (var _h of hits) {
              for (var k = 0; k < _h.matchCount; k++) {
                result.push(_h.node);
              }
            }
          }

          for (var r = hits.length - 1; r >= 0; r--) {
            this._aryRunningNode.splice(hits[r].idx, 1);
          }

          return result;
        }

        checkDuplicateTargetNode(node, ary) {
          for (var targetNode of ary) {
            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] == targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID]) {
              return true;
            }
          }

          return false;
        }

        getAniNodeByName(name) {
          for (var node of this._aryRunningNode) {
            if (node.name == name) {
              return node;
            }
          }

          return null;
        }

        playAniByTokenId(tokenId, trackId) {
          for (var node of this._aryRunningNode) {
            var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);

            if (aniComp.tokenID == tokenId) {
              node.active = true;
              aniComp == null || aniComp.playAni(trackId);
              break;
            }
          }
        }

        playAnisByGroup(groupId, trackId) {
          for (var node of this._aryRunningNode) {
            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].indexOf(groupId) != -1) {
              var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              node.active = true;
              aniComp == null || aniComp.playAni(trackId);
            }
          }
        }

        playAnisByIAniWithAniCtrl(aniList) {
          for (var aniItem of aniList) {
            aniItem.IAni.playAniWithAniCtrDef(aniItem.aniCtrl);
          }
        }

        playAniByName(name, trackId) {
          for (var node of this._aryRunningNode) {
            if (node.name == name) {
              var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              node.active = true;
              aniComp == null || aniComp.playAni(trackId);
              break;
            }
          }
        }

        playAllAnis(trackId) {
          for (var node of this._aryRunningNode) {
            var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);

            if (aniComp) {
              node.active = true;
              aniComp.playAni(trackId);
            }
          }
        }

        playAniByTokenIdWithPromise(tokenId, trackId) {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            var aniComp = null;

            for (var node of _this6._aryRunningNode) {
              var comp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);

              if ((comp == null ? void 0 : comp.tokenID) === tokenId) {
                aniComp = comp;
                node.active = true;
                break;
              }
            }

            if (!aniComp) {
              throw new Error("No animation component found with tokenId: " + tokenId);
            }

            try {
              yield aniComp.playAniInPromise(trackId);
            } catch (e) {
              console.warn("playAniByTokenIdWithPromise error (tokenId=" + tokenId + "):", e);
              throw e;
            }
          })();
        }

        changeGroupAniInSameState(groupIds, key) {
          for (var node of this._aryRunningNode) {
            var nodeGroupIds = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID];

            if (nodeGroupIds.some(id => groupIds.includes(id))) {
              var aniExtensionComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              node.active = true;
              aniExtensionComponent.playAni(key);
            }
          }
        } //--強制中斷


        stopPromiseAniByGroupId(groupId) {
          for (var node of this._aryRunningNode) {
            var _node$GROUP_ID;

            if ((_node$GROUP_ID = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID]) != null && _node$GROUP_ID.includes(groupId)) {
              var aniExtensionComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              aniExtensionComponent == null || aniExtensionComponent.stopPromiseAni();
            }
          }
        } //--20250731新增特殊條件排除


        playAnisByGroupWithExclusion(groupId, excludeGroupIds, trackId) {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            if (excludeGroupIds === void 0) {
              excludeGroupIds = [];
            }

            var nodesToPlay = [];

            var _loop = function* _loop() {
              var groupIds = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID];
              var isInTargetGroup = groupIds == null ? void 0 : groupIds.includes(groupId);
              var isInExcludeGroup = excludeGroupIds.some(excludeId => groupIds == null ? void 0 : groupIds.includes(excludeId)); // 如果在目標群組中且不在排除群組中，則加入播放列表

              if (isInTargetGroup && !isInExcludeGroup) {
                nodesToPlay.push(node);
              }
            };

            for (var node of _this7._aryRunningNode) {
              yield* _loop();
            }

            yield _this7.playAnisByNodesWithPromise(nodesToPlay, trackId);
          })();
        } //--20250731 修改(將查找與播放分開)


        playAnisByGroupWithPromise(groupId, trackId) {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            var nodesToPlay = [];

            for (var node of _this8._aryRunningNode) {
              var _node$GROUP_ID2;

              if ((_node$GROUP_ID2 = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID]) != null && _node$GROUP_ID2.includes(groupId)) {
                nodesToPlay.push(node);
              }
            }

            yield _this8.playAnisByNodesWithPromise(nodesToPlay, trackId);
          })();
        } //--20250731新增


        playAnisByNodesWithPromise(nodes, trackId) {
          return _asyncToGenerator(function* () {
            var promises = [];

            var _loop2 = function* _loop2(node) {
              var aniExtensionComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              node.active = true;
              var safePlay = aniExtensionComponent.playAniInPromise(trackId).catch(e => {
                console.warn("[playAnisByNodes \u64AD\u653E\u932F\u8AA4] node: " + node.name, e);
                throw e;
              });
              promises.push(safePlay);
            };

            for (var node of nodes) {
              yield* _loop2(node);
            }

            yield Promise.all(promises);
          })();
        }

        playAnisWithPromiseAndUsePlayState(nodes, playState) {
          return _asyncToGenerator(function* () {
            if (playState === void 0) {
              playState = (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                error: Error()
              }), AnimationStateType) : AnimationStateType).Idle;
            }

            var promises = [];

            var _loop3 = function* _loop3(node) {
              var aniExtensionComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              node.active = true;
              var safePlay = aniExtensionComponent.playAniInPromise(playState).catch(e => {
                console.warn("[playAnisByNodes \u64AD\u653E\u932F\u8AA4] node: " + node.name, e);
                throw e;
              });
              promises.push(safePlay);
            };

            for (var node of nodes) {
              yield* _loop3(node);
            }

            yield Promise.all(promises);
          })();
        }

        playAnisByGroupWithPromiseAndUsePlayState(groupId, playState) {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            if (playState === void 0) {
              playState = (_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                error: Error()
              }), AnimationStateType) : AnimationStateType).Idle;
            }

            var nodesToPlay = [];

            for (var node of _this9._aryRunningNode) {
              var _node$GROUP_ID3;

              if ((_node$GROUP_ID3 = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID]) != null && _node$GROUP_ID3.includes(groupId)) {
                nodesToPlay.push(node);
              }
            }

            yield _this9.playAnisWithPromiseAndUsePlayState(nodesToPlay, playState);
          })();
        }

        forTestDeBug(trackTarget, title) {//-DYN_NODE_PROPERTIES.PREFAB_ID

          /*
          for (let i = 0; i < trackTarget.length; i++) {
              console.log(title, trackTarget[i][DYN_NODE_PROPERTIES.PREFAB_ID]);
          }
          */
        }

        playAniByNameWithPromise(name, trackId) {
          var _this10 = this;

          return _asyncToGenerator(function* () {
            var aniComp = null;

            for (var node of _this10._aryRunningNode) {
              if (node.name === name) {
                aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                  error: Error()
                }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);

                if (!aniComp) {
                  throw new Error("Animation component not found on node \"" + name + "\".");
                }

                node.active = true;
                break;
              }
            }

            if (!aniComp) {
              throw new Error("Node with name \"" + name + "\" not found.");
            }

            try {
              yield aniComp.playAniInPromise(trackId);
            } catch (e) {
              console.warn('playAniByNameWithPromise error:', e);
              throw e;
            }
          })();
        }

        playAllAnisWithPromise() {
          var _this11 = this;

          return _asyncToGenerator(function* () {
            var promises = [];

            for (var node of _this11._aryRunningNode) {
              var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);

              if (aniComp) {
                node.active = true; //--使用預設的track

                promises.push(aniComp.playAniInPromise(null));
              }
            }

            try {
              yield Promise.all(promises);
            } catch (e) {
              console.warn('playAllAnisWithPromise error:', e);
              throw e;
            }
          })();
        }

        stopAndRemoveAllAnis(usePool) {
          if (usePool === void 0) {
            usePool = true;
          }

          for (var node of this._aryRunningNode) {
            var _node$parent;

            var aniExtensionComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
            (_node$parent = node.parent) == null || _node$parent.removeChild(node); //aniExtensionComponent?.stopAni();

            aniExtensionComponent == null || aniExtensionComponent.stopPromiseAni(); // 強制停止promise動畫
            // 回收

            if (usePool) {
              var prefabId = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID];
              this.removeSingleNodeData(node);
              (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
                error: Error()
              }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().pushInstanceToPool(prefabId, node);
            }
          }

          this._aryRunningNode = [];
        }

        stopAndRemoveAni(node, usePool) {
          if (usePool === void 0) {
            usePool = true;
          }

          var targetToken = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID];

          for (var i = 0; i < this._aryRunningNode.length; i++) {
            var runningNode = this._aryRunningNode[i];
            var runningToken = runningNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID];

            if (targetToken === runningToken) {
              var _node$parent2;

              var aniComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              (_node$parent2 = node.parent) == null || _node$parent2.removeChild(node);

              this._aryRunningNode.splice(i, 1); // 移除節點後結束迴圈


              aniComponent == null || aniComponent.stopAni();

              if (usePool) {
                var prefabId = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID];
                this.removeSingleNodeData(node);
                (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
                  error: Error()
                }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().pushInstanceToPool(prefabId, node);
              }

              break;
            }
          }
        }

        stopAndRemoveAniByTokenId(tokenId, usePool) {
          if (usePool === void 0) {
            usePool = true;
          }

          for (var i = 0; i < this._aryRunningNode.length; i++) {
            var node = this._aryRunningNode[i];
            var currentTokenId = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID];

            if (currentTokenId === tokenId) {
              var _node$parent3;

              var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              (_node$parent3 = node.parent) == null || _node$parent3.removeChild(node);

              this._aryRunningNode.splice(i, 1);

              aniComp == null || aniComp.stopAni();

              if (usePool) {
                var prefabId = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID];
                this.removeSingleNodeData(node);
                (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
                  error: Error()
                }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().pushInstanceToPool(prefabId, node);
              }

              break;
            }
          }
        }

        stopAndRemoveAnisByGroup(groupId, usePool) {
          if (usePool === void 0) {
            usePool = true;
          }

          for (var i = this._aryRunningNode.length - 1; i >= 0; i--) {
            var node = this._aryRunningNode[i];
            var groupList = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID];

            if (groupList != null && groupList.includes(groupId)) {
              var _node$parent4;

              var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              (_node$parent4 = node.parent) == null || _node$parent4.removeChild(node);

              this._aryRunningNode.splice(i, 1);

              aniComp == null || aniComp.stopAni();

              if (usePool) {
                var prefabId = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID];
                this.removeSingleNodeData(node);
                (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
                  error: Error()
                }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().pushInstanceToPool(prefabId, node);
              }
            }
          }
        }

        stopAllAnis() {
          for (var node of this._aryRunningNode) {
            var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
            aniComp == null || aniComp.stopAni();
          }
        }

        stopAniByName(name) {
          for (var node of this._aryRunningNode) {
            if (node.name == name) {
              var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              aniComp == null || aniComp.stopAni();
              break;
            }
          }
        }

        stopAniByTokenId(tokenId) {
          for (var node of this._aryRunningNode) {
            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] == tokenId) {
              var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              aniComp == null || aniComp.stopAni();
              break;
            }
          }
        }

        stopAnisByGroup(groupId) {
          for (var node of this._aryRunningNode) {
            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].indexOf(groupId) != -1) {
              var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              aniComp == null || aniComp.stopAni();
            }
          }
        }

        pauseAllAnis() {
          for (var node of this._aryRunningNode) {
            var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
            aniComp == null || aniComp.pauseAni();
          }
        }

        pauseAniByName(name) {
          for (var node of this._aryRunningNode) {
            if (node.name == name) {
              var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              aniComp == null || aniComp.pauseAni();
              break;
            }
          }
        }

        pauseAniByTokenId(tokenId) {
          for (var node of this._aryRunningNode) {
            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] == tokenId) {
              var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              aniComp == null || aniComp.pauseAni();
              break;
            }
          }
        }

        pauseAnisByGroup(groupId) {
          for (var node of this._aryRunningNode) {
            var groupList = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID];

            if (groupList != null && groupList.includes(groupId)) {
              var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              aniComp == null || aniComp.pauseAni();
            }
          }
        }

        resumeAllAni() {
          for (var node of this._aryRunningNode) {
            var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
            aniComp == null || aniComp.resumeAni();
          }
        }

        resumeAniByName(name) {
          for (var node of this._aryRunningNode) {
            if (node.name == name) {
              var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              aniComp == null || aniComp.resumeAni();
              break;
            }
          }
        }

        resumeAniByTokenId(tokenId) {
          for (var node of this._aryRunningNode) {
            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] === tokenId) {
              var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              aniComp == null || aniComp.resumeAni();
              break;
            }
          }
        }

        resumeAnisByGroup(groupId) {
          for (var node of this._aryRunningNode) {
            var groupList = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID];

            if (groupList != null && groupList.includes(groupId)) {
              var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              aniComp == null || aniComp.resumeAni();
            }
          }
        }

        closeAllNode() {
          for (var node of this._aryRunningNode) {
            var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
            aniComp == null || aniComp.stopAni();
            node.active = false;
          }
        }

        closeNodeByName(name) {
          for (var node of this._aryRunningNode) {
            if (node.name === name) {
              var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              aniComp == null || aniComp.stopAni();
              node.active = false;
              break;
            }
          }
        }

        closeNodeByTokenId(tokenId) {
          for (var node of this._aryRunningNode) {
            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] === tokenId) {
              var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              aniComp == null || aniComp.stopAni();
              node.active = false;
              break;
            }
          }
        }

        closeNodesByGroup(groupId) {
          for (var node of this._aryRunningNode) {
            var groupList = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID];

            if (groupList != null && groupList.includes(groupId)) {
              var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(node);
              aniComp == null || aniComp.stopAni();
              node.active = false;
            }
          }
        }

        openAllNode() {
          for (var node of this._aryRunningNode) {
            node.active = true;
          }
        }

        openNodeByName(name) {
          for (var node of this._aryRunningNode) {
            if (node.name == name) {
              node.active = true;
              break;
            }
          }
        }

        openNodeByTokenId(tokenId) {
          for (var node of this._aryRunningNode) {
            if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] == tokenId) {
              node.active = true;
              break;
            }
          }
        }

        openNodesByGroup(groupId) {
          for (var node of this._aryRunningNode) {
            var groupList = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID];

            if (groupList != null && groupList.includes(groupId)) {
              node.active = true;
            }
          }
        } //========拔除node的動態資料========


        removeSingleNodeData(aniNode) {
          aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID] = [];
          aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] = '';
          aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO] = null; //--objPool需要用到PREFAB_ID的資料

          aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID] = '';
          aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ADDED] = null; //--new

          aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).LOCKED] = null; //--new

          aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).REFERENCE_TARGET] = null; //-20260129-new

          var aniInterfaceComponent = null;

          if (aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL]) {
            aniInterfaceComponent = aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];
          } else {
            aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(aniNode);
          }

          aniInterfaceComponent.slotMachineIndexInfo = null;
          aniInterfaceComponent.tokenID = '';
          aniInterfaceComponent.groupID = []; //--20250825新增:動態掛載IAnimationControl,recycle之前拔除參照

          if (aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
            error: Error()
          }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL]) {
            aniNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL] = null;
          }
        }

        removeAnisNodeData(data) {
          for (var aniNode of data) {
            this.removeSingleNodeData(aniNode);
          }
        } //--把assign的資料拔掉


        beforeStopAndRemoveALLAniNodeData() {
          for (var aniNode of this._aryRunningNode) {
            this.removeSingleNodeData(aniNode);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_aniNodeStageContainerList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d55389e1390b6db00d2f8c92aaa71b79c2051b1f.js.map
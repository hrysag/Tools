System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, v3, AnimationControllersPoolManager, DisplayStageNodeForAniNodePropertyDef, DYN_NODE_PROPERTIES, AniSysTools, AnimationController, SpineController, MixedASController, CustomAnimationController, PrefabAdapter, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ANI_CONTROLLER_MAP, AnimationNodesControllerBase;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAnimationControllersPoolManager(extras) {
    _reporterNs.report("AnimationControllersPoolManager", "./AnimationControllersPoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDisplayStageNodeForAniNodePropertyDef(extras) {
    _reporterNs.report("DisplayStageNodeForAniNodePropertyDef", "./Definitions/DisplayStageNodeForAniNodePropertyDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayIAniData(extras) {
    _reporterNs.report("playIAniData", "./Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDYN_NODE_PROPERTIES(extras) {
    _reporterNs.report("DYN_NODE_PROPERTIES", "./Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniSysTools(extras) {
    _reporterNs.report("AniSysTools", "./AniTools/AniSysTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAniWithAniCtrl(extras) {
    _reporterNs.report("IAniWithAniCtrl", "./Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAnimationControl(extras) {
    _reporterNs.report("IAnimationControl", "./Definitions/IAnimationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationController(extras) {
    _reporterNs.report("AnimationController", "./Components/AnimationController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "./Components/SpineController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMixedASController(extras) {
    _reporterNs.report("MixedASController", "./Components/MixedASController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCustomAnimationController(extras) {
    _reporterNs.report("CustomAnimationController", "./Components/CustomAnimationController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabAdapter(extras) {
    _reporterNs.report("PrefabAdapter", "./PrefabAdapter", _context.meta, extras);
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
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      AnimationControllersPoolManager = _unresolved_2.AnimationControllersPoolManager;
    }, function (_unresolved_3) {
      DisplayStageNodeForAniNodePropertyDef = _unresolved_3.DisplayStageNodeForAniNodePropertyDef;
    }, function (_unresolved_4) {
      DYN_NODE_PROPERTIES = _unresolved_4.DYN_NODE_PROPERTIES;
    }, function (_unresolved_5) {
      AniSysTools = _unresolved_5.AniSysTools;
    }, function (_unresolved_6) {
      AnimationController = _unresolved_6.AnimationController;
    }, function (_unresolved_7) {
      SpineController = _unresolved_7.SpineController;
    }, function (_unresolved_8) {
      MixedASController = _unresolved_8.MixedASController;
    }, function (_unresolved_9) {
      CustomAnimationController = _unresolved_9.CustomAnimationController;
    }, function (_unresolved_10) {
      PrefabAdapter = _unresolved_10.PrefabAdapter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8eed3llXdCF54WtyDP6atm", "AnimationNodesControllerBase", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'UITransform', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);
      ANI_CONTROLLER_MAP = {
        [(_crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
          error: Error()
        }), AnimationController) : AnimationController).name]: _crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
          error: Error()
        }), AnimationController) : AnimationController,
        [(_crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
          error: Error()
        }), SpineController) : SpineController).name]: _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
          error: Error()
        }), SpineController) : SpineController,
        [(_crd && MixedASController === void 0 ? (_reportPossibleCrUseOfMixedASController({
          error: Error()
        }), MixedASController) : MixedASController).name]: _crd && MixedASController === void 0 ? (_reportPossibleCrUseOfMixedASController({
          error: Error()
        }), MixedASController) : MixedASController,
        [(_crd && CustomAnimationController === void 0 ? (_reportPossibleCrUseOfCustomAnimationController({
          error: Error()
        }), CustomAnimationController) : CustomAnimationController).name]: _crd && CustomAnimationController === void 0 ? (_reportPossibleCrUseOfCustomAnimationController({
          error: Error()
        }), CustomAnimationController) : CustomAnimationController
      };
      /*
      const  DYN_NODE_PROPERTIES = {
          PREFAB_ID: 'prefabID',
          TOKEN_ID:'tokenID',
          GROUP_ID:'groupID'
      }*/

      _export("AnimationNodesControllerBase", AnimationNodesControllerBase = (_dec = ccclass('AnimationNodesControllerBase'), _dec2 = property({
        type: _crd && PrefabAdapter === void 0 ? (_reportPossibleCrUseOfPrefabAdapter({
          error: Error()
        }), PrefabAdapter) : PrefabAdapter,
        visible: true,
        displayName: 'PrefabAdapter',
        tooltip: '將要在物件持運作的prefab掛入'
      }), _dec3 = property({
        type: [_crd && DisplayStageNodeForAniNodePropertyDef === void 0 ? (_reportPossibleCrUseOfDisplayStageNodeForAniNodePropertyDef({
          error: Error()
        }), DisplayStageNodeForAniNodePropertyDef) : DisplayStageNodeForAniNodePropertyDef],
        visible: true,
        displayName: 'AniNodeStageList',
        tooltip: '動畫節點需要添加到的節點舞台清單'
      }), _dec(_class = (_class2 = class AnimationNodesControllerBase extends Component {
        //--這個是用來存放正在播放的node
        get aryRunningNode() {
          return this._aryRunningNode;
        }

        constructor() {
          super();

          _initializerDefineProperty(this, "_prefabAdapter", _descriptor, this);

          _initializerDefineProperty(this, "_aniNodeStageContainerList", _descriptor2, this);

          this._aniNodeStageContainerMap = {};
          this._aryRunningNode = [];
        }

        onLoad() {
          if (this._aniNodeStageContainerList.length > 0) {
            for (var displayStageNode of this._aniNodeStageContainerList) {
              this._aniNodeStageContainerMap[displayStageNode.key] = displayStageNode.node;
            }
          }

          (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
            error: Error()
          }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().init();

          if (this._prefabAdapter) {
            (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
              error: Error()
            }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().setPrefabForPropertyList(this._prefabAdapter.prefabForPropertyList);
          }
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

        getPrefabNode(prefabKey) {
          return (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
            error: Error()
          }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().getPrefabNode(prefabKey);
        }

        addAnimationData(IAniData) {
          var targetNode; //--篩選特殊的產生條件
          //spRuleCheck = this.checkSpRuleForExist(aniData);

          if (IAniData.tokenID != '' && IAniData.duplicateTokenId == '') {
            targetNode = (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
              error: Error()
            }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().getPrefabNode(IAniData.prefabKey); //--定義動態的特殊屬性-需要開出來讓node掛上去

            targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID] = IAniData.prefabKey;
            targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID] = [IAniData.groupID];
            targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID] = IAniData.tokenID;
            targetNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO] = IAniData.SymbolIconInfoData;
            var localNodeContainer = this._aniNodeStageContainerMap[IAniData.containerNodeId];
            var localPos = v3(0, 0, 0);

            if (IAniData.wPos) {
              localPos = localNodeContainer.getComponent(UITransform).convertToNodeSpaceAR(IAniData.wPos);
            } //--這邊要注意排列的順序,wild的顯示layer應該比其他symbol的顯示要高


            localNodeContainer.addChild(targetNode);
            targetNode.active = true;

            this._aryRunningNode.push(targetNode); //--抽出component 接手動畫資料處理


            var aniInterfaceComponent = null;
            aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(targetNode);

            if (aniInterfaceComponent) {
              aniInterfaceComponent.init();
              aniInterfaceComponent.slotMachineIndexInfo = IAniData.SymbolIconInfoData;
              aniInterfaceComponent.setAniDataInfo(IAniData.aniInfo);
              aniInterfaceComponent.tokenID = IAniData.tokenID;
              aniInterfaceComponent.groupID = [IAniData.groupID];
            } else {
              console.warn('No compatible animation controller found on targetNode.', targetNode.name);
            }

            targetNode.setPosition(localPos);
          } else if (IAniData.duplicateTokenId != '') {
            if (!targetNode) {//console.warn('Duplicate tokenID found.', IAniData.tokenID);
            }
          }

          return targetNode;
        }

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

          var aryNode = [];
          var addedTokenIds = new Set(); // 使用 Set 去重複

          for (var node of this._aryRunningNode) {
            if (!node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID] || !node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID]) {
              console.warn("Node missing required properties.");
              continue; // 跳過缺少屬性的節點
            }

            for (var groupId of groupIdList) {
              if (node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID].indexOf(groupId) !== -1) {
                if (!addedTokenIds.has(node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                  error: Error()
                }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID])) {
                  aryNode.push(node);
                  addedTokenIds.add(node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                    error: Error()
                  }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).TOKEN_ID]);
                }

                break; // 找到匹配的 groupId，跳出內層迴圈
              } else {//console.warn("Node missing required groupId.");
              }
            }
          }

          return aryNode;
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
          var _this = this;

          return _asyncToGenerator(function* () {
            var aniComp = null;

            for (var node of _this._aryRunningNode) {
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
          var _this2 = this;

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

            for (var node of _this2._aryRunningNode) {
              yield* _loop();
            }

            yield _this2.playAnisByNodesWithPromise(nodesToPlay, trackId);
          })();
        } //--20250731 修改(將查找與播放分開)


        playAnisByGroupWithPromise(groupId, trackId) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var nodesToPlay = [];

            for (var node of _this3._aryRunningNode) {
              var _node$GROUP_ID2;

              if ((_node$GROUP_ID2 = node[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).GROUP_ID]) != null && _node$GROUP_ID2.includes(groupId)) {
                nodesToPlay.push(node);
              }
            }

            yield _this3.playAnisByNodesWithPromise(nodesToPlay, trackId);
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

        forTestDeBug(trackTarget, title) {
          //-DYN_NODE_PROPERTIES.PREFAB_ID
          for (var i = 0; i < trackTarget.length; i++) {
            console.log(title, trackTarget[i][(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).PREFAB_ID]);
          }
        }

        playAniByNameWithPromise(name, trackId) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var aniComp = null;

            for (var node of _this4._aryRunningNode) {
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
          var _this5 = this;

          return _asyncToGenerator(function* () {
            var promises = [];

            for (var node of _this5._aryRunningNode) {
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
              }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().pushInstancePrefabNodeToPool(prefabId, node);
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
                }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().pushInstancePrefabNodeToPool(prefabId, node);
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
                }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().pushInstancePrefabNodeToPool(prefabId, node);
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
                }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().pushInstancePrefabNodeToPool(prefabId, node);
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
        }

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
          var aniInterfaceComponent = null;
          aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
            error: Error()
          }), AniSysTools) : AniSysTools).findAndGetIAniComponent(aniNode);
          aniInterfaceComponent.slotMachineIndexInfo = null;
          aniInterfaceComponent.tokenID = '';
          aniInterfaceComponent.groupID = [];
        } //--把assign的資料拔掉


        beforeStopAndRemoveAniNodeData() {
          for (var aniNode of this._aryRunningNode) {
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
            var aniInterfaceComponent = null;
            aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(aniNode);
            aniInterfaceComponent.slotMachineIndexInfo = null;
            aniInterfaceComponent.tokenID = '';
            aniInterfaceComponent.groupID = [];
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_prefabAdapter", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_aniNodeStageContainerList", [_dec3], {
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
//# sourceMappingURL=93ff29c436d2b4f7f471adf19d862a4b69ebc77a.js.map
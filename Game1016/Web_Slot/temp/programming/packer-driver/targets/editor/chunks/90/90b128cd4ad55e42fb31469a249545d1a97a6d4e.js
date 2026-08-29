System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, GameNodeContainer, GameState, FindNode, BasicShowContainerManager, _crd, ccclass, property;

  function _reportPossibleCrUseOfIBasicShowContainerManager(extras) {
    _reporterNs.report("IBasicShowContainerManager", "./IBasicShowContainerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfContainerWholeBehavior(extras) {
    _reporterNs.report("ContainerWholeBehavior", "./Component/ContainerWholeBehavior", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameNodeContainer(extras) {
    _reporterNs.report("GameNodeContainer", "./Definitions/GameNodeContainer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../GameStateConfigDef/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindNode(extras) {
    _reporterNs.report("FindNode", "../FindNode", _context.meta, extras);
  }

  _export("BasicShowContainerManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      GameNodeContainer = _unresolved_2.GameNodeContainer;
    }, function (_unresolved_3) {
      GameState = _unresolved_3.GameState;
    }, function (_unresolved_4) {
      FindNode = _unresolved_4.FindNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0ccfxoXcFNdabHjhvW8+bW", "BasicShowContainerManager", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 基礎顯示容器管理器,適用多場景調度變化的專案
       * 他只負責一件事情就是開關顯示容器,可以藉由分組來達到不同遊戲狀態下的顯示容器
       * 這邊做成約束泛型類別讓基礎容器更有彈性一點
       * 20250905-
       * 移除繼承component..因為TS不能用多重繼承的方式,在要繼承其他component的同時又要繼承這個類別
       * 又要讓property在編輯器可以被看見,所以改成組合的方式來達成
       */
      //@ccclass('BasicShowContainerManager')

      _export("BasicShowContainerManager", BasicShowContainerManager = class BasicShowContainerManager {
        get showContainerMap() {
          return this._showContainerMap;
        }

        get slotFrameNode() {
          return this._slotFrameNode;
        }

        get bgContainerNode() {
          return this._bgContainerNode;
        }

        get ng_Show_Sys() {
          return this._ng_Show_Sys;
        }

        get rs_Show_Sys() {
          return this._rs_Show_Sys;
        }

        get fg_Show_Sys() {
          return this._fg_Show_Sys;
        }

        set slotFrameNode(value) {
          this._slotFrameNode = value;
        }

        set bgContainerNode(value) {
          this._bgContainerNode = value;
        }

        set ng_Show_Sys(value) {
          this._ng_Show_Sys = value;
        }

        set rs_Show_Sys(value) {
          this._rs_Show_Sys = value;
        }

        set fg_Show_Sys(value) {
          this._fg_Show_Sys = value;
        }

        constructor() {
          /**
           * 下列的裝飾器將保留,透過組合的方式將BasicShowContainerManager塞進去
           */
          //@property({ type: GameNodeContainer, visible: true, displayName: 'NG_顯示系統', group: 'normal_view', tooltip: 'NG相關會顯示的東西' })
          this._ng_Show_Sys = new (_crd && GameNodeContainer === void 0 ? (_reportPossibleCrUseOfGameNodeContainer({
            error: Error()
          }), GameNodeContainer) : GameNodeContainer)();
          this._rs_Show_Sys = new (_crd && GameNodeContainer === void 0 ? (_reportPossibleCrUseOfGameNodeContainer({
            error: Error()
          }), GameNodeContainer) : GameNodeContainer)();
          //@property({ type: GameNodeContainer, visible: true, displayName: 'FG_顯示系統', group: 'fg_view', tooltip: 'FG相關會顯示的東西' })
          this._fg_Show_Sys = new (_crd && GameNodeContainer === void 0 ? (_reportPossibleCrUseOfGameNodeContainer({
            error: Error()
          }), GameNodeContainer) : GameNodeContainer)();
          //@property({ type: Node, visible: true, displayName: 'SlotFrame', tooltip: 'SlotFrame_遊戲使用的frame_Node' })
          this._slotFrameNode = new Node();
          //@property({ type: Node, visible: true, displayName: 'Bg_container', tooltip: '裝全部bg的container' })
          this._bgContainerNode = new Node();
          this._showContainerMap = void 0;
          this._showContainerMap = new Map();
        }

        initMap() {
          this.setContainerMap((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL, this._ng_Show_Sys);
          this.setContainerMap((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME, this._fg_Show_Sys);
          this.setContainerMap((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE, this._rs_Show_Sys);
        }

        setContainerMap(gameState, container) {
          let aryContainer;

          if (this._showContainerMap.has(gameState)) {
            aryContainer = this._showContainerMap.get(gameState);
          } else {
            this._showContainerMap.set(gameState, []);

            aryContainer = this._showContainerMap.get(gameState);
          }

          aryContainer.push(container);

          this._showContainerMap.set(gameState, aryContainer); //-?

        }

        register() {}

        showContainer(containerId) {
          // Implementation
          const container = this.getContainerNodeByKey(containerId);

          if (container) {
            container.openContainer();
          }
        }

        hideContainer(containerId) {
          // Implementation
          const container = this.getContainerNodeByKey(containerId);

          if (container) {
            container.closeContainer();
          }
        }

        checkChildrenContains(node, rootNodeName) {
          const targetNode = (_crd && FindNode === void 0 ? (_reportPossibleCrUseOfFindNode({
            error: Error()
          }), FindNode) : FindNode).findChildByNameRecursive(node, rootNodeName);

          if (targetNode) {
            if (targetNode.children.length > 0) {
              return true;
            } else {
              return false;
            }
          }

          return false;
        }

        getContainerNodeByKey(key) {
          // Implementation
          for (const containerList of this._showContainerMap.values()) {
            for (const aryNodeContainer of containerList) {
              for (const node of aryNodeContainer.gameNodeHashInfo) {
                if (node.nodeName === key) {
                  return node.displayNode;
                }
              }
            }
          }

          return null; //--沒找到就null
        }

        getContainerListByState(gameState) {
          // Implementation
          if (this._showContainerMap.has(gameState)) {
            const containerList = this._showContainerMap.get(gameState);

            if (!containerList) return null;
            const result = [];

            for (const aryNodeContainer of containerList) {
              for (const node of aryNodeContainer.gameNodeHashInfo) {
                const container = node.displayNode; // ContainerWholeBehavior

                if (container) {
                  result.push(container);
                }
              }
            }

            return result;
          }

          return null;
        }

        closeAllShowContainer() {
          // Implementation
          for (const [gameState] of this._showContainerMap.entries()) {
            this.closeContainerByState(gameState);
          }
        }

        openContainerByState(gameState) {
          if (gameState !== null && this._showContainerMap.has(gameState)) {
            const containerList = this._showContainerMap.get(gameState);

            if (!containerList) return;

            for (const aryNodeContainer of containerList) {
              for (const node of aryNodeContainer.gameNodeHashInfo) {
                const container = node.displayNode; // ContainerWholeBehavior

                if (container) {
                  container.openContainer();
                }
              }
            }
          }
        }

        closeContainerByState(gameState) {
          if (gameState !== null && this._showContainerMap.has(gameState)) {
            const containerList = this._showContainerMap.get(gameState);

            if (!containerList) return;

            for (const aryNodeContainer of containerList) {
              for (const node of aryNodeContainer.gameNodeHashInfo) {
                const container = node.displayNode; // ContainerWholeBehavior

                if (container) {
                  container.closeContainer();
                }
              }
            }
          }
        }

        openContainerByStateTween(gameState) {
          if (gameState !== null && this._showContainerMap.has(gameState)) {
            const containerList = this._showContainerMap.get(gameState);

            if (!containerList) return;

            for (const aryNodeContainer of containerList) {
              for (const node of aryNodeContainer.gameNodeHashInfo) {
                const container = node.displayNode; // ContainerWholeBehavior

                if (container) {
                  container.openContainerTween();
                }
              }
            }
          }
        }

        closeContainerByStateTween(gameState) {
          if (gameState !== null && this._showContainerMap.has(gameState)) {
            const containerList = this._showContainerMap.get(gameState);

            if (!containerList) return;

            for (const aryNodeContainer of containerList) {
              for (const node of aryNodeContainer.gameNodeHashInfo) {
                const container = node.displayNode; // ContainerWholeBehavior

                if (container) {
                  container.closeContainerTween();
                }
              }
            }
          }
        }

        getTargetContainer(gameState, condition) {
          const targetList = this._showContainerMap.get(gameState);

          let targetGameNodeContainer;
          if (!targetList || targetList.length === 0) return undefined;

          if (gameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL || gameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE) {
            //return targetList[0];
            targetGameNodeContainer = targetList[0];
          }

          let checkCondition = this.checkConditionForFind(condition);
          targetGameNodeContainer = this.getGameNodeContainerByCondition(checkCondition);
          return targetGameNodeContainer;
        } //-override it


        getGameNodeContainerByCondition(condition) {
          return undefined;
        } //-override it


        checkConditionForFind(condition) {
          return null;
        }

        reSetContainerLayer() {// Implementation
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=90b128cd4ad55e42fb31469a249545d1a97a6d4e.js.map
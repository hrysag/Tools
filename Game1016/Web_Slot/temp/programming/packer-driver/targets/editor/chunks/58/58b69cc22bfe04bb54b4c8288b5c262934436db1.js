System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BasicShowContainerManager, GameNodeContainer, GameState, IWindowResize, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ShowContainerWithResizeManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasicShowContainerManager(extras) {
    _reporterNs.report("BasicShowContainerManager", "./BasicShowContainerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfContainerWholeBehavior(extras) {
    _reporterNs.report("ContainerWholeBehavior", "./Component/ContainerWholeBehavior", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBasicShowContainerManager(extras) {
    _reporterNs.report("IBasicShowContainerManager", "./IBasicShowContainerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameNodeContainer(extras) {
    _reporterNs.report("GameNodeContainer", "./Definitions/GameNodeContainer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIGameMode(extras) {
    _reporterNs.report("IGameMode", "../BasicGameViewManager/IBasicGameModeManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../GameStateConfigDef/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWindowResize(extras) {
    _reporterNs.report("IWindowResize", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BasicShowContainerManager = _unresolved_2.BasicShowContainerManager;
    }, function (_unresolved_3) {
      GameNodeContainer = _unresolved_3.GameNodeContainer;
    }, function (_unresolved_4) {
      GameState = _unresolved_4.GameState;
    }, function (_unresolved_5) {
      IWindowResize = _unresolved_5.IWindowResize;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb4f6DW8ENCxbB2MWM8n2To", "ShowContainerWithResizeManager", undefined);

      //import { IWindowResize } from "db://assets/Scripts/Utils/IWindowResize";
      //import { Orientation } from "db://assets/Scripts/Utils/Config";
      __checkObsolete__(['Node', '_decorator']);

      /**
       * 裡面做委派給BasicShowContainerManager
       * 因為TS裡面不能做多重繼承的動作, IWindowResize他是component必須繼承
       * 因此沒有辦法再做一次繼承BasicShowContainerManager.
       * 所以用組合的方式來達成
       */
      ({
        ccclass,
        property
      } = _decorator);

      _export("ShowContainerWithResizeManager", ShowContainerWithResizeManager = (_dec = ccclass('ShowContainerWithResizeManager'), _dec2 = property({
        type: _crd && GameNodeContainer === void 0 ? (_reportPossibleCrUseOfGameNodeContainer({
          error: Error()
        }), GameNodeContainer) : GameNodeContainer,
        visible: true,
        displayName: 'NG_顯示系統',
        group: 'normal_view',
        tooltip: 'NG相關會顯示的東西'
      }), _dec3 = property({
        type: _crd && GameNodeContainer === void 0 ? (_reportPossibleCrUseOfGameNodeContainer({
          error: Error()
        }), GameNodeContainer) : GameNodeContainer,
        visible: true,
        displayName: 'RS_顯示系統',
        group: 'rs_view',
        tooltip: 'RS相關會顯示的東西'
      }), _dec4 = property({
        type: _crd && GameNodeContainer === void 0 ? (_reportPossibleCrUseOfGameNodeContainer({
          error: Error()
        }), GameNodeContainer) : GameNodeContainer,
        visible: true,
        displayName: 'FG_顯示系統',
        group: 'fg_view',
        tooltip: 'FG相關會顯示的東西'
      }), _dec(_class = (_class2 = class ShowContainerWithResizeManager extends (_crd && IWindowResize === void 0 ? (_reportPossibleCrUseOfIWindowResize({
        error: Error()
      }), IWindowResize) : IWindowResize) {
        constructor(...args) {
          super(...args);

          /*
          @property({
              type: BasicShowContainerManager,
              visible: true,
              displayName: 'Show Container Manager',
              tooltip: '在場景中拖入已經配置好的 BasicShowContainerManager 元件'
          })
          private _basicShowContainerManager: BasicShowContainerManager<ContainerBasicBehavior> = null;
          */
          //--原諒我..情非得已的苦衷

          /*
          @property({ type: ContainerWholeBehavior, visible: true, displayName: 'NG_顯示系統', group: 'normal_view', tooltip: 'NG相關會顯示的東西' })
          protected _ng_Show_Sys: ContainerWholeBehavior = new ContainerWholeBehavior();
           @property({ type: ContainerWholeBehavior, visible: true, displayName: 'FG_顯示系統', group: 'fg_view', tooltip: 'FG相關會顯示的東西' })
          protected _fg_Show_Sys: ContainerWholeBehavior = new ContainerWholeBehavior();
            @property({ type: Node, visible: true, displayName: 'Bg_container', tooltip: '裝全部bg的container' })
          protected _bgContainerNode: Node = new Node();
           protected _basicShowContainerManager: BasicShowContainerManager<ContainerWholeBehavior> | null = null;
          */

          /*
          @property({
              type: BasicShowContainerManager,
              visible: true,
              displayName: 'Show Container Manager',
              tooltip: '在場景中拖入已經好的 BasicShowContainerManager 元件'
          })
          private _basicShowContainerManager: BasicShowContainerManager<ContainerWholeBehavior> = null;
          */
          this._basicShowContainerManager = new (_crd && BasicShowContainerManager === void 0 ? (_reportPossibleCrUseOfBasicShowContainerManager({
            error: Error()
          }), BasicShowContainerManager) : BasicShowContainerManager)();

          _initializerDefineProperty(this, "_ng_Show_Sys", _descriptor, this);

          _initializerDefineProperty(this, "_rs_Show_Sys", _descriptor2, this);

          _initializerDefineProperty(this, "_fg_Show_Sys", _descriptor3, this);

          //protected _showContainerMap: Map<GameState, GameNodeContainer<ContainerWholeBehavior>[]> = new Map();
          this._currentRotation = null;
          this._finishInit = false;
          this._currentGameState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NULL;
          this._dirtyFlag = false;
        }

        onLoad() {
          this.init();
        }

        init() {
          if (this._finishInit) return;
          this._dirtyFlag = true;
          this._basicShowContainerManager = new (_crd && BasicShowContainerManager === void 0 ? (_reportPossibleCrUseOfBasicShowContainerManager({
            error: Error()
          }), BasicShowContainerManager) : BasicShowContainerManager)();
          this._basicShowContainerManager.ng_Show_Sys = this._ng_Show_Sys;
          this._basicShowContainerManager.rs_Show_Sys = this._rs_Show_Sys;
          this._basicShowContainerManager.fg_Show_Sys = this._fg_Show_Sys;

          this._basicShowContainerManager.initMap();
        }

        afterRegister() {
          if (!this._dirtyFlag) return;
          this._finishInit = true;
          this.initGameMode();
          this.changeRotationResolution(this._currentRotation);
        }

        initGameMode() {
          this._basicShowContainerManager.closeAllShowContainer();

          this._basicShowContainerManager.openContainerByState((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL);
        }

        registerContainer(gameState, container) {
          var _this$_basicShowConta;

          (_this$_basicShowConta = this._basicShowContainerManager) == null || _this$_basicShowConta.setContainerMap(gameState, container);
        }

        get showContainerMap() {
          var _this$_basicShowConta2;

          return (_this$_basicShowConta2 = this._basicShowContainerManager) == null ? void 0 : _this$_basicShowConta2.showContainerMap;
        }

        get slotFrameNode() {
          var _this$_basicShowConta3;

          return (_this$_basicShowConta3 = this._basicShowContainerManager) == null ? void 0 : _this$_basicShowConta3.slotFrameNode;
        } // ... 其他 getter/setter 也一樣


        changeRotationResolution(orientation) {
          if (orientation) {
            this._currentRotation = orientation;
          }

          const processed = new Set();

          for (const containerList of this._basicShowContainerManager.showContainerMap.values()) {
            for (const nodeAry of containerList) {
              if (processed.has(nodeAry)) continue;
              processed.add(nodeAry);

              for (const displayItem of nodeAry.gameNodeHashInfo) {
                const displayNode = displayItem.displayNode; //-ContainerWholeBehavior

                displayNode.changeRotationResolution(orientation);
              }
            }
          }
        } //========================<IWindowResize>===========================================================


        onWindowResize(orientation) {
          if (this._currentRotation == orientation) return;
          this._currentRotation = orientation;

          if (this._finishInit) {
            this.changeRotationResolution(orientation);
          }
        } //========================<interface IGameMode>===========================================================


        changeGameState(gameState, condition) {
          if (this._currentGameState === gameState) {
            return; // 如果狀態沒有改變，則不執行任何操作
          } // 關閉舊狀態的顯示容器
          //this._basicShowContainerManager.closeContainerByState(this._currentGameState);//--關掉舊的
          //--暫時先這樣-TO-DO-20251022要補另外的API出來-或是修改原本的API可以吃另一個useTween參數


          this._basicShowContainerManager.closeContainerByStateTween(this._currentGameState); //--關掉舊的


          this._currentGameState = gameState; //抽出目標map

          const mainTarget = this._basicShowContainerManager.getTargetContainer(gameState, condition);

          const showContainerList = this._basicShowContainerManager.showContainerMap;
          const processed = new Set();

          for (const [mapGameState, containerList] of showContainerList.entries()) {
            for (const group of containerList) {
              if (processed.has(group)) continue;
              processed.add(group);
              const isMainTarget = group === mainTarget;

              for (const node of group.gameNodeHashInfo) {
                //--do something(isMainTarget用來判斷是不是主要顯示的那個要做一些處理)
                const displayNode = node.displayNode;
                displayNode.changeGameMode(gameState);
              }
            }
          } //this._basicShowContainerManager.openContainerByState(gameState);//--打開新的
          //--暫時先這樣-TO-DO-20251022要補另外的API出來-或是修改原本的API可以吃另一個useTween參數


          this._basicShowContainerManager.openContainerByStateTween(gameState); //--打開新的

        } //========================<interface IBasicShowContainerManager>===========================================================


        showContainer(containerId) {
          var _this$_basicShowConta4;

          (_this$_basicShowConta4 = this._basicShowContainerManager) == null || _this$_basicShowConta4.showContainer(containerId);
        }

        hideContainer(containerId) {
          var _this$_basicShowConta5;

          (_this$_basicShowConta5 = this._basicShowContainerManager) == null || _this$_basicShowConta5.hideContainer(containerId);
        }

        checkChildrenContains(node, rootNodeName) {
          if (this._basicShowContainerManager) {
            return this._basicShowContainerManager.checkChildrenContains(node, rootNodeName);
          }

          return false;
        }

        getContainerNodeByKey(key) {
          var _this$_basicShowConta6, _this$_basicShowConta7;

          return (_this$_basicShowConta6 = (_this$_basicShowConta7 = this._basicShowContainerManager) == null ? void 0 : _this$_basicShowConta7.getContainerNodeByKey(key)) != null ? _this$_basicShowConta6 : null;
        }

        getContainerListByState(gameState) {
          var _this$_basicShowConta8, _this$_basicShowConta9;

          return (_this$_basicShowConta8 = (_this$_basicShowConta9 = this._basicShowContainerManager) == null ? void 0 : _this$_basicShowConta9.getContainerListByState(gameState)) != null ? _this$_basicShowConta8 : null;
        }

        closeAllShowContainer() {
          var _this$_basicShowConta10;

          (_this$_basicShowConta10 = this._basicShowContainerManager) == null || _this$_basicShowConta10.closeAllShowContainer();
        } //--感覺有點多餘的功能=..=||但你要繼承過來在操控container裡面node物件的排列顯示層級也可以啦


        reSetContainerLayer() {}

        initComps() {
          var _this$_basicShowConta11;

          const targetMap = (_this$_basicShowConta11 = this._basicShowContainerManager) == null ? void 0 : _this$_basicShowConta11.showContainerMap;

          for (const containerList of targetMap.values()) {
            for (const aryNodeContainer of containerList) {
              for (const node of aryNodeContainer.gameNodeHashInfo) {
                node.displayNode.node.active = true; //--強制觸發onload->init
              }
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_ng_Show_Sys", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new (_crd && GameNodeContainer === void 0 ? (_reportPossibleCrUseOfGameNodeContainer({
            error: Error()
          }), GameNodeContainer) : GameNodeContainer)();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_rs_Show_Sys", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new (_crd && GameNodeContainer === void 0 ? (_reportPossibleCrUseOfGameNodeContainer({
            error: Error()
          }), GameNodeContainer) : GameNodeContainer)();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_fg_Show_Sys", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new (_crd && GameNodeContainer === void 0 ? (_reportPossibleCrUseOfGameNodeContainer({
            error: Error()
          }), GameNodeContainer) : GameNodeContainer)();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=58b69cc22bfe04bb54b4c8288b5c262934436db1.js.map
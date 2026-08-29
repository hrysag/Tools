System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, GameModeNode, GameState, FindComponent, BasicDisplayContainer, FG_BkgController, FG2_BkgController, BasicGameStateAndRotationResolution, IWindowResize, FG_SpriteController, FindNode, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, ShowContainerController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameModeNode(extras) {
    _reporterNs.report("GameModeNode", "../../DefinitionGameData/ChangeGameModeNodeDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../DefinitionGameData/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../../MyUtils/FindComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicDisplayContainer(extras) {
    _reporterNs.report("BasicDisplayContainer", "./Components/IBG_Ani", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFG_BkgController(extras) {
    _reporterNs.report("FG_BkgController", "./Components/FG_BkgController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFG2_BkgController(extras) {
    _reporterNs.report("FG2_BkgController", "./Components/FG2_BkgController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../../../../Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicGameStateAndRotationResolution(extras) {
    _reporterNs.report("BasicGameStateAndRotationResolution", "./Components/IGameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWindowResize(extras) {
    _reporterNs.report("IWindowResize", "db://assets/Scripts/Utils/IWindowResize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFG_SpriteController(extras) {
    _reporterNs.report("FG_SpriteController", "./Components/FG_SpriteController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindNode(extras) {
    _reporterNs.report("FindNode", "../../MyUtils/FindNode", _context.meta, extras);
  }

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
      GameModeNode = _unresolved_2.GameModeNode;
    }, function (_unresolved_3) {
      GameState = _unresolved_3.GameState;
    }, function (_unresolved_4) {
      FindComponent = _unresolved_4.FindComponent;
    }, function (_unresolved_5) {
      BasicDisplayContainer = _unresolved_5.BasicDisplayContainer;
    }, function (_unresolved_6) {
      FG_BkgController = _unresolved_6.FG_BkgController;
    }, function (_unresolved_7) {
      FG2_BkgController = _unresolved_7.FG2_BkgController;
    }, function (_unresolved_8) {
      BasicGameStateAndRotationResolution = _unresolved_8.BasicGameStateAndRotationResolution;
    }, function (_unresolved_9) {
      IWindowResize = _unresolved_9.IWindowResize;
    }, function (_unresolved_10) {
      FG_SpriteController = _unresolved_10.FG_SpriteController;
    }, function (_unresolved_11) {
      FindNode = _unresolved_11.FindNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "97547rH7wdPgqAV+2jKRw9B", "ShowContainerController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Game', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShowContainerController", ShowContainerController = (_dec = ccclass('ShowContainerController'), _dec2 = property({
        type: _crd && GameModeNode === void 0 ? (_reportPossibleCrUseOfGameModeNode({
          error: Error()
        }), GameModeNode) : GameModeNode,
        visible: true,
        displayName: 'NG_顯示系統',
        group: 'normal_view',
        tooltip: 'NG相關會顯示的東西'
      }), _dec3 = property({
        type: _crd && GameModeNode === void 0 ? (_reportPossibleCrUseOfGameModeNode({
          error: Error()
        }), GameModeNode) : GameModeNode,
        visible: true,
        displayName: 'FG_阿里顯示系統',
        group: 'alibaba_view',
        tooltip: 'FG阿里相關會顯示的東西'
      }), _dec4 = property({
        type: _crd && GameModeNode === void 0 ? (_reportPossibleCrUseOfGameModeNode({
          error: Error()
        }), GameModeNode) : GameModeNode,
        visible: true,
        displayName: 'FG_盜賊顯示系統',
        group: 'thieves_view',
        tooltip: 'FG盜賊相關會顯示的東西'
      }), _dec5 = property({
        type: Node,
        visible: true,
        displayName: 'SlotFrame',
        tooltip: 'SlotFrame_遊戲使用的frame_Node'
      }), _dec6 = property({
        type: Node,
        visible: true,
        displayName: 'Bg_container',
        tooltip: '裝全部bg的container'
      }), _dec7 = property({
        type: Node,
        visible: true,
        displayName: 'FakeTrasitionNode',
        tooltip: '轉場使用的fake_Node'
      }), _dec8 = property({
        type: Node,
        visible: true,
        displayName: 'FakeNgVerticalNode',
        tooltip: '轉場使用的直版FGfake_Node'
      }), _dec(_class = (_class2 = class ShowContainerController extends (_crd && IWindowResize === void 0 ? (_reportPossibleCrUseOfIWindowResize({
        error: Error()
      }), IWindowResize) : IWindowResize) {
        //private _currentCamp: number = -1; // 預設為-1，表示未設定陣營,0表示阿里，1表示盜賊
        constructor() {
          super();

          _initializerDefineProperty(this, "_ng_Show_Sys", _descriptor, this);

          _initializerDefineProperty(this, "_fg_Alibaba_Show_Sys", _descriptor2, this);

          _initializerDefineProperty(this, "_fg_Thieves_Show_Sys", _descriptor3, this);

          _initializerDefineProperty(this, "_slotFrameNode", _descriptor4, this);

          _initializerDefineProperty(this, "_bgContainerNode", _descriptor5, this);

          _initializerDefineProperty(this, "_fakeTransitionNode", _descriptor6, this);

          _initializerDefineProperty(this, "_fakeNgVerticalNode", _descriptor7, this);

          //private _showContainerMap: { [key: number]: GameModeNode[] };
          this._showContainerMap = void 0;
          this._currentGameState = void 0;
          this._currentRotation = null;
          this._dirtyInitFlag = false;
          this._finishInit = false;
          this._currentGameState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).BEGIN;
        }

        init() {
          this._showContainerMap = new Map();

          this._showContainerMap.set((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL, [this._ng_Show_Sys]);

          this._showContainerMap.set((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE, [this._ng_Show_Sys]);

          this._showContainerMap.set((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME, [this._fg_Alibaba_Show_Sys, this._fg_Thieves_Show_Sys]);

          this.initComps();
          this._finishInit = true;
          this.changeRotationResolution();
        }

        onWindowResize(orientation) {
          if (this._currentRotation == orientation) return;
          this._currentRotation = orientation;

          if (this._finishInit) {
            this.changeRotationResolution();
          }
        }
        /**
         * 轉場關門狀態(此時可以開始切換畫面的狀態)
         * 會先執行這個,完成後再執行changeGameMode
         * 
         * 
         */


        changeContainerStateForTransition(gameState, camp) {
          if (this._currentGameState === gameState) {
            return; // 如果狀態沒有改變，則不執行任何操作
          }

          if (gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            var targetList = this._showContainerMap.get(gameState);

            if (!targetList || targetList.length === 0) return;
            var target;

            if (camp === 0 || camp == null || camp === -1) {
              target = targetList[0];
            } else if (camp === 1 && targetList.length > 1) {
              target = targetList[1];
            } //this._currentCamp = camp;


            if (target) {
              for (var node of target.gameNodeHashInfo) {
                node.displayNode.active = true; //let comp: any = FindComponent.findComponentInChildren(node.displayNode, BasicDisplayContainer);

                var comp = void 0;

                if (node.nodeName == 'FG_Bkg_Ali' || node.nodeName == 'FG_Bkg_Thieves') {
                  //--back(FG_BkgController/FG2_BkgController)
                  //node.displayNode.active = true;
                  if (node.nodeName == 'FG_Bkg_Thieves') {
                    //--檢查FG_Bkg裡面是否有東西
                    if (!this.checkChildrenContains(node.displayNode, 'FG_Bkg')) {
                      //--在當前的container的FG_Bkg裡面沒有子物件代表東西在阿里那邊
                      var shareBGRootContainer = this.getTargetNodeByNameInGameModeNode(this._fg_Alibaba_Show_Sys, 'FG_Bkg_Ali');
                      var fgComp = shareBGRootContainer.getComponent(_crd && FG_BkgController === void 0 ? (_reportPossibleCrUseOfFG_BkgController({
                        error: Error()
                      }), FG_BkgController) : FG_BkgController);

                      if (fgComp) {
                        //--交換共用背景到相對的container裡面
                        var shareBG = fgComp.getAndRemoveShareBg();
                        var targetComponent = node.displayNode.getComponent(_crd && FG2_BkgController === void 0 ? (_reportPossibleCrUseOfFG2_BkgController({
                          error: Error()
                        }), FG2_BkgController) : FG2_BkgController);
                        targetComponent.setShareBg(shareBG);
                      }
                    }

                    var fg_Bkg_frontNode = (_crd && FindNode === void 0 ? (_reportPossibleCrUseOfFindNode({
                      error: Error()
                    }), FindNode) : FindNode).findChildByNameRecursive(node.displayNode, 'FG_Bkg_front'); //--只有阿里才有的最前面的2搓盆栽

                    if (fg_Bkg_frontNode) {
                      var frameNode = this.getTargetNodeByNameInGameModeNode(this._fg_Thieves_Show_Sys, 'FG_Thieves'); //console.log('checkParent', frameNode);
                      //--層級順序要把它掛到slotframe那層

                      fg_Bkg_frontNode.parent = frameNode;
                      fg_Bkg_frontNode.active = false; //--換完之後要關閉因為目前還是在轉場狀態中,打開會穿幫
                    }
                  } //--只會有FG_BkgController/FG2_BkgController


                  comp = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                    error: Error()
                  }), FindComponent) : FindComponent).findComponentInChildren(node.displayNode, _crd && BasicDisplayContainer === void 0 ? (_reportPossibleCrUseOfBasicDisplayContainer({
                    error: Error()
                  }), BasicDisplayContainer) : BasicDisplayContainer);

                  if (comp) {
                    //--FG2_BkgController的targetSpine是前景的動畫(在slotFrame裡面)
                    comp.camp = camp;
                    comp.changeGameState(gameState);

                    if (node.nodeName == 'FG_Bkg_Thieves') {
                      comp.playShareBGForTransition(); //--因為前景的關閉導致playAni在此時是不會被觸發的  
                    } else {
                      comp.playAni(); //--沒塞資料就直接檢查旋轉狀態後播相對的動畫設定(1.第一次旋轉)
                    }

                    comp.startFgAndInitPlaySpPortrait(); //--啟動角色動畫

                    comp.checkRotationResolution();
                  }
                } else if (node.nodeName == 'FG_Ali' || node.nodeName == 'FG_Thieves') {
                  //--把門框在轉場時換到適合的layer表演,轉場結束在交換回來
                  node.displayNode.parent = this._fakeTransitionNode; //--front(FG_SpriteController) 
                  //---底下顯示次數的bar

                  comp = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                    error: Error()
                  }), FindComponent) : FindComponent).findComponentInChildren(node.displayNode, _crd && FG_SpriteController === void 0 ? (_reportPossibleCrUseOfFG_SpriteController({
                    error: Error()
                  }), FG_SpriteController) : FG_SpriteController);
                  comp.changeGameState(gameState);
                }
              }
            } //--關閉NG的背景


            var targetNode = this.getTargetNodeByNameInGameModeNode(this._ng_Show_Sys, 'NG_Bkg');

            if (targetNode) {
              targetNode.active = false;
            }

            this.processFGTransitionNode(); //--處理假背景+logo的交換圖層
            //console.log();
          }
        } //--交換圖層layer


        processFGTransitionNode() {
          var ngNodeContainer = (_crd && FindNode === void 0 ? (_reportPossibleCrUseOfFindNode({
            error: Error()
          }), FindNode) : FindNode).findChildByNameRecursive(this._bgContainerNode, 'NG_bkg_pic');
          ngNodeContainer.parent = this._fakeNgVerticalNode;
          var ngLanguageTitleNode = (_crd && FindNode === void 0 ? (_reportPossibleCrUseOfFindNode({
            error: Error()
          }), FindNode) : FindNode).findChildByNameRecursive(this._bgContainerNode, 'NG_logo');
          ngLanguageTitleNode.parent = this._fakeNgVerticalNode;
        }

        getTargetNodeByNameInGameModeNode(value, name) {
          for (var item of value.gameNodeHashInfo) {
            if (item.nodeName == name) {
              return item.displayNode;
            }
          }

          return null;
        }

        getTargetContainerByName(rootNode, targetName) {
          var targetNode = (_crd && FindNode === void 0 ? (_reportPossibleCrUseOfFindNode({
            error: Error()
          }), FindNode) : FindNode).findChildByNameRecursive(rootNode, targetName);
          return targetNode ? targetNode : null;
        } //--檢查當前的container裡面是否有子物件


        checkChildrenContains(rootNode, rootNodeName) {
          var targetNode = (_crd && FindNode === void 0 ? (_reportPossibleCrUseOfFindNode({
            error: Error()
          }), FindNode) : FindNode).findChildByNameRecursive(rootNode, rootNodeName);

          if (targetNode) {
            if (targetNode.children.length > 0) {
              return true;
            } else {
              return false;
            }
          }

          return false;
        } //--FG結束後要重新設定背景的動畫的layer


        reSetBkgContainerAni() {
          var rootTargetContainer = this.getTargetNodeByNameInGameModeNode(this._fg_Thieves_Show_Sys, 'FG_Bkg_Thieves');
          var bkgComp;

          if (this.checkChildrenContains(rootTargetContainer, 'FG_Bkg')) {
            //--如果有子物件代表是盜賊
            bkgComp = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
              error: Error()
            }), FindComponent) : FindComponent).findComponentInChildren(rootTargetContainer, _crd && FG2_BkgController === void 0 ? (_reportPossibleCrUseOfFG2_BkgController({
              error: Error()
            }), FG2_BkgController) : FG2_BkgController);
            bkgComp.stopAllAni();
            var shareBg = bkgComp.getAndRemoveShareBg();
            rootTargetContainer = this.getTargetNodeByNameInGameModeNode(this._fg_Alibaba_Show_Sys, 'FG_Bkg_Ali');
            bkgComp = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
              error: Error()
            }), FindComponent) : FindComponent).findComponentInChildren(rootTargetContainer, _crd && FG_BkgController === void 0 ? (_reportPossibleCrUseOfFG_BkgController({
              error: Error()
            }), FG_BkgController) : FG_BkgController);
            bkgComp.setShareBg(shareBg);
          } else {
            rootTargetContainer = this.getTargetNodeByNameInGameModeNode(this._fg_Alibaba_Show_Sys, 'FG_Bkg_Ali');
            bkgComp = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
              error: Error()
            }), FindComponent) : FindComponent).findComponentInChildren(rootTargetContainer, _crd && FG_BkgController === void 0 ? (_reportPossibleCrUseOfFG_BkgController({
              error: Error()
            }), FG_BkgController) : FG_BkgController);
            bkgComp.stopAllAni();
          }

          var frontNode = this.getTargetNodeByNameInGameModeNode(this._fg_Thieves_Show_Sys, 'FG_Thieves');
          var fg_Bkg_frontNode = (_crd && FindNode === void 0 ? (_reportPossibleCrUseOfFindNode({
            error: Error()
          }), FindNode) : FindNode).findChildByNameRecursive(frontNode, 'FG_Bkg_front');

          if (fg_Bkg_frontNode) {
            var frameNode = this.getTargetNodeByNameInGameModeNode(this._fg_Thieves_Show_Sys, 'FG_Bkg_Thieves');
            fg_Bkg_frontNode.parent = frameNode;
          }
        } //--整個換完背景後會進來(轉場中進來)


        changeBGContainerLayerDuringTransition(camp) {
          var target = (_crd && FindNode === void 0 ? (_reportPossibleCrUseOfFindNode({
            error: Error()
          }), FindNode) : FindNode).findChildByNameRecursive(this._fakeNgVerticalNode, 'NG_bkg_pic');
          target.active = false;
          var ng_Bkg = (_crd && FindNode === void 0 ? (_reportPossibleCrUseOfFindNode({
            error: Error()
          }), FindNode) : FindNode).findChildByNameRecursive(this._bgContainerNode, 'NG_Bkg');
          var ogContainerNode = (_crd && FindNode === void 0 ? (_reportPossibleCrUseOfFindNode({
            error: Error()
          }), FindNode) : FindNode).findChildByNameRecursive(ng_Bkg, 'ng_vertical_bg');

          if (target && ogContainerNode) {
            target.parent = ogContainerNode;
          }

          var ngLanguageTitleNodeTarget = (_crd && FindNode === void 0 ? (_reportPossibleCrUseOfFindNode({
            error: Error()
          }), FindNode) : FindNode).findChildByNameRecursive(this._fakeNgVerticalNode, 'NG_logo');
          var ogLanguageContainerNode = (_crd && FindNode === void 0 ? (_reportPossibleCrUseOfFindNode({
            error: Error()
          }), FindNode) : FindNode).findChildByNameRecursive(ng_Bkg, 'ng_vertical_logo');

          if (ngLanguageTitleNodeTarget && ogLanguageContainerNode) {
            ngLanguageTitleNodeTarget.parent = ogLanguageContainerNode;
          } //--先檢查目前開啟的是哪個陣營的FG

          /*
          const frameNode = this.getTargetNodeByNameInGameModeNode(this._fg_Thieves_Show_Sys, 'FG_Thieves');
          const fg_Bkg_frontNode = FindNode.findChildByNameRecursive(frameNode, 'FG_Bkg_front');
          console.log('checkFG2_front_', fg_Bkg_frontNode,);
          if (fg_Bkg_frontNode) {
              console.log('checkFG2_front_active', fg_Bkg_frontNode.active, fg_Bkg_frontNode.parent.active);
              fg_Bkg_frontNode.active = true;
          }*/
          //-camp=0代表阿里，camp=1代表盜賊


          if (camp == 1) {
            var frameNode = this.getTargetNodeByNameInGameModeNode(this._fg_Thieves_Show_Sys, 'FG_Bkg_Thieves');
            var fg2Comp = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
              error: Error()
            }), FindComponent) : FindComponent).findComponentInChildren(frameNode, _crd && FG2_BkgController === void 0 ? (_reportPossibleCrUseOfFG2_BkgController({
              error: Error()
            }), FG2_BkgController) : FG2_BkgController);

            if (fg2Comp) {
              fg2Comp.visibilityForTargetSpineNode(true); //--開啟FG2_BkgController的targetSpineNode

              fg2Comp.playAni(); //--播放動畫
            }
          }
          /*
          let rootContainerTarget = this.getTargetNodeByNameInGameModeNode(this._fg_Alibaba_Show_Sys, 'FG_Bkg_Ali');
          if (!this.checkChildrenContains(rootContainerTarget, 'FG_Bkg')) {
              //--如果有子物件代表是阿里
              rootContainerTarget = this.getTargetNodeByNameInGameModeNode(this._fg_Thieves_Show_Sys, 'FG_Bkg_Thieves');
              if (this.checkChildrenContains(rootContainerTarget, 'FG_Bkg')) {
                  const frameNode = this.getTargetNodeByNameInGameModeNode(this._fg_Thieves_Show_Sys, 'FG_Thieves');
                  const fg_Bkg_frontNode = FindNode.findChildByNameRecursive(frameNode, 'FG_Bkg_front');
                  if (fg_Bkg_frontNode) {
                      fg_Bkg_frontNode.active = true;
                  }
              }
           }*/

        }
        /**
         * 因為轉場會交換容器的parent，所以要在轉場結束後重新設定parent
         */


        reSetContainerLayer() {
          var nodes = this._fakeTransitionNode.children;

          for (var item of nodes) {
            item.parent = this._slotFrameNode;
          }

          var targetChild = this._slotFrameNode.children;

          for (var ngFrameNode of targetChild) {
            if (ngFrameNode.name == 'NG_frame' && ngFrameNode.active) {
              ngFrameNode.active = false;
              break;
            }
          }
        }

        setFGCamp(camp) {
          var target = this._showContainerMap.get((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME);

          if (!target) return; // 如果沒有對應資料，提前結束

          for (var nodeAry of target) {
            for (var displayItem of nodeAry.gameNodeHashInfo) {
              var testComp = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                error: Error()
              }), FindComponent) : FindComponent).findComponentInChildren(displayItem.displayNode, _crd && BasicDisplayContainer === void 0 ? (_reportPossibleCrUseOfBasicDisplayContainer({
                error: Error()
              }), BasicDisplayContainer) : BasicDisplayContainer);

              if (testComp) {
                testComp.camp = camp;
              }
            }
          }
        }

        changeRotationResolution() {
          var processed = new Set();

          for (var containerList of this._showContainerMap.values()) {
            for (var nodeAry of containerList) {
              //--檢查是否重複操作(NG/RE_SPINE/這兩個hash裝的是同一個東西)
              if (processed.has(nodeAry)) continue;
              processed.add(nodeAry);

              for (var displayItem of nodeAry.gameNodeHashInfo) {
                var displayNode = displayItem.displayNode;
                var comp = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                  error: Error()
                }), FindComponent) : FindComponent).findComponentInChildren(displayNode, _crd && BasicDisplayContainer === void 0 ? (_reportPossibleCrUseOfBasicDisplayContainer({
                  error: Error()
                }), BasicDisplayContainer) : BasicDisplayContainer);

                if (comp) {
                  comp.changeRotationResolution(this._currentRotation);
                  continue;
                }

                comp = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                  error: Error()
                }), FindComponent) : FindComponent).findComponentInChildren(displayNode, _crd && BasicGameStateAndRotationResolution === void 0 ? (_reportPossibleCrUseOfBasicGameStateAndRotationResolution({
                  error: Error()
                }), BasicGameStateAndRotationResolution) : BasicGameStateAndRotationResolution);

                if (comp) {
                  comp.onWindowResize(this._currentRotation);
                  continue;
                }

                comp = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                  error: Error()
                }), FindComponent) : FindComponent).findComponentInChildren(displayNode, _crd && FG_SpriteController === void 0 ? (_reportPossibleCrUseOfFG_SpriteController({
                  error: Error()
                }), FG_SpriteController) : FG_SpriteController);

                if (comp) {
                  comp.changeRotationResolution(this._currentRotation);
                }
              }
            }
          }
        }
        /**
        * 在changeGameMode之前先關閉動畫
        * 執行processNormalRound時機
        * 1.processNormalRound(每一局結束)
        * 2.processRound(reSpin/Fg每一局)
        * 但是只要狀態與上一次相同就不會繼續往下
        */


        changeGameMode(gameState, camp) {
          if (this._currentGameState === gameState) {
            return; // 如果狀態沒有改變，則不執行任何操作
          } // 關閉舊狀態的顯示容器


          this.closeContainerByState(this._currentGameState); //--關掉舊的
          // 開啟新狀態的顯示容器
          //抽出目標map

          var mainTarget = this.getTargetContainer(gameState, camp);
          var processed = new Set(); //this._currentCamp = camp != null ? camp : -1; // 更新當前陣營

          for (var [mapGameState, containerList] of this._showContainerMap.entries()) {
            for (var group of containerList) {
              if (processed.has(group)) continue;
              processed.add(group);
              var isMainTarget = group === mainTarget;

              for (var node of group.gameNodeHashInfo) {
                var displayNode = node.displayNode; //-NG_BkgController/NG_FrameController/FG_BkgController/FG2_BkgController/NG_Dec_frame(這個是在前面滾的裝飾性動畫(只有NG有))
                //--ps-因為NG_Dec_frame有勾選afterPlayDoDrop，所以會在轉場時自動關閉

                var comp = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                  error: Error()
                }), FindComponent) : FindComponent).findComponentInChildren(displayNode, _crd && BasicDisplayContainer === void 0 ? (_reportPossibleCrUseOfBasicDisplayContainer({
                  error: Error()
                }), BasicDisplayContainer) : BasicDisplayContainer);

                if (comp) {
                  if (isMainTarget) {
                    displayNode.active = true;
                    comp.isShowing = true;
                    comp.changeGameState(gameState);
                    comp.playAni();
                    continue;
                  } else {
                    //--脫離FG的狀態下camp要更新
                    if (comp.node.name == 'FG_Bkg_Thieves' || comp.node.name == 'FG_Bkg_Ali') {
                      comp.camp = camp;
                    } //--沒辦法isShowing的狀態要在changeGameState之前寫進去


                    displayNode.active = false;
                    comp.isShowing = false;
                    comp.changeGameState(gameState);
                  }
                } //--直版假的轉場用NG_Bkg/logo


                comp = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                  error: Error()
                }), FindComponent) : FindComponent).findComponentInChildren(displayNode, _crd && BasicGameStateAndRotationResolution === void 0 ? (_reportPossibleCrUseOfBasicGameStateAndRotationResolution({
                  error: Error()
                }), BasicGameStateAndRotationResolution) : BasicGameStateAndRotationResolution);

                if (comp) {
                  if (isMainTarget) {
                    comp.isShowing = true;
                    comp.changeGameState(gameState);
                    displayNode.active = true;
                    comp.openAllShowContainer();
                    continue;
                  } else {
                    comp.isShowing = false;
                    comp.changeGameState(gameState);
                    displayNode.active = false;
                  }
                } //--FG_Ali / FG_Thieves(在slotFrame裡面)


                comp = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                  error: Error()
                }), FindComponent) : FindComponent).findComponentInChildren(displayNode, _crd && FG_SpriteController === void 0 ? (_reportPossibleCrUseOfFG_SpriteController({
                  error: Error()
                }), FG_SpriteController) : FG_SpriteController);

                if (comp) {
                  comp.isShowing = true;
                  comp.changeGameState(gameState);
                  comp.camp = camp;

                  if (isMainTarget) {
                    comp.isShowing = true;
                    displayNode.active = true;
                  } else {
                    comp.isShowing = false;
                    comp.changeGameState(gameState);
                    displayNode.active = false;
                  }
                }
              }
            }
          }

          this._currentGameState = gameState; // 更新當前遊戲狀態
        }

        closeAllShowContainer() {
          for (var [gameState] of this._showContainerMap.entries()) {
            this.closeContainerByState(gameState);
          }
          /*
          for (const key in this._showContainerMap) {
              this.closeContainerByState(key);
          }*/

        }

        closeContainerByState(gameState) {
          if (gameState !== null && this._showContainerMap.has(gameState)) {
            var containerList = this._showContainerMap.get(gameState);

            if (!containerList) return; // 如果沒有對應的容器，則直接返回

            for (var aryNodeContainer of containerList) {
              for (var node of aryNodeContainer.gameNodeHashInfo) {
                var comp = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                  error: Error()
                }), FindComponent) : FindComponent).findComponentInChildren(node.displayNode, _crd && BasicDisplayContainer === void 0 ? (_reportPossibleCrUseOfBasicDisplayContainer({
                  error: Error()
                }), BasicDisplayContainer) : BasicDisplayContainer);

                if (comp) {
                  //comp.changeGameState(gameState);
                  comp.stopAllAni();
                  comp.isShowing = false;
                  node.displayNode.active = false;
                  continue;
                }

                comp = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                  error: Error()
                }), FindComponent) : FindComponent).findComponentInChildren(node.displayNode, _crd && BasicGameStateAndRotationResolution === void 0 ? (_reportPossibleCrUseOfBasicGameStateAndRotationResolution({
                  error: Error()
                }), BasicGameStateAndRotationResolution) : BasicGameStateAndRotationResolution);

                if (comp) {
                  comp.closeAllShowContainer();
                  comp.isShowing = false;
                  node.displayNode.active = false;
                  continue;
                }

                comp = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                  error: Error()
                }), FindComponent) : FindComponent).findComponentInChildren(node.displayNode, _crd && FG_SpriteController === void 0 ? (_reportPossibleCrUseOfFG_SpriteController({
                  error: Error()
                }), FG_SpriteController) : FG_SpriteController);

                if (comp) {
                  comp.stopAllAni();
                  comp.isShowing = false;
                  node.displayNode.active = false;
                }
              }
            }
          } //console.log('關閉狀態:', this._showContainerMap);

        }

        getContainerNode(key) {
          for (var containerList of this._showContainerMap.values()) {
            for (var aryNodeContainer of containerList) {
              for (var node of aryNodeContainer.gameNodeHashInfo) {
                if (node.nodeName === key) {
                  return node.displayNode;
                }
              }
            }
          }

          return null; //--沒找到就null
        } //--抽取目標map


        getTargetContainer(gameState, camp) {
          var targetList = this._showContainerMap.get(gameState);

          if (!targetList || targetList.length === 0) return undefined;

          if (gameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL || gameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).RE_SPINE) {
            return targetList[0];
          }

          if (camp == null || camp === 0 || camp === -1) {
            return targetList[0];
          } else if (camp === 1 && targetList.length > 1) {
            return targetList[1];
          }

          return undefined;
        }

        initComps() {
          var targetComp;

          for (var containerList of this._showContainerMap.values()) {
            for (var aryNodeContainer of containerList) {
              for (var node of aryNodeContainer.gameNodeHashInfo) {
                node.displayNode.active = true; //--強制觸發onload->init

                targetComp = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                  error: Error()
                }), FindComponent) : FindComponent).findComponentInChildren(node.displayNode, _crd && BasicDisplayContainer === void 0 ? (_reportPossibleCrUseOfBasicDisplayContainer({
                  error: Error()
                }), BasicDisplayContainer) : BasicDisplayContainer);

                if (targetComp) {
                  targetComp.init(); //--感覺這些都可以拿掉了(因為onload會自動呼叫)
                } else {
                  targetComp = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                    error: Error()
                  }), FindComponent) : FindComponent).findComponentInChildren(node.displayNode, _crd && BasicGameStateAndRotationResolution === void 0 ? (_reportPossibleCrUseOfBasicGameStateAndRotationResolution({
                    error: Error()
                  }), BasicGameStateAndRotationResolution) : BasicGameStateAndRotationResolution);

                  if (targetComp) {
                    targetComp.init();
                  }
                }

                node.displayNode.active = false;
              }
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_ng_Show_Sys", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_fg_Alibaba_Show_Sys", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_fg_Thieves_Show_Sys", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_slotFrameNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_bgContainerNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_fakeTransitionNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_fakeNgVerticalNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6ca803c6726b7e95a18f937cfd7d5c2f85397ab7.js.map
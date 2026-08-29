System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, UITransform, v3, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, WildLayerCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6e39ekqbN5GPrbzocaN9Fb4", "WildLayerCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'UITransform', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WildLayerCtrl", WildLayerCtrl = (_dec = ccclass('WildLayerCtrl'), _dec2 = property({
        type: Node,
        displayName: 'Ree_1_Whole_container',
        tooltip: 'R1容器_移動後',
        visible: true
      }), _dec3 = property({
        type: Node,
        displayName: 'Ree_2_Whole_container',
        tooltip: 'R2容器_移動後',
        visible: true
      }), _dec4 = property({
        type: Node,
        displayName: 'Ree_3_Whole_container',
        tooltip: 'R3容器_移動後',
        visible: true
      }), _dec5 = property({
        type: Node,
        displayName: 'Ree_1_Move_container',
        tooltip: 'R1容器_移動中',
        visible: true
      }), _dec6 = property({
        type: Node,
        displayName: 'Ree_2_Move_container',
        tooltip: 'R2容器_移動中',
        visible: true
      }), _dec7 = property({
        type: Node,
        displayName: 'Ree_3_Move_container',
        tooltip: 'R3容器_移動中',
        visible: true
      }), _dec8 = property({
        type: Node,
        displayName: 'Ree_1_No_Movement_Whole_container',
        tooltip: 'R1容器_沒有移動',
        visible: true
      }), _dec9 = property({
        type: Node,
        displayName: 'Ree_2_No_Movement_Whole_container',
        tooltip: 'R2容器_沒有移動',
        visible: true
      }), _dec10 = property({
        type: Node,
        displayName: 'Ree_3_No_Movement_Whole_container',
        tooltip: 'R3容器_沒有移動',
        visible: true
      }), _dec11 = property({
        type: Node,
        displayName: 'Ree_1_Effect_container',
        tooltip: 'R1容器_效果',
        visible: true
      }), _dec12 = property({
        type: Node,
        displayName: 'Ree_2_Effect_container',
        tooltip: 'R2容器_效果',
        visible: true
      }), _dec13 = property({
        type: Node,
        displayName: 'Ree_3_Effect_container',
        tooltip: 'R3容器_效果',
        visible: true
      }), _dec(_class = (_class2 = class WildLayerCtrl extends Component {
        constructor() {
          super();

          _initializerDefineProperty(this, "_container_R1_Whole", _descriptor, this);

          _initializerDefineProperty(this, "_container_R2_Whole", _descriptor2, this);

          _initializerDefineProperty(this, "_container_R3_Whole", _descriptor3, this);

          _initializerDefineProperty(this, "_container_R1_Move", _descriptor4, this);

          _initializerDefineProperty(this, "_container_R2_Move", _descriptor5, this);

          _initializerDefineProperty(this, "_container_R3_Move", _descriptor6, this);

          _initializerDefineProperty(this, "_container_R1_NoMove_Whole", _descriptor7, this);

          _initializerDefineProperty(this, "_container_R2_NoMove_Whole", _descriptor8, this);

          _initializerDefineProperty(this, "_container_R3_NoMove_Whole", _descriptor9, this);

          _initializerDefineProperty(this, "_container_R1_Effect", _descriptor10, this);

          _initializerDefineProperty(this, "_container_R2_Effect", _descriptor11, this);

          _initializerDefineProperty(this, "_container_R3_Effect", _descriptor12, this);

          this._aryWholeContainer = void 0;
        }

        onLoad() {
          this._aryWholeContainer = [this._container_R1_Whole, this._container_R1_Move, this._container_R2_Whole, this._container_R2_Move, this._container_R3_Whole, this._container_R3_Move, this._container_R1_NoMove_Whole, this._container_R2_NoMove_Whole, this._container_R3_NoMove_Whole, this._container_R1_Effect, this._container_R2_Effect, this._container_R3_Effect]; //this.reSetContainer();

          console.log();
        }

        reSetContainer() {
          for (let i = 0; i < this._aryWholeContainer.length; i++) {
            const container = this._aryWholeContainer[i];
            container.active = true;
          }
        }

        setWildToWholeLayer(reelIndex, aniNode, wpos) {
          const container = this.getWholeContainerByReelIndex(reelIndex);

          if (container) {
            container.addChild(aniNode);

            if (wpos) {
              const uiTransform = container.getComponent(UITransform);
              const finalLPos = uiTransform.convertToNodeSpaceAR(wpos);
              aniNode.position = finalLPos;
            } else {
              aniNode.position = v3(0, 0, 0);
            }

            container.active = true;
          }
        }

        setWildToNoMoveWholeLayer(reelIndex, aniNode, wpos) {
          const container = this.getNoWholeContainerByReelIndex(reelIndex);

          if (container) {
            container.addChild(aniNode);

            if (wpos) {
              const uiTransform = container.getComponent(UITransform);
              const finalLPos = uiTransform.convertToNodeSpaceAR(wpos);
              aniNode.position = finalLPos;
            } else {
              aniNode.position = v3(0, 0, 0);
            }

            container.active = true;
          }
        }

        setWildToMoveLayer(reelIndex, aniNode, wpos) {
          const container = this.getMoveContainerByReelIndex(reelIndex);

          if (container) {
            container.addChild(aniNode);

            if (wpos) {
              const uiTransform = container.getComponent(UITransform);
              const finalLPos = uiTransform.convertToNodeSpaceAR(wpos);
              aniNode.position = finalLPos;
            } else {
              aniNode.position = v3(0, 0, 0);
            }

            container.active = true;
          }
        }

        async setEffectToEffectLayer(reelIndex, aniNode, wpos) {
          const container = this.getEffectContainerByReelIndex(reelIndex);

          if (container) {
            await this.addEffectNode(aniNode, container);

            if (wpos) {
              const uiTransform = container.getComponent(UITransform);
              const finalLPos = uiTransform.convertToNodeSpaceAR(wpos);
              aniNode.position = finalLPos;
            } else {
              aniNode.position = v3(0, 0, 0);
            }

            container.active = true;
          }
        }

        async addEffectNode(aniNode, container) {
          return new Promise((resolve, reject) => {
            container.once(Node.EventType.CHILD_ADDED, () => {
              resolve(aniNode);
            });
            aniNode.active = true;
            container.addChild(aniNode);
          });
        }

        getWildAniNodeByReelIndex(reelIndex) {
          let aniNode = null;
          const moveContainer = this.getMoveContainerByReelIndex(reelIndex);

          if (moveContainer && moveContainer.children.length > 0) {
            aniNode = moveContainer.children[0];
          } else {
            const wholeContainer = this.getWholeContainerByReelIndex(reelIndex);

            if (wholeContainer && wholeContainer.children.length > 0) {
              aniNode = wholeContainer.children[0];
            } else {
              const noMoveWholeContainer = this.getNoWholeContainerByReelIndex(reelIndex);

              if (noMoveWholeContainer && noMoveWholeContainer.children.length > 0) {
                aniNode = noMoveWholeContainer.children[0];
              }
            }
          }

          return aniNode;
        }

        switchLayerToWholeLayer(reelIndex) {
          const moveContainer = this.getMoveContainerByReelIndex(reelIndex);
          const wholeContainer = this.getWholeContainerByReelIndex(reelIndex);

          if (moveContainer && wholeContainer) {
            const wildAniNode = moveContainer.children[0];

            if (wildAniNode) {
              const wpos = wildAniNode.getWorldPosition().clone();
              wildAniNode.parent = wholeContainer;
              wildAniNode.setWorldPosition(wpos);
            }
          }

          this.sortAllContainer();
        }

        switchLayerToNoWholeLayer(reelIndex) {
          const moveContainer = this.getMoveContainerByReelIndex(reelIndex);
          const noWholeContainer = this.getNoWholeContainerByReelIndex(reelIndex);

          if (moveContainer && noWholeContainer) {
            const wildAniNode = moveContainer.children[0];

            if (wildAniNode) {
              const wpos = wildAniNode.getWorldPosition().clone();
              wildAniNode.parent = noWholeContainer;
              wildAniNode.setWorldPosition(wpos);
            }
          }

          this.sortAllContainer();
        } //--這邊已經照順序分配好了,所以直接找


        sortAllContainer() {
          const len = this._aryWholeContainer.length;

          for (let i = 0; i < len; i++) {
            const container = this._aryWholeContainer[i];
            const children = container.children;
            const childLen = children.length;

            if (childLen > 0) {
              container.active = true;
            } else {
              container.active = false;
            }
          }
        }

        getEffectContainerByReelIndex(reelIndex) {
          let container = null;

          switch (reelIndex) {
            case 1:
              container = this._container_R1_Effect;
              break;

            case 2:
              container = this._container_R2_Effect;
              break;

            case 3:
              container = this._container_R3_Effect;
              break;

            default:
              break;
          }

          return container;
        }

        getNoWholeContainerByReelIndex(reelIndex) {
          let container = null;

          switch (reelIndex) {
            case 1:
              container = this._container_R1_NoMove_Whole;
              break;

            case 2:
              container = this._container_R2_NoMove_Whole;
              break;

            case 3:
              container = this._container_R3_NoMove_Whole;
              break;

            default:
              break;
          }

          return container;
        }

        getWholeContainerByReelIndex(reelIndex) {
          let container = null;

          switch (reelIndex) {
            case 1:
              container = this._container_R1_Whole;
              break;

            case 2:
              container = this._container_R2_Whole;
              break;

            case 3:
              container = this._container_R3_Whole;
              break;

            default:
              break;
          }

          return container;
        }

        getMoveContainerByReelIndex(reelIndex) {
          let container = null;

          switch (reelIndex) {
            case 1:
              container = this._container_R1_Move;
              break;

            case 2:
              container = this._container_R2_Move;
              break;

            case 3:
              container = this._container_R3_Move;
              break;

            default:
              break;
          }

          return container;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_container_R1_Whole", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_container_R2_Whole", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_container_R3_Whole", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_container_R1_Move", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_container_R2_Move", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_container_R3_Move", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_container_R1_NoMove_Whole", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_container_R2_NoMove_Whole", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_container_R3_NoMove_Whole", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_container_R1_Effect", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_container_R2_Effect", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_container_R3_Effect", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a1fdc2a835f0d2b08fa1454c4f07aa0813927cbe.js.map
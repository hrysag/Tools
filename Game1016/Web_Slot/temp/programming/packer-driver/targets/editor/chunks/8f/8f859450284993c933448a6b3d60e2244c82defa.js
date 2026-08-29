System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AnimationControllersPoolManager, AniSysTools, WildFXCtrl, _crd, DEBUG_TITLE, WILD_LIGHT_MOVE_ANIMATION_TYPE;

  function _reportPossibleCrUseOfAnimationControllersPoolManager(extras) {
    _reporterNs.report("AnimationControllersPoolManager", "../../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationController(extras) {
    _reporterNs.report("AnimationController", "../../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniSysTools(extras) {
    _reporterNs.report("AniSysTools", "../../../MyUtils/AnimationSystemV2/AniTools/AniSysTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWildLayerCtrl(extras) {
    _reporterNs.report("WildLayerCtrl", "../WildLayerCtrl", _context.meta, extras);
  }

  _export("WildFXCtrl", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      AnimationControllersPoolManager = _unresolved_2.AnimationControllersPoolManager;
    }, function (_unresolved_3) {
      AniSysTools = _unresolved_3.AniSysTools;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a7c4Z1VfNOeqwA+l9d2HuA", "WildFXCtrl", undefined);

      __checkObsolete__(['_decorator', 'CCString', 'Component', 'Node', 'Vec3', 'UITransform']);

      DEBUG_TITLE = 'WildFXCtrl';
      WILD_LIGHT_MOVE_ANIMATION_TYPE = 'Transfer';

      _export("WildFXCtrl", WildFXCtrl = class WildFXCtrl {
        //--20260304--new:新增需求需要把wild回歸右壓左的設計,取消進行表演時提至最上層,結束後在右壓左
        set wildLayerCtrl(value) {
          this._wildLayerCtrl = value;
        }

        constructor( //private _wildMoveFXContainer: Node,
        _wildMoveAnimationPrefabId) {
          //----wild位移動畫Map key:reelIndex value:FX動畫節點
          this._wildFXAniMap = new Map();
          this._wildLayerCtrl = null;

          this.triggerWildFrontBgAniFrameEvtBack = (...args) => {
            //args>-['Wild_open', 1]
            const index = args[1];

            const fxAniNode = this._wildFXAniMap.get(index);

            if (fxAniNode) {
              const aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(fxAniNode);
              aniComp.playAni({
                aniState: WILD_LIGHT_MOVE_ANIMATION_TYPE
              });
            }
          };

          this._wildMoveAnimationPrefabId = _wildMoveAnimationPrefabId;
        }

        removeFX(reelId) {
          const aniNode = this._wildFXAniMap.get(reelId);

          if (aniNode) {
            aniNode.removeFromParent();

            this._wildFXAniMap.delete(reelId);

            (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
              error: Error()
            }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().pushInstanceToPool(this._wildMoveAnimationPrefabId, aniNode);
          }
        }

        async initWildAniLayer(reelIndex, reelFXWpos) {
          let aniNode = (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
            error: Error()
          }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().getInstantiatedObjFromPool(this._wildMoveAnimationPrefabId);

          if (!aniNode) {
            //GameUtilsTools.debugLog(DEBUG_TITLE,'initWildAniLayer: Failed to get aniNode from pool',{reelIndex},'warn');
            return null;
          } //--20260309以下為舊的流程
          //let reelWPos = reelFXWpos;
          //const uiTransform = this._wildMoveFXContainer.getComponent(UITransform);
          //const localPos = uiTransform.convertToNodeSpaceAR(reelWPos);
          //await this.addAniNode(aniNode, this._wildMoveFXContainer);
          //aniNode.active = true;
          //aniNode.setPosition(localPos);
          //--20260309-NEW


          await this._wildLayerCtrl.setEffectToEffectLayer(reelIndex, aniNode, reelFXWpos);
          const aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
            error: Error()
          }), AniSysTools) : AniSysTools).findAndGetIAniComponent(aniNode);
          aniInterfaceComponent == null || aniInterfaceComponent.init();

          this._wildFXAniMap.set(reelIndex, aniNode);
        }
        /*
        private async addAniNode(aniNode: Node, container: Node): Promise<Node> {
            return new Promise((resolve, reject) => {
                container.once(Node.EventType.CHILD_ADDED, () => {
                    resolve(aniNode);
                });
                aniNode.active = true;
                container.addChild(aniNode);
            })
        }*/


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f859450284993c933448a6b3d60e2244c82defa.js.map
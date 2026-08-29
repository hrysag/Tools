System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AnimationControllersPoolManager, AniSysTools, WildFXCtrl, _crd, DEBUG_TITLE, WILD_LIGHT_MOVE_ANIMATION_TYPE;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
          var _this = this;

          //----wild位移動畫Map key:reelIndex value:FX動畫節點
          this._wildFXAniMap = new Map();
          this._wildLayerCtrl = null;

          this.triggerWildFrontBgAniFrameEvtBack = function () {
            //args>-['Wild_open', 1]
            var index = arguments.length <= 1 ? undefined : arguments[1];

            var fxAniNode = _this._wildFXAniMap.get(index);

            if (fxAniNode) {
              var aniComp = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
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
          var aniNode = this._wildFXAniMap.get(reelId);

          if (aniNode) {
            aniNode.removeFromParent();

            this._wildFXAniMap.delete(reelId);

            (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
              error: Error()
            }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().pushInstanceToPool(this._wildMoveAnimationPrefabId, aniNode);
          }
        }

        initWildAniLayer(reelIndex, reelFXWpos) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var aniNode = (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
              error: Error()
            }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().getInstantiatedObjFromPool(_this2._wildMoveAnimationPrefabId);

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


            yield _this2._wildLayerCtrl.setEffectToEffectLayer(reelIndex, aniNode, reelFXWpos);
            var aniInterfaceComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(aniNode);
            aniInterfaceComponent == null || aniInterfaceComponent.init();

            _this2._wildFXAniMap.set(reelIndex, aniNode);
          })();
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
//# sourceMappingURL=fd4578990b1da6d954d574b653d4b84e97ac43b7.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AnimationController, FindComponent, AnimationControllersPoolManager, BonusParticlePool, _crd, ccclass, property, CollectionBoxNode_Name;

  function _reportPossibleCrUseOfAnimationController(extras) {
    _reporterNs.report("AnimationController", "../../MyUtils/AnimationSystem/Components/AnimationController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../../MyUtils/FindComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationControllersPoolManager(extras) {
    _reporterNs.report("AnimationControllersPoolManager", "../../MyUtils/AnimationSystem/AnimationControllersPoolManager", _context.meta, extras);
  }

  _export("BonusParticlePool", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AnimationController = _unresolved_2.AnimationController;
    }, function (_unresolved_3) {
      FindComponent = _unresolved_3.FindComponent;
    }, function (_unresolved_4) {
      AnimationControllersPoolManager = _unresolved_4.AnimationControllersPoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "129bapCoIFOsK8RFwcyX5Gm", "BonusParticlePool", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ParticleSystem']);

      ({
        ccclass,
        property
      } = _decorator);
      CollectionBoxNode_Name = 'FX_bonus_particle'; //--FG_CollectBox_all prefab name

      _export("BonusParticlePool", BonusParticlePool = class BonusParticlePool {
        constructor() {
          this._particlePool = [];
          this._particlePool = [];
        }

        getParticleNode() {
          return new Promise((resolve, reject) => {
            if (this._particlePool.length > 0) {
              //return this._particlePool.pop();
              resolve(this._particlePool.pop());
            } else {
              //let particleNode = AnimationControllersPoolManager.getInstance().getPrefabNode(CollectionBoxNode_Name);
              resolve((_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
                error: Error()
              }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().getPrefabNode(CollectionBoxNode_Name)); //return particleNode;
            }
          });
        }

        recycleParticleNode(particleNode) {
          if (particleNode) {
            /*
            const particleEmitter = FindComponent.findComponentInChildren(particleNode, ParticleSystem);
            particleEmitter?.stop();
            particleEmitter?.clear();
            console.log();
            */
            //----no use
            //particleEmitter?.stopEmitting();
            var ani = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
              error: Error()
            }), FindComponent) : FindComponent).findComponentInChildren(particleNode, _crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
              error: Error()
            }), AnimationController) : AnimationController); //ani?.resetData();

            ani == null || ani.stopAni(); //--幹.particle 在node被active=false的時候會觸發onDisable,裡面自己會處理(自己不需要再做了)

            particleNode.active = false; //const particleEmitter = FindComponent.findComponentInChildren(particleNode, ParticleSystem);
            //particleEmitter?.stop();
            //particleEmitter?.clear();

            this._particlePool.push(particleNode);

            console.log();
          }
        } //--結束FG的時候要把所有的particle都destroy掉


        destroyAllParticles() {
          for (var particleNode of this._particlePool) {
            //const particleExtension = FindComponent.findComponentInChildren(particleNode, ParticleExtension);
            //particleExtension?.stopParticle();

            /*
            const particleEmitter = FindComponent.findComponentInChildren(particleNode, ParticleSystem);
            particleEmitter?.stop();
            particleEmitter?.clear();
            particleEmitter?.stopEmitting();
            */
            var ani = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
              error: Error()
            }), FindComponent) : FindComponent).findComponentInChildren(particleNode, _crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
              error: Error()
            }), AnimationController) : AnimationController);
            ani == null || ani.resetData(); //particleEmitter?.destroy();

            particleNode.active = false;
            particleNode.destroy();
            particleNode = null;
            console.log();
          }

          this._particlePool = [];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bbe144e6f96376b06414104aa1042954a4d8211a.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AnimationController, FindComponent, AnimationControllersPoolManager, ParticlePool, _crd, PARTICLE_PREFAB_NAME;

  function _reportPossibleCrUseOfAnimationController(extras) {
    _reporterNs.report("AnimationController", "../../MyUtils/AnimationSystemV2/Components/AnimationController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../../MyUtils/FindComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationControllersPoolManager(extras) {
    _reporterNs.report("AnimationControllersPoolManager", "../../MyUtils/ObjectPoolManager/AnimationControllersPoolManager/AnimationControllersPoolManager", _context.meta, extras);
  }

  _export("ParticlePool", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      AnimationController = _unresolved_2.AnimationController;
    }, function (_unresolved_3) {
      FindComponent = _unresolved_3.FindComponent;
    }, function (_unresolved_4) {
      AnimationControllersPoolManager = _unresolved_4.AnimationControllersPoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e8b0+WZmlFvIeSAB2a9ndN", "ParticlePool", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ParticleSystem']);

      PARTICLE_PREFAB_NAME = 'Trail'; //-- prefab name

      _export("ParticlePool", ParticlePool = class ParticlePool {
        constructor() {
          this._particlePool = [];
          this._particlePool = [];
        }

        getParticleNode() {
          return new Promise((resolve, reject) => {
            if (this._particlePool.length > 0) {
              resolve(this._particlePool.pop());
            } else {
              resolve((_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
                error: Error()
              }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().getInstantiatedObjFromPool(PARTICLE_PREFAB_NAME));
            }
          });
        }

        recycleParticleNode(particleNode) {
          if (particleNode) {
            const ani = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
              error: Error()
            }), FindComponent) : FindComponent).findComponentInChildren(particleNode, _crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
              error: Error()
            }), AnimationController) : AnimationController); //ani?.resetData();

            ani == null || ani.goBackToDefault(); //--幹.particle 在node被active=false的時候會觸發onDisable,裡面自己會處理(自己不需要再做了)

            particleNode.active = false; //const particleEmitter = FindComponent.findComponentInChildren(particleNode, ParticleSystem);
            //particleEmitter?.stop();
            //particleEmitter?.clear();

            this._particlePool.push(particleNode);
          }
        } //--結束的時候要把所有的particle都destroy掉


        destroyAllParticles() {
          for (let particleNode of this._particlePool) {
            const ani = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
              error: Error()
            }), FindComponent) : FindComponent).findComponentInChildren(particleNode, _crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
              error: Error()
            }), AnimationController) : AnimationController);
            ani == null || ani.resetData(); //particleEmitter?.destroy();

            particleNode.active = false;
            particleNode.destroy();
            particleNode = null;
          }

          this._particlePool = [];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5f013730937b175a2884d158e010ca9e5ff4d39d.js.map
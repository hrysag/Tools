System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, AnimationPrefabPropertyDef, AniSysTools, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, PREFAB_TYPE_DEFAULT, AnimationControllersPoolManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAnimationPrefabPropertyDef(extras) {
    _reporterNs.report("AnimationPrefabPropertyDef", "../../AnimationSystemV2/Definitions/AnimationPrefabPropertyDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBasicPoolObjComponent(extras) {
    _reporterNs.report("IBasicPoolObjComponent", "../../ObjectPoolManager/Definitions/IBasicPoolObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIObjectPoolManager(extras) {
    _reporterNs.report("IObjectPoolManager", "../Definitions/IBasicPoolObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniSysTools(extras) {
    _reporterNs.report("AniSysTools", "../../AnimationSystemV2/AniTools/AniSysTools", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      AnimationPrefabPropertyDef = _unresolved_2.AnimationPrefabPropertyDef;
    }, function (_unresolved_3) {
      AniSysTools = _unresolved_3.AniSysTools;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a2faT56rhE/ZcOPSK8YwDO", "AnimationControllersPoolManager", undefined);

      __checkObsolete__(['Node', 'Prefab', '_decorator', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);
      PREFAB_TYPE_DEFAULT = 'default';

      _export("AnimationControllersPoolManager", AnimationControllersPoolManager = (_dec = ccclass('AnimationControllersPoolManager'), _dec2 = property({
        type: [_crd && AnimationPrefabPropertyDef === void 0 ? (_reportPossibleCrUseOfAnimationPrefabPropertyDef({
          error: Error()
        }), AnimationPrefabPropertyDef) : AnimationPrefabPropertyDef],
        visible: true,
        displayName: 'Prefab List',
        tooltip: '塞入尚未實體化的prefab,依照key當作索引'
      }), _dec(_class = (_class2 = (_class3 = class AnimationControllersPoolManager {
        static getInstance() {
          return AnimationControllersPoolManager._instance ? AnimationControllersPoolManager._instance : new AnimationControllersPoolManager();
        }

        set maxMumPrefabNodeListCount(value) {
          this._maxMumPrefabNodeListCount = value;
        }

        constructor() {
          _initializerDefineProperty(this, "_prefabForPropertyList", _descriptor, this);

          this._maxMumPrefabNodeListCount = void 0;
          this._prefabObjectPool = void 0;
          //--這個是用來存放實例化後的prefab object pool
          this._prefabMap = void 0;

          if (AnimationControllersPoolManager._instance != null) {
            throw new Error('plz use getInstance() to get NotifyCation');
          }

          AnimationControllersPoolManager._instance = this;
          this._maxMumPrefabNodeListCount = 5; //--default

          this._prefabObjectPool = new Map();
        } //=================prefab map=================


        addTargetToPrefabMap(prefabProperty) {
          if (prefabProperty.prefab) {
            if (!this._prefabMap.has(prefabProperty.key)) {
              this._prefabMap.set(prefabProperty.key, prefabProperty.prefab);
            }
          } else {
            console.warn('AnimationControllersPoolManager_prefab is null');
          }
        }

        removeTargetFromPrefabMap(prefabNodeListID) {
          if (this._prefabMap.has(prefabNodeListID)) {
            this._prefabMap.delete(prefabNodeListID);
          }
        }

        getTargetPrefab(prefabNodeListID) {
          return this._prefabMap.get(prefabNodeListID) || null;
        }

        setPrefabForPropertyList(prefabForPropertyList) {
          this._prefabForPropertyList = prefabForPropertyList;

          this._prefabMap.clear();

          this._prefabObjectPool.set(PREFAB_TYPE_DEFAULT, []);

          for (let prefabProperty of this._prefabForPropertyList) {
            this.addTargetToPrefabMap(prefabProperty);
          }
        } //=================prefab map=================


        pushInstanceToPool(prefabNodeListID, prefabNode) {
          let prefabNodeList = this._prefabObjectPool.has(prefabNodeListID) ? this._prefabObjectPool.get(prefabNodeListID) : this._prefabObjectPool.get(PREFAB_TYPE_DEFAULT);
          let aniExtensionComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
            error: Error()
          }), AniSysTools) : AniSysTools).findAndGetIAniComponent(prefabNode);

          if (prefabNodeList.length < this._maxMumPrefabNodeListCount) {
            aniExtensionComponent.resetData();
            prefabNode.active = false; //-要去觸發onDisable

            prefabNodeList.push(prefabNode);
          } else {
            //-這邊component會被觸發destroy
            prefabNode.removeFromParent();
            aniExtensionComponent.beforeDestroy();
            prefabNode.destroy();
            aniExtensionComponent.onAfterDestroy();
            prefabNode = null;
          } //this.checkPoolStatusAfterPush();//--debug

        } //=======interface============================================


        init() {
          this._prefabMap = new Map();

          this._prefabObjectPool.set(PREFAB_TYPE_DEFAULT, []);
        }

        cleanAllPools() {
          for (let targetList of this._prefabObjectPool.values()) {
            for (let node of targetList) {
              node.destroy();
            }

            targetList = [];
          }
        }

        getPoolSize(objListId) {
          if (this._prefabObjectPool.has(objListId)) {
            return this._prefabObjectPool.get(objListId).length;
          }

          return 0;
        }

        expandPool(objListId, count) {
          if (this._prefabObjectPool.has(objListId)) {
            const prefab = this.getTargetPrefab(objListId);

            for (let i = 0; i < count; i++) {
              let node = instantiate(prefab);
              this.pushInstanceToPool(objListId, node);
            }
          }
        }

        getInstantiatedObjFromPool(objListId) {
          let prefabNode = null;
          let aniExtensionComponent = null;

          if (this._prefabObjectPool.has(objListId)) {
            let prefabNodeInfoList = this._prefabObjectPool.get(objListId);

            if (prefabNodeInfoList.length > 0) {
              prefabNode = prefabNodeInfoList.pop(); //console.log('popObjFromPool:', objListId);
            } else {
              const prefab = this._prefabMap.get(objListId);

              if (prefab) {
                prefabNode = instantiate(prefab);
                aniExtensionComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                  error: Error()
                }), AniSysTools) : AniSysTools).findAndGetIAniComponent(prefabNode);
                aniExtensionComponent.onObjInstance();
              } else {
                console.warn(`Prefab for key '${objListId}' is undefined`);
              }
            }
          } else {
            this._prefabObjectPool.set(objListId, []);

            const prefab = this._prefabMap.get(objListId);

            if (prefab) {
              prefabNode = instantiate(prefab);
              aniExtensionComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
                error: Error()
              }), AniSysTools) : AniSysTools).findAndGetIAniComponent(prefabNode);
              aniExtensionComponent.onObjInstance();
            } else {
              console.warn(`Prefab for key '${objListId}' is undefined`);
            }
          }

          return prefabNode;
        } //--檢查物件池狀態


        checkPoolStatusAfterPush() {
          console.log('=== Prefab Pool 狀態 ===');

          for (const [key, list] of this._prefabObjectPool.entries()) {
            console.log(`Pool ID: ${key}, Size: ${list.length}`);
          }

          console.log('=======================');
        }

      }, _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_prefabForPropertyList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ac09d269e132b9a07e4992cb13468f6c734a69c6.js.map
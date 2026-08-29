System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AbstractView, log, CollisionStrategyInstanceSingleton, CollisionSystemBase, CollisionBase, _crd, CollisionKey, BaseCollisionType;

  function _reportPossibleCrUseOfIfCollisionStrategy(extras) {
    _reporterNs.report("IfCollisionStrategy", "../strategy/Strategy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbstractView(extras) {
    _reporterNs.report("AbstractView", "../../../framework/abstract/mvvm/AbstractView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishData(extras) {
    _reporterNs.report("FishData", "../../logic/views/fishView/FishData", _context.meta, extras);
  }

  _export({
    CollisionStrategyInstanceSingleton: void 0,
    CollisionSystemBase: void 0,
    CollisionBase: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      AbstractView = _unresolved_2.AbstractView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7604dV9z2xLTLjbMKHvwrGV", "CollisionBase", undefined);
      /**
       * Created by EricHuang on 2023/9/17.
       * 
       */


      //import {GameViewMediatorUserDataKey,GameViewMediatorUser} from '../../../framework/logic/gameLogic/FishGameLogicDefinitions';
      __checkObsolete__(['log']); //--要比較的資料
      //--碰撞檢查return的資料


      _export("CollisionKey", CollisionKey = /*#__PURE__*/function (CollisionKey) {
        CollisionKey[CollisionKey["SELECTION"] = -1] = "SELECTION";
        CollisionKey[CollisionKey["BULLET_ACTION_PREFAB"] = 0] = "BULLET_ACTION_PREFAB";
        CollisionKey[CollisionKey["BULLET_ACTION_DYNAMIC"] = 1] = "BULLET_ACTION_DYNAMIC";
        return CollisionKey;
      }({}));

      _export("BaseCollisionType", BaseCollisionType = /*#__PURE__*/function (BaseCollisionType) {
        BaseCollisionType["SAT_Collision"] = "SAT_Collision";
        BaseCollisionType["PICKUP_Collision"] = "PICKUP_Collision";
        return BaseCollisionType;
      }({}));

      _export("CollisionStrategyInstanceSingleton", CollisionStrategyInstanceSingleton = class CollisionStrategyInstanceSingleton {
        static getInstance(key, constructor) {
          if (!this.instances[key]) {
            this.instances[key] = constructor();
          }

          return this.instances[key];
        }

      });

      CollisionStrategyInstanceSingleton.instances = {};

      _export("CollisionSystemBase", CollisionSystemBase = class CollisionSystemBase extends (_crd && AbstractView === void 0 ? (_reportPossibleCrUseOfAbstractView({
        error: Error()
      }), AbstractView) : AbstractView) {
        set canUpdate(value) {
          this._canUpdate = value;
        }

        get canUpdate() {
          return this._canUpdate;
        } //--auto ban or special situation should ban
        //--一開始就會被設定


        set aryBannedFishType(value) {
          this._aryBannedFishType = value;
        }

        constructor() {
          super();
          this._canUpdate = void 0;
          //--_mapCollision/_mapStrategyAlgorithm這兩個key要對起來
          //--這個放實體化的
          this._mapCollision = void 0;
          this._mapStrategy = void 0;
          //protected _class2constructorMap:{[key:string]:new ()=>CollisionBase};//-映射需要實體化的class

          /**
           * 用來set要使用_mapCollision中哪一個碰撞演算法
           * 當中的key就是_mapCollision裡面的key-
           * 當中的number[]就是bullet裡面的systemID-
           * ex:BulletActionType.BULLET_ACTION_PREFAB
           * 
           * 也就是說有可能會有多個不同的bullet的systemID共用同一個演算法
           */
          this._mapUseCollision = void 0;
          this._aryBannedFishType = void 0;
          this._mapCollision = {};
          this._mapStrategy = {}; //this._class2constructorMap={};
          //this._strategy2constructorMap={};

          this._mapUseCollision = {}; //this.setCollisions();
        }
        /**
         * 
         * @param classId BaseCollisionType--演算法的檢查類型
         * @param collisionKey ---子彈的類型(後面改成collisionKey)
         */


        setMapUseCollision(classId, collisionKey) {
          if (!this._mapUseCollision[classId]) {
            this._mapUseCollision[classId] = [];
          }

          this._mapUseCollision[classId].push(collisionKey);
        } //--set collisionData--20231016


        addCollisions(collisionDefinition) {
          const {
            id,
            collisionBaseConstructor,
            strategyConstructor,
            strategyConstructorId,
            strategyArgs,
            collisionBaseArgs
          } = collisionDefinition;
          log('addCollisions', collisionDefinition);

          if (!this._mapCollision[id]) {
            /**
             * 20240328-在cocos creator發布選項中,如果將<調試模式>打開,
             * 在build-config-for-cicd.json裡面的debug屬性=true
             * uglifyjs將不會介入作混淆縮排的動作.此時的js輸出會是保留function name的型態
             * 但是正式發布時debug的屬性=false時,uglifyjs將介入作混淆縮排的動作,
             * function name將會被拿掉(外層是用一個object包覆住).
             * 所以取constructor.name會出現你意想不到的名稱
             */
            //--演算法
            //const classKey = strategyConstructor.name;
            const classKey = strategyConstructorId;

            if (!this._mapStrategy[classKey]) {
              this._mapStrategy[classKey] = CollisionStrategyInstanceSingleton.getInstance(classKey, () => new strategyConstructor(...(strategyArgs || [])));
            } //log('check_Collision@@',classKey,collisionDefinition,this._mapStrategy[classKey],this._mapStrategy);


            this._mapCollision[id] = new collisionBaseConstructor(this._mapStrategy[classKey], collisionBaseArgs);
          } else {
            log(`collision with ID ${id} already exists and cannot be overwritten.`);
          }
        } //--20240107--


        getCollisionBaseFromId(value) {
          return this._mapCollision[value];
        }

        getCollision(id) {
          let index = this.getIdByClassName(id);
          return this._mapCollision[index];
        }

        getIdByClassName(id) {
          let r = "";

          for (let i in this._mapUseCollision) {
            for (let j of this._mapUseCollision[i]) {
              if (j == id) {
                r = i;
                break;
              }
            }
          }

          return r;
        }

      });

      _export("CollisionBase", CollisionBase = class CollisionBase {
        set aryBannedFishType(value) {
          this._aryBannedFishType = value;
        }

        set aryCompairs(value) {
          this._aryCompairs = value; //log('set_aryCompairs',this._aryCompairs);
        } //--20240107--


        set cameraPathInfo(value) {
          this._cameraPathInfo = value;
          this.setCameraData();
        }

        setCameraData() {}

        constructor(...args) {
          this._strategyAlgorithm = void 0;
          this._aryBannedFishType = void 0;
          //-特殊禁止打擊的魚auto ban
          this._aryCompairs = void 0;
          //--其他要轉換座標的攝影機

          /*
          protected _cameraPathInfo:{
              mainCamera:string,
              others:any[]
          };
          */
          this._cameraPathInfo = void 0;
          this._aryCompairs = [];
          this._aryBannedFishType = []; //---要確認一下--
          //log('check_args',args);

          this._strategyAlgorithm = args[0];
        } //--塞入核心演算
        //public setStrategyAlgorithm<T extends new ()=>IfCollisionStrategy>(value:T):void


        setStrategyAlgorithm(value) {
          this._strategyAlgorithm = value;
        } //--檢查碰撞


        checkCollision(t) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7405d6b4475800d09aab54c0274ab06369cf4792.js.map
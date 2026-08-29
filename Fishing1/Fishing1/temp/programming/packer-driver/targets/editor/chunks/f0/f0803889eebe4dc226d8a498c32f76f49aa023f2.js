System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CollisionSystemBase, CollisionKey, BaseCollisionType, GameViewMediatorUserDataKey, GameViewMediatorUser, log, FishCollisionSystem, _crd;

  function _reportPossibleCrUseOfCollisionSystemBase(extras) {
    _reporterNs.report("CollisionSystemBase", "../../game/collision/CollisionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionTarget(extras) {
    _reporterNs.report("CollisionTarget", "../../game/collision/CollisionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionKey(extras) {
    _reporterNs.report("CollisionKey", "../../game/collision/CollisionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionInfo(extras) {
    _reporterNs.report("CollisionInfo", "../../game/collision/CollisionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionBase(extras) {
    _reporterNs.report("CollisionBase", "../../game/collision/CollisionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCollisionType(extras) {
    _reporterNs.report("BaseCollisionType", "../../game/collision/CollisionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishData(extras) {
    _reporterNs.report("FishData", "../views/fishView/FishData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../views/bulletView/BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUserDataKey(extras) {
    _reporterNs.report("GameViewMediatorUserDataKey", "../../../framework/logic/gameLogic/FishGameLogicDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUser(extras) {
    _reporterNs.report("GameViewMediatorUser", "../../../framework/logic/gameLogic/FishGameLogicDefinitions", _context.meta, extras);
  }

  _export("FishCollisionSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      CollisionSystemBase = _unresolved_2.CollisionSystemBase;
    }, function (_unresolved_3) {
      CollisionKey = _unresolved_3.CollisionKey;
    }, function (_unresolved_4) {
      BaseCollisionType = _unresolved_4.BaseCollisionType;
    }, function (_unresolved_5) {
      GameViewMediatorUserDataKey = _unresolved_5.GameViewMediatorUserDataKey;
      GameViewMediatorUser = _unresolved_5.GameViewMediatorUser;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37584sb+j5FdZ2liryy8ht1", "FishCollisionSystem", undefined);
      /**
       * Created by EricHuang on 2023/10/03.
       * 
       */


      __checkObsolete__(['Vec2']);

      __checkObsolete__(['log']);

      _export("FishCollisionSystem", FishCollisionSystem = class FishCollisionSystem extends (_crd && CollisionSystemBase === void 0 ? (_reportPossibleCrUseOfCollisionSystemBase({
        error: Error()
      }), CollisionSystemBase) : CollisionSystemBase) {
        constructor() {
          super();
          this._aryFish = void 0;
          this._aryBullets = void 0;
          this._testTime = void 0;
          this._classId = 'FishCollisionSystem';
          this._aryFish = [];
          this._testTime = 0;
        } //--這邊要改掉原本的使用方式..20231024


        async checkCollision(collisionData) {
          return new Promise(async resolve => {
            let cf = null;

            switch (collisionData.collisionKey) {
              case (_crd && BaseCollisionType === void 0 ? (_reportPossibleCrUseOfBaseCollisionType({
                error: Error()
              }), BaseCollisionType) : BaseCollisionType).SAT_Collision:
                cf = await this.baseCollision();
                break;

              case (_crd && BaseCollisionType === void 0 ? (_reportPossibleCrUseOfBaseCollisionType({
                error: Error()
              }), BaseCollisionType) : BaseCollisionType).PICKUP_Collision:
                cf = this.pickUpCollision(collisionData.target);
                break;
            }

            resolve(cf);
          });
        }

        pickUpCollision(wposition) {
          let cf = null;
          this._aryFish = this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
            error: Error()
          }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
            error: Error()
          }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_getFishs);

          if (this._aryFish.length > 0) {
            //--這邊塞入攝影機的資訊
            let c = this.getCollision((_crd && CollisionKey === void 0 ? (_reportPossibleCrUseOfCollisionKey({
              error: Error()
            }), CollisionKey) : CollisionKey).SELECTION);
            c.aryCompairs = this._aryFish;
            cf = c.checkCollision({
              target: wposition
            });
          }

          log('pickUpCollision', cf);
          return cf;
        } //--這個要再拔出來20231024


        async baseCollision() {
          //--要把原本checkCollision的內容搬過來,在checkCollision裡面做一個篩選分水嶺20231024
          return new Promise(resolve => {
            let cf = null;
            /**
             *isCollisions={
                fishDatas:[{fishSn:this._aryCompairs[j].id,fishType:this._aryCompairs[j].fishType}],
                bulletSn:target.id
                }; 
             */

            this._aryBullets = this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
              error: Error()
            }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_getBullets);
            this._aryFish = this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
              error: Error()
            }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_getFishs);

            if (this._aryBullets.length > 0) {
              for (let b of this._aryBullets) {
                //if(b.strSystemId!=-1 && !b.isDead && !b.useFishingNets && b.isBorn && b.isPlayerTarget)
                //if(b.strSystemId!=-1 && !b.isDead  && b.isBorn)
                if (b.strSystemId != -1 && !b.isDead && !b.useFishingNets && b.isBorn) {
                  if (this._aryFish.length > 0) {
                    //log('check_this',this.getCollision);
                    let c = this.getCollision(b.strSystemId);
                    c.aryCompairs = this._aryFish; //log('check_allBullets',this._aryBullets);

                    /*
                    let nt=new Date().getTime();
                     if(this._testTime>0)
                    {
                        let t=nt-this._testTime;
                         b.collisions[0].impl.update(t);
                    }
                     this._testTime=nt;
                    */

                    cf = c.checkCollision({
                      target: b
                    });

                    if (cf) {
                      //--這是有撞到的情況
                      cf['isPlayer'] = b.isPlayerTarget;
                      break;
                    } //break;

                  }
                }
              }
            }

            resolve(cf);
          });
        } //======給其他平行的view拿資料用的(透過mediator去拿)
        //--interface abstract


        getData(dataKey, value) {
          let data = null;
          log('Collision_PickUp_getData');

          switch (dataKey) {
            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Collision_PickUp:
              data = this.pickUpCollision(value); //data=this.checkCollision({collisionKey:BaseCollisionType.PICKUP_Collision,target:{x:value.x,y:value.y}});

              break;
          }

          return data;
        } //--interface abstract


        excute(value) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f0803889eebe4dc226d8a498c32f76f49aa023f2.js.map
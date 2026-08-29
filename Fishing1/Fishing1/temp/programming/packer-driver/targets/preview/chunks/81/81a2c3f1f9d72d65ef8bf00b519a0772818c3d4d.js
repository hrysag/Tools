System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CollisionSystemBase, CollisionKey, BaseCollisionType, GameViewMediatorUserDataKey, GameViewMediatorUser, log, FishCollisionSystem, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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


        checkCollision(collisionData) {
          var _this = this;

          return _asyncToGenerator(function* () {
            return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve) {
              var cf = null;

              switch (collisionData.collisionKey) {
                case (_crd && BaseCollisionType === void 0 ? (_reportPossibleCrUseOfBaseCollisionType({
                  error: Error()
                }), BaseCollisionType) : BaseCollisionType).SAT_Collision:
                  cf = yield _this.baseCollision();
                  break;

                case (_crd && BaseCollisionType === void 0 ? (_reportPossibleCrUseOfBaseCollisionType({
                  error: Error()
                }), BaseCollisionType) : BaseCollisionType).PICKUP_Collision:
                  cf = _this.pickUpCollision(collisionData.target);
                  break;
              }

              resolve(cf);
            }));
          })();
        }

        pickUpCollision(wposition) {
          var cf = null;
          this._aryFish = this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
            error: Error()
          }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
            error: Error()
          }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_getFishs);

          if (this._aryFish.length > 0) {
            //--這邊塞入攝影機的資訊
            var c = this.getCollision((_crd && CollisionKey === void 0 ? (_reportPossibleCrUseOfCollisionKey({
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


        baseCollision() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            //--要把原本checkCollision的內容搬過來,在checkCollision裡面做一個篩選分水嶺20231024
            return new Promise(resolve => {
              var cf = null;
              /**
               *isCollisions={
                  fishDatas:[{fishSn:this._aryCompairs[j].id,fishType:this._aryCompairs[j].fishType}],
                  bulletSn:target.id
                  }; 
               */

              _this2._aryBullets = _this2._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                error: Error()
              }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                error: Error()
              }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_getBullets);
              _this2._aryFish = _this2._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                error: Error()
              }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                error: Error()
              }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_getFishs);

              if (_this2._aryBullets.length > 0) {
                for (var b of _this2._aryBullets) {
                  //if(b.strSystemId!=-1 && !b.isDead && !b.useFishingNets && b.isBorn && b.isPlayerTarget)
                  //if(b.strSystemId!=-1 && !b.isDead  && b.isBorn)
                  if (b.strSystemId != -1 && !b.isDead && !b.useFishingNets && b.isBorn) {
                    if (_this2._aryFish.length > 0) {
                      //log('check_this',this.getCollision);
                      var c = _this2.getCollision(b.strSystemId);

                      c.aryCompairs = _this2._aryFish; //log('check_allBullets',this._aryBullets);

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
          })();
        } //======給其他平行的view拿資料用的(透過mediator去拿)
        //--interface abstract


        getData(dataKey, value) {
          var data = null;
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
//# sourceMappingURL=81a2c3f1f9d72d65ef8bf00b519a0772818c3d4d.js.map
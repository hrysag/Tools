System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CollisionBase, fishMeshState, director, CameraComponent, v2, v3, find, log, FishPickUpCollisionBase, _crd;

  function _reportPossibleCrUseOfCollisionBase(extras) {
    _reporterNs.report("CollisionBase", "../../game/collision/CollisionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionTarget(extras) {
    _reporterNs.report("CollisionTarget", "../../game/collision/CollisionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionInfo(extras) {
    _reporterNs.report("CollisionInfo", "../../game/collision/CollisionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishMeshState(extras) {
    _reporterNs.report("fishMeshState", "../../game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionData(extras) {
    _reporterNs.report("CollisionData", "../../game/strategy/Strategy", _context.meta, extras);
  }

  _export("FishPickUpCollisionBase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      CameraComponent = _cc.CameraComponent;
      v2 = _cc.v2;
      v3 = _cc.v3;
      find = _cc.find;
      log = _cc.log;
    }, function (_unresolved_2) {
      CollisionBase = _unresolved_2.CollisionBase;
    }, function (_unresolved_3) {
      fishMeshState = _unresolved_3.fishMeshState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21aceodkHNMpZ7yY5BLQWjd", "FishPickUpCollisionBase", undefined);
      /**
       * Created by EricHuang on 2023/10/17.
       * 
       */


      __checkObsolete__(['Collider2D']);

      __checkObsolete__(['PolygonCollider2D']);

      __checkObsolete__(['BuiltinBoxShape']);

      __checkObsolete__(['BoxCollider']);

      __checkObsolete__(['Vec2']);

      __checkObsolete__(['director']);

      __checkObsolete__(['CameraComponent']);

      __checkObsolete__(['v2', 'v3']);

      __checkObsolete__(['find']);

      __checkObsolete__(['geometry']);

      __checkObsolete__(['Vec3']);

      __checkObsolete__(['Intersection2D']);

      __checkObsolete__(['log']);

      _export("FishPickUpCollisionBase", FishPickUpCollisionBase = class FishPickUpCollisionBase extends (_crd && CollisionBase === void 0 ? (_reportPossibleCrUseOfCollisionBase({
        error: Error()
      }), CollisionBase) : CollisionBase) {
        constructor(...args) {
          super(args[0]);
          this._canvasCamera2dComponent = void 0;
          this._camera3dComponent = void 0;
          this._canvasCamera2dComponent = find(args[1].camera2dnodeId).getComponent(CameraComponent);
          this._camera3dComponent = director.getScene().getChildByName(args[1].camera3dnodeId).getComponent(CameraComponent);
          log('check_FishPickUpCollisionBase', args, this._canvasCamera2dComponent, this._camera3dComponent);
        } //--檢查碰撞--送座標進來


        checkCollision(t) {
          //let target:Bullet=t.target;
          //let bulletColliders:Collider2D[]=target.collisions;
          let fishColliderPoint;
          let bulletRect;
          let fishRect;
          let isCollisions = null;
          let pointTarget = v2(t.target.x, t.target.y); //--送出來的座標已經是canvas的world position

          log('check_checkCollision_value', t, pointTarget);
          let checkCollisionData;
          let ray = null;
          let f = false;

          for (let i = 0; i < this._aryCompairs.length; i++) {
            if (!this._aryCompairs[i].fishIsFlash && !this._aryCompairs[i].isDead && !this._aryCompairs[i].prohibit) {
              //-https://docs.cocos.com/creator/api/zh/namespace/geometry?id=intersect
              //-https://docs.cocos.com/creator/api/zh/class/Intersection2D?id=pointInPolygon
              for (let k = 0; k < this._aryCompairs[i].collisionArea.length; k++) {
                if (this._aryCompairs[i].fishMeshState == (_crd && fishMeshState === void 0 ? (_reportPossibleCrUseOffishMeshState({
                  error: Error()
                }), fishMeshState) : fishMeshState).fish2D) {
                  fishColliderPoint = this._aryCompairs[i].collisionArea[k].worldPoints; //--以下為測試
                  //let check2DClick=Intersection2D.pointInPolygon(pointTarget,fishColliderPoint);

                  checkCollisionData = {
                    otherData: {
                      fishType: (_crd && fishMeshState === void 0 ? (_reportPossibleCrUseOffishMeshState({
                        error: Error()
                      }), fishMeshState) : fishMeshState).fish2D,
                      fishColliderPoint: fishColliderPoint,
                      pointTarget: pointTarget
                    }
                  };
                } else {
                  if (this._aryCompairs[i].fishType != 21) {
                    //--用Intersection2D檢查pointInPolygon 
                    let fish3Dget2DColliderPoints = this._aryCompairs[i].collisionArea[k].worldPoints; //fish3Dget2DColliderPoints,this._aryFishes[j].collisionArea[k]);

                    let screenPoints = [];
                    fishColliderPoint = [];
                    screenPoints[0] = this._camera3dComponent.worldToScreen(v3(fish3Dget2DColliderPoints[0].x, fish3Dget2DColliderPoints[0].y));
                    screenPoints[1] = this._camera3dComponent.worldToScreen(v3(fish3Dget2DColliderPoints[1].x, fish3Dget2DColliderPoints[1].y));
                    screenPoints[2] = this._camera3dComponent.worldToScreen(v3(fish3Dget2DColliderPoints[2].x, fish3Dget2DColliderPoints[2].y));
                    screenPoints[3] = this._camera3dComponent.worldToScreen(v3(fish3Dget2DColliderPoints[3].x, fish3Dget2DColliderPoints[3].y));
                    fishColliderPoint[0] = v2(screenPoints[0].x, screenPoints[0].y);
                    fishColliderPoint[1] = v2(screenPoints[1].x, screenPoints[1].y);
                    fishColliderPoint[2] = v2(screenPoints[2].x, screenPoints[2].y);
                    fishColliderPoint[3] = v2(screenPoints[3].x, screenPoints[3].y);

                    let clickScreenPoint = this._canvasCamera2dComponent.worldToScreen(v3(pointTarget.x, pointTarget.y));

                    checkCollisionData = {
                      otherData: {
                        fishType: (_crd && fishMeshState === void 0 ? (_reportPossibleCrUseOffishMeshState({
                          error: Error()
                        }), fishMeshState) : fishMeshState).fish2D,
                        fishColliderPoint: fishColliderPoint,
                        pointTarget: clickScreenPoint
                      }
                    };
                  } else {
                    //-rayOBB : (ray : Ray, obb : OBB) => number(intersect) 
                    let shape = this._aryCompairs[i].collisionArea[k].shape;
                    let worldObb = shape.worldObb; //--射線拿來這邊做(做一次就好了)--20231029

                    if (!ray) {
                      let screenPos = this._canvasCamera2dComponent.worldToScreen(v3(pointTarget.x, pointTarget.y));

                      ray = this._camera3dComponent.screenPointToRay(screenPos.x, screenPos.y);
                    }

                    checkCollisionData = {
                      otherData: {
                        fishType: (_crd && fishMeshState === void 0 ? (_reportPossibleCrUseOffishMeshState({
                          error: Error()
                        }), fishMeshState) : fishMeshState).fish3D,
                        fishObb: worldObb,
                        rayData: ray
                      }
                    };
                  }
                } //log('pickUp_hittest',this._strategyAlgorithm.getCollision(checkCollisionData));
                //--檢查碰撞


                if (this._strategyAlgorithm.getCollision(checkCollisionData)) {
                  isCollisions = {
                    fishDatas: [{
                      fishSn: this._aryCompairs[i].id,
                      fishType: this._aryCompairs[i].fishType
                    }]
                  };
                  f = true;
                  break;
                }
              }
            }

            if (f) {
              break;
            }
          }

          return isCollisions;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=15683ecab5902bcbfe6d4e7e89978ed5f9cc7ac1.js.map
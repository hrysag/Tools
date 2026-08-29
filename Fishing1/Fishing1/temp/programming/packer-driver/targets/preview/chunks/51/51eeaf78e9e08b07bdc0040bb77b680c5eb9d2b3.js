System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, FishGameAutoAndLockData, GameUtils, GameViewMediatorUser, GameViewMediatorUserDataKey, AREA_BOUNDARY, UITransform, log, Fish1GameAutoAndLockData, _crd;

  function _reportPossibleCrUseOfFishGameAutoAndLockData(extras) {
    _reporterNs.report("FishGameAutoAndLockData", "../../framework/logic/gameLogic/FishGameAutoAndLockData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishData(extras) {
    _reporterNs.report("FishData", "../../framework/logic/views/fishView/FishData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../framework/utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUser(extras) {
    _reporterNs.report("GameViewMediatorUser", "../../framework/logic/gameLogic/FishGameLogicDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUserDataKey(extras) {
    _reporterNs.report("GameViewMediatorUserDataKey", "../../framework/logic/gameLogic/FishGameLogicDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAREA_BOUNDARY(extras) {
    _reporterNs.report("AREA_BOUNDARY", "../../framework/game/mouseBehavior/MouseBehaviorDefinitionsBase", _context.meta, extras);
  }

  _export("Fish1GameAutoAndLockData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      UITransform = _cc.UITransform;
      log = _cc.log;
    }, function (_unresolved_2) {
      FishGameAutoAndLockData = _unresolved_2.FishGameAutoAndLockData;
    }, function (_unresolved_3) {
      GameUtils = _unresolved_3.GameUtils;
    }, function (_unresolved_4) {
      GameViewMediatorUser = _unresolved_4.GameViewMediatorUser;
      GameViewMediatorUserDataKey = _unresolved_4.GameViewMediatorUserDataKey;
    }, function (_unresolved_5) {
      AREA_BOUNDARY = _unresolved_5.AREA_BOUNDARY;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10460+unD1DNLRmTLBsMYPm", "Fish1GameAutoAndLockData", undefined);
      /**
       * Created by EricHuang on 2023/12/08.
       */


      __checkObsolete__(['UITransform', 'Vec3', 'log']);

      __checkObsolete__(['BuiltinBoxShape']);

      __checkObsolete__(['BoxCollider']);

      _export("Fish1GameAutoAndLockData", Fish1GameAutoAndLockData = class Fish1GameAutoAndLockData extends (_crd && FishGameAutoAndLockData === void 0 ? (_reportPossibleCrUseOfFishGameAutoAndLockData({
        error: Error()
      }), FishGameAutoAndLockData) : FishGameAutoAndLockData) {
        constructor() {
          super();
        } //----直接拿龍頭


        spFishSetLockFishBullet(f, isPlayer) {
          var p = null;
          var colliders = f.collisionArea;
          var shape = colliders[6].shape;
          var worldobb = shape.worldObb; //let worldPos:Vec3=this.getCanvasWorldPosition(f.fishMeshState,worldobb.center);

          log('check__sceneCameraNode', this._sceneCameraNode, '_canvasCameraNode', this._canvasCameraNode);
          var worldPos = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).cover3dor2dToWorldPos(this._sceneCameraNode, worldobb.center, this._canvasCameraNode);

          var localPos = this._mouseNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos);

          if (isPlayer) {
            if (localPos.x <= (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
              error: Error()
            }), AREA_BOUNDARY) : AREA_BOUNDARY).w && localPos.x > (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
              error: Error()
            }), AREA_BOUNDARY) : AREA_BOUNDARY).x) {
              if (localPos.y <= (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
                error: Error()
              }), AREA_BOUNDARY) : AREA_BOUNDARY).h && localPos.y > (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
                error: Error()
              }), AREA_BOUNDARY) : AREA_BOUNDARY).y) {
                //--這邊給world座標(滑鼠也是送world pos)
                //-{pos:Vec3,reLockTarget:number,lockFishType:number}
                p = {
                  position: worldPos,
                  sp: 0,
                  useBullet: false,
                  previousTarget: 0
                };
              }
            }
          } else {
            /**
             * 20240326
             * 其他玩家的子彈依然給予產出,(回收交給玩家自己來做)
             * 其他玩家只需接收_refundBullets的資料來進行刪除
             * 避免在某些尷尬的狀況吻合出界(自己),但是在其他玩家卻是沒出界而擊發的情況
             */
            p = {
              position: worldPos,
              sp: 0,
              useBullet: false,
              previousTarget: 0
            };
          }

          return p;
        }

        spFishupdateLockBullets(f, bulletId, isPlayer) {
          var destoryData = [];
          var colliders = f.collisionArea;
          var shape = colliders[6].shape;
          var worldobb = shape.worldObb; //let worldPos:Vec3=this.getCanvasWorldPosition(f.fishMeshState,worldobb.center);

          var worldPos = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).cover3dor2dToWorldPos(this._sceneCameraNode, worldobb.center, this._canvasCameraNode);

          var localPos = this._mouseNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos);

          var rp = this._bulletNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos); //--要判斷是不是玩家本人


          if (isPlayer) {
            if (localPos.x <= (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
              error: Error()
            }), AREA_BOUNDARY) : AREA_BOUNDARY).w && localPos.x > (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
              error: Error()
            }), AREA_BOUNDARY) : AREA_BOUNDARY).x) {
              if (localPos.y <= (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
                error: Error()
              }), AREA_BOUNDARY) : AREA_BOUNDARY).h && localPos.y > (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
                error: Error()
              }), AREA_BOUNDARY) : AREA_BOUNDARY).y) {
                //let rp:Vec3=this._bulletNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
                //--要補
                //this._bulletsSystem.resetEndPositionAndFishTargetId(rp,this._aryLockFishBullets[i].lockBullets[j]);
                this._view.getDataFromgameMediator((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                  error: Error()
                }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                  error: Error()
                }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_resetEndPositionAndFishTargetId, {
                  pos: rp,
                  id: bulletId,
                  lockFishId: f.id
                });
              } else {
                destoryData.push(bulletId);
              }
            } else {
              destoryData.push(bulletId);
            }
          } else {
            //destoryData.push(bulletId);

            /**
             * 20240326
             * 其他玩家的子彈依然給予產出,(回收交給玩家自己來做)
             * 其他玩家只需接收_refundBullets的資料來進行刪除
             * 避免在某些尷尬的狀況吻合出界(自己),但是在其他玩家卻是沒出界而擊發的情況
             */
            this._view.getDataFromgameMediator((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
              error: Error()
            }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_resetEndPositionAndFishTargetId, {
              pos: rp,
              id: bulletId,
              lockFishId: f.id
            });
          }

          return destoryData;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=51eeaf78e9e08b07bdc0040bb77b680c5eb9d2b3.js.map
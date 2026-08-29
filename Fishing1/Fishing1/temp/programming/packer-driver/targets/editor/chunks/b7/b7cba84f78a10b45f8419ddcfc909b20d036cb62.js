System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, FishCollisionSystem, BaseCollisionType, GameViewMediatorUserDataKey, GameViewMediatorUser, ServerResCode, ServerSendCode, log, Fish1CollisionSystem, _crd;

  function _reportPossibleCrUseOfFishCollisionSystem(extras) {
    _reporterNs.report("FishCollisionSystem", "../../framework/logic/collision/FishCollisionSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionTarget(extras) {
    _reporterNs.report("CollisionTarget", "../../framework/game/collision/CollisionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionInfo(extras) {
    _reporterNs.report("CollisionInfo", "../../framework/game/collision/CollisionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCollisionType(extras) {
    _reporterNs.report("BaseCollisionType", "../../framework/game/collision/CollisionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUserDataKey(extras) {
    _reporterNs.report("GameViewMediatorUserDataKey", "../../framework/logic/gameLogic/FishGameLogicDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUser(extras) {
    _reporterNs.report("GameViewMediatorUser", "../../framework/logic/gameLogic/FishGameLogicDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerResCode(extras) {
    _reporterNs.report("ServerResCode", "../../framework/logic/connect/ConnectBaseDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerSendCode(extras) {
    _reporterNs.report("ServerSendCode", "../../framework/logic/connect/ConnectBaseDefinitions", _context.meta, extras);
  }

  _export("Fish1CollisionSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      FishCollisionSystem = _unresolved_2.FishCollisionSystem;
    }, function (_unresolved_3) {
      BaseCollisionType = _unresolved_3.BaseCollisionType;
    }, function (_unresolved_4) {
      GameViewMediatorUserDataKey = _unresolved_4.GameViewMediatorUserDataKey;
      GameViewMediatorUser = _unresolved_4.GameViewMediatorUser;
    }, function (_unresolved_5) {
      ServerResCode = _unresolved_5.ServerResCode;
      ServerSendCode = _unresolved_5.ServerSendCode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56cffo1mEJGsbXvjrk7rjse", "Fish1CollisionSystem", undefined);
      /**
       * Created by EricHuang on 2023/11/05.
       * 
       */


      __checkObsolete__(['Vec3', 'v3', 'log']);

      _export("Fish1CollisionSystem", Fish1CollisionSystem = class Fish1CollisionSystem extends (_crd && FishCollisionSystem === void 0 ? (_reportPossibleCrUseOfFishCollisionSystem({
        error: Error()
      }), FishCollisionSystem) : FishCollisionSystem) {
        //--範圍挑選
        set aryRangeHitFishType(value) {
          this._aryRangeHitFishType = value;
        }

        constructor() {
          super();
          this._aryRangeHitFishType = void 0;
          this._classId = 'Fish1CollisionSystem';
          this._aryRangeHitFishType = [];
        }

        async checkpickData(wp) {
          let result = await this.checkCollision({
            collisionKey: (_crd && BaseCollisionType === void 0 ? (_reportPossibleCrUseOfBaseCollisionType({
              error: Error()
            }), BaseCollisionType) : BaseCollisionType).PICKUP_Collision,
            target: wp
          });
          return result;
        }

        async checkCollisionData(collisionData) {
          let result = await this.checkCollision(collisionData);

          if (result) {
            if (collisionData.collisionKey == (_crd && BaseCollisionType === void 0 ? (_reportPossibleCrUseOfBaseCollisionType({
              error: Error()
            }), BaseCollisionType) : BaseCollisionType).SAT_Collision) {
              let hitFishs = result.fishDatas;
              let bulletSn = result.bulletSn; //--開漁網openfishNet

              let getbulletdata = this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                error: Error()
              }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                error: Error()
              }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_openfishNet, bulletSn);

              if (getbulletdata != -1) {
                //--沒找到子彈(要直接硬刪資料了)
                this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                  error: Error()
                }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                  error: Error()
                }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_cleanFishTarget, getbulletdata);
              } else {
                for (let i = 0; i < hitFishs.length; i++) {
                  //--changeFishesAnimation
                  this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                    error: Error()
                  }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                    error: Error()
                  }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_changeSingleFishAnimation, hitFishs[i].fishSn); //--玩家本身即發的子彈..通知server


                  if (result.isPlayer) {
                    //--fh.fhHandler.Spin

                    /**
                     * 
                     * id=子彈id
                     * fid=魚的id
                     * cf=連鎖魚隻[fid,fid,fid...]--特殊魚才帶
                    */
                    let sendData = {
                      id: bulletSn,
                      fid: hitFishs[i].fishSn,
                      //--debug用的
                      dft: hitFishs[i].fishType,
                      dw: 1,
                      dseatIndex: this._viewModel['_playerTableId']
                    };

                    if (this._aryRangeHitFishType.indexOf(hitFishs[i].fishType) != -1) {
                      //--要送範圍內的連鎖範圍
                      let inSideFish = this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                        error: Error()
                      }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                        error: Error()
                      }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_getOutsideFish, hitFishs[i].fishSn);

                      if (inSideFish.length > 0) {
                        sendData['cf'] = inSideFish;
                      }
                    }

                    log('check_hitfishSendData', sendData);

                    this._viewModel.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
                      error: Error()
                    }), ServerSendCode) : ServerSendCode).hitFish, sendData, (_crd && ServerResCode === void 0 ? (_reportPossibleCrUseOfServerResCode({
                      error: Error()
                    }), ServerResCode) : ServerResCode).HitFish);
                  }
                }
              } //log('check_checkCollisionData',result);
              //--準備回收自動打擊的資料(子彈-鎖定用的)


              this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                error: Error()
              }), GameViewMediatorUser) : GameViewMediatorUser).GameLogicSystem, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                error: Error()
              }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).GameLogic_afterHitRemoveLockBulletData, [bulletSn]); //--這個只是最後的保底措施(子彈-bullet用的)-上面已經做過了,沒找到子彈張網就直接銷毀
              //this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_cleanFishTarget,bulletSn);

            } else if (collisionData.collisionKey == (_crd && BaseCollisionType === void 0 ? (_reportPossibleCrUseOfBaseCollisionType({
              error: Error()
            }), BaseCollisionType) : BaseCollisionType).PICKUP_Collision) {//--點選
            }
          }

          return result;
        }
        /*
        public getData(dataKey:string,value?:any):any
        {
            let r:any=null;
             switch(dataKey)
            {
                case GameViewMediatorUserDataKey.Collision_PickUp:
                 r=this.checkpickData(v3(value.x,value.y));
                 break;
            }
             return r;
        }*/


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b7cba84f78a10b45f8419ddcfc909b20d036cb62.js.map
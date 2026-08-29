System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AREA_BOUNDARY, fishMeshState, GameViewMediatorUser, GameViewMediatorUserDataKey, EventTarget, UITransform, GameUtils, log, FishGameAutoAndLockData, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfFishData(extras) {
    _reporterNs.report("FishData", "../views/fishView/FishData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAREA_BOUNDARY(extras) {
    _reporterNs.report("AREA_BOUNDARY", "../../game/mouseBehavior/MouseBehaviorDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMainLogicBase(extras) {
    _reporterNs.report("GameMainLogicBase", "../../game/logic/GameMainLogicBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishMeshState(extras) {
    _reporterNs.report("fishMeshState", "../../game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUser(extras) {
    _reporterNs.report("GameViewMediatorUser", "../gameLogic/FishGameLogicDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUserDataKey(extras) {
    _reporterNs.report("GameViewMediatorUserDataKey", "../gameLogic/FishGameLogicDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../views/bulletView/BulletDefinitions", _context.meta, extras);
  }

  _export("FishGameAutoAndLockData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EventTarget = _cc.EventTarget;
      UITransform = _cc.UITransform;
      log = _cc.log;
    }, function (_unresolved_2) {
      AREA_BOUNDARY = _unresolved_2.AREA_BOUNDARY;
    }, function (_unresolved_3) {
      fishMeshState = _unresolved_3.fishMeshState;
    }, function (_unresolved_4) {
      GameViewMediatorUser = _unresolved_4.GameViewMediatorUser;
      GameViewMediatorUserDataKey = _unresolved_4.GameViewMediatorUserDataKey;
    }, function (_unresolved_5) {
      GameUtils = _unresolved_5.GameUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b23cZJc4pOU7l6j8f0NQ8Y", "FishGameAutoAndLockData", undefined);
      /**
       * Created by EricHuang on 2023/10/10.
       */


      __checkObsolete__(['EventTarget', 'find', 'Node', 'UITransform', 'Vec3', 'CameraComponent', 'v3']);

      __checkObsolete__(['log']);

      _export("FishGameAutoAndLockData", FishGameAutoAndLockData = class FishGameAutoAndLockData extends EventTarget {
        set fishNode(value) {
          this._fishNode = value;
        }

        set mouseNode(value) {
          this._mouseNode = value;
        }

        set bulletNode(value) {
          this._bulletNode = value;
        }

        set sceneCameraNode(value) {
          this._sceneCameraNode = value;
        }

        set canvasCameraNode(value) {
          this._canvasCameraNode = value;
        }

        set spUpdateFishTypeforBullet(value) {
          this._spUpdateFishTypeforBullet = value;
        }

        set view(value) {
          this._view = value;
        }

        set userTableIndex(value) {
          this._userTableIndex = value;
          log('FishGameAutoAndLockData__userTableIndex', this._userTableIndex);
        }

        get aryLockFishBullets() {
          return this._aryLockFishBullets;
        }

        get fishNode() {
          return this._fishNode;
        }

        get mouseNode() {
          return this._mouseNode;
        }

        get bulletNode() {
          return this._bulletNode;
        }

        get sceneCameraNode() {
          return this._sceneCameraNode;
        }

        get canvasCameraNode() {
          return this._canvasCameraNode;
        }

        get view() {
          return this._view;
        }

        constructor() {
          super();
          this._aryLockFishBullets = void 0;
          //--物件陣列--鎖定用的子彈與魚種
          this._view = void 0;
          this._userTableIndex = void 0;
          //-0-3
          //protected _view:AbstractView;
          this._spUpdateFishTypeforBullet = void 0;
          //--特殊魚種的動態子彈更新與邊界計算
          //--座標轉換要用的
          this._fishNode = void 0;
          this._bulletNode = void 0;
          this._mouseNode = void 0;
          this._sceneCameraNode = void 0;
          this._canvasCameraNode = void 0;
          this._aryLockFishBullets = [{
            lockFish: 0,
            lockBullets: []
          }, {
            lockFish: 0,
            lockBullets: []
          }, {
            lockFish: 0,
            lockBullets: []
          }, {
            lockFish: 0,
            lockBullets: []
          }];
          this._spUpdateFishTypeforBullet = [];
          this._fishNode = null;
          this._bulletNode = null;
          this._mouseNode = null;
          this._sceneCameraNode = null;
          this._canvasCameraNode = null;
          this._view = null;
        }

        getCanvasWorldPosition(type, p) {
          //let rpos:Vec3;
          var wp;

          if (type == (_crd && fishMeshState === void 0 ? (_reportPossibleCrUseOffishMeshState({
            error: Error()
          }), fishMeshState) : fishMeshState).fish2D) {
            //--2d 
            //wp=this._fishNode.getComponent(UITransform).convertToWorldSpaceAR(p);
            wp = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).cover3dor2dToWorldPos(this._fishNode, p);
          } else {
            //--3d
            //-worldPos=(f.fishMeshState==fishMeshState.fish2D)?GameUtils.cover3dor2dToWorldPos(this._fish2DContainerNode,f.fishMesh.position):GameUtils.cover3dor2dToWorldPos(this._sceneCameraNode,f.fishMesh.position,this._canvasCameraNode);
            wp = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).cover3dor2dToWorldPos(this._sceneCameraNode, p, this._canvasCameraNode); //let sceneCameraNode:Node=find('Main Camera');

            /*
            let cameraComponent=this._sceneCameraNode.getComponent(CameraComponent);
            //---world to screen
            let wts:Vec3=cameraComponent.worldToScreen(p);
            //--canvas camera cameracomponent
            let canvasCameraComponent=this._canvasCameraNode.getComponent(CameraComponent);
             //--screen to world
            wp=canvasCameraComponent.screenToWorld(wts);
            */
          }

          return wp;
        } //---刪除鎖定的子彈(在使用狀態下已經集中判定的)


        removeLockBulletData(value) {
          var len = value.length; //---每次碰撞成立只會有一個子彈進來阿
          //--魚種被擊殺後,其餘的子彈狀態隨之改變--這是打到不是打死
          //let bulletId:number[]=[];

          for (var i = 0; i < len; i++) {
            for (var j = 0; j < 4; j++) //--this._aryLockFishBullets
            {
              var index = this._aryLockFishBullets[j].lockBullets.indexOf(value[i]);

              if (index != -1) {
                //---這邊只是view的資料先拔掉...子彈卻無後續給予死亡bug!!!
                this._aryLockFishBullets[j].lockBullets.splice(index, 1);
              } //this._bulletsSystem.cleanFishTarget(value[i]);
              //this.emit(AutoAndLockEvent.KILL_TARGET_BULLET,{type:AutoAndLockEvent.KILL_TARGET_BULLET,sendObj:value[i]});

            }
          }
        }

        removeAllLockData() {
          for (var i = 0; i < 4; i++) {
            this._aryLockFishBullets[i].lockFish = 0;
            this._aryLockFishBullets[i].lockBullets = [];
          }
        }

        removeAllLockDataAndGetLockFishs() {
          var lockFishs = [];

          for (var i = 0; i < 4; i++) {
            if (this._aryLockFishBullets[i].lockFish != 0) {
              lockFishs.push(this._aryLockFishBullets[i].lockFish);
            }

            this._aryLockFishBullets[i].lockFish = 0;
            this._aryLockFishBullets[i].lockBullets = [];
          }

          return lockFishs;
        }
        /*
        public removeSpBossLockData(spBossId:number):number[]
        {
            let cancelLockBulletTarget:number[]=[];
            
            for(var i:number=0;i<4;i++)
            {
                if(this._aryLockFishBullets[i].lockFish==spBossId)
                {
                    cancelLockBulletTarget=cancelLockBulletTarget.concat(GameUtils.deepCloneForObject(this._aryLockFishBullets[i].lockBullets));
                    
                    this._aryLockFishBullets[i].lockFish=0;
                     this._aryLockFishBullets[i].lockBullets=[];
                }
            }
             return cancelLockBulletTarget;
        }*/
        //-cleanAutoLockCooldown 原 gameplayerMode 裡面的cleanAutoLockCooldown 要改名成claeanAutoLockData
        //-原來的lockColdDownReady改名cleanLockdDtaByTable

        /**
         * 
         * @param tableId 0-3
         */
        //public async cleanLockdDataByTable(tableId:number):Promise<void>


        cleanLockdDataByTable(tableId) {
          //let lockBullets:number[]=GameUtils.deepCloneForObject(this._aryLockFishBullets[tableId].lockBullets);
          //log('check_cloneLockBullets',lockBullets);
          log('check_cloneLockBullets');
          this._aryLockFishBullets[tableId].lockFish = 0;
          this._aryLockFishBullets[tableId].lockBullets = [];
        } //---功能與cleanLockdDataByTable重疊,可能要整併 2023-1014
        //---功能與舊版cleanPlayerLockData重疊,取消cleanPlayerLockData
        //--等等這是針對特定的魚,cleanPlayerLockData是針對玩家自己
        //--這個只有玩家自己會call

        /**
         * 舊版是gameplayerMode會call cleanAutoLockCooldown,裡面再call removeLockFishData
         * 新版直接call cleanLockdDataByTable送入玩家自己的桌號
         * 
         */
        //public removeLockFishData():void


        removeLockFishData(fishid) {
          //let id:number=this._aryLockFishBullets[this._userTableIndex].lockFish;
          for (var i = 0; i < 4; i++) {
            if (this._aryLockFishBullets[i].lockFish == fishid) {
              this._aryLockFishBullets[i].lockFish = 0;
              this._aryLockFishBullets[i].lockBullets = []; //--持續掃完整個迴圈~可能會有瞄準相同的狀況
            }
          }
        }

        cleanPlayerLockData() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.cleanLockdDataByTable(_this._userTableIndex);

            return;
          })();
        }
        /**
         * 功能與舊版的lockFishTarget相同,且lockFishTarget沒有人呼叫
         * 故移植就刪除lockFishTarget
         * @param value fish id
         */
        //public async addFishAimTarget(value:number,table?:number):Promise<void>


        addFishAimTarget(value, table) {
          //-this._userTableIndex 0-3
          //---fishview裡面再add的時候就會把前一個移除
          var returnLockFish = this._aryLockFishBullets[this._userTableIndex].lockFish;
          this._aryLockFishBullets[this._userTableIndex].lockFish = value;
          this._aryLockFishBullets[this._userTableIndex].lockBullets = [];
          return returnLockFish;
        } //public async setLockFishBullet(fishSn:number,bulletSn:number,index:number,isPlayer:boolean):Promise<{position:{x:number,y:number},dragon:string}>
        //--ps fishData 找不到就不要送進來
        //public async setLockFishBullet(fishData:FishData,bulletSn:number,index:number,isPlayer:boolean):Promise<{position:{x:number,y:number},sp:number}>
        //--這邊要在新增取消鎖定後(沒有鎖定魚)的檢查(就是玩家取消鎖定,但是server送來最後一發是有鎖定的狀態)


        setLockFishBullet(fishData, bulletSn, index, isPlayer) {
          //return;
          //--這時候子彈還沒新增實體化
          var p = null;
          var previousLockTarget = 0; //log("setLockFishBullet___fishSn_____"+fishSn);
          //log("setLockFishBullet___bulletSn____"+bulletSn);
          //log("setLockFishBullet___index___"+index);
          //log("setLockFishBullet___isPlayer___"+isPlayer);
          //log("otherPlayer_lockFish_____"+this._aryLockFishBullets[index].lockFish);

          if (this._aryLockFishBullets[index].lockFish != fishData.id) {
            if (this._aryLockFishBullets[index].lockFish != 0) {
              previousLockTarget = this._aryLockFishBullets[index].lockFish;
            }

            if (!isPlayer) {
              this.cleanLockdDataByTable(index);
              this._aryLockFishBullets[index].lockFish = fishData.id;
            } //p={position:{x:0,y:0},sp:0,previousTarget:this._aryLockFishBullets[index].lockFish};s

          }

          if (this._aryLockFishBullets[index].lockFish == fishData.id) {
            //--做旋轉砲塔---鎖定的功能
            if (this._spUpdateFishTypeforBullet.indexOf(fishData.fishType) != -1) {
              //--特殊魚的例外處理(boss)
              p = this.spFishSetLockFishBullet(fishData, isPlayer);

              if (p) {
                //---這是模擬click的座標
                this._aryLockFishBullets[index].lockBullets.push(bulletSn);

                p.previousTarget = previousLockTarget;
                p.useBullet = true;
              }

              log('lockFish==fishData.id', p);
            } else {
              var worldPos = this.getCanvasWorldPosition(fishData.fishMeshState, fishData.fishMesh.position);

              var localPos = this._mouseNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos); //--這邊要換成滑鼠點擊的座標


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
                    //---這是模擬click的座標
                    this._aryLockFishBullets[index].lockBullets.push(bulletSn); //---mouse click是送world pos


                    p = {
                      position: worldPos,
                      sp: 0,
                      useBullet: true,
                      previousTarget: previousLockTarget
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
                this._aryLockFishBullets[index].lockBullets.push(bulletSn); //---mouse click是送world pos


                p = {
                  position: worldPos,
                  sp: 0,
                  useBullet: true,
                  previousTarget: previousLockTarget
                };
              }

              log('setLockFishBullet__', this._aryLockFishBullets);
            }
          } else {
            //--玩家已經更換目標,server回傳的子彈已經改變目標(準備回收)
            p = {
              position: {
                x: 0,
                y: 0
              },
              sp: 0,
              useBullet: false,
              previousTarget: 0
            };
            log('server回傳的子彈已經改變目標(準備回收)', previousLockTarget);
            /*
            if(isPlayer)
            {
                p={position:{x:0,y:0},sp:0,previousTarget:previousLockTarget};
            }*/
          }

          return p;
        } //---更新鎖定的子彈

        /**
         * 20231011
         * 在更新bulletsystem的updateAction前
         * 先update這個updateLockBullets
         * 要先處理鎖定的資料再回頭updateAction
         * 在updateAction後,要再回過來處理_aryLockFishBullets的資料
         * //---就是在該frame更新的子彈有死亡的話要拔除_aryLockFishBullets的資料
         */


        updateLockBullets() {
          //return;
          var len = this._aryLockFishBullets.length; //let testClone=GameUtils.deepCloneForObject(this._aryLockFishBullets);
          //log('updateLockBullets',testClone);

          var bulletLen = 0;
          var f;
          var deathLockFish = [];
          var deathBullets = [];
          var returnDeathData = null;

          for (var i = 0; i < len; i++) {
            //---鎖定的魚隻尚未死亡~子彈會穿越雜魚
            if (this._aryLockFishBullets[i].lockFish != 0) {
              bulletLen = this._aryLockFishBullets[i].lockBullets.length; //-this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_setBulletIsDeath,value.bsn);

              f = this._view.getDataFromgameMediator((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                error: Error()
              }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                error: Error()
              }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_getFishById, this._aryLockFishBullets[i].lockFish);

              if (f == null || f.isDead) {
                var deathTarget = this._aryLockFishBullets[i].lockFish;
                deathLockFish.push(deathTarget); //---要回收子彈---因為目標結束了

                this.removeLockFishData(this._aryLockFishBullets[i].lockFish);
              } else {
                //--出界的狀態要處理..直接銷毀子彈
                //log("@@@updateLockBullets>>>"+bulletLen);
                var rp = void 0; //let fishGlobal:PIXI.Point;
                //let stageLocalPoint:PIXI.Point;

                var destoryLockBullet = [];

                for (var j = 0; j < bulletLen; j++) {
                  var bullet = this._view.getDataFromgameMediator((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                    error: Error()
                  }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                    error: Error()
                  }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_getBulletById, this._aryLockFishBullets[i].lockBullets[j]);

                  if (this._spUpdateFishTypeforBullet.indexOf(f.fishType) != -1) {
                    var desbullet = void 0;

                    if (bullet) {
                      desbullet = this.spFishupdateLockBullets(f, this._aryLockFishBullets[i].lockBullets[j], bullet.isPlayerTarget);
                    } else {
                      //--取不到bullet的狀況下
                      desbullet = [this._aryLockFishBullets[i].lockBullets[j]];
                    }

                    if (desbullet.length > 0) {
                      destoryLockBullet = destoryLockBullet.concat(desbullet);
                    }
                  } else {
                    //--要把fish position換成 mouseClickArea local point
                    var worldPos = this.getCanvasWorldPosition(f.fishMeshState, f.fishMesh.position);

                    var localPos = this._mouseNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos); //--這邊要小心,要確認mouseClick node是否為0,0 在左下角,1920,1080 在右下角


                    if (bullet) {
                      if (bullet.isPlayerTarget) {
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
                            rp = this._bulletNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos); //--要補
                            //this._bulletsSystem.resetEndPositionAndFishTargetId(rp,this._aryLockFishBullets[i].lockBullets[j]);

                            this._view.getDataFromgameMediator((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                              error: Error()
                            }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                              error: Error()
                            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_resetEndPositionAndFishTargetId, {
                              pos: rp,
                              id: this._aryLockFishBullets[i].lockBullets[j],
                              lockFishId: f.id
                            });
                          } else {
                            destoryLockBullet.push(this._aryLockFishBullets[i].lockBullets[j]);
                          }
                        } else {
                          destoryLockBullet.push(this._aryLockFishBullets[i].lockBullets[j]);
                        }
                      } else {
                        /**
                         * 20240326
                         * 其他玩家的子彈依然給予產出,(回收交給玩家自己來做)
                         * 其他玩家只需接收_refundBullets的資料來進行刪除
                         * 避免在某些尷尬的狀況吻合出界(自己),但是在其他玩家卻是沒出界而擊發的情況
                         */
                        rp = this._bulletNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos); //--要補
                        //this._bulletsSystem.resetEndPositionAndFishTargetId(rp,this._aryLockFishBullets[i].lockBullets[j]);

                        this._view.getDataFromgameMediator((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                          error: Error()
                        }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                          error: Error()
                        }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_resetEndPositionAndFishTargetId, {
                          pos: rp,
                          id: this._aryLockFishBullets[i].lockBullets[j],
                          lockFishId: f.id
                        });
                      }
                    } else {
                      //--取不到bullet的狀況下
                      destoryLockBullet.push(this._aryLockFishBullets[i].lockBullets[j]);
                    }
                  }
                }

                if (destoryLockBullet.length > 0) {
                  deathBullets = deathBullets.concat(destoryLockBullet);
                  this.removeLockBulletData(destoryLockBullet); //this.removeBulletWithoutNet(destoryLockBullet);
                }
              }
            } else {//log('wtfQQQQQQQQQQ');
            }
          }

          return returnDeathData = {
            bullets: deathBullets,
            fishs: deathLockFish
          };
        }
        /**
         * 取得玩家鎖定的fish id
         * @param table 0-3
         * @returns fishid
         */


        getLockFishData(table) {
          return this._aryLockFishBullets[table].lockFish;
        } //--碰撞後(子彈server)


        hitFish(bulletIds) {
          this.removeLockBulletData(bulletIds); //--set bullet is death
          //this.cleanFishTarget(bulletIds);
        }

        refundBulletDatas(bullerIds) {
          this.removeLockBulletData(bullerIds);
        } //--碰撞後(子彈client)--單純的刪自己的資料就好


        afterHitRemoveLockBulletData(bulletIds) {
          this.removeLockBulletData(bulletIds); //this.removeBulletWithoutNet(bulletIds);
          //--set bullet is death(多此一舉wtf???)
          //--直接在bullet裡面監聽
          //this.cleanFishTarget(bulletIds);
        }

        afterUpdateforDeate(bulletIds) {
          this.removeLockBulletData(bulletIds); //this.removeBulletWithoutNet(bulletIds);
          //this.cleanFishTarget(bulletIds);
        } //--找不到漁網的情況下刪除子彈(20240301沒有用到)


        removeBulletWithoutNet(bulletIds) {
          //this.removeLockBulletData(bulletIds);
          for (var i of bulletIds) {
            this._view.getDataFromgameMediator((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
              error: Error()
            }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_cleanFishTarget, i);
          }
        } //-this._gameMediator.getViewUserData(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_removeFishAimLock); 

        /**
         * 這邊取代本來送出事件的utoAndLockEvent.REMOVE_FISH_AIMLOCK
         */

        /*
        protected removeFishAimLock():void
        {
            this._view.getDataFromgameMediator(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_removeFishAimLock);
        }*/

        /**
         * 沒有用到20240301
         * 這邊取代本來送出事件的AutoAndLockEvent.KILL_TARGET_BULLETS
         * @param value bullet id 
         */


        cleanFishTarget(value) {
          for (var i of value) {
            this._view.getDataFromgameMediator((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
              error: Error()
            }), GameViewMediatorUser) : GameViewMediatorUser).BulletView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_setBulletIsDeath, i);
          }
        }

        spFishSetLockFishBullet(f, isPlayer) {
          return null;
        } //--override


        spFishupdateLockBullets(f, bulletId, isPlayer) {
          /*
          let dragonPartId:string=this._bulletsSystem.getDragonPartLockId(this._aryLockFishBullets[i].lockBullets[j]);
          let dragonPart:FishCenter.FishData=this._fishSystem.getDragonPart(dragonPartId);
               if(dragonPart!=null)
          {
              let mesh:FishCenter.DragonItem=<FishCenter.DragonItem>dragonPart.fishMesh;
              fishGlobal=c.toGlobal(new PIXI.Point(mesh.x,mesh.y)); 
               stageLocalPoint=CoreRenderMode.RenderCore.app.stage.toLocal(fishGlobal);
              //--算邊境(邊境之外就直接回收啦)
              if(stageLocalPoint.x<=AREA_BOUNDARY.w && stageLocalPoint.x>AREA_BOUNDARY.x)
              {
                  if(stageLocalPoint.y<=AREA_BOUNDARY.h && stageLocalPoint.y>AREA_BOUNDARY.y)
                  {
                      rp=bc.toLocal(new PIXI.Point(fishGlobal.x,fishGlobal.y));
                      this._bulletsSystem.resetEndPositionAndFishTargetId(rp,this._aryLockFishBullets[i].lockBullets[j]);
                      //log('setDragonBullet',dragonPartId);  
                  
                  }else{
                      
                      destoryLockBullet.push(this._aryLockFishBullets[i].lockBullets[j]);
                      
                  }
               }else{
              
                      destoryLockBullet.push(this._aryLockFishBullets[i].lockBullets[j]);
               } 
            }else{
          
              //--回收~因為找不到
              destoryLockBullet.push(this._aryLockFishBullets[i].lockBullets[j]);
              //log('recycleLockBullet',dragonPartId);
          }
          */
          return [];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0e21ad4a326d948132367dde6964a08607702dd2.js.map
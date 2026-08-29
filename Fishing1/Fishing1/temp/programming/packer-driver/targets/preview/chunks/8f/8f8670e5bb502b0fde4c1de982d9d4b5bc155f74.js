System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BulletViewBase, ServerSendCode, Vec3, UITransform, v3, log, BulletView, _crd;

  function _reportPossibleCrUseOfBulletViewBase(extras) {
    _reporterNs.report("BulletViewBase", "../../../game/views/bulletViewBase/BulletViewBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "./BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAddBulletInfo(extras) {
    _reporterNs.report("AddBulletInfo", "./BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbstractBaseBullet(extras) {
    _reporterNs.report("AbstractBaseBullet", "./bulletActions/BulletActionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletSettingData(extras) {
    _reporterNs.report("BulletSettingData", "../../../game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerSendCode(extras) {
    _reporterNs.report("ServerSendCode", "../../connect/ConnectBaseDefinitions", _context.meta, extras);
  }

  _export("BulletView", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      log = _cc.log;
    }, function (_unresolved_2) {
      BulletViewBase = _unresolved_2.BulletViewBase;
    }, function (_unresolved_3) {
      ServerSendCode = _unresolved_3.ServerSendCode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68126DVNNJOA5Iv8OV6whxB", "BulletView", undefined);
      /**
       * Created by EricHuang on 2023/9/21.
       * 
       */


      __checkObsolete__(['find', 'Node', 'Vec3', 'UITransform', 'v3', 'Mat4']);

      __checkObsolete__(['Graphics', 'color', 'Layers']);

      //export abstract class BulletView <TBullet extends Bullet=Bullet>extends BulletViewBase{
      __checkObsolete__(['log']);

      _export("BulletView", BulletView = class BulletView extends (_crd && BulletViewBase === void 0 ? (_reportPossibleCrUseOfBulletViewBase({
        error: Error()
      }), BulletViewBase) : BulletViewBase) {
        constructor() {
          super();
          this._aryBulletsPool = void 0;
          //---objectPool
          this._aryBullets = void 0;
          this._nowSystem = void 0;
          //--當前的系統
          //--動作庫---這裡放建構出來的
          this._mapIfaction = void 0;
          this._ifActionClasses = void 0;
          this._mapIfaction = {}; //----子彈運動庫(已被實體化的)

          this._ifActionClasses = {};
          this._aryBulletsPool = [];
          this._aryBullets = [];
          this._nowSystem = 0; //判斷一般系統或是成就系統0=一般/1=成就

          this._classId = 'BulletView';
          this.settingActions();
        } //--用來塞初始定義的動作庫
        //----使用者自己塞這邊只會塞預設的
        //--override


        //---gamemain call的,要初始子彈的資訊
        init() {
          this.aryActionInfo = this._viewModel['_aryActionInfo'];
          this.aryGunScorePool = this._viewModel['_aryScorePool'];
          log('bullet_init', this._aryActionInfo, this._aryGunScorePool);
        }

        removeSingleBullet(id) {
          var b;
          var len = this._aryBullets.length;

          for (var i = 0; i < len; i++) {
            b = this._aryBullets[i];

            if (b.id == id) {
              b.isDead = true;
              break;
            }
          }
        } //---沒有用到20240301


        setBulletIsDeath(id) {
          var b = this.getBulletByID(id);
          log('afterHitBullet__', id, b);

          if (b != null) {
            //--在其他桌已經觸發了打擊,漁網沒張開
            if (!b.useFishingNets) {
              b.isDead = true;
              b.lockFishTarget = 0;
              b.useProp = 0; //b.bulletShell.active=false;
            }
          }
        } //--靠北根本沒用到阿...


        setMoreBulletIsDeath(ids) {
          for (var i = 0; i < ids.length; i++) {
            var b = this.getBulletByID(ids[i]);

            if (b != null) {
              //--在其他桌已經觸發了打擊,漁網沒張開
              if (!b.useFishingNets) {
                b.isDead = true;
                b.lockFishTarget = 0;
                b.useProp = 0; //b.bulletShell.active=false;
              }
            }
          }
        }
        /**
         * 鎖定目標出界準備回收
         * @param bulletIds bulletIDs
         */


        cleanMoreFishTarget(bulletIds) {
          //log('cleanMoreFishTarget_forupdateLockBullet',bulletIds);
          for (var i = 0; i < bulletIds.length; i++) {
            var b = this.getBulletByID(bulletIds[i]);

            if (b != null) {
              b.lockFishTarget = 0;
              b.useProp = 0;
              b.isDead = true;
              b.bulletShell.active = false;

              this._viewModel.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
                error: Error()
              }), ServerSendCode) : ServerSendCode).hitFish, {
                id: b.id,
                fid: -1
              });
            }
          }
        }

        cleanLocakTargetByDeathFishs(fishs) {
          for (var i = 0; i < this._aryBullets.length; i++) {
            for (var j = 0; j < fishs.length; j++) {
              if (this._aryBullets[i].lockFishTarget == fishs[j]) {
                //log('cleanLocakTargetByDeathFishs',this._aryBullets[i].id);
                this._aryBullets[i].lockFishTarget = 0;
                this._aryBullets[i].useProp = 0;
                this._aryBullets[i].isDead = true;
                this._aryBullets[i].bulletShell.active = false;

                this._viewModel.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
                  error: Error()
                }), ServerSendCode) : ServerSendCode).hitFish, {
                  id: this._aryBullets[i].id,
                  fid: -1
                });
              }
            }
          }
        } //---清空子彈鎖定的目標


        cleanFishTarget(bulletId) {
          var b = this.getBulletByID(bulletId); //log("cleanFishTarget>>>"+bulletId);

          if (b && !b.useFishingNets) {
            b.lockFishTarget = 0;
            b.useProp = 0;
            b.isDead = true;

            this._viewModel.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
              error: Error()
            }), ServerSendCode) : ServerSendCode).hitFish, {
              id: b.id,
              fid: -1
            }); //b.bulletShell.active=false;

          }
        }

        cleanAllPlayerLockData() {
          for (var i = 0; i < this._aryBullets.length; i++) {
            if (this._aryBullets[i].isPlayerTarget && this._aryBullets[i].lockFishTarget != -1) {
              log('cleanAllPlayerLockData', this._aryBullets[i].lockFishTarget);
              this._aryBullets[i].lockFishTarget = -1;
              this._aryBullets[i].useProp = 0;
              this._aryBullets[i].isDead = true;
              this._aryBullets[i].bulletShell.active = false;

              this._viewModel.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
                error: Error()
              }), ServerSendCode) : ServerSendCode).hitFish, {
                id: this._aryBullets[i].id,
                fid: -1
              });
            }
          }
        } //--要再加判斷(玩家本人才會送,其他玩家會從addbullet那邊進來)


        cleanAllPreviousLockTarget(lockFishTarget) {
          //--這邊要改掉...這邊是server來決定回收子彈,沒有lifetime的回收機制..
          //--所以要讓他直接自由前進到碰撞為止
          for (var i = 0; i < this._aryBullets.length; i++) {
            if (this._aryBullets[i].lockFishTarget == lockFishTarget && this._aryBullets[i].isPlayerTarget) {
              this._aryBullets[i].lockFishTarget = -1;
              this._aryBullets[i].useProp = 0;
              this._aryBullets[i].isDead = true;
              this._aryBullets[i].bulletShell.active = false;

              this._viewModel.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
                error: Error()
              }), ServerSendCode) : ServerSendCode).hitFish, {
                id: this._aryBullets[i].id,
                fid: -1
              }); //this._aryBullets[i].unLockFishTarget=true;

            }
          }
        }
        /**
         * 20240301 因為server會接管回收,client不能主動回收(server 沒有lifetime)
         */


        cancelAllLockTarget() {
          for (var i = 0; i < this._aryBullets.length; i++) {
            if (this._aryBullets[i].lockFishTarget != 0) {
              this._aryBullets[i].lockFishTarget = -1;
              this._aryBullets[i].useProp = 0;
              this._aryBullets[i].isDead = true;
              this._aryBullets[i].bulletShell.active = false; //--call hit直接給一個找不到的fishid讓server觸發回收

              this._viewModel.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
                error: Error()
              }), ServerSendCode) : ServerSendCode).hitFish, {
                id: this._aryBullets[i].id,
                fid: -1
              }); //this._aryBullets[i].unLockFishTarget=true;

            }
          }
        } //--沒有用


        cleanAllLockTarget() {
          for (var i = 0; i < this._aryBullets.length; i++) {
            if (this._aryBullets[i].lockFishTarget != 0) {
              this._aryBullets[i].lockFishTarget = 0;
              this._aryBullets[i].useProp = 0;
              this._aryBullets[i].isDead = true;
              this._aryBullets[i].bulletShell.active = false;
            }
          }
        }
        /**
         * 玩家之前鎖定的子彈(現在已經改變目標)
         * 舊的子彈準備回收,新打出來卻瞄準舊目標的就不打出來了
         * @param lockFishTarget 
         * @param table 
         */


        cleanPlaerPreviousLockTarget(lockFishTarget, table) {
          for (var i = 0; i < this._aryBullets.length; i++) {
            if (this._aryBullets[i].lockFishTarget == lockFishTarget && this._aryBullets[i].table == table) {
              this._aryBullets[i].lockFishTarget = 0;
              this._aryBullets[i].useProp = 0;
              this._aryBullets[i].isDead = true;
              this._aryBullets[i].bulletShell.active = false;

              this._viewModel.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
                error: Error()
              }), ServerSendCode) : ServerSendCode).hitFish, {
                id: this._aryBullets[i].id,
                fid: -1
              });
            }
          }
        }
        /**
         * ex:BulletImage_2_4_0
         * @param value actionId
        */


        getGunScore(value) {
          /**
           * BulletImage_0_0_0-->這個是我要送給server的資料來記錄子彈
           * 運動樣式(包含彈殼的外皮)_砲塔樣式(上層)_子彈分數(下層)_當前系統(0=一般/1=成就)
           * 送進來的資料->this._newGunIndex + '_' +this.newScoreIndex+'_'+this.nowSystem; 
           * 這是決定砲塔分數的資料
           * ex-
           * [[5,10,20,30,40],
             [50,60,70,80,90],
             [100,200,300,400,500]]
             這代表3種砲塔樣式,每個砲塔裡面共有5種分數
             以一代來看會是這樣>>
             [[2],[5],[10],[20],[50]]
             就是5種砲塔,每個砲塔裡面各一個分數
           */
          if (value != "") {
            var aryBullet = value.split("_");
            return this._aryGunScorePool[Number(aryBullet[1])][Number(aryBullet[2])];
          } else {
            return -1;
          }
        }
        /**
         * 
         * @param s score
         */


        getScoreWithWeaponType(s) {
          var weaponType = 0;

          for (var i in this._mapCannonInfo) {
            //log('check_lookfor_weaponType',i);
            if (this._mapCannonInfo[i].score == s) {
              weaponType = Number(i);
              break;
            }
          } //log('bulletView_getScoreWithWeaponType',this._mapCannonInfo,s,weaponType);


          return weaponType;
        }

        changeBullet(id) {
          this._strNowAction = id;

          var ary = this._strNowAction.split('_');

          this._nowSystem = +ary[ary.length - 1]; //--抓最後一個(字串轉數字)
        }

        getBulletByID(bulletId) {
          var b = null;
          var len = this._aryBullets.length;

          for (var i = 0; i < len; i++) {
            if (this._aryBullets[i].id == bulletId) {
              b = this._aryBullets[i];
              break;
            }
          }

          return b;
        }
        /**
         * ex--子彈的資料BulletImage_0_0_0
         * 這邊拿model進來的,子彈的初始設定資料
         * @param id 彈殼與動作樣式
         * @param effectId 砲管樣式
         * @param systemIndex 系統樣式
         */


        getActionInfo(id, effectId, systemIndex) {
          var obj = null;

          if (this._aryActionInfo[systemIndex][effectId]) {
            if (id == this._aryActionInfo[systemIndex][effectId].systemId) {
              obj = this._aryActionInfo[systemIndex][effectId];
            }
          }

          return obj;
        }

        setBulletData(b, startGlobalPositions) {
          var t = new Vec3();
          var mouse = new Vec3();
          var mouse2D; //---emitter2D/3D座標(在bulletContainer裡面的坐標系)

          var emitter2D;
          var mouse3D;
          var emitter3D; //let layer2DBulletsContainer:Node=find('Canvas/bulletNodeContainer/bulletNode');

          var layer2DBulletsContainer = this.node;
          /**
           * 世界座標下,用來座標轉換的(其實骨子裡跟convertToNodeSpaceAR差不多)-20240315
           * 不要直接去做逆矩陣的動作 會改變到原來的矩陣所以clone..
           * 但因為click 取得的座標是screen pos他並不是mouse node的local轉成world pos
           * 所以要將getLocation的POS塞回去mouseClick這個node的local,在其他使用者端再轉world
           * 
           * 可參考
           * https://forum.cocos.org/t/topic/146895
           * 
           */

          /*
          let inverseMatrixEmitter=new Mat4();
           inverseMatrixEmitter=layer2DBulletsContainer.worldMatrix.clone().invert();
          
          Vec3.transformMat4(t,startGlobalPositions.p,inverseMatrixEmitter);
           let inverseMatrixMouse=new Mat4();
           inverseMatrixMouse=layer2DBulletsContainer.worldMatrix.clone().invert();
          
          Vec3.transformMat4(mouse,v3(b.beforeToLocalEndXY.x,b.beforeToLocalEndXY.y),inverseMatrixMouse);
          */
          //--tolocal(原本的)

          t = layer2DBulletsContainer.getComponent(UITransform).convertToNodeSpaceAR(startGlobalPositions.p);
          mouse = layer2DBulletsContainer.getComponent(UITransform).convertToNodeSpaceAR(v3(b.beforeToLocalEndXY.x, b.beforeToLocalEndXY.y));
          mouse2D = {
            x: mouse.x,
            y: mouse.y
          }; //--mouse globl 座標
          //---emitter2D/3D座標(在bulletContainer裡面的坐標系)

          emitter2D = {
            x: t.x,
            y: t.y
          }; //--砲管位置(在bulletContainer裡面的坐標

          b.mouse2D = mouse2D;
          b.emitter2D = emitter2D;
          log('checkBeforeAddbullets', b); //---test----

          /*
          let clickNode=find('Canvas/mouseNode');
          let testNode:Node=new Node();
          let graphic:Graphics=testNode.addComponent(Graphics);
          //-graphic 不受到UIOpacity組件影響~有夠78(coloc 0-255)
          graphic.fillColor=color(128,2,1,255);
          graphic.rect(-50,-50,100,100);
          graphic.fill();
          testNode.layer=Layers.Enum.UI_2D;
           let clockNode=find('Canvas/mouseNode');
           let localPos = clockNode.getComponent(UITransform).convertToNodeSpaceAR(v3(b.beforeToLocalEndXY.x,b.beforeToLocalEndXY.y));
           clockNode.addChild(testNode);
           log('check_mouseLocalAreaPos',localPos);
           testNode.setPosition(localPos);
          */
          //---test----

          this.addBullet([b]);
        }
        /**
         * lockTargetBullet在用的
         * @param position Vec3
         * @param bulletId number
         * @param lockFishId number
         */


        resetEndPositionAndFishTargetId(position, bulletId, lockFishId) {
          var b = this.getBulletByID(bulletId); //let testCloneBulletData=GameUtils.deepCloneForObject(b);

          log('check_resetEndPositionAndFishTargetId', b.lockFishTarget, b.isPlayerTarget);

          if (b) {
            if (b.lockFishTarget != lockFishId) {
              //this.cleanFishTarget();
              b.lockFishTarget = 0;
              b.useProp = 0;
              b.isDead = true;
              b.bulletShell.active = false;
            } else {
              b.ePosition.x = position.x;
              b.ePosition.y = position.y;
              var len = Math.sqrt(Math.pow(b.bulletShell.position.x - b.ePosition.x, 2) + Math.pow(b.bulletShell.position.y - b.ePosition.y, 2));
              log('checkLen', len);
              /**
               * 每個frame移動的間隔剛好掠過打擊物的情況下,
               * 檢測子彈與魚物件中心點的距離來判斷是反達成碰撞距離
               */

              if (len < 30) {
                b.isHitFlag = true;
              }
            }
          }
        } //---注意,更新的時間單位是秒(原本裡面動作的基本單位是毫秒)


        updateAction(t) {
          var aryIsDeathbullet = []; //--死掉的魚id

          var drillobj = null; //log('updateBulletAction',this._aryBullets);

          if (this._aryBullets.length > 0) {
            var len = this._aryBullets.length;
            var ifAction;

            for (var i = 0; i < len; i++) {
              if (this._aryBullets[i].isBorn) {
                ifAction = this._mapIfaction[this._aryBullets[i].strSystemId]; //log('checkUpdate_ifAction',ifAction);

                ifAction.updateAction(t, this._aryBullets[i]);

                if (this._aryBullets[i].isDead) {
                  aryIsDeathbullet.push(this._aryBullets[i].id);
                }
              }
            }

            this.removeBullets();
          }

          return {
            dead: aryIsDeathbullet,
            drillinfo: drillobj
          };
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f8670e5bb502b0fde4c1de982d9d4b5bc155f74.js.map
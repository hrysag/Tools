System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Fish1BulletData, _crd;

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../../../framework/logic/views/bulletView/BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfEffectBase(extras) {
    _reporterNs.report("IfEffectBase", "../../../framework/logic/views/bulletView/BulletDefinitions", _context.meta, extras);
  }

  _export("Fish1BulletData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02e20CMsuZGR5y50a4yr4Xb", "Fish1BulletData", undefined);

      /**
       * Created by EricHuang on 2023/9/25.
       *
       */
      __checkObsolete__(['Collider2D', 'Label', 'Node']);

      _export("Fish1BulletData", Fish1BulletData = class Fish1BulletData {
        constructor() {
          //=====================interface==============================
          this.table = void 0;
          this.id = void 0;
          //==========life data=======================
          this.age = void 0;
          //--當前生命值
          this.lifeTime = void 0;
          //--預計的存活時間
          this.isBorn = void 0;
          //---子彈是否完全產生 
          this.isDead = void 0;
          this.amount = void 0;
          //---單發子彈的數量
          this.isFree = void 0;
          //---免費子彈
          this.isHitFlag = void 0;
          //---20240227--碰撞漏網之魚要直接引爆子彈
          //=========position and motion data==========
          this.position = void 0;
          this.ePosition = void 0;
          //---終點(滑鼠座標)
          this.vx = void 0;
          this.vy = void 0;
          this.speed = void 0;
          //--速度
          //========player ststus=========================
          this.state = void 0;
          //--判斷目前使用成像的系統是2D還是3D//--1=2D/2=3D
          this.strSystemId = void 0;
          //---ifAction ID(BulletEffectSourceType)
          this.isPlayerTarget = void 0;
          //--是否為玩家本身擊發的子彈
          this.useProp = void 0;
          //---1,2,3,4(0代表未使用道具)
          this.isCrazy = void 0;
          //-----是否狂暴狀態
          this.roomState = void 0;
          //--房間當前狀態(0=一般,1=冰凍,2=boss,3=bossDeath)//-----是否狂暴狀態
          //=========lock fish data========================
          this.lockFishTarget = void 0;
          //---鎖定魚隻資料(單一識別碼ID)
          this.unLockFishTarget = void 0;
          //--是否在鎖定擊發後,目標魚隻死亡的狀態
          this.lockFishType = void 0;
          //---鎖定魚種
          //=========hit data and bullet effect==============================
          this.collisions = void 0;
          //--紀錄碰撞盒(需手動更新)
          this.isCollision = void 0;
          this.hitfishType = void 0;
          //--20220919--打中的魚種
          this.useFishingNets = void 0;
          //--擊中後是否使用漁網(外部接資料)
          this.bulletShell = void 0;
          //---彈殼 20181016
          this.strFishNetId = void 0;
          //---漁網的檔案名稱
          this.bulletEffect = void 0;
          //--可以掛多個效果
          this.effectFactoryID = void 0;
          this.effectFishNetAtlasID = void 0;
          //---漁網的Atlas檔案名稱
          this.actionEffectID = void 0;
          //--特效用的
          //==========others==========================================
          this.angleOriginal = void 0;
          //--糾正值
          //=====================interface==============================
          this.gameBoundaryfoBullet = void 0;
          this.isTweening = void 0;
          //--使用tweenplugin
          //public aryFishNets:string[];//---漁網擊殺上限(漁網最多一次6隻)
          //=====================test====================================
          this.show = void 0;
        }

        init(d) {
          this.state = d;
          this.actionEffectID = -1;
          this.bulletEffect = null;
          this.id = -1;
          this.vx = 0;
          this.vy = 0;
          this.age = 0;
          this.lifeTime = 0;
          this.isHitFlag = false;
          this.isDead = false;
          this.isCollision = false;
          this.strSystemId = -1;
          this.ePosition = {
            x: 0,
            y: 0
          }; //this.aryFishNets=[];

          this.useFishingNets = false;
          this.strFishNetId = ""; //--漁網的ID(fileName)

          this.effectFishNetAtlasID = ''; //---漁網的Atlas檔案名稱

          this.lockFishType = -1;
          this.lockFishTarget = -1;
          this.useProp = 0; //this.originalSensorSize={w:0,h:0};
          //this.collisionfishingNetAreaInfo={w:0,h:0};

          this.collisions = [];
          this.speed = 0;
          this.effectFactoryID = -1;
          this.isCrazy = false;
          this.roomState = 0; //this.bounding=null;//---2D測試用

          this.isPlayerTarget = false;
          this.unLockFishTarget = false; //this.bulletContainer=null;

          this.bulletShell = null;
          this.amount = 0;
          this.isBorn = false;
          this.isFree = false; //this.isDrill=false;

          this.table = 0;
          this.position = {
            x: 0,
            y: 0
          }; //this.scale={x:0,y:0};
          //this.rotation=0;//--徑度(弧度)為單位

          this.angleOriginal = 0;
          this.hitfishType = -1;
          this.gameBoundaryfoBullet = {
            w: 0,
            h: 0
          };
          this.isTweening = false;
        }

        clean() {
          this.init(-1);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=78be0c45590f2033543d2e51a10a2fcfc2563d2c.js.map
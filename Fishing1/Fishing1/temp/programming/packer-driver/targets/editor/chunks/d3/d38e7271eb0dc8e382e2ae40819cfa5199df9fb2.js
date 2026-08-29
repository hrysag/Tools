System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Quat, fishMeshState, FishRotationState, PathFlockUnit, Fish1FishData, _crd;

  function _reportPossibleCrUseOfFishData(extras) {
    _reporterNs.report("FishData", "../../../framework/logic/views/fishView/FishData", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishMeshState(extras) {
    _reporterNs.report("fishMeshState", "../../../framework/game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishRotationState(extras) {
    _reporterNs.report("FishRotationState", "../../../framework/game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishCustomAnimation(extras) {
    _reporterNs.report("FishCustomAnimation", "../../../framework/utils/FishCustomAnimation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationSequencePlayer(extras) {
    _reporterNs.report("AnimationSequencePlayer", "./AnimationSequencePlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPathFlockUnit(extras) {
    _reporterNs.report("PathFlockUnit", "../fishView/pathCore/basePath/BasePath", _context.meta, extras);
  }

  _export("Fish1FishData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Quat = _cc.Quat;
    }, function (_unresolved_2) {
      fishMeshState = _unresolved_2.fishMeshState;
    }, function (_unresolved_3) {
      FishRotationState = _unresolved_3.FishRotationState;
    }, function (_unresolved_4) {
      PathFlockUnit = _unresolved_4.PathFlockUnit;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b683dprERZAnJLH5a4OzIab", "Fish1FishData", undefined);
      /**
       * Created by EricHuang on 2023/9/24.
       */


      __checkObsolete__(['Quat']);

      __checkObsolete__(['Node']);

      __checkObsolete__(['Collider2D']);

      __checkObsolete__(['Collider']);

      __checkObsolete__(['SkinnedMeshRenderer']);

      __checkObsolete__(['MeshRenderer']);

      __checkObsolete__(['Animation']);

      __checkObsolete__(['SkeletalAnimation']);

      __checkObsolete__(['ParticleSystem']);

      _export("Fish1FishData", Fish1FishData = class Fish1FishData {
        //--3D boss用的進場狀態
        constructor() {
          //=======interface==============
          this.id = void 0;
          this.glowup = void 0;
          this.isDead = void 0;
          this.fishIsFlash = void 0;
          this.lv = void 0;
          //--layer index 
          this.fishType = void 0;
          //---辨識魚種在用的(特殊子彈會一口氣擊中所有相同的魚種)
          this.pathID = void 0;
          //-----魚種的路徑辨識碼
          this.pathGroupID = void 0;
          this.prohibit = void 0;
          //--禁止打擊
          this.countHitAni = void 0;
          //---擊中表演(變色)的時間
          this.freeze = void 0;
          //--冰凍道具的持續時間(PS-假設一次10秒,連續使用5次=50秒(以毫秒為單位))
          //=======interface==============
          this.fishMesh = void 0;
          this.fishAimLock = void 0;
          //--只會顯示該玩家的鎖定狀態,其他玩家不顯示
          this.animation = void 0;
          //|SkeletalAnimation(繼承animation) ;//--cocos 控制動畫的物件
          this.fishFlockUnit = void 0;
          //public fishShadow:PIXI.extras.AnimatedSprite;
          this.fishShadow = void 0;
          this.fishMeshState = void 0;
          //---2Dor3D的mesh
          this.bounding = void 0;
          this.pickBounding = void 0;
          this.originalSensorSize = void 0;
          //--初始感應區的大小
          //public collisionArea:PIXI.Graphics[];
          this.collisionArea = void 0;
          //--碰撞的感應區(可能要拔掉)
          this.odds = void 0;
          //---賠率
          this.other = void 0;
          //----特殊時機用的
          this.useOtherMesh = void 0;
          //---使用其他的動畫模式(圓盤)
          this.isDragonLeader = void 0;
          //--是否為金龍第一個
          //public dragonId:string;
          this.hitAniMilliSecond = void 0;
          //----擊中的預期表演時間(毫秒)
          this.isHit = void 0;
          this.hitani = void 0;
          this.spFadeIn = void 0;
          this.spFadeOut = void 0;
          this.useFlockPositions = void 0;
          //public spFlock:flockingCore.SPflock;
          //public testInfo:any;//---20200929(測試用的數據)
          //private _stopShooting:PIXI.Sprite;
          this.spStartPosition = void 0;
          //--取消
          this.spEndPosition = void 0;
          //--取消
          this.alreadyServerTime = void 0;
          //--產生魚的時候再server的時間(當前存活時間)
          this.creatTime = void 0;
          //--產生的時間
          this.createServerTime = void 0;
          //--server產生當下的timestamp
          this.rotationState = void 0;
          //--魚的旋轉狀態
          this.rotationQuaternion = void 0;
          //--四元數旋轉用的
          //public fishSkinnedMeshRenderer:SkinnedMeshRenderer;//--3D魚用的meshrender載體(沒有bone就用meshRender有bone就用SkinnedMeshRenderer)
          //-SkinnedMeshRenderer extends MeshRenderer
          this.fishSkinnedMeshRenderer = void 0;
          //--3D魚用的meshrender載體(沒有bone就用meshRender有bone就用SkinnedMeshRenderer)
          this.animationSequencePlayer = void 0;
          this.particle = void 0;
          //--3D魚在用的particlesystem
          this.spBossInStates = void 0;
          this.init();
        }

        init() {
          this.odds = '';
          this.fishMesh = null;
          this.id = 0;
          this.isDead = false;
          this.pathID = "";
          this.pathGroupID = "";
          this.freeze = 0;
          this.fishType = 0;
          this.fishMeshState = (_crd && fishMeshState === void 0 ? (_reportPossibleCrUseOffishMeshState({
            error: Error()
          }), fishMeshState) : fishMeshState).fish2D;
          this.fishShadow = null;
          this.bounding = [];
          this.pickBounding = [];
          this.lv = 0;
          this.prohibit = false;
          this.useOtherMesh = false;
          this.originalSensorSize = {
            w: 0,
            h: 0
          };
          this.fishIsFlash = false; //this.fishIsFlame=false;

          this.collisionArea = [];
          this.fishAimLock = false;
          this.other = null;
          this.alreadyServerTime = 0;
          this.creatTime = 0;
          this.glowup = -1; //--如果是成長類型的魚,則為正數
          //---擊中動畫相關參數

          this.countHitAni = 0;
          this.hitAniMilliSecond = 0;
          this.isHit = false;
          this.hitani = null; //--魚的旋轉狀態

          this.rotationState = (_crd && FishRotationState === void 0 ? (_reportPossibleCrUseOfFishRotationState({
            error: Error()
          }), FishRotationState) : FishRotationState).normalRotation; //--四元數旋轉用的

          this.rotationQuaternion = new Quat(); //--3D物件用的

          this.fishSkinnedMeshRenderer = null; //--boss用的

          this.animationSequencePlayer = null; //--boss 進場狀態

          this.spBossInStates = {
            bottom: false,
            bo: false,
            left: false,
            lo: false,
            top: false,
            to: false,
            right: false,
            ro: false
          };
          this.particle = null;

          if (!this.fishFlockUnit) {
            this.fishFlockUnit = new (_crd && PathFlockUnit === void 0 ? (_reportPossibleCrUseOfPathFlockUnit({
              error: Error()
            }), PathFlockUnit) : PathFlockUnit)();
          } else {
            this.fishFlockUnit.reset();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d38e7271eb0dc8e382e2ae40819cfa5199df9fb2.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, FishBulletEffectCenter, BulletActionType, v3, Vec3, math, log, AbstractBaseBullet, _crd;

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishBulletEffectCenter(extras) {
    _reporterNs.report("FishBulletEffectCenter", "../bulletEffect/BulletEffectCenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfBulletAction(extras) {
    _reporterNs.report("IfBulletAction", "../BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfEffectBase(extras) {
    _reporterNs.report("IfEffectBase", "../BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectFactoryOption(extras) {
    _reporterNs.report("EffectFactoryOption", "../BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChangeEffectSourceOption(extras) {
    _reporterNs.report("ChangeEffectSourceOption", "../BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletActionType(extras) {
    _reporterNs.report("BulletActionType", "../../../../game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  _export("AbstractBaseBullet", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
      math = _cc.math;
      log = _cc.log;
    }, function (_unresolved_2) {
      FishBulletEffectCenter = _unresolved_2.FishBulletEffectCenter;
    }, function (_unresolved_3) {
      BulletActionType = _unresolved_3.BulletActionType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f55643KQRxOQJzOd5lSWzn5", "BulletActionBase", undefined);
      /**
       * Created by EricHuang on 2023/08/16.
       * 子彈運動路徑抽象類別
       */
      //import {BulletEffectSourceType} from '../BulletDefinitions';


      __checkObsolete__(['Node', 'v3', 'Vec3', 'math']);

      __checkObsolete__(['log']);

      _export("AbstractBaseBullet", AbstractBaseBullet = class AbstractBaseBullet {
        constructor() {
          //==========interface===========================================================
          this.strSystemId = void 0;
          this.container = void 0;
          this.collisionContainer = void 0;
          this.actionEffectID = void 0;
          this.effectFactoryID = void 0;
          this.strSystemId = -1;
          this.actionEffectID = 0;
          this.container = null;
        }

        initEmitter() {//--發射器狀態的初始(生命週期之類的)..碰撞區域本體在這邊建立
          //this.countBullet=0;
          //this.system2Dor3D=1;//--自己填該層的子彈要用啥的1=2D/2=3D
          //--定義子彈的actionEffectID
          //--定義子彈感應區的寬高深
          //--定義2d子彈的assetsID
        } //---interface(override this)


        changeSensor(b) {//---張開漁網(重新定義sensor的範圍??現在漁網好像沒用了)
        } //---effectId(變化形態,更換素材)
        //--這邊要實作--20230816


        changeEffect(b) {
          var bulletEf; //--基本型

          var ef;
          var originalRotation = b.bulletShell.angle;
          var effectOption = {
            baseEffect: null,
            assetsId: b.strFishNetId
          };

          if (b.bulletEffect.length > 1) {} else {
            //--子彈只有一個彈體(不是霰彈槍)
            b.bulletShell.angle = 0;
            bulletEf = b.bulletEffect[0];
            effectOption.baseEffect = bulletEf;
            var factorOption = {
              effectObjType: b.effectFactoryID
            };
            var factory = (_crd && FishBulletEffectCenter === void 0 ? (_reportPossibleCrUseOfFishBulletEffectCenter({
              error: Error()
            }), FishBulletEffectCenter) : FishBulletEffectCenter).getInstance().getEffectProduceFactory(factorOption);
            var changeData = {
              baseEffect: bulletEf,
              assetsId: b.strFishNetId,
              spriteAtlas: b.effectFishNetAtlasID
            };
            log('change_bullet_Effect', factory, changeData);
            factory.changeEffectSource(changeData);
            bulletEf.effectObj.setPosition(v3(b.position.x, b.position.y));
            b.bulletShell.angle = originalRotation;
          }
        }

        initBulletEffect() {//---建構各類型子彈的控制中心--這邊可以用來初始
        } //---override this--
        //--這邊要實作--20230816


        initBulletState(bullet) {
          var len = bullet.length;
          var b;

          for (var i = 0; i < len; i++) {
            b = bullet[i];

            if (this.strSystemId != (_crd && BulletActionType === void 0 ? (_reportPossibleCrUseOfBulletActionType({
              error: Error()
            }), BulletActionType) : BulletActionType).BULLET_ACTION_PREFAB) {
              //--因為其他的會直接拿這個ePositio當作dx dy來直接算角速度,但是鎖定類型會重算角速度
              b.ePosition.x = b.ePosition.x - b.position.x;
              b.ePosition.y = b.ePosition.y - b.position.y;
            }

            b.strSystemId = this.strSystemId;
          }
        } //--這邊要實作--20230816 


        initBounding(b) {} //--這邊要實作--20230816


        reNewBounding(b) {}

        cleanStates() {}

        updateAction(t, b) {
          if (!b.isDead) {
            //--rd 7 客端不主動藉由生存時間回收子彈,所以生存時間是-1   
            if (b.lifeTime > 0) {
              //--預設子彈生命週期不是無限的情況下
              //b.age=this.floatAdd(b.age,t);
              //b.age+=Math.floor(t);
              b.age += t; //-送進來是以秒為單位

              if (b.age >= b.lifeTime && !b.useFishingNets) {
                b.isDead = true;
              }
            }

            if (!b.useFishingNets) {
              this.updateBullet(t, b); //}else{
              //this.openNet(t,b);
            }
          } else {//log("removeID>>"+b.id);
            //this._testFunction(b.id);
          }
        }

        changBulletPosition(x, y) {}

        setMultiTargetPosition(p) {} //==========interface===========================================================
        //--這邊要插入像是魚群更新那樣的delay的刷到底的機制
        //---20230828更新


        openNet(t, b) {
          return;
          /*
          let mc:Node=b.bulletShell;
          let opacityComponent:UIOpacity=mc.getComponent(UIOpacity);
          mc.setScale(v3(b.tweenObj.scaleX,b.tweenObj.scaleY,b.tweenObj.scaleX));
          opacityComponent.opacity=b.tweenObj.opacity;
          */

          b.elapsedTime += t;

          if (b.elapsedTime > b.animationDuration) {
            b.bulletShell.scale = b.targetScale; //this.node.emit("animationComplete");

            b.isDead = true;
            b.isTweening = false;
          } else {
            var _t = math.clamp(b.elapsedTime / b.animationDuration, 0, 1);

            var easedT = this.backEaseOut(_t);
            Vec3.lerp(b.bulletShell.scale, b.originalScale, b.targetScale, easedT);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=75d311dc1798e6f2bfce48b3fab9cc2e1d7a397d.js.map
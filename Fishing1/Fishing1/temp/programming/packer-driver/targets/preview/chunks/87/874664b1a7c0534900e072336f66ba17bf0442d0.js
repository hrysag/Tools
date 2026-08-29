System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AbstractBaseBullet, BulletActionType, math, v3, UITransform, Collider2D, log, Fish1DynamicBulletPrefabAction, _crd;

  function _reportPossibleCrUseOfAbstractBaseBullet(extras) {
    _reporterNs.report("AbstractBaseBullet", "../../../../framework/logic/views/bulletView/bulletActions/BulletActionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletActionType(extras) {
    _reporterNs.report("BulletActionType", "../../../../framework/game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../../../../framework/logic/views/bulletView/BulletDefinitions", _context.meta, extras);
  }

  _export("Fish1DynamicBulletPrefabAction", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      math = _cc.math;
      v3 = _cc.v3;
      UITransform = _cc.UITransform;
      Collider2D = _cc.Collider2D;
      log = _cc.log;
    }, function (_unresolved_2) {
      AbstractBaseBullet = _unresolved_2.AbstractBaseBullet;
    }, function (_unresolved_3) {
      BulletActionType = _unresolved_3.BulletActionType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e6e4b2qSvhAcZTBw+MWhM9l", "Fish1DynamicBulletPrefabAction", undefined);
      /**
       * Created by EricHuang on 2023/12/07.
       */


      __checkObsolete__(['Node', 'math', 'v3', 'UITransform', 'Size', 'BoxCollider', 'BoxCollider2D', 'Collider2D', 'Vec3', 'Collider']);

      __checkObsolete__(['log', 'BuiltinShape2D']);

      _export("Fish1DynamicBulletPrefabAction", Fish1DynamicBulletPrefabAction = class Fish1DynamicBulletPrefabAction extends (_crd && AbstractBaseBullet === void 0 ? (_reportPossibleCrUseOfAbstractBaseBullet({
        error: Error()
      }), AbstractBaseBullet) : AbstractBaseBullet) {
        //private _testCount:number;    
        constructor() {
          super();
          this.strSystemId = (_crd && BulletActionType === void 0 ? (_reportPossibleCrUseOfBulletActionType({
            error: Error()
          }), BulletActionType) : BulletActionType).BULLET_ACTION_DYNAMIC;
        }

        initBulletState(bullet) {
          super.initBulletState(bullet);
          var b = bullet[0];
          var theta = Math.atan2(b.ePosition.y - b.position.y, b.ePosition.x - b.position.x); //-30 * Math.PI/180
          //-以度數表示的角度，把數字乘以π/180便轉換成弧度；以弧度表示的角度，乘以180/π便轉換成度數。

          b.vx = b.speed * Math.cos(theta);
          b.vy = b.speed * Math.sin(theta);
          var spr; //--這邊是子彈的prefab

          if (b.amount > 1) {//--霰彈槍用的--實作要補
          } else {
            spr = b.bulletEffect[0].effectObj; //spr.interactive=false;--這個要再看一下底層,有否掛上監聽是否會參與搜尋事件的流程

            b.bulletShell = spr;
          } //b.bulletShell.enabled =false;--要再確認


          if (!b.isPlayerTarget) {//--要再實作20230816
            //b.bulletShell.alpha=0.5;//---非玩家自己擊發的狀態下..降低透明度,方便辨識
          } //--以下為自定義的感應區--需要實作-20230816

          /*
          let sensor:Graphics=this.createCustomeSensor(0,"",b.bulletShell.width,b.bulletShell.height);
          sensor.pivot.set(sensor.width/2,sensor.height/2);
          b.bulletShell.addChild(sensor);
          //----設定的自定義感應區域,0=依照原本的texture,其他為縮放倍率   
          if(b.originalSensorSize.w!=0 && b.originalSensorSize.h!=0)
          {
              if(b.originalSensorSize.w==b.originalSensorSize.h)
              {
                  sensor.scale.set(b.originalSensorSize.w);
               }else{
                  
                  sensor.width=sensor.width*b.originalSensorSize.w;
                  sensor.height=sensor.height*b.originalSensorSize.h;
              }
          
          }
           b.collisions.push(sensor);
          sensor.x=b.bulletShell.width/2;
          sensor.y=b.bulletShell.height/2;
          
          b.bulletShell.pivot.set(b.bulletShell.width/2,b.bulletShell.height/2);
          */
          //--以上為自定義的感應區--需要實作-20230816


          b.collisions = b.bulletShell.getComponents(Collider2D);
          this.container.addChild(b.bulletShell); //--container由system在啟動的時候就送入
          //b.bulletShell.x=b.position.x;
          //b.bulletShell.y=b.position.y;

          b.bulletShell.setPosition(v3(b.position.x, b.position.y)); //b.bulletShell.setPosition(v3(1920/2,1080/2));

          b.angleOriginal = b.bulletShell.angle;
          b.bulletShell.angle = math.toDegree(theta); //---init RectangleBoundings
          //this.initBounding(b);
          //---set RectangleBounding
          //this.reNewBounding(b);

          log('check_initBulletState_BulletPrefabAction', this.container, b);
          b.isBorn = true; //--test---
          //let checkCollision=b.bulletShell.getComponent(BoxCollider);
          //let transformComponent=b.bulletShell.getComponent(UITransform);
          //let maximum=new Vec3(0,0,0);
          //let mimum=new Vec3(0,0,0);

          /*
          let testGetColliders=b.bulletShell.getComponents(Collider2D);
          let collider=b.bulletShell.getComponent(Collider2D);
          let collider3D=b.bulletShell.getComponent(BoxCollider);
          let test=b.bulletShell.getChildByName('collider').getComponent(UITransform).getBoundingBoxToWorld();
          
          //checkCollision.worldBounds.getBoundary(mimum,maximum);
          //checkCollision.worldBounds
          log('check_boxCollision',b.bulletShell,testGetColliders,collider,collider3D,test);
          log('check_bulletData',b.bulletShell);
          */
        }

        updateBullet(t, b) {
          /*
          if(b.isCollision || b.useFishingNets)
          {
              b.isDead=true;
              
              b.bulletShell.active=false;
              
              return;
          }*/
          var theta;

          if (!b.unLockFishTarget) {
            if (b.lockFishTarget != 0) {
              theta = Math.atan2(b.ePosition.y - b.position.y, b.ePosition.x - b.position.x); //-30 * Math.PI/180
              //-以度數表示的角度，把數字乘以π/180便轉換成弧度；以弧度表示的角度，乘以180/π便轉換成度數。

              b.vx = b.speed * Math.cos(theta);
              b.vy = b.speed * Math.sin(theta);
            } else {
              b.bulletShell.setPosition(v3(b.position.x, b.position.y));
              b.angleOriginal = b.bulletShell.angle;
              b.bulletShell.angle = math.toDegree(theta);
              b.unLockFishTarget = true;
            }
          } else {
            b.ePosition.x = b.position.x;
            b.ePosition.y = b.position.y;
          }

          var vxvalue = 1;
          b.position.x += b.vx * t / vxvalue;
          b.position.y += b.vy * t / vxvalue;

          if (b.unLockFishTarget) {
            var right = 1920;
            var left = 0; //let top:number=0;

            var top = 1080; //top=b.gameBoundaryfoBullet.h;---要改這個20230816
            //let bottom:number=1080;

            var bottom = 0;
            var contentSize = b.bulletShell.getComponent(UITransform).contentSize; //--原本是依照左上角(0,0)坐標系去設計的判斷
            //--cocos是依照右下角(0,0)坐標系  
            //if(b.position.y<=top+b.bulletShell.height/2)

            if (b.position.y >= top + contentSize.height / 2) {
              //--超出上面邊界
              //--超出上面邊界
              b.vy *= -1;
              b.position.y = top + contentSize.height / 2; //b.isDead=true;
              //changeflag=true;
              //}else if(b.position.y>=bottom-b.bulletShell.height/2){
            } else if (b.position.y <= bottom - contentSize.height / 2) {
              //--超出下面邊界 
              //--超出下面邊界 
              b.vy *= -1;
              b.position.y = bottom - contentSize.height / 2; //b.isDead=true;
              //changeflag=true;
            }

            if (b.position.x <= left + contentSize.width / 2) {
              //--超出左邊邊界
              //--超出左邊邊界
              b.vx *= -1;
              b.position.x = left + contentSize.width / 2; //b.isDead=true;
              //changeflag=true;
            } else if (b.position.x >= right - contentSize.width / 2) {
              //--超出右邊邊界
              b.vx *= -1;
              b.position.x = right - contentSize.width / 2; //b.isDead=true;
              //changeflag=true;
            }
          }

          b.bulletShell.setPosition(v3(b.position.x, b.position.y));

          if (b.unLockFishTarget) {
            //log('unLockFishTarget@@@');
            theta = Math.atan2(b.position.y - b.ePosition.y, b.position.x - b.ePosition.x);
          }

          b.bulletShell.angle = math.toDegree(theta);
          /*
          let changeflag:boolean=false;
           if(!changeflag)
          {
              let theta:number=Math.atan2(b.position.y-b.ePosition.y,b.position.x-b.ePosition.x);
              
              b.bulletShell.angle=math.toDegree(theta);
          }*/
          //this.reNewBounding(b);--resetting collision boudary
          //--for test
          //-1396.4982652398392,103.51218719663106

          this.updateColliders(b, t);
        }

        updateColliders(b, t) {
          for (var i = 0; i < b.collisions.length; i++) {
            //b.collisions[i].impl.update(t)
            b.collisions[i].impl.update();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=874664b1a7c0534900e072336f66ba17bf0442d0.js.map
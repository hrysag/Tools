System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Size, Sprite, UITransform, Animation, color, v3, UIOpacity, BulletEffectSourceType, log, EffectData, BaseEffectFactory, _crd;

  function _reportPossibleCrUseOfIfEffectBase(extras) {
    _reporterNs.report("IfEffectBase", "../BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletEffectSourceType(extras) {
    _reporterNs.report("BulletEffectSourceType", "../BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfEffectFactory(extras) {
    _reporterNs.report("IfEffectFactory", "../BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectOption(extras) {
    _reporterNs.report("EffectOption", "../BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChangeEffectSourceOption(extras) {
    _reporterNs.report("ChangeEffectSourceOption", "../BulletDefinitions", _context.meta, extras);
  }

  _export({
    EffectData: void 0,
    BaseEffectFactory: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Size = _cc.Size;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Animation = _cc.Animation;
      color = _cc.color;
      v3 = _cc.v3;
      UIOpacity = _cc.UIOpacity;
      log = _cc.log;
    }, function (_unresolved_2) {
      BulletEffectSourceType = _unresolved_2.BulletEffectSourceType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ebb33TH+jdKm6KXbwg/oFHR", "BasicBulletEffectData", undefined);
      /**
       * Created by EricHuang on 2023/08/14.
       */


      __checkObsolete__(['AnimationClip', 'Prefab', 'Size', 'Sprite', 'SpriteFrame', 'UITransform']);

      __checkObsolete__(['Animation']);

      __checkObsolete__(['Node']);

      __checkObsolete__(['color']);

      __checkObsolete__(['v3']);

      __checkObsolete__(['UIOpacity']);

      __checkObsolete__(['math']);

      __checkObsolete__(['log']);

      _export("EffectData", EffectData = class EffectData {
        constructor() {
          this.id = void 0;
          this.effectObj = void 0;
          this.strSystemId = void 0;
          this.original_Width = void 0;
          this.original_Height = void 0;
          this.fps = void 0;
          this.texture = void 0;
          this.prefab = void 0;
          this.assetsId = void 0;
          this.ogSpriteFrame = void 0;
          this.ogUiTransFormData = void 0;
          this.init();
        }

        init() {
          this.id = -1;
          this.strSystemId = -1;
          this.effectObj = null;
          this.fps = undefined;
          this.original_Width = 0;
          this.original_Height = 0;
          this.texture = [];
          this.prefab = null;
          this.assetsId = '';
          this.ogSpriteFrame = null;
          this.ogUiTransFormData = {
            w: 0,
            h: 0,
            x: 0,
            y: 0
          };
        }

        updtae(t) {}

        getWidth() {
          //--這邊要改掉~在旋轉過後~原本的長寬是不準確的
          var m = 0;

          if (this.effectObj != null) {
            var uiTransForm = this.effectObj.getComponent(UITransform);
            m = uiTransForm.width;
          }

          return m;
        }

        getHeight() {
          //var img:Layer2D.Image=(this.mc==null)?this.image:this.mc;
          //return img.height;
          var m = 0;

          if (this.effectObj != null) {
            var uiTransForm = this.effectObj.getComponent(UITransform);
            m = uiTransForm.height;
          }

          return m;
        }

        clean() {
          var spr;
          var ani;
          var clip;
          var returnData = {
            id: '',
            node: null
          };

          if (this.strSystemId == (_crd && BulletEffectSourceType === void 0 ? (_reportPossibleCrUseOfBulletEffectSourceType({
            error: Error()
          }), BulletEffectSourceType) : BulletEffectSourceType).EFFECTSOURCE_MOVIECLIP) {
            //--ps這裡的effectObj型別是node---所以沒辦法用this.effectObj instanceof Animation之類的來判斷
            ani = this.effectObj.getComponent(Animation);
            log('bullet_movieClip is stop'); //--這邊要測20230814

            ani.stop();
            clip = ani.defaultClip;
            clip.removeTrack(0);
            ani.removeClip(clip);
          } else if (this.strSystemId == (_crd && BulletEffectSourceType === void 0 ? (_reportPossibleCrUseOfBulletEffectSourceType({
            error: Error()
          }), BulletEffectSourceType) : BulletEffectSourceType).EFFECTSOURC_IMAGE) {
            spr = this.effectObj.getComponent(Sprite);
            spr.spriteFrame.destroy();
          } else if (this.strSystemId == (_crd && BulletEffectSourceType === void 0 ? (_reportPossibleCrUseOfBulletEffectSourceType({
            error: Error()
          }), BulletEffectSourceType) : BulletEffectSourceType).EFFECTSOURCE_PREFAB) {
            /*
            if(this.effectObj.getComponent(Animation))
            {
                
                //ani=this.effectObj.getComponent(Animation);
                 //ani.stop();
                 //clip=ani.defaultClip;
                 //----不能直接刪除defaultClip,會出警告訊息 clip is defaultClip, set force to true to force remove clip and animation state
                //clip.removeTrack(0);
                 //ani.removeClip(clip);
                 
                 ani=this.effectObj.getComponent(Animation);
                 ani.stop();
                 ani.destroy();//--??? 
                 
             }else if(this.effectObj.getComponent(Sprite))
            {
                spr=this.effectObj.getComponent(Sprite);
                 //spr.spriteFrame.destroy();
            }*/
            if (this.effectObj.getComponent(Animation)) {
              ani = this.effectObj.getComponent(Animation);
              ani.stop();
            }

            if (this.ogSpriteFrame) {
              spr = this.effectObj.getComponent(Sprite); //--把替換的子彈擠回去

              spr.spriteFrame = this.ogSpriteFrame;
            }

            if (this.effectObj.getComponent(UITransform)) {
              var uiTransForm = this.effectObj.getComponent(UITransform);
              uiTransForm.contentSize = new Size(this.ogUiTransFormData.w, this.ogUiTransFormData.h);
              uiTransForm.anchorX = this.ogUiTransFormData.x;
              uiTransForm.anchorY = this.ogUiTransFormData.y;
            }

            if (this.effectObj.getComponent(Sprite)) {
              this.effectObj.getComponent(Sprite).color = color(255, 255, 255, 255);
            } else if (this.effectObj.getComponent(UIOpacity)) {
              this.effectObj.getComponent(UIOpacity).opacity = 255;
            }

            this.effectObj.setPosition(v3(0, 0, 0));
            this.effectObj.setScale(v3(1, 1, 1));
            this.effectObj.angle = 0;
            this.effectObj.active = false;
            returnData.id = this.assetsId;
            returnData.node = this.effectObj;
          } //this.effectObj.destroy();


          this.init();
          return returnData;
        }

      });
      /**
       * 這邊只負責產生,保留就是由bulletsystem來完成
       */


      _export("BaseEffectFactory", BaseEffectFactory = class BaseEffectFactory {
        constructor(id) {
          this.strSystemId = void 0;
          //--回收佔存要重複使用的
          this._aryPoolEffects = void 0;
          //--effectData
          this._poolMaxValue = void 0;
          //--objpool的長度限制
          //protected _prefabPool:{[key:string]:NodePool}; 
          this._prefabPool = void 0;
          this.strSystemId = id;
          this._aryPoolEffects = [];
          this._poolMaxValue = 20;
          this._prefabPool = {};
        }
        /**
         * 20240325
         * @param prefabId 要重複利用的prefab
         * @returns Node
         */


        getRecyclePrefab(prefabId) {
          var returnPrefab = null;

          if (this.checkPrefabPool(prefabId) > 0) {
            returnPrefab = this._prefabPool[prefabId].pop();
          } //log('getRecyclePrefab',returnPrefab);


          return returnPrefab; //return null
        }

        checkPrefabPool(prefabId) {
          var returnPrefabPoolLength = -1;

          if (this._prefabPool[prefabId]) {
            returnPrefabPoolLength = this._prefabPool[prefabId].length;
          }

          return returnPrefabPoolLength;
        }

        recyclePrefab(recycleId, prefabNode) {
          //return;
          if (!this._prefabPool[recycleId]) {
            this._prefabPool[recycleId] = [];
          }

          if (this._prefabPool[recycleId].length < this._poolMaxValue) {
            this._prefabPool[recycleId].push(prefabNode);
          }

          log('check_prefabPool', this._prefabPool, recycleId, prefabNode);
        }

        createEffect(effectInfo) {
          return null;
        }

        cloneEffect(clone) {
          var cloneObject = this.createEffect(clone);
          return cloneObject;
        }

        pushEffectBase(b) {
          if (b != null) {
            if (this._aryPoolEffects.length < this._poolMaxValue) {
              this._aryPoolEffects.push(b);
            }
          }
        }

        changeEffectSource(option) {
          return null;
        }

        updateAnimation(t) {}

        clean() {
          this._aryPoolEffects.length = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1dff0e760468ee8fe911d393abfc741d52d8f937.js.map
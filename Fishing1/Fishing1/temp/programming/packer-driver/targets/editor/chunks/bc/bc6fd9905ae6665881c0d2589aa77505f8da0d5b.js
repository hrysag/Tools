System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GuiBasic, GUIEvent, Notifycation, GuiNotifycationSubbscriptionSubject, GameUtils, TweenMaxCocosPlugin, Digits, assetManager, Button, Component, EventHandler, find, Label, math, Size, UIOpacity, v3, Vec2, Vec3, Node, Layers, UITransform, Sprite, sp, Animation, BlockInputEvents, AnimationClip, LoadingResManager, SoundsManager, log, Cannon, CannonMount, FastBtn, Fish1CannonGuiView, _class4, _crd, WholeCannon;

  //-https://blog.csdn.net/qq_20173207/article/details/115302626
  //-https://blog.asroads.com/post/bdf287b3.html
  //-78引擎~手動建立的node是不會進入mapclass裡面的
  function keepClass(target) {
    let frameInfo = cc['_RF'].peek();
    let script = frameInfo.script;
    cc.js.setClassName(script, target);
  } //---完整組裝完的砲台(玩家資訊+砲臺底座+砲管組)
  //--使用裝飾器


  function _reportPossibleCrUseOfGuiBasic(extras) {
    _reporterNs.report("GuiBasic", "../../../../framework/game/guiCore/GuiBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiOption(extras) {
    _reporterNs.report("GuiOption", "../../../../framework/game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGUIEvent(extras) {
    _reporterNs.report("GUIEvent", "../../../../framework/game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifycation(extras) {
    _reporterNs.report("Notifycation", "../../../../framework/abstract/mvvm/Notifycation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject(extras) {
    _reporterNs.report("GuiNotifycationSubbscriptionSubject", "../../../../framework/game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../../../framework/utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenMaxCocosPlugin(extras) {
    _reporterNs.report("TweenMaxCocosPlugin", "../../../../framework/utils/TweenMaxPlugin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDigits(extras) {
    _reporterNs.report("Digits", "../../../../framework/utils/Digits", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundsManager(extras) {
    _reporterNs.report("SoundsManager", "../../../../framework/logic/audio/SoundsManager", _context.meta, extras);
  }

  _export({
    Cannon: void 0,
    CannonMount: void 0,
    FastBtn: void 0,
    keepClass: keepClass,
    Fish1CannonGuiView: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
      Button = _cc.Button;
      Component = _cc.Component;
      EventHandler = _cc.EventHandler;
      find = _cc.find;
      Label = _cc.Label;
      math = _cc.math;
      Size = _cc.Size;
      UIOpacity = _cc.UIOpacity;
      v3 = _cc.v3;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      Node = _cc.Node;
      Layers = _cc.Layers;
      UITransform = _cc.UITransform;
      Sprite = _cc.Sprite;
      sp = _cc.sp;
      Animation = _cc.Animation;
      BlockInputEvents = _cc.BlockInputEvents;
      AnimationClip = _cc.AnimationClip;
      log = _cc.log;
    }, function (_unresolved_2) {
      GuiBasic = _unresolved_2.GuiBasic;
    }, function (_unresolved_3) {
      GUIEvent = _unresolved_3.GUIEvent;
    }, function (_unresolved_4) {
      Notifycation = _unresolved_4.Notifycation;
    }, function (_unresolved_5) {
      GuiNotifycationSubbscriptionSubject = _unresolved_5.GuiNotifycationSubbscriptionSubject;
    }, function (_unresolved_6) {
      GameUtils = _unresolved_6.GameUtils;
    }, function (_unresolved_7) {
      TweenMaxCocosPlugin = _unresolved_7.TweenMaxCocosPlugin;
    }, function (_unresolved_8) {
      Digits = _unresolved_8.Digits;
    }, function (_unresolved_9) {
      LoadingResManager = _unresolved_9.LoadingResManager;
    }, function (_unresolved_10) {
      SoundsManager = _unresolved_10.SoundsManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d3cdm27sJNIZndoeopd5/X", "Fish1CannonGuiView", undefined);
      /**
       * Created by EricHuang on 2023/6/21.
       */
      //import {CocosBaseEvent} from '../../../Core/BaseEvent';


      __checkObsolete__(['AnimationState', 'assetManager', 'Button', 'Component', 'EventHandler', 'find', 'Graphics', 'Label', 'math', 'Quat', 'resources', 'Size', 'SpriteFrame', 'UIOpacity', 'v3', 'Vec2', 'Vec3']);

      __checkObsolete__(['Node']);

      __checkObsolete__(['Layers']);

      __checkObsolete__(['color']);

      __checkObsolete__(['Color']);

      __checkObsolete__(['UITransform']);

      __checkObsolete__(['Material']);

      __checkObsolete__(['Sprite']);

      __checkObsolete__(['sp']);

      __checkObsolete__(['Animation']);

      __checkObsolete__(['EventTouch']);

      __checkObsolete__(['BlockInputEvents']);

      __checkObsolete__(['AnimationClip']);

      //import {CoordinatesFormMode} from '../../CoordinatesFormMode/CoordinatesFormMode';
      //import { LoadManager } from '../../../managers/LoadManager';
      __checkObsolete__(['CameraComponent']);

      __checkObsolete__(['log']);

      //---砲管組
      _export("Cannon", Cannon = class Cannon extends Component {
        set ogPosition(value) {
          this._ogPosition = value;
        }

        set nowSystem(value) {
          this._nowSystem = value;
        }

        get nowSystem() {
          return this._nowSystem;
        }

        get containerCannon() {
          return this._containerCannon;
        }

        get containerGun() {
          return this._containerGun;
        } //--可以拿到添加的node


        onLoad() {
          log('check_cannon node_onLoad', this.node);
          this.node.addComponent(UITransform);
        }
        /*
        get gunContainerMaxWH():{w:number,h:number}
        {
            return this._gunContainerMaxWH;
        }*/


        constructor() {
          super();
          this._containerCannon = void 0;
          this._containerGun = void 0;
          this._nowSystem = void 0;
          //--0為一般模式,1為成就系統..依此類推
          this._mapCannonAndGun = void 0;
          this._nowIndex = void 0;
          this._previousIndex = void 0;
          this._ogPosition = void 0;
          this._numCannonBarrelStart = void 0;
          //--炮管初始位置
          //private _cannonNode:Node;
          this.isHidden = void 0;
          this._mapCannonAndGun = []; //--0為一般模式,1為成就系統..依此類推

          let ary0 = {};
          let ary1 = {}; //-{[key:string]:AnimationAndEffect.AniEffectBase};
          //let ary1:{cannonNode?:Node,cannon?:Node,gun?:Node,gunfire?:Node,status?:string,gPosition?:{x:number,y:number}}[]=[];

          this._mapCannonAndGun.push(ary0);

          this._mapCannonAndGun.push(ary1);

          this._nowSystem = 0;
          this._numCannonBarrelStart = 0; //--2023-0213-fix 新改版的container的寬高=0??
          //this._gunContainerMaxWH={w:0,h:0};

          this.isHidden = false;
          this._nowIndex = 0;
          this._previousIndex = 0;
          this._ogPosition = {
            x: 0,
            y: 0,
            h: 0
          }; //this._cannonNode=null;
          //this.init();
        }

        setLayout(value) {
          let len = value.gunBarrel.length; //this._cannonNode=value.cannon;
          //--底座 

          let sprCannon; //--砲管

          let sprGun; //--裝上面兩個的node

          let cannonLv; //log('check_setCannonLayoutInfo',value);

          /**
           * //--砲管炮座的容器node
           * cannonLv>'cannonLv0', 'cannonLv1', 'cannonLv2', 'cannonLv3', 'cannonLv4']
           * //--砲管
           * gunBarrel>cannonBarrel', 'cannonBarrel', 'cannonBarrel', 'cannonBarrel', 'cannonBarrel']
           * //--砲座
           * gunTurret>['cannonTurret', 'cannonTurret', 'cannonTurret', 'cannonTurret', 'cannonTurret']
           *
           */

          for (let i = 0; i < len; i++) {
            cannonLv = this.node.getChildByName(value.cannonLv[i]);
            cannonLv.addComponent(UIOpacity); //log('check_cannonLVNode',cannonLv);

            sprCannon = cannonLv.getChildByName(value.gunTurret[i]); //--砲座 

            sprGun = cannonLv.getChildByName(value.gunBarrel[i]); //--砲管

            sprGun.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin); //cannonLv.active=sprCannon.active=sprGun.active=false;

            /**
             * {cannonNode:砲管炮座的容器node,cannon:砲管,gun:砲座}
             */

            this._mapCannonAndGun[0][i] = {
              cannonNode: cannonLv,
              cannon: sprCannon,
              gun: sprGun,
              gunfire: null,
              status: '',
              gPosition: {
                x: sprGun.position.x,
                y: sprGun.position.y
              }
            };
          }

          let shootCenterNode = new Node('shootCenterNode');
          let content = this.node.getComponent(UITransform);
          content.contentSize = new Size(20, 20);
          shootCenterNode.layer = Layers.Enum.UI_2D;
          /*
          let shootCenter:Graphics=shootCenterNode.addComponent(Graphics);
          shootCenter.fillColor=color(0xffffff);
          shootCenter.rect(-10,-10,20,20);
          shootCenter.fill();
          */

          this.node.addChild(shootCenterNode);
          shootCenterNode.setPosition(0, content.contentSize.height);
          this['shootCenter'] = shootCenterNode;
          this._numCannonBarrelStart = sprGun.position.y;
          /*--4元數直接轉
          let rotationQuat=new Quat();
          Quat.fromAxisAngle(rotationQuat,new Vec3(0,0,1),Math.PI/4);
          this.node.rotation=rotationQuat;
          */

          /*
          //--euler--角度為單位
          let rotationQuat=new Quat();
          let degree=Math.PI/4*180/Math.PI;
          Quat.fromEuler(rotationQuat,0,0,degree);
          this.node.rotation=rotationQuat;
          */
          //-angle=角度(degree)
          //let degree=Math.PI/4*180/Math.PI;
          //-就是sin(0)跟flash不同,他是指著正上方,H5是指向右邊水平的位置
          //this.node.angle=0;

          this.node.angle = math.toDegree(Math.sin(0)); //this.shootMotion();

          log('finishLayout', this._mapCannonAndGun);
        }

        closeOrOpenGunVisible(b) {
          for (let i in this._mapCannonAndGun[this._nowSystem]) {
            /*
            {cannonNode:砲管炮座的容器node,cannon:砲管,gun:砲座}
            */
            this._mapCannonAndGun[this._nowSystem][i].cannonNode.active = b;

            if (this._mapCannonAndGun[this._nowSystem][i].gunfire) {
              /*
              opacity=this._mapCannonAndGun[this._nowSystem][i].gunfire.getComponent(UIOpacity);
              opacity.opacity=visible;
              */
              this._mapCannonAndGun[this._nowSystem][i].gunfire.active = b; //this._mapCannonAndGun[this._nowSystem][i].gunfire.visible=b;
            }
          }
        }

        setGunDataInfo(bulletInfo, autLayerLenth) {
          //---bulletInfo[0]--一般系統/bulletInfo[1]--特殊系統(成就)
          for (let i = 0; i < autLayerLenth; i++) {
            //log('check_data_gun',i);
            this._mapCannonAndGun[0][i]['gunType'] = bulletInfo[0][i]['systemId'];
          }

          log('this._mapCannonAndGun', this._mapCannonAndGun, bulletInfo);
        } //--20230103--新增


        getGunType(outIndex) {
          let r = -1;

          if (this._mapCannonAndGun[this._nowSystem][outIndex].gunType != undefined) {
            r = this._mapCannonAndGun[this._nowSystem][outIndex].gunType;
          }

          return r;
        } //--每次都會啟動~不利於現在的型態(有動畫)


        changeGun(outIndex) {
          //--ps舊版的功能裡面有進退場的功能-但這裡只有切換顯示的砲管功能20230627 

          /* 
          if(this._mapCannonAndGun[this._nowSystem][this._previousIndex].status=='fadeOut')
           {
              this._mapCannonAndGun[this._nowSystem][this._previousIndex].status='';
              
              
               TweenMax.killTweensOf(this);
               this._mapCannonAndGun[this._nowSystem][this._previousIndex].cannon.visible=false;
               this._mapCannonAndGun[this._nowSystem][this._previousIndex].gun.visible=false;
               this.y=this._ogPosition.y;
               
                  
           }
            //--ps舊版的功能裡面有進退場的功能-但這裡只有切換顯示的砲管功能20230627
           if(this._mapCannonAndGun[this._nowSystem][this._nowIndex].status=='fadeIn')
           {
               this._mapCannonAndGun[this._nowSystem][this._nowIndex].status='';
               
               TweenMax.killTweensOf(this); 
               TweenMax.killTweensOf(this._mapCannonAndGun[this._nowSystem][this._nowIndex].gun); 
               this.y=this._ogPosition.y;
               this._mapCannonAndGun[this._nowSystem][this._nowIndex].gun.y=this._mapCannonAndGun[this._nowSystem][this._nowIndex].gPosition.y;
               
           }*/
          this._previousIndex = this._nowIndex;
          this._nowIndex = outIndex;

          if (this.node.angle != 0) {
            this.node.angle = 0;
          } //let nowIndex=this.checkNowTypeIndex();
          //let r:number=(this._mapCannonAndGun[this._nowSystem][outIndex].gunType)?this._mapCannonAndGun[this._nowSystem][outIndex].gunType:-1;


          let r = -1; //log('check_data',this._mapCannonAndGun[this._nowSystem][outIndex]);

          if (this._mapCannonAndGun[this._nowSystem][outIndex].gunType != undefined) {
            r = this._mapCannonAndGun[this._nowSystem][outIndex].gunType;
          } //-{cannonNode:砲管炮座的容器node,cannon:砲管,gun:砲座}


          this.closeOrOpenGunVisible(false); //--是關閉全部的cannonNode
          //--直接換圖開關砲塔的能見度

          this._mapCannonAndGun[this._nowSystem][this._nowIndex].cannonNode.active = true; //-outsideIndex:number,insideIndex:number,nextIndex?:number,useFadein?:boolean 
          //this.fadeOut(this._nowSystem,this._previousIndex,this._nowIndex,true);

          log('changeGun_cannon', this._nowSystem, outIndex, this._mapCannonAndGun); //--ps現在的gunType變成BulletActionType裡面定義的,他是數字,不在是之前定義的BulletImage這樣

          return r;
        }

        shootMotion() {
          let nowIndex = this.checkNowTypeIndex();

          if (nowIndex == null) {
            //--ps 現在有擋掉正在換砲管的時候可以擊發這檔事了 2023-0224
            return;
          }

          let childrens = this._mapCannonAndGun[this._nowSystem][nowIndex].gun.components;
          let target;

          for (let i of childrens) {
            if (i instanceof Animation || i instanceof Sprite || i instanceof sp.Skeleton) {
              target = i;
              break;
            }
          }

          log('check_taregt_name', target, this._mapCannonAndGun, '\n' + '__nowSystem', this._nowSystem, '\n' + 'nowIndex', nowIndex);

          if (target instanceof Animation) {
            this.animationMotion(target);
          } else if (target instanceof Sprite) {
            this.spriteShootMotion(this._mapCannonAndGun[this._nowSystem][nowIndex].gun);
          } else if (target instanceof sp.Skeleton) {
            this.spineMotion(target);
          }
        }

        getShootCenterPositiontoGlobal() {
          return this.node.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(this['shootCenter'].position.x, this['shootCenter'].position.y, 0));
        } //--true的話不能擊發子彈,因為還在變換砲管--78的狀況(因為多了動畫)


        isChanging() {
          //return (this._changingObj==null)?false:true;
          return false;
        } //--取得現在使用的砲管


        checkNowTypeIndex() {
          let r = null;
          /**
           *  {cannonNode:砲管炮座的容器node,cannon:砲管,gun:砲座}
              this.closeOrOpenGunVisible(false);//--是關閉全部的cannonNode
           */

          for (let i in this._mapCannonAndGun[this._nowSystem]) {
            if (this._mapCannonAndGun[this._nowSystem][i].cannonNode.active) {
              r = i;
              break;
            }
          }

          log('checkNowTypeIndex', this._nowIndex, this._mapCannonAndGun);
          return r;
        } //--砲管的進場


        fadeOut(outsideIndex, insideIndex, nextIndex, useFadein) {//--cannon砲管底座(後段)/gun砲管(前段)
        } //--砲管的退場


        fadeIn(outsideIndex, insideIndex) {//--cannon砲管底座(後段)/gun砲管(前段)
        }

        spineMotion(value) {}

        animationMotion(value) {}

        spriteShootMotion(value) {
          //let positionObj={x:0,y:value.position.y,z:0};
          value.setPosition(value.position.x, this._numCannonBarrelStart, value.position.z);
          TweenMax.to(value.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), .09, {
            y: this._numCannonBarrelStart - 20,
            yoyo: true,
            repeat: 1
          });
          /*
          TweenMax.to(positionObj,.09,
              {
                  y:this._numCannonBarrelStart-20,
                  yoyo:true,
                  repeat:1,
                  onUpdateParams:[positionObj],
                  onUpdate:(updateData)=>
                  {
                      value.setPosition(value.position.x,updateData.y,value.position.z);
                  },
                  onComplete:()=>
                  {
                      log('action of cannon is ready');
                      value.setPosition(value.position.x,this._numCannonBarrelStart,value.position.z);
                  }
               });
              */
        }

      }); //---砲底座


      _export("CannonMount", CannonMount = class CannonMount extends Component {
        set nowSystem(value) {
          this._nowSystem = value; //--判斷最外層的系統0-一般,1=特殊
        }

        get nowSystem() {
          return this._nowSystem;
        }

        set lockMount(value) {
          this._lockMount = value; //--判斷最外層的系統0-一般,1=特殊
        }
        /*
        set dataDataforBaseCannon(value:CannonLayoutInfo)
        {
            this._dataDataforBaseCannon=value;
        }*/


        constructor() {
          super(); //--預設

          /*
          this._dataDataforBaseCannon=[
              {isSpine:true,path:'crab_a',keyFrames:{wait:'idle',change:'showup',clawhide:'clawhide'},slot:{body:{slotID:'bbox_01',attachment:'bbox_01'},shaft:{slotID:'bbox_02',attachment:'bbox_02'},shaft2:{slotID:'bbox_03',attachment:'bbox_03'}}},
              {isSpine:true,path:'crab_b',keyFrames:{wait:'idle',change:'showup',clawhide:'clawhide'},slot:{body:{slotID:'bbox_01',attachment:'bbox_01'},shaft:{slotID:'bbox_02',attachment:'bbox_02'},shaft2:{slotID:'bbox_03',attachment:'bbox_03'}}},
              {isSpine:true,path:'crab_c',keyFrames:{wait:'idle',change:'showup',clawhide:'clawhide'},slot:{body:{slotID:'bbox_01',attachment:'bbox_01'},shaft:{slotID:'bbox_02',attachment:'bbox_02'},shaft2:{slotID:'bbox_03',attachment:'bbox_03'}}}
          ];*/
          //this._dataDataforBaseCannon={};

          /*
          private _dataDataforBaseCannon:{
              isSpine?:boolean,//--spine使用
              isSheet?:boolean,//--序列圖的動畫-cocos animation obj
              keyFrames?:{[key:string]:string},//--spine obj
              slot?:{[key:string]:{slotID:string,attachment:string}},//--spine obj
              path:string
          }[];*/

          /**--CannonLayoutInfo-----
           *  gunBarrel?:string[],//--砲管
              gunTurret?:string[],//-砲底座
              cannonLv?:string[]//--裝上面兩個的node
              mountData?:{
                  isSpine?:boolean,//--spine使用
                  isSheet?:boolean,//--序列圖的動畫-cocos animation obj
                  keyFrames?:{[key:string]:string},//--spine obj
                  slot?:{[key:string]:{slotID:string,attachment:string}},//--spine obj
                  path?:string//--獲取序列圖的路徑
              }[];
              other?:any
           */
          //private _dataDataforBaseCannon:CannonLayoutInfo;
          this._mapBaseCannon = void 0;
          this._nowSystem = void 0;
          //--0為一般模式,1為成就系統..依此類推
          this._nowIndex = void 0;
          this._previousIndex = void 0;
          this._textures = void 0;
          this._lockMount = void 0;
          //--鎖定砲座不做變化(只有一個固定樣式的砲座)
          //private _fakeTweenObj:any;
          //private _nowIndex:number;//--現在選取的樣式
          //public _maxWidth:number;
          //public _maxHeight:number;
          //private _nowChangineObj:any;
          this.isHidden = void 0;
          this.id = void 0;
          this._nowSystem = 0;
          this.id = 0;
          let cannonbase0 = {};
          let cannonbase1 = {};
          this._mapBaseCannon = [cannonbase0, cannonbase1]; //this._nowChangineObj=null;
          //this._maxWidth=269;
          //this._maxHeight=209;

          this.isHidden = false;
          this._nowIndex = 0;
          this._previousIndex = 0;
          this._lockMount = true; //--預設開啟
          //this._fakeTweenObj={};
        } //--可以拿到添加的node


        onLoad() {
          log('check_cannon node_onLoad', this.node); //this.node.
        }

        setLayout(value) {
          //this._dataDataforBaseCannon=value;
          let len = value.mountData.length;
          let baseSpr;
          let containerNode; //--可以透過uuid去拿
          //let test=assetManager.assets.get('b87d4868-12e2-450e-82b2-1f6c440cd4ec@e9252');
          //let test=assetManager.assets;

          this._textures = {
            player: assetManager.assets.get('b87d4868-12e2-450e-82b2-1f6c440cd4ec@94d8f'),
            other: assetManager.assets.get('b87d4868-12e2-450e-82b2-1f6c440cd4ec@e9252')
          }; //-b87d4868-12e2-450e-82b2-1f6c440cd4ec@94d8f
          //-.get('./game/texture/atlas/fishHunterGui/cannon_dish.png')

          log('check_testTexture', this._textures); //-cannon_dish

          for (let i = 0; i < len; i++) {
            if (value.mountData[i].nodeId != undefined) {
              containerNode = this.node.getChildByName(value.mountData[i].nodeId);
            } else {
              containerNode = this.node;
            }

            if (value.mountData[i].isSheet) {
              baseSpr = this.node.getComponent(Animation);
            } else if (value.mountData[i].isSpine) {
              baseSpr = this.node.getComponent(sp.Skeleton);
            } else {
              //--靜態圖片
              baseSpr = this.node.getComponent(Sprite);
              baseSpr.spriteFrame = this._textures.other;
            } //-BlockInputEvents
            //baseSpr.enabled=false;---不會執行update裡面的方法
            //--0=一般系統,1=其他特殊系統
            //--PS-


            this._mapBaseCannon[0][i] = {
              node: containerNode,
              mount: baseSpr,
              keyframes: null,
              status: '',
              ogPosition: null
            };
          }

          this.closeOrOpenGunVisible(false);
          this._mapBaseCannon[0][0].node.active = true; //this.interactive=false;
        }

        closeOrOpenGunVisible(b) {
          let target;

          for (let i in this._mapBaseCannon[this._nowSystem]) {
            target = this._mapBaseCannon[this._nowSystem][i].mount; //target.visible=b; 

            if (!b) {
              //---關閉node的可視程度前要先停止動畫
              if (target instanceof Animation) {} else if (target instanceof sp.Skeleton) {} else {//--sprite
              }
            }

            this._mapBaseCannon[this._nowSystem][i].node.active = b;
          }
        }

        checkNowTypeIndex() {
          let r = null;

          for (let i in this._mapBaseCannon[this._nowSystem]) {
            if (this._mapBaseCannon[this._nowSystem][i].node.active) {
              r = i;
              break;
            }
          }

          log('check_checkNowTypeIndex', r, this._nowSystem, this._mapBaseCannon);
          return r;
        }

        fadeIn(outsideIndex, insideIndex) {
          this._mapBaseCannon[outsideIndex][insideIndex].node.active = true;
        }

        fadeOut(outsideIndex, insideIndex, nextIndex, useFadein, fadeInData) {
          this.fadeIn(outsideIndex, nextIndex);
        }
        /**
         * 用於進退場的動畫
         * @param outIndex 要切換的砲塔
         */


        changeMount(outIndex) {
          if (this._lockMount) {
            this._previousIndex = this._nowIndex;
            this._nowIndex = outIndex;
            this.closeOrOpenGunVisible(false);

            if (this.isHidden) {
              this._mapBaseCannon[this._nowSystem][this._nowIndex].node.visible = true;
            } else {
              this.fadeOut(this._nowSystem, this._previousIndex, this._nowIndex, true);
            }
          }
        }

        playMotion(keyframe, loop, timeScale = 1, reverse = false) {
          let nowIndex = this.checkNowTypeIndex();
          let r = '';

          if (nowIndex != null) {
            //--砲管不在hidden狀態(是展開可以見到的狀態)
            let target = this._mapBaseCannon[this._nowSystem][nowIndex].mount;
            r = target.name;

            if (target instanceof sp.Skeleton) {//target.play(keyframe,loop,timeScale,reverse);   
            } else if (target instanceof Animation) {} else {//--sprite
            }
          }

          return r;
        } //--speine在用的


        getAllMountPositionInfo() {
          //let target:PIXI.Sprite|PIXI.extras.AnimatedSprite|SpineTools.SpinePLayer;
          let r = {};
          return r;
        }
        /**
         * 替換炮底座的圖片--玩家顯示紅色..
         */


        setPlayerMount(value) {
          let target = this._mapBaseCannon[this._nowSystem][this._nowIndex].mount;
          let spFrame = value ? this._textures.player : this._textures.other;
          target.spriteFrame = spFrame;
        }

      });

      _export("FastBtn", FastBtn = class FastBtn extends Component {
        constructor() {
          super();
          this.id = void 0;
          this.openPosition = void 0;
          this.closePosition = void 0;
          //--這兩個xy變數給tween用的
          this.x = void 0;
          this.y = void 0;
          this.isLock = void 0;
          this.id = -1;
          this.openPosition = new Vec2(0, 0);
          this.closePosition = new Vec2(0, 0);
          this.x = 0;
          this.y = 0;
          this.isLock = false;
        }

        onLoad() {}

      });

      _export("WholeCannon", WholeCannon = keepClass(_class4 = class WholeCannon extends Component {
        get nowScore() {
          return this._nowScore;
        } //--取得目前砲管選單是否開啟


        get flagOpen() {
          return this._flagOpen;
        }

        get userId() {
          return this._userId;
        }

        set userId(value) {
          this._userId = value;
        }

        set soundShoot(value) {
          this._soundShoot = value;
        }

        set soundSwitch(value) {
          this._soundSwitch = value;
        }

        set soundGetExchange(value) {
          this._soundGetExchange = value;
        }

        set waitTip(value) {
          this._waitTip = value; //let spr:Sprite=this._waitTip.getComponent(Sprite);
          //this._spriteMaterial=spr.material;
          //this._spriteMaterial
          //this._currentMaterial = this._spriteMaterial.createInstance();
          //this._currentWaitMaterial=spr.getMaterial(0);
          //this._currentWaitMaterial=spr.customMaterial;
          //let m:Material=new Material();
          //m.initialize({effectName:'builtin-sprite',defines:{USE_TEXTURE:true}});
          //m.setProperty('baseColor',color(1,1,1,0));
          //this._testAlphaMaterial=m;
          //let ogMateriial=spr.getMaterial(0);
          //let cloneMaterial=ogMateriial.copy(ogMateriial);
          //spr.setMaterial(cloneMaterial,0);

          this._waitTip.addComponent(BlockInputEvents);

          this._waitTip.active = false; //log('check_setting_waitting',spr.material,this._waitTip,this._currentWaitMaterial);
        }

        set textUserName(value) {
          this._textUserName = value;
          this._textUserName.node.active = false;
        }
        /*
        set transformCameraComponent(value:CameraComponent)
        {
            this._transformCameraComponent=value;
        }*/


        constructor() {
          super();
          this._btnPlus = void 0;
          this._btnMini = void 0;
          this._wholeCannon = void 0;
          //--炮管
          this._cannonBaseMount = void 0;
          this._cannonScorePool = void 0;
          //--這是計算再用的clone版本(20231123)
          this._cannonScorePoolRealData = void 0;
          //private _textDigitsCannon:Label;//---炮分選項
          this._textDigitsCannon = void 0;
          //---炮分選項
          this._textUserName = void 0;
          this._fastBtnScores = void 0;
          //private _textUserCredit:Label;
          this._textUserCredit = void 0;
          //private _textAddCreditDitigs:Tools.Digits;//--玩家新增金額
          //private _containerBGboard:PIXI.Container;
          this._waitTip = void 0;
          this._fastBtnSensor = void 0;
          //--啟動快速選分的按鈕   
          this._outLayerScoreIndex = void 0;
          //--當前外層索引
          this._innerLayerScoreIndex = void 0;
          //--當前內層索引
          this._currentInnerUseingLen = void 0;
          //--當前使用的外層索引長度
          this._currentOutUseingLen = void 0;
          //--當前前使用的內層所以長度
          this._nowScore = void 0;
          this._defaultGunScore = void 0;
          this._isPlayer = void 0;
          this._ogDigitsAddCreditPosition = void 0;
          //--原始顯示玩家綠色金額位置
          this._soundShoot = void 0;
          this._soundSwitch = void 0;
          this._soundGetExchange = void 0;
          //private _fastBtnMap:{[key:number]:FastBtn};
          this._fastBtnMap = void 0;
          this._flagOpen = void 0;
          this._firsOpenFlag = void 0;
          //--進場專用的
          this._interval = void 0;
          //--update用的
          this._timeAccumulator = void 0;
          this._waitVisible = void 0;
          this._canUpdate = void 0;
          this._userId = void 0;
          //private _transformCameraComponent:CameraComponent;//--座標轉換要的
          //private _waitVisible:number;
          //private _currentWaitMaterial:Material;
          //private _spriteMaterial:Material;
          //private _testAlphaMaterial:Material;
          this.tableIndex = void 0;
          this.firstInitCannonInfo = void 0;
          this.id = void 0;

          this.handelClick = e => //public handelClick(e?:EventTouch):void
          {
            /*
            if(!(<Node>e.currentTarget).getComponent(Button).interactable)
            {
                 return;
            }*/
            (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
              error: Error()
            }), SoundsManager) : SoundsManager).getInstance().play('sounds/switch_weapon');
            let changeGunType = -1;

            if (e.currentTarget.name == 'cannonBtnSub') {
              //--
              this._innerLayerScoreIndex -= 1;

              if (this._innerLayerScoreIndex < 0) {
                this._outLayerScoreIndex -= 1;

                if (this._outLayerScoreIndex < 0) {
                  this._outLayerScoreIndex = this._currentOutUseingLen - 1;
                }

                this._innerLayerScoreIndex = this._cannonScorePool[this._outLayerScoreIndex].length - 1;
                this._currentInnerUseingLen = this._cannonScorePool[this._outLayerScoreIndex].length; //--cahnge gunstyle

                this._cannonBaseMount.changeMount(this._outLayerScoreIndex);

                changeGunType = this._wholeCannon.changeGun(this._outLayerScoreIndex);
                log('check---', this._outLayerScoreIndex); //--變換型態的時候要上鎖
              } else {
                changeGunType = this._wholeCannon.getGunType(this._outLayerScoreIndex);
              }
            } else if (e.currentTarget.name == 'cannonBtnAdd') {
              //++
              this._innerLayerScoreIndex += 1;
              log('check_++_changeGun', this._currentInnerUseingLen, this._innerLayerScoreIndex, this._outLayerScoreIndex);

              if (this._innerLayerScoreIndex == this._currentInnerUseingLen) {
                this._outLayerScoreIndex += 1;

                if (this._outLayerScoreIndex == this._currentOutUseingLen) {
                  this._outLayerScoreIndex = 0;
                  this._innerLayerScoreIndex = 0;
                }

                this._innerLayerScoreIndex = 0;
                this._currentInnerUseingLen = this._cannonScorePool[this._outLayerScoreIndex].length; //--cahnge gunstyle

                this._cannonBaseMount.changeMount(this._outLayerScoreIndex);

                changeGunType = this._wholeCannon.changeGun(this._outLayerScoreIndex);
                log('check_++_changeGunGunType----changeGunType---->', changeGunType + '\n' + '_outLayerScoreIndex__' + this._outLayerScoreIndex + '\n' + '__innerLayerScoreIndex__' + this._innerLayerScoreIndex);
                log('check_all__cannonScorePool', this._cannonScorePool); //--變換型態的時候要上鎖
              } else {
                log('changeCannon@@@@');
                changeGunType = this._wholeCannon.getGunType(this._outLayerScoreIndex);
              }
            } //--炮分顯示
            //this._textDigitsCannon.displayWithStr(this._cannonScorePool[this._outLayerScoreIndex][this._innerLayerScoreIndex]+'','center');
            //this._textDigitsCannon.string=this._cannonScorePool[this._outLayerScoreIndex][this._innerLayerScoreIndex]+'';


            log('check_click' + '\n' + 'inner:' + this._innerLayerScoreIndex, '\n' + 'out:' + this._outLayerScoreIndex, '\n' + '_cannonScorePool::' + this._cannonScorePool, '\n' + 'realScoreData', this._cannonScorePoolRealData);
            log('wtfClick', this._cannonScorePool, this._cannonScorePoolRealData);

            this._textDigitsCannon.display(this._cannonScorePool[this._outLayerScoreIndex][this._innerLayerScoreIndex], 'center');

            log('btn_changeBullet', changeGunType);

            if (changeGunType != -1) {
              let sendObj = changeGunType + '_' + this._outLayerScoreIndex + '_' + this._innerLayerScoreIndex + '_' + this._wholeCannon.nowSystem; //let evt:GUIEvent=new GUIEvent(GUIEvent.CHANG_BULLETS,sendObj);

              log('check_newEvt_Change', sendObj);
              this.node.emit((_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                error: Error()
              }), GUIEvent) : GUIEvent).CHANG_BULLETS, sendObj);

              if (this._isPlayer && this._soundSwitch != '') {
                (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
                  error: Error()
                }), SoundsManager) : SoundsManager).getInstance().play(this._soundSwitch);
              }
            }
          };

          this.fastBtnSensorClickHandler = e => {
            log('fastBtnSensorClickHandler', e);
            this._flagOpen = !this._flagOpen;
            let len = this._fastBtnMap.length;

            for (let i = 0; i < len; i++) {
              if (TweenMax.isTweening(this._fastBtnMap[i].node.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin))) {
                TweenMax.killTweensOf(this._fastBtnMap[i].node.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                  error: Error()
                }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin));
              }
            }

            if (TweenMax.isTweening(this._btnMini.node.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin))) {
              TweenMax.killTweensOf(this._btnMini.node.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin));
            }

            if (TweenMax.isTweening(this._btnPlus.node.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin))) {
              TweenMax.killTweensOf(this._btnPlus.node.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin));
            }

            let ary = [this._btnMini, this._btnPlus]; //--要在加入按鈕在運動中的上鎖與結束的解鎖

            if (this._flagOpen) {
              //--open
              for (let j = 0; j < len; j++) {
                this._fastBtnMap[j].node.setPosition(this._fastBtnMap[j].closePosition.x, this._fastBtnMap[j].closePosition.y);

                this._fastBtnMap[j].x = this._fastBtnMap[j].closePosition.x;
                this._fastBtnMap[j].y = this._fastBtnMap[j].closePosition.y;
                this._fastBtnMap[j].node.getComponent(Button).enabled = false;
                TweenMax.to(this._fastBtnMap[j].node.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                  error: Error()
                }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), 0.1, {
                  x: this._fastBtnMap[j].openPosition.x,
                  y: this._fastBtnMap[j].openPosition.y,
                  onCompleteParams: [this._fastBtnMap[j]],
                  onComplete: value => {
                    //---20231123這邊要改isLock
                    //---被道具上鎖的就不打開了
                    if (!value.node.getComponent(FastBtn).isLock) {
                      value.node.getComponent(Button).enabled = true;
                      value.node.getComponent(Button).interactable = true;
                    }
                  }
                });
                /*
                TweenMax.to(this._fastBtnMap[j],0.1,
                {
                   x:this._fastBtnMap[j].openPosition.x,
                   y:this._fastBtnMap[j].openPosition.y,
                   onUpdateParams:[this._fastBtnMap[j]],
                   onUpdate:(value)=>
                   {
                        value.node.setPosition(value.x,value.y);
                   },
                   onCompleteParams:[this._fastBtnMap[j]],
                   onComplete:(value:any)=>
                   {
                        value.node.getComponent(Button).enabled=true;
                        value.node.getComponent(Button).interactable=true;
                   }
                });*/
              } //--下面兩顆+-按鈕


              for (let b = 0; b < ary.length; b++) {
                ary[b].node.setPosition(ary[b].openPosition.x, ary[b].openPosition.y);
                ary[b].x = ary[b].openPosition.x;
                ary[b].y = ary[b].openPosition.y;
                ary[b].node.getComponent(Button).enabled = false;
                ary[b].node.getComponent(Button).interactable = false;
                TweenMax.to(ary[b].node.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                  error: Error()
                }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), 0.1, {
                  x: ary[b].closePosition.x,
                  y: ary[b].closePosition.y,
                  onCompleteParams: [ary[b]],
                  onComplete: value => {
                    //---20231123這邊要改
                    //---被道具上鎖的就不打開了
                    if (!value.node.getComponent(FastBtn).isLock) {
                      value.node.getComponent(Button).enabled = true;
                      value.node.getComponent(Button).interactable = true;
                    }
                  }
                });
              }
              /*
              for(let b:number=0;b<ary.length;b++)
              {
                   ary[b].node.setPosition(ary[b].openPosition.x,ary[b].openPosition.y);
                   ary[b].x=ary[b].openPosition.x;
                   ary[b].y=ary[b].openPosition.y;
                   ary[b].node.getComponent(Button).enabled=false;
                   ary[b].node.getComponent(Button).interactable=false;
                    TweenMax.to(ary[b],0.1,
                   {
                       x:ary[b].closePosition.x,
                       y:ary[b].closePosition.y,
                       onUpdateParams:[ary[b]],
                       onUpdate:(value)=>
                       {
                           value.node.setPosition(value.x,value.y);
                       },
                       onCompleteParams:[ary[b]],
                       onComplete:(value:any)=>
                       {
                           //log('check_fastBrnNode',value);    
                           //value.node.getComponent(Button).enabled=true;
                           value.node.getComponent(Button).enabled=true;
                           value.node.getComponent(Button).interactable=true;
                       }
                   });    
              }*/

            } else {
              //--close-
              for (let j = 0; j < len; j++) {
                this._fastBtnMap[j].node.setPosition(this._fastBtnMap[j].openPosition.x, this._fastBtnMap[j].openPosition.y);

                this._fastBtnMap[j].x = this._fastBtnMap[j].openPosition.x;
                this._fastBtnMap[j].y = this._fastBtnMap[j].openPosition.y; //--enabled 阻斷狀態

                this._fastBtnMap[j].node.getComponent(Button).enabled = false;
                this._fastBtnMap[j].node.getComponent(Button).interactable = false;
                TweenMax.to(this._fastBtnMap[j].node.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                  error: Error()
                }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), 0.1, {
                  x: this._fastBtnMap[j].closePosition.x,
                  y: this._fastBtnMap[j].closePosition.y //onCompleteParams:[this._fastBtnMap[j]],

                });
                /*
                TweenMax.to(this._fastBtnMap[j],0.1,
                {
                   x:this._fastBtnMap[j].closePosition.x,
                   y:this._fastBtnMap[j].closePosition.y,
                   onUpdateParams:[this._fastBtnMap[j]],
                   onUpdate:(value)=>
                   {
                    value.node.setPosition(value.x,value.y);
                   },
                   onCompleteParams:[this._fastBtnMap[j]],
                   onComplete:(value:any)=>
                   {
                    }
                });*/
              }

              for (let m = 0; m < ary.length; m++) {
                ary[m].node.setPosition(ary[m].closePosition.x, ary[m].closePosition.y);
                ary[m].x = ary[m].closePosition.x;
                ary[m].y = ary[m].closePosition.y;
                ary[m].node.getComponent(Button).enabled = false;
                TweenMax.to(ary[m].node.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                  error: Error()
                }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), 0.1, {
                  x: ary[m].openPosition.x,
                  y: ary[m].openPosition.y,
                  onCompleteParams: [ary[m]],
                  onComplete: value => {
                    if (!value.node.getComponent(FastBtn).isLock) {
                      value.node.getComponent(Button).enabled = true;
                    }
                  }
                });
                /*
                TweenMax.to(ary[m],0.1,
                {
                    x:ary[m].openPosition.x,
                    y:ary[m].openPosition.y,
                    onUpdateParams:[ary[m]],
                    onUpdate:(value)=>
                    {
                        value.node.setPosition(value.x,value.y);
                    },
                    onCompleteParams:[ary[m]],
                    onComplete:(value:any)=>
                    {
                        value.node.getComponent(Button).enabled=true;
                    }
                });*/
              }
            }
          };

          this.fastBtnClickHandler = e => {
            let scoreData = this.getScoreIndex(e.currentTarget.getComponent(FastBtn).id);
            log('fastBtnClickHandler', scoreData); //this._outLayerScoreIndex=scoreData.outIndex;
            //this._innerLayerScoreIndex=scoreData.innerIndex; 

            let changeGunType = this._wholeCannon.changeGun(scoreData.outIndex); //this._textDigitsCannon.string=this._cannonScorePool[this._outLayerScoreIndex][this._innerLayerScoreIndex]+'';


            if (changeGunType != -1) {
              this._outLayerScoreIndex = scoreData.outIndex;
              this._innerLayerScoreIndex = scoreData.innerIndex;

              this._cannonBaseMount.changeMount(this._outLayerScoreIndex);

              this._textDigitsCannon.display(this._cannonScorePool[this._outLayerScoreIndex][this._innerLayerScoreIndex], 'center');

              let sendObj = changeGunType + '_' + this._outLayerScoreIndex + '_' + this._innerLayerScoreIndex + '_' + this._wholeCannon.nowSystem; //let evt:GUIEvent=new GUIEvent(GUIEvent.CHANG_BULLETS,sendObj);

              this.node.emit((_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                error: Error()
              }), GUIEvent) : GUIEvent).CHANG_BULLETS, sendObj);

              if (this._isPlayer && this._soundSwitch != '') {
                (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
                  error: Error()
                }), SoundsManager) : SoundsManager).getInstance().play('sounds/switch_weapon'); //SoundsManager.SoundsManagerCore.getInstance().play(this._soundSwitch);
              }
            }
          };

          //--進場完畢解鎖
          this.unLockBtnAfterShowOpen = () => {
            let anumationComponent = this.node.getComponent(Animation);
            anumationComponent.off(Animation.EventType.FINISHED, this.unLockBtnAfterShowOpen);
            this.lockOrUnlockAllbtnForShowOpen(true);
          };

          this._soundShoot = this._soundSwitch = this._soundGetExchange = '';
          this._outLayerScoreIndex = 0;
          this._innerLayerScoreIndex = 0;
          this._currentInnerUseingLen = 0;
          this._currentOutUseingLen = 0;
          this._nowScore = 0;
          this._defaultGunScore = 0;
          this._ogDigitsAddCreditPosition = {
            x: 0,
            y: 0
          };
          this._isPlayer = false;
          this.id = 0;
          this.firstInitCannonInfo = false;
          this._fastBtnMap = [];
          this._fastBtnSensor = null;
          this._flagOpen = false;
          this._firsOpenFlag = false;
          this._interval = 1 / 2;
          this._timeAccumulator = 0;
          this._waitVisible = true;
          this._fastBtnScores = [];
          this._canUpdate = false;
          this.tableIndex = -1;
          this._userId = 0; //this._transformCameraComponent=null;
          //this._currentWaitMaterial=null;
          //this._spriteMaterial=null;
          //this._testAlphaMaterial=null;
        } //-https://chenpipi.cn/post/cocos-creator-source-launch-and-main-loop/
        //-https://www.gushiciku.cn/pl/pedk/zh-tw


        setLayout(playerItem) {
          //let allNode:Node=find('Canvas/playerUI');
          //let playerNodes=allNode.getChildByName('player');
          //let nodesForCannons=playerNodes.children;
          //let len:number= nodesForCannons.length;
          //log('check_allNode',allNode,nodesForCannons);
          let cannonType = {
            gunBarrel: ['cannonBarrel', 'cannonBarrel', 'cannonBarrel', 'cannonBarrel', 'cannonBarrel'],
            //--砲管
            gunTurret: ['cannonTurret', 'cannonTurret', 'cannonTurret', 'cannonTurret', 'cannonTurret'],
            //-砲底座
            cannonLv: ['cannonLv0', 'cannonLv1', 'cannonLv2', 'cannonLv3', 'cannonLv4'] //--裝上面兩個的node

          };
          let mountType = {
            mountData: [{
              isSpine: false,
              isSheet: false
            }]
          };
          playerItem.getChildByName('cannon').addComponent(UITransform);
          this._fastBtnSensor = new Node('fastBtnSensorNode');
          playerItem.getChildByName('cannon').addChild(this._fastBtnSensor);

          let sensorComponent = this._fastBtnSensor.addComponent(UITransform);

          sensorComponent.contentSize = new Size(160, 100);
          this._fastBtnSensor.layer = Layers.Enum.UI_2D;
          /*
          let graphic:Graphics=this._fastBtnSensor.addComponent(Graphics);
          //-graphic 不受到UIOpacity組件影響~有夠78(coloc 0-255)
          graphic.fillColor=color(255,255,255,128);
          graphic.rect(-80,-50,160,100);
          graphic.fill();
          let testTextFieldNode=new Node('textfieldNode');
          testTextFieldNode.layer=Layers.Enum.UI_2D;
          this._fastBtnSensor.addChild(testTextFieldNode);
          let testTextField:Label=testTextFieldNode.addComponent(Label);
          testTextField.string=this.id+'';
          */

          this._fastBtnSensor.setPosition(0, this._fastBtnSensor.position.y + 20);

          let wholeCannon = playerItem.getChildByName('cannon').getChildByName('cannonSeat'); //log('WholeCannon',wholeCannon);

          let UITransformfoWholeCannon = wholeCannon.addComponent(UITransform); //--座標轉換需要用的

          this._wholeCannon = wholeCannon.addComponent(Cannon);

          this._wholeCannon.setLayout(cannonType); //let contantSizeforWholeCanno=UITransformfoWholeCannon.contentSize;


          UITransformfoWholeCannon.anchorPoint = new Vec2(0.5, 1);
          let wholeMount = playerItem.getChildByName('cannon').getChildByName('cannonDish');
          this._cannonBaseMount = wholeMount.addComponent(CannonMount);

          this._cannonBaseMount.setLayout(mountType);

          this._cannonBaseMount.lockMount = false; //---炮分選項(這個node要做滑鼠事件監聽..要展開和收合按鈕)
          //--cannonLabelNode它掛兩層..第一層是sprite第二層才有label

          let cannonLabelNode = playerItem.getChildByName('cannon').getChildByName('cannonScore');
          let labelNode = cannonLabelNode.children[0]; //this._textDigitsCannon=labelNode.getComponent(Label);

          this._textDigitsCannon = labelNode.addComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
            error: Error()
          }), Digits) : Digits);
          this._textDigitsCannon.textures = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames('num_cannon_').sort((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).sortDigitsSpriteFrames);
          this._textDigitsCannon.padding = 1;
          this._textDigitsCannon.useCommand = false;

          this._textDigitsCannon.display(0);

          let playerbarNode = playerItem.getChildByName('playerBar'); //log('check_playerBar',playerbarNode); 
          //--20230703-取得coin相關containSize資訊要用的(IDE美術已經有加了)
          //playerbarNode.getChildByName('scoreBox').getChildByName('coin').addComponent(UITransform);
          //let playerScoreNode:Node=(playerbarNode.getChildByName('scoreBox')).getChildByName('score');
          //log('check_digits_of_textures',LoadManager.getInstance().getSpriteFrames('num_score_')); 

          this._textUserCredit = playerbarNode.getChildByName('scoreBox').getChildByName('score').addComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
            error: Error()
          }), Digits) : Digits);
          this._textUserCredit.textures = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames('num_score_').sort((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).sortDigitsSpriteFrames);
          this._textUserCredit.padding = -5;
          this._textUserCredit.digitScale = 0.8;
          this._textUserCredit.useCommand = true; //this._textUserCredit.floatScale=0.8;
          //this._textUserCredit.displayWithStr('222222.22','center');
          //this._textUserCredit.display(12345.11,'center');
          //this._textUserCredit=playerbarNode.getChildByName('scoreBox').getChildByName('score').getComponent(Label);
          //this._textUserCredit.string= window.util.numeric.prettify.numberWithComma('77777777');//-每三位數要下逗號要自己處理

          this.setPlayerCredit(0); //this._textUserName=playerbarNode.getChildByName('id').getComponent(Label);
          //this._textUserName.string='mmmmmmmmmmmm';
          //--wait
          //this._waitTip=playerItem.getChildByName('waiting');
          //--5個快速選分的紅色按鈕

          let fastBtnTopNode = playerItem.getChildByName('cannonBtn').getChildByName('settingBtn');
          let len = fastBtnTopNode.children.length;
          let fastBtnNode;
          let fastBtnDigitsNode;
          let fastBitDigits;

          for (let i = 0; i < len; i++) {
            fastBtnNode = fastBtnTopNode.getChildByName('levelBtn' + (i + 1));
            fastBtnNode.getComponent(Button).enabled = false;
            fastBtnNode.getComponent(Button).interactable = false; //fastBtnNode.addComponent(BlockInputEvents);

            fastBtnDigitsNode = fastBtnNode.getChildByName('label');
            fastBitDigits = fastBtnDigitsNode.addComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
              error: Error()
            }), Digits) : Digits);
            fastBitDigits.textures = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames('num_choose_').sort((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).sortDigitsSpriteFrames);
            fastBitDigits.padding = 0;
            fastBitDigits.useCommand = false; //fastBitDigits.digitScale=0.8;

            fastBitDigits.display(i, 'center');

            this._fastBtnScores.push(fastBitDigits);

            let btnComponent = fastBtnNode.addComponent(FastBtn);
            fastBtnNode.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin); //(<FastBtn>btnComponent).id=this._cannonScorePool[i][0];

            btnComponent.id = i;
            btnComponent.openPosition.x = fastBtnNode.position.x;
            btnComponent.openPosition.y = fastBtnNode.position.y;
            btnComponent.closePosition.x = wholeCannon.position.x;
            btnComponent.closePosition.y = wholeCannon.position.y;
            fastBtnNode.setPosition(wholeCannon.position.x, wholeCannon.position.y);
            this._fastBtnMap[i] = btnComponent;
          } //--阻斷事件的接收
          //let block=this._waitTip.addComponent(BlockInputEvents);
          //block.enabled=true;
          //--sub=減分


          this._btnMini = playerItem.getChildByName('cannonBtn').getChildByName('cannonBtnSub').addComponent(FastBtn);

          this._btnMini.node.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          this._btnMini.openPosition.x = this._btnMini.node.position.x;
          this._btnMini.openPosition.y = this._btnMini.node.position.y;
          this._btnMini.closePosition.x = wholeCannon.position.x;
          this._btnMini.closePosition.y = this._btnMini.node.position.y;
          this._btnMini.x = 0;
          this._btnMini.y = 0; //block=this._btnMini.addComponent(BlockInputEvents);
          //block.enabled=false;
          //--add=加分

          this._btnPlus = playerItem.getChildByName('cannonBtn').getChildByName('cannonBtnAdd').addComponent(FastBtn);

          this._btnPlus.node.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          this._btnPlus.openPosition.x = this._btnPlus.node.position.x;
          this._btnPlus.openPosition.y = this._btnPlus.node.position.y;
          this._btnPlus.closePosition.x = wholeCannon.position.x;
          this._btnPlus.closePosition.y = this._btnPlus.node.position.y;
          this._btnPlus.x = 0;
          this._btnPlus.y = 0; //block=this._btnPlus.addComponent(BlockInputEvents);
          //block.enabled=false;
          //--這邊等決定玩家本人後再加入-20230620
          //this._btnMini.on(Node.EventType.TOUCH_START,this.handelClick);
          //this._btnPlus.on(Node.EventType.TOUCH_START,this.handelClick);
          //--test--

          this.lock();
        } //--因為在setLayout的時候,資料還沒塞進來準備好


        resetFastBtnData() {
          for (let i = 0; i < this._fastBtnMap.length; i++) {
            this._fastBtnMap[i].id = this._cannonScorePool[i][0]; //--塞資料

            this._fastBtnScores[i].display(this._cannonScorePool[i][0], 'center');
          }
        }

        addBtnClickEvtHandler(button, handsId, sendObj) {
          /**
           * 這邊他媽的非常雷...
           * clickEvent的邏輯-->
           * 1先抓乘載handelClick的node,
           * 2.在往下該node抓乘載的component,
           * 3最後才是抓component裡面的function
           * https://blog.csdn.net/qq_20173207/article/details/115302626
           * 78引擎
           */
          //let guiNode=find('Canvas').getChildByName('CannonGui');
          //log('checkcanvas',guiNode,this);
          let clickEvtHandler = new EventHandler(); //clickEvtHandler._componentId

          clickEvtHandler.target = this.node;
          clickEvtHandler.component = 'Fish1CannonGuiView';
          clickEvtHandler.handler = handsId;
          clickEvtHandler.customEventData = sendObj;
          log('addBtnClickEvtHandler', clickEvtHandler, this.node);
          button.clickEvents.push(clickEvtHandler);
        }

        removeClickEvtHandler(button, handsId) {
          let len = button.clickEvents.length;

          if (len > 0) {
            for (let i = 0; i < len; i++) {
              if (button.clickEvents[i].handler == handsId) {
                button.clickEvents.splice(i, 1);
                break;
              }
            }
          }
        }

        getScoreIndex(value) {
          let r = {
            outIndex: 0,
            innerIndex: 0
          };

          for (let i = 0; i < this._cannonScorePool.length; i++) {
            for (let j = 0; j < this._cannonScorePool[i].length; j++) {
              if (this._cannonScorePool[i][j] == value) {
                r.outIndex = i;
                r.innerIndex = j;
                break;
              }
            }
          }

          return r;
        }

        setuser(b) {
          log('check_setuser', b);

          if (b) {
            this._btnMini.node.active = true;
            this._btnPlus.node.active = true;
            this.addBtnClickEvtHandler(this._btnMini.node.getComponent(Button), 'handelClick');
            this.addBtnClickEvtHandler(this._btnPlus.node.getComponent(Button), 'handelClick');

            for (let i = 0; i < this._fastBtnMap.length; i++) {
              this.addBtnClickEvtHandler(this._fastBtnMap[i].node.getComponent(Button), 'fastBtnClickHandler');
            }

            this._fastBtnSensor.on(Node.EventType.TOUCH_START, this.fastBtnSensorClickHandler);
          } else {
            this._btnMini.node.active = false;
            this._btnPlus.node.active = false;
            this._btnMini.node.getComponent(Button).clickEvents.length = 0;
            this._btnPlus.node.getComponent(Button).clickEvents.length = 0;

            for (let i = 0; i < this._fastBtnMap.length; i++) {
              //this.addBtnClickEvtHandler(this._fastBtnMap[i].node.getComponent(Button),'fastBtnClickHandler');
              this._fastBtnMap[i].node.getComponent(Button).clickEvents.length = 0;
            }

            this._fastBtnSensor.off(Node.EventType.TOUCH_START, this.fastBtnSensorClickHandler);
          }
        }

        lockOrUnlockAllbtnForShowOpen(value) {
          let btnComponent;

          for (let i of this._fastBtnMap) {
            btnComponent = i.node.getComponent(Button);
            btnComponent.enabled = value;
          }

          btnComponent = this._btnMini.node.getComponent(Button);
          btnComponent.enabled = value;
          btnComponent = this._btnPlus.node.getComponent(Button);
          this._fastBtnSensor.active = value;
        }

        updateMaterial() {
          /**
           * 相關shader的流程官方說明:
           * https://docs.cocos.com/creator/3.0/manual/zh/material-system/effect-2.x-to-3.0.html
           * 
           * 完全沒轍,預設的builtin-sprite material只配給一個shader
           * 他不支援多個shader用Technique去指定.
           * 此外,透過copy,getMaterial(0)等方法拿到的clone,
           * 他的material裡面也封住了baseColor屬性QQ(不確定,因為面板沒開出來)
           * 但很神奇,你自己 new一個新的又有baseColor屬性
           * 
           * 照理來說會有以下幾個屬性
           * 'baseColor'：用于设置材质的基础颜色。
              'metallic'：用于设置材质的金属度（metallic）属性。
              'roughness'：用于设置材质的粗糙度（roughness）属性。
              'normalMap'：用于设置材质的法线贴图。
              'occlusionMap'：用于设置材质的遮挡贴图。
              'emissiveMap'：用于设置材质的自发光贴图。
              'opacityMap'：用于设置材质的透明度贴图。
           */
          //if (this._currentWaitMaterial) {

          /*
          const shader = 'builtin-sprite';  // 内置 Sprite 材质的 Shader
          const material = new Material();
          material.initialize({ effectName: shader });
          const color = new Color(1, 1, 1, this._waitVisible);
          material.setProperty('mainColor', color);
          let spr:Sprite=this._waitTip.getComponent(Sprite);
          spr.setMaterial(material,0);
          */

          /*
          let spr:Sprite=this._waitTip.getComponent(Sprite);
          const material = new Material();
          material.copy(this._currentWaitMaterial);
           const color = new Color(1, 1, 1, this._waitVisible);
          material.setProperty('color', color);  // 使用 color 属性来控制透明度
           spr.setMaterial(material,0);
          */

          /*
          let spr:Sprite=this._waitTip.getComponent(Sprite);
          const newMaterial = new Material();
          newMaterial.copy(this._currentWaitMaterial);
           const color = new Color(1, 1, 1, this._waitVisible);
          newMaterial.setProperty('baseColor', color);
           spr.setMaterial(newMaterial,0);
          */
          //}
        }

        update(dt) {
          //return;
          if (this._wholeCannon.isHidden && this._canUpdate) {
            this._timeAccumulator += dt;

            if (this._timeAccumulator >= this._interval) {
              this._timeAccumulator -= this._interval; //log('check_color',this._waitTip.getComponent(Sprite).color);

              this._waitVisible = !this._waitVisible;
              this._waitTip.active = this._waitVisible; //this._waitVisible=1-this._waitVisible;
              //this.updateMaterial();

              /*---更慘~畫更多
              let spr:Sprite=this._waitTip.getComponent(Sprite);
              if(this._waitVisible)
              {
                spr.material=this._spriteMaterial;
              }else{
                spr.material=this._testAlphaMaterial;
              }*/

              /*---一樣也會改變draw call,跟active一樣
              if(this._waitTip.getComponent(Sprite).color.a==255)
              {
                this._waitTip.getComponent(Sprite).color=color(255,255,255,0);
              
              }else{
                 this._waitTip.getComponent(Sprite).color=color(255,255,255,255);
               }*/
            }
          }
        } //--廢棄


        onlyForOpen() {
          /*
          let gunData:{outIndex:number,innerIndex:number}=this.getScoreIndex(this._nowScore);
          //---進場的動作
          this._wholeCannon.changeGun(gunData.outIndex);
          this._cannonBaseMount.changeMount(gunData.outIndex);//---變換炮底座
                  this.changeBulletStyle(this._defaultGunScore);
          */
        } //--20230705-旋轉場景後要處理的砲塔UI顯示


        resetCannonPlayerInfo(tableId) {
          //log('check_resetCannonPlayerInfo',tableId,this.id);
          this.tableIndex = tableId;

          if (tableId == 1 || tableId == 2) {
            //--上轉下
            this.node.getChildByName('playerBar').getChildByName('scoreBox').angle = -math.toDegree(Math.PI); //this.node.getChildByName('playerBar').getChildByName('id').angle=-math.toDegree(Math.PI);

            this._textUserName.node.angle = -math.toDegree(Math.PI);
            this._waitTip.angle = -math.toDegree(Math.PI); //this._waitTip.angle=this._waitTip.angle*-math.toDegree(Math.PI);
          }
        }

        openCannon(isPlayer) {
          //return;
          this.node.getChildByName('cannonBtn').active = true;
          this.node.getChildByName('cannon').active = true;
          this.node.getChildByName('playerBar').active = true;
          this._textUserName.node.active = true; //this._wholeCannon.node.active=true;
          //this._containerBGboard.visible=true;
          //this._btnMini.node.active=true;
          //this._btnPlus.node.active=true;
          //this._textDigitsCannon.node.active=true;
          //this._cannonBaseMount.node.active=true;//--底座--要做進場

          if (this._cannonBaseMount.isHidden) {
            this._cannonBaseMount.isHidden = false;
            this._wholeCannon.isHidden = false;
            let gunData = this.getScoreIndex(this._defaultGunScore); //---進場的動作

            this._wholeCannon.changeGun(gunData.outIndex);

            this._cannonBaseMount.changeMount(gunData.outIndex); //---變換炮底座
            //---這邊要接進場的animation(美術有做)


            this.changeBulletStyle(this._defaultGunScore);
          }

          this.setuser(isPlayer);

          this._cannonBaseMount.setPlayerMount(isPlayer);

          this._cannonBaseMount.closeOrOpenGunVisible(true);

          this._isPlayer = isPlayer;
          /*
          let anumationComponent:Animation=this._waitTip.getComponent(Animation);
          let clips:AnimationClip[]=anumationComponent.clips;
          let aniState:AnimationState;//--檢查所有動畫狀態的物件
          for(let i of clips)
          {
              aniState=anumationComponent.getState(i.name);
              if(aniState.isPlaying)
              {
                  anumationComponent.stop();
              }   
          }
          this._waitTip.active=false;
          */

          this._waitTip.active = false;

          if (!isPlayer) {
            this._btnMini.node.active = false;
            this._btnPlus.node.active = false; //--玩家儲值後的綠色數字
            //this._textAddCreditDitigs.visible=false;
          } else {//this._textAddCreditDitigs.visible=true;
            //this._textAddCreditDitigs.alpha=0;
          }

          if (!this._firsOpenFlag) {
            this._firsOpenFlag = true;
            this.lockOrUnlockAllbtnForShowOpen(false);
            let anumationComponent = this.node.getComponent(Animation);

            if (anumationComponent) {
              let clips = anumationComponent.clips;
              let aniState; //--檢查所有動畫狀態的物件

              for (let j of clips) {
                aniState = anumationComponent.getState(j.name);
                aniState.wrapMode = AnimationClip.WrapMode.Normal; //--播放一次

                anumationComponent.on(Animation.EventType.FINISHED, this.unLockBtnAfterShowOpen);
                anumationComponent.play(j.name);
                log('checkAni_name', aniState);
              }
            }
          }
        } //---要把座位旋轉轉回預設值


        resetCannon() {
          for (let i = 0; i < this._fastBtnMap.length; i++) {
            this._fastBtnMap[i].id = -1; //--塞資料

            this._fastBtnScores[i].display(0, 'center');
          }

          this.setuser(false);
          this.node.getChildByName('cannonBtn').active = true;
          this.node.getChildByName('cannon').active = true;
          this.node.getChildByName('playerBar').active = true;
          this.setPlayerCredit(0);
          this.setPlayerAccoundInfo('');
          this._wholeCannon.node.angle = math.toDegree(Math.sin(0)); //--返回預設

          this._isPlayer = false;
          this._canUpdate = false;
          this._waitVisible = true;
          this._waitTip.active = true;

          if (this.tableIndex == 1 || this.tableIndex == 2) {
            //--上轉下
            this.node.getChildByName('playerBar').getChildByName('scoreBox').angle = 0;
            this._textUserName.node.angle = 0;
            this._waitTip.angle = 0;

            this._textUserName.node.setPosition(v3(this._textUserName.node.position.x, this._textUserName.node.position.y + 40));

            this._waitTip.setPosition(v3(this._waitTip.position.x, this._waitTip.position.y + 40));
          } //this.tableIndex=-1;


          this.lock();
        }

        hideCannon() {
          this._isPlayer = false;
          this._firsOpenFlag = false;
          this.setuser(false);
          this._wholeCannon.node.angle = math.toDegree(Math.sin(0)); //--返回預設

          this._wholeCannon.isHidden = true; //this._containerBGboard.visible=false;
          //this._textDigitsCannon.node.active=false;
          //this._cannonBaseMount.node.active=false;

          this._cannonBaseMount.isHidden = true;

          this._cannonBaseMount.setPlayerMount(false);

          this._cannonBaseMount.closeOrOpenGunVisible(false);

          this.node.getChildByName('cannonBtn').active = false;
          this.node.getChildByName('cannon').active = false;
          this.node.getChildByName('playerBar').active = false;
          this._textUserName.node.active = false; //this._btnMini.node.active=false;
          //this._btnPlus.node.active=false;

          this._waitTip.active = true;
          this._canUpdate = true;
          /*
          this._waitTip.active=true;
          let anumationComponent:Animation=this._waitTip.getComponent(Animation);
          let clips:AnimationClip[]=anumationComponent.clips;
          let aniState:AnimationState;//--檢查所有動畫狀態的物件
          for(let i of clips)
          {
              aniState=anumationComponent.getState(i.name);
              //aniState.wrapMode=AnimationClip.WrapMode.Normal;//--指播放一次
              aniState.wrapMode=AnimationClip.WrapMode.Loop;//--指播放一次
              
              //anumationComponent.on(Animation.EventType.FINISHED,(e)=>
              //{
              //   log('ani_finished');
              //});
              anumationComponent.play(i.name);
               log('checkAni_name',aniState);
          }
          //anumationComponent.getState()
          log('checkAnimation_clip',aniState);
          */
          //--回歸預設值

          this.changeBulletStyle(this._defaultGunScore);
        }

        lock() {
          if (this._isPlayer) {
            this._btnMini.node.getComponent(Button).interactable = false; //-
            //--好像沒用
            //this._btnMini.getComponent(BlockInputEvents).enabled=true;

            this._btnPlus.node.getComponent(Button).interactable = false; //this._btnPlus.getComponent(BlockInputEvents).enabled=true;

            for (let i = 0; i < this._fastBtnMap.length; i++) {
              this._fastBtnMap[i].node.getComponent(Button).interactable = false;
            }

            log('block click evt'); //this._btnPlus.getComponent(Button).enabled=false;
          }
        }

        unlock() {
          if (this._isPlayer) {
            this._btnMini.node.getComponent(Button).interactable = true;
            this._btnPlus.node.getComponent(Button).interactable = true;

            for (let i = 0; i < this._fastBtnMap.length; i++) {
              this._fastBtnMap[i].node.getComponent(Button).interactable = true;
            }
          }
        }
        /**
         * 20231123 上所使用道具厚特定的炮分跟快速選單的炮分按鈕
         * @param scoreVale 特定的炮分
         */


        lockPropBtn(scoreVale) {
          return;
          this._btnPlus.node.getComponent(Button).interactable = false;
          this._btnPlus.node.getComponent(FastBtn).isLock = true; //-_fastBtnMap
          //this._cannonScorePoolRealData=scorePool
          //this._cannonScorePool=scorePool;---old-20231123
          //this._cannonScorePool=GameUtils.deepCloneForObject(this._cannonScorePoolRealData);
          //this._currentOutUseingLen=scorePool.length;

          this._cannonScorePool = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).deepCloneForObject(this._cannonScorePoolRealData); // 逐一检查数组元素

          this._cannonScorePool = this._cannonScorePool.filter(subArray => {
            // 若数组元素中存在大于变量的值，则移除该元素中大于变量值的元素
            for (let i = 0; i < subArray.length; i++) {
              if (subArray[i] > scoreVale) {
                subArray.splice(i, 1);
                i--; // 调整索引以避免跳过元素
              }
            } // 若删除元素后子数组长度为0，则移除该子数组


            return subArray.length > 0;
          });
          this._currentOutUseingLen = this._cannonScorePool.length;
          log('after_lockPropBtn_scorePool', this._fastBtnMap, this._cannonScorePool, this._currentOutUseingLen, scoreVale); //--將分數大於前使用道具的炮分上鎖

          for (let k = 0; k < this._fastBtnMap.length; k++) {
            if (this._fastBtnMap[k].id > scoreVale) {
              this._fastBtnMap[k].node.getComponent(Button).interactable = false; //-

              this._fastBtnMap[k].node.getComponent(FastBtn).isLock = true; //this._fastBtnMap[k].node.active=false;//--for test
              //log('runLock_',this._fastBtnMap[k].id);
            }
          }
        } //---解除使用道具而鎖定特定炮的分數(全部道具cd結束再執行)


        unlockPropBtn() {
          return;
          this._btnPlus.node.getComponent(Button).interactable = true;
          this._btnPlus.node.getComponent(FastBtn).isLock = false;
          this._cannonScorePool = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).deepCloneForObject(this._cannonScorePoolRealData);
          this._currentOutUseingLen = this._cannonScorePool.length; //--將分數大於前使用道具的炮分上鎖

          for (let k = 0; k < this._fastBtnMap.length; k++) {
            this._fastBtnMap[k].node.getComponent(Button).interactable = true;
            this._fastBtnMap[k].node.getComponent(FastBtn).isLock = false;
          }
        }

        setPlayerAccoundInfo(accoundId) {
          //this._containerBGboard.visible=true;
          this._textUserName.string = accoundId;
          /*
          if(accoundId.indexOf('y')!=-1 || accoundId.indexOf('q')!=-1 || accoundId.indexOf('j')!=-1 || accoundId.indexOf('g')!=-1)
          {
              this._textUserName.style.fontSize='25PX';
           }else if(accoundId.length<8)
          {
              this._textUserName.style.fontSize='30PX';
          }*/
        }

        setPlayerCredit(value) {
          // 測試看看將共用邏輯放在公版的使用情況如何
          log('whatFuck_setPlayerCredit', value); //const numeric = window.util.numeric;
          //this._textUserCredit.string = numeric.prettify.numberWithComma(value)

          if (value >= 0) {
            this._textUserCredit.displayWithStr((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).addCommas(value + ''), 'center');
          }
        } //--只做一次


        setCannonScoreInfo(bulletInfo, scorePool, defaultGunScore) {
          this._cannonScorePoolRealData = scorePool; //this._cannonScorePool=scorePool;---old-20231123
          //this._cannonScorePool=GameUtils.deepCloneForObject(this._cannonScorePoolRealData);

          this._cannonScorePool = scorePool; //--已經取消上鎖道具限制分數

          this._currentOutUseingLen = scorePool.length;

          this._wholeCannon.setGunDataInfo(bulletInfo, scorePool.length); //--初始砲塔---


          this._defaultGunScore = defaultGunScore;
          log('check_setCannonScoreInfo_Data', this._cannonScorePoolRealData, this._cannonScorePool);
          log('setCannonScoreInfo_changeBulletStyle', this._defaultGunScore, bulletInfo);
          this.resetFastBtnData();
          this.changeBulletStyle(defaultGunScore);
        }
        /**
        * 變更砲台的樣式(分數與砲台改變)--PS--用在非玩家本身所擊發的子彈
        * 單純的改變砲塔的樣式
        * @param index 玩家座位(陣列的紀錄方式~由0開始)
        * @param score 砲的樣式,直接放入倍率
        */


        changeBulletStyle(score) {
          let gunData = this.getScoreIndex(score); //let gunStr:string=this._wholeCannon.changeGun(gunData.outIndex);

          let gunStr = this._wholeCannon.getGunType(gunData.outIndex);

          log('changeBulletStyle', score, this._nowScore, gunData); //if(this._nowScore!=score)//--不一樣再換

          if (!this.firstInitCannonInfo || this._outLayerScoreIndex != gunData.outIndex) //--不一樣再換
            {
              if (!this.firstInitCannonInfo) {
                this.firstInitCannonInfo = true;
              }

              gunStr = this._wholeCannon.changeGun(gunData.outIndex);

              this._cannonBaseMount.changeMount(gunData.outIndex); //---變換炮底座


              this._outLayerScoreIndex = gunData.outIndex;
              this._innerLayerScoreIndex = gunData.innerIndex;
              this._currentInnerUseingLen = this._cannonScorePool[gunData.outIndex].length;
              this._nowScore = score; //this._textDigitsCannon.string=this._cannonScorePool[this._outLayerScoreIndex][this._innerLayerScoreIndex]+'';

              this._textDigitsCannon.display(this._cannonScorePool[this._outLayerScoreIndex][this._innerLayerScoreIndex], 'center');

              log('check_changeBulletStyle');
            }

          return gunStr + '_' + gunData.outIndex + '_' + gunData.innerIndex + '_' + this._wholeCannon.nowSystem;
        }
        /**
         * 
         * @param value 玩家新兌換的餘額(綠色字體)
         */


        depositGameCredit(value) {
          /*    
          this._textAddCreditDitigs.displayWithStr('+'+value,"center");
          this._textAddCreditDitigs.alpha=0;
          this._textAddCreditDitigs.visible=true;
          let endPosition:number=this._ogDigitsAddCreditPosition.y+20;
          if(this._isPlayer && this._soundGetExchange!='')
          {
              SoundsManager.SoundsManagerCore.getInstance().play(this._soundGetExchange);
          }
               
              
          TweenMax.to(this._textAddCreditDitigs,0.5,
          {
              y:endPosition,
              alpha:1,
              onComplete:()=>
              {
                  TweenMax.delayedCall(0.3,()=>{
                              
                      this._textAddCreditDitigs.visible=false
                      this._textAddCreditDitigs.position.set(this._ogDigitsAddCreditPosition.x,this._ogDigitsAddCreditPosition.y);  
                      })
              }
          })*/
        }

        rotationCannon(x, y) {
          /**
          * https://stackoverflow.com/questions/49121742/html5-canvas-atan2-off-by-90-degrees
          * 修正篇移,因為物件的起始軸像是向上的,對atan2來說就是負數
          * 把圖片擺向右邊變成正X向量即可不需添加math.pi/2
          * 就是sin(0)跟flash不同,他是指著正上方,H5是指向右邊水平的位置
          * https://jsfiddle.net/0pgnq82m/
          * https://www.jianshu.com/p/9817e267925a
          * 
          */

          /*
          let testNode:Node=new Node();
          let graphic:Graphics=testNode.addComponent(Graphics);
          //-graphic 不受到UIOpacity組件影響~有夠78(coloc 0-255)
          graphic.fillColor=color(255,255,255,128);
          graphic.rect(-50,-50,100,100);
          graphic.fill();
          testNode.layer=Layers.Enum.UI_2D;
           this.node.addChild(testNode);
          
          let mouseCamera=find('Canvas/CameraGUI').getComponent(CameraComponent);
           let wpos=mouseCamera.getComponent(CameraComponent).screenToWorld(v3(x,y));
          
          let lpos=this.node.getComponent(UITransform).convertToNodeSpaceAR(wpos); 
           testNode.setPosition(lpos);
          */
          log('checkanchorPointQQ', this._wholeCannon.node.getComponent(UITransform), x, y); //--old
          //let bulletLocalPoint:Vec3=this.node.getComponent(UITransform).convertToNodeSpaceAR(v3(x,y));
          //let wpos=this._transformCameraComponent.screenToWorld(v3(x,y));

          let bulletLocalPoint = this.node.getComponent(UITransform).convertToNodeSpaceAR(v3(x, y));
          let radians = Math.atan2(bulletLocalPoint.y - this._wholeCannon.node.position.y, bulletLocalPoint.x - this._wholeCannon.node.position.x);
          log('check_cannonRotation', radians); //-angle=角度(degree)

          /**
           * 20230703-
           * 在pixijs當中的座標xy是向右向下累加
           * 但是在coco creator中座標是向右向上累加
           * 所以從math.atan2取得向右座標後,原本要加上的math.PI/2,
           * 在cocos creator中是要變成減去math.Pi/2
           * 
           */
          //radians=Math.PI*0;//--右邊水平
          //radians=-Math.PI;//--左邊水平
          //radians=Math.PI/2;//--中間邊水平
          //--限制旋轉角度0(右邊水平)~180(左邊水平)之間

          if (radians > -Math.PI && radians < -1) {
            radians = -Math.PI;
          } else if (radians < 0 && radians > -1) {
            radians = 0;
          }

          let degree = radians * 180 / Math.PI;
          log('check_rotationDegree', Math.PI, radians, degree);
          let offestSinZero = Math.PI / 2 * 180 / Math.PI;
          this._wholeCannon.node.angle = degree - offestSinZero; //--(-135(約-2.451556537094754)~-49(約-0.78946869722477))
          //--(-150(約-2.6206568900298723)~-30(約-0.5347546026816803))
          //log('check_rotationDegree',Math.PI/3.5,radians,radians*180/Math.PI);

          /*
          if(radians*180/Math.PI<-155)
          {
              radians=-155*Math.PI/180;
              
          }else if(radians*180/Math.PI>-35){
                  
              radians=-35*Math.PI/180;
          }*/
          //--play gun motion

          /*
          if(this._isPlayer && this._soundShoot!='')
          {
                 
              if(!SoundControl._isMute)
              {
                  let s:SoundsManager.BasicSound=SoundsManager.SoundsManagerCore.getInstance().getSound(this._soundShoot);
                  s.setVolume(.4);
                  SoundsManager.SoundsManagerCore.getInstance().play(this._soundShoot);
              }        
          }*/

          this._wholeCannon.shootMotion();
        } //--子彈發射的座標


        getCannonPosition() {
          //log('@@checkRotation_after',this._wholeCannon.rotation);
          let global = this.node.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(this._wholeCannon.node.position.x, this._wholeCannon.node.position.y, 0));

          let g = this._wholeCannon.getShootCenterPositiontoGlobal();

          let local = this.node.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(g.x, g.y, 0));
          let shootCenterGlobal = this.node.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(local.x, local.y, 0));

          let containSizeData = this._wholeCannon.getComponent(UITransform).contentSize;
          /*
          let global:PIXI.Point=this.toGlobal(new PIXI.Point(this._wholeCannon.x,this._wholeCannon.y));
          let g:PIXI.Point=this._wholeCannon.toGlobal(new PIXI.Point(this._wholeCannon['shootCenter'].x,this._wholeCannon['shootCenter'].y));
          let local:PIXI.Point=this.toLocal(new PIXI.Point(g.x,g.y));
          let shootCenterGlobal=this.toGlobal(new PIXI.Point(local.x,local.y));
          */


          return {
            p: global,
            r: shootCenterGlobal,
            h: containSizeData.height
          };
        }
        /**
        * 前幾代為取得玩家資訊列上面的錢幣位置資訊(座標,寬高),供噴錢動畫使用
        * 第六代直接取砲台中心點為依據
        * 送出為global坐標系
        */


        getCreditCoinPosition() {
          let coinNode = this.node.getChildByName('playerBar').getChildByName('scoreBox').getChildByName('coin');
          let coinContainSizeData = coinNode.getComponent(UITransform).contentSize; //let gp:Vec3=coinNode.getComponent(UITransform).convertToWorldSpaceAR(v3(coinNode.position.x,coinNode.position.y));

          let gp = this.node.getChildByName('playerBar').getChildByName('scoreBox').getComponent(UITransform).convertToWorldSpaceAR(v3(coinNode.position.x, coinNode.position.y)); //log('check_playerBar',coinNode); 

          return {
            x: gp.x,
            y: gp.y,
            width: coinContainSizeData.width,
            height: coinContainSizeData.height
          };
        }
        /**
         * 取得玩家顯示credit欄位的資訊
         * @returns 
         */


        getPlayerTextDigitsInfoData() {
          let creditTextNode = this.node.getChildByName('playerBar').getChildByName('scoreBox').getChildByName('score');
          let coinContainSizeData = creditTextNode.getComponent(UITransform).contentSize;
          let gp = creditTextNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(creditTextNode.position.x, creditTextNode.position.y, 0)); //let containerData:PIXI.Container=<PIXI.Container>this._textUserCredit.getChildAt(0);
          //let gp:PIXI.Point=this._containerBGboard.toGlobal(new PIXI.Point(this._textUserCredit.x,this._textUserCredit.y));

          return {
            x: gp.x,
            y: gp.y,
            width: coinContainSizeData.width,
            height: coinContainSizeData.height
          };
        } //--子彈的發射點


        getWholeCannonTopPositions() {
          let gp = this.node.getComponent(UITransform).convertToWorldSpaceAR(new Vec3( //--因為美術的將裡面的原件
          //-砲管放在position(0,48),anchor point(0.5,0);
          //-砲座放在position(0,18),anchor point(0.5,0.5);
          this._wholeCannon.node.position.x, this._wholeCannon.node.position.y, 0)); //let topContainer:PIXI.Container=this._wholeCannon.containerGun;

          /*
          let gp:Vec3=this._wholeCannon.toGlobal(new PIXI.Point(
              topContainer.x+this._wholeCannon.gunContainerMaxWH.w/2,
              topContainer.y
          ))*/

          return {
            x: gp.x,
            y: gp.y
          };
        } //--speine在用的 


        getWholeCannonMountPositions() {
          return this._cannonBaseMount.getAllMountPositionInfo();
        }

        isChanging() {
          return this._wholeCannon.isChanging();
        } //--變化炮座的動作姿態


        playMountMotion(keyframe, loop, timeScale = 1, reverse = false) {
          return this._cannonBaseMount.playMotion(keyframe, loop, timeScale, reverse);
        } //--取得玩家的位置(就是裝砲管+底座的那個node)


        getPlayerPositions() {
          let r = {
            x: 0,
            y: 0
          };
          let cannonNode = this.node.getChildByName('cannon');
          let gp = cannonNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(cannonNode.position.x, cannonNode.position.y, 0));
          r.x = gp.x;
          r.y = gp.y;
          return r;
        }

      }) || _class4);

      _export("Fish1CannonGuiView", Fish1CannonGuiView = class Fish1CannonGuiView extends (_crd && GuiBasic === void 0 ? (_reportPossibleCrUseOfGuiBasic({
        error: Error()
      }), GuiBasic) : GuiBasic //export class CannonGui extends Component
      ) {
        //--20190305 進入遊戲預設炮分
        //--以上4個變數是測試用(砲塔的初始分數資料)----
        //--step1-設定預設分數-
        set defaultGunScore(value) {
          this._defaultGunScore = value;
          log('set__defaultGunScore', value);
        }

        constructor() {
          super();
          this._canvas = void 0;
          this._playerWholeNode = void 0;
          this._aryAllCannon = void 0;
          //--以下4個變數是測試用(砲塔的初始分數資料)----
          this._aryActionInfo = void 0;
          //---成就系統的資料
          this._aryAchievementActionInfo = void 0;
          //---2020-05-25-bullet point pool
          this._aryScorePool = void 0;
          this._defaultGunScore = void 0;

          this.changeGunHandler = e => {
            log('check_cannonGui_Event_changeBullet'); //this.emit(GUIEvent.CHANG_BULLETS,e);

            (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
              error: Error()
            }), Notifycation) : Notifycation).getInstance().emitSync((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
              error: Error()
            }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).CHANG_BULLETS, e);
          };

          this._aryAllCannon = [];
        } //--override--step1
        //--do something before u do super.setData(value);


        setData(value) {
          log('cannonGUI', value, this._canvas);
          super.setData(value);
        } //--override--step2
        //--do something about initGuiData


        init() {} //--override--step3
        //--layout ur gui


        async setLayout() {
          //let c=director.getScene();
          return new Promise(resolve => {
            this._playerWholeNode = find('Canvas/playerUI');
            this._playerWholeNode.getComponent(UIOpacity).opacity = 0;

            let playerNodes = this._playerWholeNode.getChildByName('player');

            let nodesForCannons = playerNodes.children; //log('check_allNode',this._playerWholeNode);
            //let test2=assetManager.assets;//--它會讀整張進來然後拆掉cach住,

            let waittingNodes = find('Canvas/waittingText').children;
            let playerNameNodes = find('Canvas/PlayerNameText').children;
            log('check_waittingNode', waittingNodes);
            let wc; //let nodeCannon:Node;
            //for(const item of nodesForCannons)
            //let cameraComponent=find('Canvas/CameraGUI').getComponent(CameraComponent);

            for (let i = 0; i < nodesForCannons.length; i++) {
              nodesForCannons[i].addComponent(UITransform); //-座標轉換需要用到的

              wc = nodesForCannons[i].addComponent(WholeCannon);
              wc.soundSwitch = 'sounds/switch_weapon';

              this._aryAllCannon.push(wc);

              wc.id = i;
              let sprWaitting = waittingNodes[i].getComponent(Sprite);
              sprWaitting.spriteFrame = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                error: Error()
              }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames('tx_wait')[0];
              wc.waitTip = waittingNodes[i];
              wc.textUserName = playerNameNodes[i].getComponent(Label);
              wc.setLayout(nodesForCannons[i]); //wc.transformCameraComponent=cameraComponent;

              nodesForCannons[i].on((_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                error: Error()
              }), GUIEvent) : GUIEvent).CHANG_BULLETS, this.changeGunHandler);
            } //---完成的時候做


            resolve();
          });
        } //--override--step4
        //--do something after layoutgui


        layoutComplete() {
          log('GuiTest1 finish layout');
        }

        /**
        * step2-設定炮座資訊-預設炮分會在這邊換好
        * @param bulletInfo 子彈資訊(取systemId,作為產生子彈類型的依據)
        * @param scorePool 換炮分的分數資訊
        */
        setCannonInfo(bulletInfo, scorePool) {
          //---create cannon
          //log('setCannonInfo_bulletInfo',bulletInfo,'scorePool',scorePool);
          //--送出來的資訊->BulletImage(子彈樣式,2D/3D)_0_1(漁網與效果索引)_0(成就系統或是將來有的沒得系統ex成就的子彈)
          //--把索引資訊丟進來子彈會去找到對應的
          //-BulletImage_0(外層索引)_1(內層索引)_0(目前系統)
          //--bulletInfo[0]=一般系統
          //--bulletInfo[1]=特殊系統(以此類推)
          let len = this._aryAllCannon.length;
          log('check_setCannonInfoData', len, this._defaultGunScore);

          for (let i = 0; i < len; i++) {
            this._aryAllCannon[i].setCannonScoreInfo(bulletInfo, scorePool, this._defaultGunScore);
          }
        }
        /**
        * step4-設定房間內座位資訊-(每次座位異動都會設定)
        */
        //public setRoomData(room:TableInfo[] ,uid:string):void


        setRoomData(room, uid) {
          let len = room.length;
          log('check_setRoomData', room);

          for (let i = 0; i < len; i++) {
            //if(room[i].userID==uid)
            if (room[i].isPlayer) {
              /**
               * <玩家本身>.
               * 因為每次房間異動server都會送整個房間的資料而不適單獨的該次玩家資料
               */
              if (this._aryAllCannon[i].userId != room[i].userID) {
                this._aryAllCannon[i].userId = room[i].userID;

                this._aryAllCannon[i].openCannon(true);

                this._aryAllCannon[i].setPlayerAccoundInfo(room[i].userLoginName);

                this._aryAllCannon[i].setPlayerCredit(room[i].credit);
              }
            } else {
              if (room[i].userID == 0) {
                //--空桌
                this._aryAllCannon[i].firstInitCannonInfo = false;

                this._aryAllCannon[i].hideCannon();

                this._aryAllCannon[i].userId = 0; //--離開會設定為預設炮分
              } else {
                if (this._aryAllCannon[i].userId != room[i].userID) {
                  //--其他玩家
                  this._aryAllCannon[i].userId = room[i].userID;

                  this._aryAllCannon[i].openCannon(false);

                  this._aryAllCannon[i].setPlayerAccoundInfo(room[i].userLoginName);

                  this._aryAllCannon[i].setPlayerCredit(room[i].credit);
                }
              }
            }
          }

          this._playerWholeNode.getComponent(UIOpacity).opacity = 255;
        }

        cleanAllRoom() {
          for (let i = 0; i < this._aryAllCannon.length; i++) {
            if (this._aryAllCannon[i].tableIndex == 1 || this._aryAllCannon[i].tableIndex == 2) {
              let cannonNode = this._playerWholeNode.getChildByName('player');

              let index = i + 1;
              let playerNodes = cannonNode.getChildByName('player' + index);
              playerNodes.setPosition(v3(playerNodes.position.x, playerNodes.position.y + 40));
            }

            this._aryAllCannon[i].resetCannon();

            this._aryAllCannon[i].tableIndex = -1;
            /*
            this._aryAllCannon[i].setPlayerAccoundInfo('');
            
            this._aryAllCannon[i].setPlayerCredit(0);
            
            this._aryAllCannon[i].firstInitCannonInfo=false; 
            */
          }
        }
        /**
        * ---設定玩家換位置後的顯示資訊在陣列當中的位置
        * step5--容器旋轉前準備
        * @param tableId 
        * PS--一般是在這邊做旋轉(1-2-3-4把它分配到對的地方,或是改變整個container的旋轉中心座標)
        * 做完這些後上面才會做coordinatesChange(真正的把這個container做旋轉)
        */


        setPlayerInfoCoordinate(tableId) {
          //--第六代不旋轉座位..故不需異動
          //resetCannonPlayerInfo
          log('check_setPlayerInfoCoordinate@@', tableId);

          for (let i of this._aryAllCannon) {
            i.resetCannonPlayerInfo(tableId);
          }
        }
        /**
         * 旋轉container之後要調整後續的砲塔位置(針對1-2)
         * @param table 1-4
         */


        afterCoordinatesChange(table) {
          log('afterCoordinatesChange', table);

          if (table == 1 || table == 2) {
            //let node:Node=find('Canvas/playerUI');
            //node.setPosition(v3(node.position.x,node.position.y+40));
            let cannonNode = this._playerWholeNode.getChildByName('player');

            let playerIDNode = find('Canvas/PlayerNameText');
            let waittingNode = find('Canvas/waittingText');
            let len = cannonNode.children.length;

            for (let i = 0; i < len; i++) {
              let index = i + 1;
              let playerNodes = cannonNode.getChildByName('player' + index);
              playerNodes.setPosition(v3(playerNodes.position.x, playerNodes.position.y - 40));
              let playerId = playerIDNode.getChildByName('id' + index);
              playerId.setPosition(v3(playerId.position.x, playerId.position.y - 40));
              let wait = waittingNode.getChildByName('watting' + index);
              wait.setPosition(v3(wait.position.x, wait.position.y - 40));
            }
          }
        }
        /**
        * 變更砲台的樣式(分數與砲台改變)--PS--用在非玩家本身所擊發的子彈
        * @param index 玩家座位(陣列的紀錄方式~由0開始)
        * @param score 砲的樣式,直接放入倍率
        */
        //--註解掉的程式是阿芳胡搞的
        //public setGunTypeToCannon(index:number , score:number):void


        changeBulletStyle(index, score) {
          return this._aryAllCannon[index].changeBulletStyle(score);
        }

        depositGameCredit(index, credit) {
          this._aryAllCannon[index].depositGameCredit(credit);
        } //--renewcredit會送進來


        changeScore(value) {
          //this._gui.changeScore(value);
          let len = this._aryAllCannon.length;

          for (var i = 0; i < len; i++) {
            if (value[i].userID != "") {
              this._aryAllCannon[i].setPlayerCredit(value[i].credit);
            } else {
              this._aryAllCannon[i].setPlayerCredit(0);
            }
          }
        }

        rotationCannon(index, x, y) {
          //index=0;//--測試數據
          this._aryAllCannon[index].rotationCannon(x, y);
        }

        getCannonPosition(index) {
          //index=0;//---for test
          log('fish1GuiCannon_getCannonPosition', index);
          return this._aryAllCannon[index].getCannonPosition();
        }

        lockCannon(index) {
          this._aryAllCannon[index].lock();
        }

        unLockCannon(index) {
          this._aryAllCannon[index].unlock();
        }

        lockAllCannon() {
          let len = this._aryAllCannon.length;

          for (let i = 0; i < len; i++) {
            this._aryAllCannon[i].lock();
          }
        }

        unLockAllCannon() {
          let len = this._aryAllCannon.length;

          for (let i = 0; i < len; i++) {
            this._aryAllCannon[i].unlock();
          }
        } //--20231123--使用道具上鎖

        /**
         * 
         * @param index 0-3
         * @param scoreValue gun score
         */


        lockPropBtn(index, scoreValue) {
          log('check_lockPropBtn_gui_', index, scoreValue);

          this._aryAllCannon[index].lockPropBtn(scoreValue);
        } //--20231123--使用道具解鎖

        /**
         * 
         * @param index 0-3
         */


        unlockPropBtn(index) {
          log('check_unlockPropBtn_gui_', index); //if(index!=NaN)
          //{

          this._aryAllCannon[index].unlockPropBtn(); //}

        } //---回傳變化位置的物件名稱  


        playMountMotion(index, data) {
          //playMotion(keyframe,loop,timeScale,reverse);
          log('playMountMotion_cannon', index, data);
          return this._aryAllCannon[index].playMountMotion(data.keyframe, data.loop, data.timeScale, data.reverse);
        }
        /**
        * 
        * @returns 砲台位置global座標
        */


        getGunContainerPosition() {
          let data = [];
          let len = this._aryAllCannon.length;

          for (let i = 0; i < len; i++) {
            data.push(this._aryAllCannon[i].getWholeCannonTopPositions());
          }

          return data;
        }
        /**
        * 前幾代為取得玩家資訊列上面的錢幣位置資訊(座標,寬高),供噴錢動畫使用
        * 第六代直接取砲台中心點為依據
        * 送出為global坐標系
        */


        getCreditCoinPosition() {
          let data = [];
          let len = this._aryAllCannon.length;

          for (let i = 0; i < len; i++) {
            data.push(this._aryAllCannon[i].getCreditCoinPosition());
          }

          return data;
        }
        /**
        * 取得玩家<顯示餘額物件的相關資料(座標/寬高)>
        */


        getPlayerTextDigitsInfoData() {
          let data = [];
          let len = this._aryAllCannon.length;

          for (let i = 0; i < len; i++) {
            data.push(this._aryAllCannon[i].getPlayerTextDigitsInfoData());
          }

          return data;
        } //--取得玩家cannonMount的相關資料(座標/寬高)


        getCannonMountPositions() {
          let data = [];
          let len = this._aryAllCannon.length; //-getWholeCannonMountPositions

          for (let i = 0; i < len; i++) {
            data.push(this._aryAllCannon[i].getWholeCannonMountPositions());
          }

          return data;
        } //--取的所有玩家的座位座標(global)


        getALLPlayerPositions() {
          log('check_data_getALLPlayerPositions', this._aryAllCannon);
          let len = this._aryAllCannon.length;
          let data = []; //-getWholeCannonMountPositions

          for (let i = 0; i < len; i++) {
            let p = this._aryAllCannon[i].getPlayerPositions();

            data.push({
              x: p.x,
              y: p.y
            });
          }

          return data;
        }

        openCannon(index) {
          this._aryAllCannon[index].onlyForOpen();
        } //--20230224---檢查玩家是否正在更換砲管,true就不允許擊發


        isChanging(index) {
          return this._aryAllCannon[index].isChanging();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bc6fd9905ae6665881c0d2589aa77505f8da0d5b.js.map
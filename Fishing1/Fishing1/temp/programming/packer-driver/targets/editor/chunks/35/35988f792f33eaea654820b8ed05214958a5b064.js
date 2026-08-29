System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BulletView, FishBulletEffectCenter, Fish1BulletData, BulletActionType, Fish1BulletPrefabAction, Fish1DynamicBulletPrefabAction, LoadingResManager, TweenMaxCocosPlugin, find, UITransform, viewBind, GuiNotifycationSubbscriptionSubject, Notifycation, GUIEvent, ServerSendCode, GameViewMediatorUserDataKey, GameViewMediatorUser, UIOpacity, v3, Sprite, color, log, SoundsManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, Fish1BulletView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBulletView(extras) {
    _reporterNs.report("BulletView", "../../../framework/logic/views/bulletView/BulletView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstartGlobalPositions(extras) {
    _reporterNs.report("startGlobalPositions", "../../../framework/logic/views/bulletView/BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAddBulletInfo(extras) {
    _reporterNs.report("AddBulletInfo", "../../../framework/logic/views/bulletView/BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectFactoryOption(extras) {
    _reporterNs.report("EffectFactoryOption", "../../../framework/logic/views/bulletView/BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfEffectBase(extras) {
    _reporterNs.report("IfEffectBase", "../../../framework/logic/views/bulletView/BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfEffectFactory(extras) {
    _reporterNs.report("IfEffectFactory", "../../../framework/logic/views/bulletView/BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectOption(extras) {
    _reporterNs.report("EffectOption", "../../../framework/logic/views/bulletView/BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishBulletEffectCenter(extras) {
    _reporterNs.report("FishBulletEffectCenter", "../../../framework/logic/views/bulletView/bulletEffect/BulletEffectCenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1BulletData(extras) {
    _reporterNs.report("Fish1BulletData", "./Fish1BulletData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletSettingData(extras) {
    _reporterNs.report("BulletSettingData", "../../../framework/game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../../../framework/logic/views/bulletView/BulletDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletActionType(extras) {
    _reporterNs.report("BulletActionType", "../../../framework/game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1BulletPrefabAction(extras) {
    _reporterNs.report("Fish1BulletPrefabAction", "./actions/Fish1BulletPrefabAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1DynamicBulletPrefabAction(extras) {
    _reporterNs.report("Fish1DynamicBulletPrefabAction", "./actions/Fish1DynamicBulletPrefabAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbstractBaseBullet(extras) {
    _reporterNs.report("AbstractBaseBullet", "../../../framework/logic/views/bulletView/bulletActions/BulletActionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenMaxCocosPlugin(extras) {
    _reporterNs.report("TweenMaxCocosPlugin", "../../../framework/utils/TweenMaxPlugin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewBind(extras) {
    _reporterNs.report("viewBind", "../../../framework/abstract/mvvm/AbstractView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddbullet(extras) {
    _reporterNs.report("addbullet", "./../../model/Fish1ModelDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject(extras) {
    _reporterNs.report("GuiNotifycationSubbscriptionSubject", "../../../framework/game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifycation(extras) {
    _reporterNs.report("Notifycation", "../../../framework/abstract/mvvm/Notifycation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGUIEvent(extras) {
    _reporterNs.report("GUIEvent", "../../../framework/game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerSendCode(extras) {
    _reporterNs.report("ServerSendCode", "../../../framework/logic/connect/ConnectBaseDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUserDataKey(extras) {
    _reporterNs.report("GameViewMediatorUserDataKey", "../../../framework/logic/gameLogic/FishGameLogicDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUser(extras) {
    _reporterNs.report("GameViewMediatorUser", "../../../framework/logic/gameLogic/FishGameLogicDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundsManager(extras) {
    _reporterNs.report("SoundsManager", "../../../framework/logic/audio/SoundsManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      UITransform = _cc.UITransform;
      UIOpacity = _cc.UIOpacity;
      v3 = _cc.v3;
      Sprite = _cc.Sprite;
      color = _cc.color;
      log = _cc.log;
    }, function (_unresolved_2) {
      BulletView = _unresolved_2.BulletView;
    }, function (_unresolved_3) {
      FishBulletEffectCenter = _unresolved_3.FishBulletEffectCenter;
    }, function (_unresolved_4) {
      Fish1BulletData = _unresolved_4.Fish1BulletData;
    }, function (_unresolved_5) {
      BulletActionType = _unresolved_5.BulletActionType;
    }, function (_unresolved_6) {
      Fish1BulletPrefabAction = _unresolved_6.Fish1BulletPrefabAction;
    }, function (_unresolved_7) {
      Fish1DynamicBulletPrefabAction = _unresolved_7.Fish1DynamicBulletPrefabAction;
    }, function (_unresolved_8) {
      LoadingResManager = _unresolved_8.LoadingResManager;
    }, function (_unresolved_9) {
      TweenMaxCocosPlugin = _unresolved_9.TweenMaxCocosPlugin;
    }, function (_unresolved_10) {
      viewBind = _unresolved_10.viewBind;
    }, function (_unresolved_11) {
      GuiNotifycationSubbscriptionSubject = _unresolved_11.GuiNotifycationSubbscriptionSubject;
    }, function (_unresolved_12) {
      Notifycation = _unresolved_12.Notifycation;
    }, function (_unresolved_13) {
      GUIEvent = _unresolved_13.GUIEvent;
    }, function (_unresolved_14) {
      ServerSendCode = _unresolved_14.ServerSendCode;
    }, function (_unresolved_15) {
      GameViewMediatorUserDataKey = _unresolved_15.GameViewMediatorUserDataKey;
      GameViewMediatorUser = _unresolved_15.GameViewMediatorUser;
    }, function (_unresolved_16) {
      SoundsManager = _unresolved_16.SoundsManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "38d4cMNQgFLJ4qaZk9BrBMF", "Fish1BulletView", undefined);
      /**
       * Created by EricHuang on 2023/9/25.
       */


      //import {viewfun} from '../../../framework/abstract/mvvm/AbstractView';
      __checkObsolete__(['find', 'Node', 'Vec3', 'UITransform', 'Graphics', 'Label']);

      __checkObsolete__(['UIOpacity', 'v3', 'Sprite']);

      __checkObsolete__(['color']);

      __checkObsolete__(['Layers']);

      __checkObsolete__(['v2']);

      __checkObsolete__(['log']);

      //export class Fish1BulletView extends BulletView<Fish1BulletData>{
      //@viewfun('Fish1VM')
      _export("Fish1BulletView", Fish1BulletView = (_dec = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec2 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec3 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec4 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec5 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec6 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, (_class = class Fish1BulletView extends (_crd && BulletView === void 0 ? (_reportPossibleCrUseOfBulletView({
        error: Error()
      }), BulletView) : BulletView) {
        constructor() {
          super();

          //-要監聽model資料改變的變數(名稱與model相同)
          _initializerDefineProperty(this, "_addbullets", _descriptor, this);

          _initializerDefineProperty(this, "_playerTableId", _descriptor2, this);

          _initializerDefineProperty(this, "_mapCannonInfo", _descriptor3, this);

          //-沒有要把資料存下來就直接寫個變數當索引就好了
          _initializerDefineProperty(this, "_refundBullets", _descriptor4, this);

          //-回收子彈
          _initializerDefineProperty(this, "_hitFishs", _descriptor5, this);

          _initializerDefineProperty(this, "_roomStatus", _descriptor6, this);

          this._layer2DBulletsContainer = void 0;

          this.chageBulletFromGui = (sub, value) => {
            //log('Fish1bullet_changeBullet',sub,value[0]);
            this.changeBullet(value[0]);
          };

          /**
          * override it
          * 你可以將sub當作key值,switch case他來做相關的處理
          * @param sub 屬性變數的字串
          * @param value 傳送的資料
          */
          this.modeleChangeHandler = (sub, value) => {
            log('modeleChangeHandler_bulletview_', sub, value);

            switch (sub) {
              case '_addbullets':
                //this._addbullets=this._viewModel['_addbullets'];
                this._addbullets = value[0]; //--do something

                log('addBuFish1bulletView___addbullets', this._addbullets); //this.beforeaddBullets(this._viewModel['_addbullets']);

                this.beforeaddBullets(value[0]);
                break;

              case '_playerTableId':
                //--do something
                //this.playerTableIndex=this._viewModel['_playerTableId'];
                this.playerTableIndex = value[0];
                log('Fish1bulletView__playerTableId', this._playerTableIndex);
                break;

              case '_mapCannonInfo':
                log('Fish1bulletView__mapCannonInfo', value[0]);
                this._mapCannonInfo = value[0]; //log('after__mapCannonInfo',this._mapCannonInfo);

                break;
              //-_refundBullets

              case '_refundBullets':
                log('Fish1bulletView___refundBullets', value[0]); //let removeData=this._viewModel['_refundBullets'];

                this.removeBulletsByIds(value[0]);
                break;

              case '_roomStatus':
                /**
                  *  ps狀態代碼資訊
                     0=正常/一般狀態,
                     1=冰凍,
                     2=金龍來襲,
                     3=金龍死亡(禁止進房)
                  */
                if (value[0].status == 0) {//this.cleanAllLockTarget();
                } else if (value[0].status == 2) {
                  //this.cleanAllLockTarget();
                  //20240301 因為server會接管回收,client不能主動回收(server 沒有lifetime)
                  this.cancelAllLockTarget();
                }

                break;

              case '_hitFishs':
                let targetBullet = this.getBulletByID(value[0].bsn);

                if (targetBullet) {
                  if (!targetBullet.useFishingNets) {
                    this.openfishNet(value[0].bsn);
                  } else {
                    //--張開漁網的把它移除
                    this.setBulletIsDeath(value[0].bsn);
                  }
                }

                break;
            }
          };

          this._classId = 'Fish1BulletView'; //this._layer2DBulletsContainer=find('Canvas/bulletNodeContainer/bulletNode');
          //this._layer2DBulletsContainer.addComponent(this);
        }

        onLoad() {
          super.onLoad();
          this._layer2DBulletsContainer = this.node; //Notifycation.getInstance().on(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.CHANG_BULLETS,this.chageBulletFromGui,this.constructor.name);

          /**
           * 不要用constructor.name..再用Uglify處理後,因為沒辦法設定--keep-fnames
           * 所以function name會被拿掉..很雷20240328
           */

          (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
            error: Error()
          }), Notifycation) : Notifycation).getInstance().on((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
            error: Error()
          }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
            error: Error()
          }), GUIEvent) : GUIEvent).CHANG_BULLETS, this.chageBulletFromGui, this._classId);
        } //--用來塞初始定義的動作庫
        //----使用者自己塞這邊只會塞預設的


        settingActions() {
          this._ifActionClasses[(_crd && BulletActionType === void 0 ? (_reportPossibleCrUseOfBulletActionType({
            error: Error()
          }), BulletActionType) : BulletActionType).BULLET_ACTION_PREFAB] = _crd && Fish1BulletPrefabAction === void 0 ? (_reportPossibleCrUseOfFish1BulletPrefabAction({
            error: Error()
          }), Fish1BulletPrefabAction) : Fish1BulletPrefabAction;
          this._ifActionClasses[(_crd && BulletActionType === void 0 ? (_reportPossibleCrUseOfBulletActionType({
            error: Error()
          }), BulletActionType) : BulletActionType).BULLET_ACTION_DYNAMIC] = _crd && Fish1DynamicBulletPrefabAction === void 0 ? (_reportPossibleCrUseOfFish1DynamicBulletPrefabAction({
            error: Error()
          }), Fish1DynamicBulletPrefabAction) : Fish1DynamicBulletPrefabAction;
        }

        cleanTable() {
          let b;

          for (let i = 0; i < this._aryBullets.length; i++) {
            b = this._aryBullets[i];
            b.lockFishTarget = 0;
            b.useProp = 0;
            b.isDead = true;

            if (b.state == 1) {
              if (b.isTweening) {
                let tweenComponent = b.bulletShell.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                  error: Error()
                }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

                if (tweenComponent) {
                  TweenMax.killTweensOf(tweenComponent);
                }
              }

              let factorOption = {
                effectObjType: b.effectFactoryID
              };
              let effect2DFactory = (_crd && FishBulletEffectCenter === void 0 ? (_reportPossibleCrUseOfFishBulletEffectCenter({
                error: Error()
              }), FishBulletEffectCenter) : FishBulletEffectCenter).getInstance().getEffectProduceFactory(factorOption);
              let effectData = b.bulletEffect[0];

              this._layer2DBulletsContainer.removeChild(b.bulletShell);

              let recycleData = effectData.clean();
              effect2DFactory.recyclePrefab(recycleData.id, recycleData.node);
              effect2DFactory.pushEffectBase(effectData); //-effectObj
            }

            b.bulletEffect.length = 0;
            b.collisions.length = 0;

            this._aryBullets.splice(i, 1);

            if (this._aryBulletsPool.length >= 300) {
              b = null;
            } else {
              b.clean();

              this._aryBulletsPool.push(b);
            } //--回收子彈
            //this._viewModel.sendServer(ServerSendCode.hitFish,{id:b.id,fid:-1});


            i = i - 1;
          }
        } //--override


        removeBullets() {
          let b;

          for (let i = 0; i < this._aryBullets.length; i++) {
            b = this._aryBullets[i];

            if (b.isDead) {
              if (b.state == 1) {
                if (b.isTweening) {
                  let tweenComponent = b.bulletShell.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                    error: Error()
                  }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

                  if (tweenComponent) {
                    TweenMax.killTweensOf(tweenComponent);
                  }
                }

                let factorOption = {
                  effectObjType: b.effectFactoryID
                };
                let effect2DFactory = (_crd && FishBulletEffectCenter === void 0 ? (_reportPossibleCrUseOfFishBulletEffectCenter({
                  error: Error()
                }), FishBulletEffectCenter) : FishBulletEffectCenter).getInstance().getEffectProduceFactory(factorOption);
                let effectData = b.bulletEffect[0];

                this._layer2DBulletsContainer.removeChild(b.bulletShell); //effectData.clean();


                let recycleData = effectData.clean();
                effect2DFactory.recyclePrefab(recycleData.id, recycleData.node);
                effect2DFactory.pushEffectBase(effectData); //-effectObj
              } //--for test--20240227

              /*
              if(b.show)
              {
                  this._layer2DBulletsContainer.removeChild(b.show);
                  b.show=null;
              }*/
              //b.bulletContainer=null;


              b.bulletEffect.length = 0;
              b.collisions.length = 0;

              this._aryBullets.splice(i, 1);

              if (this._aryBulletsPool.length >= 300) {
                b = null;
              } else {
                b.clean();

                this._aryBulletsPool.push(b);
              }

              i = i - 1;
            }
          }
        } //--override--


        addBullet(bullets) {
          //--test--

          /*
          let testNode:Node=new Node();
          let graphic:Graphics=testNode.addComponent(Graphics);
          //-graphic 不受到UIOpacity組件影響~有夠78(coloc 0-255)
          graphic.fillColor=color(255,255,255,128);
          graphic.rect(-50,-50,100,100);
          graphic.fill();
          testNode.layer=Layers.Enum.UI_2D;
          this._layer2DBulletsContainer.addChild(testNode);
          testNode.setPosition(v3(bullets[0].mouse2D.x,bullets[0].mouse2D.y));
           let testNode2:Node=new Node();
          let graphic2:Graphics=testNode2.addComponent(Graphics);
          //-graphic 不受到UIOpacity組件影響~有夠78(coloc 0-255)
          graphic2.fillColor=color(247,237,15,128);
          graphic2.rect(-50,-50,100,100);
          graphic2.fill();
          testNode2.layer=Layers.Enum.UI_2D;
          this._layer2DBulletsContainer.addChild(testNode2);
          testNode2.setPosition(v3(bullets[0].emitter2D.x,bullets[0].emitter2D.y));
          */
          //--test--
          let len = bullets.length; //let aryBullets:Bullet[]=[];

          let aryBullets = {};
          aryBullets[(_crd && BulletActionType === void 0 ? (_reportPossibleCrUseOfBulletActionType({
            error: Error()
          }), BulletActionType) : BulletActionType).BULLET_ACTION_DYNAMIC + ''] = [];
          aryBullets[(_crd && BulletActionType === void 0 ? (_reportPossibleCrUseOfBulletActionType({
            error: Error()
          }), BulletActionType) : BulletActionType).BULLET_ACTION_PREFAB + ''] = [];
          log('fish1BulletView_addBullet', bullets);

          for (let i = 0; i < len; i++) {
            let aryAction = bullets[i].actionId.split("_"); //BulletImage_2_4_0(actionId的樣子,BulletImage會改成number)

            let id = aryAction[0]; //--子彈動作與外皮

            let effectId;
            let systemIndex = aryAction[aryAction.length - 1];
            let aryTargetBullet;

            if (systemIndex == '1') {//--成就系統的子彈
            } else {
              //---一般系統的子彈
              effectId = Number(aryAction[1]); //--子彈的樣式index  
            } //--取得子彈設定資料


            let obj = this.getActionInfo(id, effectId, systemIndex);
            let amount = obj.amount;
            let systemId = obj.systemId; //let effectId:number=0; 
            //let sound:string=obj.sound; 

            let system2Dor3D = obj.system2Dor3D; //--這邊先用prefab的id

            let effect2DAssetsID = obj.effect2DAssetsID;
            let strFishNetId = obj.strFishNetId;
            let collisionW = obj.collisionW;
            let collisionH = obj.collisionH;
            let fishNetW = obj.fishNetW;
            let fishNetH = obj.fishNetH;
            let lifeTime = obj.lifeTime;
            let speed = obj.speed;
            let fps = obj.fps;
            let effectFishNetAtlasID = obj.effectFishNetAtlasID;
            log('check_addbullet_obj_bulletsys::' + '\n' + 'obj_', obj, '\n' + 'aryAction::', aryAction, '\n' + 'id::', id, '\n' + 'bullets::', bullets[i], '\n' + '_mapIfaction::', this._mapIfaction); //-(4) ['0', '1', '0', '0']0: "0"1: "1"2: "0"3: "0"length: 4[[Prototype]]: Array(0) 0

            if (obj) {
              let ifAction; //--舊版的捕魚達人1,鎖定是要使用道具,現在已經移到常規功能20230816
              //if(bullets[i].prop!=0 || bullets[i].lockTarget!=-1)

              if (bullets[i].lockTarget != -1) {
                id = (_crd && BulletActionType === void 0 ? (_reportPossibleCrUseOfBulletActionType({
                  error: Error()
                }), BulletActionType) : BulletActionType).BULLET_ACTION_DYNAMIC + '';
              } //-找尋子彈的動作系統


              if (!this._mapIfaction[id]) {
                ifAction = new this._ifActionClasses[id]();
                this._mapIfaction[id] = ifAction;
                log('check_map_mapIfaction', id, this._mapIfaction, this._ifActionClasses); //ifAction.collisionContainer=this._collisionContainer;

                ifAction.container = this._layer2DBulletsContainer;
                ifAction.initEmitter();
              } else {
                ifAction = this._mapIfaction[id];
              }

              aryTargetBullet = aryBullets[id];
              let b = this._aryBulletsPool.length > 0 ? this._aryBulletsPool.pop() : new (_crd && Fish1BulletData === void 0 ? (_reportPossibleCrUseOfFish1BulletData({
                error: Error()
              }), Fish1BulletData) : Fish1BulletData)();
              b.init(system2Dor3D);
              b.lockFishTarget = bullets[i].lockTarget; //---鎖定目標魚隻-2017/02/10

              b.lifeTime = lifeTime;
              b.speed = speed; //b.originalSensorSize={w:collisionW,h:collisionH};
              //b.collisionfishingNetAreaInfo={w:fishNetW,h:fishNetH};

              b.id = bullets[i].bulletId;
              b.amount = amount; //--20181016

              b.isPlayerTarget = bullets[i].isPlayer; //--beforeaddBullets判斷完了

              b.useProp = bullets[i].prop; //---使用道具-2017/02/10

              b.lockFishTarget = bullets[i].lockTarget;
              b.table = bullets[i].tableID;
              /*
              b.lockDragonId=bullets[i].dragon;//---鎖定的龍20220930
              b.isFree=bullets[i].isFree;
              b.isDrill=bullets[i].isDrill;
              */

              /*
              變色資訊 for test
              if(bullets[i].c)
              {
                  b.testColor=bullets[i].c;
              }*/

              if (b.state == 1) {
                //--2D的子彈
                b.ePosition.x = bullets[i].mouse2D.x;
                b.ePosition.y = bullets[i].mouse2D.y;
                b.position.x = bullets[i].emitter2D.x;
                b.position.y = bullets[i].emitter2D.y;
                let assetsId = '';
                let strNet = '';

                if (bullets[i].isCrazy) {
                  //---狂暴狀態
                  assetsId = effect2DAssetsID + "_crazy"; //obj.effectId="crazy_"+effectId;

                  strNet = strFishNetId + "_crazy";
                } else {
                  assetsId = effect2DAssetsID; //---一般狀態

                  strNet = strFishNetId; //--漁網
                }

                log('addBullet_check_crazy_', bullets, assetsId, strNet);
                b.strFishNetId = strNet; //--漁網

                if (effectFishNetAtlasID != '' && effectFishNetAtlasID != undefined) {
                  b.effectFishNetAtlasID = effectFishNetAtlasID;
                } //--找彈殼的效果(先暫時這樣,要在擴增(要去判斷要取哪個變數))


                let factoryOption = {
                  prefabId: assetsId
                };
                let effect2DFactory = (_crd && FishBulletEffectCenter === void 0 ? (_reportPossibleCrUseOfFishBulletEffectCenter({
                  error: Error()
                }), FishBulletEffectCenter) : FishBulletEffectCenter).getInstance().getEffectProduceFactory(factoryOption); //-EffectOption

                let effectOption = {
                  id: b.id,
                  prefab: (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                    error: Error()
                  }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(assetsId),
                  fps: fps,
                  assetsId: assetsId
                };
                b.bulletEffect = [];
                b.bulletEffect.push(effect2DFactory.createEffect(effectOption));
                b.actionEffectID = effect2DFactory.strSystemId; //--閃電再用的2020-05-25

                b.effectFactoryID = effect2DFactory.strSystemId; //---play audio

                if (b.isPlayerTarget) {
                  (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
                    error: Error()
                  }), SoundsManager) : SoundsManager).getInstance().play(obj.sound);
                } else {
                  //--非玩家本身採半透明呈現方式
                  if (b.bulletEffect[b.bulletEffect.length - 1].effectObj.getComponent(Sprite)) {
                    b.bulletEffect[b.bulletEffect.length - 1].effectObj.getComponent(Sprite).color = color(255, 255, 255, 128);
                  } else if (b.bulletEffect[b.bulletEffect.length - 1].effectObj.getComponent(UIOpacity)) {
                    b.bulletEffect[b.bulletEffect.length - 1].effectObj.getComponent(UIOpacity).opacity = 128;
                  }
                }
              } else {//---3D的子彈
              }

              aryTargetBullet.push(b);

              this._aryBullets.push(b);
            } else {
              throw new Error("bulletData is null");
            }
          }

          for (let a in this._mapIfaction) {
            //--這裡只是一次一顆所以才不會爆開..
            if (aryBullets[a].length > 0) {
              this._mapIfaction[a].initBulletState(aryBullets[a]);
            }
          }

          log('checkActionMap', this._mapIfaction, aryBullets, this._aryBullets); //ifAction.initBulletState(aryBullets);
        }

        openfishNet(bulletId) {
          let bullet = this.getBulletByID(bulletId);
          let r = bulletId;
          log('openfishNet', bullet);

          if (bullet) {
            bullet.isCollision = true;
            bullet.useFishingNets = true;
            r = -1;
            let ifAction = this._mapIfaction[bullet.strSystemId];
            ifAction.changeEffect(bullet); //let mc:Node=bullet.bulletShell;

            bullet.bulletShell.setScale(v3(0, 0, 0));
            let opacity = bullet.bulletShell.getComponent(UIOpacity);

            if (!opacity) {
              opacity = bullet.bulletShell.addComponent(UIOpacity);
            }

            opacity.opacity = 0; //---0-255
            //let targetObj={scaleX:0,scaleY:0,opacity:0};
            //bullet.tweenObj={scaleX:0,scaleY:0};

            let componentTweenMax = bullet.bulletShell.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);
            componentTweenMax.others = bullet.id;
            bullet.isTweening = true;
            TweenMax.to(componentTweenMax, .5, {
              scale: 1,
              opacity: 255,
              ease: Elastic.easeOut,
              onCompleteParams: [{
                bullet: componentTweenMax
              }],
              onComplete: value => {
                let b = this.getBulletByID(value.bullet.others); //---20171201 fix

                if (b != null) {
                  log("isDeadNet");
                  b.isDead = true;
                  b.isTweening = false; //this.removeBullets();//--for test
                }
              }
            }); //-https://forum.cocos.org/t/topic/111957--cocos用tweenmax
          }

          return r;
        }

        async beforeaddBullets(bullets) {
          log('beforeaddBullets__AAAAA', bullets, this._playerTableIndex);
          /**
           * credit: 495
              info: {
                  actionId: "0_1_0_0"
                  direction: undefined
                  endX: 1298.886328125
                  endY: 371.7302343749999
                  isCrazy: false
                  isFree: false
                  prop: undefined
                  roomStatus: 0
              },
              lockTarget: -1
              siteIndex: 0
              sn: 1
              weaponType: 2
           */
          //--0-3

          let flag = this._playerTableIndex == bullets.siteIndex ? true : false; //-_playerTableIndex

          let shootFlag = true; //--可以刪了,沒有意義

          if (!flag) {
            //--處理非玩家本身的子彈
            let changeValue;

            if (bullets.info.isFree) {
              //----其他玩家freegame的子彈
              //this.changeBulletStyle(0,value.siteIndex);
              changeValue = {
                index: bullets.siteIndex,
                score: 0
              };

              this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                error: Error()
              }), GameViewMediatorUser) : GameViewMediatorUser).GuisSystemView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                error: Error()
              }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_changeBulletStyle, changeValue);
            } else {
              //------非該玩家擊發的子彈(設定炮管顯示)
              //let gunScore:number=this._renderBase.getGunScore(value.bullet[j].info.actionId);
              let gunScore = this.getGunScore(bullets.info.actionId); //log("changeBulletStyle",gunScore);

              changeValue = {
                index: bullets.siteIndex,
                score: gunScore
              }; //this.changeBulletStyle(gunScore,value.siteIndex);
            }

            this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
              error: Error()
            }), GameViewMediatorUser) : GameViewMediatorUser).GuisSystemView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_changeBulletStyle, changeValue);
          }

          if (shootFlag) //--這個判斷不知道在聰沙小
            {
              let p = null;
              let addbulletFlag = true; //--寫子彈(server back)

              if (bullets.lockTarget) {
                //--鎖定的子彈
                //--這個setLockFishBullet要用別的class 獨立起來去做2023-10-01
                //--要去寫子彈的鎖定data還有砲台的相關旋轉
                //p=this.setLockFishBullet(bullets.lockTarget,bullets.sn,bullets.siteIndex,flag);
                //--這邊要檢查此時玩家是否更換鎖定目標,如果更換目標就回收子彈
                if (bullets.lockTarget != -1 && bullets.lockTarget != 0) {
                  //--送出來的座標是世界座標
                  p = await this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                    error: Error()
                  }), GameViewMediatorUser) : GameViewMediatorUser).GameLogicSystem, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                    error: Error()
                  }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).GameLogic_setLockFishBullet, bullets);
                  log('bullets.lockTargetAAAAA_', p);

                  if (p != null) {
                    //--其他玩家換目標了要怎麼處理?
                    if (p.previousTarget != 0) {
                      //--玩家之前鎖定的子彈(現在已經改變目標)
                      //--舊的子彈準備回收,新打出來卻瞄準舊目標的就不打出來了
                      this.cleanPlaerPreviousLockTarget(p.previousTarget, bullets.siteIndex);

                      if (!flag) {
                        addbulletFlag = true; //-世界座標

                        bullets.info.endX = p.position.x;
                        bullets.info.endY = p.position.y;
                      } else {
                        addbulletFlag = false;
                      }
                    } else {
                      addbulletFlag = true; //-世界座標

                      bullets.info.endX = p.position.x;
                      bullets.info.endY = p.position.y;
                    }

                    if (!p.useBullet) {
                      //--就是判定不使用(回收子彈)
                      addbulletFlag = false; //this._viewModel.sendServer(ServerSendCode.hitFish,{id:this._aryBullets[i].id,fid:-1});
                    }
                  } else {
                    //--找不到鎖定的魚(回收子彈)
                    addbulletFlag = false; //this._viewModel.sendServer(ServerSendCode.hitFish,{id:this._aryBullets[i].id,fid:-1});
                  }
                } else {
                  //--因為點擊是拿localpos
                  //---實際
                  let clickNode = find('Canvas/mouseNode');
                  let wposClick = clickNode.getComponent(UITransform).convertToWorldSpaceAR(v3(bullets.info.endX, bullets.info.endY));
                  p = {
                    position: {
                      x: wposClick.x,
                      y: wposClick.y
                    },
                    sp: 0,
                    useBullet: true,
                    previousTarget: 0
                  }; //-世界座標

                  bullets.info.endX = p.position.x;
                  bullets.info.endY = p.position.y; //--PS--
                  //p={position:{x:bullets.info.endX,y:bullets.info.endY},sp:0,useBullet:true,previousTarget:0};
                }
              }

              if (addbulletFlag) {
                //--準備換座標資訊(原本的gameplayerMode裡面的addBullets方法)
                //--座標已經是global的體系了

                /**
                 * value.index,value.pos.x,value.pos.y--帶進去的資料
                 * {index:value[0].index,pos:worldEndPosition}
                 * 
                 */
                //--選轉並且回傳旋轉後的發射座標
                let cannonPosition = this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                  error: Error()
                }), GameViewMediatorUser) : GameViewMediatorUser).GuisSystemView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                  error: Error()
                }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Gui_rotateCannonAndGetPosition, {
                  index: bullets.siteIndex,
                  pos: p.position
                }); //--舊版的會在轉換座標沒做完前就預先旋轉砲塔
                //let cannonPosition:{p:Vec3,r:Vec3,h:number}=this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView,GameViewMediatorUserDataKey.Gui_getCannonPosition,bullets.siteIndex);


                let data = {
                  p: cannonPosition.r,
                  cannonP: cannonPosition.p,
                  cannonR: cannonPosition.r,
                  cannonH: cannonPosition.h
                };
                /*
                let mouseCamera=find('Canvas/CameraGUI').getComponent(CameraComponent);
                 let wpos=mouseCamera.getComponent(CameraComponent).screenToWorld(v3(bullets.info.endX,bullets.info.endY));
                */

                let bulletData = {
                  isCrazy: bullets.info.isCrazy,
                  //--這邊的座標已經是worldpos
                  beforeToLocalEndXY: {
                    x: bullets.info.endX,
                    y: bullets.info.endY
                  },
                  mouse2D: {
                    x: 0,
                    y: 0
                  },
                  emitter2D: {
                    x: 0,
                    y: 0
                  },
                  actionId: bullets.info.actionId,
                  bulletId: bullets.sn,
                  isPlayer: flag,
                  prop: 0,
                  lockTarget: bullets.lockTarget,
                  isFree: false,
                  tableID: bullets.siteIndex,
                  cannonRotation: data
                };
                log('check_bulletdata', bulletData, cannonPosition, data);
                this.setBulletData(bulletData, data);
              } else {
                /**
                 *  20240320
                 *  因為根本不會推到bulletsPool裡面所以直接call server回收 
                 */
                this._viewModel.sendServer((_crd && ServerSendCode === void 0 ? (_reportPossibleCrUseOfServerSendCode({
                  error: Error()
                }), ServerSendCode) : ServerSendCode).hitFish, {
                  id: bullets.sn,
                  fid: -1
                });
              }
            }
        }

        removeBulletsByIds(ids) {
          let len = ids.length;
          log('remove');

          for (let i = 0; i < len; i++) {
            this.removeSingleBullet(ids[i]);
          }
        } //======給其他平行的view拿資料用的(透過mediator去拿)
        //--interface abstract


        getData(dataKey, value) {
          let data = null;

          switch (dataKey) {
            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_actionId:
              data = this._strNowAction;
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_gunScore:
              data = this.getGunScore(this._strNowAction);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_getBullets:
              data = this._aryBullets;
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_getBulletById:
              data = this.getBulletByID(value);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_weaponType:
              data = this.getScoreWithWeaponType(value);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_openfishNet:
              data = this.openfishNet(value);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_setBulletIsDeath:
              this.setBulletIsDeath(value);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_cleanMoreFishTarget:
              this.cleanMoreFishTarget(value);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_cleanFishTarget:
              this.cleanFishTarget(value);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_cleanLocakTargetByDeathFishs:
              this.cleanLocakTargetByDeathFishs(value);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_resetEndPositionAndFishTargetId:
              //-{pos:rp,id:this._aryLockFishBullets[i].lockBullets[j]}
              this.resetEndPositionAndFishTargetId(value.pos, value.id, value.lockFishId);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_cleanAllPreviousLockTarget:
              log('cleanAllPreviousLockTarget__', value);
              this.cleanAllPreviousLockTarget(value);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Bullet_cleanAllPlayerLockData:
              log('Bullet_cleanAllPlayerLockData');
              this.cleanAllPlayerLockData();
              break;
            //-cleanFishTarget
            //case GameViewMediatorUserDataKey.Bullet_cleanFishTarget:
            //this.cleanFishTarget(value);
            //break;
          }

          return data;
        }

        test() {
          log('FishBulletView_test');

          this._viewModel.sendServer('fh.fhHandler.Shoot', {
            s: 1,
            p: 124,
            //-最新餘額
            id: 456789,
            //-子彈id
            w: 123,
            //-砲台型態/武器類別(不會用到)
            si: {
              a: 'hello'
            } //-前端自定義座位表演參數物件(砲台角度,x,y,....),長度不得大於1000

          });
        }
        /*
        public resetEndPositionAndFishTargetId(position:Vec3,bulletId:number,lockFishId:number):void
        {
            super.resetEndPositionAndFishTargetId(position,bulletId,lockFishId);
            
            let b:Bullet=this.getBulletByID(bulletId);
             if(b)
            {
                if(b.lockFishTarget==lockFishId)
                {
                    //--test--
                    let testNode:Node;
                    if(!this._layer2DBulletsContainer.getChildByName('resetEndposNode'))
                    {
                        testNode=new Node('resetEndposNode');
                        let graphic:Graphics=testNode.addComponent(Graphics);
                        //-graphic 不受到UIOpacity組件影響~有夠78(coloc 0-255)
                        graphic.fillColor=color(255,255,255,255);
                        graphic.rect(-50,-50,100,100);
                        graphic.fill();
                        testNode.layer=Layers.Enum.UI_2D;
                        this._layer2DBulletsContainer.addChild(testNode);
                     }else{
                        
                        testNode=this._layer2DBulletsContainer.getChildByName('resetEndposNode');
                    }
                     log('check_resetEndPos',position);
                    
                    testNode.setPosition(position);
                      
                    //--test--
                  }else{
                     log('autoShootBullet_resetEndPos_nothing');
                }
            }
         
        }*/


      }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_addbullets", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "_playerTableId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "_mapCannonInfo", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "_refundBullets", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "_hitFishs", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "_roomStatus", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class)));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=35988f792f33eaea654820b8ed05214958a5b064.js.map
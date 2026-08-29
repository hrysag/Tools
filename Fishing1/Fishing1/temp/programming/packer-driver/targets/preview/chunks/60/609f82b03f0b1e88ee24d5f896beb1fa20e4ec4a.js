System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, instantiate, v3, director, Sprite, BlockInputEvents, Vec2, MeshRenderer, SkeletalAnimation, ParticleSystem, find, math, Node, Layers, color, UITransform, Animation, AnimationClip, Collider2D, Collider, SkinnedMeshRenderer, Quat, Size, v2, UIOpacity, log, LoadingResManager, FishView, Fish1FishData, FishCustomAnimation, PathCenter, TweenMaxCocosPlugin, GameUtils, AnimationSequencePlayer, AnimationStatus, FishRotationState, fishMeshState, CocosGameSetting, GameViewMediatorUserDataKey, GameViewMediatorUser, GameCoordinateMode, BaseEvent, viewBind, SoundsManager, TimeUpdateForMove, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class2, _crd, Fish1View;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishView(extras) {
    _reporterNs.report("FishView", "../../../framework/logic/views/fishView/FishView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddFish(extras) {
    _reporterNs.report("addFish", "./../../model/Fish1ModelDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishData(extras) {
    _reporterNs.report("FishData", "../../../framework/logic/views/fishView/FishData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1FishData(extras) {
    _reporterNs.report("Fish1FishData", "../fishView/Fish1FishData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishCustomAnimation(extras) {
    _reporterNs.report("FishCustomAnimation", "../../../framework/utils/FishCustomAnimation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPathCenter(extras) {
    _reporterNs.report("PathCenter", "./pathCore/PathCenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResetPathData(extras) {
    _reporterNs.report("ResetPathData", "./pathCore/PathCenter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPathFlockUnit(extras) {
    _reporterNs.report("PathFlockUnit", "./pathCore/basePath/BasePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenMaxCocosPlugin(extras) {
    _reporterNs.report("TweenMaxCocosPlugin", "../../../framework/utils/TweenMaxPlugin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../../framework/utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcover2dTo3dInfo(extras) {
    _reporterNs.report("cover2dTo3dInfo", "../../../framework/utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOffrustumInfoData(extras) {
    _reporterNs.report("frustumInfoData", "../../../framework/utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationSequencePlayer(extras) {
    _reporterNs.report("AnimationSequencePlayer", "./AnimationSequencePlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationStatus(extras) {
    _reporterNs.report("AnimationStatus", "./AnimationSequencePlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishRotationState(extras) {
    _reporterNs.report("FishRotationState", "../../../framework/game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishMeshState(extras) {
    _reporterNs.report("fishMeshState", "../../../framework/game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCocosGameSetting(extras) {
    _reporterNs.report("CocosGameSetting", "../../../framework/utils/CocosGameSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUserDataKey(extras) {
    _reporterNs.report("GameViewMediatorUserDataKey", "../../../framework/logic/gameLogic/FishGameLogicDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUser(extras) {
    _reporterNs.report("GameViewMediatorUser", "../../../framework/logic/gameLogic/FishGameLogicDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameCoordinateMode(extras) {
    _reporterNs.report("GameCoordinateMode", "../../../framework/game/coordinates/CoordinateDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseEvent(extras) {
    _reporterNs.report("BaseEvent", "../../../framework/game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewBind(extras) {
    _reporterNs.report("viewBind", "../../../framework/abstract/mvvm/AbstractView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundsManager(extras) {
    _reporterNs.report("SoundsManager", "../../../framework/logic/audio/SoundsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimeUpdateForMove(extras) {
    _reporterNs.report("TimeUpdateForMove", "../../../framework/utils/TimeUpdateForMove", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      director = _cc.director;
      Sprite = _cc.Sprite;
      BlockInputEvents = _cc.BlockInputEvents;
      Vec2 = _cc.Vec2;
      MeshRenderer = _cc.MeshRenderer;
      SkeletalAnimation = _cc.SkeletalAnimation;
      ParticleSystem = _cc.ParticleSystem;
      find = _cc.find;
      math = _cc.math;
      Node = _cc.Node;
      Layers = _cc.Layers;
      color = _cc.color;
      UITransform = _cc.UITransform;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
      Collider2D = _cc.Collider2D;
      Collider = _cc.Collider;
      SkinnedMeshRenderer = _cc.SkinnedMeshRenderer;
      Quat = _cc.Quat;
      Size = _cc.Size;
      v2 = _cc.v2;
      UIOpacity = _cc.UIOpacity;
      log = _cc.log;
    }, function (_unresolved_2) {
      LoadingResManager = _unresolved_2.LoadingResManager;
    }, function (_unresolved_3) {
      FishView = _unresolved_3.FishView;
    }, function (_unresolved_4) {
      Fish1FishData = _unresolved_4.Fish1FishData;
    }, function (_unresolved_5) {
      FishCustomAnimation = _unresolved_5.FishCustomAnimation;
    }, function (_unresolved_6) {
      PathCenter = _unresolved_6.PathCenter;
    }, function (_unresolved_7) {
      TweenMaxCocosPlugin = _unresolved_7.TweenMaxCocosPlugin;
    }, function (_unresolved_8) {
      GameUtils = _unresolved_8.GameUtils;
    }, function (_unresolved_9) {
      AnimationSequencePlayer = _unresolved_9.AnimationSequencePlayer;
      AnimationStatus = _unresolved_9.AnimationStatus;
    }, function (_unresolved_10) {
      FishRotationState = _unresolved_10.FishRotationState;
      fishMeshState = _unresolved_10.fishMeshState;
    }, function (_unresolved_11) {
      CocosGameSetting = _unresolved_11.CocosGameSetting;
    }, function (_unresolved_12) {
      GameViewMediatorUserDataKey = _unresolved_12.GameViewMediatorUserDataKey;
      GameViewMediatorUser = _unresolved_12.GameViewMediatorUser;
    }, function (_unresolved_13) {
      GameCoordinateMode = _unresolved_13.GameCoordinateMode;
    }, function (_unresolved_14) {
      BaseEvent = _unresolved_14.BaseEvent;
    }, function (_unresolved_15) {
      viewBind = _unresolved_15.viewBind;
    }, function (_unresolved_16) {
      SoundsManager = _unresolved_16.SoundsManager;
    }, function (_unresolved_17) {
      TimeUpdateForMove = _unresolved_17.TimeUpdateForMove;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0910fYmVrFI5Z4DceDpipQD", "Fish1View", undefined);

      /**
       * Created by EricHuang on 2023/9/23.
       */
      __checkObsolete__(['EventTarget']);

      __checkObsolete__(['path']);

      __checkObsolete__(['Vec3']);

      __checkObsolete__(['instantiate']);

      __checkObsolete__(['v3']);

      __checkObsolete__(['director']);

      __checkObsolete__(['geometry']);

      __checkObsolete__(['Sprite']);

      __checkObsolete__(['BlockInputEvents']);

      __checkObsolete__(['Asset']);

      __checkObsolete__(['Vec2']);

      __checkObsolete__(['AnimationState']);

      __checkObsolete__(['Prefab']);

      __checkObsolete__(['MeshRenderer']);

      __checkObsolete__(['animation']);

      __checkObsolete__(['SkeletalAnimation']);

      __checkObsolete__(['ParticleSystem']);

      __checkObsolete__(['ParticleSystemComponent']);

      __checkObsolete__(['find']);

      __checkObsolete__(['math']);

      __checkObsolete__(['Node']);

      __checkObsolete__(['Layers']);

      __checkObsolete__(['assetManager']);

      __checkObsolete__(['SpriteFrame']);

      __checkObsolete__(['Material']);

      __checkObsolete__(['Color']);

      __checkObsolete__(['color']);

      __checkObsolete__(['primitives']);

      __checkObsolete__(['utils']);

      __checkObsolete__(['ModelComponent']);

      __checkObsolete__(['CameraComponent']);

      __checkObsolete__(['Scene']);

      __checkObsolete__(['Canvas']);

      __checkObsolete__(['UITransform']);

      __checkObsolete__(['Animation']);

      __checkObsolete__(['AnimationClip']);

      __checkObsolete__(['Collider2D']);

      __checkObsolete__(['Collider']);

      __checkObsolete__(['BoxCollider']);

      __checkObsolete__(['SkinnedMeshRenderer']);

      __checkObsolete__(['Quat']);

      __checkObsolete__(['Size']);

      __checkObsolete__(['v2']);

      __checkObsolete__(['UIOpacity']);

      __checkObsolete__(['log']);

      __checkObsolete__(['BuiltinBoxShape']);

      __checkObsolete__(['BuiltinShape2D']);

      //import {viewfun} from '../../../framework/abstract/mvvm/AbstractView';
      //export class Fish1View extends FishView<Fish1FishData>
      //@viewfun('Fish1VM')
      _export("Fish1View", Fish1View = (_dec = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
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
      }), viewBind) : viewBind, (_class = (_class2 = class Fish1View extends (_crd && FishView === void 0 ? (_reportPossibleCrUseOfFishView({
        error: Error()
      }), FishView) : FishView) {
        //--右手坐標系逆軸旋轉vec3
        constructor() {
          super();

          //-@viewBind _testTestModeValue2;//-要監聽model資料改變的變數(名稱與model相同)     
          //@viewBind _playerTableId:number;
          _initializerDefineProperty(this, "_addFishs", _descriptor, this);

          _initializerDefineProperty(this, "_addPopFishs", _descriptor2, this);

          _initializerDefineProperty(this, "_roomStatus", _descriptor3, this);

          _initializerDefineProperty(this, "_hitFishs", _descriptor4, this);

          _initializerDefineProperty(this, "_bossStatus", _descriptor5, this);

          //--boss的離場狀態
          _initializerDefineProperty(this, "_fishTypeSpeedMap", _descriptor6, this);

          //@viewBind _freeze;//--使用冰凍道具
          this._pathCenter = void 0;
          this._frustumData = void 0;
          //private _fish3DZindex:number;
          this._exitAllFishForBoss = void 0;
          //--紀錄現在是否為金龍進場,魚群出場
          this._isFreeze = void 0;
          //--紀錄是否為冰凍狀態
          this._updateDeltaTime = void 0;
          //--紀錄每次更新的單位時間(冰凍要手動更新一次)
          //private _freezeLastTime:number;//--ms

          /**
           * 2023-10-11
           * 因為進房間的資訊會在產生魚之後才會送,要拿_playerTableId做相關的變化,
           * 只好先把魚扣下來,等到拿到_playerTableId的資訊之後再一口氣推出去
           */
          this._delayFdata = void 0;
          this._spBossId = void 0;
          //--20240308
          this._spBossPathFlockUnit = void 0;
          this._spBossAlreadyServerTime = void 0;
          this._spBossPathId = void 0;
          this._spBossGroupPathId = void 0;
          this._spChangeRoomTime = void 0;
          this._aryOutSideBanndedType = void 0;
          this._aimLockNode = void 0;
          //--aim texture-
          this._defaultZindex = void 0;

          /**
          * override it
          * 你可以將sub當作key值,switch case他來做相關的處理
          * @param sub 屬性變數的字串
          * @param value 傳送的資料
          */
          this.modeleChangeHandler = (sub, value) => {
            log('modeleChangeHandler_fishview_', sub, value);

            switch (sub) {
              case '_fishTypeSpeedMap':
                log('fishViewChangeSettinginit', value);
                this.fishTypeSpeedMap = value[0];
                break;

              case '_addFishs':
                //--do something
                log('Fish1FishView__addFishs', value[0]);
                /**
                 *  ---boss的產魚資料
                 *  freeze:0
                    id: 10238
                    isReverse: false
                    pathID: 0
                    speed: 1
                    time: 0
                    type: 21
                 */

                this.createFish(value[0]);
                break;

              case '_hitFishs':
                if (value[0].fish.iskill) {
                  log('fish1View__hitFishs', value[0]);
                  this.removeFishAimLockByLockId(value[0].fish.sn);
                }

                break;

              case '_roomStatus':
                log('Fish1FishView__roomStatus', value[0]);
                /**
                 *  ps狀態代碼資訊
                    0=正常/一般狀態,
                    1=冰凍,
                    2=金龍來襲,
                    3=金龍死亡(禁止進房)
                 */

                if (value[0].status == 0) {
                  this.removeBoss();
                  this._exitAllFishForBoss = false;

                  if (this._isFreeze) {
                    this._isFreeze = false;
                    this.resumeAllFishAnimation();
                  } //this._freezeLastTime=0;


                  this._canUpdate = true;

                  if (this._spBossId != 0) {
                    this.removeFishAimLock();
                    this._spBossId = 0;
                  }

                  if (!(_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
                    error: Error()
                  }), SoundsManager) : SoundsManager).getInstance().isPlaying('sounds/BGM01')) {
                    //--判斷檢查背景音樂是否撥放(不然解除冰凍會再重播一次)
                    //--其他的背景音就會停掉了 
                    (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
                      error: Error()
                    }), SoundsManager) : SoundsManager).getInstance().playBGMusic('sounds/BGM01');
                  }
                } else if (value[0].status == 2) {
                  //--server啟動順序1.魚2.房間狀態
                  this.removeFishAimLock();
                  this.checkexitFishForBoss();
                  this._canUpdate = true; //--其他的背景音就會停掉了 

                  (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
                    error: Error()
                  }), SoundsManager) : SoundsManager).getInstance().playBGMusic('sounds/dragonbattlebgm-1');
                } else if (value[0].status == 1) {
                  this._canUpdate = false;
                  this._isFreeze = true; //this._freezeLastTime=value[0].startTime;

                  this.pauseAllFishAnimation();
                }

                break;

              case '_freeze':
                log('fish1View'); //this.canUpdate=value[0];

                break;
            }
          };

          this.animationSequencePlayerEvent = e => {
            log('animationSequencePlayerEvent', e);

            this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
              error: Error()
            }), GameViewMediatorUser) : GameViewMediatorUser).AniEffectSystemView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Effect_bossShake);
          };

          //===================update fish===================================================================================================
          //--以秒為單位
          this.updateFish = t => {
            //log('check_fishUpdate',this._aryFishData,this._canUpdate);
            this._updateDeltaTime = t;

            if (this._aryFishData.length > 0 && this._canUpdate) {
              //---路徑更新單位是以秒為基本單位..送進來的時間是以秒為基本單位
              //log('updateFishData@@');
              var second = t / 1000; //this.sortAllFishLayer();
              //this._pathCenter.updataPath(second);

              this._pathCenter.updataPath(t);

              this.renderFish(t);
              /*
              if(this._testTimeUpdate)
              {
                  this._testTimeUpdate.update(t);
              }*/
              //this.renderDragon(t); 
            } else if (!this._canUpdate && this._isFreeze) {
              this.updateFrezzeHitAniUpdate(t);
            }
          };

          this._classId = 'Fish1View';
          this._delayFdata = [];
          this._playerTableCoordinate = 0;
          this._rotateValue = 0; //this._pathCenter=new PathCenter({x:0,y:0,w:1920,h:1080});

          this._pathCenter = new (_crd && PathCenter === void 0 ? (_reportPossibleCrUseOfPathCenter({
            error: Error()
          }), PathCenter) : PathCenter)();
          this._lockFish = null;
          this._aryblockBoundaryTest = []; //this._fish3DZindex=0;

          this._exitAllFishForBoss = false; //--右手坐標系正軸旋轉vec3

          Fish1View.Axis = {
            x: new Vec3(1, 0, 0),
            y: new Vec3(0, 1, 0),
            z: new Vec3(0, 0, 1)
          }; //--右手坐標系逆軸旋轉vec3

          Fish1View.Axis_Negative = {
            x: new Vec3(-1, 0, 0),
            y: new Vec3(0, -1, 0),
            z: new Vec3(0, 0, -1)
          }; //--SP boss

          this._spBossPathFlockUnit = null;
          this._spBossAlreadyServerTime = 0;
          this._spBossPathId = '';
          this._spBossGroupPathId = '';
          this._spChangeRoomTime = 0; //--server送進來的改變房間狀態(boss出場的時間)

          this._aryOutSideBanndedType = [21];
          this._isFreeze = false;
          this._updateDeltaTime = 0; //this._freezeLastTime=0;

          this._defaultZindex = [0, -200, -400, -600, -800, -1000, -1500, -2000, -500];
          this._spBossId = 0;
          this._frustumData = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).getFrustumData();
        }

        onLoad() {
          super.onLoad();
          this._fishContainer = this.node;
          this._fishShadowContainer = find('Canvas/fishShadowNodeContainer/fishShadowNode');
          this._fishAimContainer = find('Canvas/fishAimNodeContainer/fishAimNode');
          var texture = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames('target_mc')[0];
          this._aimLockNode = new Node('_aimLockNode');

          this._aimLockNode.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          var spr = this._aimLockNode.addComponent(Sprite);

          spr.spriteFrame = texture;
          this._aimLockNode.addComponent(UIOpacity).opacity = 255;

          var uiTransForm = this._aimLockNode.addComponent(UITransform);

          uiTransForm.contentSize = new Size(texture.originalSize.width, texture.originalSize.height);
          uiTransForm.anchorPoint = v2(0.5, 0.5);
          this._aimLockNode.layer = 1 << Layers.nameToLayer('fish');

          this._fishAimContainer.addChild(this._aimLockNode);

          this._aimLockNode.active = false;
          log('check__aimLockTexture', this._aimLockNode, this._fishAimContainer);
        }

        checkexitFishForBoss() {
          if (!this._exitAllFishForBoss) {
            this._exitAllFishForBoss = true;
            this._spChangeRoomTime = Date.now(); //--離場

            this.exitAllFish();
          }
        } //--interface abstract


        getData(dataKey, value) {
          var data = null;

          switch (dataKey) {
            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_getFishs:
              data = this._aryFishData;
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_changeSingleFishAnimation:
              this.changeSingleFishAnimation(value);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_getFishById:
              data = this.getFishById(value);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_removeFishById:
              this.removeFishById(value);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_removeSinglePathUnitByFishId:
              log('Fish_removeSinglePathUnitByFishId', value);
              this.removeSinglePathUnitByFishId(value);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_hitFishAniComplete:
              log('Fish_hitFishAniComplete', value);
              this.hitFishAniComplete(value);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_getOutsideFish:
              log('Fish_getOutsideFish', value);
              data = this.getOutsideFish(value);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_addFishAimLock:
              log('Fish_addFishAimLock', value); //-fid:value,isPlayer:true,index:this._userTableIndex

              this.addFishAimLock(value.fid, value.isPlayer, value.index); //-

              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_removeFishAimLock:
              log('Fish_removeFishAimLock', value);
              this.removeFishAimLock(); //this.getFishById

              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_getFishById:
              log('Fish_getFishById', value);
              data = this.getFishById(value);
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_removeFishAimLockByLockId:
              log('Fish_removeFishAimLockByLockId', value);
              this.removeFishAimLockByLockId(value);
              break;
          }

          return data;
        }
        /**
         * 因為gui和其他的view系統會先建立後,監聽隨之掛載(_playerTableId)
         * 進桌完成才會掛載<旋轉座標來監聽_playerTableId>
         * 所以fishview就會先收到事件,
         * 在玩家是冰凍狀態進入時,魚群會先更新,之後輪到座標系統收到事件才會旋轉座標.
         * 因此倒置魚的位置始終對不起來
         * 20240315-
         */


        setPlayerIdAfterCoordinateMode(playerId) {
          /**
           * ps-這個變數只會寫一次,玩家進桌後
          * 玩家進桌完畢(server啟動順序1.魚 2.房間狀態.3.玩家座位)
          * 所以座標旋轉與相關房間狀態的改變有需要再reset
          */
          //-1-4
          this.playerTableCoordinate = playerId;
          log('check__playerTableCoordinate', this._playerTableCoordinate);

          if (this._delayFdata.length > 0) {
            /*
            //--冰凍的時間已經再產生魚的時候扣掉了
            if(this._isFreeze)
            {
                this.resetFreezeDuringTime();
            }*/
            this.delayRotationCreateFish();
          }

          if (this._isFreeze) {
            this._pathCenter.updataPath(0.016);

            this.renderFish(0.016);
            /*
            this._pathCenter.updataPath(this._updateDeltaTime);
            this.renderFish(this._updateDeltaTime);
            */
          }

          log('Fish1FishView__playerTableId', this._playerTableCoordinate, this._rotateValue, this._updateDeltaTime);
        } //===================create fish===========================================================================================
        //--override


        createFish(fishInfo) {
          var aryFishs = [];
          var fd;
          log('createFish_data_init', this._fishTypeKeyMap, fishInfo, fishInfo.length);
          var mesh; //--test code--20240425
          //this._testTimeUpdate=new TimeUpdateForMove({x:0,y:0},{x:100,y:0},1);
          //while(startIndex < fishInfo.length)--old

          for (var fish of fishInfo) {
            //log('check_createFish',fish,fishInfo);
            //const secondValue = fishInfo[startIndex + 1];
            //log('getNowFishData--',fishInfo,startIndex+1,fishInfo[startIndex + 1]);
            //log('getNowFishData--',startIndex+1,fishInfo[startIndex + 1],this._fishTypeKeyMap[fishInfo[startIndex + 1]]);

            /*---old
            if(this._fishTypeKeyMap[fishInfo[startIndex + 1]].level)
            {
               //--成長類型的魚
               endIndex = startIndex + batchSize;
                glowup=true;
             }else
            {
               //--資料檢查沒有過的情況,就是fishtypekeymap的level=false,但是server資料卻是成長魚(長度6)
               if(fishInfo[startIndex + batchSize-1]<100){
                  //--如果非成長魚的下一筆資料會是fishid看資料是大於1000
                  endIndex = startIndex + batchSize;
                }else{
                
                    endIndex = startIndex + batchSize - 1;
               
               }
                
                //--非成長類型的魚
               
               glowup=false;
            }*/
            //const unit = fishInfo.slice(startIndex, endIndex);
            //--next index

            /**
             *  new---物件陣列
             * [{
             *   id-魚隻id number
             *   type-魚種代碼 number
             *   pathID-路徑代碼 number
             *   speed-速度(秒) number
             *   time-已存活時間/目前移動多久(毫秒) number
             *   (time的生成方式=現在時間-魚隻創建時間)
             *   freeze-被冰凍時間累積(毫秒)number 
             *   isReverse-是否路徑反向 boolean
                }...]
             * 
             *  old--
             *  0->fishID 
                1->fishType 
                2->alreadyRunTime--->目前存活的時間 
                3->pathId 
                4->isRevese  
                5->level-->成長魚種(會變大的)..沒有就不代入了
             */
            fd = this._poolFishData.length == 0 ? new (_crd && Fish1FishData === void 0 ? (_reportPossibleCrUseOfFish1FishData({
              error: Error()
            }), Fish1FishData) : Fish1FishData)() : this._poolFishData.pop();
            fd.fishType = fish.type; //fd.fishType=unit[1];

            log('check_fishType', fish, fish.type);
            fd.fishMeshState = this._fishTypeKeyMap[fish.type].fishMeshState; //-取得魚種是2d or 3d
            //fd.id=unit[0];

            fd.id = fish.id;
            fd.rotationState = this._fishTypeKeyMap[fish.type].rotationState;
            fd.odds = this.getOddsByFishType(fish.type); //--boss要分開設定資料,因為藉由房間狀態改變,已經先產生了路徑--
            //-好像也沒差,因為開場是固定的時間

            var t = Date.now(); //--ms(正式要打開20240401)
            //let t:number=1712549597522;//--(測試數據--正是要關閉20240401)
            //-fish.time=從出生的時間開始持續到當前的時間(冰凍也含在內)

            if (fd.fishType == 21) {
              this.checkexitFishForBoss();
              this._spBossId = fish.id; //fd.alreadyServerTime=(this._spChangeRoomTime==0)?0:t-this._spChangeRoomTime;//--ms(進場所需的時間)
              //fd.alreadyServerTime=fish.time-fish.freeze;
              //fd.alreadyServerTime=fish.time;
              //fish.pathID=301000;----召喚魚種用掉了3X系列

              fish.pathID = 401000; //fd.pathID=fish.pathID+'_'+t;
              //--這邊的fish.freeze
            } else {//fd.alreadyServerTime=unit[2];//--ms
              //fd.alreadyServerTime=fish.time-fish.freeze;//--ms
              //fd.alreadyServerTime=fish.time;//--ms
              //fd.pathID=unit[3]+'_'+t;
              //fd.pathID=fish.pathID+'_'+t;
            }
            /**
             *  20240115
             *  這邊的fish.freeze他是累計的總時間,而非當前冰凍的實際執行到哪的當前秒數
             * 20240125-fix
             * fish.freeze=持續多少時間(毫秒)--這個是包含他連續使用的累加時間(20240315)
             * 20240315
             * fd.alreadyServerTime=fish.time這樣寫會有盲點
             * 因為在冰凍時,魚的存活時間是會持續的,如果遇到連續冰凍,又是同個魚場的話.
             * 這樣剛進房間的玩家的存活時間會是錯的
             * 應該要用<魚在>
             */


            fd.freeze = fish.freeze;
            /**
             * 20240320--超雷的
             * fish.createTime有時候會沒有送..所以導致魚的alreadyServerTime=NAN
             * 但有個規律似乎是fish.time=0就不送了
             */

            log('check_fishTime', t, fish.createTime, fish.freeze);
            /**
             * 20240401
             * t會小於server送進來的createTime!!!
             */

            fd.alreadyServerTime = fish.time - fish.freeze; //--正式打開(20240403)
            //fd.alreadyServerTime=0;//--正式關閉,測試數據(20240403)

            log('wtf_fishCreater_alreadyServerTime', fd.alreadyServerTime);
            fd.fishFlockUnit.fishID = fd.id;
            fd.fishFlockUnit.fishType = fd.fishType;
            fd.fishFlockUnit.speed = this._fishTypeSpeedMap[fd.fishType];
            log('check_createPath_createrTime', fd, fd.fishFlockUnit, fd.alreadyServerTime, this._spChangeRoomTime); //let t:number=Date.now();//--ms
            //fd.pathID=unit[3]+'_'+t;

            fd.pathID = fish.pathID + '_' + fd.id;
            fd.pathGroupID = fd.pathID; //---目前直接使用pathid

            fd.createServerTime = fish.createTime; //--server的產生時間timestamp

            fd.creatTime = t; //--client產生的時間

            fd.hitAniMilliSecond = this._fishTypeKeyMap[fish.type].hitms; //--打到要撐多久的時間

            fd.lv = this._fishTypeKeyMap[fish.type].lv; //log('check_time',Date.now(),new Date().getTime());
            //-createPath(pathId:number,pathTokenID:string,reverse:boolean,gloupSN?:string)

            this._pathCenter.createPath(fish.pathID, fd.pathID, fish.isReverse);

            log('check_fishMAPData', fd.fishType, this._fishTypeKeyMap);

            if (fd.fishType == 23) {
              //--bomb
              fd.other = {
                AxisZQuat: new Quat(),
                AxisXQuat: new Quat(),
                rotation: 0
              };
            }

            if (fd.fishType == 999) {//--特殊需要自己建立的魚種(FishCustomAnimation)
              //- fd.countHitAni=fd.hitAniMilliSecond; 
            } else {
              var node = void 0;

              if (fd.fishMeshState == (_crd && fishMeshState === void 0 ? (_reportPossibleCrUseOffishMeshState({
                error: Error()
              }), fishMeshState) : fishMeshState).fish2D) {
                //node=LoadingResManager.getInstance().getPrefab('prefab/fish/'+this._fishTypeKeyMap[unit[1]].meshId);
                node = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                  error: Error()
                }), LoadingResManager) : LoadingResManager).getInstance().getPrefab('prefab/fish/' + this._fishTypeKeyMap[fish.type].meshId);
                log('check_fishprefab', node); //let node=LoadManager.getInstance().getPrefab('prefab/fish/'+'fish_11');
                //--幹,好爛要加上sprite才能用

                /*
                let sprframes=this.getSpriteFrames('fish_11_swim');
                
                let testFishNode:Node=new Node('fish'+fd.id);
                testFishNode.addComponent(Sprite);
                testFishNode.layer=Layers.Enum.UI_2D;
                testFishNode.active=true;
                this._fishContainer.addChild(testFishNode);
                testFishNode.setPosition(new Vec3(960,540,0));
                 let ani=testFishNode.addComponent(Animation);
                let clip=AnimationClip.createWithSpriteFrames(sprframes,10);
                clip.name='clips'+fd.id;
                clip.speed=-1;
                clip.wrapMode=20;
                log('check_frames',sprframes,clip);
                ani.addClip(clip);
                ani.play(clip.name);
                */

                mesh = instantiate(node);
                mesh.name = fd.id + '_fish'; //let test=mesh.children[0].children[0].getComponent(Sprite);
                //test.color=Color.BLACK;
                //test.color=color(0,0,0,60);
                //test.addComponent(BlockInputEvents);

                mesh.active = true; //log('testFish',mesh.children[0].children[0]);

                this._fishContainer.addChild(mesh);

                mesh.layer = 1 << Layers.nameToLayer('fish');
                mesh.setPosition(v3(-(_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                  error: Error()
                }), CocosGameSetting) : CocosGameSetting).Game_Width, -(_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                  error: Error()
                }), CocosGameSetting) : CocosGameSetting).Game_Height)); //--PS 要把它加入顯示清單才能操作相關的animationState物件,不然會找不到

                log('check_fisd_type', fd.fishType, this._fishTypeKeyMap[fish.type].meshId);
                var aniComponent = mesh.getChildByName('fish').getComponent(Animation); //-有些物件沒有動作(例如海星fisd_type 1 ,fish_02)

                var clips = aniComponent.clips;
                var playerFrame = void 0;
                var timeOffsetInSeconds = void 0;
                var animationState = void 0;

                if (aniComponent) {
                  fd.animation = aniComponent;

                  for (var a = 0; a < clips.length; a++) {
                    var durationInSeconds = clips[a].duration; //-totaltime

                    var frameRate = clips[a].sample; //--frameRate

                    var totalFrame = Math.floor(durationInSeconds * frameRate); //--(int)(Math.random() * (Y-X+1)) + X;
                    //--要先執行play方法,讓animationstate物件setting好,才能接著後續操作

                    aniComponent.play(clips[a].name); //playerFrame=Math.floor(Math.random()*(totalFrame-0+1));

                    playerFrame = Math.floor(Math.random() * totalFrame);
                    if (playerFrame == -1 || playerFrame == 0) playerFrame = 1;
                    timeOffsetInSeconds = playerFrame / frameRate;
                    animationState = aniComponent.getState(clips[a].name);
                    animationState.setTime(timeOffsetInSeconds); //-https://forum.cocos.org/t/topic/141549/3
                    //--讀取json檔案
                  }
                }
                /**
                 * fuck 超雷的
                 * 如果你需要使用美術製作好的animationClip物件,
                 * 你必須連node的包裝與掛載組件的階層都需要相同.
                 * 注意!連node的命名,階層都需要相同,
                 * 因為他會針對命名與階層下去抓相對應的clip來作動!
                 * 注意!!在使用spritesheet的序列圖動畫,產生clip組件後.
                 * 必須再加入sprite component才會顯示
                 * 注意!要檢查美術製作的物件裡面是否有正確的使用到anim檔案
                 * 只有使用到的才會被載入在assetsmanager裡面的assets
                 */
                //this._fishTypeKeyMap[unit[1]].meshId
                //let target=this._fishTypeKeyMap[unit[1]].meshId.match(/\d+/);
                //log('check_clipID_target',target);
                //let clipsId:string=this._fishTypeKeyMap[unit[1]].meshId.match(/\d+/)[0];


                var clipsId = this._fishTypeKeyMap[fish.type].meshId.match(/\d+/)[0];

                log('check_clipID-->', 'fish' + clipsId + 'Swim');
                var aniShadowClip = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                  error: Error()
                }), LoadingResManager) : LoadingResManager).getInstance().getAnimationClip('fish' + clipsId + 'Swim');
                log('check_aniClip', aniShadowClip);
                var topFishNode = new Node('fish');
                var otherFishNode = new Node('fish');
                topFishNode.layer = 1 << Layers.nameToLayer('fish');
                otherFishNode.layer = 1 << Layers.nameToLayer('fish');
                log('check_layer', mesh.layer, topFishNode.layer, 1 << Layers.nameToLayer('fish'));
                topFishNode.addChild(otherFishNode);
                topFishNode.active = true;

                this._fishShadowContainer.addChild(topFishNode);

                topFishNode.setPosition(v3(mesh.position.x + 30, mesh.position.y - 30, 0));
                var shadowSpr = otherFishNode.addComponent(Sprite);
                shadowSpr.color = color(0, 0, 0, 50);
                shadowSpr.addComponent(BlockInputEvents);
                var aniShadow = topFishNode.addComponent(Animation);
                aniShadow.defaultClip = aniShadowClip;
                log('checkPosi', topFishNode.position);
                aniShadow.play(aniShadowClip.name);
                animationState = aniShadow.getState(aniShadowClip.name);
                animationState.setTime(timeOffsetInSeconds);
                fd.fishShadow = topFishNode; //---old code

                /*
                if(this._coordinateMode==GameCoordinateMode.GameViewMode_Four_in_one)
                {
                    if(this._playerTableCoordinate>0)
                    {
                        if(this._playerTableCoordinate==1 || this._playerTableCoordinate==2)
                        {
                           mesh.setScale(v3(mesh.scale.x*-1,mesh.scale.y*-1));
                        }
                    }
                }*/

                /**
                 * 2023-10-11
                 * 因為進房間的資訊會在產生魚之後才會送,要拿_playerTableId做相關的變化,
                 * 只好先把魚扣下來,等到拿到_playerTableId的資訊之後再一口氣推出去
                 */

                if (this._playerTableCoordinate > 0) {
                  if (this._coordinateMode == (_crd && GameCoordinateMode === void 0 ? (_reportPossibleCrUseOfGameCoordinateMode({
                    error: Error()
                  }), GameCoordinateMode) : GameCoordinateMode).GameViewMode_Four_in_one) {
                    log('GameViewMode_Four_in_one');
                    /*
                    if(this._playerTableCoordinate==1 || this._playerTableCoordinate==2)
                    {
                        mesh.setScale(v3(mesh.scale.x*-1,mesh.scale.y*-1));
                    }*/
                    //------測試關閉-20231011

                    if (fd.rotationState == (_crd && FishRotationState === void 0 ? (_reportPossibleCrUseOfFishRotationState({
                      error: Error()
                    }), FishRotationState) : FishRotationState).noRotation) {
                      //---預設的魚頭都是朝左邊(sin(0))
                      //----type 1海星他一開始就是做正的,所以不用轉
                      if (fd.fishType != 1) {
                        var rv = this._playerTableCoordinate == 1 || this._playerTableCoordinate == 2 ? -1 : 1;
                        mesh.angle = math.toDegree(rv * Math.PI / 2); //--影子

                        topFishNode.angle = math.toDegree(rv * Math.PI / 2);
                      }
                    }
                  } //let noRotation:number=(fd.rotationState==FishRotationState.noRotation)?1:this._rotateValue;


                  mesh.setScale(v3(mesh.scale.x, mesh.scale.y * this._rotateValue)); //-影子

                  topFishNode.scale.set(mesh.scale.x, mesh.scale.y);
                  log('check_meshScale', mesh.scale, this._rotateValue);
                } //---測試關閉-20231011

              } else {
                //--3d物件
                var scene = director.getScene();
                /*
                cubeNodeC=this.createTestCube();
                //cubeNodeC.scale(v3(10,10,10))
                //cubeNode.getWorldPosition
                scene.addChild(cubeNodeC);
                
                cubeNodeC.setPosition(0,0,0);
                 let cubeNodeL:Node=this.createTestCube();
                scene.addChild(cubeNodeL);
                cubeNodeL.setPosition(this._frustumData.leftPoint,0,0);
                  let cubeNodeR:Node=this.createTestCube();
                scene.addChild(cubeNodeR);
                cubeNodeR.setPosition(this._frustumData.rightPoint,0,0);
                  let cubeNodeT:Node=this.createTestCube();
                scene.addChild(cubeNodeT);
                cubeNodeT.setPosition(0,this._frustumData.topPoint,0);
                  let cubeNodeB:Node=this.createTestCube();
                scene.addChild(cubeNodeB);
                */
                //cubeNodeB.setPosition(0,this._frustumData.bottomPoint,0);
                //cubeNodeB.setPosition(541.268848314607,268.55367977528175,0);

                log('check_fishMap', this._fishTypeKeyMap[fish.type].meshId); //-Prefab                    

                node = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
                  error: Error()
                }), LoadingResManager) : LoadingResManager).getInstance().getPrefab('prefab/fish/3d/' + this._fishTypeKeyMap[fish.type].meshId); //-node

                mesh = instantiate(node);
                mesh.active = true;
                mesh.layer = Layers.Enum.DEFAULT;
                var meshScaleRate = this._fishTypeKeyMap[fish.type].meshScale;
                mesh.setScale(v3(meshScaleRate, meshScaleRate, meshScaleRate));
                mesh.name = fd.id + '_fish';
                scene.addChild(mesh);
                log('check3Dfish', mesh);
                /**
                 * Quat裡面除了些基礎算法外,最重要的就是xyzw這4個屬性,
                 * xyz=旋轉軸的座標
                 * w=旋轉角度
                 */

                if (fd.fishType != 21) {
                  /**
                   * 20240408-避免中心點在0,0的地方讓魚種一開始從左上或右下(看座位)
                   * 等待,直到下個frame後才更新
                   * 
                   */
                  var changeposData = {
                    //pos2d:new Vec2(0,700),
                    pos2d: new Vec2(-(_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                      error: Error()
                    }), CocosGameSetting) : CocosGameSetting).Game_Width, -(_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                      error: Error()
                    }), CocosGameSetting) : CocosGameSetting).Game_Height),
                    //pos2d:new Vec2(0,0),
                    node2d: this._fishContainer,
                    camera2dnodeId: 'Canvas/Camera',
                    camera3dnodeId: 'Main Camera'
                  }; //log('check_fishContainerRotation',find('Canvas/fishNodeContainer').angle);

                  var pos3dchange = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                    error: Error()
                  }), GameUtils) : GameUtils).conver2dposTo3dpos(changeposData);
                  var zindex = this.checkNowThreeDfishZindex(fd.fishType); //-有些模型的動作表較大,這是安全深度

                  if (zindex != -1) {
                    //--場上同時有同一個魚種
                    mesh.setPosition(v3(pos3dchange.x, pos3dchange.y, zindex)); //mesh.setPosition(v3(0,0,zindex));
                  } else {
                    mesh.setPosition(v3(pos3dchange.x, pos3dchange.y, this._fishTypeKeyMap[fish.type].zindex)); //mesh.setPosition(v3(0,0, this._fishTypeKeyMap[fish.type].zindex));
                  }
                } else {
                  //---boss zindex=-500安全距離,因為龍會抬頭
                  mesh.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                    error: Error()
                  }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);
                  mesh.addComponent(_crd && TimeUpdateForMove === void 0 ? (_reportPossibleCrUseOfTimeUpdateForMove({
                    error: Error()
                  }), TimeUpdateForMove) : TimeUpdateForMove); //mesh.setPosition(v3(this._frustumData.leftPoint-1000,0,-500));

                  mesh.setPosition(v3(this._frustumData.leftPoint - 1000, 0, this._fishTypeKeyMap[fish.type].zindex));
                } //--20 -2000


                log('check_3Dfish_z_index', mesh.position.z, 'fishType', fd.fishType, 'path', fd.pathGroupID); //---for test---
                //mesh.setPosition(v3(0,0,-5000));
                //---for test---
                //fd.lv=this._fish3DZindex;
                //======抽取fishSkinnedMeshRenderer====

                fd.fishSkinnedMeshRenderer = this.getSkinnedMeshRenderer(mesh, fd.fishType); //=======抽取animation物件  

                fd.animation = this.getAnimationFromFishMesh3D(mesh, fd.fishType); //====炸彈專屬===========

                var defaultAniClipId = 'swin';

                if (fd.fishType == 23) {
                  mesh.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                    error: Error()
                  }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);
                  defaultAniClipId = 'bombSpark';
                } else if (fd.fishType == 14 || fd.fishType == 15 || fd.fishType == 18 || fd.fishType == 19) {
                  defaultAniClipId = 'swim';
                } //===========動畫播放==========


                if (fd.fishType != 21) {
                  //--播放預設
                  var aniClip = this.getAnimationClip(fd.animation, defaultAniClipId);
                  log('check_star_clip', aniClip);

                  if (aniClip) {
                    fd.animation.defaultClip = aniClip;
                    fd.animation.play(aniClip.name); //fd.animation.stop()
                  }
                } else {
                  //=====抽取particlesystem(掛在bone上面)
                  fd.particle = this.getParticle(mesh); //---boss(animationSequencePlayer)children[0]

                  fd.animationSequencePlayer = fd.animation.node.addComponent(_crd && AnimationSequencePlayer === void 0 ? (_reportPossibleCrUseOfAnimationSequencePlayer({
                    error: Error()
                  }), AnimationSequencePlayer) : AnimationSequencePlayer); //fd.animationSequencePlayer=new AnimationSequencePlayer(fd.animation);

                  fd.animationSequencePlayer.setAnimation(fd.animation);
                  fd.animationSequencePlayer.otherData = fd.particle;
                  log('check_animationClipsSS', fd.animation.clips);
                  fd.animationSequencePlayer.sequenceData = {
                    start: {
                      index: -1,
                      sequence: [{
                        keyframe: 'in',
                        clip: this.getAnimationClip(fd.animation, 'in'),
                        loop: 1,
                        count: 1
                      }]
                    },
                    sequence: {
                      index: -1,
                      sequence: [{
                        keyframe: 'roar',
                        clip: this.getAnimationClip(fd.animation, 'roar'),
                        loop: -1,
                        count: 2,
                        sendEvtFrame: 11
                      }, {
                        keyframe: 'attack01',
                        clip: this.getAnimationClip(fd.animation, 'attack01'),
                        loop: 1,
                        count: 1,
                        sendEvtFrame: 8
                      }, {
                        keyframe: 'roar',
                        clip: this.getAnimationClip(fd.animation, 'roar'),
                        loop: -1,
                        count: 2,
                        sendEvtFrame: 11
                      }, //--這個動作有點小,可以拿掉
                      //{keyframe:'attack03',clip:this.getAnimationClip(fd.animation,'attack03'),loop:1,count:1},
                      {
                        keyframe: 'attack02',
                        clip: this.getAnimationClip(fd.animation, 'attack02'),
                        loop: 1,
                        count: 1,
                        sendEvtFrame: 18
                      } //{keyframe:'idle',clip:this.getAnimationClip(fd.animation,'idle'),loop:1,count:1} 
                      //{keyframe:'roar',clip:this.getAnimationClip(fd.animation,'roar'),loop:-1,count:2,sendEvtFrame:11},
                      //{keyframe:'attack04',clip:this.getAnimationClip(fd.animation,'attack04'),loop:1,count:1}
                      ]
                    },
                    standby: {
                      index: -1,
                      sequence: [{
                        keyframe: 'idle',
                        clip: this.getAnimationClip(fd.animation, 'idle'),
                        loop: 1,
                        count: 1
                      }]
                    },
                    end: {
                      index: -1,
                      sequence: [{
                        keyframe: 'out',
                        clip: this.getAnimationClip(fd.animation, 'out'),
                        loop: 1,
                        count: 1
                      }]
                    }
                  }; //-animationSequencePlayerEvent

                  fd.animationSequencePlayer.eventTarget.on((_crd && BaseEvent === void 0 ? (_reportPossibleCrUseOfBaseEvent({
                    error: Error()
                  }), BaseEvent) : BaseEvent).PLAY_ANI, this.animationSequencePlayerEvent); //fd.animationSequencePlayer.play();
                }
              }
            } //---啟動相關node事宜


            fd.fishMesh = mesh;

            if (fd.fishMeshState == (_crd && fishMeshState === void 0 ? (_reportPossibleCrUseOffishMeshState({
              error: Error()
            }), fishMeshState) : fishMeshState).fish2D) {
              fd.collisionArea = fd.fishMesh.getComponents(Collider2D);
            } else {
              fd.collisionArea = this.getSPFishColliders(fd);
            }

            log('check_fishBounding_init', fd.collisionArea);
            fd.fishMesh.active = false;

            if (fd.fishShadow) {
              fd.fishShadow.active = false;
            } //---for test--20231016


            aryFishs.push(fd);
          }

          log('createFish_Done', aryFishs, aryFishs.length); //--因為server 會在進入房間資訊前就會送產生魚的資訊,因此抓不到_playerTableCoordinate資料

          if (this._playerTableCoordinate == 0) {
            //---延後產生
            this._delayFdata = this._delayFdata.concat(aryFishs);
          } else {
            log('check__delayFdata_', this._delayFdata);

            if (this._delayFdata.length > 0) {
              //aryFishs.concat(this._delayFdata);
              this._delayFdata = this._delayFdata.concat(aryFishs);
              this.delayRotationCreateFish();
            } else {
              this.delayCreateFish(aryFishs);
            }
          } //this.emit(FishEvent.NEWFISH_IS_READY,new FishCenter.FishEvent(FishCenter.FishEvent.NEWFISH_IS_READY,false,[fishPathData.groupId]));
          //--for test
          //this.getOutsideFish();

        }

        delayCreateFish(aryFishs) {
          //---測試關閉
          var nowTime = 0; //let dgFlag:number=0;

          for (var i = 0; i < aryFishs.length; i++) {
            nowTime = Date.now(); //---正式要打開20240401
            //nowTime=1712549597525//--測試數據 正式要關閉20240401

            log('check_bornTime', (aryFishs[i].alreadyServerTime + (nowTime - aryFishs[i].creatTime)) / 1000, 'type:', aryFishs[i].fishType, 'fid:', aryFishs[i].id);

            this._pathCenter.setUnitInFlock(aryFishs[i].pathID, [aryFishs[i].fishFlockUnit], //--這邊有可能會是負數--會在右上角閃爍20240401
            (aryFishs[i].alreadyServerTime + (nowTime - aryFishs[i].creatTime)) / 1000, //--路徑系統以秒為單位
            //aryFishs[i].alreadyServerTime/1000,//--測試數據20240402
            //0,
            aryFishs[i].fishMeshState, 1);

            aryFishs[i].fishMesh.active = true;

            if (aryFishs[i].fishShadow) {
              aryFishs[i].fishShadow.active = true;
            } //log('check_finalFishData>',aryFishs[i],'_id',aryFishs[i].id,'type>>',aryFishs[i].fishType,'pathID>',aryFishs[i].pathGroupID,'pathTime>>',(aryFishs[i].alreadyServerTime+(nowTime-aryFishs[i].creatTime)),'isReverse',aryFishs[i].fishFlockUnit.isReverse);


            log('check_finalFishData>', aryFishs[i], '_id', aryFishs[i].id, 'type>>', aryFishs[i].fishType, 'pathID>', aryFishs[i].pathGroupID, 'nowTime>', nowTime, 'creatTime>', aryFishs[i].creatTime, 'alreadyServerTime>', aryFishs[i].alreadyServerTime, 'pathTime>>', aryFishs[i].alreadyServerTime + (nowTime - aryFishs[i].creatTime), 'isReverse', aryFishs[i].fishFlockUnit.isReverse);

            this._aryFishData.push(aryFishs[i]);

            aryFishs.splice(i, 1);
            i = i - 1;
          } //his._aryFishData=this._aryFishData.concat(aryFishs);

          /*
          if(dgFlag!=0)
          {
              this.removeFishById(dgFlag);
          }*/


          log('check_nodeChildren', this._fishContainer);
        }

        resetFreezeDuringTime() {
          //-_freezeLastTime
          //let nowTime:number=Date.now();

          /*
          for(let i:number=0;i<this._delayFdata.length;i++)
          {
              let duringTime=this._delayFdata[i].freeze-(nowTime-this._freezeLastTime);
              //--實際上的路徑時間
              this._delayFdata[i].alreadyServerTime=this._delayFdata[i].alreadyServerTime-duringTime;
          }*/
          for (var i = 0; i < this._delayFdata.length; i++) {
            //--實際上的路徑時間
            this._delayFdata[i].alreadyServerTime = this._delayFdata[i].alreadyServerTime - this._delayFdata[i].freeze;
          }
        }

        delayRotationCreateFish() {
          log('delayRotationCreateFish', this._delayFdata); //---測試關閉

          var nowTime = 0;
          var dgFlag = 0;

          for (var i = 0; i < this._delayFdata.length; i++) {
            nowTime = Date.now();
            log('alreadyServerTime_', this._delayFdata[i].alreadyServerTime, '_createTime_', this._delayFdata[i].creatTime, (this._delayFdata[i].alreadyServerTime + (nowTime - this._delayFdata[i].creatTime)) / 1000, 'fid:', this._delayFdata[i].id);
            /*
            if(this._freezeLastTime!=0)
            {
                this._delayFdata[i].alreadyServerTime=this._delayFdata[i].alreadyServerTime-(nowTime-this._freezeLastTime);
            }*/

            this._pathCenter.setUnitInFlock(this._delayFdata[i].pathID, [this._delayFdata[i].fishFlockUnit], (this._delayFdata[i].alreadyServerTime + (nowTime - this._delayFdata[i].creatTime)) / 1000, //--路徑系統以秒為單位
            //0,
            this._delayFdata[i].fishMeshState, 1);

            if (this._delayFdata[i].fishMeshState == (_crd && fishMeshState === void 0 ? (_reportPossibleCrUseOffishMeshState({
              error: Error()
            }), fishMeshState) : fishMeshState).fish2D) {
              if (this._coordinateMode == (_crd && GameCoordinateMode === void 0 ? (_reportPossibleCrUseOfGameCoordinateMode({
                error: Error()
              }), GameCoordinateMode) : GameCoordinateMode).GameViewMode_Four_in_one) {
                /*
                if(this._playerTableCoordinate==1 || this._playerTableCoordinate==2)
                {
                    this._delayFdata[i].fishMesh.setScale(v3(this._delayFdata[i].fishMesh.scale.x*-1,this._delayFdata[i].fishMesh.scale.y*-1));
                }*/
                if (this._delayFdata[i].rotationState == (_crd && FishRotationState === void 0 ? (_reportPossibleCrUseOfFishRotationState({
                  error: Error()
                }), FishRotationState) : FishRotationState).noRotation) {
                  //---預設的魚頭都是朝左邊(sin(0))
                  //----type 1海星他一開始就是做正的,所以不用轉
                  if (this._delayFdata[i].fishType != 1) {
                    var rv = this._playerTableCoordinate == 1 || this._playerTableCoordinate == 2 ? -1 : 1;
                    this._delayFdata[i].fishMesh.angle = math.toDegree(rv * Math.PI / 2); //--影子

                    this._delayFdata[i].fishShadow.angle = math.toDegree(rv * Math.PI / 2);
                  }
                }
              } //--海星一開始就是做正的


              this._delayFdata[i].fishMesh.setScale(v3(this._delayFdata[i].fishMesh.scale.x, this._delayFdata[i].fishMesh.scale.y * this._rotateValue));

              this._delayFdata[i].fishShadow.setScale(v3(this._delayFdata[i].fishMesh.scale.x, this._delayFdata[i].fishMesh.scale.y));
            }

            this._delayFdata[i].fishMesh.active = true;

            if (this._delayFdata[i].fishShadow) {
              this._delayFdata[i].fishShadow.active = true;
            } //--因為進桌的資料會在房間狀態改變的資料之後才會拿到-20240223


            if (this._delayFdata[i] && this._isFreeze) {
              this._delayFdata[i].animation.pause();

              if (this._delayFdata[i].fishShadow) {
                this._delayFdata[i].fishShadow.getComponent(Animation).pause();
              }
            } //this._aryFishData=this._aryFishData.concat(this._delayFdata[i]);


            this._aryFishData.push(this._delayFdata[i]);

            this._delayFdata.splice(i, 1);

            i = i - 1;
          }
          /*
          if(dgFlag!=0)
          {
              this.removeFishById(dgFlag);
          }*/


          log('check_delay_nodeChildren', this._fishContainer);
        }
        /**
         * 要來比對場上是否有同樣的3D魚,有的話就重新挑一個位置給他
         * 
         * @param flshType 
         * @returns 
         */


        checkNowThreeDfishZindex(flshType) {
          var baseZinex = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).deepCloneForObject(this._defaultZindex);
          var ogLength = baseZinex.length;
          var ogzindex;
          var index;
          var returnValue = -1;

          for (var i = 0; i < this._aryFishData.length; i++) {
            if (this._aryFishData[i].fishType == flshType) {
              ogzindex = this._aryFishData[i].fishMesh.position.z;
              index = baseZinex.indexOf(ogzindex);

              if (index != -1) {
                baseZinex.splice(index, 1);
              }
            }
          }

          if (ogLength != baseZinex.length) {
            returnValue = baseZinex.shift();
          }

          return returnValue;
        } //===================create fish===========================================================================================


        cleanTable() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.removeFishAimLock();

            _this.removeAllFish();
          })();
        }
        /**
         * 直接全部刪除(用來清場的)
         * 
         */


        removeAllFish() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            //--後續要在處理
            return new Promise((resolve, reject) => {
              for (var i = 0; i < _this2._aryFishData.length; i++) {
                var fd = _this2._aryFishData[i];

                if (fd.fishMeshState == (_crd && fishMeshState === void 0 ? (_reportPossibleCrUseOffishMeshState({
                  error: Error()
                }), fishMeshState) : fishMeshState).fish2D) {
                  var ani = fd.animation;
                  ani.stop();

                  _this2._fishContainer.removeChild(fd.fishMesh);

                  if (fd.fishShadow) {
                    ani = fd.fishShadow.getComponent(Animation);
                    ani.stop();

                    _this2._fishShadowContainer.removeChild(fd.fishShadow);
                  }
                } else {
                  var tweenmax = fd.fishMesh.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                    error: Error()
                  }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

                  if (tweenmax) {
                    if (TweenMax.isTweening(tweenmax)) {
                      TweenMax.killTweensOf(tweenmax);
                    }
                  }

                  var timeUpdate = fd.fishMesh.getComponent(_crd && TimeUpdateForMove === void 0 ? (_reportPossibleCrUseOfTimeUpdateForMove({
                    error: Error()
                  }), TimeUpdateForMove) : TimeUpdateForMove);

                  if (timeUpdate) {
                    timeUpdate.destory();
                  }

                  fd.animation.stop();
                  director.getScene().removeChild(fd.fishMesh);
                }

                fd.fishMesh.destroy(); //--使用播放腳本清單

                if (fd.animationSequencePlayer) {
                  fd.animationSequencePlayer.destory();
                  fd.animationSequencePlayer.eventTarget.off((_crd && BaseEvent === void 0 ? (_reportPossibleCrUseOfBaseEvent({
                    error: Error()
                  }), BaseEvent) : BaseEvent).PLAY_ANI, _this2.animationSequencePlayerEvent);
                }

                if (fd.fishAimLock && _this2._lockFish.id == fd.id) {
                  _this2._aimLockNode.active = false;
                } //--現在都是一條魚配一個路徑,所以不會有一條路徑多條魚的情況了


                _this2._pathCenter.deleteGroupPath(fd.pathID);

                _this2._aryFishData.splice(i, 1);

                if (_this2._poolFishData.length < 100) {
                  fd.init();

                  _this2._poolFishData.push(fd);
                } else {
                  fd = null;
                }

                i = i - 1;
              }

              resolve();
            });
          })();
        }

        removeFishById(id) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            //if(!this._removeFishByIdPromise)
            //{
            //--resolve在一個promise當中只能執行一次,硬要的話就是用then,但骨子裡還是new一個promise   
            //this._removeFishByIdPromise=new Promise<void>((resolve,reject)=>
            return new Promise((resolve, reject) => {
              var len = _this3._aryFishData.length;
              var foundMatch = false;

              for (var i = 0; i < len; i++) {
                if (_this3._aryFishData[i].id == id) {
                  log('check_match_id_removeFishById', id);
                  var fd = _this3._aryFishData[i];

                  if (fd.fishMeshState == (_crd && fishMeshState === void 0 ? (_reportPossibleCrUseOffishMeshState({
                    error: Error()
                  }), fishMeshState) : fishMeshState).fish2D) {
                    var ani = fd.animation;
                    ani.stop();

                    _this3._fishContainer.removeChild(fd.fishMesh);

                    if (fd.fishShadow) {
                      ani = fd.fishShadow.getComponent(Animation);
                      ani.stop();

                      _this3._fishShadowContainer.removeChild(fd.fishShadow);
                    }
                  } else {
                    var tweenmax = fd.fishMesh.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                      error: Error()
                    }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

                    if (tweenmax) {
                      if (TweenMax.isTweening(tweenmax)) {
                        TweenMax.killTweensOf(tweenmax);
                      }
                    }

                    var timeUpdate = fd.fishMesh.getComponent(_crd && TimeUpdateForMove === void 0 ? (_reportPossibleCrUseOfTimeUpdateForMove({
                      error: Error()
                    }), TimeUpdateForMove) : TimeUpdateForMove);

                    if (timeUpdate) {
                      timeUpdate.destory();
                    }

                    fd.animation.stop();
                    director.getScene().removeChild(fd.fishMesh);
                  }

                  fd.fishMesh.destroy(); //--使用播放腳本清單

                  if (fd.animationSequencePlayer) {
                    fd.animationSequencePlayer.destory();
                    fd.animationSequencePlayer.eventTarget.off((_crd && BaseEvent === void 0 ? (_reportPossibleCrUseOfBaseEvent({
                      error: Error()
                    }), BaseEvent) : BaseEvent).PLAY_ANI, _this3.animationSequencePlayerEvent);
                  }

                  if (fd.fishAimLock && _this3._lockFish.id == fd.id) {
                    _this3._aimLockNode.active = false;
                  } //-{activeNode:Node,particle:{[key:string]:ParticleSystem}}
                  //--現在都是一條魚配一個路徑,所以不會有一條路徑多條魚的情況了


                  _this3._pathCenter.deleteGroupPath(fd.pathID);

                  _this3._aryFishData.splice(i, 1);

                  if (_this3._poolFishData.length < 100) {
                    fd.init();

                    _this3._poolFishData.push(fd);
                  } else {
                    fd = null;
                  } //resolve();


                  foundMatch = true;
                  break;
                }
              }
              /*----不管有沒有找到我都要完成執行
              if(foundMatch)
              {
                  resolve();
               }else{
                  
                  reject();
              }*/


              resolve();
            }); //}
            //return this._removeFishByIdPromise;
          })();
        } //--拿可視範圍內的魚(自己不拿)


        getOutsideFish(fid) {
          var len = this._aryFishData.length;
          var idReturn = [];

          for (var i = 0; i < len; i++) {
            if (this._aryFishData[i].id != fid) {
              if (this._aryFishData[i].fishFlockUnit.time > 0 && this._aryOutSideBanndedType.indexOf(this._aryFishData[i].fishType) == -1) {
                if (this._aryFishData[i].fishFlockUnit.position.x <= (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                  error: Error()
                }), CocosGameSetting) : CocosGameSetting).Game_Width - 50 && this._aryFishData[i].fishFlockUnit.position.x > 75) {
                  if (this._aryFishData[i].fishFlockUnit.position.y <= (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
                    error: Error()
                  }), CocosGameSetting) : CocosGameSetting).Game_Height - 100 && this._aryFishData[i].fishFlockUnit.position.y > 55) {
                    idReturn.push(this._aryFishData[i].id);
                  }
                }
              }
            }
          }

          log("check fish is out side>>>>>", idReturn);
          return idReturn;
        } //--秀出禁止打擊的符號在魚身上


        displayProhibitSign(fd) {}

        unDisplayProhibitSign(fd) {} //--持續改變顯示魚的賠率 


        updateOddsForSPFish(value) {} //===================about path===================================================================================================


        reSetPathTime(fishInfo) {} //---新產生的表演群校正時間


        reSetFishBronTime() {
          /*
          let reSetBornTimeData:
          {
              pathTokenID:string,//--要抽出actionBase
              reNewBornTime:number//--重算之後的目前存活時間
              flockUnit:PathFlockUnit
          };*/
          var resetDatas = [];
          var nowTimestamp = new Date().getTime();

          for (var i = 0; i < this._aryFishData.length; i++) {
            var realTime = nowTimestamp - this._aryFishData[i].createServerTime;

            this._aryFishData[i].fishFlockUnit.reset();

            var reSetBornTimeData = {
              pathTokenID: this._aryFishData[i].pathID,
              reNewBornTime: realTime / 1000,
              //--路徑以秒為單位
              flockUnit: this._aryFishData[i].fishFlockUnit
            }; //-ResetPathData

            resetDatas.push(reSetBornTimeData);
          }

          this._pathCenter.reSetNewFishBronTime(resetDatas);
        }

        getFishByShowGroupId(id) {
          return null;
        }
        /**
         * 魚群表演系統全部退場
         */


        exitAllFish() {
          //this._pathCenter.exitAllPath(this._aryFishData);
          this._pathCenter.exitAllPath();
        }
        /**
         * 
         * @param groupId 目前把pathID放在fd.groupID裡面(fd.pathID他是pathid+'_'+Date.now)
         */


        exitSingleGloupPath(groupId) {
          var len = this._aryFishData.length;
          var aryExit = [];

          for (var i = 0; i < len; i++) {
            if (this._aryFishData[i].pathGroupID == groupId) {
              //--fishFlockUnit:PathFlockUnit;
              aryExit.push({
                f: this._aryFishData[i].fishFlockUnit,
                pathId: this._aryFishData[i].pathID
              });
            }
          }

          this._pathCenter.exitSingleGloupPath(groupId, aryExit);
        } //---將魚隻剃除在運動路徑之外


        removeSinglePathUnitByFishId(fishId) {
          //-this._pathCenter.createPath(unit[3],fd.pathID,unit[4]);
          var len = this._aryFishData.length;
          var fishPathLen = -1;

          for (var i = 0; i < len; i++) {
            if (this._aryFishData[i].id == fishId) {
              fishPathLen = this._pathCenter.removeSingleUnit(this._aryFishData[i].pathID, this._aryFishData[i].fishFlockUnit);

              if (fishPathLen == 0) {
                log('removeGroup!!!!!');

                this._pathCenter.deleteGroupPath(this._aryFishData[i].pathID); //--該表演群裏頭的魚隻都被移除

              }

              break;
            }
          }
        }
        /**
         * 單一表演群路徑退場(移除單一路徑)
         * @param id 表演路徑單一識別碼
         */


        exitSinglePathByPathId(id) {
          var len = this._aryFishData.length;
          var aryFlockUnit = [];

          for (var i = 0; i < len; i++) {
            if (this._aryFishData[i].pathID == id) {
              aryFlockUnit.push(this._aryFishData[i].fishFlockUnit);
            }
          }

          this._pathCenter.exitPath(id, aryFlockUnit);
        }

        removeBoss() {
          for (var i = 0; i < this._aryFishData.length; i++) {
            if (this._aryFishData[i].fishType == 21) {
              //-fd.fishType==21
              this.exitSinglePathByPathId(this._aryFishData[i].pathID);
              this.removeFishById(this._aryFishData[i].id);
              break;
            }
          }
        } //===================animation===================================================================================================


        pauseAllFishAnimation() {
          for (var i = 0; i < this._aryFishData.length; i++) {
            var fd = this._aryFishData[i];

            if (fd) {
              fd.animation.pause();

              if (fd.fishShadow) {
                fd.fishShadow.getComponent(Animation).pause();
              }
            }
          }
        }

        resumeAllFishAnimation() {
          for (var i = 0; i < this._aryFishData.length; i++) {
            var fd = this._aryFishData[i];

            if (fd) {
              fd.animation.resume();

              if (fd.fishShadow) {
                fd.fishShadow.getComponent(Animation).resume();
              }
            }
          }
        }

        //---擊中動畫效果
        //---擊中動畫效果
        changeSingleFishAnimation(id) {
          var fd = this.getFishById(id);

          if (fd != null) {
            fd.isHit = true;
            fd.countHitAni = fd.hitAniMilliSecond;

            if (fd.fishMesh instanceof Animation) {//--spine?
            } else if (fd.fishMesh instanceof (_crd && FishCustomAnimation === void 0 ? (_reportPossibleCrUseOfFishCustomAnimation({
              error: Error()
            }), FishCustomAnimation) : FishCustomAnimation)) {//--自訂義的圓盤類型的魚
            } else if (fd.fishMesh instanceof Node) {
              //---一般魚
              if (fd.fishMeshState == (_crd && fishMeshState === void 0 ? (_reportPossibleCrUseOffishMeshState({
                error: Error()
              }), fishMeshState) : fishMeshState).fish2D) {
                var spr = fd.fishMesh.getChildByName('fish').getChildByName('fish').getComponent(Sprite); //log('check_fishMeshNode',fd.fishMesh,spr);

                spr.color = color(255, 28, 28, 255);
              } else {
                //--3d魚
                if (fd.fishType == 21) {//--boss
                } else if (fd.fishType == 23) {
                  if (this._viewModel['_roomStatus'].status != 1) {
                    //---bomb-donothing
                    if (!TweenMax.isTweening(fd.fishMesh.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                      error: Error()
                    }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin))) {
                      TweenMax.to(fd.fishMesh.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                        error: Error()
                      }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), .08, {
                        scale: 1.5,
                        repeat: 3,
                        yoyo: true
                      });
                    }
                  }
                } else {
                  //--other 3d fish
                  if (this._viewModel['_roomStatus'].status != 1) {
                    var clip = this.getAnimationClip(fd.animation, 'hurt');

                    if (clip) {
                      fd.animation.stop();
                      fd.animation.play(clip.name); //log('check_hurtClip',clip,fd.animation.getState(clip.name));     
                    }
                  }
                }

                fd.fishSkinnedMeshRenderer.materials[0].setProperty('mainColor', color(255, 28, 28, 255));
              }
            }
          }
        }
        /**
         * -在2D/3D都會發生(3D是在冰凍狀態下發生的)
         * 在冰凍狀態下3D物件必須有反應,所以3D物件只有在冰凍的狀態之下才會觸發此方法
         * @param fd FishData
         */


        hitFishAniComplete(fd) {
          if (!fd) {
            return;
          }

          fd.isHit = false;
          fd.countHitAni = 0;

          if (fd.fishMesh instanceof Animation) {//--spine?
          } else if (fd.fishMesh instanceof (_crd && FishCustomAnimation === void 0 ? (_reportPossibleCrUseOfFishCustomAnimation({
            error: Error()
          }), FishCustomAnimation) : FishCustomAnimation)) {//--自訂義的圓盤類型的魚
          } else if (fd.fishMesh instanceof Node) {
            //---一般魚
            if (fd.fishMeshState == (_crd && fishMeshState === void 0 ? (_reportPossibleCrUseOffishMeshState({
              error: Error()
            }), fishMeshState) : fishMeshState).fish2D) {
              var spr = fd.fishMesh.getChildByName('fish').getChildByName('fish').getComponent(Sprite); //log('finishHitComplete',fd.fishMesh,spr);

              spr.color = color(255, 255, 255, 255);
            } else {
              if (fd.fishType == 21) {//--boss
              } else if (fd.fishType == 23) {
                if (this._viewModel['_roomStatus'].status != 1) {
                  //---bomb-donothing
                  if (TweenMax.isTweening(fd.fishMesh.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                    error: Error()
                  }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin))) {
                    TweenMax.killTweensOf(fd.fishMesh.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                      error: Error()
                    }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin));
                  }

                  fd.fishMesh.setScale(v3(1, 1, 1));
                }
              } else {
                //--other 3d fish
                var defaultClipId = fd.fishType == 14 || fd.fishType == 15 || fd.fishType == 18 || fd.fishType == 19 ? 'swim' : 'swin';

                if (this._viewModel['_roomStatus'].status != 1) {
                  var clip = this.getAnimationClip(fd.animation, defaultClipId);

                  if (clip) {
                    fd.animation.stop(); //let anistates:AnimationState=fd.animation.getState(clip.name);
                    //anistates.repeatCount=Infinity;--無限播放

                    fd.animation.play(clip.name);
                    log('check_SwinClip', clip, fd.animation.getState(clip.name));
                  }
                }
              }

              fd.fishSkinnedMeshRenderer.materials[0].setProperty('mainColor', color(255, 255, 255, 255));
            }
          }
        } //===================aim target===================================================================================================


        addFishAimLock(id, isPlayer, table) {
          var fd = this.getFishById(id);

          if (fd) {
            if (this._lockFish) {
              this._lockFish.fishAimLock = false;
              this._lockFish = null;
            }

            fd.fishAimLock = true;
            this._lockFish = fd;

            if (this._aimLockNode.active) {
              this._aimLockNode.active = false;

              this._aimLockNode.setScale(1, 1);

              this._aimLockNode.getComponent(UIOpacity).opacity = 255;
            }

            var localPos;
            var worldPos;

            if (fd.fishMeshState == (_crd && fishMeshState === void 0 ? (_reportPossibleCrUseOffishMeshState({
              error: Error()
            }), fishMeshState) : fishMeshState).fish2D) {
              worldPos = this._fishContainer.getComponent(UITransform).convertToWorldSpaceAR(fd.fishMesh.position);
              localPos = this._fishAimContainer.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
            } else {
              if (fd.fishType != 21) {
                localPos = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                  error: Error()
                }), GameUtils) : GameUtils).conver3dposTo2dpos(this._fishAimContainer, 'Canvas/Camera', 'Main Camera', fd.fishMesh.position);
              } else {
                //---boss(都秀在頭上)
                //-r[6]=fd.fishMesh.children[0].children[3].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0];//-第7個--
                //let bossShowAimNode=fd.fishMesh.children[0].children[3].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0];
                var shape = fd.collisionArea[6].shape;
                var worldobb = shape.worldObb;
                localPos = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                  error: Error()
                }), GameUtils) : GameUtils).conver3dposTo2dpos(this._fishAimContainer, 'Canvas/Camera', 'Main Camera', worldobb.center);
                log('check_bossObbData', shape, fd.collisionArea);
              }
            }

            this._aimLockNode.active = true;

            this._aimLockNode.setPosition(localPos);

            log('fishView_addFishAimLock', this._aimLockNode, fd);
            this._aimLockNode.getComponent(UIOpacity).opacity = 128;

            this._aimLockNode.setScale(10, 10);

            var tweenComponent = this._aimLockNode.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

            TweenMax.to(tweenComponent, 0.2, {
              scale: 1,
              opacity: 255
            });
          }
        }

        removeFishAimLock() {
          if (this._lockFish) {
            this._lockFish.fishAimLock = false;
            this._aimLockNode.active = false;
          }
        } //--好像沒用到


        removeAllAim() {}

        removeFishAimLockByLockId(id) {
          if (this._lockFish) {
            if (this._lockFish.id == id) {
              this._lockFish.fishAimLock = false;
              this._aimLockNode.active = false;
            }
          }
        } //===sp function============================================


        getParticle(target) {
          var particle = {
            activeNode: null,
            particle: {}
          };
          var node = target.children[0].getChildByName('GoldDragon_LP_all Socket').children[0].children[0].children[0].children[0].children[0].children[0].children[0].getChildByName('CoinBorn').children[0];
          particle.activeNode = node;
          node.active = false;
          var nodes = node.children;

          for (var i of nodes) {
            particle.particle[i.name] = i.getComponent(ParticleSystem);
          }

          log('check_particle', particle);
          return particle;
        }

        getAnimationClip(target, index) {
          var clip = null;
          var clips = target.clips;
          log('getAnimationClip', target);

          for (var i = 0; i < clips.length; i++) {
            if (clips[i].name == index) {
              clip = clips[i];
              break;
            }
          }

          return clip;
        }

        getAnimationFromFishMesh3D(aniTargetNode, type) {
          //--PS 要把它加入顯示清單才能操作相關的animationState物件,不然會找不到
          //log('getAnimationFromFishMesh3D',aniTargetNode,type);
          var ani;
          var clips;

          if (type == 23) {
            //--炸彈
            ani = aniTargetNode.children[0].getComponent(Animation);
            clips = ani.clips;
            clips[0].wrapMode = AnimationClip.WrapMode.Loop;
          } else if (type == -1) {
            //--金海龜
            ani = aniTargetNode.children[0].getChildByName('stingray_LP').getComponent(SkeletalAnimation); //log('checkType17',ani);
          } else if (type == 21) {
            //---boss 龍
            ani = aniTargetNode.children[0].getComponent(SkeletalAnimation); //log('checkType21',ani);
          } else {
            //--其他3D魚 
            ani = aniTargetNode.children[0].getComponent(SkeletalAnimation);
            clips = ani.clips;

            for (var i = 0; i < clips.length; i++) {
              if (clips[i].name == 'swin' || clips[i].name == 'hurt' || clips[i].name == 'swim') {
                clips[i].wrapMode = AnimationClip.WrapMode.Loop;
                /*---沒用prefab物件不能這樣改名字
                if(clips[i].name=='swim')
                {
                    clips[i].name='swin';//--美術有命名不同的問題(14)
                }*/
              }
            } //log('checkType17',ani);
            //--可以藉由clips裡面的name拿到aniamtionstate(從animation.getState),裡面有相關的屬性可以判斷現在動畫的狀態

          }

          return ani;
        }
        /**
         * 因為製作方式,美術包裝過後的node path不固定
         * @param targteNode 從prefab產生出來的3Dnode
         * @param type fishtype
         * @returns SkinnedMeshRenderer
         */


        getSkinnedMeshRenderer(targteNode, type) {
          var skinMeshRender;

          if (type == 21) {
            //--boss
            skinMeshRender = targteNode.children[0].getChildByName('GoldDragon_LP').getComponent(SkinnedMeshRenderer);
          } else if (type == 23) {
            //--炸彈
            skinMeshRender = targteNode.children[0].children[0].getChildByName('bombfish').getComponent(MeshRenderer);
          } else if (type == 17) {
            skinMeshRender = targteNode.children[0].getChildByName('goldseaturtle_LP').getComponent(SkinnedMeshRenderer);
          } else if (type == 18) {
            skinMeshRender = targteNode.children[0].getChildByName('crocodile_LP').getComponent(SkinnedMeshRenderer);
          } else {
            //--一般3D的魚
            skinMeshRender = targteNode.children[0].children[0].getComponent(SkinnedMeshRenderer);
          }

          return skinMeshRender;
        }
        /**
         * 
         * @param fd fishData
         * @returns colliders[]
         * 要去判斷魚的type來決定不同的取法,因為美術的素材包裝collider的層級不同
         */


        getSPFishColliders(fd) {
          var r;

          if (fd.fishType != 21) {
            //--一般3D的魚
            log('getSPFishColliders_checkColliders', fd.fishMesh);
            r = fd.fishMesh.getComponents(Collider2D);
            /*
            let boxCollider:BoxCollider=fd.collisionArea[0] as BoxCollider;
            let testboundingAABB=boxCollider.worldBounds;
            //let testboundingOBB=boxCollider;
            let testShape:BuiltinBoxShape=boxCollider.shape;
            let wobb=testShape.worldObb;
            let testGeometry=new geometry.AABB();
            testShape.getAABB(testGeometry);
            */
          } else {
            r = [];
            r[0] = fd.fishMesh.children[0].children[3].children[0].children[0].getComponent(Collider); //-第一個

            r[1] = fd.fishMesh.children[0].children[3].children[0].children[0].children[0].getComponent(Collider); //-第2個

            r[2] = fd.fishMesh.children[0].children[3].children[0].children[0].children[0].children[0].getComponent(Collider); //-第3個

            r[3] = fd.fishMesh.children[0].children[3].children[0].children[0].children[0].children[0].children[0].getComponent(Collider); //-第4個

            r[4] = fd.fishMesh.children[0].children[3].children[0].children[0].children[0].children[0].children[0].children[0].getComponent(Collider); //-第5個

            r[5] = fd.fishMesh.children[0].children[3].children[0].children[0].children[0].children[0].children[0].children[0].children[0].getComponent(Collider); //-第6個
            //--頭

            r[6] = fd.fishMesh.children[0].children[3].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].getComponent(Collider); //-第7個--

            r[7] = fd.fishMesh.children[0].children[3].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[1].getComponent(Collider); //-第8個--

            log('checkFishNode', fd.fishMesh, r);
          }

          return r;
        } //--排序

        /**
         * 3D要在處理'這邊只是2D的排序
         */


        sortAllFishLayer() {
          //this._aryFishData=this.bubbleSort(this._aryFishData);
          this._aryFishData.sort((a, b) => a.lv - b.lv);

          for (var i = 0; i < this._aryFishData.length; i++) {
            //this._fishContainer.setChildIndex(this._aryFishData[i].fishMesh,i); 
            //--當前node在parent的children當中的位置
            //this._fishContainer.setSiblingIndex()
            if (this._aryFishData[i].fishMeshState == (_crd && fishMeshState === void 0 ? (_reportPossibleCrUseOffishMeshState({
              error: Error()
            }), fishMeshState) : fishMeshState).fish2D) {
              this._fishContainer.insertChild(this._aryFishData[i].fishMesh, i);
            } else {
              /*
              this._fish3DZindex-=500;
               if(this._fish3DZindex<-5000)
              {
                  this._fish3DZindex=0;
              }
               this._aryFishData[i].fishMesh.setPosition(v3(this._aryFishData[i].fishMesh.position.x,this._aryFishData[i].fishMesh.position.y,this._fish3DZindex));
              */
              //log('checkZindx__',this._aryFishData[i].fishType,this._aryFishData[i].fishMesh.getPosition().z,this._aryFishData[i].fishMesh.getWorldPosition().z,this._aryFishData[i].lv);

              /**
               * 
                  this._fish3DZindex-=500;//-有些模型的動作表較大,這是安全深度
                   if(this._fish3DZindex<-5000)
                  {
                      this._fish3DZindex=0;
                  }
                   //fd.lv=this._fish3DZindex;
               */
            } //-insertChild(插入子node到指定的深度)

          }
        }

        /**
         * 
         * @param t sec
         */
        updateFrezzeHitAniUpdate(t) {
          for (var i = 0; i < this._aryFishData.length; i++) {
            if (this._aryFishData[i].isHit) {
              this._aryFishData[i].countHitAni -= t;

              if (this._aryFishData[i].countHitAni <= 0) {
                //--finish-
                this.hitFishAniComplete(this._aryFishData[i]);
              }
            }
          }
        }

        renderFish(t) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            //this._aryFishData[0].fishMesh.setPosition(v3(-860,100));--3d
            //this._aryFishData[0].fishMesh.setPosition(v3(85,70));
            //this._aryFishData[0].fishMesh.setPosition(v3(1920/2,1080/2));
            //this._aryFishData[0].fishMesh.setPosition(v3(892.3054545454635,369.74000000000416));

            /*
            if(this._aryFishData[0].fishType!=21)
            {
                for(let c:number=0;c<(<Fish1FishData>this._aryFishData[0]).collisionArea.length;c++)
                {
                    (<Collider2D>(<Fish1FishData>this._aryFishData[0]).collisionArea[c]).impl.update(t);
                } 
            }*/
            //log('renderFish_checkUpdateTime',t);
            //return;
            if (_this4._aryFishData.length > 0) {
              var flockUnit;
              var localPos;
              var worldPos;

              for (var i = 0; i < _this4._aryFishData.length; i++) {
                if (!_this4._aryFishData[i].fishIsFlash && !_this4._aryFishData[i].isDead) {
                  flockUnit = _this4._aryFishData[i].fishFlockUnit;

                  if (_this4._aryFishData[i].isHit) {
                    _this4._aryFishData[i].countHitAni -= t; //log('check_isHitFish',this._aryFishData[i].countHitAni);

                    if (_this4._aryFishData[i].countHitAni <= 0) {
                      //--finish-
                      _this4.hitFishAniComplete(_this4._aryFishData[i]);
                    }
                  }

                  var theta = Math.atan2(flockUnit.velocity.y, flockUnit.velocity.x);

                  if (_this4._aryFishData[i].fishMeshState == (_crd && fishMeshState === void 0 ? (_reportPossibleCrUseOffishMeshState({
                    error: Error()
                  }), fishMeshState) : fishMeshState).fish2D) {
                    //--一般的魚
                    if (flockUnit.goingAway) {//--離場處理
                    } // log('check_fishFlockUnit_pos',flockUnit.nowIndex,flockUnit.position);
                    //--last=position: {x: 2245.19, y: 404.62, z: 0}


                    _this4._aryFishData[i].fishMesh.setPosition(new Vec3(flockUnit.position.x, flockUnit.position.y, flockUnit.position.z)); //--一般正常狀態的旋轉(一般魚,非自訂義的魚)


                    if (_this4._aryFishData[i].fishMesh instanceof Node && _this4._aryFishData[i].rotationState == (_crd && FishRotationState === void 0 ? (_reportPossibleCrUseOfFishRotationState({
                      error: Error()
                    }), FishRotationState) : FishRotationState).normalRotation) {
                      _this4._aryFishData[i].fishMesh.angle = math.toDegree(theta);

                      if (_this4._aryFishData[i].fishShadow) {
                        _this4._aryFishData[i].fishShadow.setPosition(v3(flockUnit.position.x + 30, flockUnit.position.y - 30, flockUnit.position.z));

                        _this4._aryFishData[i].fishShadow.angle = _this4._aryFishData[i].fishMesh.angle;
                      }

                      if (theta < Math.PI / 2 && theta > -Math.PI / 2) {} else {}
                    } else if (_this4._aryFishData[i].rotationState == (_crd && FishRotationState === void 0 ? (_reportPossibleCrUseOfFishRotationState({
                      error: Error()
                    }), FishRotationState) : FishRotationState).horizontalRotation) {//--不旋轉,但是左右水平翻轉

                      /*
                      if(theta < Math.PI/2 && theta > -Math.PI/2)
                      {
                       }else{
                        }*/
                    } else if (_this4._aryFishData[i].rotationState == (_crd && FishRotationState === void 0 ? (_reportPossibleCrUseOfFishRotationState({
                      error: Error()
                    }), FishRotationState) : FishRotationState).noRotation) {
                      _this4._aryFishData[i].fishShadow.setPosition(v3(flockUnit.position.x + 30, flockUnit.position.y - 30, flockUnit.position.z));
                    }

                    if (_this4._aryFishData[i].fishAimLock) {
                      worldPos = _this4._fishContainer.getComponent(UITransform).convertToWorldSpaceAR(_this4._aryFishData[i].fishMesh.position);
                      localPos = _this4._fishAimContainer.getComponent(UITransform).convertToNodeSpaceAR(worldPos);

                      _this4._aimLockNode.setPosition(localPos);
                    } //--以下兩行為測試--20230817   
                    //--2d
                    //(<any>this._aryFishData[i].fishMesh).setPosition(v3(1920/2,1080/2,flockUnit.position.z));
                    //(<any>this._aryFishData[i].fishShadow).setPosition(v3((1920/2)+30,(1080/2)-30,flockUnit.position.z));
                    //--3d
                    //(<any>this._aryFishData[i].fishShadow).setPosition(v3((1920/2)+30,(1080/2)-30,flockUnit.position.z));

                  } else {
                    /**
                    * pos2d?:Vec2,
                      node2d:Node,
                      camera2dnodeId:string,
                      camera3dnodeId:string
                    */
                    var changeposData = {
                      //pos2d:new Vec2(0,700),
                      pos2d: new Vec2(flockUnit.position.x, flockUnit.position.y),
                      //pos2d:new Vec2(0,0),
                      node2d: _this4._fishContainer,
                      camera2dnodeId: 'Canvas/Camera',
                      camera3dnodeId: 'Main Camera'
                    }; //log('check_fishContainerRotation',find('Canvas/fishNodeContainer').angle);

                    var pos3dchange = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                      error: Error()
                    }), GameUtils) : GameUtils).conver2dposTo3dpos(changeposData); //log('frustumData',this._frustumData);

                    if (_this4._aryFishData[i].fishType != 21) {
                      //--一般3d的魚
                      _this4._aryFishData[i].fishMesh.setPosition(pos3dchange.x, pos3dchange.y, _this4._aryFishData[i].fishMesh.position.z);

                      if (_this4._aryFishData[i].fishAimLock) {
                        localPos = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                          error: Error()
                        }), GameUtils) : GameUtils).conver3dposTo2dpos(_this4._fishAimContainer, 'Canvas/Camera', 'Main Camera', _this4._aryFishData[i].fishMesh.position);

                        _this4._aimLockNode.setPosition(localPos);
                      }
                    } else {
                      var p = void 0; //let tweenPlugin:TweenMaxCocosPlugin;

                      var tweenPlugin = _this4._aryFishData[i].fishMesh.getComponent(_crd && TimeUpdateForMove === void 0 ? (_reportPossibleCrUseOfTimeUpdateForMove({
                        error: Error()
                      }), TimeUpdateForMove) : TimeUpdateForMove);

                      var doNextActionFlag = false;
                      var finaldDstination = 0;

                      if (tweenPlugin.isRunning) {
                        tweenPlugin.updatePath(t);
                      }

                      if (flockUnit.time >= 5 && flockUnit.time <= 19) {
                        //--第一個位置(下面(座位不旋轉時))
                        //--19要退場
                        //if(flockUnit.time>=5 && !((<Fish1FishData>this._aryFishData[i]).spBossInStates.bottom))
                        if (flockUnit.time >= 5) {
                          doNextActionFlag = false;

                          if (_this4._playerTableCoordinate == 1 || _this4._playerTableCoordinate == 2) {
                            if (!_this4._aryFishData[i].spBossInStates.top) {
                              doNextActionFlag = true;
                              _this4._aryFishData[i].spBossInStates.top = true;

                              _this4._aryFishData[i].fishMesh.setPosition(v3(0, _this4._frustumData.topPoint + 1000, -500));

                              finaldDstination = _this4._frustumData.topPoint * 1.4;
                            }
                          } else {
                            if (!_this4._aryFishData[i].spBossInStates.bottom) {
                              doNextActionFlag = true;
                              _this4._aryFishData[i].spBossInStates.bottom = true;

                              _this4._aryFishData[i].fishMesh.setPosition(v3(0, _this4._frustumData.bottomPoint - 1000, -500));

                              finaldDstination = _this4._frustumData.bottomPoint * 1.4;
                            }
                          }

                          if (doNextActionFlag) {
                            //mesh.setPosition(v3(this._frustumData.leftPoint-1000,0,-500));
                            _this4._aryFishData[i].animationSequencePlayer.play((_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
                              error: Error()
                            }), AnimationStatus) : AnimationStatus).start);

                            if (!tweenPlugin.isRunning) {
                              var startPos = {
                                x: _this4._aryFishData[i].fishMesh.position.x,
                                y: _this4._aryFishData[i].fishMesh.position.y
                              };
                              var endPos = {
                                x: _this4._aryFishData[i].fishMesh.position.x,
                                y: finaldDstination
                              };
                              tweenPlugin.setUpdateData(startPos, endPos, 1);
                            }
                            /*
                            tweenPlugin=(<Fish1FishData>this._aryFishData[i]).fishMesh.getComponent(TweenMaxCocosPlugin);
                             TweenMax.to(tweenPlugin,1,{
                                y:finaldDstination
                            })*/

                          }
                        }

                        if (flockUnit.time >= 18) {
                          //log('check_bossOut_',(<Fish1FishData>this._aryFishData[i]).spBossInStates.bo);
                          doNextActionFlag = false;

                          if (_this4._playerTableCoordinate == 1 || _this4._playerTableCoordinate == 2) {
                            if (!_this4._aryFishData[i].spBossInStates.to) {
                              doNextActionFlag = true;
                              _this4._aryFishData[i].spBossInStates.to = true;
                              p = _this4._aryFishData[i].fishMesh.position;
                              finaldDstination = p.y + 1000; //--下end指令的時候要停止particle--20231019 
                            }
                          } else {
                            if (!_this4._aryFishData[i].spBossInStates.bo) {
                              doNextActionFlag = true;
                              _this4._aryFishData[i].spBossInStates.bo = true;
                              p = _this4._aryFishData[i].fishMesh.position;
                              finaldDstination = p.y - 1000;
                            }
                          }

                          if (doNextActionFlag) {
                            //--out 沒反應
                            _this4._aryFishData[i].animationSequencePlayer.play((_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
                              error: Error()
                            }), AnimationStatus) : AnimationStatus).end);

                            if (!tweenPlugin.isRunning) {
                              var _startPos = {
                                x: _this4._aryFishData[i].fishMesh.position.x,
                                y: _this4._aryFishData[i].fishMesh.position.y
                              };
                              var _endPos = {
                                x: _this4._aryFishData[i].fishMesh.position.x,
                                y: finaldDstination
                              };
                              tweenPlugin.setUpdateData(_startPos, _endPos, 1);
                            }
                            /*
                            tweenPlugin=(<Fish1FishData>this._aryFishData[i]).fishMesh.getComponent(TweenMaxCocosPlugin);
                             TweenMax.to(tweenPlugin,1,{
                                y:finaldDstination
                            })*/

                          }
                        }
                      } else if (flockUnit.time >= 20 && flockUnit.time <= 34) {
                        //--第二個位置(左邊(座位不旋轉時))
                        //--34退場 
                        //if(flockUnit.time>=20 && !((<Fish1FishData>this._aryFishData[i]).spBossInStates.left))
                        if (flockUnit.time >= 20) {
                          doNextActionFlag = false;

                          if (_this4._playerTableCoordinate == 1 || _this4._playerTableCoordinate == 2) {
                            if (!_this4._aryFishData[i].spBossInStates.right) {
                              doNextActionFlag = true;
                              _this4._aryFishData[i].spBossInStates.right = true;

                              _this4._aryFishData[i].fishMesh.setPosition(v3(_this4._frustumData.rightPoint + 1000, 0, -500));

                              finaldDstination = _this4._frustumData.rightPoint;
                            }
                          } else {
                            if (!_this4._aryFishData[i].spBossInStates.left) {
                              doNextActionFlag = true;
                              _this4._aryFishData[i].spBossInStates.left = true;

                              _this4._aryFishData[i].fishMesh.setPosition(v3(_this4._frustumData.leftPoint - 1000, 0, -500));

                              finaldDstination = _this4._frustumData.leftPoint;
                            }
                          }

                          if (doNextActionFlag) {
                            _this4._aryFishData[i].animationSequencePlayer.play((_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
                              error: Error()
                            }), AnimationStatus) : AnimationStatus).start);

                            if (!tweenPlugin.isRunning) {
                              var _startPos2 = {
                                x: _this4._aryFishData[i].fishMesh.position.x,
                                y: _this4._aryFishData[i].fishMesh.position.y
                              };
                              var _endPos2 = {
                                x: finaldDstination,
                                y: _this4._aryFishData[i].fishMesh.position.y
                              };
                              tweenPlugin.setUpdateData(_startPos2, _endPos2, 1);
                            }
                            /*
                            tweenPlugin=(<Fish1FishData>this._aryFishData[i]).fishMesh.getComponent(TweenMaxCocosPlugin);
                                 TweenMax.to(tweenPlugin,1,{
                                
                                x:finaldDstination
                                
                            })*/

                          }
                        }

                        if (flockUnit.time >= 33) {
                          doNextActionFlag = false;

                          if (_this4._playerTableCoordinate == 1 || _this4._playerTableCoordinate == 2) {
                            if (!_this4._aryFishData[i].spBossInStates.ro) {
                              doNextActionFlag = true;
                              _this4._aryFishData[i].spBossInStates.ro = true;
                              p = _this4._aryFishData[i].fishMesh.position;
                              finaldDstination = p.x + 2000;
                            }
                          } else {
                            if (!_this4._aryFishData[i].spBossInStates.lo) {
                              doNextActionFlag = true;
                              _this4._aryFishData[i].spBossInStates.lo = true;
                              p = _this4._aryFishData[i].fishMesh.position;
                              finaldDstination = p.x - 1000;
                            }
                          }

                          if (doNextActionFlag) {
                            //--下end指令的時候要停止particle--20231019 
                            _this4._aryFishData[i].animationSequencePlayer.play((_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
                              error: Error()
                            }), AnimationStatus) : AnimationStatus).end);

                            if (!tweenPlugin.isRunning) {
                              var _startPos3 = {
                                x: _this4._aryFishData[i].fishMesh.position.x,
                                y: _this4._aryFishData[i].fishMesh.position.y
                              };
                              var _endPos3 = {
                                x: finaldDstination,
                                y: _this4._aryFishData[i].fishMesh.position.y
                              };
                              tweenPlugin.setUpdateData(_startPos3, _endPos3, 1);
                            }
                            /*
                            tweenPlugin=(<Fish1FishData>this._aryFishData[i]).fishMesh.getComponent(TweenMaxCocosPlugin);
                             TweenMax.to(tweenPlugin,1,{
                                x:finaldDstination
                            })*/

                          }
                        }
                      } else if (flockUnit.time >= 35 && flockUnit.time <= 49) {
                        //--第三個位置(上面(座位不旋轉時))
                        //--49退場
                        //if(flockUnit.time>=35 && !((<Fish1FishData>this._aryFishData[i]).spBossInStates.top))
                        if (flockUnit.time >= 35) {
                          doNextActionFlag = false;

                          if (_this4._playerTableCoordinate == 1 || _this4._playerTableCoordinate == 2) {
                            if (!_this4._aryFishData[i].spBossInStates.bottom) {
                              doNextActionFlag = true;
                              _this4._aryFishData[i].spBossInStates.bottom = true;

                              _this4._aryFishData[i].fishMesh.setPosition(v3(0, _this4._frustumData.bottomPoint - 1000, -500));

                              finaldDstination = _this4._frustumData.bottomPoint * 1.4;
                            }
                          } else {
                            if (!_this4._aryFishData[i].spBossInStates.top) {
                              doNextActionFlag = true;
                              _this4._aryFishData[i].spBossInStates.top = true;

                              _this4._aryFishData[i].fishMesh.setPosition(v3(0, _this4._frustumData.topPoint + 1000, -500));

                              finaldDstination = _this4._frustumData.topPoint * 1.4;
                            }
                          }

                          if (doNextActionFlag) {
                            _this4._aryFishData[i].animationSequencePlayer.play((_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
                              error: Error()
                            }), AnimationStatus) : AnimationStatus).start);

                            if (!tweenPlugin.isRunning) {
                              var _startPos4 = {
                                x: _this4._aryFishData[i].fishMesh.position.x,
                                y: _this4._aryFishData[i].fishMesh.position.y
                              };
                              var _endPos4 = {
                                x: _this4._aryFishData[i].fishMesh.position.x,
                                y: finaldDstination
                              };
                              tweenPlugin.setUpdateData(_startPos4, _endPos4, 1);
                            }
                            /*
                            tweenPlugin=(<Fish1FishData>this._aryFishData[i]).fishMesh.getComponent(TweenMaxCocosPlugin);
                             TweenMax.to(tweenPlugin,1,{
                                y:finaldDstination
                            })*/

                          }
                        }

                        if (flockUnit.time >= 48) {
                          doNextActionFlag = false;

                          if (_this4._playerTableCoordinate == 1 || _this4._playerTableCoordinate == 2) {
                            if (!_this4._aryFishData[i].spBossInStates.bo) {
                              doNextActionFlag = true;
                              _this4._aryFishData[i].spBossInStates.bo = true;
                              p = _this4._aryFishData[i].fishMesh.position;
                              finaldDstination = p.y - 1000;
                            }
                          } else {
                            if (!_this4._aryFishData[i].spBossInStates.to) {
                              doNextActionFlag = true;
                              _this4._aryFishData[i].spBossInStates.to = true;
                              p = _this4._aryFishData[i].fishMesh.position;
                              finaldDstination = p.y + 1000;
                            }
                          }

                          if (doNextActionFlag) {
                            _this4._aryFishData[i].animationSequencePlayer.play((_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
                              error: Error()
                            }), AnimationStatus) : AnimationStatus).end);

                            if (!tweenPlugin.isRunning) {
                              var _startPos5 = {
                                x: _this4._aryFishData[i].fishMesh.position.x,
                                y: _this4._aryFishData[i].fishMesh.position.y
                              };
                              var _endPos5 = {
                                x: _this4._aryFishData[i].fishMesh.position.x,
                                y: finaldDstination
                              };
                              tweenPlugin.setUpdateData(_startPos5, _endPos5, 1);
                            }
                            /*
                            tweenPlugin=(<Fish1FishData>this._aryFishData[i]).fishMesh.getComponent(TweenMaxCocosPlugin);
                                 TweenMax.to(tweenPlugin,1,{
                                y:finaldDstination
                            })*/

                          }
                        } //}else if(flockUnit.time>=50 && flockUnit.time<=64)

                      } else if (flockUnit.time >= 50 && flockUnit.time <= 66) {
                        //--第三個位置(右邊(座位不旋轉時))
                        //--64退場
                        //if(flockUnit.time>=50 && !((<Fish1FishData>this._aryFishData[i]).spBossInStates.right))
                        if (flockUnit.time >= 50) {
                          doNextActionFlag = false;

                          if (_this4._playerTableCoordinate == 1 || _this4._playerTableCoordinate == 2) {
                            if (!_this4._aryFishData[i].spBossInStates.left) {
                              doNextActionFlag = true;
                              _this4._aryFishData[i].spBossInStates.left = true;

                              _this4._aryFishData[i].fishMesh.setPosition(v3(_this4._frustumData.leftPoint - 1000, 0, -500));

                              finaldDstination = _this4._frustumData.leftPoint;
                            }
                          } else {
                            if (!_this4._aryFishData[i].spBossInStates.right) {
                              doNextActionFlag = true;
                              _this4._aryFishData[i].spBossInStates.right = true;

                              _this4._aryFishData[i].fishMesh.setPosition(v3(_this4._frustumData.rightPoint + 1000, 0, -500));

                              finaldDstination = _this4._frustumData.rightPoint;
                            }
                          }

                          if (doNextActionFlag) {
                            _this4._aryFishData[i].animationSequencePlayer.play((_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
                              error: Error()
                            }), AnimationStatus) : AnimationStatus).start);

                            if (!tweenPlugin.isRunning) {
                              var _startPos6 = {
                                x: _this4._aryFishData[i].fishMesh.position.x,
                                y: _this4._aryFishData[i].fishMesh.position.y
                              };
                              var _endPos6 = {
                                x: finaldDstination,
                                y: _this4._aryFishData[i].fishMesh.position.y
                              };
                              tweenPlugin.setUpdateData(_startPos6, _endPos6, 1);
                            }
                            /*
                            tweenPlugin=(<Fish1FishData>this._aryFishData[i]).fishMesh.getComponent(TweenMaxCocosPlugin);
                                 TweenMax.to(tweenPlugin,1,{
                            x:finaldDstination
                            })*/

                          }
                        } //if(flockUnit.time>=63)


                        if (flockUnit.time >= 65) {
                          doNextActionFlag = false;

                          if (_this4._playerTableCoordinate == 1 || _this4._playerTableCoordinate == 2) {
                            if (!_this4._aryFishData[i].spBossInStates.lo) {
                              doNextActionFlag = true;
                              _this4._aryFishData[i].spBossInStates.lo = true;
                              p = _this4._aryFishData[i].fishMesh.position;
                              finaldDstination = p.x - 1000;
                            }
                          } else {
                            if (!_this4._aryFishData[i].spBossInStates.ro) {
                              doNextActionFlag = true;
                              _this4._aryFishData[i].spBossInStates.ro = true;
                              p = _this4._aryFishData[i].fishMesh.position;
                              finaldDstination = p.x + 2000;
                            }
                          }

                          if (doNextActionFlag) {
                            _this4._aryFishData[i].animationSequencePlayer.play((_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
                              error: Error()
                            }), AnimationStatus) : AnimationStatus).end);

                            if (!tweenPlugin.isRunning) {
                              var _startPos7 = {
                                x: _this4._aryFishData[i].fishMesh.position.x,
                                y: _this4._aryFishData[i].fishMesh.position.y
                              };
                              var _endPos7 = {
                                x: finaldDstination,
                                y: _this4._aryFishData[i].fishMesh.position.y
                              };
                              tweenPlugin.setCompleteCallBack(() => {
                                _this4._viewModel['_bossStatus'] = 'exit';
                                log('check_boss_exit', _this4._viewModel['_bossStatus']);
                              });
                              tweenPlugin.setUpdateData(_startPos7, _endPos7, 1);
                            }
                            /*
                            tweenPlugin=(<Fish1FishData>this._aryFishData[i]).fishMesh.getComponent(TweenMaxCocosPlugin);
                            //--退場
                            TweenMax.to(tweenPlugin,1,{
                                
                                x:finaldDstination,
                                
                                onComplete:()=>
                                {
                                    this._viewModel['_bossStatus']='exit';
                                     log('check_boss_exit',this._viewModel['_bossStatus']);
                                }
                            })*/

                          }
                        }
                      } //--3D boss龍
                      //log('check_BossFlockUnitTime',flockUnit.time);

                    } //---theta已經先從atan2先求出來了

                    /*
                    let rotationAxis:Vec3=new Vec3(0,0,1);
                    let rotationQuaternion=new Quat();
                    rotationAxis.normalize();s
                    
                    Quat.fromAxisAngle(rotationQuaternion,rotationAxis,theta);
                    let nodeQuaternion=(<Node>this._aryFishData[i].fishMesh).getRotation();
                    //let newQuaternion=new Quat();
                    //Quat.multiply(newQuaternion,nodeQuaternion,rotationQuaternion);
                    (<Node>this._aryFishData[i].fishMesh).setRotation(rotationQuaternion);
                    */
                    //--3-4不旋轉
                    //--to do--20230829
                    //--要從fishcontainer裡面開始把座標轉出來-轉到螢幕坐標系後又轉回3D坐標系


                    var rotationQuaternion = void 0;
                    var rotationAxis = void 0; //--PS boss龍王自己轉

                    if (_this4._aryFishData[i].fishType != 21) {
                      //let rotationQuaternion:Quat;
                      if (_this4._aryFishData[i].rotationState == (_crd && FishRotationState === void 0 ? (_reportPossibleCrUseOfFishRotationState({
                        error: Error()
                      }), FishRotationState) : FishRotationState).normalRotation) {
                        //--旋轉(隨著路徑旋轉)
                        rotationQuaternion = Quat.identity(_this4._aryFishData[i].rotationQuaternion); //let rotationAxis:Vec3;

                        if (_this4._playerTableCoordinate == 1 || _this4._playerTableCoordinate == 2) {
                          //rotationAxis=FishCoreMainCenter.Axis_Negative.z.normalize();
                          theta += Math.PI;
                        }

                        rotationAxis = Fish1View.Axis.z.normalize();
                        Quat.fromAxisAngle(rotationQuaternion, rotationAxis, theta);

                        _this4._aryFishData[i].fishMesh.setRotation(rotationQuaternion);
                      } else if (_this4._aryFishData[i].rotationState == (_crd && FishRotationState === void 0 ? (_reportPossibleCrUseOfFishRotationState({
                        error: Error()
                      }), FishRotationState) : FishRotationState).noRotation) {
                        //--不旋轉(自身旋轉,不隨著路徑旋轉)

                        /**
                         *  fd.other=
                          {
                              AxisZQuat:new Quat(),
                              AxisXQuat:new Quat(),
                              rotation:0
                          };
                         */
                        //--這是弧度
                        _this4._aryFishData[i].other.rotation += 0.05; //--outX

                        var quatX = Quat.identity(_this4._aryFishData[i].other.AxisXQuat);
                        var rotationAxisX = Fish1View.Axis_Negative.x.normalize();
                        Quat.fromAxisAngle(quatX, rotationAxisX, _this4._aryFishData[i].other.rotation); //--outZ

                        var quatZ = Quat.identity(_this4._aryFishData[i].other.AxisZQuat);
                        var rotationAxisZ = Fish1View.Axis_Negative.z.normalize();
                        Quat.fromAxisAngle(quatZ, rotationAxisZ, _this4._aryFishData[i].other.rotation); //--out final

                        rotationQuaternion = Quat.identity(_this4._aryFishData[i].rotationQuaternion); //--先轉X軸再轉Z軸

                        Quat.multiply(rotationQuaternion, quatX, quatZ);

                        _this4._aryFishData[i].fishMesh.setRotation(rotationQuaternion);
                      } else if (_this4._aryFishData[i].rotationState == (_crd && FishRotationState === void 0 ? (_reportPossibleCrUseOfFishRotationState({
                        error: Error()
                      }), FishRotationState) : FishRotationState).horizontalRotation) {//--水平翻轉(不旋轉)
                      }
                    } else {
                      //--PS boss龍王自己轉
                      if (flockUnit.time >= 5 && flockUnit.time <= 19) {
                        //--第一個位置(下面)
                        //--19要退場
                        //--旋轉(隨著路徑旋轉)
                        //theta=Math.PI / 2;
                        theta = _this4._playerTableCoordinate == 1 || _this4._playerTableCoordinate == 2 ? -Math.PI / 2 : Math.PI / 2;
                      } else if (flockUnit.time >= 20 && flockUnit.time <= 34) {
                        //--第二個位置(左邊)
                        //--34退場 
                        //theta=0;
                        theta = _this4._playerTableCoordinate == 1 || _this4._playerTableCoordinate == 2 ? Math.PI : 0;
                      } else if (flockUnit.time >= 35 && flockUnit.time <= 49) {
                        //--第三個位置(上面)
                        //--49退場
                        //theta=-Math.PI / 2;
                        theta = _this4._playerTableCoordinate == 1 || _this4._playerTableCoordinate == 2 ? Math.PI / 2 : -Math.PI / 2;
                      } else if (flockUnit.time >= 50 && flockUnit.time <= 66) {
                        //--第三個位置(右邊)
                        //--64退場
                        //theta=Math.PI;
                        theta = _this4._playerTableCoordinate == 1 || _this4._playerTableCoordinate == 2 ? 0 : Math.PI;
                      }

                      rotationQuaternion = Quat.identity(_this4._aryFishData[i].rotationQuaternion);
                      rotationAxis = Fish1View.Axis.z.normalize();
                      Quat.fromAxisAngle(rotationQuaternion, rotationAxis, theta);

                      _this4._aryFishData[i].fishMesh.setRotation(rotationQuaternion); //--鎖定準心 for boss


                      if (_this4._aryFishData[i].fishAimLock) {
                        //localPos=GameUtils.conver3dposTo2dpos(this._fishAimContainer,'Canvas/Camera','Main Camera',this._aryFishData[i].fishMesh.position);
                        var shape = _this4._aryFishData[i].collisionArea[6].shape;
                        var worldobb = shape.worldObb;
                        localPos = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                          error: Error()
                        }), GameUtils) : GameUtils).conver3dposTo2dpos(_this4._fishAimContainer, 'Canvas/Camera', 'Main Camera', worldobb.center);

                        _this4._aimLockNode.setPosition(localPos);
                      }
                    }
                  } //--手動更新fish colliders

                  /**
                   * 3D fish除了boss之外,其餘都是掛2D的collider所以要自己手動更新
                   * 3D collider他會自己更新
                   * collider他是個容器概念的東西,裡面的shape定義了碰撞盒的形式與大小
                   */


                  if (_this4._aryFishData[i].fishType != 21) {
                    for (var c = 0; c < _this4._aryFishData[i].collisionArea.length; c++) {
                      //(<Collider2D>(<Fish1FishData>this._aryFishData[i]).collisionArea[c]).impl.update(t);
                      //let colliderShape:BuiltinShape2D=(<Collider2D>(<Fish1FishData>this._aryFishData[i]).collisionArea[c]).impl;
                      //colliderShape.update();
                      _this4._aryFishData[i].collisionArea[c].impl.update();
                    }
                  }
                }

                if (!flockUnit) {
                  log('check_FishAwway', flockUnit); //--20240126已經死掉但是還沒刪除的(death=true) ,這樣會無法有效刪除

                  flockUnit = _this4._aryFishData[i].fishFlockUnit;
                }

                if (flockUnit.isAway) {
                  //if(this._aryFishData[i].fishType!=21)//--for test 加的判斷,正式要拿掉
                  //{
                  var fd = _this4._aryFishData[i];
                  fd.isDead = true;
                  fd.prohibit = false;
                  flockUnit.isDeath = true; //log('delete Befor_aryLen',this._aryFishData.length+'\n','check_fishData',this._aryFishData,'\n'+'id',fd.id,'\n'+'index',i);

                  if (fd.fishType == 21) {
                    //this._gameMediator.getViewUserData(GameViewMediatorUser.AniEffectSystemView,GameViewMediatorUserDataKey.Effect_bossExit,null);
                    //--20240202--改成直接接roomstatus的改變來做變動 
                    log('FISHBOSS_EXITTTTTTTTT');
                  }

                  if (fd.isHit) {
                    //--finish-
                    _this4.hitFishAniComplete(_this4._aryFishData[i]);
                  }

                  if (fd.fishAimLock) {
                    _this4._aimLockNode.active = false;

                    _this4._aimLockNode.setPosition(v3(0, 0));
                  }

                  if (fd.fishMeshState == (_crd && fishMeshState === void 0 ? (_reportPossibleCrUseOffishMeshState({
                    error: Error()
                  }), fishMeshState) : fishMeshState).fish2D) {
                    var ani = fd.animation;
                    ani.stop();

                    _this4._fishContainer.removeChild(fd.fishMesh);

                    if (fd.fishShadow) {
                      ani = fd.fishShadow.getComponent(Animation);
                      ani.stop();

                      _this4._fishShadowContainer.removeChild(fd.fishShadow);
                    }
                  } else {
                    var tweenmax = fd.fishMesh.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                      error: Error()
                    }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

                    if (tweenmax) {
                      if (TweenMax.isTweening(tweenmax)) {
                        TweenMax.killTweensOf(tweenmax);
                      }
                    } //--3d boss


                    var timeUpdate = fd.fishMesh.getComponent(_crd && TimeUpdateForMove === void 0 ? (_reportPossibleCrUseOfTimeUpdateForMove({
                      error: Error()
                    }), TimeUpdateForMove) : TimeUpdateForMove);

                    if (timeUpdate) {
                      timeUpdate.destory();
                    }

                    fd.animation.stop();
                    director.getScene().removeChild(fd.fishMesh);
                  }

                  fd.fishMesh.destroy(); //--使用播放腳本清單

                  if (fd.animationSequencePlayer) {
                    fd.animationSequencePlayer.destory();
                    fd.animationSequencePlayer.eventTarget.off((_crd && BaseEvent === void 0 ? (_reportPossibleCrUseOfBaseEvent({
                      error: Error()
                    }), BaseEvent) : BaseEvent).PLAY_ANI, _this4.animationSequencePlayerEvent);
                  }

                  if (fd.fishAimLock && _this4._lockFish.id == fd.id) {
                    _this4._aimLockNode.active = false;
                  } //--現在都是一條魚配一個路徑,所以不會有一條路徑多條魚的情況了


                  _this4._pathCenter.deleteGroupPath(fd.pathID);

                  _this4._aryFishData.splice(i, 1);

                  if (_this4._poolFishData.length < 100) {
                    fd.init();

                    _this4._poolFishData.push(fd);
                  } else {
                    fd = null;
                  } //---20240226--可能干擾update collider
                  //await this.removeFishById(fd.id);


                  i = i - 1; //--刪除的動作在afterdrall會來做
                  //--送事件FishEvent.FISH_EXIT_READY--自動打擊或是鎖定要刪除資料
                  //log('FISH_EXIT__',this._aryFishData.length+'\n','check_fishData',this._aryFishData);
                  //}
                }
              }
            }
          })();
        }

      }, _class2.Axis = void 0, _class2.Axis_Negative = void 0, _class2), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_addFishs", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "_addPopFishs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "_roomStatus", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "_hitFishs", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "_bossStatus", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "_fishTypeSpeedMap", [_dec6], {
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
//# sourceMappingURL=609f82b03f0b1e88ee24d5f896beb1fa20e4ec4a.js.map
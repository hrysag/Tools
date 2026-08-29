System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, FishGameMainLogic, Fish1GameAutoAndLockData, viewBind, PropType, GameViewMediatorUser, GameViewMediatorUserDataKey, find, UITransform, v3, log, GameUtils, AREA_BOUNDARY, _dec, _dec2, _class, _descriptor, _descriptor2, _crd, Fish1GameMainLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFishGameMainLogic(extras) {
    _reporterNs.report("FishGameMainLogic", "../../framework/logic/gameLogic/FishGameMainLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1GameAutoAndLockData(extras) {
    _reporterNs.report("Fish1GameAutoAndLockData", "./Fish1GameAutoAndLockData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMouseBehaviorAutoClick(extras) {
    _reporterNs.report("MouseBehaviorAutoClick", "../../framework/logic/mouseBehavior/MouseBehaviorAutoClick", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewBind(extras) {
    _reporterNs.report("viewBind", "../../framework/abstract/mvvm/AbstractView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropType(extras) {
    _reporterNs.report("PropType", "../model/Fish1ModelDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishData(extras) {
    _reporterNs.report("FishData", "../../framework/logic/views/fishView/FishData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddFish(extras) {
    _reporterNs.report("addFish", "../model/Fish1ModelDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUser(extras) {
    _reporterNs.report("GameViewMediatorUser", "../../framework/logic/gameLogic/FishGameLogicDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUserDataKey(extras) {
    _reporterNs.report("GameViewMediatorUserDataKey", "../../framework/logic/gameLogic/FishGameLogicDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../framework/utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAREA_BOUNDARY(extras) {
    _reporterNs.report("AREA_BOUNDARY", "../../framework/game/mouseBehavior/MouseBehaviorDefinitionsBase", _context.meta, extras);
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
      v3 = _cc.v3;
      log = _cc.log;
    }, function (_unresolved_2) {
      FishGameMainLogic = _unresolved_2.FishGameMainLogic;
    }, function (_unresolved_3) {
      Fish1GameAutoAndLockData = _unresolved_3.Fish1GameAutoAndLockData;
    }, function (_unresolved_4) {
      viewBind = _unresolved_4.viewBind;
    }, function (_unresolved_5) {
      PropType = _unresolved_5.PropType;
    }, function (_unresolved_6) {
      GameViewMediatorUser = _unresolved_6.GameViewMediatorUser;
      GameViewMediatorUserDataKey = _unresolved_6.GameViewMediatorUserDataKey;
    }, function (_unresolved_7) {
      GameUtils = _unresolved_7.GameUtils;
    }, function (_unresolved_8) {
      AREA_BOUNDARY = _unresolved_8.AREA_BOUNDARY;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1ac5bJThipMKoxXHIh89I9Z", "Fish1GameMainLogic", undefined);
      /**
       * Created by EricHuang on 2023/10/01.
       * 射擊/自動射擊/鎖定/定向射擊
       */
      //import {viewfun} from '../../framework/abstract/mvvm/AbstractView';


      __checkObsolete__(['BoxCollider', 'find', 'UITransform']);

      __checkObsolete__(['Vec3', 'v3', 'log']);

      __checkObsolete__(['BuiltinBoxShape']);

      _export("Fish1GameMainLogic", Fish1GameMainLogic = (_dec = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec2 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, (_class = class Fish1GameMainLogic extends (_crd && FishGameMainLogic === void 0 ? (_reportPossibleCrUseOfFishGameMainLogic({
        error: Error()
      }), FishGameMainLogic) : FishGameMainLogic) {
        //--20240123-
        constructor() {
          super();

          //-_playerTableId  0-3
          _initializerDefineProperty(this, "_useCrazyProp", _descriptor, this);

          //--使用狂暴道具
          _initializerDefineProperty(this, "_addFishs", _descriptor2, this);

          this._shootDebugTimestamp = void 0;
          this._classId = 'Fish1GameMainLogic';
          this._fish2DContainerNode = find('Canvas/fishNodeContainer/fishNode');
          this._mouseContainerNode = find('Canvas/mouseNode');
          this._bulletContainerNode = find('Canvas/bulletNodeContainer/bulletNode');
          this._sceneCameraNode = find('Main Camera'); //--scene camera

          this._canvasCameraNode = find('Canvas/CameraGUI'); //--gui_2D layer
          //--for debug--

          this._shootDebugTimestamp = 0;
        } //--override--


        setAfterInitPlayerSeatData(table) {
          this._fishGameAutoAndLockData = new (_crd && Fish1GameAutoAndLockData === void 0 ? (_reportPossibleCrUseOfFish1GameAutoAndLockData({
            error: Error()
          }), Fish1GameAutoAndLockData) : Fish1GameAutoAndLockData)();
          super.setAfterInitPlayerSeatData(table); //--設定特殊檢測的魚隻type(boss)

          this._arySpFishType = [21];
          this._fishGameAutoAndLockData.spUpdateFishTypeforBullet = [21]; //--設定滑鼠感應區域(這也是邊界檢測的區域)
          //this.setGameBoundary(50,90,100,50);
          //this.setGameBoundary(1750,940);

          this.setGameBoundary(1850, 960); //this.afterRotationPos(40);--20240306 編輯器來做
        }
        /**
        * override it
        * 你可以將sub當作key值,switch case他來做相關的處理
        * @param sub 屬性變數的字串
        * @param value 傳送的資料
        */


        processModelData(sub, value) {
          super.processModelData(sub, value);

          switch (sub) {
            case '_useCrazyProp':
              log('fish1GameLogic___useCrazyProp', value[0], this._viewModel['_playerTableId']); //--玩家自己啟動/關閉狂暴

              if (value[0].index == this._viewModel['_playerTableId']) {
                this.pauseAutoShootTime();

                this._mouseBehavior.setCrazyTime(value[0].open);

                if (this._autoShootStatus) {
                  //--送進去就重新啟動計時器
                  this._mouseBehavior.autoShoot = true;
                }
              }

              break;

            case '_addFishs':
              log('Fish1Logic__addFishs', value[0]);
              let bossId = this.checkSpBossId(value[0]);

              if (bossId != 0) {
                this._spBossId = bossId;
              }

              break;
          }
        }

        getShootData(s) {
          log('getShootData', this._viewModel['_roomStatus'], this._viewModel['_playerTableId'], this._viewModel['_propRunData']);
          /**
           ---server 回送我這邊包裝出去的資料
          endX:data.si.x,
          endY:data.si.y,
          actionId:data.si.a,
          lockTarget:data.si.l,
          prop:data.si.p,
          isCrazy:data.si.c
          */

          let props = this._viewModel['_propRunData'][(_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
            error: Error()
          }), PropType) : PropType).PROP_CRAZY].isRunning;
          log('check_crazy_beforeShoot', props);
          /*
          let testNowTimesteap:number=new Date().getTime();
           let previousTime=this._shootDebugTimestamp;
           let checkTime:number=0;
           if(this._shootDebugTimestamp==0)
          {
              checkTime=ShootSpeedRate.SHOOTING_RATE_STAND;
          
          }else{
               checkTime=testNowTimesteap-this._shootDebugTimestamp;
          }
           this._shootDebugTimestamp=testNowTimesteap;
          */

          let sendData = {
            w: s.info.weaponType,
            s: this._viewModel['_playerTableId'],
            //--正式使用的
            //s:1,//--for test
            //--鎖定( l:--鎖定的魚隻id--沒有就不用了)
            si: {
              x: s.endX,
              y: s.endY,
              a: s.info.actionId,
              //l:strLockTarget,//--鎖定( l:--鎖定的魚隻id--沒有就不用了)
              c: props,
              //--檢查是否用狂暴道具
              //p:useProp,--
              d: s.direction,
              f: s.isFree,
              //--r=roomstatus
              r: this._viewModel['_roomStatus'].status //--20231027房間狀態
              //--for auto/lock test--
              //t:{pt:previousTime,nt:testNowTimesteap,ct:checkTime}

            }
            /*
            credit:s.info.gunCredit,
            isDrill:false,//-之後要補上正確的判斷
            isCrazy: false,
            endX: s.endX,
            endY: s.endY,
            actionId: s.info.actionId,
            prop: useProp,
            lockTarget:strLockTarget,
            isFree:s.isFree,
            direction:s.direction
            */

          };
          log('shootBulletData_logic', sendData);
          return sendData;
        } //---20240412--塞入紀錄資料


        sendRecordData(s) {
          log('sendRecordData', s); // 範例如何紀錄『射擊種類』20240412

          /*
          const shootAnal = util.analytic.ShootTypeAnalytics;
          shootAnal.start(1); // 每一分鐘採樣一次
          shootAnal.accumulate('auto'); // 每次射一發自動射擊就紀錄一次
          shootAnal.accumulate('normal'); // 每次射一發手動射擊就紀錄一次
          shootAnal.accumulate('lock'); // 每次射一發鎖定射擊就紀錄一次
          shootAnal.accumulate('lock'); // 第二次鎖定射擊
          */
          // 假設1分鐘到，就會送出1次自動、1次手動、2次鎖定。 然後清空。

          const util = window.util;

          if (s.data['l']) {
            if (s.lockMode) {
              //--lockmode
              util.analytic.ShootTypeAnalytics.accumulate('lock');
            } else {
              //--automode
              util.analytic.ShootTypeAnalytics.accumulate('auto');
            }
          } else {
            //--manual shoot
            util.analytic.ShootTypeAnalytics.accumulate('normal');
          }
        } //--boss 用的(直接拿龍頭)


        checkSpFishInSide(f) {
          let returnRp = null;
          let colliders = f.collisionArea;
          let shape = colliders[6].shape;
          let worldobb = shape.worldObb;
          let worldPos = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).cover3dor2dToWorldPos(this._sceneCameraNode, worldobb.center, this._canvasCameraNode);

          let localPos = this._mouseContainerNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos);

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
              //--這邊給world座標(滑鼠也是送world pos)
              //-{pos:Vec3,reLockTarget:number,lockFishType:number}
              returnRp = {
                pos: worldPos,
                reLockTarget: f.id,
                lockFishType: f.fishType //--這個好像不會用到阿

              };
            }
          }

          return returnRp;
        }
        /**
         * 這時候送進來的座標是mlouseclick node的local contain的pos
         * @param x local pos
         * @param y local pos
         * @returns 
         */


        checkLockFishAimTarget(x, y) {
          //return '';
          let clickNode = find('Canvas/mouseNode');
          let wposClick = clickNode.getComponent(UITransform).convertToWorldSpaceAR(v3(x, y));
          return this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
            error: Error()
          }), GameViewMediatorUser) : GameViewMediatorUser).CollisionSystemView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
            error: Error()
          }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Collision_PickUp, {
            x: wposClick.x,
            y: wposClick.y
          });
        }

        checkSpBossId(fishInfo) {
          let bossFid = 0;

          for (let fish of fishInfo) {
            //--boss
            if (fish.type == 21) {
              bossFid = fish.id;
              break;
            }
          }

          return bossFid;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_useCrazyProp", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "_addFishs", [_dec2], {
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
//# sourceMappingURL=b0b2914e83185731d0e6236dc08dbecbe1fc9cd3.js.map
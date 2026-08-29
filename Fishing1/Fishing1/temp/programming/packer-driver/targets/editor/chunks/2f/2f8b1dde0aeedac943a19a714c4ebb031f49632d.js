System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AniEffectView, AniEffectTypeMap, Fish1AniEffectView, BgAniEffect, AniEffectID, viewBind, GameUtils, Fish1AniEffectID, Fish1AniEffectTypeMap, GameViewMediatorUser, GameViewMediatorUserDataKey, v3, find, UITransform, SoundsManager, log, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, Fish1AniEffectSystemView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAniEffectView(extras) {
    _reporterNs.report("AniEffectView", "../../../framework/logic/views/aniEffectView/AniEffectView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniEffectTypeMap(extras) {
    _reporterNs.report("AniEffectTypeMap", "../../../framework/logic/views/aniEffectView/AniEffectDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishMeshState(extras) {
    _reporterNs.report("fishMeshState", "../../../framework/game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventSendObject(extras) {
    _reporterNs.report("EventSendObject", "../../../framework/game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1AniEffectView(extras) {
    _reporterNs.report("Fish1AniEffectView", "./Fish1AniEffectView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgAniEffect(extras) {
    _reporterNs.report("BgAniEffect", "./aniEffects/BgAniEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniEffectID(extras) {
    _reporterNs.report("AniEffectID", "../../../framework/logic/views/aniEffectView/AniEffectDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAfterAnimationData(extras) {
    _reporterNs.report("AfterAnimationData", "../../../framework/logic/views/aniEffectView/AniEffectDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableInfo(extras) {
    _reporterNs.report("TableInfo", "../../../framework/game/model/ModelDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExecuteOption(extras) {
    _reporterNs.report("ExecuteOption", "../../../framework/game/aniEffect/AniEffectDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewBind(extras) {
    _reporterNs.report("viewBind", "../../../framework/abstract/mvvm/AbstractView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../../framework/utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1AniEffectID(extras) {
    _reporterNs.report("Fish1AniEffectID", "./Fish1AniEffectDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1AniEffectTypeMap(extras) {
    _reporterNs.report("Fish1AniEffectTypeMap", "./Fish1AniEffectDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish1FishData(extras) {
    _reporterNs.report("Fish1FishData", "../fishView/Fish1FishData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUser(extras) {
    _reporterNs.report("GameViewMediatorUser", "../../../framework/logic/gameLogic/FishGameLogicDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewMediatorUserDataKey(extras) {
    _reporterNs.report("GameViewMediatorUserDataKey", "../../../framework/logic/gameLogic/FishGameLogicDefinitions", _context.meta, extras);
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
      v3 = _cc.v3;
      find = _cc.find;
      UITransform = _cc.UITransform;
      log = _cc.log;
    }, function (_unresolved_2) {
      AniEffectView = _unresolved_2.AniEffectView;
    }, function (_unresolved_3) {
      AniEffectTypeMap = _unresolved_3.AniEffectTypeMap;
    }, function (_unresolved_4) {
      Fish1AniEffectView = _unresolved_4.Fish1AniEffectView;
    }, function (_unresolved_5) {
      BgAniEffect = _unresolved_5.BgAniEffect;
    }, function (_unresolved_6) {
      AniEffectID = _unresolved_6.AniEffectID;
    }, function (_unresolved_7) {
      viewBind = _unresolved_7.viewBind;
    }, function (_unresolved_8) {
      GameUtils = _unresolved_8.GameUtils;
    }, function (_unresolved_9) {
      Fish1AniEffectID = _unresolved_9.Fish1AniEffectID;
      Fish1AniEffectTypeMap = _unresolved_9.Fish1AniEffectTypeMap;
    }, function (_unresolved_10) {
      GameViewMediatorUser = _unresolved_10.GameViewMediatorUser;
    }, function (_unresolved_11) {
      GameViewMediatorUserDataKey = _unresolved_11.GameViewMediatorUserDataKey;
    }, function (_unresolved_12) {
      SoundsManager = _unresolved_12.SoundsManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "425536jK8xB1ZTOzlTCaRM2", "Fish1AniEffectSystemView", undefined);
      /**
       * Created by EricHuang on 2023/10/10.
       */


      __checkObsolete__(['Vec3', 'v3', 'find', 'Node', 'UITransform', 'director', 'CameraComponent']);

      __checkObsolete__(['log']);

      _export("Fish1AniEffectSystemView", Fish1AniEffectSystemView = (_dec = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
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
      }), viewBind) : viewBind, _dec7 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, _dec8 = _crd && viewBind === void 0 ? (_reportPossibleCrUseOfviewBind({
        error: Error()
      }), viewBind) : viewBind, (_class = class Fish1AniEffectSystemView extends (_crd && AniEffectView === void 0 ? (_reportPossibleCrUseOfAniEffectView({
        error: Error()
      }), AniEffectView) : AniEffectView) {
        //--紀錄需要等待動畫撥放完畢後續處理的資料..key=fishID
        constructor() {
          super();

          _initializerDefineProperty(this, "_addbullets", _descriptor, this);

          _initializerDefineProperty(this, "_hitFishs", _descriptor2, this);

          _initializerDefineProperty(this, "_roomStatus", _descriptor3, this);

          _initializerDefineProperty(this, "_useSummonProp", _descriptor4, this);

          //--使用召喚道具
          _initializerDefineProperty(this, "_useCrazyProp", _descriptor5, this);

          //--使用狂暴道具
          _initializerDefineProperty(this, "_bossStatus", _descriptor6, this);

          //--boss在場內的狀態
          _initializerDefineProperty(this, "_mapCannonInfo", _descriptor7, this);

          //--bullet 相關資訊
          _initializerDefineProperty(this, "_roomTableInfo", _descriptor8, this);

          this._bigOddsType = void 0;
          this._midOddsType = void 0;
          this._smallOddsType = void 0;
          this._spOddsType = void 0;
          this._bossType = void 0;
          this._killBossResult = void 0;
          this._afterAniDataMap = void 0;

          this.aniAndEffectComplete = e => {
            log('check_finish_effect_system', e);

            if (e.sendObj == (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
              error: Error()
            }), Fish1AniEffectID) : Fish1AniEffectID).ANI_GD_EXPLOSION) {
              this.executeAnimation({
                aniEffectTypeId: (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                  error: Error()
                }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_GD_RESULT,
                other: {
                  id: this._killBossResult.id,
                  payOff: this._killBossResult.payOff
                }
              });
            } else if (e.sendObj.id == (_crd && AniEffectID === void 0 ? (_reportPossibleCrUseOfAniEffectID({
              error: Error()
            }), AniEffectID) : AniEffectID).ANI_Flash_Lightning || e.sendObj.id == (_crd && AniEffectID === void 0 ? (_reportPossibleCrUseOfAniEffectID({
              error: Error()
            }), AniEffectID) : AniEffectID).ANI_BombEffect) {
              this.afterSpEffect(e.sendObj.afterId);
            }
          };

          /**
          * override it
          * 你可以將sub當作key值,switch case他來做相關的處理
          * @param sub 屬性變數的字串
          * @param value 傳送的資料
          */
          this.modeleChangeHandler = (sub, value) => {
            //log('modeleChangeHandler_Fish1AniEffectSystemView_',sub,value); 
            switch (sub) {
              //--玩家離開房間要把效果抹除
              case '_roomTableInfo':
                this.checkAndCleanLeavePlayerEffects(value[0]);
                break;

              case '_hitFishs':
                //log('fishViewEffect__hitFishs',value,this._viewModel['_playerTableId']);
                this.hitFish(value[0]);
                break;

              case '_roomStatus':
                /**
                 *  ps狀態代碼資訊
                     0=正常/一般狀態,
                     1=冰凍,
                     2=金龍來襲,
                     3=金龍死亡(禁止進房)
                 */
                log('check_effect__roomStatus', value[0].status);

                if (value[0].status == 2) {
                  this.executeAnimation({
                    aniEffectTypeId: (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                      error: Error()
                    }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_GD_COMMING
                  });
                  this.executeAnimation({
                    aniEffectTypeId: (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                      error: Error()
                    }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_FREEZE_EFFECT,
                    other: {
                      freeze: false
                    }
                  });
                  this.executeAnimation({
                    aniEffectTypeId: (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                      error: Error()
                    }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_SUMMON_EFFECT,
                    other: {
                      close: true,
                      index: null,
                      swp: null,
                      ewp: null
                    }
                  }); //---魚潮或是boss(JP魚)啟動時,限制道具要鎖住,cd與道具效果要關閉
                } else if (value[0].status == 1) {
                  log('excute_effect_Freeze_', value[0].status, this._aniEffect);
                  this.executeAnimation({
                    aniEffectTypeId: (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                      error: Error()
                    }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_FREEZE_EFFECT,
                    other: {
                      freeze: true
                    }
                  });
                } else if (value[0].status == 0) {
                  this.executeAnimation({
                    aniEffectTypeId: (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                      error: Error()
                    }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_FREEZE_EFFECT,
                    other: {
                      freeze: false
                    }
                  });
                  this.executeAnimation({
                    aniEffectTypeId: (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                      error: Error()
                    }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_GD_OUT
                  });
                }

                break;

              case '_mapCannonInfo':
                //log('fishViewEffect_mapCannonInfo',value,this._viewModel['_mapCannonInfo']);
                //--這邊由addbullet來啟動要去換powerup的資料,要在房間狀態是boss的時候才會啟動
                this._mapCannonInfo = value[0];
                break;

              case '_useSummonProp':
                //--20231120--for use summon prop--
                //let worldEndPosition=find('Canvas/aniEffectNode').getComponent(UITransform).convertToWorldSpaceAR(v3(0,0,0));
                //let startWp=this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView,GameViewMediatorUserDataKey.Gui_rotateCannonAndGetPosition,{index:value[0].index,pos:worldEndPosition});
                this.executeAnimation({
                  aniEffectTypeId: (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                    error: Error()
                  }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_SUMMON_EFFECT,
                  other: {
                    close: false,
                    index: value[0].index,
                    swp: null,
                    ewp: null
                  }
                }); //-_freeze

                break;

              case '_freeze':
                //--這個效果摒到房間(使用道具通知只針對玩家自己啟動cd計算)
                //log('fishViewEffect___freeze',value);
                this.executeAnimation({
                  aniEffectTypeId: (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                    error: Error()
                  }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_FREEZE_EFFECT,
                  other: {
                    freeze: value[0]
                  }
                });
                break;

              case '_useCrazyProp':
                //log('fishViewEffect____useCrazyProp',value);
                this.executeAnimation({
                  aniEffectTypeId: (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                    error: Error()
                  }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_CRAZY_EFFECT,
                  other: {
                    table: value[0].index,
                    open: value[0].open
                  }
                });
                break;

              case '_addbullets':
                //this._addbullets=this._viewModel['_addbullets'];
                //this._addbullets=value[0];
                //--do something
                //log('Fish1AniEffectSystemView___addbullets',this._viewModel['_addbullets']);

                /*
                ps狀態代碼資訊:
                0=正常/一般狀態,1=冰凍,2=金龍來襲,3=金龍死亡(禁止進房)
                */
                let bulletData = this._viewModel['_addbullets'];
                /**
                 * 20240219
                 * 待在場內='in',離場='exit',正常狀態='',
                 * 去篩選出離場前最後一發,但是server 還未改變房間狀態下(還沒從金龍轉變成一般狀態的空檔)
                 */

                let bossStatus = this._viewModel['_bossStatus'];
                log('check_addbullet_with_boss', bossStatus);

                if (bulletData.info.roomStatus == 2 && bossStatus == 'in') {
                  let powerValue = this._mapCannonInfo[bulletData.weaponType].powerup;
                  this.executeAnimation({
                    aniEffectTypeId: (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                      error: Error()
                    }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_GD_POWERUP,
                    other: {
                      index: bulletData.siteIndex,
                      pwvalue: powerValue
                    }
                  });
                } //==============測試區域===========================================================================
                //-value.other.isPlayer,value.other.x,value.other.y,value.other.playerIndex

                /*
                this._aniEffect.executeAnimation({
                    command:AniEffectID.ANI_Money,
                    other:{
                        
                        isPlayer:true, 
                        x:value[0].info.endX,
                        y:value[0].info.endY,
                        playerIndex:value[0].siteIndex
                     }
                });
                 let score=GameUtils.getRangeRandom(2500,9999999);
                this._aniEffect.executeAnimation({
                    command:AniEffectID.ANI_JumpDigits,
                    other:{ 
                        showNumber:score, 
                        x:value[0].info.endX,
                        y:value[0].info.endY 
                    }
                });*/

                /*
                this.executeAnimation({
                    
                    aniEffectTypeId:Fish1AniEffectTypeMap.ANI_GD_RESULT,
                    other:{id:'hellotest',payOff:2500}
                });
                */

                /*
                this._killBossResult={id:'hellotest',payOff:2500};//--kill fish來的資料
                this.executeAnimation({
                    
                    aniEffectTypeId:Fish1AniEffectTypeMap.ANI_GD_KILL_RESULT
                    //other:{id:'hellotest',payOff:2500}
                });
                */
                //this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_BG_EFFECT_CHANGE});


                break;
            }
          };

          this._classId = 'Fish1AniEffectSystemView'; //-黃金捻魚13 彩色鯉魚14 彩色劍魚15 魟魚16 金海龜17 鱷魚18 鯨魚19 金色鬼頭鯊20 boss龍21

          this._bigOddsType = [13, 14, 15, 16, 17, 18, 19, 20]; //--背景反黑的爆炸+fishDeath Effect+大圓盤

          this._midOddsType = [8, 9, 10, 11, 12]; //--搖背景+一般金額撒錢

          this._smallOddsType = [0, 1, 2, 3, 4, 5, 6, 7]; //--一般灑錢
          //-閃電魚22 炸彈23

          this._spOddsType = [22, 23]; //--特殊爆炸
          //--boss

          this._bossType = [21];
          this._killBossResult = null; //--紀錄需要等待動畫撥放完畢後續處理的資料..key=fishID

          this._afterAniDataMap = {};
        }
        /*
        protected  onLoad():void
        {
            
        }*/


        init() {
          this.aniEffect = new (_crd && Fish1AniEffectView === void 0 ? (_reportPossibleCrUseOfFish1AniEffectView({
            error: Error()
          }), Fish1AniEffectView) : Fish1AniEffectView)();
        }

        //---override
        executeAnimation(executeOption) {
          let r = super.executeAnimation(executeOption);

          if (!r) {
            switch (executeOption.aniEffectTypeId) {
              case (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                error: Error()
              }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_GD_COMMING:
                this._aniEffect.executeAnimation({
                  command: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                    error: Error()
                  }), Fish1AniEffectID) : Fish1AniEffectID).ANI_GD_COMMING
                });

                this._aniEffect.executeAnimation({
                  command: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                    error: Error()
                  }), Fish1AniEffectID) : Fish1AniEffectID).ANI_GD_OPENING
                });

                this._aniEffect.executeAnimation({
                  command: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                    error: Error()
                  }), Fish1AniEffectID) : Fish1AniEffectID).ANI_BG_EFFECT_CHANGE,
                  other: 0
                });

                break;

              case (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                error: Error()
              }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_GD_OUT:
                this._aniEffect.executeAnimation({
                  command: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                    error: Error()
                  }), Fish1AniEffectID) : Fish1AniEffectID).ANI_GD_OUT
                });

                break;

              case (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                error: Error()
              }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_GD_POWERUP:
                this._aniEffect.executeAnimation({
                  command: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                    error: Error()
                  }), Fish1AniEffectID) : Fish1AniEffectID).ANI_POWERUP_EFFECT,
                  other: executeOption.other
                });

                break;
              //case Fish1AniEffectTypeMap.ANI_SHAKE_EFFECT:

              case (_crd && AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfAniEffectTypeMap({
                error: Error()
              }), AniEffectTypeMap) : AniEffectTypeMap).ANI_showShakeEffect:
                //this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_SHAKE_EFFECT,other:executeOption.other});
                this._aniEffect.executeAnimation({
                  command: (_crd && AniEffectID === void 0 ? (_reportPossibleCrUseOfAniEffectID({
                    error: Error()
                  }), AniEffectID) : AniEffectID).ANI_ShakeEffect,
                  other: executeOption.other
                });

                break;

              case (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                error: Error()
              }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_GD_RESULT:
                (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
                  error: Error()
                }), SoundsManager) : SoundsManager).getInstance().play('sounds/moneydrop');

                this._aniEffect.executeAnimation({
                  command: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                    error: Error()
                  }), Fish1AniEffectID) : Fish1AniEffectID).ANI_GD_KILL_ANNOUNCE,
                  other: executeOption.other
                });

                break;

              case (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                error: Error()
              }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_GD_KILL_RESULT:
                (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
                  error: Error()
                }), SoundsManager) : SoundsManager).getInstance().play('sounds/dragonkilled');

                this._aniEffect.executeAnimation({
                  command: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                    error: Error()
                  }), Fish1AniEffectID) : Fish1AniEffectID).ANI_GD_EXPLOSION
                });

                this._aniEffect.executeAnimation({
                  command: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                    error: Error()
                  }), Fish1AniEffectID) : Fish1AniEffectID).ANI_GD_KILL_TITLE
                }); //--coin particle--這裡爆掉


                this._aniEffect.executeAnimation({
                  command: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                    error: Error()
                  }), Fish1AniEffectID) : Fish1AniEffectID).ANI_GD_KILL_PARTICLE_COINS
                });

                break;

              case (_crd && AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfAniEffectTypeMap({
                error: Error()
              }), AniEffectTypeMap) : AniEffectTypeMap).ANI_showFlashLightningEffect:
                (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
                  error: Error()
                }), SoundsManager) : SoundsManager).getInstance().play('sounds/lightning');

                this._aniEffect.executeAnimation({
                  command: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                    error: Error()
                  }), Fish1AniEffectID) : Fish1AniEffectID).ANI_BG_EFFECT_CHANGE,
                  other: 1
                });

                this._aniEffect.executeAnimation({
                  command: (_crd && AniEffectID === void 0 ? (_reportPossibleCrUseOfAniEffectID({
                    error: Error()
                  }), AniEffectID) : AniEffectID).ANI_Flash_Lightning,
                  other: executeOption.other
                });

                break;

              case (_crd && AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfAniEffectTypeMap({
                error: Error()
              }), AniEffectTypeMap) : AniEffectTypeMap).ANI_showBombEffect:
                //let bg:BgAniEffect=this.getCommandInstance(BgAniEffect.name);
                let bg = this.getCommandInstance('BgAniEffect');
                let targetNode = bg.getBg();

                if (targetNode) {
                  //this._aniEffect.executeAnimation({command:AniEffectID.ANI_ShakeEffect,other:executeOption.other});
                  this._aniEffect.executeAnimation({
                    command: (_crd && AniEffectID === void 0 ? (_reportPossibleCrUseOfAniEffectID({
                      error: Error()
                    }), AniEffectID) : AniEffectID).ANI_ShakeEffect,
                    other: targetNode
                  });
                }

                let onlySigleOnedata = {
                  chainFishDatas: [executeOption.other.chainFishDatas[0]]
                };

                this._aniEffect.executeAnimation({
                  command: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                    error: Error()
                  }), Fish1AniEffectID) : Fish1AniEffectID).ANI_BG_EFFECT_CHANGE,
                  other: 2
                });

                this._aniEffect.executeAnimation({
                  command: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                    error: Error()
                  }), Fish1AniEffectID) : Fish1AniEffectID).ANI_DEATH_LIGHT_EFFECT,
                  other: onlySigleOnedata
                });

                this._aniEffect.executeAnimation({
                  command: (_crd && AniEffectID === void 0 ? (_reportPossibleCrUseOfAniEffectID({
                    error: Error()
                  }), AniEffectID) : AniEffectID).ANI_BombEffect,
                  other: executeOption.other
                });

                break;

              case (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                error: Error()
              }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_AWARD_DISC_EFFECT:
                if (executeOption.other.isPlayer) {
                  let random = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                    error: Error()
                  }), GameUtils) : GameUtils).getRangeRandom(1, 2);
                  (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
                    error: Error()
                  }), SoundsManager) : SoundsManager).getInstance().play('bigfishkill-' + random);
                }

                this._aniEffect.executeAnimation({
                  command: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                    error: Error()
                  }), Fish1AniEffectID) : Fish1AniEffectID).ANI_AWARD_DISC_EFFECT,
                  other: executeOption.other
                });

                break;

              case (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                error: Error()
              }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_BIG_ODDS_FISH_EFFECT:
                //--背景反黑的爆炸+fishDeath Effect+大圓盤

                /*
                 //-黃金捻魚13 彩色鯉魚14 彩色劍魚15 魟魚16 金海龜17 鱷魚18 鯨魚19 金色鬼頭鯊20 boss龍21
                 this._bigOddsType=[13,14,15,16,17,18,19,20];//--背景反黑的爆炸+fishDeath Effect+大圓盤
                 other:
                {
                    playerIndex:value.siteIndex,
                    money:value.fish.payoff,
                    position:pos
                }*/
                let bigOddsPos = {
                  chainFishDatas: [{
                    fpos: executeOption.other.position
                  }]
                };

                this._aniEffect.executeAnimation({
                  command: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                    error: Error()
                  }), Fish1AniEffectID) : Fish1AniEffectID).ANI_BG_EFFECT_CHANGE,
                  other: 2
                });

                this._aniEffect.executeAnimation({
                  command: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                    error: Error()
                  }), Fish1AniEffectID) : Fish1AniEffectID).ANI_DEATH_LIGHT_EFFECT,
                  other: bigOddsPos
                });

                this._aniEffect.executeAnimation({
                  command: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                    error: Error()
                  }), Fish1AniEffectID) : Fish1AniEffectID).ANI_AWARD_DISC_EFFECT,
                  other: executeOption.other
                });

                break;

              case (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                error: Error()
              }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_MID_ODDS_FISH_EFFECT:
                //--搖背景+一般金額撒錢
                //- this._midOddsType=[8,9,10,11,12];//--搖背景+一般金額撒錢
                //--在release模式下,class.name他可是會被拿掉的
                //let midOddsbg:BgAniEffect=this.getCommandInstance(BgAniEffect.name);
                log('BgAniEffect.name', (_crd && BgAniEffect === void 0 ? (_reportPossibleCrUseOfBgAniEffect({
                  error: Error()
                }), BgAniEffect) : BgAniEffect).name);
                let midOddsbg = this.getCommandInstance('BgAniEffect');
                let midOddsNode = midOddsbg.getBg();

                if (midOddsNode) {
                  //this._aniEffect.executeAnimation({command:AniEffectID.ANI_ShakeEffect,other:executeOption.other});
                  this._aniEffect.executeAnimation({
                    command: (_crd && AniEffectID === void 0 ? (_reportPossibleCrUseOfAniEffectID({
                      error: Error()
                    }), AniEffectID) : AniEffectID).ANI_ShakeEffect,
                    other: midOddsNode
                  });
                }

                break;

              case (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                error: Error()
              }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_SUMMON_EFFECT:
                if (!executeOption.other.close) {
                  (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
                    error: Error()
                  }), SoundsManager) : SoundsManager).getInstance().play('sounds/summon');
                } //--召喚效果


                this._aniEffect.executeAnimation({
                  command: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                    error: Error()
                  }), Fish1AniEffectID) : Fish1AniEffectID).ANI_SUMMON_EFFECT,
                  other: {
                    close: executeOption.other.close,
                    index: executeOption.other.index,
                    swp: executeOption.other.swp,
                    ewp: executeOption.other.ewp
                  }
                });

                break;

              case (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                error: Error()
              }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_FREEZE_EFFECT:
                if (executeOption.other.freeze) {
                  (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
                    error: Error()
                  }), SoundsManager) : SoundsManager).getInstance().play('sounds/ice');
                }

                log('go_do_ANI_FREEZE_EFFECT', this._aniEffect); //--冰凍效果 

                this._aniEffect.executeAnimation({
                  command: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                    error: Error()
                  }), Fish1AniEffectID) : Fish1AniEffectID).ANI_FREEZE_EFFECT,
                  other: {
                    freeze: executeOption.other.freeze
                  }
                });

                break;

              case (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                error: Error()
              }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_CRAZY_EFFECT:
                //--狂暴效果 
                this._aniEffect.executeAnimation({
                  command: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                    error: Error()
                  }), Fish1AniEffectID) : Fish1AniEffectID).ANI_CRAZY_EFFECT,
                  other: {
                    open: executeOption.other.open,
                    table: executeOption.other.table
                  }
                });

                break;

              case (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                error: Error()
              }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_GET_PROP_EFFECT:
                //--掉落道具
                this._aniEffect.executeAnimation({
                  command: (_crd && Fish1AniEffectID === void 0 ? (_reportPossibleCrUseOfFish1AniEffectID({
                    error: Error()
                  }), Fish1AniEffectID) : Fish1AniEffectID).ANI_GET_PROP_EFFECT,
                  other: {
                    propType: executeOption.other.propType,
                    wp: executeOption.other.wp
                  }
                });

                break;

              /**
               *   this.executeAnimation(
                  {
                      aniEffectTypeId:Fish1AniEffectTypeMap.ANI_GET_PROP_EFFECT,
                      other:
                      {
                          propType:value.fish.props,
                          wp:pos
                      }
                  });
               */
            }
          }

          return r;
        }

        afterSpEffect(afterDataId) {
          let afterEffectData = this._afterAniDataMap[afterDataId]; //log('afterEffectData@@',afterEffectData);

          for (let i = 0; i < afterEffectData.infoData.length; i++) {
            (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
              error: Error()
            }), SoundsManager) : SoundsManager).getInstance().play('sounds/moneydrop');

            if (this._spOddsType.indexOf(afterEffectData.infoData[i].type) == -1) {
              //--特殊魚(連鎖AOE)本身不秀錢+分數
              this.executeAnimation({
                aniEffectTypeId: (_crd && AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfAniEffectTypeMap({
                  error: Error()
                }), AniEffectTypeMap) : AniEffectTypeMap).ANI_showPayoffMoneyAndDigits,
                other: {
                  money: {
                    isPlayer: afterEffectData.isPlayer,
                    x: afterEffectData.infoData[i].fpos.x,
                    y: afterEffectData.infoData[i].fpos.y,
                    playerIndex: afterEffectData.table
                  },
                  digits: {
                    showNumber: afterEffectData.infoData[i].payoff,
                    x: afterEffectData.infoData[i].fpos.x,
                    y: afterEffectData.infoData[i].fpos.y
                  }
                }
              });
            } //--刪除魚隻


            this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
              error: Error()
            }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_removeFishById, afterEffectData.infoData[i].sn);
          } //--開轉盤


          this.executeAnimation({
            aniEffectTypeId: (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
              error: Error()
            }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_AWARD_DISC_EFFECT,
            other: {
              money: afterEffectData.totalPayoff,
              playerIndex: afterEffectData.table,
              isPlayer: afterEffectData.isPlayer
            }
          }); //-totalPayoff/table
          //--刪除表演資料

          delete this._afterAniDataMap[afterDataId];
        }

        hitFish(value) {
          //log('effectKillFish',value);
          if (value.fish.iskill == false) {//---沒死
            //-hitFishes
            //-1.要補處理把鎖定/自動打的資料抹掉
            //--處理其他玩家的漁網張開
            //-2-this._bulletsSystem.setBulletIsDeath(fishes);
            //-bullet裡面自己做
            //this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_setBulletIsDeath,value.bsn);
          } else {
            let isPlayer = false; //--0-3

            if (value.siteIndex == this._viewModel['_playerTableId']) {
              isPlayer = true;
            }

            let spMode = value.fish.bonus;

            let fd = this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
              error: Error()
            }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_getFishById, value.fish.sn);

            if (fd) {
              let pos; //--有道具

              if (value.fish.props != 0 && isPlayer) {
                pos = this.getFish2Dand3DAnimationPositionToWorld(fd.fishMeshState, v3(fd.fishFlockUnit.position.x, fd.fishFlockUnit.position.y)); //log('check_propStartWp',pos,fd.fishFlockUnit.position);

                this.executeAnimation({
                  aniEffectTypeId: (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                    error: Error()
                  }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_GET_PROP_EFFECT,
                  other: {
                    propType: value.fish.props,
                    wp: pos
                  }
                });
              }

              if (this._bossType.indexOf(fd.fishType) != -1) {
                //--準備取玩家的暱稱
                let logininName = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                  error: Error()
                }), GameUtils) : GameUtils).processAccountName(this.getplayerLoginName(value.siteIndex));
                this._killBossResult = {
                  id: logininName,
                  payOff: value.fish.payoff
                }; //--kill fish來的資料

                this.executeAnimation({
                  aniEffectTypeId: (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                    error: Error()
                  }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_GD_KILL_RESULT
                });
                this.executeAnimation({
                  aniEffectTypeId: (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                    error: Error()
                  }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_GD_OUT
                }); //--removeFishById要再補把鎖定/自動打的資料抹掉

                this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                  error: Error()
                }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                  error: Error()
                }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_removeFishById, value.fish.sn);
              } else if (this._spOddsType.indexOf(fd.fishType) != -1) {
                //--炸彈 & 閃電 (killSpFish=[{fid:379,ft:16}...])
                log('checkKillSPFish_data', value);
                let chainKillfish = value.fish.killSpFish;
                let chainDatas = [];
                let totalPayforchain = 0; //--把目標魚(閃電/炸彈)塞到chainDatas裡面的第一個

                if (!chainKillfish) {
                  chainKillfish = [];
                } else {
                  //--如果有炸彈或是閃電的話,檢查位置將他們擠到陣列第一個位置
                  chainKillfish.sort(this.sortChainDatas);
                } //-{fid:380,ft:8,ws:30}要偽裝進來的資料內容
                //--檢查閃電/炸彈是否已經在連鎖群裡面,沒有的話推進第一個


                if (this.checkChainDatas(fd.id, chainKillfish)) {
                  chainKillfish.unshift({
                    fid: value.fish.sn,
                    ft: value.fish.ftp,
                    ws: value.fish.payoff
                  });
                }

                log('check_afterData', chainKillfish);

                for (let i = 0; i < chainKillfish.length; i++) {
                  //--有資料
                  let chainFd = i == 0 ? fd : this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                    error: Error()
                  }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                    error: Error()
                  }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_getFishById, chainKillfish[i].fid); //--把魚從路徑中抽離

                  this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                    error: Error()
                  }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                    error: Error()
                  }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_removeSinglePathUnitByFishId, chainKillfish[i].fid); //--停止受擊動畫


                  this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                    error: Error()
                  }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                    error: Error()
                  }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_hitFishAniComplete, chainFd);

                  if (chainFd) {
                    pos = this.getFish2Dand3DAnimationPositionToWorld(chainFd.fishMeshState, v3(chainFd.fishFlockUnit.position.x, chainFd.fishFlockUnit.position.y));
                    chainDatas.push({
                      fpos: pos,
                      sn: chainKillfish[i].fid,
                      type: chainKillfish[i].ft,
                      payoff: chainKillfish[i].ws
                    });
                    totalPayforchain += chainKillfish[i].ws;
                  }
                } //--將鎖定/自動打的列表中刪除-   


                this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                  error: Error()
                }), GameViewMediatorUser) : GameViewMediatorUser).GameLogicSystem, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                  error: Error()
                }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).GameLogic_cleanManualLock, fd.id); //--閃電魚/炸彈本身不噴錢(他是噴總額圓盤)


                if (chainDatas.length > 1) {
                  //--接表演動畫
                  let afterAniData = {
                    id: value.fish.sn,
                    table: value.siteIndex,
                    isPlayer: isPlayer,
                    totalPayoff: totalPayforchain,
                    odds: value.fish.odds,
                    fishType: value.fish.ftp,
                    spMode: spMode,
                    infoData: chainDatas
                  };
                  this._afterAniDataMap[afterAniData.id] = afterAniData; //--fd.fishType==22 閃電/fd.fishType==23 炸彈

                  let commandId = fd.fishType == 22 ? (_crd && AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfAniEffectTypeMap({
                    error: Error()
                  }), AniEffectTypeMap) : AniEffectTypeMap).ANI_showFlashLightningEffect : (_crd && AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfAniEffectTypeMap({
                    error: Error()
                  }), AniEffectTypeMap) : AniEffectTypeMap).ANI_showBombEffect;
                  this.executeAnimation({
                    aniEffectTypeId: commandId,
                    other: {
                      id: afterAniData.id,
                      chainFishDatas: chainDatas
                    }
                  });
                } else {
                  //--沒有連鎖直接爆開給分
                  //--給圓盤動畫
                  this.executeAnimation({
                    aniEffectTypeId: (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                      error: Error()
                    }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_AWARD_DISC_EFFECT,
                    other: {
                      //money:value.fish.payoff,
                      money: chainKillfish[0].ws,
                      playerIndex: value.siteIndex
                    }
                  }); //--刪除魚

                  this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                    error: Error()
                  }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                    error: Error()
                  }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_removeFishById, value.fish.sn);
                }
              } else {
                //--這裡是一般的擊殺
                //--換世界座標
                //log('AniEffectView_hitFish',fd);
                //let pos:Vec3=this.getFish2Dand3DAnimationPositionToWorld(fd.fishMeshState,fd.fishMesh.position);
                pos = this.getFish2Dand3DAnimationPositionToWorld(fd.fishMeshState, v3(fd.fishFlockUnit.position.x, fd.fishFlockUnit.position.y)); //--這邊要依照odds來決定撥放哪一種的效果
                //--賠率不同都會有不同的效果區間

                (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
                  error: Error()
                }), SoundsManager) : SoundsManager).getInstance().play('sounds/moneydrop');
                this.executeAnimation({
                  aniEffectTypeId: (_crd && AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfAniEffectTypeMap({
                    error: Error()
                  }), AniEffectTypeMap) : AniEffectTypeMap).ANI_showPayoffMoneyAndDigits,
                  //aniEffectTypeId:oddsEffectCommandId,
                  other: {
                    money: {
                      isPlayer: isPlayer,
                      x: pos.x,
                      y: pos.y,
                      playerIndex: value.siteIndex
                    },
                    digits: {
                      showNumber: value.fish.payoff,
                      x: pos.x,
                      y: pos.y
                    }
                  }
                });

                if (this._bigOddsType.indexOf(fd.fishType) != -1) {
                  //--背景反黑的爆炸+fishDeath Effect+大圓盤
                  this.executeAnimation({
                    aniEffectTypeId: (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                      error: Error()
                    }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_BIG_ODDS_FISH_EFFECT,
                    other: {
                      playerIndex: value.siteIndex,
                      money: value.fish.payoff,
                      position: pos
                    }
                  });
                } else if (this._midOddsType.indexOf(fd.fishType) != -1) {
                  //--搖背景+一般金額撒錢
                  this.executeAnimation({
                    aniEffectTypeId: (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                      error: Error()
                    }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_MID_ODDS_FISH_EFFECT,
                    other: null
                  });
                } //--removeFishById要再補把鎖定/自動打的資料抹掉


                this._gameMediator.getViewUserData((_crd && GameViewMediatorUser === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUser({
                  error: Error()
                }), GameViewMediatorUser) : GameViewMediatorUser).FishView, (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
                  error: Error()
                }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Fish_removeFishById, value.fish.sn);
              } //this.cleanManualLock(value.fish[k].sn);---待補

            }
          }
        }

        sortChainDatas(a, b) {
          if (a.ft === 22 || a.ft === 23) {
            return -1;
          } else if (b.ft === 22 || b.ft === 23) {
            // 如果 b 的 ft 等于 22 或者 23，将其排在前面
            return 1;
          } else {
            return 0; // 否则按照原始顺序排列
          }
        }

        checkChainDatas(targetFid, chainDatas) {
          let f = true;

          for (let i = 0; i < chainDatas.length; i++) {
            if (chainDatas[i].fid == targetFid) {
              f = false;
              break;
            }
          }

          return f;
        }

        checkAndCleanLeavePlayerEffects(value) {
          let room = value.tables;
          let len = room.length;

          for (let i = 0; i < len; i++) {
            if (room[i].userID == 0) {
              //--空桌
              this.executeAnimation({
                aniEffectTypeId: (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                  error: Error()
                }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_CRAZY_EFFECT,
                other: {
                  table: i,
                  //--0-3
                  open: false
                }
              });
            }
          }
        }
        /**
         * 取得房間內特定座位玩家的暱稱(boss顯示結算要用的)
         * @param index 0-3
         */


        getplayerLoginName(index) {
          let tables = this._viewModel['_roomTableInfo'].tables;
          return tables[index].userLoginName;
        }

        getFish2Dand3DAnimationPositionToWorld(type, pos) {
          let rpos;
          let fishContainer = find('Canvas/fishNodeContainer/fishNode');
          rpos = fishContainer.getComponent(UITransform).convertToWorldSpaceAR(pos);
          /*
          if(type==fishMeshState.fish2D)
          {
             let fishContainer:Node=find('Canvas/fishNodeContainer/fishNode');
             
             rpos=fishContainer.getComponent(UITransform).convertToWorldSpaceAR(pos);
           }else{
             
             
              let sceneCameraNode:Node=find('Main Camera');
              
              let cameraComponent=sceneCameraNode.getComponent(CameraComponent);
              
              let wts:Vec3=cameraComponent.worldToScreen(pos);
              
              let canvasCameraNode:Node=find('Canvas/Camera');
              //--canvas camera cameracomponent
              let canvasCameraComponent=canvasCameraNode.getComponent(CameraComponent);
               //--screen to world
              rpos=canvasCameraComponent.screenToWorld(wts);
            
          }*/

          return rpos;
        }

        //--interface abstract
        getData(dataKey, value) {
          switch (dataKey) {
            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Effect_bossExit:
              this.executeAnimation({
                aniEffectTypeId: (_crd && Fish1AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfFish1AniEffectTypeMap({
                  error: Error()
                }), Fish1AniEffectTypeMap) : Fish1AniEffectTypeMap).ANI_GD_OUT
              });
              break;

            case (_crd && GameViewMediatorUserDataKey === void 0 ? (_reportPossibleCrUseOfGameViewMediatorUserDataKey({
              error: Error()
            }), GameViewMediatorUserDataKey) : GameViewMediatorUserDataKey).Effect_bossShake:
              //let bg:BgAniEffect=this.getCommandInstance(BgAniEffect.name);
              let bg = this.getCommandInstance('BgAniEffect');
              let targetNode = bg.getBg();

              if (targetNode) {
                //-Fish1AniEffectTypeMap.ANI_SHAKE_EFFECT
                this.executeAnimation({
                  //aniEffectTypeId:Fish1AniEffectTypeMap.ANI_SHAKE_EFFECT,
                  aniEffectTypeId: (_crd && AniEffectTypeMap === void 0 ? (_reportPossibleCrUseOfAniEffectTypeMap({
                    error: Error()
                  }), AniEffectTypeMap) : AniEffectTypeMap).ANI_showShakeEffect,
                  other: targetNode
                });
              }

              break;
          }
        } //--interface abstract


        excute(value) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_addbullets", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "_hitFishs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "_roomStatus", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "_useSummonProp", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "_useCrazyProp", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "_bossStatus", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "_mapCannonInfo", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "_roomTableInfo", [_dec8], {
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
//# sourceMappingURL=2f8b1dde0aeedac943a19a714c4ebb031f49632d.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Enum, sp, CustomAnimationController, AnimationPlayStateList, FindComponent, RPSWildState, RPSWildResult, RPSWild_AniState, GameUtils, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, CleanTrackType, RPSWildAnimationController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfParticleExtension(extras) {
    _reporterNs.report("ParticleExtension", "../../MyUtils/AnimationSystem/Components/ParticleExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationPlayInfo(extras) {
    _reporterNs.report("AnimationPlayInfo", "../../MyUtils/AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotMachineIndexInfo(extras) {
    _reporterNs.report("SlotMachineIndexInfo", "../../MyUtils/AnimationSystem/Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCustomAnimationController(extras) {
    _reporterNs.report("CustomAnimationController", "../../MyUtils/AnimationSystem/Components/CustomAnimationController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationPlayStateList(extras) {
    _reporterNs.report("AnimationPlayStateList", "../../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniCtrlPropDef(extras) {
    _reporterNs.report("AniCtrlPropDef", "../../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../../MyUtils/FindComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSWildState(extras) {
    _reporterNs.report("RPSWildState", "./RPSWildDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSWildResult(extras) {
    _reporterNs.report("RPSWildResult", "./RPSWildDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRPSWild_AniState(extras) {
    _reporterNs.report("RPSWild_AniState", "./RPSWildDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../MyUtils/GameUtils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Enum = _cc.Enum;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      CustomAnimationController = _unresolved_2.CustomAnimationController;
    }, function (_unresolved_3) {
      AnimationPlayStateList = _unresolved_3.AnimationPlayStateList;
    }, function (_unresolved_4) {
      FindComponent = _unresolved_4.FindComponent;
    }, function (_unresolved_5) {
      RPSWildState = _unresolved_5.RPSWildState;
      RPSWildResult = _unresolved_5.RPSWildResult;
      RPSWild_AniState = _unresolved_5.RPSWild_AniState;
    }, function (_unresolved_6) {
      GameUtils = _unresolved_6.GameUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96018k9MPZLM4qiIBO28U32", "RPSWildAnimationController", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'Enum', 'Component', 'Node', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      CleanTrackType = /*#__PURE__*/function (CleanTrackType) {
        CleanTrackType[CleanTrackType["All_TRACKS"] = 0] = "All_TRACKS";
        CleanTrackType[CleanTrackType["CURRENT_TRACK"] = 1] = "CURRENT_TRACK";
        return CleanTrackType;
      }(CleanTrackType || {});

      Enum(CleanTrackType);

      _export("RPSWildAnimationController", RPSWildAnimationController = (_dec = ccclass('RPSWildAnimationController'), _dec2 = property({
        visible: true,
        tooltip: '是否要播放完畢後停止'
      }), _dec3 = property({
        type: CleanTrackType,
        visible: true,
        tooltip: '清除全部tracks或是當前撥放的trackIndex'
      }), _dec4 = property({
        type: _crd && AnimationPlayStateList === void 0 ? (_reportPossibleCrUseOfAnimationPlayStateList({
          error: Error()
        }), AnimationPlayStateList) : AnimationPlayStateList,
        displayName: 'animationPlayStateList',
        visible: true,
        tooltip: '單一的識別碼'
      }), _dec(_class = (_class2 = class RPSWildAnimationController extends (_crd && CustomAnimationController === void 0 ? (_reportPossibleCrUseOfCustomAnimationController({
        error: Error()
      }), CustomAnimationController) : CustomAnimationController) {
        constructor(...args) {
          super(...args);

          /**
           * 猜拳wild的動畫控制器
           */
          this.tokenID = void 0;
          //--單一的識別碼
          this.slotMachineIndexInfo = void 0;
          this.groupID = void 0;
          //--會有同一個物件在不同的group裡面(第四軸重複的)
          this.isPlaying = void 0;
          this.particleSystem = void 0;

          _initializerDefineProperty(this, "_afterPlayDoStop", _descriptor, this);

          _initializerDefineProperty(this, "_clearTracks", _descriptor2, this);

          _initializerDefineProperty(this, "_animationPlayStateList", _descriptor3, this);

          this._spineBack = void 0;
          this._spineFront = void 0;
          this._mapBackSkin = void 0;
          this._mapAni = void 0;
          this._campData = void 0;
          //-0阿里(左)/1盜賊(右)
          this._targetId = void 0;
          //--目標的id
          this._defaultSkin = 'default';
          this._currentTarget = null;
          this._defaultTarget = null;
          //--預設不啟動
          this._wildState = (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
            error: Error()
          }), RPSWildState) : RPSWildState).WILD_3;
          this._previousWildState = (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
            error: Error()
          }), RPSWildState) : RPSWildState).WILD_3;
          this._level = void 0;
          //--0621
          this._resolveBack = void 0;
          this._resolveFront = void 0;
          //--0702--針對每次旋轉都要表演connect的動畫處理(尚未決定勝負的狀態下)
          this._isCampDecided = false;

          this.onAniComplete = () => {
            this._spineBack.getState().setEmptyAnimation(0, 0);
            /*
            if (this._clearTracks == CleanTrackType.CURRENT_TRACK) {
                this.cleanCurrentTrack();
            } else {
                this.clearTracks();
            }*/


            this.isPlaying = false;
            /*
            //-this._afterPlayDoStop沒有勾選將不會停止相關動作
            if (this._afterPlayDoStop) {
                if (this._clearTracks == CleanTrackType.All_TRACKS) {
                    this.clearTracks();
                } else if (this._clearTracks == CleanTrackType.CURRENT_TRACK) {
                    this.cleanCurrentTrack();
                }
            }*/
          };
        }

        //--是否已經決定陣營(尚未進行第一次決定陣營的旋轉)
        //--0626
        //private _onBackSpineComplete: (() => void) | null = null;
        get spineBack() {
          return this._spineBack;
        }

        get spineFront() {
          return this._spineFront;
        }

        get animationPlayStateList() {
          return this._animationPlayStateList;
        } //--狀態改變的時候要寫入


        set wildState(value) {
          this._previousWildState = this._wildState;
          this._wildState = value;
        }

        get wildState() {
          return this._wildState;
        } //--init要先設


        set campData(value) {
          this._campData = value;
          this._targetId = this._campData == 0 ? 'icon_08' : 'icon_09';
        }

        set isCampDecided(value) {
          this._isCampDecided = value;
        }

        onLoad() {//console.log('RPSWildAnimationController onLoad', this._animationPlayStateList);
        }

        init() {
          let spineBackTargetNode = this.node.getChildByName('icon_08_09_bot_Skel');
          this._spineBack = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
            error: Error()
          }), FindComponent) : FindComponent).findComponentInChildren(spineBackTargetNode, sp.Skeleton);
          let spineFrontTargetNode = this.node.getChildByName('icon_08_09_frame_Skel');
          this._spineFront = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
            error: Error()
          }), FindComponent) : FindComponent).findComponentInChildren(spineFrontTargetNode, sp.Skeleton);
          this._mapBackSkin = new Map([['icon_08', //--這個同時也是_spineFront的skin id
          new Map([[(_crd && RPSWildResult === void 0 ? (_reportPossibleCrUseOfRPSWildResult({
            error: Error()
          }), RPSWildResult) : RPSWildResult).P, 'icon_08_paper'], //--paper
          [(_crd && RPSWildResult === void 0 ? (_reportPossibleCrUseOfRPSWildResult({
            error: Error()
          }), RPSWildResult) : RPSWildResult).S, 'icon_08_scissors'], //-scissors
          [(_crd && RPSWildResult === void 0 ? (_reportPossibleCrUseOfRPSWildResult({
            error: Error()
          }), RPSWildResult) : RPSWildResult).R, 'icon_08_stone'] //--rock
          ])], ['icon_09', //--這個同時也是_spineFront的skin id
          new Map([[(_crd && RPSWildResult === void 0 ? (_reportPossibleCrUseOfRPSWildResult({
            error: Error()
          }), RPSWildResult) : RPSWildResult).P, 'icon_09_paper'], //--paper
          [(_crd && RPSWildResult === void 0 ? (_reportPossibleCrUseOfRPSWildResult({
            error: Error()
          }), RPSWildResult) : RPSWildResult).S, 'icon_09_scissors'], //-scissors
          [(_crd && RPSWildResult === void 0 ? (_reportPossibleCrUseOfRPSWildResult({
            error: Error()
          }), RPSWildResult) : RPSWildResult).R, 'icon_09_stone'] //--rock
          ])]]); //---back/front的動畫id都一樣

          this._mapAni = new Map([[(_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
            error: Error()
          }), RPSWildState) : RPSWildState).WILD_0, new Map([[(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).APPEAR, 'wild0_appear'], //--轉輪轉到這個wild的時候(停軸使用)
          [(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).IDLE, 'wild0_idle'], //--待機使用
          [(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).CONNECT, 'wild0_connect'], //--中線使用
          [(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).BATTLE, 'wild1_battle'], //--旋轉/猜拳對戰使用
          [(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).ROLL, 'wild1_battle'], //--旋轉/猜拳對戰使用
          [(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).NEXT, 'wild0_to_wild1'], //---取得勝利要升級的時候使用
          [(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).PREV, ''] //--平手的時候使用(第一個好像沒有QQ?)
          ])], [(_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
            error: Error()
          }), RPSWildState) : RPSWildState).WILD_1, new Map([[(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).APPEAR, 'wild1_appear'], //--轉輪轉到這個wild的時候(停軸使用)
          [(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).IDLE, 'wild1_idle'], //--待機使用
          [(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).CONNECT, 'wild1_connect'], //--中線使用
          [(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).BATTLE, 'wild1_battle'], //--旋轉/猜拳對戰使用
          [(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).ROLL, 'wild1_battle'], //--旋轉/猜拳對戰使用
          [(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).NEXT, 'wild1_to_wild2'], //---取得勝利要升級的時候使用
          [(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).PREV, 'wild1_to_wild0'] //--平手的時候使用(退回上一個,且狀態要回到上一個wild0)
          ])], [(_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
            error: Error()
          }), RPSWildState) : RPSWildState).WILD_2, new Map([[(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).APPEAR, 'wild2_appear'], //--轉輪轉到這個wild的時候(停軸使用)
          [(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).IDLE, 'wild2_idle'], //--待機使用
          [(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).CONNECT, 'wild2_connect'], //--中線使用
          [(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).BATTLE, 'wild2_battle'], //--旋轉/猜拳對戰使用
          [(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).ROLL, 'wild2_battle'], //--旋轉/猜拳對戰使用
          [(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).NEXT, ''], //---取得勝利要升級的時候使用(目前只有這wild1有退回與升級)
          [(_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).PREV, ''] //--平手的時候使用(目前只有這wild1有退回與升級)
          ])]]);
          this.isPlaying = false;
          this._isCampDecided = false;
          let key = this.getAniNameByWildRoundState((_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
            error: Error()
          }), RPSWildState) : RPSWildState).WILD_0, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).CONNECT);
          this._defaultTarget = this.checkSpinePlayData(key);
          this._wildState = (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
            error: Error()
          }), RPSWildState) : RPSWildState).WILD_3;
          this._previousWildState = (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
            error: Error()
          }), RPSWildState) : RPSWildState).WILD_3;
          this._level = 0;
        }

        changeDefaultTarget(key) {
          this._defaultTarget = this.checkSpinePlayData(key);
        } //---輪播的時候會用到要去撥放反覆的重線動畫
        //--PS aniData已經在stopRolling的時候有設定過了

        /*
        public setAniDataForConnect(): AniCtrlPropDef {
            const connectSuffix = 'connect';
            const cloneSuffix = '_clone';
            const wildStateKey=(this._wildState==RPSWildState.WILD_3)?RPSWildState.WILD_0:this._wildState;
            const wildConnectKey = this.getAniNameByWildRoundState(wildStateKey, RPSWild_AniState.CONNECT);
           
            
            const setAndReturn = (aniData: AniCtrlPropDef): AniCtrlPropDef => {
                this._defaultTarget = aniData;
                this._currentTarget = aniData;
                return aniData;
            };
        
            if (this._defaultTarget) {
                if (this._defaultTarget.targetName.includes(connectSuffix)) {
                    if (!this._defaultTarget.targetName.includes(cloneSuffix)) {
                        const cloneAniData = this.createCloneAniConnectData(this._defaultTarget);
                        this._animationPlayStateList.clipsInfo.push(cloneAniData);
                        return setAndReturn(cloneAniData);
                    }
                    return setAndReturn(this._defaultTarget);
                } else {
                    const clonedExisting = this.getAniData(wildConnectKey + cloneSuffix);
                    if (clonedExisting) {
                        return setAndReturn(clonedExisting);
                    } else {
                        const baseAniData = this.getAniData(wildConnectKey);
                        if (baseAniData) {
                            const newClone = this.createCloneAniConnectData(baseAniData);
                            this._animationPlayStateList.clipsInfo.push(newClone);
                            return setAndReturn(newClone);
                        }
                        return null;
                    }
                }
            } else {
                const clonedExisting = this.getAniData(wildConnectKey + cloneSuffix);
                if (clonedExisting) {
                    return setAndReturn(clonedExisting);
                } else {
                    const baseAniData = this.getAniData(wildConnectKey);
                    if (baseAniData) {
                        const newClone = this.createCloneAniConnectData(baseAniData);
                        this._animationPlayStateList.clipsInfo.push(newClone);
                        return setAndReturn(newClone);
                    }
                    return null; 
                }
            }
        }*/


        getAniData(value) {
          return this._animationPlayStateList.clipsInfo.find(clip => clip.targetName === value);
        }

        createCloneAniConnectData() {
          const wildStateKey = this._wildState == (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
            error: Error()
          }), RPSWildState) : RPSWildState).WILD_3 ? (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
            error: Error()
          }), RPSWildState) : RPSWildState).WILD_0 : this._wildState;
          const wildConnectKey = this.getAniNameByWildRoundState(wildStateKey, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).CONNECT);
          const baseAniData = this.getAniData(wildConnectKey);
          let cloneAniData = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).deepCloneForObject(baseAniData);
          cloneAniData.loop = true;
          return cloneAniData;
        }

        playAniWithAniCtrDef(value) {
          this._spineBack.timeScale = value.timeScale ? value.timeScale : 1; //--儘管是loop=true,但每次都會觸發..

          this._spineBack.setCompleteListener(null);

          this._spineBack.setCompleteListener(this.onAniComplete);

          let trackIndex = value.trackIndex ? value.trackIndex : 0;
          this.isPlaying = true;

          this._spineBack.setAnimation(trackIndex, value.targetName, value.loop);

          this._spineFront.timeScale = value.timeScale ? value.timeScale : 1;
          trackIndex = value.trackIndex ? value.trackIndex : 0;

          this._spineFront.setAnimation(trackIndex, value.targetName, value.loop);
        }
        /**
         * _spineFront有較為單純的skin設定,依照陣營不同分左右兩邊而已
         * _spineBack有較為複雜的skin設定,依照陣營不同分左右兩邊,且每個陣營有三種不同的skin(猜拳的型態)
         * 做之前一定要先寫入campData
         */


        setFrontSpineSkin() {
          if (this._targetId != '') {
            //let index=this.getSkinFrontEnumIndex(this._targetId);
            //@ts-ignore
            //this._spineFront._defaultSkinIndex = index;
            //@ts-ignore
            //console.log('check_skin_index',this._spineFront.defaultSkin);
            this._spineFront.setSkin(this._targetId); //console.log('check_skin', this._spineFront.skeletonData.getSkinsEnum());

          }
        }

        getSkinFrontEnumIndex(skinName) {
          let skinData = this._spineFront.skeletonData.getSkinsEnum();

          for (let i in skinData) {
            //console.log('check_skinData', i, skinData[i]);
            if (i == skinName) {
              return skinData[i];
            }
          }
        }

        getSkinBackEnumIndex(skinName) {
          let skinData = this._spineBack.skeletonData.getSkinsEnum();

          for (let i in skinData) {
            console.log('check_skinData', i, skinData[i]);

            if (i == skinName) {
              return skinData[i];
            }
          }
        }

        getShowAniTargetName(wildState, aniState) {
          return this._mapAni.get(wildState).get(aniState);
        }
        /**
         * https://forum.cocos.org/t/creator-v2-0-1-spine-setskin/65817/5
         * 要在addChild之後才能設定skin(addChild之後才會有start/update)
         * 這裡專門用來設定_spineBack的skin
         * @param value 直接送
         */


        changeSkin(value) {
          if (this._spineBack) {
            let skinId = this._mapBackSkin.get(this._targetId).get(value); //let index=this.getSkinFrontEnumIndex(this._targetId);
            //@ts-ignore
            //this._spineBack._defaultSkinIndex = index;
            //console.log('check_skin_index', skinId);


            if (skinId) {
              this._spineBack.setSkin(skinId);
            }
          }
        }

        destroyAniController() {}
        /**
         * 這個用來改變wild的外框狀態(基本上進入猜拳模式就從0->1的狀態了,
         * 在完成出現該輪後,只要進到後續猜拳都已經有贏一把了,直接到L2的外觀
         * )
         * 只要與現在的不同狀態(RPSWildState),就必須要改變外框的狀態
         * 前一次的狀態將會記錄在_previousWildState裡面(用來判斷是否要退回上一個狀態(可能會需要))
         * @param wildState 
         */
        //public changeWildOutFrame(wildState: RPSWildState, level: number): Promise<void> {


        changeWildOutFrame(wildState, levelIndex) {
          this.wildState = wildState;
          let changeFrameData = this.getAniNameByWildRoundState(wildState, levelIndex);
          return new Promise(resolve => {
            if (changeFrameData == '') {
              resolve();
            } else {
              this.playAniInPromise(changeFrameData).then(() => {
                resolve();
              });
            }
          });
        }

        playAni(value) {
          let key = value;

          if (value == (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
            error: Error()
          }), RPSWild_AniState) : RPSWild_AniState).IDLE && this._wildState != (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
            error: Error()
          }), RPSWildState) : RPSWildState).WILD_3) {
            let targetState = this._wildState; //--要秀完才會changeFrame來去改變狀態..但流程修改後必須提前,所以先強塞

            if (this._wildState == (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
              error: Error()
            }), RPSWildState) : RPSWildState).WILD_1) {
              targetState = (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
                error: Error()
              }), RPSWildState) : RPSWildState).WILD_2;
            }

            key = this.getAniNameByWildRoundState(targetState, (_crd && RPSWild_AniState === void 0 ? (_reportPossibleCrUseOfRPSWild_AniState({
              error: Error()
            }), RPSWild_AniState) : RPSWild_AniState).IDLE);
          }

          const playData = this.checkSpinePlayData(key);
          this._spineBack.timeScale = playData.timeScale ? playData.timeScale : 1; //--儘管是loop=true,但每次都會觸發..

          this._spineBack.setCompleteListener(null);

          let trackIndex = playData.trackIndex ? playData.trackIndex : 0;
          this.isPlaying = true;

          this._spineBack.setAnimation(trackIndex, playData.targetName, playData.loop);

          this._spineFront.timeScale = playData.timeScale ? playData.timeScale : 1;
          trackIndex = playData.trackIndex ? playData.trackIndex : 0;

          this._spineFront.setAnimation(trackIndex, playData.targetName, playData.loop);
        }

        stopAni() {
          var _this$_resolveBack, _this$_resolveFront;

          (_this$_resolveBack = this._resolveBack) == null || _this$_resolveBack.call(this); // 確保 resolve 掉等待中的 Promise

          (_this$_resolveFront = this._resolveFront) == null || _this$_resolveFront.call(this);
          this._resolveBack = undefined;
          this._resolveFront = undefined;

          this._spineBack.getState().setEmptyAnimation(0, 0);

          this._spineFront.getState().setEmptyAnimation(0, 0); //this.onAniComplete();


          this.isPlaying = false;
        } //--20250722-待補


        stopPromiseAni() {
          console.log();
        }

        pauseAni() {}

        resumeAni() {}

        setAniDataInfo(value) {}

        beforeDestroy() {}

        forceToDoBeforeDestroy() {
          this.stopAni();

          if (this._clearTracks == CleanTrackType.CURRENT_TRACK) {
            this.cleanCurrentTrack();
          } else {
            this.clearTracks();
          }

          this.isPlaying = false;

          if (this._spineBack) {
            this._spineBack.setToSetupPose();

            this._spineBack.setBonesToSetupPose();

            this._spineBack.setSlotsToSetupPose();
          }

          if (this._spineFront) {
            this._spineFront.setToSetupPose();

            this._spineFront.setBonesToSetupPose();

            this._spineFront.setSlotsToSetupPose();
          }
        }

        resetData() {
          this._isCampDecided = false;
          this._targetId = '';
          this._campData = -1;
          this.isPlaying = false;
          this._currentTarget = null;
          this._defaultTarget = null;
          this.tokenID = ''; //--單一的識別碼

          this.slotMachineIndexInfo = null;
          this.groupID = [];
          this._wildState = (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
            error: Error()
          }), RPSWildState) : RPSWildState).WILD_3;
          this._previousWildState = (_crd && RPSWildState === void 0 ? (_reportPossibleCrUseOfRPSWildState({
            error: Error()
          }), RPSWildState) : RPSWildState).WILD_3;
          this._level = 0; //this.stopAni();

          this.forceToDoBeforeDestroy();
        }

        playAniWithCallBack(callBack, value) {}

        async playAniInPromiseForFirstRound(value) {
          //--this.playSpineBackAniWithPromise(value),這個控制拳頭與背景 
          await this.playSpineBackAniWithPromise(value);
        }

        playAniInPromise(value) {
          return new Promise(async (resolve, reject) => {
            const promises = [this.playSpineBackAniWithPromise(value), this.playSpineFrontAniWithPromise(value)];

            try {
              await Promise.all(promises);
              resolve();
            } catch (e) {
              reject(e);
            }
            /**
             * 0708再度取消
             * 針對0702新增需求第二輪的猜拳過後不管輸贏都需要播放connect的wild動畫(已經透過RPSWildSystem.checkWildIsCampDecidedAndPlay在停輪強制播出)
             * 這個判斷是針對既有流程再有雙wild又有中線的情況下會透過playAniGroupsWithPromise播放群組動畫此時要略過
             * playAniGroupsWithPromise是透過default的值去直接啟動,所有不會帶值進來.
             * 在第二輪的猜拳已經決定了陣營,_isCampDecided=true
             */

            /*
            if (!value && this._isCampDecided) {
                resolve();
            } else {
                const promises: Promise<void>[] = [
                    this.playSpineBackAniWithPromise(value),
                    this.playSpineFrontAniWithPromise(value)
                ];
                try {
                     await Promise.all(promises);
                    resolve();
                 } catch (e) {
                    reject(e);
                }
            }*/

          });
        }
        /**
         * 
         * 控制拳頭與背景
         */


        playSpineBackAniWithPromise(value) {
          let playData = this.checkSpinePlayData(value);
          return new Promise(resolve => {
            this._spineBack.setCompleteListener(null);

            this._resolveBack = () => {
              this._spineBack.setCompleteListener(null);

              resolve();
              this._resolveBack = undefined;
            }; //this._onBackSpineComplete = this._resolveBack;


            this._spineBack.timeScale = playData.timeScale ? playData.timeScale : 1; //--儘管是loop=true,但每次都會觸發..

            this._spineBack.setCompleteListener(this._resolveBack);

            let trackIndex = playData.trackIndex ? playData.trackIndex : 0;
            this.isPlaying = true;

            this._spineBack.setAnimation(trackIndex, playData.targetName, playData.loop);
          });
        }
        /**
         * 控制外框與前景
         */


        playSpineFrontAniWithPromise(value) {
          let playData = this.checkSpinePlayData(value);
          return new Promise(resolve => {
            this._spineFront.setCompleteListener(null);

            this._resolveFront = () => {
              this._spineFront.setCompleteListener(null);

              resolve();
              this._resolveFront = undefined;
            };

            this._spineFront.timeScale = playData.timeScale ? playData.timeScale : 1; //--儘管是loop=true,但每次都會觸發..

            this._spineFront.setCompleteListener(this._resolveFront);

            let trackIndex = playData.trackIndex ? playData.trackIndex : 0;
            this.isPlaying = true;

            this._spineFront.setAnimation(trackIndex, playData.targetName, playData.loop);
          });
        }

        getAniNameByWildRoundState(state, aniState) {
          let str = this._mapAni.get(state).get(aniState);

          return str;
        }

        clearTracks() {
          this._spineBack.clearTracks();

          this._spineFront.clearTracks();

          this._spineBack.setCompleteListener(null);

          this._spineFront.setCompleteListener(null);
        }

        cleanCurrentTrack() {
          let trackEntry = this._spineBack.getCurrent(0);

          if (trackEntry) {
            this._spineBack.clearTrack(trackEntry.trackIndex);
          }

          trackEntry = this._spineFront.getCurrent(0);

          if (trackEntry) {
            this._spineFront.clearTrack(trackEntry.trackIndex);
          }

          this._spineBack.setCompleteListener(null);

          this._spineFront.setCompleteListener(null);
        }

        checkSpinePlayData(targetName) {
          /**
           * 因為兩個spine的animation的名稱都取一樣,
           * 所以current/default不需要區分是哪個spine(back/front)使用的
           */
          for (let data of this._animationPlayStateList.clipsInfo) {
            if (data.targetName == targetName) {
              this._currentTarget = data;
              return data;
            }
          }

          return this._defaultTarget;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_afterPlayDoStop", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_clearTracks", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_animationPlayStateList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a5e1a5c582523ed10cd5aa859c87230789e7e1de.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, macro, Component, Animation, AnimationClip, ParticleExtension, AnimationPlayStateList, AniCtrlPropDef, FindComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, AnimationController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIAnimationControl(extras) {
    _reporterNs.report("IAnimationControl", "../Definitions/IAnimationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfParticleExtension(extras) {
    _reporterNs.report("ParticleExtension", "./ParticleExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationPlayInfo(extras) {
    _reporterNs.report("AnimationPlayInfo", "../Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationCtrlPlayData(extras) {
    _reporterNs.report("AnimationCtrlPlayData", "../Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotMachineIndexInfo(extras) {
    _reporterNs.report("SlotMachineIndexInfo", "../Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationPlayStateList(extras) {
    _reporterNs.report("AnimationPlayStateList", "./AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniCtrlPropDef(extras) {
    _reporterNs.report("AniCtrlPropDef", "./AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../../FindComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      macro = _cc.macro;
      Component = _cc.Component;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
    }, function (_unresolved_2) {
      ParticleExtension = _unresolved_2.ParticleExtension;
    }, function (_unresolved_3) {
      AnimationPlayStateList = _unresolved_3.AnimationPlayStateList;
      AniCtrlPropDef = _unresolved_3.AniCtrlPropDef;
    }, function (_unresolved_4) {
      FindComponent = _unresolved_4.FindComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c894523CmlH/p1nvpdLpSa8", "AnimationController", undefined);

      __checkObsolete__(['_decorator', 'Eventify', 'macro', 'Component', 'Node', 'Animation', 'AnimationClip', 'AnimationState', 'CCString', 'CCInteger']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AnimationController", AnimationController = (_dec = ccclass('AnimationController'), _dec2 = property({
        type: _crd && AnimationPlayStateList === void 0 ? (_reportPossibleCrUseOfAnimationPlayStateList({
          error: Error()
        }), AnimationPlayStateList) : AnimationPlayStateList,
        displayName: 'animationPlayStateList',
        visible: true,
        tooltip: '單一的識別碼'
      }), _dec3 = property({
        type: _crd && ParticleExtension === void 0 ? (_reportPossibleCrUseOfParticleExtension({
          error: Error()
        }), ParticleExtension) : ParticleExtension,
        displayName: 'particleSystem',
        visible: true,
        tooltip: '粒子系統'
      }), _dec4 = property({
        tooltip: 'prefab(放component的nodeId)的node id'
      }), _dec5 = property({
        tooltip: '動畫的FPS'
      }), _dec6 = property({
        tooltip: 'prefab單一識別碼'
      }), _dec(_class = (_class2 = class AnimationController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_animationPlayStateList", _descriptor, this);

          _initializerDefineProperty(this, "particleSystem", _descriptor2, this);

          _initializerDefineProperty(this, "targetNodeId", _descriptor3, this);

          //--prefab(放component的nodeId)的node id
          _initializerDefineProperty(this, "frameRate", _descriptor4, this);

          _initializerDefineProperty(this, "tokenID", _descriptor5, this);

          //--單一的識別碼
          this.slotMachineIndexInfo = void 0;
          this.groupID = void 0;
          //--會有同一個物件在不同的group裡面(第四軸重複的)
          this.isPlaying = void 0;
          this.keep = void 0;
          //--不刪除且持續留在場景中
          //-https://www.swiftcafe.io/post/cocos-animation
          //-https://blog.csdn.net/qq_45021180/article/details/104718341
          //--用來存放原始的動畫資料reset將會塞回去
          //private _originAniData:{[key:string]:AniCtrlPropDef};
          this._originAniData = void 0;
          this._ani = void 0;
          this._gotoAndStopTime = void 0;
          this._defaultTarget = null;
          this._currentTarget = null;
          this._dirtyFirstOnLoad = false;

          this.onAniComplete = () => {
            this.isPlaying = false;
          };

          this.checkAniStateTimeEveryFrame = () => {
            let aniState = this._ani.getState(this._currentTarget.targetName);

            if (!aniState) {
              console.error(`AnimationState "${this._currentTarget.targetName}" not found.`);
              this.unschedule(this.checkAniStateTimeEveryFrame);
              this.stopAni();
              return;
            } //--加入誤差值是因為可能會是浮點數


            if (aniState.time >= this._gotoAndStopTime - 0.001) {
              this.unschedule(this.checkAniStateTimeEveryFrame);
              this.stopAni();
            }
          };
        }

        //---用來判斷是否第一次onLoad
        onLoad() {
          if (this._dirtyFirstOnLoad) return;
          this._dirtyFirstOnLoad = true;
          this._ani = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
            error: Error()
          }), FindComponent) : FindComponent).findComponentInChildren(this.node, Animation);
          this._gotoAndStopTime = 0;
          this._originAniData = []; //-_originAniData存放原本美術設定的資料

          this.saveOriginAniData(this._originAniData); //--在prefab裡面,已經有default的clip了

          if (!this._animationPlayStateList) {
            this._animationPlayStateList = new (_crd && AnimationPlayStateList === void 0 ? (_reportPossibleCrUseOfAnimationPlayStateList({
              error: Error()
            }), AnimationPlayStateList) : AnimationPlayStateList)();
            this._animationPlayStateList.clipsInfo = [];
          }
          /**
           *
           * _animationPlayStateList.clipsInfo存放自定義的資料
           * 但在一開始會先寫過一次全部預設的資料到這裡面
           * 然後如果有填寫_animationPlayStateList資料的話,會覆蓋掉原本的資料
           */


          const defaultClipName = this._ani.defaultClip ? this._ani.defaultClip.name : null;

          for (const clip of this._ani.clips) {
            const state = this._ani.getState(clip.name); //如果有填寫_animationPlayStateList資料的話,會覆蓋掉原本animation的資料


            let clipData = this._animationPlayStateList.clipsInfo.find(data => data.targetName === clip.name);

            if (!clipData) {
              //如果沒有資料的話,會推進去_animationPlayStateList
              clipData = new (_crd && AniCtrlPropDef === void 0 ? (_reportPossibleCrUseOfAniCtrlPropDef({
                error: Error()
              }), AniCtrlPropDef) : AniCtrlPropDef)();
              clipData.targetName = clip.name;

              if (state) {
                clipData.delay = state.delay;
                clipData.repeatCount = state.repeatCount;
                clipData.speed = state.speed;
                clipData.wrapMode = state.wrapMode;
              } else {
                clipData.delay = 0.0; //--engine default

                clipData.repeatCount = 1; //--engine default

                clipData.speed = 1.0; //--engine default

                clipData.wrapMode = AnimationClip.WrapMode.Normal; //--engine default
              }

              this._animationPlayStateList.clipsInfo.push(clipData);

              if (defaultClipName === clip.name) {
                this._defaultTarget = clipData;
              }
            }
          } //--優先權以_animationPlayStateList <useDefaultState>為主    


          if (!this._animationPlayStateList.useDefaultState) {
            this._defaultTarget = this._animationPlayStateList.clipsInfo.find(data => data.useDefault);
          } //--如果沒有設定default的clip的話,就會找第一個clip


          if (!this._defaultTarget) {
            this._defaultTarget = this._animationPlayStateList.clipsInfo[0];
          }

          this._ani.stop();
        }

        init() {
          this.keep = false;
        }

        saveOriginAniData(aryTarget) {
          if (this._ani) {
            aryTarget.push(...this._ani.clips.map(clip => {
              const state = this._ani.getState(clip.name);

              const clipData = new (_crd && AniCtrlPropDef === void 0 ? (_reportPossibleCrUseOfAniCtrlPropDef({
                error: Error()
              }), AniCtrlPropDef) : AniCtrlPropDef)();
              clipData.targetName = clip.name; //--20250402要處理尚未播放時getState會抓不到

              if (state) {
                clipData.delay = state.delay;
                clipData.repeatCount = state.repeatCount;
                clipData.speed = state.speed;
                clipData.wrapMode = state.wrapMode;
              }

              return clipData;
            }));
          }
        }

        restoreOriginAniData() {
          if (this._ani) {
            for (let clip of this._ani.clips) {
              let state = this._ani.getState(clip.name);

              let clipData = this.getOgirinAniData(clip.name);

              if (this.isDefined(clipData == null ? void 0 : clipData.delay)) {
                state.delay = clipData.delay;
              }

              if (this.isDefined(clipData == null ? void 0 : clipData.repeatCount)) {
                state.repeatCount = clipData.repeatCount;
              }

              if (this.isDefined(clipData == null ? void 0 : clipData.speed)) {
                state.speed = clipData.speed;
              }

              if (this.isDefined(clipData == null ? void 0 : clipData.wrapMode)) {
                state.wrapMode = clipData.wrapMode;
              } //--將所有的clip的時間歸零,回到第一個frame的狀態


              state.time = 0;
              state.sample();
            }
          }
        }

        destroyAniController() {}

        setAniDataInfo(value) {
          let playData = this.getCustomizeAniCtrlDef(value.targetName);
          let targetData = value;

          if (!playData) {
            playData = new (_crd && AniCtrlPropDef === void 0 ? (_reportPossibleCrUseOfAniCtrlPropDef({
              error: Error()
            }), AniCtrlPropDef) : AniCtrlPropDef)();
            playData.targetName = value.targetName;

            this._animationPlayStateList.clipsInfo.push(playData);
          }

          if (this.isDefined(targetData == null ? void 0 : targetData.wrapMode)) {
            playData.wrapMode = targetData.wrapMode;
          }

          if (this.isDefined(targetData == null ? void 0 : targetData.speed)) {
            playData.speed = targetData.speed;
          }

          if (this.isDefined(targetData == null ? void 0 : targetData.repeatCount)) {
            playData.repeatCount = targetData.repeatCount;
          }

          if (this.isDefined(targetData == null ? void 0 : targetData.delay)) {
            playData.delay = targetData.delay;
          }

          this._defaultTarget = playData;
        }

        playAniWithAniCtrDef(value) {} //public playAni(value?: AnimationPlayInfo): void {


        playAni(value) {
          this.setAniStateForCustomizeClipData(value); //this._ani.once(Animation.EventType.FINISHED, this.onAniComplete);

          this._ani.once(Animation.EventType.FINISHED, () => {
            this.onAniComplete();
          });
          /*
          this.schedule(()=>{
              let aniState: AnimationState = this._ani.getState(value);
              let clip=this._ani.clips.find(clip => clip.name === value);
              console.log(
                  'check_aniState:\n' +
                  `  time: ${aniState.time}\n` +
                  `  current: ${aniState.current}\n` +
                  `  duration: ${aniState.duration}\n` +
                  `  speed: ${aniState.speed}\n` +
                  `  repeatCount: ${aniState.repeatCount}\n`+
                  `  ratio: ${aniState.ratio}\n`+
                  `  sample: ${clip.sample}`
                );
             
              //clip.
           },0.16,macro.REPEAT_FOREVER)
          */


          if (!value) {
            value = this._currentTarget.targetName;
          }

          this._ani.play(value);

          this.isPlaying = true;
        }

        stopAni() {
          if (this._ani) {
            this._ani.off(Animation.EventType.FINISHED);

            this._ani.off(Animation.EventType.LASTFRAME);

            this._ani.stop();
          }

          this._gotoAndStopTime = 0;
          this._currentTarget = null;
          this.isPlaying = false;

          if (this.particleSystem) {
            this.particleSystem.stopParticle();
          } //--call back function要在處理

        } //--20250722-待補


        stopPromiseAni() {}

        speedUpAni(value) {}

        slowDownAni(value) {}
        /**
         * 
         * @param value clip name
         * 沒有輸入的話將會針對整個動畫(全部的clip)進行暫停
         */


        pauseAni(value) {
          if (value) {
            let aniState = this._ani.getState(value);

            if (aniState) {
              aniState.pause();
            }
          } else {
            this._ani.pause();
          }
        }
        /**
         * 
         * @param value clip name
         * 沒有輸入的話將會針對整個動畫(全部的clip)進行恢復
         */


        resumeAni(value) {
          if (value) {
            let aniState = this._ani.getState(value);

            if (aniState) {
              aniState.resume();
            }
          } else {
            this._ani.resume();
          }
        }

        gotoAndPlayByFrame(value, frame) {
          let aniState = this._ani.getState(value);

          let timeByFrame = this.getTimeByFrame(value, frame);

          if (timeByFrame > 0 && aniState) {
            aniState.time = timeByFrame;

            this._ani.play(value);
          } else {
            console.error(`AnimationClip "${value}" not found `);
          }
        }

        gotoAndPlayByTime(value, time) {
          let aniState = this._ani.getState(value);

          if (aniState) {
            aniState.time = time;

            this._ani.play(value);
          }
        }

        gotoAndStopByTime(value, time) {
          let aniState = this._ani.getState(value);

          if (aniState) {
            aniState.time = time;
            aniState.pause();
          }
        }

        gotoAndStopByFrame(value, frame) {
          let aniState = this._ani.getState(value);

          let timeByFrame = this.getTimeByFrame(value, frame);

          if (timeByFrame > 0 && aniState) {
            aniState.time = timeByFrame;
            aniState.pause();
          } else {
            console.error(`AnimationClip "${value}" not found `);
          }
        } //--播放到那個time然後停止


        playToTimeAndStop(value, time) {
          this._gotoAndStopTime = time;
          this._currentTarget = this.getCustomizeAniCtrlDef(value);
          this.schedule(this.checkAniStateTimeEveryFrame, 1 / 60, macro.REPEAT_FOREVER);
          this.isPlaying = true;

          this._ani.play(value);
        } //--播放到那個Frame然後停止


        playToFrameAndStop(value, frame) {
          let timeByFrame = this.getTimeByFrame(value, frame);

          if (timeByFrame > 0) {
            this._gotoAndStopTime = timeByFrame;
            this._currentTarget = this.getCustomizeAniCtrlDef(value);
            this.schedule(this.checkAniStateTimeEveryFrame, 1 / 60, macro.REPEAT_FOREVER);
            this.isPlaying = true;

            this._ani.play(value);
          } else {
            console.error(`AnimationClip "${value}" not found `);
          }
        }

        addEventToAniByFrame(value, frame) {}

        addEventToAniByTime(value, time) {}

        reversePlay(value, speed = -1) {
          let aniState = this._ani.getState(value);

          if (aniState) {
            aniState.speed = speed;

            this._ani.play(value);
          }
        }

        beforeDestroy() {}

        resetData() {
          this.tokenID = ''; //--單一的識別碼

          this.slotMachineIndexInfo = null;
          this.groupID = []; //--會有同一個物件在不同的group裡面(第四軸重複的)

          /*
          if (this.isPlaying) {
              this.stopAni();
          }*/

          this.stopAni();
          this.restoreOriginAniData();
        }

        playAniWithCallBack(callBack, value) {
          this._ani.once(Animation.EventType.FINISHED, () => {
            callBack == null || callBack();
            this.onAniComplete();
          });

          this.setAniStateForCustomizeClipData(value);

          if (!value) {
            value = this._currentTarget.targetName;
          }

          this._ani.play(value);

          this.isPlaying = true;
        }

        playAniInPromise(value) {
          var _this$_currentTarget;

          this.setAniStateForCustomizeClipData(value);
          value = value || ((_this$_currentTarget = this._currentTarget) == null ? void 0 : _this$_currentTarget.targetName);
          return new Promise((resolve, reject) => {
            let aniState = this._ani.getState(value);

            if (!aniState) {
              console.warn('No animation state found:', value);
              reject();
              return;
            }

            const addEventListener = (eventType, callback) => {
              //--執行完後就會被移除,不需要做hasEventListener 
              this._ani.once(eventType, callback);
            };

            if (aniState.wrapMode === AnimationClip.WrapMode.Normal) {
              addEventListener(Animation.EventType.FINISHED, () => {
                this.isPlaying = false;
                resolve();
              });
            } else if (aniState.wrapMode === AnimationClip.WrapMode.Loop) {
              addEventListener(Animation.EventType.LASTFRAME, () => {
                this.unscheduleAllCallbacks();
                resolve();
              });
            }

            this.isPlaying = true;

            this._ani.play(value);
          });
        } //---這裡可以把它寫在一個basic class裡面 然後在繼承上來


        getCustomizeAniCtrlDef(value) {
          return this._animationPlayStateList.clipsInfo.find(clip => clip.targetName === value);
        }

        getTimeByFrame(value, frame) {
          let clip = this._ani.clips.find(clip => clip.name === value);

          if (clip) {
            let durationInSeconds = clip.duration; //-totaltime

            let totalFrame = Math.floor(durationInSeconds * clip.sample); //--確保根據總幀數和動畫總時長正確計算出目標時間(原本沒有* durationInSeconds)

            let triggerTime = frame / totalFrame * durationInSeconds;
            /**
             * 原本如果知道fps的話可以直接這樣算
             *  const time = frameNumber / this.frameRate;
             */

            return triggerTime;
          } else {
            return -1;
          }
        }

        isDefined(value) {
          return value !== undefined && value !== null;
        }

        setAniStateForCustomizeClipData(value) {
          let clipData = this.checkPlayData(value);

          if (clipData) {
            let aniState = this._ani.getState(value);

            if (aniState) {
              var _clipData$wrapMode, _clipData$speed, _clipData$repeatCount, _clipData$delay;

              aniState.wrapMode = (_clipData$wrapMode = clipData.wrapMode) != null ? _clipData$wrapMode : aniState.wrapMode;
              aniState.speed = (_clipData$speed = clipData.speed) != null ? _clipData$speed : aniState.speed;
              aniState.repeatCount = (_clipData$repeatCount = clipData.repeatCount) != null ? _clipData$repeatCount : aniState.repeatCount;
              aniState.delay = (_clipData$delay = clipData.delay) != null ? _clipData$delay : aniState.delay;
            }
          }
        }

        checkPlayData(targetName) {
          const foundData = this._animationPlayStateList.clipsInfo.find(data => data.targetName === targetName);

          if (foundData) {
            this._currentTarget = foundData;
            return foundData;
          }

          this._currentTarget = this._defaultTarget;
          return this._defaultTarget;
        }

        getOgirinAniData(value) {
          return this._originAniData.find(clip => clip.targetName === value);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_animationPlayStateList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "particleSystem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "targetNodeId", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "frameRate", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 60;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tokenID", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ae82418d1fbfd8f55465f5e5e132003484142e43.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EventTarget, SpineSequenceList, SEQUENCE_EVENTS, CleanTrackType, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, SpineSequencePlay;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAniCtrlPropDef(extras) {
    _reporterNs.report("AniCtrlPropDef", "./AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineSequenceList(extras) {
    _reporterNs.report("SpineSequenceList", "./AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineSequenceItem(extras) {
    _reporterNs.report("SpineSequenceItem", "./AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSEQUENCE_EVENTS(extras) {
    _reporterNs.report("SEQUENCE_EVENTS", "./Events", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCleanTrackType(extras) {
    _reporterNs.report("CleanTrackType", "../../Definitions/AnimationDataOptions", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      EventTarget = _cc.EventTarget;
    }, function (_unresolved_2) {
      SpineSequenceList = _unresolved_2.SpineSequenceList;
    }, function (_unresolved_3) {
      SEQUENCE_EVENTS = _unresolved_3.SEQUENCE_EVENTS;
    }, function (_unresolved_4) {
      CleanTrackType = _unresolved_4.CleanTrackType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf74dz7EjxAB78t/xjjrZiV", "SpineSequencePlay", undefined);

      __checkObsolete__(['_decorator', 'CCString', 'Component', 'EventTarget', 'macro', 'Node', 'sp', 'ISchedulable']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpineSequencePlay", SpineSequencePlay = (_dec = ccclass('SpineSequencePlay'), _dec2 = property({
        type: _crd && SpineSequenceList === void 0 ? (_reportPossibleCrUseOfSpineSequenceList({
          error: Error()
        }), SpineSequenceList) : SpineSequenceList,
        visible: true,
        displayName: 'SpineSequenceData',
        tooltip: 'Spine動畫序列清單'
      }), _dec(_class = (_class2 = class SpineSequencePlay extends EventTarget {
        set sp(sp) {
          this._sp = sp;
        }

        get sp() {
          return this._sp;
        }
        /**
         * 支援整包撥放列表循環播放功能
         * <播完列表1>依序往下找到<列表2>依序開始循環播放
         * 以下兩個變數for整包撥放列表循環播放功能
         */


        set clearTracksSetting(value) {
          this._clearTracksSetting = value;
        }

        constructor() {
          super();
          //--要用Schedulable就自己在繼承使用
          this.id = void 0;
          this.uuid = void 0;

          //--播放清單
          _initializerDefineProperty(this, "_sequenceData", _descriptor, this);

          this._sp = null;
          this._currentAllSequenceIndex = 0;
          this._currentAllSequenceLength = 0;
          this._currentSequenceIndex = 0;
          //--針對抽取出來的動畫序列播放清單用的
          this._currentLoopCount = 0;
          this._currentSequenceData = void 0;
          //--當前播放的動畫清單
          this._callBack = void 0;
          this._clearTracksSetting = void 0;
          this._onSpineCompleteHandler = null;
          this._onSpineEventHandler = null;
          this._callBack = null;
        }

        init() {
          if (this._sequenceData) {
            this._currentAllSequenceLength = this._sequenceData.sequenceList.length;
          }
        }

        resetDataBeforeDestroy() {
          if (this._sp) {
            this._sp.setCompleteListener(null);

            this._sp.setEventListener(null);

            this._onSpineCompleteHandler = null;
            this._onSpineEventHandler = null;
            this._callBack = null;

            if (this._clearTracksSetting == (_crd && CleanTrackType === void 0 ? (_reportPossibleCrUseOfCleanTrackType({
              error: Error()
            }), CleanTrackType) : CleanTrackType).CURRENT_TRACK) {
              const trackEntry = this._sp.getCurrent(0);

              if (trackEntry) {
                this._sp.clearTrack(trackEntry.trackIndex);
              }
            } else {
              this._sp.clearTracks();
            }

            this._currentAllSequenceIndex = 0;
            this._currentSequenceIndex = 0;
            this._currentLoopCount = 0;
          }
        } //--相同ID的不會重複加入


        setSequenceData(sequenceId, loopSequence, sequenceData) {
          if (!this._sequenceData.sequenceList || !this._sequenceData.sequenceList.some(item => item.SequenceId === sequenceId)) {
            this._sequenceData.sequenceList.push({
              SequenceId: sequenceId,
              loopSequence: loopSequence,
              sequence: sequenceData
            });

            this._currentAllSequenceLength = this._sequenceData.sequenceList.length;
          }
        }

        findSequenceList(sequenceName) {
          for (let i = 0; i < this._sequenceData.sequenceList.length; i++) {
            if (this._sequenceData.sequenceList[i].SequenceId === sequenceName) {
              this._currentAllSequenceIndex = i;
              return this._sequenceData.sequenceList[i];
            }
          }

          return null;
        }

        playSequence(sequenceName) {
          //-SpineSequenceItem
          if (sequenceName) {
            this._currentSequenceData = this.findSequenceList(sequenceName);
            this._currentSequenceIndex = 0;
            this._currentLoopCount = 0;

            this._sp.setEventListener(null);
          }

          if (!this._currentSequenceData) {
            return;
          }

          const currentSequenceData = this._currentSequenceData.sequence;
          let currentItem;

          if (!currentSequenceData || this._currentSequenceIndex >= currentSequenceData.length) {
            //--播完了--送事件出去
            if (this._sequenceData.loopAllSequence) {
              this.playNextSequence(); //--換下一筆播放清單
            } else {
              if (this._currentSequenceData.loopSequence && this._currentSequenceData.sequence.length > 0) {
                this._currentSequenceIndex = 0;
                currentItem = currentSequenceData[this._currentSequenceIndex]; //--在這個播放表單內重播

                this.playSpineAnimation(currentItem);
              } else {
                //--沒有在該表單內循環的需求--送事件出去
                if (this._callBack) {
                  this._callBack(this._sp);

                  this._callBack = null;
                }

                this.emit((_crd && SEQUENCE_EVENTS === void 0 ? (_reportPossibleCrUseOfSEQUENCE_EVENTS({
                  error: Error()
                }), SEQUENCE_EVENTS) : SEQUENCE_EVENTS).COMPLETE, {
                  eventType: (_crd && SEQUENCE_EVENTS === void 0 ? (_reportPossibleCrUseOfSEQUENCE_EVENTS({
                    error: Error()
                  }), SEQUENCE_EVENTS) : SEQUENCE_EVENTS).COMPLETE,
                  eventData: null
                });
              }
            }
          } else {
            currentItem = currentSequenceData[this._currentSequenceIndex];
            this.playSpineAnimation(currentItem);
          }
        }

        playNextSequence() {
          this._currentAllSequenceIndex++;

          if (this._currentAllSequenceIndex >= this._currentAllSequenceLength) {
            this._currentAllSequenceIndex = 0;
          }

          this._currentSequenceData = this._sequenceData.sequenceList[this._currentAllSequenceIndex];
          this._currentSequenceIndex = 0;
          this._currentLoopCount = 0;
          this.playSequence();
        }

        playSpineAnimation(item) {
          let trackEntry = this._sp.setAnimation(0, item.targetName, item.loop);

          this._currentLoopCount = 0; //--清除掉舊的事件監聽器

          this._sp.setCompleteListener(null);

          this._sp.setEventListener(null);

          if (item.eventFrameType) {
            this._onSpineEventHandler = (trackEntry, event) => {
              //@ts-ignore
              if (event.data.name === item.eventFrameType) {
                //--發事件do somethings
                //@ts-ignore
                this.emit((_crd && SEQUENCE_EVENTS === void 0 ? (_reportPossibleCrUseOfSEQUENCE_EVENTS({
                  error: Error()
                }), SEQUENCE_EVENTS) : SEQUENCE_EVENTS).FRAME_EVENT, {
                  eventType: (_crd && SEQUENCE_EVENTS === void 0 ? (_reportPossibleCrUseOfSEQUENCE_EVENTS({
                    error: Error()
                  }), SEQUENCE_EVENTS) : SEQUENCE_EVENTS).FRAME_EVENT,
                  eventData: event.data.name
                });
              }
            };

            this._sp.setEventListener(this._onSpineEventHandler);
          }

          this._onSpineCompleteHandler = trackEntry => {
            if (trackEntry.animation.name === item.targetName) {
              this._currentLoopCount++;

              if (this._currentLoopCount >= item.repeatCount) {
                this._currentSequenceIndex++;
                this.playSequence();
              }
            }
          };

          this._sp.setCompleteListener(this._onSpineCompleteHandler);
        }

        playSequenceWithCallBack(sequenceName, callBack) {
          this._callBack = callBack;
          this.playSequence(sequenceName);
        } // 動態切換播放序列


        changeSequence(sequenceName) {
          if (this._sequenceData[sequenceName]) {
            this.playSequence(sequenceName);
          } else {
            console.warn(`Sequence ${sequenceName} does not exist.`);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_sequenceData", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7964d0fc91446d30f6ce6bc7797212b7bb061083.js.map
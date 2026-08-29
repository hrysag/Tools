System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, Component, EventTarget, BaseEvent, SoundsManager, log, AnimationSequencePlayer, _crd, AnimationStatus;

  function _reportPossibleCrUseOfBaseEvent(extras) {
    _reporterNs.report("BaseEvent", "../../../framework/game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundsManager(extras) {
    _reporterNs.report("SoundsManager", "../../../framework/logic/audio/SoundsManager", _context.meta, extras);
  }

  _export("AnimationSequencePlayer", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      Component = _cc.Component;
      EventTarget = _cc.EventTarget;
      log = _cc.log;
    }, function (_unresolved_2) {
      BaseEvent = _unresolved_2.BaseEvent;
    }, function (_unresolved_3) {
      SoundsManager = _unresolved_3.SoundsManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "be99duA7vpDNoPO+ynrK7Zd", "AnimationSequencePlayer", undefined);
      /**
       * Created by EricHuang on 2023/9/13.
       * 控制有多組動畫的魚種播放腳本
       */


      __checkObsolete__(['Animation', 'AnimationClip', 'Component', 'EventTarget', 'ParticleSystem']);

      __checkObsolete__(['log']);

      _export("AnimationStatus", AnimationStatus = /*#__PURE__*/function (AnimationStatus) {
        AnimationStatus["start"] = "start";
        AnimationStatus["sequence"] = "sequence";
        AnimationStatus["standby"] = "standby";
        AnimationStatus["end"] = "end";
        AnimationStatus["effect"] = "effect";
        return AnimationStatus;
      }({}));

      _export("AnimationSequencePlayer", AnimationSequencePlayer = class AnimationSequencePlayer extends Component {
        get isPlay() {
          return this.isPlay;
        }

        set otherData(value) {
          this._otherData = value;
          this._otherData.activeNode.active = true;
        }

        set beforEndTime(value) {
          this._beforEndTime = value;
        }

        set totalScriptTime(value) {
          this._totalScriptTime = value;
        }

        set sequenceData(value) {
          this._sequenceData = value;

          for (var i in this._sequenceData) {
            for (var j of this._sequenceData[i].sequence) {
              if (j.sendEvtFrame) {
                var durationInSeconds = j.clip.duration; //-totaltime

                var totalFrame = Math.floor(durationInSeconds * j.clip.frameRate);
                var triggerTime = j.sendEvtFrame / totalFrame;
                j.clip.events = [{
                  frame: triggerTime,
                  func: 'onAniTriggerEvt',
                  params: [j.clip.name]
                }]; //log('clip',j.clip,'check_totalFrame',totalFrame,'triggerTime',triggerTime);
                //--幹你媽超爛的,要再重新指回去

                this._animation.clips = this._animation.clips;
              }
            }
          }
        }

        constructor() {
          super();
          /*
          this.sequenceData={
              start:{index:-1,sequence:[]},
              sequence:{index:-1,sequence:[]},
              standby:{index:-1,sequence:[]},
              end:{index:-1,sequence:[]},
              effect:{index:-1,sequence:[]}
          };*/
          //---這個是限定時間內輪播的系統----

          this._animation = void 0;
          this.eventTarget = void 0;

          /**
           * index-->目前播放到哪了(指的是父類群下轄的序列組start,sequence,standby,end)
           */
          this._sequenceData = void 0;
          this._status = void 0;
          //--目前播放序列到哪的狀態  
          this._countsingleIntervalTime = void 0;
          //--個別的序列當下的持續時間
          this._countContinueTime = void 0;
          //--目前經過的時間
          this._lastTimeForSequence = void 0;
          this._interval = void 0;
          //--timer
          this._beforEndTime = void 0;
          //--結束前幾秒(意思是整個total總時間的前幾秒)
          this._loopWaitTime = void 0;
          //--再進行下個區間播放時,需要等待的時間
          this._totalScriptTime = void 0;
          //---整個表演需要的總時間
          this._isPlay = void 0;
          this._nowLoopCount = void 0;
          this._otherData = void 0;
          this._particleIsPlay = void 0;

          //-https://docs.cocos.com/creator/manual/zh/animation/animation-component.html#%E5%B8%A7%E4%BA%8B%E4%BB%B6

          /**
           * 目前的frame event只支援String、Number、Boolean這三種的回傳值
           * 要把他加到乘載animation component的node上面
           */
          this.onAniTriggerEvt = value => {
            log('onAniTriggerEvt', value);

            if (value == 'roar') {
              if (!this._particleIsPlay) {
                //SoundsManager.getInstance().play('sounds/dragonflame');
                //this._otherData.activeNode.active=true;
                (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
                  error: Error()
                }), SoundsManager) : SoundsManager).getInstance().play('sounds/dragonflame');
                this._particleIsPlay = true;
                this._otherData.particle['particleCoin'].loop = true;
                this._otherData.particle['particleIngot'].loop = true;

                this._otherData.particle['particleCoin'].play();

                this._otherData.particle['particleIngot'].play();
              }

              log('check_particle', this._otherData);
            } else if (value == 'attack01' || value == 'attack02') {
              //SoundsManager.getInstance().play('sounds/dragonattack');
              (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
                error: Error()
              }), SoundsManager) : SoundsManager).getInstance().play('sounds/dragonattack');
              this.eventTarget.emit((_crd && BaseEvent === void 0 ? (_reportPossibleCrUseOfBaseEvent({
                error: Error()
              }), BaseEvent) : BaseEvent).PLAY_ANI, {
                type: (_crd && BaseEvent === void 0 ? (_reportPossibleCrUseOfBaseEvent({
                  error: Error()
                }), BaseEvent) : BaseEvent).PLAY_ANI,
                sendObj: value
              });
            }
          };

          this.onLoopLast = (type, state) => {
            log('onLoopLast', type, state);
            this._nowLoopCount--;

            if (this._nowLoopCount <= 0) {
              //--待機
              this._isPlay = false;

              if (state.clip.name == 'idle' && this._status == AnimationStatus.standby) {
                this._status = AnimationStatus.sequence;
                this.checkandPlay();
              } else if (state.clip.name == 'roar' && this._status == AnimationStatus.sequence) {
                //--做效果結束
                if (this._particleIsPlay) {
                  this._particleIsPlay = false; //(<ParticleSystem>this._otherData.particle['particleCoin']).stop();
                  //(<ParticleSystem>this._otherData.particle['particleIngot']).stop();
                  //(<ParticleSystem>this._otherData.particle['particleCoin']).clear();
                  //(<ParticleSystem>this._otherData.particle['particleIngot']).clear();

                  this._otherData.particle['particleCoin'].stopEmitting();

                  this._otherData.particle['particleIngot'].stopEmitting(); //this._otherData.activeNode.active=false;

                }

                this._status = AnimationStatus.sequence;
                this.checkandPlay();
              }
            }
          };

          this.onComplete = (type, state) => {
            log('check_aniComplete', type, state);
            this._isPlay = false;

            if (this._interval && this._totalScriptTime > 0) {
              //--使用時間為單位來播放腳本
              if (this.totalScriptTime - this._countContinueTime <= this.beforEndTime) {
                this._status = AnimationStatus.end;
                window.clearInterval(this._interval);
                this.checkandPlay();
              }
            }

            if (this._status == AnimationStatus.start) {
              if (this._sequenceData[this._status].index == this._sequenceData[this._status].sequence.length - 1) {
                //this._status=AnimationStatus.standby;
                this._status = AnimationStatus.sequence;
              }

              this._countsingleIntervalTime = 0;
              this.checkandPlay();
            } else if (this._status == AnimationStatus.sequence) {
              //this._status=AnimationStatus.standby;
              this._status = AnimationStatus.sequence;
              this._countsingleIntervalTime = 0;
              this.checkandPlay();
            } else if (this._status == AnimationStatus.standby) {
              if (this._interval && this._totalScriptTime > 0) {
                if (this._countsingleIntervalTime < this._loopWaitTime) {
                  this.checkandPlay();
                } else {
                  this._status = AnimationStatus.sequence;
                  this._countsingleIntervalTime = 0;
                  this.checkandPlay();
                }
              }
            }
          };

          this.timeInterval = () => {
            var timeDelta = (Date.now() - this._lastTimeForSequence) * 0.001;
            this._countsingleIntervalTime += timeDelta;
            this._countContinueTime += timeDelta;
            this._lastTimeForSequence = Date.now();
          };

          this._beforEndTime = 0;
          this._loopWaitTime = 0;
          this._totalScriptTime = 0;
          this._countsingleIntervalTime = 0;
          this._countContinueTime = 0;
          this._lastTimeForSequence = 0;
          this._interval = null; //---這個是限定時間內輪播的系統----

          this._nowLoopCount = 0;
          this._isPlay = false;
          this._otherData = null;
          this._particleIsPlay = false;
          this.eventTarget = new EventTarget();
        }

        setAnimation(value) {
          this._animation = value;

          this._animation.on(Animation.EventType.FINISHED, this.onComplete);

          this._animation.on(Animation.EventType.LASTFRAME, this.onLoopLast);
        }

        play(status) {
          if (!status) {
            this._status = AnimationStatus.start;
          } else {
            this._status = status;
          } //--採用以時間為單位來進行腳本播放
          //--在_totalScriptTime<=0的情況採用腳本count數來播放


          if (this._totalScriptTime > 0 && !this._interval) {
            this._interval = window.setInterval(this.timeInterval, 16);
          }

          if (this._status == AnimationStatus.end) {
            if (this._particleIsPlay) {
              this._particleIsPlay = false; //(<ParticleSystem>this._otherData.particle['particleCoin']).stop();
              //(<ParticleSystem>this._otherData.particle['particleIngot']).stop();
              //(<ParticleSystem>this._otherData.particle['particleCoin']).clear();
              //(<ParticleSystem>this._otherData.particle['particleIngot']).clear();

              this._otherData.particle['particleCoin'].stopEmitting();

              this._otherData.particle['particleIngot'].stopEmitting(); //this._otherData.activeNode.active=false;

            }
          }

          this.checkandPlay();
        }

        stop() {
          this._animation.stop();

          this._isPlay = false;
        } //--移除前銷毀


        destory() {
          this._animation.off(Animation.EventType.FINISHED, this.onComplete);

          this._animation.off(Animation.EventType.LASTFRAME, this.onLoopLast);

          if (this._interval) {
            window.clearInterval(this._interval);
            this._interval = null;
          }

          if (this._otherData) {
            log('removeBossParticle');

            this._otherData.particle['particleCoin'].stop();

            this._otherData.particle['particleIngot'].stop();

            this._otherData.particle['particleCoin'].clear();

            this._otherData.particle['particleIngot'].clear();

            this._otherData.particle['particleCoin'].stopEmitting();

            this._otherData.particle['particleIngot'].stopEmitting(); //this._otherData.activeNode.active=false;

          }

          this._particleIsPlay = false;
          this._sequenceData = null;
        }

        checkandPlay() {
          this._sequenceData[this._status].index += 1;
          var index = this._sequenceData[this._status].index;

          if (this._sequenceData[this._status].index == this._sequenceData[this._status].sequence.length) {
            index = this._sequenceData[this._status].index = 0;
          }

          if (this._sequenceData[this._status].sequence[index].loop == -1) {
            //--LOOP
            this._nowLoopCount = this._sequenceData[this._status].sequence[index].count;
          }

          this._isPlay = true;
          var playId = this._sequenceData[this._status].sequence[index].clip.name;
          /*
          if(playId=='attack01' || playId=='attack02' || playId=='attack03' || playId=='attack04')
          {
              //--要塞事件..這樣太慢了20231215
              //SoundsManager.getInstance().play('sounds/dragonattack');
          
          }else if(playId=='roar')
          {
              SoundsManager.getInstance().play('sounds/dragonflame');
          }*/
          //this._animation.defaultClip=this._sequenceData[this._status].sequence[index].clip;
          //log('check_checkandPlay',this._status,index,this._sequenceData[this._status].sequence[index].clip.name);
          //this._animation.play(this._sequenceData[this._status].sequence[index].clip.name);

          this._animation.play(playId);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=13116296cd2e7aa71e202808642ff0f9eca15994.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Animation, AnimationClip, tween, Color, CurveRange, ActionEvent, getDuration, easeFunctions, NodeExt, StringExt, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _crd, ccclass, property, ActionEventPlayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfActionEvent(extras) {
    _reporterNs.report("ActionEvent", "./ActionEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetDuration(extras) {
    _reporterNs.report("getDuration", "./ActionEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeaseFunctions(extras) {
    _reporterNs.report("easeFunctions", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeExt(extras) {
    _reporterNs.report("NodeExt", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonExtension(extras) {
    _reporterNs.report("SkeletonExtension", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStringExt(extras) {
    _reporterNs.report("StringExt", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
      tween = _cc.tween;
      Color = _cc.Color;
      CurveRange = _cc.CurveRange;
    }, function (_unresolved_2) {
      ActionEvent = _unresolved_2.ActionEvent;
      getDuration = _unresolved_2.getDuration;
    }, function (_unresolved_3) {
      easeFunctions = _unresolved_3.easeFunctions;
      NodeExt = _unresolved_3.NodeExt;
      StringExt = _unresolved_3.StringExt;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "008fbsWButE3a4sR11hFYO8", "ActionEventPlayer", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Animation', 'AnimationClip', 'AnimationState', 'ParticleSystem', 'sp', 'SkeletalAnimation', 'UIOpacity', 'tween', 'CCBoolean', 'Color', 'CurveRange']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ActionEventPlayer", ActionEventPlayer = (_dec = ccclass('ActionEventPlayer'), _dec2 = property({
        tooltip: 'log出debug資訊提供檢視'
      }), _dec3 = property({
        tooltip: 'start時自動初始化'
      }), _dec4 = property({
        tooltip: '是否start時自動撥放'
      }), _dec5 = property({
        tooltip: '是否為動畫專用AEP，若勾選擇，則不使用EventList製造新的動畫，並須自行放入要撥放的Clip & 掛上Animation'
      }), _dec6 = property({
        type: [_crd && ActionEvent === void 0 ? (_reportPossibleCrUseOfActionEvent({
          error: Error()
        }), ActionEvent) : ActionEvent],

        visible() {
          return !this.IsForAnimationEvent;
        },

        tooltip: '準備要播放的事件類型'
      }), _dec7 = property({
        type: AnimationClip,

        visible() {
          return this.IsForAnimationEvent;
        },

        tooltip: '準備要使用此AEP的Clip'
      }), _dec(_class = (_class2 = (_class3 = class ActionEventPlayer extends Component {
        constructor() {
          super(...arguments);

          //debug資訊
          _initializerDefineProperty(this, "debug", _descriptor, this);

          //是否自動初始化在start開始時
          _initializerDefineProperty(this, "AutoInit", _descriptor2, this);

          //是否start時自動撥放
          _initializerDefineProperty(this, "AutoStart", _descriptor3, this);

          _initializerDefineProperty(this, "IsForAnimationEvent", _descriptor4, this);

          //準備要播放的事件
          _initializerDefineProperty(this, "EventList", _descriptor5, this);

          _initializerDefineProperty(this, "Clip", _descriptor6, this);

          //animation play callbacks
          this.OnAnimEvent = null;
          this.animation = null;
          this.curClip = "";
          this.isInitialized = false;
        }

        Init() {
          if (this.isInitialized) {
            return;
          }

          this.animation = this.getComponent(Animation);

          if (!this.animation) {
            this.animation = this.node.addComponent(Animation);
          }

          this.animation.on(Animation.EventType.PLAY, this.onPlay, this);
          this.animation.on(Animation.EventType.STOP, this.onStop, this);
          this.animation.on(Animation.EventType.FINISHED, this.onFinished, this);
          this.animation.on(Animation.EventType.LASTFRAME, this.onLastFrame, this);

          if (!this.IsForAnimationEvent) {
            this.addClip();
          }

          this.isInitialized = true;
        }

        addClip() {
          var clip = this.genEventClip(ActionEventPlayer.EVENT_CLIP_NAME, this.EventList);
          this.animation.addClip(clip);
          this.Clip = clip; //refresh data after addclip

          this.updateClipData();
        }

        genEventClip(clipName, eventList) {
          //new clip
          var clip = new AnimationClip(); //<<< duration must be assigned first, or you can't add any event >>>

          clip.duration = (_crd && getDuration === void 0 ? (_reportPossibleCrUseOfgetDuration({
            error: Error()
          }), getDuration) : getDuration)(this.EventList); //clip name for playing

          clip.name = clipName; //assign events

          clip.events = eventList;
          return clip;
        }

        GetAnimState() {
          return this.animation.getState(this.curClip);
        }

        onDestroy() {
          if (!this.animation) {
            return;
          }

          this.animation.off(Animation.EventType.PLAY, this.onPlay, this);
          this.animation.off(Animation.EventType.STOP, this.onStop, this);
          this.animation.off(Animation.EventType.FINISHED, this.onFinished, this);
          this.animation.off(Animation.EventType.LASTFRAME, this.onLastFrame, this);
        }

        start() {
          if (this.AutoInit === true) {
            this.Init();
          }

          if (this.AutoStart === true) {
            this.play();
          }
        }

        updateClip() {
          if (!this.IsForAnimationEvent) {
            if (this.animation.clips.length > 0) {
              var animClip = this.animation.clips[0];
              animClip.duration = (_crd && getDuration === void 0 ? (_reportPossibleCrUseOfgetDuration({
                error: Error()
              }), getDuration) : getDuration)(this.EventList);
              animClip.events = this.EventList;
              this.Clip = animClip;
              this.updateClipData();
            }
          }
        } // for art ctrl


        play() {
          var clipName = this.Clip ? this.Clip.name : this.animation.defaultClip.name;
          this.animation.play(clipName);
          this.curClip = clipName;
          this.GetAnimState().wrapMode = AnimationClip.WrapMode.Normal;
        } // for art ctrl


        playLoop() {
          var clipName = this.Clip ? this.Clip.name : this.animation.defaultClip.name;
          this.animation.play(clipName);
          this.curClip = clipName;
          this.GetAnimState().wrapMode = AnimationClip.WrapMode.Loop;
        }

        playClip(clipName) {
          this.animation.play(clipName);
          this.curClip = clipName;
          this.GetAnimState().wrapMode = AnimationClip.WrapMode.Normal;
        }

        playClipWithButton(ev, clipName) {
          this.animation.play(clipName);
          this.curClip = clipName;
          this.GetAnimState().wrapMode = AnimationClip.WrapMode.Normal; // 如果clip內已設定為loop，仍會撥放loop，不確定有無作用
        }

        playClipLoop(ev, clipName) {
          this.animation.play(clipName);
          this.curClip = clipName;
          this.GetAnimState().wrapMode = AnimationClip.WrapMode.Loop;
        }

        PLAY_ANIM_CTRL(clipName) {
          this.curClip = clipName;
          console.log("PLAY_ANIM_CTRL(" + clipName + "), state = " + this.animation.getState(clipName) + ", ratio = " + this.animation.getState(clipName).ratio);
          this.animation.getState(clipName).play();
        }

        stop() {
          this.animation.stop();
        }

        pause() {
          this.animation.pause();
        }

        SPINE_PLAY(nodeNameStr, clipName, loopStr, trackStr) {
          var loop = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToBoolean(loopStr);
          var [track_ok, track] = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(trackStr);

          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("SPINE_PLAY(" + nodeNameStr + "," + clipName + "," + loop + "," + track + ")"));

            if (!track_ok) {
              console.log("track type error : " + trackStr);
              return;
            }
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var spineComps = this.getComponetsByNodeName(nodeNames[n], 'sp.Skeleton');

            for (var i = 0; i < spineComps.length; i++) {
              var spineComp = spineComps[i]; //spineComp.clearAnimations();

              spineComp.setAnimation(track, clipName, loop);
            }
          }
        }

        SPINE_RESET_SLOT(nodeNameStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("SPINE_RESET_SLOT(" + nodeNameStr));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var spineComps = this.getComponetsByNodeName(nodeNames[n], 'SkeletonExtension');

            for (var i = 0; i < spineComps.length; i++) {
              var spineComp = spineComps[i];
              spineComp.updateSlotTexture();
            }
          }
        }

        SPINE_PAUSE(nodeNameStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("SPINE_PAUSE(" + nodeNameStr + ")"));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var spineComps = this.getComponetsByNodeName(nodeNames[n], 'sp.Skeleton');

            for (var i = 0; i < spineComps.length; i++) {
              var spineComp = spineComps[i];
              spineComp.paused = true;
            }
          }
        }

        SPINE_CONTINUE(nodeNameStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("SPINE_CONTINUE(" + nodeNameStr + ")"));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var spineComps = this.getComponetsByNodeName(nodeNames[n], 'sp.Skeleton');

            for (var i = 0; i < spineComps.length; i++) {
              var spineComp = spineComps[i];
              spineComp.paused = false;
            }
          }
        }

        SPINE_RESET(nodeNameStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("SPINE_RESET(" + nodeNameStr + ")"));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var spineComps = this.getComponetsByNodeName(nodeNames[n], 'sp.Skeleton');

            for (var i = 0; i < spineComps.length; i++) {
              var spineComp = spineComps[i];
              spineComp.clearTracks(); // with set to setup pose
            }
          }
        }

        SPINE_CLEARTRACK(nodeNameStr, trackStr) {
          var [track_ok, track] = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(trackStr);

          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("SPINE_CLEARTRACK(" + nodeNameStr + ", " + trackStr + ")"));

            if (!track_ok) {
              console.log("track type error : " + trackStr);
              return;
            }
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var spineComps = this.getComponetsByNodeName(nodeNames[n], 'sp.Skeleton');

            for (var i = 0; i < spineComps.length; i++) {
              var spineComp = spineComps[i];
              spineComp.clearTrack(track);
            }
          }
        }

        SPINE_SET_TO_SETUP_POSE(nodeNameStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("SPINE_SET_TO_SETUP_POSE(" + nodeNameStr + ")"));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var spineComps = this.getComponetsByNodeName(nodeNames[n], 'sp.Skeleton');

            for (var i = 0; i < spineComps.length; i++) {
              var spineComp = spineComps[i];
              spineComp.setToSetupPose();
            }
          }
        }

        SPINE_CLEAR_ANIMATION(nodeNameStr, trackStr) {
          var [track_ok, track] = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(trackStr);

          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("SPINE_CLEAR_ANIMATION(" + nodeNameStr + ", " + trackStr + ")"));

            if (!track_ok) {
              console.log("track type error : " + trackStr);
              return;
            }
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var spineComps = this.getComponetsByNodeName(nodeNames[n], 'sp.Skeleton');

            for (var i = 0; i < spineComps.length; i++) {
              var spineComp = spineComps[i];
              spineComp.clearAnimation(track);
            }
          }
        }

        SPINE_FADING(nodeNameStr, alphaToStr, durationStr, easytypeStr, disableOnEndStr) {
          var _this = this;

          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("SPINE_FADING(" + nodeNameStr + ", " + alphaToStr + ", " + durationStr + ", " + easytypeStr + ", " + disableOnEndStr + ")"));
          }

          var alpha = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(alphaToStr)[1];
          var duration = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(durationStr)[1];
          var easetype = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(easytypeStr)[1];
          var disableOnEnd = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToBoolean(disableOnEndStr);
          var nodeNames = this.getNodeNames(nodeNameStr);

          var _loop = function _loop() {
            var comps = _this.getComponetsByNodeName(nodeNames[n], 'sp.Skeleton');

            var _loop2 = function _loop2(i) {
              comps[i].enabled = true;
              var tcolor = new Color(comps[i].color.r, comps[i].color.g, comps[i].color.b, alpha);
              tween(comps[i]).to(duration, {
                color: tcolor
              }, {
                easing: (_crd && easeFunctions === void 0 ? (_reportPossibleCrUseOfeaseFunctions({
                  error: Error()
                }), easeFunctions) : easeFunctions)[easetype]
              }).call(() => {
                if (disableOnEnd) {
                  comps[i].enabled = false;
                }
              }).start();
            };

            for (var i = 0; i < comps.length; i++) {
              _loop2(i);
            }
          };

          for (var n = 0; n < nodeNames.length; n++) {
            _loop();
          }
        }

        SPINE_MIX(nodeNameStr, clipNameStr, clipName2Str, durationStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("SPINE_MIX(" + nodeNameStr + ", " + clipNameStr + ", " + clipName2Str + ", " + durationStr + ")"));
          }

          var duration = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(durationStr)[1];
          var nodeNames = this.getNodeNames(nodeNameStr);
          var clipName = clipNameStr;
          var clipName2 = clipName2Str;

          for (var n = 0; n < nodeNames.length; n++) {
            var spineComps = this.getComponetsByNodeName(nodeNames[n], 'sp.Skeleton');

            for (var i = 0; i < spineComps.length; i++) {
              var spineComp = spineComps[i];
              spineComp.setMix(clipName, clipName2, duration);
            }
          }
        }

        SPINE_ADD(nodeNameStr, clipNameStr, loopStr, trackStr, delayStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("SPINE_ADD(" + nodeNameStr + ", " + clipNameStr + ", " + loopStr + ", " + trackStr + "), " + delayStr));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);
          var clipName = clipNameStr;
          var loop = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToBoolean(loopStr);
          var delay = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(delayStr)[1];
          var [track_ok, track] = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(trackStr);

          if (!track_ok) {
            console.log("track type error : " + trackStr);
            return;
          }

          for (var n = 0; n < nodeNames.length; n++) {
            var spineComps = this.getComponetsByNodeName(nodeNames[n], 'sp.Skeleton');

            for (var i = 0; i < spineComps.length; i++) {
              var spineComp = spineComps[i];
              spineComp.addAnimation(track, clipName, loop, delay);
            }
          }
        }

        SPINE_TIMESCALE(nodeNameStr, timescaleStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("SPINE_TIMESCALE(" + nodeNameStr + ", " + timescaleStr + ")"));
          }

          var timescale = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(timescaleStr)[1];
          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var spineComps = this.getComponetsByNodeName(nodeNames[n], 'sp.Skeleton');

            for (var i = 0; i < spineComps.length; i++) {
              var spineComp = spineComps[i];
              spineComp.timeScale = timescale;
            }
          }
        }

        SPINE_TRACK_TIMESCALE(nodeNameStr, trackStr, timescaleStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("SPINE_TRACK_TIMESCALE(" + nodeNameStr + ", " + trackStr + ", " + timescaleStr + ")"));
          }

          var timescale = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(timescaleStr)[1];
          var [track_ok, track] = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(trackStr);

          if (!track_ok) {
            console.log("track type error : " + trackStr);
            return;
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var spineComps = this.getComponetsByNodeName(nodeNames[n], 'sp.Skeleton');

            for (var i = 0; i < spineComps.length; i++) {
              var spineComp = spineComps[i];
              spineComp.getCurrent(track).timeScale = timescale;
            }
          }
        }

        SPINE_ALPHA(nodeNameStr, trackStr, alphaToStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("SPINE_ALPHA(" + nodeNameStr + ", " + alphaToStr + ")"));
          }

          var alpha = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(alphaToStr)[1];
          var [track_ok, track] = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(trackStr);

          if (!track_ok) {
            console.log("track type error : " + trackStr);
            return;
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var spineComps = this.getComponetsByNodeName(nodeNames[n], 'sp.Skeleton');

            for (var i = 0; i < spineComps.length; i++) {
              var spineComp = spineComps[i];
              spineComp.getCurrent(track).alpha = alpha;
            }
          }
        }

        UI_OPACITY(nodeNameStr, alphaToStr, durationStr, easytypeStr, disableOnEndStr) {
          var _this2 = this;

          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("UI_OPACITY(" + nodeNameStr + ", " + alphaToStr + ", " + durationStr + ", " + easytypeStr + ", " + disableOnEndStr + ")"));
          }

          var alpha = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(alphaToStr)[1];
          var duration = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(durationStr)[1];
          var easetype = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(easytypeStr)[1];
          var disableOnEnd = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToBoolean(disableOnEndStr);
          var nodeNames = this.getNodeNames(nodeNameStr);

          var _loop3 = function _loop3() {
            var comps = _this2.getComponetsByNodeName(nodeNames[n], 'cc.UIOpacity');

            var _loop4 = function _loop4(i) {
              comps[i].node.active = true;
              tween(comps[i]).to(duration, {
                opacity: alpha
              }, {
                easing: (_crd && easeFunctions === void 0 ? (_reportPossibleCrUseOfeaseFunctions({
                  error: Error()
                }), easeFunctions) : easeFunctions)[easetype]
              }).call(() => {
                if (disableOnEnd) {
                  comps[i].node.active = false;
                }
              }).start();
            };

            for (var i = 0; i < comps.length; i++) {
              _loop4(i);
            }
          };

          for (var n = 0; n < nodeNames.length; n++) {
            _loop3();
          }
        }
        /*
        private UI_FADING(nodeNameStr: string, showStr: string, durationStr: string, easytypeStr: string) {
            if (this.debug === true) {
                console.log(this.getDebugHeader() + `UI_FADING(${nodeNameStr}, ${showStr}, ${durationStr}, ${easytypeStr})`);
            }
            let show = StringExt.ToBoolean(showStr);
            let duration = StringExt.ToNumber(durationStr)[1];
            let easetype = StringExt.ToNumber(easytypeStr)[1];
              let nodeNames = this.getNodeNames(nodeNameStr);
            for (let n = 0; n < nodeNames.length; n++) {
                let comps = this.getComponetsByNodeName<UIOpacity>(nodeNames[n], 'cc.UIOpacity');
                for (let i = 0; i < comps.length; i++) {
                    let alpha = 0;
                    //show在開始時node active
                    if (show) {
                        comps[i].node.active = true;
                        alpha = 255;
                    }
                    tween(comps[i])
                        .to(duration, { opacity: alpha }, { easing: easeFunctions[easetype] })
                        .call(() => {
                            //hide在結束時node deactive
                            if (show === false) {
                                comps[i].node.active = false;
                            }
                        })
                        .start();
                }
            }
        }
        */


        NODE_ACTIVE(nodeNameStr, activeStr) {
          var active = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToBoolean(activeStr);

          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("NODE_ACTIVE(" + nodeNameStr + ", " + activeStr + ")"));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var nodes = (_crd && NodeExt === void 0 ? (_reportPossibleCrUseOfNodeExt({
              error: Error()
            }), NodeExt) : NodeExt).findNodes(this.node, nodeNames[n]);

            if (nodes.length === 0) {
              console.warn(this.getDebugHeader() + " can't find node " + nodeNames[n]);
              return;
            }

            for (var i = 0; i < nodes.length; i++) {
              nodes[i].active = active;
            }
          }
        }

        NODE_EVENT(nodeNameStr, eventName, arg0, arg1, arg2, arg3, arg4) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("NODE_EVENT(" + nodeNameStr + ", " + eventName + ", " + arg0 + ", " + arg1 + ", " + arg2 + ", " + arg3 + ", " + arg4 + ")"));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var nodes = (_crd && NodeExt === void 0 ? (_reportPossibleCrUseOfNodeExt({
              error: Error()
            }), NodeExt) : NodeExt).findNodes(this.node, nodeNames[n]);

            if (nodes.length === 0) {
              console.warn(this.getDebugHeader() + " can't find node " + nodeNames[n]);
              return;
            }

            for (var i = 0; i < nodes.length; i++) {
              nodes[i].emit(eventName, arg0, arg1, arg2, arg3, arg4);
            }
          }
        }

        ANIM_PLAY(nodeNameStr, clipName, loopStr) {
          var loop = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToBoolean(loopStr);

          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("ANIM_PLAY(" + nodeNameStr + "," + clipName + "," + loop + ")"));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var animComps = this.getComponetsByNodeName(nodeNames[n], 'cc.Animation');

            for (var i = 0; i < animComps.length; i++) {
              animComps[i].play(clipName);

              var _state = animComps[i].getState(clipName);

              _state.wrapMode = loop ? AnimationClip.WrapMode.Loop : AnimationClip.WrapMode.Normal;
            }
          }
        }

        ANIM_STOP(nodeNameStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("ANIM_STOP(" + nodeNameStr + ")"));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var animComps = this.getComponetsByNodeName(nodeNames[n], 'cc.Animation');

            for (var i = 0; i < animComps.length; i++) {
              animComps[i].stop();
            }
          }
        }

        ANIM_PAUSE(nodeNameStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("ANIM_PAUSE(" + nodeNameStr + ")"));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var animComps = this.getComponetsByNodeName(nodeNames[n], 'cc.Animation');

            for (var i = 0; i < animComps.length; i++) {
              var anim = animComps[i];
              anim.pause();
            }
          }
        }

        ANIM_RESUME(nodeNameStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("ANIM_RESUME(" + nodeNameStr + ")"));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var animComps = this.getComponetsByNodeName(nodeNames[n], 'cc.Animation');

            for (var i = 0; i < animComps.length; i++) {
              var anim = animComps[i];
              anim.resume();
            }
          }
        }

        SK_ANIM_PLAY(nodeNameStr, clipName, loopStr) {
          var loop = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToBoolean(loopStr);

          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("SK_ANIM_PLAY(" + nodeNameStr + "," + clipName + "," + loop + ")"));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var animComps = this.getComponetsByNodeName(nodeNames[n], 'cc.SkeletalAnimation');

            for (var i = 0; i < animComps.length; i++) {
              animComps[i].play(clipName);

              var _state2 = animComps[i].getState(clipName);

              _state2.wrapMode = loop ? AnimationClip.WrapMode.Loop : AnimationClip.WrapMode.Normal;
            }
          }
        }

        SK_ANIM_STOP(nodeNameStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("SK_ANIM_STOP(" + nodeNameStr + ")"));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var animComps = this.getComponetsByNodeName(nodeNames[n], 'cc.SkeletalAnimation');

            for (var i = 0; i < animComps.length; i++) {
              animComps[i].stop();
            }
          }
        }

        SK_ANIM_PAUSE(nodeNameStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("SK_ANIM_PAUSE(" + nodeNameStr + ")"));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var animComps = this.getComponetsByNodeName(nodeNames[n], 'cc.SkeletalAnimation');

            for (var i = 0; i < animComps.length; i++) {
              var anim = animComps[i];
              anim.pause();
            }
          }
        }

        SK_ANIM_RESUME(nodeNameStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("SK_ANIM_RESUME(" + nodeNameStr + ")"));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var animComps = this.getComponetsByNodeName(nodeNames[n], 'cc.SkeletalAnimation');

            for (var i = 0; i < animComps.length; i++) {
              var anim = animComps[i];
              anim.resume();
            }
          }
        }

        PARTICLE_PLAY(nodeNameStr, loopStr, durationStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("PARTICLE_PLAY(" + nodeNameStr + ", " + loopStr + ", " + durationStr + ")"));
          }

          var loop = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToBoolean(loopStr);
          var duration = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(durationStr)[1];
          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var comps = this.getComponetsByNodeName(nodeNames[n], 'cc.ParticleSystem');

            for (var i = 0; i < comps.length; i++) {
              comps[i].duration = duration;
              comps[i].loop = loop;
              comps[i].play();
            }
          }
        }

        PARTICLE_STOP(nodeNameStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("PARTICLE_STOP(" + nodeNameStr + ")"));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var comps = this.getComponetsByNodeName(nodeNames[n], 'cc.ParticleSystem');

            for (var i = 0; i < comps.length; i++) {
              comps[i].stop();
            }
          }
        }

        PARTICLE_PAUSE(nodeNameStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("PARTICLE_PAUSE(" + nodeNameStr + ")"));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var comps = this.getComponetsByNodeName(nodeNames[n], 'cc.ParticleSystem');

            for (var i = 0; i < comps.length; i++) {
              comps[i].pause();
            }
          }
        }

        PARTICLE_CLEAR(nodeNameStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("PARTICLE_CLEAR(" + nodeNameStr + ")"));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var comps = this.getComponetsByNodeName(nodeNames[n], 'cc.ParticleSystem');

            for (var i = 0; i < comps.length; i++) {
              comps[i].clear();
            }
          }
        }

        PARTICLE_STOPEMITT(nodeNameStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("PARTICLE_STOPEMITT(" + nodeNameStr + ")"));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var comps = this.getComponetsByNodeName(nodeNames[n], 'cc.ParticleSystem');

            for (var i = 0; i < comps.length; i++) {
              comps[i].stopEmitting();
            }
          }
        }

        PARTICLE_RESET(nodeNameStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("PARTICLE_RESET(" + nodeNameStr + ")"));
          }

          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var comps = this.getComponetsByNodeName(nodeNames[n], 'cc.ParticleSystem');

            for (var i = 0; i < comps.length; i++) {
              comps[i].stop();
              comps[i].play();
            }
          }
        }

        PARTICLE_TINT_COLOR(nodeNameStr, durationStr, startColorStr, endColorStr, easeTypeStr, disableOnEndStr) {
          var _this3 = this;

          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("PARTICLE_TINT_COLOR(" + nodeNameStr + ", " + startColorStr + ", " + endColorStr + ", " + easeTypeStr + ", " + disableOnEndStr + ")"));
          }

          var duration = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(durationStr)[1];
          var startColor = new Color(startColorStr);
          var endColor = new Color(endColorStr);
          var easetype = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(easeTypeStr)[1];
          var disableOnEnd = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToBoolean(disableOnEndStr);
          var nodeNames = this.getNodeNames(nodeNameStr);

          var _loop5 = function _loop5() {
            var comps = _this3.getComponetsByNodeName(nodeNames[n], 'cc.ParticleSystem');

            var _loop6 = function _loop6(i) {
              comps[i].enabled = true;
              tween(startColor).to(duration, // Duration in seconds
              {
                r: endColor.r,
                g: endColor.g,
                b: endColor.b,
                a: endColor.a
              }, {
                easing: (_crd && easeFunctions === void 0 ? (_reportPossibleCrUseOfeaseFunctions({
                  error: Error()
                }), easeFunctions) : easeFunctions)[easetype],
                onUpdate: () => {
                  comps[i].materials[0].setProperty('tintColor', startColor);
                } // Update the material's tint color

              }).call(() => {
                if (disableOnEnd) {
                  comps[i].enabled = false;
                }
              }).start();
            };

            for (var i = 0; i < comps.length; i++) {
              _loop6(i);
            }
          };

          for (var n = 0; n < nodeNames.length; n++) {
            _loop5();
          }
        }

        PARTICLE_CAPACITY(nodeNameStr, capacityStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("PARTICLE_CAPACITY(" + nodeNameStr + ", " + capacityStr + ")"));
          }

          var capacity = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(capacityStr)[1];
          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var comps = this.getComponetsByNodeName(nodeNames[n], 'cc.ParticleSystem');

            for (var i = 0; i < comps.length; i++) {
              comps[i].capacity = capacity;
            }
          }
        }

        PARTICLE_RATE_OVER_TIME(nodeNameStr, rateOverTimeStr) {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + ("PARTICLE_RATE_OVER_TIME(" + nodeNameStr + ", " + rateOverTimeStr + ")"));
          }

          var rateOverTime = (_crd && StringExt === void 0 ? (_reportPossibleCrUseOfStringExt({
            error: Error()
          }), StringExt) : StringExt).ToNumber(rateOverTimeStr)[1];
          var nodeNames = this.getNodeNames(nodeNameStr);

          for (var n = 0; n < nodeNames.length; n++) {
            var comps = this.getComponetsByNodeName(nodeNames[n], 'cc.ParticleSystem');
            var curve = new CurveRange();
            curve.mode = CurveRange.Mode.Constant;
            curve.constant = rateOverTime;
            curve.constantMax = rateOverTime;
            curve.constantMin = rateOverTime;

            for (var i = 0; i < comps.length; i++) {
              comps[i].rateOverTime = curve;
            }
          }
        }
        /*
        private PARTICLE_2D_PLAY(nodeNameStr: string, loopStr: string, durationStr: string) {
            if (this.debug === true) {
                console.log(this.getDebugHeader() + `PARTICLE_2D_PLAY(${nodeNameStr}, ${loopStr}, ${durationStr})`);
            }
              let loop = StringExt.ToBoolean(loopStr);
            let duration = StringExt.ToNumber(durationStr)[1];
              let nodeNames = this.getNodeNames(nodeNameStr);
            for (let n = 0; n < nodeNames.length; n++) {
                let comps = this.getComponetsByNodeName<ParticleSystem2D>(nodeNames[n], 'cc.ParticleSystem2D');
                for (let i = 0; i < comps.length; i++) {
                    comps[i].duration = duration;
                    //todo: no proper play function for now.
                }
            }
        }
          private PARTICLE_2D_STOPEMITT(nodeNameStr: string) {
            if (this.debug === true) {
                console.log(this.getDebugHeader() + `PARTICLE_2D_STOPEMITT(${nodeNameStr})`);
            }
              let nodeNames = this.getNodeNames(nodeNameStr);
            for (let n = 0; n < nodeNames.length; n++) {
                let comps = this.getComponetsByNodeName<ParticleSystem2D>(nodeNames[n], 'cc.ParticleSystem2D');
                for (let i = 0; i < comps.length; i++) {
                    comps[i].stopSystem();
                }
            }
        }
          private PARTICLE_2D_RESET(nodeNameStr: string) {
            if (this.debug === true) {
                console.log(this.getDebugHeader() + `PARTICLE_2D_RESET(${nodeNameStr})`);
            }
              let nodeNames = this.getNodeNames(nodeNameStr);
            for (let n = 0; n < nodeNames.length; n++) {
                let comps = this.getComponetsByNodeName<ParticleSystem2D>(nodeNames[n], 'cc.ParticleSystem');
                for (let i = 0; i < comps.length; i++) {
                    comps[i].resetSystem();
                }
            }
        }
        */


        updateClipData() {
          //the only way to update modified clips data
          this.animation.clips = this.animation.clips;
        }

        onPlay() {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + 'status: playing');
          }

          if (this.OnAnimEvent !== null) {
            this.OnAnimEvent(Animation.EventType.PLAY, this.GetAnimState());
          }
        }

        onStop() {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + 'status: stoppping');
          }

          if (this.OnAnimEvent !== null) {
            this.OnAnimEvent(Animation.EventType.STOP, this.GetAnimState());
          }
        }

        onFinished() {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + 'status: finished');
          }

          if (this.OnAnimEvent !== null) {
            this.OnAnimEvent(Animation.EventType.FINISHED, this.GetAnimState());
          }
        }

        onLastFrame() {
          if (this.debug === true) {
            console.log(this.getDebugHeader() + 'status: onLastFrame');
          }

          if (this.OnAnimEvent !== null) {
            this.OnAnimEvent(Animation.EventType.LASTFRAME, this.GetAnimState());
          }
        }

        getComponetsByNodeName(nodeName, compName) {
          var comps = [];
          var nodes = (_crd && NodeExt === void 0 ? (_reportPossibleCrUseOfNodeExt({
            error: Error()
          }), NodeExt) : NodeExt).findNodes(this.node, nodeName);

          if (nodes.length === 0) {
            console.warn(this.getDebugHeader() + " can't find node " + nodeName);
            return comps;
          }

          for (var i = 0; i < nodes.length; i++) {
            var comp = nodes[i].getComponent(compName);

            if (comp != null) {
              comps.push(comp);
            }
          }

          if (comps.length === 0) {
            console.warn(this.getDebugHeader() + " can't find component " + compName + " in Node " + nodeName);
          }

          return comps;
        }

        getDebugHeader() {
          var hName = (_crd && NodeExt === void 0 ? (_reportPossibleCrUseOfNodeExt({
            error: Error()
          }), NodeExt) : NodeExt).getHierachy(this.node);
          return hName + ".ActionEventPlayer, clip.name=" + this.curClip + ", ";
        }

        getNodeNames(nodeName) {
          if (!nodeName) {
            console.warn(this.getDebugHeader() + " nodeName is empty: " + nodeName);
            return [];
          }

          var names = nodeName.replace(/\s/g, "").split(',');

          if (names.length === 0) {
            console.warn(this.getDebugHeader() + " nodeName is empty: " + nodeName);
          }

          return names;
        }

      }, _class3.EVENT_CLIP_NAME = "actions", _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "debug", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "AutoInit", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "AutoStart", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "IsForAnimationEvent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "EventList", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Clip", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cf09a024f418bde37bc39dbd12b8ec82b6d4a1b3.js.map
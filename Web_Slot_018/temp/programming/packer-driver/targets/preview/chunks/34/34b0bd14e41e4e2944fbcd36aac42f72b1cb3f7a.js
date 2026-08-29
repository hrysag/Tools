System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, find, Node, tween, UIOpacity, v3, SpineController, FindComponent, Fg_UI_Component, CanvasRender, TransitionsState, AnimationControllersPoolManager, Orientation, FG_SpriteController, FindNode, GameState, AutoOrientAndSetPos, AudioManager, SOUND_TYPE, SoundList, MusicList, AudioSourceList, AniCtrlPropDef, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, GATE_PREFAB_NAME, GateN2FTransition;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "../../MyUtils/AnimationSystem/Components/SpineController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../../MyUtils/FindComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFg_UI_Component(extras) {
    _reporterNs.report("Fg_UI_Component", "./FG_Ui/Fg_UI_Component", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCanvasRender(extras) {
    _reporterNs.report("CanvasRender", "./CaptureNodeScreen/Capture2test", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransitionsState(extras) {
    _reporterNs.report("TransitionsState", "../../DefinitionGameData/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationControllersPoolManager(extras) {
    _reporterNs.report("AnimationControllersPoolManager", "../../MyUtils/AnimationSystem/AnimationControllersPoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../../../../Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFG_SpriteController(extras) {
    _reporterNs.report("FG_SpriteController", "../ShowContainer/Components/FG_SpriteController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindNode(extras) {
    _reporterNs.report("FindNode", "../../MyUtils/FindNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../DefinitionGameData/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoOrientAndSetPos(extras) {
    _reporterNs.report("AutoOrientAndSetPos", "../ShowContainer/Components/AutoOrientAndSetPos", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOUND_TYPE(extras) {
    _reporterNs.report("SOUND_TYPE", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../../DefinitionGameData/SoundList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicList(extras) {
    _reporterNs.report("MusicList", "../../DefinitionGameData/SoundList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioSourceList(extras) {
    _reporterNs.report("AudioSourceList", "../../DefinitionGameData/SoundList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniCtrlPropDef(extras) {
    _reporterNs.report("AniCtrlPropDef", "../../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      find = _cc.find;
      Node = _cc.Node;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      SpineController = _unresolved_2.SpineController;
    }, function (_unresolved_3) {
      FindComponent = _unresolved_3.FindComponent;
    }, function (_unresolved_4) {
      Fg_UI_Component = _unresolved_4.Fg_UI_Component;
    }, function (_unresolved_5) {
      CanvasRender = _unresolved_5.CanvasRender;
    }, function (_unresolved_6) {
      TransitionsState = _unresolved_6.TransitionsState;
    }, function (_unresolved_7) {
      AnimationControllersPoolManager = _unresolved_7.AnimationControllersPoolManager;
    }, function (_unresolved_8) {
      Orientation = _unresolved_8.Orientation;
    }, function (_unresolved_9) {
      FG_SpriteController = _unresolved_9.FG_SpriteController;
    }, function (_unresolved_10) {
      FindNode = _unresolved_10.FindNode;
    }, function (_unresolved_11) {
      GameState = _unresolved_11.GameState;
    }, function (_unresolved_12) {
      AutoOrientAndSetPos = _unresolved_12.AutoOrientAndSetPos;
    }, function (_unresolved_13) {
      AudioManager = _unresolved_13.AudioManager;
      SOUND_TYPE = _unresolved_13.SOUND_TYPE;
    }, function (_unresolved_14) {
      SoundList = _unresolved_14.SoundList;
      MusicList = _unresolved_14.MusicList;
      AudioSourceList = _unresolved_14.AudioSourceList;
    }, function (_unresolved_15) {
      AniCtrlPropDef = _unresolved_15.AniCtrlPropDef;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa2170kOENN+J8bcT+WbO9p", "GateN2FTransition", undefined);

      __checkObsolete__(['_decorator', 'find', 'Node', 'tween', 'UIOpacity', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);
      GATE_PREFAB_NAME = 'NG_CollectBox_freestart';

      _export("GateN2FTransition", GateN2FTransition = (_dec = ccclass('GateN2FTransition'), _dec2 = property({
        type: Node,
        displayName: 'FX_FreeStart_back_HorizontalAniNode',
        visible: true,
        tooltip: '轉場光束_橫版後node',
        group: 'FS_Back'
      }), _dec3 = property({
        type: Node,
        displayName: 'FX_FreeStart_back_VerticalAniNode',
        visible: true,
        tooltip: '轉場光束_直版後node',
        group: 'FS_Back'
      }), _dec4 = property({
        type: _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
          error: Error()
        }), SpineController) : SpineController,
        displayName: 'FSBack_Horizontal',
        visible: true,
        tooltip: '轉場光束_橫版後sp',
        group: 'FS_Back'
      }), _dec5 = property({
        type: _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
          error: Error()
        }), SpineController) : SpineController,
        displayName: 'FSBack_VerticalAni',
        visible: true,
        tooltip: '轉場光束_直版後sp',
        group: 'FS_Back'
      }), _dec6 = property({
        type: Node,
        displayName: 'FX_FreeStart_front_HorizontalAniNode',
        visible: true,
        tooltip: '轉場光束_橫版前node',
        group: 'FS_Front'
      }), _dec7 = property({
        type: Node,
        displayName: 'FX_FreeStart_front_VerticalAniNode',
        visible: true,
        tooltip: '轉場光束_直版前node',
        group: 'FS_Front'
      }), _dec8 = property({
        type: _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
          error: Error()
        }), SpineController) : SpineController,
        displayName: 'FSFront_Horizontal',
        visible: true,
        tooltip: '轉場光束_橫版前sp',
        group: 'FS_Front'
      }), _dec9 = property({
        type: _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
          error: Error()
        }), SpineController) : SpineController,
        displayName: 'FSFront_VerticalAni',
        visible: true,
        tooltip: '轉場光束_直版前sp',
        group: 'FS_Front'
      }), _dec10 = property({
        type: Node,
        displayName: 'ScaleBGNode',
        visible: true,
        tooltip: '轉場要縮放的背景'
      }), _dec11 = property({
        type: Node,
        displayName: 'ScaleSlotMachineNode',
        visible: true,
        tooltip: '轉場要縮放的盤面'
      }), _dec12 = property({
        type: Node,
        displayName: 'ScaleSlotFrameNode',
        visible: true,
        tooltip: '轉場要縮放的SlotFrameNode'
      }), _dec13 = property({
        type: _crd && Fg_UI_Component === void 0 ? (_reportPossibleCrUseOfFg_UI_Component({
          error: Error()
        }), Fg_UI_Component) : Fg_UI_Component,
        displayName: 'Fg_UI_Component',
        visible: true,
        tooltip: 'FG 轉場UIComponent'
      }), _dec14 = property({
        type: Node,
        displayName: 'GateNodeContainer',
        visible: true,
        tooltip: 'gatePrefabAni'
      }), _dec(_class = (_class2 = class GateN2FTransition extends (_crd && AutoOrientAndSetPos === void 0 ? (_reportPossibleCrUseOfAutoOrientAndSetPos({
        error: Error()
      }), AutoOrientAndSetPos) : AutoOrientAndSetPos) {
        constructor() {
          var _this;

          super(...arguments);
          _this = this;

          _initializerDefineProperty(this, "_fs_b_HorizontalAniNode", _descriptor, this);

          _initializerDefineProperty(this, "_fs_b_VerticalAniNode", _descriptor2, this);

          _initializerDefineProperty(this, "_fS_Back_HorizontalAni", _descriptor3, this);

          _initializerDefineProperty(this, "_fS_Back_VerticalAni", _descriptor4, this);

          _initializerDefineProperty(this, "_fs_f_HorizontalAniNode", _descriptor5, this);

          _initializerDefineProperty(this, "_fs_f_VerticalAniNode", _descriptor6, this);

          _initializerDefineProperty(this, "_fS_front_HorizontalAni", _descriptor7, this);

          _initializerDefineProperty(this, "_fs_front_VerticalAni", _descriptor8, this);

          _initializerDefineProperty(this, "_scaleBGNode", _descriptor9, this);

          _initializerDefineProperty(this, "_scaleSlotMachineNode", _descriptor10, this);

          _initializerDefineProperty(this, "_scaleSlotFrameNode", _descriptor11, this);

          _initializerDefineProperty(this, "_fg_UI_Component", _descriptor12, this);

          _initializerDefineProperty(this, "_gateNodeContainer", _descriptor13, this);

          this._transitionState = (_crd && TransitionsState === void 0 ? (_reportPossibleCrUseOfTransitionsState({
            error: Error()
          }), TransitionsState) : TransitionsState).NONE;
          this._targetFGSlotFrameNode = void 0;
          //--FG的外框
          this._targetNGSlotFrameNode = void 0;
          //--NG的外框
          this._spine_gate = null;
          this._camp = -1;
          this._screenRotationResolution = null;
          this._isTimerRunning = void 0;
          this._frontGateNode = null;
          this._isRunning = false;
          this._transitionCompleteCallBack = null;
          this._changeSlotStateForCloseFG = null;
          this._changeLayerDuringTransition = null;
          this._resolvePromiseForIn = void 0;
          // promise resolve 函式(進場)
          this._resolvePromiseForOut = void 0;

          this.spineGateKeyFrameEvtHandler = function () {
            //console.log('spineGateKeyFrameEvtHandler', args);
            switch (arguments.length <= 0 ? undefined : arguments[0]) {
              case 'back_in_reel':
                break;

              case 'FreeStart_in':
                _this.fgUiActionByKeyFrameEvt();

                break;

              case 'zoom_in':
                //--退場
                _this.tweenScaleForFadeOut();

                break;

              case 'zoom_in_small':
                //--進場
                _this.tweenScaleUpForKeyFrameEvent();

                break;

              case 'wiggle':
                _this.shakeNode(_this._targetNGSlotFrameNode, 0.13, 0.05, {
                  x: 0,
                  y: 8
                });

                break;

              case 'wiggle_small':
                _this.shakeNode(_this._targetNGSlotFrameNode, 0.66, 0.05, {
                  x: 2,
                  y: 2
                });

                break;

              case 'fade_out':
                _this.playFadeOutOpacityAni();

                break;
            }
          };

          this.uiCallFreeBackFadeOutFinish = () => {
            var _this$_changeSlotStat;

            //--面板結束(結算)
            (_this$_changeSlotStat = this._changeSlotStateForCloseFG) == null || _this$_changeSlotStat.call(this); //--要通知關閉轉場切換場景回到正常狀態 
          };
        }

        set transitionState(value) {
          this._transitionState = value;
          this._fg_UI_Component.transitionState = value;
        }

        // promise resolve 函式(結算退場)
        set transitionCompleteCallBack(value) {
          this._transitionCompleteCallBack = value;
        }

        set changeSlotStateForCloseFG(value) {
          this._changeSlotStateForCloseFG = value;
        }

        set changeLayerDuringTransition(value) {
          this._changeLayerDuringTransition = value;
        }

        get isRunning() {
          return this._isRunning;
        }
        /**
         * TODO
         * 要再把這些spine拿去物件池
         */


        init() {
          //--這邊只有直橫版的不同,不需要換skin
          this._fS_Back_HorizontalAni.init();

          this._fS_Back_VerticalAni.init();

          this._fS_front_HorizontalAni.init();

          this._fs_front_VerticalAni.init(); //--FG的顯示次數/結算面板的UI click事件
          //this._fg_UI_Component.callBackForUIClick = this.uiClickHandler;
          //--FG的結算面板UI退場結束後的回調


          this._fg_UI_Component.callBackFreeBackFinish = this.uiCallFreeBackFadeOutFinish;

          this._fg_UI_Component.init();

          this._isTimerRunning = false;
          this._isRunning = false; //--NG的外框

          this._targetNGSlotFrameNode = (_crd && FindNode === void 0 ? (_reportPossibleCrUseOfFindNode({
            error: Error()
          }), FindNode) : FindNode).findChildByNameRecursive(this._scaleSlotFrameNode, 'NG_frame'); //console.log('GateN2FTransition init', this._targetNGSlotFrameNode,);
        }

        testScreenCapture() {
          return;
          var testCapture = new (_crd && CanvasRender === void 0 ? (_reportPossibleCrUseOfCanvasRender({
            error: Error()
          }), CanvasRender) : CanvasRender)(); //testCapture.renderNodeToCanvas(this._testNode).then((canvas) => {
          //    console.log('@@@@@@@@@@@@@@@check_canvas@@@@@@@@@@@@@@@@', canvas);
          //    this._target.getComponent(Sprite).spriteFrame = canvas;
          //});
          //-_target
          //this._captureScreen.getNodeCaptureScreen2();
          //let test=new CaptureNodeScreen();

          /*
          test.getNodeCaptureScreen(this._testNode,this._target).then((spriteFrame)=>{   
              console.log('@@@@@@@@@@@@@@@check_spriteFrame@@@@@@@@@@@@@@@@',spriteFrame);
              this.testCreateNode(spriteFrame);
          })*/

          var node = find('Canvas');
          console.log('chekcCanvas', node);
        }

        openStartTransition() {
          this.transitionState = (_crd && TransitionsState === void 0 ? (_reportPossibleCrUseOfTransitionsState({
            error: Error()
          }), TransitionsState) : TransitionsState).IN;
        }

        setCamp(value) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve) {
              _this2._camp = value;
              var skin_id,
                  targetFGDisplayFrameName = '';

              if (_this2._camp == 0) {
                skin_id = 'FG_01';
                targetFGDisplayFrameName = 'FG_Ali';
              } else {
                skin_id = 'FG_02';
                targetFGDisplayFrameName = 'FG_Thieves';
              } //this._targetRotationContainer = (this._screenRotationResolution == Orientation.Landscape) ? this._rotationHorizontal : this._rotationVertical;


              _this2._frontGateNode = yield _this2.createSpineNodeUI(GATE_PREFAB_NAME);

              _this2.initSpineUI(_this2._frontGateNode);

              _this2._spine_gate.changeSkin(skin_id); //this._targetFGSlotFrameNode = this._scaleSlotFrameNode.getChildByName(targetFGDisplayFrameName);


              _this2._targetFGSlotFrameNode = (_crd && FindNode === void 0 ? (_reportPossibleCrUseOfFindNode({
                error: Error()
              }), FindNode) : FindNode).findChildByNameRecursive(_this2._scaleSlotFrameNode, targetFGDisplayFrameName);
              yield _this2._fg_UI_Component.changeFgUITargetForCamp(_this2._camp);

              _this2._frontGateNode.setScale(v3(1, 1, 1));

              _this2._frontGateNode.active = true;
              _this2._isRunning = true;
              _this2._fS_Back_HorizontalAni.node.active = true;
              _this2._fS_Back_VerticalAni.node.active = true;
              _this2._fS_front_HorizontalAni.node.active = true;
              _this2._fs_front_VerticalAni.node.active = true;
              resolve();
            }));
          })();
        } //--螢幕旋轉變化


        otherProcessForOrientation(value) {
          if (this._screenRotationResolution == value) {
            return;
          }

          this._screenRotationResolution = value;

          if (value == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            this._fs_b_HorizontalAniNode.getComponent(UIOpacity).opacity = 255;
            this._fs_b_VerticalAniNode.getComponent(UIOpacity).opacity = 0;
            this._fs_f_HorizontalAniNode.getComponent(UIOpacity).opacity = 255;
            this._fs_f_VerticalAniNode.getComponent(UIOpacity).opacity = 0;
          } else if (value == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait) {
            this._fs_b_HorizontalAniNode.getComponent(UIOpacity).opacity = 0;
            this._fs_b_VerticalAniNode.getComponent(UIOpacity).opacity = 255;
            this._fs_f_HorizontalAniNode.getComponent(UIOpacity).opacity = 0;
            this._fs_f_VerticalAniNode.getComponent(UIOpacity).opacity = 255;
          }
        }

        playAni(key) {
          this._spine_gate.playAni(key);

          if (key == 'freestart_out') {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).ModeChange1, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
              error: Error()
            }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
              error: Error()
            }), AudioSourceList) : AudioSourceList).BtnAS);

            this._fS_Back_HorizontalAni.playAni('freestart_out_L');

            this._fS_Back_VerticalAni.playAni('freestart_out_P');

            this._fS_front_HorizontalAni.playAni('freestart_out_L');

            this._fs_front_VerticalAni.playAni('freestart_out_P'); //--這邊要插入轉場到FG的音樂
            //-this._camp 0/1


            var fgBGMTarget;

            if (this._camp == 0) {
              fgBGMTarget = (_crd && MusicList === void 0 ? (_reportPossibleCrUseOfMusicList({
                error: Error()
              }), MusicList) : MusicList).FgBgm1;
            } else if (this._camp == 1) {
              fgBGMTarget = (_crd && MusicList === void 0 ? (_reportPossibleCrUseOfMusicList({
                error: Error()
              }), MusicList) : MusicList).FgBgm2;
            }

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playMusic(fgBGMTarget);
          }
        } //--關門後換圖


        playAinForStart(callBack) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              _this3._resolvePromiseForIn = resolve;
              _this3._frontGateNode.getComponent(UIOpacity).opacity = 255;
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                error: Error()
              }), SoundList) : SoundList).ModeChange1, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
                error: Error()
              }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                error: Error()
              }), AudioSourceList) : AudioSourceList).BtnAS);

              _this3._spine_gate.playAniWithCallBack(callBack, 'freestart_in');
            });
          })();
        }

        playFadeOutOpacityAni() {
          var targetOpacity = this._frontGateNode.getComponent(UIOpacity);

          tween(targetOpacity).to(0.16, {
            opacity: 0
          }).call(() => {
            //this._transitionCompleteCallBack?.();
            if (this._resolvePromiseForIn) {
              this._resolvePromiseForIn();

              this._resolvePromiseForIn = undefined;
            }

            this.resetState();
          }).start();
        }

        closeFG(value) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              _this4._resolvePromiseForOut = resolve;

              _this4.fgUiActionByKeyFrameEvt(value);
            });
          })();
        } //--結束一把FG會進來


        cleanTransition() {
          this._fg_UI_Component.cleanFGUI();

          this.removeGate();
          (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
            error: Error()
          }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().pushInstancePrefabNodeToPool(GATE_PREFAB_NAME, this._frontGateNode);

          var comp = this._targetFGSlotFrameNode.getComponent(_crd && FG_SpriteController === void 0 ? (_reportPossibleCrUseOfFG_SpriteController({
            error: Error()
          }), FG_SpriteController) : FG_SpriteController);

          if (comp) {
            comp.changeGameState((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).NORMAL);
          }

          var ngBG = this._scaleBGNode.getChildByName('ng_vertical_bg');

          ngBG.setScale(v3(1, 1, 1));
          this._frontGateNode = null;
          this._spine_gate = null;
          this._isRunning = false;

          this._fS_Back_HorizontalAni.spine.getState().setEmptyAnimation(0, 0);

          this._fS_Back_VerticalAni.spine.getState().setEmptyAnimation(0, 0);

          this._fS_front_HorizontalAni.spine.getState().setEmptyAnimation(0, 0);

          this._fs_front_VerticalAni.spine.getState().setEmptyAnimation(0, 0);

          this._fS_Back_HorizontalAni.node.active = false;
          this._fS_Back_VerticalAni.node.active = false;
          this._fS_front_HorizontalAni.node.active = false;
          this._fs_front_VerticalAni.node.active = false;
        }

        resetState() {
          if (this._transitionState == (_crd && TransitionsState === void 0 ? (_reportPossibleCrUseOfTransitionsState({
            error: Error()
          }), TransitionsState) : TransitionsState).OUT) {
            this._fg_UI_Component.resetData();
          } else if (this._transitionState == (_crd && TransitionsState === void 0 ? (_reportPossibleCrUseOfTransitionsState({
            error: Error()
          }), TransitionsState) : TransitionsState).IN || this._transitionState == (_crd && TransitionsState === void 0 ? (_reportPossibleCrUseOfTransitionsState({
            error: Error()
          }), TransitionsState) : TransitionsState).NONE) {
            this._targetNGSlotFrameNode.setScale(v3(1, 1, 1));

            this._frontGateNode.active = false;
            this._frontGateNode.getComponent(UIOpacity).opacity = 255;
          }

          this._resolvePromiseForIn = undefined;
          this._resolvePromiseForOut = undefined;
        }

        createSpineNodeUI(prefabKey) {
          return new Promise((resolve, reject) => {
            var spineNode = (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
              error: Error()
            }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().getPrefabNode(prefabKey);
            spineNode.getComponent(UIOpacity).opacity = 0;
            spineNode.active = true;

            this._gateNodeContainer.once(Node.EventType.CHILD_ADDED, () => {
              resolve(spineNode);
            });

            this._gateNodeContainer.addChild(spineNode);
          });
        }

        removeGate() {
          if (this._frontGateNode) {
            this._gateNodeContainer.removeChild(this._frontGateNode);
          }
        }

        setupSpineAnimations(spine, defs) {
          for (var def of defs) {
            var ani = new (_crd && AniCtrlPropDef === void 0 ? (_reportPossibleCrUseOfAniCtrlPropDef({
              error: Error()
            }), AniCtrlPropDef) : AniCtrlPropDef)();
            ani.targetName = def.name;
            ani.timeScale = def.timeScale;
            ani.loop = def.loop;
            spine.setAniDataInfo(ani);
          }
        }

        registerKeyEvents(spine, keys, handler) {
          for (var key of keys) {
            spine.setKeyFrameEvent(key, handler);
          }
        }

        initSpineUI(spineNode) {
          this._spine_gate = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
            error: Error()
          }), FindComponent) : FindComponent).findComponentInChildren(spineNode, _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
            error: Error()
          }), SpineController) : SpineController);

          this._spine_gate.init();

          this.setupSpineAnimations(this._spine_gate, [{
            name: 'freestart_in',
            timeScale: 1.5,
            loop: false
          }, {
            name: 'freestart_out',
            timeScale: 1,
            loop: false
          }, {
            name: 'freestart_loop',
            timeScale: 1,
            loop: true
          }]);
          this.registerKeyEvents(this._spine_gate, ['back_in_reel', 'FreeStart_in', 'zoom_in', 'zoom_in_small', 'wiggle', 'wiggle_small', 'fade_out'], this.spineGateKeyFrameEvtHandler);
        }

        //gui進場
        fgUiActionByKeyFrameEvt(value) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            //console.log('fgUiActionByKeyFrameEvt::::', this._transitionState);
            _this5._isTimerRunning = true;

            if (value) {
              _this5._fg_UI_Component.setFgResultLabel(value); //--寫金額 

            }

            yield _this5._fg_UI_Component.playFgFadeInOut(); //--進場->LOOP完成

            /**
             * 這邊在結算時上述的動作都完成後會讓gameManager接續動作(只在結算才有_resolvePromiseForOut)
             * 會執行的動作是
             * 1.cleanAllPlayingAniForNewRound
             * 2.stopShowVerticalAni
             * 3.currentCampFg = -1;
             * 4.currentCamp = -1;
             * 5.closeFGBonus
             * 6.openWildSystemVisible
             * 7.reSetBkgContainerAni
             * 8.closeOrOpenAllGameIconBright(false)
             */
            //await GameUtils.Defer(2000);
            //--玩家點擊面板手動進入下,即會終止計時器

            if (_this5._transitionState == (_crd && TransitionsState === void 0 ? (_reportPossibleCrUseOfTransitionsState({
              error: Error()
            }), TransitionsState) : TransitionsState).IN) {
              //-_fS_Back_HorizontalAni/_fS_front_HorizontalAni的動畫播放
              _this5.playAni('freestart_out'); //--其它的

            }

            _this5._fg_UI_Component.playFgFadeOut();

            if (_this5._resolvePromiseForOut) {
              //--如果是結算時,會有awiat _resolvePromiseForOut
              _this5._resolvePromiseForOut();

              _this5._resolvePromiseForOut = undefined; //await GameUtils.Defer(1000);
            }
          })();
        }
        /**
         * 
         * @param node 目標節點
         * @param shakeDuration 總震動時長 
         * @param shakeFrequency 頻率
         * @param shakeAmplitude 幅度
         */


        shakeNode(node, shakeDuration, shakeFrequency, shakeAmplitude) {
          var originalPosition = node.position.clone();
          var shakeInterval = shakeFrequency;
          var shakeCount = Math.floor(shakeDuration / shakeInterval);
          var shakeActions = [];

          for (var i = 0; i < shakeCount; i++) {
            //const yOffset = (i % 2 === 0 ? shakeAmplitude : -shakeAmplitude);
            var yOffset = 0;
            var xOffset = 0;

            if (i % 2 === 0) {
              xOffset = shakeAmplitude.x;
              yOffset = shakeAmplitude.y;
            } else {
              xOffset = -shakeAmplitude.x;
              yOffset = -shakeAmplitude.y;
            }

            shakeActions.push(tween(node).to(shakeInterval, {
              position: v3(originalPosition.x + xOffset, originalPosition.y + yOffset, originalPosition.z)
            }));
          }

          shakeActions.push(tween(node).to(shakeInterval, {
            position: originalPosition
          }, {
            easing: 'sineOut'
          }));
          tween(node).sequence(...shakeActions).start();
        } //--fade out(evt:zoom_in)


        tweenScaleForFadeOut() {
          var scaleValue = this._screenRotationResolution == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape ? 1.5 : 2.5;
          tween(this._targetNGSlotFrameNode).to(0.33, {
            scale: v3(scaleValue, scaleValue, scaleValue)
          }).start();
          tween(this._frontGateNode).to(0.33, {
            scale: v3(scaleValue, scaleValue, scaleValue)
          }).start();

          this._targetFGSlotFrameNode.setScale(v3(0.65, 0.65, 0.65));

          tween(this._targetFGSlotFrameNode).to(0.33, {
            scale: v3(1, 1, 1)
          }).start(); //-_scaleBGNode

          this.processBGNodeFadeOutTween(scaleValue);
          /*
          this._scaleBGNode.setScale(v3(0.65, 0.65, 0.65));
          tween(this._scaleBGNode)
              .to(0.33, { scale: v3(1, 1, 1) })
              .start();
          */

          this._scaleSlotMachineNode.setScale(v3(0.65, 0.65, 0.65));

          tween(this._scaleSlotMachineNode).to(0.33, {
            scale: v3(1, 1, 1)
          }).start(); //--靠北他FG的面板也要轉..問題就不可能啊...
        }

        processBGNodeFadeOutTween(scaleValue) {
          var ngBG = this._scaleBGNode.getChildByName('ng_vertical_bg');

          var fgBgAli = this._scaleBGNode.getChildByName('FG_Bkg_Ali');

          var fgBgThieves = this._scaleBGNode.getChildByName('FG_Bkg_Thieves');
          /*
          let ngHorizontalNode = ngBG.getChildByName('show_horizontal');
          let ngVerticalNode = ngBG.getChildByName('show_vertical');
          ngHorizontalNode.active = false;
          ngVerticalNode.active = false;
          */
          //ngBG.active = false;


          tween(ngBG).to(0.33, {
            scale: v3(scaleValue, scaleValue, scaleValue)
          }).call(() => {
            var _this$_changeLayerDur;

            ngBG.setScale(v3(1, 1, 1)); //--面板進場

            (_this$_changeLayerDur = this._changeLayerDuringTransition) == null || _this$_changeLayerDur.call(this);
          }).start();
          fgBgAli.setScale(v3(0.65, 0.65, 0.65));
          tween(fgBgAli).to(0.33, {
            scale: v3(1, 1, 1)
          }).start();
          fgBgThieves.setScale(v3(0.65, 0.65, 0.65));
          tween(fgBgThieves).to(0.33, {
            scale: v3(1, 1, 1)
          }).start();
        } //--fade in(evt:zoom_in_small)


        tweenScaleUpForKeyFrameEvent() {
          //--_scaleSlotFrameNode(tween的數值有分直橫版不同)
          tween(this._targetNGSlotFrameNode).to(0.66, {
            scale: v3(1.05, 1.05, 1.05)
          }) //.tag(1)//--給tween一個tag(id)
          .start(); //-this._frontGateNode

          tween(this._frontGateNode).to(0.66, {
            scale: v3(1.05, 1.05, 1.05)
          }) //.tag(1)//--給tween一個tag(id)
          .start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_fs_b_HorizontalAniNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_fs_b_VerticalAniNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_fS_Back_HorizontalAni", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_fS_Back_VerticalAni", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_fs_f_HorizontalAniNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_fs_f_VerticalAniNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_fS_front_HorizontalAni", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_fs_front_VerticalAni", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_scaleBGNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_scaleSlotMachineNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_scaleSlotFrameNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_fg_UI_Component", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "_gateNodeContainer", [_dec14], {
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
//# sourceMappingURL=34b0bd14e41e4e2944fbcd36aac42f72b1cb3f7a.js.map
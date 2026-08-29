System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, UIOpacity, BasicDisplayContainer, ShareBg, Orientation, SpineController, GameState, AudioManager, SOUND_TYPE, SoundList, AudioSourceList, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, SP_ANI_ID_IDLE, SP_ANI_ID_CONNECT, FG_BkgController;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasicDisplayContainer(extras) {
    _reporterNs.report("BasicDisplayContainer", "./IBG_Ani", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShareBg(extras) {
    _reporterNs.report("ShareBg", "./ShareBg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../../../../../Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "../../../MyUtils/AnimationSystem/Components/SpineController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../../DefinitionGameData/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniCtrlPropDef(extras) {
    _reporterNs.report("AniCtrlPropDef", "../../../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSOUND_TYPE(extras) {
    _reporterNs.report("SOUND_TYPE", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../../../DefinitionGameData/SoundList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioSourceList(extras) {
    _reporterNs.report("AudioSourceList", "../../../DefinitionGameData/SoundList", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      BasicDisplayContainer = _unresolved_2.BasicDisplayContainer;
    }, function (_unresolved_3) {
      ShareBg = _unresolved_3.ShareBg;
    }, function (_unresolved_4) {
      Orientation = _unresolved_4.Orientation;
    }, function (_unresolved_5) {
      SpineController = _unresolved_5.SpineController;
    }, function (_unresolved_6) {
      GameState = _unresolved_6.GameState;
    }, function (_unresolved_7) {
      AudioManager = _unresolved_7.AudioManager;
      SOUND_TYPE = _unresolved_7.SOUND_TYPE;
    }, function (_unresolved_8) {
      SoundList = _unresolved_8.SoundList;
      AudioSourceList = _unresolved_8.AudioSourceList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ede9d+z1/dMlplpP4xr5rGU", "FG_BkgController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sp', 'Game', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);
      SP_ANI_ID_IDLE = 'FG_idle';
      SP_ANI_ID_CONNECT = 'FG_connect';

      _export("FG_BkgController", FG_BkgController = (_dec = ccclass('FG_BkgController'), _dec2 = property({
        type: Node,
        visible: true,
        displayName: 'itemSpPortraitNode',
        tooltip: '直版FG,spine動畫的Node'
      }), _dec3 = property({
        type: _crd && ShareBg === void 0 ? (_reportPossibleCrUseOfShareBg({
          error: Error()
        }), ShareBg) : ShareBg,
        visible: true,
        displayName: 'shareBg',
        tooltip: '共用背景'
      }), _dec4 = property({
        type: Node,
        visible: true,
        displayName: 'shareBgNode',
        tooltip: '共用背景的容器'
      }), _dec(_class = (_class2 = class FG_BkgController extends (_crd && BasicDisplayContainer === void 0 ? (_reportPossibleCrUseOfBasicDisplayContainer({
        error: Error()
      }), BasicDisplayContainer) : BasicDisplayContainer) {
        constructor() {
          super(...arguments);

          /**
           * 這裡在FG01/02分別在不同的node裡面,所以要搬到不同的node上面
           * (FG1/2共用這個spine控制器)
           */
          _initializerDefineProperty(this, "_itemSpPortraitNode", _descriptor, this);

          _initializerDefineProperty(this, "_shareBg", _descriptor2, this);

          _initializerDefineProperty(this, "_shareBgContainer", _descriptor3, this);

          this._spPortrait = null;
          this._dirtyFlag = false;
        }

        set camp(value) {
          this._camp = value;

          if (this._shareBg) {
            this._shareBg.camp = value;
          }
        } //--這邊只做一次啟動的動作


        onLoad() {
          if (!this._dirtyFlag) {
            super.onLoad();
          }
        }

        init() {
          if (!this._dirtyFlag) {
            this._dirtyFlag = true;
            super.init();
            this._spPortrait = this._itemSpPortraitNode.getComponent(_crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
              error: Error()
            }), SpineController) : SpineController);

            this._spPortrait.init();
          }
        }

        getAndRemoveShareBg() {
          var shareTarget = this._shareBg;
          shareTarget.stopAllAni();

          this._shareBgContainer.removeChild(this._shareBg.node); //this._shareBg.node.removeFromParent();


          console.log();
          this._shareBg = null;
          this._shareBgContainer.active = false;
          return shareTarget;
        }

        setShareBg(shareBg) {
          this._shareBg = shareBg;

          this._shareBgContainer.addChild(shareBg.node);

          shareBg.node.setPosition(0, 0, 0);
          this._shareBgContainer.active = true;
        }

        cleanAniState() {
          this._spPortrait.forceToStopAniByEmpty(); //-走setEmptyAnimation


          this._itemSpPortraitNode.getComponent(UIOpacity).opacity = 0;
        } //--showAniController呼叫(每次startSpin時呼叫)


        resetAniState() {
          if (this._gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            this._spPortrait.playAni(SP_ANI_ID_IDLE);
          }
        } //-reSetBkgContainerAni


        cleanBGAniAfterFG() {
          //this.clearTracks();
          //this.forceToStopBgAni();
          this.stopAllAni();
        }

        forceToStopBgAni() {
          if (this._shareBg) {
            this._shareBg.stopAllAni();
          }
        }

        playAni(value) {
          if (value) {
            if (this._shareBg) {
              this._shareBg.playAni(value);
            }
          } else {
            this.changeRotationResolution(this._gameRotationResolution);
          }
        } //--showContainerController呼叫的(關閉顯示conitainer)


        stopAllAni() {
          //super.stopAllAni();//--沒有勾選afterDrop根本不會停止
          //this.forceToStopAni();
          this.forceToStopBgAni();
          this.cleanAniState();
        }

        playWinAni() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this._gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).FREE_GAME && _this._spPortrait) {
              if (_this._itemSpPortraitNode.getComponent(UIOpacity).opacity == 255) {
                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).instance.playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                  error: Error()
                }), SoundList) : SoundList).AlibabaWin, (_crd && SOUND_TYPE === void 0 ? (_reportPossibleCrUseOfSOUND_TYPE({
                  error: Error()
                }), SOUND_TYPE) : SOUND_TYPE).ONE_SHOT, (_crd && AudioSourceList === void 0 ? (_reportPossibleCrUseOfAudioSourceList({
                  error: Error()
                }), AudioSourceList) : AudioSourceList).BtnAS);
              }

              yield _this._spPortrait.playAniInPromise(SP_ANI_ID_CONNECT);

              _this._spPortrait.playAni(SP_ANI_ID_IDLE);
            }
          })();
        }

        startFgAndInitPlaySpPortrait() {
          if (this._gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            var _this$_spPortrait;

            (_this$_spPortrait = this._spPortrait) == null || _this$_spPortrait.playAni(SP_ANI_ID_IDLE);
          } else {
            if (this._spPortrait && this._itemSpPortraitNode) {
              this._spPortrait.forceToStopAniByEmpty(); //-走setEmptyAnimation


              this._itemSpPortraitNode.getComponent(UIOpacity).opacity = 0;
            }
          }
        }

        getSpPortraitPlayState() {
          var playData = this._spPortrait.getCurrentSpineAniData();

          if (playData) {
            return playData.targetName;
          }

          return '';
        } //--iwindow呼叫的(resize)


        changeRotationResolution(value) {
          this._gameRotationResolution = value;

          if (this.node.active) {
            if (this._shareBg) {
              this._shareBg.changeRotationResolution(value);
            }

            this.checkRotationResolution(); //--舊版本使用的要想一下這個要怎麼換

            /*
            if (!this._thieves) {
                this.checkRotationResolution();
            }*/
          }

          this.otherRotationResolutionProcess(value);
        } //--showContainerController呼叫的(轉場進FG)


        checkRotationResolution() {
          if (this._gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            if (this._gameRotationResolution == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
              error: Error()
            }), Orientation) : Orientation).Landscape) {
              this._itemSpPortraitNode.getComponent(UIOpacity).opacity = 0;
            } else if (this._gameRotationResolution == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
              error: Error()
            }), Orientation) : Orientation).Portrait) {
              this._itemSpPortraitNode.getComponent(UIOpacity).opacity = 255;
            }
          } else {
            this._spPortrait.forceToStopAniByEmpty(); //-走setEmptyAnimation


            this._itemSpPortraitNode.getComponent(UIOpacity).opacity = 0;
          }
        }

        otherRotationResolutionProcess(value) {
          if (value == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            this.changeToLandscape();
          } else {
            this.changeToPortrait();
          }
        }

        moveTargetTo(target, container) {
          if (!target || !container) return;
          target.removeFromParent(); // 強制脫離當前 parent

          container.addChild(target);
          target.setPosition(0, 0, 0);
        }

        changeToLandscape() {
          //--很確定裡面只會裝一個才這樣寫的
          var target = this.portrait[0].children[0] || this.landscape[0].children[0];

          if (target) {
            var landscapeNode = this.landscape[0];
            var portraitNode = this.portrait[0];
            landscapeNode.active = this._camp == 0 ? true : false;
            portraitNode.active = false;
            this.moveTargetTo(target, landscapeNode);
          }
        }

        changeToPortrait() {
          var target = this.portrait[0].children[0] || this.landscape[0].children[0];

          if (target) {
            var landscapeNode = this.landscape[0];
            var portraitNode = this.portrait[0];
            portraitNode.active = this._camp == 0 ? true : false;
            landscapeNode.active = false;
            this.moveTargetTo(target, portraitNode);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_itemSpPortraitNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_shareBg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_shareBgContainer", [_dec4], {
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
//# sourceMappingURL=5d32e8a4dd5c245dadfe55daa1aef7300638b1bd.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, tween, UIOpacity, JpDigiAniNumber, JpAniController, JpSoundController, WinType, GameUtils, IWindowResize, GameState, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, JpShowController;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfJpDigiAniNumber(extras) {
    _reporterNs.report("JpDigiAniNumber", "./Component/JpDigiAniNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJpAniController(extras) {
    _reporterNs.report("JpAniController", "./Component/JpAniController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJpSoundController(extras) {
    _reporterNs.report("JpSoundController", "./Component/JpSoundController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinType(extras) {
    _reporterNs.report("WinType", "db://assets/Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../MyUtils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../../../../Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWindowResize(extras) {
    _reporterNs.report("IWindowResize", "db://assets/Scripts/Utils/IWindowResize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../DefinitionGameData/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
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
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      JpDigiAniNumber = _unresolved_2.JpDigiAniNumber;
    }, function (_unresolved_3) {
      JpAniController = _unresolved_3.JpAniController;
    }, function (_unresolved_4) {
      JpSoundController = _unresolved_4.JpSoundController;
    }, function (_unresolved_5) {
      WinType = _unresolved_5.WinType;
    }, function (_unresolved_6) {
      GameUtils = _unresolved_6.GameUtils;
    }, function (_unresolved_7) {
      IWindowResize = _unresolved_7.IWindowResize;
    }, function (_unresolved_8) {
      GameState = _unresolved_8.GameState;
    }, function (_unresolved_9) {
      AudioManager = _unresolved_9.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "943daYjp89Ml7V+ZQ+Xhmys", "JpShowController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'UIOpacity', 'AudioSource', 'AudioClip', 'input', 'Input', 'randomRangeInt']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JpShowController", JpShowController = (_dec = ccclass('JpShowController'), _dec2 = property({
        type: _crd && JpDigiAniNumber === void 0 ? (_reportPossibleCrUseOfJpDigiAniNumber({
          error: Error()
        }), JpDigiAniNumber) : JpDigiAniNumber,
        visible: true,
        displayName: 'JP數字顯示',
        tooltip: 'JP數字顯示'
      }), _dec3 = property({
        type: _crd && JpAniController === void 0 ? (_reportPossibleCrUseOfJpAniController({
          error: Error()
        }), JpAniController) : JpAniController,
        visible: true,
        displayName: 'JP動畫控制',
        tooltip: 'JP動畫'
      }), _dec4 = property({
        type: UIOpacity,
        visible: true,
        displayName: 'JP動畫控制UIOpacity',
        tooltip: 'JP動畫'
      }), _dec5 = property({
        type: Node,
        visible: true,
        displayName: 'blockSensor',
        tooltip: '點擊空白處感應區'
      }), _dec6 = property({
        type: _crd && JpSoundController === void 0 ? (_reportPossibleCrUseOfJpSoundController({
          error: Error()
        }), JpSoundController) : JpSoundController,
        visible: true,
        displayName: 'JP音效控制器',
        tooltip: 'JP音樂'
      }), _dec(_class = (_class2 = class JpShowController extends (_crd && IWindowResize === void 0 ? (_reportPossibleCrUseOfIWindowResize({
        error: Error()
      }), IWindowResize) : IWindowResize) {
        constructor() {
          var _this;

          super(...arguments);
          _this = this;

          _initializerDefineProperty(this, "_jpDigiAniNumber", _descriptor, this);

          _initializerDefineProperty(this, "_jpAniController", _descriptor2, this);

          _initializerDefineProperty(this, "_jpUIOpacity", _descriptor3, this);

          _initializerDefineProperty(this, "_blockSensor", _descriptor4, this);

          _initializerDefineProperty(this, "_jpSoundController", _descriptor5, this);

          //---音效控制
          this._currentGameState = void 0;
          this._currentCampData = void 0;
          //--NG模式=-1
          this._musicFadeOutComplete = null;
          // 音樂淡出完成的回調函式
          this._screenRotationResolution = null;
          this._onlyOnceFlag = false;
          //---結尾聲用的(因為動畫與公版的聲音對不起來)
          this._resolvePromise = void 0;

          this.onScoreRunEnd = isClickEnd => {
            if (isClickEnd) {
              this._jpSoundController.stopSound();
            }

            if (!this._onlyOnceFlag) {
              this._onlyOnceFlag = true; //---只播放一次

              this._jpSoundController.playSoundEnd(isClickEnd);
            }
          };

          //--20250613--先取消,因為不知道怎麼處理這些持續的聲音
          this.blockBtnClickHandler = /*#__PURE__*/_asyncToGenerator(function* () {
            if (_this._blockSensor.hasEventListener(Node.EventType.TOUCH_END, _this.blockBtnClickHandler)) {
              _this._blockSensor.off(Node.EventType.TOUCH_END, _this.blockBtnClickHandler);
            }

            _this._jpDigiAniNumber.checkFinishWinScoreShow(); //--true


            _this.onScoreRunEnd(true);

            _this.fadeInOrOutBGMusic(0); //--fade in
            //await GameUtils.Defer(2000); // 等待2秒鐘,讓數字顯示完畢


            yield (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).DeferByTweenPromise(2000 / 1000); // 等待2秒鐘,讓數字顯示完畢

            yield _this.fadeOut();

            _this.finishAndRemove();
          });
        }

        // promise resolve 函式
        onLoad() {//要補keyboard事件
          //input.on(Input.EventType.KEY_PRESSING, this.onKeyDownOrPressing, this);
          //input.on(Input.EventType.KEY_DOWN, this.onKeyDownOrPressing, this);
        }
        /**
         * 因為該死的美術+企劃,搞出了JP動畫有直橫版的不同,如果在播動畫的時候,又要改變方向,會導致動畫錯誤
         * 為了要能夠接上來讓視覺合理化的smooth過渡,所以這邊同時播兩個直版/橫版的動畫,再去開關UIOpacity
         * PS-
         * 1.用這個方法的前提是,兩個動畫的時間長度要一樣,不然會導致動畫不同步
         * 2.不能使用active來開關,他會在active=true的時候,才會開始播放動畫
         * @param orientation 螢幕方向
         * @returns 
         */


        onWindowResize(orientation) {
          if (this._screenRotationResolution !== orientation) {
            var _this$_jpAniControlle;

            this._screenRotationResolution = orientation;
            (_this$_jpAniControlle = this._jpAniController) == null || _this$_jpAniControlle.changeScreenRotationResolution(orientation);
          }
        }

        init() {
          this._jpDigiAniNumber.init();

          this._jpAniController.init();

          this.node.active = false;
          this._currentGameState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL;
          this._currentCampData = -1;
        }

        changeGameMode(gameState, camp) {
          this._currentGameState = gameState;
          this._currentCampData = camp;
        }

        showJPWin(odds, totalBet) {
          var _this2 = this;

          return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
            _this2._resolvePromise = resolve;
            _this2._onlyOnceFlag = false; //---重置結尾聲

            var type = (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
              error: Error()
            }), WinType) : WinType).BigWin;

            if (odds >= 25 && odds <= 50) {
              type = (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
                error: Error()
              }), WinType) : WinType).BigWin;
            } else if (odds > 50 && odds <= 100) {
              type = (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
                error: Error()
              }), WinType) : WinType).SuperWin;
            } else if (odds > 100 && odds <= 200) {
              type = (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
                error: Error()
              }), WinType) : WinType).MegaWin;
            } else if (odds > 200) {
              type = (_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
                error: Error()
              }), WinType) : WinType).EpicWin;
            } else {
              //Debug.LogError(`錯誤倍數 ${odds}`)
              _this2.finishAndRemove();
            } //--20250613--修改為5S跑分 2秒停留


            _this2._blockSensor.on(Node.EventType.TOUCH_END, _this2.blockBtnClickHandler);

            _this2.node.active = true;
            var totalScore = (odds * totalBet).fixed();

            _this2._jpAniController.playJPAnimation(type);

            _this2._jpSoundController.playJPSound(type); //--播放音效


            _this2.fadeInOrOutBGMusic(1); //--fade out
            //console.log(`@@跑分開始@@顯示時間: ${t1}ms`);
            //--PS因為背景音樂的結尾那一聲約落在4S左右


            yield _this2._jpDigiAniNumber.showJpDigiAniNumber(totalScore); //---4sec--20250613
            //let t2 = Date.now();
            //console.log(`@@跑分結束@@顯示時間: ${t2}ms`);
            //console.log(`@@跑分開始~數字結束@@持續時間: ${t2 - t1}ms`);

            /**
                會往下走一定是false,不然就不會return promise了
             * 
             * <播放音效>
             * -false代表完整播放結束
             */

            _this2.fadeInOrOutBGMusic(0); //--fade in


            _this2.onScoreRunEnd(false); //await GameUtils.Defer(2000);


            yield (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).DeferByTweenPromise(2000 / 1000); //--原本單位是毫秒現在換算成秒
            //let t3 = Date.now();
            //console.log(`@@跑分停留結束@@顯示時間: ${t3}ms`);
            //console.log(`@@跑分停留~結束@@持續時間: ${t3 - t2}ms`);

            yield _this2.fadeOut();

            _this2.finishAndRemove();
          }));
        } //--0=fadeIn, 1=fadeOut


        fadeInOrOutBGMusic(value) {
          var startVolume = value == 0 ? 0 : 1;
          var endVolume = value == 0 ? 1 : 0;
          this._musicFadeOutComplete = null;

          if (value == 1) {
            //--fade out
            this._musicFadeOutComplete = () => {
              //---ready
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).instance.pauseMusic();
              this._musicFadeOutComplete = null;
            };
          } else {
            //-fade in
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.resumeMusic();
          }

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.fadeMusicVolume(startVolume, endVolume, 0.5, this._musicFadeOutComplete);
        }

        fadeOutFinish() {
          this._jpAniController.closeAndStop();

          this._jpDigiAniNumber.stopJpDigiAniNumber();
        }

        finishAndRemove() {
          if (this._blockSensor.hasEventListener(Node.EventType.TOUCH_END, this.blockBtnClickHandler)) {
            this._blockSensor.off(Node.EventType.TOUCH_END, this.blockBtnClickHandler);
          }

          if (this._resolvePromise) {
            this._resolvePromise();

            this._resolvePromise = undefined;
          }

          this.node.active = false;

          if (this._jpUIOpacity) {
            this._jpUIOpacity.opacity = 255;
          }

          this._musicFadeOutComplete = null;
        }

        fadeOut() {
          return new Promise((resolve, reject) => {
            var uiOpacity = this._jpUIOpacity;

            if (uiOpacity) {
              tween(uiOpacity).to(0.33, {
                opacity: 0
              }, {
                easing: 'fade'
              }).call(() => {
                this.fadeOutFinish();
                resolve();
              }).start();
            } else {
              resolve();
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_jpDigiAniNumber", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_jpAniController", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_jpUIOpacity", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_blockSensor", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_jpSoundController", [_dec6], {
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
//# sourceMappingURL=658aeed343cde1f1df98d9d74a65f319717ada49.js.map
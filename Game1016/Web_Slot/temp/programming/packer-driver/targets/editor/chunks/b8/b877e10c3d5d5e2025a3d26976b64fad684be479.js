System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, Node, BasicJpUIBoard, JpDigitsAniNumber, WinType, JpSoundController, AudioManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, DEBUG_LOG_TITLE, ccclass, property, SIGNAL_KEY, BasicJPShowWinCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasicJpUIBoard(extras) {
    _reporterNs.report("BasicJpUIBoard", "./components/BasicJpUIBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJpDigitsAniNumber(extras) {
    _reporterNs.report("JpDigitsAniNumber", "./components/JpDigitsAniNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinType(extras) {
    _reporterNs.report("WinType", "./Definitions/ShowWinDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJpSoundController(extras) {
    _reporterNs.report("JpSoundController", "./components/JpSoundController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIJpInterruptTime(extras) {
    _reporterNs.report("IJpInterruptTime", "./Definitions/ShowWinDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BasicJpUIBoard = _unresolved_2.BasicJpUIBoard;
    }, function (_unresolved_3) {
      JpDigitsAniNumber = _unresolved_3.JpDigitsAniNumber;
    }, function (_unresolved_4) {
      WinType = _unresolved_4.WinType;
    }, function (_unresolved_5) {
      JpSoundController = _unresolved_5.JpSoundController;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9dd58pXx/JM3608zIWVjyAm", "BasicJPShowWinCtrl", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'CCInteger', 'Component', 'Game', 'Node']); //import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';


      DEBUG_LOG_TITLE = 'BasicJPShowWinCtrl';
      ({
        ccclass,
        property
      } = _decorator);
      SIGNAL_KEY = 'JPSHOW_SIGNAL';

      _export("BasicJPShowWinCtrl", BasicJPShowWinCtrl = (_dec = ccclass('BasicJPShowWinCtrl'), _dec2 = property({
        type: _crd && BasicJpUIBoard === void 0 ? (_reportPossibleCrUseOfBasicJpUIBoard({
          error: Error()
        }), BasicJpUIBoard) : BasicJpUIBoard,
        visible: true,
        displayName: '大獎顯示BigWin',
        tooltip: '大獎顯示BasicJpUIBoard'
      }), _dec3 = property({
        type: _crd && BasicJpUIBoard === void 0 ? (_reportPossibleCrUseOfBasicJpUIBoard({
          error: Error()
        }), BasicJpUIBoard) : BasicJpUIBoard,
        visible: true,
        displayName: '大獎顯示SuperWin',
        tooltip: '大獎顯示BasicJpUIBoard'
      }), _dec4 = property({
        type: _crd && BasicJpUIBoard === void 0 ? (_reportPossibleCrUseOfBasicJpUIBoard({
          error: Error()
        }), BasicJpUIBoard) : BasicJpUIBoard,
        visible: true,
        displayName: '大獎顯示EpicWin',
        tooltip: '大獎顯示BasicJpUIBoard'
      }), _dec5 = property({
        type: _crd && BasicJpUIBoard === void 0 ? (_reportPossibleCrUseOfBasicJpUIBoard({
          error: Error()
        }), BasicJpUIBoard) : BasicJpUIBoard,
        visible: true,
        displayName: '大獎顯示MegaWin',
        tooltip: '大獎顯示BasicJpUIBoard'
      }), _dec6 = property({
        type: _crd && JpDigitsAniNumber === void 0 ? (_reportPossibleCrUseOfJpDigitsAniNumber({
          error: Error()
        }), JpDigitsAniNumber) : JpDigitsAniNumber,
        visible: true,
        displayName: 'JP數字顯示',
        tooltip: 'JP數字顯示'
      }), _dec7 = property({
        type: _crd && JpSoundController === void 0 ? (_reportPossibleCrUseOfJpSoundController({
          error: Error()
        }), JpSoundController) : JpSoundController,
        visible: true,
        displayName: 'JP音效控制器',
        tooltip: 'JP音樂'
      }), _dec8 = property({
        type: Node,
        visible: true,
        displayName: 'blockSensor',
        tooltip: '點擊空白處感應區'
      }), _dec9 = property({
        type: CCFloat,
        visible: true,
        displayName: 'winScore duringTime',
        tooltip: '跑分動畫持續時間'
      }), _dec10 = property({
        type: CCFloat,
        visible: true,
        displayName: 'winAniLoop duringTime',
        tooltip: '進場後面板持續時間'
      }), _dec(_class = (_class2 = class BasicJPShowWinCtrl extends Component {
        // 標記第一次點擊是否被中斷
        set frameEventCallBack(value) {
          this._frameEventCallBack = value;
        }

        constructor() {
          super();

          _initializerDefineProperty(this, "_bigWin", _descriptor, this);

          _initializerDefineProperty(this, "_superWin", _descriptor2, this);

          _initializerDefineProperty(this, "_epicWin", _descriptor3, this);

          _initializerDefineProperty(this, "_megaWin", _descriptor4, this);

          _initializerDefineProperty(this, "_jpDigitsAniNumber", _descriptor5, this);

          _initializerDefineProperty(this, "_jpSoundController", _descriptor6, this);

          //---音效控制
          _initializerDefineProperty(this, "_blockSensor", _descriptor7, this);

          _initializerDefineProperty(this, "_winScoreDuringTime", _descriptor8, this);

          //--預設跑分動畫持續時間
          _initializerDefineProperty(this, "_winAniLoopDuringTime", _descriptor9, this);

          //--預設進場後動畫轉換持續時間
          this._currentJpType = null;
          this._currentJpBoard = null;
          this._onlyOnceFlag = false;
          //---結尾聲用的(因為動畫與公版的聲音對不起來)
          this._musicFadeOutComplete = null;
          // 音樂淡出完成的回調函式
          this._resolvePromise = void 0;
          // (非同步,主要靠這個resolve來讓外面的流程繼續)
          this._mapJpTypeToBoard = new Map();
          this._dirtyFlag = false;
          this._frameEventCallBack = null;
          //--給可能需要用到frame event的子類別用的
          //protected _gameStepDelayTimeList: BasicGameStepDelayTime;
          this._startTime = 0;
          //protected _canInterruptTime: number = 0;//--可以被阻斷的時間
          //private _async: AsyncScope;
          //--紀錄每個類型的中斷時間資料
          this._interruptTimeData = void 0;
          this._isInterrupted = false;
          // 中斷檢查
          this._isProcessingClick = false;
          // 防止重入的旗標
          this._firstClickAborted = false;

          this.blockBtnClickHandler = async () => {
            var _this$_interruptTimeD;

            const currentTime = Date.now() - this._startTime;

            const canInterruptTime = (_this$_interruptTimeD = this._interruptTimeData.get(this._currentJpType)) == null ? void 0 : _this$_interruptTimeD.canInterruptTime; // === 步骤 1: 检查是否可以被中断 ===

            if (currentTime < canInterruptTime) {
              /*
              GameUtilsTools.debugLog(DEBUG_LOG_TITLE, '[Click] Too early, ignored', {
                  currentTime,
                  canInterruptTime
              });*/
              return;
            } // === 步骤 2: 获取当前板子状态 ===


            const boardState = {
              isGoIn: this._currentJpBoard.isGoIn,
              isInLoop: this._currentJpBoard.isInLoop,
              isInLoopStage: this._currentJpBoard.isInLoopStage,
              isClosing: this._currentJpBoard.isClosing
            }; //GameUtilsTools.debugLog(DEBUG_LOG_TITLE, '[Click] Current state', boardState);
            // === 步骤 3: 如果已经在关闭中，忽略点击 ===

            if (boardState.isClosing) {
              //GameUtilsTools.debugLog(DEBUG_LOG_TITLE, '[Click] Already closing, ignored');
              return;
            } // === 步骤 4: 判断是第一次还是第二次点击 ===


            const isSecondClick = boardState.isInLoop && boardState.isInLoopStage;

            if (isSecondClick) {
              // ========== 第二次点击：Loop 等待期间点击，立即中断 ==========
              //GameUtilsTools.debugLog(DEBUG_LOG_TITLE, '[Click] Second click - Force interrupt Loop');
              //  标记第一次点击被中止
              this._firstClickAborted = true; // 移除监听器（不需要第三次点击了）

              if (this._blockSensor.hasEventListener(Node.EventType.TOUCH_END, this.blockBtnClickHandler)) {
                this._blockSensor.off(Node.EventType.TOUCH_END, this.blockBtnClickHandler);
              } // 直接调用板子的点击处理（会中断 Loop 等待，播放 Out）


              await this.processAniOnClick();
              this.fadeOutFinish();
              this.finishAndRemove();
              return;
            } // ========== 第一次点击：In 阶段或跑分期间点击 ==========
            // 防止第一次点击重入


            if (this._isProcessingClick) {
              //GameUtilsTools.debugLog(DEBUG_LOG_TITLE, '[Click] First click already processing, ignored');
              return;
            }

            this._isProcessingClick = true;
            this._firstClickAborted = false; // 🆕 重置中止标记

            try {
              //GameUtilsTools.debugLog(DEBUG_LOG_TITLE, '[Click] First click - Enter Loop Stage');
              // 标记流程被中断
              this._isInterrupted = true; // 强制结束跑分

              this._jpDigitsAniNumber.showFinishWinScore(); // 结束音效


              this.onScoreRunEnd(true); // 恢复背景音乐

              this.fadeInOrOutBGMusic(0); // 处理板子动画（会进入 Loop 等待阶段）
              // 注意：这里会 await，在等待期间用户可以第二次点击

              await this.processAniOnClick(); // 检查是否被第二次点击中止

              if (this._firstClickAborted) {
                //GameUtilsTools.debugLog(DEBUG_LOG_TITLE, '[Click] First click aborted by second click');
                return; // 被中止，跳过后续清理
              } // 如果没有被中止，执行正常的清理流程


              if (this._blockSensor.hasEventListener(Node.EventType.TOUCH_END, this.blockBtnClickHandler)) {
                this._blockSensor.off(Node.EventType.TOUCH_END, this.blockBtnClickHandler);
              }

              this.fadeOutFinish();
              this.finishAndRemove();
            } finally {
              // 重置处理标记
              this._isProcessingClick = false;
            }
          };

          this.onScoreRunEnd = isClickEnd => {
            if (isClickEnd) {
              var _this$_jpSoundControl;

              (_this$_jpSoundControl = this._jpSoundController) == null || _this$_jpSoundControl.stopSound();
            }

            if (!this._onlyOnceFlag) {
              var _this$_jpSoundControl2;

              this._onlyOnceFlag = true; //---只播放一次

              (_this$_jpSoundControl2 = this._jpSoundController) == null || _this$_jpSoundControl2.playSoundEnd(isClickEnd);
            }
          };
        }

        onLoad() {
          if (this._dirtyFlag) return;
          this._dirtyFlag = true;
          this.init();
        }

        start() {
          var _this$_bigWin, _this$_superWin, _this$_epicWin, _this$_megaWin;

          (_this$_bigWin = this._bigWin) == null || _this$_bigWin.init();
          (_this$_superWin = this._superWin) == null || _this$_superWin.init();
          (_this$_epicWin = this._epicWin) == null || _this$_epicWin.init();
          (_this$_megaWin = this._megaWin) == null || _this$_megaWin.init();

          this._mapJpTypeToBoard.set((_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
            error: Error()
          }), WinType) : WinType).BigWin, this._bigWin);

          this._mapJpTypeToBoard.set((_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
            error: Error()
          }), WinType) : WinType).SuperWin, this._superWin);

          this._mapJpTypeToBoard.set((_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
            error: Error()
          }), WinType) : WinType).EpicWin, this._epicWin);

          this._mapJpTypeToBoard.set((_crd && WinType === void 0 ? (_reportPossibleCrUseOfWinType({
            error: Error()
          }), WinType) : WinType).MegaWin, this._megaWin);

          this._bigWin.node.active = false;
          this._superWin.node.active = false;
          this._epicWin.node.active = false;
          this._megaWin.node.active = false;
          this.node.active = false;
          this.node.parent.active = false;
        } //--這邊改成外部注入-todo-20251023
        //--override it


        register(...args) {//this._async = AsyncScope.getInstance();
        }

        init() {
          if (!this._dirtyFlag) return;
        }

        reset() {
          this._currentJpType = null;
          this._currentJpBoard = null;
          this._onlyOnceFlag = false;
          this._resolvePromise = undefined;
          this._isInterrupted = false;
          this._firstClickAborted = false;

          if (this._bigWin.node) {
            this._bigWin.node.active = false;
          }

          if (this._epicWin.node) {
            this._epicWin.node.active = false;
          }

          if (this._megaWin.node) {
            this._megaWin.node.active = false;
          }

          if (this._superWin.node) {
            this._superWin.node.active = false;
          }

          this.node.active = false;
          this.node.parent.active = false;
          this._startTime = 0;
        }

        async showJPWin(odds, totalBet) {
          this._startTime = Date.now(); //--記錄開始時間(阻斷的時候會需要用到)

          return new Promise(async (resolve, reject) => {
            var _this$_interruptTimeD2, _this$_interruptTimeD3, _this$_interruptTimeD4, _this$_blockSensor;

            this.reset();
            this.node.active = true;
            this.node.parent.active = true;
            this._resolvePromise = resolve;
            this._onlyOnceFlag = false; //---重置結尾聲

            this._isInterrupted = false;
            this._firstClickAborted = false;
            this._currentJpType = this.getJpType(odds);

            if (this._currentJpType === null) {
              //GameUtilsTools.debugLog(DEBUG_LOG_TITLE, 'showJPWin', { odds, totalBet });
              return;
            }

            this._currentJpBoard = this._mapJpTypeToBoard.get(this._currentJpType);
            this._currentJpBoard.jackpotLoopDuration = (_this$_interruptTimeD2 = this._interruptTimeData.get(this._currentJpType)) == null ? void 0 : _this$_interruptTimeD2.loopDurationTime;
            this._currentJpBoard.fastLoopDuration = (_this$_interruptTimeD3 = this._interruptTimeData.get(this._currentJpType)) == null ? void 0 : _this$_interruptTimeD3.fastLoopDuration;
            this._jpDigitsAniNumber.duration = (_this$_interruptTimeD4 = this._interruptTimeData.get(this._currentJpType)) == null ? void 0 : _this$_interruptTimeD4.runDurationTime;
            this.addFrameEventCallBack(); //this._currentJpBoard.node.active = true;
            //--流程-4.8S跑分 2秒停留Loop

            (_this$_blockSensor = this._blockSensor) == null || _this$_blockSensor.on(Node.EventType.TOUCH_END, this.blockBtnClickHandler);
            const totalScore = (odds * totalBet).fixed(); //====step1 進場動畫+播放音效===============================

            this.processBoardIn(); //--播放動畫

            this.processPlayJPSound(); //--播放音效

            this.fadeInOrOutBGMusic(1); //--fade out
            //====step2 跑分動畫========================================

            await this.processRunScoreLabel(totalScore); //--檢查中斷

            if (this._isInterrupted) {
              //GameUtilsTools.debugLog(DEBUG_LOG_TITLE, '[showJPWin] Interrupted after runScore');
              return;
            } //====step3 wait loop========================================


            const loopDurationTime = this._currentJpBoard.jackpotLoopDuration;
            await this._currentJpBoard.waitLoopDuration(loopDurationTime);

            if (this._isInterrupted) {
              //GameUtilsTools.debugLog(DEBUG_LOG_TITLE, '[showJPWin] Interrupted during loopDuration');
              return;
            } //====step4 out and end process========================================


            this.fadeInOrOutBGMusic(0); //--fade in

            this.onScoreRunEnd(false);
            await this.processBoardGoLoopAndClose();
            this.fadeOutFinish();
            this.finishAndRemove();
          });
        } //-中斷目前的流程


        interruptProcess() {} //--override it


        addFrameEventCallBack() {} //-override it(要把要跑的label傳進去)


        async processRunScoreLabel(value) {
          await this._jpDigitsAniNumber.showJpDigitsAniNumber(value);
        }

        getJpType(odds) {
          let type = null;

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
          }

          return type;
        }

        finishAndRemove() {
          var _this$_currentJpBoard;

          if (this._blockSensor.hasEventListener(Node.EventType.TOUCH_END, this.blockBtnClickHandler)) {
            this._blockSensor.off(Node.EventType.TOUCH_END, this.blockBtnClickHandler);
          }

          if (this._resolvePromise) {
            this._resolvePromise();

            this._resolvePromise = undefined;
          }

          (_this$_currentJpBoard = this._currentJpBoard) == null || _this$_currentJpBoard.goBackToDefault();
          /*
          if (this._jpUIOpacity) {
              this._jpUIOpacity.opacity = 255;
          }*/

          this._musicFadeOutComplete = null;
          this.reset();
        }

        fadeOutFinish() {
          //this._jpAniController.closeAndStop();
          this._jpDigitsAniNumber.stopJpDigitsAniNumber();
        } //=============================<處理動畫相關程序>================================================================================
        //--override it


        async processBoardOut() {
          await this._currentJpBoard.forceOutBoard(); //this.fadeOutFinish();
        } //--override it


        processBoardIn() {
          return Promise.resolve();
        }

        async processBoardGoLoopAndClose() {
          await this._currentJpBoard.goLoopAndClose();
        }

        async processAniOnClick() {
          await this._currentJpBoard.onClickForceOutJpAni();
        } //=============================<處理聲音相關程序>================================================================================
        //--override it


        processPlayJPSound() {
          var _this$_jpSoundControl3;

          (_this$_jpSoundControl3 = this._jpSoundController) == null || _this$_jpSoundControl3.playJPSound(this._currentJpType); //--播放音效
        }

        //--0=fadeIn, 1=fadeOut
        fadeInOrOutBGMusic(value) {
          const startVolume = value == 0 ? 0 : 1;
          const endVolume = value == 0 ? 1 : 0;
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_bigWin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_superWin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_epicWin", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_megaWin", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_jpDigitsAniNumber", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_jpSoundController", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_blockSensor", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_winScoreDuringTime", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 4.8;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_winAniLoopDuringTime", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2.0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b877e10c3d5d5e2025a3d26976b64fad684be479.js.map
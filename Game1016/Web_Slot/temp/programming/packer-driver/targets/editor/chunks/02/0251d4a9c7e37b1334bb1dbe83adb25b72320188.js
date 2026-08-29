System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, _decorator, Node, AnimationController, GameGlobalKeys, GameUtilsTools, GlobalAccessReader, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ANIMATION_SCORE_TYPE, DEFAULT_ANI_TIME, WinScore;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAnimationController(extras) {
    _reporterNs.report("AnimationController", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobalKeys(extras) {
    _reporterNs.report("GameGlobalKeys", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtilsTools(extras) {
    _reporterNs.report("GameUtilsTools", "../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalAccessReader(extras) {
    _reporterNs.report("GlobalAccessReader", "../../DefinitionGameData1016/AccessDefs/GlobalAccess", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Label = _cc.Label;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      AnimationController = _unresolved_2.AnimationController;
      GameGlobalKeys = _unresolved_2.GameGlobalKeys;
      GameUtilsTools = _unresolved_2.GameUtilsTools;
    }, function (_unresolved_3) {
      GlobalAccessReader = _unresolved_3.GlobalAccessReader;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56d49m0NzJDCLe+bxetL4k+", "WinScore", undefined);

      __checkObsolete__(['Component', 'Label', '_decorator', 'Node', 'Game']);

      ({
        ccclass,
        property
      } = _decorator);
      ANIMATION_SCORE_TYPE = {
        In: 'In',
        Out: 'Out',
        Loop: 'Loop',
        Default: 'Default'
      };
      DEFAULT_ANI_TIME = 0.33; // 預設動畫時間

      _export("WinScore", WinScore = (_dec = ccclass('WinScore'), _dec2 = property({
        type: Node,
        visible: true,
        displayName: "WinScoreNode",
        tooltip: "裝得分動畫labelNode"
      }), _dec3 = property({
        type: _crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
          error: Error()
        }), AnimationController) : AnimationController,
        visible: true,
        displayName: "WinScoreAnimationController",
        tooltip: "得分動畫控制器"
      }), _dec(_class = (_class2 = class WinScore extends Component {
        /**
         * in 0.33s
         * out 0.33s
         */
        get currentScore() {
          return this._currentScore;
        }

        set canceling(value) {
          this._canceling = value;
        }

        constructor() {
          super();

          _initializerDefineProperty(this, "_winScoreLabelNode", _descriptor, this);

          _initializerDefineProperty(this, "_winScoreAniController", _descriptor2, this);

          this._finishResolvePromise = void 0;
          // promise resolve 函式(stop使用)
          this._winScoreLabel = null;
          this._dirtyFirstOnLoad = false;
          this._currentScore = 0;
          // 當前分數
          this._isForceStopped = false;
          this._status = '';
          this._canceling = false;
          this._mapAniTimeData = void 0;
        }

        test1() {
          this.showFinalScoreIn(1000);
        }

        onLoad() {
          if (this._dirtyFirstOnLoad) return;
          this._dirtyFirstOnLoad = true;
          this.init();
        }

        init() {
          if (!this._dirtyFirstOnLoad) return;
          this._winScoreLabel = this._winScoreLabelNode.getComponent(Label);

          if (!this._winScoreLabel) {
            console.error("WinScoreNode must have a Label component");
          }

          this.setScoreLabel(0); // 初始化分數顯示為0

          this._winScoreAniController.init();

          this._isForceStopped = false;
        }

        register() {
          const timeDataList = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
            error: Error()
          }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
            error: Error()
          }), GameGlobalKeys) : GameGlobalKeys).DelayTimeList);

          if (!this._mapAniTimeData) {
            this._mapAniTimeData = new Map([[ANIMATION_SCORE_TYPE.In, timeDataList.get(cfg => {
              var _cfg$score;

              return (_cfg$score = cfg.score) == null ? void 0 : _cfg$score.in;
            })], [ANIMATION_SCORE_TYPE.Out, timeDataList.get(cfg => {
              var _cfg$score2;

              return (_cfg$score2 = cfg.score) == null ? void 0 : _cfg$score2.out;
            })], [ANIMATION_SCORE_TYPE.Loop, timeDataList.get(cfg => {
              var _cfg$score3;

              return (_cfg$score3 = cfg.score) == null ? void 0 : _cfg$score3.loop;
            })]]);
          } else {
            this._mapAniTimeData.set(ANIMATION_SCORE_TYPE.In, timeDataList.get(cfg => {
              var _cfg$score4;

              return (_cfg$score4 = cfg.score) == null ? void 0 : _cfg$score4.in;
            }));

            this._mapAniTimeData.set(ANIMATION_SCORE_TYPE.Out, timeDataList.get(cfg => {
              var _cfg$score5;

              return (_cfg$score5 = cfg.score) == null ? void 0 : _cfg$score5.out;
            }));

            this._mapAniTimeData.set(ANIMATION_SCORE_TYPE.Loop, timeDataList.get(cfg => {
              var _cfg$score6;

              return (_cfg$score6 = cfg.score) == null ? void 0 : _cfg$score6.loop;
            }));
          }
        }

        reset() {
          this.setScoreLabel(0);
          this._isForceStopped = false;
        }

        setScoreLabel(value) {
          this._currentScore = value;
          this._winScoreLabel.string = value.numberComma();
        } //---停止更新--(new Round開始前清除輪播系統)


        stopToDefault() {
          this._isForceStopped = true;

          this._winScoreAniController.stopAni();

          this.safeResolveFinishPromise();
        }

        resetStatus() {
          this._status = ANIMATION_SCORE_TYPE.Default;
        }

        forceGoDefaultAndReset() {
          this.safeResolveFinishPromise();
          this._isForceStopped = true;
          this.forceToDefault();
          this.resetStatus();
          this.reset();
        }

        async showFinalScoreIn(finalScore) {
          if (this._isForceStopped) return;

          if (this._finishResolvePromise) {
            this.safeResolveFinishPromise();
            this.forceToDefault();
          }

          this._status = ANIMATION_SCORE_TYPE.In;
          return new Promise(async resolve => {
            var _this$_mapAniTimeData;

            this._finishResolvePromise = resolve;
            this.setScoreLabel(finalScore);
            this.node.active = true;
            const aniTime = (_this$_mapAniTimeData = this._mapAniTimeData.get(ANIMATION_SCORE_TYPE.In)) != null ? _this$_mapAniTimeData : DEFAULT_ANI_TIME; // 預設動畫時間

            this._winScoreAniController.changeSpeedWithAep({
              aniState: ANIMATION_SCORE_TYPE.In
            }, aniTime);

            await this._winScoreAniController.playAniInPromise({
              aniState: ANIMATION_SCORE_TYPE.In
            });
            this._status = ANIMATION_SCORE_TYPE.Loop;
            this.safeResolveFinishPromise();
          });
        } //--退場


        async showFinalScoreOut() {
          if (this._isForceStopped) return; //--沒用到

          if (this._canceling) {
            this.cancelAniAndResolve();
            return;
          } //--沒用到


          if (this._finishResolvePromise) {
            this.safeResolveFinishPromise();
            this.forceToDefault();
          }

          this._status = ANIMATION_SCORE_TYPE.Out;
          return new Promise(async resolve => {
            var _this$_mapAniTimeData2;

            this._finishResolvePromise = resolve;
            this.node.active = true;
            const aniTime = (_this$_mapAniTimeData2 = this._mapAniTimeData.get(ANIMATION_SCORE_TYPE.Out)) != null ? _this$_mapAniTimeData2 : DEFAULT_ANI_TIME; // 預設動畫時間

            this._winScoreAniController.changeSpeedWithAep({
              aniState: ANIMATION_SCORE_TYPE.Out
            }, aniTime);

            await this._winScoreAniController.playAniInPromise({
              aniState: ANIMATION_SCORE_TYPE.Out
            });
            this._status = ANIMATION_SCORE_TYPE.Default;
            this.safeResolveFinishPromise();
          });
        }

        async processAbortCancel() {
          if (this._status === ANIMATION_SCORE_TYPE.Default) return; //const gameState = GlobalAccessReader.getGlobalData(GameGlobalKeys.GameState);

          if (this._status === ANIMATION_SCORE_TYPE.In) {
            this._finishResolvePromise = null;

            this._winScoreAniController.gotoPlayLastFrame();

            const wait = (_crd && GameUtilsTools === void 0 ? (_reportPossibleCrUseOfGameUtilsTools({
              error: Error()
            }), GameUtilsTools) : GameUtilsTools).DeferByTweenPromiseWithCancel(0.2);
            await wait.promise;
            await this.showFinalScoreOut();
          } else if (this._status === ANIMATION_SCORE_TYPE.Loop) {
            this._finishResolvePromise = null;
            await this.showFinalScoreOut();
          } else if (this._status === ANIMATION_SCORE_TYPE.Out) {
            //--已經在退場中--
            this._status = ANIMATION_SCORE_TYPE.Default;
            this.cancelAniAndResolve();
            this._finishResolvePromise = null;
          }
        }

        forceToDefault() {
          this._winScoreAniController.goBackToDefault();
        } //--20251020 強制到最後一幀


        forceToLastFrame() {
          this._winScoreAniController.gotoPlayLastFrame();
        } //--20251020 強制取消動畫並結束promise


        cancelAniAndResolve() {
          this.cleanPreviousAni();
          this.safeResolveFinishPromise();
        }

        cleanPreviousAni() {
          this._isForceStopped = true;

          this._winScoreAniController.goBackToDefault();

          this.node.active = false; // 隱藏節點

          this.setScoreLabel(0); // 重置分數顯示
        }

        safeResolveFinishPromise() {
          if (this._finishResolvePromise) {
            this._finishResolvePromise();

            this._finishResolvePromise = undefined; //this.cleanPreviousAni();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_winScoreLabelNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_winScoreAniController", [_dec3], {
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
//# sourceMappingURL=0251d4a9c7e37b1334bb1dbe83adb25b72320188.js.map
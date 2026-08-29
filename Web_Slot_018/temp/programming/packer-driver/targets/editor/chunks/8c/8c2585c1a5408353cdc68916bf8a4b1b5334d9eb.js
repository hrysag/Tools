System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Tween, tween, UIOpacity, v3, SpineController, AniCtrlPropDef, GameUtils, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, WinScore;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "../../MyUtils/AnimationSystem/Components/SpineController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniCtrlPropDef(extras) {
    _reporterNs.report("AniCtrlPropDef", "../../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
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
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      Tween = _cc.Tween;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      SpineController = _unresolved_2.SpineController;
    }, function (_unresolved_3) {
      AniCtrlPropDef = _unresolved_3.AniCtrlPropDef;
    }, function (_unresolved_4) {
      GameUtils = _unresolved_4.GameUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c6ecJCmWtIG4qHfYAkp4s7", "WinScore", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Game', 'Label', 'Node', 'Tween', 'tween', 'UIOpacity', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WinScore", WinScore = (_dec = ccclass('WinScore'), _dec2 = property({
        type: Node,
        visible: true,
        displayName: 'winScoreLabelNode',
        tooltip: '裝得分動畫labelNode'
      }), _dec3 = property({
        type: _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
          error: Error()
        }), SpineController) : SpineController,
        visible: true,
        displayName: 'AniSpine',
        tooltip: '得分顯示動畫spine控制器'
      }), _dec(_class = (_class2 = class WinScore extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_winScoreLabelNode", _descriptor, this);

          _initializerDefineProperty(this, "_aniSpine", _descriptor2, this);

          this._winScoreLabel = null;
          this._finishResolvePromise = void 0;
          // promise resolve 函式(stop使用)
          this._delayTweenCancel = void 0;
          // 延遲動畫取消函式
          this._isTweening = false;
          //--真的有夠啦嘰的居然沒有這種通用屬性在tween裡面
          this._currentScore = 0;

          this.callBackForSpineEnd = () => {
            let spineComponentNode = this._aniSpine.spine;
            spineComponentNode.node.active = false;
          };
        }

        // 當前分數
        get currentScore() {
          return this._currentScore;
        }

        onLoad() {}

        init() {
          const playData = new (_crd && AniCtrlPropDef === void 0 ? (_reportPossibleCrUseOfAniCtrlPropDef({
            error: Error()
          }), AniCtrlPropDef) : AniCtrlPropDef)();
          playData.targetName = 'score';
          playData.loop = false;
          playData.timeScale = 1;

          this._aniSpine.setAniDataInfo(playData); //this._aniSpine.setKeyFrameEvent('score', this.spineFreeBackKeyFrameEvtHandler);//--沒用到


          this._winScoreLabel = this._winScoreLabelNode.getComponent(Label);
          this._winScoreLabel.string = '0';
          this.node.active = false;
          this._currentScore = 0;
        }

        async showFinalScoreInAndOut(finalScore) {
          return new Promise(async (resolve, reject) => {
            this.node.active = true;
            this._finishResolvePromise = resolve;
            this.setScoreLabel(finalScore);

            this._aniSpine.playAniInPromise('score');

            await this.scoreLabelTweenFadeIn(); //await GameUtils.Defer(1000);
            //await GameUtils.DeferByTweenPromise(1000 / 1000); // 使用定義的延遲常數，將毫秒轉換為秒

            const delay = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).DeferByTweenPromiseWithCancel(1000 / 1000);
            this._delayTweenCancel = delay.cancel;
            await delay.promise; // 等待延遲完成

            this._delayTweenCancel = null; // 清掉

            await this.scoreLabelTweenFadeOut();
            this.safeResolveFinishPromise();
          });
        }

        async showFinalScoreIn(finalScore) {
          return new Promise(async (resolve, reject) => {
            this._currentScore = finalScore;
            this.node.active = true;
            this._finishResolvePromise = resolve;
            this.setScoreLabel(finalScore);

            this._aniSpine.playAniInPromise('score');

            await this.scoreLabelTweenFadeIn();
            this.safeResolveFinishPromise();
          });
        }

        onlyCloseFinalScoreOut() {
          this._winScoreLabelNode.getComponent(UIOpacity).opacity = 0;
        }

        async showFinalScoreOut() {
          return new Promise(async (resolve, reject) => {
            this.node.active = true;
            this._finishResolvePromise = resolve;
            await this.scoreLabelTweenFadeOut();
            this.safeResolveFinishPromise();
          });
        }

        async stopWinScoreAni() {
          if (this.node.active) {
            if (this._delayTweenCancel) {
              this._delayTweenCancel(); //--強制終止 GameUtils.DeferByTweenPromiseWithCancel


              this._delayTweenCancel = undefined;
            }

            if (this._aniSpine.isPlaying) {
              this._aniSpine.stopPromiseAni(); //--直接去強制執行spine的promise resolve,並且清空


              this._aniSpine.resetSpinePoseData();
            }

            this.resetSocketNode();
            this._winScoreLabel.string = '';
            this._currentScore = 0;
            this.node.active = false;
            this.safeResolveFinishPromise();
          }
        }

        resetSocketNode() {
          if (this._isTweening) {
            this._isTweening = false;
            Tween.stopAllByTag(1);
          }

          this._winScoreLabelNode.setPosition(0, 0, 0);

          this._winScoreLabelNode.setScale(v3(1, 1, 1));

          this._winScoreLabelNode.setRotationFromEuler(0, 0, 0);

          this._winScoreLabelNode.getComponent(UIOpacity).opacity = 0;
        }

        setScoreLabel(value) {
          this._currentScore = value;
          this._winScoreLabel.string = value.numberComma();
        }

        safeResolveFinishPromise() {
          if (this._finishResolvePromise) {
            this._finishResolvePromise();

            this._finishResolvePromise = undefined;
          }
        }
        /**
        * 數字fnt_WinScore
        * 事件score
        *  0~0.13秒，透明度0到255
           1~1.16秒，透明度255到0
           PS-根本沒用到美術提供的事件
        */

        /*
           private spineFreeBackKeyFrameEvtHandler = (...args) => {
            if (args[0] == 'score') {
                //--do something 
            }
        }*/


        async playOpacityTweenAni() {
          await this.scoreLabelTweenFadeIn(); //await GameUtils.Defer(1000);

          await (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).DeferByTweenPromise(1000 / 1000);
          await this.scoreLabelTweenFadeOut();

          if (this._finishResolvePromise) {
            this._finishResolvePromise();

            this._finishResolvePromise = undefined;
          }
        }

        async scoreLabelTweenFadeIn() {
          this._isTweening = true;
          return new Promise((resolve, reject) => {
            tween(this._winScoreLabelNode.getComponent(UIOpacity)) //.by(0.8, { scale: v3(0.14, 0.14, 0) }, { easing: 'elasticOut' })
            .to(0.13, {
              opacity: 255
            }, {
              easing: 'linear'
            }).call(() => {
              this._isTweening = false;
              resolve();
            }).tag(1).start();
          });
        }

        async scoreLabelTweenFadeOut() {
          this._isTweening = true;
          return new Promise((resolve, reject) => {
            tween(this._winScoreLabelNode.getComponent(UIOpacity)) //.by(0.8, { scale: v3(0.14, 0.14, 0) }, { easing: 'elasticOut' })
            .to(0.16, {
              opacity: 0
            }, {
              easing: 'linear'
            }).call(() => {
              this._isTweening = false;
              resolve();
            }).tag(1).start();
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_winScoreLabelNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_aniSpine", [_dec3], {
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
//# sourceMappingURL=8c2585c1a5408353cdc68916bf8a4b1b5334d9eb.js.map
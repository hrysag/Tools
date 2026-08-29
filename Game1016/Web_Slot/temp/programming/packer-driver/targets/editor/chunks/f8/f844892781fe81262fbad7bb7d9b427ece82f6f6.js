System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, RunTimeData, ScoreViewExample, UniSlotMachine, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, SlotMachineExample;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfReelViewExample(extras) {
    _reporterNs.report("ReelViewExample", "./ReelViewExample", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRunTimeData(extras) {
    _reporterNs.report("RunTimeData", "./DataSetting/RunTimeData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelSettingData(extras) {
    _reporterNs.report("ReelSettingData", "./DataSetting/ReelSettingData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScoreViewExample(extras) {
    _reporterNs.report("ScoreViewExample", "./ScoreViewExample", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniSlotMachine(extras) {
    _reporterNs.report("UniSlotMachine", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      RunTimeData = _unresolved_2.RunTimeData;
    }, function (_unresolved_3) {
      ScoreViewExample = _unresolved_3.ScoreViewExample;
    }, function (_unresolved_4) {
      UniSlotMachine = _unresolved_4.UniSlotMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "80c7abb/adGLqNHN6kGahOG", "SlotMachineExample", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'game']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SlotMachineExample", SlotMachineExample = (_dec = ccclass('SlotMachineExample'), _dec2 = property(_crd && ScoreViewExample === void 0 ? (_reportPossibleCrUseOfScoreViewExample({
        error: Error()
      }), ScoreViewExample) : ScoreViewExample), _dec(_class = (_class2 = class SlotMachineExample extends (_crd && UniSlotMachine === void 0 ? (_reportPossibleCrUseOfUniSlotMachine({
        error: Error()
      }), UniSlotMachine) : UniSlotMachine) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "scoreView", _descriptor, this);

          this.inStandByAnim = false;
          this.countTimeResolve = null;
          this.reelData = null;
        }

        init() {
          super.init();
          this.reelData = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance.reelData;
        }

        update(deltaTime) {
          if (this.reelData) {
            this._normalRollTime = this.reelData.normalRollTime;
            this._fastRollTime = this.reelData.turboRollTime;
          }
        }

        setReadyHandList(readyHandReelIDList) {
          this._reelView.setReadyHandList(readyHandReelIDList);
        }

        showScore(finalScore) {
          return this.scoreView.showScore(finalScore);
        }

        async playIconWin(winIconPos) {
          await this._reelView.playIconWin(winIconPos);
        }

        async playStandByAnim(winIconPos2D, symbolOdds) {
          this.inStandByAnim = true;

          for (let index = 0; index < winIconPos2D.length; index++) {
            if (!this.inStandByAnim) {
              break;
            }

            const line = winIconPos2D[index];

            this._reelView.playStandbyIconWin(line);

            if ((_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
              error: Error()
            }), RunTimeData) : RunTimeData).instance.processData.readyHandAnimAndRunScore) {
              this.scoreView.showScore(symbolOdds[index]);
            }

            await this.delay((_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
              error: Error()
            }), RunTimeData) : RunTimeData).instance.processData.standbySpaceTime);

            if (index === winIconPos2D.length - 1) {
              index = -1;
            }
          }
        }

        delay(time) {
          return new Promise(resolve => {
            this.countTimeResolve = resolve;
            this.scheduleOnce(() => {
              resolve();
            }, time);
          });
        }

        reset() {
          var _this$countTimeResolv;

          super.reset();
          this.inStandByAnim = false;

          this._reelView.stopPlayWin();

          this.scoreView.hideScore();
          (_this$countTimeResolv = this.countTimeResolve) == null || _this$countTimeResolv.call(this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scoreView", [_dec2], {
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
//# sourceMappingURL=f844892781fe81262fbad7bb7d9b427ece82f6f6.js.map
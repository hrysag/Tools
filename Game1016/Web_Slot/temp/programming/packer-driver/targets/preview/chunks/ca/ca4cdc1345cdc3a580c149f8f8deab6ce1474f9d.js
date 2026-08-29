System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, SlotMachineExample, RunTimeData, FakeServerExample, GameController, GenericUIManager, ShowWin, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, GameControllerExample;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSlotMachineExample(extras) {
    _reporterNs.report("SlotMachineExample", "./SlotMachineExample", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRunTimeData(extras) {
    _reporterNs.report("RunTimeData", "./DataSetting/RunTimeData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfControllerSettingData(extras) {
    _reporterNs.report("ControllerSettingData", "./DataSetting/ControllerSettingData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProcessSettingData(extras) {
    _reporterNs.report("ProcessSettingData", "./DataSetting/ProcessSettingData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFakeDataExample(extras) {
    _reporterNs.report("FakeDataExample", "./FakeServerExample", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFakeServerExample(extras) {
    _reporterNs.report("FakeServerExample", "./FakeServerExample", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMode(extras) {
    _reporterNs.report("GameMode", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericUIManager(extras) {
    _reporterNs.report("GenericUIManager", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowWin(extras) {
    _reporterNs.report("ShowWin", "../../Scripts/ModuleEntry", _context.meta, extras);
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
    }, function (_unresolved_2) {
      SlotMachineExample = _unresolved_2.SlotMachineExample;
    }, function (_unresolved_3) {
      RunTimeData = _unresolved_3.RunTimeData;
    }, function (_unresolved_4) {
      FakeServerExample = _unresolved_4.FakeServerExample;
    }, function (_unresolved_5) {
      GameController = _unresolved_5.GameController;
      GenericUIManager = _unresolved_5.GenericUIManager;
      ShowWin = _unresolved_5.ShowWin;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a4932zNw1lHfb/aNbipyxdz", "GameControllerExample", undefined);

      __checkObsolete__(['_decorator', 'CCFloat']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameControllerExample", GameControllerExample = (_dec = ccclass('GameControllerExample'), _dec2 = property({
        type: _crd && SlotMachineExample === void 0 ? (_reportPossibleCrUseOfSlotMachineExample({
          error: Error()
        }), SlotMachineExample) : SlotMachineExample
      }), _dec3 = property(_crd && ShowWin === void 0 ? (_reportPossibleCrUseOfShowWin({
        error: Error()
      }), ShowWin) : ShowWin), _dec4 = property(CCFloat), _dec(_class = (_class2 = class GameControllerExample extends (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "slotMachine", _descriptor, this);

          _initializerDefineProperty(this, "specialWin", _descriptor2, this);

          _initializerDefineProperty(this, "serverDelayTime", _descriptor3, this);

          this.roundData = null;
          this.controllerSetting = null;
          this.processSetting = null;
          this.fakeServer = new (_crd && FakeServerExample === void 0 ? (_reportPossibleCrUseOfFakeServerExample({
            error: Error()
          }), FakeServerExample) : FakeServerExample)();
        }

        init(gameMode, isOnline) {
          super.init(gameMode, isOnline);
          this.fakeServer.init();
          this.controllerSetting = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance.controllerData;
          this.processSetting = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance.processData;
          this.slotMachine.init();
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.onStopBtnClickCallback = this.onStopBtnClick.bind(this);
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setTwoLevelTurboMode(true);
        }

        onStartSpin() {
          super.onStartSpin();
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.resetMainUIStopBtn();
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.showBottomTextIdle();
          this.startSpinPerformance(this.controllerSetting.rollingReelIDs);
        }

        onStartAuto(autoTimes) {
          super.onStartAuto(autoTimes);
          this.autoSpin();
        }

        autoSpin() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if ((_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.checkAutoStatus()) {
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.showBottomTextEmpty();

              _this.startSpinPerformance(_this.controllerSetting.rollingReelIDs);
            } else {
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.setMainUIToNormalMode();
              yield _this.delay(_this.processSetting.runScoreToStandbyTime); //得分接待機動畫

              _this.slotMachine.playStandByAnim(_this.roundData.standbyIconPos, _this.roundData.symbolScores);
            }
          })();
        }

        startSpinPerformance(reelIDs) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.setMainUIToSpinMode();
            _this2.roundData = _this2.fakeServer.createFakeData(reelIDs, _this2.betValue);
            var isTurboMode = (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.isTurboOn;

            _this2.slotMachine.startRoll(isTurboMode, reelIDs);

            yield _this2.delay(_this2.serverDelayTime); // 模擬接收伺服器資料的延遲

            _this2.slotMachine.setReadyHandList(_this2.controllerSetting.readyHandReelList);

            yield _this2.slotMachine.stopRoll(_this2.roundData.resultData);
            (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.forceClickMainUIStopBtn();

            if (_this2.roundData.winIconPos.length > 0) {
              yield _this2.winPerformance(_this2.roundData);
            }

            if ((_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.isAutoMode) {
              var awaitTime = (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.isTurboOn ? _this2.processSetting.turboRoundSpaceTime : _this2.processSetting.normalRoundSpaceTime;
              yield _this2.delay(awaitTime); //自動模式局間間隔
            }

            _this2.autoSpin();
          })();
        }

        winPerformance(fakeData) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var awaitTime = (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
              error: Error()
            }), GenericUIManager) : GenericUIManager).instance.isTurboOn ? _this3.processSetting.turboStopToPlayWinTime : _this3.processSetting.normalStopToPlayWinTime;
            yield _this3.delay(awaitTime); //滾輪停止接中獎動畫

            if (_this3.processSetting.winAnimAndRunScore && !_this3.controllerSetting.forceBigWin) {
              _this3.slotMachine.playIconWin(fakeData.winIconPos);
            } else {
              yield _this3.slotMachine.playIconWin(fakeData.winIconPos);
              yield _this3.delay(_this3.processSetting.winAnimToScoreTime); //中獎動畫接得分
            }

            var score = (_this3.betValue * fakeData.totalOdd).fixed();

            if (_this3.controllerSetting.forceBigWin) {
              yield _this3.specialWin.showSpecialWin(fakeData.totalOdd + 25, _this3.betValue);
              score = (_this3.betValue * (fakeData.totalOdd + 25)).fixed();
              (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                error: Error()
              }), GenericUIManager) : GenericUIManager).instance.showBottomTextWinScore(score);
            } else {
              if (_this3.processSetting.runScoreAndBottomScore) {
                (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                  error: Error()
                }), GenericUIManager) : GenericUIManager).instance.showBottomTextWinScore(score);
                yield _this3.slotMachine.showScore(score);
              } else {
                yield _this3.slotMachine.showScore(score);
                (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
                  error: Error()
                }), GenericUIManager) : GenericUIManager).instance.showBottomTextWinScore(score);
              }
            }
          })();
        }

        onStopBtnClick() {
          this.slotMachine.stopRollCallBack();
        }

        delay(time) {
          return new Promise(resolve => {
            this.scheduleOnce(() => {
              resolve();
            }, time);
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "slotMachine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "specialWin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "serverDelayTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ca4cdc1345cdc3a580c149f8f8deab6ce1474f9d.js.map
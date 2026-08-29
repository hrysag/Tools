System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, GameViewManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GameView018;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIProcessSlotData(extras) {
    _reporterNs.report("IProcessSlotData", "../ServerBackSlotInfoData/ProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicProcessSlotData(extras) {
    _reporterNs.report("BasicProcessSlotData", "../ServerBackSlotInfoData/ProcessSlotData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewManager(extras) {
    _reporterNs.report("GameViewManager", "../GameManager/GameViewManager", _context.meta, extras);
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
    }, function (_unresolved_2) {
      GameViewManager = _unresolved_2.GameViewManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5eb77CrnW9PdIbp2jbHQCZK", "GameView018", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator); //--這個78的裝飾器要在這個常數宣告完再做..不然會噴錯

      _export("GameView018", GameView018 = (_dec = ccclass('GameView018'), _dec2 = property({
        type: _crd && GameViewManager === void 0 ? (_reportPossibleCrUseOfGameViewManager({
          error: Error()
        }), GameViewManager) : GameViewManager,
        visible: true,
        displayName: 'GameViewManager',
        tooltip: '用來控制遊戲中相關表演的管理器'
      }), _dec(_class = (_class2 = class GameView018 extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_gameViewManager", _descriptor, this);

          //private _currentSlotInfo: BasicProcessSlotData;
          this._betValue = 0;
        }

        //private _testFlagCount: number = 0;
        init() {
          this._gameViewManager.init();
        } //---玩家按下spin按鈕(空白按鍵)---


        startSpin(isTurboMode) {
          //--併入gameViewManager
          this._gameViewManager.startSpin(isTurboMode);
        } //---玩家按下stop按鈕---


        onStopBtnClickHandler() {
          this._gameViewManager.onStopBtnClickHandler(); //this.testCall();

        } //---購買FG資格不符合or結束FG,重新開啟按鈕


        reOpenFgBtn() {
          this._gameViewManager.reOpenFgBtn();
        } //---開啟購買FG的介面,需要更新玩家當前的下注額度


        setCurrentBetAndOpenBuyFG(betValue) {
          this._gameViewManager.setCurrentBetAndOpenBuyFG(betValue);
        } //=======<test code for test>=========


        testCall(value) {
          //NotifyCation.getInstance().emitSync(NotifySubject.GAME_VIEW_SUBJECT, 'testHello', { test: 'hello' });

          /*
          let symbolData = [
              [0, 1, 9], [3, 4, 5], [6, 7, 8], [9, 0, 1], [2, 3, 4], [6, 7, 8]
          ]
           this._slotMachineController.stopRoll(symbolData);
          */
          //this._slotMachineController.setGameState(GameState.FREE_GAME, 1);
          //this._showContainerController.changeGameMode(GameState.FREE_GAME, 1);
          //this._gameViewManager.testCall(value);
          this.testCallWithPromise();
          /*
          let rootNode: Node = find('Root', this._testSpineNode);
          let SkeletonNode: Node = rootNode.children[0];
          let componentSkeleton = SkeletonNode.getComponent(SkeletonExtension);
          //--有掛載SkeletonExtension的spine去換語系圖片要摳這個QQ
          componentSkeleton.updateSlotTexture();
           console.log('check_testSpineNode:', componentSkeleton);
          */
        }

        testCallWithPromise(value) {
          var _this = this;

          return _asyncToGenerator(function* () {
            //console.log('finishASYNC', this._spineAniTestComponent, this._animationControllersPoolManager);
            //--需要測試移除推回pool的情況
            yield _this._gameViewManager.testPromiseFunc();
          })();
        } //========<test code for test>=========


        setPlayerBetValue(value) {
          this._betValue = value;

          this._gameViewManager.setPlayerBetValue(value);
        }

        setFGTotalBetForThisRound(value) {
          this._gameViewManager.setPlayerBetValue(value);
        }

        setSeverReceiveData(data) {
          this._gameViewManager.setSeverReceiveData(data);
        } //--空白按鍵判斷使用(當面板開啟時,空白按鍵不能啟動spin)


        getBuyFgPanelIsOpen() {
          return this._gameViewManager.getBuyFgPanelIsOpen();
        }

        setFgState(value) {
          this._gameViewManager.isBuyFG = value;
        } //---滾輪停止---


        stopSpin(slotData) {
          this._gameViewManager.stopSpin(slotData);
        }

        setStartAutoSpinMode(value) {
          this._gameViewManager.isAutoSpinMode = value;
        } //--寫完server新的資料後會呼叫這個方法


        newRoundDataToStopSpin() {
          this._gameViewManager.newRoundDataToStopSpin();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_gameViewManager", [_dec2], {
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
//# sourceMappingURL=0cdb434449aa888dd21507d3ea4d51880e4d33ed.js.map
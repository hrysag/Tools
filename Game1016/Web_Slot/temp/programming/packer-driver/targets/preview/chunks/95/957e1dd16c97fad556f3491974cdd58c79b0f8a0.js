System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "cc/env", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Prefab, Node, UITransform, v3, macro, CCInteger, ReelExample, RunTimeData, GameModeExample, EDITOR_NOT_IN_PREVIEW, SymbolEventType, LayoutType, SymbolNumber, UniReelView, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, executeInEditMode, ReelViewExample;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfReelExample(extras) {
    _reporterNs.report("ReelExample", "./ReelExample", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRunTimeData(extras) {
    _reporterNs.report("RunTimeData", "./DataSetting/RunTimeData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfControllerSettingData(extras) {
    _reporterNs.report("ControllerSettingData", "./DataSetting/ControllerSettingData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameModeExample(extras) {
    _reporterNs.report("GameModeExample", "./DataSetting/ControllerSettingData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelSettingData(extras) {
    _reporterNs.report("ReelSettingData", "./DataSetting/ReelSettingData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconExample(extras) {
    _reporterNs.report("IconExample", "./IconExample", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolEventType(extras) {
    _reporterNs.report("SymbolEventType", "./DataSetting/SymbolEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayoutType(extras) {
    _reporterNs.report("LayoutType", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolNumber(extras) {
    _reporterNs.report("SymbolNumber", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniReelView(extras) {
    _reporterNs.report("UniReelView", "../../Scripts/ModuleEntry", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      macro = _cc.macro;
      CCInteger = _cc.CCInteger;
    }, function (_unresolved_2) {
      ReelExample = _unresolved_2.ReelExample;
    }, function (_unresolved_3) {
      RunTimeData = _unresolved_3.RunTimeData;
    }, function (_unresolved_4) {
      GameModeExample = _unresolved_4.GameModeExample;
    }, function (_ccEnv) {
      EDITOR_NOT_IN_PREVIEW = _ccEnv.EDITOR_NOT_IN_PREVIEW;
    }, function (_unresolved_5) {
      SymbolEventType = _unresolved_5.SymbolEventType;
    }, function (_unresolved_6) {
      LayoutType = _unresolved_6.LayoutType;
      SymbolNumber = _unresolved_6.SymbolNumber;
      UniReelView = _unresolved_6.UniReelView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "370e4L56slCPLtC17SrDdRa", "ReelViewExample", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Prefab', 'Node', 'UITransform', 'v3', 'macro', 'CCInteger']);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);

      _export("ReelViewExample", ReelViewExample = (_dec = ccclass('ReelViewExample'), _dec2 = executeInEditMode(), _dec3 = property(CCInteger), _dec4 = property(CCInteger), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = class ReelViewExample extends (_crd && UniReelView === void 0 ? (_reportPossibleCrUseOfUniReelView({
        error: Error()
      }), UniReelView) : UniReelView) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "spaceLength", _descriptor, this);

          _initializerDefineProperty(this, "readyHandLength", _descriptor2, this);

          _initializerDefineProperty(this, "reelPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "readyHandPrefab", _descriptor4, this);

          _initializerDefineProperty(this, "reelRoot", _descriptor5, this);

          _initializerDefineProperty(this, "readyHandRoot", _descriptor6, this);

          _initializerDefineProperty(this, "topIconRoot", _descriptor7, this);

          this.reelSettingData = null;
          this.controllerData = null;
          this.readyHandList = [];
          this.topIconRootList = [];
          this.scatterIconList = [];
        }

        start() {
          if (EDITOR_NOT_IN_PREVIEW) {
            (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
              error: Error()
            }), RunTimeData) : RunTimeData).instance.addLayoutChangeListener(this.onIsLayoutChange.bind(this));
            this.clearLayout();
          }
        }

        init() {
          this.createLayout();
          this.setReelDataCallback = this.setReelData;
          this.showReadyHandCallback = this.showReadyHand;
          this.hideReadyHandCallback = this.hideReadyHand;
        }

        onIsLayoutChange(isLayout) {
          if (EDITOR_NOT_IN_PREVIEW) {
            if (!isLayout) {
              this.clearLayout();
            } else {
              this.initLayout();
            }
          }
        }

        initLayout() {
          if (EDITOR_NOT_IN_PREVIEW) {
            this.createLayout();
          }
        }

        clearLayout() {
          this.reelSettingData = null;
          this.controllerData = null;
          this.reelRoot.destroyAllChildren();
          this.reelList = [];
          this.readyHandRoot.destroyAllChildren();
          this.readyHandList = [];
          this.topIconRoot.destroyAllChildren();
          this.topIconRootList = [];
        }

        createLayout() {
          this.clearLayout();
          this.reelSettingData = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance.reelData;
          this.controllerData = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance.controllerData;
          this.createReel();
          this.createReadyHand();
          this.createTopIconRoot();
          this.calculateReelLayout();
          this.adaptiveMask();
          super.init();

          for (var reelID = 0; reelID < this.reelList.length; reelID++) {
            this.reelList[reelID].onMoveOnceStart = null;
          }
        }

        setReadyHandList(readyHandReelIDList) {
          for (var index = 0; index < readyHandReelIDList.length; index++) {
            var reelID = readyHandReelIDList[index];

            if (reelID < this.reelAmount) {
              this._reelHaveReadyHandList[reelID] = true;
            }
          }
        }

        stopRoll(resultData, stopType) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var promiseList = [];

            for (var index = 0; index < _this.currentRollingReelIDs.length; index++) {
              var reelID = _this.currentRollingReelIDs[index];

              var promise = _this.stopOneReel(reelID, resultData[reelID], stopType);

              promiseList.push(promise);

              if (_this._reelHaveReadyHandList[reelID] && !_this.isFastModeCallback()) {
                yield _this.awaitReadyHand(promise);
              }
            }

            yield Promise.all(promiseList);

            _this.setAllReelBrightness(false);
          })();
        }

        stopOneReel(reelID, resultData, stopType) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            _this2.setReelDataCallback(reelID, resultData);

            if (_this2.currentRollingReelIDs[0] === reelID) {
              _this2.checkShowReadyHand(reelID);
            }

            yield _this2.reelList[reelID].stopRollAsync(stopType);

            _this2.oneReelRollEnd(reelID);
          })();
        }

        oneReelRollEnd(reelID) {
          super.oneReelRollEnd(reelID);

          var index = this._currentRollingReelIDs.indexOf(reelID);

          if (index + 1 < this.currentRollingReelIDs.length) {
            var nextReelID = this._currentRollingReelIDs[index + 1];
            this.checkShowReadyHand(nextReelID);
          }

          var resultIconList = this.reelList[reelID].getResultIconList();

          for (var _index = 0; _index < resultIconList.length; _index++) {
            var icon = resultIconList[_index];
            var symbolData = this.reelSettingData.symbolDataList[icon.symbol.symbolID];

            if (symbolData.isScatter) {
              icon.node.setParent(this.topIconRootList[reelID], true);
              this.scatterIconList.push(icon);
            }
          }
        }

        reset() {
          super.reset();
          this.topIconToReelRoot();
          this.scatterIconList = [];
        }

        topIconToReelRoot() {
          for (var reelID = 0; reelID < this.topIconRootList.length; reelID++) {
            var children = [...this.topIconRootList[reelID].children];

            for (var index = 0; index < children.length; index++) {
              var node = children[index];
              node.setParent(this.reelList[reelID].node, true);
            }
          }
        }

        fastStopRoll() {
          for (var index = 0; index < this.reelList.length; index++) {
            var reel = this.reelList[index];
            reel.clearRandomData();
          }
        }

        awaitReadyHand(promise) {
          return new Promise(resolve => {
            var callback = () => {
              var noImmediatelyStop = !this.reelSettingData.readyHandImmediatelyStop && this._reelIsReadyHandList.every(v => v === false); //沒有聽牌中也不是立即停止


              if (this.isFastModeCallback()) {
                if (this.reelSettingData.readyHandImmediatelyStop || noImmediatelyStop) {
                  this.unschedule(callback);
                  resolve();
                }
              }
            };

            this.schedule(callback, 0, macro.REPEAT_FOREVER);
            promise.then(() => {
              this.unschedule(callback);
              resolve();
            });
          });
        }

        calculateRandomDataLength(reelID) {
          var needReadyHand = this._reelHaveReadyHandList[reelID];

          var order = this._currentRollingReelIDs.indexOf(reelID);

          var randomDataLength = 0;

          if (needReadyHand) {
            if (reelID - 1 >= 0 && !this._reelHaveReadyHandList[reelID - 1]) {
              randomDataLength = this.readyHandLength + (order - 1) * this.spaceLength;
            } else {
              randomDataLength = this.readyHandLength;
            }
          } else {
            var lastReadyHandIndex = this._reelHaveReadyHandList.slice(0, reelID).lastIndexOf(true);

            var lastReadyHandReelID = lastReadyHandIndex === -1 ? 0 : lastReadyHandIndex;
            randomDataLength = (order - lastReadyHandReelID) * this.spaceLength;
          }

          return randomDataLength;
        }

        update(deltaTime) {
          if (EDITOR_NOT_IN_PREVIEW && this.reelSettingData && this.controllerData) {
            this.startSpaceTime = this.reelSettingData.startSpaceTime;
            this.spaceLength = this.controllerData.gameMode === (_crd && GameModeExample === void 0 ? (_reportPossibleCrUseOfGameModeExample({
              error: Error()
            }), GameModeExample) : GameModeExample).NG ? this.reelSettingData.ngStopDataLength : this.reelSettingData.fgStopDataLength;
            this.readyHandLength = this.reelSettingData.readyHandDataLength;
            this.calculateReelLayout();
            this.adaptiveMask();
            this.readyHandRoot.setPosition(this.node.position);
            this.readyHandRoot.setScale(this.node.scale);
          }
        }

        playIconWin(winIconPos) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var promiseList = [];

            _this3.setAllReelBrightness(true);

            for (var reelID = 0; reelID < winIconPos.length; reelID++) {
              var posList = winIconPos[reelID];

              var resultIconList = _this3.reelList[reelID].getResultIconList();

              for (var index = 0; index < posList.length; index++) {
                var pos = posList[index];
                var icon = resultIconList[pos];
                icon.node.setParent(_this3.topIconRootList[reelID], true);
                icon.setBrightness(false);

                var animName = _this3.getSymbolAnim(icon.symbol.symbolID, (_crd && SymbolEventType === void 0 ? (_reportPossibleCrUseOfSymbolEventType({
                  error: Error()
                }), SymbolEventType) : SymbolEventType).Connect);

                if (animName !== '') {
                  promiseList.push(icon.playAnim(animName));
                }
              }
            }

            yield Promise.all(promiseList);
          })();
        }

        playStandbyIconWin(winIconPos) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var promiseList = [];

            for (var index = 0; index < winIconPos.length; index++) {
              var pos = winIconPos[index];
              var reelID = Math.floor(pos / _this4.reelSettingData.iconAmount);
              var inReelPos = Math.floor(pos % _this4.reelSettingData.iconAmount);

              var icon = _this4.reelList[reelID].getResultIconList()[inReelPos];

              var animName = _this4.getSymbolAnim(icon.symbol.symbolID, (_crd && SymbolEventType === void 0 ? (_reportPossibleCrUseOfSymbolEventType({
                error: Error()
              }), SymbolEventType) : SymbolEventType).Connect);

              if (animName !== '') {
                promiseList.push(icon.playAnim(animName));
              }
            }

            yield Promise.all(promiseList);
          })();
        }

        getSymbolAnim(symbolID, symbolEventType) {
          var symbolData = this.reelSettingData.symbolDataList[symbolID];
          var event = symbolData.eventList.find(event => event.eventType === symbolEventType);

          if (event) {
            return event.animName;
          }

          return '';
        }

        stopPlayWin() {
          for (var index = 0; index < this.reelList.length; index++) {
            this.reelList[index].stopPlayWin();
          }
        }

        setReadyHandBrightness(reelID, isDark) {
          this.setAllReelBrightness(true);
          this.reelList[reelID].setIconBrightness(isDark);
        }

        setAllReelBrightness(isDark) {
          for (var reelID = 0; reelID < this.reelAmount; reelID++) {
            this.reelList[reelID].setIconBrightness(isDark);
          }
        }

        createSymbolData(resultData) {
          var symbolData = [];

          for (var index = 0; index < resultData.length; index++) {
            var symbol = (_crd && SymbolNumber === void 0 ? (_reportPossibleCrUseOfSymbolNumber({
              error: Error()
            }), SymbolNumber) : SymbolNumber).pool.instance();
            symbol.symbolID = resultData[index];
            symbolData.push(symbol);
          }

          return symbolData;
        }

        setReelData(reelID, data) {
          var length = 0;

          if (!this.isFastModeCallback()) {
            length = this.calculateRandomDataLength(reelID); //可以在這裡加隨機資料，實現間隔暫停
          }

          var symbolData = this.createSymbolData(data);
          this.reelList[reelID].setData(symbolData, length);
        }

        showReadyHand(reelID) {
          this.setReadyHandBrightness(reelID, false);

          for (var index = 0; index < reelID; index++) {
            var reel = this.reelList[index];
            reel.onSymbolEvent((_crd && SymbolEventType === void 0 ? (_reportPossibleCrUseOfSymbolEventType({
              error: Error()
            }), SymbolEventType) : SymbolEventType).ReadyHand);
          }

          var readyHandDuration = this.readyHandLength * this.reelList[reelID].moveInterval;
          this.reelList[reelID].showReadyHand(readyHandDuration);
          this.readyHandList[reelID].active = true;
        }

        hideReadyHand(reelID) {
          var nextReelHaveReadyHand = reelID + 1 < this.reelAmount && this._reelHaveReadyHandList[reelID + 1]; //判斷下一輪有沒有聽牌

          if (!nextReelHaveReadyHand || this.isFastModeCallback()) {
            this.setAllReelBrightness(false);

            for (var index = 0; index < reelID; index++) {
              var reel = this.reelList[index];
              reel.onSymbolEvent((_crd && SymbolEventType === void 0 ? (_reportPossibleCrUseOfSymbolEventType({
                error: Error()
              }), SymbolEventType) : SymbolEventType).Default);
            }
          }

          this.readyHandList[reelID].active = false;
        }

        createReel() {
          for (var index = 0; index < this.reelSettingData.reelAmount; index++) {
            var reelNode = instantiate(this.reelPrefab);
            reelNode.setParent(this.reelRoot);
            var reel = reelNode.getComponent(_crd && ReelExample === void 0 ? (_reportPossibleCrUseOfReelExample({
              error: Error()
            }), ReelExample) : ReelExample);
            this.reelList.push(reel);
          }
        }

        calculateReelLayout() {
          var reelAmount = this.reelSettingData.reelAmount;
          var isHorizontal = this.reelSettingData.layoutType === (_crd && LayoutType === void 0 ? (_reportPossibleCrUseOfLayoutType({
            error: Error()
          }), LayoutType) : LayoutType).Horizontal;
          var iconSize = isHorizontal ? this.reelSettingData.iconSize.y : this.reelSettingData.iconSize.x;
          var reelSpacing = this.reelSettingData.reelSpace + iconSize;
          var startPos = Math.floor(reelAmount / 2) * (isHorizontal ? reelSpacing : -reelSpacing);

          if (reelAmount % 2 === 0) {
            startPos += reelSpacing / 2;
          }

          for (var index = 0; index < this.reelList.length; index++) {
            var pos = isHorizontal ? startPos - index * reelSpacing : startPos + index * reelSpacing;
            var reel = this.reelList[index];
            var newPos = isHorizontal ? v3(0, pos, 0) : v3(pos, 0, 0);
            reel.node.setPosition(newPos);
            this.readyHandList[index].setPosition(newPos);
            this.topIconRootList[index].setPosition(newPos);
          }
        }

        createReadyHand() {
          for (var index = 0; index < this.reelList.length; index++) {
            var z = this.reelSettingData.layoutType === (_crd && LayoutType === void 0 ? (_reportPossibleCrUseOfLayoutType({
              error: Error()
            }), LayoutType) : LayoutType).Horizontal ? 90 : 0;
            var readyHandNode = instantiate(this.readyHandPrefab);
            readyHandNode.setParent(this.readyHandRoot);
            readyHandNode.active = false;
            readyHandNode.setRotationFromEuler(v3(0, 0, z));
            this.readyHandList.push(readyHandNode);
          }
        }

        createTopIconRoot() {
          for (var index = 0; index < this.reelList.length; index++) {
            var node = new Node('topIconRoot_' + index);
            node.setParent(this.topIconRoot);
            this.topIconRootList.push(node);
          }
        }

        adaptiveMask() {
          var uiTransform = this.node.getComponent(UITransform);
          uiTransform.width = this.reelSettingData.reelViewSize.x;
          uiTransform.height = this.reelSettingData.reelViewSize.y;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spaceLength", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 4;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "readyHandLength", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 12;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "reelPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "readyHandPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "reelRoot", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "readyHandRoot", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "topIconRoot", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=957e1dd16c97fad556f3491974cdd58c79b0f8a0.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "cc/env", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Prefab, Node, UITransform, v3, macro, CCInteger, ReelExample, RunTimeData, GameModeExample, EDITOR_NOT_IN_PREVIEW, SymbolEventType, LayoutType, SymbolNumber, UniReelView, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, executeInEditMode, ReelViewExample;

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
        constructor(...args) {
          super(...args);

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

          for (let reelID = 0; reelID < this.reelList.length; reelID++) {
            this.reelList[reelID].onMoveOnceStart = null;
          }
        }

        setReadyHandList(readyHandReelIDList) {
          for (let index = 0; index < readyHandReelIDList.length; index++) {
            const reelID = readyHandReelIDList[index];

            if (reelID < this.reelAmount) {
              this._reelHaveReadyHandList[reelID] = true;
            }
          }
        }

        async stopRoll(resultData, stopType) {
          let promiseList = [];

          for (let index = 0; index < this.currentRollingReelIDs.length; index++) {
            let reelID = this.currentRollingReelIDs[index];
            let promise = this.stopOneReel(reelID, resultData[reelID], stopType);
            promiseList.push(promise);

            if (this._reelHaveReadyHandList[reelID] && !this.isFastModeCallback()) {
              await this.awaitReadyHand(promise);
            }
          }

          await Promise.all(promiseList);
          this.setAllReelBrightness(false);
        }

        async stopOneReel(reelID, resultData, stopType) {
          this.setReelDataCallback(reelID, resultData);

          if (this.currentRollingReelIDs[0] === reelID) {
            this.checkShowReadyHand(reelID);
          }

          await this.reelList[reelID].stopRollAsync(stopType);
          this.oneReelRollEnd(reelID);
        }

        oneReelRollEnd(reelID) {
          super.oneReelRollEnd(reelID);

          let index = this._currentRollingReelIDs.indexOf(reelID);

          if (index + 1 < this.currentRollingReelIDs.length) {
            let nextReelID = this._currentRollingReelIDs[index + 1];
            this.checkShowReadyHand(nextReelID);
          }

          let resultIconList = this.reelList[reelID].getResultIconList();

          for (let index = 0; index < resultIconList.length; index++) {
            const icon = resultIconList[index];
            let symbolData = this.reelSettingData.symbolDataList[icon.symbol.symbolID];

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
          for (let reelID = 0; reelID < this.topIconRootList.length; reelID++) {
            const children = [...this.topIconRootList[reelID].children];

            for (let index = 0; index < children.length; index++) {
              const node = children[index];
              node.setParent(this.reelList[reelID].node, true);
            }
          }
        }

        fastStopRoll() {
          for (let index = 0; index < this.reelList.length; index++) {
            const reel = this.reelList[index];
            reel.clearRandomData();
          }
        }

        awaitReadyHand(promise) {
          return new Promise(resolve => {
            let callback = () => {
              let noImmediatelyStop = !this.reelSettingData.readyHandImmediatelyStop && this._reelIsReadyHandList.every(v => v === false); //沒有聽牌中也不是立即停止


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
          let needReadyHand = this._reelHaveReadyHandList[reelID];

          let order = this._currentRollingReelIDs.indexOf(reelID);

          let randomDataLength = 0;

          if (needReadyHand) {
            if (reelID - 1 >= 0 && !this._reelHaveReadyHandList[reelID - 1]) {
              randomDataLength = this.readyHandLength + (order - 1) * this.spaceLength;
            } else {
              randomDataLength = this.readyHandLength;
            }
          } else {
            let lastReadyHandIndex = this._reelHaveReadyHandList.slice(0, reelID).lastIndexOf(true);

            let lastReadyHandReelID = lastReadyHandIndex === -1 ? 0 : lastReadyHandIndex;
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

        async playIconWin(winIconPos) {
          let promiseList = [];
          this.setAllReelBrightness(true);

          for (let reelID = 0; reelID < winIconPos.length; reelID++) {
            const posList = winIconPos[reelID];
            const resultIconList = this.reelList[reelID].getResultIconList();

            for (let index = 0; index < posList.length; index++) {
              const pos = posList[index];
              let icon = resultIconList[pos];
              icon.node.setParent(this.topIconRootList[reelID], true);
              icon.setBrightness(false);
              let animName = this.getSymbolAnim(icon.symbol.symbolID, (_crd && SymbolEventType === void 0 ? (_reportPossibleCrUseOfSymbolEventType({
                error: Error()
              }), SymbolEventType) : SymbolEventType).Connect);

              if (animName !== '') {
                promiseList.push(icon.playAnim(animName));
              }
            }
          }

          await Promise.all(promiseList);
        }

        async playStandbyIconWin(winIconPos) {
          let promiseList = [];

          for (let index = 0; index < winIconPos.length; index++) {
            const pos = winIconPos[index];
            let reelID = Math.floor(pos / this.reelSettingData.iconAmount);
            let inReelPos = Math.floor(pos % this.reelSettingData.iconAmount);
            let icon = this.reelList[reelID].getResultIconList()[inReelPos];
            let animName = this.getSymbolAnim(icon.symbol.symbolID, (_crd && SymbolEventType === void 0 ? (_reportPossibleCrUseOfSymbolEventType({
              error: Error()
            }), SymbolEventType) : SymbolEventType).Connect);

            if (animName !== '') {
              promiseList.push(icon.playAnim(animName));
            }
          }

          await Promise.all(promiseList);
        }

        getSymbolAnim(symbolID, symbolEventType) {
          let symbolData = this.reelSettingData.symbolDataList[symbolID];
          let event = symbolData.eventList.find(event => event.eventType === symbolEventType);

          if (event) {
            return event.animName;
          }

          return '';
        }

        stopPlayWin() {
          for (let index = 0; index < this.reelList.length; index++) {
            this.reelList[index].stopPlayWin();
          }
        }

        setReadyHandBrightness(reelID, isDark) {
          this.setAllReelBrightness(true);
          this.reelList[reelID].setIconBrightness(isDark);
        }

        setAllReelBrightness(isDark) {
          for (let reelID = 0; reelID < this.reelAmount; reelID++) {
            this.reelList[reelID].setIconBrightness(isDark);
          }
        }

        createSymbolData(resultData) {
          let symbolData = [];

          for (let index = 0; index < resultData.length; index++) {
            let symbol = (_crd && SymbolNumber === void 0 ? (_reportPossibleCrUseOfSymbolNumber({
              error: Error()
            }), SymbolNumber) : SymbolNumber).pool.instance();
            symbol.symbolID = resultData[index];
            symbolData.push(symbol);
          }

          return symbolData;
        }

        setReelData(reelID, data) {
          let length = 0;

          if (!this.isFastModeCallback()) {
            length = this.calculateRandomDataLength(reelID); //可以在這裡加隨機資料，實現間隔暫停
          }

          let symbolData = this.createSymbolData(data);
          this.reelList[reelID].setData(symbolData, length);
        }

        showReadyHand(reelID) {
          this.setReadyHandBrightness(reelID, false);

          for (let index = 0; index < reelID; index++) {
            const reel = this.reelList[index];
            reel.onSymbolEvent((_crd && SymbolEventType === void 0 ? (_reportPossibleCrUseOfSymbolEventType({
              error: Error()
            }), SymbolEventType) : SymbolEventType).ReadyHand);
          }

          let readyHandDuration = this.readyHandLength * this.reelList[reelID].moveInterval;
          this.reelList[reelID].showReadyHand(readyHandDuration);
          this.readyHandList[reelID].active = true;
        }

        hideReadyHand(reelID) {
          let nextReelHaveReadyHand = reelID + 1 < this.reelAmount && this._reelHaveReadyHandList[reelID + 1]; //判斷下一輪有沒有聽牌

          if (!nextReelHaveReadyHand || this.isFastModeCallback()) {
            this.setAllReelBrightness(false);

            for (let index = 0; index < reelID; index++) {
              const reel = this.reelList[index];
              reel.onSymbolEvent((_crd && SymbolEventType === void 0 ? (_reportPossibleCrUseOfSymbolEventType({
                error: Error()
              }), SymbolEventType) : SymbolEventType).Default);
            }
          }

          this.readyHandList[reelID].active = false;
        }

        createReel() {
          for (let index = 0; index < this.reelSettingData.reelAmount; index++) {
            let reelNode = instantiate(this.reelPrefab);
            reelNode.setParent(this.reelRoot);
            let reel = reelNode.getComponent(_crd && ReelExample === void 0 ? (_reportPossibleCrUseOfReelExample({
              error: Error()
            }), ReelExample) : ReelExample);
            this.reelList.push(reel);
          }
        }

        calculateReelLayout() {
          let reelAmount = this.reelSettingData.reelAmount;
          let isHorizontal = this.reelSettingData.layoutType === (_crd && LayoutType === void 0 ? (_reportPossibleCrUseOfLayoutType({
            error: Error()
          }), LayoutType) : LayoutType).Horizontal;
          let iconSize = isHorizontal ? this.reelSettingData.iconSize.y : this.reelSettingData.iconSize.x;
          let reelSpacing = this.reelSettingData.reelSpace + iconSize;
          let startPos = Math.floor(reelAmount / 2) * (isHorizontal ? reelSpacing : -reelSpacing);

          if (reelAmount % 2 === 0) {
            startPos += reelSpacing / 2;
          }

          for (let index = 0; index < this.reelList.length; index++) {
            let pos = isHorizontal ? startPos - index * reelSpacing : startPos + index * reelSpacing;
            const reel = this.reelList[index];
            let newPos = isHorizontal ? v3(0, pos, 0) : v3(pos, 0, 0);
            reel.node.setPosition(newPos);
            this.readyHandList[index].setPosition(newPos);
            this.topIconRootList[index].setPosition(newPos);
          }
        }

        createReadyHand() {
          for (let index = 0; index < this.reelList.length; index++) {
            let z = this.reelSettingData.layoutType === (_crd && LayoutType === void 0 ? (_reportPossibleCrUseOfLayoutType({
              error: Error()
            }), LayoutType) : LayoutType).Horizontal ? 90 : 0;
            let readyHandNode = instantiate(this.readyHandPrefab);
            readyHandNode.setParent(this.readyHandRoot);
            readyHandNode.active = false;
            readyHandNode.setRotationFromEuler(v3(0, 0, z));
            this.readyHandList.push(readyHandNode);
          }
        }

        createTopIconRoot() {
          for (let index = 0; index < this.reelList.length; index++) {
            let node = new Node('topIconRoot_' + index);
            node.setParent(this.topIconRoot);
            this.topIconRootList.push(node);
          }
        }

        adaptiveMask() {
          let uiTransform = this.node.getComponent(UITransform);
          uiTransform.width = this.reelSettingData.reelViewSize.x;
          uiTransform.height = this.reelSettingData.reelViewSize.y;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spaceLength", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 4;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "readyHandLength", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 12;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "reelPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "readyHandPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "reelRoot", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "readyHandRoot", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "topIconRoot", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=957e1dd16c97fad556f3491974cdd58c79b0f8a0.js.map
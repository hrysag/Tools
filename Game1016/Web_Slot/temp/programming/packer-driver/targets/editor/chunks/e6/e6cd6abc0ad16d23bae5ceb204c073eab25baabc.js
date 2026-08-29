System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, Node, RoundMoveData, DropMode, DropState, ComponentExt, PrefabList, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, DropReelView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDropReel(extras) {
    _reporterNs.report("DropReel", "./DropReel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameIcon(extras) {
    _reporterNs.report("GameIcon", "../GameIcon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconMoveData(extras) {
    _reporterNs.report("IconMoveData", "./DropReelDataStructure", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoundMoveData(extras) {
    _reporterNs.report("RoundMoveData", "./DropReelDataStructure", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropMode(extras) {
    _reporterNs.report("DropMode", "../Model/DropReel/DropReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropState(extras) {
    _reporterNs.report("DropState", "../Model/DropReel/DropReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentExt(extras) {
    _reporterNs.report("ComponentExt", "db://assets/Scripts/Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabList(extras) {
    _reporterNs.report("PrefabList", "db://assets/Scripts/Utils/Core", _context.meta, extras);
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
      RoundMoveData = _unresolved_2.RoundMoveData;
    }, function (_unresolved_3) {
      DropMode = _unresolved_3.DropMode;
      DropState = _unresolved_3.DropState;
    }, function (_unresolved_4) {
      ComponentExt = _unresolved_4.ComponentExt;
      PrefabList = _unresolved_4.PrefabList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "42017gd+hlB+7GX5paaWo01", "DropReelView", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DropReelView", DropReelView = (_dec = ccclass('DropReelView'), _dec2 = property({
        type: Node,
        visible: true,
        tooltip: 'icon元件root'
      }), _dec3 = property({
        type: _crd && PrefabList === void 0 ? (_reportPossibleCrUseOfPrefabList({
          error: Error()
        }), PrefabList) : PrefabList,
        visible: true,
        tooltip: 'icon元件列表'
      }), _dec4 = property({
        type: Node,
        visible: true,
        tooltip: '滾輪列表'
      }), _dec5 = property({
        type: CCFloat,
        min: 0.02,
        visible: true,
        tooltip: '滾輪掉落時間間格'
      }), _dec6 = property({
        visible: true,
        tooltip: '將Icon重新命名為GameIcon[reelID][iconID]'
      }), _dec(_class = (_class2 = class DropReelView extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_iconRoot", _descriptor, this);

          _initializerDefineProperty(this, "_iconPrefabList", _descriptor2, this);

          _initializerDefineProperty(this, "_reelNodeList", _descriptor3, this);

          _initializerDefineProperty(this, "_delayReelDropTime", _descriptor4, this);

          _initializerDefineProperty(this, "_debugRenameIcon", _descriptor5, this);

          this.showReadyHand = null;
          this.hideReadyHand = null;
          this._reels = [];
          this._nodeComponentMap = new Map();
          this._resultSymbolData = [];
          this._roundMoveData = new (_crd && RoundMoveData === void 0 ? (_reportPossibleCrUseOfRoundMoveData({
            error: Error()
          }), RoundMoveData) : RoundMoveData)();
          this._isStopButtonPressed = false;
        }

        get iconPrefabList() {
          return this._iconPrefabList;
        }

        get delayReelDropTime() {
          if (this._delayReelDropTime <= 0) {
            return 0;
          } else if (this._delayReelDropTime > 0 && this._delayReelDropTime < 0.03) {
            return 0.03;
          } else {
            return this._delayReelDropTime;
          }
        }

        get reelAmount() {
          return this._reels.length;
        }

        set resultSymbolData(value) {
          this._resultSymbolData = value;
        }

        getIconAmount(reelID) {
          return this.iconPrefabList[reelID].nodeList.length;
        }

        get roundMoveData() {
          return this._roundMoveData;
        }

        set isStopButtonPressed(value) {
          this._isStopButtonPressed = value;
        }

        init() {
          this._reels = (_crd && ComponentExt === void 0 ? (_reportPossibleCrUseOfComponentExt({
            error: Error()
          }), ComponentExt) : ComponentExt).getComps(this._reelNodeList, 'DropReel');
          this.createIcon();
          this.initIcon();
          this.initReel();
        }

        createIcon() {
          for (let i = 0; i < this._iconPrefabList.length; i++) {
            this._iconPrefabList[i].createInstance(this._reels[i].rootNode, this.iconPrefabList[i].count);
          }
        }

        initIcon() {
          for (let i = 0; i < this._iconPrefabList.length; i++) {
            for (let j = 0; j < this._iconPrefabList[i].nodeList.length; j++) {
              const iconNode = this._iconPrefabList[i].nodeList[j];
              const iconComponent = (_crd && ComponentExt === void 0 ? (_reportPossibleCrUseOfComponentExt({
                error: Error()
              }), ComponentExt) : ComponentExt).getComp(this._iconPrefabList[i].nodeList[j], 'GameIcon');

              this._nodeComponentMap.set(iconNode, iconComponent);

              iconComponent.init();

              if (this._debugRenameIcon) {
                iconNode.name = 'GameIcon' + i + j;
              }
            }
          }
        }

        initReel() {
          for (let index = 0; index < this._reels.length; index++) {
            this._reels[index].init(index, this._iconPrefabList[index].nodeList);
          }
        }

        setRoundResult(data) {
          for (let reelID = 0; reelID < data.roundIconMoveData.length; reelID++) {
            this.setReelResult(data.getReelMoveDataByIndex(reelID), reelID);
          }
        }

        setReelResult(data, reelID) {
          if (data.length !== this._resultSymbolData[reelID].length) {
            console.error('結果資料數與消除的Icon數不相符 ReelID = ' + reelID + " 消除個數 = " + data.length + "補排資料為 = " + this._resultSymbolData[reelID]);
          }

          for (let i = 0; i < data.length; i++) {
            let iconComponent = this._nodeComponentMap.get(data[i].node);

            iconComponent.updateSymbol(this._resultSymbolData[reelID][i]);
          }
        }

        getIconCount(reelID) {
          return this._iconPrefabList[reelID].count;
        } // 按下Stop後快速停止未完成的Reel


        stopDrop() {
          this.setReelMode((_crd && DropMode === void 0 ? (_reportPossibleCrUseOfDropMode({
            error: Error()
          }), DropMode) : DropMode).STOP);
        }

        setReelMode(mode, reelID) {
          if (reelID === undefined) {
            for (let i = 0; i < this._reels.length; i++) {
              this._reels[i].curMode = mode;
            }
          } else {
            this._reels[reelID].curMode = mode;
          }
        } // 整個 startDropWithDelayPromise() 完成 = 每一輪OneReelDropPromise完成


        async startDrop(state, data) {
          let promiseList = [];

          for (let i = 0; i < this.reelAmount; i++) {
            let delateTime = data.checkIfReelHasIconNeedToMove(i) ? this.delayReelDropTime : 0;

            if (!this._isStopButtonPressed && i !== 0) {
              await this.delay(delateTime);
            }

            let promise = this.OneReelDropPromise(state, data.getReelMoveDataByIndex(i), i);
            promiseList.push(promise);
          }

          await Promise.all(promiseList);
        }

        delay(seconds) {
          return new Promise(resolve => setTimeout(resolve, seconds * 1000));
        }

        async OneReelDropPromise(state, data, reelID) {
          // 如果DropIn 先重設Result
          if (state === (_crd && DropState === void 0 ? (_reportPossibleCrUseOfDropState({
            error: Error()
          }), DropState) : DropState).DROP_IN) {
            this.setReelResult(data, reelID);
          }

          await this._reels[reelID].startDropTween(data, state); // 如果DropOut 會重設為置到最上方，準備DropIn

          if (state === (_crd && DropState === void 0 ? (_reportPossibleCrUseOfDropState({
            error: Error()
          }), DropState) : DropState).DROP_OUT) {
            this._reels[reelID].resetDropOutIconPos(data);
          }
        }
        /**
         * @param removeData 要表演消除動畫的資料
         * 可以需求自行改寫
         * 預設number[][]給原本的Icon直接使用，number[]給表演層Icon使用
         */


        async showRemoveIconAnim(removeData) {
          return new Promise(resolve => setTimeout(resolve, 1 * 1000));
        }

        resetToTop(roundData) {
          for (let i = 0; i < roundData.roundIconMoveData.length; i++) {
            let reelMoveData = roundData.getReelMoveDataByIndex(i);

            this._reels[i].resetDropOutIconPos(reelMoveData);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_iconRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_iconPrefabList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_reelNodeList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_delayReelDropTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_debugRenameIcon", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e6cd6abc0ad16d23bae5ceb204c073eab25baabc.js.map
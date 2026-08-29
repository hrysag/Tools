System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, Node, ComponentExt, DropMode, DropState, RoundMoveData, PrefabList, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, DropReelView;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentExt(extras) {
    _reporterNs.report("ComponentExt", "../Util/ComponentExt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropReel(extras) {
    _reporterNs.report("DropReel", "./DropReel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameIcon(extras) {
    _reporterNs.report("GameIcon", "../GameIcon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropMode(extras) {
    _reporterNs.report("DropMode", "./SettingData/DropReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropState(extras) {
    _reporterNs.report("DropState", "./SettingData/DropReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconMoveData(extras) {
    _reporterNs.report("IconMoveData", "./DropReelDataStructure", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoundMoveData(extras) {
    _reporterNs.report("RoundMoveData", "./DropReelDataStructure", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabList(extras) {
    _reporterNs.report("PrefabList", "../Util/PrefabList", _context.meta, extras);
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
      ComponentExt = _unresolved_2.ComponentExt;
    }, function (_unresolved_3) {
      DropMode = _unresolved_3.DropMode;
      DropState = _unresolved_3.DropState;
    }, function (_unresolved_4) {
      RoundMoveData = _unresolved_4.RoundMoveData;
    }, function (_unresolved_5) {
      PrefabList = _unresolved_5.PrefabList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b13398D835F/pUnNFNHbws9", "DropReelView", undefined);

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
        constructor() {
          super(...arguments);

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
          for (var i = 0; i < this._iconPrefabList.length; i++) {
            this._iconPrefabList[i].createInstance(this._reels[i].rootNode, this.iconPrefabList[i].count);
          }
        }

        initIcon() {
          for (var i = 0; i < this._iconPrefabList.length; i++) {
            for (var j = 0; j < this._iconPrefabList[i].nodeList.length; j++) {
              var iconNode = this._iconPrefabList[i].nodeList[j];
              var iconComponent = (_crd && ComponentExt === void 0 ? (_reportPossibleCrUseOfComponentExt({
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
          for (var index = 0; index < this._reels.length; index++) {
            this._reels[index].init(index, this._iconPrefabList[index].nodeList);
          }
        }

        setRoundResult(data) {
          for (var reelID = 0; reelID < data.roundIconMoveData.length; reelID++) {
            this.setReelResult(data.getReelMoveDataByIndex(reelID), reelID);
          }
        }

        setReelResult(data, reelID) {
          if (data.length !== this._resultSymbolData[reelID].length) {
            console.error('結果資料數與消除的Icon數不相符 ReelID = ' + reelID + " 消除個數 = " + data.length + "補排資料為 = " + this._resultSymbolData[reelID]);
          }

          for (var i = 0; i < data.length; i++) {
            var iconComponent = this._nodeComponentMap.get(data[i].node);

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
            for (var i = 0; i < this._reels.length; i++) {
              this._reels[i].curMode = mode;
            }
          } else {
            this._reels[reelID].curMode = mode;
          }
        } // 整個 startDropWithDelayPromise() 完成 = 每一輪OneReelDropPromise完成


        startDrop(state, data) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var promiseList = [];

            for (var i = 0; i < _this.reelAmount; i++) {
              var delateTime = data.checkIfReelHasIconNeedToMove(i) ? _this.delayReelDropTime : 0;

              if (!_this._isStopButtonPressed && i !== 0) {
                yield _this.delay(delateTime);
              }

              var promise = _this.OneReelDropPromise(state, data.getReelMoveDataByIndex(i), i);

              promiseList.push(promise);
            }

            yield Promise.all(promiseList);
          })();
        }

        delay(seconds) {
          return new Promise(resolve => setTimeout(resolve, seconds * 1000));
        }

        OneReelDropPromise(state, data, reelID) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            // 如果DropIn 先重設Result
            if (state === (_crd && DropState === void 0 ? (_reportPossibleCrUseOfDropState({
              error: Error()
            }), DropState) : DropState).DROP_IN) {
              _this2.setReelResult(data, reelID);
            }

            yield _this2._reels[reelID].startDropTween(data, state); // 如果DropOut 會重設為置到最上方，準備DropIn

            if (state === (_crd && DropState === void 0 ? (_reportPossibleCrUseOfDropState({
              error: Error()
            }), DropState) : DropState).DROP_OUT) {
              _this2._reels[reelID].resetDropOutIconPos(data);
            }
          })();
        }
        /**
         * @param removeData 要表演消除動畫的資料
         * 可以需求自行改寫
         * 預設number[][]給原本的Icon直接使用，number[]給表演層Icon使用
         */


        showRemoveIconAnim(removeData) {
          return _asyncToGenerator(function* () {
            return new Promise(resolve => setTimeout(resolve, 1 * 1000));
          })();
        }

        resetToTop(roundData) {
          for (var i = 0; i < roundData.roundIconMoveData.length; i++) {
            var reelMoveData = roundData.getReelMoveDataByIndex(i);

            this._reels[i].resetDropOutIconPos(reelMoveData);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_iconRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_iconPrefabList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_reelNodeList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_delayReelDropTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_debugRenameIcon", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3611526b0c1e22f1d40f47db306b61753262602f.js.map
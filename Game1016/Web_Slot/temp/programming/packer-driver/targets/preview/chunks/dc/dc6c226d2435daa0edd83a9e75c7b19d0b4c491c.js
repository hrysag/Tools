System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ReelSettingData, ProcessSettingData, ControllerSettingData, GameModeExample, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, property, executeInEditMode, RunTimeData;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfReelSettingData(extras) {
    _reporterNs.report("ReelSettingData", "./ReelSettingData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProcessSettingData(extras) {
    _reporterNs.report("ProcessSettingData", "./ProcessSettingData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfControllerSettingData(extras) {
    _reporterNs.report("ControllerSettingData", "./ControllerSettingData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameModeExample(extras) {
    _reporterNs.report("GameModeExample", "./ControllerSettingData", _context.meta, extras);
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
      ReelSettingData = _unresolved_2.ReelSettingData;
    }, function (_unresolved_3) {
      ProcessSettingData = _unresolved_3.ProcessSettingData;
    }, function (_unresolved_4) {
      ControllerSettingData = _unresolved_4.ControllerSettingData;
      GameModeExample = _unresolved_4.GameModeExample;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0d85bsNKJJMfaa6c+10iX5p", "RunTimeData", undefined);

      __checkObsolete__(['_decorator', 'Button', 'CCBoolean', 'Component', 'Enum', 'Label']);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);

      _export("RunTimeData", RunTimeData = (_dec = ccclass('RunTimeData'), _dec2 = executeInEditMode(), _dec3 = property(_crd && ReelSettingData === void 0 ? (_reportPossibleCrUseOfReelSettingData({
        error: Error()
      }), ReelSettingData) : ReelSettingData), _dec4 = property(_crd && ProcessSettingData === void 0 ? (_reportPossibleCrUseOfProcessSettingData({
        error: Error()
      }), ProcessSettingData) : ProcessSettingData), _dec5 = property(_crd && ControllerSettingData === void 0 ? (_reportPossibleCrUseOfControllerSettingData({
        error: Error()
      }), ControllerSettingData) : ControllerSettingData), _dec(_class = _dec2(_class = (_class2 = (_class3 = class RunTimeData extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "reelData", _descriptor, this);

          _initializerDefineProperty(this, "processData", _descriptor2, this);

          _initializerDefineProperty(this, "controllerData", _descriptor3, this);

          this.reelAmount = 0;
        }

        static get instance() {
          if (RunTimeData._instance === null) {
            return new RunTimeData();
          }

          return RunTimeData._instance;
        }

        onLoad() {
          if (RunTimeData._instance === null) {
            RunTimeData._instance = this;
          }
        }

        addLayoutChangeListener(listener) {
          this.controllerData.onIsLayoutChange = listener;
        }

        getMoveInterval() {
          return this.controllerData.gameMode === (_crd && GameModeExample === void 0 ? (_reportPossibleCrUseOfGameModeExample({
            error: Error()
          }), GameModeExample) : GameModeExample).NG ? this.reelData.ngMoveInterval : this.reelData.fgMoveInterval;
        }

        getReelSpaceDataLength() {
          return this.controllerData.gameMode === (_crd && GameModeExample === void 0 ? (_reportPossibleCrUseOfGameModeExample({
            error: Error()
          }), GameModeExample) : GameModeExample).NG ? this.reelData.ngStopDataLength : this.reelData.fgStopDataLength;
        }

        update() {
          if (this.reelData && this.reelAmount !== this.reelData.reelAmount) {
            this.reelAmount = this.reelData.reelAmount;
            this.controllerData.rollingReelIDs.length = 0;

            for (var index = 0; index < this.reelAmount; index++) {
              this.controllerData.rollingReelIDs.push(index);
            }

            console.warn("滾輪數量調整，ControllerSettingData的滾輪順序已重置");
          }
        }

        onDestroy() {
          RunTimeData._instance = null;
        }

      }, _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "reelData", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "processData", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "controllerData", [_dec5], {
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
//# sourceMappingURL=dc6c226d2435daa0edd83a9e75c7b19d0b4c491c.js.map
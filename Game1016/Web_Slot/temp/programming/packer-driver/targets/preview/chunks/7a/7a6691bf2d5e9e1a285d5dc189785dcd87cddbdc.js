System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, ConditionLine, AutoSpinAreaBase, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ConditionArea;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConditionLine(extras) {
    _reporterNs.report("ConditionLine", "./ConditionLine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConditionLineData(extras) {
    _reporterNs.report("ConditionLineData", "./ConditionLine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConditionContext(extras) {
    _reporterNs.report("ConditionContext", "./ConditionContext", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoSpinAreaBase(extras) {
    _reporterNs.report("AutoSpinAreaBase", "./AutoSpinAreaBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ConditionLine = _unresolved_2.ConditionLine;
    }, function (_unresolved_3) {
      AutoSpinAreaBase = _unresolved_3.AutoSpinAreaBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bee9ekpTuBJZ4r+07oeg8xa", "ConditionArea", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ConditionArea", ConditionArea = (_dec = ccclass('ConditionArea'), _dec2 = property(Node), _dec(_class = (_class2 = class ConditionArea extends (_crd && AutoSpinAreaBase === void 0 ? (_reportPossibleCrUseOfAutoSpinAreaBase({
        error: Error()
      }), AutoSpinAreaBase) : AutoSpinAreaBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "conditionLinesRoot", _descriptor, this);

          this.conditionLines = [];
          this._selectedLine = null;
          this.onShowKeyboardCallback = null;
        }

        get selectedLine() {
          return this._selectedLine;
        }

        init() {
          this.conditionLinesRoot.children.forEach(child => {
            var conditionLine = child.getComponent(_crd && ConditionLine === void 0 ? (_reportPossibleCrUseOfConditionLine({
              error: Error()
            }), ConditionLine) : ConditionLine);
            conditionLine.init();
            conditionLine.onShowKeyboardCallback = this.onShowKeyboard.bind(this);
            this.conditionLines.push(conditionLine);
          });
        }
        /**
         * 檢查自訂物件資料是否有屬性符合區塊中任一停止條件
         * @param context 自訂物件資料，將判斷所需資料包裝成物件後傳入
         * @returns 
         */


        isMeetsAnyStopCondition(context) {
          return this.conditionLines.some(conditionLine => conditionLine.isMeetsStopConditionWithChecked(context));
        }

        getCustomData() {
          var conditionLinesData = [];
          this.conditionLines.forEach(conditionLine => {
            conditionLinesData.push(conditionLine.getConditionLineData());
          });
          return conditionLinesData;
        }

        onShowKeyboard(selectedLine) {
          this._selectedLine = selectedLine;
          this.onShowKeyboardCallback(this);
        }

        disableConditionLines(shouldCloseConditionIndexes) {
          this.conditionLines.forEach((conditionLine, index) => {
            if (shouldCloseConditionIndexes.includes(index)) {
              conditionLine.disableCheck();
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "conditionLinesRoot", [_dec2], {
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
//# sourceMappingURL=7a6691bf2d5e9e1a285d5dc189785dcd87cddbdc.js.map
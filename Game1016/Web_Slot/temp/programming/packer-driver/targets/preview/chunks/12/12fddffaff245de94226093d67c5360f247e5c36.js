System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Label, BasicJpUIBoard, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, JpShowAniCtrl1016;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBasicJpUIBoard(extras) {
    _reporterNs.report("BasicJpUIBoard", "../../../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlaySelector(extras) {
    _reporterNs.report("PlaySelector", "db://assets/Game1016/Script/MyUtils/AnimationSystemV2/Definitions/IPlayOptions", _context.meta, extras);
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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      BasicJpUIBoard = _unresolved_2.BasicJpUIBoard;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a4abDCEq1Lq7uL2X+Rptdt", "JpShowAniCtrl1016", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'CCFloat', 'AnimationState']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JpShowAniCtrl1016", JpShowAniCtrl1016 = (_dec = ccclass('JpShowAniCtrl1016'), _dec2 = property({
        type: Node,
        visible: true,
        displayName: '大獎數字節點',
        tooltip: '大獎數字節點'
      }), _dec(_class = (_class2 = class JpShowAniCtrl1016 extends (_crd && BasicJpUIBoard === void 0 ? (_reportPossibleCrUseOfBasicJpUIBoard({
        error: Error()
      }), BasicJpUIBoard) : BasicJpUIBoard) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_jackpotNumberNode", _descriptor, this);

          this._labelNumber = null;
          this._winMoney = 0;
          this._frameEventCallBack = null;
        }

        get frameEventCallBack() {
          return this._frameEventCallBack;
        }

        set frameEventCallBack(value) {
          this._frameEventCallBack = value;
        }

        get _jackpotNumber() {
          return this._winMoney;
        }

        get labelNumber() {
          return this._labelNumber;
        }

        init() {
          super.init();

          if (this._jackpotNumberNode) {
            this._labelNumber = this._jackpotNumberNode.getComponent(Label);
          }

          this._winMoney = 0;
          this.node.active = false;
        }

        setJpNumber(value) {
          this._winMoney = value;

          if (this._labelNumber) {
            this._labelNumber.string = this._winMoney.numberComma();
          }
        } // ================================================================
        // 以下是覆寫 hook，替代 BasicGameBoardUI 的 playBoardOut 方法
        // ================================================================

        /**
         * 退場動畫：監聽 "HideNumber" frame event。
         */


        getOutPlayTask(mode) {
          return this.playWithFrameEvt(mode, this._frameEventCallBack, () => {//console.log(`[JpShowAniCtrl1016] 退場動畫完成`);
          }, {
            backDefault: true
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_jackpotNumberNode", [_dec2], {
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
//# sourceMappingURL=12fddffaff245de94226093d67c5360f247e5c36.js.map
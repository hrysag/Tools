System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, Component, Layout, Node, UITransform, v3, ReelDataBase, rollDirection, ReelState, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ReelBase;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfReelDataBase(extras) {
    _reporterNs.report("ReelDataBase", "./Model/ReelDataBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrollDirection(extras) {
    _reporterNs.report("rollDirection", "./Model/ReelDataBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelEvent(extras) {
    _reporterNs.report("ReelEvent", "./Model/ReelData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReelState(extras) {
    _reporterNs.report("ReelState", "./Model/ReelData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      Layout = _cc.Layout;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      ReelDataBase = _unresolved_2.ReelDataBase;
      rollDirection = _unresolved_2.rollDirection;
    }, function (_unresolved_3) {
      ReelState = _unresolved_3.ReelState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fc01e5ch5hL+7EY8tU1Z2fu", "ReelBase", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Component', 'Layout', 'Node', 'UITransform', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ReelBase", ReelBase = (_dec = ccclass('ReelBase'), _dec2 = property({
        type: CCInteger,
        readonly: true,
        visible: true,
        tooltip: '第幾個滾輪'
      }), _dec3 = property({
        type: Node,
        visible: true,
        tooltip: '執行滾輪的節點'
      }), _dec4 = property({
        type: _crd && ReelDataBase === void 0 ? (_reportPossibleCrUseOfReelDataBase({
          error: Error()
        }), ReelDataBase) : ReelDataBase,
        visible: true,
        tooltip: '滾輪資料'
      }), _dec(_class = (_class2 = class ReelBase extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_reelID", _descriptor, this);

          _initializerDefineProperty(this, "_rootNode", _descriptor2, this);

          _initializerDefineProperty(this, "_reelData", _descriptor3, this);

          this._iconAmount = 0;
          this._havePrepareIcon = false;
          //滾輪方向與目的地
          this._currentDirUnit = [];
          this._isVertical = false;
          this._unitDis = 0;
          this._rollDis = 0;
          this._iconStartPos = 0;
          this._upOrRightUnit = 0;
          //紀錄所有icon位置
          this._iconPos = [];
          //滾輪狀態與發送事件
          this._currentState = (_crd && ReelState === void 0 ? (_reportPossibleCrUseOfReelState({
            error: Error()
          }), ReelState) : ReelState).Unknown;
          this.onReelEvent = null;
        }

        set reelID(value) {
          this._reelID = value;
        }

        get reelID() {
          return this._reelID;
        }

        get rootNode() {
          return this._rootNode;
        }

        get currentDirUnit() {
          return this._currentDirUnit;
        }

        get unitDis() {
          return this._unitDis;
        }

        get iconPos() {
          return this._iconPos;
        }

        set currentState(state) {
          if (this._currentState !== state) {
            this._currentState = state;
          }
        }

        get currentState() {
          return this._currentState;
        }
        /**
         * 滾輪之前的設定，在執行滾輪前呼叫
         * @param reelRoundState 滾輪整輪的狀態，類型定義成number，可以自己寫enum傳進來，方便改寫
         * @param showIconData startPull或是bounceIcon的symbolData
         */

        /**
         * 執行一次滾輪
         */


        init(reelID, iconNodes, havePrepareIcon) {
          this._reelID = reelID;
          this._havePrepareIcon = havePrepareIcon;
          this._iconAmount = this._havePrepareIcon ? iconNodes.length / 2 : iconNodes.length;
          var rollDirUnit = [[0, -1], [0, 1], [-1, 0], [1, 0]];
          this._currentDirUnit = rollDirUnit[this._reelData.reelDir];
          this._isVertical = this._reelData.reelDir === (_crd && rollDirection === void 0 ? (_reportPossibleCrUseOfrollDirection({
            error: Error()
          }), rollDirection) : rollDirection).Up || this._reelData.reelDir === (_crd && rollDirection === void 0 ? (_reportPossibleCrUseOfrollDirection({
            error: Error()
          }), rollDirection) : rollDirection).Down;
          this._upOrRightUnit = this._reelData.reelDir === (_crd && rollDirection === void 0 ? (_reportPossibleCrUseOfrollDirection({
            error: Error()
          }), rollDirection) : rollDirection).Up || this._reelData.reelDir === (_crd && rollDirection === void 0 ? (_reportPossibleCrUseOfrollDirection({
            error: Error()
          }), rollDirection) : rollDirection).Right ? -1 : 1;
          var iconSize = iconNodes[0].getComponent(UITransform).contentSize;
          this._unitDis = this._isVertical ? iconSize.y + this._reelData.iconSpacing : iconSize.x + this._reelData.iconSpacing;
          this._rollDis = this.unitDis * this._iconAmount;

          if (this._reelData.useLayout) {
            this.setLayOutForIconPos(iconNodes.length);

            for (var index = 0; index < iconNodes.length; index++) {
              this.iconPos.push(iconNodes[index].getPosition());
            }
          } else {
            this.calculateIconStartPos();
            this.calculateInitIconPos(iconNodes.length);
            this.initIconPos(iconNodes);
          }
        }

        calculateIconStartPos() {
          var startPos = (this._iconAmount / 2 - 1) * this.unitDis + this.unitDis / 2;
          startPos += this._havePrepareIcon ? this._rollDis : 0;
          this._iconStartPos = this._isVertical ? -this._currentDirUnit[1] * startPos : -this._currentDirUnit[0] * startPos;
        }

        setLayOutForIconPos(iconInReelAmount) {
          var layout = this.rootNode.addComponent(Layout);

          if (this._isVertical) {
            layout.type = Layout.Type.VERTICAL;
            layout.verticalDirection = this._reelData.reelDir === (_crd && rollDirection === void 0 ? (_reportPossibleCrUseOfrollDirection({
              error: Error()
            }), rollDirection) : rollDirection).Up ? Layout.VerticalDirection.BOTTOM_TO_TOP : Layout.VerticalDirection.TOP_TO_BOTTOM;
            layout.spacingY = this._reelData.iconSpacing;

            if (this._havePrepareIcon) {
              var paddingTop = this.unitDis * (iconInReelAmount / 2) * -this._upOrRightUnit;
              layout.paddingTop = paddingTop;
            }
          } else {
            layout.type = Layout.Type.HORIZONTAL;
            layout.horizontalDirection = this._reelData.reelDir === (_crd && rollDirection === void 0 ? (_reportPossibleCrUseOfrollDirection({
              error: Error()
            }), rollDirection) : rollDirection).Right ? Layout.HorizontalDirection.LEFT_TO_RIGHT : Layout.HorizontalDirection.RIGHT_TO_LEFT;
            layout.spacingX = this._reelData.iconSpacing;

            if (this._havePrepareIcon) {
              var paddingLeft = this.unitDis * (iconInReelAmount / 2) * this._upOrRightUnit;
              layout.paddingLeft = paddingLeft;
            }
          }

          layout.resizeMode = Layout.ResizeMode.CONTAINER;
          layout.updateLayout();
          this.scheduleOnce(() => {
            // 等一禎讓layout更新完再關閉
            layout.enabled = false;
          }, 0);
        }

        calculateInitIconPos(iconInReelAmount) {
          for (var index = 0; index < iconInReelAmount; index++) {
            var newPos = this.calculateIconPos(index);

            this._iconPos.push(newPos);
          }
        }

        calculateIconPos(iconIndex) {
          var offset = this.unitDis * iconIndex;
          var finalPos = (this._iconStartPos * this._upOrRightUnit - offset) * this._upOrRightUnit;
          var newPos = this._isVertical ? v3(0, finalPos, 0) : v3(finalPos, 0, 0);
          return newPos;
        }

        initIconPos(iconNodes) {
          for (var index = 0; index < iconNodes.length; index++) {
            iconNodes[index].setPosition(this._iconPos[index]);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_reelID", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_rootNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_reelData", [_dec4], {
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
//# sourceMappingURL=9d0983c95cb1232471591dff45d26a09d1f442cd.js.map
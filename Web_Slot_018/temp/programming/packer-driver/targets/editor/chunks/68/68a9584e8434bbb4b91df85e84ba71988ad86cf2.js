System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCBoolean, CCInteger, Component, instantiate, Layout, Node, Prefab, UITransform, v3, Vec3, rollDirection, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, Test;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfrollDirection(extras) {
    _reporterNs.report("rollDirection", "../../Model/ReelDataBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCBoolean = _cc.CCBoolean;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Layout = _cc.Layout;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      rollDirection = _unresolved_2.rollDirection;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "caa02TxDwVKoLqW48HjWUiR", "Test", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCInteger', 'Component', 'instantiate', 'Layout', 'Node', 'Prefab', 'Size', 'UITransform', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Test", Test = (_dec = ccclass('Test'), _dec2 = property(CCBoolean), _dec3 = property(CCBoolean), _dec4 = property(CCBoolean), _dec5 = property(CCInteger), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property({
        type: _crd && rollDirection === void 0 ? (_reportPossibleCrUseOfrollDirection({
          error: Error()
        }), rollDirection) : rollDirection
      }), _dec9 = property(Prefab), _dec10 = property(CCInteger), _dec(_class = (_class2 = class Test extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "havePrepareIcon", _descriptor, this);

          _initializerDefineProperty(this, "useLayout", _descriptor2, this);

          _initializerDefineProperty(this, "haveShowIcon", _descriptor3, this);

          _initializerDefineProperty(this, "iconInReelAmount", _descriptor4, this);

          _initializerDefineProperty(this, "rootNode", _descriptor5, this);

          _initializerDefineProperty(this, "iconList", _descriptor6, this);

          _initializerDefineProperty(this, "reelDir", _descriptor7, this);

          _initializerDefineProperty(this, "iconPrefab", _descriptor8, this);

          this.iconAmount = 0;
          this._isVertical = false;
          this.unitDis = 0;
          this._iconPos = [];

          _initializerDefineProperty(this, "iconSpacing", _descriptor9, this);

          this.iconStartPos = 0;
          this.upOrRightUnit = 0;
          this._endBouncePos = Vec3.ZERO;
          this._startPullPos = Vec3.ZERO;
          this.originalPos = Vec3.ZERO;
          this.targetPos = Vec3.ZERO;
        }

        start() {
          this.createIcon();
          this.init(this.iconList);
        }

        init(iconNodes) {
          this.iconAmount = this.havePrepareIcon ? iconNodes.length / 2 : iconNodes.length;
          let rollDirUnit = [[0, -1], [0, 1], [-1, 0], [1, 0]];
          let currentDirUnit = rollDirUnit[this.reelDir];
          this._isVertical = this.reelDir === (_crd && rollDirection === void 0 ? (_reportPossibleCrUseOfrollDirection({
            error: Error()
          }), rollDirection) : rollDirection).Up || this.reelDir === (_crd && rollDirection === void 0 ? (_reportPossibleCrUseOfrollDirection({
            error: Error()
          }), rollDirection) : rollDirection).Down;
          let iconSize = iconNodes[0].getComponent(UITransform).contentSize;
          this.unitDis = this._isVertical ? iconSize.y + this.iconSpacing : iconSize.x + this.iconSpacing;
          let rollDis = this.unitDis * this.iconAmount;
          let startPos = (this.iconAmount / 2 - 1) * this.unitDis + this.unitDis / 2;
          startPos += this.havePrepareIcon ? rollDis : 0;
          this.iconStartPos = this._isVertical ? -currentDirUnit[1] * startPos : -currentDirUnit[0] * startPos;
          this.upOrRightUnit = this.reelDir === (_crd && rollDirection === void 0 ? (_reportPossibleCrUseOfrollDirection({
            error: Error()
          }), rollDirection) : rollDirection).Up || this.reelDir === (_crd && rollDirection === void 0 ? (_reportPossibleCrUseOfrollDirection({
            error: Error()
          }), rollDirection) : rollDirection).Right ? -1 : 1;

          if (this.useLayout) {
            this.calculateLayOutIconPos(iconNodes.length);
          } else {
            this.calculateInitIconPos(iconNodes.length);
            this.initIconPos(iconNodes);
          }

          this.originalPos = this.rootNode.getPosition();
          this.targetPos = this._isVertical ? v3(0, rollDis * currentDirUnit[1], 0) : v3(rollDis * currentDirUnit[0], 0, 0);
        }

        createIcon() {
          for (let index = 0; index < this.iconInReelAmount; index++) {
            let icon = instantiate(this.iconPrefab);
            icon.setParent(this.rootNode);
            this.iconList.push(icon);
          }
        }

        calculateLayOutIconPos(iconInReelAmount) {
          let layout = this.rootNode.addComponent(Layout);

          if (this.haveShowIcon) {
            iconInReelAmount -= 2;
          }

          if (this._isVertical) {
            layout.type = Layout.Type.VERTICAL;
            layout.verticalDirection = this.reelDir === (_crd && rollDirection === void 0 ? (_reportPossibleCrUseOfrollDirection({
              error: Error()
            }), rollDirection) : rollDirection).Up ? Layout.VerticalDirection.BOTTOM_TO_TOP : Layout.VerticalDirection.TOP_TO_BOTTOM;
            layout.spacingY = this.iconSpacing;

            if (this.havePrepareIcon) {
              let paddingTop = this.unitDis * (iconInReelAmount / 2) * -this.upOrRightUnit;
              layout.paddingTop = paddingTop;
            }
          } else {
            layout.type = Layout.Type.HORIZONTAL;
            layout.horizontalDirection = this.reelDir === (_crd && rollDirection === void 0 ? (_reportPossibleCrUseOfrollDirection({
              error: Error()
            }), rollDirection) : rollDirection).Right ? Layout.HorizontalDirection.LEFT_TO_RIGHT : Layout.HorizontalDirection.RIGHT_TO_LEFT;
            layout.spacingX = this.iconSpacing;

            if (this.havePrepareIcon) {
              let paddingLeft = this.unitDis * (iconInReelAmount / 2) * this.upOrRightUnit;
              layout.paddingLeft = paddingLeft;
            }
          }

          layout.resizeMode = Layout.ResizeMode.CONTAINER;
          layout.updateLayout();
        }

        calculateInitIconPos(iconInReelAmount) {
          for (let index = 0; index < iconInReelAmount; index++) {
            let newPos = this.calculateIconPos(index);

            this._iconPos.push(newPos);
          }

          this._endBouncePos = this.calculateIconPos(-1);
          this._startPullPos = this.calculateIconPos(iconInReelAmount);
        }

        calculateIconPos(iconIndex) {
          let offset = this.unitDis * iconIndex;
          let finalPos = (this.iconStartPos * this.upOrRightUnit - offset) * this.upOrRightUnit;
          let newPos = this._isVertical ? v3(0, finalPos, 0) : v3(finalPos, 0, 0);
          return newPos;
        }

        initIconPos(iconNodes) {
          for (let index = 0; index < iconNodes.length; index++) {
            iconNodes[index].setPosition(this._iconPos[index]);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "havePrepareIcon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "useLayout", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "haveShowIcon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconInReelAmount", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rootNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "iconList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "reelDir", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && rollDirection === void 0 ? (_reportPossibleCrUseOfrollDirection({
            error: Error()
          }), rollDirection) : rollDirection).Down;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "iconPrefab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "iconSpacing", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=68a9584e8434bbb4b91df85e84ba71988ad86cf2.js.map
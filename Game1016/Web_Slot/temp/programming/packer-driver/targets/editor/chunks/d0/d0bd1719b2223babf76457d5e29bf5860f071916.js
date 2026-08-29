System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Enum, Layout, UITransform, Vec3, _decorator, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _crd, ccclass, inspector, property, disallowMultiple, menu, CenterHorizontalDirection, CenterLayout;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Enum = _cc.Enum;
      Layout = _cc.Layout;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dfe983FmElCxbaagMT1qHC+", "CenterLayout", undefined);

      __checkObsolete__(['Enum', 'Layout', 'UITransform', 'Vec3', '_decorator']);

      ({
        ccclass,
        inspector,
        property,
        disallowMultiple,
        menu
      } = _decorator);

      CenterHorizontalDirection = /*#__PURE__*/function (CenterHorizontalDirection) {
        CenterHorizontalDirection[CenterHorizontalDirection["LEFT_TO_RIGHT"] = 0] = "LEFT_TO_RIGHT";
        CenterHorizontalDirection[CenterHorizontalDirection["RIGHT_TO_LEFT"] = 1] = "RIGHT_TO_LEFT";
        CenterHorizontalDirection[CenterHorizontalDirection["CENTER_TO_SIDE"] = 2] = "CENTER_TO_SIDE";
        return CenterHorizontalDirection;
      }(CenterHorizontalDirection || {});

      _export("default", CenterLayout = (_dec = disallowMultiple(), _dec2 = menu('自定義組件/CenterLayout'), _dec3 = inspector("packages://custom_inspector/centerlayout.js"), _dec4 = property({
        type: Enum(CenterHorizontalDirection)
      }), ccclass(_class = _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class CenterLayout extends Layout {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "centerHorizontalDirection", _descriptor, this);
        }

        _doLayoutHorizontally(baseWidth, rowBreak, fnPositionY, applyChildren) {
          const trans = this.node.getComponent(UITransform);
          const layoutAnchor = trans.anchorPoint;

          const limit = this._getFixedBreakingNum();

          let sign = 1;
          let paddingX = this._paddingLeft;

          if (this._horizontalDirection === Layout.HorizontalDirection.RIGHT_TO_LEFT) {
            sign = -1;
            paddingX = this._paddingRight;
          }

          const startPos = (this._horizontalDirection - layoutAnchor.x) * baseWidth + sign * paddingX;
          let nextX = startPos - sign * this._spacingX;
          let totalHeight = 0; // total content height (not including spacing)

          let rowMaxHeight = 0; // maximum height of a single line

          let tempMaxHeight = 0; //

          let maxHeight = 0;
          let isBreak = false;
          const activeChildCount = this._usefulLayoutObj.length;
          let newChildWidth = this._cellSize.width;

          const paddingH = this._getPaddingH();

          if (this._layoutType !== Layout.Type.GRID && this._resizeMode === Layout.ResizeMode.CHILDREN) {
            newChildWidth = (baseWidth - paddingH - (activeChildCount - 1) * this._spacingX) / activeChildCount;
          }

          const children = this._usefulLayoutObj;

          for (let i = 0; i < children.length; ++i) {
            const childTrans = children[i];
            const child = childTrans.node;
            const scale = child.scale;

            const childScaleX = this._getUsedScaleValue(scale.x);

            const childScaleY = this._getUsedScaleValue(scale.y); // for resizing children


            if (this._resizeMode === Layout.ResizeMode.CHILDREN) {
              childTrans.width = newChildWidth / childScaleX;

              if (this._layoutType === Layout.Type.GRID) {
                childTrans.height = this._cellSize.height / childScaleY;
              }
            }

            const anchorX = Math.abs(this._horizontalDirection - childTrans.anchorX);
            const childBoundingBoxWidth = childTrans.width * childScaleX;
            const childBoundingBoxHeight = childTrans.height * childScaleY;

            if (childBoundingBoxHeight > tempMaxHeight) {
              maxHeight = Math.max(tempMaxHeight, maxHeight);
              rowMaxHeight = tempMaxHeight || childBoundingBoxHeight;
              tempMaxHeight = childBoundingBoxHeight;
            }

            nextX += sign * (anchorX * childBoundingBoxWidth + this._spacingX);
            const rightBoundaryOfChild = sign * (1 - anchorX) * childBoundingBoxWidth;

            if (rowBreak) {
              if (limit > 0) {
                isBreak = i / limit > 0 && i % limit === 0;

                if (isBreak) {
                  rowMaxHeight = tempMaxHeight > childBoundingBoxHeight ? tempMaxHeight : rowMaxHeight;
                }
              } else if (childBoundingBoxWidth > baseWidth - paddingH) {
                if (nextX > startPos + sign * (anchorX * childBoundingBoxWidth)) {
                  isBreak = true;
                }
              } else {
                const boundary = (1 - this._horizontalDirection - layoutAnchor.x) * baseWidth;
                const rowBreakBoundary = nextX + rightBoundaryOfChild + sign * (sign > 0 ? this._paddingRight : this._paddingLeft);
                isBreak = Math.abs(rowBreakBoundary) > Math.abs(boundary);
              }

              if (isBreak) {
                nextX = startPos + sign * (anchorX * childBoundingBoxWidth);

                if (childBoundingBoxHeight !== tempMaxHeight) {
                  rowMaxHeight = tempMaxHeight;
                } // In unconstrained mode, the second height size is always what we need when a line feed condition is required to trigger


                totalHeight += rowMaxHeight + this._spacingY;
                rowMaxHeight = tempMaxHeight = childBoundingBoxHeight;
              }
            }

            const finalPositionY = fnPositionY(child, childTrans, totalHeight);

            if (applyChildren) {
              child.setPosition(nextX, finalPositionY);
            }

            nextX += rightBoundaryOfChild;
          }

          rowMaxHeight = Math.max(rowMaxHeight, tempMaxHeight);

          const containerResizeBoundary = Math.max(maxHeight, totalHeight + rowMaxHeight) + this._getPaddingV(); // --start--


          if (children.length > 0 && this.centerHorizontalDirection == CenterHorizontalDirection.CENTER_TO_SIDE) {
            let centerX = (0.5 - layoutAnchor.x) * baseWidth;
            let rowWidth = 0;
            let nextRowX = -1;
            let lastRowY = Number.MIN_SAFE_INTEGER;
            sign = -1;

            for (let i = children.length - 1; i >= 0; i--) {
              let child = children[i];

              let childScaleX = this._getUsedScaleValue(child.node.scale.x);

              var anchorX = child.getComponent(UITransform).anchorX;
              var childBoundingBoxWidth = child.getComponent(UITransform).width * childScaleX;

              if (Math.abs(child.node.position.y - lastRowY) > 1) {
                lastRowY = child.node.position.y;
                rowWidth = child.node.position.x + (1 - anchorX) * childBoundingBoxWidth + this.paddingRight;
                rowWidth = baseWidth * layoutAnchor.x + rowWidth;
                let lastRowEndX = centerX + rowWidth * 0.5;
                nextRowX = lastRowEndX + sign * paddingX - sign * this.spacingX;
              }

              if (!child.node.activeInHierarchy) {
                continue;
              }

              nextRowX = nextRowX + sign * anchorX * childBoundingBoxWidth + sign * this.spacingX;
              child.node.setPosition(new Vec3(nextRowX, child.node.position.y, 0));
              var rightBoundaryOfChild = sign * (1 - anchorX) * childBoundingBoxWidth;
              nextRowX += rightBoundaryOfChild;
            }
          } // --end--


          return containerResizeBoundary;
        }

        _getUsedScaleValue(value) {
          return this.affectedByScale ? Math.abs(value) : 1;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "centerHorizontalDirection", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return CenterHorizontalDirection.CENTER_TO_SIDE;
        }
      })), _class2)) || _class) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d0bd1719b2223babf76457d5e29bf5860f071916.js.map
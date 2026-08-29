System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, UITransform, AdaptWindowSize, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, AutoSizeWithAdaptWindowSize;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAdaptWindowSize(extras) {
    _reporterNs.report("AdaptWindowSize", "./AdaptWindowSize", _context.meta, extras);
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
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      AdaptWindowSize = _unresolved_2.AdaptWindowSize;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "847699yZqJGgJqrFPeECgfS", "AutoSizeWithAdaptWindowSize", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Size', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 此腳本僅根據AdaptWindowSize的尺寸來放大，並不會執行縮小的部分
       */

      _export("AutoSizeWithAdaptWindowSize", AutoSizeWithAdaptWindowSize = (_dec = ccclass('AutoSizeWithAdaptWindowSize'), _dec2 = property({
        type: _crd && AdaptWindowSize === void 0 ? (_reportPossibleCrUseOfAdaptWindowSize({
          error: Error()
        }), AdaptWindowSize) : AdaptWindowSize,
        tooltip: '每個場景上至少要有一個AdaptWindowSize，才能用來監聽事件'
      }), _dec3 = property([Node]), _dec(_class = (_class2 = class AutoSizeWithAdaptWindowSize extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "windowAdapter", _descriptor, this);

          _initializerDefineProperty(this, "resizeNodeList", _descriptor2, this);
        }

        start() {
          var _this$windowAdapter;

          (_this$windowAdapter = this.windowAdapter) == null || _this$windowAdapter.addResizeListener(this.onResize.bind(this));
        }

        onDestroy() {
          var _this$windowAdapter2;

          (_this$windowAdapter2 = this.windowAdapter) == null || _this$windowAdapter2.removeResizeListener(this.onResize.bind(this));
        }
        /**
        * 依據傳入的尺寸計算縮放比例，等比放大指定節點，
        * 以確保節點的寬或高至少覆蓋目標尺寸。
        * 若計算結果小於 1，則維持原本大小，不會進行縮小。
        * @param newSize 
        */


        onResize(newSize) {
          for (let i = 0; i < this.resizeNodeList.length; i++) {
            const currentUITransform = this.resizeNodeList[i].getComponent(UITransform);

            if (!currentUITransform) {
              console.warn(`node ${this.resizeNodeList[i].name} has no UITransform`);
              continue;
            }

            const widthRatio = newSize.width / currentUITransform.width;
            const heightRatio = newSize.height / currentUITransform.height;
            const scale = Math.max(widthRatio, heightRatio);
            const targetScale = scale < 1 ? 1 : scale;
            this.resizeNodeList[i].setScale(targetScale, targetScale);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "windowAdapter", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "resizeNodeList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=feb68ea7b12c06251e7ad0230b34da7f6a08bfa4.js.map
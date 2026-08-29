System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "cc/env"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Canvas, Size, UITransform, view, Widget, IWindowResize, Orientation, BUILD, EDITOR, PREVIEW, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, AdaptWindowSize;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIWindowResize(extras) {
    _reporterNs.report("IWindowResize", "./IWindowResize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "./Config", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Canvas = _cc.Canvas;
      Size = _cc.Size;
      UITransform = _cc.UITransform;
      view = _cc.view;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      IWindowResize = _unresolved_2.IWindowResize;
    }, function (_unresolved_3) {
      Orientation = _unresolved_3.Orientation;
    }, function (_ccEnv) {
      BUILD = _ccEnv.BUILD;
      EDITOR = _ccEnv.EDITOR;
      PREVIEW = _ccEnv.PREVIEW;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68c78rBiUhFUIbgGdMVGIte", "AdaptWindowSize", undefined);

      __checkObsolete__(['_decorator', 'Canvas', 'EPSILON', 'Label', 'Node', 'Size', 'UITransform', 'view', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AdaptWindowSize", AdaptWindowSize = (_dec = ccclass('AdaptWindowSize'), _dec2 = property({
        visible: true,
        editorOnly: true,
        readonly: true
      }), _dec(_class = (_class2 = class AdaptWindowSize extends (_crd && IWindowResize === void 0 ? (_reportPossibleCrUseOfIWindowResize({
        error: Error()
      }), IWindowResize) : IWindowResize) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_description", _descriptor, this);

          this._resizeListeners = [];
          this._uiTransform = null;
          this._canvasTransform = null;
          this._canvasHtmlElement = null;
        }

        start() {
          this._uiTransform = this.node.getComponent(UITransform);
          var canvas = this.getCanvasFromParentRecursively(this.node);

          if (canvas) {
            this._canvasTransform = canvas.getComponent(UITransform);
          } else {
            console.error('AdaptWindowSize: Canvas not found');
            return;
          }

          this._canvasHtmlElement = document.getElementById('GameCanvas');
        }
        /**
         * 註冊UITransform的ContentSize修改事件，會在ContentSize修改，所有Child的Widget updateAlignment後觸發
         * @param listener 註冊的事件
         */


        addResizeListener(listener) {
          if (this._resizeListeners.indexOf(listener) === -1) {
            this._resizeListeners.push(listener);
          }
        }
        /**
         * 移除UITransform的ContentSize修改事件
         * @param listener 移除的事件
         */


        removeResizeListener(listener) {
          if (!this._resizeListeners) {
            return;
          }

          var index = this._resizeListeners.indexOf(listener);

          if (index !== -1) {
            this._resizeListeners.splice(index, 1);
          }
        }

        onWindowResize(orientation) {
          this.scheduleOnce(() => {
            this.onResize(orientation);
          });
        }

        onResize(orientation) {
          if (!this._uiTransform || !this._canvasTransform || !this._canvasHtmlElement) {
            console.error('AdaptWindowSize: UITransform or CanvasTransform or CanvasHtmlElement not found');
            return;
          }

          var actualWidth = this._canvasHtmlElement.clientWidth;
          var actualHeight = this._canvasHtmlElement.clientHeight;
          var viewSize = view.getVisibleSizeInPixel();

          if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            var actualAspectRatio = this._canvasHtmlElement.clientWidth / this._canvasHtmlElement.clientHeight;
            var canvasAspectRatio = this._canvasTransform.contentSize.width / this._canvasTransform.contentSize.height;

            if (EDITOR) {
              if (actualAspectRatio > canvasAspectRatio) {
                actualWidth = this._canvasHtmlElement.clientWidth / viewSize.width * this._canvasTransform.contentSize.width;
                actualHeight = this._canvasHtmlElement.clientHeight / viewSize.height * this._canvasTransform.contentSize.height;
              } else {
                actualWidth = this._canvasTransform.contentSize.width * viewSize.height / this._canvasHtmlElement.clientHeight;
                actualHeight = this._canvasTransform.contentSize.height;
              }
            } else if (PREVIEW || BUILD) {
              if (actualAspectRatio > canvasAspectRatio) {
                actualWidth = this._canvasHtmlElement.clientWidth * this._canvasTransform.contentSize.height / this._canvasHtmlElement.clientHeight;
                actualHeight = this._canvasTransform.contentSize.height;
              } else {
                actualWidth = this._canvasTransform.contentSize.width;
                actualHeight = this._canvasHtmlElement.clientHeight * this._canvasTransform.contentSize.width / this._canvasHtmlElement.clientWidth;
              }
            }
          } else {
            var _actualAspectRatio = this._canvasHtmlElement.clientHeight / this._canvasHtmlElement.clientWidth;

            var _canvasAspectRatio = this._canvasTransform.contentSize.height / this._canvasTransform.contentSize.width;

            if (EDITOR) {
              if (_actualAspectRatio < _canvasAspectRatio) {
                actualWidth = this._canvasHtmlElement.clientWidth / viewSize.width * this._canvasTransform.contentSize.width;
                actualHeight = this._canvasHtmlElement.clientHeight / viewSize.height * this._canvasTransform.contentSize.height;
              } else {
                actualWidth = this._canvasTransform.contentSize.width * viewSize.height / this._canvasHtmlElement.clientHeight;
                actualHeight = this._canvasTransform.contentSize.height;
              }
            } else if (PREVIEW || BUILD) {
              if (_actualAspectRatio > _canvasAspectRatio) {
                actualWidth = this._canvasTransform.contentSize.width;
                actualHeight = this._canvasHtmlElement.clientHeight * this._canvasTransform.contentSize.width / this._canvasHtmlElement.clientWidth;
              } else {
                actualWidth = this._canvasHtmlElement.clientWidth * this._canvasTransform.contentSize.height / this._canvasHtmlElement.clientHeight;
                actualHeight = this._canvasTransform.contentSize.height;
              }
            }
          }

          this._uiTransform.setContentSize(actualWidth, actualHeight);

          var widgets = this.node.getComponentsInChildren(Widget);

          for (var i = 0; i < widgets.length; i++) {
            widgets[i].updateAlignment();
          }

          for (var _i = 0; _i < this._resizeListeners.length; _i++) {
            this._resizeListeners[_i](new Size(actualWidth, actualHeight));
          }
        }
        /**
         * 遞迴向上尋找Canvas
         * @param node 
         * @returns 從node網上找第一個Canvas, 或是找不到Canvas時回傳null
         */


        getCanvasFromParentRecursively(node) {
          var canvas = node.getComponent(Canvas);

          if (canvas) {
            return canvas;
          }

          if (node.parent) {
            return this.getCanvasFromParentRecursively(node.parent);
          }

          return null;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_description", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'Auto resize the node to fit the window size while window size changes.';
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=239bba24d9bc71313f8c631c9fdb15991a54419d.js.map
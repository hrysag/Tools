System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Canvas, Component, Label, UITransform, view, _dec, _class, _crd, ccclass, ScreenInfoTest;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Canvas = _cc.Canvas;
      Component = _cc.Component;
      Label = _cc.Label;
      UITransform = _cc.UITransform;
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "84e1d2ZMMNN544f7akf11pF", "ScreenInfoTest", undefined);

      __checkObsolete__(['_decorator', 'Canvas', 'Color', 'Component', 'Label', 'Node', 'UITransform', 'view']);

      ({
        ccclass
      } = _decorator);

      _export("ScreenInfoTest", ScreenInfoTest = (_dec = ccclass('ScreenInfoTest'), _dec(_class = class ScreenInfoTest extends Component {
        constructor() {
          super(...arguments);
          this.label = null;
          this.canvasTransform = null;
        }

        start() {
          this.label = this.node.addComponent(Label);
          this.label.fontSize = 24;
          this.label.enableOutline = true;
          this.canvasTransform = this.getCanvasFromParentRecursively(this.node).getComponent(UITransform);
        }

        update(deltaTime) {
          var text = "Screen: " + screen.width + "x" + screen.height + "\n";
          text += "Window: " + window.innerWidth + "x" + window.innerHeight + "\n";
          text += "Design: " + view.getDesignResolutionSize().width + "x" + view.getDesignResolutionSize().height + "\n";

          if (this.canvasTransform) {
            text += "Canvas: " + Math.round(this.canvasTransform.width) + "x" + Math.round(this.canvasTransform.height) + "\n";
          }

          text += "VisibleSize: " + Math.round(view.getVisibleSize().width) + "x" + Math.round(view.getVisibleSize().height) + "\n";
          text += "VisiblePixels: " + Math.round(view.getVisibleSizeInPixel().width) + "x" + Math.round(view.getVisibleSizeInPixel().height) + "\n";
          var canvasElement = document.getElementById('GameCanvas');

          if (canvasElement) {
            text += "Client: " + canvasElement.clientWidth + "x" + canvasElement.clientHeight + "\n";
            text += "Offset: " + canvasElement.offsetWidth + "x" + canvasElement.offsetHeight + "\n";
            text += "Scroll: " + canvasElement.scrollWidth + "x" + canvasElement.scrollHeight + "\n";
          }

          this.label.string = text;
        }

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

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b649b4e1866dc153852dd400b1b52fe01a0c6aa4.js.map
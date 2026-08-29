System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Size, view, ResolutionPolicy, director, game, screen, macro, Resize, _crd;

  _export("Resize", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Size = _cc.Size;
      view = _cc.view;
      ResolutionPolicy = _cc.ResolutionPolicy;
      director = _cc.director;
      game = _cc.game;
      screen = _cc.screen;
      macro = _cc.macro;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e7ef6HUfg1JR5iXgo7+fUUX", "Resize", undefined);

      __checkObsolete__(['_decorator', 'Size', 'view', 'ResolutionPolicy', 'director', 'game', 'screen', 'macro']);

      _export("Resize", Resize = class Resize {
        constructor(leftBG, rightBG) {
          this.leftBG = void 0;
          this.rightBG = void 0;

          this.resize = () => {
            var devicePixelRatio = screen.devicePixelRatio;
            var designResolutionSize = view.getDesignResolutionSize();
            screen.windowSize = new Size(window.innerWidth, window.innerHeight);
            var windowSize = screen.windowSize;
            var containerW = windowSize.width;
            var containerH = windowSize.height;
            var designW = designResolutionSize.width;
            var designH = designResolutionSize.height;
            var scaleX = containerW / designW;
            var scaleY = containerH / designH;
            var scale = 0;
            var contentW;
            var contentH;

            if (scaleX < scaleY) {
              scale = scaleX;
              contentW = containerW;
              contentH = designH * scale;
            } else {
              scale = scaleY;
              contentW = designW * scale;
              contentH = containerH;
            }

            var x = Math.round(0.5 * (containerW - contentW) / devicePixelRatio);
            var y = Math.round(0.5 * (containerH - contentH) / devicePixelRatio);
            var w = Math.round(contentW / devicePixelRatio);
            var h = Math.round(contentH / devicePixelRatio);
            game.canvas.style.position = "absolute";
            game.canvas.style.width = w + "px";
            game.canvas.style.height = h + "px";
            game.canvas.style.left = x + "px";
            game.canvas.style.top = y + "px";
            director.root.resize(contentW, contentH);
            x += w;
            w = (Math.round(containerW / devicePixelRatio) - w) * 0.5;
            h = Math.round(containerH / devicePixelRatio);
            this.leftBG.style.width = w + "px"; // this.leftBG.style.height = `${h}px`;

            this.rightBG.style.left = x + "px";
            this.rightBG.style.width = w + "px"; // this.rightBG.style.height = `${h}px`;
          };

          this.leftBG = leftBG;
          game.canvas.parentNode.appendChild(this.leftBG);
          this.rightBG = rightBG;
          game.canvas.parentNode.appendChild(this.rightBG);
          view.setOrientation(macro.ORIENTATION_PORTRAIT);
          view.setResolutionPolicy(ResolutionPolicy.EXACT_FIT);
          this.resize();
          window.addEventListener('resize', this.resize); // view.setResizeCallback(this.resize);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ded6daaca7c0b4b3414e5918656383490fbf1f3d.js.map
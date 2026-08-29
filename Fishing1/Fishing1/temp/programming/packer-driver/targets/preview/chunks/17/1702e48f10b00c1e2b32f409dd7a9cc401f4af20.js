System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, view, macro, screen, ResolutionPolicy, sys, game, director, Rect, ResizeTool, _crd;

  _export("ResizeTool", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      view = _cc.view;
      macro = _cc.macro;
      screen = _cc.screen;
      ResolutionPolicy = _cc.ResolutionPolicy;
      sys = _cc.sys;
      game = _cc.game;
      director = _cc.director;
      Rect = _cc.Rect;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8415cdpTetE75vC1xeOfDdA", "ResizeTool", undefined);
      /**
       * Created by EricHuang on 2023/12/25.
       */


      __checkObsolete__(['view', 'macro', 'screen', 'ResolutionPolicy', 'sys', 'Size', 'game', 'director', 'CameraComponent', 'Rect']);

      __checkObsolete__(['log']);

      _export("ResizeTool", ResizeTool = class ResizeTool {
        static getInstance() {
          return ResizeTool._instance ? ResizeTool._instance : new ResizeTool();
        }

        set cameraComponent(value) {
          this._cameraComponent = value;
        }

        set originalWidth(value) {
          this._originalWidth = value;
        }

        set newWidth(value) {
          this._newWidth = value;
        }

        constructor() {
          this._cameraComponent = void 0;
          this._originalWidth = void 0;
          this._newWidth = void 0;
          this.timeoutID = void 0;

          this.resize = () => {
            //return;
            //log("resize");
            // iOS 17.1以上且是safari才有的bug，疑似太早取得window.innerWidth跟innerHeight，所以要晚一點發resize
            //-https://forum.cocos.org/t/topic/155054/17
            //if (sys.isMobile && sys.browserType === sys.BrowserType.SAFARI && this.getIOSVersion() >= 17) 
            if (sys.isMobile) {
              clearTimeout(this.timeoutID);
              this.timeoutID = setTimeout(() => {
                // 不知道為什麼isFrameRotated會被改成false，導致轉回直的也沒鎖橫屏。
                // 原本就是landscape再call一次landscape過不了。
                view.setOrientation(macro.ORIENTATION_PORTRAIT);
                view.setOrientation(macro.ORIENTATION_LANDSCAPE);
                window.dispatchEvent(new Event('resize'));
              }, 500);
            }

            var devicePixelRatio = screen.devicePixelRatio;
            var designResolutionSize = view.getDesignResolutionSize();
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
            } //let viewportW:number=this._clipWidth*scaleX;
            //let viewportH:number=this._clipWidth*scaleY;


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
            var webview = document.getElementById('webview-wrapper');

            if (webview) {
              webview.style.bottom = y + "px";
              webview.style.left = x + "px";
            } //let ogScaleSize:number=this._originalWidth*scaleX;


            if (this._cameraComponent) {
              var cameraComponent = this._cameraComponent;
              var originalWidth = this._originalWidth;
              var newWidth = this._newWidth;
              var currentViewport = cameraComponent.camera.viewport;
              var currentWidth = currentViewport.width;
              var widthRatio = newWidth / originalWidth;
              var newViewportWidth = currentWidth * widthRatio; // 將新的相機視口寬度限制在最小為1的範圍內

              var clampedNewWidth = Math.max(newViewportWidth, 1); // 計算新的 x 座標以保持視口中心對齊

              var newViewportX = currentViewport.x + (currentViewport.width - clampedNewWidth) / 2;
              var rect = new Rect(newViewportX, currentViewport.y, clampedNewWidth, currentViewport.height);

              this._cameraComponent.camera.setViewportInOrientedSpace(rect);
              /*
              this._cameraComponent.camera.viewport=new Rect(
                  newViewportX, 
                  viewportRect.y, 
                  newViewportWidth, 
                  viewportRect.height
              );*/

            }
          };

          if (ResizeTool._instance != null) {
            throw new Error('plz use getInstance()');
          }

          ResizeTool._instance = this;
          view.setOrientation(macro.ORIENTATION_LANDSCAPE);
          view.setResolutionPolicy(ResolutionPolicy.EXACT_FIT);
          this._cameraComponent = null;
          this._originalWidth = -1;
          this._newWidth = -1;
        }
        /**
         * after set _cameraComponent,_originalWidth,_newWidth
         */


        init() {
          //--橫豎螢幕的旋轉
          view.setOrientation(macro.ORIENTATION_LANDSCAPE);
          this.resize();
          view.on('canvas-resize', this.resize);
        }

        getIOSVersion() {
          var match = window.navigator.userAgent.match(/(iPhone OS|iPad OS) (\d+)_(\d+)/);
          var osVersion = null;

          if (match && match.length === 4) {
            osVersion = match[2]; // 取得版本號

            return Number(osVersion);
          }

          return 0;
        }
        /*
        constructor()
        {
        view.setOrientation(macro.ORIENTATION_LANDSCAPE);
        view.setResizeCallback(() => {
            this.updateViewport()
        });
        this.updateViewport();
        }
         private updateViewport() {
            const policy = view.getResolutionPolicy();
            const width = screen.windowSize.width;
            const height =  screen.windowSize.height;
            const ratio = width / height;
             if (ratio >= 16 / 9) {
                policy.setContentStrategy(ResolutionPolicy.ContentStrategy.FIXED_HEIGHT)
            } else {
                policy.setContentStrategy(ResolutionPolicy.ContentStrategy.FIXED_WIDTH)
            }
            view.setResolutionPolicy(policy);
        }*/


      });

      ResizeTool._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1702e48f10b00c1e2b32f409dd7a9cc401f4af20.js.map
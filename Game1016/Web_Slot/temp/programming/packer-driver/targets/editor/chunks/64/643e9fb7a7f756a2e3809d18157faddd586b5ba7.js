System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "cc/env", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ResolutionPolicy, screen, view, director, Enum, Canvas, RotationResize, Debug, Orientation, OrientationMode, RotationContentResize, OrientationTip, EDITOR, AutoOrientation, IWindowResize, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, property, DESIGN_WIDTH, DESIGN_HEIGHT, ResolutionPolicyValue, ScreenAdapter;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRotationResize(extras) {
    _reporterNs.report("RotationResize", "./RotationResize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "./Debug", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "./Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientationMode(extras) {
    _reporterNs.report("OrientationMode", "./Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRotationContentResize(extras) {
    _reporterNs.report("RotationContentResize", "./RotationContentResize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientationTip(extras) {
    _reporterNs.report("OrientationTip", "../GameScripts/OrientationTip", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoOrientation(extras) {
    _reporterNs.report("AutoOrientation", "./AutoOrientation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWindowResize(extras) {
    _reporterNs.report("IWindowResize", "./IWindowResize", _context.meta, extras);
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
      ResolutionPolicy = _cc.ResolutionPolicy;
      screen = _cc.screen;
      view = _cc.view;
      director = _cc.director;
      Enum = _cc.Enum;
      Canvas = _cc.Canvas;
    }, function (_unresolved_2) {
      RotationResize = _unresolved_2.RotationResize;
    }, function (_unresolved_3) {
      Debug = _unresolved_3.Debug;
    }, function (_unresolved_4) {
      Orientation = _unresolved_4.Orientation;
      OrientationMode = _unresolved_4.OrientationMode;
    }, function (_unresolved_5) {
      RotationContentResize = _unresolved_5.RotationContentResize;
    }, function (_unresolved_6) {
      OrientationTip = _unresolved_6.OrientationTip;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_7) {
      AutoOrientation = _unresolved_7.AutoOrientation;
    }, function (_unresolved_8) {
      IWindowResize = _unresolved_8.IWindowResize;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "50b850H+w1G1qw8Yrl+sVUV", "ScreenAdapter", undefined);

      __checkObsolete__(['_decorator', 'Component', 'ResolutionPolicy', 'screen', 'view', 'Camera', 'director', 'Enum', 'sys', 'game', 'error', 'Canvas']);

      ({
        ccclass,
        property
      } = _decorator);
      DESIGN_WIDTH = 1280;
      DESIGN_HEIGHT = 720;

      ResolutionPolicyValue = /*#__PURE__*/function (ResolutionPolicyValue) {
        ResolutionPolicyValue[ResolutionPolicyValue["EXACT_FIT"] = 0] = "EXACT_FIT";
        ResolutionPolicyValue[ResolutionPolicyValue["NO_BORDER"] = 1] = "NO_BORDER";
        ResolutionPolicyValue[ResolutionPolicyValue["SHOW_ALL"] = 2] = "SHOW_ALL";
        ResolutionPolicyValue[ResolutionPolicyValue["FIXED_HEIGHT"] = 3] = "FIXED_HEIGHT";
        ResolutionPolicyValue[ResolutionPolicyValue["FIXED_WIDTH"] = 4] = "FIXED_WIDTH";
        ResolutionPolicyValue[ResolutionPolicyValue["UNKNOWN"] = 5] = "UNKNOWN";
        return ResolutionPolicyValue;
      }(ResolutionPolicyValue || {});

      _export("ScreenAdapter", ScreenAdapter = (_dec = ccclass('ScreenAdapter'), _dec2 = property({
        type: Enum(_crd && OrientationMode === void 0 ? (_reportPossibleCrUseOfOrientationMode({
          error: Error()
        }), OrientationMode) : OrientationMode),
        tooltip: '設定螢幕方向'
      }), _dec3 = property({
        type: Enum(ResolutionPolicyValue),
        displayName: 'Landscape',
        tooltip: '橫版的自適配模式'
      }), _dec4 = property({
        type: Enum(ResolutionPolicyValue),
        displayName: 'Portrait',
        tooltip: '直版的自適配模式'
      }), _dec(_class = (_class2 = (_class3 = class ScreenAdapter extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "orientationMode", _descriptor, this);

          _initializerDefineProperty(this, "landscapeResolutionPolicy", _descriptor2, this);

          _initializerDefineProperty(this, "portraitResolutionPolicy", _descriptor3, this);

          this.autoOrientations = [];
          this.cameras = [];
          this.orientationTip = null;

          this.onWindowResize = () => {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).Log("onWindowResize");
            this.resetDesignResolution(screen.windowSize.width, screen.windowSize.height);
          };

          this.onOrientationChange = () => {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).Log("onOrientationChange");
            this.resetDesignResolution(screen.windowSize.width, screen.windowSize.height);
          };
        }

        start() {
          const canvasResizeEvent = 'canvas-resize';
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log("ScreenAdapter start");
          screen.on("orientation-change", this.onOrientationChange, this);
          screen.on("window-resize", this.onWindowResize, this);
          this.autoOrientations = this.getComponentsInChildren(_crd && AutoOrientation === void 0 ? (_reportPossibleCrUseOfAutoOrientation({
            error: Error()
          }), AutoOrientation) : AutoOrientation);

          switch (this.orientationMode) {
            case (_crd && OrientationMode === void 0 ? (_reportPossibleCrUseOfOrientationMode({
              error: Error()
            }), OrientationMode) : OrientationMode).Landscape:
              view.setResolutionPolicy(this.landscapeResolutionPolicy);
              break;

            case (_crd && OrientationMode === void 0 ? (_reportPossibleCrUseOfOrientationMode({
              error: Error()
            }), OrientationMode) : OrientationMode).Portrait:
              view.setResolutionPolicy(this.portraitResolutionPolicy);
              break;

            case (_crd && OrientationMode === void 0 ? (_reportPossibleCrUseOfOrientationMode({
              error: Error()
            }), OrientationMode) : OrientationMode).Both:
            default:
              if (screen.windowSize.width >= screen.windowSize.height) {
                view.setResolutionPolicy(this.landscapeResolutionPolicy);
              } else {
                view.setResolutionPolicy(this.portraitResolutionPolicy);
              }

              break;
          }

          this.resetDesignResolution(screen.windowSize.width, screen.windowSize.height);
          view.emit(canvasResizeEvent); // 這行是為了讓畫面立即更新，因為3.8.4有一進入後canvas跑版的問題 3.8.5記得拿掉再試試看

          let canvases = director.getScene().getComponentsInChildren(Canvas);
          this.cameras = canvases.map(canvas => canvas.cameraComponent);

          if (this.orientationMode !== (_crd && OrientationMode === void 0 ? (_reportPossibleCrUseOfOrientationMode({
            error: Error()
          }), OrientationMode) : OrientationMode).Both) {
            this.orientationTip = director.getScene().getComponentInChildren(_crd && OrientationTip === void 0 ? (_reportPossibleCrUseOfOrientationTip({
              error: Error()
            }), OrientationTip) : OrientationTip);

            if (this.orientationTip) {
              this.orientationTip.init(this.orientationMode);
              this.orientationTip.checkOrientation(this.orientationMode);
            } else {
              console.error("OrientationTip not found");
            }
          }
        }

        onDestroy() {
          screen.off("orientation-change", this.onOrientationChange, this);
          screen.off("window-resize", this.onWindowResize, this);
        }

        forceResize() {
          this.resetDesignResolution(screen.windowSize.width, screen.windowSize.height);
        }

        resetDesignResolution(windowWidth, windowHeight) {
          switch (this.orientationMode) {
            case (_crd && OrientationMode === void 0 ? (_reportPossibleCrUseOfOrientationMode({
              error: Error()
            }), OrientationMode) : OrientationMode).Landscape:
              this.setToLandscape(windowWidth, windowHeight);
              break;

            case (_crd && OrientationMode === void 0 ? (_reportPossibleCrUseOfOrientationMode({
              error: Error()
            }), OrientationMode) : OrientationMode).Portrait:
              this.setToPortrait(windowWidth, windowHeight);
              break;

            case (_crd && OrientationMode === void 0 ? (_reportPossibleCrUseOfOrientationMode({
              error: Error()
            }), OrientationMode) : OrientationMode).Both:
            default:
              if (windowWidth >= windowHeight) {
                this.setToLandscape(windowWidth, windowHeight);
              } else {
                this.setToPortrait(windowWidth, windowHeight);
              }

              break;
          }

          let resizeComponents = director.getScene().getComponentsInChildren(_crd && RotationResize === void 0 ? (_reportPossibleCrUseOfRotationResize({
            error: Error()
          }), RotationResize) : RotationResize);

          for (let item of resizeComponents) {
            item.resetPosition(ScreenAdapter.UI_Orientation);
            item.onRotationResize == null || item.onRotationResize(ScreenAdapter.UI_Orientation);
          }

          let resizeContent = director.getScene().getComponentsInChildren(_crd && RotationContentResize === void 0 ? (_reportPossibleCrUseOfRotationContentResize({
            error: Error()
          }), RotationContentResize) : RotationContentResize);

          for (let item of resizeContent) {
            item.onRotationResize(ScreenAdapter.UI_Orientation);
          }

          const windowResizeComponents = this.getComponentsInChildren(_crd && IWindowResize === void 0 ? (_reportPossibleCrUseOfIWindowResize({
            error: Error()
          }), IWindowResize) : IWindowResize);

          for (let item of windowResizeComponents) {
            item.onWindowResize(ScreenAdapter.UI_Orientation);
          }

          for (let item of this.autoOrientations) {
            item.onResize(ScreenAdapter.UI_Orientation);
          }

          if (this.orientationTip) {
            this.orientationTip.checkOrientation(this.orientationMode);
          }

          if (EDITOR) {
            for (let camera of this.cameras) {
              camera.orthoHeight = view.getVisibleSize().height / 2;
            }
          }
        }

        setToLandscape(windowWidth, windowHeight) {
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log("橫版模式");

          if (ScreenAdapter.UI_Orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            return;
          }

          ScreenAdapter.UI_Orientation = (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape; // view.setOrientation(macro.ORIENTATION_LANDSCAPE); //手機瀏覽器打開這行反而會壞

          view.setDesignResolutionSize(DESIGN_WIDTH, DESIGN_HEIGHT, this.landscapeResolutionPolicy);
        }

        setToPortrait(windowWidth, windowHeight) {
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log("直版模式");

          if (ScreenAdapter.UI_Orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait) {
            return;
          }

          ScreenAdapter.UI_Orientation = (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait; // view.setOrientation(macro.ORIENTATION_PORTRAIT); //手機瀏覽器打開這行反而會壞

          view.setDesignResolutionSize(DESIGN_HEIGHT, DESIGN_WIDTH, this.portraitResolutionPolicy);
        }

      }, _class3.UI_Orientation = (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
        error: Error()
      }), Orientation) : Orientation).Landscape, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "orientationMode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && OrientationMode === void 0 ? (_reportPossibleCrUseOfOrientationMode({
            error: Error()
          }), OrientationMode) : OrientationMode).Both;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "landscapeResolutionPolicy", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return ResolutionPolicy.SHOW_ALL;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "portraitResolutionPolicy", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return ResolutionPolicy.SHOW_ALL;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=643e9fb7a7f756a2e3809d18157faddd586b5ba7.js.map
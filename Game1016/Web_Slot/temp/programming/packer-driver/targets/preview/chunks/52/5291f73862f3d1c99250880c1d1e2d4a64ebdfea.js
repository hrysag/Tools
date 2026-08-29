System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Orientation, RotationResize, ScreenAdapter, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, RotateHideNode;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "db://assets/Scripts/GameScripts/Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRotationResize(extras) {
    _reporterNs.report("RotationResize", "db://assets/Scripts/Utils/Orientation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScreenAdapter(extras) {
    _reporterNs.report("ScreenAdapter", "db://assets/Scripts/Utils/Orientation", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Orientation = _unresolved_2.Orientation;
    }, function (_unresolved_3) {
      RotationResize = _unresolved_3.RotationResize;
      ScreenAdapter = _unresolved_3.ScreenAdapter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "537947a5j9KRaBP3osMkRPx", "RotateHideNode", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RotateHideNode", RotateHideNode = (_dec = ccclass('RotateHideNode'), _dec2 = property([Node]), _dec3 = property([Node]), _dec(_class = (_class2 = class RotateHideNode extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node_L", _descriptor, this);

          _initializerDefineProperty(this, "node_P", _descriptor2, this);
        }

        start() {
          this.node.getComponent(_crd && RotationResize === void 0 ? (_reportPossibleCrUseOfRotationResize({
            error: Error()
          }), RotationResize) : RotationResize).onRotationResize = this.onRotateResize.bind(this);
          this.onRotateResize((_crd && ScreenAdapter === void 0 ? (_reportPossibleCrUseOfScreenAdapter({
            error: Error()
          }), ScreenAdapter) : ScreenAdapter).UI_Orientation);
        }

        onRotateResize(orientation) {
          if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            for (var i = 0; i < this.node_L.length; i++) {
              this.node_L[i].active = true;
            }

            for (var _i = 0; _i < this.node_P.length; _i++) {
              this.node_P[_i].active = false;
            }
          } else if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait) {
            for (var _i2 = 0; _i2 < this.node_L.length; _i2++) {
              this.node_L[_i2].active = false;
            }

            for (var _i3 = 0; _i3 < this.node_P.length; _i3++) {
              this.node_P[_i3].active = true;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_L", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_P", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5291f73862f3d1c99250880c1d1e2d4a64ebdfea.js.map
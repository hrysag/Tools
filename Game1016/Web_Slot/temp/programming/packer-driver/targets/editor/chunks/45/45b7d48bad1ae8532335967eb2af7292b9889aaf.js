System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCBoolean, Component, Node, Vec3, Orientation, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, RotationResize;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../GameScripts/Definition", _context.meta, extras);
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
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Orientation = _unresolved_2.Orientation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b64b0PLBYZPEZJLX2KIs+fQ", "RotationResize", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RotationResize", RotationResize = (_dec = ccclass('RotationResize'), _dec2 = property(CCBoolean), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class RotationResize extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "setToRefChild", _descriptor, this);

          _initializerDefineProperty(this, "refLandscape", _descriptor2, this);

          _initializerDefineProperty(this, "refPortrait", _descriptor3, this);

          this.onRotationResize = null;
        }

        resetPosition(orientation) {
          if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            if (this.refLandscape) {
              if (this.setToRefChild) {
                this.node.setParent(this.refLandscape);
                this.node.setPosition(Vec3.ZERO);
                this.node.setScale(Vec3.ONE);
              } else {
                this.node.setPosition(this.refLandscape.position);
                this.node.setScale(this.refLandscape.scale);
              }
            }
          } else if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait) {
            if (this.refPortrait) {
              if (this.setToRefChild) {
                this.node.setParent(this.refPortrait);
                this.node.setPosition(Vec3.ZERO);
                this.node.setScale(Vec3.ONE);
              } else {
                this.node.setPosition(this.refPortrait.position);
                this.node.setScale(this.refPortrait.scale);
              }
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "setToRefChild", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "refLandscape", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "refPortrait", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=45b7d48bad1ae8532335967eb2af7292b9889aaf.js.map
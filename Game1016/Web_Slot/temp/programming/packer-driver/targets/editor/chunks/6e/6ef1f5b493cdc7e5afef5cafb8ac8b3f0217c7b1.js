System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCBoolean, Component, Node, Orientation, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, AutoOrientation;

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
    }, function (_unresolved_2) {
      Orientation = _unresolved_2.Orientation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c24cr6TtBNxqlD30V97YGn", "AutoOrientation", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'Component', 'Node', 'log', 'screen']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AutoOrientation", AutoOrientation = (_dec = ccclass('AutoOrientation'), _dec2 = property(CCBoolean), _dec3 = property([Node]), _dec4 = property([Node]), _dec(_class = (_class2 = class AutoOrientation extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "switchChild", _descriptor, this);

          _initializerDefineProperty(this, "landscape", _descriptor2, this);

          _initializerDefineProperty(this, "portrait", _descriptor3, this);

          this.onResizeCall = null;
        }

        onResize(orientation) {
          if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            this.changeToLandscape();
          } else if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait) {
            this.changeToPortrait();
          }

          if (this.onResizeCall) {
            this.onResizeCall(orientation);
          }
        }

        changeToLandscape() {
          for (let i = 0; i < this.landscape.length; i += 1) {
            const landscapeNode = this.landscape[i];
            const portraitNode = this.portrait[i]; // 注意順序

            landscapeNode.active = true;

            if (this.switchChild) {
              while (portraitNode.children.length !== 0) {
                portraitNode.children[0].parent = landscapeNode;
              }
            }

            portraitNode.active = false;
          }
        }

        changeToPortrait() {
          for (let i = 0; i < this.landscape.length; i += 1) {
            const landscapeNode = this.landscape[i];
            const portraitNode = this.portrait[i]; // 注意順序

            portraitNode.active = true;

            if (this.switchChild) {
              while (landscapeNode.children.length !== 0) {
                // log(`切換${landscapeNode.children[0].name} to ${portraitNode.name}`);
                landscapeNode.children[0].parent = portraitNode;
              }
            }

            landscapeNode.active = false;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "switchChild", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "landscape", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "portrait", [_dec4], {
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
//# sourceMappingURL=6ef1f5b493cdc7e5afef5cafb8ac8b3f0217c7b1.js.map
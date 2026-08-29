System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, UITransform, Orientation, IWindowResize, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, AutoOrientWithResizeAndMove;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "db://assets/Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWindowResize(extras) {
    _reporterNs.report("IWindowResize", "db://assets/Scripts/Utils/IWindowResize", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      Orientation = _unresolved_2.Orientation;
    }, function (_unresolved_3) {
      IWindowResize = _unresolved_3.IWindowResize;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c637IFDKtGypsOmkoiWybN", "AutoOrientWithResizeAndMove", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AutoOrientWithResizeAndMove", AutoOrientWithResizeAndMove = (_dec = ccclass('AutoOrientWithResizeAndMove'), _dec2 = property({
        type: Node,
        visible: true,
        tooltip: 'slotMachineNodeForUiTransform'
      }), _dec3 = property([Node]), _dec4 = property([Node]), _dec(_class = (_class2 = class AutoOrientWithResizeAndMove extends (_crd && IWindowResize === void 0 ? (_reportPossibleCrUseOfIWindowResize({
        error: Error()
      }), IWindowResize) : IWindowResize) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_targetTransformNode", _descriptor, this);

          _initializerDefineProperty(this, "landscape", _descriptor2, this);

          _initializerDefineProperty(this, "portrait", _descriptor3, this);

          this._currentOrientation = null;
        }

        onWindowResize(orientation) {
          if (this._currentOrientation === orientation) return; // 如果當前方向與新方向相同，則不進行任何操作

          this._currentOrientation = orientation; // 更新當前方向

          if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            this.changeToLandscape();
          } else if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait) {
            this.changeToPortrait();
          }

          this.otherProcessForOrientation(orientation);
        } //--to override it


        otherProcessForOrientation(orientation) {
          if (this._targetTransformNode) {
            var targetUITransform = this._targetTransformNode.getComponent(UITransform);

            var contentSize = targetUITransform.contentSize; //console.log('check_slotMask_contentSize', contentSize);

            var target = this.portrait[0].children[0] || this.landscape[0].children[0];

            if (target) {
              var targetTransform = target.getComponent(UITransform);
              targetTransform.setContentSize(contentSize.width, contentSize.height);
            }
          }
        }

        moveTargetTo(target, container) {
          if (!target || !container) return;
          target.removeFromParent(); // 強制脫離當前 parent

          container.addChild(target);
          target.setPosition(0, 0, 0);
        }

        changeToLandscape() {
          //--很確定裡面只會裝一個才這樣寫的
          var target = this.portrait[0].children[0] || this.landscape[0].children[0];

          if (target) {
            var landscapeNode = this.landscape[0];
            var portraitNode = this.portrait[0];
            landscapeNode.active = true;
            portraitNode.active = false;
            this.moveTargetTo(target, landscapeNode);
          }
        }

        changeToPortrait() {
          var target = this.portrait[0].children[0] || this.landscape[0].children[0];

          if (target) {
            var landscapeNode = this.landscape[0];
            var portraitNode = this.portrait[0];
            portraitNode.active = true;
            landscapeNode.active = false;
            this.moveTargetTo(target, portraitNode);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_targetTransformNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "landscape", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "portrait", [_dec4], {
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
//# sourceMappingURL=d8bd3def87659768625d8ed65dc94383d19b81a7.js.map
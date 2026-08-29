System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCBoolean, Node, Orientation, IWindowResize, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, AutoOrientAndSetPos;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../../../../../Scripts/Utils/Config", _context.meta, extras);
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
      CCBoolean = _cc.CCBoolean;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Orientation = _unresolved_2.Orientation;
    }, function (_unresolved_3) {
      IWindowResize = _unresolved_3.IWindowResize;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e80f0ZXnFPgqgbuMSGFvxA", "AutoOrientAndSetPos", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'Component', 'Node', 'log', 'screen']);

      /**
       * 繼承原本的 AutoOrientation 類別
       * 這個類別是用來處理自動旋轉的擴展
       * 因為有些只是需要切換動畫的key即可
       */
      ({
        ccclass,
        property
      } = _decorator);

      _export("AutoOrientAndSetPos", AutoOrientAndSetPos = (_dec = ccclass('AutoOrientAndSetPos'), _dec2 = property(CCBoolean), _dec3 = property([Node]), _dec4 = property([Node]), _dec(_class = (_class2 = class AutoOrientAndSetPos extends (_crd && IWindowResize === void 0 ? (_reportPossibleCrUseOfIWindowResize({
        error: Error()
      }), IWindowResize) : IWindowResize) {
        constructor() {
          super(...arguments);

          /**
           * 換容器+setPosition(0,0,0)
           */
          _initializerDefineProperty(this, "switchChild", _descriptor, this);

          _initializerDefineProperty(this, "landscape", _descriptor2, this);

          _initializerDefineProperty(this, "portrait", _descriptor3, this);
        }

        onWindowResize(orientation) {
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


        otherProcessForOrientation(orientation) {}

        changeToLandscape() {
          for (var i = 0; i < this.landscape.length; i += 1) {
            var landscapeNode = this.landscape[i];
            var portraitNode = this.portrait[i]; // 注意順序

            landscapeNode.active = true;

            if (this.switchChild) {
              while (portraitNode.children.length !== 0) {
                var target = portraitNode.children[0];
                target.parent = landscapeNode;
                target.setPosition(0, 0, 0);
              }
            }

            portraitNode.active = false;
          }
        }

        changeToPortrait() {
          for (var i = 0; i < this.landscape.length; i += 1) {
            var landscapeNode = this.landscape[i];
            var portraitNode = this.portrait[i]; // 注意順序

            portraitNode.active = true;

            if (this.switchChild) {
              while (landscapeNode.children.length !== 0) {
                // log(`切換${landscapeNode.children[0].name} to ${portraitNode.name}`);
                var target = landscapeNode.children[0];
                target.parent = portraitNode;
                target.setPosition(0, 0, 0);
              }
            }

            landscapeNode.active = false;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "switchChild", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
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
//# sourceMappingURL=5806ab5582862cdb6a022079f14a0d4bf7fb3c10.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCString, Component, EditBox, Node, animation, Debug, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, AniGraphTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../../Scripts/Utils/Debug", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCString = _cc.CCString;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      Node = _cc.Node;
      animation = _cc.animation;
    }, function (_unresolved_2) {
      Debug = _unresolved_2.Debug;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7174dQtp8FJxKxPmlls/FTR", "AniGraphTest", undefined);

      __checkObsolete__(['_decorator', 'CCString', 'Component', 'EditBox', 'Node', 'animation', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AniGraphTest", AniGraphTest = (_dec = ccclass('AniGraphTest'), _dec2 = property(Node), _dec3 = property([CCString]), _dec4 = property(EditBox), _dec(_class = (_class2 = class AniGraphTest extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "animationNode", _descriptor, this);

          _initializerDefineProperty(this, "triggerName", _descriptor2, this);

          _initializerDefineProperty(this, "editBox", _descriptor3, this);
        }

        start() {
          this.editBox.string = "0";
        }

        update(deltaTime) {}

        onButtonClick() {
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log("123456");
          var id = parseInt(this.editBox.string);
          (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
            error: Error()
          }), Debug) : Debug).Log(this.triggerName[id]);
          this.animationNode.getComponent(animation.AnimationController).setValue(this.triggerName[id], true);
        }

        onButtonClick2() {//let a = this.animationNode.getComponent(animation.AnimationController).getCurrentClipStatuses(0);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "animationNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "triggerName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "editBox", [_dec4], {
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
//# sourceMappingURL=fdf28d4368df7fafa2002d4d561eb148b68a3bd7.js.map
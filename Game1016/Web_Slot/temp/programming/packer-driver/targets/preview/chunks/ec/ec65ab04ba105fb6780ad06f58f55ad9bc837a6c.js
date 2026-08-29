System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Color, Component, Label, GenericUIRes, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, NumberSelectBtn;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGenericUIRes(extras) {
    _reporterNs.report("GenericUIRes", "./GenericUIRes", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Color = _cc.Color;
      Component = _cc.Component;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      GenericUIRes = _unresolved_2.GenericUIRes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7877fR5tx9BRao2NeZNvQuV", "NumberSelectBtn", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NumberSelectBtn", NumberSelectBtn = (_dec = ccclass('NumberSelectBtn'), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = class NumberSelectBtn extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "label", _descriptor, this);

          this.setLabel = str => {
            this.label.string = "" + str;
          };
        }

        init() {}

        setNormalStatus() {
          this.getComponent(Button).normalSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
            error: Error()
          }), GenericUIRes) : GenericUIRes).instance.fromBtnNormal;
          this.getComponent(Button).hoverSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
            error: Error()
          }), GenericUIRes) : GenericUIRes).instance.fromBtnHover;
          this.getComponent(Button).pressedSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
            error: Error()
          }), GenericUIRes) : GenericUIRes).instance.fromBtnNormal;
          this.getComponent(Button).disabledSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
            error: Error()
          }), GenericUIRes) : GenericUIRes).instance.fromBtnNormal;
          var labels = this.getComponentsInChildren(Label);

          for (var item of labels) {
            item.color = new Color(206, 205, 205);
          }
        }

        setSelectedStatus() {
          this.getComponent(Button).normalSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
            error: Error()
          }), GenericUIRes) : GenericUIRes).instance.fromBtnSelected;
          this.getComponent(Button).hoverSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
            error: Error()
          }), GenericUIRes) : GenericUIRes).instance.fromBtnSelected;
          this.getComponent(Button).pressedSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
            error: Error()
          }), GenericUIRes) : GenericUIRes).instance.fromBtnSelected;
          this.getComponent(Button).disabledSprite = (_crd && GenericUIRes === void 0 ? (_reportPossibleCrUseOfGenericUIRes({
            error: Error()
          }), GenericUIRes) : GenericUIRes).instance.fromBtnNormal;
          var labels = this.getComponentsInChildren(Label);

          for (var item of labels) {
            item.color = Color.WHITE;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ec65ab04ba105fb6780ad06f58f55ad9bc837a6c.js.map
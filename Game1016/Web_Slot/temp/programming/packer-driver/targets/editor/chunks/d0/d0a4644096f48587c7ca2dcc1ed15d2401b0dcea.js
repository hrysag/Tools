System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, instantiate, Label, Node, Utility, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, GameRecordDropdownMenu;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../../Scripts/Utils/Utility", _context.meta, extras);
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
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Utility = _unresolved_2.Utility;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e404chGQNJPbbglI2A3hzpH", "GameRecordDropdownMenu", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EventTouch', 'instantiate', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameRecordDropdownMenu", GameRecordDropdownMenu = (_dec = ccclass('GameRecordDropdownMenu'), _dec2 = property(Button), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Node), _dec(_class = (_class2 = class GameRecordDropdownMenu extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mainButton", _descriptor, this);

          _initializerDefineProperty(this, "mainButtonLabel", _descriptor2, this);

          _initializerDefineProperty(this, "scrollNode", _descriptor3, this);

          _initializerDefineProperty(this, "ngButton", _descriptor4, this);

          _initializerDefineProperty(this, "fgButton", _descriptor5, this);

          _initializerDefineProperty(this, "fgButtonList", _descriptor6, this);

          _initializerDefineProperty(this, "contentRoot", _descriptor7, this);

          this.onNGBtnClickCallback = null;
          this.onFGBtnClickCallback = null;
        }

        init(fgAmount) {
          for (let i = 0; i < fgAmount; i++) {
            this.generateFGBtn();
          }

          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.mainButton.node, this, 'onMainBtnClick');
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(this.ngButton.node, this, 'onNGBtnClick');
        }

        generateFGBtn() {
          let id = this.fgButtonList.length;
          let newFGBtn = instantiate(this.fgButton.node);
          newFGBtn.setParent(this.contentRoot);
          newFGBtn.setActive(true);
          newFGBtn.name = 'FG_' + (id + 1);
          newFGBtn.getComponentInChildren(Label).string = newFGBtn.name;
          this.fgButtonList.push(newFGBtn.getComponent(Button));
          (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).addEventHandlerToButton(newFGBtn, this, 'onFGBtnClick', id.toString());
        }

        onNGBtnClick() {
          var _this$onNGBtnClickCal;

          this.scrollNode.active = false;
          this.mainButtonLabel.string = 'NG';
          (_this$onNGBtnClickCal = this.onNGBtnClickCallback) == null || _this$onNGBtnClickCal.call(this);
        }

        onFGBtnClick(event, customEventData) {
          var _this$onFGBtnClickCal;

          this.scrollNode.active = false;
          let id = parseInt(customEventData);
          this.mainButtonLabel.string = `FG_${id + 1}`;
          (_this$onFGBtnClickCal = this.onFGBtnClickCallback) == null || _this$onFGBtnClickCal.call(this, id);
        }

        onMainBtnClick() {
          this.scrollNode.active = !this.scrollNode.active;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mainButtonLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scrollNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ngButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "fgButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "fgButtonList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "contentRoot", [_dec8], {
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
//# sourceMappingURL=d0a4644096f48587c7ca2dcc1ed15d2401b0dcea.js.map
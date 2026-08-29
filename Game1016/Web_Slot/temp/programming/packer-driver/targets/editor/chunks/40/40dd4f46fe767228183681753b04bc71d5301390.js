System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, ActionEventPlayer, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _dec5, _dec6, _class4, _class5, _descriptor4, _crd, ccclass, property, ExampleSet, FXExampleScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfActionEventPlayer(extras) {
    _reporterNs.report("ActionEventPlayer", "../Script/Event/ActionEventPlayer", _context.meta, extras);
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
    }, function (_unresolved_2) {
      ActionEventPlayer = _unresolved_2.ActionEventPlayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d75c7pyymVOxKynmxYu0+VS", "FXExampleScene", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ExampleSet", ExampleSet = (_dec = ccclass('ExampleSet'), _dec2 = property(Button), _dec3 = property(_crd && ActionEventPlayer === void 0 ? (_reportPossibleCrUseOfActionEventPlayer({
        error: Error()
      }), ActionEventPlayer) : ActionEventPlayer), _dec4 = property(_crd && ActionEventPlayer === void 0 ? (_reportPossibleCrUseOfActionEventPlayer({
        error: Error()
      }), ActionEventPlayer) : ActionEventPlayer), _dec(_class = (_class2 = class ExampleSet {
        constructor() {
          _initializerDefineProperty(this, "button", _descriptor, this);

          _initializerDefineProperty(this, "player", _descriptor2, this);

          _initializerDefineProperty(this, "player2", _descriptor3, this);
        }

        init() {
          this.button.node.on(Button.EventType.CLICK, () => {
            var _this$player;

            console.log('button press');
            this.player.play();
            (_this$player = this.player2) == null || _this$player.play();
          }, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "player2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _export("FXExampleScene", FXExampleScene = (_dec5 = ccclass('FXExampleScene'), _dec6 = property({
        type: [ExampleSet]
      }), _dec5(_class4 = (_class5 = class FXExampleScene extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "exampleSets", _descriptor4, this);
        }

        start() {
          for (let i = 0; i < this.exampleSets.length; i++) {
            this.exampleSets[i].init();
          }
        }

      }, (_descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "exampleSets", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=40dd4f46fe767228183681753b04bc71d5301390.js.map
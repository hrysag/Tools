System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, CCInteger, Node, Utility, GenericSound, AudioManager, AutoSpinAreaBase, AutoSpinSelectButton, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ToggleGroupArea;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../../../../Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenericSound(extras) {
    _reporterNs.report("GenericSound", "../../../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../../../Utils/Audio", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoSpinAreaBase(extras) {
    _reporterNs.report("AutoSpinAreaBase", "./AutoSpinAreaBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoSpinSelectButton(extras) {
    _reporterNs.report("AutoSpinSelectButton", "./AutoSpinSelectButton", _context.meta, extras);
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
      CCInteger = _cc.CCInteger;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Utility = _unresolved_2.Utility;
    }, function (_unresolved_3) {
      GenericSound = _unresolved_3.GenericSound;
    }, function (_unresolved_4) {
      AudioManager = _unresolved_4.AudioManager;
    }, function (_unresolved_5) {
      AutoSpinAreaBase = _unresolved_5.AutoSpinAreaBase;
    }, function (_unresolved_6) {
      AutoSpinSelectButton = _unresolved_6.AutoSpinSelectButton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "edacfRhQqBMdrR6L85MyFAO", "ToggleGroupArea", undefined);

      __checkObsolete__(['_decorator', 'Button', 'CCInteger', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ToggleGroupArea", ToggleGroupArea = (_dec = ccclass('ToggleGroupArea'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: CCInteger,
        displayName: '預設選項 index'
      }), _dec(_class = (_class2 = class ToggleGroupArea extends (_crd && AutoSpinAreaBase === void 0 ? (_reportPossibleCrUseOfAutoSpinAreaBase({
        error: Error()
      }), AutoSpinAreaBase) : AutoSpinAreaBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "toggleGroupRoot", _descriptor, this);

          _initializerDefineProperty(this, "selectedID", _descriptor2, this);

          this.toggleGroupBtns = [];

          this.onToggleBtnClick = (event, customEventData) => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).instance.playGenericSound((_crd && GenericSound === void 0 ? (_reportPossibleCrUseOfGenericSound({
              error: Error()
            }), GenericSound) : GenericSound).Public_Choice);
            let id = parseInt(customEventData);
            this.setSelectedBtn(id);
          };
        }

        init() {
          this.toggleGroupRoot.children.forEach((child, index) => {
            const button = child.getComponent(Button);
            button.getComponent(_crd && AutoSpinSelectButton === void 0 ? (_reportPossibleCrUseOfAutoSpinSelectButton({
              error: Error()
            }), AutoSpinSelectButton) : AutoSpinSelectButton).init();
            (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).addEventHandlerToButton(button.node, this, 'onToggleBtnClick', index.toString());
            this.toggleGroupBtns.push(button);
          });
          this.setSelectedBtn(this.selectedID);
        }

        setSelectedBtn(id) {
          this.selectedID = id;

          for (let i = 0; i < this.toggleGroupBtns.length; i++) {
            this.toggleGroupBtns[i].getComponent(_crd && AutoSpinSelectButton === void 0 ? (_reportPossibleCrUseOfAutoSpinSelectButton({
              error: Error()
            }), AutoSpinSelectButton) : AutoSpinSelectButton).setNormalStatus();
          }

          this.toggleGroupBtns[this.selectedID = id].getComponent(_crd && AutoSpinSelectButton === void 0 ? (_reportPossibleCrUseOfAutoSpinSelectButton({
            error: Error()
          }), AutoSpinSelectButton) : AutoSpinSelectButton).setSelectedStatus();
        }

        getCustomData() {
          return this.selectedID;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggleGroupRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "selectedID", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5b739b793c3d28b8b1aca606fe7e0728388a10f9.js.map
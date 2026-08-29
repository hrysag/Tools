System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, Node, Button, CCInteger, Toggle, AlertPanel, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, menu, SettingsPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAlertPanel(extras) {
    _reporterNs.report("AlertPanel", "./AlertPanel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Button = _cc.Button;
      CCInteger = _cc.CCInteger;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      AlertPanel = _unresolved_2.AlertPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d38acal5GBN7KGbEPcBTKUJ", "SettingsPanel", undefined);

      __checkObsolete__(['CCString', 'Component', 'Prefab', '_decorator', 'instantiate', 'Node', 'Label', 'CCBoolean', 'EventHandler', 'Button', 'Input', 'CCObject', 'CCInteger', 'Toggle']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      _export("SettingsPanel", SettingsPanel = (_dec = ccclass(), _dec2 = menu('BigWings/SettingsPanel'), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: CCInteger
      }), _dec8 = property({
        type: CCInteger,
        visible: false
      }), _dec9 = property({
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = class SettingsPanel extends Component {
        constructor(...args) {
          super(...args);
          // @property( { type: CCBoolean } )
          this.useContainer = false;

          _initializerDefineProperty(this, "navigationBar", _descriptor, this);

          // @property( { type: Node } )
          // protected backgroud: Node;
          _initializerDefineProperty(this, "tabBar", _descriptor2, this);

          _initializerDefineProperty(this, "viewControllers", _descriptor3, this);

          _initializerDefineProperty(this, "tabBarItems", _descriptor4, this);

          _initializerDefineProperty(this, "_selectedIndex", _descriptor5, this);

          this.helpButton = void 0;
          this.infoButton = void 0;

          _initializerDefineProperty(this, "closeButton", _descriptor6, this);
        }

        get selectedIndex() {
          return this._selectedIndex;
        }

        set selectedIndex(value) {
          console.log(`selectedIndex: ${value}`, this._selectedIndex);

          if (this._selectedIndex !== value) {
            this.selectedTabBarItem(value);
            this.showView(value);
          }

          this._selectedIndex = value;
        }

        // public title: string;
        onLoad() {
          // 初始化
          if (this.tabBar) {
            this.tabBar.parent.active = true;
            this.tabBar.active = true;
          }

          if (this.navigationBar) {
            this.navigationBar.parent.active = true;
            this.navigationBar.active = true;
          }

          if (this.closeButton) {
            this.closeButton.on(Button.EventType.CLICK, () => this.hide());
          }

          if (this.infoButton) {
            this.infoButton.on(Button.EventType.CLICK, () => {});
          }

          console.log(`Menu`, this.tabBarItems.length); // (this.tabBarItems[0] as Node).on(Button.EventType.CLICK, () => {
          //     console.log(`tabBarItems`);
          // });

          console.log(`AlertPanel.getInstance()`, (_crd && AlertPanel === void 0 ? (_reportPossibleCrUseOfAlertPanel({
            error: Error()
          }), AlertPanel) : AlertPanel).getInstance());
          this.selectedTabBarItem(this._selectedIndex);
          this.showView(this._selectedIndex);
        }

        start() {
          this.registerTabBarItemEvent();
        }

        selectedTabBarItem(selectedIndex) {
          const {
            tabBarItems
          } = this;
          tabBarItems.forEach((item, index) => {
            let button = item.getComponent(Toggle);
            button.isChecked = index === selectedIndex;
          });
        }

        showView(selectedIndex) {
          const {
            viewControllers
          } = this;
          console.log(`showView: ${selectedIndex}`);
          viewControllers.forEach((view, index) => {
            return view.active = index === selectedIndex;
          });
        }

        registerTabBarItemEvent() {
          const {
            tabBarItems
          } = this;
          tabBarItems.forEach((item, index) => {
            item.on(Button.EventType.CLICK, () => {
              this.selectedIndex = index;
              if (index != 0) return;
              let button = item.getComponent(Toggle);
              button.node.on(Toggle.EventType.CLICK, async () => {
                await (_crd && AlertPanel === void 0 ? (_reportPossibleCrUseOfAlertPanel({
                  error: Error()
                }), AlertPanel) : AlertPanel).getInstance().alert({
                  message: '您確定要離開遊戲?',
                  confirmButtonText: '離開',
                  confirmButtonVisible: true,
                  cancelButtonText: '繼續',
                  cancelButtonVisible: true
                });
              }, this);
            });
          });
        }

        show(selectedIndex) {
          if (typeof selectedIndex == 'number') {
            this.selectedIndex = selectedIndex;
          }

          this.node.active = true;
        }

        hide() {
          this.node.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "navigationBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tabBar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "viewControllers", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tabBarItems", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "selectedIndex", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "selectedIndex"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_selectedIndex", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 3;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "closeButton", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d6f962b2dff44ad3152a60e0f69e3caa05e2de26.js.map
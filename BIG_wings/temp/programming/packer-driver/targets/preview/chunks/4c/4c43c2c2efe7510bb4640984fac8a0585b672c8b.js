System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCString, Component, Prefab, _decorator, instantiate, Label, CCBoolean, Button, Input, CCObject, UtilsKit, BasicDialog, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _crd, ccclass, property, menu, AlertMessageSection, AlertPanel, DialogEventTypes;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _reportPossibleCrUseOfAlertOptions(extras) {
    _reporterNs.report("AlertOptions", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIfAlertPanel(extras) {
    _reporterNs.report("IfAlertPanel", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAlertPanelEventMap(extras) {
    _reporterNs.report("AlertPanelEventMap", "@casino-mono/mvc", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEmitter(extras) {
    _reporterNs.report("Emitter", "strict-event-emitter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilsKit(extras) {
    _reporterNs.report("UtilsKit", "../lib/UtilsKit", _context.meta, extras);
  }

  _export("BasicDialog", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCString = _cc.CCString;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      CCBoolean = _cc.CCBoolean;
      Button = _cc.Button;
      Input = _cc.Input;
      CCObject = _cc.CCObject;
    }, function (_unresolved_2) {
      UtilsKit = _unresolved_2.UtilsKit;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35c27nF6kVBcLbCoEd+Ggmy", "AlertPanel", undefined);

      __checkObsolete__(['CCString', 'Component', 'Prefab', '_decorator', 'instantiate', 'Node', 'Label', 'CCBoolean', 'EventHandler', 'Button', 'Input', 'CCObject']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      AlertMessageSection = {
        name: 'AlertContent',
        style: 'section'
      };

      _export("AlertPanel", AlertPanel = (_dec = ccclass('AlertPanel'), _dec2 = menu('BigWings/AlertPanel'), _dec3 = property({
        type: CCString,
        tooltip: "標題",
        group: AlertMessageSection
      }), _dec4 = property({
        type: CCString,
        tooltip: "文字訊息",
        group: AlertMessageSection
      }), _dec5 = property({
        type: CCBoolean,
        displayName: "ConfirmVisible",
        tooltip: "顯示確認按鈕",
        visible: function visible() {
          return !this.iconButton;
        },
        group: AlertMessageSection
      }), _dec6 = property({
        type: CCString,
        displayName: "ConfirmText",
        tooltip: "確認按鈕文字",
        visible: function visible() {
          return this.confirmButtonVisible && !this.iconButton;
        },
        group: AlertMessageSection
      }), _dec7 = property({
        type: CCBoolean,
        displayName: "CancelVisible",
        tooltip: "顯示取消按鈕",
        visible: function visible() {
          return !this.iconButton;
        },
        group: AlertMessageSection
      }), _dec8 = property({
        type: CCString,
        displayName: "CancelText",
        tooltip: "取消按鈕文字",
        visible: function visible() {
          return this.cancelButtonVisible && !this.iconButton;
        },
        group: AlertMessageSection
      }), _dec9 = property({
        type: CCBoolean,
        group: AlertMessageSection
      }), _dec10 = property({
        type: CCBoolean,
        tooltip: "使用Perfab",
        displayName: "prefabEnabled"
      }), _dec11 = property({
        type: Prefab,
        tooltip: "ALERT物件",
        visible: function visible() {
          return this.prefabEnabled;
        }
      }), _dec12 = property({
        type: CCObject,
        visible: false
      }), _dec13 = property({
        type: Prefab,
        tooltip: ""
      }), _dec(_class = _dec2(_class = (_class2 = (_class3 = class AlertPanel extends Component {
        set title(value) {
          this.alertMessageOptions.title = value;
        }

        get title() {
          return this.alertMessageOptions.title;
        }

        set message(value) {
          this.alertMessageOptions.message = value;
        }

        get message() {
          return this.alertMessageOptions.message;
        }

        set confirmButtonVisible(value) {
          this.alertMessageOptions.confirmButtonVisible = value;
        }

        get confirmButtonVisible() {
          return this.alertMessageOptions.confirmButtonVisible;
        }

        set confirmButtonText(value) {
          this.alertMessageOptions.confirmButtonText = value;
        }

        get confirmButtonText() {
          return this.alertMessageOptions.confirmButtonText;
        }

        set cancelButtonVisible(value) {
          this.alertMessageOptions.cancelButtonVisible = value;
        }

        get cancelButtonVisible() {
          return this.alertMessageOptions.cancelButtonVisible;
        }

        set cancelButtonText(value) {
          this.alertMessageOptions.cancelButtonText = value;
        }

        get cancelButtonText() {
          return this.alertMessageOptions.cancelButtonText;
        }

        set iconButton(value) {
          this.alertMessageOptions.iconButton = value;
        }

        get iconButton() {
          return this.alertMessageOptions.iconButton;
        }

        constructor() {
          super();

          _initializerDefineProperty(this, "prefabEnabled", _descriptor, this);

          _initializerDefineProperty(this, "alertPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "alertMessageOptions", _descriptor3, this);

          /** alert物件子節點位置名稱 */
          this.subviewName = "systemView";

          /** 所有會用到的Alert Template */
          this.alertDialogs = ['alertBasicNone', 'alertBasic', 'alertDialog', 'iconAlertDialog'];

          /** 子節點Node */
          this.subview = void 0;

          /** 目前執行的 */
          this.current = null;

          /** 預設: 無按鈕 */
          this.alertBasicNone = null;

          /** 1個按鈕 */
          this.alertBasic = null;

          /** 2個按鈕 */
          this.alertDialog = null;

          /** ICON按鈕 */
          this.iconAlertDialog = null;
          // speedAlertDialog

          /** 換洗分版型 */
          this.exchangeAlertDialog = null;
          this.event = void 0;

          _initializerDefineProperty(this, "templateAlertPrefab", _descriptor4, this);

          if (!AlertPanel.singleton) AlertPanel.singleton = this;
        } // 建構物件


        create() {
          var {
            alertPrefab
          } = this;

          if (this.prefabEnabled && alertPrefab) {
            this.subview = instantiate(this.alertPrefab);
            this.node.addChild(this.subview);
          } else {
            this.subview = this.node.getChildByName(this.subviewName);
          }

          console.log("AlertPanel.loading.create()");
        } // 呼叫


        alert(options) {
          this.node.active = true; // 優先執行

          var {
            title,
            message,
            cancelButtonVisible,
            cancelButtonText,
            confirmButtonVisible,
            confirmButtonText,
            iconButton,
            duration
          } = options;
          if (title) this.title = options.title;
          if (message) this.message = options.message;

          if (cancelButtonVisible) {
            this.alertMessageOptions.cancelButtonVisible = cancelButtonVisible;
            this.alertMessageOptions.cancelButtonText = cancelButtonText;
          } else {
            this.alertMessageOptions.cancelButtonVisible = false;
            this.alertMessageOptions.cancelButtonText = '';
          }

          if (confirmButtonVisible) {
            this.alertMessageOptions.confirmButtonVisible = cancelButtonVisible;
            this.alertMessageOptions.confirmButtonText = confirmButtonText;
          } else {
            this.alertMessageOptions.confirmButtonVisible = false;
            this.alertMessageOptions.confirmButtonText = '';
          }

          this.alertMessageOptions.iconButton = iconButton === true;

          if (Number.isInteger(duration)) {
            this.alertMessageOptions.duration = duration;
          } else {
            this.alertMessageOptions.duration = 0;
          }

          if (iconButton === true) {
            this.current = this.iconAlertDialog;
          } else if (confirmButtonVisible && cancelButtonVisible) {
            this.current = this.alertDialog;
          } else if (confirmButtonVisible) {
            this.current = this.alertBasic;
          } else {
            this.current = this.alertBasicNone;
          }

          var {
            alertMessageOptions
          } = this;
          return this.current.display(alertMessageOptions);
        }

        onLoad() {
          this.create();
          var [alertBasicNone, alertBasic, alertDialog, iconAlertDialog] = this.alertDialogs;
          this.alertBasicNone = new BasicDialog(this.node, this.subview.getChildByName(alertBasicNone));
          this.alertBasic = new BasicDialog(this.node, this.subview.getChildByName(alertBasic));
          this.alertDialog = new BasicDialog(this.node, this.subview.getChildByName(alertDialog));
          this.iconAlertDialog = new BasicDialog(this.node, this.subview.getChildByName(iconAlertDialog)); // this.exchangeAlertDialog = new BasicDialog(this.node, this.subview.getChildByName('exchangeAlertDialog'));
        }

        start() {}
        /**
         * 清除
         */


        clear() {
          this.alertBasicNone.clear();
          this.alertBasic.clear();
          this.alertDialog.clear();
          this.iconAlertDialog.clear();
        }

        static getInstance() {
          if (!AlertPanel.singleton) {// 由GUI實作時建立
          }

          return AlertPanel.singleton;
        }

      }, _class3.singleton = null, _class3), (_applyDecoratedDescriptor(_class2.prototype, "title", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "title"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "message", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "message"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "confirmButtonVisible", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "confirmButtonVisible"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "confirmButtonText", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "confirmButtonText"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "cancelButtonVisible", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "cancelButtonVisible"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "cancelButtonText", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "cancelButtonText"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "iconButton", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "iconButton"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefabEnabled", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "alertPrefab", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "alertMessageOptions", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return {
            title: "系統訊息",
            message: "",
            confirmButtonText: "確定",
            confirmButtonVisible: false,
            cancelButtonText: "取消",
            cancelButtonVisible: false,
            iconButton: false,
            duration: 0
          };
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "templateAlertPrefab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class));

      _export("DialogEventTypes", DialogEventTypes = /*#__PURE__*/function (DialogEventTypes) {
        DialogEventTypes[DialogEventTypes["CLOSE"] = 0] = "CLOSE";
        DialogEventTypes[DialogEventTypes["ACCEPT"] = 1] = "ACCEPT";
        DialogEventTypes[DialogEventTypes["CANCEL"] = 2] = "CANCEL";
        DialogEventTypes[DialogEventTypes["BACKDROP"] = 3] = "BACKDROP";
        DialogEventTypes[DialogEventTypes["ESC"] = 4] = "ESC";
        DialogEventTypes[DialogEventTypes["TIMEOUT"] = 5] = "TIMEOUT";
        return DialogEventTypes;
      }({}));

      _export("BasicDialog", BasicDialog = class BasicDialog {
        constructor(endpoint, dialogNode) {
          this.endpoint = null;
          this.node = null;
          this.title = null;
          this.label = null;
          this.backdrop = null;
          this.closeButton = null;
          this.confirmButton = null;
          this.confirmButtonText = null;
          this.cancelButton = null;
          this.cancelButtonText = null;
          this.accept = null;
          this.reject = null;
          this.resolve = void 0;
          this.endpoint = endpoint;
          this.node = dialogNode;
          this.title = this.node.getChildByName('title').getComponent(Label);
          this.label = this.node.getChildByName('label').getComponent(Label);
          this.closeButton = this.node.getChildByName('closeBtn');
          this.backdrop = this.node.parent.getChildByName('black');
          var text;

          if (this.confirmButton = this.node.getChildByName('confirmBtn')) {
            text = this.confirmButton.getChildByName('text');

            if (text) {
              var _text;

              this.confirmButtonText = (_text = text) == null ? void 0 : _text.getComponent(Label);
            }
          }

          if (this.cancelButton = this.node.getChildByName('cancelBtn')) {
            text = this.cancelButton.getChildByName('text');

            if (text) {
              var _text2;

              this.cancelButtonText = (_text2 = text) == null ? void 0 : _text2.getComponent(Label);
            }
          } // const event = new EventHandler();
          // event.target = endpoint;
          // event.component = 'AlertPanel';
          // event.handler = 'onclick';
          // let closeButton = this.node.getChildByName('closeBtn');
          // console.log(`closeButton`, closeButton);
          // closeButton.getComponent(Button).clickEvents.push(event);
          // closeButton.getComponent(Button).interactable = true;

        }
        /**
         * 初始化按鈕物件
         */


        setup() {
          var {
            closeButton,
            backdrop,
            confirmButton,
            cancelButton
          } = this;

          if (closeButton) {
            closeButton.on(Button.EventType.CLICK, () => this.onCloseClick());
          }

          if (backdrop) {
            backdrop.on(Input.EventType.TOUCH_END, () => this.onBackDropClick());
            backdrop.on(Input.EventType.MOUSE_UP, event => this.onBackDropClick());
          }

          if (confirmButton) {
            confirmButton.on(Button.EventType.CLICK, () => {
              this.onResolve({
                state: DialogEventTypes.ACCEPT,
                isAccept: true,
                isCancel: false
              });
            });
          }

          if (cancelButton) {
            cancelButton.on(Button.EventType.CLICK, () => {
              this.onResolve({
                state: DialogEventTypes.CANCEL,
                isAccept: false,
                isCancel: true
              });
            });
          }
        }
        /**
         * 背景關閉視窗
         */


        onBackDropClick() {
          this.onResolve({
            state: DialogEventTypes.BACKDROP,
            isAccept: false,
            isCancel: false
          });
        }
        /**
         * 關閉按鈕事件
         */


        onCloseClick() {
          this.onResolve({
            state: DialogEventTypes.CLOSE,
            isAccept: false,
            isCancel: true
          });
        }

        onResolve(event) {
          if (this.resolve) {
            this.clear();
            this.resolve(event);
          }

          this.resolve = null;
        }
        /**
         * 顯示Alert
         * @param options 
         * @returns 
         */


        display(options) {
          var {
            node,
            endpoint
          } = this;
          node.active = true;
          endpoint.active = true;
          console.log("display", this.node.name, options);
          var {
            title,
            label,
            cancelButtonText,
            confirmButtonText
          } = this;

          if (title && options.title) {
            title.string = options.title;
          }

          if (label && options.message) {
            label.string = options.message;
          }

          if (!options.iconButton && cancelButtonText) {
            cancelButtonText.string = options.cancelButtonText;
          }

          if (!options.iconButton && confirmButtonText) {
            confirmButtonText.string = options.confirmButtonText;
          } // MOUSE_UP, CLICK 相同按鈕事件會觸發該事件MOUSE_UP, 延遲註冊


          setTimeout(() => this.setup(), 0);

          if (options.duration > 0) {
            (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
              error: Error()
            }), UtilsKit) : UtilsKit).Defer(options.duration).then(() => {
              this.onResolve({
                state: DialogEventTypes.TIMEOUT,
                isAccept: false,
                isCancel: false
              });
            });
          }

          return new Promise(resolve => {
            this.resolve = resolve;
          });
        }
        /**
         * 清除物件
         */


        clear() {
          var {
            closeButton,
            backdrop,
            confirmButton,
            cancelButton
          } = this;

          if (closeButton) {
            closeButton.off(Button.EventType.CLICK);
          }

          if (backdrop) {
            backdrop.off(Input.EventType.MOUSE_UP);
            backdrop.off(Input.EventType.TOUCH_END);
          }

          if (confirmButton) {
            confirmButton.off(Button.EventType.CLICK);
          }

          if (cancelButton) {
            cancelButton.off(Button.EventType.CLICK);
          }

          this.node.active = false;
          this.endpoint.active = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4c43c2c2efe7510bb4640984fac8a0585b672c8b.js.map
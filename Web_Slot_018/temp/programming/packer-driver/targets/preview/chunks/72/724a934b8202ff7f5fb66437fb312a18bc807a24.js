System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, DynamicAtlasManager, macro, Node, GenericUIManager, SlotRelayLang, GameSetting, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ZGenericUISceneTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGenericUIManager(extras) {
    _reporterNs.report("GenericUIManager", "./GenericUIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "../../Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSetting(extras) {
    _reporterNs.report("GameSetting", "../../Scripts/GameScripts/GameSetting", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      DynamicAtlasManager = _cc.DynamicAtlasManager;
      macro = _cc.macro;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      GenericUIManager = _unresolved_2.GenericUIManager;
    }, function (_unresolved_3) {
      SlotRelayLang = _unresolved_3.SlotRelayLang;
    }, function (_unresolved_4) {
      GameSetting = _unresolved_4.GameSetting;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5f85sxrHpDZqBbRKtmud4I", "ZGenericUISceneTest", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'DynamicAtlasManager', 'dynamicAtlasManager', 'EventHandler', 'EventTouch', 'macro', 'Node', 'NodeEventType']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ZGenericUISceneTest", ZGenericUISceneTest = (_dec = ccclass('ZGenericUISceneTest'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class ZGenericUISceneTest extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "button", _descriptor, this);

          _initializerDefineProperty(this, "spriteNode", _descriptor2, this);
        }

        start() {
          // const clickEventHandler = new EventHandler();
          // clickEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点
          // clickEventHandler.component = 'ZGenericUISceneTest';// 这个是脚本类名
          // clickEventHandler.handler = 'onBtnClick';
          // clickEventHandler.customEventData = 'foobar';
          // const button = this.button.getComponent(Button);
          // button.clickEvents.push(clickEventHandler);
          // this.spriteNode.on(NodeEventType.MOUSE_DOWN, () => {
          //     Debug.Log("Sprite click");
          // });
          // Node.EventType
          // let name = this.name;
          // Debug.Log(name);
          // Debug.Log(this.constructor.name);
          // Debug.Log(name.indexOf('<'));
          // Debug.Log(name.indexOf('>'));
          // Debug.Log(name.slice(name.indexOf('<'), name.indexOf('>')));
          // Utility.addEventHandlerToButton(this.button, this, this.onBtnClick, 'wahaha');
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.init((_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
            error: Error()
          }), SlotRelayLang) : SlotRelayLang).tw); // 為了測試，直接把GameSetting裡面的下注金額列表設定進去，一般要透過PlayerInfo來設定

          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setBetSelectInfos((_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).platformBetValueList);
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setBetValue((_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).platformBetValueList[0]); // GenericUIManager.instance.setBetSelectInfos(GenericUIConfig.BET_VALUE_LIST, PlayerInfo.betMin, PlayerInfo.betMax);
          // GenericUIManager.instance.setTwoLevelTurboMode(true);

          console.log(DynamicAtlasManager.instance.enabled);
          console.log(macro.CLEANUP_IMAGE_CACHE);
        }

        update(deltaTime) {}

        onBtnClick(event, data) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spriteNode", [_dec3], {
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
//# sourceMappingURL=724a934b8202ff7f5fb66437fb312a18bc807a24.js.map
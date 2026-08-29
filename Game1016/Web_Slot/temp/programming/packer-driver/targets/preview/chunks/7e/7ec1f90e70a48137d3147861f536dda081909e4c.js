System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, SpriteFrame, GenericUIManager, SlotRelayLang, PlayerInfo, GameSetting, BuyFeatureCardInfo, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, ZGenericUISceneTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGenericUIManager(extras) {
    _reporterNs.report("GenericUIManager", "./GenericUIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "../../Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerInfo(extras) {
    _reporterNs.report("PlayerInfo", "../../Scripts/Player/PlayerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSetting(extras) {
    _reporterNs.report("GameSetting", "../../Scripts/GameScripts/GameSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyFeatureCardInfo(extras) {
    _reporterNs.report("BuyFeatureCardInfo", "./BuyFeatureCard", _context.meta, extras);
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
      Node = _cc.Node;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      GenericUIManager = _unresolved_2.GenericUIManager;
    }, function (_unresolved_3) {
      SlotRelayLang = _unresolved_3.SlotRelayLang;
    }, function (_unresolved_4) {
      PlayerInfo = _unresolved_4.PlayerInfo;
    }, function (_unresolved_5) {
      GameSetting = _unresolved_5.GameSetting;
    }, function (_unresolved_6) {
      BuyFeatureCardInfo = _unresolved_6.BuyFeatureCardInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5f85sxrHpDZqBbRKtmud4I", "ZGenericUISceneTest", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'color', 'Component', 'DynamicAtlasManager', 'dynamicAtlasManager', 'EventHandler', 'EventTouch', 'macro', 'Node', 'NodeEventType', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ZGenericUISceneTest", ZGenericUISceneTest = (_dec = ccclass('ZGenericUISceneTest'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(SpriteFrame), _dec5 = property(Node), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec13 = property(SpriteFrame), _dec(_class = (_class2 = class ZGenericUISceneTest extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "button", _descriptor, this);

          _initializerDefineProperty(this, "spriteNode", _descriptor2, this);

          _initializerDefineProperty(this, "featureSpriteFrame", _descriptor3, this);

          _initializerDefineProperty(this, "canvasNode", _descriptor4, this);

          _initializerDefineProperty(this, "normalSpriteBG", _descriptor5, this);

          _initializerDefineProperty(this, "pressedSpriteBG", _descriptor6, this);

          _initializerDefineProperty(this, "hoverSpriteBG", _descriptor7, this);

          _initializerDefineProperty(this, "disabledSpriteBG", _descriptor8, this);

          _initializerDefineProperty(this, "normalSpriteCrown", _descriptor9, this);

          _initializerDefineProperty(this, "pressedSpriteCrown", _descriptor10, this);

          _initializerDefineProperty(this, "hoverSpriteCrown", _descriptor11, this);

          _initializerDefineProperty(this, "disabledSpriteCrown", _descriptor12, this);
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
          }), SlotRelayLang) : SlotRelayLang).tw, this.canvasNode); // 為了測試，直接把GameSetting裡面的下注金額列表設定進去，一般要透過PlayerInfo來設定

          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setBetSelectInfos((_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).platformBetValueList);
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setBetValue((_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).platformBetValueList[0]); // GenericUIManager.instance.updateExtraBetTipSpriteFrame("GenericUI/ExtraBet_info")
          // GenericUIManager.instance.setBuyBonusIconBGInfo(153, new Color(1, 255, 1)); // 60% opacity

          (_crd && PlayerInfo === void 0 ? (_reportPossibleCrUseOfPlayerInfo({
            error: Error()
          }), PlayerInfo) : PlayerInfo).updateBetValueList((_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).platformBetValueList); // GenericUIManager.instance.setBetSelectInfos(GenericUIConfig.BET_VALUE_LIST, PlayerInfo.betMin, PlayerInfo.betMax);
          // GenericUIManager.instance.setTwoLevelTurboMode(true);

          var cardInfo0 = new (_crd && BuyFeatureCardInfo === void 0 ? (_reportPossibleCrUseOfBuyFeatureCardInfo({
            error: Error()
          }), BuyFeatureCardInfo) : BuyFeatureCardInfo)();
          cardInfo0.title = "Card 0 Title";
          cardInfo0.content = "Card 0 Content";
          cardInfo0.icon = this.featureSpriteFrame;
          cardInfo0.multiply = 20;
          var cardInfo1 = new (_crd && BuyFeatureCardInfo === void 0 ? (_reportPossibleCrUseOfBuyFeatureCardInfo({
            error: Error()
          }), BuyFeatureCardInfo) : BuyFeatureCardInfo)();
          cardInfo1.title = "Card 1 Title";
          cardInfo1.content = "Card 1 Content";
          cardInfo1.icon = this.featureSpriteFrame;
          cardInfo1.multiply = 40;
          var cardInfo2 = new (_crd && BuyFeatureCardInfo === void 0 ? (_reportPossibleCrUseOfBuyFeatureCardInfo({
            error: Error()
          }), BuyFeatureCardInfo) : BuyFeatureCardInfo)();
          cardInfo2.title = "Card 2 Title";
          cardInfo2.content = "Card 2 Content";
          cardInfo2.icon = this.featureSpriteFrame;
          cardInfo2.multiply = 60;
          var cardInfo3 = new (_crd && BuyFeatureCardInfo === void 0 ? (_reportPossibleCrUseOfBuyFeatureCardInfo({
            error: Error()
          }), BuyFeatureCardInfo) : BuyFeatureCardInfo)();
          cardInfo3.title = "Card 3 Title";
          cardInfo3.content = "Card 3 Content";
          cardInfo3.icon = this.featureSpriteFrame;
          cardInfo3.multiply = 80;
          var cardInfo4 = new (_crd && BuyFeatureCardInfo === void 0 ? (_reportPossibleCrUseOfBuyFeatureCardInfo({
            error: Error()
          }), BuyFeatureCardInfo) : BuyFeatureCardInfo)();
          cardInfo4.title = "Card 4 Title";
          cardInfo4.content = "Card 4 Content";
          cardInfo4.icon = this.featureSpriteFrame;
          cardInfo4.multiply = 100;
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setBuyFeatureCardInfo([cardInfo0, cardInfo1]);
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setBuyBonusOpen();
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setExtraBetOpen(1.2);

          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.onBuyFeatureModeChangeCallback = (mode, multiply, cardIndex) => {
            console.log("Buy Feature Mode Changed: " + mode + ", Multiply: " + multiply + ", Card Index: " + cardIndex);
          }; // GenericUIManager.instance.setBuyBonusBtnCustomSprite(
          //     this.normalSpriteBG, this.pressedSpriteBG, this.hoverSpriteBG, this.disabledSpriteBG,
          //     this.normalSpriteCrown, this.pressedSpriteCrown, this.hoverSpriteCrown, this.disabledSpriteCrown,
          //     "BuyFG_btn_txt"
          // );

        }

        update(deltaTime) {}

        onBtnClick1(event, data) {
          // GenericUIManager.instance.featureSettingUI.setToSpinMode();
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setBetSelectUIBetValue(100);
        }

        onBtnClick2(event, data) {
          // GenericUIManager.instance.featureSettingUI.setToNormalMode();
          (_crd && GenericUIManager === void 0 ? (_reportPossibleCrUseOfGenericUIManager({
            error: Error()
          }), GenericUIManager) : GenericUIManager).instance.setFeatureSettingUIIconsActive(true);
        }

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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "featureSpriteFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "canvasNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "normalSpriteBG", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "pressedSpriteBG", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "hoverSpriteBG", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "disabledSpriteBG", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "normalSpriteCrown", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "pressedSpriteCrown", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "hoverSpriteCrown", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "disabledSpriteCrown", [_dec13], {
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
//# sourceMappingURL=7ec1f90e70a48137d3147861f536dda081909e4c.js.map
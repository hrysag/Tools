System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, RichText, UIOpacity, UITransform, Vec3, Utility, Localization, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, TIP_WIDTH, TipMode, BottomBarUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../../Scripts/Utils/Utility", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeySpriteFramePair(extras) {
    _reporterNs.report("KeySpriteFramePair", "../../Scripts/Utils/KeySpriteFramePair", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalization(extras) {
    _reporterNs.report("Localization", "../../Scripts/GameScripts/Localization", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      RichText = _cc.RichText;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Utility = _unresolved_2.Utility;
    }, function (_unresolved_3) {
      Localization = _unresolved_3.Localization;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5036bNQW7dGv7Ef+HxoGzqR", "BottomBarUI", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'RichText', 'UIOpacity', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      TIP_WIDTH = 588;

      TipMode = /*#__PURE__*/function (TipMode) {
        TipMode[TipMode["Empty"] = 0] = "Empty";
        TipMode[TipMode["First"] = 1] = "First";
        TipMode[TipMode["Idle"] = 2] = "Idle";
        TipMode[TipMode["Gaming"] = 3] = "Gaming";
        return TipMode;
      }(TipMode || {});

      _export("BottomBarUI", BottomBarUI = (_dec = ccclass('BottomBarUI'), _dec2 = property(RichText), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec(_class = (_class2 = class BottomBarUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "tipRichText", _descriptor, this);

          _initializerDefineProperty(this, "winGroup", _descriptor2, this);

          _initializerDefineProperty(this, "winScoreLabel", _descriptor3, this);

          _initializerDefineProperty(this, "totalBetLabel", _descriptor4, this);

          _initializerDefineProperty(this, "balanceLabel", _descriptor5, this);

          _initializerDefineProperty(this, "debugLabels", _descriptor6, this);

          _initializerDefineProperty(this, "logoLabels", _descriptor7, this);

          _initializerDefineProperty(this, "versionLabels", _descriptor8, this);

          this.bottomFistShowText = "";
          this.bottomIdleShowTexts = [];
          this.bottomGamingShowTexts = [];
          this.tipMode = TipMode.Empty;

          this.showWinScore = score => {
            let originalActive = this.winGroup.active;
            this.setWinScoreActive();
            this.winScoreLabel.string = `${score.numberComma()}`;

            if (!originalActive) {
              this.winGroup.getComponent(UIOpacity).opacity = 0;
              this.scheduleOnce(() => {
                this.winGroup.getComponent(UIOpacity).opacity = 255;
              }, 0);
            }
          };

          this.setTotalBet = totalBet => {
            this.totalBetLabel.string = `${totalBet.numberComma()}`;
          };

          this.setBalance = balance => {
            this.balanceLabel.string = `${balance.numberComma()}`;
          };
        }

        init() {
          // console.log("BottomBarUI init");
          this.bottomFistShowText = 'GameMsg_000_0_1';
          this.bottomIdleShowTexts = ['GameMsg_000_2_1', 'GameMsg_000_2_2', 'GameMsg_000_2_3'];
          this.bottomGamingShowTexts = ['GameMsg_000_1_1'];
          this.showWinScore(0);
          this.setTotalBet(0);
          this.setBalance(0);
          this.tipRichText.getComponent(UITransform).width = TIP_WIDTH;
        }

        // 一進入遊戲時要先Call這個Function，顯示歡迎文字
        showBottomTextFirst() {
          this.setTipActive();
          this.setTipTextWithKey(this.bottomFistShowText, TipMode.First);
        } // 開始一局，沒有自動，進入Gaming狀態時，要Call這個Function，隨機顯示一個文字


        showBottomTextGaming() {
          this.setTipActive();
          let len = this.bottomGamingShowTexts.length;
          let id = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).getRandomInt(len);
          this.setTipTextWithKey(this.bottomGamingShowTexts[id], TipMode.Gaming);
        } // 結束一局，沒有自動，回到Idle狀態時，要Call這個Function，隨機顯示一個文字


        showBottomTextIdle() {
          this.setTipActive();
          let len = this.bottomIdleShowTexts.length;
          let id = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).getRandomInt(len);
          this.setTipTextWithKey(this.bottomIdleShowTexts[id], TipMode.Idle);
        }

        addGamingShowTexts(texts) {
          this.setTipActive();

          for (let text of texts) {
            this.bottomGamingShowTexts.push(text);
          }
        }

        showBottomTextEmpty() {
          this.setTipActive();
          this.setTipText('', TipMode.Empty);
        }

        addBottomRichTextSprite(spriteFrameMap) {
          this.tipRichText.addSpriteFrame(spriteFrameMap);
        }

        setWinScoreActive() {
          this.winGroup.active = true;
          this.tipRichText.node.active = false;
        }

        setTipActive() {
          this.winGroup.active = false;
          this.tipRichText.node.active = true;
        }

        setDebugText(text) {
          for (let label of this.debugLabels) {
            label.string = text;
          }
        }

        setVersionText(text) {
          for (let label of this.versionLabels) {
            label.string = text;
          }
        }

        setLogoText(text) {
          for (let label of this.logoLabels) {
            label.string = text;
          }
        }

        setTipText(text, tipMode) {
          this.tipMode = tipMode;
          this.tipRichText.string = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).replaceRichTextImgKey(text); //588

          let tipTransform = this.tipRichText.getComponent(UITransform);

          if (tipTransform.width <= TIP_WIDTH) {
            this.tipRichText.node.scale = Vec3.ONE;
          } else {
            let scaleNum = TIP_WIDTH / tipTransform.width;
            this.tipRichText.node.scale = new Vec3(scaleNum, scaleNum, 1);

            if (tipTransform.width / TIP_WIDTH > 1.2) {
              console.error("tipRichText is too much");
            }
          }
        }

        setTipTextWithKey(textKey, tipMode) {
          let text = (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
            error: Error()
          }), Localization) : Localization).instance.t(textKey);
          this.setTipText(text, tipMode);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tipRichText", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "winGroup", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "winScoreLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "totalBetLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "balanceLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "debugLabels", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "logoLabels", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "versionLabels", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=34b7c652211b4795c62beaa9a46eb2b2bf4d2a0b.js.map
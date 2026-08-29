System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, SpriteFrame, Sprite, Label, Vec2, v3, FindComponent, BasicPoolObject, Localization, LocalizationSprite, SlotRelayLang, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, FG_BonusCountTimes;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../../../MyUtils/FindComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicPoolObject(extras) {
    _reporterNs.report("BasicPoolObject", "../../../MyUtils/ObjectPoolManager/Compoents/BasicPoolObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalization(extras) {
    _reporterNs.report("Localization", "db://assets/Scripts/GameScripts/Localization", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalizationSprite(extras) {
    _reporterNs.report("LocalizationSprite", "db://assets/Scripts/GameScripts/LocalizationSprite", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "db://assets/Scripts/Utils/Config", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      Vec2 = _cc.Vec2;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      FindComponent = _unresolved_2.FindComponent;
    }, function (_unresolved_3) {
      BasicPoolObject = _unresolved_3.BasicPoolObject;
    }, function (_unresolved_4) {
      Localization = _unresolved_4.Localization;
    }, function (_unresolved_5) {
      LocalizationSprite = _unresolved_5.LocalizationSprite;
    }, function (_unresolved_6) {
      SlotRelayLang = _unresolved_6.SlotRelayLang;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eae13aRbApJS6uRslot7+SU", "FG_BonusCountTimes", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame', 'Sprite', 'Label', 'Vec2', 'v2', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FG_BonusCountTimes", FG_BonusCountTimes = (_dec = ccclass('FG_BonusCountTimes'), _dec2 = property({
        type: SpriteFrame,
        displayName: 'Camp0_bg_spriteFrame',
        visible: true,
        tooltip: '陣營0底圖'
      }), _dec3 = property({
        type: SpriteFrame,
        displayName: 'Camp1_bg_spriteFrame',
        visible: true,
        tooltip: '陣營1底圖'
      }), _dec4 = property({
        type: Node,
        displayName: 'BG_node',
        visible: true,
        tooltip: '換底圖的node'
      }), _dec5 = property({
        type: Node,
        displayName: 'BonusTimesNode',
        visible: true,
        tooltip: '計算bonus Time的node'
      }), _dec6 = property({
        type: Vec2,
        displayName: 'BonusTimes_cnTw',
        visible: true,
        tooltip: '計算BT_語系cn/tw的node位置'
      }), _dec7 = property({
        type: Vec2,
        displayName: 'BonusTimes_cnEn',
        visible: true,
        tooltip: '計算BT_語系en的node位置'
      }), _dec8 = property({
        type: Node,
        displayName: 'BonusTimes_Title',
        visible: true,
        tooltip: '計算語系Title的node'
      }), _dec9 = property({
        type: Vec2,
        displayName: 'BonusTimes_Title_cnTw',
        visible: true,
        tooltip: '計算語系Title_tw的node位置'
      }), _dec10 = property({
        type: Vec2,
        displayName: 'BonusTimes_Title_cnEn',
        visible: true,
        tooltip: '計算語系Title_en的node位置'
      }), _dec(_class = (_class2 = class FG_BonusCountTimes extends (_crd && BasicPoolObject === void 0 ? (_reportPossibleCrUseOfBasicPoolObject({
        error: Error()
      }), BasicPoolObject) : BasicPoolObject) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_camp0_bg_spriteFrame", _descriptor, this);

          _initializerDefineProperty(this, "_camp1_bg_spriteFrame", _descriptor2, this);

          _initializerDefineProperty(this, "_bg_node", _descriptor3, this);

          _initializerDefineProperty(this, "_bonusTimesNode", _descriptor4, this);

          _initializerDefineProperty(this, "_bonusTimes_cnTw", _descriptor5, this);

          _initializerDefineProperty(this, "_bonusTimes_cnEn", _descriptor6, this);

          _initializerDefineProperty(this, "_bonusTimes_Title", _descriptor7, this);

          _initializerDefineProperty(this, "_bonusTimes_Title_cnTw", _descriptor8, this);

          _initializerDefineProperty(this, "_bonusTimes_Title_cnEn", _descriptor9, this);

          this._currentLanguageKey = null;
          this._timesLabel = null;
        }

        onLoad() {//this._bg_node.active = true;
        }

        resetData() {
          this.reSet();
        }

        reSet() {
          this._timesLabel.string = '';
        }

        init() {
          this._timesLabel = this._bonusTimesNode.getComponent(Label);
          this.loadLanguageSprite();
        }

        async loadLanguageSprite() {
          const currentLanguageKey = (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
            error: Error()
          }), Localization) : Localization).instance.currentLangKey;

          if (this._currentLanguageKey != currentLanguageKey) {
            this._currentLanguageKey = (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
              error: Error()
            }), Localization) : Localization).instance.currentLangKey;
            const localizationSprite = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
              error: Error()
            }), FindComponent) : FindComponent).findComponentInChildren(this._bonusTimes_Title, _crd && LocalizationSprite === void 0 ? (_reportPossibleCrUseOfLocalizationSprite({
              error: Error()
            }), LocalizationSprite) : LocalizationSprite);

            if (localizationSprite) {
              await localizationSprite.loadImage(currentLanguageKey);
              let titlePos;
              let countTimesPos;

              if (this._currentLanguageKey == (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                error: Error()
              }), SlotRelayLang) : SlotRelayLang).cn || this._currentLanguageKey == (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                error: Error()
              }), SlotRelayLang) : SlotRelayLang).tw) {
                titlePos = this._bonusTimes_Title_cnTw;
                countTimesPos = this._bonusTimes_cnTw;
              } else {
                titlePos = this._bonusTimes_Title_cnEn;
                countTimesPos = this._bonusTimes_cnEn;
              }

              this._bonusTimes_Title.setPosition(v3(titlePos.x, titlePos.y, 0));

              this._bonusTimesNode.setPosition(v3(countTimesPos.x, countTimesPos.y, 0));
            }
          }
        }

        setFgCountTimes(count) {
          if (this._timesLabel) {
            this._timesLabel.string = count.toString();
          }
        }

        setCamp(camp) {
          if (camp == 0) {
            this._bg_node.getComponent(Sprite).spriteFrame = this._camp0_bg_spriteFrame;
          } else {
            this._bg_node.getComponent(Sprite).spriteFrame = this._camp1_bg_spriteFrame;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_camp0_bg_spriteFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_camp1_bg_spriteFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_bg_node", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_bonusTimesNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_bonusTimes_cnTw", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec2(0, 0);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_bonusTimes_cnEn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec2(0, 0);
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_bonusTimes_Title", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_bonusTimes_Title_cnTw", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec2(0, 0);
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_bonusTimes_Title_cnEn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec2(0, 0);
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=389238eef5efcb81347b31c4a71214fe918cff31.js.map
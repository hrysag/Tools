System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, Node, Sprite, Size, Label, HorizontalTextAlignment, Prefab, SpriteFrame, SymbolItem, BigWingsRoller, PrefabInstancePoolManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class3, _crd, ccclass, property, SymbolInfo;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSymbolItem(extras) {
    _reporterNs.report("SymbolItem", "./SymbolItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBigWingsRoller(extras) {
    _reporterNs.report("BigWingsRoller", "./BigWingsRoller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabInstancePoolManager(extras) {
    _reporterNs.report("PrefabInstancePoolManager", "../tools/PrefabInstancePoolManager", _context.meta, extras);
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
      UITransform = _cc.UITransform;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Size = _cc.Size;
      Label = _cc.Label;
      HorizontalTextAlignment = _cc.HorizontalTextAlignment;
      Prefab = _cc.Prefab;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      SymbolItem = _unresolved_2.SymbolItem;
    }, function (_unresolved_3) {
      BigWingsRoller = _unresolved_3.BigWingsRoller;
    }, function (_unresolved_4) {
      PrefabInstancePoolManager = _unresolved_4.PrefabInstancePoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae7655BbPxHMrvs1KrE/lMc", "SymbolInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'UITransform', 'Node', 'Sprite', 'Size', 'Label', 'Font', 'HorizontalTextAlignment', 'math', 'Prefab', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SymbolInfo", SymbolInfo = (_dec = ccclass('SymbolInfo'), _dec2 = property({
        type: _crd && BigWingsRoller === void 0 ? (_reportPossibleCrUseOfBigWingsRoller({
          error: Error()
        }), BigWingsRoller) : BigWingsRoller,
        tooltip: "Roller"
      }), _dec3 = property({
        type: Node,
        tooltip: "SymbolInfo背景"
      }), _dec4 = property({
        type: Node,
        tooltip: "文字賠率"
      }), _dec5 = property({
        type: Node,
        tooltip: "數字賠率表"
      }), _dec6 = property({
        type: Node,
        tooltip: "數字(數量)"
      }), _dec7 = property({
        type: Node,
        tooltip: "數字(倍率)"
      }), _dec8 = property({
        type: Prefab,
        tooltip: "符號 prefab"
      }), _dec9 = property({
        type: [SpriteFrame],
        tooltip: "文字賠率表圖片"
      }), _dec(_class = (_class2 = (_class3 = class SymbolInfo extends Component {
        constructor(...args) {
          super(...args);
          this._infoData = void 0;
          this._lastCard = void 0;
          this._card = void 0;
          this._symboleOriginWidth = void 0;
          this._symboleOriginHeight = void 0;

          _initializerDefineProperty(this, "roller", _descriptor, this);

          _initializerDefineProperty(this, "bg", _descriptor2, this);

          _initializerDefineProperty(this, "text", _descriptor3, this);

          _initializerDefineProperty(this, "numContainer", _descriptor4, this);

          _initializerDefineProperty(this, "count", _descriptor5, this);

          _initializerDefineProperty(this, "value", _descriptor6, this);

          _initializerDefineProperty(this, "symbolPrefab", _descriptor7, this);

          _initializerDefineProperty(this, "textFrame", _descriptor8, this);

          /** 賠率 */
          this._rates = void 0;

          /** 開始向左顯示的輪軸 */
          this._startRightIndex = 3;
          this._oddsTextValueXPos = 80;

          /** 所有字型 */
          this.font = void 0;

          /** 所有數字 */
          this._oddsText = void 0;

          /** 符號 */
          this._symbol = void 0;

          /** 觸發符號感應區 */
          this._listenSymbol = [];

          /** 各符號背景大小 */
          this._bgSize = void 0;
        }

        set rates(v) {
          this._rates = v;
        }

        set listenSymbol(arr) {
          this._listenSymbol = arr;
        }

        set enable(b) {
          this.node.active = b;
        }

        start() {
          this.init(); // this.showInfo(2, new math.Vec3(540, 1210), 2)
        }

        update(deltaTime) {}

        showInfo(card, position, wheelIndex) {
          this._lastCard = this._card;
          this._card = card; // this.interactive = this.buttonMode = true;
          // this.alpha = 1;

          this.setSymbol(position);
          this.setBg(wheelIndex);
          this.setContent(wheelIndex); // this.emit(SymbolInfoEvent.OPEN);
        }

        close() {
          if (this.node.active == false) return;
          this.node.active = false; // this.emit(SymbolInfoEvent.CLOSE);
        }

        init() {
          this._infoData = {
            bgSize: {
              13: [710, 874],
              // expanded wild
              1: [705, 314],
              // scatter
              12: [670, 314],
              // purple wild
              0: [710, 314],
              // golden wild
              "else": [546, 302]
            },
            bgLXPadding: 138,
            bgYPadding: 0
          };
          SymbolInfo.SpecifyID.wild = 12;
          SymbolInfo.SpecifyID.scatter = 13;
          SymbolInfo.SpecifyID['wild1'] = 0;
          SymbolInfo.SpecifyID['wild2'] = 1;
          this._bgSize = this._infoData.bgSize; // let oriSize = this.bg.getComponent(Sprite).spriteFrame.originalSize;
          // this.bg.getComponent(UITransform).setContentSize(new Size(oriSize.width * 1.5, oriSize.height));

          this.font = [];
          this.font.push(this.count.getComponent(Label).font);
          this.font.push(this.value.getComponent(Label).font);
          this.initOddText();
          this.roller.getSymbolByIndex(0);
        }
        /** 初始化數字 */


        initOddText() {
          this._oddsText = [];

          this._oddsText.push([this.count, this.value]);

          for (let i = 1; i < 4; i++) {
            let count = new Node();
            count.active = true;
            let cl = count.addComponent(Label);
            cl.useSystemFont = false;
            cl.font = this.font[0];
            cl.fontSize = this.count.getComponent(Label).fontSize;
            cl.string = "5";
            this.numContainer.addChild(count);
            let value = new Node();
            value.active = true;
            let vl = value.addComponent(Label);
            vl.useSystemFont = false;
            vl.font = this.font[1];
            vl.fontSize = this.value.getComponent(Label).fontSize;
            vl.string = "999";
            value.setPosition(this._oddsTextValueXPos, 0, 0);
            this.numContainer.addChild(value);

            this._oddsText.push([count, value]);
          }
        }
        /** 顯示時Symbol的調整 */


        setSymbol(position) {
          if (this._symbol) {
            this._symbol.changeSymbolID(this._card);
          } else {
            this._symbol = (_crd && PrefabInstancePoolManager === void 0 ? (_reportPossibleCrUseOfPrefabInstancePoolManager({
              error: Error()
            }), PrefabInstancePoolManager) : PrefabInstancePoolManager).instance.takeOut(this.symbolPrefab).getComponent(_crd && SymbolItem === void 0 ? (_reportPossibleCrUseOfSymbolItem({
              error: Error()
            }), SymbolItem) : SymbolItem);

            this._symbol.changeSymbolID(this._card);
          }

          this._symbol.node.setPosition(this.roller.node.position.x + position.x, this.roller.node.position.y + position.y); // if (this._card == SymbolInfo.SpecifyID.scatter) this._symbol.y = 0


          this.node.addChild(this._symbol.node);
          this._symboleOriginWidth = this._infoData.symboleOriginWidth ? this._infoData.symboleOriginWidth : this._symbol.getComponent(UITransform).width;
          this._symboleOriginHeight = this._infoData.symboleOriginHeight ? this._infoData.symboleOriginHeight : this._symbol.getComponent(UITransform).height;
        }
        /** 顯示時背景的調整 */


        setBg(wheelIndex) {
          this.bg.active = true;
          let [w, h] = this._bgSize[this._card] || this._bgSize["else"];
          this.bg.getComponent(UITransform).setContentSize(new Size(w, h));

          if (wheelIndex < this._startRightIndex) {
            this.bg.setPosition(this._symbol.node.position.x - this._infoData.bgLXPadding + this.bg.getComponent(UITransform).contentSize.width / 2, this._symbol.node.position.y + (this._infoData.bgYPadding ? this._infoData.bgYPadding : 0) + (this._card == SymbolInfo.SpecifyID.scatter ? -13 : 0));
          } else {
            this.bg.setPosition(this._symbol.node.position.x + (this._infoData.bgRXPadding ? this._infoData.bgRXPadding : this._infoData.bgLXPadding) - this.bg.getComponent(UITransform).contentSize.width / 2, this._symbol.node.position.y + (this._infoData.bgYPadding ? this._infoData.bgYPadding : 0) + (this._card == SymbolInfo.SpecifyID.scatter ? -13 : 0));
          }
        }
        /** 顯示時文字及賠率的調整 */


        setContent(wheelIndex) {
          if (Object.values(SymbolInfo.SpecifyID).indexOf(this._card) != -1) {
            this.numContainer.active = false;
            this.text.active = true;
            this.setSpecifyContent(wheelIndex);
          } else {
            this.text.active = false;
            this.numContainer.active = true;
            this.setNormalContent(wheelIndex);
          }
        }
        /** 設定一般符號的賠率表 */


        setNormalContent(wheelIndex) {
          let data = this._rates[this._card].slice().reverse();

          let length = data.filter(e => e > 0).length;
          let diff = length > 3 ? 55 : 60;

          for (let i = 0; i < 4; i++) {
            this._oddsText[i][0].getComponent(Label).string = "";
            this._oddsText[i][1].getComponent(Label).string = "";
            this._oddsText[i][1].getComponent(Label).horizontalAlign = HorizontalTextAlignment.LEFT;

            if (i < length) {
              this._oddsText[i][0].getComponent(Label).string = (5 - i).toString();
              this._oddsText[i][1].getComponent(Label).string = data[i].toString();

              this._oddsText[i][0].setPosition(this._oddsText[i][0].position.x, i * diff);

              this._oddsText[i][1].setPosition(this._oddsTextValueXPos, i * diff);
            }
          }

          if (wheelIndex < this._startRightIndex) {
            this.numContainer.setPosition(this._symbol.node.position.x + this._symboleOriginWidth + 70, this._symbol.node.position.y - this._symboleOriginHeight / 2 - (length < 4 ? 0 : 30));
          } else {
            this.numContainer.setPosition(this._symbol.node.position.x - this._symboleOriginWidth - 70 - this.numContainer.getComponent(UITransform).contentSize.width, this._symbol.node.position.y - this._symboleOriginHeight / 2 - (length < 4 ? 0 : 30));
          }
        }
        /** 設定特殊符號的賠率表 */


        setSpecifyContent(wheelIndex) {
          this.text.getComponent(Sprite).spriteFrame = this._card == 1 ? this.textFrame[2] : this.textFrame[1];
          if (this._card == 12) this.text.getComponent(Sprite).spriteFrame = this.textFrame[0];

          if (wheelIndex < this._startRightIndex) {
            this.text.setPosition(this._symbol.node.position.x + this._symboleOriginWidth + this.text.getComponent(UITransform).width / 2 + 40, this._symbol.node.position.y);
          } else {
            this.text.setPosition(this._symbol.node.position.x - this._symboleOriginWidth - this.text.getComponent(UITransform).width / 2 - 40, this._symbol.node.position.y);
          }
        }

      }, _class3.SpecifyID = {
        wild: 12,
        scatter: 13
      }, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "roller", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "text", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "numContainer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "count", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "symbolPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "textFrame", [_dec9], {
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
//# sourceMappingURL=63646995db36fc1723a933d5a76013c496ac157e.js.map
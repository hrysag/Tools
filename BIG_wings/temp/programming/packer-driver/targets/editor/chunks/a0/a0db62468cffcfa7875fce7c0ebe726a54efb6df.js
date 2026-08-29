System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, tween, Vec3, symbolSet_TA, PrefabInstancePoolManager, BigWingsSymbol, UtilsKit, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, WinLineType, CalculationCupboard;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfsymbolSet_TA(extras) {
    _reporterNs.report("symbolSet_TA", "../../../../techArt/game/mahjong/script/symbolSet_TA", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabInstancePoolManager(extras) {
    _reporterNs.report("PrefabInstancePoolManager", "../tools/PrefabInstancePoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBigWingsSymbol(extras) {
    _reporterNs.report("BigWingsSymbol", "../wheel/BigWingsSymbol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilsKit(extras) {
    _reporterNs.report("UtilsKit", "../lib/UtilsKit", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      symbolSet_TA = _unresolved_2.symbolSet_TA;
    }, function (_unresolved_3) {
      PrefabInstancePoolManager = _unresolved_3.PrefabInstancePoolManager;
    }, function (_unresolved_4) {
      BigWingsSymbol = _unresolved_4.BigWingsSymbol;
    }, function (_unresolved_5) {
      UtilsKit = _unresolved_5.UtilsKit;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48d96lDgihJkqDIP7hHhRmd", "CalculationCupboard", undefined);

      __checkObsolete__(['_decorator', 'Component', 'math', 'Node', 'Prefab', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WinLineType", WinLineType = /*#__PURE__*/function (WinLineType) {
        WinLineType["FLOWER"] = "flower";
        WinLineType["KONG"] = "kong";
        WinLineType["PONG"] = "pong";
        WinLineType["PAIR"] = "pair";
        return WinLineType;
      }({}));

      _export("CalculationCupboard", CalculationCupboard = (_dec = ccclass('CalculationCupboard'), _dec2 = property({
        type: Node,
        tooltip: "free置牌區"
      }), _dec3 = property({
        type: Node,
        tooltip: "花牌置牌區"
      }), _dec4 = property({
        type: Node,
        tooltip: "碰/槓/眼睛置牌區"
      }), _dec5 = property({
        type: Prefab,
        tooltip: "(算牌區)牌型 prefab"
      }), _dec(_class = (_class2 = class CalculationCupboard extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "freeArea", _descriptor, this);

          _initializerDefineProperty(this, "flowerArea", _descriptor2, this);

          _initializerDefineProperty(this, "setArea", _descriptor3, this);

          _initializerDefineProperty(this, "symbolSet", _descriptor4, this);
        }

        /**
         * 放置算牌區
         * @param typeName 牌型名稱
         * @param elementID symbol ID
         * @param symbols 中獎 symbol
         * @returns 
         */
        async place(typeName, elementID, symbols) {
          let symbolNode = []; //紀錄symbol移動的位置

          let len = symbols.length;
          let symbolSetInst; //判斷是否是中途槓牌(不新增牌組)

          if (typeName === WinLineType.KONG && symbols.length === 1) {
            //中途槓牌類型(要移到置牌區)
            let len = this.setArea.children.length;

            for (let i = 0; i < len; i++) {
              symbolSetInst = this.setArea.children[i];

              if (symbolSetInst.getComponent(_crd && symbolSet_TA === void 0 ? (_reportPossibleCrUseOfsymbolSet_TA({
                error: Error()
              }), symbolSet_TA) : symbolSet_TA).symID === elementID) {
                symbolNode.push(symbolSetInst.children[3]); //要移動的牌型位置

                symbolSetInst.getComponent(_crd && symbolSet_TA === void 0 ? (_reportPossibleCrUseOfsymbolSet_TA({
                  error: Error()
                }), symbolSet_TA) : symbolSet_TA).tileNum = 4;
                break;
              }
            }
          } else {
            symbolSetInst = (_crd && PrefabInstancePoolManager === void 0 ? (_reportPossibleCrUseOfPrefabInstancePoolManager({
              error: Error()
            }), PrefabInstancePoolManager) : PrefabInstancePoolManager).instance.takeOut(this.symbolSet);

            switch (typeName) {
              // case 'free':
              //     instSymbolSet.parent = this.freeArea;//免費置牌區
              //     this.scatterSym = [];//清空scatter節點紀錄資料(全刷掉才要清空)
              //     break;
              case WinLineType.FLOWER:
                symbolSetInst.parent = this.flowerArea; //花牌置牌區

                break;

              case WinLineType.KONG:
              case WinLineType.PONG:
              case WinLineType.PAIR:
                symbolSetInst.parent = this.setArea; //眼、碰、槓牌置牌區

                break;
            }

            symbolSetInst.getComponent(_crd && symbolSet_TA === void 0 ? (_reportPossibleCrUseOfsymbolSet_TA({
              error: Error()
            }), symbolSet_TA) : symbolSet_TA).init(symbols.length, elementID); //初始化(張數，symbol編號)

            symbolSetInst.getComponent(_crd && symbolSet_TA === void 0 ? (_reportPossibleCrUseOfsymbolSet_TA({
              error: Error()
            }), symbolSet_TA) : symbolSet_TA).setType(); //設置牌型與貼圖

            for (let j = 0; j < len; j++) {
              symbolNode.push(symbolSetInst.children[j]); //要移動的牌型位置
            }
          }

          let winScale = 0.28; //移動到置牌區的尺寸

          for (let i = 0; i < len; i++) {
            let symbolWinNode = symbols[i].node;
            let m1 = symbolWinNode.parent.worldMatrix;
            let m2 = symbolNode[i].parent.worldMatrix.clone().invert();
            let m = m2.multiply(m1);
            Vec3.transformMat4(symbolWinNode.position, symbolWinNode.position, m);
            symbolWinNode.parent = symbolNode[i].parent;
            tween(symbolWinNode).to(0.5, {
              position: symbolNode[i].getPosition()
            }, {
              easing: 'quartOut'
            }).start();
            tween(symbolWinNode).to(0.5, {
              scale: new Vec3(winScale + 0.03, winScale + 0.03, 1)
            }, {
              easing: 'quartOut'
            }).then(tween(symbolWinNode).to(0.2, {
              scale: new Vec3(winScale, winScale, 1)
            }, {
              easing: 'sineOut'
            })).call(() => {
              symbolWinNode.getComponent(_crd && BigWingsSymbol === void 0 ? (_reportPossibleCrUseOfBigWingsSymbol({
                error: Error()
              }), BigWingsSymbol) : BigWingsSymbol).reset();
              symbolWinNode.scale = new Vec3(1, 1, 1);
              symbolWinNode.parent = null;
              symbolWinNode.active = false;
            }).start();
          }

          await (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
            error: Error()
          }), UtilsKit) : UtilsKit).Defer(700);
          symbolSetInst.getComponent(_crd && symbolSet_TA === void 0 ? (_reportPossibleCrUseOfsymbolSet_TA({
            error: Error()
          }), symbolSet_TA) : symbolSet_TA).showChildren();
        }
        /**
         * 清除算牌區
         */


        clean() {
          while (this.setArea.children.length > 0) {
            let symbolSetInst = this.setArea.children[0];
            this.setArea.removeChild(symbolSetInst);
            (_crd && PrefabInstancePoolManager === void 0 ? (_reportPossibleCrUseOfPrefabInstancePoolManager({
              error: Error()
            }), PrefabInstancePoolManager) : PrefabInstancePoolManager).instance.pushIn(symbolSetInst);
          }

          while (this.flowerArea.children.length > 0) {
            let symbolSetInst = this.flowerArea.children[0];
            this.flowerArea.removeChild(symbolSetInst);
            (_crd && PrefabInstancePoolManager === void 0 ? (_reportPossibleCrUseOfPrefabInstancePoolManager({
              error: Error()
            }), PrefabInstancePoolManager) : PrefabInstancePoolManager).instance.pushIn(symbolSetInst);
          }
        }
        /**
         * 是否聽牌
         * @returns 是/否
         */


        isReady() {
          return this.setArea.children.length == 4;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "freeArea", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "flowerArea", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "setArea", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "symbolSet", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a0db62468cffcfa7875fce7c0ebe726a54efb6df.js.map
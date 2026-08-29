System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, AnimationClip, CCFloat, Color, Component, Graphics, Node, UITransform, Vec3, SlotWheel, SlotWheelEvent, UtilsKit, RollerEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, Roller;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSlotWheel(extras) {
    _reporterNs.report("SlotWheel", "./SlotWheel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotWheelEvent(extras) {
    _reporterNs.report("SlotWheelEvent", "./SlotWheel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilsKit(extras) {
    _reporterNs.report("UtilsKit", "../lib/UtilsKit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolInfo(extras) {
    _reporterNs.report("SymbolInfo", "./SymbolInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolItem(extras) {
    _reporterNs.report("SymbolItem", "./SymbolItem", _context.meta, extras);
  }

  _export("RollerEvent", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
      CCFloat = _cc.CCFloat;
      Color = _cc.Color;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      SlotWheel = _unresolved_2.SlotWheel;
      SlotWheelEvent = _unresolved_2.SlotWheelEvent;
    }, function (_unresolved_3) {
      UtilsKit = _unresolved_3.UtilsKit;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a562fvKS79CSq1vgbMlBOUd", "Roller", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'AnimationClip', 'Button', 'CCFloat', 'Color', 'Component', 'Graphics', 'Input', 'Node', 'UIOpacity', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RollerEvent", RollerEvent = class RollerEvent {});

      RollerEvent.StopEnd = "StopEnd";
      RollerEvent.DropEnd = "DropEnd";

      _export("Roller", Roller = (_dec = ccclass('Roller'), _dec2 = property({
        type: [_crd && SlotWheel === void 0 ? (_reportPossibleCrUseOfSlotWheel({
          error: Error()
        }), SlotWheel) : SlotWheel]
      }), _dec3 = property({
        type: CCFloat,
        tooltip: "啟動延遲間隔時間"
      }), _dec4 = property({
        type: CCFloat,
        tooltip: "停止延遲間隔時間"
      }), _dec5 = property({
        type: CCFloat,
        tooltip: "每軸掉落啟動延遲間隔時間"
      }), _dec6 = property({
        type: CCFloat,
        tooltip: "每軸物件掉落延遲間隔時間"
      }), _dec7 = property({
        type: CCFloat,
        tooltip: "輪軸聽牌延遲時間"
      }), _dec8 = property({
        type: AnimationClip,
        tooltip: "輪軸聽牌效果動畫"
      }), _dec9 = property({
        type: Node,
        tooltip: "輪軸聽牌 Node"
      }), _dec(_class2 = (_class3 = class Roller extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "arrWheel", _descriptor, this);

          _initializerDefineProperty(this, "launchDelayTime", _descriptor2, this);

          _initializerDefineProperty(this, "stopDelayTime", _descriptor3, this);

          _initializerDefineProperty(this, "wheelDropDelayTime", _descriptor4, this);

          _initializerDefineProperty(this, "symbolDropDelayTime", _descriptor5, this);

          _initializerDefineProperty(this, "listenDelayTime", _descriptor6, this);

          _initializerDefineProperty(this, "listenAnimationClip", _descriptor7, this);

          _initializerDefineProperty(this, "listenNode", _descriptor8, this);

          this._listenStartIndex = -1;
          this.listenLeftBlack = void 0;
          this.listenRightBlack = void 0;
        }

        get isRunnung() {
          var len = this.arrWheel.length;

          for (var i = 0; i < len; i++) {
            if (this.arrWheel[i].isRunning) {
              return true;
            }
          }

          return false;
        }

        set listenStartIndex(n) {
          this._listenStartIndex = n;
        }

        onLoad() {
          var len = this.arrWheel.length;

          for (var i = 0; i < len; i++) {
            // this.arrWheel[i].node.on(SlotWheelEvent.StopEnd, this.checkAllWheelStop, this);
            this.arrWheel[i].node.on((_crd && SlotWheelEvent === void 0 ? (_reportPossibleCrUseOfSlotWheelEvent({
              error: Error()
            }), SlotWheelEvent) : SlotWheelEvent).StopEnd, this.checkAllWheelStop, this);
          }

          if (this.listenAnimationClip) {
            var animation = this.addComponent(Animation);
            animation.addClip(this.listenAnimationClip, this.listenAnimationClip.name);
          }

          if (this.listenNode) {
            this.listenNode.active = false;
          }
        }

        createListenItem(symInfo) {
          var _this = this;

          console.log("createListenItem");
          var listenSymbol = [];
          var con = new Node('Container');
          con.active = true;
          this.node.addChild(con);
          var cardAmount = 4;

          var _loop = function _loop(i) {
            var _loop2 = function _loop2(j) {
              var sym = _this.arrWheel[i].getMainSymbolByIndex(j);

              var listenCon = new Node('ListenCon');
              listenCon.active = true;
              con.addChild(listenCon);
              listenCon.addComponent(UITransform).contentSize.set(215, 205);
              listenCon.position.set(sym.node.position.x + _this.arrWheel[i].node.position.x, sym.node.position.y);
              listenCon.on(Node.EventType.TOUCH_START, e => {
                e.propagationStopped = true;
                symInfo.showInfo(_this.arrWheel[i].getMainSymbolByIndex(j).symbolID, listenCon.position, i);
              });
              listenSymbol.push(listenCon);
              console.log("createListenItem -- end", i, j, sym.node.position.x + _this.arrWheel[i].node.position.x, sym.node.position.y);
            };

            for (var j = 0; j < cardAmount; j++) {
              _loop2(j);
            }
          };

          for (var i = 0; i < this.arrWheel.length; i++) {
            _loop(i);
          }

          symInfo.listenSymbol = listenSymbol;
          console.log("createListenItem -- end");
        }

        checkAllWheelStop() {
          if (!this.isRunnung) {
            this.node.emit(RollerEvent.StopEnd);
          }
        }
        /**
         * 
         * @param index starts from 1
         * 
         */


        getSymbolByIndex(index) {
          var wheelID = Math.floor((index - 1) / this.arrWheel[0].mainSymbolAmount);
          var symbolIndex = (index - 1) % this.arrWheel[0].mainSymbolAmount;
          return this.arrWheel[wheelID].getMainSymbolByIndex(symbolIndex);
        }

        launch() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var len = _this2.arrWheel.length;

            for (var i = 0; i < len; i++) {
              if (!_this2.arrWheel[i].isRunning) {
                _this2.arrWheel[i].launch();
              } //--執行一個之後,等待Defer一段時間再執行下一個.(delay),最後一個不執行delay


              if (i < len - 1) {
                yield (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
                  error: Error()
                }), UtilsKit) : UtilsKit).Defer(1000 * _this2.launchDelayTime);
              }
            }
          })();
        }

        stop(cards, extendedCards) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (extendedCards) {
              extendedCards = extendedCards;
            }

            var len = _this3.arrWheel.length;

            for (var i = 0; i < len; i++) {
              if (!_this3.arrWheel[i].isRunning) {
                _this3.arrWheel[i].launch();
              }

              if (_this3._listenStartIndex != -1 && i >= _this3._listenStartIndex) {
                _this3.playListenEffect(i);

                yield (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
                  error: Error()
                }), UtilsKit) : UtilsKit).Defer(1000 * _this3.listenDelayTime);
              }

              _this3.arrWheel[i].stop(cards[i], extendedCards ? extendedCards[i] : null);

              if (i < len - 1) {
                yield (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
                  error: Error()
                }), UtilsKit) : UtilsKit).Defer(1000 * _this3.stopDelayTime);

                _this3.stopListenEffect();
              }
            }

            _this3.stopListenEffect();
          })();
        }
        /**
         * 取得延伸(掉落階段物件)牌組
         * "Cards": [
                [1,2,3,4,5,11,11,8,9,10,11,12,11,14,15,40,17,18,19,20],
                [1,2,3,4,5,6,7,8,9,10,11,12,11,14,15,16,17,18,19,20]
            ],
            "Lines": [
                        [
                            {
                                "ElementID": 11,
                                "GridNum": 3,
                                "Grids": [
                                    6,
                                    7,
                                    13
                                ],
                                "Payoff": 0
                            },
                            {
                                "ElementID": 40,
                                "GridNum": 1,
                                "Grids": [
                                    16
                                ],
                                "Payoff": 0
                            }
                        ],
                        []
                    ]
         * @param cards beginGame cards
         * @param lines beginGame lines
         * @returns 
         */


        takeExtendedCards(cards, lines) {
          var returnCards = [];
          var wheelLen = this.arrWheel.length;
          var len = lines.length - 1;

          for (var j = 0; j < wheelLen; j++) {
            returnCards.push([]);
          }

          for (var i = 0; i < len; i++) {
            var lineLen = lines[i].length;
            var nextCards = cards[i + 1];
            var wheelEliminationCount = [0, 0, 0, 0, 0];

            for (var _j = 0; _j < wheelLen; _j++) {
              wheelEliminationCount.push(0);
            }

            for (var _j2 = 0; _j2 < lineLen; _j2++) {
              var lineData = lines[i][_j2];
              var grids = lineData["Grids"];
              var gridsNum = lineData["GridNum"];

              for (var k = 0; k < gridsNum; k++) {
                var wheelID = Math.floor((grids[k] - 1) / this.arrWheel[0].mainSymbolAmount);
                var index = wheelID * this.arrWheel[0].mainSymbolAmount + wheelEliminationCount[wheelID];
                returnCards[wheelID].splice(returnCards[wheelID].length - wheelEliminationCount[wheelID], 0, nextCards[index]);
                wheelEliminationCount[wheelID]++;
              }
            }
          }

          return returnCards;
        }

        playListenEffect(wheelIndex) {
          if (this.listenNode) {
            this.listenNode.active = true;
            this.listenNode.setPosition(this.arrWheel[wheelIndex].node.getPosition());
          }

          if (this.listenAnimationClip) {
            var animation = this.getComponent(Animation);
            animation.play(this.listenAnimationClip.name);
          }

          if (!this.listenLeftBlack) {
            var node = new Node("listenLeftBlack");
            this.node.addChild(node);
            this.listenLeftBlack = node.addComponent(Graphics);
            this.listenLeftBlack.clear();
            this.listenLeftBlack.fillColor = new Color(0, 0, 0, 255 * 0.6);
            this.listenLeftBlack.rect(0, 0, 1, 1);
            this.listenLeftBlack.fill();
            node = new Node("listenRightBlack");
            this.node.addChild(node);
            this.listenRightBlack = node.addComponent(Graphics);
            this.listenRightBlack.clear();
            this.listenRightBlack.fillColor = this.listenLeftBlack.fillColor;
            this.listenRightBlack.rect(0, 0, 1, 1);
            this.listenRightBlack.fill();
            this.listenNode.setSiblingIndex(this.node.children.length - 1);
          }

          var x;
          var y;
          var w;
          var h;

          if (wheelIndex > 0) {
            this.listenLeftBlack.node.active = true;
            x = this.arrWheel[0].node.position.x - 0.5 * this.arrWheel[0].node.getComponent(UITransform).width;
            y = this.arrWheel[0].node.position.y - 0.5 * this.arrWheel[0].node.getComponent(UITransform).height;
            w = this.arrWheel[wheelIndex].node.position.x - 0.5 * this.arrWheel[wheelIndex].node.getComponent(UITransform).width - x;
            h = this.arrWheel[wheelIndex].node.position.y + 0.5 * this.arrWheel[wheelIndex].node.getComponent(UITransform).height - y;
            this.listenLeftBlack.node.setPosition(new Vec3(x, y));
            this.listenLeftBlack.node.setScale(new Vec3(w, h));
          }

          if (wheelIndex < this.arrWheel.length - 1) {
            this.listenRightBlack.node.active = true;
            var len = this.arrWheel.length;
            x = this.arrWheel[wheelIndex].node.position.x + 0.5 * this.arrWheel[wheelIndex].node.getComponent(UITransform).width;
            y = this.arrWheel[wheelIndex].node.position.y - 0.5 * this.arrWheel[wheelIndex].node.getComponent(UITransform).height;
            w = this.arrWheel[len - 1].node.position.x + 0.5 * this.arrWheel[len - 1].node.getComponent(UITransform).width - x;
            h = this.arrWheel[len - 1].node.position.y + 0.5 * this.arrWheel[len - 1].node.getComponent(UITransform).height - y;
            this.listenRightBlack.node.setPosition(new Vec3(x, y));
            this.listenRightBlack.node.setScale(new Vec3(w, h));
          }
        }

        stopListenEffect() {
          if (this.listenNode) {
            this.listenNode.active = false;
          }

          if (this.listenAnimationClip) {
            var animation = this.getComponent(Animation);
            animation.stop();
          }

          if (this.listenLeftBlack) {
            this.listenLeftBlack.node.active = false;
            this.listenRightBlack.node.active = false;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "arrWheel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "launchDelayTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "stopDelayTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "wheelDropDelayTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "symbolDropDelayTime", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "listenDelayTime", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.5;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class3.prototype, "listenAnimationClip", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class3.prototype, "listenNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class3)) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=088fb60c83df6614c22ea6e0532e125a605b1570.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Vec3, Roller, RollerEvent, UtilsKit, BigWingsSymbol, BigWingsRollerEvent, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, BigWingsRoller;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRoller(extras) {
    _reporterNs.report("Roller", "./Roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerEvent(extras) {
    _reporterNs.report("RollerEvent", "./Roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBigWingsWheel(extras) {
    _reporterNs.report("BigWingsWheel", "./BigWingsWheel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilsKit(extras) {
    _reporterNs.report("UtilsKit", "../lib/UtilsKit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBigWingsSymbol(extras) {
    _reporterNs.report("BigWingsSymbol", "./BigWingsSymbol", _context.meta, extras);
  }

  _export("BigWingsRollerEvent", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Roller = _unresolved_2.Roller;
      RollerEvent = _unresolved_2.RollerEvent;
    }, function (_unresolved_3) {
      UtilsKit = _unresolved_3.UtilsKit;
    }, function (_unresolved_4) {
      BigWingsSymbol = _unresolved_4.BigWingsSymbol;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6443d5T64NFpJEgOPzkI0mQ", "BigWingsRoller", undefined);

      __checkObsolete__(['_decorator', 'Prefab', 'SpriteFrame', 'Node', 'Graphics', 'Color', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BigWingsRollerEvent", BigWingsRollerEvent = class BigWingsRollerEvent {});

      _export("BigWingsRoller", BigWingsRoller = (_dec = ccclass('BigWingsRoller'), _dec2 = property({
        type: Node,
        tooltip: "symbolSpine"
      }), _dec(_class = (_class2 = class BigWingsRoller extends (_crd && Roller === void 0 ? (_reportPossibleCrUseOfRoller({
        error: Error()
      }), Roller) : Roller) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "symbolSpine", _descriptor, this);

          this.symArr = [];
          this.wildArr = [];
        }

        get isStopping() {
          var len = this.arrWheel.length;

          for (var i = 0; i < len; i++) {
            if (this.arrWheel[i].inStoppingPhase) {
              return true;
            }
          }

          return false;
        }

        stop(cards, extendedCards, time) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (time === void 0) {
              time = null;
            }

            console.log("BigWingsRoller stop", cards, extendedCards, time);
            _this._listenStartIndex = -1;
            var stopDelay = time == null ? _this.stopDelayTime : time;
            var scatterCount = 0;

            if (extendedCards) {
              extendedCards = extendedCards;
            }

            var len = _this.arrWheel.length;

            for (var i = 0; i < len; i++) {
              console.log(cards[i]);

              if (cards[i].includes((_crd && BigWingsSymbol === void 0 ? (_reportPossibleCrUseOfBigWingsSymbol({
                error: Error()
              }), BigWingsSymbol) : BigWingsSymbol).scatterId)) {
                scatterCount++;
                if (scatterCount == 2) _this._listenStartIndex = i + 1;
              }

              if (!_this.arrWheel[i].isRunning) {
                _this.arrWheel[i].launch();
              }

              if (_this._listenStartIndex != -1 && i >= _this._listenStartIndex) {
                _this.playListenEffect(i);

                yield (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
                  error: Error()
                }), UtilsKit) : UtilsKit).Defer(1000 * _this.listenDelayTime);
              }

              _this.arrWheel[i].stop(cards[i], extendedCards ? extendedCards[i] : null);

              if (i < len - 1) {
                // await UtilsKit.Defer(1000 * this.stopDelayTime);
                yield (_crd && UtilsKit === void 0 ? (_reportPossibleCrUseOfUtilsKit({
                  error: Error()
                }), UtilsKit) : UtilsKit).Defer(1000 * stopDelay); // this.stopListenEffect();
              }
            } // this.stopListenEffect();

          })();
        }

        checkAllWheelStop() {
          //改為stoppingPhase也結束之後再發事件
          if (!this.isRunnung && !this.isStopping) {
            this.node.emit((_crd && RollerEvent === void 0 ? (_reportPossibleCrUseOfRollerEvent({
              error: Error()
            }), RollerEvent) : RollerEvent).StopEnd);
            this.stopListenEffect();
          }
        }

        setSymSpine(symArr, wildArr) {
          this.symArr = symArr;
          this.wildArr = wildArr;

          for (var i = 0; i < this.arrWheel.length; i++) {
            this.arrWheel[i].wildSym = wildArr[i];
          }
        }

        playListenEffect(wheelIndex) {
          if (this.listenNode) {
            this.listenNode.active = true;
            this.listenNode.position = this.arrWheel[wheelIndex].node.position.add(new Vec3(0, -13, 0));
          }
        }

        resetSpine() {
          // console.error("resetSpine");
          this.symArr.forEach(s => s.node.active = false);

          for (var i = 0; i < this.arrWheel.length * this.arrWheel[0].mainSymbolAmount; i++) {
            if (this.getSymbolByIndex(i + 1)) {
              this.getSymbolByIndex(i + 1).node.active = true;
              this.getSymbolByIndex(i + 1).reset();
            }
          }
        }

        checkWildStay() {
          this.arrWheel.forEach(w => w.checkStay());
        }

        stopListenEffect() {
          if (this.listenNode) {
            this.listenNode.active = false;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "symbolSpine", [_dec2], {
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
//# sourceMappingURL=b0bd847f5b2d096a878f5754baa454d39da33467.js.map
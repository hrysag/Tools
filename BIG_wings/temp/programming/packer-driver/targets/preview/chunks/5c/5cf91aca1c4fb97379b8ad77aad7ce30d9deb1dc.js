System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BigWingsSymbol, PrefabInstancePoolManager, SlotWheel, SlotWheelEvent, GameManager, BigWingsWheelEvent, _dec, _class2, _crd, ccclass, property, BigWingsWheel;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfBigWingsSymbol(extras) {
    _reporterNs.report("BigWingsSymbol", "./BigWingsSymbol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolItem(extras) {
    _reporterNs.report("SymbolItem", "./SymbolItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabInstancePoolManager(extras) {
    _reporterNs.report("PrefabInstancePoolManager", "../tools/PrefabInstancePoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotWheel(extras) {
    _reporterNs.report("SlotWheel", "./SlotWheel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotWheelEvent(extras) {
    _reporterNs.report("SlotWheelEvent", "./SlotWheel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../components/GameManager", _context.meta, extras);
  }

  _export("BigWingsWheelEvent", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BigWingsSymbol = _unresolved_2.BigWingsSymbol;
    }, function (_unresolved_3) {
      PrefabInstancePoolManager = _unresolved_3.PrefabInstancePoolManager;
    }, function (_unresolved_4) {
      SlotWheel = _unresolved_4.SlotWheel;
      SlotWheelEvent = _unresolved_4.SlotWheelEvent;
    }, function (_unresolved_5) {
      GameManager = _unresolved_5.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a799b0WqLlBCKWU8rgJWnOM", "BigWingsWheel", undefined);

      __checkObsolete__(['Skeleton', 'Vec3', '_decorator', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BigWingsWheelEvent", BigWingsWheelEvent = class BigWingsWheelEvent {});

      BigWingsWheelEvent.DropAwayEnd = "DropAwayEnd";

      _export("BigWingsWheel", BigWingsWheel = (_dec = ccclass('BigWingsWheel'), _dec(_class2 = class BigWingsWheel extends (_crd && SlotWheel === void 0 ? (_reportPossibleCrUseOfSlotWheel({
        error: Error()
      }), SlotWheel) : SlotWheel) {
        constructor() {
          super(...arguments);
          this.wildSym = null;
          this.wildStayTimes = 0;
        }

        spawnSymbolByID(id, prepend) {
          if (id === void 0) {
            id = this.generateSymbolID();
          }

          if (prepend === void 0) {
            prepend = true;
          }

          var symbol = (_crd && PrefabInstancePoolManager === void 0 ? (_reportPossibleCrUseOfPrefabInstancePoolManager({
            error: Error()
          }), PrefabInstancePoolManager) : PrefabInstancePoolManager).instance.takeOut(this.symbolPrefab).getComponent(_crd && BigWingsSymbol === void 0 ? (_reportPossibleCrUseOfBigWingsSymbol({
            error: Error()
          }), BigWingsSymbol) : BigWingsSymbol);
          this.addSymbol(symbol, prepend);
          symbol.changeSymbolID(id);
          return symbol;
        }

        generateSymbolID() {
          var id;

          if (this._extendedCards.length > 0) {
            id = this._extendedCards.shift() - 1;
          } else {
            id = Math.floor(13 * Math.random());
          }

          return id;
        }

        launch() {
          super.launch();
        } // rewrite stopEnd


        run() {
          var deltaTime = this._lastTime;
          this._lastTime = Date.now() * 0.001;
          deltaTime = this._lastTime - deltaTime;
          var desireVelocity = this._inStoppingPhase ? this.bounceVelocity : this.maxVelocity;
          var accelerationTime = this._acceleration == 0 ? 0 : (desireVelocity - this._velocity) / this._acceleration;
          var uniformVelocityTime = 0;

          if (this._inStoppingPhase) {
            // 準備停止
            deltaTime = Math.min(this._timeToStop, deltaTime);
            this._timeToStop -= deltaTime;

            if (this._timeToStop <= 0) {
              this._isRunning = false;
              this.unschedule(this.run);
            }
          }

          if (accelerationTime < deltaTime) {
            uniformVelocityTime = deltaTime - accelerationTime;
          } else {
            accelerationTime = deltaTime;
          }

          var displacement = this._velocity * accelerationTime + 0.5 * this._acceleration * accelerationTime * accelerationTime + desireVelocity * uniformVelocityTime;
          var bounceDisplacement = this.getBounceDisplacement(this.bounceVelocity, this.maxVelocity, this._totalTimeToStop, this._velocity);
          bounceDisplacement += this.getBounceDisplacement(this.initialVelocity, this.maxVelocity, this.timeToAchieveMaxVelocity);
          var top;
          var len = this.arrSymbol.length;
          var symbol;
          var symbolTop;

          for (var i = 0; i < len; i++) {
            symbol = this.arrSymbol[i];
            (_crd && SlotWheel === void 0 ? (_reportPossibleCrUseOfSlotWheel({
              error: Error()
            }), SlotWheel) : SlotWheel).vec3.set(0, displacement, 0); // symbol.node.setPosition(Vec3.add(SlotWheel.vec3, SlotWheel.vec3, symbol.node.getPosition()));

            symbol.node.position = symbol.node.position.add((_crd && SlotWheel === void 0 ? (_reportPossibleCrUseOfSlotWheel({
              error: Error()
            }), SlotWheel) : SlotWheel).vec3);
            /*
            if(i==0)
            {
                //--test log
                console.log('check_resetPosNode',i,symbol.node.position.y,'displacement__',displacement,'bounceDisplacement___',bounceDisplacement); 
            }*/

            if (i == 0) {
              top = symbol.node.getPosition().y + 0.5 * symbol.height;
            }

            symbolTop = symbol.node.getPosition().y + 0.5 * symbol.height + (bounceDisplacement || 0); // bounceDisplacement 在轉的時候是NaN  因為沒this._totalTimeToStop

            if (symbolTop <= this.maskRect.y) {
              this.removeSymbol(symbol);
              i--;
              len--;
            }
          }

          var newSymbol;

          while (top < this.maskRect.y + this.maskRect.height) {
            newSymbol = this.spawnSymbolByID();
            newSymbol.node.setPosition(0, top + 0.5 * newSymbol.height, 0);
            top += newSymbol.height;
            symbolTop = symbol.node.getPosition().y + 0.5 * symbol.height + bounceDisplacement;

            if (symbolTop <= this.maskRect.y) {
              // if (!this._inStoppingPhase && top <= this.maskRect.y) {
              this.removeSymbol(symbol);
            } else {
              if (!this._inStoppingPhase) {
                newSymbol.gettingBlur(true);
              }
            }
          }

          this._velocity = uniformVelocityTime != 0 ? desireVelocity : this._velocity + accelerationTime * this._acceleration;

          if (!this._isRunning) {
            // 轉輪停止事件可以掛在這
            this.stopEnd(); // this._inStoppingPhase = false;
            // this.node.emit(SlotWheelEvent.StopEnd);
          }
        }

        stopEnd() {
          var _this = this;

          return _asyncToGenerator(function* () {
            yield _this.playAppear();
            yield _this.checkExpand();
            _this._inStoppingPhase = false;

            _this.node.emit((_crd && SlotWheelEvent === void 0 ? (_reportPossibleCrUseOfSlotWheelEvent({
              error: Error()
            }), SlotWheelEvent) : SlotWheelEvent).StopEnd);
          })();
        }

        playAppear() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            for (var i = 0; i < _this2.mainSymbolAmount; i++) {
              var sym = _this2.getMainSymbolByIndex(i);

              yield sym.appear();
            }
          })();
        }

        checkExpand() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (_this3.wildStayTimes > 0) return;

            for (var i = 0; i < _this3.mainSymbolAmount; i++) {
              var sym = _this3.getMainSymbolByIndex(i);

              if (sym.symbolID == 0) {
                yield sym.expand(i);

                _this3.arrMainSymbol[0].changeToWild(0);

                _this3.wildStayTimes++;

                _this3.wildSym.idle();

                if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                  error: Error()
                }), GameManager) : GameManager).isFree && _this3.wildStayTimes == 1) {
                  yield _this3.wildSym.lock(); // this.wildStayTimes++;
                }
              }
            }
          })();
        }

        playWildWin() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            if (_this4.wildSym) {
              yield _this4.wildSym.win();
            }
          })();
        } // spin的時候check


        checkStay() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            if (!_this5.isWildStaying()) return;

            if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).isFree && _this5.wildStayTimes <= 3) {
              // console.error("stay");
              _this5.wildSym.idle();

              _this5.wildStayTimes++;
            } else {
              console.error("end stay");
              _this5.wildSym.node.active = false;
              _this5.wildStayTimes = 0; // wild要走時再把下面symbol換成wild 
              // (<BigWingsSymbol>this.arrMainSymbol[0]).changeToWild(0);
            }
          })();
        }

        isWildStaying() {
          return this.wildStayTimes > 0;
        }

      }) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5cf91aca1c4fb97379b8ad77aad7ce30d9deb1dc.js.map
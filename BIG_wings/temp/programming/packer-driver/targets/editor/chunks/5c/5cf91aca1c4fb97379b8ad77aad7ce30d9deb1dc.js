System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BigWingsSymbol, PrefabInstancePoolManager, SlotWheel, SlotWheelEvent, GameManager, BigWingsWheelEvent, _dec, _class2, _crd, ccclass, property, BigWingsWheel;

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
        constructor(...args) {
          super(...args);
          this.wildSym = null;
          this.wildStayTimes = 0;
        }

        spawnSymbolByID(id = this.generateSymbolID(), prepend = true) {
          let symbol = (_crd && PrefabInstancePoolManager === void 0 ? (_reportPossibleCrUseOfPrefabInstancePoolManager({
            error: Error()
          }), PrefabInstancePoolManager) : PrefabInstancePoolManager).instance.takeOut(this.symbolPrefab).getComponent(_crd && BigWingsSymbol === void 0 ? (_reportPossibleCrUseOfBigWingsSymbol({
            error: Error()
          }), BigWingsSymbol) : BigWingsSymbol);
          this.addSymbol(symbol, prepend);
          symbol.changeSymbolID(id);
          return symbol;
        }

        generateSymbolID() {
          let id;

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
          let deltaTime = this._lastTime;
          this._lastTime = Date.now() * 0.001;
          deltaTime = this._lastTime - deltaTime;
          let desireVelocity = this._inStoppingPhase ? this.bounceVelocity : this.maxVelocity;
          let accelerationTime = this._acceleration == 0 ? 0 : (desireVelocity - this._velocity) / this._acceleration;
          let uniformVelocityTime = 0;

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

          let displacement = this._velocity * accelerationTime + 0.5 * this._acceleration * accelerationTime * accelerationTime + desireVelocity * uniformVelocityTime;
          let bounceDisplacement = this.getBounceDisplacement(this.bounceVelocity, this.maxVelocity, this._totalTimeToStop, this._velocity);
          bounceDisplacement += this.getBounceDisplacement(this.initialVelocity, this.maxVelocity, this.timeToAchieveMaxVelocity);
          let top;
          let len = this.arrSymbol.length;
          let symbol;
          let symbolTop;

          for (let i = 0; i < len; i++) {
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

          let newSymbol;

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

        async stopEnd() {
          await this.playAppear();
          await this.checkExpand();
          this._inStoppingPhase = false;
          this.node.emit((_crd && SlotWheelEvent === void 0 ? (_reportPossibleCrUseOfSlotWheelEvent({
            error: Error()
          }), SlotWheelEvent) : SlotWheelEvent).StopEnd);
        }

        async playAppear() {
          for (let i = 0; i < this.mainSymbolAmount; i++) {
            let sym = this.getMainSymbolByIndex(i);
            await sym.appear();
          }
        }

        async checkExpand() {
          if (this.wildStayTimes > 0) return;

          for (let i = 0; i < this.mainSymbolAmount; i++) {
            let sym = this.getMainSymbolByIndex(i);

            if (sym.symbolID == 0) {
              await sym.expand(i);
              this.arrMainSymbol[0].changeToWild(0);
              this.wildStayTimes++;
              this.wildSym.idle();

              if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).isFree && this.wildStayTimes == 1) {
                await this.wildSym.lock(); // this.wildStayTimes++;
              }
            }
          }
        }

        async playWildWin() {
          if (this.wildSym) {
            await this.wildSym.win();
          }
        } // spin的時候check


        async checkStay() {
          if (!this.isWildStaying()) return;

          if ((_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).isFree && this.wildStayTimes <= 3) {
            // console.error("stay");
            this.wildSym.idle();
            this.wildStayTimes++;
          } else {
            console.error("end stay");
            this.wildSym.node.active = false;
            this.wildStayTimes = 0; // wild要走時再把下面symbol換成wild 
            // (<BigWingsSymbol>this.arrMainSymbol[0]).changeToWild(0);
          }
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
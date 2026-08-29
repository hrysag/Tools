System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Graphics, CCInteger, Vec3, Color, Rect, Mask, CCBoolean, Prefab, SymbolItem, PrefabInstancePoolManager, SlotWheelEvent, DefaultWheelInfo, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class3, _class4, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class5, _crd, ccclass, property, SlotWheel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSymbolItem(extras) {
    _reporterNs.report("SymbolItem", "./SymbolItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabInstancePoolManager(extras) {
    _reporterNs.report("PrefabInstancePoolManager", "../tools/PrefabInstancePoolManager", _context.meta, extras);
  }

  _export({
    SlotWheelEvent: void 0,
    DefaultWheelInfo: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
      CCInteger = _cc.CCInteger;
      Vec3 = _cc.Vec3;
      Color = _cc.Color;
      Rect = _cc.Rect;
      Mask = _cc.Mask;
      CCBoolean = _cc.CCBoolean;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      SymbolItem = _unresolved_2.SymbolItem;
    }, function (_unresolved_3) {
      PrefabInstancePoolManager = _unresolved_3.PrefabInstancePoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c036atsPslEZJGL3gjj2n4g", "SlotWheel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Graphics', 'CCInteger', 'Vec3', 'Color', 'Rect', 'Mask', 'CCBoolean', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SlotWheelEvent", SlotWheelEvent = class SlotWheelEvent {});

      SlotWheelEvent.StopEnd = "StopEnd";

      _export("DefaultWheelInfo", DefaultWheelInfo = class DefaultWheelInfo {
        constructor() {
          this.initialVelocity = 500;
          // 初速度
          this.maxVelocity = -5000;
          // 最大速度
          this.timeToAchieveMaxVelocity = 1;
        } // 啟動後耗時多久至最大速度(單位:sec)


      });

      _export("SlotWheel", SlotWheel = (_dec = ccclass('SlotWheel'), _dec2 = property({
        type: CCInteger,
        tooltip: "主要顯示數量"
      }), _dec3 = property({
        type: Rect,
        tooltip: "主要區域：此區域為滾輪主要物件擺放區域"
      }), _dec4 = property({
        type: Rect,
        tooltip: "遮罩區域：此區域作為滾輪物件可視範圍"
      }), _dec5 = property({
        type: CCBoolean,
        tooltip: "是否創建遮罩"
      }), _dec6 = property({
        type: CCInteger,
        tooltip: "初速度"
      }), _dec7 = property({
        type: CCInteger,
        tooltip: "最大速度"
      }), _dec8 = property({
        type: CCInteger,
        tooltip: "啟動後耗時多久至最大速度(單位:sec)"
      }), _dec9 = property({
        type: CCInteger,
        tooltip: "停止時回彈速度"
      }), _dec10 = property({
        type: Prefab,
        tooltip: "滾輪內物件 prefab"
      }), _dec(_class3 = (_class4 = (_class5 = class SlotWheel extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "mainSymbolAmount", _descriptor, this);

          // 主要顯示數量
          _initializerDefineProperty(this, "mainRect", _descriptor2, this);

          _initializerDefineProperty(this, "maskRect", _descriptor3, this);

          _initializerDefineProperty(this, "cerateMask", _descriptor4, this);

          _initializerDefineProperty(this, "initialVelocity", _descriptor5, this);

          // 初速度
          _initializerDefineProperty(this, "maxVelocity", _descriptor6, this);

          // 最大速度
          _initializerDefineProperty(this, "timeToAchieveMaxVelocity", _descriptor7, this);

          // 啟動後耗時多久至最大速度(單位:sec)
          _initializerDefineProperty(this, "bounceVelocity", _descriptor8, this);

          // 停止時回彈速度
          _initializerDefineProperty(this, "symbolPrefab", _descriptor9, this);

          this.arrSymbol = [];
          // 滾輪內所有物件 [index 由小至大] 對應 [Symbol 由上而下]
          this.arrMainSymbol = [];
          // 主要物件 [index 由小至大] 對應 [Symbol 由上而下]
          this.mask = void 0;
          this._lastTime = void 0;
          this._velocity = void 0;
          // 速度
          this._acceleration = -1;
          // 加速度
          this._isRunning = false;
          // 輪軸是否滾動中
          this._inStoppingPhase = false;
          // 輪軸停止中
          this._totalTimeToStop = void 0;
          // 從開始停止至完全靜止狀態需花費的時間
          this._timeToStop = void 0;
          // 至靜止狀態還需花費的時間
          this._extendedCards = [];
          // 輪軸停止時延伸物件(下階段掉落物件)牌組
          this._defaultWheelInfo = void 0;
        }

        // 預設輪軸資訊
        get isRunning() {
          return this._isRunning;
        }

        get inStoppingPhase() {
          return this._inStoppingPhase;
        }

        start() {
          this._defaultWheelInfo = new DefaultWheelInfo();
          this._defaultWheelInfo.initialVelocity = this.initialVelocity;
          this._defaultWheelInfo.maxVelocity = this.maxVelocity;
          this._defaultWheelInfo.timeToAchieveMaxVelocity = this.timeToAchieveMaxVelocity;
          this.init();
        }

        init() {
          if (this.cerateMask) {
            this.generateMask();
          }

          this.generateInitialSymbols();
        }

        speedUp(b) {
          if (b) {
            this.initialVelocity = 2 * this._defaultWheelInfo.initialVelocity;
            this.maxVelocity = 2 * this._defaultWheelInfo.maxVelocity;
            this.timeToAchieveMaxVelocity = 0.5 * this._defaultWheelInfo.timeToAchieveMaxVelocity;
          } else {
            this.initialVelocity = this._defaultWheelInfo.initialVelocity;
            this.maxVelocity = this._defaultWheelInfo.maxVelocity;
            this.timeToAchieveMaxVelocity = this._defaultWheelInfo.timeToAchieveMaxVelocity;
          }
        }

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
            SlotWheel.vec3.set(0, displacement, 0);
            symbol.node.setPosition(Vec3.add(SlotWheel.vec3, SlotWheel.vec3, symbol.node.getPosition()));
            console.log('check_resetPosNode', symbol.node.position.y);

            if (i == 0) {
              top = symbol.node.getPosition().y + 0.5 * symbol.height;
            }

            symbolTop = symbol.node.getPosition().y + 0.5 * symbol.height + bounceDisplacement;

            if (symbolTop <= this.maskRect.y) {
              // if (!this._inStoppingPhase && top <= this.maskRect.y) {
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
            this._inStoppingPhase = false;
            this.node.emit(SlotWheelEvent.StopEnd);
          }
        }

        generateMask() {
          //return;
          this.addComponent(Mask);
          this.mask = this.getComponent(Mask);
          this.mask.type = Mask.Type.GRAPHICS_RECT;
          var g = this.getComponent(Graphics);
          g.clear();
          g.fillColor = Color.WHITE;
          g.strokeColor = Color.WHITE;
          g.lineWidth = 2;
          g.rect(this.maskRect.x, this.maskRect.y, this.maskRect.width, this.maskRect.height);
          g.fill();
        }

        generateInitialSymbols() {
          var symbol;

          for (var i = this.mainSymbolAmount - 1; i >= 0; i--) {
            symbol = this.spawnSymbolByID();
          }

          symbol = this.arrSymbol[0];
          var top = symbol.node.getPosition().y + 0.5 * symbol.height;

          while (top < this.maskRect.y + this.maskRect.height) {
            symbol = this.spawnSymbolByID();
            top += symbol.height;
          }

          var initialBounceDisplacement = this.getBounceDisplacement(this.initialVelocity, this.maxVelocity, this.timeToAchieveMaxVelocity);
          symbol = this.arrSymbol[this.arrSymbol.length - 1];
          var bottom = symbol.node.getPosition().y - 0.5 * symbol.height + initialBounceDisplacement;

          while (bottom > this.maskRect.y) {
            symbol = this.spawnSymbolByID(this.generateSymbolID(), false);
            bottom -= symbol.height;
          }
        }
        /**
         * 取得反彈高度
         * @returns 反彈高度
         */

        /**
         * 取得反彈高度
         * @param bounceVelocity 加速度過程的初始速度(反彈速度)
         * @param destVelocity 加速度過程的最終速度
         * @param totalTime 加速度過程所花的時間
         * @param destVelocity 目前速度
         * @returns 反彈高度
         */


        getBounceDisplacement(bounceVelocity, destVelocity, totalTime, currentVelocity) {
          if (bounceVelocity * destVelocity >= 0) {
            return 0;
          } else {
            var acceleration = (destVelocity - bounceVelocity) / totalTime;
            var time = (0 - bounceVelocity) / acceleration;

            if (currentVelocity != null) {
              time = Math.min(time, (currentVelocity - bounceVelocity) / acceleration);
            }

            return Math.abs(bounceVelocity * time + 0.5 * acceleration * time * time);
          }
        }
        /**
         * 輪軸啟動
         */


        launch() {
          this._velocity = this.initialVelocity;
          this._acceleration = (this.maxVelocity - this.initialVelocity) / this.timeToAchieveMaxVelocity;
          this._isRunning = true;
          this._lastTime = Date.now() * 0.001;
          this.schedule(this.run, 0); //this.schedule(this.run, 0.7);
        }
        /**
         * 輪軸停止
         * @param cards 輪軸停止時主要物件牌組
         * @param extendedCards 輪軸停止時延伸物件(下階段掉落物件)牌組
         */


        stop(cards, extendedCards, time) {
          this.run();
          this._velocity = this.maxVelocity;
          this._inStoppingPhase = true;
          this.arrMainSymbol = [];
          var len = cards.length;
          var i = len - 1;
          var newID;
          var newSymbol;

          while (i >= 0) {
            newID = cards[i];
            newSymbol = this.spawnSymbolByID(newID);
            this.arrMainSymbol.unshift(newSymbol);
            i--;
          }

          var displacement = this.mainRect.y + 0.5 * newSymbol.height - this.arrMainSymbol[this.arrMainSymbol.length - 1].node.getPosition().y;

          if (time != null) {
            this._totalTimeToStop = time;
            this._timeToStop = time;
            this._velocity = 2 * (displacement / time) - this.bounceVelocity;
          }

          this._acceleration = (this.bounceVelocity * this.bounceVelocity - this._velocity * this._velocity) / (2 * displacement);

          if (time == null) {
            this._timeToStop = (this.bounceVelocity - this._velocity) / this._acceleration;
            this._totalTimeToStop = this._timeToStop;
          }

          if (extendedCards) {
            this._extendedCards = extendedCards;
          }
        }
        /**
         * 產生 symbol
         * @param id symbol id
         * @param prepend 是否前置
         * @param y 位置 y
         * @returns 
         */


        spawnSymbolByID(id, prepend, y) {
          if (id === void 0) {
            id = this.generateSymbolID();
          }

          if (prepend === void 0) {
            prepend = true;
          }

          if (y === void 0) {
            y = null;
          }

          var symbol = (_crd && PrefabInstancePoolManager === void 0 ? (_reportPossibleCrUseOfPrefabInstancePoolManager({
            error: Error()
          }), PrefabInstancePoolManager) : PrefabInstancePoolManager).instance.takeOut(this.symbolPrefab).getComponent(_crd && SymbolItem === void 0 ? (_reportPossibleCrUseOfSymbolItem({
            error: Error()
          }), SymbolItem) : SymbolItem);
          this.addSymbol(symbol, prepend, y);
          symbol.changeSymbolID(id);
          return symbol;
        }
        /**
         * 增加 symbol
         * @param symbol 
         * @param prepend 是否前置
         * @param y 位置 y
         */


        addSymbol(symbol, prepend, y) {
          if (prepend === void 0) {
            prepend = true;
          }

          symbol.node.active = true;
          this.node.addChild(symbol.node);
          var desY;

          if (this.arrSymbol.length == 0) {
            desY = this.mainRect.y + 0.5 * symbol.height;
            this.arrSymbol.push(symbol);
          } else {
            if (prepend) {
              desY = this.arrSymbol[0].node.position.y + 0.5 * this.arrSymbol[0].height + 0.5 * symbol.height;
              this.arrSymbol.unshift(symbol);
              symbol.node.setSiblingIndex(0);
            } else {
              desY = this.arrSymbol[this.arrSymbol.length - 1].node.position.y - 0.5 * this.arrSymbol[this.arrSymbol.length - 1].height - 0.5 * symbol.height;
              this.arrSymbol.push(symbol);
            }
          }

          if (y == null) {
            y = desY;
          }

          symbol.node.setPosition(0, y);
        }
        /**
         * 移除 Symbol
         * @param symbol 
         */


        removeSymbol(symbol) {
          this.node.removeChild(symbol.node);
          this.arrSymbol.splice(this.arrSymbol.indexOf(symbol), 1);
          symbol.recycle();
        }

        generateSymbolID() {
          var id;

          if (this._extendedCards.length > 0) {
            id = this._extendedCards.shift();
          } else {
            id = 0;
          }

          return id;
        }

        getMainSymbolByIndex(mainIndex) {
          if (this.arrMainSymbol.length > mainIndex && this.arrMainSymbol[mainIndex]) {
            return this.arrMainSymbol[mainIndex];
          } else {
            // return null;
            return this.arrSymbol[mainIndex];
          }
        }

      }, _class5.vec3 = new Vec3(), _class5), (_descriptor = _applyDecoratedDescriptor(_class4.prototype, "mainSymbolAmount", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class4.prototype, "mainRect", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Rect(-500, -500, 1000, 1000);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class4.prototype, "maskRect", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Rect(-500, -600, 1000, 1200);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class4.prototype, "cerateMask", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class4.prototype, "initialVelocity", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 500;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class4.prototype, "maxVelocity", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -5000;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class4.prototype, "timeToAchieveMaxVelocity", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class4.prototype, "bounceVelocity", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1000;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class4.prototype, "symbolPrefab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class4)) || _class3));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a2cae82c756bc1ed4d5397b4b7958cd7cda38731.js.map
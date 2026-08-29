System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, Component, Mask, Layers, Node, Size, Sprite, SpriteFrame, tween, UITransform, v3, CCFloat, SlotSymbolItem, SymbolIconData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, SingleSlot;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSlotSymbolItem(extras) {
    _reporterNs.report("SlotSymbolItem", "./SlotSymbolItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolIconData(extras) {
    _reporterNs.report("SymbolIconData", "./SymbolIconData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      Mask = _cc.Mask;
      Layers = _cc.Layers;
      Node = _cc.Node;
      Size = _cc.Size;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      CCFloat = _cc.CCFloat;
    }, function (_unresolved_2) {
      SlotSymbolItem = _unresolved_2.SlotSymbolItem;
    }, function (_unresolved_3) {
      SymbolIconData = _unresolved_3.SymbolIconData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ef7f4kZuANCc4/9TTeLvyIt", "SingleSlot", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Component', 'Graphics', 'Color', 'Mask', 'Layers', 'Node', 'Size', 'Sprite', 'SpriteFrame', 'tween', 'UITransform', 'v3', 'CCFloat']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SingleSlot", SingleSlot = (_dec = ccclass('SingleSlot'), _dec2 = property({
        type: [_crd && SymbolIconData === void 0 ? (_reportPossibleCrUseOfSymbolIconData({
          error: Error()
        }), SymbolIconData) : SymbolIconData],
        visible: true,
        displayName: "Symbol SpriteFrames LeftSide",
        tooltip: "Symbol SpriteFrames 左側"
      }), _dec3 = property({
        type: [_crd && SymbolIconData === void 0 ? (_reportPossibleCrUseOfSymbolIconData({
          error: Error()
        }), SymbolIconData) : SymbolIconData],
        visible: true,
        displayName: "Blur SpriteFrames LeftSide",
        tooltip: "Blur SpriteFrames 左側"
      }), _dec4 = property({
        type: [_crd && SymbolIconData === void 0 ? (_reportPossibleCrUseOfSymbolIconData({
          error: Error()
        }), SymbolIconData) : SymbolIconData],
        visible: true,
        displayName: "Symbol SpriteFrames RightSide",
        tooltip: "Symbol SpriteFrames 右側"
      }), _dec5 = property({
        type: [_crd && SymbolIconData === void 0 ? (_reportPossibleCrUseOfSymbolIconData({
          error: Error()
        }), SymbolIconData) : SymbolIconData],
        visible: true,
        displayName: "Blur SpriteFrames RightSide",
        tooltip: "Blur SpriteFrames 右側"
      }), _dec6 = property({
        type: CCInteger,
        visible: true,
        displayName: "MovingDistance",
        tooltip: "minimum moving distance for symbol"
      }), _dec7 = property({
        type: CCInteger,
        visible: true,
        displayName: "MovingSpeed",
        tooltip: "moving speed for symbol"
      }), _dec8 = property({
        type: CCInteger,
        visible: true,
        displayName: "MaximumDistance",
        tooltip: "maximum moving distance"
      }), _dec9 = property({
        type: CCFloat,
        visible: true,
        displayName: "RollingTotalTime",
        tooltip: "total time for rolling(s)"
      }), _dec10 = property({
        type: SpriteFrame,
        visible: true,
        displayName: "SymbolFinalSpriteFrame",
        tooltip: "symbol Final SpriteFrame"
      }), _dec11 = property({
        type: CCInteger,
        visible: true,
        displayName: "Acceleration",
        tooltip: "acceleration for symbol"
      }), _dec12 = property({
        type: CCInteger,
        visible: true,
        displayName: "maxVelocity",
        tooltip: "max velocity"
      }), _dec13 = property({
        type: CCInteger,
        visible: true,
        displayName: "initialVelocity",
        tooltip: "init value for start Velocity"
      }), _dec14 = property({
        type: CCFloat,
        visible: true,
        displayName: "tweenBounceTime",
        tooltip: "bounce animation total time for tween"
      }), _dec(_class = (_class2 = class SingleSlot extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_symbolSpriteFrames_L", _descriptor, this);

          _initializerDefineProperty(this, "_blurSpriteFrames_L", _descriptor2, this);

          _initializerDefineProperty(this, "_symbolSpriteFrames_R", _descriptor3, this);

          _initializerDefineProperty(this, "_blurSpriteFrames_R", _descriptor4, this);

          this._targetSymbolSpriteFrames = [];
          this._targetBlurSpriteFrames = [];

          _initializerDefineProperty(this, "_movingDistance", _descriptor5, this);

          _initializerDefineProperty(this, "_movingSpeed", _descriptor6, this);

          _initializerDefineProperty(this, "_maxDistance", _descriptor7, this);

          _initializerDefineProperty(this, "_rollingTotalTime", _descriptor8, this);

          //--秒為單位
          _initializerDefineProperty(this, "_symbolFinalSpriteFrame", _descriptor9, this);

          _initializerDefineProperty(this, "_acceleration", _descriptor10, this);

          //--加速度
          _initializerDefineProperty(this, "_maxVelocity", _descriptor11, this);

          _initializerDefineProperty(this, "_initialVelocity", _descriptor12, this);

          // 初始速度
          _initializerDefineProperty(this, "_tweenBounceTime", _descriptor13, this);

          // 彈跳動畫總時間(秒)
          this._startRollingIndexY = 0;
          this._velocity = 0;
          this._targetSymbolFinalY = 0;
          // 目標符號最終Y位置
          //--實際上真正在使用的rollingTotalTime(有另種情況是需要等待其他表演完才停止的狀況下需要改變TotalTime)
          this._realRollingTotalTime = 0;
          //================================================================================================
          this._slotSymbolItems = [];
          this._isStopping = false;
          this._countTime = 0;
          this._finalIconId = 0;
          this._resolvePromise = void 0;
          // promise resolve 函式
          this._stopResolvePromise = void 0;
          // promise resolve 函式(stop使用)
          this._ogStartRollingIndexY = 0;
          this._isConstantSpeed = false;
        }

        // 是否進入等速運行
        reset() {
          this._isStopping = false;
          this._countTime = 0;
          this._resolvePromise = undefined;
          this._stopResolvePromise = undefined;
          this._startRollingIndexY = this._ogStartRollingIndexY;
          this._velocity = this._initialVelocity; // 初始化速度

          this._targetSymbolFinalY = 0; // 初始化目標符號最終Y位置

          this._isConstantSpeed = false;

          if (this._slotSymbolItems) {
            for (let item of this._slotSymbolItems) {
              item.reset();
            }
          }
        }

        clean() {
          this.reset();
          this._finalIconId = 0;
          this._targetSymbolSpriteFrames = [];
          this._targetBlurSpriteFrames = [];
          console.log();

          if (this._slotSymbolItems) {
            while (this._slotSymbolItems.length > 0) {
              let symbol = this._slotSymbolItems.pop();

              this.node.removeChild(symbol.node);
              symbol.node.destroy();
            }
          }
        }

        init(camp) {
          if (camp == 0) {
            this._targetSymbolSpriteFrames = this._symbolSpriteFrames_L;
            this._targetBlurSpriteFrames = this._blurSpriteFrames_L;
          } else if (camp == 1) {
            this._targetSymbolSpriteFrames = this._symbolSpriteFrames_R;
            this._targetBlurSpriteFrames = this._blurSpriteFrames_R;
          }

          let maskSize;

          for (let i = 0; i < 2; i++) {
            let symbolNode = new Node();
            symbolNode.layer = Layers.Enum.UI_2D;
            let uiTransform = symbolNode.addComponent(UITransform);
            let slotSymbolItem = symbolNode.addComponent(_crd && SlotSymbolItem === void 0 ? (_reportPossibleCrUseOfSlotSymbolItem({
              error: Error()
            }), SlotSymbolItem) : SlotSymbolItem);
            slotSymbolItem.normalSpriteFrame = this._targetSymbolSpriteFrames[i].spriteFrame;
            slotSymbolItem.blurSpriteFrame = this._targetBlurSpriteFrames[i].spriteFrame;
            slotSymbolItem.spriteFrame = this._targetSymbolSpriteFrames[i].spriteFrame;
            slotSymbolItem.symbolIndex = this._targetSymbolSpriteFrames[i].iconId;
            slotSymbolItem.sizeMode = Sprite.SizeMode.CUSTOM;
            let ogSize = slotSymbolItem.spriteFrame.originalSize;
            maskSize = new Size(ogSize.width, ogSize.height);
            uiTransform.contentSize = maskSize;
            slotSymbolItem.maxDistance = -ogSize.height;
            slotSymbolItem.vy = 10;

            this._slotSymbolItems.push(slotSymbolItem);

            this.node.addChild(symbolNode);
            this._startRollingIndexY = ogSize.height;
            this._ogStartRollingIndexY = this._startRollingIndexY;

            if (i == 0) {
              slotSymbolItem.targetSymbol = true; //this._finalDistance=0;
            }

            if (i == 1) {
              //--上
              symbolNode.setPosition(0, ogSize.height);
            }
            /*
            if(i==2)
            {
                //-下
                symbolNode.setPosition(0,-ogSize.height);  
            }*/


            slotSymbolItem.initPosition = symbolNode.position;
            slotSymbolItem.movieDistance = symbolNode.position.y;
            slotSymbolItem.isRunning = true;
            slotSymbolItem.setOriginal();
          }

          this._velocity = this._initialVelocity; // 初始化速度

          this._targetSymbolFinalY = 0; // 初始化目標符號最終Y位置

          this._realRollingTotalTime = this._rollingTotalTime; //let mask = this.node.getComponent(Mask);

          let mask = this.node.parent.getComponent(Mask); //--改用sprit stencil來處理mask

          if (mask) {
            const spr = this.node.parent.getComponent(Sprite); //const uiTransform = this.node.getComponent(UITransform);

            if (spr) {
              const uiTransform = this.node.parent.getComponent(UITransform);
              uiTransform.contentSize = maskSize;
            }
            /*
            graphic.clear();
            graphic.fillColor = Color.WHITE;
            graphic.strokeColor = Color.WHITE;
            graphic.rect(-maskSize.width / 2, -maskSize.height / 2, maskSize.width, maskSize.height);
            graphic.fill();
            */

          } else {
            this.createMask(maskSize);
          }
        }

        createMask(maskSize) {
          const mask = this.node.parent.addComponent(Mask);
          mask.type = Mask.Type.SPRITE_STENCIL; //--改用sprit stencil來處理mask
          //const spr = this.node.parent.getComponent(Sprite);

          let uiTransform = this.node.parent.getComponent(UITransform);

          if (!uiTransform) {
            uiTransform = this.node.parent.addComponent(UITransform);
          }

          uiTransform.setContentSize(maskSize.width, maskSize.height);
        }

        run(deltaTime) {
          //return;
          if (!this._isStopping) {
            this._countTime += deltaTime;

            if (!this._isConstantSpeed) {
              this._velocity += this._acceleration * deltaTime; // 加速度
              // 檢查是否達到最大速度，並切換到等速運行

              if (this._velocity >= this._maxVelocity) {
                this._velocity = this._maxVelocity;
                this._isConstantSpeed = true;
              }
            }

            if (this._countTime >= this._realRollingTotalTime) {
              this._isStopping = true;
            }
          }

          for (let i = 0; i < this._slotSymbolItems.length; i++) {
            let symbol = this._slotSymbolItems[i];

            if (symbol.isRunning) {
              let symbolY = this._velocity * deltaTime; // 使用deltaTime計算位移

              symbol.movieDistance -= symbolY;
              symbol.node.setPosition(v3(0, symbol.movieDistance, 0));

              if (symbol.node.position.y <= this._maxDistance) {
                symbol.node.setPosition(v3(0, this._startRollingIndexY, 0));
                symbol.movieDistance = this._startRollingIndexY;

                if (this._isStopping) {
                  if (symbol.targetSymbol) {
                    symbol.spriteFrame = this.getSymbolIconSpriteFrame(this._finalIconId);
                    symbol.symbolIndex = this._finalIconId;
                    symbol.finalRolling = true;
                    this._targetSymbolFinalY = 0; // 設置目標符號最終Y位置  
                  } else {
                    symbol.isRunning = false;
                  }
                } else {
                  let index = this.getRandomSymbolIndex();
                  symbol.normalSpriteFrame = this.getSymbolIconSpriteFrame(index);
                  symbol.blurSpriteFrame = this.getBlurSpriteFrames(index);
                  symbol.setBlur();
                  symbol.symbolIndex = index;
                }
              }
            }
          }

          if (this._isStopping) {
            let targetSymbol = this._slotSymbolItems.find(item => item.finalRolling);

            if (targetSymbol) {
              if (targetSymbol.node.position.y == this._startRollingIndexY) {
                if (!targetSymbol.isTweenign) {
                  //this.unschedule(this.run);
                  targetSymbol.isTweenign = true;
                  tween(targetSymbol.node).to(this._tweenBounceTime, {
                    position: v3(0, this._targetSymbolFinalY, 0)
                  }, {
                    easing: 'elasticOut'
                  }).call(() => {
                    this.unschedule(this.run);

                    if (this._resolvePromise) {
                      this._resolvePromise();

                      this._resolvePromise = undefined;
                    }

                    if (this._stopResolvePromise) {
                      this._stopResolvePromise();

                      this._stopResolvePromise = undefined;
                    }
                  }).start();
                }
              }
            }
          }
        }

        getBlurSpriteFrames(iconId) {
          let symbolIconData = this._targetBlurSpriteFrames.find(item => item.iconId == iconId);

          return symbolIconData.spriteFrame;
        }

        getSymbolIconSpriteFrame(iconId) {
          let symbolIconData = this._targetSymbolSpriteFrames.find(item => item.iconId == iconId);

          return symbolIconData.spriteFrame;
        }

        getRandomSymbolIndex(extraNum) {
          let availableIndices = [];

          let currentSymbolIndices = this._slotSymbolItems.map(item => item.symbolIndex);

          if (extraNum && !currentSymbolIndices.includes(extraNum)) {
            currentSymbolIndices.push(extraNum);
          } // 建立可用的索引列表


          for (let i = 0; i < this._targetSymbolSpriteFrames.length; i++) {
            if (!currentSymbolIndices.includes(this._targetSymbolSpriteFrames[i].iconId)) {
              availableIndices.push(this._targetSymbolSpriteFrames[i].iconId);
            }
          } // 如果沒有可用的索引，則返回 -1


          if (availableIndices.length === 0) {
            return -1;
          } // 從可用索引列表中隨機選擇一個索引


          let randomIndex = Math.floor(Math.random() * availableIndices.length);
          return availableIndices[randomIndex];
        }

        resetSymbolData(starItem) {
          this._isStopping = false;
          this._countTime = 0;
          this._velocity = this._initialVelocity; // 重置速度

          this._targetSymbolFinalY = 0; // 重置目標符號最終Y位置

          for (let symbol of this._slotSymbolItems) {
            if (symbol.targetSymbol) {
              symbol.normalSpriteFrame = this.getSymbolIconSpriteFrame(starItem);
              symbol.blurSpriteFrame = this.getBlurSpriteFrames(starItem);
              symbol.setNormal();
              symbol.symbolIndex = starItem;
            } else {
              let index = this.getRandomSymbolIndex(starItem);
              symbol.normalSpriteFrame = this.getSymbolIconSpriteFrame(index);
              symbol.blurSpriteFrame = this.getBlurSpriteFrames(index);
              symbol.setBlur();
              symbol.symbolIndex = index;
            }

            symbol.isRunning = true;
            symbol.finalRolling = false;
            symbol.isTweenign = false;
            symbol.node.setPosition(symbol.initPosition);
          }
        } //--改變滾動時間


        changeRollingTotalTime(rollingTotalTime) {
          if (rollingTotalTime > 0) {
            this._realRollingTotalTime = rollingTotalTime;
          }
        } //--使用極限大的滾動時間(通常是需要外部控制停止時機使用)


        useMaxnumRollingTime() {
          this._realRollingTotalTime = Infinity;
        } //--使用預設設定的rollingTime


        useDefaultRollingTime() {
          this._realRollingTotalTime = this._rollingTotalTime;
        } //--強制停輪


        async stopRolling() {
          this._isStopping = true;
          return new Promise(resolve => {
            this._stopResolvePromise = resolve; // 儲存 resolve 函式
          });
        } //---滾動開始並且指定盤面上初始的圖案


        startRolling(finalIconId, starItem) {
          let previousValue = this._finalIconId;
          this._finalIconId = finalIconId;
          let realStartItem = starItem ? starItem : previousValue; //--沒有填就用上一把的結果當作開始圖案

          this.resetSymbolData(realStartItem);
          this.schedule(this.run, 0);
        } //---滾動開始(promise)並且指定盤面上初始的圖案


        runPromiseRolling(finalIconId, starItem) {
          return new Promise(resolve => {
            this._resolvePromise = resolve; // 儲存 resolve 函式

            this.startRolling(finalIconId, starItem); // 開始滾動
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_symbolSpriteFrames_L", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_blurSpriteFrames_L", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_symbolSpriteFrames_R", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_blurSpriteFrames_R", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_movingDistance", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_movingSpeed", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_maxDistance", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_rollingTotalTime", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_symbolFinalSpriteFrame", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_acceleration", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 500;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_maxVelocity", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_initialVelocity", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1000;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "_tweenBounceTime", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=417cadd177909c05185b65cc36efd703ec7c8232.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, Enum, instantiate, Prefab, Vec2, Vec3, Queue, UniIconBase, Debug, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, LayoutType, StopType, UniReel;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfQueue(extras) {
    _reporterNs.report("Queue", "../../../Core/Queue", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniMovement(extras) {
    _reporterNs.report("UniMovement", "../Util/Movement/UniMovement", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniIconBase(extras) {
    _reporterNs.report("UniIconBase", "./UniIconBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../../../Utils/Debug", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolBase(extras) {
    _reporterNs.report("SymbolBase", "./Interface/SymbolBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReel(extras) {
    _reporterNs.report("IReel", "./Interface/IReel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
      Enum = _cc.Enum;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Queue = _unresolved_2.Queue;
    }, function (_unresolved_3) {
      UniIconBase = _unresolved_3.UniIconBase;
    }, function (_unresolved_4) {
      Debug = _unresolved_4.Debug;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8180aI/jctMcZJ+tLRC98/s", "UniReel", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'Enum', 'instantiate', 'Prefab', 'v3', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LayoutType", LayoutType = /*#__PURE__*/function (LayoutType) {
        LayoutType[LayoutType["Vertical"] = 0] = "Vertical";
        LayoutType[LayoutType["Horizontal"] = 1] = "Horizontal";
        return LayoutType;
      }({}));

      _export("StopType", StopType = /*#__PURE__*/function (StopType) {
        StopType[StopType["NoStop"] = 0] = "NoStop";
        StopType[StopType["Immediate"] = 1] = "Immediate";
        StopType[StopType["RunoutData"] = 2] = "RunoutData";
        StopType[StopType["StopBySymbol"] = 3] = "StopBySymbol";
        return StopType;
      }({}));

      _export("UniReel", UniReel = (_dec = ccclass('UniReel'), _dec2 = property({
        readonly: true,
        tooltip: '第幾個滾輪'
      }), _dec3 = property({
        type: Enum(LayoutType),
        visible: true,
        tooltip: '滾輪方向'
      }), _dec4 = property({
        visible: true,
        tooltip: '翻轉方向'
      }), _dec5 = property({
        visible: true,
        tooltip: 'icon尺寸'
      }), _dec6 = property({
        type: CCFloat,
        visible: true,
        tooltip: 'icon相隔距離'
      }), _dec7 = property({
        type: CCFloat,
        visible: true,
        tooltip: '滾輪滾一格的時間'
      }), _dec8 = property({
        type: Prefab,
        visible: true
      }), _dec9 = property({
        visible: true
      }), _dec10 = property({
        type: Enum(StopType),
        visible: true,
        readonly: true
      }), _dec11 = property({
        type: _crd && UniIconBase === void 0 ? (_reportPossibleCrUseOfUniIconBase({
          error: Error()
        }), UniIconBase) : UniIconBase,
        visible: true
      }), _dec(_class = (_class2 = class UniReel extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "reelID", _descriptor, this);

          _initializerDefineProperty(this, "layoutType", _descriptor2, this);

          _initializerDefineProperty(this, "inverseDirection", _descriptor3, this);

          _initializerDefineProperty(this, "iconSize", _descriptor4, this);

          _initializerDefineProperty(this, "iconSpacing", _descriptor5, this);

          _initializerDefineProperty(this, "moveInterval", _descriptor6, this);

          _initializerDefineProperty(this, "iconPrefab", _descriptor7, this);

          _initializerDefineProperty(this, "_iconAmount", _descriptor8, this);

          _initializerDefineProperty(this, "_stopType", _descriptor9, this);

          _initializerDefineProperty(this, "_iconList", _descriptor10, this);

          this.onStartRoll = void 0;
          this.onStopRoll = void 0;
          this.onMoveOnceStart = void 0;
          this.onMoveOnceComplete = void 0;
          this.onSetIconData = void 0;
          this.waitForRollComplete = null;
          this.data = new (_crd && Queue === void 0 ? (_reportPossibleCrUseOfQueue({
            error: Error()
          }), Queue) : Queue)();
          this.dequeueSymbol = void 0;
        }

        get iconList() {
          return this._iconList;
        }

        get stopType() {
          return this._stopType;
        }

        get iconAmount() {
          return this._iconAmount;
        }

        get isVertical() {
          return this.layoutType === LayoutType.Vertical;
        }

        get moveDis() {
          var iconSize = this.isVertical ? this.iconSize.y : this.iconSize.x;
          return iconSize + this.iconSpacing;
        }

        get moveDir() {
          var dir = this.inverseDirection ? -1 : 1;
          return this.isVertical ? Vec3.UP.clone().negative().multiplyScalar(dir) : Vec3.RIGHT.clone().negative().multiplyScalar(dir);
        }

        get IconDis() {
          return this.isVertical ? Vec3.UP.clone().multiplyScalar(this.moveDis) : Vec3.RIGHT.clone().multiplyScalar(this.moveDis);
        }

        get deltaDis() {
          return this.moveDir.multiplyScalar(this.moveDis * 0.5);
        }

        get topPos() {
          var dir = this.inverseDirection ? -1 : 1;
          return this.IconDis.multiplyScalar(0.5 * this.iconList.length * dir);
        }

        init(reelID) {
          this.reelID = reelID;
          this.createIcon(this.iconAmount + 2); // 預備兩個icon，上跟下

          this.initLayout();
          this.initIconSymbol();
        }

        initIconSymbol() {
          for (var index = 0; index < this.iconList.length; index++) {
            var icon = this.iconList[index];
            var randomSymbol = this.createRandomSymbol();
            icon.symbol = randomSymbol;
          }
        }

        movementUpdate(deltaTime) {
          for (var index = 0; index < this.iconList.length; index++) {
            var icon = this.iconList[index];
            icon.updateMove(deltaTime);
          }
        }

        interrupt() {
          this.stopRoll(StopType.Immediate);

          for (var index = 0; index < this.iconList.length; index++) {
            var icon = this.iconList[index];
            icon.stop();
          }
        }

        addIcon(iconList) {
          for (var index = 0; index < iconList.length; index++) {
            var icon = iconList[index];
            iconList.push(icon);
          }
        }

        startRollAsync() {
          var _this = this;

          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              _this.startRoll();

              _this.waitForRollComplete = resolve;
            });
          })();
        }

        startRoll() {
          var _this$onStartRoll;

          this._stopType = StopType.NoStop;
          (_this$onStartRoll = this.onStartRoll) == null || _this$onStartRoll.call(this);
          this.resetMovements();
          this.moveOnce();
        }

        stopRollAsync(stopType) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              if (_this2._stopType !== StopType.NoStop) {
                (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                  error: Error()
                }), Debug) : Debug).Log('UniReel: must call startRoll before stopRoll!');
                resolve();
              } else {
                _this2.stopRoll(stopType);

                _this2.waitForRollComplete = resolve;
              }
            });
          })();
        }

        stopRoll(stopType) {
          if (this._stopType !== StopType.NoStop) {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).Log('UniReel: must call startRoll before stopRoll!');
          }

          this._stopType = stopType;
        }
        /**
         * 滾輪即停，把queue裡面的資料清空到剩下伺服器資料
         */


        fastStopRoll() {
          while (this.data.count > this.iconAmount + 2) {
            //把隨機資料直接移除直到剩餘伺服器資料
            this.data.dequeue();
          }
        }

        resetMovements() {
          for (var index = 0; index < this.iconList.length; index++) {
            var icon = this.iconList[index];
            icon.clearLeftDeltaTime();
          }
        }

        moveOnce() {
          var _this$onMoveOnceStart;

          (_this$onMoveOnceStart = this.onMoveOnceStart) == null || _this$onMoveOnceStart.call(this);
          var moveOutIndex = this.inverseDirection ? 0 : this.iconList.length - 1;

          for (var i = 0; i < this._iconList.length; ++i) {
            this._iconList[i].moveBy(this.deltaDis, this.moveInterval * 0.5);

            if (i === moveOutIndex) {
              this._iconList[i].moveTo(this.topPos, 0);

              this._iconList[i].addCallback(this.setIconData.bind(this));
            }

            this._iconList[i].moveBy(this.deltaDis, this.moveInterval * 0.5);

            if (i === moveOutIndex) {
              this._iconList[i].addCallback(this.moveOnceComplete.bind(this));
            }
          }
        }

        moveOnceComplete(move) {
          var _this$onMoveOnceCompl;

          this.reArrangeIcon();
          this.changeSibling(this._iconList);
          (_this$onMoveOnceCompl = this.onMoveOnceComplete) == null || _this$onMoveOnceCompl.call(this);

          if (this._stopType === StopType.Immediate || this._stopType === StopType.RunoutData && this.data.count === 0 || this._stopType === StopType.StopBySymbol && this.dequeueSymbol !== null && this.dequeueSymbol.stopSymbol) {
            var _this$onStopRoll, _this$waitForRollComp;

            //stop
            (_this$onStopRoll = this.onStopRoll) == null || _this$onStopRoll.call(this);
            (_this$waitForRollComp = this.waitForRollComplete) == null || _this$waitForRollComp.call(this);
          } else {
            this.moveOnce();
          }
        }

        setIconData(movement) {
          var _this$onSetIconData;

          var moveOutIndex = this.inverseDirection ? 0 : this.iconList.length - 1;
          var moveOutSymbol = this.iconList[moveOutIndex].symbol;

          if (moveOutSymbol !== null) {
            this.destroySymbol(moveOutSymbol);
          }

          this.iconList[moveOutIndex].symbol = this.getData();
          (_this$onSetIconData = this.onSetIconData) == null || _this$onSetIconData.call(this, this.iconList[moveOutIndex].symbol, moveOutIndex);
        }

        getData() {
          if (this.data.count > 0) {
            this.dequeueSymbol = this.data.dequeue();
          } else {
            this.dequeueSymbol = this.createRandomSymbol();
          }

          return this.dequeueSymbol;
        }

        reArrangeIcon() {
          if (this.inverseDirection) {
            var firstIcon = this._iconList.shift();

            this._iconList.push(firstIcon);
          } else {
            var lastIcon = this._iconList.pop();

            this._iconList.unshift(lastIcon);
          }
        }

        changeSibling(icons) {
          for (var index = 0; index < icons.length; index++) {
            var icon = icons[index];
            icon.siblingIndex = index;
          }

          if (icons.length > 1) {
            //預設最後面的
            var temp = icons[icons.length - 2].siblingIndex;
            icons[icons.length - 2].siblingIndex = icons[icons.length - 1].siblingIndex;
            icons[icons.length - 1].siblingIndex = temp;
          }
        }

        createIcon(amount) {
          this._iconList = [];

          for (var index = 0; index < amount; index++) {
            var icon = instantiate(this.iconPrefab).getComponent(_crd && UniIconBase === void 0 ? (_reportPossibleCrUseOfUniIconBase({
              error: Error()
            }), UniIconBase) : UniIconBase);
            icon.node.setParent(this.node);
            icon.init();

            this._iconList.push(icon);
          }
        }

        initLayout() {
          for (var i = 0; i < this.iconList.length; i++) {
            var pos = this.IconDis.multiplyScalar(0.5 * (this.iconList.length - 1) - i);
            this.iconList[i].node.setPosition(pos);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "reelID", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "layoutType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return LayoutType.Vertical;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "inverseDirection", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconSize", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(0, 0);
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "iconSpacing", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "moveInterval", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.01;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "iconPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_iconAmount", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_stopType", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return StopType.Immediate;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_iconList", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      /*
          ### Icon List format ###
          [0]------upper prepared icon
          ---------display icon start
          [1]
          [2]------root position
          [3]
          ---------display icon end
          [4]------lower prepared icon
      
          ### icon move once steps ###
          1.origin:
              [0]
              --------display icon start
              [1]
              [2]
              [3]
              --------display icon end
              [4]
      
          2.move half icon size:
              [0]-----display icon start
              [1]
              [2]
              [3]-----display icon end
              [4]
      
          3.move last icon to top, set new data:
              [4]
              [0]-----display icon start
              [1]
              [2]
              [3]-----display icon end
      
          4.move half icon size:
              [4]
              --------display icon start
              [0]
              [1]
              [2]
              --------display icon end
              [3]
      
          5.rearrange icon:
              [0]
              --------display icon start
              [1]
              [2]
              [3]
              --------display icon end
              [4]
      */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0d9c252005b6fe6efd7680afd721c5c7d2daf4c2.js.map
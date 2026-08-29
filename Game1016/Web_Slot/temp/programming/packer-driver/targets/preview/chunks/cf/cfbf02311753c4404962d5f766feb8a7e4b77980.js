System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, Enum, instantiate, Prefab, Vec2, Vec3, UniIconBase, Debug, Queue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, LayoutType, StopType, UniReel;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUniMovement(extras) {
    _reporterNs.report("UniMovement", "./Movement/UniMovement", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniIconBase(extras) {
    _reporterNs.report("UniIconBase", "./UniIconBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolBase(extras) {
    _reporterNs.report("SymbolBase", "./Interface/SymbolBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReel(extras) {
    _reporterNs.report("IReel", "./Interface/IReel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "db://assets/Scripts/Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQueue(extras) {
    _reporterNs.report("Queue", "db://assets/Scripts/Utils/Core", _context.meta, extras);
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
      UniIconBase = _unresolved_2.UniIconBase;
    }, function (_unresolved_3) {
      Debug = _unresolved_3.Debug;
      Queue = _unresolved_3.Queue;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "76592kuXwhLb6gbnLLMTgs7", "UniReel", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'Enum', 'instantiate', 'Prefab', 'tween', 'v3', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 滾輪方向
       */

      _export("LayoutType", LayoutType = /*#__PURE__*/function (LayoutType) {
        LayoutType[LayoutType["Vertical"] = 0] = "Vertical";
        LayoutType[LayoutType["Horizontal"] = 1] = "Horizontal";
        return LayoutType;
      }({}));
      /**
       * 普通滾輪停止方式
       */


      _export("StopType", StopType = /*#__PURE__*/function (StopType) {
        StopType[StopType["NoStop"] = 0] = "NoStop";
        StopType[StopType["Immediate"] = 1] = "Immediate";
        StopType[StopType["RunoutData"] = 2] = "RunoutData";
        StopType[StopType["StopBySymbol"] = 3] = "StopBySymbol";
        return StopType;
      }({}));
      /**
       * 控制icon的移動、更新Symbol資料，來達成滾輪效果
       * 
       * 滾輪流程
       * 
       * ![reelFlow](../images/reelFlow.png)
       * 
       * icon的移動流程
       *  * ### Icon List format ###
          [0]------upper prepared icon<br>
          ---------display icon start<br>
          [1]<br>
          [2]------root position<br>
          [3]<br>
          ---------display icon end<br>
          [4]------lower prepared icon<br>
      
          ### icon move once steps ###
          1.origin:<br>
              [0]<br>
              --------display icon start<br>
              [1]<br>
              [2]<br>
              [3]<br>
              --------display icon end<br>
              [4]<br>
      
          2.move half icon size:<br>
              [0]-----display icon start<br>
              [1]<br>
              [2]<br>
              [3]-----display icon end<br>
              [4]<br>
      
          3.move last icon to top, set new data:<br>
              [4]<br>
              [0]-----display icon start<br>
              [1]<br>
              [2]<br>
              [3]-----display icon end<br>
      
          4.move half icon size:<br>
              [4]<br>
              --------display icon start<br>
              [0]<br>
              [1]<br>
              [2]<br>
              --------display icon end<br>
              [3]<br>
      
          5.rearrange icon:<br>
              [0]<br>
              --------display icon start<br>
              [1]<br>
              [2]<br>
              [3]<br>
              --------display icon end<br>
              [4]<br>
       */


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

          /**滾輪ID */
          _initializerDefineProperty(this, "reelID", _descriptor, this);

          /**滾輪方向 */
          _initializerDefineProperty(this, "layoutType", _descriptor2, this);

          /**翻轉方向 */
          _initializerDefineProperty(this, "inverseDirection", _descriptor3, this);

          /**icon尺寸 */
          _initializerDefineProperty(this, "iconSize", _descriptor4, this);

          /**icon相隔距離 */
          _initializerDefineProperty(this, "iconSpacing", _descriptor5, this);

          /**滾輪滾一格的時間 */
          _initializerDefineProperty(this, "moveInterval", _descriptor6, this);

          /**生成icon的prefab */
          _initializerDefineProperty(this, "iconPrefab", _descriptor7, this);

          /**內部使用，紀錄滾輪顯示盤面上的icon數量 */
          _initializerDefineProperty(this, "_iconAmount", _descriptor8, this);

          /**內部使用，紀錄當前停止方式 */
          _initializerDefineProperty(this, "_stopType", _descriptor9, this);

          /** 內部使用，紀錄滾輪上的所有icon，包括上下預備的icon */
          _initializerDefineProperty(this, "_iconList", _descriptor10, this);

          this.onStartRoll = void 0;
          this.onStopRoll = void 0;
          this.onMoveOnceStart = void 0;
          //UniReelView已串接，如果要覆蓋，需要注意
          this.onMoveOnceComplete = void 0;
          this.onSetIconData = void 0;

          /**紀錄resolve，等待滾輪結束觸發 */
          this.waitForRollComplete = null;

          /**滾輪存放Symbol資料，由外部傳入 */
          this.data = new (_crd && Queue === void 0 ? (_reportPossibleCrUseOfQueue({
            error: Error()
          }), Queue) : Queue)();

          /**當前重置位置icon的Symbol資料 */
          this.dequeueSymbol = void 0;
        }

        /** 滾輪上的所有icon，包括上下預備的icon */
        get iconList() {
          return this._iconList;
        }
        /**產生隨機Symbol資料，必須實作 */

        /**回收Symbol，必須實作 */


        /**滾輪當前停止方式 */
        get stopType() {
          return this._stopType;
        }
        /**滾輪顯示盤面上的icon數量 */


        get iconAmount() {
          return this._iconAmount;
        }
        /**是否為垂直滾輪 */


        get isVertical() {
          return this.layoutType === LayoutType.Vertical;
        }
        /**移動一格的距離 */


        get moveDis() {
          var iconSize = this.isVertical ? this.iconSize.y : this.iconSize.x;
          return iconSize + this.iconSpacing;
        }
        /**移動方向標準化 */


        get moveDir() {
          var dir = this.inverseDirection ? -1 : 1;
          return this.isVertical ? Vec3.UP.clone().negative().multiplyScalar(dir) : Vec3.RIGHT.clone().negative().multiplyScalar(dir);
        }
        /**icon間的距離，根據滾輪方向變動 */


        get iconDis() {
          return this.isVertical ? Vec3.UP.clone().multiplyScalar(this.moveDis) : Vec3.RIGHT.clone().multiplyScalar(this.moveDis);
        }
        /**icon位移量的向量，預設是一次移動半格 */


        get deltaDis() {
          return this.moveDir.multiplyScalar(this.moveDis * 0.5);
        }
        /**icon的重置位置，每次都從這個位置開始滾動 */


        get topPos() {
          var dir = this.inverseDirection ? -1 : 1;
          return this.iconDis.multiplyScalar(0.5 * this.iconList.length * dir);
        }
        /**
         * 初始化滾輪，生成icon以及排版 
         * @param reelID 滾輪ID
         */


        init(reelID) {
          this.reelID = reelID;
          this.createIcon(this.iconAmount + 2); // 預設預備兩個icon，上跟下

          this.initLayout();
          this.initIconSymbol();
        }
        /**
         * 設定初始盤面的Symbol，預設是呼叫createRandomSymbol產生隨機Symbol
         * @example
         * UniReel初始化，生成icon後，呼叫此方法更新Symbol
         * ```ts
         *  public init(reelID: number): void {
            this.reelID = reelID;
            this.createIcon(this.iconAmount + 2);
            this.initLayout();
            this.initIconSymbol();
        }
         * ```
         */


        initIconSymbol() {
          for (var index = 0; index < this.iconList.length; index++) {
            var icon = this.iconList[index];
            var randomSymbol = this.createRandomSymbol();
            icon.symbol = randomSymbol;
          }
        }
        /**
         * 將所有的icon做更新移動，如果是icon自己更新，則不用呼叫此方法
         * @param deltaTime 一幀的時間
         */


        movementUpdate(deltaTime) {
          for (var index = 0; index < this.iconList.length; index++) {
            var icon = this.iconList[index];
            icon.updateMove(deltaTime);
          }
        }
        /**
         * 中斷滾輪，不會等icon滾完一格，會立即停止移動
         */


        interrupt() {
          this.stopRoll(StopType.Immediate);

          for (var index = 0; index < this.iconList.length; index++) {
            var icon = this.iconList[index];
            icon.stop();
          }
        }
        /**
         * 將iconList加入到滾輪中
         * @param icons 要加入的icon
         */


        addIcon(icons) {
          for (var index = 0; index < icons.length; index++) {
            var icon = icons[index];
            this.iconList.push(icon);
          }
        }
        /**
         * 開始滾動，直到滾輪結束才會resolve
         * 
         * 這個方法比較少用，一般會使用 {@link UniReel.stopRollAsync stopRollAsync}
         * @returns 
         */


        startRollAsync() {
          var _this = this;

          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              _this.startRoll();

              _this.waitForRollComplete = resolve;
            });
          })();
        }
        /**
         * 開始滾動，將stopType設為NoStop，並重置icon的UniMovement
         * 
         * 如果有在startRoll之前，需要移動的話，需要先呼叫resetMovements
         * @example
         * 假如你要在滾輪開始滾動前，執行bouncing，就需要先呼叫resetMovements
         * ```ts
         * public upBouncing(): void {
            this.resetMovements();
            this.bouncingAsync(this.bounceConfig.bounceDis);
            startRoll();
        }
         * ```
         */


        startRoll() {
          var _this$onStartRoll;

          this._stopType = StopType.NoStop;
          (_this$onStartRoll = this.onStartRoll) == null || _this$onStartRoll.call(this);
          this.resetMovements();
          this.moveOnce();
        }
        /**
         * 停止滾動，直到滾輪結束才會resolve
         * @param stopType 停止方式
         * @example
         * 停止單個滾輪，利用await來等待滾輪結束，再繼續執行後續表演
         * ```ts
         * protected async stopOneReel(reelID: number, resultData: number[], stopType: number): Promise<void> {
            this.setReelDataCallback(reelID, resultData);
            await this.reelList[reelID].stopRollAsync(stopType);
            this.oneReelRollEnd(reelID);
        }
         * ```
         */


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
        /**
         * 停止滾動，設定停止方式，等到滾動一格後判斷是否結束
         * @param stopType 停止方式
         */


        stopRoll(stopType) {
          if (this._stopType !== StopType.NoStop) {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).Log('UniReel: must call startRoll before stopRoll!');
          }

          this._stopType = stopType;
        }
        /** 
         * 重置所有icon的UniMovement，他會把上次移動未使用到的時間清空
         * 
         * 當結束一輪滾動，下一次要啟動滾輪前，一定要執行此方法
         * 
         * @example
         * 在MoveOnce前呼叫
         * ```ts
         * public startRoll(): void {
            this._stopType = StopType.NoStop;
              this.onStartRoll?.();
            this.resetMovements();
            this.moveOnce();
        }
         * ```
         */


        resetMovements() {
          for (var index = 0; index < this.iconList.length; index++) {
            var icon = this.iconList[index];
            icon.clearLeftDeltaTime();
          }
        }
        /** 
         * 滾輪表演的基本動作，透過循環滾動一格的方式實現無限滾動
         *
         * 滾動一格，預設是滾動半格，icon換資料，並重置位置，再滾動半格
         */


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

            this._iconList[i].moveBy(this.deltaDis, this.moveInterval * 0.5); //console.log('check moveOutIndex', i, moveOutIndex);


            if (i === moveOutIndex) {
              this._iconList[i].addCallback(this.moveOnceComplete.bind(this));
            }
          }
        }
        /**
         * 滾動一格結束後的處理，判斷繼續滾動或是結束
         * @param move 當前重置位置的movement
         * @example
         * 下面範例是透過icon的addCallback來執行
         * ```ts
         * protected moveOnce(): void {
            this._iconList[0].moveBy(this.deltaDis, this.moveInterval);
            this._iconList[0].addCallback(this.moveOnceComplete.bind(this));
        }
         */


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
        /**
         * 設置重置位置icon的Symbol
         * @param movement 當前重置位置的movement
         * @example
         * 下面範例是透過icon的addCallback來執行
         * ```ts
         * protected moveOnce(): void {
            this._iconList[0].moveBy(this.deltaDis, this.moveInterval);
            this._iconList[0].moveTo(this.topPos, 0);
            this._iconList[0].addCallback(this.setIconData.bind(this));
        }
         * ```
         */


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
        /**
         * 取得Symbol，當沒有資料時會產生隨機Symbol 
         * @returns Symbol資料
         * @example
         * 取得資料，並設置給重置位置的icon
         * ```ts
         *  protected setIconData(movement: UniMovement): void {
            let moveOutIndex = this.inverseDirection ? 0 : this.iconList.length - 1;
            this.iconList[moveOutIndex].symbol = this.getData();
        }
         * ```
         */


        getData() {
          if (this.data.count > 0) {
            this.dequeueSymbol = this.data.dequeue();
          } else {
            this.dequeueSymbol = this.createRandomSymbol();
          }

          return this.dequeueSymbol;
        }
        /**
         * 重新排列iconList，每滾完一格就會更新
         *  * @example
         * 滾動一格結束後，重新排列
         * ```ts
         *  protected moveOnceComplete(move: UniMovement): void {
            this.reArrangeIcon();
            this.changeSibling(this._iconList);
        }
         * ```
         */


        reArrangeIcon() {
          if (this.inverseDirection) {
            var firstIcon = this._iconList.shift();

            this._iconList.push(firstIcon);
          } else {
            var lastIcon = this._iconList.pop();

            this._iconList.unshift(lastIcon);
          }
        }
        /**
         * 更新icon的siblingIndex，每滾完一格就會更新
         * @param icons 要更新的icon
         * @example
         * 滾動一格結束後，更新icon的siblingIndex
         * ```ts
         *  protected moveOnceComplete(move: UniMovement): void {
            this.reArrangeIcon();
            this.changeSibling(this._iconList);
        }
         * ```
         */


        changeSibling(icons) {
          for (var index = 0; index < icons.length; index++) {
            var icon = icons[index];
            icon.siblingIndex = index;
          }
        }
        /**
         * 生成amount數量的icon，掛在滾輪底下
         * 
         * 預設數量為iconAmount + 2 (上下預備的兩個icon) 
         * @param amount 生成數量
         * 
         * @example
         * 在UniReel初始化時，生成 iconAmount + 2 數量的icon
         * ```ts
         *  public init(reelID: number): void {
            this.reelID = reelID;
            this.createIcon(this.iconAmount + 2);
            this.initLayout();
            this.initIconSymbol();
        }
         * ```
         */


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
        /**
         * 對icon進行排版
         * 
         * 如果滾輪方向改變，需要重新呼叫
         * @example
         * 在UniReel初始化，生成icon後，呼叫此方法對icon進行排版
         * ```ts
         *  public init(reelID: number): void {
            this.reelID = reelID;
            this.createIcon(this.iconAmount + 2);
            this.initLayout();
            this.initIconSymbol();
        }
         * ```
         */


        initLayout() {
          for (var i = 0; i < this.iconList.length; i++) {
            var pos = this.iconDis.multiplyScalar(0.5 * (this.iconList.length - 1) - i);
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

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cfbf02311753c4404962d5f766feb8a7e4b77980.js.map
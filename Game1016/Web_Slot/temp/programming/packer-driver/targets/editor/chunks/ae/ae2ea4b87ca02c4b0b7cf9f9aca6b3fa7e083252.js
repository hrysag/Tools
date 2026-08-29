System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, Enum, instantiate, Prefab, v3, Vec2, Vec3, UniIconBase, Queue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, LayoutType, StopType, BasicReel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUniMovement(extras) {
    _reporterNs.report("UniMovement", "../ReferencePathForUniSlot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReel(extras) {
    _reporterNs.report("IReel", "../ReferencePathForUniSlot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolBase(extras) {
    _reporterNs.report("SymbolBase", "../ReferencePathForUniSlot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniIconBase(extras) {
    _reporterNs.report("UniIconBase", "../ReferencePathForUniSlot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQueue(extras) {
    _reporterNs.report("Queue", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
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
      v3 = _cc.v3;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      UniIconBase = _unresolved_2.UniIconBase;
    }, function (_unresolved_3) {
      Queue = _unresolved_3.Queue;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e765dZ0IiFPaY1L6f7nLzgZ", "BasicReel", undefined); //import { IReel } from 'db://assets/Scripts/ReelTemplate/ReelTemplate_3/Scripts/Interface/IReel';
      //import { SymbolBase } from 'db://assets/Scripts/ReelTemplate/ReelTemplate_3/Scripts/Interface/SymbolBase';
      //import { UniIconBase } from 'db://assets/Scripts/ReelTemplate/ReelTemplate_3/Scripts/UniIconBase';
      //import { BasicIcon } from '../BasicIcon/BasicIcon';


      //import { Queue } from 'db://assets/Scripts/Core/Queue';
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

      _export("BasicReel", BasicReel = (_dec = ccclass('BasicReel'), _dec2 = property({
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
      }), _dec(_class = (_class2 = class BasicReel extends Component {
        constructor(...args) {
          super(...args);

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

          this._testStopTime = 0;
          this.iconWarehouse = [];
          this.maximumIconDic = 0;
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
          let iconSize = this.isVertical ? this.iconSize.y : this.iconSize.x;
          return iconSize + this.iconSpacing;
        }

        get moveDir() {
          let dir = this.inverseDirection ? -1 : 1;
          return this.isVertical ? Vec3.UP.clone().negative().multiplyScalar(dir) : Vec3.RIGHT.clone().negative().multiplyScalar(dir);
        }

        get IconDis() {
          return this.isVertical ? Vec3.UP.clone().multiplyScalar(this.moveDis) : Vec3.RIGHT.clone().multiplyScalar(this.moveDis);
        }

        get deltaDis() {
          return this.moveDir.multiplyScalar(this.moveDis * 0.5);
        }

        get topPos() {
          let dir = this.inverseDirection ? -1 : 1;
          return this.IconDis.multiplyScalar(0.5 * this.iconList.length * dir);
        } //--這邊會被override掉


        init(reelID) {
          this.reelID = reelID;
          this.createIcon(this.iconAmount + 2); // 預備兩個icon，上跟下

          this.initLayout();
          this.initIconSymbol();
        }

        setMaximumIconDic() {
          //--new--
          //this.maximumIconDic = (this.iconAmount * this.iconSize.y) - this.iconSize.y / 2;
          this.maximumIconDic = this.iconAmount * (this.iconSize.y + this.iconSpacing) - (this.iconSize.y + this.iconSpacing) / 2;
        }

        initIconSymbol() {
          for (let index = 0; index < this.iconList.length; index++) {
            const icon = this.iconList[index];
            let randomSymbol = this.createRandomSymbol();
            icon.symbol = randomSymbol;
          }
        }

        movementUpdate(deltaTime) {
          for (let index = 0; index < this.iconList.length; index++) {
            const icon = this.iconList[index];
            icon.updateMove(deltaTime);
          }
        }

        interrupt() {
          this.stopRoll(StopType.Immediate);

          for (let index = 0; index < this.iconList.length; index++) {
            const icon = this.iconList[index];
            icon.stop();
          }
        }

        addIcon(iconList) {
          for (let index = 0; index < iconList.length; index++) {
            const icon = iconList[index];
            iconList.push(icon);
          }
        }

        async startRollAsync() {
          return new Promise((resolve, reject) => {
            this.startRoll();
            this.waitForRollComplete = resolve;
          });
        }

        startRoll() {
          var _this$onStartRoll;

          this._stopType = StopType.NoStop;
          (_this$onStartRoll = this.onStartRoll) == null || _this$onStartRoll.call(this);
          this.resetMovements();
          this.moveOnce();
        }

        async stopRollAsync(stopType) {
          return new Promise((resolve, reject) => {
            if (this._stopType !== StopType.NoStop) {
              //Debug.Log('UniReel: must call startRoll before stopRoll!');
              resolve();
            } else {
              this._testStopTime = Date.now();
              this.stopRoll(stopType);
              this.waitForRollComplete = resolve;
            }
          });
        }

        stopRoll(stopType) {
          if (this._stopType !== StopType.NoStop) {//Debug.Log('UniReel: must call startRoll before stopRoll!');
          }

          this._stopType = stopType;
        }
        /**
         * 滾輪即停，把queue裡面的資料清空到剩下伺服器資料
         * 
         */
        //-override


        fastStopRoll() {
          while (this.data.count > this.iconAmount + 2) {
            //把隨機資料直接移除直到剩餘伺服器資料
            this.data.dequeue();
          }
        }

        resetMovements() {
          for (let index = 0; index < this.iconList.length; index++) {
            const icon = this.iconList[index];
            icon.clearLeftDeltaTime();
          }
        }

        moveOnce() {
          var _this$onMoveOnceStart;

          (_this$onMoveOnceStart = this.onMoveOnceStart) == null || _this$onMoveOnceStart.call(this);
          let moveOutIndex = this.inverseDirection ? 0 : this.iconList.length - 1;

          for (let i = 0; i < this._iconList.length; ++i) {
            this._iconList[i].moveBy(this.deltaDis, this.moveInterval * .5);

            if (i === moveOutIndex) {
              const topPos = this.getIconPositionByIndex(0);
              topPos.subtract(v3(0, -this.iconSize.y / 2, 0));

              this._iconList[i].moveTo(topPos, 0);

              this._iconList[i].addCallback(this.setIconData.bind(this));
            }

            this._iconList[i].moveBy(this.deltaDis, this.moveInterval * .5);

            if (i === moveOutIndex) {
              this._iconList[i].addCallback(this.moveOnceComplete.bind(this));
            }
          }
        }

        async moveOnceComplete(move) {
          var _this$onMoveOnceCompl;

          this.reArrangeIcon();
          this.changeSibling(this._iconList);
          (_this$onMoveOnceCompl = this.onMoveOnceComplete) == null || _this$onMoveOnceCompl.call(this);

          if (this._stopType === StopType.Immediate || this._stopType === StopType.RunoutData && this.data.count === 0 || this._stopType === StopType.StopBySymbol && this.dequeueSymbol !== null && this.dequeueSymbol.stopSymbol) {
            var _this$onStopRoll, _this$waitForRollComp;

            //stop
            const beforeCut = this.data.count; //--test

            console.log();
            (_this$onStopRoll = this.onStopRoll) == null || _this$onStopRoll.call(this);
            (_this$waitForRollComp = this.waitForRollComplete) == null || _this$waitForRollComp.call(this);
          } else {
            this.moveOnce();
          }
        } //---override


        setIconData(movement) {
          var _this$onSetIconData;

          let moveOutIndex = this.inverseDirection ? 0 : this.iconList.length - 1;
          let moveOutSymbol = this.iconList[moveOutIndex].symbol;

          if (moveOutSymbol !== null) {
            this.destroySymbol(moveOutSymbol);
          }

          this.iconList[moveOutIndex].symbol = this.getData();
          (_this$onSetIconData = this.onSetIconData) == null || _this$onSetIconData.call(this, this.iconList[moveOutIndex].symbol, moveOutIndex);
        } //--override


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
            // 如果有反向 → 保留反向的處理
            const firstIcon = this._iconList.shift();

            this._iconList.push(firstIcon);
          } else {
            // 正常方向 → 把最下面的 [7] 拉到最上面 [0]
            const lastIcon = this._iconList.pop();

            this._iconList.unshift(lastIcon);
          }
        } //--override..


        changeSibling(icons) {}
        /*
        protected getWaitingIcon(): Icon {
             let icon: Icon;
            if (this.iconWarehouse.length > 0) {
                icon = this.iconWarehouse.pop();
            } else {
                icon = instantiate(this.iconPrefab).getComponent(UniIconBase);
                return icon;
            }
             icon.node.setParent(this.node);
            icon.init();
            return icon;
         }*/

        /*
        protected recycleIcon(icon: Icon): void {
             if (this.iconWarehouse.length < this.maximumWarehouseLens) {
                icon.reset();
                this.iconWarehouse.push(icon);
            } else {
                icon.destroy();
            }
        }*/


        createIcon(amount) {
          this._iconList = [];

          for (let index = 0; index < amount; index++) {
            let icon = instantiate(this.iconPrefab).getComponent(_crd && UniIconBase === void 0 ? (_reportPossibleCrUseOfUniIconBase({
              error: Error()
            }), UniIconBase) : UniIconBase);
            icon.node.setParent(this.node);
            icon.init();

            this._iconList.push(icon);
          }
        }

        getIconPositionByIndex(index) {
          // 幾何中心在顯示範圍 [2] 和 [3] 之間
          const CENTER_INDEX = 2.5;
          const offset = index - CENTER_INDEX;
          return this.IconDis.multiplyScalar(-offset);
        }

        initLayout() {
          for (let i = 0; i < this.iconList.length; i++) {
            const pos = this.getIconPositionByIndex(i);
            this.iconList[i].node.setPosition(pos);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "reelID", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "layoutType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return LayoutType.Vertical;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "inverseDirection", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconSize", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec2(0, 0);
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "iconSpacing", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "moveInterval", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.01;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "iconPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_iconAmount", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_stopType", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return StopType.Immediate;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_iconList", [_dec11], {
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
//# sourceMappingURL=ae2ea4b87ca02c4b0b7cf9f9aca6b3fa7e083252.js.map
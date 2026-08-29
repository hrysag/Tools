System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCBoolean, CCFloat, Component, RealCurve, v3, Vec3, ObjPoolMgr, EaseType, Queue, easeFunctions, Pool, MoveParam, _dec, _dec2, _dec3, _class2, _class3, _descriptor, _descriptor2, _crd, ccclass, property, Command, State, UniMovement;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfObjPoolMgr(extras) {
    _reporterNs.report("ObjPoolMgr", "../../../../../Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIObjPool(extras) {
    _reporterNs.report("IObjPool", "../../../../../Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEaseType(extras) {
    _reporterNs.report("EaseType", "../../../../../Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQueue(extras) {
    _reporterNs.report("Queue", "../../../../../Utils/Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeaseFunctions(extras) {
    _reporterNs.report("easeFunctions", "../../../../../Utils/Core", _context.meta, extras);
  }

  _export("MoveParam", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCBoolean = _cc.CCBoolean;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
      RealCurve = _cc.RealCurve;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ObjPoolMgr = _unresolved_2.ObjPoolMgr;
      EaseType = _unresolved_2.EaseType;
      Queue = _unresolved_2.Queue;
      easeFunctions = _unresolved_2.easeFunctions;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8129AyMOdHu43fuaTwYvC8", "UniMovement", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCFloat', 'Component', 'Node', 'RealCurve', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * UniMovement動作命令
       */

      _export("Command", Command = /*#__PURE__*/function (Command) {
        Command[Command["MoveTo"] = 0] = "MoveTo";
        Command[Command["MoveFrom"] = 1] = "MoveFrom";
        Command[Command["MoveBy"] = 2] = "MoveBy";
        Command[Command["Callback"] = 3] = "Callback";
        return Command;
      }({}));
      /**
       * UniMovement狀態
       */


      _export("State", State = /*#__PURE__*/function (State) {
        State[State["None"] = 0] = "None";
        State[State["Moving"] = 1] = "Moving";
        State[State["Pause"] = 2] = "Pause";
        return State;
      }({}));
      /**
       * MoveParam的物件池
       */


      Pool = class Pool extends (_crd && ObjPoolMgr === void 0 ? (_reportPossibleCrUseOfObjPoolMgr({
        error: Error()
      }), ObjPoolMgr) : ObjPoolMgr) {
        constructor() {
          super();
          this.init(10, MoveParam.createPoolObject);
        }

      };
      /**
       * UniMovement指令，包含所有動作命令所需的欄位屬性，繼承IObjPool
       */

      _export("MoveParam", MoveParam = class MoveParam {
        /**
         * 內部使用，只透過物件池產生
         */
        constructor() {
          /**紀錄起始位置 */
          this.startPos = new Vec3();

          /**紀錄終點位置 */
          this.endPos = new Vec3();

          /**相對移動的偏移量 */
          this.offset = new Vec3();

          /**所需的移動時間 */
          this.duration = 0.0;

          /**紀錄累積的移動時間 */
          this.curTime = 0.0;

          /**動作命令類型 */
          this.cmdType = Command.MoveTo;

          /**內部使用，紀錄easing類型 */
          this._easeType = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
            error: Error()
          }), EaseType) : EaseType).Linear;

          /**移動狀態 */
          this.moveState = State.None;

          /**是否設置本地座標，否的話則設置世界座標 */
          this.isLocal = false;

          /**等到執行該MoveParam時，會觸發此方法 */
          this.callback = null;

          /**自訂easing曲線，如果這個有值則會以這個曲線為主，如果沒有則以easeType為主 */
          this.easedValueCustom = new RealCurve();
        }
        /**讓物件池產生MoveParam的方法，返回自身，使其只透過物件池創建
         * @returns MoveParam
         */


        static createPoolObject() {
          return new MoveParam();
        }
        /**MoveParam的物件池 */


        /**設定easing類型，如果傳入是null或undefined則預設為{@link EaseType.Linear}
         * @param easeType easing類型
        */
        set easeType(easeType) {
          if (easeType === null || easeType === undefined) {
            easeType = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
              error: Error()
            }), EaseType) : EaseType).Linear;
          }

          this._easeType = easeType;
        }
        /**取得easing類型 */


        get easeType() {
          return this._easeType;
        }
        /**是否完成，完成條件為累積移動的時間大於等於所需的移動時間 */


        get isDone() {
          return this.curTime >= this.duration;
        }
        /**完成還需要多少時間 */


        get remainDuration() {
          return this.duration - this.curTime;
        }

        onObjLoad() {}

        onObjInstance() {}

        onObjRecycle() {
          this.startPos = v3(0, 0, 0);
          this.endPos = v3(0, 0, 0);
          this.offset = v3(0, 0, 0);
          this.duration = 0.0;
          this.curTime = 0.0;
          this.cmdType = Command.MoveTo;
          this._easeType = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
            error: Error()
          }), EaseType) : EaseType).Linear;
          this.moveState = State.None;
          this.isLocal = false;
          this.callback = null;
          this.easedValueCustom = new RealCurve();
        }

        onObjUnLoad() {}

      });
      /**
       * 管理MoveParam指令，控制物件移動，在update計算執行
       */


      MoveParam.pool = new Pool();

      _export("UniMovement", UniMovement = (_dec = ccclass('UniMovement'), _dec2 = property(CCBoolean), _dec3 = property(CCFloat), _dec(_class2 = (_class3 = class UniMovement extends Component {
        constructor(...args) {
          super(...args);

          /**是否由component的update來執行 */
          _initializerDefineProperty(this, "updateSelf", _descriptor, this);

          /**時間縮放，數值越小移動時間越長 */
          _initializerDefineProperty(this, "timeScale", _descriptor2, this);

          /**存放MoveParam指令，只要有指令就會馬上執行，同時多個指令則依序執行 */
          this.params = new (_crd && Queue === void 0 ? (_reportPossibleCrUseOfQueue({
            error: Error()
          }), Queue) : Queue)();

          /**在移動指令執行前觸發 */
          this.onMoveStart = null;

          /**在移動指令完成後觸發 */
          this.onMoveComplete = null;

          /**當指令完成後，{@link params}為空時觸發 */
          this.onLastMoveComplete = null;

          /**在移動指令執行前觸發，只會監聽一次 */
          this.onMoveStartOnce = null;

          /**在移動指令完成後觸發，只會監聽一次 */
          this.onMoveCompleteOnce = null;

          /**當指令完成後，{@link params}為空時觸發，只會監聽一次 */
          this.onLastMoveCompleteOnce = null;

          /**內部使用，正在執行的指令，如果執行完畢則為null，執行完畢記得要從{@link MoveParam.pool}釋放 */
          this._curParam = null;

          /**剩餘的deltaTime 
           * 
           * 在滾輪連續移動的過程中，有可能一幀的時間，移動已經完成了，
           * 
           * 但還剩下一半的時間，他需要等到下一幀的指令，才能繼續移動，就會導致滾輪不流暢
           * 
           * 所以需要計算出剩餘的deltaTime，在下一個指令的時候，加上剩餘的deltaTime
           * 
           * 這樣就能保持滾輪的流暢
          */
          this._leftDeltaTime = 0.0;
        }

        /**取得正在執行的指令，可能為null */
        get curParam() {
          return this._curParam;
        }
        /**
         * 移動到指定位置
         * @param dest 終點位置
         * @param duration 所需的時間
         * @param isLocal 是否設置本地座標，否的話則設置世界座標
         * @param ease easing的類型
         * @param easedValueCustom 自定義easing
         * @returns 
         */


        moveTo(dest, duration, isLocal = true, ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType).Linear, easedValueCustom = null) {
          if (duration < 0) return;
          const moveParam = MoveParam.pool.instance();
          moveParam.endPos = dest;
          moveParam.duration = duration;
          moveParam.easeType = ease;
          moveParam.cmdType = Command.MoveTo;
          moveParam.isLocal = isLocal;
          moveParam.easedValueCustom = easedValueCustom;

          this._addMoveParams(moveParam);
        }
        /**
         * 從起始位置設定，移動到指定位置
         * @param from 初始位置
         * @param dest 終點位置
         * @param duration 所需的時間
         * @param isLocal 是否設置本地座標，否的話則設置世界座標
         * @param ease easing的類型
         * @param easedValueCustom 自定義easing
         * @returns 
         */


        moveFrom(from, dest, duration, isLocal = true, ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType).Linear, easedValueCustom = null) {
          if (duration < 0) return;
          const moveParam = MoveParam.pool.instance();
          moveParam.startPos = from;
          moveParam.endPos = dest;
          moveParam.duration = duration;
          moveParam.easeType = ease;
          moveParam.cmdType = Command.MoveFrom;
          moveParam.isLocal = isLocal;
          moveParam.easedValueCustom = easedValueCustom;

          this._addMoveParams(moveParam);
        }
        /**
         * 相對移動，相對移動一定是local
         * @param offset 相對移動的偏移量 
         * @param duration 所需的時間
         * @param ease easing的類型
         * @param easedValueCustom 自定義easing
         * @returns 
         */


        moveBy(offset, duration, ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType).Linear, easedValueCustom = null) {
          if (duration < 0) return;
          const moveParam = MoveParam.pool.instance();
          moveParam.offset = offset;
          moveParam.duration = duration;
          moveParam.easeType = ease;
          moveParam.cmdType = Command.MoveBy; //MoveBy must be local move

          moveParam.isLocal = true;
          moveParam.easedValueCustom = easedValueCustom;

          this._addMoveParams(moveParam);
        }
        /**
         * 加入要執行的方法，執行到此指令時，觸發callback
         * @param callback 要執行的方法
         * 
         * @example
         * icon移動到重置位置後，執行更換Symbol的方法
         * ```ts
         *   this._iconList[0].moveTo(this.topPos, 0);
         *   this._iconList[0].addCallback(this.setIconData.bind(this));
         * ```
         */


        addCallback(callback) {
          const moveParam = MoveParam.pool.instance();
          moveParam.cmdType = Command.Callback;
          moveParam.callback = callback;

          this._addMoveParams(moveParam);
        }
        /**動作暫停 */


        pause() {
          if (this._curParam !== null && this._curParam.moveState === State.Moving) {
            this._curParam.moveState = State.Pause;
          }
        }
        /**繼續動作 */


        resume() {
          if (this._curParam !== null && this._curParam.moveState === State.Pause) {
            this._curParam.moveState = State.Moving;
          }
        }
        /**停止動作 */


        stop() {
          while (this.params.count > 0) {
            let param = this.params.dequeue();
            MoveParam.pool.destroy(param);
          }

          this.params.clear();

          if (this._curParam !== null) {
            MoveParam.pool.destroy(this._curParam);
            this._curParam = null;
          }

          this.clearLeftDeltaTime();
        }
        /**除了監聽一次的callback，其餘callback清除 */


        clearCallbacks() {
          this.onMoveStart = null;
          this.onMoveComplete = null;
          this.onLastMoveComplete = null;
        }
        /**
         * 加入指令，並檢查是否更新當前的指令
         * @param p MoveParam指令 
         */


        _addMoveParams(p) {
          this.params.enqueue(p);

          this._updateMoveParams();

          this._onMoveUpdate();
        }
        /**
         * 更新當前的指令，如果有指令則立即執行
         */


        _updateCurParam() {
          if (this._curParam === null && this.params.count > 0) {
            this._curParam = this.params.dequeue();

            this._onMoveStart();

            if (this._curParam.cmdType === Command.Callback) {
              var _this$_curParam$callb, _this$_curParam;

              (_this$_curParam$callb = (_this$_curParam = this._curParam).callback) == null || _this$_curParam$callb.call(_this$_curParam, this);
            }
          }
        }
        /**
         * 移動指令內容更新(內部使用)，計算{@link MoveParam.curTime}，使其更新指令目前的移動狀態
         * 
         * 指令完成的話，檢查{@link params}是否有下一個指令，有的話更新當前的指令
         */


        _updateMoveParams() {
          if (this._curParam !== null) {
            if (this._curParam.remainDuration > this._leftDeltaTime) {
              //console.log('remain:' + this._curParam.remainDuration + ' left:' + this._leftDeltaTime);
              this._curParam.curTime += this._leftDeltaTime;
              this._leftDeltaTime = 0.0;
            } else {
              //console.log('remain:' + this._curParam.remainDuration + ' left:' + this._leftDeltaTime);
              this._leftDeltaTime -= this._curParam.remainDuration;
              this._curParam.curTime = this._curParam.duration;
            }

            if (this._curParam.isDone) {
              this._onMoveComplete();
            }
          }

          this._updateCurParam();

          if (this._curParam !== null && this._leftDeltaTime > 0.0) {
            this._updateMoveParams();
          }
        }
        /**
         * 處理移動指令完成(內部使用)，觸發{@link onMoveComplete}的一次性以及持續性callback
         * 
         * 如果{@link params}為空，觸發{@link onLastMoveComplete}的一次性以及持續性callback
         * 
         * 然後釋放當前的MoveParam
         */


        _onMoveComplete() {
          var _this$onMoveComplete, _this$onMoveCompleteO;

          if (this._curParam.cmdType === Command.Callback) {// pass position set
          } else if (this._curParam.isLocal) {
            this.node.setPosition(this._curParam.endPos);
          } else {
            this.node.setWorldPosition(this._curParam.endPos);
          }

          this._curParam.moveState = State.None;
          (_this$onMoveComplete = this.onMoveComplete) == null || _this$onMoveComplete.call(this, this);
          (_this$onMoveCompleteO = this.onMoveCompleteOnce) == null || _this$onMoveCompleteO.call(this, this);
          this.onMoveCompleteOnce = null;

          if (this.params.isEmpty) {
            var _this$onLastMoveCompl, _this$onLastMoveCompl2;

            (_this$onLastMoveCompl = this.onLastMoveComplete) == null || _this$onLastMoveCompl.call(this, this);
            (_this$onLastMoveCompl2 = this.onLastMoveCompleteOnce) == null || _this$onLastMoveCompl2.call(this, this);
            this.onLastMoveCompleteOnce = null;
          }

          MoveParam.pool.destroy(this._curParam);
          this._curParam = null;
        }
        /**
         * 開始處理移動指令(內部使用)，並觸發{@link onMoveStart}的一次性以及持續性callback
         */


        _onMoveStart() {
          var _this$onMoveStart, _this$onMoveStartOnce;

          if (this._curParam.cmdType === Command.MoveFrom) {
            if (this._curParam.isLocal) {
              this.node.setPosition(this._curParam.startPos);
            } else {
              this.node.setWorldPosition(this._curParam.startPos);
            }
          } else if (this._curParam.cmdType === Command.MoveTo) {
            this._curParam.startPos.set(this._curParam.isLocal ? this.node.position : this.node.worldPosition);
          } else if (this._curParam.cmdType === Command.MoveBy) {
            this._curParam.startPos.set(this.node.position);

            this._curParam.endPos.set(this.node.position.add(this._curParam.offset));
          }

          this._curParam.moveState = State.Moving;
          (_this$onMoveStart = this.onMoveStart) == null || _this$onMoveStart.call(this, this);
          (_this$onMoveStartOnce = this.onMoveStartOnce) == null || _this$onMoveStartOnce.call(this, this);
          this.onMoveStartOnce = null;
        }
        /**
         * 處理移動更新(內部使用)
         * @returns 
         */


        _onMoveUpdate() {
          if (this._curParam === null || this._curParam.cmdType === Command.Callback) {
            return;
          }

          let progress = 0;
          let currentProgress = this._curParam.curTime / (this._curParam.duration + 0.000001);

          if (this._curParam.easedValueCustom !== null) {
            progress = this._curParam.easedValueCustom.evaluate(currentProgress);
          } else {
            progress = (_crd && easeFunctions === void 0 ? (_reportPossibleCrUseOfeaseFunctions({
              error: Error()
            }), easeFunctions) : easeFunctions)[this._curParam.easeType](currentProgress);
          }

          let tempPos = new Vec3();
          Vec3.lerp(tempPos, this._curParam.startPos, this._curParam.endPos, progress);

          if (this._curParam.isLocal) {
            this.node.setPosition(tempPos);
          } else {
            this.node.setWorldPosition(tempPos);
          }
        }
        /**
         * 如果{@link updateSelf}為true，則會自行呼叫{@link updateMove}處理指令
         * @param deltaTime 一幀的時間
         */


        update(deltaTime) {
          if (this.updateSelf) {
            this.updateMove(deltaTime);
          }
        }
        /**
         * 清空剩餘的deltaTime
         *
         * 在下一次開始滾動表演時，需要將剩餘的deltaTime清空
         */


        clearLeftDeltaTime() {
          this._leftDeltaTime = 0.0;
        }
        /**
         * 處理指令的主要邏輯，會持續執行指令直到{@link params}為空
         * 
         * 如果是自己更新，則會自行在update中呼叫
         * 
         * 如果不是自己更新，則需要在外部呼叫此方法
         * @param deltaTime 一幀的時間
         * @returns 
         */


        updateMove(deltaTime) {
          if (this._curParam === null || this._curParam.moveState === State.Pause) {
            return;
          }

          if (this.params.count > 0) {
            this._leftDeltaTime += deltaTime * this.timeScale;
          } else {
            this._leftDeltaTime = deltaTime * this.timeScale;
          } //this._leftDeltaTime = deltaTime * this.timeScale;


          this._updateMoveParams();

          this._onMoveUpdate();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "updateSelf", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "timeScale", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      })), _class3)) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=29f2f6a2801da15ef5d4f3446800e8e470533544.js.map
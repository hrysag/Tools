System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, RealCurve, v3, Vec3, EaseType, ObjPoolMgr, Pool, MoveParam, _crd, ccclass, property, Command, State;

  function _reportPossibleCrUseOfUniMovement(extras) {
    _reporterNs.report("UniMovement", "./UniMovement", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEaseType(extras) {
    _reporterNs.report("EaseType", "db://assets/Scripts/Core/TweenExt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjPoolMgr(extras) {
    _reporterNs.report("ObjPoolMgr", "db://assets/Scripts/Core/ObjPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIObjPool(extras) {
    _reporterNs.report("IObjPool", "db://assets/Scripts/Core/IObjPool", _context.meta, extras);
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
      RealCurve = _cc.RealCurve;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      EaseType = _unresolved_2.EaseType;
    }, function (_unresolved_3) {
      ObjPoolMgr = _unresolved_3.ObjPoolMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "346792JI+VKQ5USv4ckDNpH", "MoveParam", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'RealCurve', 'v3', 'Vec3']);

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

      MoveParam.pool = new Pool();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d2566797d3d1551840ad53d8f566f06f3e867dcb.js.map
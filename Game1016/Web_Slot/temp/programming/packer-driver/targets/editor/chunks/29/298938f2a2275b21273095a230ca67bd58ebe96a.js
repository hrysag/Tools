System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, RealCurve, v3, Vec3, EaseType, ObjPoolMgr, _dec, _class, _class2, _crd, ccclass, property, Command, State, MoveParam;

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

      _cclegacy._RF.push({}, "57f54VZ80RG0pto7JOpnq95", "MoveParam", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Pool', 'RealCurve', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Command", Command = /*#__PURE__*/function (Command) {
        Command[Command["MoveTo"] = 0] = "MoveTo";
        Command[Command["MoveFrom"] = 1] = "MoveFrom";
        Command[Command["MoveBy"] = 2] = "MoveBy";
        Command[Command["Callback"] = 3] = "Callback";
        return Command;
      }({}));

      _export("State", State = /*#__PURE__*/function (State) {
        State[State["None"] = 0] = "None";
        State[State["Moving"] = 1] = "Moving";
        State[State["Pause"] = 2] = "Pause";
        return State;
      }({}));

      _export("MoveParam", MoveParam = (_dec = ccclass('MoveParam'), _dec(_class = (_class2 = class MoveParam {
        /**
         * 只透過物件池產生
         */
        constructor() {
          this.startPos = new Vec3();
          this.endPos = new Vec3();
          this.offset = new Vec3();
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

        set easeType(easeType) {
          if (easeType === null || easeType === undefined) {
            easeType = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
              error: Error()
            }), EaseType) : EaseType).Linear;
          }

          this._easeType = easeType;
        }

        get easeType() {
          return this._easeType;
        }

        get isDone() {
          return this.curTime >= this.duration;
        }

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

      }, _class2.pool = new class extends (_crd && ObjPoolMgr === void 0 ? (_reportPossibleCrUseOfObjPoolMgr({
        error: Error()
      }), ObjPoolMgr) : ObjPoolMgr) {
        constructor() {
          super();
          this.init(10, () => new _class2());
        }

      }(), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=298938f2a2275b21273095a230ca67bd58ebe96a.js.map
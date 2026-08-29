System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCBoolean, CCFloat, Component, Vec3, Command, MoveParam, State, Queue, easeFunctions, EaseType, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, UniMovement;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCommand(extras) {
    _reporterNs.report("Command", "../../../../ReelTemplate/ReelTemplate_3/Scripts/Movement/MoveParam", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveParam(extras) {
    _reporterNs.report("MoveParam", "../../../../ReelTemplate/ReelTemplate_3/Scripts/Movement/MoveParam", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../../../../ReelTemplate/ReelTemplate_3/Scripts/Movement/MoveParam", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQueue(extras) {
    _reporterNs.report("Queue", "db://assets/Scripts/Core/Queue", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeaseFunctions(extras) {
    _reporterNs.report("easeFunctions", "db://assets/Scripts/Core/TweenExt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEaseType(extras) {
    _reporterNs.report("EaseType", "db://assets/Scripts/Core/TweenExt", _context.meta, extras);
  }

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
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Command = _unresolved_2.Command;
      MoveParam = _unresolved_2.MoveParam;
      State = _unresolved_2.State;
    }, function (_unresolved_3) {
      Queue = _unresolved_3.Queue;
    }, function (_unresolved_4) {
      easeFunctions = _unresolved_4.easeFunctions;
      EaseType = _unresolved_4.EaseType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8129AyMOdHu43fuaTwYvC8", "UniMovement", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCFloat', 'Component', 'Node', 'RealCurve', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UniMovement", UniMovement = (_dec = ccclass('UniMovement'), _dec2 = property(CCBoolean), _dec3 = property(CCFloat), _dec(_class = (_class2 = class UniMovement extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "updateSelf", _descriptor, this);

          _initializerDefineProperty(this, "timeScale", _descriptor2, this);

          this.params = new (_crd && Queue === void 0 ? (_reportPossibleCrUseOfQueue({
            error: Error()
          }), Queue) : Queue)();
          this.onMoveStart = null;
          this.onMoveComplete = null;
          this.onLastMoveComplete = null;
          this.onMoveStartOnce = null;
          this.onMoveCompleteOnce = null;
          this.onLastMoveCompleteOnce = null;
          this._curParam = null;
          this._leftDeltaTime = 0.0;
        }

        get curParam() {
          return this._curParam;
        }

        moveTo(dest, duration, isLocal = true, ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType).Linear, easedValueCustom = null) {
          if (duration < 0) return;
          const moveParam = (_crd && MoveParam === void 0 ? (_reportPossibleCrUseOfMoveParam({
            error: Error()
          }), MoveParam) : MoveParam).pool.instance();
          moveParam.endPos = dest;
          moveParam.duration = duration;
          moveParam.easeType = ease;
          moveParam.cmdType = (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
            error: Error()
          }), Command) : Command).MoveTo;
          moveParam.isLocal = isLocal;
          moveParam.easedValueCustom = easedValueCustom;

          this._addMoveParams(moveParam);
        }

        moveFrom(from, dest, duration, isLocal = true, ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType).Linear, easedValueCustom = null) {
          if (duration < 0) return;
          const moveParam = (_crd && MoveParam === void 0 ? (_reportPossibleCrUseOfMoveParam({
            error: Error()
          }), MoveParam) : MoveParam).pool.instance();
          moveParam.startPos = from;
          moveParam.endPos = dest;
          moveParam.duration = duration;
          moveParam.easeType = ease;
          moveParam.cmdType = (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
            error: Error()
          }), Command) : Command).MoveFrom;
          moveParam.isLocal = isLocal;
          moveParam.easedValueCustom = easedValueCustom;

          this._addMoveParams(moveParam);
        }

        moveBy(offset, duration, ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
          error: Error()
        }), EaseType) : EaseType).Linear, easedValueCustom = null) {
          if (duration < 0) return;
          const moveParam = (_crd && MoveParam === void 0 ? (_reportPossibleCrUseOfMoveParam({
            error: Error()
          }), MoveParam) : MoveParam).pool.instance();
          moveParam.offset = offset;
          moveParam.duration = duration;
          moveParam.easeType = ease;
          moveParam.cmdType = (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
            error: Error()
          }), Command) : Command).MoveBy; //MoveBy must be local move

          moveParam.isLocal = true;
          moveParam.easedValueCustom = easedValueCustom;

          this._addMoveParams(moveParam);
        }

        addCallback(callback) {
          const moveParam = (_crd && MoveParam === void 0 ? (_reportPossibleCrUseOfMoveParam({
            error: Error()
          }), MoveParam) : MoveParam).pool.instance();
          moveParam.cmdType = (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
            error: Error()
          }), Command) : Command).Callback;
          moveParam.callback = callback;

          this._addMoveParams(moveParam);
        }

        pause() {
          if (this._curParam !== null && this._curParam.moveState === (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State).Moving) {
            this._curParam.moveState = (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
              error: Error()
            }), State) : State).Pause;
          }
        }

        resume() {
          if (this._curParam !== null && this._curParam.moveState === (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State).Pause) {
            this._curParam.moveState = (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
              error: Error()
            }), State) : State).Moving;
          }
        }

        stop() {
          while (this.params.count > 0) {
            let param = this.params.dequeue();
            (_crd && MoveParam === void 0 ? (_reportPossibleCrUseOfMoveParam({
              error: Error()
            }), MoveParam) : MoveParam).pool.destroy(param);
          }

          this.params.clear();

          if (this._curParam !== null) {
            (_crd && MoveParam === void 0 ? (_reportPossibleCrUseOfMoveParam({
              error: Error()
            }), MoveParam) : MoveParam).pool.destroy(this._curParam);
            this._curParam = null;
          }

          this.clearLeftDeltaTime();
        }

        clearCallbacks() {
          this.onMoveStart = null;
          this.onMoveComplete = null;
          this.onLastMoveComplete = null;
        }

        _addMoveParams(p) {
          this.params.enqueue(p);

          this._updateMoveParams();

          this._onMoveUpdate();
        }

        _updateCurParam() {
          if (this._curParam === null && this.params.count > 0) {
            this._curParam = this.params.dequeue();

            this._onMoveStart();

            if (this._curParam.cmdType === (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
              error: Error()
            }), Command) : Command).Callback) {
              var _this$_curParam$callb, _this$_curParam;

              (_this$_curParam$callb = (_this$_curParam = this._curParam).callback) == null || _this$_curParam$callb.call(_this$_curParam, this);
            }
          }
        }

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

        _onMoveComplete() {
          var _this$onMoveComplete, _this$onMoveCompleteO;

          if (this._curParam.cmdType === (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
            error: Error()
          }), Command) : Command).Callback) {// pass position set
          } else if (this._curParam.isLocal) {
            this.node.setPosition(this._curParam.endPos);
          } else {
            this.node.setWorldPosition(this._curParam.endPos);
          }

          this._curParam.moveState = (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State).None;
          (_this$onMoveComplete = this.onMoveComplete) == null || _this$onMoveComplete.call(this, this);
          (_this$onMoveCompleteO = this.onMoveCompleteOnce) == null || _this$onMoveCompleteO.call(this, this);
          this.onMoveCompleteOnce = null;

          if (this.params.isEmpty) {
            var _this$onLastMoveCompl, _this$onLastMoveCompl2;

            (_this$onLastMoveCompl = this.onLastMoveComplete) == null || _this$onLastMoveCompl.call(this, this);
            (_this$onLastMoveCompl2 = this.onLastMoveCompleteOnce) == null || _this$onLastMoveCompl2.call(this, this);
            this.onLastMoveCompleteOnce = null;
          }

          (_crd && MoveParam === void 0 ? (_reportPossibleCrUseOfMoveParam({
            error: Error()
          }), MoveParam) : MoveParam).pool.destroy(this._curParam);
          this._curParam = null;
        }

        _onMoveStart() {
          var _this$onMoveStart, _this$onMoveStartOnce;

          if (this._curParam.cmdType === (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
            error: Error()
          }), Command) : Command).MoveFrom) {
            if (this._curParam.isLocal) {
              this.node.setPosition(this._curParam.startPos);
            } else {
              this.node.setWorldPosition(this._curParam.startPos);
            }
          } else if (this._curParam.cmdType === (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
            error: Error()
          }), Command) : Command).MoveTo) {
            this._curParam.startPos.set(this._curParam.isLocal ? this.node.position : this.node.worldPosition);
          } else if (this._curParam.cmdType === (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
            error: Error()
          }), Command) : Command).MoveBy) {
            this._curParam.startPos.set(this.node.position);

            this._curParam.endPos.set(this.node.position.add(this._curParam.offset));
          }

          this._curParam.moveState = (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State).Moving;
          (_this$onMoveStart = this.onMoveStart) == null || _this$onMoveStart.call(this, this);
          (_this$onMoveStartOnce = this.onMoveStartOnce) == null || _this$onMoveStartOnce.call(this, this);
          this.onMoveStartOnce = null;
        }

        _onMoveUpdate() {
          if (this._curParam === null || this._curParam.cmdType === (_crd && Command === void 0 ? (_reportPossibleCrUseOfCommand({
            error: Error()
          }), Command) : Command).Callback) {
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

        update(deltaTime) {
          if (this.updateSelf) {
            this.updateMove(deltaTime);
          }
        }

        clearLeftDeltaTime() {
          this._leftDeltaTime = 0.0;
        }

        updateMove(deltaTime) {
          if (this._curParam === null || this._curParam.moveState === (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State).Pause) {
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "updateSelf", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "timeScale", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a562fe5a597412b1f5da9851025fc3f8423f7c14.js.map
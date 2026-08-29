System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, MotionStreakAuxiliary, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _dec6, _dec7, _class4, _class5, _descriptor5, _crd, ccclass, property, MotionData, MotionStreakAuxiliaryTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMotionStreakAuxiliary(extras) {
    _reporterNs.report("MotionStreakAuxiliary", "./MotionStreakAuxiliary", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      MotionStreakAuxiliary = _unresolved_2.MotionStreakAuxiliary;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05704s5QZtN5Y2rE9Wwx/Np", "MotionStreakAuxiliaryTest", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      MotionData = (_dec = ccclass('MotionData'), _dec2 = property({
        visible: true
      }), _dec3 = property({
        visible: true
      }), _dec4 = property({
        visible: true
      }), _dec5 = property(_crd && MotionStreakAuxiliary === void 0 ? (_reportPossibleCrUseOfMotionStreakAuxiliary({
        error: Error()
      }), MotionStreakAuxiliary) : MotionStreakAuxiliary), _dec(_class = (_class2 = class MotionData {
        constructor() {
          _initializerDefineProperty(this, "aniName", _descriptor, this);

          _initializerDefineProperty(this, "startPos", _descriptor2, this);

          _initializerDefineProperty(this, "endPos", _descriptor3, this);

          _initializerDefineProperty(this, "motionStreakAuxiliary", _descriptor4, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "aniName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startPos", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "endPos", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "motionStreakAuxiliary", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class);

      _export("MotionStreakAuxiliaryTest", MotionStreakAuxiliaryTest = (_dec6 = ccclass('MotionStreakAuxiliaryTest'), _dec7 = property(MotionData), _dec6(_class4 = (_class5 = class MotionStreakAuxiliaryTest extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "motionDataList", _descriptor5, this);
        }

        async onclick() {
          this.playMotionStreak();
        }

        async playMotionStreak() {
          for (let i = 0; i < this.motionDataList.length; i++) {
            const item = this.motionDataList[i];
            await item.motionStreakAuxiliary.play(item.aniName, item.startPos, item.endPos);
          }
        }

      }, (_descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "motionDataList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=395bf7fad87ffb68bdb62d2edba11ad5ac65478e.js.map
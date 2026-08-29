System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UniReel, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ReelManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIReel(extras) {
    _reporterNs.report("IReel", "./UniReel/Interface/IReel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniReel(extras) {
    _reporterNs.report("UniReel", "./UniReel/UniReel", _context.meta, extras);
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
    }, function (_unresolved_2) {
      UniReel = _unresolved_2.UniReel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a6c3tVmDdHrKoia+sCK/Fj", "ReelManager", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ReelManager", ReelManager = (_dec = ccclass('ReelManager'), _dec2 = property({
        type: _crd && UniReel === void 0 ? (_reportPossibleCrUseOfUniReel({
          error: Error()
        }), UniReel) : UniReel,
        visible: true
      }), _dec(_class = (_class2 = class ReelManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_reelList", _descriptor, this);
        }

        get reelAmount() {
          return this._reelList.length;
        }

        init() {
          for (var index = 0; index < this._reelList.length; index++) {
            var reel = this._reelList[index];
            reel.init(index);
          }
        }

        add(reel, index) {
          if (index) {
            this._reelList[index] = reel;
          } else {
            this._reelList.push(reel);
          }
        }

        remove(index) {
          this._reelList.splice(index, 1);
        }

        getReel(index) {
          return this._reelList[index];
        }

        getByState(reelState) {
          var reels = [];

          for (var reelID = 0; reelID < this._reelList.length; reelID++) {
            var reel = this._reelList[reelID];

            if (reel.currentRoundState === reelState) {
              reels.push(reel);
            }
          }

          return reels;
        }

        getReelState(reelID) {
          return this._reelList[reelID].currentRoundState;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_reelList", [_dec2], {
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
//# sourceMappingURL=f98e54a29d192f7590f846ad957681d71f283c58.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, UniReelView, Utility, UniDropReel, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, UniDropReelView;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUniReelView(extras) {
    _reporterNs.report("UniReelView", "../UniReelView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "db://assets/Scripts/Utils/Utility", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIDropReel(extras) {
    _reporterNs.report("IDropReel", "../Interface/IDropReel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUniDropReel(extras) {
    _reporterNs.report("UniDropReel", "./UniDropReel", _context.meta, extras);
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
    }, function (_unresolved_2) {
      UniReelView = _unresolved_2.UniReelView;
    }, function (_unresolved_3) {
      Utility = _unresolved_3.Utility;
    }, function (_unresolved_4) {
      UniDropReel = _unresolved_4.UniDropReel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6aa40+aUC9HKKVSxQQmQvX2", "UniDropReelView", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UniDropReelView", UniDropReelView = (_dec = ccclass('DropUniReelView'), _dec2 = property(_crd && UniDropReel === void 0 ? (_reportPossibleCrUseOfUniDropReel({
        error: Error()
      }), UniDropReel) : UniDropReel), _dec3 = property({
        type: CCFloat,
        tooltip: '停輪間隔的時間，目前只有掉落式公版使用，小於0代表一起齊停'
      }), _dec(_class = (_class2 = class UniDropReelView extends (_crd && UniReelView === void 0 ? (_reportPossibleCrUseOfUniReelView({
        error: Error()
      }), UniReelView) : UniReelView) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "dropReelList", _descriptor, this);

          _initializerDefineProperty(this, "stopDropSpaceTime", _descriptor2, this);
        }

        /**
         * 開始掉落方法，資料由實作層設定好傳入
         * @param dropOutIdList 掉落的 icon 索引 (不包含頭尾Icon)
         */
        startDropOut(dropOutIdList) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var lastIndex = dropOutIdList.length - 1;

            _this.reset();

            for (var index = 0; index < dropOutIdList.length; index++) {
              if (index === lastIndex) {
                yield _this.dropReelList[index].startDropOutAsync(dropOutIdList[index]);
              } else {
                _this.dropReelList[index].startDropOut(dropOutIdList[index]);

                if (_this.startSpaceTime >= 0 && !_this.isFastModeCallback()) {
                  yield (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
                    error: Error()
                  }), Utility) : Utility).waitPromise(_this.startSpaceTime);
                }
              }
            }
          })();
        }
        /**
          * 收到盤面資料時掉入畫面中方法，資料由實作層設定好傳入
          * @param dropInIdList 掉落的 icon 索引 (不包含頭尾Icon)
          * @param resultData 盤面資料
          */


        startDropIn(dropInIdList, resultData) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var lastIndex = dropInIdList.length - 1;

            for (var index = 0; index < dropInIdList.length; index++) {
              _this2.setReelDataCallback(index, resultData[index]);

              if (index === lastIndex) {
                yield _this2.dropReelList[index].startDropInAsync(dropInIdList[index]);
              } else {
                _this2.dropReelList[index].startDropIn(dropInIdList[index]);

                if (_this2.stopDropSpaceTime >= 0 && !_this2.isFastModeCallback()) {
                  yield (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
                    error: Error()
                  }), Utility) : Utility).waitPromise(_this2.stopDropSpaceTime);
                }
              }
            }
          })();
        }
        /**
         * 補盤方法，資料由實作層設定好傳入
         * @param removeIdList 被消除的 icon 索引 (不包含頭尾Icon)
         * @param resultData 盤面資料
         */


        startDropRefill(removeIdList, resultData) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var promiseList = [];

            for (var index = 0; index < removeIdList.length; index++) {
              _this3.setReelDataCallback(index, resultData[index]);

              if (removeIdList[index].length > 0) {
                promiseList.push(_this3.dropReelList[index].startDropRefillAsync(removeIdList[index]));
              }
            }

            yield Promise.all(promiseList);
          })();
        }

        fastStopRoll() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dropReelList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "stopDropSpaceTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6ebe3c93ffe6a7a360de1b2496c374e74946b301.js.map
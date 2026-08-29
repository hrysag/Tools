System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, JsonAsset, Debug, _dec, _dec2, _dec3, _dec4, _class, _class2, _crd, ccclass, property, JsonSerialization;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../../../Utils/Core", _context.meta, extras);
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
      JsonAsset = _cc.JsonAsset;
    }, function (_unresolved_2) {
      Debug = _unresolved_2.Debug;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6535elGv9tNMrj4Udgcr/cg", "JsonSerialization", undefined);

      __checkObsolete__(['_decorator', 'Component', 'JsonAsset', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JsonSerialization", JsonSerialization = (_dec = ccclass('JsonSerialization'), _dec2 = property({
        displayName: '匯出Json'
      }), _dec3 = property({
        displayName: '更新面板'
      }), _dec4 = property({
        type: JsonAsset,
        displayName: 'Json資料'
      }), _dec(_class = (_class2 = class JsonSerialization extends Component {
        constructor() {
          super(...arguments);
          this._jsonData = void 0;
          this.exporting = false;
        }

        set exportJson(value) {
          if (value && !this.exporting && this.jsonExtensionEnable()) {
            this.startExportJson();
          }
        }

        get exportJson() {
          return false;
        }

        set importJson(value) {
          if (value && this._jsonData) {
            JsonSerialization.setJsonData(this._jsonData.json, this);
          }
        }

        get importJson() {
          return false;
        }

        set jsonData(v) {
          this._jsonData = v;
        }

        get jsonData() {
          return this._jsonData;
        }

        /**
         * 根據Json資料更新物件
         * @param data json資料
         * @param obj 物件
         */
        static setJsonData(data, obj) {
          var _this = this;

          var _loop = function _loop(key) {
            var value = data[key];

            if (typeof value === 'object') {
              if (value['isRealCurve']) {
                obj[key].postExtrapolation = value.value.postExtrap;
                obj[key].preExtrapolation = value.value.preExtrap;
                obj[key].clear();
                value.value.keyFrames.forEach(item => {
                  var keyFrameValue = {};
                  keyFrameValue.value = item.value;
                  keyFrameValue.rightTangent = item.outTangent;
                  keyFrameValue.rightTangentWeight = item.outTangentWeight;
                  keyFrameValue.leftTangent = item.inTangent;
                  keyFrameValue.leftTangentWeight = item.inTangentWeight;
                  keyFrameValue.interpolationMode = item.interpMode;
                  keyFrameValue.tangentWeightMode = item.tangentWeightMode;
                  obj[key].addKeyFrame(item.time, keyFrameValue);
                });
              } else {
                _this.setJsonData(value, obj[key]);
              }
            } else {
              obj[key] = value;
            }
          };

          for (var key in data) {
            _loop(key);
          }
        }

        startExportJson() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var match = _this2.name.match(/<([^>]+)>/);

            var componentName = match[1];
            _this2.exporting = true;
            yield Editor.Message.request('component-json-tools', 'export-json-for-component', _this2.node.uuid, componentName, componentName);
            _this2.exporting = false;
          })();
        }

        jsonExtensionEnable() {
          return _asyncToGenerator(function* () {
            var packages = yield Editor.Package.getPackages({
              name: 'component-json-tools'
            });

            if (packages.length > 0) {
              if (!packages[0].enable) {
                (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                  error: Error()
                }), Debug) : Debug).LogWarning('component-json-tools 拓展未啟用');
              }

              return packages[0].enable;
            } else {
              (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                error: Error()
              }), Debug) : Debug).LogError('找不到 component-json-tools 拓展');
              return false;
            }
          })();
        }

      }, (_applyDecoratedDescriptor(_class2.prototype, "exportJson", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "exportJson"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "importJson", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "importJson"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "jsonData", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "jsonData"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=456d001a208080f48cadadfd0bbd8614c0176753.js.map
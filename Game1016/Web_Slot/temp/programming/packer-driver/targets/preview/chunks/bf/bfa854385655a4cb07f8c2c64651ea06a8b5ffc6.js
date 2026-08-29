System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCString, Component, instantiate, Prefab, resources, v3, Vec3, Debug, SlotRelayLang, GameSetting, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, LocalizationPrefab;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../Utils/Debug", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "../Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSetting(extras) {
    _reporterNs.report("GameSetting", "./GameSetting", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCString = _cc.CCString;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      resources = _cc.resources;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Debug = _unresolved_2.Debug;
    }, function (_unresolved_3) {
      SlotRelayLang = _unresolved_3.SlotRelayLang;
    }, function (_unresolved_4) {
      GameSetting = _unresolved_4.GameSetting;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "df926MbOA9MO6Xzh6/dh660", "LocalizationPrefab", undefined);

      __checkObsolete__(['_decorator', 'CCString', 'Component', 'instantiate', 'Node', 'Prefab', 'resources', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LocalizationPrefab", LocalizationPrefab = (_dec = ccclass('LocalizationPrefab'), _dec2 = property(CCString), _dec3 = property(Vec3), _dec4 = property(Vec3), _dec(_class = (_class2 = class LocalizationPrefab extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "resourcePath", _descriptor, this);

          _initializerDefineProperty(this, "position", _descriptor2, this);

          _initializerDefineProperty(this, "scale", _descriptor3, this);

          this._targetNode = null;
          this.isLoaded = false;
          this.onLoaded = null;
        }

        updateLocalization() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var lang = (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
              error: Error()
            }), GameSetting) : GameSetting).gameLang;
            yield _this.loadPrefab(lang);
          })();
        }

        loadPrefab(langKey) {
          if (this.isLoaded) {
            return Promise.resolve();
          }

          var langString = (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
            error: Error()
          }), SlotRelayLang) : SlotRelayLang)[langKey];
          this.resourcePath = this.resourcePath.trim();

          if (this.resourcePath) {
            this.isLoaded = true; // 避免重複加載

            var path = "Game/PrefabLocalization/" + langString + "/" + this.resourcePath;
            return new Promise((resolve, reject) => {
              resources.load(path, Prefab, (err, prefab) => {
                if (err) {
                  // 如果不存在該圖片，則使用英文資源
                  if (err.message.includes("Bundle resources doesn't contain")) {
                    this.isLoaded = false; // 如果語系不存在 設定加載flag為false 以便重新加載英文

                    this.loadPrefab((_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                      error: Error()
                    }), SlotRelayLang) : SlotRelayLang).en).then(() => {
                      resolve();
                    });
                  } else {
                    (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                      error: Error()
                    }), Debug) : Debug).LogWarning("LocalizationPrefab loadPrefab err: " + err.message);
                    resolve();
                  }
                } else {
                  var _this$onLoaded;

                  var newNode = instantiate(prefab);
                  this.node.addChild(newNode);
                  this.node.setPosition(this.position);
                  this.node.setScale(this.scale);
                  this._targetNode = newNode;
                  (_this$onLoaded = this.onLoaded) == null || _this$onLoaded.call(this, newNode);
                  this.isLoaded = true;
                  resolve();
                }
              });
            });
          } else {
            console.error("Node \"" + this.node.name + "\" LocalizationSprite No resource path");
            return Promise.resolve();
          }
        }

        get targetNode() {
          if (this._targetNode) {
            return this._targetNode;
          } else {
            console.warn("targetNode \u5C1A\u672A\u52A0\u8F09\u5B8C\u6210\uFF0C\u8ACB\u5148\u8A3B\u518A onLoaded \u65B9\u6CD5\u5F8C\u63A5\u6536");
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "resourcePath", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "position", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3(0, 0, 0);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scale", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3(1, 1, 1);
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bfa854385655a4cb07f8c2c64651ea06a8b5ffc6.js.map
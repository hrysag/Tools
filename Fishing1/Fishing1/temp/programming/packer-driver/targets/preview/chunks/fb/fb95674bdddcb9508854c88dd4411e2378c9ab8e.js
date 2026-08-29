System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, error, _decorator, Component, Animation, resources, view, macro, log, Mask, screen, ResolutionPolicy, v3, LZMA, ConnectToGSDemo, i18n, LocalizedSprite, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Main;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLZMA(extras) {
    _reporterNs.report("LZMA", "./LZMA", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConnectToGSDemo(extras) {
    _reporterNs.report("ConnectToGSDemo", "./ConnectToGSDemo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "../Libs/fish-common-lib/types/definitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfi18n(extras) {
    _reporterNs.report("i18n", "../Scripts/framework/utils/i18n/LanguageData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalizedSprite(extras) {
    _reporterNs.report("LocalizedSprite", "../Scripts/framework/utils/i18n/LocalizedSprite", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      error = _cc.error;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Animation = _cc.Animation;
      resources = _cc.resources;
      view = _cc.view;
      macro = _cc.macro;
      log = _cc.log;
      Mask = _cc.Mask;
      screen = _cc.screen;
      ResolutionPolicy = _cc.ResolutionPolicy;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      LZMA = _unresolved_2.default;
    }, function (_unresolved_3) {
      ConnectToGSDemo = _unresolved_3.default;
    }, function (_unresolved_4) {
      i18n = _unresolved_4.i18n;
    }, function (_unresolved_5) {
      LocalizedSprite = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "00fb0FTLgVGfID4v05yR/lb", "Main", undefined);

      __checkObsolete__(['Node', 'find', 'error', '_decorator', 'Component', 'Animation', 'resources', 'view', 'macro', 'log', 'Mask', 'screen', 'ResolutionPolicy', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Main", Main = (_dec = ccclass('Main'), _dec2 = property(Animation), _dec(_class = (_class2 = class Main extends Component {
        constructor() {
          super(...arguments);
          this.fishPath = void 0;
          this.fishPathPosIndex = -1;
          this.theFish = void 0;
          this.step = 0;
          this.createTime = -1;

          _initializerDefineProperty(this, "fishAni", _descriptor, this);
        }

        onLoad() {
          var _this = this;

          return _asyncToGenerator(function* () {
            (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
              error: Error()
            }), i18n) : i18n).init('en');
            view.setOrientation(macro.ORIENTATION_LANDSCAPE);
            view.setResizeCallback(() => {
              _this.updateViewport();
            });

            _this.updateViewport();

            var util = window.util; // 本地開發用，production 則是直接取location.search上的 d=xxxx

            var url = yield util.general.loginWithDemo({
              account: 'akb142',
              lang: 'cn',
              env: 'DEV',
              gameType: '38003'
            });
            var data = util.general.parseEntryData(url.split('d=')[1]); // i18n.init(data.lang);

            console.log('--==--');
            console.log(data);
            new (_crd && ConnectToGSDemo === void 0 ? (_reportPossibleCrUseOfConnectToGSDemo({
              error: Error()
            }), ConnectToGSDemo) : ConnectToGSDemo)().connect(data.sid);
          })();
        }

        start() {
          this.theFish = find('Fish2', this.node);
          this.loadFishPathFile();
          var s = find('Sprite', this.node);
          var ls = s.getComponent(_crd && LocalizedSprite === void 0 ? (_reportPossibleCrUseOfLocalizedSprite({
            error: Error()
          }), LocalizedSprite) : LocalizedSprite);
          ls.fetchRender();
        }

        update(deltaTime) {
          var state = this.fishAni.getState(this.fishAni.defaultClip.name);

          if (!state.isPlaying) {
            state.play();
          }

          this.moveFish(deltaTime);
        }

        switchMask() {
          var mask = this.getComponent(Mask);
          mask.enabled = !mask.enabled;
        }

        updateViewport() {
          var policy = view.getResolutionPolicy();
          var width = screen.windowSize.width;
          var height = screen.windowSize.height;
          var ratio = width / height;

          if (ratio >= 16 / 9) {
            policy.setContentStrategy(ResolutionPolicy.ContentStrategy.FIXED_HEIGHT);
          } else {
            policy.setContentStrategy(ResolutionPolicy.ContentStrategy.FIXED_WIDTH);
          }

          view.setResolutionPolicy(policy);
        }

        loadFishPathFile() {
          resources.load('common-path.json', (err, asset) => {
            if (err) {
              error('load failed');
              return;
            }

            log(_crd && LZMA === void 0 ? (_reportPossibleCrUseOfLZMA({
              error: Error()
            }), LZMA) : LZMA); // log(asset._nativeAsset); // 這裡嘗試過將binary string直接轉成array buffer 會失敗，所以還是在跑一次fetch走建立File流程

            log(asset.nativeUrl);
            fetch(asset.nativeUrl).then(response => response.blob()).then(blob => {
              var file = new File([blob], asset.name, {
                type: blob.type
              });
              log('File:', file);
              var fileReader = new FileReader();

              fileReader.onload = event => {
                var fileContent = event.target.result;
                log('File content:', fileContent);
                var decodedStr = (_crd && LZMA === void 0 ? (_reportPossibleCrUseOfLZMA({
                  error: Error()
                }), LZMA) : LZMA).decode(fileContent).toString();
                log(decodedStr);
                this.fishPath = JSON.parse(decodedStr);
              };

              fileReader.onerror = event => {
                error('Error reading file:', event.target.error);
              };

              fileReader.readAsArrayBuffer(file);
            }).catch(error => {
              error('Error creating File:', error);
            });
          });
        }

        moveFish(deltaTime) {
          if (!this.theFish) {
            return;
          }

          if (!this.fishPath) {
            return;
          }

          this.step += deltaTime;

          if (this.step >= 0.15) {
            // update every 150ms
            if (this.createTime == -1) {
              this.createTime = new Date().getTime();
            } // 先隨意設定10秒重生一次


            if (new Date().getTime() - this.createTime > 10000) {
              this.createTime = new Date().getTime();
              this.fishPathPosIndex = -1;
            }

            this.step = 0;
            var type = 0;
            var pathID = 0;
            var data = this.fishPath[type].pathData[pathID].NodeData;
            this.fishPathPosIndex = this.fishPathPosIndex < data.length - 1 ? this.fishPathPosIndex + 1 : this.fishPathPosIndex;
            var d = data[this.fishPathPosIndex];
            this.theFish.setPosition(v3(d.x, d.y, 0));
            this.theFish.angle = d.rotate;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fishAni", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fb95674bdddcb9508854c88dd4411e2378c9ab8e.js.map
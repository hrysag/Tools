System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, InstanceBase, AudioMgr, AudioUnit, debug, SoundController, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfInstanceBase(extras) {
    _reporterNs.report("InstanceBase", "./tools/InstanceBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "./tools/audio/AudioMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioUnit(extras) {
    _reporterNs.report("AudioUnit", "./tools/audio/AudioUnit", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      debug = _cc.debug;
    }, function (_unresolved_2) {
      InstanceBase = _unresolved_2.default;
    }, function (_unresolved_3) {
      AudioMgr = _unresolved_3.default;
    }, function (_unresolved_4) {
      AudioUnit = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7c47aaRov9AoaUQuNxqf7Oc", "SoundController", undefined);

      __checkObsolete__(['_decorator', 'log', 'debug']);

      SoundController = class SoundController extends (_crd && InstanceBase === void 0 ? (_reportPossibleCrUseOfInstanceBase({
        error: Error()
      }), InstanceBase) : InstanceBase) {
        constructor() {
          super();
          this._bgmOpt = {
            isFree: false
          };
          debug('SoundController constructor');
        }

        load() {
          var _this = this;

          return _asyncToGenerator(function* () {
            debug('SoundController load');
            yield (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).addBundle('audio');

            _this.initBgm();
          })();
        }

        initBgm() {
          ["bgm_fg", // "bgm_lw",
          "bgm_mg" // "bgm_win_big",
          // "bgm_win_end",
          // "bgm_win_mega",
          // "bgm_win_super"
          ].forEach(k => {
            var unit = (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).getUnitByName(k);
            unit.type = (_crd && AudioUnit === void 0 ? (_reportPossibleCrUseOfAudioUnit({
              error: Error()
            }), AudioUnit) : AudioUnit).Type.Music;
            unit.loop = true;
          });
        }

        playBGM(opt) {
          this._bgmOpt = Object.assign(this._bgmOpt, opt);
          var isFree = this._bgmOpt.isFree || false;
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).stop('bgm_fg');
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).stop('bgm_mg');

          if (isFree) {
            (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).play('bgm_fg');
          } else {
            (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).play('bgm_mg');
          }
        }

      };

      _export("default", SoundController.instance());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7f3130ec69f80b801a16ce4fedb53c44d7d4875b.js.map
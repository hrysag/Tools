System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, resources, SpriteFrame, SlotRelayLang, Debug, SkeletonExtension, GameSetting, _dec, _dec2, _class, _crd, ccclass, requireComponent, property, LocalizationSpine;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfSlotAttaches(extras) {
    _reporterNs.report("SlotAttaches", "./SlotAttaches", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "db://assets/Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "db://assets/Scripts/Utils/Debug", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonExtension(extras) {
    _reporterNs.report("SkeletonExtension", "./SkeletonExtension", _context.meta, extras);
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
      Component = _cc.Component;
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      SlotRelayLang = _unresolved_2.SlotRelayLang;
    }, function (_unresolved_3) {
      Debug = _unresolved_3.Debug;
    }, function (_unresolved_4) {
      SkeletonExtension = _unresolved_4.SkeletonExtension;
    }, function (_unresolved_5) {
      GameSetting = _unresolved_5.GameSetting;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5a02unU6pPjqOy1Jciupxt", "LocalizationSpine", undefined);

      __checkObsolete__(['_decorator', 'Component', 'resources', 'SpriteFrame']);

      ({
        ccclass,
        requireComponent,
        property
      } = _decorator);

      _export("LocalizationSpine", LocalizationSpine = (_dec = ccclass('LocalizationSpine'), _dec2 = requireComponent(_crd && SkeletonExtension === void 0 ? (_reportPossibleCrUseOfSkeletonExtension({
        error: Error()
      }), SkeletonExtension) : SkeletonExtension), _dec(_class = _dec2(_class = class LocalizationSpine extends Component {
        updateLocalization() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var lang = (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
              error: Error()
            }), GameSetting) : GameSetting).gameLang;
            yield _this.loadAllSpine(lang);
          })();
        }

        loadAllSpine(langKey) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var promiseList = [];
            var langString = (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
              error: Error()
            }), SlotRelayLang) : SlotRelayLang)[langKey];

            var localizationSpine = _this2.getComponent(_crd && SkeletonExtension === void 0 ? (_reportPossibleCrUseOfSkeletonExtension({
              error: Error()
            }), SkeletonExtension) : SkeletonExtension);

            if (localizationSpine === null) {
              console.error("Node \"" + _this2.node.name + "\" LocalizationSpine No SpineAttach");
            }

            var attachments = localizationSpine.slotAttaches;

            for (var i = 0; i < attachments.length; i++) {
              var name = attachments[i].spriteFrame.name;
              promiseList.push(_this2.loadSpine(langString, name, attachments[i]));
            }

            yield Promise.all(promiseList);
            localizationSpine.checkAndUpdateSlot();
          })();
        }

        loadSpine(langString, name, attachment) {
          var path = "Game/ImageLocalization/" + langString + "/" + name + "/spriteFrame";
          return new Promise((resolve, reject) => {
            resources.load(path, SpriteFrame, (err, texture) => {
              if (err) {
                console.log(err); // 如果不存在該圖片，則使用英文圖片

                if (err.message.includes("Bundle resources doesn't contain")) {
                  this.loadSpine((_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                    error: Error()
                  }), SlotRelayLang) : SlotRelayLang)[(_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                    error: Error()
                  }), SlotRelayLang) : SlotRelayLang).en], name, attachment).then(() => {
                    resolve();
                  });
                } else {
                  (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
                    error: Error()
                  }), Debug) : Debug).LogWarning("LocalizationSpine loadImage err: " + err.message);
                  resolve();
                }
              } else {
                attachment.spriteFrame = texture;
                resolve();
              }
            });
          });
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=87b6ee0b4eb0770541a8c906f1db08cda31cc5e8.js.map
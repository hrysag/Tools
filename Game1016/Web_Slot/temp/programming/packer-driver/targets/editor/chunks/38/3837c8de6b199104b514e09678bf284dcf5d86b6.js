System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, resources, SpriteFrame, SkeletonExtension, GameSetting, SlotRelayLang, Debug, _dec, _dec2, _class, _crd, ccclass, requireComponent, property, LocalizationSpine;

  function _reportPossibleCrUseOfSkeletonExtension(extras) {
    _reporterNs.report("SkeletonExtension", "../../ArtTool/SkeletonExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSetting(extras) {
    _reporterNs.report("GameSetting", "../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "../Definition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotAttaches(extras) {
    _reporterNs.report("SlotAttaches", "../../ArtTool/SlotAttaches", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../../Utils/Core", _context.meta, extras);
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
      SkeletonExtension = _unresolved_2.SkeletonExtension;
    }, function (_unresolved_3) {
      GameSetting = _unresolved_3.GameSetting;
      SlotRelayLang = _unresolved_3.SlotRelayLang;
    }, function (_unresolved_4) {
      Debug = _unresolved_4.Debug;
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
        async updateLocalization() {
          let lang = (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).gameLang;
          await this.loadAllSpine(lang);
        }

        async loadAllSpine(langKey) {
          let promiseList = [];
          const langString = (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
            error: Error()
          }), SlotRelayLang) : SlotRelayLang)[langKey];
          let localizationSpine = this.getComponent(_crd && SkeletonExtension === void 0 ? (_reportPossibleCrUseOfSkeletonExtension({
            error: Error()
          }), SkeletonExtension) : SkeletonExtension);

          if (localizationSpine === null) {
            console.error(`Node "${this.node.name}" LocalizationSpine No SpineAttach`);
          }

          let attachments = localizationSpine.slotAttaches;

          for (let i = 0; i < attachments.length; i++) {
            let name = attachments[i].spriteFrame.name;
            promiseList.push(this.loadSpine(langString, name, attachments[i]));
          }

          await Promise.all(promiseList);
          localizationSpine.checkAndUpdateSlot();
        }

        loadSpine(langString, name, attachment) {
          let path = `Game/ImageLocalization/${langString}/${name}/spriteFrame`;
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
//# sourceMappingURL=3837c8de6b199104b514e09678bf284dcf5d86b6.js.map
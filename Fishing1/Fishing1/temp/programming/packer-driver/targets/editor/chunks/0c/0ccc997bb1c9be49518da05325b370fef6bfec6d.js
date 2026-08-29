System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, JsonAsset, director, resources, Polyglot, i18n, _crd, polyInst;

  // if (CC_EDITOR) {
  //     Editor.Profile.load('profile://project/i18n.json', (err, profile) => {
  //         globalThis.i18nConfig.curLang = profile.data['default_language'];
  //         if (polyInst) {
  //             let data = loadLanguageData(globalThis.i18nConfig.curLang) || {};
  //             initPolyglot(data);
  //         }
  //     });
  // }
  async function loadLanguageData(language) {
    return new Promise((resolve, reject) => {
      // 未來在這裡可以置換成fetch CDN端的語系檔而不是專案內的
      const fileName = language == 'tw' ? 'zh_Hant' : language;
      resources.load(`weblate/${fileName}`, JsonAsset, (err, asset) => {
        if (err) {
          reject(err);
        }

        globalThis.i18nConfig.languages[language] = asset.json;
        resolve(globalThis.i18nConfig.languages[language]);
      });
    });
  }

  function initPolyglot(data) {
    if (data) {
      if (polyInst) {
        polyInst.replace(data);
      } else {
        polyInst = new (_crd && Polyglot === void 0 ? (_reportPossibleCrUseOfPolyglot({
          error: Error()
        }), Polyglot) : Polyglot)({
          phrases: data,
          allowMissing: true
        });
      }
    }
  } // module.exports = {


  function _reportPossibleCrUseOfPolyglot(extras) {
    _reporterNs.report("Polyglot", "./polyglot.min", _context.meta, extras);
  }

  _export("i18n", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      JsonAsset = _cc.JsonAsset;
      director = _cc.director;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      Polyglot = _unresolved_2.Polyglot;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ed4d5A/U1JLs5v3Dv56o3xD", "LanguageData", undefined); // const Polyglot = require('polyglot.min');


      __checkObsolete__(['JsonAsset', 'director', 'resources']);

      if (!globalThis.i18nConfig) {
        globalThis.i18nConfig = {
          languages: {},
          curLang: ''
        };
      }

      _export("i18n", i18n = class i18n {
        /**
         * This method allow you to switch language during runtime, language argument should be the same as your data file name
         * such as when language is 'zh', it will load your 'zh.js' data source.
         * @method init
         * @param language - the language specific data file name, such as 'zh' to load 'zh.js'
         */
        static async init(language) {
          if (!language || language === globalThis.i18nConfig.curLang) {
            return;
          }

          let data = (await loadLanguageData(language)) || {};
          globalThis.i18nConfig.curLang = language;
          initPolyglot(data);
          this.inst = polyInst;
        }
        /**
         * this method takes a text key as input, and return the localized string
         * Please read https://github.com/airbnb/polyglot.js for details
         * @method t
         * @return {String} localized string
         * @example
         *
         * var myText = i18n.t('MY_TEXT_KEY');
         *
         * // if your data source is defined as
         * // {"hello_name": "Hello, %{name}"}
         * // you can use the following to interpolate the text
         * var greetingText = i18n.t('hello_name', {name: 'nantas'}); // Hello, nantas
         */


        static t(key, opt) {
          if (Object.keys(polyInst.phrases).length === 0) {
            let data = loadLanguageData(globalThis.i18nConfig.curLang) || {};
            initPolyglot(data);
            console.warn('###防止出现parses数据丢失，重新替换数据');
          }

          if (polyInst) {
            return polyInst.t(key, opt);
          }
        } // inst: polyInst


        static updateSceneRenderers() {
          // very costly iterations
          let rootNodes = director.getScene().children; // walk all nodes with localize label and update

          let allLocalizedLabels = [];

          for (let i = 0; i < rootNodes.length; ++i) {
            let labels = rootNodes[i].getComponentsInChildren('LocalizedLabel');
            Array.prototype.push.apply(allLocalizedLabels, labels);
          }

          for (let i = 0; i < allLocalizedLabels.length; ++i) {
            let label = allLocalizedLabels[i];
            if (!label.node.active) continue;
            label.updateLabel();
          } // walk all nodes with localize sprite and update


          let allLocalizedSprites = [];

          for (let i = 0; i < rootNodes.length; ++i) {
            let sprites = rootNodes[i].getComponentsInChildren('LocalizedSprite');
            Array.prototype.push.apply(allLocalizedSprites, sprites);
          }

          for (let i = 0; i < allLocalizedSprites.length; ++i) {
            let sprite = allLocalizedSprites[i];
            if (!sprite.node.active) continue;
            sprite.updateSprite(globalThis.i18nConfig.curLang);
          }
        }

      });

      i18n.inst = null;
      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0ccc997bb1c9be49518da05325b370fef6bfec6d.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "cc/env"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, director, JsonAsset, Label, resources, RichText, LocalizationSprite, LocalizationLabel, Utility, LocalizationButton, LocalizationEvent, SlotRelayLang, LocalizationPrefab, LocalizationSpine, LocalizationSound, EDITOR, Localization, _crd;

  function _reportPossibleCrUseOfLocalizationSprite(extras) {
    _reporterNs.report("LocalizationSprite", "./LocalizationSprite", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalizationLabel(extras) {
    _reporterNs.report("LocalizationLabel", "./LocalizationLabel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../Utils/Utility", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalizationButton(extras) {
    _reporterNs.report("LocalizationButton", "./LocalizationButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalizationEvent(extras) {
    _reporterNs.report("LocalizationEvent", "./LocalizationEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRelayLang(extras) {
    _reporterNs.report("SlotRelayLang", "../Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalizationPrefab(extras) {
    _reporterNs.report("LocalizationPrefab", "./LocalizationPrefab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalizationSpine(extras) {
    _reporterNs.report("LocalizationSpine", "./LocalizationSpine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalizationSound(extras) {
    _reporterNs.report("LocalizationSound", "./LocalizationSound", _context.meta, extras);
  }

  _export("Localization", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
      director = _cc.director;
      JsonAsset = _cc.JsonAsset;
      Label = _cc.Label;
      resources = _cc.resources;
      RichText = _cc.RichText;
    }, function (_unresolved_2) {
      LocalizationSprite = _unresolved_2.LocalizationSprite;
    }, function (_unresolved_3) {
      LocalizationLabel = _unresolved_3.LocalizationLabel;
    }, function (_unresolved_4) {
      Utility = _unresolved_4.Utility;
    }, function (_unresolved_5) {
      LocalizationButton = _unresolved_5.LocalizationButton;
    }, function (_unresolved_6) {
      LocalizationEvent = _unresolved_6.LocalizationEvent;
    }, function (_unresolved_7) {
      SlotRelayLang = _unresolved_7.SlotRelayLang;
    }, function (_unresolved_8) {
      LocalizationPrefab = _unresolved_8.LocalizationPrefab;
    }, function (_unresolved_9) {
      LocalizationSpine = _unresolved_9.LocalizationSpine;
    }, function (_unresolved_10) {
      LocalizationSound = _unresolved_10.LocalizationSound;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "248807vic1FAISldL3RhU62", "Localization", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'director', 'JsonAsset', 'Label', 'resources', 'RichText', 'Scene', 'TextAsset']);

      _export("Localization", Localization = class Localization {
        constructor() {
          this.languages = {};
          this.langKey = (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
            error: Error()
          }), SlotRelayLang) : SlotRelayLang).tw;
          this.isInit = false;
        }

        /**
         * 獲取實例
         * @returns Localization
         */
        static get instance() {
          if (this._instance === null) {
            this._instance = new Localization();
          }

          return this._instance;
        }

        /**
         * 獲取當前語系代碼
         * @returns 語系代碼
         */
        get currentLangKey() {
          return this.langKey;
        }
        /**
         * 初始化
         * @param gameID 遊戲編號
         * @param langKey 語系代碼
         * @returns Promise
         */


        init(gameID, langKey) {
          return new Promise((resolve, reject) => {
            if (this.isInit) {
              resolve();
              return;
            }

            var timestamp = new Date().getTime();
            var urlSystem = "https://" + (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).getHost() + "/h5_game/cocos/Localization/json/Localization_System.json?timestamp=" + timestamp;

            if (EDITOR) {
              urlSystem = urlSystem.replace('https://', 'http://');
            }

            this.setLanguage(langKey);
            Promise.all([this.getLocalizationData(urlSystem), this.getGameLocalizationData(gameID)]) //GameID Example:Game1001;
            .then(jsonArrays => {
              for (var json of jsonArrays) {
                if (json) {
                  var jsonData = json;

                  for (var _langKey in jsonData) {
                    if (_langKey) {
                      if (!this.languages[_langKey]) {
                        this.languages[_langKey] = {};
                      }

                      for (var dataKey in jsonData[_langKey]) {
                        if (dataKey) {
                          this.languages[_langKey][dataKey] = jsonData[_langKey][dataKey];
                        }
                      }
                    }
                  }
                }
              }

              this.updateAllSpriteAndLabel(this.langKey);
              this.isInit = true;
              resolve();
            }).catch(error => {
              console.error('Localization init error:', error);
              resolve();
            });
          }); // console.log("Localization init");
        }
        /**
         * 設定語系
         * @param langStr 語系字串
         */


        setLanguage(langStr) {
          var lang = SlotRelayLang[langStr];

          if (lang === undefined) {
            console.error('無效語系字串 langStr:', langStr);
            lang = (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
              error: Error()
            }), SlotRelayLang) : SlotRelayLang).tw;
          }

          this.langKey = SlotRelayLang[langStr];
          ;
        }
        /**
         * 取得語系代碼
         * @returns 語系代碼
         */


        getLanguage() {
          return this.langKey;
        }
        /**
         * 取得語系字串
         * @returns 語系字串
         */


        getLanguageString() {
          if ((_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
            error: Error()
          }), SlotRelayLang) : SlotRelayLang)[this.langKey] === undefined) {
            return (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
              error: Error()
            }), SlotRelayLang) : SlotRelayLang)[(_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
              error: Error()
            }), SlotRelayLang) : SlotRelayLang).en];
          }

          return (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
            error: Error()
          }), SlotRelayLang) : SlotRelayLang)[this.langKey];
        }
        /**
         * 取得 key 值
         * @param key key的資料路徑 ex: GenericUI.HISTORY.BET
         * @returns 對應 key 的語系資料
         */


        t(key) {
          var _this$languages;

          var jsonData = (_this$languages = this.languages) == null ? void 0 : _this$languages[this.getLanguageString()];

          if (jsonData) {
            var result = this.getNestedProperty(jsonData, key);

            if (typeof result === 'string') {
              return result;
            } else {
              return key;
            }
          }

          return key;
        }
        /**
         * 取得巢狀(深層)物件屬性值
         * @param obj object 資料
         * @param path key的資料路徑 ex: GenericUI.HISTORY.BET
         * @returns 該屬性的值 ex: 押注
         */


        getNestedProperty(obj, path) {
          return path.split('.').reduce((acc, part) => acc && acc[part], obj);
        }
        /**
         * 解析本文文件
         * @param textAsset 本文文件 ex: .txt .csv .json
         */


        parseTextAsset(textAsset) {
          var jsonData = Papa.parse(textAsset.text).data;

          for (var i = 1; i < jsonData[0].length; i++) {
            var langKey = jsonData[0][i];

            if (langKey) {
              if (!this.languages[langKey]) {
                this.languages[langKey] = {};
              }

              for (var j = 1; j < jsonData.length; j++) {
                if (jsonData[j][0]) {
                  this.languages[langKey][jsonData[j][0]] = jsonData[j][i];
                }
              }
            }
          }
        }
        /**
         * 更新所有語系文字
         */


        updateAllLabel() {
          var localizationLabels = director.getScene().getComponentsInChildren(_crd && LocalizationLabel === void 0 ? (_reportPossibleCrUseOfLocalizationLabel({
            error: Error()
          }), LocalizationLabel) : LocalizationLabel);

          for (var item of localizationLabels) {
            var t = this.t.bind(this);
            item.updateLabel(t);
          }
        }
        /**
         * 更新所有語系圖片及文字
         * @param lang 語系代碼
         * @returns Promise[]
         */


        updateAllSpriteAndLabel(lang) {
          var scene = director.getScene();
          var localizationLabels = scene.getComponentsInChildren(_crd && LocalizationLabel === void 0 ? (_reportPossibleCrUseOfLocalizationLabel({
            error: Error()
          }), LocalizationLabel) : LocalizationLabel);
          var localizationEvents = scene.getComponentsInChildren(_crd && LocalizationEvent === void 0 ? (_reportPossibleCrUseOfLocalizationEvent({
            error: Error()
          }), LocalizationEvent) : LocalizationEvent);

          for (var item of localizationLabels) {
            var t = this.t.bind(this);
            item.updateLabel(t);
          }

          for (var _item of localizationEvents) {
            _item.process == null || _item.process(lang);
          }

          this.checkFont(lang);
          return Promise.all([this.updateSpritesImage(lang), this.updateButtonImage(lang), this.updatePrefabLocalization(lang), this.updateSpineImage(lang), this.updateSound(lang)]);
        }
        /**
         * 檢查使用字型
         * @param lang 語系
         */


        checkFont(lang) {
          var allLabels = director.getScene().getComponentsInChildren(Label);
          var allRichTexts = director.getScene().getComponentsInChildren(RichText);

          if (lang !== (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
            error: Error()
          }), SlotRelayLang) : SlotRelayLang).tw && lang !== (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
            error: Error()
          }), SlotRelayLang) : SlotRelayLang).cn) {
            for (var item of allLabels) {
              var _item$font;

              if (((_item$font = item.font) == null ? void 0 : _item$font.name) === 'NotoSansTC-Regular_Sub') {
                item.useSystemFont = true;
              }
            }
          }

          for (var _item2 of allRichTexts) {
            var _item2$font;

            if (((_item2$font = _item2.font) == null ? void 0 : _item2$font.name) === 'NotoSansTC-Regular_Sub') {
              if (lang !== (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                error: Error()
              }), SlotRelayLang) : SlotRelayLang).tw && lang !== (_crd && SlotRelayLang === void 0 ? (_reportPossibleCrUseOfSlotRelayLang({
                error: Error()
              }), SlotRelayLang) : SlotRelayLang).cn) {
                _item2.useSystemFont = true;
              }
            }
          }
        }
        /**
         * 更新 Sprite 圖片
         * @param lang 語系
         * @returns Promise[]
         */


        updateSpritesImage(lang) {
          var scene = director.getScene();
          var localizationSprites = scene.getComponentsInChildren(_crd && LocalizationSprite === void 0 ? (_reportPossibleCrUseOfLocalizationSprite({
            error: Error()
          }), LocalizationSprite) : LocalizationSprite);
          var promises = localizationSprites.map(v => v.loadImage(lang));
          return Promise.all(promises);
        }
        /**
         * 更新按鈕圖片
         * @param lang 語系
         * @returns Promise[][]
         */


        updateButtonImage(lang) {
          var scene = director.getScene();
          var localizationButtons = scene.getComponentsInChildren(_crd && LocalizationButton === void 0 ? (_reportPossibleCrUseOfLocalizationButton({
            error: Error()
          }), LocalizationButton) : LocalizationButton);
          var promises = localizationButtons.map(v => v.loadButtonImage(lang));
          return Promise.all(promises);
        }
        /**
         * 更新 Prefab 語系
         * @param lang 語系
         * @returns Promise[]
         */


        updatePrefabLocalization(lang) {
          var scene = director.getScene();
          var localizationPrefabs = scene.getComponentsInChildren(_crd && LocalizationPrefab === void 0 ? (_reportPossibleCrUseOfLocalizationPrefab({
            error: Error()
          }), LocalizationPrefab) : LocalizationPrefab);
          var promises = localizationPrefabs.map(v => v.loadPrefab(lang));
          return Promise.all(promises);
        }
        /**
         * 更新 Spine 圖片
         * @param lang 語系
         * @returns Promise[]
         */


        updateSpineImage(lang) {
          var scene = director.getScene();
          var localizationSprites = scene.getComponentsInChildren(_crd && LocalizationSpine === void 0 ? (_reportPossibleCrUseOfLocalizationSpine({
            error: Error()
          }), LocalizationSpine) : LocalizationSpine);
          var promises = localizationSprites.map(v => v.loadAllSpine(lang));
          return Promise.all(promises);
        }
        /**
         * 更新聲音
         * @param lang 語系
         * @returns Promise
         */


        updateSound(lang) {
          var scene = director.getScene();
          var localizationSound = scene.getComponentInChildren(_crd && LocalizationSound === void 0 ? (_reportPossibleCrUseOfLocalizationSound({
            error: Error()
          }), LocalizationSound) : LocalizationSound);

          if (localizationSound) {
            return localizationSound.loadSound(lang);
          } else {
            return Promise.all([]);
          }
        }
        /**
         * 取得語系資料
         * @param url 語系資料的網址
         * @returns Promise<json資料>
         */


        getLocalizationData(url) {
          return new Promise((resolve, reject) => {
            fetch(url).then(response => {
              return response.json();
            }).then(json => {
              resolve(json);
            }).catch(error => {
              console.warn('Failed to load JSON:', error);
              resolve({});
            });
          });
        }
        /**
         * 取得本地端語系資料
         * @param gameID 遊戲編號
         * @returns Promise<json資料>
         */


        getGameLocalizationData(gameID) {
          return new Promise((resolve, reject) => {
            gameID = gameID.replace('g', 'G');
            var path = "Game/MessageLocalization/Localization_" + gameID;
            resources.load(path, JsonAsset, (err, jsonAsset) => {
              if (err) {
                console.warn('Failed to load JSON:', err);
                resolve({});
              } else {
                resolve(jsonAsset.json);
              }
            });
          });
        }
        /**
         * 取得本地端資料
         * @param jsonUrl json 資料網址
         * @returns Promise<json資料>
         */


        getLocalizationDataAsset(jsonUrl) {
          return new Promise((resolve, reject) => {
            assetManager.loadRemote(jsonUrl, (err, data) => {
              if (err) {
                console.error('Failed to load JSON:', err);
                reject(err);
                return;
              } // 將加載的 JSON 資料解析


              var jsonData = null;

              try {
                jsonData = data.json;
                resolve(jsonData); // 您可以在這裡使用解析後的資料
              } catch (error) {
                console.error('Failed to parse JSON:', error);
                reject(error);
              }
            });
          });
        }

      });

      Localization._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c0ee7b7c62cddd869ba2561e14a7551a95f78799.js.map
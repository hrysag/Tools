System.register([], function (_export, _context) {
  "use strict";

  var cc, Application;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [],
    execute: function () {
      _export("Application", Application = /*#__PURE__*/function () {
        function Application() {
          _classCallCheck(this, Application);

          this.settingsPath = 'src/settings.json';
          this.showFPS = false;
          window.game_version = '1.0.71';
        }

        _createClass(Application, [{
          key: "init",
          value: function init(engine) {
            cc = engine;
            cc.game.onPostBaseInitDelegate.add(this.onPostInitBase.bind(this));
            cc.game.onPostSubsystemInitDelegate.add(this.onPostSystemInit.bind(this));
          }
        }, {
          key: "onPostInitBase",
          value: function onPostInitBase() {
            var useLocalUtil = this.urlGet('localUtil');

            if (useLocalUtil !== 'true') {
              var importUtil = document.createElement('script');
              importUtil.async = false;
              importUtil.defer = false;
              importUtil.src = "../fish-util/fish-util.min.js?".concat(new Date().getTime());
              document.head.append(importUtil);
            }
            /** cid 參考
                1:bbgp
                2:bbin雲
                3:bbin地
                11:demo
                4:go+
                5:demogo
            */


            var data = this.urlGet('d');

            if (data) {
              var jsonData = JSON.parse(decodeURIComponent(encodeURIComponent(window.atob(data))));

              if (jsonData['cid'] != '4') {
                document.title = 'Welcome';
                var favIcon = document.querySelector("link[rel~='icon']");

                if (!favIcon) {
                  favIcon = document.createElement('link');
                  favIcon.rel = 'icon';
                  document.getElementsByTagName('head')[0].appendChild(favIcon);
                }

                favIcon.href = 'public/images/faviconBB.png';
              }
            }
          }
        }, {
          key: "onPostSystemInit",
          value: function onPostSystemInit() {// 实现一些自定义的逻辑
          }
        }, {
          key: "start",
          value: function start() {
            return cc.game.init({
              // 以需要的参数运行引擎
              debugMode: false ? cc.DebugMode.INFO : cc.DebugMode.ERROR,
              settingsPath: this.settingsPath,
              // 传入 settings.json 路径
              overrideSettings: {
                // 对配置文件中的部分数据进行覆盖，第二部分会详细介绍这个字段
                // assets: {
                //      preloadBundles: [{ bundle: 'main', version: 'xxx' }],
                // }
                profiling: {
                  showFPS: this.showFPS
                }
              }
            }).then(function () {
              // 2024/03/12 edited by Alan
              // PC dpr = 1 (因為enableRetina不能用了)
              if (cc.sys.platform === cc.sys.Platform.DESKTOP_BROWSER) {
                window.devicePixelRatio = 1;
              }

              cc.game.run();
            });
          }
        }, {
          key: "urlGet",
          value: function urlGet(n) {
            if (n = new RegExp('[?&]' + encodeURIComponent(n) + '=([^&]*)').exec(location.search)) return decodeURIComponent(n[1]);
          }
        }, {
          key: "getCookie",
          value: function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');

            for (var i = 0; i < ca.length; i++) {
              var c = ca[i];

              while (c.charAt(0) == ' ') {
                c = c.substring(1);
              }

              if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
              }
            }

            return sessionStorage.getItem(cname);
          }
        }]);

        return Application;
      }());
    }
  };
});
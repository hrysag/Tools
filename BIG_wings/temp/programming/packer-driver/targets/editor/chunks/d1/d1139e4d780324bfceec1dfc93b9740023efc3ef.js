System.register(["__unresolved_0", "cc", "ua-parser-js", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UAParser, URLParameter, UBBrowserChecker, DeviceClass, _crd, Device;

  function uaSlashObject(ua) {
    const keyValuePairs = ua == null ? void 0 : ua.split(' ').map(pair => pair.split('/'));
    const userAgentObject = {};

    for (const [key, value] of keyValuePairs) {
      userAgentObject[key] = value;
    }

    return userAgentObject;
  }

  function _reportPossibleCrUseOfUAParser(extras) {
    _reporterNs.report("UAParser", "ua-parser-js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfURLParameter(extras) {
    _reporterNs.report("URLParameter", "../url/URLParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUBBrowserChecker(extras) {
    _reporterNs.report("UBBrowserChecker", "./UBBrowserChecker", _context.meta, extras);
  }

  _export("DeviceClass", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_uaParserJs) {
      UAParser = _uaParserJs.default;
    }, function (_unresolved_2) {
      URLParameter = _unresolved_2.URLParameter;
    }, function (_unresolved_3) {
      UBBrowserChecker = _unresolved_3.UBBrowserChecker;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3bcd7YPpjFJkIIOFcfO4a+L", "Device", undefined);

      _export("DeviceClass", DeviceClass = class DeviceClass {
        constructor(ua = window.navigator.userAgent) {
          this.ua_parser = void 0;
          this.ubBrowser = void 0;
          this.uaSlashObject = void 0;
          this.ua = ua;
        }

        set ua(ua) {
          this.ua_parser = new (_crd && UAParser === void 0 ? (_reportPossibleCrUseOfUAParser({
            error: Error()
          }), UAParser) : UAParser)(ua).getResult();
          this.ubBrowser = new (_crd && UBBrowserChecker === void 0 ? (_reportPossibleCrUseOfUBBrowserChecker({
            error: Error()
          }), UBBrowserChecker) : UBBrowserChecker)(ua);
          this.uaSlashObject = uaSlashObject(ua);
        }

        get mobile() {
          return this.ua_parser.device.type != undefined;
        }

        get tablet() {
          return this.ua_parser.device.type === 'tablet';
        }

        get iOS() {
          return this.ua_parser.os.name === 'iOS';
        }

        get android() {
          return this.ua_parser.os.name === 'Android';
        }

        get windows() {
          return this.ua_parser.os.name === 'Windows';
        }

        get mac() {
          return this.ua_parser.os.name === 'Mac OS';
        }

        get linux() {
          return this.ua_parser.os.name === 'Linux';
        }

        get windowsPhone() {
          return this.ua_parser.os.name === 'Windows Phone';
        }

        get windowsTablet() {
          return this.ua_parser.os.name === 'Windows Tablet';
        }

        get deviceType() {
          if (this.iOS) {
            return 'iOS';
          }

          if (this.android) {
            return 'Android';
          }

          if (this.windowsPhone) {
            return 'WindowsPhone';
          }

          if (this.windowsTablet) {
            return 'WindowsTablet';
          }

          return 'Desktop';
        } // -----broswer


        get opera() {
          return this.ua_parser.browser.name === 'Opera';
        }

        get firefox() {
          return this.ua_parser.browser.name === 'Firefox';
        }

        get safari() {
          return this.ua_parser.browser.name === 'Safari';
        }

        get ie() {
          return this.ua_parser.browser.name === 'IE';
        }

        get edge() {
          return this.ua_parser.browser.name === 'Edge';
        }

        get chrome() {
          return this.ua_parser.browser.name === 'Chrome';
        } //-----------------------  公司內部使用  -----------------------


        get pwa() {
          if ('standalone' in window.navigator && window.navigator['standalone']) {
            return true;
          }

          if (window.matchMedia('(display-mode: standalone)').matches) {
            return true;
          }

          return false;
        }

        get aio() {
          return (_crd && URLParameter === void 0 ? (_reportPossibleCrUseOfURLParameter({
            error: Error()
          }), URLParameter) : URLParameter).platform == 'aio';
        }

        get screenResolution() {
          return `${window.screen.width}x${window.screen.height}`;
        }

        get windowResolution() {
          return `${window.innerWidth}x${window.innerHeight}`;
        }

        get gpuInfo() {
          var _document$createEleme;

          let gl = (_document$createEleme = document.createElement('canvas')) == null ? void 0 : _document$createEleme.getContext('webgl');
          let debugInfo = gl == null ? void 0 : gl.getExtension('WEBGL_debug_renderer_info');

          if (debugInfo) {
            const renderer = gl == null ? void 0 : gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            return renderer || "";
          }

          return "";
        }

        get encodeIP() {
          return this.uaSlashObject['HTTP_BB_FORWARDED'] || "";
        }

        get webview() {
          if (this.iOS) {
            return /safari/.test(this.ua_parser.ua);
          } else if (this.android) {
            return /wv/.test(this.ua_parser.ua);
          }

          return false;
        } //--------------------------------------------------------------


        get wvString() {
          if (this.iOS || this.android) {
            const keywordIS = this.webview ? 'is' : 'isnot';
            const keywordDevice = this.iOS ? 'iOS' : 'Android';
            return `${keywordIS}_${keywordDevice}Webview`;
          }

          return 'false';
        }

        get ubInfo() {
          let ub = '';

          if (this.ubBrowser.UniverseBrowser) {
            const keyword = ['Chrome', 'UB', 'CustomBrowser'];

            for (let key in this.uaSlashObject) {
              if (keyword.includes(key)) {
                const info = `${key}/${this.uaSlashObject[key]}`;

                if (!ub) {
                  ub = info;
                } else {
                  ub = `${ub} ${info}`;
                }
              }
            }
          }

          return ub;
        }

        get newaio() {
          // 檢查 User - Agent 裡是否有 game _ platform 參數，有即為 AIO 開啟
          // User - Agent 範例：
          // Mozilla / 5.0 (iPhone ; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit / 537.36 ( KHTML , like Gecki ) game_portal / 3 game_platform / 2
          // Portal = game_portal
          // 3 (AIO 共用版)
          // 4 (AIO 客製化)
          // Platform = game_platform
          // 2 (iOS 手機)
          // 4 (Android 手機)
          let newaio = '';

          if (this.aio) {
            const game_portal = this.uaSlashObject['game_portal'] || "";
            const game_platform = this.uaSlashObject['game_platform'] || "";
            newaio = `${game_portal} ${game_platform}`;
          }

          return newaio;
        }

        deviceInfo() {
          var _ref;

          let o = {
            rd: 'fx',
            ua: this.ua_parser.ua,
            os: `${this.ua_parser.os.name} ${this.ua_parser.os.version}`,
            srs: this.screenResolution,
            wrs: this.windowResolution,
            dpr: devicePixelRatio,
            pf: (_ref = `${this.ua_parser.browser.name} ${this.ua_parser.browser.version}`) == null ? void 0 : _ref.replace(/\"/g, ''),
            pl: 'H5',
            wv: this.wvString,
            aio: this.aio,
            vga: this.gpuInfo || "",
            tablet: this.ua_parser.device.type === 'tablet',
            cts: Date.now(),
            mua: (_crd && URLParameter === void 0 ? (_reportPossibleCrUseOfURLParameter({
              error: Error()
            }), URLParameter) : URLParameter).mua,
            dtp: (_crd && URLParameter === void 0 ? (_reportPossibleCrUseOfURLParameter({
              error: Error()
            }), URLParameter) : URLParameter).dtp,
            newaio: this.newaio,
            ub: this.ubInfo,
            pwa: this.pwa
          };
          if (this.encodeIP) o['encodeIP'] = this.encodeIP;
          return o;
        }

      });

      _export("Device", Device = new DeviceClass());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d1139e4d780324bfceec1dfc93b9740023efc3ef.js.map
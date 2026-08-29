System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CDNImpl, urlJoin, URLParameterClass, _crd, URLParameter;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfCDNImpl(extras) {
    _reporterNs.report("CDNImpl", "./CDN", _context.meta, extras);
  }

  function _reportPossibleCrUseOfurlJoin(extras) {
    _reporterNs.report("urlJoin", "./URLJoin", _context.meta, extras);
  }

  _export("URLParameterClass", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      CDNImpl = _unresolved_2.CDNImpl;
    }, function (_unresolved_3) {
      urlJoin = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cfab39vqPFLcZOREEeGxTGa", "URLParameter", undefined);

      _export("URLParameterClass", URLParameterClass = class URLParameterClass {
        get local() {
          return this.url.host.includes('localhost') || this.url.host.includes('127.0.0.1') || this.url.host.includes('192.168.');
        }

        get sid() {
          return this.url.searchParams.get('sid');
        }

        get gameType() {
          return this.url.searchParams.get('GameType');
        }
        /** 網址上的語系 */


        get lang() {
          return this.url.searchParams.get('lang');
        }

        get platform() {
          return this.url.searchParams.get('platform');
        }

        get mua() {
          return this.url.searchParams.get('mua');
        }

        get dtp() {
          return this.url.searchParams.get('dtp');
        }

        get demo() {
          return this.url.searchParams.get('demo');
        }

        get special() {
          return this.url.searchParams.get('special');
        }

        get iplLang() {
          return this.mapingIPLLang();
        }

        get rdaLang() {
          return this.mapingRdaLang();
        }

        get rootPath() {
          return this._rootPath;
        }

        get serverHost() {
          return this._serverHost;
        }

        get betHistoryUrl() {
          var url = new URL(this.url.origin);
          url.pathname = '/ipl/portal.php/game/betrecord_search/kind5';
          url.searchParams.set('GameCode', '1');
          url.searchParams.set('GameType', this.gameType);
          ;
          url.searchParams.set('sid', this.sid);
          url.searchParams.set('lang', this.lang);
          url.searchParams.set('rnd', Date.now().toString());
          return url.href;
        }

        get ruleUrl() {
          var url = new URL(this.url.origin);
          url.pathname = '/ipl/app/help.php';
          url.searchParams.set('GameType', this.gameType);
          ;
          url.searchParams.set('lang', this.lang);
          url.searchParams.set('rnd', Date.now().toString());
          return url.href;
        }

        get helpUrl() {
          var url = new URL(location.origin);
          url.pathname = '/ipl/portal.php/game/httpredirect';
          url.searchParams.set('type', 'casinoruleinfo');
          ;
          url.searchParams.set('gametype', this.gameType);
          url.searchParams.set('lang', this.lang);
          return url.href;
        }

        get loadingPicUrl() {
          return "";
        }

        get shareFileUrl() {
          if (this.rootPath.includes('casinoH5')) {
            return this.rootPath.split('casinoH5/')[0] + "casinoH5/ShareFile/";
          } else {
            return '/ipl/app/flash/pig/game/casinoH5/ShareFile/';
          }
        }

        GET(key) {
          return this.url.searchParams.get(key);
        }

        getResourceURL(path) {
          return (_crd && urlJoin === void 0 ? (_reportPossibleCrUseOfurlJoin({
            error: Error()
          }), urlJoin) : urlJoin)(this.rootPath, path);
        }

        set href(href) {
          this._href = href;
          this.init();
        }

        constructor(href) {
          if (href === void 0) {
            href = window.location.href;
          }

          this.url = void 0;
          this._cdn = void 0;
          this._rootPath = void 0;
          this._serverHost = void 0;
          this._href = window.location.href;
          this._href = href;
          this.init(false);
        }

        gotoBankerPage() {
          if (typeof parent['DepositUrl'] === "function") {
            parent['DepositUrl']({
              sid: this.sid,
              lang: this.rdaLang,
              vnd: Date.now().toString()
            });
          }
        }

        init(fetch) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (fetch === void 0) {
              fetch = true;
            }

            _this.url = new URL(_this._href);
            _this._cdn = new (_crd && CDNImpl === void 0 ? (_reportPossibleCrUseOfCDNImpl({
              error: Error()
            }), CDNImpl) : CDNImpl)(_this._href);
            _this._rootPath = _this._cdn.originUrl;
            _this._serverHost = _this.url.host;
            if (!fetch) return;
            _this._rootPath = yield _this._cdn.getRootPath(); // console.log('[URLParameter] root path :', this.rootPath);

            _this._serverHost = _this.local ? _this.url.host : yield _this.getServerHost(); // console.log('[URLParameter] server host :', this.serverHost);
          })();
        }

        getServerHost(origin) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (origin === void 0) {
              origin = _this2.url.origin;
            }

            var url = new URL(origin);
            url.pathname = '/ipl/app/flash/pig/game/casinoH5/GameAPI/FxDataApi.php';
            url.searchParams.set('gtype', _this2.gameType);
            url.searchParams.set('dm', location.host);
            return yield fetch(url.href).then(res => res.json()).then(res => res.link).catch(err => location.host);
          })();
        }

        mapingIPLLang() {
          var str = this.lang;
          if (str == 'th' || str == 'id' || str == 'es') return str;else if (str == 'vi' || str == 'vn') return 'vi';else if (str == 'zh-tw' || str == 'tw') return 'tw';else if (str == 'zh-cn' || str == 'ug' || str == 'cn') return 'cn';else if (str == 'ja' || str == 'jp') return 'ja';else if (str == 'ko' || str == 'kr') return 'kr';else return 'us';
        }

        mapingRdaLang() {
          var str = this.lang;
          if (str == 'vi' || str == 'th' || str == 'id' || str == 'ja' || str == 'es') return str;else if (str == 'zh-tw' || str == 'tw') return 'zh-tw';else if (str == 'zh-cn' || str == 'ug' || str == 'cn') return 'zh-cn';else if (str == 'kr' || str == 'ko') return 'ko';else return 'en';
        }

      });

      _export("URLParameter", URLParameter = new URLParameterClass());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fdec316927bba62dfacdd4cbc39df5763ab5c84d.js.map
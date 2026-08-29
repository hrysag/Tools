System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CDNImpl, urlJoin, URLParameterClass, _crd, URLParameter;

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
          const url = new URL(this.url.origin);
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
          const url = new URL(this.url.origin);
          url.pathname = '/ipl/app/help.php';
          url.searchParams.set('GameType', this.gameType);
          ;
          url.searchParams.set('lang', this.lang);
          url.searchParams.set('rnd', Date.now().toString());
          return url.href;
        }

        get helpUrl() {
          const url = new URL(location.origin);
          url.pathname = '/ipl/portal.php/game/httpredirect';
          url.searchParams.set('type', 'casinoruleinfo');
          ;
          url.searchParams.set('gametype', this.gameType);
          url.searchParams.set('lang', this.lang);
          return url.href;
        }

        get loadingPicUrl() {
          return ``;
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

        constructor(href = window.location.href) {
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

        async init(fetch = true) {
          this.url = new URL(this._href);
          this._cdn = new (_crd && CDNImpl === void 0 ? (_reportPossibleCrUseOfCDNImpl({
            error: Error()
          }), CDNImpl) : CDNImpl)(this._href);
          this._rootPath = this._cdn.originUrl;
          this._serverHost = this.url.host;
          if (!fetch) return;
          this._rootPath = await this._cdn.getRootPath(); // console.log('[URLParameter] root path :', this.rootPath);

          this._serverHost = this.local ? this.url.host : await this.getServerHost(); // console.log('[URLParameter] server host :', this.serverHost);
        }

        async getServerHost(origin = this.url.origin) {
          const url = new URL(origin);
          url.pathname = '/ipl/app/flash/pig/game/casinoH5/GameAPI/FxDataApi.php';
          url.searchParams.set('gtype', this.gameType);
          url.searchParams.set('dm', location.host);
          return await fetch(url.href).then(res => res.json()).then(res => res.link).catch(err => location.host);
        }

        mapingIPLLang() {
          const str = this.lang;
          if (str == 'th' || str == 'id' || str == 'es') return str;else if (str == 'vi' || str == 'vn') return 'vi';else if (str == 'zh-tw' || str == 'tw') return 'tw';else if (str == 'zh-cn' || str == 'ug' || str == 'cn') return 'cn';else if (str == 'ja' || str == 'jp') return 'ja';else if (str == 'ko' || str == 'kr') return 'kr';else return 'us';
        }

        mapingRdaLang() {
          const str = this.lang;
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
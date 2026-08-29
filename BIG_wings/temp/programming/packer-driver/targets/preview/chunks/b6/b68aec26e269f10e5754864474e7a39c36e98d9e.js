System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, urlJoin, CDNImpl, _crd;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfurlJoin(extras) {
    _reporterNs.report("urlJoin", "./URLJoin", _context.meta, extras);
  }

  _export("CDNImpl", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      urlJoin = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "44df8towsBKwpPzzViq9DCg", "CDN", undefined); //預設在Index.html中設定 var FxAdr = <?=$FX_ADR?>


      //https://7n2nhbbapk.com/ipl/portal.php/game/casino_iframe?Client=2&GameType=5171&Lang=cn&ExitOption=0&Param=&sid=bg8ec13a4715aa7a6977d948bc61632844e9026177&domain=L01mMDV4enk4OFJCZ2srMmRIazAvWUhIWEUyK0VNb2ZxZUIybFgyYlI0dz06Oh2cqmgzbXFCt39S%2F%2Fh%2Fi2w%3D&token=21cfde84b978eceb9b0ac9fafbb9ac0df5cdff87
      //https://7n2nhbbapk.com//ipl/app/flash/pig/game/casinoH5/CandyPartyFast/index.php?Client=2&GameType=5171&lang=cn&VerID=47f291f9508d03ecffaf178c525e57a4&ExitOption=0&Param=&fxn=1&sid=bg8ec13a4715aa7a6977d948bc61632844e9026177&domain=UmNvcUFLeGRlMzF4V2ZmdFRQVjlyQnRTOUt6em9xT0JCbWpwcjZuczAvTT06Ouynp4xDOdNq9auRWmN1%2BiQ%3D&token=21cfde84b978eceb9b0ac9fafbb9ac0df5cdff87&ni=1&stress=0&pagr=0&ssdd=timestamp&pt=1691541446.4668
      //header     [HTTP_X_CDN_FX] => fx2.cfvn66.com
      //CDN FxAdr 'fx2.cfvn66.com/pig/game/'
      //Normal '/pig/game/' || '<?=$FX_ADR?>'
      //php 在載入的時候會從header 中讀取cdn的並將<?=$FX_ADR?>替換成正確的值 會是該站的 host
      _export("CDNImpl", CDNImpl = class CDNImpl {
        /** get CDN host */
        get CDNHostConfig() {
          return this.fxadr;
        }
        /** fxadr 設定的host 是不是 CDN */


        get isCDN() {
          return this.CDNHostConfig && this.CDNHostConfig != '/pig/game/' && this.CDNHostConfig != '<?=$FX_ADR?>';
        }
        /** 取得非 cdn 的遊戲 root path */


        get originUrl() {
          return this.url.href.split('index')[0];
        }
        /** cdn 組起來的 path */


        get cdnUrl() {
          if (!this.isCDN) return this.originUrl; //cdn 機器直接掛載到game資料夾下
          //https://m97f4kcb.com//ipl/app/flash/pig/game/casinoH5/CandyParty/index.php 原始路徑
          //https://cdnHost/game/casinoH5/CandyParty/index.php  //cdn路徑

          var host = this.isCDN ? this.CDNHostConfig : this.url.host;
          var path = this.url.href.split('index')[0].split("game/")[1];
          return (_crd && urlJoin === void 0 ? (_reportPossibleCrUseOfurlJoin({
            error: Error()
          }), urlJoin) : urlJoin)(this.url.protocol + "//" + host, path);
        }
        /** 取得遊戲的root path , 若CDN無法使用則 */


        getRootPath() {
          var _this = this;

          return _asyncToGenerator(function* () {
            return _this.isCDN ? yield _this.checkCDN() : _this.originUrl;
          })();
        }

        checkCDN() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            return (yield _this2.ping(_this2.cdnUrl + "?t=" + Date.now())) ? _this2.cdnUrl : _this2.originUrl;
          })();
        }

        ping(url, options, timeout) {
          return _asyncToGenerator(function* () {
            if (timeout === void 0) {
              timeout = 3000;
            }

            var controller = new AbortController();
            setTimeout(() => controller.abort(), timeout);
            return yield fetch(url, _extends({}, options, {
              signal: controller.signal
            })).then(res => {
              return res == null ? void 0 : res.ok;
            }).catch(err => false);
          })();
        }

        constructor(href, fxAdr) {
          if (href === void 0) {
            href = window.location.href;
          }

          if (fxAdr === void 0) {
            fxAdr = window['FxAdr'];
          }

          this.url = void 0;
          this.fxadr = void 0;
          this.url = new URL(href);
          this.fxadr = fxAdr;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b68aec26e269f10e5754864474e7a39c36e98d9e.js.map
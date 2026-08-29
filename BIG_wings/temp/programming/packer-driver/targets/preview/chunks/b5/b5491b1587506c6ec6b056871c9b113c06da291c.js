System.register(["__unresolved_0", "cc", "vh-check", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, vhCheck, urlJoin, NowOrientation, OrientationType, URLParameter, Device, FullScreenClass, _crd, FullScreenPage;

  function _reportPossibleCrUseOfvhCheck(extras) {
    _reporterNs.report("vhCheck", "vh-check", _context.meta, extras);
  }

  function _reportPossibleCrUseOfurlJoin(extras) {
    _reporterNs.report("urlJoin", "../url/URLJoin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNowOrientation(extras) {
    _reporterNs.report("NowOrientation", "./Orientation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientationType(extras) {
    _reporterNs.report("OrientationType", "./Orientation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfURLParameter(extras) {
    _reporterNs.report("URLParameter", "../url/URLParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDevice(extras) {
    _reporterNs.report("Device", "./Device", _context.meta, extras);
  }

  _export("FullScreenClass", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_vhCheck) {
      vhCheck = _vhCheck.default;
    }, function (_unresolved_2) {
      urlJoin = _unresolved_2.default;
    }, function (_unresolved_3) {
      NowOrientation = _unresolved_3.NowOrientation;
      OrientationType = _unresolved_3.OrientationType;
    }, function (_unresolved_4) {
      URLParameter = _unresolved_4.URLParameter;
    }, function (_unresolved_5) {
      Device = _unresolved_5.Device;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "73291oIk+lCRLiOml2Siuzh", "FullScreen", undefined); //用vh-check來檢查是否為全螢幕


      _export("FullScreenClass", FullScreenClass = class FullScreenClass {
        constructor() {
          this.gameOrientation = void 0;
          this.extraDiv = void 0;
          this.bgDiv = void 0;
          this.closeBtn = void 0;
          this._imgUrl = '';
          this._closeUrl = '';
          this.offsetMax = 0;

          this.check = () => {
            if (this.isOrientationToShow() == false) {
              this.hide();
            } else {
              if (this.isFull()) {
                this.hide();
              } else {
                this.show();
              }
            }
          };
        }

        set imageURL(url) {
          if (this._imgUrl === url) return; //

          this._imgUrl = url;

          if (this.bgDiv) {
            this.bgDiv.style.backgroundImage = "url(" + url + ")";
          } else {
            throw new Error('FullScreenPage not init.please call FullScreen.setType() first');
          }
        }

        set closeURL(url) {
          if (this._closeUrl === url) return;
          this._closeUrl = url;

          if (this.closeBtn) {
            this.closeBtn.style.backgroundImage = "url(" + url + ")";
          } else {
            throw new Error('FullScreenPage not init.please call FullScreen.setType() first');
          }
        }

        /** 
         * 設定要顯示全螢幕上滑的方向 , 可指定單一方向 ,若兩個方向都要顯示則用陣列傳入
         */
        setType(orientation) {
          if ((_crd && Device === void 0 ? (_reportPossibleCrUseOfDevice({
            error: Error()
          }), Device) : Device).mobile) {
            this.gameOrientation = orientation;
            this.init();
          }
        }

        isFull() {
          var result = (_crd && vhCheck === void 0 ? (_reportPossibleCrUseOfvhCheck({
            error: Error()
          }), vhCheck) : vhCheck)({
            cssVarName: 'vh-offset',
            force: false,
            bind: true,
            redefineVh: false,
            updateOnTouch: false
          });
          this.offsetMax = Math.max(this.offsetMax, result.offset);
          console.log('vhCheck', window.scrollY, result);
          return result.value < 5;
        }

        init() {
          ////////////////////////////////////////////////////////////////////////////////
          this.extraDiv = parent.document.createElement('div');
          this.extraDiv.id = 'extra_div';
          Object.assign(this.extraDiv.style, {
            backgroundColor: 'rgba(1, 1, 1, 0.7)',
            backgroundRepeat: "no-repeat",
            width: '100%',
            height: 'calc(300%)',
            position: 'absolute',
            top: '0px',
            left: '0px',
            visibility: 'visible',
            overflow: 'scroll',
            backgroundSize: 'contain',
            zIndex: '1'
          });
          parent.document.body.appendChild(this.extraDiv); ////////////////////////////////////////////////////////////////////////////////

          this.bgDiv = parent.document.createElement('div');
          this.imageURL = (_crd && urlJoin === void 0 ? (_reportPossibleCrUseOfurlJoin({
            error: Error()
          }), urlJoin) : urlJoin)((_crd && URLParameter === void 0 ? (_reportPossibleCrUseOfURLParameter({
            error: Error()
          }), URLParameter) : URLParameter).shareFileUrl, 'Mobile/Picture/hint/tips.gif');
          Object.assign(this.bgDiv.style, {
            width: '100%',
            height: '100%',
            position: 'fixed',
            top: '0px',
            left: '0px',
            zIndex: '5',
            backgroundSize: 'auto 80%',
            // backgroundSize',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: "50% 90%"
          });
          parent.document.body.appendChild(this.bgDiv); ////////////////////////////////////////////////////////////////////////////////

          this.closeBtn = parent.document.createElement("a");
          this.closeBtn.id = 'fullclose_div';
          this.closeURL = (_crd && urlJoin === void 0 ? (_reportPossibleCrUseOfurlJoin({
            error: Error()
          }), urlJoin) : urlJoin)((_crd && URLParameter === void 0 ? (_reportPossibleCrUseOfURLParameter({
            error: Error()
          }), URLParameter) : URLParameter).shareFileUrl, 'Mobile/Picture/hint/btn_Close.png');
          Object.assign(this.closeBtn.style, {
            width: '15%',
            height: '15%',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            zIndex: '6',
            position: 'fixed',
            top: '15%',
            right: '0px',
            transform: "translate(-50%, -50%)",
            visibility: 'visible'
          });
          parent.document.body.appendChild(this.closeBtn);
          this.closeBtn.addEventListener('click', this.hide.bind(this)); ////////////////////////////////////////////////////////////////////////////////

          this.extraDiv.addEventListener('touchmove', this.check.bind(this));
          document.addEventListener("gesturestart", e => e.preventDefault());
          document.addEventListener("gesturechange", e => e.preventDefault());
          document.addEventListener("gestureend", e => e.preventDefault());

          var handleEvt = () => {
            //避免 reszie event 觸發後有重新resize 行為,但沒有觸發rezie event
            //故在handel event 後500ms 再次檢查
            this.check();
            setTimeout(this.check.bind(this), 500);
          };

          window.addEventListener('resize', handleEvt);
          window.addEventListener('orientationchange', handleEvt);
          window.addEventListener('scroll', handleEvt);
          this.check();
        }

        hide() {
          var _this$extraDiv;

          if (((_this$extraDiv = this.extraDiv) == null ? void 0 : _this$extraDiv.style.visibility) != 'hidden') {
            //only do change when is not hidden
            this.extraDiv.style.visibility = 'hidden';
            this.closeBtn.style.visibility = 'hidden';
            this.bgDiv.style.visibility = 'hidden';
          }
        }

        show() {
          var _this$extraDiv2;

          this.resize();

          if (((_this$extraDiv2 = this.extraDiv) == null ? void 0 : _this$extraDiv2.style.visibility) != 'visible') {
            //only do change to when is not visible
            this.extraDiv.style.visibility = 'visible';
            this.closeBtn.style.visibility = 'visible';
            this.bgDiv.style.visibility = 'visible';
            this.scrollTop(); //在顯示上滑頁面時強制將頁面滑到最上方 , 讓使用者可操作上滑
          }
        }

        isOrientationToShow() {
          var orientation = (_crd && NowOrientation === void 0 ? (_reportPossibleCrUseOfNowOrientation({
            error: Error()
          }), NowOrientation) : NowOrientation)();

          if (this.gameOrientation instanceof Array) {
            return this.gameOrientation.includes(orientation);
          } else {
            return this.gameOrientation == orientation;
          }
        }

        resize() {
          var orientation = (_crd && NowOrientation === void 0 ? (_reportPossibleCrUseOfNowOrientation({
            error: Error()
          }), NowOrientation) : NowOrientation)();

          if (orientation == (_crd && OrientationType === void 0 ? (_reportPossibleCrUseOfOrientationType({
            error: Error()
          }), OrientationType) : OrientationType).portrait) {
            this.bgDiv.style.backgroundSize = "contain";
            this.bgDiv.style.backgroundPosition = "50% 85%";
            this.closeBtn.style.top = '15%';
          } else if (orientation == (_crd && OrientationType === void 0 ? (_reportPossibleCrUseOfOrientationType({
            error: Error()
          }), OrientationType) : OrientationType).landscape) {
            this.bgDiv.style.backgroundSize = "auto 80%";
            this.bgDiv.style.backgroundPosition = "50% 90%";
            this.closeBtn.style.top = '15%';
          }
        }

        scrollTop() {
          window.scrollTo(0, 0);
          window.document.body.scrollTop = 0;
          window.scrollY = 0;
        }

      });

      _export("FullScreenPage", FullScreenPage = new FullScreenClass());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b5491b1587506c6ec6b056871c9b113c06da291c.js.map
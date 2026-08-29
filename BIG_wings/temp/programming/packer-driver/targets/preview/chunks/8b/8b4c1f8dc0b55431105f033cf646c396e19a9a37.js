System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GetCookie, URLParameter, Device, OrientationPageClass, _crd, OrientationType, DefineDirection, GameSetOrientation, OrientationPage;

  //遊戲方向定義在字典檔中 direction
  //HFLoader 會將字典檔 direction 寫進cookie
  function GetDirection() {
    var direction = (_crd && GetCookie === void 0 ? (_reportPossibleCrUseOfGetCookie({
      error: Error()
    }), GetCookie) : GetCookie)('direction');

    if (direction === null) {
      return OrientationType.landscape;
    } else {
      return parseInt(direction);
    }
  }
  /**
   * 字典檔中定義的遊戲方向
   */


  function NowOrientation() {
    if (window.innerHeight > window.innerWidth) {
      return OrientationType.portrait;
    } else {
      return OrientationType.landscape;
    }
  }

  function isGameSetOrientation() {
    return NowOrientation() === GameSetOrientation;
  }

  function _reportPossibleCrUseOfGetCookie(extras) {
    _reporterNs.report("GetCookie", "../Cookie", _context.meta, extras);
  }

  function _reportPossibleCrUseOfURLParameter(extras) {
    _reporterNs.report("URLParameter", "../url/URLParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDevice(extras) {
    _reporterNs.report("Device", "./Device", _context.meta, extras);
  }

  _export({
    NowOrientation: NowOrientation,
    isGameSetOrientation: isGameSetOrientation
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GetCookie = _unresolved_2.GetCookie;
    }, function (_unresolved_3) {
      URLParameter = _unresolved_3.URLParameter;
    }, function (_unresolved_4) {
      Device = _unresolved_4.Device;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "caec2qxjjhK4ItOSRBEuxVm", "Orientation", undefined);

      _export("OrientationType", OrientationType = /*#__PURE__*/function (OrientationType) {
        OrientationType[OrientationType["landscape"] = 0] = "landscape";
        OrientationType[OrientationType["portrait"] = 1] = "portrait";
        return OrientationType;
      }({}));

      _export("DefineDirection", DefineDirection = GetDirection());
      /**
       * 實際遊戲應該的方向
       */


      _export("GameSetOrientation", GameSetOrientation = (_crd && Device === void 0 ? (_reportPossibleCrUseOfDevice({
        error: Error()
      }), Device) : Device).mobile ? DefineDirection % 2 : DefineDirection >> 1);

      OrientationPageClass = class OrientationPageClass {
        constructor() {
          this._imgUrl = void 0;
          this.element = void 0;
          this._gameOrientation = void 0;

          this.onResize = () => {
            this.check();
            setTimeout(this.check, 450);
          };

          this.check = () => {
            var aspect_ratio = [window.screen.width, window.screen.height].sort().reduce((a, b) => {
              return b / a;
            });

            if (aspect_ratio < 1.2) {
              // 接近正方形的裝置不顯示
              this.hide();
              return;
            } else {
              if (this._gameOrientation == NowOrientation()) {
                this.hide();
              } else {
                this.show();
              }
            }
          };

          var name = GameSetOrientation === OrientationType.landscape ? 'portrait' : 'landscape';
          this._imgUrl = (_crd && URLParameter === void 0 ? (_reportPossibleCrUseOfURLParameter({
            error: Error()
          }), URLParameter) : URLParameter).shareFileUrl + "Mobile/Picture/hint/" + name + ".gif";
        }

        set imageURL(url) {
          this._imgUrl = url;

          if (this.element) {
            this.element.style.backgroundImage = "url(" + url + ")";
          }
        }

        setOrientation(orientation) {
          this._gameOrientation = orientation;
          this.init();
        }

        init() {
          if (!this.element) {
            var element = parent.document.createElement("div");
            element.id = 'OrientationPage';
            Object.assign(element.style, {
              backgroundImage: "url(" + this._imgUrl + ")",
              backgroundColor: "rgb(0,0,0)",
              backgroundSize: 'contain',
              //--2018.08.22修改 , 修為contain 原始50%在橫向顯示會切邊
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: '100%',
              height: '100%',
              zIndex: '5',
              top: '0px',
              left: '0px',
              overflow: 'visible',
              position: 'fixed'
            });
            parent.document.body.appendChild(element);
            this.element = element;
            parent.window.addEventListener('resize', this.onResize);
            parent.window.addEventListener('orientationchange', this.check);
          }

          this.check();
        }

        show() {
          var _this$element;

          if (((_this$element = this.element) == null ? void 0 : _this$element.style.visibility) != 'visible') {
            this.element.style.visibility = 'visible';
          }
        }

        hide() {
          var _this$element2;

          if (((_this$element2 = this.element) == null ? void 0 : _this$element2.style.visibility) != 'hidden') {
            this.element.style.visibility = 'hidden';
          }
        }

      };

      _export("OrientationPage", OrientationPage = new OrientationPageClass());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8b4c1f8dc0b55431105f033cf646c396e19a9a37.js.map
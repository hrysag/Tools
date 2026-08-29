System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, CocosGameSetting, _crd;

  _export("CocosGameSetting", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b6cc0Hl/q9A7ZLcdFen9dKs", "CocosGameSetting", undefined);

      /**
       * Created by EricHuang on 2023/9/28.
       */

      /**
       * 
       *  遊戲基本設定
       * @export
       * @class GameSetting
       */
      _export("CocosGameSetting", CocosGameSetting = class CocosGameSetting {
        /**
        *
        * @param urlLang
        * @returns string
        */
        static GetGameLang(urlLang) {
          switch (urlLang) {
            case 'tw':
            case 'zh-tw':
              return 'tw';

            case 'cn':
            case 'zh-cn':
            case 'ug':
              return 'cn';

            case 'vi':
            case 'vn':
              return 'vi';

            case 'th':
              return 'th';

            default:
              return 'en';
          }
        } //private static ipl:IPL.UrlParameter;

        /**
         *
         * @param gametype
         * @param width
         * @param height
         */


        constructor(gametype, width, height) {
          CocosGameSetting.Game_Width = width;
          CocosGameSetting.Game_Height = height;
          CocosGameSetting.GameType = gametype; //GameSetting.ipl  = new IPL.UrlParameter();

          CocosGameSetting.Orginal_Lang = this.getURLLang();
          CocosGameSetting.Game_Lang = CocosGameSetting.GetGameLang(CocosGameSetting.Orginal_Lang); //GameSetting.DEBUG = IPL.UrlParameter.isLocal;

          CocosGameSetting.RootPath = this.getRootPath();
          this.configLogFunction();
          this.configGameOrientation();
        }

        getRootPath() {
          var herf = window.location.href;
          return herf.split('index')[0];
        }

        getURLLang() {
          var ary = window.location.href.split("?"); // url帶參數格式

          if (ary.length == 1) return 'en';
          var splitAnd = ary[1].split("&");

          for (var i = 0; i < splitAnd.length; i++) {
            var splitAry = splitAnd[i].split("=");
            var paraName = splitAry[0].substring(0, splitAry[0].length);
            if (paraName == 'lang') return splitAry[1];
          }

          return 'en';
        }

        configLogFunction() {
          if (!CocosGameSetting.DEBUG) {// window['console']['log'] = function() {};
          }
        }

        configGameOrientation() {
          if (CocosGameSetting.Game_Width > CocosGameSetting.Game_Height) {
            CocosGameSetting.Game_Orientation = 0;
          } else {
            CocosGameSetting.Game_Orientation = 1;
          }
        }

      });

      CocosGameSetting.GameApp = void 0;
      CocosGameSetting.DEBUG = true;
      CocosGameSetting.Game_Width = void 0;
      CocosGameSetting.Game_Height = void 0;
      CocosGameSetting.Game_LeastWidth = void 0;
      CocosGameSetting.Game_Orientation = void 0;
      CocosGameSetting.GameType = void 0;
      CocosGameSetting.Game_Lang = void 0;
      CocosGameSetting.Orginal_Lang = void 0;
      CocosGameSetting.RootPath = void 0;
      CocosGameSetting.isLocal = void 0;
      CocosGameSetting.localPathData = void 0;
      //--{domain:string,gsSubDomain:string}
      CocosGameSetting.host = void 0;
      //---rd7新增參數
      CocosGameSetting.Game_Cid = void 0;
      //--company id(平台id)
      CocosGameSetting.Game_GsSubdomain = void 0;
      CocosGameSetting.Game_ExitOption = void 0;
      CocosGameSetting.Game_OriginDomain = void 0;
      CocosGameSetting.Game_RulePath = void 0;
      CocosGameSetting.Game_Sid = void 0;
      CocosGameSetting.Game_WagersPath = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=70ab7d4e8817eaaf92ea72dee08b6f2222b1c3ce.js.map
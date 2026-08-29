System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, PropType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a2290dUqhlFer5tdEm4hbd3", "Fish1ModelDefinitions", undefined);
      /**
       * Created by EricHuang on 2023/9/26.
       */

      /*
      export type addbullet=
      {
         s:number,//-座位號(0-3)
         p:number,//-最新餘額
         id:number,//-子彈id
         w:number,//-砲台型態/武器類別(不會用到)
         si:any,//-前端自定義座位表演參數物件(砲台角度,x,y,....),長度不得大於1000
         l?:number//-鎖定魚隻id(自動射擊才給)
      }
      */


      _export("PropType", PropType = /*#__PURE__*/function (PropType) {
        PropType[PropType["PROP_CALL"] = 1] = "PROP_CALL";
        PropType[PropType["PROP_FREEZE"] = 2] = "PROP_FREEZE";
        PropType[PropType["PROP_CRAZY"] = 3] = "PROP_CRAZY";
        return PropType;
      }({}));

      //--用於不同環境的廳主要開關不同的menubar
      //--有的要拿掉離開按鈕,有的要關閉開洗分按鈕

      /*
      export const EXIT_OPTION_STATUS=
      {
         type:1
      }*/
      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0750b684fcbcf2f48cf106e0a818396c9554883e.js.map
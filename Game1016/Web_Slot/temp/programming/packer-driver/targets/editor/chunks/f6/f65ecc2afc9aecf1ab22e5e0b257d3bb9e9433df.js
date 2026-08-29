System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, ANI_SYS_EVENTS;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d0363cYu1lEjafZgbgQllXC", "AniSysEvents", undefined);

      /**
       * @author: Eric
       * @description: AniSysEvents 定義
       * 看你要透過eventTarget/Notification/其他方式傳送都可以
       */
      _export("ANI_SYS_EVENTS", ANI_SYS_EVENTS = /*#__PURE__*/function (ANI_SYS_EVENTS) {
        ANI_SYS_EVENTS["CTRL_LOADED"] = "ctrl_loaded";
        ANI_SYS_EVENTS["CTRL_UNLOADED"] = "ctrl_unloaded";
        ANI_SYS_EVENTS["CTRL_PLAY_ANI_START"] = "ctrl_play_ani_start";
        ANI_SYS_EVENTS["CTRL_PLAY_ANI_END"] = "ctrl_play_ani_end";
        ANI_SYS_EVENTS["CTRL_DESTROY"] = "ctrl_destroy";
        return ANI_SYS_EVENTS;
      }({})); //--透過事件傳送出去的物件基本格式


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f65ecc2afc9aecf1ab22e5e0b257d3bb9e9433df.js.map
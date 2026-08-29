System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AniEffectInvorker, log, AnimationEffectViewBase, _crd;

  function _reportPossibleCrUseOfAniEffectInvorker(extras) {
    _reporterNs.report("AniEffectInvorker", "../../aniEffect/AniEffectInvorker", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventSendObject(extras) {
    _reporterNs.report("EventSendObject", "../../events/eventBase", _context.meta, extras);
  }

  _export("AnimationEffectViewBase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }, function (_unresolved_2) {
      AniEffectInvorker = _unresolved_2.AniEffectInvorker;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "32863Y/XitBQYiqNikjy2sO", "AnimationEffectViewBase", undefined);
      /**
       * Created by EricHuang on 2023/10/07.
       * 這邊接hit fish
       */


      __checkObsolete__(['Node']);

      __checkObsolete__(['log']);

      _export("AnimationEffectViewBase", AnimationEffectViewBase = class AnimationEffectViewBase extends (_crd && AniEffectInvorker === void 0 ? (_reportPossibleCrUseOfAniEffectInvorker({
        error: Error()
      }), AniEffectInvorker) : AniEffectInvorker) {
        set aniPositionInfo(value) {
          this._aniPositionInfo = value;
        }

        set playerIndex(value) {
          this._playerIndex = value;
          log('animationEffectViewBase___playerIndex', this._playerIndex);
        }

        set stageNode(value) {
          this._stageNode = value;
        }

        constructor() {
          super();
          //protected _aniEffect:AniEffectInvorker;

          /**
           * positions-->砲管出口的位置
           * coniEndinfo--->也是金幣的位置--
           * exchangePositions--->玩家分數顯示框資訊
           * mountPositions-->所有玩家mount資料--20230315新增
           * menuPositions-->玩家自己menu的座標資料--2021124新增
           */
          this._aniPositionInfo = void 0;
          this._playerIndex = void 0;
          //--0-3
          this._stageNode = void 0;
          this._aniPositionInfo = null;
          this._playerIndex = -1;
          this._stageNode = null;
        } //--override


        setCommands() {//---寫入要建構的class/data也在這邊先做好
        } //--override


        setDataAfterSetRoom() {//---寫入進房間後相關座位資訊
        } //--override


        resetRoomData() {//---重設進房前的座位相關資訊
        }

        aniEffectCompleteHandler(e) {
          log('check_aniEffectCompleteHandler', e);
          this.emit(e.type, e);
        }

        aniEffectEventHandler(e) {} //--aniEffect.setInitClasses();

        /*
        public setAniEffectInitClasses():void
        {
         }
         public setAniEffectDataBeforCreate():void
        {
         }*/


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f4178c55500c202cae63b536f881f65f65b9e77d.js.map
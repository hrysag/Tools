System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SpineController, FindComponent, Orientation, GameUtils, _dec, _class, _crd, ccclass, property, JPAniKey, JPKeySuffix, JpAniController;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfAniCtrlPropDef(extras) {
    _reporterNs.report("AniCtrlPropDef", "../../../MyUtils/AnimationSystem/Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "../../../MyUtils/AnimationSystem/Components/SpineController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../../../MyUtils/FindComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinType(extras) {
    _reporterNs.report("WinType", "db://assets/Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../../../../../Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../../MyUtils/GameUtils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      SpineController = _unresolved_2.SpineController;
    }, function (_unresolved_3) {
      FindComponent = _unresolved_3.FindComponent;
    }, function (_unresolved_4) {
      Orientation = _unresolved_4.Orientation;
    }, function (_unresolved_5) {
      GameUtils = _unresolved_5.GameUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8bf6a0K1r9Mp5xqXic5Ku4R", "JpAniController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      JPAniKey = ['big', 'super', 'mega', 'epic'];
      JPKeySuffix = '_win_';

      _export("JpAniController", JpAniController = (_dec = ccclass('JpAniController'), _dec(_class = class JpAniController extends Component {
        constructor() {
          var _this;

          super(...arguments);
          _this = this;
          this._spineTarget = null;
          this._aryJPKey = void 0;
          this._mapJPKeySuffix = void 0;
          this._currentJPType = void 0;
          this._screenRotationResolution = null;
          this._aryAniCtrlPropDefs = void 0;
          this._onSpineCompleteHandler = undefined;
          this.afterJPAniShowCompleteEvent = /*#__PURE__*/_asyncToGenerator(function* (value) {
            //await GameUtils.Defer(600);
            yield (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).DeferByTweenPromise(600 / 1000); //--原本單位是毫秒現在換算成秒

            var spine = _this._spineTarget.spine; //spine.setCompleteListener(null); // 清除監
            //--loop

            spine.setAnimation(value.trackIndex, value.targetName, value.loop);
          });
        }

        get screenRotationResolution() {
          return this._screenRotationResolution;
        }

        onLoad() {//super.onLoad();
        }

        init() {
          this._spineTarget = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
            error: Error()
          }), FindComponent) : FindComponent).findComponentInChildren(this.node, _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
            error: Error()
          }), SpineController) : SpineController);

          this._spineTarget.init();

          this._aryJPKey = ['epic', 'mega', 'super', 'big'];
          this._mapJPKeySuffix = new Map([['loop', '_win_loop'], ['coin', '_win_coin'], ['in', '_win_in']]); //this.changeScreenRotationResolution(Orientation.Landscape);

          this._aryAniCtrlPropDefs = [];
          this._currentJPType = 0;
          this.node.active = false;
        } //--螢幕旋轉變化


        changeScreenRotationResolution(value) {
          if (this._screenRotationResolution != value) {
            this._screenRotationResolution = value;
            this.playAniForChangeRotationResolution(value);
          }
        }

        playJPAnimation(value, rotationType) {
          this._currentJPType = value;
          this.node.active = true;
          /*
          let rotationTypeKey = '';
          if (rotationType) {
              rotationTypeKey = rotationType;
          } else {
              rotationTypeKey = (this._screenRotationResolution == Orientation.Landscape) ? 'L' : 'P';
          }*/

          var rotationKey = rotationType != null ? rotationType : this._screenRotationResolution === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape ? 'L' : 'P';
          this.showJPWin(rotationKey);
        }

        closeAndStop() {
          var spine = this._spineTarget.spine;

          if (this._onSpineCompleteHandler !== undefined) {
            //console.warn('[JpAniController] 清除未完成的 spine complete listener');
            spine.setCompleteListener(null);
            this._onSpineCompleteHandler = undefined;
          }

          for (var aniData of this._aryAniCtrlPropDefs) {
            var trackEntry = spine.getCurrent(aniData.trackIndex);

            if (trackEntry) {
              spine.clearTrack(trackEntry.trackIndex);
            }
          }

          this._aryAniCtrlPropDefs = [];

          this._spineTarget.resetData();

          this.node.active = false;
        }

        playAniForChangeRotationResolution(value) {
          if (!this.node.active || !this._spineTarget) return;
          var rotationType = value == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape ? 'L' : 'P';

          var aniData_LP = this._spineTarget.getCustomizeSpineTrackEntry(rotationType);

          var spine = this._spineTarget.spine; //--LP

          if (aniData_LP && spine) {
            spine.setAnimation(aniData_LP.trackIndex, aniData_LP.targetName, aniData_LP.loop);
          }
          /*
          if (this.node.active && this._spineTarget) {
              const rotationType = (value == Orientation.Landscape) ? 'L' : 'P';
              const aniData_LP: AniCtrlPropDef = this._spineTarget.getCustomizeSpineTrackEntry(rotationType);
              const spine = this._spineTarget.spine;
              //--LP
              if (aniData_LP && spine) {
                  spine.setAnimation(aniData_LP.trackIndex, aniData_LP.targetName, aniData_LP.loop);
              }
          }*/

        }

        getJPKey(value, key) {
          var indexKey = this._aryJPKey[value];

          var keySuffix = this._mapJPKeySuffix.get(key);

          return indexKey + keySuffix;
        }

        showJPWin(rotationType) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var spine = _this2._spineTarget.spine;

            var aniData_coin = _this2._spineTarget.getCustomizeSpineTrackEntry(_this2.getJPKey(_this2._currentJPType, 'coin'));

            var aniData_in = _this2._spineTarget.getCustomizeSpineTrackEntry(_this2.getJPKey(_this2._currentJPType, 'in'));

            var aniData_loop = _this2._spineTarget.getCustomizeSpineTrackEntry(_this2.getJPKey(_this2._currentJPType, 'loop'));

            var aniData_LP = _this2._spineTarget.getCustomizeSpineTrackEntry(rotationType);

            _this2._aryAniCtrlPropDefs = [aniData_coin, aniData_in, aniData_loop, aniData_LP]; // 播放 coin +  --LP 動畫

            spine.setAnimation(aniData_coin.trackIndex, aniData_coin.targetName, aniData_coin.loop); //--coin

            spine.setAnimation(aniData_LP.trackIndex, aniData_LP.targetName, aniData_LP.loop); //--LP(直橫)
            // in動畫結束後播放 loop

            spine.setCompleteListener(null); // 清除上次的監聽

            if (_this2._onSpineCompleteHandler) {
              spine.setCompleteListener(null);
              _this2._onSpineCompleteHandler = undefined;
            }

            _this2._onSpineCompleteHandler = trackEntry => {
              //spine.setAnimation(aniData_loop.trackIndex, aniData_loop.targetName, aniData_loop.loop);
              spine.setCompleteListener(null); // 清除上次的監聽

              _this2._onSpineCompleteHandler = undefined; // 清除監聽器引用

              _this2.afterJPAniShowCompleteEvent(aniData_loop);
            }; //spine.setCompleteListener(onInComplete);


            spine.setCompleteListener(_this2._onSpineCompleteHandler); //--in

            spine.setAnimation(aniData_in.trackIndex, aniData_in.targetName, aniData_in.loop);
            /*
            let spine = this._spineTarget.spine;
            const targetKey_coin = this.getJPKey(this._currentJPType, 'coin');
            const aniData_coin: AniCtrlPropDef = this._spineTarget.getCustomizeSpineTrackEntry(targetKey_coin);
            const targetKey_in = this.getJPKey(this._currentJPType, 'in');
            const aniData_in: AniCtrlPropDef = this._spineTarget.getCustomizeSpineTrackEntry(targetKey_in);
            const targetKey_loop = this.getJPKey(this._currentJPType, 'loop');
            const aniData_loop: AniCtrlPropDef = this._spineTarget.getCustomizeSpineTrackEntry(targetKey_loop);
            const aniData_LP: AniCtrlPropDef = this._spineTarget.getCustomizeSpineTrackEntry(rotationType);
            this._aryAniCtrlPropDefs = [aniData_coin, aniData_in, aniData_loop, aniData_LP];
            //--coin
            spine.setAnimation(aniData_coin.trackIndex, aniData_coin.targetName, aniData_coin.loop);
            //--LP
            spine.setAnimation(aniData_LP.trackIndex, aniData_LP.targetName, aniData_LP.loop);
              const spineCompleteHandler = (trackEntry) => {
                spine.setCompleteListener(null);
                //--fuck..根本沒演完就送了complete
                GameUtils.Defer(600).then(() => {
                    //--loop
                    spine.setAnimation(aniData_loop.trackIndex, aniData_loop.targetName, aniData_loop.loop);
                });
            }
            spine.setCompleteListener(null);
            spine.setCompleteListener(spineCompleteHandler);
            //--in
            spine.setAnimation(aniData_in.trackIndex, aniData_in.targetName, aniData_in.loop);
            */
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=76d09620d43e76501cde6e3aa94fb70aa41aea94.js.map
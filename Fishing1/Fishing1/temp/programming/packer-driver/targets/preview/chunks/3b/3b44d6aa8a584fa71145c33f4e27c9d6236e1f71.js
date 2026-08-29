System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LoadingResManager, Component, UITransform, v3, instantiate, Animation, log, DiscAni, CrazyAniEffect, _crd;

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  _export({
    DiscAni: void 0,
    CrazyAniEffect: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      instantiate = _cc.instantiate;
      Animation = _cc.Animation;
      log = _cc.log;
    }, function (_unresolved_2) {
      LoadingResManager = _unresolved_2.LoadingResManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5238ceElU5BiaCBr2LSBzPT", "CrazyAniEffect", undefined);
      /**
       * Created by EricHuang on 2023/11/22.
       */


      __checkObsolete__(['Component', 'EventTarget', 'Node', 'UITransform', 'v3', 'Vec3']);

      __checkObsolete__(['instantiate']);

      __checkObsolete__(['find']);

      __checkObsolete__(['Animation']);

      __checkObsolete__(['Scene']);

      __checkObsolete__(['log']);

      _export("DiscAni", DiscAni = class DiscAni extends Component {
        constructor() {
          super();
          this.id = void 0;
          this._animation = void 0;
        }

        onLoad() {
          this._animation = this.node.getComponent(Animation);
          var clip = this._animation.clips;
          this._animation.defaultClip = clip[0];
          this.closeAndStop();
        }

        openAndPlay() {
          this.node.active = true;

          this._animation.play();
        }

        closeAndStop() {
          this.node.active = false;

          this._animation.stop();
        }

      }); //export class CallAniEffect extends EventTarget


      _export("CrazyAniEffect", CrazyAniEffect = class CrazyAniEffect {
        //--砲塔上的
        constructor() {
          this._container = void 0;
          this._crazyDiscs = void 0;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          //super();
          //let awardNode=instantiate(LoadingResManager.getInstance().getPrefab(args[0].prefabId));
          log('check_CrazyAniEffect', args[0]); //-container:find('Canvas/topAniEffectNode')--在UI之上

          this._container = args[0].container;
          this._crazyDiscs = [];
          var discComponent;

          for (var i = 0; i < 4; i++) {
            var dsicFX = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(args[0].crazyTowerPrefabId));
            log('check_crazy_dsicFX_', dsicFX);
            discComponent = dsicFX.addComponent(DiscAni);
            discComponent.id = i;

            this._container.addChild(dsicFX);
            /*
            let worldVec3=v3(args[0].playerPositions[i].x,args[0].playerPositions[i].y);
            
            let localV3=this._container.getComponent(UITransform).convertToNodeSpaceAR(worldVec3);
             dsicFX.setPosition(localV3);
            */


            this._crazyDiscs[i] = dsicFX;
          }
        }

        setDataAfterSetRoom(playerPositions) {
          var len = this._crazyDiscs.length;
          var dsicFX;

          for (var i = 0; i < len; i++) {
            dsicFX = this._crazyDiscs[i]; //log('check_crazy_dsicFX_',dsicFX);

            var worldVec3 = v3(playerPositions[i].x, playerPositions[i].y);

            var localV3 = this._container.getComponent(UITransform).convertToNodeSpaceAR(worldVec3);

            dsicFX.setPosition(localV3);
          }
        }

        resetRoomData(value) {
          var len = this._crazyDiscs.length;
          var dsicFX;

          for (var i = 0; i < len; i++) {
            dsicFX = this._crazyDiscs[i];
            dsicFX.setPosition(v3(0, 0));
          }
        }
        /**
         * 
         * @param table 0-3
         */


        openCrazyPropEffect(table) {
          this._crazyDiscs[table].getComponent(DiscAni).openAndPlay();
        }
        /**
         * 
         * @param table 0-3
         */


        closeCrazyPropEffect(table) {
          this._crazyDiscs[table].getComponent(DiscAni).closeAndStop();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3b44d6aa8a584fa71145c33f4e27c9d6236e1f71.js.map
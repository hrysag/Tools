System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, TweenMaxCocosPlugin, v3, log, ShakeAniEffect, _crd;

  function _reportPossibleCrUseOfTweenMaxCocosPlugin(extras) {
    _reporterNs.report("TweenMaxCocosPlugin", "../../../../framework/utils/TweenMaxPlugin", _context.meta, extras);
  }

  _export("ShakeAniEffect", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      v3 = _cc.v3;
      log = _cc.log;
    }, function (_unresolved_2) {
      TweenMaxCocosPlugin = _unresolved_2.TweenMaxCocosPlugin;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e675h+DZxJ/abxFHPnIYmV", "ShakeAniEffect", undefined);
      /**
       * Created by EricHuang on 2023/10/27.
       */


      __checkObsolete__(['Node', 'v3']);

      __checkObsolete__(['log']);

      _export("ShakeAniEffect", ShakeAniEffect = class ShakeAniEffect {
        constructor(...args) {
          this._container = void 0;
        }

        shakeEffect(target) {
          log('shakeEffect', target.position);
          target.setPosition(v3(0, 0, target.position.z));
          let component = target.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          if (!target) {
            component = target.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);
          }

          TweenMax.fromTo(component, 0.05, {
            x: 100,
            y: 80
          }, {
            x: 0,
            y: 0,
            clearProps: "x,y",
            repeat: 4
          }); //TweenMax.fromTo(target, 0.05, {x:100,y:80},{x:0,y:0,clearProps:"x,y",repeat:2});
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=212d31d58115468160c476fa12b9ed4df4872857.js.map
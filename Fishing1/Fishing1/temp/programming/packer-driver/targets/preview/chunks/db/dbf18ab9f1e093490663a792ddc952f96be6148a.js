System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LoadingResManager, Size, Sprite, UITransform, Node, Layers, v2, color, log, CocosGameSetting, FrozenAniEffect, _crd;

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCocosGameSetting(extras) {
    _reporterNs.report("CocosGameSetting", "../../../../framework/utils/CocosGameSetting", _context.meta, extras);
  }

  _export("FrozenAniEffect", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Size = _cc.Size;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Node = _cc.Node;
      Layers = _cc.Layers;
      v2 = _cc.v2;
      color = _cc.color;
      log = _cc.log;
    }, function (_unresolved_2) {
      LoadingResManager = _unresolved_2.LoadingResManager;
    }, function (_unresolved_3) {
      CocosGameSetting = _unresolved_3.CocosGameSetting;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e068bX1HwlOprQz1WRUHvTR", "FrozenAniEffect", undefined);
      /**
       * Created by EricHuang on 2023/11/21.
       */


      __checkObsolete__(['Size', 'Sprite', 'UITransform', 'Vec3']);

      __checkObsolete__(['SpriteFrame']);

      __checkObsolete__(['Node']);

      __checkObsolete__(['Layers']);

      __checkObsolete__(['v2']);

      __checkObsolete__(['color']);

      __checkObsolete__(['log']);

      _export("FrozenAniEffect", FrozenAniEffect = class FrozenAniEffect {
        constructor() {
          this._container = void 0;
          this._freezeBgNode = void 0;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          this._container = args[0].container;
          var spriteFrame = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrame(args[0].spriteFrameId);
          log('check_FrozenAniEffect', args[0], spriteFrame);
          this._freezeBgNode = new Node();
          this._freezeBgNode.layer = 1 << Layers.nameToLayer('fx');

          var spr = this._freezeBgNode.addComponent(Sprite);

          spr.spriteFrame = spriteFrame;
          spr.sizeMode = Sprite.SizeMode.CUSTOM;
          spr.type = Sprite.Type.SIMPLE;
          spr.trim = true;
          spr.color = color(255, 255, 255, 128); //--在sprite之後再設定uiTransform才會奏效

          var uiTransform = this._freezeBgNode.addComponent(UITransform);

          uiTransform.anchorPoint = v2(0.5, 0.5);
          uiTransform.contentSize = new Size((_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
            error: Error()
          }), CocosGameSetting) : CocosGameSetting).Game_Width, (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
            error: Error()
          }), CocosGameSetting) : CocosGameSetting).Game_Height); //log('check_sprite_uiTransform',uiTransform);

          this._container.addChild(this._freezeBgNode);

          this._freezeBgNode.active = false;
        }

        openFrozenEffect() {
          this._freezeBgNode.active = true;
        }

        closeFrozenEffect() {
          this._freezeBgNode.active = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dbf18ab9f1e093490663a792ddc952f96be6148a.js.map
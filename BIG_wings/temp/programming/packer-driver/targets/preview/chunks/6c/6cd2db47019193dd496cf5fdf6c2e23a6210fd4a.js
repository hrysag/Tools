System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Component, v3, Canvas, view, EDITOR, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, property, menu, executeInEditMode, responsiveBg_TA;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Component = _cc.Component;
      v3 = _cc.v3;
      Canvas = _cc.Canvas;
      view = _cc.view;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb210baSQdIC7cGTgU0pqYp", "responsiveBg_TA", undefined); //適用於3.x版


      __checkObsolete__(['_decorator', 'Node', 'Component', 'v3', 'Canvas', 'view', 'ResolutionPolicy']);

      ({
        ccclass,
        property,
        menu,
        executeInEditMode
      } = _decorator); //直橫式Node

      _export("responsiveBg_TA", responsiveBg_TA = (_dec = ccclass('responsiveBg_TA'), _dec2 = menu('TA/responsiveBg_TA'), _dec3 = property({
        type: [Node],
        tooltip: "背景縮放物件"
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = class responsiveBg_TA extends Component {
        constructor() {
          super(...arguments);
          this._canvas = null;
          //canvas節點
          this._width = 0;
          //暫存目前畫面寬度
          this._height = 0;

          //暫存目前畫面高度
          // public _LandscapeView = size(1920, 1080);//橫式螢幕尺寸
          _initializerDefineProperty(this, "bgScaleNode", _descriptor, this);
        }

        onLoad() {
          //獲取Canvas層
          this._canvas = this.node;

          while (!this._canvas.getComponent(Canvas)) {
            this._canvas = this._canvas.parent;
          }
        }

        start() {
          console.log("開始");

          if (!EDITOR) {
            this.scheduleOnce(() => {
              this.resetUI(); //第一次啟動畫面，待0.1秒後刷新UI
            }, 0.1);
          }
        } //更新Canvas參數(自適應螢幕比例，以1920:1080為基準)


        EditModeResetUI() {
          if (view.getVisibleSize().width / view.getVisibleSize().height > 16 / 9) {
            // view.setDesignResolutionSize(1920, 1080, ResolutionPolicy.FIXED_HEIGHT);//以1920:1080為基準，橫式鎖定高
            var scaleNum = view.getVisibleSize().width / view.getVisibleSize().height / (16 / 9); //自適應縮放值

            for (var i = 0; i < this.bgScaleNode.length; i++) {
              console.log("尺寸", scaleNum);
              this.bgScaleNode[i].setScale(v3(scaleNum, scaleNum, scaleNum)); //設置背景自適應縮放
            }
          } else {
            // view.setDesignResolutionSize(1920, 1080, ResolutionPolicy.FIXED_WIDTH)
            for (var _i = 0; _i < this.bgScaleNode.length; _i++) {
              console.log("尺寸1");

              this.bgScaleNode[_i].setScale(v3(1, 1, 1)); //背景回歸不縮放

            }
          }
        }

        resetUI() {
          this._width = view.getVisibleSize().width; //紀錄畫面寬度

          this._height = view.getVisibleSize().height; //紀錄畫面高度

          console.log("寬高", this._width, this._height);
        }

        update() {
          if (!EDITOR) {
            console.log("更新", view.getVisibleSize().width, view.getVisibleSize().height);

            if (view.getVisibleSize().width != this._width || view.getVisibleSize().height != this._height) {
              this.resetUI(); //更新UI

              this.EditModeResetUI(); //更新畫面比例設置
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgScaleNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6cd2db47019193dd496cf5fdf6c2e23a6210fd4a.js.map
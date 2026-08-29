System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, v3, v2, Component, UIOpacity, UITransform, Sprite, color, Line, Vec2, TweenMaxCocosPlugin, _crd;

  _export("TweenMaxCocosPlugin", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      v3 = _cc.v3;
      v2 = _cc.v2;
      Component = _cc.Component;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Sprite = _cc.Sprite;
      color = _cc.color;
      Line = _cc.Line;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ddabapXMYNMSrx0/gsKSUXy", "TweenMaxPlugin", undefined);
      /**
       * Created by EricHuang on 2023/08/18.
       * 情非得已
       */


      __checkObsolete__(['_decorator', 'math', 'Color', 'v3', 'v2', 'Vec3', 'Component', 'Node', 'UIOpacity', 'UITransform', 'SpriteRenderer', 'Sprite', 'color', 'Line', 'Vec2']);

      __checkObsolete__(['log']);

      _export("TweenMaxCocosPlugin", TweenMaxCocosPlugin = class TweenMaxCocosPlugin extends Component {
        constructor(...args) {
          super(...args);
          this.others = void 0;
        }

        get x() {
          return this.node.position.x;
        }

        set x(value) {
          this.node.setPosition(value, this.node.position.y, this.node.position.z);
        }

        get y() {
          return this.node.position.y;
        }

        set y(value) {
          this.node.setPosition(this.node.position.x, value, this.node.position.z);
        }

        get scale() {
          return this.node.scale.x;
        } // get pos(): Vec2 {
        //     return v2(this.node.position.x, this.node.position.y);
        // }
        //
        // set pos(value: Vec2) {
        //     this.node.setPosition(v3(value.x, value.y));
        // }


        set scale(value) {
          this.node.setScale(value, value, value);
        }

        get scaleX() {
          return this.node.scale.x;
        }

        set scaleX(value) {
          this.node.setScale(value, this.node.scale.y, 1);
        }

        get scaleY() {
          return this.node.scale.y;
        }

        set scaleY(value) {
          this.node.setScale(this.node.scale.x, value, 1);
        }

        get width() {
          //const transform:UITransform;
          let transform = this.node.getComponent(UITransform);

          if (!transform) {
            transform = this.node.addComponent(UITransform);
          }

          return transform.width;
        }

        set width(value) {
          //const transform = <UITransform>this.node.getComponent(UITransform);
          let transform = this.node.getComponent(UITransform);

          if (!transform) {
            transform = this.node.addComponent(UITransform);
          }

          transform.width = value;
        }

        get height() {
          //const transform = <UITransform>this.node.getComponent(UITransform);
          let transform = this.node.getComponent(UITransform);

          if (!transform) {
            transform = this.node.addComponent(UITransform);
          }

          return transform.height;
        }

        set height(value) {
          //const transform = <UITransform>this.node.getComponent(UITransform);
          let transform = this.node.getComponent(UITransform);

          if (!transform) {
            transform = this.node.addComponent(UITransform);
          }

          transform.height = value;
        } //---這邊要自己加入component


        get opacity() {
          /*
          const render = this.node.getComponent(Renderable2D);
          if (render ) {
              return render.color.a;
          }*/
          const opacity = this.node.getComponent(UIOpacity);

          if (opacity) {
            return opacity.opacity;
          }

          return 255;
        } // get contentSize(): Size {
        //     const transform = <UITransform>this.node.getComponent(UITransform);
        //     return transform.contentSize;
        // }
        //
        // set contentSize(value: Size) {
        //     const transform = <UITransform>this.node.getComponent(UITransform);
        //     transform.setContentSize(value);
        // }


        set opacity(value) {
          /*
          const render = this.node.getComponent(Renderable2D);
          if (render ) 
          {
              render.color = new Color(render.color.r, render.color.g, render.color.b, value)
              return;
          }*/
          const opacity = this.node.getComponent(UIOpacity);

          if (opacity) {
            opacity.opacity = value;
          }
        }

        get angle() {
          return this.node.angle;
        }

        set angle(value) {
          this.node.angle = value;
        }

        get fillRange() {
          var _this$node$getCompone;

          return (_this$node$getCompone = this.node.getComponent(Sprite)) == null ? void 0 : _this$node$getCompone.fillRange;
        }

        set fillRange(value) {
          if (this.node.getComponent(Sprite)) {
            this.node.getComponent(Sprite).fillRange = value;
          }
        }

        get fillCenterX() {
          var _this$node$getCompone2;

          return (_this$node$getCompone2 = this.node.getComponent(Sprite)) == null ? void 0 : _this$node$getCompone2.fillCenter.x;
        }

        set fillCenterX(value) {
          if (this.node.getComponent(Sprite)) {
            let fc = this.node.getComponent(Sprite).fillCenter;
            fc = v2(value, fc.y);
          }
        }

        get fillCenterY() {
          var _this$node$getCompone3;

          return (_this$node$getCompone3 = this.node.getComponent(Sprite)) == null ? void 0 : _this$node$getCompone3.fillCenter.y;
        }

        set fillCenterY(value) {
          if (this.node.getComponent(Sprite)) {
            let fc = this.node.getComponent(Sprite).fillCenter;
            fc = v2(fc.x, value);
          }
        }

        set sprColorAlpha(value) {
          if (this.node.getComponent(Sprite)) {
            this.node.getComponent(Sprite).color = color(255, 255, 255, value);
          }
        }

        get sprColorAlpha() {
          var _this$node$getCompone4;

          return (_this$node$getCompone4 = this.node.getComponent(Sprite)) == null ? void 0 : _this$node$getCompone4.color.a;
        }

        get linePosEndX() {
          let value = -1;

          if (this.node.getComponent(Line)) {
            let linePos = this.node.getComponent(Line).positions;
            let len = linePos.length;
            value = linePos[len - 1].x;
          } //log('check_linePosEndX',value);


          return value;
        }

        get linePosEndY() {
          let value = -1;

          if (this.node.getComponent(Line)) {
            let linePos = this.node.getComponent(Line).positions;
            let len = linePos.length;
            value = linePos[len - 1].y;
          }

          return value;
        }

        set linePosEndX(value) {
          if (this.node.getComponent(Line)) {
            let linePos = this.node.getComponent(Line).positions;
            let len = linePos.length; //-- linecomponent.positions=posData as never;

            let pos = [];

            for (let i = 0; i < len; i++) {
              if (i == len - 1) {
                pos.push(v3(value, linePos[i].y));
              } else {
                pos.push(linePos[i]);
              }
            }

            this.node.getComponent(Line).positions = pos; //(linePos[len-1] as Vec3)=v3(value,(linePos[len-1] as Vec3).y);
          }
        }

        set linePosEndY(value) {
          if (this.node.getComponent(Line)) {
            let linePos = this.node.getComponent(Line).positions;
            let len = linePos.length;
            let pos = [];

            for (let i = 0; i < len; i++) {
              if (i == len - 1) {
                pos.push(v3(linePos[i].x, value));
              } else {
                pos.push(linePos[i]);
              }
            }

            this.node.getComponent(Line).positions = pos; //(linePos[len-1] as Vec3)=v3((linePos[len-1] as Vec3).x,value);
          }
        }

        get lineOffestX() {
          var _this$node$getCompone5;

          return (_this$node$getCompone5 = this.node.getComponent(Line)) == null ? void 0 : _this$node$getCompone5.offset.x;
        }

        get lineOffestY() {
          var _this$node$getCompone6;

          return (_this$node$getCompone6 = this.node.getComponent(Line)) == null ? void 0 : _this$node$getCompone6.offset.y;
        }

        set lineOffestX(value) {
          if (this.node.getComponent(Line)) {
            //this.node.getComponent(Line).offset.x=value;
            let offset = this.node.getComponent(Line).offset;
            this.node.getComponent(Line).offset = new Vec2(value, offset.y);
          }
        }

        set lineOffestY(value) {
          if (this.node.getComponent(Line)) {
            let offset = this.node.getComponent(Line).offset;
            this.node.getComponent(Line).offset = new Vec2(offset.x, value);
          }
        }

        static trans(node) {
          return node.getComponent(TweenMaxCocosPlugin);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ecb9536479cd45d97e28364474d5ee8367f73a07.js.map
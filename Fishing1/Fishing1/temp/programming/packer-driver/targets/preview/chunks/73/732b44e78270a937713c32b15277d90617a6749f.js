System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, BGmask, _crd;

  _export("BGmask", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2ae7egNDW1C7oe0y9x3+12z", "BGmask", undefined);
      /**
       * Created by EricHuang on 2023/10/04.
       * 用來在各種UI下遮擋的半透明黑色區域
       */


      __checkObsolete__(['resources', 'Color', 'Component', 'Size', 'Sprite', 'SpriteFrame', 'UITransform', 'assetManager']);

      __checkObsolete__(['log']);

      _export("BGmask", BGmask = class BGmask extends Component {
        constructor() {
          super();
          this._sprite = void 0;
          this._sprite = null;
        }

        onLoad() {
          /*
          let material:Material=new Material();
           material.setProperty('color',Color.BLACK);
           let sprFrame:SpriteFrame=new SpriteFrame();
           sprFrame.
          */
          //this.createDynamicSprite();
        }
        /*
        async createDynamicSprite() 
        {
             // 加载默认的 SpriteFrame
             const spriteFrame = await this.loadDefaultSpriteFrame();
              this._sprite=this.node.addComponent(Sprite);
             // 设置 Sprite 的 SpriteFrame
             this._sprite.spriteFrame = spriteFrame;
              this._sprite.color=Color.BLACK;
              let uiTransform=this.node.addComponent(UITransform);
               uiTransform.contentSize=new Size(1920,1080);
        } */

        /*
        async loadDefaultSpriteFrame(): Promise<SpriteFrame> 
        {
         return new Promise((resolve, reject) => {
             // 使用 assetManager 加载默认的 SpriteFrame
             assetManager.loadAny({'path':'db://internal/default_ui/default_sprite_splash.png'}, (err, data) => {
                 if (err) {
                     reject(err);
                 } else {
                      
                     resolve(data);
                 }
             });
         });
        }*/

        /*
          async loadDefaultSpriteFrame() {
            // 使用 resources.load 加载默认素材
            resources.load('db://internal/default_ui/default_sprite_splash.png', SpriteFrame, (err, spriteFrame: SpriteFrame) => {
                if (!err) {
                    // 设置 Sprite 的 SpriteFrame
                    //this.sprite.spriteFrame = spriteFrame;
                    log('check_loadData',spriteFrame);
        
                } else {
                    console.error('Failed to load sprite frame with path:');
                }
            });
        }*/


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=732b44e78270a937713c32b15277d90617a6749f.js.map
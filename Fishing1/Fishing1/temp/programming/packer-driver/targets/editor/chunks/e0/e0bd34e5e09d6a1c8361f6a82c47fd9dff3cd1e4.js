System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LoadingResManager, instantiate, Node, Sprite, UITransform, Layout, Size, v3, Layers, color, TweenMaxCocosPlugin, DgKillDragonTitleAni, _crd;

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenMaxCocosPlugin(extras) {
    _reporterNs.report("TweenMaxCocosPlugin", "../../../../framework/utils/TweenMaxPlugin", _context.meta, extras);
  }

  _export("DgKillDragonTitleAni", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Layout = _cc.Layout;
      Size = _cc.Size;
      v3 = _cc.v3;
      Layers = _cc.Layers;
      color = _cc.color;
    }, function (_unresolved_2) {
      LoadingResManager = _unresolved_2.LoadingResManager;
    }, function (_unresolved_3) {
      TweenMaxCocosPlugin = _unresolved_3.TweenMaxCocosPlugin;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53bd3AZfsNKG6+UB9SX4etY", "DgKillDragonTitleAni", undefined);
      /**
       * Created by EricHuang on 2023/10/20.
       */


      __checkObsolete__(['SpriteFrame', 'instantiate', 'Node', 'Animation', 'AnimationClip', 'AnimationState', 'Sprite', 'UITransform', 'Layout', 'Size']);

      __checkObsolete__(['v3', 'Layers', 'color']);

      __checkObsolete__(['log']);

      _export("DgKillDragonTitleAni", DgKillDragonTitleAni = class DgKillDragonTitleAni {
        constructor(...args) {
          this._containerNode = void 0;
          this._allContainerNode = void 0;
          this._blushNode = void 0;
          this._arySprTitleWords = void 0;
          this._arySprTitleWords = [];
          this._containerNode = args[0].container;
          this._allContainerNode = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(args[0].other.prefabId));
          this._blushNode = this._allContainerNode.getChildByName('brush');

          this._blushNode.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          let textures = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames(args[0].other.frameId);
          textures.sort(function (a, b) {
            var numA = parseInt(a.name.match(/\d+/)[0]);
            var numB = parseInt(b.name.match(/\d+/)[0]);
            return numA - numB;
          });

          let titleContainerNode = this._allContainerNode.getChildByName('title'); //let totalwidthSize:{w:number,h:number}={w:0,h:0};  


          for (let i = 0; i < textures.length; i++) {
            let SprNode = new Node('title_spr_' + i);
            SprNode.addComponent(UITransform);
            let spr = SprNode.addComponent(Sprite);
            spr.sizeMode = Sprite.SizeMode.CUSTOM;
            spr.spriteFrame = textures[i];
            let ogSize = spr.spriteFrame.originalSize;
            let tw = SprNode.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);
            SprNode.layer = Layers.Enum.UI_2D;
            SprNode.getComponent(UITransform).contentSize = new Size(ogSize.width, ogSize.height);
            titleContainerNode.addChild(SprNode);
            /*
            let padding:number=(i==0)?0:20;
             let newPosX:number=(ogSize.width*i)+padding;
            
            totalwidthSize.h=ogSize.height;
             totalwidthSize.w=totalwidthSize.w+ogSize.width+padding;
             SprNode.setPosition(v3(newPosX,0,0));
             log('check_spriteFrameSize',spr.spriteFrame.originalSize,SprNode.getComponent(UITransform).contentSize);
            */

            this._arySprTitleWords.push(tw);
          }
          /*--自己算
          titleContainerNode.getComponent(UITransform).contentSize=new Size(totalwidthSize.w,totalwidthSize.h);
           let topSiz=this._allContainerNode.getComponent(UITransform).contentSize;
           
          let languageSize=titleContainerNode.getComponent(UITransform).contentSize;
           let finalSpace:number=topSiz.width-languageSize.width;
           titleContainerNode.setPosition(v3(-finalSpace,0,0));
          */
          //log('checkTitleContainerNode',topSiz,languageSize,finalSpace);


          titleContainerNode.getComponent(Layout).updateLayout(); //log('_DgKillDragonTitleAni_',this._allContainerNode,textures);
        }

        showBlush() {
          return new Promise(resolve => {
            TweenMax.to(this._blushNode.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), 0.17, {
              fillRange: 1,
              onComplete: () => {
                resolve();
              }
            });
          });
        }

        showTitlewords() {
          return new Promise(resolve => {
            let len = this._arySprTitleWords.length;
            let count = 0;

            for (let i = 0; i < len; i++) {
              this._arySprTitleWords[i].node.getComponent(Sprite).color = color(255, 255, 255, 0);

              this._arySprTitleWords[i].node.setScale(v3(1, 1, 1));

              TweenMax.to(this._arySprTitleWords[i], 0.2, {
                scale: 3,
                sprColorAlpha: 255,
                delay: i * 0.08,

                /*
                repeat:1,
                yoyo:true,
                //ease: Elastic.easeOut,
                
                onComplete:()=>
                {
                    count+=1;
                     if(count>=len)
                    {
                      
                        resolve();   
                    }
                }*/
                onCompleteParams: [{
                  img: this._arySprTitleWords[i],
                  index: i
                }],
                onComplete: a => {
                  TweenMax.to(a.img, 0.8, {
                    scale: 1,
                    //scaleY:2,
                    delay: a.index * 0.02,
                    ease: Elastic.easeOut,
                    onComplete: () => {
                      count += 1;

                      if (count >= len) {
                        resolve();
                      }
                    }
                  });
                }
              });
            }
          });
        }

        async showTitle() {
          this._containerNode.addChild(this._allContainerNode);

          this._allContainerNode.active = true;
          this._blushNode.getComponent(Sprite).fillRange = 0;
          this.showBlush();
          await this.showTitlewords();
          TweenMax.to({}, 1, {
            onComplete: () => {
              this.destory();
            }
          });
        }

        destory() {
          this._containerNode.removeChild(this._allContainerNode);

          this._allContainerNode.active = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e0bd34e5e09d6a1c8361f6a82c47fd9dff3cd1e4.js.map
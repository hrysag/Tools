/**
 * Created by EricHuang on 2023/10/04.
 * 用來在各種UI下遮擋的半透明黑色區域
 */

import { resources,Color, Component, Size, Sprite, SpriteFrame, UITransform ,assetManager} from "cc";
import {log} from 'cc';

export class BGmask extends Component
{
   private _sprite: Sprite;
   
   constructor()
   {
      super();

      this._sprite=null;
   }


   protected onLoad():void
   {

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



}
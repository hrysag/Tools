/**
 * Created by EricHuang on 2023/10/20.
 */
import { LoadingResManager } from "../../../../framework/logic/loading/LoadingResManager";
import {SpriteFrame,instantiate,Node,Animation,AnimationClip, AnimationState, Sprite, UITransform, Layout, Size} from 'cc';
import {v3,Layers,color} from 'cc';
import {log} from 'cc';
import { TweenMaxCocosPlugin } from "../../../../framework/utils/TweenMaxPlugin";
 
export class DgKillDragonTitleAni
{
    private _containerNode:Node;

    private _allContainerNode:Node;

    private _blushNode:Node;

    private _arySprTitleWords:TweenMaxCocosPlugin[];
  
    constructor(...args)
    {
        this._arySprTitleWords=[];
        
        this._containerNode=args[0].container;

        this._allContainerNode=instantiate(LoadingResManager.getInstance().getPrefab(args[0].other.prefabId));
        
        this._blushNode=this._allContainerNode.getChildByName('brush');

        this._blushNode.addComponent(TweenMaxCocosPlugin);
        
        let textures:SpriteFrame[]=LoadingResManager.getInstance().getSpriteFrames(args[0].other.frameId);
 
        textures.sort(function(a, b) {
        var numA = parseInt(a.name.match(/\d+/)[0]);
        var numB = parseInt(b.name.match(/\d+/)[0]);
        
        return numA - numB;
        });

        let titleContainerNode:Node=this._allContainerNode.getChildByName('title');
        
        //let totalwidthSize:{w:number,h:number}={w:0,h:0};  

        for(let i:number=0;i<textures.length;i++)
        {
            let SprNode:Node=new Node('title_spr_'+i);
            
            SprNode.addComponent(UITransform);
            
            let spr=SprNode.addComponent(Sprite);

            spr.sizeMode=Sprite.SizeMode.CUSTOM;

            spr.spriteFrame=textures[i];

            let ogSize=spr.spriteFrame.originalSize;

            let tw:TweenMaxCocosPlugin=SprNode.addComponent(TweenMaxCocosPlugin);
            
            SprNode.layer=Layers.Enum.UI_2D;

            SprNode.getComponent(UITransform).contentSize=new Size(ogSize.width,ogSize.height);

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
        titleContainerNode.getComponent(Layout).updateLayout();

        //log('_DgKillDragonTitleAni_',this._allContainerNode,textures);

    }

   
    private showBlush():Promise<void>
    {
        return new Promise<void>((resolve)=>
        {
           
            TweenMax.to(this._blushNode.getComponent(TweenMaxCocosPlugin),0.17,
            {
                fillRange:1,
                onComplete:()=>
                {
                    resolve(); 
                }
            });
        })
    }

   
    private showTitlewords():Promise<void>
    {
        return new Promise<void>((resolve)=>
        {
            let len:number=this._arySprTitleWords.length;

            let count:number=0;

            for(let i:number=0;i<len;i++)
            {
                this._arySprTitleWords[i].node.getComponent(Sprite).color=color(255,255,255,0);

                this._arySprTitleWords[i].node.setScale(v3(1,1,1));

                TweenMax.to(this._arySprTitleWords[i],0.2,
                {
                    scale:3,
                    sprColorAlpha:255,
                    delay:i*0.08,
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
                    
                    onCompleteParams:[{img:this._arySprTitleWords[i],index:i}],
                    onComplete:(a:any)=>
                    {
                        TweenMax.to(a.img,0.8,{
                            scale:1,
                            //scaleY:2,
                            delay:a.index*0.02,
                            ease: Elastic.easeOut,
                            onComplete:()=>
                            {
                                count+=1;

                                if(count>=len)
                                {
                                  
                                    resolve();   
                                }
                            }
                        })
                    }
               });

            }
        })
    }


    public async showTitle():Promise<void>
    {
        this._containerNode.addChild(this._allContainerNode);

        this._allContainerNode.active=true;
        
        this._blushNode.getComponent(Sprite).fillRange=0;

        this.showBlush();

        await this.showTitlewords();

        TweenMax.to({},1,
        {
            onComplete:()=>
            {
               this.destory();  
            }
        });

        
    }



    public destory():void
    {
        this._containerNode.removeChild(this._allContainerNode);

        this._allContainerNode.active=false;
    }
 
}
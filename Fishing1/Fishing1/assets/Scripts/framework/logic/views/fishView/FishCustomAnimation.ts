/**
 * Created by EricHuang on 2023/7/17.
 * 特殊的fish mesh(主要用於自己手動程式碼建立,例如規律的圓盤物件)
 */

import { Node } from "cc";

export class FishCustomAnimation extends Node
{

    constructor()
    {
       super();        
    }

    //---override it 
    public init():void
    {

    }

    public hitAndChangeState():void
    {
        
    }

    public reSetState():void
    {
        
    }

    public removeAndDispose():void
    {
     
    }

    public stopShooting():void
    {
         
         
    }

    public reShooting():void
    {
        
        
    }

    public play():void
    {

    }
    
    public stop():void
    {

    }

    public repeatChangeVertextDataColor():void
    {

    }

    public stopRepeatChangeVertextDataColor():void
    {

    }

    /*
    public getBonusMesh():PIXI.Rectangle
    {
        return this.spCollision.getBounds();
    }

    public createCollisionArea(scale:number):void
    {
        this.spCollision=new PIXI.Graphics();
        this.spCollision.beginFill(0xFF0000);
        this.spCollision.drawRect(0,0,this.ogWidth,this.ogHeight);
        this.spCollision.endFill();
        this.spCollision.interactive=false;
        this.spCollision.alpha=0;
        
        this.spCollision.pivot.set(this.spCollision.width/2,this.spCollision.height/2);
        this.spCollision.scale.set(scale);
        this.addChild(this.spCollision);
    }*/


}
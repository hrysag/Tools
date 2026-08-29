/**
 * Created by EricHuang on 2023/7/17.
 * 特殊的fish mesh(主要用於自己手動程式碼建立,例如規律的圓盤物件)
 */

import { Node } from "cc";
import { Rect } from "cc";

export abstract class FishCustomAnimation extends Node
{

    constructor()
    {
       super();        
    }

    //---override it 
    abstract init():void
  
    abstract hitAndChangeState():void
   
    abstract reSetState():void
    
    abstract removeAndDispose():void
   
    abstract stopShooting():void
   

    abstract reShooting():void
    

    abstract play():void
   
    
    abstract stop():void
   

    abstract repeatChangeVertextDataColor():void
   

    abstract stopRepeatChangeVertextDataColor():void
    

    abstract getBonusMesh():Rect
   

    abstract createCollisionArea(scale:number):void
  

}
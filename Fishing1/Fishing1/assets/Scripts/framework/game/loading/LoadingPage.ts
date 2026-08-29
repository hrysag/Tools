/**
 * Created by EricHuang on 2023/9/20.
 * 定義讀取進度.
 * 這邊是先假定在cocos creator裡面完成loading bar讀取頁面
 * 之後要把他從cocos裡面抽離出來變成動態加到canvas上面or div上面
 */

import { Component,Node } from "cc";
import { LoadingPageInfo } from "./LoadingDefinitions";


export abstract class LoadingPage extends Node
{
   constructor()
   {
      super();
   }
   
 
   abstract init(LoadingPageInfo?:LoadingPageInfo):void
 
   abstract onErrorAndClose():void
  
   abstract updateText(tx: string):void

   abstract checkLoadingUI():boolean

   abstract hideLoadingUI():void
    
   abstract showLoadingUI():void
  
   abstract remove(): void
  
   abstract close(): void 
      

}
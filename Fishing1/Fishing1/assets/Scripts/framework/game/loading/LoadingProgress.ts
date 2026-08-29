/**
 * Created by EricHuang on 2023/9/20.
 * 定義讀取進度
 */
import {EventTarget} from 'cc';
import {LoadingPage} from './LoadingPage';
import {LoadingManager} from './LoadingManager';


export abstract class LoadingProgress extends EventTarget
{
   
    
    protected _keepProgrss:number;//--定義一次要開幾條urlrequest(網頁他是可以同時開多條的)
      
    protected _loadingPage:LoadingPage;//--待定義

    protected _assetsFinish:boolean;

    protected _loadingManager:LoadingManager;
    
    /*
    protected _loadingPageInfo:LoadingPageInfo;

    set loadingPageInfo(value:LoadingPageInfo)
    {
        this._loadingPageInfo=value;
    }*/
    
    constructor(protected _enableLoaingPage: boolean = true)
    {
       super();
       
       this._keepProgrss=0;//--測試先關閉

    }

    abstract startLoading():void
   
    abstract finish():void
  

    abstract hideLoadingUI():void
  

    abstract showLoadingUI ():void

    abstract remove ():void

    abstract showLoadingTxt(txt:string):void
   

    protected onUpdateAssetsProgress=(progress: number)=>
    {

    }

    protected updateLoaingPageProgress(progress: number): void 
    {
      
    }

    protected onAssetsLoadComplete = () => 
    {
        
    }

    protected onAssetsUpdate = () => 
    {
        
    }

    


}



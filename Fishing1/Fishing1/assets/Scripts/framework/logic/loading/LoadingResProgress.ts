/**
 * Created by EricHuang on 2024/01/16.
 */
import {LoadingProgress} from '../../game/loading/LoadingProgress';
import {LoadingPageInfo,FileConfigLoadingOption} from '../../game/loading/LoadingDefinitions';
import {LoadingEvent} from '../../game/events/eventBase';
import {LoadingResManager} from './LoadingResManager';
import {LoadingResPage} from './LoadingResPage';
import {log} from 'cc';


export class LoadingResProgress extends LoadingProgress
{
   
    protected _loadingPageInfo:LoadingPageInfo;

    set loadingPageInfo(value:LoadingPageInfo)
    {
        this._loadingPageInfo=value;

        this._loadingPage.init(value);
    }

    private _loadingQuene:FileConfigLoadingOption[];
    
    set loadingQuene(value:FileConfigLoadingOption[])
    {
        this._loadingQuene=value;

        this._loadingManager.loadingQueue=this._loadingQuene;
    }

    private static _instance:LoadingResProgress;
    
    public static getInstance(): LoadingResProgress { return (LoadingResProgress._instance) ? LoadingResProgress._instance : new LoadingResProgress(); }

    private _count:number;

    constructor()
    {
        super();

        if (LoadingResProgress._instance != null)
        {
            throw new Error('plz use getInstance()');
        }
        
        LoadingResProgress._instance = this;

        //-_laodingPage要在這裡定義
        this._loadingPageInfo=null;

        this._loadingManager=LoadingResManager.getInstance();

        this._loadingPage=LoadingResPage.getInstance();

        if (!this._enableLoaingPage) 
        {
            this._loadingPage.remove();
        }

        this._count=0;

    }

    public startLoading():void
    {
        this._assetsFinish = false;

        this.onUpdateAssetsProgress(0);

        this._loadingManager.on(LoadingEvent.ASSETS_IS_READY,this.onAssetsLoadComplete);
        
        this._loadingManager.on(LoadingEvent.ASSETS_IS_UPDATE,this.onAssetsUpdate);

        this._loadingManager.startLoad();
    }
   
    public finish():void
    {
        this.updateLoaingPageProgress(100);

        //this._loadingPage.close();
    }
  

    public hideLoadingUI():void
    {
        this._loadingPage.hideLoadingUI();
    }
  

    public showLoadingUI ():void
    {
        this._loadingPage.showLoadingUI();
    }

    public remove ():void
    {
        this._loadingPage.remove();
    }

    public showLoadingTxt(txt:string):void
    {
        this._loadingPage.updateText(txt);
    }

    protected onAssetsLoadComplete=()=>
    {
        this._loadingManager.off(LoadingEvent.ASSETS_IS_READY,this.onAssetsLoadComplete);
        
        this._loadingManager.off(LoadingEvent.ASSETS_IS_UPDATE,this.onAssetsUpdate);

        this.emit(LoadingEvent.ASSETS_IS_READY); 
    }

    protected onAssetsUpdate=()=>
    {
        this._count+=1; 

        this.onUpdateAssetsProgress(this._count);
       
    }

    protected onUpdateAssetsProgress=(progress:number)=>
    {
        let ratio=((progress/this._loadingQuene.length)*100)*0.9;
        
        //log('check_assetsIsUpdate',ratio,this._count,this._loadingQuene.length);

        this.updateLoaingPageProgress(ratio);

    }

    protected updateLoaingPageProgress(progress: number): void 
    {
        this._loadingPage.updateText(progress.toFixed(0) + '%');
    }


}
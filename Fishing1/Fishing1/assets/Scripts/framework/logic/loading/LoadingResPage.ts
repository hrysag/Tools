/**
 * Created by EricHuang on 2024/01/16.
 */
import {LoadingPage} from '../../game/loading/LoadingPage';
import {LoadingPageInfo} from '../../game/loading/LoadingDefinitions';
import {Label,Node,find} from 'cc';


export class LoadingResPage extends LoadingPage
{
   
    private _contentNode:Node;

    private _label:Label;

    private static _instance:LoadingResPage;
    
    public static getInstance(): LoadingResPage { return (LoadingResPage._instance) ? LoadingResPage._instance : new LoadingResPage(); }

   
    constructor()
    {
        super();

        if (LoadingResPage._instance != null)
        {
            throw new Error('plz use getInstance()');
        }
        
        LoadingResPage._instance = this;
    }

    public init(LoadingPageInfo?:LoadingPageInfo):void
    {
        this._contentNode=find(LoadingPageInfo.loadingNodeId);

        this._label=this._contentNode.getChildByName(LoadingPageInfo.loadingLabelId).getComponent(Label);
    }
 
    public onErrorAndClose():void
    {
        this.remove();
    }
  
    public updateText(tx: string):void
    {
        this._label.string=tx;
    }

    public checkLoadingUI():boolean
    {
        let flag:boolean=false;

        if(this._contentNode)
        {
            flag=this._contentNode.active;
        }
        
        return flag;
    }

    public hideLoadingUI():void
    {
        this._contentNode.active=false;
    }
    
    public showLoadingUI():void
    {
        this._contentNode.active=true;
    }
  
    public remove(): void
    {
        let parentNode:Node=this._contentNode.parent;

        parentNode.removeChild(this._contentNode);

        this._contentNode=null;
    }
  
    public close(): void
    {
        this.remove();
    } 


}
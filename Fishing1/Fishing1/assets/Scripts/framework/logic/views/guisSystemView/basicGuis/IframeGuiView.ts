/**
 * Created by EricHuang on 2023/12/19.
 */

import { GuiBasic } from '../../../../game/guiCore/GuiBase';
import { GuiOption } from '../../../../game/guiCore/GuiDefinitionsBase';
import {Digits} from '../../../../utils/Digits';
import { LoadingResManager } from '../../../loading/LoadingResManager';
import { CocosGameSetting } from '../../../../utils/CocosGameSetting';
import {TweenMaxCocosPlugin} from '../../../../utils/TweenMaxPlugin';
import {GameUtils} from '../../../../utils/GameUtils';
import {GUIEvent} from '../../../../game/events/eventBase';
import {Notifycation} from '../../../../abstract/mvvm/Notifycation';
import { GuiNotifycationSubbscriptionSubject } from '../../../../game/guiCore/GuiDefinitionsBase';
import { GuisSystemView } from '../GuisSystemView';
import {ResizeTool} from '../../../resize/ResizeTool';
import {sys,WebView,Node,find, instantiate,Button,Sprite,v3, UITransform, Size, Layers, SpriteFrame,game} from 'cc';
import {log} from 'cc';

export class IframeGuiView extends GuiBasic
{
    private _webViewUrl:string;

    private _stageContainer:Node;

    //private _strCloseBtn:string;

    private _strWebviewPrefab:string;
    
    private _strTitleRule:string;
    
    private _strTitleHistory:string;

    private _textureRule:SpriteFrame;

    private _textureHistory:SpriteFrame;

    private _titleSprite:Sprite;


    private _webViewCloseBtn:Node;

    private _webViewNode:Node;

    constructor()
    {
        super();

        this._webViewUrl='';
    
    }


    /**
     * step1.
     * overrite it
     * @param value guiData before layout
    */
    public setData(value:GuiOption):void
    {
        super.setData(value);

        this._stageContainer=find(value.other.container);

        //this._strCloseBtn=value.other.closeBtn;

        this._strWebviewPrefab=value.other.prefabId;

        this._strTitleRule=value.other.titleRule;
        
        this._strTitleHistory=value.other.titleHistory;

        log('check_helpGuiView_',value);
        
    }

    /**
     * step2.
     * overrite it
     */
    public init():void
    {
        
        //this._defultType=[GUIEvent.BTN_MUTE,GUIEvent.BTN_EXCHANGE,GUIEvent.BTN_HISTORY,GUIEvent.BTN_HELP,GUIEvent.BTN_EXIT];
    }

    public async setLayout(): Promise<void>      
    {
        return new Promise<void>((resolve)=>
        {
            this.active=false;

            let prefabNode=instantiate(LoadingResManager.getInstance().getPrefab(this._strWebviewPrefab));

            this.addChild(prefabNode);

            let mainNode:Node=prefabNode.children[0];

            this._titleSprite=mainNode.getChildByName('title').getComponent(Sprite);

            this._webViewCloseBtn=mainNode.getChildByName('closeBtn');
            
            this._webViewCloseBtn.on(Button.EventType.CLICK,this.btnEventHandler);

            this.layer=Layers.Enum.UI_2D;


            this.addComponent(TweenMaxCocosPlugin);

            let uiTransFrom=this.addComponent(UITransform);
            
            //uiTransFrom.contentSize=new Size(1500,900);
            uiTransFrom.contentSize=new Size(CocosGameSetting.Game_Width,CocosGameSetting.Game_Height);

            uiTransFrom.anchorX=uiTransFrom.anchorY=0.5;

            /*
            this._webViewNode=new Node('webViewNode');

            this._webViewNode.layer=Layers.Enum.UI_2D;
            
            let webuiTransFrom=this._webViewNode.addComponent(UITransform);

            webuiTransFrom.contentSize=new Size(1768,948);

            webuiTransFrom.anchorX=webuiTransFrom.anchorY=0.5;
            */

            this._webViewNode=mainNode.getChildByName('webview');

            //let webComponent=this._webViewNode.addComponent(WebView);
            let webComponent=this._webViewNode.getComponent(WebView);

            webComponent.url='';//--fuck cocos預設是直接給到cocos的網頁,網頁掛掉會跳百度的錯誤訊息

            this._textureRule=LoadingResManager.getInstance().getSpriteFrames(this._strTitleRule)[0];
            
            this._textureHistory=LoadingResManager.getInstance().getSpriteFrames(this._strTitleHistory)[0];
            
            this._stageContainer.addChild(this);

            this.setPosition(v3(0,0));

           
            //---完成的時候做
            resolve();

        });
    }

    private btnEventHandler=(e)=>
    {
        log('webView_closeBtn',e.node.name);
        
        this.hideWebView();

        this.active=false;
    }


    private _iframeInitialize (url:string, scale:number):void
    {
        /*
        if (document.location.protocol === 'https') 
        {
            this._webViewUrl = this._webViewUrl.replace('http://', 'https://');
        }*/

        log('_iframeInitialize_URL',url,scale);

        this._webViewNode.getComponent(WebView).url = '';

        
        this.active = true;
        
        //this._webViewNode.setScale(scale,scale);
        this._webViewNode.setScale(v3(2,1.9));


        this._webViewNode.on('loaded', this.onWebViewLoaded);

        const cocos2dGameContainer = document.getElementById('Cocos2dGameContainer');
        
        const iframe:any = cocos2dGameContainer ? cocos2dGameContainer.children[1] : null;

       
        if(iframe){
            iframe.style.opacity = 100;
        }

        if (document.querySelector('#gameWebviewBtnDiv')) {
            //@ts-ignore
            document.querySelector('#gameWebviewBtnDiv').style.display = 'block';
        }

        if (document.querySelector('#webCloseBtn')) {
            //@ts-ignore
            document.querySelector('#webCloseBtn').height = '0';
        }

        if (sys.os === sys.OS.IOS) 
        {
            if(iframe)
            {
                const iframeContent = iframe.children[0];

                iframeContent.style.height = '100%';
            }
            /*
            if (url.toLowerCase().match('record')) {
                iframeContent.style.height = '5000px';
            }
            */
        }
    }

    /*
    public checkIframeActive():boolean
    {
        return this.active;
    }*/

    public hideWebView (): void
    {
        if (sys.isNative) {
            //this.unschedule(this.showWebViewNativeLater);
            //CYPluginManager.WebViewUtils.clearAll();//--???
            return;

        } else {
            this._webViewNode.getComponent(WebView).url = '';

            this.active = false;

            if (sys.isBrowser) 
            {
                const cocos2dGameContainer = document.getElementById('Cocos2dGameContainer');
                
                const iframe:any = cocos2dGameContainer ? cocos2dGameContainer.children[1] : null;
                
                if(iframe){
                    iframe.style.opacity = 0;
                }
                if (document.querySelector('#gameWebviewBtnDiv')) {
                    //@ts-ignore
                    document.querySelector('#gameWebviewBtnDiv').style.display = 'none';
                }
            }
        }

        this._stageContainer.removeChild(GuisSystemView.BGMask);
    }

    public showWebView(url:string, viewName:string= '', scale:number= 1):void
    {
        
        this._webViewUrl = url;

        log('showWebView',url);
        
        if (sys.isNative) 
        {
            return;
            //this.unschedule(this.showWebViewNativeLater);
            //this.scheduleOnce(this.showWebViewNativeLater, 0.5);
            TweenMax.to(this.getComponent(TweenMaxCocosPlugin),0.5,
            {
                //onComplete:this.showWebViewNativeLater
            });

        } else {
            
            if(viewName!='')
            {
                if(viewName==GuisSystemView._webView_key_history)
                {
                    this._titleSprite.spriteFrame=this._textureHistory;

                }else if(viewName==GuisSystemView._webView_key_rule)
                {
                    this._titleSprite.spriteFrame=this._textureRule;
                }
            }


            this._iframeInitialize(url, (/iPad/i.test(navigator.userAgent)) ? 2 : scale);
        }
    }


    //--現在不會再走這段(這是用APP原生開發會走的)
    /*
    private showWebViewNativeLater=()=>
    {
        const domain = FishGameInfo.domain.split(':')[0];
        pt.sizeWebView(180, 109, 1560, 800, 'SlotGameWebView');
        CYPluginManager.WebViewUtils.loadUrl(this.webViewUrl, 'SlotGameWebView');
        CYPluginManager.WebViewUtils.setCookie(domain, '/', 'SESSION_ID', bbsdk.getUserInfo().sid, 'SlotGameWebView');
    }*/


    private onWebViewLoaded=()=>
    {
       
        this._webViewNode.off('loaded', this.onWebViewLoaded);

        this._webViewNode.getComponent(WebView).url = this._webViewUrl;

        ResizeTool.getInstance().resize();
        //let webViewElement=document.getElementById('webview-wrapper');

        /*
        webViewElement.style.bottom = "0%";
        webViewElement.style.position = "absolute";
        webViewElement.style.top = "50%";
        webViewElement.style.left = "50%";
        webViewElement.style.transform = "translate(-50%, -50%)";
        */

        //log('check_webView_loaded',webViewElement,this._webViewUrl,this);

        log('checkWebViewNodeData',this._webViewNode.position,this._webViewNode.getComponent(UITransform).contentSize);

        
        //let uiTransFrom=this.addComponent(UITransform);
            
        //uiTransFrom.contentSize=new Size(1000,900);

        //uiTransFrom.anchorX=uiTransFrom.anchorY=0.5;
        //this._stageContainer.isChildOf(GuisSystemView.BGMask);

        //this.

        
        if(!this._stageContainer.getChildByName('GuiSysBGMask'))
        {
            this._stageContainer.addChild(GuisSystemView.BGMask);
        }

       
        let index:number=this._stageContainer.children.length-1;

        this._stageContainer.insertChild(this,index);

        /*
        index=this.children.length-1;

        this.insertChild(this._webViewCloseBtn,index);*/
        

        this.active=true;
    }









}
 
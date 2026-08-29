/**
 * Created by EricHuang on 2023/12/19.
 */

import { GuiBasic } from '../../../../game/guiCore/GuiBase';
import { GuiOption } from '../../../../game/guiCore/GuiDefinitionsBase';
import {Digits} from '../../../../utils/Digits';
import { LoadingResManager } from '../../../loading/LoadingResManager';
import {TweenMaxCocosPlugin} from '../../../../utils/TweenMaxPlugin';
import {i18n} from '../../../../utils/i18n/LanguageData';
import {GUIEvent} from '../../../../game/events/eventBase';
import {Notifycation} from '../../../../abstract/mvvm/Notifycation';
import { GuiNotifycationSubbscriptionSubject } from '../../../../game/guiCore/GuiDefinitionsBase';
import { GuisSystemView } from '../GuisSystemView';
import {Button, find,instantiate,Node,Label, SpriteFrame, Color} from 'cc';
import {Layers} from 'cc';
import {UITransform} from 'cc';
import {Size} from 'cc';
import {HorizontalTextAlignment} from 'cc';
import {VerticalTextAlignment} from 'cc';
import {Overflow} from 'cc';
import {Sprite} from 'cc';
import {math} from 'cc';
import {log} from 'cc';

/**
 * 會使用這個幾乎都是已經被踢出房間才會觸發,因為按下確定按鈕就會執行離開的動作
 */
export class SystemMessageGuiView extends GuiBasic
{

    private _strprefab:string;

    private  _stageContainer:Node;

    private _lableShowContainerNode:Node;//--這邊放所有的動態文字顯示(單獨一層容器)

    private _messageGui:Node;

    private  _label:Label;

    private _strTitleSpriteFrame:string;

    private _strCloseBtnSpriteFrame:string; 

    private  _timeVar:any;

    private _errorType:string;

    get errorType():string
    {
        return this._errorType;
    }

    constructor()
    {
        super();
    }

     /**
     * step1.
     * overrite it
     * @param value guiData before layout
    */
    public setData(value:GuiOption):void
    {
        super.setData(value);

        this._strprefab=value.other.prefabId;

        this._stageContainer=find(value.other.container);

        this._lableShowContainerNode=find(value.other.labelContainer);
        
        this._strTitleSpriteFrame=value.other.spriteFrameTitleId;
        
        this._strCloseBtnSpriteFrame=value.other.spriteFrameCloseBtnId;

        this._errorType='';

        //this._guiNode=this;

        log('check_SystemMessageGuiView_',value);
        
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
            this._messageGui=instantiate(LoadingResManager.getInstance().getPrefab(this._strprefab));
            
            this.addChild(this._messageGui);

           

            let titleSpriteFrame:SpriteFrame=LoadingResManager.getInstance().getSpriteFrames(this._strTitleSpriteFrame)[0];

            let sprTitle= this._messageGui.children[0].getChildByName('title').getChildByName('Label').addComponent(Sprite);

            sprTitle.spriteFrame=titleSpriteFrame;

            let btn:Node=this._messageGui.children[0].getChildByName('closeBtn');

            let sprCloseBtn=btn.getChildByName('Label').addComponent(Sprite);

            let closeBtnSpriteFrame:SpriteFrame=LoadingResManager.getInstance().getSpriteFrames(this._strCloseBtnSpriteFrame)[0];

            sprCloseBtn.spriteFrame=closeBtnSpriteFrame;

            btn.on(Button.EventType.CLICK,this.btnEventHandler);

            let labelNode=new Node('SystemMessageLabelNode');

            labelNode.layer=Layers.Enum.UI_2D;

            let labelTransForm=labelNode.addComponent(UITransform);

            labelTransForm.contentSize=new Size(1060,50.4);

            labelTransForm.anchorX=labelTransForm.anchorY=.5;

            this._label=labelNode.addComponent(Label);

            this._label.horizontalAlign=HorizontalTextAlignment.CENTER;
            
            this._label.verticalAlign=VerticalTextAlignment.CENTER;

            this._label.overflow=Overflow.RESIZE_HEIGHT;

            this._label.fontSize=32;

            this._label.lineHeight=40;

            this._label.useSystemFont=true;

            this._label.fontFamily='Arial';

            this._label.color=Color.WHITE;

           

            //this._label.isBold=true;
            
            //---要在處理座位旋轉後的_label旋轉問題
            //this._lableShowContainerNode.addChild(labelNode);
            this.addChild(labelNode);


            //this._label=this._messageGui.children[0].getChildByName('message').getComponent(Label);
            
            this._label.string='mmmmmmmmmmmm';

            this.addComponent(TweenMaxCocosPlugin);

            this._stageContainer.addChild(this);

            this.active=false;

            this._label.node.active=false;
            //---完成的時候做
            resolve();

        });
    }

    private btnEventHandler=(e)=>
    {
       this.closePanel();

       Notifycation.getInstance().emitSync(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.ALERT_CLOSE,this._errorType);
    }


    public showAlert(errorType:string,dictString: string, autoDisappearTime: number = 0):void
    {
        
        log('showAlert_data',errorType,this._errorType,dictString);

        if(this._errorType==errorType)
        {
            return;
        }

       
        this._stageContainer.addChild(GuisSystemView.BGMask);

        this._errorType=errorType;

        let index:number=this._stageContainer.children.length-1;

        this._stageContainer.insertChild(this,index);
        
        
        this._label.string=i18n.t(dictString);
        //--先取字典檔之類的東西
        this.active=true; 

        this._label.node.active=true;

        if(autoDisappearTime>0)
        {
            let tween=this.getComponent(TweenMaxCocosPlugin);

            if(TweenMax.isTweening(tween))
            {
                TweenMax.killTweensOf(tween);
            }

            TweenMax.to(tween,autoDisappearTime,
            {
                onComplete:this.closePanel
            });
        }

        /*
        if(autoDisappearTime>0)
        {
            if(this._timeVar!=null)
            {
                clearTimeout(this._timeVar);

                this._timeVar=window.setTimeout(()=>
                {
                    this.closePanel();

                },autoDisappearTime);
            }
        }*/
    }

    public closePanel=()=>
    {
        this.active=false; 

        this._label.node.active=false;

        this._stageContainer.removeChild(GuisSystemView.BGMask);

        

        //--exit event
    }


    /**
     * 旋轉完座位後
     * @param value 1-4
     * 20240307--不使用labelContainer帶進來的layer..因為層級會被擋在下面
     * 原本是Canvas/PlayerNameText,需要跟著座位旋轉
     */
    public afterCoordinatesChange(value:number):void
    {
        return ;
        if(value==1 || value==2)
        {
            this._label.node.angle = math.toDegree(Math.PI);
        }
    }
 






    
  




}

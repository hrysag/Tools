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
import {Button, find,instantiate,Node,Label,Layers, UITransform, Size,HorizontalTextAlignment,VerticalTextAlignment,math} from 'cc';
import {log} from 'cc';
 
export class InGameMessageGuiView extends GuiBasic
{
    private _strprefab:string;

    private _stageContainer:Node;

    private _lableShowContainerNode:Node;//--這邊放所有的動態文字顯示(單獨一層容器)

    private _inGameMessageNode:Node;

    private _label:Label;//--這個要跟玩家訊息放在一起

    private _aryTips:{str:string,type?:string}[];

    private _lifeTime:number;//--second

    private _visibleForPriority:boolean;//--sys message是否顯示

    //---輪播停留的時間(訊息顯示的時間(秒))
    set lifeTime(value:number)
    {
        this._lifeTime=value;
    }

    
    constructor()
    {
        super();

        this._lifeTime=1.6;//---defult

        //--system msg顯示的話,ingame msg就不顯示,除非他關掉了
        this._visibleForPriority=false;
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

        this._aryTips=[];



        log('check_InGameMessageGuiView_',value);
        
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
            this._inGameMessageNode=instantiate(LoadingResManager.getInstance().getPrefab(this._strprefab));

            this.addChild(this._inGameMessageNode);

            let labelNode=new Node('inGameMessageLabelNode');

            labelNode.layer=Layers.Enum.UI_2D;

            let labelTransForm=labelNode.addComponent(UITransform);

            labelTransForm.contentSize=new Size(1400,115);

            labelTransForm.anchorX=labelTransForm.anchorY=.5;

            this._label=labelNode.addComponent(Label);

            this._label.horizontalAlign=HorizontalTextAlignment.CENTER;
            
            this._label.verticalAlign=VerticalTextAlignment.CENTER;

            this._label.fontSize=40;

            this._label.lineHeight=50;

            this._label.useSystemFont=true;

            this._label.fontFamily='Arial';

            this._label.isBold=true;
            
            
            this._lableShowContainerNode.addChild(labelNode);
            //--這邊要在處理旋轉的顯示!!!
            this._label.string='LLLLLLLLLLLLLLLLLLLLLLLLL';

            this.addComponent(TweenMaxCocosPlugin);

            this._stageContainer.addChild(this);

            this._label.node.active=false;

            this.active=false;
            //---完成的時候做
            resolve();

        });
    }

    public showGameMessage(message:string,type?:string):void
    {
        //--確認不重複內容即推入等待
        log('showMessage',message,type,this._aryTips);

        if(this.checkRepeatMessage(message))
        {
            
            this._aryTips.push({str:message,type:type});

            this.checkTips();
           
        }
      
    }

    //-----回過頭來刪掉訊息
    public removeMessages(messages:string[]):void
    {
        log('removeMessage',messages);
        
        for(let i:number=0;i<messages.length;i++)
        {
            for(let j:number=0;j<this._aryTips.length;j++)
            {
                if(this._aryTips[j].str==messages[i] || this._aryTips[j].type==messages[i])
                {
                    this._aryTips.splice(j,1);
                    j=j-1;
                }
                
            }
           
        }

    }

    /**
     * 
     * @param clean 是否要將尚未播送的訊息一併從陣列當中清除
     * PS-預設不會清除
     */
    public closeGameMessage(clean:boolean=false):void
    {
        let tweenComponent=this.getComponent(TweenMaxCocosPlugin);

        log('closeGameMessage',clean)
        
        if(TweenMax.isTweening(tweenComponent))
        {
            TweenMax.killTweensOf(tweenComponent);
            
            this._label.node.active=false;

            this.active=false;
            //--等待的陣列並不會清空
            if(clean)
            {
                this._aryTips=[];
            }

            //--關閉該則訊息,但是輪播當中還有訊息的話,需要繼續播下去20240321
            this.checkTips();
            
         
        }
    }

    /**
     * 
     * @param value systemmessage是否顯示
     * 有秀system messag 視窗就不會顯示
     */
    public setVisibleForPriority(value:boolean):void
    {
        this._visibleForPriority=value;

        let tweenComponent=this.getComponent(TweenMaxCocosPlugin);

        //--現在在運作中
        if(TweenMax.isTweening(tweenComponent))
        {
            let flag:boolean=(this._visibleForPriority)?false:true;

            this._label.node.active=flag;

            this.active=flag;
        }

    }
    

    /**
     * 旋轉完座位後
     * @param value 1-4
     */
    public afterCoordinatesChange(value:number):void
    {
        if(value==1 || value==2)
        {
            this._label.node.angle = math.toDegree(Math.PI);
        }
    }


    public resetCoordinatesChange():void
    {
        this._label.node.angle = 0;
    }

    private runTips():void
    {
        let tweenComponent=this.getComponent(TweenMaxCocosPlugin);

        log('runTips',this._lifeTime);
        
        TweenMax.to(tweenComponent,this._lifeTime,
        {
            onComplete:()=>
            {
                this.checkTips();
            }
        })

    }
    

    private showTipsforGameMessage():void
    {
        let tipsObj:{str:string,type?:string}=this._aryTips.shift();

        this._label.string=tipsObj.str;

        log('show_ingameMessage',tipsObj,this._visibleForPriority);
        
        if(!this._visibleForPriority)
        {
            this._label.node.active=true;

            this.active=true;
        }
        

        //this._trumpetImg.visible=false;
        //this._textFieldforGameMessage.x=(this.width-this._textFieldforGameMessage.width)/2;
        //this._textFieldforGameMessage.y=(this.height-this._textFieldforGameMessage.height)/2;
       
        this.runTips();
    }

    private testMessage():void
    {
        log('check_testMessage');

        for(let i of this._aryTips)
        {
            log('testMessage',i);
        }
    }

    private checkTips():void
    {
        let tweenComponent=this.getComponent(TweenMaxCocosPlugin);

        this.testMessage();

        log('check_readyTips',this._aryTips.length,this._aryTips,TweenMax.isTweening(tweenComponent));

        if(!TweenMax.isTweening(tweenComponent))
        {
            
            this._label.node.active=false;

            this.active=false;
            
            if(this._aryTips.length>0)
            {
                
                //this._awardAnnouncementGui.visible=false;
                this.showTipsforGameMessage();

            }
            
        }
        
        
    }

    private checkRepeatMessage(message:string):boolean
    {
        let r:boolean=true;

        let len:number=this._aryTips.length;
        
        for(let i:number=0;i<len;i++)
        {
            if(this._aryTips[i].str==message)
            {
                r=false;
                break;
            }
        }

        return r;
    }

}
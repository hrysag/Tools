/**
 * Created by EricHuang on 2023/9/28.
 */
import { GuiBasic } from '../../../../framework/game/guiCore/GuiBase';
import { GuiOption } from '../../../../framework/game/guiCore/GuiDefinitionsBase';
import { LoadingResManager } from '../../../../framework/logic/loading/LoadingResManager';
import {TweenMaxCocosPlugin} from '../../../../framework/utils/TweenMaxPlugin';
import {GUIEvent} from '../../../../framework/game/events/eventBase';
import {Notifycation} from '../../../../framework/abstract/mvvm/Notifycation';
import { GuiNotifycationSubbscriptionSubject } from '../../../../framework/game/guiCore/GuiDefinitionsBase';
import {GameUtils} from '../../../../framework/utils/GameUtils';
import {CocosGameSetting} from '../../../../framework/utils/CocosGameSetting';
import {Digits} from '../../../../framework/utils/Digits';
import {Node,find,instantiate,Toggle, Button, UITransform,v3, Size, Component,Layers,SpriteFrame, Layout, Vec3} from 'cc';
import { SoundsManager } from '../../../../framework/logic/audio/SoundsManager';
import {log} from 'cc';

export class Fish1MenuGuiView extends GuiBasic
{
    //--裝載全部的GUI的node
    private _menuStage:Node;
    //--側拉選單
    private _sideContentContainer:Node;

    private _aryBtn:{id:string,type:string,node:Node,btn:Button|Toggle}[];

    private _menuBackBtn:Node;

    private _menuToolBtn:Node;

    private _isSound:boolean;

    private _ratioDigits:Digits;
    
    private _ogPosition:Vec3;

    get ogPosition():Vec3
    {
        return this._ogPosition;
    }

    constructor()
    {
        super();

        this._aryBtn=[];

        this._menuBackBtn=null;

        this._menuToolBtn=null;

        this._isSound=true;
    }

    

    /**
     * step1.
     * overrite it
     * @param value guiData before layout
    */
    public setData(value:GuiOption):void
    {
        super.setData(value);
        this._menuStage=find(value.other);    
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
            //--啟動按鈕
            this._menuToolBtn=instantiate(LoadingResManager.getInstance().getPrefab('prefab/gui/settingBtn'));

            this._menuToolBtn.addComponent(TweenMaxCocosPlugin);

            this._menuStage.addChild(this._menuToolBtn);

            this._ogPosition=v3(this._menuToolBtn.position.x,this._menuToolBtn.position.y);
            
            this._menuToolBtn.active=true;

            this._menuToolBtn.getComponent(Toggle).interactable=false;


            this._menuToolBtn.setPosition(v3(this._ogPosition.x-200,this._ogPosition.y));

            //--展開工具bar
            this._sideContentContainer=instantiate(LoadingResManager.getInstance().getPrefab('prefab/gui/settingBar'));
            
            this._sideContentContainer.addComponent(TweenMaxCocosPlugin);
             
            
            this._menuStage.addChild(this._sideContentContainer);

            //----rd7沒有deposit功能(會員儲值)
            
            //let aryTextures:string[]=['soundBtn','exchangeBtn','historyBtn','ruleBtn','exitBtn'];

            let defultType=[
                
                {type:GUIEvent.BTN_MUTE,id:'soundBtn'},

                {type:GUIEvent.BTN_EXCHANGE,id:'exchangeBtn'},
                
                {type:GUIEvent.BTN_HISTORY,id:'historyBtn'},
                
                {type:GUIEvent.BTN_HELP,id:'ruleBtn'},
                
                {type:GUIEvent.BTN_EXIT,id:'exitBtn'}
            ];
            let len:number=defultType.length;

            log('check_menuBarNode',this._sideContentContainer);

            let node:Node;
            
            //let btnToggle:Toggle;
             
            let btn:Button|Toggle;

            for(let i:number=0;i<len;i++)
            {
                node=this._sideContentContainer.getChildByName(defultType[i].id);
                log('check_btn',node);

                
                if(i==0)
                {
                    btn=node.getComponent(Toggle);

                    node.on(Toggle.EventType.CLICK,this.btnEventHandler);


                }else{
                   
                   
                    
                    btn=node.getComponent(Button); 

                    if(node.name=='exchangeBtn')
                    {
                        let ratioNode:Node=new Node('ratioNode');

                        ratioNode.layer=Layers.Enum.UI_2D;

                        this._ratioDigits=ratioNode.addComponent(Digits);
                        
                        ratioNode.addComponent(UITransform);

                        //ratioNode.addComponent(BlockInputEvents);

                        let digitsTextures:SpriteFrame[]=LoadingResManager.getInstance().getSpriteFrames('fnt_arialBd24_').sort(GameUtils.sortDigitsSpriteFrames);
                    
                        log('digitsTextures',digitsTextures);

                        this._ratioDigits.textures=digitsTextures;
                        
                        this._ratioDigits.symbolStr=[':','K'];
        
                        this._ratioDigits.symbolIndex=[12,13];

                        node.addChild(ratioNode);

                        this.updateRatio('1000:1');

                        ratioNode.setPosition(v3(ratioNode.position.x,ratioNode.position.y-digitsTextures[0].originalSize.height));

                    }

                    node.on(Button.EventType.CLICK,this.btnEventHandler);
                }

                btn.interactable=false;

                node['type_status']=defultType[i].type;

                this._aryBtn[i]={
                    id:defultType[i].id,
                    type:defultType[i].type,
                    node:node,
                    btn:btn
                };   
            }

            //---收合按鈕
            this._menuBackBtn=this._sideContentContainer.getChildByName('closeBtn');
            
            this._menuBackBtn.active=false;

            this._menuBackBtn.on(Button.EventType.CLICK,this.btnEventHandler);
            

            let dis=this._sideContentContainer.position.x-this._sideContentContainer.getComponent(UITransform).contentSize.width;

            this._sideContentContainer.setPosition(v3(dis,this._sideContentContainer.position.y));

            log('check_menuToolBarPos',this._sideContentContainer.position);
            
            this._sideContentContainer.active=false; 


            this._menuToolBtn.on(Toggle.EventType.CLICK,this.btnEventHandler);
            
            //EXIT_OPTION_STATUS.type=3;
            //this.setMenuStatus();//--test
            //---完成的時候做
            resolve();

        });
    }

    private btnEventHandler=(e)=>
    {
       log('hello_menuBtn',e);

       //let cocosMax:TweenMaxCocosPlugin;

       SoundsManager.getInstance().play('sounds/button');

       switch(e.node.name)
       {
            case'settingBtn':

                this.openMenu();  
               
            break;

            case'closeBtn':
                
                this.closeMenuBar();

            break;

            case'soundBtn':
            case'exchangeBtn':
            case'historyBtn':
            case'ruleBtn':
            case'exitBtn':
              let type:string=e.node['type_status'];
              let sendObj=null;
              log('menubar_tools',e.node['type_status']);
              if(e.node['type_status']==GUIEvent.BTN_MUTE)
              {
                //let c:Toggle=e.node.getComponent(Toggle);
                //--checked=false-->未觸發,true--->觸發
                this._isSound = !this._isSound;

                sendObj=this._isSound;
                //log('soundBtn_checked',c.isChecked);
              }else if(e.node['type_status']==GUIEvent.BTN_EXCHANGE)
              {
                //-OPEN_EXCHANGE
                type=GUIEvent.OPEN_EXCHANGE;
              }

              Notifycation.getInstance().emitSync(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,type,sendObj);

            break;
       }
       
       

    }
    
   

    private activeBtn(value:boolean):void
    {
        for(let i of this._aryBtn)
        {
           i.btn.interactable=value;
        }
    }

    private getBtn(index:string):Node
    {
        let c:Node=null;
        let len:number=this._aryBtn.length;
        
        for(let i:number=0;i<len;i++)
        {
            //let cc=this._aryBtn[i].btn;
            if(this._aryBtn[i].type==index)
            {
                c=this._aryBtn[i].node;
                break;
            }
        }

        return c;
    }



    private removeBtnData(index:string):void
    {
        let c:Node=null;
        let len:number=this._aryBtn.length;
        let btn:Button | Toggle;
        for(let i:number=0;i<len;i++)
        {            
            if(this._aryBtn[i].type==index)
            {
                c=this._aryBtn[i].node;

                btn=this._aryBtn[i].btn;
                
                if(btn instanceof Toggle)
                {

                    c.off(Toggle.EventType.CLICK,this.btnEventHandler);

                }else
                {
                    c.off(Button.EventType.CLICK,this.btnEventHandler);
                }

                this._aryBtn.splice(i,1);
                break; 
            }
        }

       
    }


    public openMenu():void
    {
        //--啟動按鈕  
        this._menuToolBtn.getComponent(Toggle).interactable=false;
            
        this._menuToolBtn.active=false;

        let cocosMax:TweenMaxCocosPlugin=this._sideContentContainer.getComponent(TweenMaxCocosPlugin);

        this._sideContentContainer.active=true; 

        TweenMax.to(cocosMax,.1,{
            x:-960,
            onComplete:()=>
            {
                this._menuBackBtn.active=true;

                this.activeBtn(true);
                //this._menuBackBtn.interactive=true;
                //this._sideContentContainer.interactive=false;
            }
        });
    }

    public closeMenuBar():void
    {
        this._menuBackBtn.active=false;
               
        this.activeBtn(false);

        let dis=this._sideContentContainer.position.x-this._sideContentContainer.getComponent(UITransform).contentSize.width;
        
        let cocosMax:TweenMaxCocosPlugin=this._sideContentContainer.getComponent(TweenMaxCocosPlugin);
        
        TweenMax.to(cocosMax,.1,{
            x:dis,
            onComplete:()=>
            {
                
                this._menuToolBtn.active=true;

                this._menuToolBtn.getComponent(Toggle).interactable=true;
            
                this._sideContentContainer.active=false;
                
            }
        });
    }

    //--等待美術完成切好數字圖片
    public updateRatio(baseRatio:string):void
    {
        //baseRatio='2500:1';
        let ary:string[]=baseRatio.split(":");

        //log("updateRatio>>>>>>"+baseRatio,ary,GameUtils.repK(ary[0]));
        
        if(baseRatio=='')
        {
            //--noexchange時,關閉比例
            this._ratioDigits.node.active=false;
            //this._ratioDigits.visible=false;
            //this._foNoExchangeItem.visible=true;
            
        }else{

            this._ratioDigits.node.active=true;
            //this._foNoExchangeItem.visible=false;
            //this._ratioDigits.visible=true;
            this._ratioDigits.displayWithStr(GameUtils.repK(ary[0])+':'+GameUtils.repK(ary[1]) ,'center');
        }


    }

    /**
     * 
     * @param value base(比例資料,需要顯示在按鈕上面)
     */
    public setRatioBase(value:string):void
    {
        this.updateRatio(value);
    }

    public lockExchangeBtn(b:boolean):void
    {
        for(let i of this._aryBtn)
        {
            if(i.type==GUIEvent.BTN_EXCHANGE)
            {
               i.btn.interactable=b;
               
               break;
            }
           
        } 
         
    }

    public getCompontItem(id:string):Component
    {
        let r:Component; 
        
        if(id=='_menuToolBtn')
        {
            r=this._menuToolBtn.getComponent(TweenMaxCocosPlugin);
        }

        return r;
    }

    //--廳主機八要隱藏某些按鈕
    public setMenuStatus():void
    {
        
        let scaleValue:number=1;//--(exitoption=3 & mobile device)
        
        let btn:Node; 
        
        /*
        CommandStr.EXIT_OPTION_STATUS=3;
        this._isCash=true;
        */
        if(CocosGameSetting.Game_ExitOption==3)
        {
            //--關閉離開按鈕
            btn=this.getBtn(GUIEvent.BTN_EXIT);

            this._sideContentContainer.removeChild(btn);
            
            this.removeBtnData(GUIEvent.BTN_EXIT);  
            
            scaleValue=0.83;//-預設
                    
        }
        /*
        if(!this._isCash || DeviceAndEnvironment.Device.isMobile())
        {
            let btnDeposit:PIXI.Container=this.getBtn(GuiCore.GUIEvent.BTN_DEPOSIT);
            this._sideContentContainer.removeChild(btnDeposit);//---儲值按鈕
            this.removeBtnData(GuiCore.GUIEvent.BTN_DEPOSIT);
            
            btn=this.getBtn(GuiCore.GUIEvent.BTN_EXIT);
            if(btn!=null)
            {
                btn.y = btnDeposit.y;
                scaleValue=0.83;//-預設
                

            }else{
                
                scaleValue=0.7;
            }
            
        }*/
         
        let uiTrannsForm:UITransform=this._sideContentContainer.getComponent(UITransform);
        
        let ogContentSize=uiTrannsForm.contentSize;

        uiTrannsForm.contentSize=new Size(ogContentSize.width,ogContentSize.height*scaleValue);

        let btnContentSize=this._aryBtn[0].node.getComponent(UITransform).contentSize.height;

        
        let value:number=0;

        let spacing:number=60;

        let starIndex:number=240;

        for(let i:number=0;i<this._aryBtn.length;i++)
        {
            value=starIndex-(btnContentSize*i)-spacing;
           
            this._aryBtn[i].node.setPosition(v3(this._aryBtn[i].node.position.x,value))
        }
         
    }
         


}
/**
 * Created by EricHuang on 2023/8/02.
 */
import { GuiBasic } from '../../../../framework/game/guiCore/GuiBase';
import { GuiOption } from '../../../../framework/game/guiCore/GuiDefinitionsBase';
import { LoadingResManager } from '../../../../framework/logic/loading/LoadingResManager';
import {GUIEvent} from '../../../../framework/game/events/eventBase';
import {Notifycation} from '../../../../framework/abstract/mvvm/Notifycation';
import { GuiNotifycationSubbscriptionSubject } from '../../../../framework/game/guiCore/GuiDefinitionsBase';
import {GameUtils} from '../../../../framework/utils/GameUtils';
import {TweenMaxCocosPlugin} from '../../../../framework/utils/TweenMaxPlugin';
import { AudioSource, instantiate, Size, UITransform } from 'cc';
import { find } from 'cc';
import { Node } from 'cc';
import { Label } from 'cc';
import { Button } from 'cc';
import { Material } from 'cc';
import { Component } from 'cc';
import { SpriteFrame } from 'cc';
import { Sprite } from 'cc';
import { Color,color } from 'cc';
import { Layout } from 'cc';
import {log} from 'cc';
//--test--
import {BasicSound} from '../../../../framework/logic/audio/BasicSound'
import { SoundsManager } from '../../../../framework/logic/audio/SoundsManager';
import {GuisSystemView} from '../../../../framework/logic/views/guisSystemView/GuisSystemView';
import { Digits } from '../../../../framework/utils/Digits';

export class BtnExchangeMoney extends Component
{
    public id:number;
    public money:number;
    //public label:Label;
    public label:Digits;
    public labelDisable:Digits;
    public lastChoose:Node;
    private _btn:Button;
    //private _grayMaterial:Material;
    
    
    constructor()
    {
      super();
      this.id=-1;
      this.money=-1;
      this.label=null;
      this.labelDisable=null;
      this.lastChoose=null;
      //this._grayMaterial=null;
    }

    /*
    public setData(value:{id:number}):void
    {

    }*/



    protected onLoad(): void
    {
        //--lastChoose--這個要補
        let lableSpriteFrames=LoadingResManager.getInstance().getSpriteFrames('num_denom_').sort(GameUtils.sortDigitsSpriteFrames);

        this.label=this.node.getChildByName('label').addComponent(Digits);

        this.label.resizeMode=Layout.ResizeMode.NONE;

        this.label.useCommand=false;

        this.label.textures=lableSpriteFrames;

        let labelDisableSpriteFrames=LoadingResManager.getInstance().getSpriteFrames('num_denomGray_').sort(GameUtils.sortDigitsSpriteFrames);        
        
        this.labelDisable=this.node.getChildByName('labelNo').addComponent(Digits);

        this.labelDisable.resizeMode=Layout.ResizeMode.NONE;

        this.labelDisable.useCommand=false;

        this.labelDisable.textures=labelDisableSpriteFrames;

        
        this._btn=this.node.getComponent(Button);
         

        this.lastChoose=this.node.getChildByName('light');

        this.lastChoose.active=false;

        /*
        this._grayMaterial=this.label.customMaterial;
        this.label=this.node.getChildByName('label').getComponent(Label);
        //let test=Material.get
        //-efe8e2a3-eace-427b-b4f1-cb8a937ec77d
        //-Sprite.grayscale:boolean (灰階)
        if(this.money>-1)
        {
            this.label.string=GameUtils.addCommas(this.money+'');
            log('check_default',this.label.customMaterial);
        }*/

       
    }

    

    //--改變滑鼠的狀態
    public setMouseStatus(value:boolean):void
    {
        if(value)
        {
           //--開啟滑鼠的狀態(可選) 
           //this.label.color=color(255,255,255,255);
           //this.label.customMaterial=null;
           
           this.label.node.active=true;
        
           this.labelDisable.node.active=false;
   
           this._btn.interactable=true;
   
           

        }else{
            
            //-https://ithelp.ithome.com.tw/m/articles/10271416

            this.label.node.active=false;
        
            this.labelDisable.node.active=true;

            this._btn.interactable=false;//--這邊就會自動把按鈕切換到disable的狀態
            //this.label.color=color(128,128,128,255);//--這樣改不夠灰
            
            /**
             * 可以透過uuid去抓到
             * this._grayMaterial=assetManager.assets.get('efe8e2a3-eace-427b-b4f1-cb8a937ec77d') as Material;
             */
            //this.label.customMaterial=this._grayMaterial;//-預設值=null
             
        }    
    }


    public setBtnActive(value:boolean):void
    {
        this.node.active=value;
    }

    public setDigits(value:number):void
    {
        //log('check_digitsUiTransForm_label',this.label.node.getComponent(UITransform).contentSize);
        //log('check_digitsUiTransForm_labelDisable',this.labelDisable.node.getComponent(UITransform).contentSize);
        //log('check_digitsUiTransForm_Node',this.label.node);

        //this.label.node.getComponent(UITransform).contentSize=new Size(220,80);

        this.label.display(value,'center');

        //this.labelDisable.node.getComponent(UITransform).contentSize=new Size(220,80);

        this.labelDisable.display(value,'center');
    }  


}

export class Fish1CreditExchangeGuiView extends GuiBasic
{

    private _exchangelist:number[];//換分按鈕可以換的金額
    private _changeAuto:boolean;//是否自動換分
    private _balance:number;//可用餘額
    private _credit:number;//兌換分數---玩家當前持有的遊戲分數(遊戲幣credit)
    private _lastExchange:number;//最後一個點的兌換金額
    private _exchange:number;//---注意!這邊用來表示玩家在面板中操作多少錢
    private _theMaxChange:number; //最大兌換分數
    private _balanceTx:Digits;
    private _creditTx:Digits;
    private _ratioTx:Digits;
    private _changeRatio:number; //兌換比例 ex: 1000:1 => 1000/1
    private _base:string; //所有兌換比例
    private _nowBase:string; //目前的兌換比例
    private _limitBalance:number;//---玩家最多可以換到的金額
    private _lastChoose:number;//--上一個選擇的分數按鈕
    private _aryExchangeBtns:BtnExchangeMoney[];

    //private _creditExchange:Node;
    private _container:Node;
    //private _toggle:Toggle;---太肥又麻煩
    private _toggle:Sprite;
    private _toggleTexture:{on:SpriteFrame,off:SpriteFrame};
    private _labelAutoExchange:Sprite;
    private _autoExchangeSencorZone:Node;
    private _firstOpenFlag:boolean;
    private _enterGameBtn:Node;
    private _exitGameBtn:Node;
    

    /*
    set active(isActive: boolean)
    {
        this.active= isActive;
    }*/
    /*
        ---特殊的規則-for捕魚-
        每次開啟的時候,若玩家持有餘額超過上限50萬,依然開啟換分選項給他
    */

    set balance(value:number)
    {  
        this._balance = value;        
    }

    set credit(value:number)
    {
        this._credit = value;
    }

    //--set ratio
    set base(n:string)
    {
            
        this._base = n;
        this._nowBase=n;
        this.setChangeRatio();
        /*
        let ary:string[] = n.split(':');
        n = ary[0] +  "," + ary[1];
        this._denomTx.displayWithStr(n , 'right');
        this._multiple = Number(ary[0]) / Number(ary[1]);
        log("set denom",n,this._multiple);
        */
    }

    get changeRatio():number
    {
        return this._changeRatio;
    }

    set changeAuto(value:boolean)
    {
            
        this._changeAuto = value;
        this.changeAutoState();
    }



    constructor()
    {
        super();
        this._exchange=0;
        this._credit=0;
        this._nowBase="1:1";
        this._base="1:1";
        this._balance=0;
        this._theMaxChange=500000;//---最大兌換分數限制
        this._changeRatio=1;
        this._changeRatio = parseInt(this._nowBase.split(":")[0]) / parseInt(this._nowBase.split(":")[1]);
        this._limitBalance=0;
        this._lastChoose=-1;
        this._lastExchange=0;
        this._exchangelist=[0,500,5000,50000];
        this._aryExchangeBtns=[];
        this._changeAuto=true;//--自動換分預設為true
        this._toggle=null;//--creator的核取按鈕組件
        this._autoExchangeSencorZone=null;
        this._toggleTexture={on:null,off:null};
        this._firstOpenFlag=false;//--第一次進場的表演
        this._container=null;//--這邊要給特定的layer
    }

    public setData(value:GuiOption):void
    {
        log('creditExchangeView_setData',value);

        this._container=find(value.other);
        
        super.setData(value);
    }

    /**
     * step2.
     * overrite it
     */
    public init():void
    {
        //--do something about initGuiData
    }

    //--override--step3
    //--layout ur gui
    public async setLayout(): Promise<void>      
    {
        return new Promise<void>((resolve)=>
        {
            
            let creditExchange:Node=instantiate(LoadingResManager.getInstance().getPrefab('prefab/gui/creditExchange'));
            
            let wholeContentWithoutBg:Node=creditExchange.getChildByName('exchange');
            
            log('_creditExchangeNode',creditExchange);

            //let lableNode:Node=wholeContentWithoutBg.getChildByName('label');

            let titleSpriteFrame=LoadingResManager.getInstance().getSpriteFrames('tx_creditexchange')[0];

            wholeContentWithoutBg.getChildByName('titletx').getComponent(Sprite).spriteFrame=titleSpriteFrame;

            let titleBalanceSpriteFrame=LoadingResManager.getInstance().getSpriteFrames('tx_Balance')[0];

            wholeContentWithoutBg.getChildByName('labelL0').getComponent(Sprite).spriteFrame=titleBalanceSpriteFrame;

            let titleExchangeSpriteFrame=LoadingResManager.getInstance().getSpriteFrames('tx_Exchange')[0];

            wholeContentWithoutBg.getChildByName('labelL1').getComponent(Sprite).spriteFrame=titleExchangeSpriteFrame;

            let titleRatioSpriteFrame=LoadingResManager.getInstance().getSpriteFrames('tx_Denom')[0];

            wholeContentWithoutBg.getChildByName('labelL2').getComponent(Sprite).spriteFrame=titleRatioSpriteFrame;


            let autoExchangeBtnTitleSpriteFrame=LoadingResManager.getInstance().getSpriteFrames('tx_AutoExchangeCredits')[0];

            //wholeContentWithoutBg.getChildByName('autoExchange').getChildByName('label').getComponent(Sprite).spriteFrame=autoExchangeBtnTitleSpriteFrame;
            this._labelAutoExchange=wholeContentWithoutBg.getChildByName('autoExchangelabel').getComponent(Sprite);

            this._labelAutoExchange.spriteFrame=autoExchangeBtnTitleSpriteFrame;



            let digitsSpruteFrames:SpriteFrame[]=LoadingResManager.getInstance().getSpriteFrames('fnt_arialBd24_').sort(GameUtils.sortDigitsSpriteFrames);
            //--語系要另外處理
            this._balanceTx=wholeContentWithoutBg.getChildByName('labelR1').addComponent(Digits);
            
            this._balanceTx.textures=digitsSpruteFrames;

            this._balanceTx.useCommand=true;

            this._balanceTx.symbolStr=['-'];

            this._balanceTx.symbolIndex=[14];



            this._creditTx=wholeContentWithoutBg.getChildByName('labelR2').addComponent(Digits);
            
            this._creditTx.textures=digitsSpruteFrames;

            this._creditTx.useCommand=true;

            this._ratioTx=wholeContentWithoutBg.getChildByName('labelR3').addComponent(Digits);
            
            this._ratioTx.textures=digitsSpruteFrames;

            //this._ratioTx.useCommand=true;

            this._ratioTx.symbolStr=[':','K','-'];

            this._ratioTx.symbolIndex=[12,13,14];

            //log('check_exchangeDigits',digitsSpruteFrames,this._ratioTx);
            /*
            this._creditTx=lableNode.getChildByName('labelR2').getComponent(Label);
            
            this._ratioTx=lableNode.getChildByName('labelR3').getComponent(Label);
            */

            
           
    
    
            this._enterGameBtn=wholeContentWithoutBg.getChildByName('controlBtn').getChildByName('startBtn');
            
            let enterSpriteFrame=LoadingResManager.getInstance().getSpriteFrames('tx_Start')[0];

            wholeContentWithoutBg.getChildByName('startBtnlabel').getComponent(Sprite).spriteFrame=enterSpriteFrame;

            this._exitGameBtn=wholeContentWithoutBg.getChildByName('controlBtn').getChildByName('exitBtn');
            
            let exitSpriteFrame=LoadingResManager.getInstance().getSpriteFrames('tx_CashOutandExit')[0];

            wholeContentWithoutBg.getChildByName('exitBtnlabel').getComponent(Sprite).spriteFrame=exitSpriteFrame;
            


            this._enterGameBtn.on(Node.EventType.TOUCH_START,this.infoBtnHandler);
    
            this._exitGameBtn.on(Node.EventType.TOUCH_START,this.infoBtnHandler);
    
    
            //let autoExchangeBtnNode:Node=wholeContentWithoutBg.getChildByName('autoExchange');
            //log('autoExchangeBtnNode',autoExchangeBtnNode);
    
            
    
    
            //--這邊每次修改toggle.isChecked屬性,都會觸發toggle事件....
            //this._toggle=wholeContentWithoutBg.getChildByName('autoExchange').getChildByName('toggle').getComponent(Toggle);
            //this._toggle.interactable=false;//--因為toggle本身就是btn啦..你要讓他不隨著按鈕的反應作動應該禁止使用
            //this._toggle.node.on('toggle',this.autoExchangeBtnMouseHandler);
            //this._toggle.isChecked=false;
            this._toggle=wholeContentWithoutBg.getChildByName('autoExchange').getChildByName('toggleSpr').getComponent(Sprite);
            
            this._toggleTexture={on:this._toggle.spriteFrame,off:LoadingResManager.getInstance().getSpriteFrameFromSpriteAtlas('prefab/textures/fishHunterPopup','btn_switch_off') as SpriteFrame};
            
            log('check_toggle',this._toggleTexture);

            this._autoExchangeSencorZone=wholeContentWithoutBg.getChildByName('autoExchange');
            
            this._autoExchangeSencorZone.on(Node.EventType.TOUCH_START,this.autoExchangeBtnMouseHandler);
    
            
           
    
            this.addChild(creditExchange);
    
            this.addComponent(TweenMaxCocosPlugin);
    
    
            this._container.addChild(this);

            let btn:BtnExchangeMoney; 
            for(let i:number=0;i<this._exchangelist.length;i++)
            {
                btn=wholeContentWithoutBg.getChildByName('scoreSelect').getChildByName('score'+i).addComponent(BtnExchangeMoney);
                btn.money=this._exchangelist[i];
                btn.id=i;
                btn.setDigits(this._exchangelist[i]);
                //btn.node.addComponent(BlockInputEvents);
                //btn.node.on(Node.EventType.MOUSE_DOWN,this.creditExchangeBtnHandler);
                btn.node.on(Node.EventType.TOUCH_START,this.creditExchangeBtnHandler);
                
                //btn.setMouseStatus(false);
                this._aryExchangeBtns.push(btn);
            }

            this.active=false;

            resolve();


        });
        
        
        
    }

    //--do something after layout
    /**
     * override-step4
     * do something after layoutgui
     */
    public layoutComplete():void
    {
      log('finsih_initExchangeGui')
    }


    private setChangeRatio():void
    {
        this._changeRatio = parseInt(this._nowBase.split(":")[0]) / parseInt(this._nowBase.split(":")[1]);
            
        let n=this._nowBase;
        //--test-
        //n='1:50000';
        //- let ary:string[]=baseRatio.split(":");
        let ary:string[] = n.split(':');
        //n = ary[0] +  ":" + ary[1];
        //log('check_changeRatio',n);

            
        //this._ratioTx.string=GameUtils.repK(ary[0])+':'+GameUtils.repK(ary[1]);
        this._ratioTx.displayWithStr(GameUtils.repK(ary[0])+':'+GameUtils.repK(ary[1]),'right');
        
        
        //---test-20230417
        //this._ratioTx.alpha=.5;
        //this._multiple = Number(ary[0]) / Number(ary[1]);
        //log("set denom",n,'1_',this._nowBase,'_2_',this._multiple,'_3_',this._changeRatio);    
    }


    //--這邊啟動
    public updateOpenInfo(balance:number, credit:number,autoCredit:boolean):void
    {
        this._balance = balance;
        
        this._credit= credit;
        
        this._changeAuto = autoCredit;

       

        this.changeAutoState();

        if (this._exchange < 0)
        {
            this._exchange = 0;
        }

        this.reSetexChangePanel();

        log('updateOpenInfo',balance,credit,autoCredit,this._lastChoose,this._lastExchange);
        //-1283 1234567 true 1 500
        if(this._lastExchange>0 && this._lastChoose!=-1)
        {
            //--是否要幫玩家先預設先選好上一次換的錢了???
            //this._exchange = this._lastExchange;
            this.resetLastChooseImg();
             
            this._aryExchangeBtns[this._lastChoose].lastChoose.active=true;
        }

        this.openOrClose(true);
    }

    public checkExChangeShow():boolean
    {
        return this.active;
    }

    private openOrClose(f:boolean):void
    {
        let c:TweenMaxCocosPlugin=this.getComponent(TweenMaxCocosPlugin);
        
        if(f)
        {
            this.parent.addChild(GuisSystemView.BGMask);

            this.setScale(0,0,0);
        
            this.parent.insertChild(this,this.parent.children.length-1);
            log('check_parent',this.parent);

            this.active=true;

            TweenMax.to(c,.1,{
                
                scale:1,

                onComplete:()=>
                {
                    /**
                     * 20240424讓他強制重置btn的狀態
                     * (
                     * 因為使用者可能沒有完成over的動作下,面板就收起來了.
                     * 導致按鈕處在down的狀態下
                     * )
                     */
                    this._enterGameBtn.getComponent(Button).interactable=false;
    
                    this._exitGameBtn.getComponent(Button).interactable=false;
                    
                    this._enterGameBtn.getComponent(Button).interactable=true;
    
                    this._exitGameBtn.getComponent(Button).interactable=true;

                    if(!this._firstOpenFlag)
                    {
                        this._firstOpenFlag=true;

                        Notifycation.getInstance().emit(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.OPEN_EXCHANGE_FIRST);

                    }

                    
                }

            });

        }else{
            
            this.parent.removeChild(GuisSystemView.BGMask);

            TweenMax.to(c,.1,{
                
                scale:0,
                onComplete:()=>
                {
                    this.active=false;
                }
            });

        }
       

    }



    private changeAutoState():void
    {
      
        let sprTexture:SpriteFrame=(this._changeAuto)?this._toggleTexture.on:this._toggleTexture.off;
        
        this._toggle.spriteFrame=sprTexture;

        /*
        if(this._toggle.isChecked!=this._changeAuto)
        {
            //--改變核取的狀態
            this._toggle.isChecked=this._changeAuto;
        }*/

        log('changeAutoState',this._changeAuto);

        if(!this._changeAuto)
        {

            this._labelAutoExchange.color=color(208,208,208,128);

        }else{

            //log('checkColor',Color.WHITE);
            this._labelAutoExchange.color=Color.WHITE;
        }

    }


    //--auto exchange btnEvent
    private autoExchangeBtnMouseHandler=(e)=>
    {
        //log('check_toggle_evt',this._toggle.isChecked);
        SoundsManager.getInstance().play('sounds/button');
        //--可以透過toggle.isChecked來判斷現在核取的狀態
        this._changeAuto = !this._changeAuto;
        //this._toggle.isChecked=this._changeAuto;
        this.changeAutoState();
    }

    //--enter game or exit game btnEvent
    private infoBtnHandler=(e)=>
    {
        //log('check_infoBtnHandler',e.currentTarget.name);
        SoundsManager.getInstance().play('sounds/button');

        let sendObj:{exchangeRatio:string ,exchangeCredit:number , isAutoExchange:boolean , lastClick:number};
                    
        let evtType:string;
        
        if(e.currentTarget.name=='startBtn')
        {
            //---enter game
            sendObj ={
                
                exchangeRatio:this._nowBase , 

                exchangeCredit:this._exchange , 
                
                isAutoExchange:this._changeAuto,
                
                lastClick:this._lastExchange
            };

            evtType=GUIEvent.CREDIT_EXCHANGE_ENTER;

          

        }else{

            //--exit game
            sendObj=null;
            
            evtType=GUIEvent.CREDIT_EXCHANGE_EXIT;
        }

        this._exchange=0;

        let sendData=
        {
            type:evtType,
            sendObj:sendObj
        }

        this.openOrClose(false);
         
        //--這邊直接送server
        Notifycation.getInstance().emit(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,evtType,sendData);
        
      

    }

    //--btn mouseEventHandler
    private creditExchangeBtnHandler=(e)=>
    {
        log('check_clickEvt',e);
        SoundsManager.getInstance().play('sounds/button');
        //--注意!這個是btn的node送出來的事件,如果要在拿到btn相關的資料要在getComponent
        let target:BtnExchangeMoney=e.currentTarget.getComponent(BtnExchangeMoney);
        
        this._exchange +=target.money;
        
        this._lastExchange= target.money;
        
        this.resetLastChooseImg();
        
        this._lastChoose=target.id;

        this._aryExchangeBtns[this._lastChoose].lastChoose.active=true;

        this.reSetexChangePanel();
    } 

    //--設定最後一次兌換的金額按鈕顯示
    private resetLastChooseImg():void
    {
        let len:number=this._aryExchangeBtns.length;
        for(let i:number=0;i<len;i++)
        {
            this._aryExchangeBtns[i].lastChoose.active=false;
        }
    }

    private removeOrAddListen(index:number,interactable:boolean):void
    {
        if(this._aryExchangeBtns[index])
        {
            //this._aryExchangeBtns[index].node
            //if(this._aryExchangeBtns[index].node.hasEventListener(Node.EventType.MOUSE_DOWN,this.creditExchangeBtnHandler))
            if(this._aryExchangeBtns[index].node.hasEventListener(Node.EventType.TOUCH_START,this.creditExchangeBtnHandler))
            {
                //-btn.node.hasEventListener()
                //
                if(!interactable)
                {
                    //this._aryExchangeBtns[index].node.off(Node.EventType.MOUSE_DOWN,this.creditExchangeBtnHandler);
                    this._aryExchangeBtns[index].node.off(Node.EventType.TOUCH_START,this.creditExchangeBtnHandler);
                }

            }else{

                if(interactable)
                {
                    //this._aryExchangeBtns[index].node.on(Node.EventType.MOUSE_DOWN,this.creditExchangeBtnHandler);
                    this._aryExchangeBtns[index].node.on(Node.EventType.TOUCH_START,this.creditExchangeBtnHandler);
                }
            }
        }
    }

    /**
     * 只秀小數點最後兩位
     */
    private reSetexChangePanel():void
    {
        //this._creditTx.string=this._exchange+'';
        this._creditTx.display(this._exchange,'right');

        let exBalance:number=this.floatSubtraction(this._balance , this.floatMultipaction(this._exchange,this._changeRatio));

        let showBalance:string=exBalance.toString();

        let index:number=showBalance.indexOf(".");

        if(index!=-1)
        {
            if(showBalance[showBalance.length-1]=="0")
            {
                showBalance=showBalance.substring(0,showBalance.length-1);
                
                if(showBalance.substring(index,1)=="0")
                {
                    //--小數點後一位為0--去掉0
                    //this._balanceTx.string=showBalance.substring(0,showBalance.length-2);
                    
                    this._balanceTx.displayWithStr(showBalance.substring(0,showBalance.length-2),'right');

                }else{
                   
                    //--小數點後一位不為0(不去0,秀2位)
                    //this._balanceTx.string= showBalance.substring(0,showBalance.length-1);    

                    this._balanceTx.displayWithStr(showBalance.substring(0,showBalance.length-1),'right');
                }  


            }else{
                //--直接秀(最後一位不等於0)
                //this._balanceTx.string=showBalance.substring(0,showBalance.length);
                
                this._balanceTx.displayWithStr(showBalance.substring(0,showBalance.length),'right');
            }
        }else{
          //--整數
          //this._balanceTx.string=showBalance.substring(0,showBalance.length);
          log('check_minusValue',showBalance.substring(0,showBalance.length));

          this._balanceTx.displayWithStr(showBalance.substring(0,showBalance.length),'right');
        }

        this.allExBtnOpen();


        
        this._limitBalance=Math.floor(this.getRound(exBalance/ this._changeRatio,10));

        log('check__limitBalance',this._limitBalance);

        /**
         * 20240409 rd7在玩家balance為負值還是會送進來
         * PS-他們不檔玩家進遊戲
         */
       
        if(this._limitBalance>=0)
        {
            this._aryExchangeBtns[0].setDigits(this._limitBalance);//--正式打開20240402
        
            this._aryExchangeBtns[0].money=this._limitBalance;//--正式打開20240402
    
        }
        
       
        //this._aryExchangeBtns[0].setDigits(3);//--測試數據,正式關閉20240402
        //this._aryExchangeBtns[0].money=3;//--測試數據,正式關閉20240402
       

        //log('reSetexChangePanel::','this._balance::'+this._balance+'\n'+'exBalance::'+exBalance+'\n'+'this._exchange::'+this._exchange+'\n'+'this._changeRatio::'+this._changeRatio+'\n'+'showBalance::'+showBalance+'\n'+'index::'+index+'\n'+'this._limitBalance::'+this._limitBalance);

        this.setExBtnState();//---正式打開20240402

    }

    private setExBtnState():void
    {
        //return;
        let len:number=this._aryExchangeBtns.length;
        
        for(var i:number=0;i<len;i++)
        {
            if(i==0)
            {
                if(this._aryExchangeBtns[i].money<500)
                {
                   if(this._aryExchangeBtns[i].money>0)
                   {
                      this._aryExchangeBtns[i].setMouseStatus(true);
                      this.removeOrAddListen(i,true);
                      //this._aryExchangeBtns[i].setBtnActive(true);

                   }else{
                        
                        this._aryExchangeBtns[i].setMouseStatus(false);
                        this.removeOrAddListen(i,false);
                        this._aryExchangeBtns[i].setBtnActive(false); 
                   } 

                }else{
                   //---關閉玩家全部餘額的按鈕
                   this._aryExchangeBtns[i].setMouseStatus(false);
                   this._aryExchangeBtns[i].setBtnActive(false); 
                   this.removeOrAddListen(i,false);

                }
            }

            /*
            let f1=(this._theMaxChange - this._exchange < this._aryExchangeBtns[i].money)?true:false;
            let f2=(this._balance - this._exchange * this._changeRatio < this._aryExchangeBtns[i].money * this._changeRatio)?true:false;
            let f3=(this._exchange + this._credit > this._theMaxChange - this._aryExchangeBtns[i].money)?true:false;
            
            log('this._theMaxChange',this._theMaxChange,'\n','this._balance',this._balance,'\n','this._exchange',this._exchange,'\n','this._aryExchangeBtns[i].money',this._aryExchangeBtns[i].money,'\n','this._credit',this._credit,'\n',' this._changeRatio', this._changeRatio);
            log("check_status_",f1,f2,f3,this._aryExchangeBtns[i].money);
            */

            if( 
                this._theMaxChange - this._exchange < this._aryExchangeBtns[i].money ||
                this._balance - this._exchange * this._changeRatio < this._aryExchangeBtns[i].money * this._changeRatio ||
                this._exchange + this._credit > this._theMaxChange - this._aryExchangeBtns[i].money 
                //this._aryExchangeBtns[i].money==0
            )
            {
               //---lock
                this._aryExchangeBtns[i].setMouseStatus(false);
                this.removeOrAddListen(i,false);
                //log('close_'+this._aryExchangeBtns[i].money);

                
                

            }else{

                this._aryExchangeBtns[i].setMouseStatus(true);
                this.removeOrAddListen(i,true);
                //log('open_'+this._aryExchangeBtns[i].money);
                //this._aryExchangeBtns[i].setBtnActive(true);

                //log('setExBtnState__opennnn');
            }
        }
    }

    private allExBtnOpen():void
    {
        //return;
        let len:number=this._aryExchangeBtns.length;

        for(var i:number=0;i<len;i++)
        {
            this._aryExchangeBtns[i].setMouseStatus(true);
            this._aryExchangeBtns[i].setBtnActive(true);    
        }
    }

    private getRound(num:number, len:number):number
    {
        //log("getRound__"+(Math.round(num * Math.pow(10, len)) / Math.pow(10, len)));
        return Math.round(num * Math.pow(10, len)) / Math.pow(10, len);
    }

    /**20230328--這是nela 搞得
    * 為了避免減法出現浮點數錯誤
    * @param arg1 
    * @param arg2 
    */
    private floatSubtraction(arg1, arg2):number
    {
        let r1, r2, m, n;
        try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
        try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
        m = Math.pow(10, Math.max(r1, r2));
        n = (r1 >= r2) ? r1 : r2;
        return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
    }


    /**20230328--這是nela 搞得
    * 為了避免乘法出現浮點數錯誤
    * @param arg1 
    * @param arg2 
    */
    private floatMultipaction(arg1, arg2):number
    {
        let m=0,s1=arg1.toString(),s2=arg2.toString(); 
        try{
            m+=s1.split(".")[1].length;
        
        } catch(e){} 
        
        try{
            m+=s2.split(".")[1].length;
        } catch(e){} 
        
        return Number(s1.replace(".",""))*Number(s2.replace(".",""))/ Math.pow(10, m);
    }



}
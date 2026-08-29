/**
 * Created by EricHuang on 2023/9/28.
 */
import { GuiBasic } from '../../../../framework/game/guiCore/GuiBase';
import { OddsInfo } from '../../../../framework/game/model/ModelDefinitionsBase';
import { GuiOption } from '../../../../framework/game/guiCore/GuiDefinitionsBase';
import {TweenMaxCocosPlugin} from '../../../../framework/utils/TweenMaxPlugin';
import { LoadingResManager } from '../../../../framework/logic/loading/LoadingResManager';
import {GUIEvent} from '../../../../framework/game/events/eventBase';
import {Notifycation} from '../../../../framework/abstract/mvvm/Notifycation';
import { GuiNotifycationSubbscriptionSubject } from '../../../../framework/game/guiCore/GuiDefinitionsBase';
import {GameUtils} from '../../../../framework/utils/GameUtils';
import {CocosGameSetting} from '../../../../framework/utils/CocosGameSetting';
import {Digits} from '../../../../framework/utils/Digits';
import {Node,find,instantiate,Toggle, UITransform,v3, Size,SpriteFrame, Button, Animation, Vec3} from 'cc';
import {Component} from 'cc';
import {Color,color} from 'cc';
import {Sprite} from 'cc';
import {log} from 'cc';
import { PropType } from '../../../model/Fish1ModelDefinitions';
import { GuisSystemView } from '../../../../framework/logic/views/guisSystemView/GuisSystemView';
import { SoundsManager } from '../../../../framework/logic/audio/SoundsManager';

export enum OddsData
{
    ODDS_LOW='odds_low',
    ODDS_MEDIUM='odds_medium',
    ODDS_HIGH='odds_high',
    ODDS_BOSS='odds_boss'
} 


export class OddsBtnInfo extends Component
{
  
  public _isCanHit:boolean;

  public odds:string;  

  public atkPriority:number;
  
  public isChoose:boolean;
  
  public id:number;
  
  public oddsStatus:string;

  private _choiceImg:Node;

  private _status:number;

  private _btnName:string;

  constructor()
  {
    super();

    this._isCanHit=true;

    this.isChoose=false;

    this.oddsStatus='';

    this.odds='';

    this.id=-1;

    this.atkPriority=-1;

    this._status=-1;

  }

  public init(name:string,id:number,):void
  {
    this._choiceImg=this.node.getChildByName('select');

    this._choiceImg.active=false;

    this.id=id;

    this._btnName=name;

    //this.setIsCanHit(false);

    this.node.getComponent(Toggle).disabledColor=Color.BLACK;

    this.node.on(Toggle.EventType.CLICK,this.oddsBtnEventHandler);

  }

  public setOdds(odds:string,isCanHit:boolean):void
  {
     
    this.odds=odds;

    this._isCanHit=isCanHit;

    this.node.getChildByName('label').getComponent(Digits).displayWithStr('x'+odds,'center');

    this.oddsStatus=this.checkOddsStaus(odds);

    log('check_btnNode',this.oddsStatus);
  }


  protected onLoad():void
  {
    
  }

  public select():void
  {
    if(!this._choiceImg.active)
    {
      this.changestatus();
    }
    
  }

  public clean():void
  {
    if(this._choiceImg.active)
    {
      this.changestatus();
    } 
  }

  public setIsCanHit(value:boolean):void
  {
    //return;
    this._isCanHit=value;

    
    //this._btn.interactive=value;
    //this._btn.setMouseStatus(value);
    
    if(this._isCanHit)
    {
      //---變回原色
      //this._imgItem.tint=16777215;
      //this._lockImg.visible=false;
      //this.node.getComponent(Toggle).enabled=false;
      this.node.getComponent(Toggle).interactable=false;
    
    }else{
      
      //----反灰  
      //this._imgItem.tint=0x444444;
      //this._lockImg.visible=true;
      this.node.getComponent(Toggle).interactable=false;
    }
  }

  private oddsBtnEventHandler=(e)=>
  {
    log('oddsBtnEventHandler',e,e.node.name);

    SoundsManager.getInstance().play('sounds/button');
    
    this.changestatus();
      
    this.node.emit('setOddsEvt',{type:'setOddsEvt',sendObj:this._status}); 
  } 

  private checkOddsStaus(odds:string):string
  {
    let r:string='';

    let ary=odds.split('~');

    log('check_oddsValue',ary);
    let len:number=ary.length;

    let target:number=0;

    for(let i:number=0;i<len;i++)
    {
        target=Number(ary[i]);

        if(target<=10)
        {
          r=OddsData.ODDS_LOW; 

        }else if(target>10 && target<=50)
        {
          r=OddsData.ODDS_MEDIUM;

        }else if(target>50 && target<=200)
        {
          r=OddsData.ODDS_HIGH;

        }else if(target>=500)
        {
          r=OddsData.ODDS_BOSS;
        } 
    } 
    return r;

  }

  private changestatus():void
  {
      this._status*=-1;  

      this.isChoose=!this.isChoose;

      this._choiceImg.active=this.isChoose;
      //--this.isChoose=true 被選取
      //log('check_isChoose',this.id,this.isChoose);
      //---PS--20230323-底層的touchend事件失效...
      /*
      if(DeviceAndEnvironment.Device.isMobile() && !this.isChoose)
      {
          this._btn.forceBtnOut();
      }*/
      
  }


}

export class OddsPropBtn extends Component
{
  private _choiceImg:Node;

  private _status:number;

  public isChoose:boolean;

  public id:number;//--proptype
  
  constructor()
  {
    super();

    this._status=-1;
  }

  public init():void
  {
    this._choiceImg=this.node.getChildByName('on');

    this._choiceImg.active=false;

    this.node.getComponent(Toggle).enabled=false;

    this.node.on(Toggle.EventType.CLICK,this.propBtnEventHandler);

  }

  public setEnabled(value:boolean):void
  {
    this.node.getComponent(Toggle).enabled=value;

    if(!value)
    {
      this.clean();
    }
  }

  public select():void
  {
    if(!this._choiceImg.active)
    {
      this.changestatus();
    }
    
  }

  public clean():void
  {
    if(this._choiceImg.active)
    {
      this.changestatus();
    } 
  }

  private propBtnEventHandler=(e)=>
  {
    log('propBtnEventHandler',e,e.node.name);

    SoundsManager.getInstance().play('sounds/button');
    
    this.changestatus();
      
    this.node.emit('setPropEvt',{type:'setPropEvt',sendObj:{status:this._status,propType:this.id}}); 

  } 

  
  private changestatus():void
  {
      this._status*=-1;  

      this.isChoose=!this.isChoose;

      this._choiceImg.active=this.isChoose; 
      
  }

}

export class AutoShootAndAimBtn extends Component
{
    public id:string;

    private _useingImage:Sprite;

    private _animation:Animation;

    private _aniNode:Node;

    private _status:number;

    private _useImgFlag:boolean;

    private _setInterval;

    private _strAniNode:string;

    private _ogPosition:Vec3;

    set useImgFlag(value:boolean)
    {
      this._useImgFlag=value;
    }

    set strAniNode(value:string)
    {
      this._strAniNode=value;
    }

    set ogPosition(value:Vec3)
    {
      this._ogPosition=v3(value.x,value.y);
    }

    get ogPosition():Vec3
    {
      return this._ogPosition;
    }

    constructor()
    {
      super();

      this.id='';

      this._status=-1;

      this._strAniNode='';

      this._useImgFlag=false;

    }

    public init():void
    {
      this._setInterval=window.setInterval(()=>
       {
          if(this.node)
          {
            
            window.clearInterval(this._setInterval);
            
            //this.checkNode();
          }
       },200)

    }

    //private checkNode():void
    protected onLoad():void
    {
        this._animation=this.node.getChildByName('lockOn').getChildByName('light').getComponent(Animation);

        let clips=this._animation.clips;

        this._animation.defaultClip=clips[0];

        this._animation.stop();

        this._aniNode=this.node.getChildByName('lockOn');
        
        this._aniNode.active=false;

        this._useingImage=this.node.getChildByName('lockOn').getComponent(Sprite);
        
        this._useingImage.enabled=false;

        //this._useingImage.color=color(255,255,255,0);

        log('check_onLoadBTN',this._useingImage.enabled);
    }

    public useBtn(f:boolean):void
    {
      
      log('check_autoBtn',this.node,this,this.id,f,this._animation);
        

      if(f)
      {
       
        this._aniNode.active=true;
        //--use
        if(this._useImgFlag)
        {
          //this._useingImage.color=color(255,255,255,255);
          this._useingImage.enabled=true;
        }

        this._animation.play();

        this._status=1;

      }else{

        this._aniNode.active=false;
        //--lock
        if(this._useImgFlag)
        {
          //this._useingImage.color=color(255,255,255,0);
          this._useingImage.enabled=false;
        }

        this._animation.stop();

        this._status=-1;
      }
  }

}


export class SelectRatioToggleBtn extends Component
{
  public isChoose:boolean;

  public id:string;

  public oddsStatus:string;
  
  private _tickOnImage:Node;

  private _tickOffImage:Node;

  constructor()
  {
    super();

    this.isChoose=false;

    this.id='';

    this.oddsStatus='';
  }

  public init(atlasId:string,frameId:string):void
  {
    this._tickOnImage=this.node.getChildByName('tickOn');

    this._tickOffImage=this.node.getChildByName('tickOff');

    /*
    let textureOff:SpriteFrame=LoadingResManager.getInstance().getSpriteFrameFromSpriteAtlas(atlasId,frameId+'_off');
    
    let textureOn:SpriteFrame=LoadingResManager.getInstance().getSpriteFrameFromSpriteAtlas(atlasId,frameId+'_on');
    */

    let textureOff:SpriteFrame=LoadingResManager.getInstance().getSpriteFrames(atlasId+'_off')[0];
    
    let textureOn:SpriteFrame=LoadingResManager.getInstance().getSpriteFrames(atlasId+'_on')[0];

    this._tickOnImage.getComponent(Sprite).spriteFrame=textureOn;
    
    this._tickOffImage.getComponent(Sprite).spriteFrame=textureOff;

    this.changeStatus(); 
  }

  public changeStatus():void
  {
    this._tickOnImage.active=this.isChoose;
    
    this._tickOffImage.active=!this.isChoose;
  }

  public select():void
  {
    this.isChoose=true;

    this.changeStatus();
    
  }

  public clean():void
  {
    this.isChoose=false;

    this.changeStatus();
  }


}


export class Fish1AutoShootGuiView extends GuiBasic
{
  //--裝載全部的GUI的node
  private _stage:Node;

  private _autoShootBtn:Node;

  private _aimBtn:Node;

  private _isAimShoot:boolean;

  private _isAutoShoot:boolean;

  private _autoPanel:Node;

  private _oddsData:OddsInfo[];

  private _aryOddsBtnInfo:OddsBtnInfo[];

  private _aryPropBtn:OddsPropBtn[];

  private _mapSelectRatioToggleBtn:{[key:string]:SelectRatioToggleBtn};

  private _digitsTexturePath:string;

  private _chooseStatus:number;

  private _pickAutoProps:number[];

  private _mapTotalOddsNum:{[key:string]:number};

  private _btnContainer:Node;//--20240424 btn用的guiContainer

  get isAutoShoot():boolean
  {
    return this._isAutoShoot;
  }

  constructor()
  {
    super();

    this._isAimShoot=false;

    this._isAutoShoot=false;

    this._aryOddsBtnInfo=[];

    this._pickAutoProps=[];

    this._aryPropBtn=[];

    this._mapSelectRatioToggleBtn={};

    this._chooseStatus=0;//--要刪掉了,現在沒有用了

    this._mapTotalOddsNum=
    {
      [OddsData.ODDS_LOW]:0,
      [OddsData.ODDS_MEDIUM]:0,
      [OddsData.ODDS_HIGH]:0,
      [OddsData.ODDS_BOSS]:0,
    }

    log('check__mapTotalOddsNum',this._mapTotalOddsNum);


  }

  

  /**
   * step1.
   * overrite it
   * @param value guiData before layout
  */
  public setData(value:GuiOption):void
  {
    super.setData(value);
    
    this._stage=find(value.other.container);
    
    this._btnContainer=find(value.other.btnContainer);
    
    this._oddsData= value.other.odds;  
    
    this._digitsTexturePath=value.other.digitsPath;
  }

  /**
   * step2.
   * overrite it
   */
  public init():void
  {
    this.setOdds();
    //this._defultType=[GUIEvent.BTN_MUTE,GUIEvent.BTN_EXCHANGE,GUIEvent.BTN_HISTORY,GUIEvent.BTN_HELP,GUIEvent.BTN_EXIT];
  }


  public async setLayout(): Promise<void>      
  {
      return new Promise<void>((resolve)=>
      {
        
        //this._stage.addChild(this);
       

        //--啟動按鈕
        //--autoShoot btn
        this._autoShootBtn=instantiate(LoadingResManager.getInstance().getPrefab('prefab/gui/autoBtn'));
        //-AutoShootAndAimBtn
        this._autoShootBtn.addComponent(TweenMaxCocosPlugin);

        let autobtnComponent=this._autoShootBtn.addComponent(AutoShootAndAimBtn);

        autobtnComponent.useImgFlag=true;

        autobtnComponent.id='_autoShootBtn';

        //this._stage.addChild(this._autoShootBtn);
        this._btnContainer.addChild(this._autoShootBtn);

        autobtnComponent.ogPosition=this._autoShootBtn.position;

        this._autoShootBtn.setPosition(v3(autobtnComponent.ogPosition.x-200,autobtnComponent.ogPosition.y));

        this._autoShootBtn.on(Toggle.EventType.CLICK,this.btnEventHandler);

        this._autoShootBtn.getComponent(Toggle).interactable=false;
        //--lock btn
        
        this._aimBtn=instantiate(LoadingResManager.getInstance().getPrefab('prefab/gui/lockBtn'));

        this._aimBtn.addComponent(TweenMaxCocosPlugin);

        let aimbtnComponent=this._aimBtn.addComponent(AutoShootAndAimBtn);

        aimbtnComponent.useImgFlag=false;

        aimbtnComponent.id='_aimBtn';

        //this._stage.addChild(this._aimBtn);
        this._btnContainer.addChild(this._aimBtn);

        aimbtnComponent.ogPosition=this._aimBtn.position;

        this._aimBtn.setPosition(v3(aimbtnComponent.ogPosition.x-200,aimbtnComponent.ogPosition.y));
        
        this._aimBtn.on(Toggle.EventType.CLICK,this.btnEventHandler);

        this._aimBtn.getComponent(Toggle).interactable=false;

        //--自動射擊面板
        this._autoPanel=instantiate(LoadingResManager.getInstance().getPrefab('prefab/gui/autoShotSetting'));

        this._stage.addChild(this._autoPanel);

        //--title---
        let languageSpriteFrame:SpriteFrame=LoadingResManager.getInstance().getSpriteFrameFromSpriteAtlas('fishHunter_'+CocosGameSetting.Game_Lang,'tx_AutoShot');

        this._autoPanel.children[0].getChildByName('title').getComponent(Sprite).spriteFrame=languageSpriteFrame;

        //languageSpriteFrame=LoadingResManager.getInstance().getSpriteFrameFromSpriteAtlas('fishHunter_'+CocosGameSetting.Game_Lang,'tx_AutoUse');
        
        languageSpriteFrame=LoadingResManager.getInstance().getSpriteFrames('tx_AutoUse')[0];
        //--title---
        //this._autoPanel.children[0].getChildByName('autoItem').getChildByName('title').getComponent(Sprite).spriteFrame=languageSpriteFrame;
        
        this._autoPanel.children[0].getChildByName('titleAutoProp').getComponent(Sprite).spriteFrame=languageSpriteFrame;

        let btnDatas=this._autoPanel.children[0].getChildByName('fishSelect').children;

        log('check_Panel_container',this._autoPanel,btnDatas,this._oddsData);

        let digitsTextures:SpriteFrame[]=LoadingResManager.getInstance().getSpriteFrames(this._digitsTexturePath).sort(GameUtils.sortDigitsSpriteFrames);
          
        log('autoShootGui_digitsTextures',digitsTextures);
        
        let digits:Digits;

        let btn:OddsBtnInfo;

        let index:number=-1;

        let oddsType:string;

        //for(let i:number=0;i< this._oddsData.length;i++)
        for(let i of this._oddsData)
        {
          let matchNode=btnDatas.find((cObj) => cObj.name === i.name)
         
          index+=1;

          if(matchNode)
          {
            log('check_objName',matchNode.name,index,i);

            let size:Size=matchNode.getComponent(UITransform).contentSize;

            btn=matchNode.addComponent(OddsBtnInfo);

            btn.init(i.name,i.id);
            
            digits=matchNode.getChildByName('label').addComponent(Digits);

            digits.textures=digitsTextures;

            digits.symbolStr=['~','x'];

            digits.symbolIndex=[10,11];

            let xValue:number=-787.5+index%8*(size.width);

            let yValue:number=-90 - Math.floor(index/8) * (size.height+2);

            matchNode.setPosition(v3(xValue,yValue));
            //digits.displayWithStr(this._oddsData[i].odds,'center');
            btn.setOdds(i.odds,i.isCanHit);

            btn.atkPriority=i.atkPriority;//--攻擊優先順序

            matchNode.on('setOddsEvt',this.itemAfterClickHandler);

            this._aryOddsBtnInfo[index]=btn;

            //--reset map
            let oddsType= this._aryOddsBtnInfo[index].oddsStatus;

            this._mapTotalOddsNum[oddsType]+=1;

          }

        }

        this.sortAtkPriority(this._aryOddsBtnInfo);

        log('btnOdds',this._aryOddsBtnInfo);

        //-this._autoPanel
        let propNode:Node=this._autoPanel.children[0].getChildByName('autoItem').getChildByName('itemCallBtn');
        
        let propBtn:OddsPropBtn=propNode.addComponent(OddsPropBtn);

        propBtn.init();

        propBtn.id=PropType.PROP_CALL;

        propNode.on('setPropEvt',this.propBtnClickHandler);

        this._aryPropBtn.push(propBtn);

        propNode=this._autoPanel.children[0].getChildByName('autoItem').getChildByName('itemFrozenBtn');
        
        propBtn=propNode.addComponent(OddsPropBtn);

        propBtn.init();

        propBtn.id=PropType.PROP_FREEZE;

        propNode.on('setPropEvt',this.propBtnClickHandler);

        this._aryPropBtn.push(propBtn);

        propNode=this._autoPanel.children[0].getChildByName('autoItem').getChildByName('itemCrazyBtn');
        
        propBtn=propNode.addComponent(OddsPropBtn);

        propBtn.init();

        propBtn.id=PropType.PROP_CRAZY;

        propNode.on('setPropEvt',this.propBtnClickHandler);
        
        this._aryPropBtn.push(propBtn);

        /*
        let btnNodePath=[
          {top:'select',nodeId:'lowOdds',frameId:'tx_low_odd_fish',atlasId:'fishHunter_'+CocosGameSetting.Game_Lang},
          {top:'select',nodeId:'mediumOdds',frameId:'tx_mid_odd_fish',atlasId:'fishHunter_'+CocosGameSetting.Game_Lang},
          {top:'select',nodeId:'highOdds',frameId:'tx_high_odd_fish',atlasId:'fishHunter_'+CocosGameSetting.Game_Lang},
          {top:'select',nodeId:'boss',frameId:'tx_boss_fish',atlasId:'fishHunter_'+CocosGameSetting.Game_Lang},
          {top:'controlBtn',nodeId:'cancelBtn',frameId:'txBtn_clear',atlasId:'fishHunter_'+CocosGameSetting.Game_Lang},
          {top:'controlBtn',nodeId:'allSelectBtn',frameId:'txBtn_selectAll',atlasId:'fishHunter_'+CocosGameSetting.Game_Lang},
          {top:'controlBtn',nodeId:'confirmBtn',frameId:'txBtn_enter',atlasId:'fishHunter_'+CocosGameSetting.Game_Lang},
          {top:'closeBtn',nodeId:''}
        ];
        */


        let btnNodePath=[
          {top:'select',oddsStatus:OddsData.ODDS_LOW,nodeId:'lowOdds',frameId:'tx_low_odd_fish',atlasId:'tx_low_odd_fish'},
          {top:'select',oddsStatus:OddsData.ODDS_MEDIUM,nodeId:'mediumOdds',frameId:'tx_mid_odd_fish',atlasId:'tx_mid_odd_fish'},
          {top:'select',oddsStatus:OddsData.ODDS_HIGH,nodeId:'highOdds',frameId:'tx_high_odd_fish',atlasId:'tx_high_odd_fish'},
          {top:'select',oddsStatus:OddsData.ODDS_BOSS,nodeId:'boss',frameId:'tx_boss_fish',atlasId:'tx_boss_fish'},
          {top:'controlBtn',nodeId:'cancelBtn',frameId:'txBtn_clear',atlasId:'tx_clear'},
          {top:'controlBtn',nodeId:'allSelectBtn',frameId:'txBtn_selectAll',atlasId:'tx_select_all'},
          {top:'controlBtn',nodeId:'confirmBtn',frameId:'txBtn_enter',atlasId:'tx_enter'}
          //{top:'closeBtn',nodeId:''}
        ];

        for(let j of btnNodePath)
        {
          if(j.nodeId=='')
          {
            
            this._autoPanel.children[0].getChildByName(j.top).on(Button.EventType.CLICK,this.btnOddsEventFunction);

          }else{
            
            if(this._autoPanel.children[0].getChildByName(j.top).getChildByName(j.nodeId).getComponent(Toggle))
            {
              this._autoPanel.children[0].getChildByName(j.top).getChildByName(j.nodeId).on(Toggle.EventType.CLICK,this.btnToggleOddsEventFunction);
              //--幹,超雷的,有時候isChecked 的資料會相反
              //this._autoPanel.children[0].getChildByName(j.top).getChildByName(j.nodeId)['status']=-1;
              
              let ratioToggleComponent=this._autoPanel.children[0].getChildByName(j.top).getChildByName(j.nodeId).addComponent(SelectRatioToggleBtn);

              ratioToggleComponent.id=j.nodeId;

              ratioToggleComponent.init(j.atlasId,j.frameId);

              ratioToggleComponent.oddsStatus=j.oddsStatus;

              this._mapSelectRatioToggleBtn[j.nodeId]=ratioToggleComponent;
            

            }else{   
              
              //let languageBtnSpriteFrame=LoadingResManager.getInstance().getSpriteFrameFromSpriteAtlas(j.atlasId,j.frameId);

              //let languageBtnSpriteFrame:SpriteFrame;

              let languageBtnSpriteFrame:SpriteFrame=LoadingResManager.getInstance().getSpriteFrames(j.atlasId)[0];
                
              this._autoPanel.children[0].getChildByName(j.frameId).getComponent(Sprite).spriteFrame=languageBtnSpriteFrame;
              
              /*
              if(j.top=='controlBtn')
              {
                
                languageBtnSpriteFrame=LoadingResManager.getInstance().getSpriteFrames(j.atlasId)[0];
                
                this._autoPanel.children[0].getChildByName(j.frameId).getComponent(Sprite).spriteFrame=languageBtnSpriteFrame;
                

              }else{

                //--這裡根本不會跑
                languageBtnSpriteFrame=LoadingResManager.getInstance().getSpriteFrameFromSpriteAtlas(j.atlasId,j.frameId);

                this._autoPanel.children[0].getChildByName(j.top).getChildByName(j.nodeId).getChildByName('tx').getComponent(Sprite).spriteFrame=languageBtnSpriteFrame;

              }*/ 


              this._autoPanel.children[0].getChildByName(j.top).getChildByName(j.nodeId).on(Button.EventType.CLICK,this.btnOddsEventFunction);
            
            }  

          }
          
         
          
        }

        this._autoPanel.active=false;    
        
        log('check_autoShootGui',this._aryOddsBtnInfo, this._mapTotalOddsNum);
        //---完成的時候做
        resolve();

      });
  }


  public cleanAllAutoShootData():void
  {
    this.cleanAll();

    this.cleanAllProp();

    this.cleanAllRatioBtn();

    this._chooseStatus=0;

    this._isAutoShoot=false;

    this.checkAutoUsePropBtnsStatus();

    this._autoShootBtn.getComponent(AutoShootAndAimBtn).useBtn(this._isAutoShoot);

  }

  public openShow(otherBtn:Node,otherOgPosition:Vec3):void
  {
    let aryAni=[otherBtn,this._autoShootBtn,this._aimBtn];

    let aryOgpositions=[otherOgPosition.x,this._autoShootBtn.getComponent(AutoShootAndAimBtn).ogPosition.x,this._aimBtn.getComponent(AutoShootAndAimBtn).ogPosition.x];

    let len:number=aryAni.length;
        
    let tweenComponent:TweenMaxCocosPlugin;

    let count:number=0;
    
    for(let i:number=0;i<len;i++)
    {
      tweenComponent=aryAni[i].getComponent(TweenMaxCocosPlugin);
      
      TweenMax.to(tweenComponent,.7,
      {
        x:aryOgpositions[i],
        delay:i*0.08,
        ease:Bounce.easeOut,
        onComplete:()=>
        {
          count++;

          if(count==len)
          {
              //--unlockall
              for(let j of aryAni)
              {
                j.getComponent(Toggle).interactable=true;
              }
          }
        }
      }); 
    }

  }

  public locakAim(b:boolean):void
  {
    log('check_gui_locakAim_',b);
    
    this._isAimShoot=b; 

    this._aimBtn.getComponent(AutoShootAndAimBtn).useBtn(this._isAimShoot);

  }

  private btnEventHandler=(e)=>
  {
      log('hello_btnEventHandler',e);

      //Notifycation.getInstance().emitSync(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,type,sendObj);
      //-autoBtn
      //-lockBtn
      SoundsManager.getInstance().play('sounds/button');

      if(e.node.name=='autoBtn')
      {
        
        find('Canvas/PlayerNameText').active=false;
        
        this._stage.addChild(GuisSystemView.BGMask);

        let index:number=this._stage.children.length-1;

        this._stage.insertChild(this._autoPanel,index);

        this._autoPanel.active=true;

      }else if(e.node.name=='lockBtn')
      {
          //--aim
          this._isAimShoot=!this._isAimShoot; 

          this._aimBtn.getComponent(AutoShootAndAimBtn).useBtn(this._isAimShoot);

          Notifycation.getInstance().emitSync(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.AIM_SHOOT,this._isAimShoot);
      }
      
  }

  private propBtnClickHandler=(e)=>
  {
    
    //-sendObj:{status:this._status,propType:this.id}
    if(e.sendObj.status==-1)
    {
      //--取消
      let index:number=this._pickAutoProps.indexOf(e.sendObj.propType);
      
      if(index!=-1)
      {
        this._pickAutoProps.splice(index,1);
  
        this._aryPropBtn[e.sendObj.propType-1].clean();
      }
      
    }else{

      this._aryPropBtn[e.sendObj.propType-1].select();

      this._pickAutoProps.push(e.sendObj.propType);

    }

    log('propBtnClickHandler',this._pickAutoProps);

  }


  /**
   * 
   * 檢查現在魚按鈕選得怎樣了 我的全選\清除按鈕要如何顯示?
   */
  private itemAfterClickHandler=(e)=>
  {
    this._chooseStatus+=e.sendObj;

    log('check_selectStatus',e,this._chooseStatus,this._mapSelectRatioToggleBtn); 

    if(this._chooseStatus<=0)
    {
      for(let i in this._mapSelectRatioToggleBtn)
      {
        //-isChoose
        if(this._mapSelectRatioToggleBtn[i].isChoose)
        {
          this._mapSelectRatioToggleBtn[i].clean();
        }
      }

      this._pickAutoProps.length=0;
    }
    //-逐一選取連動快速選取倍率的按鈕20240311
    this.checkToggleAfterSelectStatus();

    this.checkAutoUsePropBtnsStatus();
   
  }

  /**
   * 舊版的全選/清除是做在一起的複合式按鈕,所以要切換狀態
   * 新版-全選/清除/確定是分開3個個別的按鈕,所以這個功能可以刪除了
   */
  private selectOrClean():void
  {
    //--全選/確認/清除
  }

  /**
   * 逐一選取連動快速選取倍率的按鈕
   * 20240311
   */
  private checkToggleAfterSelectStatus():void
  {
    //log('autoBtnItem_click',this._aryOddsBtnInfo, this._mapTotalOddsNum);

    let len:number=this._aryOddsBtnInfo.length;

    let checkObj={};

    checkObj[OddsData.ODDS_LOW]=0;
    checkObj[OddsData.ODDS_MEDIUM]=0;
    checkObj[OddsData.ODDS_HIGH]=0;
    checkObj[OddsData.ODDS_BOSS]=0;


    for(let i:number=0;i<len;i++)
    {
      if(this._aryOddsBtnInfo[i].isChoose)
      {
        if(this._aryOddsBtnInfo[i].oddsStatus==OddsData.ODDS_LOW)
        {
          
          checkObj[OddsData.ODDS_LOW]+=1;

        }else if(this._aryOddsBtnInfo[i].oddsStatus==OddsData.ODDS_MEDIUM)
        {
          
          checkObj[OddsData.ODDS_MEDIUM]+=1;

        }else if(this._aryOddsBtnInfo[i].oddsStatus==OddsData.ODDS_HIGH)
        {
          checkObj[OddsData.ODDS_HIGH]+=1;

        }else{
          //--boss
          checkObj[OddsData.ODDS_BOSS]+=1;
        }
      }
    }

    //log('check_autoDataFromToggle',checkObj);

    for(let j in this._mapTotalOddsNum)
    {
      let open:boolean=false;
      
      if(this._mapTotalOddsNum[j]==checkObj[j])
      {
        //log('got the same count',j,this._mapSelectRatioToggleBtn);
        
        open=true;
       
      }

      for(let k in this._mapSelectRatioToggleBtn)
      {
          if(j==this._mapSelectRatioToggleBtn[k].oddsStatus)
          {
              if(open)
              {
                if(!this._mapSelectRatioToggleBtn[k].isChoose)
                {
                  this._mapSelectRatioToggleBtn[k].select();
                }

              }else{

                if(this._mapSelectRatioToggleBtn[k].isChoose)
                {
                  this._mapSelectRatioToggleBtn[k].clean();
                }
              }
            
              break;
          }
      }



    }


  }

  //--他只會改變狀態
  private checkAutoUsePropBtnsStatus():void
  {
    let f:boolean=(this._chooseStatus>0)?true:false;
    
    for(let i:number=0;i<this._aryPropBtn.length;i++)
    {
      this._aryPropBtn[i].setEnabled(f);
    }

  }

  

  private btnOddsEventFunction=(e)=>
  {
    log('btnOddsEventFunction',e.node.name);

    SoundsManager.getInstance().play('sounds/button');

    switch(e.node.name)
    {
        case 'cancelBtn':
          
          this.cleanAll();

          this.cleanAllProp();

          this.cleanAllRatioBtn();

          this._chooseStatus=0;

          this.checkAutoUsePropBtnsStatus();

          //this.selectOrClean();     

        break;

        case 'allSelectBtn':

          this.selectAll();

          this.selectAllProp();

          this.selectAllRatioBtn();

          //this.selectOrClean();     
          
          this._chooseStatus=this._aryOddsBtnInfo.length;

          this.checkAutoUsePropBtnsStatus();

          //log('check_allSelectBtn',this._chooseStatus);
        
        break;

        /*
        case 'closeBtn':

          this.closeAndconfirmBtn();
          
        break;
        */

        case 'confirmBtn':
          //--進入遊戲
          //--選取的魚
          this.closeAndconfirmBtn();
          
        break;
    }

  }

  private closeAndconfirmBtn():void
  {
      //--選取的魚
      let returnData=this.getData();
      //--選取道具
      let propData=GameUtils.deepCloneForObject(this._pickAutoProps);

      if(returnData.length>0 || propData.length>0)
      {  
        this._isAutoShoot=true;

      }else{

        this._isAutoShoot=false; 

      }
    
      this._autoShootBtn.getComponent(AutoShootAndAimBtn).useBtn(this._isAutoShoot);
      
      this._stage.removeChild(GuisSystemView.BGMask);

      this._autoPanel.active=false;

      find('Canvas/PlayerNameText').active=true;
      
      //this.emit(GuiCore.GUIEvent.AUTO_SHOOT,new H5PIXIEvent.BaseEvent(GuiCore.GUIEvent.AUTO_SHOOT,returnData));
      Notifycation.getInstance().emitSync(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.AUTO_SHOOT,
      {
        lockdata:returnData,
        props:propData
      });

      log('checkAutoshootdata',returnData);
  }

  

  private btnToggleOddsEventFunction=(e)=>
  {
    //let ischecked=e.target.getComponent(Toggle).isChecked;---有夠雷的,有時候送的資料是錯的
    
    log('check_btnToggleOddsEventFunction',e);

    this._mapSelectRatioToggleBtn[e.node.name].isChoose=!this._mapSelectRatioToggleBtn[e.node.name].isChoose;
    
    this._mapSelectRatioToggleBtn[e.node.name].changeStatus();
    //e.node['status']*=-1;

    //let ischecked=(e.node['status']==1)?true:false;

    let ischecked=this._mapSelectRatioToggleBtn[e.node.name].isChoose;


    //log('check_btnOddsEventFunction',e.node['status'],e.node.name,e.target,ischecked,e.isChecked);
    
    let targetType:string='';

    SoundsManager.getInstance().play('sounds/button');

    log('toggleBtn_Click',e.node);

    targetType=e.node.getComponent(SelectRatioToggleBtn).oddsStatus;

    if(ischecked)
    {
      
      this.selectSpecialItem(targetType);

    }else{
      
      this.cleanSpecialItem(targetType);

    }

    //this.selectOrClean();


  }

  

  //--送出前取得玩家選擇的資料
  private getData():{id:number , odds:string}[]
  {
    //--id=fishtype  
    let data:{id:number , odds:string}[]=[];

    let len:number=this._aryOddsBtnInfo.length;
    
    for(let i:number=0;i<len;i++)
    {
        if(this._aryOddsBtnInfo[i].isChoose)
        {
          data.push({id:this._aryOddsBtnInfo[i].id,odds:this._aryOddsBtnInfo[i].odds});
        }
    }
    
    return data;
  }


  private selectAllRatioBtn():void
  {
    for(let i in this._mapSelectRatioToggleBtn)
    {
      this._mapSelectRatioToggleBtn[i].select();
    }
  }

  private selectAllProp():void
  {
    let len:number=this._aryPropBtn.length;

    this._pickAutoProps.length=0;

    for(let i:number=0;i<len;i++)
    {
      this._aryPropBtn[i].select();
      
      this._pickAutoProps.push(this._aryPropBtn[i].id);

    }

    log('selectAllProp',this._pickAutoProps);
  }

  
  private selectAll():void
  {
    let len:number=this._aryOddsBtnInfo.length;

    for(let i:number=0;i<len;i++)
    {
        if(this._aryOddsBtnInfo[i]._isCanHit)
        {
          this._aryOddsBtnInfo[i].select();
        }
        
    }

    //this._chooseStatus=this._aryOddsBtnInfo.length;
  }

  private cleanAll():void
  {
      let len:number=this._aryOddsBtnInfo.length;
      for(let i:number=0;i<len;i++)
      {
        this._aryOddsBtnInfo[i].clean();
      }
      //this._chooseStatus=0; 
  }

  private cleanAllProp():void
  {
      let len:number=this._aryPropBtn.length;

      for(let i:number=0;i<len;i++)
      {
        this._aryPropBtn[i].clean();
      }
      
      this._pickAutoProps.length=0;
  }

  private cleanAllRatioBtn():void
  {
    for(let i in this._mapSelectRatioToggleBtn)
    {
      this._mapSelectRatioToggleBtn[i].clean();
    }
  }


  private selectSpecialItem(value:string):void
  {
    let len:number=this._aryOddsBtnInfo.length;

    let count:number=0;
    
    for(let i:number=0;i<len;i++)
    {
      if(this._aryOddsBtnInfo[i].oddsStatus==value && this._aryOddsBtnInfo[i]._isCanHit && !this._aryOddsBtnInfo[i].isChoose)
      {
        //-!this._aryOddsBtnInfo[i].isChoose裡面有檢察
        this._aryOddsBtnInfo[i].select();
        count++;
      }
    }
    
    this._chooseStatus+=count;

    this.checkAutoUsePropBtnsStatus();

  }

  private cleanSpecialItem(value:string):void
  {
    let len:number=this._aryOddsBtnInfo.length;

    let count:number=0;
    
    for(let i:number=0;i<len;i++)
    {
        if(this._aryOddsBtnInfo[i].oddsStatus==value && this._aryOddsBtnInfo[i].isChoose)
        {
          this._aryOddsBtnInfo[i].clean();
          count++;
        }    
    }

    this._chooseStatus-=count; 

    this.checkAutoUsePropBtnsStatus();
  }

  /**
   * 
   * @param oddsType 賠率(低中高)type 
   * PS-true=該賠率尚有可選物件的狀態,false=該賠率全選狀態
   */
  private checkSpSeclectOrClean(oddsType:string):boolean
  {
      
    let len:number=this._aryOddsBtnInfo.length;

    let total:number=this._mapTotalOddsNum[oddsType];

    for(let i:number=0;i<len;i++)
    {
      
      if(this._aryOddsBtnInfo[i].oddsStatus==oddsType)
      {
        if(this._aryOddsBtnInfo[i].isChoose)
        {
          total-=1;
        }
        
      }
        
    }

    let f:boolean=(total>0)?true:false;

    return f;
  }
  
  /**
   * 指定面板排序(自動打擊會依照這個順序來決定.所以打擊順序要另外排序)
   */
  private setOdds():void
  {
      let len:number=this._oddsData.length;
      
      for(let i:number=0 ; i<len ; i++)
      {
        let sort = this._oddsData[i].name.split('_');
        log('SetOdds_function',sort);

        switch(sort[1])
        {
            //--for ub 
            case '01':
              
              this._oddsData[i].sortNum = 1;
              this._oddsData[i].atkPriority=1;
            
            break;

            case '20':
            
              this._oddsData[i].sortNum = 3;
              this._oddsData[i].atkPriority=5;

            break;

            case '21':
              
              this._oddsData[i].sortNum = 4;
              this._oddsData[i].atkPriority=6;
    
            break;

            case '22':
              
              this._oddsData[i].sortNum = 5;
              this._oddsData[i].atkPriority=7;

            break;

            case '23':
              
              this._oddsData[i].sortNum = 6;
              this._oddsData[i].atkPriority=8;

            break;

            case '24':

              this._oddsData[i].sortNum = 7;
              this._oddsData[i].atkPriority=9;

            break;

            case '15':
              
              this._oddsData[i].atkPriority=3;
              this._oddsData[i].sortNum = 0;
            
            break;

            case '16':
              
              this._oddsData[i].atkPriority=4;
              this._oddsData[i].sortNum = 0;

            break;


            case '19':
            case '18':
            case '17':
            case '14':
              
              this._oddsData[i].atkPriority=3.5;
              this._oddsData[i].sortNum = 2;

            break;


            default:
              this._oddsData[i].atkPriority=2;
              this._oddsData[i].sortNum = 2;
            break;
        }

        
      }

      this.sort(this._oddsData);

      

      log('check_odds after sort',this._oddsData);
  }

    
  /**
   * 排序自動射擊的資料 依照sortNum排序後,同個sortNum再依照odds排序
   * @param o 
   */
  private sort(o:any):void
  {
      
      //log("check_autoShootObj",o);
      let data:any[]=o.sort((a,b)=>
      {
      
      if( a["sortNum"]>b["sortNum"])
      {

          return -1;
      
      }

      if(a["sortNum"]<b["sortNum"])
      {
          return 1;
      }

      
      if(Number(a["odds"])>Number(b["odds"]))
      {
          
          return -1;  
      
      }

      if(Number(a["odds"])<Number(b["odds"]))
      {
          
          return 1;  
      
      }
      
      return a-b;

      });
  }

  private sortAtkPriority(o:any):void
  {
      
      //log("check_autoShootObj",o);
      let data:any[]=o.sort((a,b)=>
      {
      
      if( a["atkPriority"]>b["atkPriority"])
      {

          return -1;
      
      }

      if(a["atkPriority"]<b["atkPriority"])
      {
          return 1;
      }

       
      return a-b;

      });
  }

}
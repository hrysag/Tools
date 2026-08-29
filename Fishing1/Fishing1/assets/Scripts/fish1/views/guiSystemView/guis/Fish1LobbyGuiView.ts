/**
 * Created by EricHuang on 2023/9/28.
 */


import { BlockInputEvents, sys } from 'cc';
import { Component } from 'cc';
import { instantiate } from 'cc';
import { Label } from 'cc';
import { sp } from 'cc';
import { Sprite } from 'cc';
import { SpriteFrame } from 'cc';
import { Node } from 'cc';
import { find } from 'cc';
import { v3 } from 'cc';
import {log} from 'cc';
import { GuiBasic } from '../../../../framework/game/guiCore/GuiBase';
import { GuiOption } from '../../../../framework/game/guiCore/GuiDefinitionsBase';
import { LoadingResManager } from '../../../../framework/logic/loading/LoadingResManager';
import { GUIEvent } from '../../../../framework/game/events/eventBase';
import { EventSendObject } from '../../../../framework/game/events/eventBase';
import { Notifycation } from '../../../../framework/abstract/mvvm/Notifycation';
import { GuiNotifycationSubbscriptionSubject } from '../../../../framework/game/guiCore/GuiDefinitionsBase';
import { CocosGameSetting } from '../../../../framework/utils/CocosGameSetting';
import { GameUtils } from '../../../../framework/utils/GameUtils';
import { Digits } from '../../../../framework/utils/Digits';
import { SoundsManager } from '../../../../framework/logic/audio/SoundsManager';
 
export class RoomBtn extends Component
{
    private _roomType:number;
    //private _roomRateLabel:Label;
    private _roomRateLabel:Digits;
    private _roomTitleNode:Node;
    private _roomSpine:sp.Skeleton;
    private _strRoomTitle:string;
    private _overAniNode:Node;
    
    //private _btnNode:Node;
    set roomType(value:number)
    {
    this._roomType=value;
    }

    set strRoomTitle(value:string)
    {
        this._strRoomTitle=value;
    }

    constructor()
    {
        super();
        this._roomType=-1;
        this._overAniNode=null;
        
    }

    protected onLoad(): void
    {
        log('check_singleRoomData',this.node);

    
        
        //let btn=this.node.getComponent(Button);
        
        
        if(this.node.getChildByName('button').getChildByName('label'))
        {
            //this._roomRateLabel=this.node.getChildByName('button').getChildByName('label')!.getComponent(Label);
            //this._roomRateLabel.string='1:1';
            this._roomRateLabel=this.node.getChildByName('button').getChildByName('label').addComponent(Digits);
            
            let digitsTextures:SpriteFrame[]=LoadingResManager.getInstance().getSpriteFrames('num_lobby_').sort(GameUtils.sortDigitsSpriteFrames);

            //log('LobbyRoomNameTexture',digitsTextures);

            this._roomRateLabel.textures=digitsTextures;
                        
            this._roomRateLabel.symbolStr=[':','K'];

            this._roomRateLabel.symbolIndex=[12,13];

            this._roomRateLabel.displayWithStr('1:1','center');
        }

        /**
         * 注意! skel檔案為spine輸出的2進位檔案...
         * 在creator當中,在sp.Skeleton component裡面的Animation需要選取(下拉)
         * 裡面就是setAnimation需要的name,如果不指定,會無法播放QQ
         */
        if(this.node.getChildByName('spine'))
        {
            //-https://docs.cocos.com/creator/3.6/manual/zh/asset/spine.html
            this._overAniNode=this.node.getChildByName('spine');
            //--set spine
            this._roomSpine=this.node.getChildByName('spine').getComponent(sp.Skeleton);
            
            //this._roomSpine.setAnimation(0,true,);
            //this._roomSpine.animation='你要的動畫名字'
        }
        
        //--換語系可能會需要再重新對一次位置    
        this._roomTitleNode=this.node.getChildByName('button').getChildByName('tx');
        if(this._strRoomTitle!='')
        {
            log('check_roomTitleNode',this._roomTitleNode,this._strRoomTitle);
            this.setRoomName();
        }


        //this.node.on(NodeEventType.MOUSE_ENTER,this.mouseStatusEvtHandler);
    
        
    }

    protected start():void
    {

    }

    
    public setRoomRatio(ratioData:string):void
    {
        if(this._roomRateLabel)
        {
            if(ratioData=='' || ratioData==undefined || ratioData==null)
            {
                ratioData='0:0';
            }
            let ratio:string=ratioData;

            let aryRatio:string[]=ratio.split(':');

            this._roomRateLabel.displayWithStr(GameUtils.repK(aryRatio[0])+':'+ GameUtils.repK(aryRatio[1]),'center');
            //this._roomRateLabel.string=GameUtils.repK(aryRatio[0])+':'+ GameUtils.repK(aryRatio[1]);
            log('setRoomRatio',this._roomType);
            
            if(this._roomType<2)
            {
                this.node.on(Node.EventType.TOUCH_START,this.btnClickEvtHandler);

                this.node.on(Node.EventType.TOUCH_END,this.btnClickEvtHandler);   
            }
            
        
        }
        
    }

    public setRoomName(str?:string):void
    {
        let strIndex:string=(str)?str:this._strRoomTitle;

        if(strIndex!='' && this._roomType>=0)
        {
            let spriteFrame:SpriteFrame=LoadingResManager.getInstance().getSpriteFrameFromSpriteAtlas('fishHunter_'+CocosGameSetting.Game_Lang,strIndex);
            
            if(spriteFrame)
            {
                //log('check_titleNode',this._roomTitleNode);
                let spr:Sprite= this._roomTitleNode.getComponent(Sprite);
                spr.spriteFrame=spriteFrame;
            }
        }
    }

    public removeAndDestory():void
    {
        
        this.node.off(Node.EventType.TOUCH_START,this.btnClickEvtHandler);
        
        this.node.off(Node.EventType.TOUCH_END,this.btnClickEvtHandler);
        
        
        if(this._roomSpine)
        {
            this._roomSpine.clearTracks();
            log('remove',this._roomSpine);
        }

    }

    private btnClickEvtHandler=(e)=>
    {
        log('btnClick',e);
       
        if(e.type==Node.EventType.TOUCH_START)
        {
            SoundsManager.getInstance().play('sounds/button');
            //this.node.emit(GUIEvent.SET_PLAYER_ROOM,new GUIEvent(GUIEvent.SET_PLAYER_ROOM,this._roomType));
            this.node.emit(GUIEvent.SET_PLAYER_ROOM,{type:GUIEvent.SET_PLAYER_ROOM,sendObj:this._roomType});
        
        }else if(e.type==Node.EventType.MOUSE_ENTER)
        {
            //this._overAniNode
            let tweenObj={scale:1};
            TweenMax.to(tweenObj,.1,
            {
                scale:1.2,
                yoyo:true,
                repeat:1,
                onUpdate:()=>
                {
                    this._overAniNode.scale=v3(tweenObj.scale,tweenObj.scale,tweenObj.scale);
                }
            }); 

        }
        
    }


}

export class Fish1LobbyGuiView extends GuiBasic
{
    //-extends Node implements IfGui
    private _lobbyNode:Node;
    private _aryBtn:RoomBtn[];
    private _accoundLabel:Label;
    private _container:Node;
    private _arylobbyNames:string[];
    private _versionLabel:Label;
    //多語系要在處理

    constructor()
    {
        super();
        this._aryBtn=[];
        this._arylobbyNames=[];
        //this._container=find('Canvas');

    }


    /**
     * step1.
     * overrite it
     * @param value guiData before layout
    */
    public setData(value:GuiOption):void
    {
        super.setData(value);
        
        this._arylobbyNames=value.other.lobbyNames;

        this._container=find(value.other.container);
        
        log('check_lobbyNames',this._arylobbyNames,this._container);

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
            this._lobbyNode=instantiate(LoadingResManager.getInstance().getPrefab('prefab/gui/lobby'));
            //this.addChild(this._lobbyNode);
            let bg:Sprite=this._lobbyNode.getChildByName('bg').getComponent(Sprite);
            bg.addComponent(BlockInputEvents);
            log('initLobbyGui',this._lobbyNode);

            this._versionLabel=this._lobbyNode.getChildByName('version').getComponent(Label);
    
            this._accoundLabel=this._lobbyNode.getChildByName('player').getChildByName('label').getComponent(Label);
            //--這邊長度可能是2或是以上
            let rooms:Node[]=this._lobbyNode.getChildByName('room').children as Node[];
            
            //let roomNames:string[]=['tx_shark','tx_dragon',''];
            for(let i:number=0;i<rooms.length;i++)
            {
                let btn:RoomBtn=rooms[i].addComponent(RoomBtn);
                log('check_rooms',rooms[i]);
                //btn.init(rooms[i]);
                btn.roomType=i;
                btn.strRoomTitle=this._arylobbyNames[i];
                
                
                this._aryBtn.push(btn);
                btn.node.on(GUIEvent.SET_PLAYER_ROOM,this.btnHandler);
                //超詭異的感應區怪怪的
                /*
                let size:Size=rooms[i].getComponent(UITransform).contentSize;
                let btnSensor=new Node('graphic_node'+i);
                btnSensor.layer=Layers.Enum.UI_2D;
                let gp:Graphics=btnSensor.addComponent(Graphics);
                gp.fillColor=color(255,255,255,128);
                gp.rect(-size.width/2,-size.height/2,size.width,size.height);
                gp.fill();
                let ancher:UITransform=btnSensor.addComponent(UITransform);
                ancher.width=size.width;//--這邊要設定的跟你要感應的區域大小相同才不會跑掉
                ancher.height=size.height;
                ancher.anchorX=ancher.anchorY=.5;
                this._lobbyNode.addChild(btnSensor);
                btnSensor.setPosition(v3(rooms[i].position.x,rooms[i].position.y,0));
                btnSensor.on(Node.EventType.MOUSE_ENTER,(e)=>
                {
                    log('mouseOver');
                });*/
    
                /**
                 * prfab他的最上層的node一定要掛uitranfrom component不然會看見
                 * 記得在prefab裡面存檔,即可預覽
                 * 以下為舊的廳房資訊
                 *  string fold = 0;  // x 倍場， ex. 1 為一倍場、100 為百倍場
                    string denom = 1; // 開分比
                    新版的就已 [ '1:5', '2:1', '4:1' ] 來取代,fold=在ary當中的index
                    */
            }
    
            //let canvasNode:Node=find('Canvas');
            this.addChild(this._lobbyNode);

            this._container.addChild(this);
            
            //---完成的時候做
            resolve();

        });
        
    }

    private btnHandler=(e)=>
    {
        log('room_btn_evt',e);
        //this.emit(e.type,e);
        Notifycation.getInstance().emitSync(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.SET_PLAYER_ROOM,e);

    }

    


    //--do something after layout
    /**
     * override-step4
     * do something after layoutgui
     */
    public layoutComplete():void
    {
        //this._layoutCompleteFreebackFunction();
        log('finsih_initLobbyGui')
    }


    public setRoomData(roomRate:string[],uiseId:string):void
    {
        log('setRoomData_gui',roomRate,uiseId);
        
        //---20230804-先暫時這樣
        let len:number=3;//--ps因為server似乎沒有協調好,送進來['1:5', '1:1', '2:1', '4:1', 'NA']這種資料
    
        for(let i:number=0;i<len;i++)
        {
        if(roomRate[i]!='')
        {
            this._aryBtn[i].setRoomRatio(roomRate[i]);
        }
        
        }
        log('check_label',this._accoundLabel.useSystemFont);
        //this._accoundLabel.color=color(208,208,208,128);--色碼用rgba來表示
        this._accoundLabel.string=uiseId;
    }


    public remove():void
    {
        for(let i:number=0;i<this._aryBtn.length;i++)
        {
            this._aryBtn[i].node.off(GUIEvent.SET_PLAYER_ROOM,this.btnHandler);
            this._aryBtn[i].removeAndDestory();
        }

        //this._container.removeChild(this._lobbyNode);
        this._container.removeChild(this);

    }

    public setLauncherVersionNumber(value:string):void
    {
        this._versionLabel.string=value;
    }
  
 
 
 
}
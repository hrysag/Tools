/**
 * Created by EricHuang on 2023/10/18.
 */
import { LoadingResManager } from "../../../../framework/logic/loading/LoadingResManager";
import { BaseEvent } from "../../../../framework/game/events/eventBase";
import {GameUtils} from '../../../../framework/utils/GameUtils';
import {Digits} from '../../../../framework/utils/Digits';
import { AniEffectID } from "../../../../framework/logic/views/aniEffectView/AniEffectDefinitions";
import {AnimationEffectEvent,EventSendObject} from '../../../../framework/game/events/eventBase';
import {Scene,instantiate,Node,Animation,AnimationClip, AnimationState, UITransform} from 'cc';
import {v3,EventTarget,Component} from 'cc';
import {SkeletalAnimation} from 'cc';
import {find} from 'cc';
import {CameraComponent} from 'cc';
import {Vec3} from 'cc';
import {SpriteFrame} from 'cc';
import {Layers} from 'cc';
import {ParticleSystem2D} from 'cc';
import {log} from 'cc';

export type AwardQueueData=
{
    money?:number,
    fish?:number,//--魚的圖片(fish type)
    ratioOdds?:number,
    spMode?:number

}

//--這個可以再繼承出去變成其他的圓盤

export class BigCoinEffect extends Component
{
    private _digits:Digits;

    private _topAnimation:Animation;

    private _particle2d:ParticleSystem2D;

    private _awardId:number;

    public isplaying:boolean;

    set awardId(value:number)
    {
        this._awardId=value;
    }
    
    constructor()
    {
        super();

        this._awardId=-1;

        this.isplaying=false;
    }

    protected onLoad():void
    {
        this._digits=this.node.getChildByName('coinBg').getChildByName('label').getComponent(Digits);
        
        this._digits.diplayLayer=1 << Layers.nameToLayer('fx');

        //log('check_awardNode',this.node);

        this._topAnimation=this.node.getComponent(Animation);

        let clips=this._topAnimation.clips;

        this._topAnimation.defaultClip=clips[0];

        this._particle2d=this.node.getChildByName('particleStar').getComponent(ParticleSystem2D);

        this._particle2d.stopSystem();

        this._topAnimation.on(Animation.EventType.FINISHED,this.onComplete);
        
    }

    private onComplete=(type,state)=>
    {
        this.isplaying=false;

        this._topAnimation.stop();

        this._particle2d.stopSystem();

        this.node.active=false;

        /**
         * export type EventSendObject=
            {
            type:string,
            sendObj?:any
            }
         */

        this.node.emit(BaseEvent.COMPLETE,{type:AnimationEffectEvent.COMPLETE,sendObj:this._awardId});
    }

    public playAndShowPayOff(payOff:number):void
    {
        this.node.active=true;
        
        this.isplaying=true;
        
        this._digits.display(payOff,'center');

        this._topAnimation.play();

        this._particle2d.resetSystem();
    }
}


export class AwardDiscAniEffect 
{
   
    //--拿_aniPositionInfo裡面的 positions-->砲管出口的位置
    private _aryDeathLightNodes:Node[];
    
    private _containerNode:Node;

    private _maxmumTable:number;

    private _aryPlayerDiscItem:{disc:Node[],queue:AwardQueueData[],ogPos:{x:number,y:number}[]}[];

    constructor(...args)
    {
        
        this._aryDeathLightNodes=[];

        this._aryPlayerDiscItem=[
            {
                disc:[],
                queue:[],
                ogPos:[]
            },
            {
                disc:[],
                queue:[],
                ogPos:[]
            },
            {
                disc:[],
                queue:[],
                ogPos:[]
            },
            {
                disc:[],
                queue:[],
                ogPos:[]
            }
        ];

        //log('this._aryPlayerDiscItem',this._aryPlayerDiscItem);

        this._containerNode=args[0].container;

        this._maxmumTable=args[0].maxmumTable;

        //let pos:{x:number,y:number}[]=args[0].position;

        //let tableIndex:number=args[0].playerTable;

        let textures:SpriteFrame[]=LoadingResManager.getInstance().getSpriteFrames(args[0].digitsTexturePath).sort(GameUtils.sortDigitsSpriteFrames);

        for(let i:number=0;i<this._maxmumTable;i++)
        {
           let awardNode=instantiate(LoadingResManager.getInstance().getPrefab(args[0].prefabId));
           
           let bigCoinComponent=awardNode.addComponent(BigCoinEffect);

           bigCoinComponent.awardId=i;

           let dg:Digits= awardNode.getChildByName('coinBg').getChildByName('label').addComponent(Digits);
            
           dg.textures=textures;

           dg.padding=1;
   
           dg.digitScale=.8;
   
           dg.useCommand=true;
   
           dg.symbolStr=[','];
   
           dg.symbolIndex=[10];

           this._containerNode.addChild(awardNode);

           /*
           let offsetY:number=0;

           let heightDistance:number=(awardNode.getComponent(UITransform).contentSize.height/2)+90;

           if(tableIndex==0 || tableIndex==1)
           {
              //--轉下來
              //--不轉
              if(i==0 || i==1)
              {
                offsetY=heightDistance*1;

              }else{
               
                offsetY=heightDistance*-1;
              }  
                
           
            }else{
              //--不轉
              if(i==0 || i==1)
              {
                offsetY=heightDistance*-1;

              }else{
               
                offsetY=heightDistance*1;
              }  
           }*/

           //let lpos=this._containerNode.getComponent(UITransform).convertToNodeSpaceAR(v3(pos[i].x,pos[i].y+offsetY));
           
           //log('check_node_award',awardNode);
           
           //awardNode.setPosition(lpos);

           awardNode.on(BaseEvent.COMPLETE,this.onCompleteAward);

           awardNode.active=false;

           this._aryPlayerDiscItem[i].disc.push(awardNode);

           this._aryPlayerDiscItem[i].ogPos.push({x:awardNode.position.x,y:awardNode.position.y});
           //this._aryDeathLightNodes.push(awardNode);
           
        } 

    }

    public resetRoomData():void
    {
        for(let i:number=0;i<this._maxmumTable;i++)
        {
            this._aryPlayerDiscItem[i].disc[0].setPosition(v3(this._aryPlayerDiscItem[i].ogPos[0].x,this._aryPlayerDiscItem[i].ogPos[0].y));
        }
    }

    public setDataAfterSetRoom(positions:{x:number,y:number}[],playerIndex:number):void
    {
        let pos:{x:number,y:number}[]=positions;

        let tableIndex:number=playerIndex;

        let awardNode;

        for(let i:number=0;i<this._maxmumTable;i++)
        {
            awardNode=this._aryPlayerDiscItem[i].disc[0];

            let offsetY:number=0;

            let heightDistance:number=(awardNode.getComponent(UITransform).contentSize.height/2)+90;

            if(tableIndex==0 || tableIndex==1)
            {
                //--轉下來
                //--不轉
                if(i==0 || i==1)
                {
                    offsetY=heightDistance*1;

                }else{
                
                    offsetY=heightDistance*-1;
                }  
                    
            
                }else{
                //--不轉
                if(i==0 || i==1)
                {
                    offsetY=heightDistance*-1;

                }else{
                
                    offsetY=heightDistance*1;
                }  
            }

            let lpos=this._containerNode.getComponent(UITransform).convertToNodeSpaceAR(v3(pos[i].x,pos[i].y+offsetY));
           
            //log('check_node_award',awardNode);
            
            awardNode.setPosition(lpos);

            //awardNode.active=true;//--for test

        }

    }



    private onCompleteAward=(e)=>
    {
        //log('chec_award_finish',e);
        //--e.sendObj
        this.checkDataIntheQueue(e.sendObj);

    }


    private checkDataIntheQueue(playerIndex:number):void
    {
        let len:number= this._aryPlayerDiscItem[playerIndex].queue.length;

        let index:number=0;//--用來檢查每個位置上的彩盤形式(1代只有一個, index=0)
        
        //let discIndex:number=-1;

        /*--1代只有一個彩盤所以不檢查了
        for(let i:number=0;i<len;i++)
        {
            //--檢查賠率要開那個彩盤出來
        }*/

        if(len>0)
        {
            if(!this._aryPlayerDiscItem[playerIndex].disc[index].getComponent(BigCoinEffect).isplaying)
            {

                let data=this._aryPlayerDiscItem[playerIndex].queue.shift();//--拿第一個出來

                this._aryPlayerDiscItem[playerIndex].disc[index].getComponent(BigCoinEffect).playAndShowPayOff(data.money);

            }

        }

    }


    public playAndShowPayOff(value:any):void
    {
        /**
         * export type AwardQueueData=
            {
                money?:number,
                fish?:number,//--魚的圖片(fish type)
                ratioOdds?:number,
                spMode:number

            }
         */
        //--目前只會送2個資料進來(座位0-3,金額)
        this._aryPlayerDiscItem[value.playerIndex].queue.push(
            {
                money:value.money
            }
        )

        this.checkDataIntheQueue(value.playerIndex);
        //--for test
        /*
        let len:number=this._aryDeathLightNodes.length;

        for(let i:number=0;i<len;i++)
        {
            this._aryDeathLightNodes[i].getComponent(BigCoinEffect).playAndShowPayOff(123);
        }*/
    }



}
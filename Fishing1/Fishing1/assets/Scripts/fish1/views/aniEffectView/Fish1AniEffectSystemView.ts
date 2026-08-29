/**
 * Created by EricHuang on 2023/10/10.
 */
import {AniEffectView} from '../../../framework/logic/views/aniEffectView/AniEffectView';
import {AniEffectTypeMap} from '../../../framework/logic/views/aniEffectView/AniEffectDefinitions';
import {fishMeshState} from '../../../framework/game/model/ModelDefinitionsBase';
import {AnimationEffectEvent,EventSendObject} from '../../../framework/game/events/eventBase';
import {Fish1AniEffectView} from './Fish1AniEffectView';
import {BgAniEffect} from './aniEffects/BgAniEffect';
import {AniEffectID} from '../../../framework/logic/views/aniEffectView/AniEffectDefinitions'
import {AfterAnimationData} from '../../../framework/logic/views/aniEffectView/AniEffectDefinitions'
import {TableInfo} from '../../../framework/game/model/ModelDefinitionsBase';
import {ExecuteOption} from '../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {viewBind} from '../../../framework/abstract/mvvm/AbstractView';
import { GameUtils } from '../../../framework/utils/GameUtils';
import {Fish1AniEffectID,Fish1AniEffectTypeMap} from './Fish1AniEffectDefinitions';
import { Fish1FishData } from '../fishView/Fish1FishData';
import { GameViewMediatorUser } from '../../../framework/logic/gameLogic/FishGameLogicDefinitions';
import { GameViewMediatorUserDataKey } from '../../../framework/logic/gameLogic/FishGameLogicDefinitions';
import { Vec3,v3, find,Node, UITransform, director,CameraComponent} from 'cc';
import { SoundsManager } from '../../../framework/logic/audio/SoundsManager';
import {log} from 'cc';

export class Fish1AniEffectSystemView extends AniEffectView
{
    @viewBind _addbullets;
    
    @viewBind _hitFishs;

    @viewBind _roomStatus;

    @viewBind _useSummonProp;//--使用召喚道具

    @viewBind _useCrazyProp;//--使用狂暴道具
    
    @viewBind _bossStatus;//--boss在場內的狀態


    @viewBind _mapCannonInfo:{[key:number]:{score:number,speed:number,powerup:number}};//--bullet 相關資訊

    @viewBind _roomTableInfo:{tables:TableInfo[],firstIntoRoom:boolean};

    private _bigOddsType:number[];

    private _midOddsType:number[];
    
    private _smallOddsType:number[];
    
    private _spOddsType:number[];

    private _bossType:number[];

    private _killBossResult:{id:string,payOff:number};

    private _afterAniDataMap:{[key:number]:AfterAnimationData};//--紀錄需要等待動畫撥放完畢後續處理的資料..key=fishID


    constructor()
    {
        super();

        this._classId='Fish1AniEffectSystemView';

        //-黃金捻魚13 彩色鯉魚14 彩色劍魚15 魟魚16 金海龜17 鱷魚18 鯨魚19 金色鬼頭鯊20 boss龍21
        this._bigOddsType=[13,14,15,16,17,18,19,20];//--背景反黑的爆炸+fishDeath Effect+大圓盤
        this._midOddsType=[8,9,10,11,12];//--搖背景+一般金額撒錢
        this._smallOddsType=[0,1,2,3,4,5,6,7];//--一般灑錢
        //-閃電魚22 炸彈23
        this._spOddsType=[22,23];//--特殊爆炸
        //--boss
        this._bossType=[21];

        this._killBossResult=null;

        //--紀錄需要等待動畫撥放完畢後續處理的資料..key=fishID
        this._afterAniDataMap={};
    }

    /*
    protected  onLoad():void
    {
        
    }*/

    public init():void
    {
        this.aniEffect=new Fish1AniEffectView(); 
    }


    protected aniAndEffectComplete=(e:EventSendObject)=>
    {
       log('check_finish_effect_system',e);

       if(e.sendObj==Fish1AniEffectID.ANI_GD_EXPLOSION)
       {
            this.executeAnimation({
                    
                aniEffectTypeId:Fish1AniEffectTypeMap.ANI_GD_RESULT,
                other:{id:this._killBossResult.id,payOff:this._killBossResult.payOff}
            });

       }else if(e.sendObj.id==AniEffectID.ANI_Flash_Lightning || e.sendObj.id==AniEffectID.ANI_BombEffect)
       {
           this.afterSpEffect(e.sendObj.afterId);
       
       }
    }




    //---override
    public executeAnimation(executeOption:ExecuteOption):any
    {
        let r:any=super.executeAnimation(executeOption);
        
        if(!r)
        {
           switch(executeOption.aniEffectTypeId)
           {
                case Fish1AniEffectTypeMap.ANI_GD_COMMING:

                    this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_GD_COMMING});

                    this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_GD_OPENING});

                    this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_BG_EFFECT_CHANGE,other:0});

                break;

                case Fish1AniEffectTypeMap.ANI_GD_OUT:
            
                    this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_GD_OUT});
                
                break;

                case Fish1AniEffectTypeMap.ANI_GD_POWERUP:
                    
                    this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_POWERUP_EFFECT,other:executeOption.other});
                break;

                //case Fish1AniEffectTypeMap.ANI_SHAKE_EFFECT:
                case AniEffectTypeMap.ANI_showShakeEffect:
                    
                    //this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_SHAKE_EFFECT,other:executeOption.other});
                    this._aniEffect.executeAnimation({command:AniEffectID.ANI_ShakeEffect,other:executeOption.other});
                break;

                
                case Fish1AniEffectTypeMap.ANI_GD_RESULT:
                    
                    SoundsManager.getInstance().play('sounds/moneydrop'); 
                    
                    this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_GD_KILL_ANNOUNCE,other:executeOption.other});
                   
                break;

                case Fish1AniEffectTypeMap.ANI_GD_KILL_RESULT:
                    
                    SoundsManager.getInstance().play('sounds/dragonkilled');    
                       

                    this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_GD_EXPLOSION});
                    
                    this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_GD_KILL_TITLE});
                    //--coin particle--這裡爆掉
                    this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_GD_KILL_PARTICLE_COINS});

                break;


                case AniEffectTypeMap.ANI_showFlashLightningEffect:

                    SoundsManager.getInstance().play('sounds/lightning');
                
                    this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_BG_EFFECT_CHANGE,other:1});
                    
                    this._aniEffect.executeAnimation({command:AniEffectID.ANI_Flash_Lightning,other:executeOption.other});


                break;


                case AniEffectTypeMap.ANI_showBombEffect:

                    //let bg:BgAniEffect=this.getCommandInstance(BgAniEffect.name);
                    let bg:BgAniEffect=this.getCommandInstance('BgAniEffect');
                
                    let targetNode:Node=bg.getBg();
    
                    if(targetNode)
                    {
                        //this._aniEffect.executeAnimation({command:AniEffectID.ANI_ShakeEffect,other:executeOption.other});
                        this._aniEffect.executeAnimation({command:AniEffectID.ANI_ShakeEffect,other:targetNode});
                        
                    }
                
                    let onlySigleOnedata={chainFishDatas:[executeOption.other.chainFishDatas[0]]};   
                    
                    this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_BG_EFFECT_CHANGE,other:2});

                    this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_DEATH_LIGHT_EFFECT,other:onlySigleOnedata});
                
                    this._aniEffect.executeAnimation({command:AniEffectID.ANI_BombEffect,other:executeOption.other});
                
                break;


                case Fish1AniEffectTypeMap.ANI_AWARD_DISC_EFFECT:
   
                    if(executeOption.other.isPlayer)
                    {
                        let random:number=GameUtils.getRangeRandom(1,2);
                        SoundsManager.getInstance().play('bigfishkill-'+random);
                    }
                    
                    this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_AWARD_DISC_EFFECT,other:executeOption.other});
                   
                break;

                case Fish1AniEffectTypeMap.ANI_BIG_ODDS_FISH_EFFECT:
   
                    //--背景反黑的爆炸+fishDeath Effect+大圓盤
                    /*
                     //-黃金捻魚13 彩色鯉魚14 彩色劍魚15 魟魚16 金海龜17 鱷魚18 鯨魚19 金色鬼頭鯊20 boss龍21
                     this._bigOddsType=[13,14,15,16,17,18,19,20];//--背景反黑的爆炸+fishDeath Effect+大圓盤
                     other:
                    {
                        playerIndex:value.siteIndex,
                        money:value.fish.payoff,
                        position:pos
                    }*/
                    let bigOddsPos={chainFishDatas:[{fpos:executeOption.other.position}]};

                    this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_BG_EFFECT_CHANGE,other:2});

                    this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_DEATH_LIGHT_EFFECT,other:bigOddsPos});
                    
                    this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_AWARD_DISC_EFFECT,other:executeOption.other});
                    
  
                break;


                case Fish1AniEffectTypeMap.ANI_MID_ODDS_FISH_EFFECT:
   
                    //--搖背景+一般金額撒錢
                    //- this._midOddsType=[8,9,10,11,12];//--搖背景+一般金額撒錢
                    //--在release模式下,class.name他可是會被拿掉的
                    //let midOddsbg:BgAniEffect=this.getCommandInstance(BgAniEffect.name);
                    log('BgAniEffect.name',BgAniEffect.name);
                    let midOddsbg:BgAniEffect=this.getCommandInstance('BgAniEffect');
                
                    let midOddsNode:Node=midOddsbg.getBg();
    
                    if(midOddsNode)
                    {
                        //this._aniEffect.executeAnimation({command:AniEffectID.ANI_ShakeEffect,other:executeOption.other});
                        this._aniEffect.executeAnimation({command:AniEffectID.ANI_ShakeEffect,other:midOddsNode});
                        
                    }
                
                   
                break;

                case Fish1AniEffectTypeMap.ANI_SUMMON_EFFECT:

                    if(!executeOption.other.close)
                    {
                        SoundsManager.getInstance().play('sounds/summon');
                    }
                   
                    //--召喚效果
                    this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_SUMMON_EFFECT,other:{close:executeOption.other.close,index:executeOption.other.index,swp:executeOption.other.swp,ewp:executeOption.other.ewp}});

                break;


                case Fish1AniEffectTypeMap.ANI_FREEZE_EFFECT:

                    if(executeOption.other.freeze)
                    {
                        SoundsManager.getInstance().play('sounds/ice');
                    }

                    log('go_do_ANI_FREEZE_EFFECT',this._aniEffect);
                     
                    //--冰凍效果 
                    this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_FREEZE_EFFECT,other:{freeze:executeOption.other.freeze}});

                break;


                case Fish1AniEffectTypeMap.ANI_CRAZY_EFFECT:

                    //--狂暴效果 
                    this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_CRAZY_EFFECT,other:{open:executeOption.other.open,table:executeOption.other.table}});

                break;


                case Fish1AniEffectTypeMap.ANI_GET_PROP_EFFECT:

                    //--掉落道具
                    this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_GET_PROP_EFFECT,other:{propType:executeOption.other.propType,wp:executeOption.other.wp}});

                break;

                /**
                 *   this.executeAnimation(
                    {
                        aniEffectTypeId:Fish1AniEffectTypeMap.ANI_GET_PROP_EFFECT,
                        other:
                        {
                            propType:value.fish.props,
                            wp:pos
                        }
                    });
                 */



           }
         

        }
        
        return r;
    }


    private afterSpEffect(afterDataId:number):void
    {
        let afterEffectData=this._afterAniDataMap[afterDataId];
            
        //log('afterEffectData@@',afterEffectData);

        for(let i:number=0;i<afterEffectData.infoData.length;i++)
        {

            SoundsManager.getInstance().play('sounds/moneydrop');
            
            if(this._spOddsType.indexOf(afterEffectData.infoData[i].type)==-1)
            {
                //--特殊魚(連鎖AOE)本身不秀錢+分數
                this.executeAnimation({
                            
                    aniEffectTypeId:AniEffectTypeMap.ANI_showPayoffMoneyAndDigits,
                    
                    other:{
                        money:
                        {
                            isPlayer:afterEffectData.isPlayer, 
                            x:afterEffectData.infoData[i].fpos.x,
                            y:afterEffectData.infoData[i].fpos.y,
                            playerIndex:afterEffectData.table
                        },
                        digits:
                        {
                            showNumber:afterEffectData.infoData[i].payoff, 
                            x:afterEffectData.infoData[i].fpos.x,
                            y:afterEffectData.infoData[i].fpos.y
                        }
                    }    
    
                });
            }

            //--刪除魚隻
            this._gameMediator.getViewUserData(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_removeFishById,afterEffectData.infoData[i].sn);

        }

        //--開轉盤
        this.executeAnimation({aniEffectTypeId:Fish1AniEffectTypeMap.ANI_AWARD_DISC_EFFECT,
            other:{
                money:afterEffectData.totalPayoff,
                playerIndex:afterEffectData.table,
                isPlayer:afterEffectData.isPlayer
            }});

        //-totalPayoff/table

        //--刪除表演資料
        delete this._afterAniDataMap[afterDataId];

     
    }

    private hitFish(value:any):void
    {
        //log('effectKillFish',value);
        if(value.fish.iskill==false)
        {
          //---沒死
          //-hitFishes
          //-1.要補處理把鎖定/自動打的資料抹掉
          //--處理其他玩家的漁網張開
          //-2-this._bulletsSystem.setBulletIsDeath(fishes);
          //-bullet裡面自己做
          //this._gameMediator.getViewUserData(GameViewMediatorUser.BulletView,GameViewMediatorUserDataKey.Bullet_setBulletIsDeath,value.bsn);

        }else{
           
            let isPlayer:boolean=false;
            //--0-3
            if(value.siteIndex==this._viewModel['_playerTableId'])
            {
                isPlayer=true;
            }
            
            let spMode=value.fish.bonus; 

            let fd:Fish1FishData=this._gameMediator.getViewUserData(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_getFishById,value.fish.sn);
            
            if(fd)
            {
                let pos:Vec3;

                //--有道具
                if(value.fish.props!=0 && isPlayer)
                {
                    pos=this.getFish2Dand3DAnimationPositionToWorld(fd.fishMeshState,v3(fd.fishFlockUnit.position.x,fd.fishFlockUnit.position.y));

                    //log('check_propStartWp',pos,fd.fishFlockUnit.position);
                    this.executeAnimation(
                    {
                        aniEffectTypeId:Fish1AniEffectTypeMap.ANI_GET_PROP_EFFECT,
                        other:
                        {
                            propType:value.fish.props,
                            wp:pos
                        }
                    });
                    
                }
                
                if(this._bossType.indexOf(fd.fishType)!=-1)
                {
                    //--準備取玩家的暱稱
                    let logininName:string=GameUtils.processAccountName(this.getplayerLoginName(value.siteIndex));

                    this._killBossResult={id:logininName,payOff:value.fish.payoff};//--kill fish來的資料
                    
                    this.executeAnimation({aniEffectTypeId:Fish1AniEffectTypeMap.ANI_GD_KILL_RESULT});
                    
                    this.executeAnimation({aniEffectTypeId:Fish1AniEffectTypeMap.ANI_GD_OUT});

                    //--removeFishById要再補把鎖定/自動打的資料抹掉
                    this._gameMediator.getViewUserData(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_removeFishById,value.fish.sn);

                }else if(this._spOddsType.indexOf(fd.fishType)!=-1)
                {
                    //--炸彈 & 閃電 (killSpFish=[{fid:379,ft:16}...])
                    log('checkKillSPFish_data',value);

                    let chainKillfish=value.fish.killSpFish;
                    
                    let chainDatas:{fpos:Vec3,sn:number,type:number,payoff:number}[]=[];

                    let totalPayforchain:number=0;

                    //--把目標魚(閃電/炸彈)塞到chainDatas裡面的第一個
                    if(!chainKillfish)
                    {
                        chainKillfish=[];
                    
                    }else{
                        
                        //--如果有炸彈或是閃電的話,檢查位置將他們擠到陣列第一個位置
                        chainKillfish.sort(this.sortChainDatas);
                    }
                    //-{fid:380,ft:8,ws:30}要偽裝進來的資料內容

                    //--檢查閃電/炸彈是否已經在連鎖群裡面,沒有的話推進第一個
                    if(this.checkChainDatas(fd.id,chainKillfish))
                    {
                        chainKillfish.unshift({fid:value.fish.sn,ft:value.fish.ftp,ws:value.fish.payoff});
                    }

                    log('check_afterData',chainKillfish);
                    
                    
                    for(let i:number=0;i<chainKillfish.length;i++)
                    {
                        //--有資料
                        let chainFd:Fish1FishData=(i==0)?fd:this._gameMediator.getViewUserData(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_getFishById,chainKillfish[i].fid);
                        
                        //--把魚從路徑中抽離
                        this._gameMediator.getViewUserData(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_removeSinglePathUnitByFishId,chainKillfish[i].fid);
                        //--停止受擊動畫
                        this._gameMediator.getViewUserData(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_hitFishAniComplete,chainFd);

                        if(chainFd)
                        {
                            pos=this.getFish2Dand3DAnimationPositionToWorld(chainFd.fishMeshState,v3(chainFd.fishFlockUnit.position.x,chainFd.fishFlockUnit.position.y));

                            chainDatas.push({fpos:pos,sn:chainKillfish[i].fid,type:chainKillfish[i].ft,payoff:chainKillfish[i].ws});
                            
                            totalPayforchain+=chainKillfish[i].ws;
                        }

                        
                    }

                    //--將鎖定/自動打的列表中刪除-   
                    this._gameMediator.getViewUserData(GameViewMediatorUser.GameLogicSystem,GameViewMediatorUserDataKey.GameLogic_cleanManualLock,fd.id);

                    
                    //--閃電魚/炸彈本身不噴錢(他是噴總額圓盤)

                    if(chainDatas.length>1)
                    {
                        //--接表演動畫
                        let afterAniData:AfterAnimationData=
                        {
                            id:value.fish.sn,
                            table:value.siteIndex,
                            isPlayer:isPlayer,
                            totalPayoff:totalPayforchain,
                            odds:value.fish.odds,
                            fishType:value.fish.ftp,
                            spMode:spMode,
                            infoData:chainDatas
                        };

                        this._afterAniDataMap[afterAniData.id]=afterAniData;
                        //--fd.fishType==22 閃電/fd.fishType==23 炸彈
                        let commandId:number=(fd.fishType==22)?AniEffectTypeMap.ANI_showFlashLightningEffect:AniEffectTypeMap.ANI_showBombEffect;

                        this.executeAnimation(
                        {
                            aniEffectTypeId:commandId,
                            other:
                            {
                                id:afterAniData.id,
                                chainFishDatas:chainDatas
                            }
                        });

                    }else{

                        //--沒有連鎖直接爆開給分

                        //--給圓盤動畫
                        this.executeAnimation({aniEffectTypeId:Fish1AniEffectTypeMap.ANI_AWARD_DISC_EFFECT,
                        other:{
                            //money:value.fish.payoff,
                            money:chainKillfish[0].ws,
                            playerIndex:value.siteIndex
                        }});

                        //--刪除魚
                        this._gameMediator.getViewUserData(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_removeFishById,value.fish.sn);
                    }
                        

                }else {
                                     
                    //--這裡是一般的擊殺
                    //--換世界座標
                    //log('AniEffectView_hitFish',fd);

                    //let pos:Vec3=this.getFish2Dand3DAnimationPositionToWorld(fd.fishMeshState,fd.fishMesh.position);
                    pos=this.getFish2Dand3DAnimationPositionToWorld(fd.fishMeshState,v3(fd.fishFlockUnit.position.x,fd.fishFlockUnit.position.y));
                    
                    //--這邊要依照odds來決定撥放哪一種的效果
                    //--賠率不同都會有不同的效果區間
                    SoundsManager.getInstance().play('sounds/moneydrop');

                    this.executeAnimation({
                        
                        aniEffectTypeId:AniEffectTypeMap.ANI_showPayoffMoneyAndDigits,
                        //aniEffectTypeId:oddsEffectCommandId,
                        
                        other:{
                            money:
                            {
                                isPlayer:isPlayer, 
                                x:pos.x,
                                y:pos.y,
                                playerIndex:value.siteIndex
                            },
                            digits:
                            {
                                showNumber:value.fish.payoff, 
                                x:pos.x,
                                y:pos.y
                            }
                        }    

                    });

                   


                    if(this._bigOddsType.indexOf(fd.fishType)!=-1)
                    {
                        //--背景反黑的爆炸+fishDeath Effect+大圓盤
                       
                        this.executeAnimation(
                        {
                            aniEffectTypeId:Fish1AniEffectTypeMap.ANI_BIG_ODDS_FISH_EFFECT,
                            other:
                            {
                                playerIndex:value.siteIndex,
                                money:value.fish.payoff,
                                position:pos
                            }
                        });


                    }else if(this._midOddsType.indexOf(fd.fishType)!=-1)
                    {
                        //--搖背景+一般金額撒錢

                        this.executeAnimation(
                        {
                            aniEffectTypeId:Fish1AniEffectTypeMap.ANI_MID_ODDS_FISH_EFFECT,
                            other:null
                        });

                    }
                    

                    //--removeFishById要再補把鎖定/自動打的資料抹掉
                    this._gameMediator.getViewUserData(GameViewMediatorUser.FishView,GameViewMediatorUserDataKey.Fish_removeFishById,value.fish.sn);
                }

               

                //this.cleanManualLock(value.fish[k].sn);---待補
              
            }
            

           
           

        }
    }

    private sortChainDatas(a:{fid:number,ft:number, ws:number},b:{fid:number,ft:number, ws:number}):number
    {
        if (a.ft === 22 || a.ft === 23) 
        {
            return -1;
        }else if (b.ft === 22 || b.ft === 23) 
        {
            
            // 如果 b 的 ft 等于 22 或者 23，将其排在前面
            return 1;

        }else {
           
            return 0;// 否则按照原始顺序排列
        }
    }

    private checkChainDatas(targetFid:number,chainDatas:{fid:number,ft:number, ws:number}[]):boolean
    {
        let f:boolean=true;

        for(let i:number=0;i<chainDatas.length;i++)
        {
            if(chainDatas[i].fid==targetFid)
            {
                f=false;
                break;
            }
        }

        return f; 
    }

    
    private checkAndCleanLeavePlayerEffects(value:{tables:TableInfo[],firstIntoRoom:boolean}):void
    {
        let room:TableInfo[]=value.tables;
        
        let len:number=room.length;
        
        for(let i:number=0;i<len;i++)
        {
            if(room[i].userID==0)
            {
                //--空桌
                this.executeAnimation( 
                {
                    aniEffectTypeId: Fish1AniEffectTypeMap.ANI_CRAZY_EFFECT,
                    other:{
                        
                        table:i,//--0-3
                        open:false
                    }
                });

            }

        }
    }
   
    /**
     * 取得房間內特定座位玩家的暱稱(boss顯示結算要用的)
     * @param index 0-3
     */
    private getplayerLoginName(index:number):string
    {
        let tables:TableInfo[]=this._viewModel['_roomTableInfo'].tables;
        
        return tables[index].userLoginName;

    }

    private getFish2Dand3DAnimationPositionToWorld(type:fishMeshState,pos:Vec3):Vec3
    {
        let rpos:Vec3;

        let fishContainer:Node=find('Canvas/fishNodeContainer/fishNode');
           
        rpos=fishContainer.getComponent(UITransform).convertToWorldSpaceAR(pos);
        
        /*
        if(type==fishMeshState.fish2D)
        {
           let fishContainer:Node=find('Canvas/fishNodeContainer/fishNode');
           
           rpos=fishContainer.getComponent(UITransform).convertToWorldSpaceAR(pos);

        }else{
           
           
            let sceneCameraNode:Node=find('Main Camera');
            
            let cameraComponent=sceneCameraNode.getComponent(CameraComponent);
            
            let wts:Vec3=cameraComponent.worldToScreen(pos);
            
            let canvasCameraNode:Node=find('Canvas/Camera');
            //--canvas camera cameracomponent
            let canvasCameraComponent=canvasCameraNode.getComponent(CameraComponent);

            //--screen to world
            rpos=canvasCameraComponent.screenToWorld(wts);
          
        }*/

        return rpos;
    }

    
    /**
    * override it
    * 你可以將sub當作key值,switch case他來做相關的處理
    * @param sub 屬性變數的字串
    * @param value 傳送的資料
    */
    protected modeleChangeHandler=(sub,value)=>
    {
       //log('modeleChangeHandler_Fish1AniEffectSystemView_',sub,value); 
       

       switch(sub)
       {
            
            //--玩家離開房間要把效果抹除
            case '_roomTableInfo':

            this.checkAndCleanLeavePlayerEffects(value[0]);

            break;
        
        
            case '_hitFishs':
              
              //log('fishViewEffect__hitFishs',value,this._viewModel['_playerTableId']);
              
              this.hitFish(value[0]);

            
            break;

            case '_roomStatus':
               /**
                *  ps狀態代碼資訊
                    0=正常/一般狀態,
                    1=冰凍,
                    2=金龍來襲,
                    3=金龍死亡(禁止進房)
                */

               log('check_effect__roomStatus',value[0].status);     

               if(value[0].status==2)
               {
                    this.executeAnimation({
                    
                        aniEffectTypeId:Fish1AniEffectTypeMap.ANI_GD_COMMING
                    }); 

                    
                    this.executeAnimation( 
                    {
                        aniEffectTypeId: Fish1AniEffectTypeMap.ANI_FREEZE_EFFECT,
                        other:{
                            freeze:false
                        }
                    });


                    this.executeAnimation( 
                    {
                        aniEffectTypeId: Fish1AniEffectTypeMap.ANI_SUMMON_EFFECT,
                        other:{
                            close:true,
                            index:null,
                            swp:null,
                            ewp:null
                        }
                    });
                    

                    //---魚潮或是boss(JP魚)啟動時,限制道具要鎖住,cd與道具效果要關閉



               }else if(value[0].status==1)
               {
                    log('excute_effect_Freeze_',value[0].status,this._aniEffect);
                    this.executeAnimation( 
                    {
                        aniEffectTypeId:Fish1AniEffectTypeMap.ANI_FREEZE_EFFECT,
                        other:{
                            freeze:true
                        }
                    });

               }else if(value[0].status==0)
               {
                    this.executeAnimation( 
                    {
                        aniEffectTypeId: Fish1AniEffectTypeMap.ANI_FREEZE_EFFECT,
                        other:{
                            freeze:false
                        }
                    });

                    this.executeAnimation({aniEffectTypeId:Fish1AniEffectTypeMap.ANI_GD_OUT});

               }
                
            break;

            case '_mapCannonInfo':
                
                //log('fishViewEffect_mapCannonInfo',value,this._viewModel['_mapCannonInfo']);
                
                //--這邊由addbullet來啟動要去換powerup的資料,要在房間狀態是boss的時候才會啟動
                this._mapCannonInfo=value[0];

                

            break;


            case '_useSummonProp':
                
                //--20231120--for use summon prop--
                
                
                //let worldEndPosition=find('Canvas/aniEffectNode').getComponent(UITransform).convertToWorldSpaceAR(v3(0,0,0));

                //let startWp=this._gameMediator.getViewUserData(GameViewMediatorUser.GuisSystemView,GameViewMediatorUserDataKey.Gui_rotateCannonAndGetPosition,{index:value[0].index,pos:worldEndPosition});
                
                
                this.executeAnimation( 
                {
                    aniEffectTypeId: Fish1AniEffectTypeMap.ANI_SUMMON_EFFECT,
                    other:{
                        close:false,
                        index:value[0].index,
                        swp:null,
                        ewp:null
                    }
                });
                //-_freeze

            break;

            case '_freeze'://--這個效果摒到房間(使用道具通知只針對玩家自己啟動cd計算)

                //log('fishViewEffect___freeze',value);
            
                this.executeAnimation( 
                {
                    aniEffectTypeId: Fish1AniEffectTypeMap.ANI_FREEZE_EFFECT,
                    other:{
                        freeze:value[0]
                    }
                });

            break;

            case '_useCrazyProp':

                //log('fishViewEffect____useCrazyProp',value);
                
                this.executeAnimation( 
                {
                    aniEffectTypeId: Fish1AniEffectTypeMap.ANI_CRAZY_EFFECT,
                    other:{
                        
                        table:value[0].index,
                        open:value[0].open
                    }
                });

            break;
        
            
            case '_addbullets':
            
            
            //this._addbullets=this._viewModel['_addbullets'];
            //this._addbullets=value[0];
            //--do something
            //log('Fish1AniEffectSystemView___addbullets',this._viewModel['_addbullets']);
            /*
            ps狀態代碼資訊:
            0=正常/一般狀態,1=冰凍,2=金龍來襲,3=金龍死亡(禁止進房)
            */
            let bulletData=this._viewModel['_addbullets'];

            
            /**
             * 20240219
             * 待在場內='in',離場='exit',正常狀態='',
             * 去篩選出離場前最後一發,但是server 還未改變房間狀態下(還沒從金龍轉變成一般狀態的空檔)
             */
            let bossStatus=this._viewModel['_bossStatus'];

            log('check_addbullet_with_boss',bossStatus);    

            if(bulletData.info.roomStatus==2 && bossStatus=='in')
            {               
                let powerValue:number=this._mapCannonInfo[bulletData.weaponType].powerup;
               
                this.executeAnimation({
                        
                aniEffectTypeId:Fish1AniEffectTypeMap.ANI_GD_POWERUP,
                
                other:{index:bulletData.siteIndex,pwvalue:powerValue}    

                });
            }

            //==============測試區域===========================================================================
           

            //-value.other.isPlayer,value.other.x,value.other.y,value.other.playerIndex
            /*
            this._aniEffect.executeAnimation({
                command:AniEffectID.ANI_Money,
                other:{
                    
                    isPlayer:true, 
                    x:value[0].info.endX,
                    y:value[0].info.endY,
                    playerIndex:value[0].siteIndex

                }
            });

            let score=GameUtils.getRangeRandom(2500,9999999);
            this._aniEffect.executeAnimation({
                command:AniEffectID.ANI_JumpDigits,
                other:{ 
                    showNumber:score, 
                    x:value[0].info.endX,
                    y:value[0].info.endY 
                }
            });*/
             
            /*
            this.executeAnimation({
                
                aniEffectTypeId:Fish1AniEffectTypeMap.ANI_GD_RESULT,
                other:{id:'hellotest',payOff:2500}
            });
            */

            /*
            this._killBossResult={id:'hellotest',payOff:2500};//--kill fish來的資料
            this.executeAnimation({
                
                aniEffectTypeId:Fish1AniEffectTypeMap.ANI_GD_KILL_RESULT
                //other:{id:'hellotest',payOff:2500}
            });
            */

            //this._aniEffect.executeAnimation({command:Fish1AniEffectID.ANI_BG_EFFECT_CHANGE});
                    
           
            break;

           
       }

    }


    

    //--interface abstract
    public getData(dataKey:string,value?:any):any
    {
        
        switch(dataKey)
        {
            case GameViewMediatorUserDataKey.Effect_bossExit:

                this.executeAnimation({
                    
                    aniEffectTypeId:Fish1AniEffectTypeMap.ANI_GD_OUT
                }); 

            break;

            case GameViewMediatorUserDataKey.Effect_bossShake:

                //let bg:BgAniEffect=this.getCommandInstance(BgAniEffect.name);
                let bg:BgAniEffect=this.getCommandInstance('BgAniEffect');
                
                let targetNode:Node=bg.getBg();
 
                if(targetNode)
                {
                   //-Fish1AniEffectTypeMap.ANI_SHAKE_EFFECT
                     this.executeAnimation({
                         
                         //aniEffectTypeId:Fish1AniEffectTypeMap.ANI_SHAKE_EFFECT,
                         aniEffectTypeId:AniEffectTypeMap.ANI_showShakeEffect,
                         other:targetNode
                     }); 
                }
                

            break;


        }

    }
    //--interface abstract
    public excute(value?:any):any
    {
        
        
    }
}
/**
 * Created by EricHuang on 2023/10/08.
 * 這邊接hit fish
 */
import {AnimationEffectViewBase} from '../../../framework/game/views/animationEffectViewBase/AnimationEffectViewBase'
import {InitAniEffect} from '../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {AniEffectID} from '../../../framework/logic/views/aniEffectView/AniEffectDefinitions';
import {MoneyEffect} from '../../../framework/logic/views/aniEffectView/anieffects/MoneyEffect';
import {DgCommingTitleAni} from './aniEffects/DgCommingTitleAni';
import {DgOpenAniEffect} from './aniEffects/DgOpenAniEffect';
import {DgExplosionAniEffect} from './aniEffects/DgExplosionAniEffect';
import {DgKillDragonTitleAni} from './aniEffects/DgKillDragonTitleAni';
import {DgAnnounceAni} from './aniEffects/DgAnnounceAni';
import {BgAniEffect} from './aniEffects/BgAniEffect';
import {ShakeAniEffect} from './aniEffects/ShakeAniEffect';
import {DgParticleCoinsAnieffect} from './aniEffects/DgParticleCoinsAnieffect';
import {PowerUpAni} from './aniEffects/PowerUpAni';
import {LightningEffect} from './aniEffects/LightningEffect';
import {GiftBombAniEffect} from './aniEffects/GiftBombAniEffect';
import {DeathLightAniEffect} from './aniEffects/DeathLightAniEffect';
import {AwardDiscAniEffect} from './aniEffects/AwardDiscAniEffect';
import {CallAniEffect} from './aniEffects/CallAniEffect';
import {FrozenAniEffect} from './aniEffects/FrozenAniEffect';
import {CrazyAniEffect} from './aniEffects/CrazyAniEffect';
import {GetPropAniEffect} from './aniEffects/GetPropAniEffect';
import {JumpDigitsEffect} from '../../../framework/logic/views/aniEffectView/anieffects/JumpDigitsEffect';
import {MoneyEffectCommand} from '../../../framework/logic/views/aniEffectView/commands/MoneyEffectCommand';
import {JumpDigitsEffectCommand} from '../../../framework/logic/views/aniEffectView/commands/JumpDigitsEffectCommand';
import {BgAniEffectCommand} from './commands/BgAniEffectCommand';
import {DgCommingCommand} from './commands/DgCommingCommand';
import {DgOpenCommand} from './commands/DgOpenCommand';
import {DgOutCommand} from './commands/DgOutCommand';
import {DgExplosionCommand} from './commands/DgExplosionCommand';
import {DgKillDragonTitleCommand} from './commands/DgKillDragonTitleCommand';
import {DgAnnounceAniCommand} from './commands/DgAnnounceAniCommand';
import {DgParticleCoinsAnieffectCommand} from './commands/DgParticleCoinsAnieffectCommand';
import {PowerUpAniCommand} from './commands/PowerUpAniCommand';
import {ShakeAniEffectCommand} from './commands/ShakeAniEffectCommand';
import {LightningEffectCommand} from './commands/LightningEffectCommand';
import {GiftBombEffectCommand} from './commands/GiftBombEffectCommand';
import {DeathLightAniEffectCommand} from './commands/DeathLightAniEffectCommand';
import {AwardDiscAniEffectCommand} from './commands/AwardDiscAniEffectCommand';
import {CallAniEffectCommand} from './commands/CallAniEffectCommand';
import {FrozenAniEffectCommand} from './commands/FrozenAniEffectCommand';
import {CrazyAniEffectCommand} from './commands/CrazyAniEffectCommand';
import {GetPropAniEffectCommand} from './commands/GetPropAniEffectCommand';
import {Fish1AniEffectID} from './Fish1AniEffectDefinitions';
import { CocosGameSetting } from '../../../framework/utils/CocosGameSetting';
import { director, find } from 'cc';
import {log} from 'cc';


//--這是AniEffectInvorker
export class Fish1AniEffectView extends AnimationEffectViewBase
{
    constructor()
    {
        super();

        
    }

    //--override(進房間後取得資訊再執行)
    public setDataAfterSetRoom():void
    {
       log('setDataAfterSetRoom');
       //---寫入進房間後相關座位資訊
       let command=this.getCommand(AniEffectID.ANI_Money);
       
       command?.setDataAfterSetRoom({coinEndinfo:this._aniPositionInfo.coniEndinfo});
       
       command=this.getCommand(Fish1AniEffectID.ANI_POWERUP_EFFECT);

       command?.setDataAfterSetRoom({exchangePositions:this._aniPositionInfo.exchangePositions,playerIndex:this._playerIndex});

       
       command=this.getCommand(Fish1AniEffectID.ANI_AWARD_DISC_EFFECT);

       command?.setDataAfterSetRoom({positions:this._aniPositionInfo.positions,playerIndex:this._playerIndex});

       command=this.getCommand(Fish1AniEffectID.ANI_SUMMON_EFFECT);
       //--this._aniPositionInfo.playerPositions=global world positions
       command?.setDataAfterSetRoom({positions:this._aniPositionInfo.playerPositions});    

       command=this.getCommand(Fish1AniEffectID.ANI_CRAZY_EFFECT);
       //--this._aniPositionInfo.playerPositions=global world positions
       command?.setDataAfterSetRoom({positions:this._aniPositionInfo.playerPositions}); 

       command=this.getCommand(Fish1AniEffectID.ANI_GET_PROP_EFFECT);
        
       command?.setDataAfterSetRoom({menuPositions:this._aniPositionInfo.menuPositions});

    }

    public resetRoomData():void
    {
        let command=this.getCommand(Fish1AniEffectID.ANI_AWARD_DISC_EFFECT); 
        
        command?.resetRoomData();

        command=this.getCommand(Fish1AniEffectID.ANI_SUMMON_EFFECT); 
        
        command?.resetRoomData();

        command=this.getCommand(Fish1AniEffectID.ANI_CRAZY_EFFECT);

        command?.resetRoomData();
        
        
    }




    //--override(進房間前先執行)
    public setCommands():void
    {
        //---寫入要建構的class/data也在這邊先做好
        let command:InitAniEffect=
        {
            id:AniEffectID.ANI_Money,
            commandConstructor:MoneyEffectCommand,
            classConstructor:MoneyEffect,
            classConstructorId:'MoneyEffect',
            classArgs:[
                {
                    //container:this._stageNode,
                    container:find('Canvas/coinAniEffectLayer'),
                    //coinEndinfo:this._aniPositionInfo.coniEndinfo,
                    //playerIndex:this._playerIndex,//-沒用到
                    moneyTexturePath:{
                        atlas:'prefab/textures/fishHunterGui',
                        spriteFrame:'money_ani0000'
                    }
                }]

        }

        this.addCommand(command);   
        
        command=
        {
            id:AniEffectID.ANI_JumpDigits,
            commandConstructor:JumpDigitsEffectCommand,
            classConstructor:JumpDigitsEffect,
            classConstructorId:'JumpDigitsEffect',
            classArgs:[
                {
                    container:this._stageNode,
                    other:
                    {
                        strDefultTexturePath:'num_winScore_'
                    }
                }],

        }

        this.addCommand(command); 
        
        //--title-- 
        command=
        {
            id:Fish1AniEffectID.ANI_GD_COMMING,
            commandConstructor:DgCommingCommand,
            classConstructor:DgCommingTitleAni,
            classConstructorId:'DgCommingTitleAni',
            classArgs:[
                {
                    container:this._stageNode,
                    other:
                    {
                        prefabId:'prefab/aniEffect/titleGD',
                        languageNodeId:'tx',
                        atlasId:'fishHunter_'+CocosGameSetting.Game_Lang,
                        frameId:'tx_main_gd_is_coming'

                    }
                }],

        }

        this.addCommand(command); 



        
        command=
        {
            id:Fish1AniEffectID.ANI_GD_OPENING,
            commandConstructor:DgOpenCommand,
            classConstructor:DgOpenAniEffect,
            classConstructorId:'DgOpenAniEffect',
            classArgs:[
                {
                    container:director.getScene(),
                    other:
                    {
                        prefabId:'prefab/aniEffect/fish_24_opening',
                    }
                }],

        }

        this.addCommand(command); 


        command=
        {
            id:Fish1AniEffectID.ANI_GD_OUT,
            commandConstructor:DgOutCommand,
            classConstructor:DgOpenAniEffect,
            classConstructorId:'DgOpenAniEffect',
            classArgs:[
                {
                    container:director.getScene(),
                    other:
                    {
                        prefabId:'prefab/aniEffect/fish_24_opening',
                    }
                }],

        }

        this.addCommand(command); 


        command=
        {
            id:Fish1AniEffectID.ANI_GD_EXPLOSION,
            commandConstructor:DgExplosionCommand,
            classConstructor:DgExplosionAniEffect,
            classConstructorId:'DgExplosionAniEffect',
            classArgs:[
                {
                    container:director.getScene(),
                    other:
                    {
                        prefabId:'prefab/aniEffect/nuclearBombDragon',
                        
                    }
                }],

        }

        this.addCommand(command); 

        command=
        {
            id:Fish1AniEffectID.ANI_GD_KILL_TITLE,
            commandConstructor:DgKillDragonTitleCommand,
            classConstructor:DgKillDragonTitleAni,
            classConstructorId:'DgKillDragonTitleAni',
            classArgs:[
                {
                    container:this._stageNode,
                    other:
                    {
                        prefabId:'prefab/aniEffect/aniKillDragonTitle',
                        atlasId:'fishHunter_'+CocosGameSetting.Game_Lang,
                        frameId:'tx_kill_dragon'
                    }
                }],

        }

        this.addCommand(command); 


        command=
        {
            id:Fish1AniEffectID.ANI_GD_KILL_ANNOUNCE,
            commandConstructor:DgAnnounceAniCommand,
            classConstructor:DgAnnounceAni,
            classConstructorId:'DgAnnounceAni',
            classArgs:[
                {
                    container:this._stageNode,
                    other:
                    {
                        prefabId:'prefab/aniEffect/win',
                        tx_congratulate_atlasId:'fishHunter_'+CocosGameSetting.Game_Lang,
                        tx_congratulate:'tx_congratulate',
                        tx_get_atlasId:'fishHunter_'+CocosGameSetting.Game_Lang,
                        tx_get:'tx_get',
                        digitsTexturePath:'num_winScore_'
                        //atlasId:'fishHunter_'+CocosGameSetting.Game_Lang,
                        //frameId:'tx_kill_dragon'
                    }
                }],

        }

        this.addCommand(command); 

        command=
        {
            id:Fish1AniEffectID.ANI_GD_KILL_PARTICLE_COINS,
            commandConstructor:DgParticleCoinsAnieffectCommand,
            classConstructor:DgParticleCoinsAnieffect,
            classConstructorId:'DgParticleCoinsAnieffect',
            classArgs:[
                {
                    container:director.getScene(),
                    other:
                    {
                        prefabId:'prefab/aniEffect/particleCoins'
                    }
                }],

        }

        this.addCommand(command); 


        command=
        {
            id:Fish1AniEffectID.ANI_BG_EFFECT_CHANGE,
            commandConstructor:BgAniEffectCommand,
            classConstructor:BgAniEffect,
            classConstructorId:'BgAniEffect',
            classArgs:[
                {
                    container:this._stageNode,
                    other:
                    {
                        scene:director.getScene(),
                        sceneCameraNode:'Main Camera',
                        canvasCameraNode:'Canvas/CameraGUI',
                        spriteFrameIds:['bg/bg_1/texture','bg/bg_2/texture'],
                        prefabId:'prefab/aniEffect/wave',
                        motionTime:2.2//-秒

                    }
                }],

        }

        this.addCommand(command); 


        command=
        {
            id:Fish1AniEffectID.ANI_POWERUP_EFFECT,
            commandConstructor:PowerUpAniCommand,
            classConstructor:PowerUpAni,
            classConstructorId:'PowerUpAni',
            classArgs:[
                {
                    container:this._stageNode,
                    //playerIndex:this._playerIndex,
                    //positions:this._aniPositionInfo.exchangePositions,//--old座位座標資訊(world position)
                    //exchangePositions:this._aniPositionInfo.exchangePositions,//--座位座標資訊(world position)
                    prefabId:'prefab/aniEffect/powerUp',
                    powerUpDigitsTexturePath:{
                        //atlas:'prefab/textures/fishHunterDragon',
                        spriteFrame:'num_power_'
                    }

                }]

        }

        this.addCommand(command); 



        command=
        {
            id:AniEffectID.ANI_ShakeEffect,
            commandConstructor:ShakeAniEffectCommand,
            classConstructor:ShakeAniEffect,
            classConstructorId:'ShakeAniEffect',
            classArgs:[
            {
                container:this._stageNode
            }]

        }

        this.addCommand(command); 


        command=
        {
            id:AniEffectID.ANI_Flash_Lightning,
            commandConstructor:LightningEffectCommand,
            classConstructor:LightningEffect,
            classConstructorId:'LightningEffect',
            classArgs:[
            {
                container:this._stageNode,
                scene:director.getScene(),
                cameraId:'Canvas/CameraFX',
                textureId:'prefab/textures/lightning/texture',
                prefabId:'prefab/aniEffect/lightningPoint'
            }]

        }

        this.addCommand(command); 


        command=
        {
            id:AniEffectID.ANI_BombEffect,
            commandConstructor:GiftBombEffectCommand,
            classConstructor:GiftBombAniEffect,
            classConstructorId:'GiftBombAniEffect',
            classArgs:[
            {
                container:this._stageNode,
                cameraId:'Canvas/CameraFX',
                scene:director.getScene(),
                prefabId:'prefab/aniEffect/giftbomb'
            }]

        }

        this.addCommand(command); 
        

        command=
        {
            id:Fish1AniEffectID.ANI_DEATH_LIGHT_EFFECT,
            commandConstructor:DeathLightAniEffectCommand,
            classConstructor:DeathLightAniEffect,
            classConstructorId:'DeathLightAniEffect',
            classArgs:[
            {
                container:this._stageNode,
                cameraId:'Canvas/CameraFX',
                scene:director.getScene(),
                prefabId:'prefab/aniEffect/fishDeath'
            }]

        }

        this.addCommand(command); 



        command=
        {
            id:Fish1AniEffectID.ANI_AWARD_DISC_EFFECT,
            commandConstructor:AwardDiscAniEffectCommand,
            classConstructor:AwardDiscAniEffect,
            classConstructorId:'AwardDiscAniEffect',
            classArgs:[
            {
                container:this._stageNode,
                cameraId:'Canvas/CameraFX',
                //position:this._aniPositionInfo.positions,
                //playerTable:this._playerIndex,
                maxmumTable:4,//--最大座位數(有的遊戲是3個)
                digitsTexturePath:'num_big_',
                //scene:director.getScene(),
                prefabId:'prefab/aniEffect/bigCoin'
            }]

        }

        this.addCommand(command); 


        command=
        {
            id:Fish1AniEffectID.ANI_SUMMON_EFFECT,
            commandConstructor:CallAniEffectCommand,
            classConstructor:CallAniEffect,
            classConstructorId:'CallAniEffect',
            classArgs:[
            {
                container:find('Canvas/topAniEffectNode'),//--UI之上(圓盤特效用的)
                aniEffectContainer:this._stageNode,//--UI之下寶貝球
                scene:director.getScene(),
                //position:this._aniPositionInfo.positions,//-沒用到
                //playerPositions:this._aniPositionInfo.playerPositions,//--global world positions
                //playerTable:this._playerIndex,//-0-3(沒用到)
                callTowerPrefabId:'prefab/aniEffect/itemCallTowerFx',
                callFxPrefabId:'prefab/aniEffect/itemCallFX',//----上面一層是縮放,下面一層是透明度,所以要播兩段
                //callFxUnderPrefabId:'',
                callSymbolPrefabId:'prefab/aniEffect/itemCallSymbol'
            }]

        }

        this.addCommand(command); 


        command=
        {
            id:Fish1AniEffectID.ANI_FREEZE_EFFECT,
            commandConstructor:FrozenAniEffectCommand,
            classConstructor:FrozenAniEffect,
            classConstructorId:'FrozenAniEffect',
            classArgs:[
            {
                container:this._stageNode,
                spriteFrameId:'bg/fishHunterFrozen/spriteFrame'
            }],

        }

        this.addCommand(command); 


        command=
        {
            id:Fish1AniEffectID.ANI_CRAZY_EFFECT,
            commandConstructor:CrazyAniEffectCommand,
            classConstructor:CrazyAniEffect,
            classConstructorId:'CrazyAniEffect',
            classArgs:[
            {
                container:find('Canvas/topAniEffectNode'),//--UI之上(圓盤特效用的)
                //position:this._aniPositionInfo.positions,
                //playerPositions:this._aniPositionInfo.playerPositions,//--global world positions
                //playerTable:this._playerIndex,//-0-3--沒用到
                crazyTowerPrefabId:'prefab/aniEffect/itemCrazyTowerFx',
            }]

        }

        this.addCommand(command); 



        command=
        {
            id:Fish1AniEffectID.ANI_GET_PROP_EFFECT,
            commandConstructor:GetPropAniEffectCommand,
            classConstructor:GetPropAniEffect,
            classConstructorId:'GetPropAniEffect',
            classArgs:[
            {
                container:find('Canvas/topAniEffectNode'),//--UI之上(圓盤特效用的)
                //cameraFishNode:find('Canvas/Camera'),
                //cameraGuiNode:find('Canvas/CameraGUI'),
                //position:this._aniPositionInfo.positions,
                //menuPositions:this._aniPositionInfo.menuPositions,//--global world positions
                //playerTable:this._playerIndex,//-0-3-沒用到
                //--1 summon 2 frozen 3 crazy
                propSpriteFrames:['Props_call_btn_over','Props_frozen_btn_over','Props_crazy_btn_over']
            }]

        }

        this.addCommand(command);
        
        log('addEffectready@@');


    }

    public playAniEffect():void
    {
        
    }

}




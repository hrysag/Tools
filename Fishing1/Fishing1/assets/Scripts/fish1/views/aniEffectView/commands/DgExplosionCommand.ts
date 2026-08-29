/**
 * Created by EricHuang on 2023/10/20.
 */
import {AniEffectBaseCommand} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {ExecuteOption,AniOption} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {DgExplosionAniEffect} from '../aniEffects/DgExplosionAniEffect';
import {AnimationEffectEvent,EventSendObject} from '../../../../framework/game/events/eventBase'; 
import {log} from 'cc';
 
export class DgExplosionCommand extends AniEffectBaseCommand
{
    private _dgExplosionAniEffect:DgExplosionAniEffect;

    constructor(...args)
    {
        super();

        this._dgExplosionAniEffect=args[0];

        this._dgExplosionAniEffect.on(AnimationEffectEvent.COMPLETE,this.sendEvt);
    }

    private sendEvt=(e:EventSendObject)=>
    {
        log('Explosion_finish_commands',e); 
        this.emit(e.type,e);
    }

    public resetRoomData(value?:any):void
    {
        
    }

    public setDataAfterSetRoom(value:any):void
    {
        
    }


    public execute(value?:ExecuteOption):any
    {
        //this._dgOpenAniEffect.bossOpenInInitGame();
        this._dgExplosionAniEffect.playexplosion();
    }
}
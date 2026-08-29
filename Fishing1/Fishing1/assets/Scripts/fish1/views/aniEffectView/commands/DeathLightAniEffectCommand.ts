/**
 * Created by EricHuang on 2023/10/23.
 */
import {AniEffectBaseCommand} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {ExecuteOption,AniOption} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {DeathLightAniEffect} from '../aniEffects/DeathLightAniEffect';
import {AnimationEffectEvent,EventSendObject} from '../../../../framework/game/events/eventBase'; 
import {log} from 'cc';

export class DeathLightAniEffectCommand extends AniEffectBaseCommand
{
    private _deathLightAniEffect:DeathLightAniEffect;

    constructor(...args)
    {
        super();
        
        log('DeathLightAniEffectCommand',args);

        this._deathLightAniEffect=args[0];

        //this._deathLightAniEffect.on(AnimationEffectEvent.COMPLETE,this.sendEvt);

    }

    /*
    private sendEvt=(e:EventSendObject)=>
    {
        log('deathlight_finish_DeathLightAniEffectCommand',e);

        this.emit(e.type,e);
    }*/

    public resetRoomData(value?:any):void
    {
        
    }

    public setDataAfterSetRoom(value:any):void
    {
        
    }

    public execute(value?:ExecuteOption):any
    {
        
        this._deathLightAniEffect.showDeathLight(value.other);
    }
}
/**
 * Created by EricHuang on 2023/10/23.
 */
import {AniEffectBaseCommand} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {ExecuteOption,AniOption} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {LightningEffect} from '../aniEffects/LightningEffect';
import {AnimationEffectEvent,EventSendObject} from '../../../../framework/game/events/eventBase'; 
import {log} from 'cc';

export class LightningEffectCommand extends AniEffectBaseCommand
{
    private _lightningEffect:LightningEffect;

    constructor(...args)
    {
        super();
        
        log('LightningEffectCommand',args);

        this._lightningEffect=args[0];

        this._lightningEffect.on(AnimationEffectEvent.COMPLETE,this.sendEvt);

    }

    private sendEvt=(e:EventSendObject)=>
    {
        log('flashLight_finish_LightningEffectCommand',e);

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
        this._lightningEffect.showLightningEffect(value.other);
    }
}
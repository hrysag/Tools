/**
 * Created by EricHuang on 2023/11/24.
 */
import {AniEffectBaseCommand} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {ExecuteOption,AniOption} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {GetPropAniEffect} from '../aniEffects/GetPropAniEffect';
import {AnimationEffectEvent,EventSendObject} from '../../../../framework/game/events/eventBase'; 
import {log} from 'cc';

export class GetPropAniEffectCommand extends AniEffectBaseCommand
{
    private _getPropAniEffect:GetPropAniEffect;

    constructor(...args)
    {
        super();

        this._getPropAniEffect=args[0];

        //this._getPropAniEffect.on(AnimationEffectEvent.COMPLETE,this.sendEvt);
    }

    /*
    private sendEvt=(e:EventSendObject)=>
    {
        log('Explosion_finish_commands',e); 
        this.emit(e.type,e);
    }*/

    public resetRoomData(value?:any):void
    {
        
    }

    public setDataAfterSetRoom(value:any):void
    {
        this._getPropAniEffect.setDataAfterSetRoom(value.menuPositions);
    }

    public execute(value?:ExecuteOption):any
    {
        this._getPropAniEffect.showGetPropEffect(value.other.propType,value.other.wp);
    }
}
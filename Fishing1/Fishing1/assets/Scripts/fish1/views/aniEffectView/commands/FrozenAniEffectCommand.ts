/**
 * Created by EricHuang on 2023/10/23.
 */
import {AniEffectBaseCommand} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {ExecuteOption,AniOption} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {FrozenAniEffect} from '../aniEffects/FrozenAniEffect';
import {AnimationEffectEvent,EventSendObject} from '../../../../framework/game/events/eventBase'; 
import {log} from 'cc';

export class FrozenAniEffectCommand extends AniEffectBaseCommand
{
    private _frozenAniEffect:FrozenAniEffect;

    constructor(...args)
    {
        super();
        
        log('frozenAniEffectCommand',args);

        this._frozenAniEffect=args[0];

        //this._frozenAniEffect.on(AnimationEffectEvent.COMPLETE,this.sendEvt);

    }

    public resetRoomData(value?:any):void
    {
        
    }

    /*
    private sendEvt=(e:EventSendObject)=>
    {
        log('giftBomb_finish_GiftBombEffectCommand',e);

        this.emit(e.type,e);
    }*/

    public setDataAfterSetRoom(value:any):void
    {
        
    }
  

    public execute(value?:ExecuteOption):any
    {
        log('check_frozenAniEffectCommand_execute',value);
        
        if(value.other.freeze)
        {
            this._frozenAniEffect.openFrozenEffect();
        
        }else{

            this._frozenAniEffect.closeFrozenEffect();

        }

    }
}
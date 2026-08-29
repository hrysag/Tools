/**
 * Created by EricHuang on 2023/10/23.
 */
import {AniEffectBaseCommand} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {ExecuteOption,AniOption} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {GiftBombAniEffect} from '../aniEffects/GiftBombAniEffect';
import {AnimationEffectEvent,EventSendObject} from '../../../../framework/game/events/eventBase'; 
import {log} from 'cc';

export class GiftBombEffectCommand extends AniEffectBaseCommand
{
    private _giftBombAniEffect:GiftBombAniEffect;

    constructor(...args)
    {
        super();
        
        log('GiftBombEffectCommand',args);

        this._giftBombAniEffect=args[0];

        this._giftBombAniEffect.on(AnimationEffectEvent.COMPLETE,this.sendEvt);

    }

    private sendEvt=(e:EventSendObject)=>
    {
        log('giftBomb_finish_GiftBombEffectCommand',e);

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
        this._giftBombAniEffect.showBomb(value.other);
    }
}
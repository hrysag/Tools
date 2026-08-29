/**
 * Created by EricHuang on 2023/10/24.
 */
import {AniEffectBaseCommand} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {ExecuteOption,AniOption} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {AnimationEffectEvent,EventSendObject} from '../../../../framework/game/events/eventBase';
import {DgParticleCoinsAnieffect} from '../aniEffects/DgParticleCoinsAnieffect';
import {log} from 'cc'; 
 
export class DgParticleCoinsAnieffectCommand extends AniEffectBaseCommand
{
    private _dgParticleCoinsAnieffect:DgParticleCoinsAnieffect;

    constructor(...args)
    {
        super();
        
        log('DgParticleCoinsAnieffectCommand',args);

        this._dgParticleCoinsAnieffect=args[0];

        this._dgParticleCoinsAnieffect.on(AnimationEffectEvent.COMPLETE,this.sendEvt);

    }

    private sendEvt=(e:EventSendObject)=>
    {
        log('particle_finish_commands',e); 
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
        //this._dgTitleAni.showOpenEffect();
        //this._dgAnnounceAni.showAnnounceForGD(value.other.id,value.other.payOff);
        this._dgParticleCoinsAnieffect.showParticleCoins();
    }
}
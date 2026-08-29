/**
 * Created by EricHuang on 2023/10/23.
 */
import {AniEffectBaseCommand} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {ExecuteOption,AniOption} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {DgAnnounceAni} from '../aniEffects/DgAnnounceAni';
import {log} from 'cc';

export class DgAnnounceAniCommand extends AniEffectBaseCommand
{
    private _dgAnnounceAni:DgAnnounceAni;

    constructor(...args)
    {
        super();
        
        log('DgAnnounceAniCommand',args);

        this._dgAnnounceAni=args[0];

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
        this._dgAnnounceAni.showAnnounceForGD(value.other.id,value.other.payOff);
    }
}
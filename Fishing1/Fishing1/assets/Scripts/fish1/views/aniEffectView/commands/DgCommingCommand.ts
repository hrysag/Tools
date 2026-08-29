/**
 * Created by EricHuang on 2023/10/17.
 */
import {AniEffectBaseCommand} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {ExecuteOption,AniOption} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {DgCommingTitleAni} from '../aniEffects/DgCommingTitleAni';
import {log} from 'cc';
 
export class DgCommingCommand extends AniEffectBaseCommand
{
    private _dgTitleAni:DgCommingTitleAni;

    constructor(...args)
    {
        super();
        
        log('DgCommingCommand',args);

        this._dgTitleAni=args[0];

    }

    public resetRoomData(value?:any):void
    {
        
    }

    public setDataAfterSetRoom(value:any):void
    {
        
    }

    public execute(value?:ExecuteOption):any
    {
        this._dgTitleAni.showOpenEffect();
    }
}
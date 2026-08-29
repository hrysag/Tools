/**
 * Created by EricHuang on 2023/10/18.
 */
import {AniEffectBaseCommand} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {ExecuteOption,AniOption} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
import {DgOpenAniEffect} from '../aniEffects/DgOpenAniEffect';

export class DgOpenCommand extends AniEffectBaseCommand
{
    private _dgOpenAniEffect:DgOpenAniEffect;

    constructor(...args)
    {
        super();

        this._dgOpenAniEffect=args[0];

    }

    public resetRoomData(value?:any):void
    {
        
    }

    public setDataAfterSetRoom(value:any):void
    {
        
    }

    public execute(value?:ExecuteOption):any
    {
        this._dgOpenAniEffect.bossOpenInInitGame();
    }
}
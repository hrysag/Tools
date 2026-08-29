/**
 * Created by EricHuang on 2023/10/20.
 */
 import {AniEffectBaseCommand} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
 import {ExecuteOption,AniOption} from '../../../../framework/game/aniEffect/AniEffectDefinitionsBase';
 import {DgKillDragonTitleAni} from '../aniEffects/DgKillDragonTitleAni';
  
  
 export class DgKillDragonTitleCommand extends AniEffectBaseCommand
 {
    private _dgKillDragonTitleAni:DgKillDragonTitleAni;

    constructor(...args)
    {
        super();

        this._dgKillDragonTitleAni=args[0];

    }

    public resetRoomData(value?:any):void
    {
        
    }

    public setDataAfterSetRoom(value:any):void
    {
        
    }

    public execute(value?:ExecuteOption):any
    {
        this._dgKillDragonTitleAni.showTitle();
    }
 }
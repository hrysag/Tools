/**
 * Created by EricHuang on 2023/9/20.
 * 
 */
import {FileConfigLoadingOption} from '../../game/loading/LoadingDefinitions';
import {EventTarget,SpriteFrame,Prefab} from 'cc';
export abstract class LoadingManager extends EventTarget 
{
    protected _loadingQueue:FileConfigLoadingOption[];
    
    set loadingQueue(value:FileConfigLoadingOption[])
    {
       this._loadingQueue=value;
    } 

    constructor()
    {
        super();
    }
    
    //abstract getSpriteFrames(id:string):SpriteFrame[];

    //abstract getPrefab(id: string): Prefab; 

    abstract  startLoad():Promise<void>;
    
}

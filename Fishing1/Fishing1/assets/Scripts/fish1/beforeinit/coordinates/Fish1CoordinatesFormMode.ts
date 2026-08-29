/**
 * Created by EricHuang on 2023/09/29.
 */
import {FishCoordinatesFormMode} from '../../../framework/logic/coordinates/FishCoordinatesFormMode';
import {find} from 'cc';

export class Fish1CoordinatesFormMode extends FishCoordinatesFormMode
{
    constructor()
    {
        super();
    }
    
    //--override it(把預設的node塞進來)
    public  initNodeContainer():void
    {
        //--有要旋轉的在塞進來
        this._cannonContainer=find('Canvas/playerUI');

        this._waittingTextAniContainer=find('Canvas/waittingText');
        
        this._playerIdTextContainer=find('Canvas/PlayerNameText');
        
        this._fishContainer=find('Canvas/fishNodeContainer');
        
        this._fishShadowContainer=find('Canvas/fishShadowNodeContainer');
        
        this._bulletContainer=find('Canvas/bulletNodeContainer');

        this._clickAreaContainer=find('Canvas/mouseNode');


    }
}
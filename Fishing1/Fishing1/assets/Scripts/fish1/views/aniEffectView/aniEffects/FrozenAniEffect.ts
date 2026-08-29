/**
 * Created by EricHuang on 2023/11/21.
 */
import { LoadingResManager } from "../../../../framework/logic/loading/LoadingResManager";
import {GameUtils,frustumInfoData} from '../../../../framework/utils/GameUtils';
import {Size, Sprite, UITransform, Vec3} from 'cc';
import {SpriteFrame} from 'cc';
import {Node} from 'cc';
import {Layers} from 'cc';
import {v2} from 'cc';
import {color} from 'cc';
import {log} from 'cc';
import { CocosGameSetting } from "../../../../framework/utils/CocosGameSetting";




export class FrozenAniEffect
{
    private _container:Node;

    private _freezeBgNode:Node;

 
    constructor(...args)
    {
        this._container=args[0].container;
        
        let spriteFrame:SpriteFrame=LoadingResManager.getInstance().getSpriteFrame(args[0].spriteFrameId);

        log('check_FrozenAniEffect',args[0],spriteFrame);

        this._freezeBgNode=new Node();

        this._freezeBgNode.layer=1 << Layers.nameToLayer('fx');

       
        let spr=this._freezeBgNode.addComponent(Sprite);

        spr.spriteFrame=spriteFrame;

        spr.sizeMode=Sprite.SizeMode.CUSTOM;
        
        spr.type=Sprite.Type.SIMPLE;

        spr.trim=true;

        spr.color=color(255,255,255,128);

        //--在sprite之後再設定uiTransform才會奏效

        let uiTransform=this._freezeBgNode.addComponent(UITransform);

        uiTransform.anchorPoint=v2(0.5,0.5);

        uiTransform.contentSize=new Size(CocosGameSetting.Game_Width,CocosGameSetting.Game_Height);

        //log('check_sprite_uiTransform',uiTransform);

        this._container.addChild(this._freezeBgNode); 

        this._freezeBgNode.active=false;

    }

    public openFrozenEffect():void
    {
        this._freezeBgNode.active=true;
    }

    public closeFrozenEffect():void
    {
        this._freezeBgNode.active=false;
    }

    


}
 
             
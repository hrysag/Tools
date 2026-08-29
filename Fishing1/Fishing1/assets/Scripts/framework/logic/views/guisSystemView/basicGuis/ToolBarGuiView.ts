/**
 * Created by EricHuang on 2023/12/19.
 */

import { GuiBasic } from '../../../../game/guiCore/GuiBase';
import { GuiOption } from '../../../../game/guiCore/GuiDefinitionsBase';
import {Digits} from '../../../../utils/Digits';
import {GameUtils} from '../../../../utils/GameUtils';
import { LoadingResManager } from '../../../loading/LoadingResManager';
import { CocosGameSetting } from '../../../../utils/CocosGameSetting';
import {find,instantiate,Node, SpriteFrame, UITransform,Sprite,v3} from 'cc';
import {log} from 'cc';


export class ToolBarGuiView extends GuiBasic
{
    
    private _strprefab:string;

    private _stageContainer:Node;

    private _toolbar:Node;

    private _strSnSpriteFrameId:string;

    private _strDigitsId:string;

    private _digitsSn:Digits;

    private _strVersionDigitsId:string;

    private _digitsLauncherVersionNumber:Digits;

    private _pingNodes:{[key:string]:Node};


    constructor()
    {
        super();

        this._pingNodes={};

    }

    /**
     * step1.
     * overrite it
     * @param value guiData before layout
    */
    public setData(value:GuiOption):void
    {
        super.setData(value);

        this._strprefab=value.other.prefabId;

        this._stageContainer=find(value.other.container);

        this._strSnSpriteFrameId=value.other.spriteFrameSnId;

        this._strDigitsId=value.other.snDigitsId;

        this._strVersionDigitsId=value.other.versionDigitsId;


        log('toolbar_data',value);

        
    }

    /**
     * step2.
     * overrite it
     */
    public init():void
    {
        //this._defultType=[GUIEvent.BTN_MUTE,GUIEvent.BTN_EXCHANGE,GUIEvent.BTN_HISTORY,GUIEvent.BTN_HELP,GUIEvent.BTN_EXIT];
    }

    public async setLayout(): Promise<void>      
    {
        return new Promise<void>((resolve)=>
        {
            this._toolbar=instantiate(LoadingResManager.getInstance().getPrefab(this._strprefab));
            
            let snSpriteFrame:SpriteFrame=LoadingResManager.getInstance().getSpriteFrames(this._strSnSpriteFrameId)[0];

            let digitsSpriteFrames:SpriteFrame[]=LoadingResManager.getInstance().getSpriteFrames(this._strDigitsId).sort(GameUtils.sortDigitsSpriteFrames);
            
            log('check_toolbar_textures',snSpriteFrame,digitsSpriteFrames);
            
            let snSpr:Sprite=this._toolbar.getChildByName('sn').getChildByName('Label').addComponent(Sprite); 

            snSpr.spriteFrame=snSpriteFrame;

            this._digitsSn=this._toolbar.getChildByName('sn').getChildByName('snLabel').addComponent(Digits);

            this._digitsSn.textures=digitsSpriteFrames;

            for(let i:number=1;i<=5;i++)
            {
                let pingNode:Node=this._toolbar.getChildByName('ping').getChildByName('pl'+i);

                this._pingNodes['pl'+i]=pingNode;
            }

            let versionDigitsSpriteFrames:SpriteFrame[]=LoadingResManager.getInstance().getSpriteFrames(this._strVersionDigitsId).sort(GameUtils.sortDigitsSpriteFrames);

            this._digitsLauncherVersionNumber=this._toolbar.getChildByName('launcherVersion').addComponent(Digits);
            
            this._digitsLauncherVersionNumber.textures=versionDigitsSpriteFrames;

            
            this._digitsLauncherVersionNumber.digitScale=0.8;
            this._digitsLauncherVersionNumber.floatScale=0.8;
            
            //this._digitsLauncherVersionNumber.useCommand=true;


            this.addChild(this._toolbar);

            this._stageContainer.addChild(this);

            //let containSize=this._toolbar.getComponent(UITransform).contentSize;

            this.setPosition(v3(0,(-CocosGameSetting.Game_Height/2)))
            //---完成的時候做
            resolve();

            

        });
    }


    protected onLoad():void
    {
        log('onLoad_snToolBar');
        this._digitsSn?.display(2222222222222,'center');
    }

    public updateWagersID(sn:number):void
    {
        //this._sn.display(sn , 'left');
        log('updateWagersID',sn);
        if(sn)
        {
            this._digitsSn?.display(sn+'','center');
        }
       
    }

    public setLauncherVersionNumber(value:string):void
    {
        this._digitsLauncherVersionNumber.displayWithStr(value,'right');
    }

    public updatePing(value:string):void
    {
        this.closeAllPingNode();

        if(value=='good')
        {
            this._pingNodes['pl5'].active=true;

        }else if(value=='adequate')
        {
            this._pingNodes['pl4'].active=true;

        }else if(value=='poor')
        {
            this._pingNodes['pl3'].active=true;
        }
    }

    private closeAllPingNode():void
    {
        for(let i in this._pingNodes)
        {
            this._pingNodes[i].active=false;
        }
    }


}
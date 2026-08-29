/**
 * Created by EricHuang on 2023/10/26.
 */
import { LoadingResManager } from "../../../../framework/logic/loading/LoadingResManager";
import {GameUtils,frustumInfoData} from '../../../../framework/utils/GameUtils';
import { UIOpacity, UITransform} from 'cc';
import {Vec3} from 'cc';
import {v3} from 'cc';
import {SpriteFrame} from 'cc';
import {Node} from 'cc';
import {instantiate} from 'cc';
import {log} from 'cc';
import { TweenMaxCocosPlugin } from "../../../../framework/utils/TweenMaxPlugin";
import { Digits } from "../../../../framework/utils/Digits";


export class PwNode
{
    public pwNode:Node;

    public startOpacity:number;

    public ogPosition:Vec3;

    public startPosition:Vec3;

    constructor()
    {
       
    }

}

export class PowerUpAni
{
    private _container:Node;

    private _aryPowerUpNodes:PwNode[];

    private _digitsTextures:SpriteFrame[];

    private _positions:{x:number , y:number , width:number , height:number}[];

    private _playerIndex:number;//--0-3

    private _pwPrefabPath:string;

    constructor(...args)
    {
        this._container=args[0].container;

        this._aryPowerUpNodes=[];

        this._digitsTextures=LoadingResManager.getInstance().getSpriteFrames(args[0].powerUpDigitsTexturePath.spriteFrame).sort(GameUtils.sortDigitsSpriteFrames);
        //log('check_digitsData_for_powerup',this._digitsTextures);
        //this._positions=args[0].positions;
        //this._positions=args[0].exchangePositions;

        //this._playerIndex=args[0].playerIndex;

        this._pwPrefabPath=args[0].prefabId;

    }

    public setDataAfterSetRoom(positions:{x:number,y:number,width:number,height:number}[],playerIndex:number):void
    {
        this._positions=positions;

        this._playerIndex=playerIndex;

    }



    public async showPowerUp(playerIndex:number,powerPlus:number):Promise<void>
    {
        
        //let pwAll:{pwAll:Node,digits:Digits};
        //let pw:Node;
        //log('showPowerUp',powerPlus);


        let digits:Digits;

        let pw:PwNode;

        if(this._aryPowerUpNodes.length>0)
        {
            pw=this._aryPowerUpNodes.pop();

            digits=pw.pwNode.children[0].getChildByName('label').getComponent(Digits);

            //log('check_recyclePW',pw,digits);

        }else{

            pw=new PwNode();
            
            let prefabNode=instantiate(LoadingResManager.getInstance().getPrefab(this._pwPrefabPath));
            
            pw.pwNode=prefabNode;

            prefabNode.addComponent(TweenMaxCocosPlugin);
    
            prefabNode.addComponent(UIOpacity);
            
            //let uiTransFrom=prefabNode.addComponent(UITransform);

            //uiTransFrom.anchorX=uiTransFrom.anchorY=0.5;

            digits=prefabNode.children[0].getChildByName('label').addComponent(Digits);
            
            digits.textures=this._digitsTextures;

            digits.pointIndex=10;

            digits.padding=-20;
    
            digits.symbolStr=['X'];
    
            digits.symbolIndex=[11];
            
            digits.digitScale=.8;
            
            digits.floatScale=.8;
    
            digits.floatScale=.8;

        }

        let size=pw.pwNode.getComponent(UITransform).contentSize;

        let offsetX:number=-50;
        
        let offsetY:number=size.height/2;

        let pwActionY:number=1;

        if(this._playerIndex==0 || this._playerIndex==1)
        {
        
           

            //offsetX=offsetX*-1;
           
            if(playerIndex==2 || playerIndex==3)
            {
                offsetY=(offsetY*-1)-30;
                //--遞減Y軸
                pwActionY=-1;
            }
           
        }else{

            //--2-3
           
            //offsetX=offsetX*-1;

            if(playerIndex==0 || playerIndex==1)
            {
                offsetY=(offsetY*-1)-30;
                pwActionY=-1;
            }
        }

        
        //let localPos:Vec3= this._container.getComponent(UITransform).convertToNodeSpaceAR(v3(this._positions[playerIndex].x+offsetX,this._positions[playerIndex].y+offsetY));
        let localPos:Vec3= this._container.getComponent(UITransform).convertToNodeSpaceAR(v3(this._positions[playerIndex].x,this._positions[playerIndex].y));

        pw.startPosition=v3(localPos.x+offsetX,localPos.y+offsetY,localPos.z);
        //pw.startPosition=v3(localPos.x,localPos.y+offsetY,localPos.z);

        pw.ogPosition=v3(pw.startPosition.x,localPos.y,localPos.z);

        pw.startOpacity=(playerIndex!=this._playerIndex)?128:255;

        this._container.addChild(pw.pwNode);

        //pw.setPosition(localPos);//--這是出現的最終位置
        pw.pwNode.setPosition(pw.startPosition);//--這是出現的最終位置

        pw.pwNode.setScale(v3(.8,.8));

        digits.displayWithStr('X'+powerPlus,'center');

        pw.pwNode.getComponent(UIOpacity).opacity=0;

        let finishShowNode:PwNode=await this.popUpShow(pw,pwActionY,pw.startOpacity);
        
        let beforeRemoveNode:PwNode=await this.beforeRemove(finishShowNode);

        let removeMotationNode:PwNode=await this.removeMotation(beforeRemoveNode);

        this._container.removeChild(removeMotationNode.pwNode);
        
        this._aryPowerUpNodes.push(removeMotationNode);

    }

    /**
     * 
     * @param target 
     * @param actionY 
     * @param opacity 預定到達的透明度(非玩家本身128,玩家本身255)
     * @returns 執行對象本身的node
     */
    //private async popUpShow(target:Node,actionY:number,opacity:number):Promise<Node>
    private async popUpShow(target:PwNode,actionY:number,opacity:number):Promise<PwNode>
    {
        return new Promise((resolve)=>
        {
           

            TweenMax.to(target.pwNode.getComponent(TweenMaxCocosPlugin),0.2,
            {
                opacity:opacity,
                y:target.pwNode.position.y+(30*actionY),
                ease:Back.easeOut,
                onCompleteParams:[target],
                onComplete:(value)=>
                {
                    resolve(value);
                }
            });          
        })
    }


    //private async beforeRemove(target:Node):Promise<Node>
    private async beforeRemove(target:PwNode):Promise<PwNode>
    {
        return new Promise((resolve)=>
        {
            TweenMax.to(target.pwNode.getComponent(TweenMaxCocosPlugin),0.5,
            {
                opacity:76.5,
                onCompleteParams:[target],
                onComplete:(c)=>
                {
                    resolve(c);
                }
    
            });
        })   
    }


    private async removeMotation(target:PwNode):Promise<PwNode>
    {
        return new Promise((resolve)=>
        {
            TweenMax.to(target.pwNode.getComponent(TweenMaxCocosPlugin),0.3,
            {
                opacity:0,
                y:target.ogPosition.y,
                onCompleteParams:[target],
                onComplete:(c)=>
                {
                    resolve(c);
                }
    
            });
        })   
    }

    


    

    



}

            
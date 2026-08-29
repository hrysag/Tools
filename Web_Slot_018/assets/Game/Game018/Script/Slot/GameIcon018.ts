import { _decorator, Component, Node, color, Sprite, tween, sp, v3 } from 'cc';
import { GameIcon } from 'db://assets/Scripts/ReelTemplate/ReelTemplate_2/Scripts/GameIcon';
import { ReelRoundState } from 'db://assets/Scripts/ReelTemplate/ReelTemplate_2/Scripts/Model/ReelData';
import { IconData018 } from './IconData018';
import { DefinitionGameConfigData } from '../DefinitionGameData/DefinitionGameConfigData';
import { IAnimationControl } from '../MyUtils/AnimationSystem/Definitions/IAnimationControl';
import { AniSysTools } from '../MyUtils/AnimationSystem/AniTools/AniSysTools';
import { FindComponent } from '../MyUtils/FindComponent';
import { SpineController } from '../MyUtils/AnimationSystem/Components/SpineController';
import { DYN_NODE_PROPERTIES } from '../MyUtils/AnimationSystem/Definitions/AnimationDataOptions';
import { RPSWildAnimationController } from '../GameDisplay/RPSWild/RPSWildAnimationController';
const { ccclass, property } = _decorator;

const {
    WILD_LIST,
    INSTEAD_WILD,
    SPECIAL_SYMBOL_LIST
} = DefinitionGameConfigData;

@ccclass('GameIcon018')

export class GameIcon018 extends GameIcon {


    @property({ type: Sprite, visible: true, displayName: 'gameBlurSpr', tooltip: '換圖的模糊圖片' })

    private _gameBlurSpr: Sprite = null;
    private _ogColorAlphaValue: number;
    private _rollState: ReelRoundState;
    private _aniSymbol: Node = null;

    set rollState(value: ReelRoundState) {

        this._rollState = value;
    }

    //---這個要看啟動的FG是哪一個camp.他要換的圖片不一樣
    private _nowFgCamp: number;

    set nowFgCamp(value: number) {
        this._nowFgCamp = value;
        this.updateSymbol(this._iconData.iconID);
    }

    constructor() {

        super();
        this._ogColorAlphaValue = 255;
        this._rollState = ReelRoundState.Unknown;
        this._nowFgCamp = -1;
    }

    public init(): void {

        super.init();

    }

    public setAlpha(colorAlpha?: number): void {

        let colorAlphaValue: number = colorAlpha ? colorAlpha : this._ogColorAlphaValue;
        this._gameSprite.color = color(this._gameSprite.color.r, this._gameSprite.color.g, this._gameSprite.color.b, colorAlphaValue);

    }

    public getIconReelInfo(): { reelIndex: number, iconIndex: number } {
        let reelData =
        {
            reelIndex: (<IconData018>this._iconData).reelId,
            iconIndex: (<IconData018>this._iconData).iconIndexInReel
        }
        return reelData;
    }

    public getCurrentCamp(): number {
        let currentCamp = (<IconData018>this._iconData).camp;
        if (currentCamp === -1) {
            currentCamp = this._nowFgCamp;
        }
        return currentCamp;
    }

    //---寫入需要用的資料到iconData裡面
    public setGameIconData(reelId: number, iconIndex: number, campId: number): void {
        let iconData: IconData018 = <IconData018>this._iconData;
        iconData.reelId = reelId;
        iconData.iconIndexInReel = iconIndex;
        iconData.camp = campId;
    }

    public getGameIconData(): IconData018 {
        return <IconData018>this._iconData;
    }

    public openBlur(symbolID?: number): void {

        //this.closeBlurSymbol();
        this._gameSprite.node.active = false;
        this._gameBlurSpr.node.active = true;
    }

    public closeBlur(): void {
        this._gameSprite.node.active = true;
        this._gameBlurSpr.node.active = false;
    }

    public setTweenDark(): void {
        let darkBrightness = (<IconData018>this._iconData).sp_darkBrightness;
        let colorNumber = { value: 255 };
        tween(colorNumber)
            .to(0.16,
                { value: darkBrightness },
                {
                    onUpdate: (t, r) => {
                        this._gameSprite.color = color(colorNumber.value, colorNumber.value, colorNumber.value, this._gameSprite.color.a);
                        this.changeSpineColor(colorNumber.value);
                    }
                }
            )
            /*
            .call(() => {
                console.log('finishDark');//--for test
            })*/
            .start()
    }

    public changeCamp(): void {
        this.updateSymbol(this._iconData.iconID);
    }

    //--20250429-78美術壓黑有兩種不同的明亮度,wild猜拳的明亮度更暗
    public setWildBrightness(): void {
        let darkBrightness = (<IconData018>this._iconData).sp_darkBrightness;
        this._gameSprite.color = color(darkBrightness, darkBrightness, darkBrightness, this._gameSprite.color.a);
        this.changeSpineColor(darkBrightness);
    }

    public override setBrightness(isDark: boolean) {

        let darkBrightness = (isDark) ? this._iconData.darkBrightness : 255;
        this._gameSprite.color = color(darkBrightness, darkBrightness, darkBrightness, this._gameSprite.color.a);
        this.changeSpineColor(darkBrightness);
    }

    public addSymbolAniNode(aniSymbol: Node): void {
        this._aniSymbol = aniSymbol;
        this._aniSymbol.active = true;
        this.node.addChild(this._aniSymbol);
        this._aniSymbol.setPosition(v3(0, 0, 0));
        this.playSymbolAni();
    }

    public playSymbolAni(aniName?: string): void {
        if (this._aniSymbol) {
            this._aniSymbol.active = true;
            let iAnimationControl: IAnimationControl = AniSysTools.findAndGetIAniComponent(this._aniSymbol) as IAnimationControl;
            if (aniName) {
                iAnimationControl.playAni(aniName);
            } else {
                iAnimationControl.playAni('idle');
            }
        }
    }

    public closeSymbolAniNode(): void {
        if (this._aniSymbol) {
            this._aniSymbol.active = false;
            let iAnimationControl: IAnimationControl = AniSysTools.findAndGetIAniComponent(this._aniSymbol) as IAnimationControl;
            iAnimationControl.stopAni();
        }
    }

    //public getSymbolAniNode(): Node | null {
    public getSymbolAniNodeAndRemove(): Node | null {
        if (!this._aniSymbol) {
            return null;
        } else {

            let iAnimationControl: IAnimationControl = AniSysTools.findAndGetIAniComponent(this._aniSymbol) as IAnimationControl;
            iAnimationControl.stopAni();
            this.node.removeChild(this._aniSymbol);
            this.changeSpineColor(this._ogColorAlphaValue);//--255
            let returnAniNode = this._aniSymbol;
            this._aniSymbol = null;
            return returnAniNode;
        }
    }

    public getSymbolAniNode(): Node | null {
        if (!this._aniSymbol) {
            return null;
        } else {
            return this._aniSymbol;
        }
    }

    public getSymbolAniNodeName(): string {
        if (!this._aniSymbol) {
            return '';
        } else {
            return this._aniSymbol.name;
        }
    }

    public setSymbolAniNodeToNull(): void {
        this._aniSymbol = null;
    }

    public override updateSymbol(symbolID: number): void {

        let iconData: IconData018 = <IconData018>this._iconData;
        iconData.iconID = symbolID;//--最後一輪會換成最終的iconId

        //--camp=0是阿里巴巴, camp=1是四十大盜
        //--_nowFgCamp=<-1>是一般狀態, _nowFgCamp=<0>是阿里巴巴(FG), _nowFgCamp=<1>是四十大盜(FG)

        const FINAL_SYMBOL_ID = INSTEAD_WILD;
        const isAlibaba = iconData.camp === 0;
        const isFinalRoll = this._rollState === ReelRoundState.FinalRoll;
        const isWildSymbol = WILD_LIST.includes(symbolID);
        let spriteFramesTarget;
        let blurSpriteFramesTarget;

        if (this._nowFgCamp !== -1) {
            //-FG
            spriteFramesTarget = (this._nowFgCamp === 0) ? iconData.spriteFrameList : iconData.rightSide_SpriteFrames;
            blurSpriteFramesTarget = (this._nowFgCamp === 0) ? iconData.leftSide_BlurSpriteFrames : iconData.rightSide_BlurSpriteFrames;
        } else {
            //--NG
            spriteFramesTarget = isAlibaba ? iconData.spriteFrameList : iconData.rightSide_SpriteFrames;
            blurSpriteFramesTarget = isAlibaba ? iconData.leftSide_BlurSpriteFrames : iconData.rightSide_BlurSpriteFrames;
            if (isFinalRoll && isWildSymbol) {
                symbolID = FINAL_SYMBOL_ID;
            }
        }

        this._iconData.symbolID = symbolID;
        this._gameSprite.spriteFrame = spriteFramesTarget[symbolID];
        let fgTargetIndex = symbolID;
        if (SPECIAL_SYMBOL_LIST.includes(symbolID)) {
            fgTargetIndex = blurSpriteFramesTarget.length - 1;//--最後一個是特殊符號  
        }
        this._gameBlurSpr.spriteFrame = blurSpriteFramesTarget[fgTargetIndex];

        /**
        updateSymbol的內容
        this._iconData.symbolID = symbolID;
        this._gameSprite.spriteFrame = this._iconData.spriteFrameList[symbolID];
        */

    }

    private changeSpineColor(colorValue: number): void {
        if (this._aniSymbol) {
            if (WILD_LIST.includes(this._aniSymbol[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].iconID)) {
                //-RPSWildAnimationController
                const spineTargetTop = FindComponent.findComponentInChildren(this._aniSymbol, RPSWildAnimationController).spineFront;
                const spineTargetBottom = FindComponent.findComponentInChildren(this._aniSymbol, RPSWildAnimationController).spineBack;
                spineTargetTop.color = color(colorValue, colorValue, colorValue, spineTargetTop.color.a);
                spineTargetBottom.color = color(colorValue, colorValue, colorValue, spineTargetBottom.color.a);

            } else {
                const spineTarget = FindComponent.findComponentInChildren(this._aniSymbol, SpineController).spine;
                spineTarget.color = color(colorValue, colorValue, colorValue, spineTarget.color.a);
            }


        }
    }




}



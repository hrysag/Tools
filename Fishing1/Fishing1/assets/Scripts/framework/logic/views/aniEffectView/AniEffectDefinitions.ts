/**
 * Created by EricHuang on 2023/10/10.
 */

export enum AniEffectTypeMap
{

    ANI_showPlayerAward=0,//--圓盤

    ANI_showMoneyAnimation=1,

    ANI_showAwardAndMoney=14,

    ANI_showJumpDigits=2,

    ANI_showPayoffMoneyAndDigits=3,

    ANI_changeBg=4,

    ANI_bgTransition=5,

    ANI_showExplosionLightEffect=6,

    ANI_randomShake=7,

    ANI_showShakeEffect=8,

    ANI_showFlashLightningEffect=9,

    ANI_showBombEffect=10,

    ANI_spComming=11,

    ANI_spCommingExit=12,

    ANI_spCommingFirstTime=13
}


export enum AniEffectID
{
   ANI_Test=-1,
   ANI_Money=1,
   ANI_JumpDigits=2,
   ANI_Flash_Lightning=3,
   ANI_BombEffect=4,
   ANI_ShakeEffect=5


}

export type AfterAnimationData=
{
    id?:number;
    infoData?:any;
    isPlayer?:boolean;
    odds?:string;
    totalPayoff?:number;
    fishType?:string;
    table?:number;
    spMode?:number;
}
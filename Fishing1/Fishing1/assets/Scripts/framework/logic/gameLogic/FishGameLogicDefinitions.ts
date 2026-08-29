/**
 * Created by EricHuang on 2023/10/01.
 */

export enum GameViewMediatorUser
{
    
    FishView='FishViewMediatorUser',
    
    BulletView='BulletViewMediatorUser',

    GuisSystemView='GuisSystemViewMediatorUser',

    AniEffectSystemView='AniEffectSystemViewMediatorUser',

    CollisionSystemView='CollisionSystemViewMediatorUser',

    GameLogicSystem='GameLogicSystemViewMediatorUser'//--20231206
}


export enum GameViewMediatorUserDataKey
{
    
    Bullet_actionId='Bullet_actionId',
    
    Bullet_gunScore='Bullet_gunScore',

    Bullet_getBullets='Bullet_getBullets',

    Bullet_getBulletById='Bullet_getBulletById',

    Bullet_openfishNet='Bullet_openfishNet',

    Bullet_weaponType='Bullet_weaponTyp',

    Bullet_setBulletIsDeath='Bullet_setBulletIsDeath',

    Bullet_setMoreBulletIsDeath='Bullet_setMoreBulletIsDeath',
    
    Bullet_cleanAllPreviousLockTarget='Bullet_cleanAllPreviousLockTarget',

    Bullet_cleanAllPlayerLockData='Bullet_cleanAllPlayerLockData',
    
    //Bullet_killtargetBullet='Bullet_killtargetBullet',//-與Bullet_setBulletIsDeath相同功能
    
    Bullet_cleanFishTarget='Bullet_cleanFishTarget',//-與Bullet_setBulletIsDeath相同功能

    Bullet_cleanMoreFishTarget='Bullet_cleanMoreFishTarget',

    Bullet_cleanLocakTargetByDeathFishs='Bullet_cleanLocakTargetByDeathFishs',

    Bullet_resetEndPositionAndFishTargetId='Bullet_resetEndPositionAndFishTargetId',
    
    Fish_getFishs='Fish_getFishs',

    Fish_getFishById='Fish_getFishById',

    Fish_removeFishById='Fish_removeFishById',

    Fish_addFishAimLock='Fish_addFishAimLockd',

    Fish_removeFishAimLock='Fish_removeFishAimLock',

    Fish_removeFishAimLockByLockId='Fish_removeFishAimLockByLockId',

    Fish_changeSingleFishAnimation='Fish_changeSingleFishAnimation',

    Fish_removeSinglePathUnitByFishId='Fish_removeSinglePathUnitByFishId',

    Fish_hitFishAniComplete='Fish_hitFishAniComplete',

    Fish_getOutsideFish='Fish_getOutsideFish',

    Gui_checkExChangeShow='Gui_checkExChangeShow',

    Gui_getCannonPosition='Gui_getCannonPosition',

    Gui_changeBulletStyle='Gui_changeBulletStyle',

    //--旋轉砲塔後取得發射座標(worldpos in worldpos out)
    Gui_rotateCannonAndGetPosition='Gui_rotateCannonAndGetPosition',
    
    Gui_locakAim='Gui_locakAim',

    Gui_getIsAutoShoot='Gui_getIsAutoShoot',

    Gui_cleanAllAutoShootData='Gui_cleanAllAutoShootData',

    Gui_autoUseProps='Gui_autoUseProps',

    Gui_showGameMessage='Gui_showGameMessage',//--ingame message

    Gui_removeMessages='Gui_removeMessages',//--ingame message

    Gui_closeGameMessage='Gui_closeGameMessage',//--ingame message

    Gui_showAlert='Gui_showAlert',//--system message

    Effect_bossExit='AniEffect_bossExit',

    Effect_bossShake='AniEffect_bossShake',

    Collision_PickUp='Collision_PickUp',

    GameLogic_setLockFishBullet='GameLogic_setLockFishBullet',

    GameLogic_afterHitRemoveLockBulletData='GameLogic_afterHitRemoveLockBulletData',

    GameLogic_blockALL='GameLogic_blockALL',

    GameLogic_unBlockALL='GameLogic_unBlockALL',

    GameLogic_cleanManualLock='GameLogic_cleanManualLock'
    
    
}
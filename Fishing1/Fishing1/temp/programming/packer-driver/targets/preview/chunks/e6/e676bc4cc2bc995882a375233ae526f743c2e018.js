System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameViewMediatorUser, GameViewMediatorUserDataKey;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5096389UA5HSKD/E2K1eR6c", "FishGameLogicDefinitions", undefined);

      /**
       * Created by EricHuang on 2023/10/01.
       */
      _export("GameViewMediatorUser", GameViewMediatorUser = /*#__PURE__*/function (GameViewMediatorUser) {
        GameViewMediatorUser["FishView"] = "FishViewMediatorUser";
        GameViewMediatorUser["BulletView"] = "BulletViewMediatorUser";
        GameViewMediatorUser["GuisSystemView"] = "GuisSystemViewMediatorUser";
        GameViewMediatorUser["AniEffectSystemView"] = "AniEffectSystemViewMediatorUser";
        GameViewMediatorUser["CollisionSystemView"] = "CollisionSystemViewMediatorUser";
        GameViewMediatorUser["GameLogicSystem"] = "GameLogicSystemViewMediatorUser";
        return GameViewMediatorUser;
      }({}));

      _export("GameViewMediatorUserDataKey", GameViewMediatorUserDataKey = /*#__PURE__*/function (GameViewMediatorUserDataKey) {
        GameViewMediatorUserDataKey["Bullet_actionId"] = "Bullet_actionId";
        GameViewMediatorUserDataKey["Bullet_gunScore"] = "Bullet_gunScore";
        GameViewMediatorUserDataKey["Bullet_getBullets"] = "Bullet_getBullets";
        GameViewMediatorUserDataKey["Bullet_getBulletById"] = "Bullet_getBulletById";
        GameViewMediatorUserDataKey["Bullet_openfishNet"] = "Bullet_openfishNet";
        GameViewMediatorUserDataKey["Bullet_weaponType"] = "Bullet_weaponTyp";
        GameViewMediatorUserDataKey["Bullet_setBulletIsDeath"] = "Bullet_setBulletIsDeath";
        GameViewMediatorUserDataKey["Bullet_setMoreBulletIsDeath"] = "Bullet_setMoreBulletIsDeath";
        GameViewMediatorUserDataKey["Bullet_cleanAllPreviousLockTarget"] = "Bullet_cleanAllPreviousLockTarget";
        GameViewMediatorUserDataKey["Bullet_cleanAllPlayerLockData"] = "Bullet_cleanAllPlayerLockData";
        GameViewMediatorUserDataKey["Bullet_cleanFishTarget"] = "Bullet_cleanFishTarget";
        GameViewMediatorUserDataKey["Bullet_cleanMoreFishTarget"] = "Bullet_cleanMoreFishTarget";
        GameViewMediatorUserDataKey["Bullet_cleanLocakTargetByDeathFishs"] = "Bullet_cleanLocakTargetByDeathFishs";
        GameViewMediatorUserDataKey["Bullet_resetEndPositionAndFishTargetId"] = "Bullet_resetEndPositionAndFishTargetId";
        GameViewMediatorUserDataKey["Fish_getFishs"] = "Fish_getFishs";
        GameViewMediatorUserDataKey["Fish_getFishById"] = "Fish_getFishById";
        GameViewMediatorUserDataKey["Fish_removeFishById"] = "Fish_removeFishById";
        GameViewMediatorUserDataKey["Fish_addFishAimLock"] = "Fish_addFishAimLockd";
        GameViewMediatorUserDataKey["Fish_removeFishAimLock"] = "Fish_removeFishAimLock";
        GameViewMediatorUserDataKey["Fish_removeFishAimLockByLockId"] = "Fish_removeFishAimLockByLockId";
        GameViewMediatorUserDataKey["Fish_changeSingleFishAnimation"] = "Fish_changeSingleFishAnimation";
        GameViewMediatorUserDataKey["Fish_removeSinglePathUnitByFishId"] = "Fish_removeSinglePathUnitByFishId";
        GameViewMediatorUserDataKey["Fish_hitFishAniComplete"] = "Fish_hitFishAniComplete";
        GameViewMediatorUserDataKey["Fish_getOutsideFish"] = "Fish_getOutsideFish";
        GameViewMediatorUserDataKey["Gui_checkExChangeShow"] = "Gui_checkExChangeShow";
        GameViewMediatorUserDataKey["Gui_getCannonPosition"] = "Gui_getCannonPosition";
        GameViewMediatorUserDataKey["Gui_changeBulletStyle"] = "Gui_changeBulletStyle";
        GameViewMediatorUserDataKey["Gui_rotateCannonAndGetPosition"] = "Gui_rotateCannonAndGetPosition";
        GameViewMediatorUserDataKey["Gui_locakAim"] = "Gui_locakAim";
        GameViewMediatorUserDataKey["Gui_getIsAutoShoot"] = "Gui_getIsAutoShoot";
        GameViewMediatorUserDataKey["Gui_cleanAllAutoShootData"] = "Gui_cleanAllAutoShootData";
        GameViewMediatorUserDataKey["Gui_autoUseProps"] = "Gui_autoUseProps";
        GameViewMediatorUserDataKey["Gui_showGameMessage"] = "Gui_showGameMessage";
        GameViewMediatorUserDataKey["Gui_removeMessages"] = "Gui_removeMessages";
        GameViewMediatorUserDataKey["Gui_closeGameMessage"] = "Gui_closeGameMessage";
        GameViewMediatorUserDataKey["Gui_showAlert"] = "Gui_showAlert";
        GameViewMediatorUserDataKey["Effect_bossExit"] = "AniEffect_bossExit";
        GameViewMediatorUserDataKey["Effect_bossShake"] = "AniEffect_bossShake";
        GameViewMediatorUserDataKey["Collision_PickUp"] = "Collision_PickUp";
        GameViewMediatorUserDataKey["GameLogic_setLockFishBullet"] = "GameLogic_setLockFishBullet";
        GameViewMediatorUserDataKey["GameLogic_afterHitRemoveLockBulletData"] = "GameLogic_afterHitRemoveLockBulletData";
        GameViewMediatorUserDataKey["GameLogic_blockALL"] = "GameLogic_blockALL";
        GameViewMediatorUserDataKey["GameLogic_unBlockALL"] = "GameLogic_unBlockALL";
        GameViewMediatorUserDataKey["GameLogic_cleanManualLock"] = "GameLogic_cleanManualLock";
        return GameViewMediatorUserDataKey;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e676bc4cc2bc995882a375233ae526f743c2e018.js.map
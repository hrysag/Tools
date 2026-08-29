System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, CCInteger, Vec3, v3, IconReel, GameState, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, ROLL_SPEED_MULTIPLIER, GameReel018;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIconReel(extras) {
    _reporterNs.report("IconReel", "db://assets/Scripts/ReelTemplate/ReelTemplate_2/Scripts/IconReel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../DefinitionGameData/GameStateConfigDef", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      CCInteger = _cc.CCInteger;
      Vec3 = _cc.Vec3;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      IconReel = _unresolved_2.IconReel;
    }, function (_unresolved_3) {
      GameState = _unresolved_3.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70fadltJR5HDJy2oO2EIUzH", "GameReel018", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'CCFloat', 'CCInteger', 'Vec2', 'Vec3', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);
      ROLL_SPEED_MULTIPLIER = 1.5; //--forecast的滾輪速度倍數

      _export("GameReel018", GameReel018 = (_dec = ccclass('GameReel018'), _dec2 = property(CCFloat), _dec3 = property(CCFloat), _dec4 = property({
        type: CCInteger,
        visible: true,
        displayName: 'camp',
        tooltip: '陣營:0<阿里>,1<大盜>'
      }), _dec5 = property({
        type: Vec3,
        visible: true,
        displayName: 'Reel_NG_Pos',
        tooltip: '滾輪NG的位置'
      }), _dec6 = property({
        type: Vec3,
        visible: true,
        displayName: 'Reel_FG_Pos',
        tooltip: '滾輪FG的位置'
      }), _dec(_class = (_class2 = class GameReel018 extends (_crd && IconReel === void 0 ? (_reportPossibleCrUseOfIconReel({
        error: Error()
      }), IconReel) : IconReel) {
        constructor() {
          super(...arguments);

          /*
              reel本身(上面由reelView管理)
              1.只負責抓取icon的node,負責表演icon的滾動
              2.透過property綁進來的rootNode(裝icon的node),主要就是移動這個
              (恩=..=||)
              3.ReelData=滾輪相關設定
          */
          _initializerDefineProperty(this, "readyHandMaxStopSpeed", _descriptor, this);

          _initializerDefineProperty(this, "readyHandGradualStopSpeed", _descriptor2, this);

          _initializerDefineProperty(this, "_camp", _descriptor3, this);

          _initializerDefineProperty(this, "_reelNGPos", _descriptor4, this);

          _initializerDefineProperty(this, "_reelFGPos", _descriptor5, this);

          this._offsetXForCamp1 = null;
          //0709-78美術自己做的圖就是偏的還要我改每一軸的位置
          this.inReadyHand = false;
          this.originSpeed = 0;
          this.rollMinSpeed = 0;
        }

        get camp() {
          return this._camp;
        }

        set camp(value) {
          this._camp = value;
        }

        init(reelID, iconNodes, havePrepareIcon, showIcons) {
          super.init(reelID, iconNodes, havePrepareIcon, showIcons);
          this.originSpeed = this.gameReelData.rollSpeed;

          if (this.readyHandMaxStopSpeed >= this.originSpeed) {
            this.readyHandMaxStopSpeed = this.originSpeed - 1;
          }

          this.rollMinSpeed = this.originSpeed - this.readyHandMaxStopSpeed;
          this.startPullIcon.node.active = false; //開始產生在下面的prepare gameIcon不顯示(永遠)
        }

        changeGameMode(gameState, campIndex) {
          if (gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).NORMAL) {
            this.node.setPosition(this._reelNGPos);
          } else if (gameState == (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).FREE_GAME) {
            //--camp=0<阿里>,1<大盜>
            if (campIndex === 1 && !this._offsetXForCamp1) {
              var offsetX = campIndex === 1 ? -4 : 0; //0709-78美術自己做的圖就是偏的還要我改每一軸的位置

              this._offsetXForCamp1 = v3(this._reelFGPos.x + offsetX, this._reelFGPos.y, this._reelFGPos.z);
            }

            var targetPos = campIndex === 1 ? this._offsetXForCamp1 : this._reelFGPos;
            this.node.setPosition(targetPos);
          }
        }

        enterReadyHandMode() {
          this.inReadyHand = true; //console.log('rollSpeed', this.gameReelData.rollSpeed);

          this.gameReelData.rollSpeed = this.originSpeed * ROLL_SPEED_MULTIPLIER; //console.log('after_rollSpeed', this.gameReelData.rollSpeed);
        }

        exitReadyHandMode() {
          this.inReadyHand = false;
          this.gameReelData.rollSpeed = this.originSpeed;
          this.currentDuration = 1 / this.gameReelData.rollSpeed;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "readyHandMaxStopSpeed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 4;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "readyHandGradualStopSpeed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_camp", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_reelNGPos", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_reelFGPos", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1b81b0c6311a0d485aa8e91b1802111093fbd91e.js.map
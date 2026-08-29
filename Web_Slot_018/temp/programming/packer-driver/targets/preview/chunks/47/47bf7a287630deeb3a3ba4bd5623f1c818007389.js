System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCBoolean, Node, Orientation, GameState, AbstractBasicDisplayContainer, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, FG_SpriteController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../../../../../../Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "../../../DefinitionGameData/GameStateConfigDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbstractBasicDisplayContainer(extras) {
    _reporterNs.report("AbstractBasicDisplayContainer", "./IBG_Ani", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCBoolean = _cc.CCBoolean;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Orientation = _unresolved_2.Orientation;
    }, function (_unresolved_3) {
      GameState = _unresolved_3.GameState;
    }, function (_unresolved_4) {
      AbstractBasicDisplayContainer = _unresolved_4.AbstractBasicDisplayContainer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eee9aPg7oJONrksEfQXF52D", "FG_SpriteController", undefined);

      __checkObsolete__(['Component', 'Enum', '_decorator', 'CCBoolean', 'sp', 'Node', 'CCString']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FG_SpriteController", FG_SpriteController = (_dec = ccclass('FG_SpriteController'), _dec2 = property(CCBoolean), _dec3 = property([Node]), _dec4 = property([Node]), _dec(_class = (_class2 = class FG_SpriteController extends (_crd && AbstractBasicDisplayContainer === void 0 ? (_reportPossibleCrUseOfAbstractBasicDisplayContainer({
        error: Error()
      }), AbstractBasicDisplayContainer) : AbstractBasicDisplayContainer) {
        constructor() {
          super(...arguments);

          /**
           * 單純的拿AbstractBasicDisplayContainer來硬灌給<只有sprite的內容+又要換層級的顯示群組>
           * FG_Ali/FG_Thieves(在slotFrame裡面)
           */
          _initializerDefineProperty(this, "switchChild", _descriptor, this);

          _initializerDefineProperty(this, "landscape", _descriptor2, this);

          _initializerDefineProperty(this, "portrait", _descriptor3, this);

          this._gameRotationResolution = (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape;
          this._camp = -1;
          this._gameState = null;
          this._dirtyFlag = false;
        }

        set camp(value) {
          this._camp = value;
        } //--這邊只做一次啟動的動作


        onLoad() {
          if (!this._dirtyFlag) {
            this.init();
          }
        }

        init() {
          if (!this._dirtyFlag) {
            this._dirtyFlag = true;

            if (!this._gameState) {
              this.changeGameState((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).NORMAL);
            }
          }
        }

        stopAllAni() {
          this.closeNode();
        }

        playAni(value) {
          this.changeRotationResolution(this._gameRotationResolution);
        }

        changeRotationResolution(value) {
          this._gameRotationResolution = value;

          if (this.node.active) {
            if (value == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
              error: Error()
            }), Orientation) : Orientation).Landscape) {
              this.changeToLandscape();
            } else if (value == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
              error: Error()
            }), Orientation) : Orientation).Portrait) {
              this.changeToPortrait();
            }
          }
        }

        changeToLandscape() {
          for (var i = 0; i < this.landscape.length; i += 1) {
            var landscapeNode = this.landscape[i];
            var portraitNode = this.portrait[i]; // 注意順序

            landscapeNode.active = true;

            while (portraitNode.children.length !== 0) {
              var target = portraitNode.children[0];
              target.parent = landscapeNode;

              if (target.name == 'FG_BonusCollectionBox') {
                if (this._camp == 0) {
                  target.setPosition(0, 10, 0);
                } else if (this._camp == 1) {
                  target.setPosition(0, 7, 0);
                }

                if (target.children.length > 0) {
                  //-78企劃0714
                  if (target.children[0].name == 'FG_CollectBox_all') {
                    target.children[0].setPosition(0, 0, 0); // 確保位置正確  
                  }
                }
              } else {
                target.setPosition(0, 0, 0);
              }
            }

            portraitNode.active = false;
          }
        }

        changeToPortrait() {
          for (var i = 0; i < this.landscape.length; i += 1) {
            var landscapeNode = this.landscape[i];
            var portraitNode = this.portrait[i]; // 注意順序

            portraitNode.active = true;

            while (landscapeNode.children.length !== 0) {
              // log(`切換${landscapeNode.children[0].name} to ${portraitNode.name}`);
              var target = landscapeNode.children[0];
              target.parent = portraitNode;

              if (target.name == 'FG_BonusCollectionBox') {
                if (this._camp == 0) {
                  target.setPosition(2, 50, 0);
                } else if (this._camp == 1) {
                  target.setPosition(0, 47, 0);
                }

                if (target.children.length > 0) {
                  //-78企劃0714
                  if (target.children[0].name == 'FG_CollectBox_all') {
                    target.children[0].setPosition(0, 0, 0); // 確保位置正確  
                  }
                }
              } else {
                target.setPosition(0, 0, 0);
              }
            }

            landscapeNode.active = false;
          }
        }

        changeGameState(gameState, camp) {
          if (this._gameState == gameState) return;
          this._gameState = gameState;
          this.changeRotationResolution(this._gameRotationResolution);
        }

        closeNode() {
          this.node.active = false;
        }

        openNode(targetNodeList) {
          this.node.active = true;
        }

        cleanCurrentTrack() {
          return null;
        }

        clearTracks() {
          return null;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "switchChild", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "landscape", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "portrait", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=47bf7a287630deeb3a3ba4bd5623f1c818007389.js.map
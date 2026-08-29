System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, color, Sprite, SpriteFrame, v3, Vec3, CCString, tween, UITransform, UniIconBase, AnimationStateType, DefinitionGameConfigData, AnimationController, DYN_NODE_PROPERTIES, GameGlobalKeys, MultiSpineController, DYN_WILD_INFO, AniSysTools, GlobalAccessReader, NewFlashModeEnum, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, HIGH_ODDS_SYMBOL_LIST, SCATTER_LIST, WILD_LIST, DEBUG_LOG_TITLE, WILD_EXPECT_ANI_TYPE, DEFAULT_SYMBOL_ID, ccclass, property, UniIcon1016;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUniIconBase(extras) {
    _reporterNs.report("UniIconBase", "./ReferencePathForUniSlot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWildData(extras) {
    _reporterNs.report("IWildData", "./ISlotDefinitionData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSymbolNumber(extras) {
    _reporterNs.report("SymbolNumber", "./SymbolNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationStateType(extras) {
    _reporterNs.report("AnimationStateType", "../MyUtils/AnimationSystemV2/Components/AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData", "../DefinitionGameData1016/GameConfigInstance", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationController(extras) {
    _reporterNs.report("AnimationController", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDYN_NODE_PROPERTIES(extras) {
    _reporterNs.report("DYN_NODE_PROPERTIES", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobalKeys(extras) {
    _reporterNs.report("GameGlobalKeys", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAnimationControl(extras) {
    _reporterNs.report("IAnimationControl", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIPlayAniData(extras) {
    _reporterNs.report("IPlayAniData", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMultiSpineController(extras) {
    _reporterNs.report("MultiSpineController", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "../ReferencePath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDYN_WILD_INFO(extras) {
    _reporterNs.report("DYN_WILD_INFO", "../DefinitionGameData1016/GameConfigInstance", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAniSysTools(extras) {
    _reporterNs.report("AniSysTools", "../MyUtils/AnimationSystemV2/AniTools/AniSysTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalAccessReader(extras) {
    _reporterNs.report("GlobalAccessReader", "../DefinitionGameData1016/AccessDefs/GlobalAccess", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNewFlashModeEnum(extras) {
    _reporterNs.report("NewFlashModeEnum", "db://assets/Scripts/GameScripts/GenericUI/Scripts/MainUI", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      color = _cc.color;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
      CCString = _cc.CCString;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      UniIconBase = _unresolved_2.UniIconBase;
    }, function (_unresolved_3) {
      AnimationStateType = _unresolved_3.AnimationStateType;
    }, function (_unresolved_4) {
      DefinitionGameConfigData = _unresolved_4.DefinitionGameConfigData;
    }, function (_unresolved_5) {
      AnimationController = _unresolved_5.AnimationController;
      DYN_NODE_PROPERTIES = _unresolved_5.DYN_NODE_PROPERTIES;
      GameGlobalKeys = _unresolved_5.GameGlobalKeys;
      MultiSpineController = _unresolved_5.MultiSpineController;
    }, function (_unresolved_6) {
      DYN_WILD_INFO = _unresolved_6.DYN_WILD_INFO;
    }, function (_unresolved_7) {
      AniSysTools = _unresolved_7.AniSysTools;
    }, function (_unresolved_8) {
      GlobalAccessReader = _unresolved_8.GlobalAccessReader;
    }, function (_unresolved_9) {
      NewFlashModeEnum = _unresolved_9.NewFlashModeEnum;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4ba0ah0zhZOT74ZR+OxTfzL", "UniIcon1016", undefined);

      __checkObsolete__(['_decorator', 'color', 'Sprite', 'SpriteFrame', 'v3', 'Node', 'Vec3', 'CCString', 'NodeEventType', 'tween', 'UITransform']);

      ({
        HIGH_ODDS_SYMBOL_LIST,
        SCATTER_LIST,
        WILD_LIST
      } = _crd && DefinitionGameConfigData === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData) : DefinitionGameConfigData);
      DEBUG_LOG_TITLE = '<UniIcon1016>';
      WILD_EXPECT_ANI_TYPE = 'Expect';
      DEFAULT_SYMBOL_ID = 1;
      ({
        ccclass,
        property
      } = _decorator);

      _export("UniIcon1016", UniIcon1016 = (_dec = ccclass('UniIcon1016'), _dec2 = property({
        range: [0, 255]
      }), _dec3 = property({
        range: [0, 255],
        visible: true,
        tooltip: '美術要求在特殊時期要使用的漸變參數'
      }), _dec4 = property(Sprite), _dec5 = property(SpriteFrame), _dec6 = property(CCString), _dec7 = property(Vec3), _dec(_class = (_class2 = class UniIcon1016 extends (_crd && UniIconBase === void 0 ? (_reportPossibleCrUseOfUniIconBase({
        error: Error()
      }), UniIconBase) : UniIconBase) {
        constructor() {
          super(...arguments);

          /**
           * 就是V2原本的gameIcon
           */
          _initializerDefineProperty(this, "darkBrightness", _descriptor, this);

          //--美術78的要求
          _initializerDefineProperty(this, "_sp_darkBrightness", _descriptor2, this);

          _initializerDefineProperty(this, "gameSprite", _descriptor3, this);

          _initializerDefineProperty(this, "spriteFrameList", _descriptor4, this);

          _initializerDefineProperty(this, "isFinalDesIcon", _descriptor5, this);

          _initializerDefineProperty(this, "iconSize", _descriptor6, this);

          this._wildNode = null;
          this._wildData = {
            isStart: false,
            isEnd: false,
            wildIndex: -1,
            isWild: false,
            isLock: false,
            goBack: false
          };
          this._isScatter = false;
          this._aniSymbol = null;
          // 用於存放spine動畫的節點
          this._aniWPos = v3(0, 0, 0);
          this._isMovedWild = false;
          // 是否為移動過wild
          this._colorState = false;
          this._readyHandFlag = false;

          /** promise resolve 函式**/
          this._resolvePromise = void 0;
          this._wildContinue = [];
          //--空軸是wild系列的時候也要記錄
          this._fakeWildLayerContainer = null;
          //--test--
          this.iconId = 0;
          //--20260105-2階段會爆開用到這個參數
          //private _cachedWildNodePosition: Vec3 = null;
          //private _isSettingWildPosition: boolean = false; //  添加標記
          this._skipNextTransformUpdate = false;
          this._lastIconWorldPosition = null;
          //  記錄上一幀的位置
          this._skipWildSyncFrames = 0;
          // 跳過同步的幀數
          this._wildInsidePos = v3(0, 0, 0);
        }

        //--用來記錄wildNode裡面包的那個node的位置用的
        //--移動到最上面才會=true,一旦賦予資料後,就會變false,直到下次滾到最上面
        set fakeWildLayerContainer(value) {
          this._fakeWildLayerContainer = value;
        }

        get readyHandFlag() {
          return this._readyHandFlag;
        }

        get wildContinue() {
          return this._wildContinue;
        }

        set wildContinue(value) {
          this._wildContinue = value;
        }

        get isMovedWild() {
          return this._isMovedWild;
        }

        set isMovedWild(value) {
          this._isMovedWild = value;
        }

        get aniWPos() {
          return this._aniWPos;
        }

        set aniWPos(value) {
          this._aniWPos = value;
        }

        get isScatter() {
          return this._isScatter;
        }

        set isScatter(value) {
          this._isScatter = value;
        }

        get wildData() {
          return this._wildData;
        }

        init() {
          super.init();
        }

        updateIcon(dt) {
          //super.update(dt);
          this.updateMove(dt);

          if (!this._wildNode || !this._wildNode.isValid) {
            return;
          }
          /*
          if (this._skipWildSyncFrames > 0) {
              this._skipWildSyncFrames--;
              return;
          }*/


          var currentIconWorldPos = this.node.worldPosition;

          if (!this._lastIconWorldPosition || !this._lastIconWorldPosition.equals(currentIconWorldPos)) {
            //this._wildNode.worldPosition = v3(currentIconWorldPos.x, currentIconWorldPos.y + 10, this._wildNode.worldPosition.z);
            this._wildNode.worldPosition = v3(currentIconWorldPos.x, currentIconWorldPos.y, this._wildNode.worldPosition.z);
            this._lastIconWorldPosition = currentIconWorldPos.clone();
            this.offsetIconPos(this._wildNode); //---20260303測試關閉

            /*
            let targetNode: Node = this._wildNode.children[0];//--外面再包一層node用來改變位置用的
            targetNode.setPosition(v3(0, 0, 0));
            const offsetY = 160 / 2;
            const uiTransform: UITransform = this._wildNode.getComponent(UITransform);
            const changeV3 = v3(v3(0, (uiTransform.contentSize.height / 2) - offsetY, 0))
            targetNode.setPosition(changeV3);*/
          }
        }

        checkSpriteFrameExist() {
          if (!this.gameSprite.spriteFrame) {
            return false;
          } else {
            return true;
          }
        }

        getGameSpriteNode() {
          return this.gameSprite.node;
        } //---for debug


        getSiblingIndex() {
          return {
            last: this._lastSiblingIndex,
            current: this._siblingIndex
          };
        }
        /*
        //假如覆寫get or set，兩者都要override
        public override get symbol(): SymbolNumber { 
            return this._symbol;
        }
        
        //分開兩段來寫資料,換圖規換圖,寫symbolNum歸symbolNum
        public override set symbol(symbol: SymbolNumber) {
            this._symbol = symbol;
            this.updateSymbol(symbol);
        }*/


        getIconReelInfo() {
          var reelData = {
            reelIndex: this._symbol.reelIndex,
            //從SymbolNumber取得reelIndex
            iconIndex: this._symbol.iconIndex //從SymbolNumber取得iconIndex

          };
          return reelData;
        }

        resetWildData() {
          this._wildData.isStart = false;
          this._wildData.isEnd = false;
          this._wildData.wildIndex = -1;
          this._wildData.isWild = false;
          this._wildData.isLock = false;
          this._wildData.goBack = false;
        }

        resetData() {
          this.resetWildData();
          this._wildContinue = [];
          this._aniWPos = v3(0, 0, 0);
          this._isScatter = false;
          this.gameSprite.spriteFrame = null; // 清除圖像
          //this.gameSprite.color = color(255, 255, 255, 0);

          this.gameSprite.node.active = true;
          this._readyHandFlag = false;
          this._lastIconWorldPosition = null; // 重置位置記錄

          this._skipWildSyncFrames = 0; // 重置跳過計數

          this._wildInsidePos = v3(0, 0, 0); //--重置wild裡面包的那個node的位置
          //this._cachedWildNodePosition = null;//--清空2階段加速wild位置資料

          this.safeResolve(); //--清除殘留的promise
        }

        getWildAniCtrl() {
          if (this._wildNode) {
            return this._wildNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];
          }

          return null;
        }

        getAndRemoveWildNode(handoff) {
          if (handoff === void 0) {
            handoff = true;
          }

          if (handoff) {
            if (this._colorState) {
              this.changeSpineColor(255);
            }
          }

          var node = this._wildNode;
          if (node != null && node.isValid) node.removeFromParent(); // 比 removeChild 穩定

          this._wildNode = null;
          this._lastIconWorldPosition = null; // 重置位置記錄

          this._skipWildSyncFrames = 0; //  重置跳過計數

          return node != null ? node : null;
        } //--沒有刪除還保留在這個容器之中


        getWildNode() {
          return this._wildNode;
        }

        getSymbolAniNode() {
          if (!this._aniSymbol) {
            return null;
          } else {
            return this._aniSymbol;
          }
        } //--new 0925


        checkAndRemoveWildNode() {
          var returnNode = null;

          if (this._wildData.isWild) {
            if (this.checkWildIsExist()) {
              returnNode = this.getAndRemoveWildNode();
            }

            this.resetData(); //--裡面自己會做清空spriteFrame的動作

            /*
            this.testIsWildEnd = 'false';
            this.testIsWildStart = 'false';
            this.testIsWild = 'false';//--debug
            this.testISAddWildNode = 'REMOVED';//--debug 
            */
          }

          return returnNode;
        } //--new 0925


        checkAniSymbolAndRemove() {
          var returnNode = null;

          if (this.checkAniSymbolIsExist()) {
            returnNode = this.getSymbolAniNodeAndRemove();
          }

          this.gameSprite.spriteFrame = null; // 清除圖像
          //this.gameSprite.color = color(255, 255, 255, 0);

          this.gameSprite.node.active = true;
          this._aniWPos = v3(0, 0, 0);
          return returnNode;
        }

        checkWildIsExist() {
          if (this._wildNode !== null) {
            return true;
          } else {
            return false;
          }
        }

        checkAniSymbolIsExist() {
          if (this._aniSymbol !== null) {
            return true;
          } else {
            return false;
          }
        }

        offsetIconPos(wildNode) {
          //const offsetY = this.iconSize.y / 2;
          var offsetY = this.iconSize.y / 2 + 10;
          var targetNode = wildNode.children[0]; //--外面再包一層node用來改變位置用的

          targetNode.setPosition(v3(0, 0, 0));
          var uiTransform = wildNode.getComponent(UITransform);
          var changeV3 = v3(v3(0, uiTransform.contentSize.height / 2 - offsetY, 0));
          targetNode.setPosition(changeV3);
          this._wildInsidePos = targetNode.worldPosition.clone(); //--20260303
        }

        addWildNode(wildNode) {
          var leftover = this.findAndRemoveLeftoverNode(wildNode);
          this._wildNode = wildNode;

          this._fakeWildLayerContainer.addChild(wildNode); //--先用假的容器來放


          var iconTargetWpos = this.node.worldPosition.clone(); //const iconWorldPos = v3(iconTargetWpos.x, iconTargetWpos.y + 10, iconTargetWpos.z);

          var iconWorldPos = v3(iconTargetWpos.x, iconTargetWpos.y, iconTargetWpos.z);
          this.offsetIconPos(this._wildNode); //--移動prefab裡面的icon9這個node到微調位置使用的
          //  轉換座標

          var containerTransform = this._fakeWildLayerContainer.getComponent(UITransform);

          var targetLocalPos = containerTransform.convertToNodeSpaceAR(iconWorldPos);
          this._wildNode.position = targetLocalPos;
          this._lastIconWorldPosition = iconWorldPos.clone(); //this.gameSprite.node.active = false;---測試關閉

          this.reSetWildLayerAndSort();
          return {
            leftover: leftover
          };
        } //---20260105-2階段會爆開用到這個方法


        getWildNodePosition() {
          /*
          if (this._wildNode) {
              return this._wildNode.position.clone();
          }
          // 使用緩存的位置作為備用
          return this._cachedWildNodePosition?.clone() ?? v3(0, 0, 0);
          */
          var uiTransform = this._fakeWildLayerContainer.getComponent(UITransform);

          var targetWorldPos;

          if (this._wildNode) {
            targetWorldPos = this._wildNode.worldPosition.clone();
          } else {
            var targetNodeWpos = this.node.worldPosition.clone(); //targetWorldPos = v3(targetNodeWpos.x, targetNodeWpos.y + 10, targetNodeWpos.z);

            targetWorldPos = v3(targetNodeWpos.x, targetNodeWpos.y, targetNodeWpos.z);
          } //targetWorldPos = this._wildInsidePos.clone();//--20260303測試關閉微調後的wild位置


          var localPos = uiTransform.convertToNodeSpaceAR(targetWorldPos);
          return localPos; // 使用緩存的位置作為備用
          //const uiTransform: UITransform = this._fakeWildLayerContainer.getComponent(UITransform);
          //const targetWorldPos = this.node.worldPosition.clone();

          /*
          const localPos = uiTransform.convertToNodeSpaceAR(targetWorldPos);
          return localPos;
          */
        }

        reSetWildLayerAndSort() {
          var children = this._fakeWildLayerContainer.children;
          children.sort((a, b) => {
            var aReelIndex = a[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex;
            var bReelIndex = b[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO].reelIndex;
            return aReelIndex - bReelIndex;
          });
          /**
           * 這裡有點雷,因為上一步node.parent = wildContainer;
           * 會直接把node push到後面...
           * 然後再用 setSiblingIndex(i)，它會重新排列陣列，畫的順序仍照內部的 index 走（從 0 開始畫）
           */

          for (var i = 0; i < children.length; i++) {
            children[i].setSiblingIndex(children.length - 1 - i);
          }
        }

        testHideIcon() {
          this.gameSprite.node.active = false;
          console.log();
        }

        testDebug() {
          this.gameSprite.color = color(255, 255, 255, 100);
        }

        addSymbolAniNode(aniSymbol, offsetY, isDark) {
          if (offsetY === void 0) {
            offsetY = 0;
          }

          if (isDark === void 0) {
            isDark = false;
          }

          var leftover = this.findAndRemoveLeftoverNode(aniSymbol);
          this._aniSymbol = aniSymbol;
          this._aniSymbol.active = true; //this.gameSprite.node.active = false;---test 關閉

          this.node.addChild(this._aniSymbol);

          this._aniSymbol.setPosition(v3(0, offsetY, 0));

          var darkValue = this.getDarkBrightness(this._colorState);

          if (this._symbol.symbolID != SCATTER_LIST[0]) {
            if (darkValue != 255) {
              this.changeSpineColor(darkValue);
            } else if (isDark) {
              this.setIconLight(isDark);
            }
          }

          return {
            leftover: leftover
          };
        }

        setDynWildLockReelData(isLock) {
          if (this._wildNode) {
            //this._wildNode[DYN_NODE_PROPERTIES.LOCKED] = isLock;
            this._wildNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).LOCKED] = this.wildData.isLock;
          }
        }

        setResultSymData() {
          if (this._aniSymbol) {
            this._aniSymbol[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO] = {
              symbolId: this._symbol.symbolID,
              reelIndex: this._symbol.reelIndex,
              iconIndex: this._symbol.iconIndex
            };
          }
        }

        setReadyHandState(isReadyHand) {
          //--這裡是不管快速模式與否每軸有吻合條件就會寫入,在外層要判斷擋掉
          this._readyHandFlag = isReadyHand;

          if (this._aniSymbol) {
            this._aniSymbol[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).READY_HAND_STATUS] = isReadyHand;
          }
        }

        setFastModeState(isFastMode) {
          if (this._aniSymbol) {
            this._aniSymbol[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).FAST_MODE] = isFastMode;
          }
        }

        setWholeBoardReadyHandState(isWholeBoardReadyHand) {
          if (this._aniSymbol) {
            this._aniSymbol[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).WHOLE_BOARD_READY_HAND] = isWholeBoardReadyHand;
          }
        }

        setWildDynamicData(data) {
          if (this._wildNode) {
            this._wildNode[(_crd && DYN_WILD_INFO === void 0 ? (_reportPossibleCrUseOfDYN_WILD_INFO({
              error: Error()
            }), DYN_WILD_INFO) : DYN_WILD_INFO).WILD_CONTINUE] = this._wildContinue;
            this._wildNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).SYMBOL_ICON_INFO] = {
              symbolId: this._symbol.symbolID,
              reelIndex: this._symbol.reelIndex,
              iconIndex: this._symbol.iconIndex
            };
          }
        }

        aniNodeGoBackToDefault() {
          if (this.checkAniSymbolIsExist()) {
            var iAnimationControl = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(this._aniSymbol);
            iAnimationControl == null || iAnimationControl.goBackToDefault();
          }
        }

        findAndRemoveLeftoverNode(aniSymbol) {
          var leftover = [];

          if (this._aniSymbol && this._aniSymbol.isValid) {
            /*
            GameUtilsTools.debugLog(DEBUG_LOG_TITLE, 'addSymbolAniNode_發現殘留 aniSymbol 強制移除', {
                iconID: this.iconId,
                reelIndex: this.symbol.reelIndex,
                iconIndex: this.symbol.iconIndex,
                symbolId: this.symbol.symbolID,
                replace: aniSymbol[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId,
                prefabID: aniSymbol[DYN_NODE_PROPERTIES.PREFAB_ID]
            }, 'warn');
            */
            var aniLeftover = this._aniSymbol;
            leftover.push(aniLeftover);

            this._aniSymbol.removeFromParent();

            this._aniSymbol = null;
            this.gameSprite.spriteFrame = null; // 清除圖像
            //this.gameSprite.color = color(255, 255, 255, 0);

            this.gameSprite.node.active = true;
            this._aniWPos = v3(0, 0, 0);
          }

          if (this._wildNode && this._wildNode.isValid) {
            /*
            GameUtilsTools.debugLog(DEBUG_LOG_TITLE, 'addSymbolAniNode_發現殘留 wildNode 強制移除', {
                iconID: this.iconId,
                reelIndex: this.symbol.reelIndex,
                iconIndex: this.symbol.iconIndex,
                symbolId: this.symbol.symbolID,
                replace: aniSymbol[DYN_NODE_PROPERTIES.SYMBOL_ICON_INFO].symbolId,
                prefabID: aniSymbol[DYN_NODE_PROPERTIES.PREFAB_ID]
            }, 'warn');
            */
            var wildLeftover = this._wildNode;
            leftover.push(wildLeftover);

            this._wildNode.removeFromParent();

            this._wildNode = null;
            this.resetData(); //--裡面自己會做清空spriteFrame的動作

            /*
            this.testIsWildEnd = 'false';
            this.testIsWildStart = 'false';
            this.testIsWild = 'false';//--debug
            this.testISAddWildNode = 'REMOVED';//--debug  
            */
          }

          return leftover;
        }

        getSymbolAniNodeAndRemove(handoff) {
          if (handoff === void 0) {
            handoff = true;
          }

          if (!this._aniSymbol) {
            return null;
          } else {
            if (handoff) {
              if (this._colorState) {
                this.changeSpineColor(255);
              }
            }

            var iAnimationControl = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(this._aniSymbol);
            iAnimationControl.goBackToDefault();
            this.node.removeChild(this._aniSymbol);
            var returnAniNode = this._aniSymbol;
            this._aniSymbol = null;
            /*
            GameUtilsTools.debugLog(DEBUG_LOG_TITLE, 'getSymbolAniNodeAndRemove_移除', {
                iconID: this.iconId,
                reelIndex: this.symbol.reelIndex,
                iconIndex: this.symbol.iconIndex,
                symbolId: this.symbol.symbolID
            })*/

            return returnAniNode;
          }
        }

        handoffSymbolAniNode() {
          if (!this._aniSymbol) {
            return null;
          } else {
            this.changeSpineColor(255);
            var iAnimationControl = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(this._aniSymbol);

            if (this._symbol.symbolID != 10) {
              iAnimationControl.goBackToDefault();
            }

            this.node.removeChild(this._aniSymbol);
            var returnAniNode = this._aniSymbol;
            this._aniSymbol = null;
            return returnAniNode;
          }
        } //--0-8沒有idle的狀態,9,10則有default和idle


        playSymbolAni(aniName) {
          if (this._aniSymbol) {
            this._aniSymbol.active = true;
            var iAnimationControl = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(this._aniSymbol);

            if (iAnimationControl) {
              iAnimationControl.playAni((_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                error: Error()
              }), AnimationStateType) : AnimationStateType).Default);
            }
          }
        }

        playWildToFgAnimation() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this._wildNode) {
              var speed = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
                error: Error()
              }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
                error: Error()
              }), GameGlobalKeys) : GameGlobalKeys).CurrentRoundSpeed);
              var iAnimationControl = _this._wildNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];

              if (speed == (_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
                error: Error()
              }), NewFlashModeEnum) : NewFlashModeEnum).NewFlash2 || speed == (_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
                error: Error()
              }), NewFlashModeEnum) : NewFlashModeEnum).NewFlash1) {
                iAnimationControl.playAni({
                  aniState: 'Connect_1'
                });
                return;
              } else {
                yield iAnimationControl.playAniInPromise({
                  aniState: 'Connect_1'
                });
              }
            }
          })();
        }

        playWildAppearAnimation() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (_this2._wildNode) {
              var speed = (_crd && GlobalAccessReader === void 0 ? (_reportPossibleCrUseOfGlobalAccessReader({
                error: Error()
              }), GlobalAccessReader) : GlobalAccessReader).getGlobalData((_crd && GameGlobalKeys === void 0 ? (_reportPossibleCrUseOfGameGlobalKeys({
                error: Error()
              }), GameGlobalKeys) : GameGlobalKeys).CurrentRoundSpeed);
              var iAnimationControl = _this2._wildNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
                error: Error()
              }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];
              iAnimationControl.goBackToDefault();

              if (speed == (_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
                error: Error()
              }), NewFlashModeEnum) : NewFlashModeEnum).NewFlash2 || speed == (_crd && NewFlashModeEnum === void 0 ? (_reportPossibleCrUseOfNewFlashModeEnum({
                error: Error()
              }), NewFlashModeEnum) : NewFlashModeEnum).NewFlash1) {
                //iAnimationControl.playAni({ aniState: 'Appear' });
                return;
              } else {
                yield iAnimationControl.playAniInPromise({
                  aniState: 'Appear'
                });
              }
            }
          })();
        }

        playWildExpectAni() {
          if (this._wildNode) {
            if (this._colorState) this.changeSpineColor(255);
            var iAnimationControl = this._wildNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];
            iAnimationControl.playAni({
              aniState: WILD_EXPECT_ANI_TYPE
            });
          }
        }

        stopWildExpectAni() {
          if (this._wildNode) {
            var iAnimationControl = this._wildNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];
            iAnimationControl.goBackToDefault();
          }
        }

        playWildIdle() {
          if (this._wildNode) {
            var iAnimationControl = this._wildNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL];

            if (iAnimationControl.currentTarget == null) {
              //--還沒播過任何動畫
              iAnimationControl.playAni((_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                error: Error()
              }), AnimationStateType) : AnimationStateType).Idle);
            } else if (iAnimationControl.currentTarget.targetName !== 'Idle_Ani') {
              var testCT = iAnimationControl.currentTarget;
              iAnimationControl.playAni((_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
                error: Error()
              }), AnimationStateType) : AnimationStateType).Idle);
            }
          }
        }

        clearSymbolSpriteFrame() {
          this.gameSprite.spriteFrame = null; //this.gameSprite.color = color(255, 255, 255, 100);
        }

        updateSymbol(symbol) {
          /**
           * PS symbolID=9是特殊物件,裡面也不會有東西,symbolID=10=scatter,為了吻合這個順序
           * 所以prefab裡面的spriteFrameList在index=9的時候會是空的,10才有東西
           * 因為9是wild特殊物件不會進來這裡吧?
           */
          if (!symbol) {
            symbol = this.symbol;
          } //this.testDebug();
          //this.gameSprite.node.active = false;//--20260128


          if (!this.spriteFrameList[symbol.symbolID]) {
            //--初始沒有值
            this.gameSprite.spriteFrame = this.spriteFrameList[DEFAULT_SYMBOL_ID]; //console.warn(`SpriteFrame for symbolID ${symbol.symbolID} not found.`);

            return;
          } else if (symbol.symbolID === 9) {
            this.gameSprite.spriteFrame = null; // Wild icon does not have a sprite frame
            //this.gameSprite.color = color(255, 255, 255, 0);
            //his.gameSprite.color = color(255, 255, 255, 100);

            return;
          }

          this.gameSprite.spriteFrame = this.spriteFrameList[symbol.symbolID];
        } //--這裡只有在特殊模式下才會進來


        setTweenBrightness(isDark) {
          this._colorState = isDark;
          this.doBasicColorChange();
          var darkBrightness = this.getDarkBrightness(isDark, true);
          var colorNumber = isDark ? {
            value: darkBrightness
          } : {
            value: 255
          };
          var value = colorNumber.value.toString();
          return new Promise(resolve => {
            tween(colorNumber).to(0.5, {
              value: darkBrightness
            }, {
              onUpdate: (t, r) => {
                this.gameSprite.color = color(colorNumber.value, colorNumber.value, colorNumber.value, this.gameSprite.color.a);
                this.changeSpineColor(colorNumber.value);
              }
            }).call(() => {
              resolve();
            }).start();
          });
        }

        setIconLight(isDark) {
          this._colorState = isDark;
          this.doBasicColorChange();
          this.changeSpineColor(this.getDarkBrightness(isDark));
        }

        getDarkBrightness(isDark, isSpColor) {
          var returnvalue = 255;

          if (isDark) {
            returnvalue = isSpColor ? this._sp_darkBrightness : this.darkBrightness;
          }

          return returnvalue;
        }

        doBasicColorChange() {
          var darkBrightness = this.getDarkBrightness(this._colorState);

          if (this.gameSprite != null) {
            this.gameSprite.color = color(darkBrightness, darkBrightness, darkBrightness, this.gameSprite.color.a);
          }
        }

        changeSpineColor(colorValue) {
          if (this._aniSymbol) {
            var baseComponent = (_crd && AniSysTools === void 0 ? (_reportPossibleCrUseOfAniSysTools({
              error: Error()
            }), AniSysTools) : AniSysTools).findAndGetIAniComponent(this._aniSymbol);

            if (HIGH_ODDS_SYMBOL_LIST.includes(this._symbol.symbolID)) {
              if (baseComponent && baseComponent instanceof (_crd && MultiSpineController === void 0 ? (_reportPossibleCrUseOfMultiSpineController({
                error: Error()
              }), MultiSpineController) : MultiSpineController)) {
                var spineMap = baseComponent.getMultiSpineController();

                for (var controller of spineMap) {
                  var sp = controller.spine;
                  sp.color = color(colorValue, colorValue, colorValue, sp.color.a);
                }
              }
            } else if (SCATTER_LIST.includes(this._symbol.symbolID)) {
              if (baseComponent && baseComponent instanceof (_crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
                error: Error()
              }), AnimationController) : AnimationController)) {
                // 使用aniCtrl獨有的API
                var aniCtrl = baseComponent;

                if (aniCtrl && aniCtrl.isAEP_SPINE && aniCtrl.aepSpines.length > 0) {
                  for (var _sp of aniCtrl.aepSpines) {
                    _sp.color = color(colorValue, colorValue, colorValue, _sp.color.a);
                  }
                }
              }
            } else {
              //---??fuck..可能是wild這邊要在處理非MultiSpineController的型別(特別是animationController的狀態)
              if (baseComponent) {
                if (!baseComponent.spine) {//console.log('wtf');
                } else {
                  baseComponent.spine.color = color(colorValue, colorValue, colorValue, baseComponent.spine.color.a);
                }
              }
            }
          } else if (this.checkWildIsExist() && this._symbol.symbolID == WILD_LIST[0]) {
            //有在包裝一層,且它是用AEP去控制spine
            var skeletons = this._wildNode[(_crd && DYN_NODE_PROPERTIES === void 0 ? (_reportPossibleCrUseOfDYN_NODE_PROPERTIES({
              error: Error()
            }), DYN_NODE_PROPERTIES) : DYN_NODE_PROPERTIES).ANIMATION_CTRL].aepSpines;

            for (var _sp2 of skeletons) {
              _sp2.color = color(colorValue, colorValue, colorValue, _sp2.color.a);
            }
          }
        }

        setPendingResolve(res) {
          this.safeResolve();
          this._resolvePromise = res; // 暫時用 any 存
        } //--把殘留參數帶出去


        safeResolve(value) {
          if (this._resolvePromise) {
            var r = this._resolvePromise;
            this._resolvePromise = undefined;

            try {
              r(value);
            } catch (_unused) {}
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "darkBrightness", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_sp_darkBrightness", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gameSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrameList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "isFinalDesIcon", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "iconSize", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3(0, 0, 0);
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=78c43099d536460fdeafe138013a6eafe6062d08.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Vec3, UITransform, Graphics, color, Layers, CCInteger, tween, ParticleSystem, bezier, v3, DefinitionGameConfigData, FG_BonusBarAniController, AnimationControllersPoolManager, FindComponent, AnimationController, FG_BonusCountTimes, IWindowResize, Orientation, GameUtils, BonusParticlePool, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, BONUS_MULTIPLIER, SPECIAL_SYMBOL_LIST, DEFAULT_FG_ROUNDS, BONUS_MULTIPLIER_REDUCE, CollectionBoxNode_Name, BonusCountTimes_Name, BonusManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDefinitionGameConfigData(extras) {
    _reporterNs.report("DefinitionGameConfigData", "../../DefinitionGameData/DefinitionGameConfigData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFG_BonusBarAniController(extras) {
    _reporterNs.report("FG_BonusBarAniController", "./BonusComponent/FG_BonusBarAniController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationControllersPoolManager(extras) {
    _reporterNs.report("AnimationControllersPoolManager", "../../MyUtils/AnimationSystem/AnimationControllersPoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../../MyUtils/FindComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationController(extras) {
    _reporterNs.report("AnimationController", "../../MyUtils/AnimationSystem/Components/AnimationController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBonusInfo(extras) {
    _reporterNs.report("BonusInfo", "./BonusComponent/FG_bonusDataDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBonusInfoForRound(extras) {
    _reporterNs.report("BonusInfoForRound", "./BonusComponent/FG_bonusDataDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFG_BonusCountTimes(extras) {
    _reporterNs.report("FG_BonusCountTimes", "./BonusComponent/FG_BonusCountTimes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWindowResize(extras) {
    _reporterNs.report("IWindowResize", "db://assets/Scripts/Utils/IWindowResize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "db://assets/Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../MyUtils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBonusParticlePool(extras) {
    _reporterNs.report("BonusParticlePool", "./BonusParticlePool", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
      Graphics = _cc.Graphics;
      color = _cc.color;
      Layers = _cc.Layers;
      CCInteger = _cc.CCInteger;
      tween = _cc.tween;
      ParticleSystem = _cc.ParticleSystem;
      bezier = _cc.bezier;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      DefinitionGameConfigData = _unresolved_2.DefinitionGameConfigData;
    }, function (_unresolved_3) {
      FG_BonusBarAniController = _unresolved_3.FG_BonusBarAniController;
    }, function (_unresolved_4) {
      AnimationControllersPoolManager = _unresolved_4.AnimationControllersPoolManager;
    }, function (_unresolved_5) {
      FindComponent = _unresolved_5.FindComponent;
    }, function (_unresolved_6) {
      AnimationController = _unresolved_6.AnimationController;
    }, function (_unresolved_7) {
      FG_BonusCountTimes = _unresolved_7.FG_BonusCountTimes;
    }, function (_unresolved_8) {
      IWindowResize = _unresolved_8.IWindowResize;
    }, function (_unresolved_9) {
      Orientation = _unresolved_9.Orientation;
    }, function (_unresolved_10) {
      GameUtils = _unresolved_10.GameUtils;
    }, function (_unresolved_11) {
      BonusParticlePool = _unresolved_11.BonusParticlePool;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb6f9qr2YpNPrTNrX9eF3ul", "BonusManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'UITransform', 'Graphics', 'color', 'Layers', 'CCInteger', 'tween', 'ParticleSystem', 'bezier', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        BONUS_MULTIPLIER,
        SPECIAL_SYMBOL_LIST,
        DEFAULT_FG_ROUNDS,
        BONUS_MULTIPLIER_REDUCE
      } = _crd && DefinitionGameConfigData === void 0 ? (_reportPossibleCrUseOfDefinitionGameConfigData({
        error: Error()
      }), DefinitionGameConfigData) : DefinitionGameConfigData);
      CollectionBoxNode_Name = 'FG_CollectBox_all'; //--FG_CollectBox_all prefab name

      BonusCountTimes_Name = 'FG_UI_Remaining_bot'; //--FG_UI_Remaining_bot prefab name

      _export("BonusManager", BonusManager = (_dec = ccclass('BonusManager'), _dec2 = property({
        type: Node,
        displayName: 'Ali_bonusBarContainer',
        visible: true,
        tooltip: 'ali放bonus collectionBox的node'
      }), _dec3 = property({
        type: Node,
        displayName: 'Thieves_bonusBarContainer',
        visible: true,
        tooltip: 'Thieves放bonus collectionBox的node'
      }), _dec4 = property({
        type: Node,
        displayName: 'bonusCountTimesContainer',
        visible: true,
        tooltip: '裝bonusTime的node'
      }), _dec5 = property({
        type: Node,
        displayName: 'bonusParticleContainer',
        visible: true,
        tooltip: '裝particle的node'
      }), _dec6 = property({
        type: CCInteger,
        displayName: 'maximumCount',
        visible: true,
        tooltip: 'bonusMaximum count'
      }), _dec7 = property({
        type: Node,
        displayName: 'landscapeContainer',
        visible: true,
        tooltip: 'landscape的node'
      }), _dec8 = property({
        type: Node,
        displayName: 'portraitContainer',
        visible: true,
        tooltip: 'portrait的node'
      }), _dec(_class = (_class2 = class BonusManager extends (_crd && IWindowResize === void 0 ? (_reportPossibleCrUseOfIWindowResize({
        error: Error()
      }), IWindowResize) : IWindowResize) {
        constructor() {
          super(...arguments);
          //@property({ type: Node, displayName: 'bonusBarContainer', visible: true, tooltip: '放bonus collectionBox的node' })
          this._targetBonusBarContainer = null;

          _initializerDefineProperty(this, "_ali_BonusBarContainer", _descriptor, this);

          _initializerDefineProperty(this, "_thieves_BonusBarContainer", _descriptor2, this);

          _initializerDefineProperty(this, "_freeSpineCountTimesContainer", _descriptor3, this);

          _initializerDefineProperty(this, "_bonusParticleContainer", _descriptor4, this);

          _initializerDefineProperty(this, "_maximumCount", _descriptor5, this);

          //--bonus最大數量
          _initializerDefineProperty(this, "_landscapeNode", _descriptor6, this);

          _initializerDefineProperty(this, "_portraitNode", _descriptor7, this);

          this._freeSpineCountTimesPrefabNode = null;
          this._freeSpineTimes = null;
          this._bonusAniController = null;
          this._bonusBarPrefabNode = null;
          this._totalRounds = 0;
          //--總局數
          this._currentRounds = 0;
          //--當前局數
          this._currentBonusCount = 0;
          //-當前總bonus數量(for播放)
          this._currentMultiplier = 0;
          this._isWorking = false;
          //--是否在運行中
          this._camp = -1;
          //--當前的camp
          this._roundForBonusData = [];
          //--bonus資料
          this._gameRotationResolution = null;
          this._bonusParticlePool = null;
        }

        //--bonus particle pool

        /**
         *  1.基本5把
            2.長度超過5把代表他有獲得額外的FG
            3.出現bonus代表獲得額外局數(出現一個就多一局)
            4.出現bonus啟動上方面板倍率加成,下方要累計局數變動
            5.每次FG的每一把,在結算時如果有bonus要乘上累積的倍率
            6.bonus累計滿點時,不在啟動效果,只會累加一局
         */
        get currentMultiplier() {
          return this._currentMultiplier;
        }

        get isWorking() {
          return this._isWorking;
        }

        set totalRounds(value) {
          this._totalRounds = value; //--預設開局5把
        }

        init() {
          this._isWorking = false;
          this._bonusParticlePool = new (_crd && BonusParticlePool === void 0 ? (_reportPossibleCrUseOfBonusParticlePool({
            error: Error()
          }), BonusParticlePool) : BonusParticlePool)();
        }

        resetData() {
          this._totalRounds = 0;
          this._currentRounds = 0;
          this._currentBonusCount = 0;
          this._currentMultiplier = 0;
          this._isWorking = false;
          this._camp = -1;
          this._roundForBonusData = []; //--再推回物件池後移除相關物件

          this._bonusBarPrefabNode = null;
          this._bonusAniController = null;
          this._freeSpineCountTimesPrefabNode = null;
          this._freeSpineTimes = null;
        }
        /**
         * fg2要在盤面上面不顯示的symbol id
         * 梅花5/方塊4/愛心3/黑桃2
         * @returns 2,3,4,5
         */


        getCamp2MultiplierForReduce() {
          if (this._camp == 0) {
            return -1;
          } else if (this._camp == 1) {
            if (BONUS_MULTIPLIER_REDUCE[this._currentMultiplier]) {
              return BONUS_MULTIPLIER_REDUCE[this._currentMultiplier];
            } else {
              return -1;
            }
          }
        }

        openFGBonus(camp) {
          this._camp = camp;
          this._targetBonusBarContainer = this._camp == 0 ? this._ali_BonusBarContainer : this._thieves_BonusBarContainer;
          this._totalRounds = DEFAULT_FG_ROUNDS;
          this._bonusBarPrefabNode = (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
            error: Error()
          }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().getPrefabNode(CollectionBoxNode_Name);
          this._bonusBarPrefabNode.active = true; //--去觸發onload

          this._targetBonusBarContainer.addChild(this._bonusBarPrefabNode);

          this._bonusBarPrefabNode.setPosition(v3(0, 0, 0));

          this._bonusAniController = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
            error: Error()
          }), FindComponent) : FindComponent).findComponentInChildren(this._bonusBarPrefabNode, _crd && FG_BonusBarAniController === void 0 ? (_reportPossibleCrUseOfFG_BonusBarAniController({
            error: Error()
          }), FG_BonusBarAniController) : FG_BonusBarAniController);
          this._bonusAniController.camp = this._camp;

          this._bonusAniController.setSkinAndInitSpine(this.getCurrentCampSkinName());

          this._bonusAniController.setGameScreenRotationResolution(this._gameRotationResolution); //this._bonusAniController.setPositions();


          this._freeSpineCountTimesPrefabNode = (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
            error: Error()
          }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().getPrefabNode(BonusCountTimes_Name);
          var container = this.getOrientationContainer();
          container.addChild(this._freeSpineCountTimesPrefabNode); //this.onWindowResize(this._gameRotationResolution);
          //this._freeSpineCountTimesContainer.addChild(this._freeSpineCountTimesPrefabNode);

          this._freeSpineCountTimesPrefabNode.active = true; //--去觸發onload

          this._freeSpineTimes = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
            error: Error()
          }), FindComponent) : FindComponent).findComponentInChildren(this._freeSpineCountTimesPrefabNode, _crd && FG_BonusCountTimes === void 0 ? (_reportPossibleCrUseOfFG_BonusCountTimes({
            error: Error()
          }), FG_BonusCountTimes) : FG_BonusCountTimes);

          this._freeSpineTimes.init();

          this._freeSpineCountTimesPrefabNode.setPosition(v3(0, 0, 0));

          this._freeSpineTimes.setCamp(this._camp);

          this._isWorking = true;
          this.onWindowResize(this._gameRotationResolution);
        }

        onWindowResize(orientation) {
          this._gameRotationResolution = orientation;

          if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            this.changeToLandscape();
          } else if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait) {
            this.changeToPortrait();
          }

          if (this._bonusAniController) {
            this._bonusAniController.setGameScreenRotationResolution(this._gameRotationResolution);
          }
        }

        moveTargetTo(target, container) {
          if (!target || !container) return;
          target.removeFromParent(); // 強制脫離當前 parent

          container.addChild(target);
          target.setPosition(0, 0, 0);
        }

        changeToLandscape() {
          var target = this._portraitNode.children[0] || this._landscapeNode.children[0]; //--直接操作_freeSpineCountTimesPrefabNode不就得了?

          if (target) {
            this._landscapeNode.active = true;
            this._portraitNode.active = false;
            this.moveTargetTo(target, this._landscapeNode);
          }
        }

        changeToPortrait() {
          var target = this._landscapeNode.children[0] || this._portraitNode.children[0];

          if (target) {
            this._portraitNode.active = true;
            this._landscapeNode.active = false;
            this.moveTargetTo(target, this._portraitNode);
          }
        }

        removeOrientationInsideNode(node) {
          if (node && node.parent) {
            node.removeFromParent();
          }
        }

        getOrientationContainer() {
          if (this._gameRotationResolution == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            return this._landscapeNode;
          } else if (this._gameRotationResolution == (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait) {
            return this._portraitNode;
          }

          return null;
        }

        testPos() {
          for (var i = 0; i < 13; i++) {
            var testNode = new Node();
            var graphic = testNode.addComponent(Graphics); //-graphic 不受到UIOpacity組件影響~有夠78(color 0-255)

            graphic.fillColor = color(255, 255, 255, 128);
            graphic.rect(-10, -10, 20, 20);
            graphic.fill();
            testNode.layer = Layers.Enum.UI_2D;

            this._bonusParticleContainer.addChild(testNode);

            var wPos = this._bonusAniController.getWorldPosition(i);

            var local = this._bonusParticleContainer.getComponent(UITransform).convertToNodeSpaceAR(wPos);

            testNode.setPosition(local);
          }
        }
        /**
         * 清除本局資料,準備下一局FG
         */


        cleanThisRoundForNext() {
          this._roundForBonusData = []; //this._currentMultiplier=0;
        }
        /**
         * 關閉FG,回收資源
         */


        closeFGBonus() {
          this._isWorking = false;

          this._bonusAniController.resetData();

          this._bonusBarPrefabNode.active = false;

          this._targetBonusBarContainer.removeChild(this._bonusBarPrefabNode);

          this._freeSpineTimes.resetData();

          this._freeSpineCountTimesPrefabNode.active = false;
          this.removeOrientationInsideNode(this._freeSpineCountTimesPrefabNode);
          (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
            error: Error()
          }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().pushInstancePrefabNodeToPool(CollectionBoxNode_Name, this._bonusBarPrefabNode);
          (_crd && AnimationControllersPoolManager === void 0 ? (_reportPossibleCrUseOfAnimationControllersPoolManager({
            error: Error()
          }), AnimationControllersPoolManager) : AnimationControllersPoolManager).getInstance().pushInstancePrefabNodeToPool(BonusCountTimes_Name, this._freeSpineCountTimesPrefabNode);

          this._bonusParticlePool.destroyAllParticles(); //--清除所有的particle


          this.resetData();
        }

        changeFgCountTimes(count) {
          var showCount = count ? count : this._totalRounds;

          this._freeSpineTimes.setFgCountTimes(showCount);
        } //--進行下一輪,扣除次數顯示


        changeTotalRounds() {
          this._totalRounds--;
          this.changeFgCountTimes();
        }
        /**
         * 
         * @param cards //symbolData: [[3, 2, 0], [3, 0, 4], [3, 0, 1], [0, 1, 2], [0, 4, 5], [0, 2, 3]],
         */


        setSingleRoundData(cards) {
          if (this._isWorking) {
            //this._currentRounds++;

            /*
            // 使用 Set 提高查找效率
            const specialSymbolSet = new Set(SPECIAL_SYMBOL_LIST);
             // 將二維陣列攤平成一維陣列
            const flattenedCards = cards.flatMap(card => card);
             // 過濾特殊符號
            const specialSymbols = flattenedCards.filter(symbolId => specialSymbolSet.has(symbolId));
             // 計算特殊符號數量
            const specialSymbolCount = specialSymbols.length;
             // 累加到 bonus 計數器
            this._currentBonusCount += specialSymbolCount;
            */
            var bonusData;
            this._currentRounds++;

            for (var i = 0; i < cards.length; i++) {
              var card = cards[i];

              for (var j = 0; j < card.length; j++) {
                var symbolId = card[j];

                if (SPECIAL_SYMBOL_LIST.includes(symbolId)) {
                  //this._currentBonusCount++;--播放的時候在累加
                  //--擷取資料提供播放相關動畫
                  bonusData = {
                    reelIndex: i,
                    iconIndex: j,
                    startWPos: null,
                    endWPos: null
                  };

                  this._roundForBonusData.push(bonusData); //--這是要算的資料

                }
              }
            } //--取得預先計算的倍率(僅限該輪)
            //this._currentBonusCountForCalc = this._totalRounds + this._roundForBonusData.length;


            if (this._roundForBonusData.length > 0) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        } //--取得預先算好的倍率


        getCurrentRoundBonusData() {
          return {
            bonusIndex: this._roundForBonusData,
            multiplier: this._currentMultiplier
          };
        }

        setWorldPosForRound(pos) {
          var len = pos.length;
          var roundForBonusDataLen = this._roundForBonusData.length;

          var uiTransform = this._bonusParticleContainer.getComponent(UITransform);

          for (var i = 0; i < len; i++) {
            for (var j = 0; j < roundForBonusDataLen; j++) {
              var localPos = uiTransform.convertToNodeSpaceAR(pos[i]);
              this._roundForBonusData[j].startWPos = localPos; //---換localPos要給particle用的(目標起點,終點)  
            }
          }
        }

        setSingleWorldPosByIndex(reelIndex, iconIndex, pos) {
          for (var bonusData of this._roundForBonusData) {
            if (bonusData.reelIndex == reelIndex && bonusData.iconIndex == iconIndex) {
              var localPos = this._bonusParticleContainer.getComponent(UITransform).convertToNodeSpaceAR(pos);

              bonusData.startWPos = localPos;
              break;
            }
          }
        }

        playSingleBonusEffect(reelIndex, iconIndex) {
          var _this = this;

          return _asyncToGenerator(function* () {
            return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
              var bonusData = _this.getBonusData(reelIndex, iconIndex); //--當取得的數量>最大數量時,不再啟動累計燈號,只會做fg局號的累加(最大燈號上限=13)


              if (_this._currentBonusCount < _this._maximumCount) {
                var index = _this._currentBonusCount;

                _this.calculateBonusCount();

                _this.calulateTotalRounds(1);

                _this.changeFgCountTimes(); //--計算是否新增局數,吻合條件會顯示


                yield _this.shootParticle(bonusData, index); //-噴particle

                _this._bonusAniController.playSingleItemAni(index); //--上方蒐集bar開啟燈號


                _this.getMultiplier(); //await GameUtils.Defer(400);


                yield (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
                  error: Error()
                }), GameUtils) : GameUtils).DeferByTweenPromise(400 / 1000); //--原本單位是毫秒現在換算成秒

                resolve();
              } else {
                //AudioManager.instance.playSound(SoundList.MoneyCollect, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);
                _this.calulateTotalRounds(1);

                _this.changeFgCountTimes(); //--計算是否新增局數,吻合條件會顯示


                resolve();
              }
            }));
          })();
        }

        shootParticle(data, index) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
              //let particleNode = AnimationControllersPoolManager.getInstance().getPrefabNode('FX_bonus_particle');
              var particleNode = yield _this2._bonusParticlePool.getParticleNode();
              particleNode.active = true;

              _this2._bonusParticleContainer.addChild(particleNode);

              particleNode.setPosition(data.startWPos);
              var ani = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                error: Error()
              }), FindComponent) : FindComponent).findComponentInChildren(particleNode, _crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
                error: Error()
              }), AnimationController) : AnimationController);
              ani.init();
              ani.playAni('FX_bonus_collect_loop_ani');
              var particleEmitter = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
                error: Error()
              }), FindComponent) : FindComponent).findComponentInChildren(particleNode, ParticleSystem); //let particleEmitter = FindComponent.findComponentInChildren(particleNode, ParticleExtension);
              //---要看引擎的source code
              //---幹.particle 在node被active=true的時候會觸發onEnable,裡面自己會處理(自己需要再做清除 this.processor.clear())

              particleEmitter.clear();
              particleEmitter.play(); //particleEmitter.onEnable();

              var endPos = _this2._bonusAniController.getWorldPosition(index);

              var endLocalPos = _this2._bonusParticleContainer.getComponent(UITransform).convertToNodeSpaceAR(endPos);

              var startPos = particleNode.getPosition();
              var amplitude = 50; // 降低振幅

              var frequency = 0.5; // 降低頻率

              var tempVec3 = new Vec3(); //AudioManager.instance.playSound(SoundList.MoneyCollect, SOUND_TYPE.ONE_SHOT, AudioSourceList.BtnAS);

              tween(particleNode).to(0.4, {}, {
                onUpdate: (target, ratio) => {
                  tempVec3.x = startPos.x + (endLocalPos.x - startPos.x) * ratio; // 水平移動到終點

                  tempVec3.y = startPos.y + (endLocalPos.y - startPos.y) * ratio + Math.sin(ratio * frequency * Math.PI * 2) * amplitude; // 垂直正弦波移動

                  particleNode.setPosition(tempVec3);
                }
              }).call(() => {
                //ani.playAni('FX_bonus_collect_trigger_ani');
                ani.playAniWithCallBack(() => {
                  //particleEmitter.stop();
                  //particleEmitter.clear();
                  //particleEmitter.stopEmitting();
                  //this._bonusParticleContainer.removeChild(particleNode);
                  //ani.resetData();
                  //AnimationControllersPoolManager.getInstance().pushInstancePrefabNodeToPool('FX_bonus_particle', particleNode);
                  //---以上為舊版本的
                  _this2._bonusParticleContainer.removeChild(particleNode);

                  _this2._bonusParticlePool.recycleParticleNode(particleNode);
                }, 'FX_bonus_collect_trigger_ani'); //--recycle particle

                resolve();
              }).start();
            }));
          })();
        }

        bezierMotion2(targetNode, endLocalPos) {
          var startpos = targetNode.getPosition();
          /*
          let offset = v3(
              (endpos.x - startpos.x) * 0.3, //  0.3 来控制偏移幅度
              (endpos.y - startpos.y) * 0.5, //  0.5 来控制偏移幅度
              0
          );
           let controlpos1 = v3(startpos.x + offset.x, startpos.y + offset.y, 0);
          let controlpos2 = v3(endpos.x - offset.x, endpos.y - offset.y, 0);
          */

          var controlpos1 = v3(startpos.x / 2, 20);
          var controlpos2 = v3(startpos.x / 2, 20);
          tween({
            a: 0
          }).tag(1).to(0.4, {
            a: 100
          }, {
            onUpdate: (target, ratio) => {
              //--這邊的ratio是0~1的值,代表了tween的進度 
              var bezierX = bezier(startpos.x, controlpos1.x, controlpos2.x, endLocalPos.x, ratio);
              var bezierY = bezier(startpos.y, controlpos1.y, controlpos2.y, endLocalPos.y, ratio);
              targetNode.setPosition(bezierX, bezierY, 0);
            },
            //@ts-ignore
            progress: (start, end, current, ratio) => {//console.log('QQprogress', start, end, current, ratio);
            },
            easing: 'smooth' //--這邊的easing是用於bezier的

          }).call(() => {
            /*console.log('complete')*/
          }).start();
        }

        calculateBonusCount(count) {
          if (count) {
            this._currentBonusCount += count;
          } else {
            this._currentBonusCount++;
          } //--最大上限


          if (this._currentBonusCount > this._maximumCount) {
            this._currentBonusCount = this._maximumCount;
          }
        }

        calulateTotalRounds(index) {
          this._totalRounds += index;
        }

        getBonusData(reelIndex, iconIndex) {
          for (var i = 0; i < this._roundForBonusData.length; i++) {
            var item = this._roundForBonusData[i];

            if (item.reelIndex == reelIndex && item.iconIndex == iconIndex) {
              this._roundForBonusData.splice(i, 1);

              return item;
            }
          }
        }

        getCurrentCampSkinName() {
          return this._camp == 0 ? 'FG_01' : 'FG_02';
        }

        getMultiplier(value) {
          var targetCount = value ? value : this._currentBonusCount;
          var multiplier = undefined;
          var maxKey = -1; // 找到小於等於 targetCount 的最大鍵

          for (var key in BONUS_MULTIPLIER) {
            var numKey = parseInt(key);

            if (numKey <= targetCount && numKey > maxKey) {
              maxKey = numKey;
              multiplier = BONUS_MULTIPLIER[numKey];
            }
          }

          if (multiplier !== undefined) {
            this._currentMultiplier = multiplier;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_ali_BonusBarContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_thieves_BonusBarContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_freeSpineCountTimesContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_bonusParticleContainer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_maximumCount", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_landscapeNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_portraitNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=75f3702dd1bccc7bcf2a93ec8d89aeb56cc860be.js.map
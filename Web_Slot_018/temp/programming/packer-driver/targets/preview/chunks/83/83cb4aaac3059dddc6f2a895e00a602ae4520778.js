System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, AudioClip, Button, CCBoolean, Component, instantiate, Node, Prefab, RichText, Sprite, tween, UIOpacity, v3, Vec3, Utility, Localization, LocalizationSpine, PageIconGroup, AudioManager, RotationResize, Orientation, DragNodeEvent, SkeletonExtension, LoadingPage, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _crd, ccclass, property, GameInfoUIFix;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "db://assets/Scripts/Utils/Utility", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInfoData(extras) {
    _reporterNs.report("GameInfoData", "db://assets/Scripts/Utils/GameInfoData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalization(extras) {
    _reporterNs.report("Localization", "db://assets/Scripts/GameScripts/Localization", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalizationSpine(extras) {
    _reporterNs.report("LocalizationSpine", "db://assets/Scripts/GameScripts/LocalizationSpine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPageIconGroup(extras) {
    _reporterNs.report("PageIconGroup", "db://assets/Scripts/GameScripts/PageIconGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "db://assets/Scripts/Audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRotationResize(extras) {
    _reporterNs.report("RotationResize", "db://assets/Scripts/Utils/RotationResize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "db://assets/Scripts/Utils/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeySpriteFramePair(extras) {
    _reporterNs.report("KeySpriteFramePair", "db://assets/Scripts/Utils/KeySpriteFramePair", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDragNodeEvent(extras) {
    _reporterNs.report("DragNodeEvent", "db://assets/Scripts/GameScripts/DragNodeEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonExtension(extras) {
    _reporterNs.report("SkeletonExtension", "db://assets/Scripts/GameScripts/SkeletonExtension", _context.meta, extras);
  }

  _export("LoadingPage", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      AudioClip = _cc.AudioClip;
      Button = _cc.Button;
      CCBoolean = _cc.CCBoolean;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      RichText = _cc.RichText;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Utility = _unresolved_2.Utility;
    }, function (_unresolved_3) {
      Localization = _unresolved_3.Localization;
    }, function (_unresolved_4) {
      LocalizationSpine = _unresolved_4.LocalizationSpine;
    }, function (_unresolved_5) {
      PageIconGroup = _unresolved_5.PageIconGroup;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
    }, function (_unresolved_7) {
      RotationResize = _unresolved_7.RotationResize;
    }, function (_unresolved_8) {
      Orientation = _unresolved_8.Orientation;
    }, function (_unresolved_9) {
      DragNodeEvent = _unresolved_9.DragNodeEvent;
    }, function (_unresolved_10) {
      SkeletonExtension = _unresolved_10.SkeletonExtension;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2ae8aM+aMlLqaVVRNWuUwQ2", "GameInfoFix", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'AudioClip', 'Button', 'CCBoolean', 'Component', 'instantiate', 'Node', 'Prefab', 'RichText', 'Sprite', 'SpriteFrame', 'tween', 'UIOpacity', 'UITransform', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameInfoUIFix", GameInfoUIFix = (_dec = ccclass("GameInfoUIFix"), _dec2 = property(CCBoolean), _dec3 = property(_crd && PageIconGroup === void 0 ? (_reportPossibleCrUseOfPageIconGroup({
        error: Error()
      }), PageIconGroup) : PageIconGroup), _dec4 = property(Node), _dec5 = property({
        type: Node,
        group: {
          name: 'Sprite Loading Setting',
          id: '1'
        },

        visible() {
          return !this.isNewLoading;
        }

      }), _dec6 = property({
        type: Node,
        group: {
          name: 'Sprite Loading Setting',
          id: '1'
        },

        visible() {
          return !this.isNewLoading;
        }

      }), _dec7 = property({
        type: Sprite,
        group: {
          name: 'Sprite Loading Setting',
          id: '1'
        },

        visible() {
          return !this.isNewLoading;
        }

      }), _dec8 = property({
        type: RichText,
        group: {
          name: 'Sprite Loading Setting',
          id: '1'
        },

        visible() {
          return !this.isNewLoading;
        }

      }), _dec9 = property({
        type: Sprite,
        group: {
          name: 'Sprite Loading Setting',
          id: '1'
        },

        visible() {
          return !this.isNewLoading;
        }

      }), _dec10 = property({
        type: RichText,
        group: {
          name: 'Sprite Loading Setting',
          id: '1'
        },

        visible() {
          return !this.isNewLoading;
        }

      }), _dec11 = property({
        type: Node,
        group: {
          name: 'Sprite Loading Setting',
          id: '1'
        },

        visible() {
          return !this.isNewLoading;
        }

      }), _dec12 = property({
        type: Node,
        group: {
          name: 'Sprite Loading Setting',
          id: '1'
        },

        visible() {
          return !this.isNewLoading;
        }

      }), _dec13 = property({
        type: AudioClip,
        group: {
          name: 'Sprite Loading Setting',
          id: '1'
        },

        visible() {
          return !this.isNewLoading;
        }

      }), _dec14 = property({
        type: _crd && DragNodeEvent === void 0 ? (_reportPossibleCrUseOfDragNodeEvent({
          error: Error()
        }), DragNodeEvent) : DragNodeEvent,
        group: {
          name: 'Spine Loading Setting',
          id: '2'
        },

        visible() {
          return this.isNewLoading;
        }

      }), _dec15 = property({
        type: [Prefab],
        group: {
          name: 'Spine Loading Setting',
          id: '2'
        },

        visible() {
          return this.isNewLoading;
        }

      }), _dec16 = property({
        group: {
          name: 'Spine Loading Setting',
          id: '2'
        },

        visible() {
          return this.isNewLoading;
        },

        tooltip: "Page transition duration in seconds"
      }), _dec17 = property({
        group: {
          name: 'Spine Loading Setting',
          id: '2'
        },

        visible() {
          return this.isNewLoading;
        },

        tooltip: "gap"
      }), _dec18 = property({
        group: {
          name: 'Spine Loading Setting',
          id: '2'
        },

        visible() {
          return this.isNewLoading;
        },

        tooltip: "Distance to trigger page change"
      }), _dec19 = property({
        group: {
          name: 'Spine Loading Setting',
          id: '2'
        },

        visible() {
          return this.isNewLoading;
        },

        tooltip: "Distance for page Animation"
      }), _dec20 = property({
        group: {
          name: 'Spine Loading Setting',
          id: '2'
        },

        visible() {
          return this.isNewLoading;
        },

        tooltip: "Opacity ratio for page Animation"
      }), _dec21 = property({
        group: {
          name: 'Spine Loading Setting',
          id: '2'
        },

        visible() {
          return this.isNewLoading;
        },

        tooltip: "Ratio for page Animation"
      }), _dec(_class = (_class2 = class GameInfoUIFix extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "isNewLoading", _descriptor, this);

          _initializerDefineProperty(this, "pageIconGroup", _descriptor2, this);

          _initializerDefineProperty(this, "pageNode", _descriptor3, this);

          //#region Sprite Loading Setting
          _initializerDefineProperty(this, "nextBtn", _descriptor4, this);

          _initializerDefineProperty(this, "previousBtn", _descriptor5, this);

          _initializerDefineProperty(this, "mainSprite", _descriptor6, this);

          _initializerDefineProperty(this, "infoText", _descriptor7, this);

          _initializerDefineProperty(this, "mainSpriteOther", _descriptor8, this);

          _initializerDefineProperty(this, "infoTextOther", _descriptor9, this);

          _initializerDefineProperty(this, "currentPage", _descriptor10, this);

          _initializerDefineProperty(this, "otherPage", _descriptor11, this);

          _initializerDefineProperty(this, "publicChoice", _descriptor12, this);

          //#endregion
          //#region Spine Loading Setting
          _initializerDefineProperty(this, "dragNodeEvent", _descriptor13, this);

          _initializerDefineProperty(this, "pagePrefabs", _descriptor14, this);

          _initializerDefineProperty(this, "transitionDuration", _descriptor15, this);

          _initializerDefineProperty(this, "gap", _descriptor16, this);

          _initializerDefineProperty(this, "changeDistance", _descriptor17, this);

          _initializerDefineProperty(this, "animationDistance", _descriptor18, this);

          _initializerDefineProperty(this, "opacityRatio", _descriptor19, this);

          _initializerDefineProperty(this, "settingRatio", _descriptor20, this);

          //#endregion
          this.currentID = 0;
          this.keySpriteFrameMap = [];
          this.pageLength = 0;
          this.nextPageAni = "gameInfoNext";
          this.previousPageAni = "gameInfoPrevious";
          this.currentPagePos = Vec3.ZERO;
          this.otherPagePos = v3(620, 0, 0);
          this.pageGroup = [];
        }

        init(textSpriteFrameMaps) {
          if (this.isNewLoading) {
            this.node.getComponent(_crd && RotationResize === void 0 ? (_reportPossibleCrUseOfRotationResize({
              error: Error()
            }), RotationResize) : RotationResize).onRotationResize = this.onSpineRotationResize.bind(this); //this.spawnPages();

            this.pageLength = this.pagePrefabs.length;
            this.pageIconGroup.setTotalPage(this.pageLength);
            this.updatePageIcon();
          } else {
            (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).addEventHandlerToButton(this.nextBtn, this, "onNextBtnClick");
            (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).addEventHandlerToButton(this.previousBtn, this, "onPreviousBtnClick");
            this.currentID = 0;
            this.nextBtn.setActive(true);
            this.previousBtn.setActive(true);
            this.getComponent(_crd && RotationResize === void 0 ? (_reportPossibleCrUseOfRotationResize({
              error: Error()
            }), RotationResize) : RotationResize).onRotationResize = this.onRotationResize.bind(this);
            this.infoText.addSpriteFrame(textSpriteFrameMaps);
            this.infoTextOther.addSpriteFrame(textSpriteFrameMaps);
          }
        }

        spawnPages_test() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var currentLangKey = (_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
              error: Error()
            }), Localization) : Localization).instance.currentLangKey;

            var pagePromises = _this.pagePrefabs.map( /*#__PURE__*/_asyncToGenerator(function* (prefab, index) {
              var pageNode = instantiate(prefab);
              var page = new LoadingPage(pageNode);
              var targetOpacity = index === 0 ? 255 : 0.1;
              page.setOpacity(targetOpacity);

              _this.pageNode.addChild(pageNode);

              var localizationSpine = pageNode.getComponentInChildren(_crd && LocalizationSpine === void 0 ? (_reportPossibleCrUseOfLocalizationSpine({
                error: Error()
              }), LocalizationSpine) : LocalizationSpine);

              if (localizationSpine) {
                yield localizationSpine.loadAllSpine(currentLangKey);
              }

              page.setSpine();

              _this.pageGroup.push(page);
            }));

            yield Promise.all(pagePromises);
          })();
        }

        spawnPages() {
          for (var i = 0; i < this.pagePrefabs.length; i++) {
            var pageNode = instantiate(this.pagePrefabs[i]);
            var page = new LoadingPage(pageNode);
            var targetOpacity = i === 0 ? 255 : 0.1;
            page.setOpacity(targetOpacity);
            pageNode.setParent(this.pageNode);
            page.setSpine(); //--test 移除

            this.pageGroup.push(page);
          }
        }

        setInfo(keySpriteFrameMap) {
          if (keySpriteFrameMap.length === 0) {
            return;
          }

          this.nextBtn.setActive(true);
          this.previousBtn.setActive(true);
          this.keySpriteFrameMap = keySpriteFrameMap;
          this.pageLength = this.keySpriteFrameMap.length;
          this.pageIconGroup.setTotalPage(this.pageLength);
          this.currentID = 0;
          this.updateInfo();
        }

        updateInfo() {
          this.mainSprite.spriteFrame = this.keySpriteFrameMap[this.currentID].spriteFrame; //this.mainSprite.getComponent(UITransform).setContentSize(this.mainSprite.spriteFrame.width, this.mainSprite.spriteFrame.height);

          this.infoText.string = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).replaceRichTextImgKey((_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
            error: Error()
          }), Localization) : Localization).instance.t(this.keySpriteFrameMap[this.currentID].key));
          this.pageIconGroup.setPageOn(this.currentID);
        }

        updatePageIcon() {
          this.pageIconGroup.setPageOn(this.currentID);
        }

        startDetect() {
          this.dragNodeEvent.init();
          this.dragNodeEvent.onDrag = this.onDrag.bind(this);
          this.dragNodeEvent.onRelease = this.onRelease.bind(this);
        }

        onDrag(dragDiff) {
          var nextID = this.getWrappedIndex(this.currentID + 1);
          var prevID = this.getWrappedIndex(this.currentID - 1); // diffRatio 比例用 animationDistance控制而非換頁的比利用500控制而非換頁的 changeDistance

          var diffRatio = Math.max(-1, Math.min(1, dragDiff.x / this.animationDistance)); // 範圍不超過1 ~ -1

          var interpolatedOpacity = Math.abs(diffRatio / this.settingRatio * this.opacityRatio); // 220 為透明度參數，沒有特別開放調整

          var interpolatedX = diffRatio / this.settingRatio * this.gap; // Opacity 控制底下 Spine節點，若原欲設為0，則切換為任何數字都會看到spine瞬間出現，下一偵才切回指定透明度
          // 所以這邊不設為0，改設為0.1

          this.pageGroup[this.currentID].setPageState(interpolatedX, 254.9 - interpolatedOpacity);

          if (dragDiff.x > 0) {
            this.pageGroup[prevID].setPageState(-this.gap + interpolatedX, interpolatedOpacity);
          } else {
            this.pageGroup[nextID].setPageState(this.gap + interpolatedX, interpolatedOpacity);
          }
        }

        onRelease(dragDiff) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (dragDiff.x === 0) return;
            _this2.dragNodeEvent.isDetecting = false;

            if (dragDiff.x > _this2.changeDistance) {
              yield _this2.slideToPreviousPage();
            } else if (dragDiff.x < -_this2.changeDistance) {
              yield _this2.slideToNextPage();
            } else {
              yield _this2.resetToOriginalPos(dragDiff.x > 0);
            }

            _this2.dragNodeEvent.isDetecting = true;
          })();
        }

        getWrappedIndex(index) {
          return (index + this.pageLength) % this.pageLength;
        }

        slideToNextPage() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var nextID = _this3.getWrappedIndex(_this3.currentID + 1);

            yield _this3.animatePageTransition(nextID, _this3.currentID, -_this3.gap);
            _this3.currentID = nextID;

            _this3.updatePageIcon();

            _this3.playTargetSpine(_this3.currentID);

            _this3.resetPageGroup();
          })();
        }

        playTargetSpine(id) {
          var _this4 = this;

          //--判斷式是test
          if (this.pageGroup.length != this.pagePrefabs.length) return;
          this.pageGroup[id].playLoopAnimation();
          this.pageGroup[id].setSpineListener( /*#__PURE__*/_asyncToGenerator(function* () {
            if (_this4.pageGroup[id].isInOriginalPos()) {
              _this4.dragNodeEvent.isDetecting = false;

              var nextID = _this4.getWrappedIndex(_this4.currentID + 1);

              _this4.pageGroup[nextID].setPosition(v3(_this4.gap, 0, 0));

              yield _this4.slideToNextPage();
              _this4.dragNodeEvent.isDetecting = true;
            } else {
              _this4.pageGroup[id].playLoopAnimation();
            }
          }));
        }

        slideToPreviousPage() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            var prevID = _this5.getWrappedIndex(_this5.currentID - 1);

            yield _this5.animatePageTransition(prevID, _this5.currentID, _this5.gap);
            _this5.currentID = prevID;

            _this5.updatePageIcon();

            _this5.playTargetSpine(_this5.currentID);

            _this5.resetPageGroup();
          })();
        }

        resetToOriginalPos(isDragRightReset) {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            var promises = [];
            promises.push(_this6.tweenToTargetPos(_this6.currentID, 0, _this6.transitionDuration));
            var sideID = isDragRightReset ? _this6.getWrappedIndex(_this6.currentID - 1) : _this6.getWrappedIndex(_this6.currentID + 1);
            var sidePos = isDragRightReset ? -_this6.gap : _this6.gap;
            promises.push(_this6.tweenToTargetPos(sideID, sidePos, _this6.transitionDuration));
            yield Promise.all(promises);

            _this6.resetPageGroup();
          })();
        }

        resetPageGroup() {
          for (var i = 0; i < this.pageGroup.length; i++) {
            var isCurrent = i === this.currentID;
            this.pageGroup[i].setOpacity(isCurrent ? 255 : 0.1);

            if (!isCurrent) {
              this.pageGroup[i].clearSpineListener();
              this.pageGroup[i].stopSpine();
            }
          }
        }

        animatePageTransition(newID, oldID, direction) {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            yield Promise.all([_this7.tweenToTargetPos(newID, 0, _this7.transitionDuration), _this7.tweenToTargetPos(oldID, direction, _this7.transitionDuration)]);
          })();
        }

        tweenToTargetPos(id, posX, duration) {
          var node = this.pageGroup[id].getNode();
          var opacityComp = this.pageGroup[id].getOpacityComponent();
          return new Promise(resolve => {
            tween(node).to(duration, {
              position: v3(posX, 0, 0)
            }, {
              easing: "smooth"
            }).start();
            tween(opacityComp).to(duration, {
              opacity: posX === 0 ? 255 : 0.1
            }, {
              easing: "smooth"
            }).call(resolve).start();
          });
        }

        onNextBtnClick() {
          // console.log('Next button clicked');
          if (this.keySpriteFrameMap.length === 0) {
            return;
          }

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSoundClip(this.publicChoice);
          this.currentID++;

          if (this.currentID >= this.pageLength) {
            this.currentID = 0;
          }

          this.setOtherPageInfo();
          this.pageNode.getComponent(Animation).playWithCallback(this.nextPageAni, this.onAnimationEnd.bind(this));
          this.startAutoChangePage();
        }

        onPreviousBtnClick() {
          // console.log('Previous button clicked');
          if (this.keySpriteFrameMap.length === 0) {
            return;
          }

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).instance.playSoundClip(this.publicChoice);
          this.currentID--;

          if (this.currentID < 0) {
            this.currentID = this.pageLength - 1;
          }

          this.setOtherPageInfo();
          this.pageNode.getComponent(Animation).playWithCallback(this.previousPageAni, this.onAnimationEnd.bind(this));
          this.startAutoChangePage();
        }

        setOtherPageInfo() {
          //this.setPageBtnInteractable(false);
          this.mainSpriteOther.spriteFrame = this.keySpriteFrameMap[this.currentID].spriteFrame; //this.mainSpriteOther.getComponent(UITransform).setContentSize(this.mainSpriteOther.spriteFrame.width, this.mainSpriteOther.spriteFrame.height);

          this.infoTextOther.string = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).replaceRichTextImgKey((_crd && Localization === void 0 ? (_reportPossibleCrUseOfLocalization({
            error: Error()
          }), Localization) : Localization).instance.t(this.keySpriteFrameMap[this.currentID].key));
          this.pageIconGroup.setPageOn(this.currentID);
        }

        onAnimationEnd() {
          this.updateInfo();
          this.currentPage.setPosition(this.currentPagePos);
          this.otherPage.setPosition(this.otherPagePos); //this.setPageBtnInteractable(true);
        }

        setPageBtnInteractable(b) {
          this.nextBtn.getComponent(Button).interactable = b;
          this.previousBtn.getComponent(Button).interactable = b;
        }

        onRotationResize(orientation) {
          if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            this.nextBtn.setPosition(v3(340, 76, 0));
            this.previousBtn.setPosition(v3(-340, 76, 0));
          } else if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait) {
            this.nextBtn.setPosition(v3(332, 76, 0));
            this.previousBtn.setPosition(v3(-332, 76, 0));
          }
        }

        onSpineRotationResize(orientation) {
          for (var i = 0; i < this.pageGroup.length; i++) {
            this.pageGroup[i].playAnchorAnimation(orientation);
          }
        }

        startAutoChangePage() {
          this.unscheduleAllCallbacks();
          this.scheduleOnce(this.onNextBtnClick, 3);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isNewLoading", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pageIconGroup", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pageNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nextBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "previousBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "mainSprite", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "infoText", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "mainSpriteOther", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "infoTextOther", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "currentPage", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "otherPage", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "publicChoice", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "dragNodeEvent", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "pagePrefabs", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "transitionDuration", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.55;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "gap", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 850;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "changeDistance", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 233;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "animationDistance", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 500;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "opacityRatio", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 220;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "settingRatio", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      })), _class2)) || _class));

      _export("LoadingPage", LoadingPage = class LoadingPage {
        constructor(node) {
          this.node = void 0;
          this.spineList = void 0;
          this.opacity = void 0;
          this.longestSpine = void 0;
          this.ANIM_NAME = "loop";
          this.ANCHOR_L = "L";
          this.ANCHOR_P = "P";
          this.node = node;
          this.opacity = node.getComponent(UIOpacity);

          if (!this.opacity) {
            this.opacity = this.node.addComponent(UIOpacity);
          }

          this.spineList = node.getComponentsInChildren(_crd && SkeletonExtension === void 0 ? (_reportPossibleCrUseOfSkeletonExtension({
            error: Error()
          }), SkeletonExtension) : SkeletonExtension);

          if (this.spineList.length === 0) {
            console.error("No spine components found in node");
          }
        }

        setSpine() {
          for (var i = 0; i < this.spineList.length; i++) {
            this.spineList[i].playLocalizationSpine(this.ANIM_NAME, 0, true);
            this.spineList[i].paused = true;
          }

          ;
          this.longestSpine = this.spineList[0];

          if (this.spineList.length !== 1) {
            for (var _i = 1; _i < this.spineList.length; _i++) {
              if (this.spineList[_i].getCurrent(0).animation.duration > this.longestSpine.getCurrent(0).animation.duration) {
                this.longestSpine = this.spineList[_i];
              }
            }
          }
        }

        setOpacity(opacity) {
          this.opacity.opacity = opacity;
        }

        setPageState(posX, opacity) {
          this.setPosition(v3(posX, 0, 0));
          this.setOpacity(opacity);
        }

        playLoopAnimation() {
          for (var i = 0; i < this.spineList.length; i++) {
            this.spineList[i].paused = false;
          }

          ;
        }

        stopSpine() {
          for (var i = 0; i < this.spineList.length; i++) {
            this.spineList[i].clearAnimation(0);
            this.spineList[i].playLocalizationSpine(this.ANIM_NAME, 0, true);
            this.spineList[i].paused = true;
          }

          ;
        }

        setSpineListener(cb) {
          var tr = this.longestSpine.getCurrent(0);
          this.longestSpine.setTrackCompleteListener(tr, () => cb == null ? void 0 : cb());
        }

        clearSpineListener() {
          var tr = this.longestSpine.getCurrent(0);
          this.longestSpine.setTrackCompleteListener(tr, null);
        }

        setPosition(pos) {
          this.node.setPosition(pos);
        }

        getNode() {
          return this.node;
        }

        getOpacityComponent() {
          return this.opacity;
        }

        isInOriginalPos() {
          return this.node.position.x === 0;
        }

        playAnchorAnimation(orientation) {
          for (var i = 0; i < this.spineList.length; i++) {
            this.spineList[i].playLocalizationSpine(orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
              error: Error()
            }), Orientation) : Orientation).Landscape ? this.ANCHOR_L : this.ANCHOR_P, 1, false);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=83cb4aaac3059dddc6f2a895e00a602ae4520778.js.map
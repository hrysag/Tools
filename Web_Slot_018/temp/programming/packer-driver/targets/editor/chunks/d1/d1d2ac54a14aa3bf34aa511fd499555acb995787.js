System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, v3, RotationResize, GameInfoUI, LoadingPage, DragOutChecker, _dec, _class, _crd, ccclass, property, GameInfoUIFix;

  function _reportPossibleCrUseOfRotationResize(extras) {
    _reporterNs.report("RotationResize", "db://assets/Scripts/Utils/RotationResize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeySpriteFramePair(extras) {
    _reporterNs.report("KeySpriteFramePair", "db://assets/Scripts/Utils/KeySpriteFramePair", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInfoUI(extras) {
    _reporterNs.report("GameInfoUI", "db://assets/Scripts/GameScripts/GameInfoUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingPage(extras) {
    _reporterNs.report("LoadingPage", "db://assets/Scripts/GameScripts/GameInfoUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDragOutChecker(extras) {
    _reporterNs.report("DragOutChecker", "db://assets/Scripts/GameScripts/DragOutChecker", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      RotationResize = _unresolved_2.RotationResize;
    }, function (_unresolved_3) {
      GameInfoUI = _unresolved_3.GameInfoUI;
    }, function (_unresolved_4) {
      LoadingPage = _unresolved_4.LoadingPage;
    }, function (_unresolved_5) {
      DragOutChecker = _unresolved_5.DragOutChecker;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "daeb6tQ3/9Io4ip/sMUoj5Y", "GameInfoUIFix", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab', 'RichText', 'Sprite', 'SpriteFrame', 'tween', 'UIOpacity', 'UITransform', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameInfoUIFix", GameInfoUIFix = (_dec = ccclass("GameInfoUIFix"), _dec(_class = class GameInfoUIFix extends (_crd && GameInfoUI === void 0 ? (_reportPossibleCrUseOfGameInfoUI({
        error: Error()
      }), GameInfoUI) : GameInfoUI) {
        constructor(...args) {
          super(...args);
          this._initLoadLanguageFlag = false;
          this._isRunningReLoadLanguage = false;
        }

        //private _dirtyFlag: boolean = false;
        //private _prefabNodes: Node[] = [];
        init(textSpriteFrameMaps) {
          const isNew = this['isNewLoading'];

          if (isNew) {
            const onResize = this['onSpineRotationResize'].bind(this); //this.node.getComponent(RotationResize).onRotationResize = this.onSpineRotationResizeFix.bind(this);

            this.node.getComponent(_crd && RotationResize === void 0 ? (_reportPossibleCrUseOfRotationResize({
              error: Error()
            }), RotationResize) : RotationResize).onRotationResize = onResize; //this.customSpawnPages();

            this['pageLength'] = 3; //this['pageIconGroup'].setTotalPage(this['pageLength']);
            //this['updatePageIcon']();

            let dragOutChecker = this.addComponent(_crd && DragOutChecker === void 0 ? (_reportPossibleCrUseOfDragOutChecker({
              error: Error()
            }), DragOutChecker) : DragOutChecker);
            dragOutChecker.onDragOutOfRange = this['onDragOutOfRange'].bind(this);
          } else {
            super.init(textSpriteFrameMaps); // 保留原始流程
          }
        } //public customSpawnPages(): void {


        async customSpawnPages() {
          const children = this['pageNode'].children;
          const pageGroup = this['pageGroup'];
          pageGroup.length = 0;

          for (let i = 0; i < children.length; i++) {
            const node = children[i];
            node.position = v3(0, 0, 0);
            const page = new (_crd && LoadingPage === void 0 ? (_reportPossibleCrUseOfLoadingPage({
              error: Error()
            }), LoadingPage) : LoadingPage)(node);
            const targetOpacity = i === 0 ? 255 : 0.1;
            page.setOpacity(targetOpacity);
            pageGroup.push(page); //this._prefabNodes.push(node);

            page.setSpine(); // 同步執行
          }

          return Promise.resolve();
          /*
          console.log(this['pageNode'].children.length);
          let index = 0;
          for (let node of this['pageNode'].children) {
              const page = new LoadingPage(node);
              const targetOpacity = index === 0 ? 255 : 0.1;
              index++
              page.setOpacity(targetOpacity);
              this['pageGroup'].push(page);
              page.setSpine();
          }*/

          /*
          const currentLangKey = Localization.instance.currentLangKey;
           const pagePromises = this['pagePrefabs'].map(async (prefab, index) => {
              const pageNode = instantiate(prefab);
              const page = new LoadingPage(pageNode);
              const targetOpacity = index === 0 ? 255 : 0.1;
               page.setOpacity(targetOpacity);
              this['pageNode'].addChild(pageNode);
               const localizationSpine = pageNode.getComponentInChildren(LocalizationSpine);
              if (localizationSpine) {
                  await localizationSpine.loadAllSpine(currentLangKey);
              }
              page.setSpine();
              this['pageGroup'].push(page);
              this._prefabNodes.push(pageNode);
          });
           await Promise.all(pagePromises);
          */
        }
        /*
        private async loadLanguageSpineUpdateAgain(): Promise<void> {
            for (let node of this._prefabNodes) {
                const localizationSpine = node.getComponentInChildren(LocalizationSpine);
                if (localizationSpine) {
                    await localizationSpine.loadAllSpine(Localization.instance.currentLangKey);
                    this.scheduleOnce(() => {
                        localizationSpine.getComponent(SkeletonExtension).checkAndUpdateSlot();
                    }, 0);
                }
             }
        }
         private onSpineRotationResizeFix(orientation: Orientation) {
            for (let i = 0; i < this['pageGroup'].length; i++) {
                this['pageGroup'][i].playAnchorAnimation(orientation);
                const targetNode = this['pageGroup'][i]['node'];
                const comp = FindComponent.findComponentInChildren(targetNode, SkeletonExtension);
                //comp?.updateSlotTexture();
            }
            //this.loadLanguageSpineUpdateAgain();
        }*/


        async startReLoadLanguageSpine() {
          await this.customSpawnPages();
          this._initLoadLanguageFlag = true;
          this._isRunningReLoadLanguage = false; //this.startDetect();
          //--接管新版本的startDetect流程---

          this['dragNodeEvent'].init();
          this['dragNodeEvent'].onDrag = this['onDrag'].bind(this);
          this['dragNodeEvent'].onRelease = this['onRelease'].bind(this);
          this['isDetecting'] = true;
          this['pageIconGroup'].setTotalPage(this['pageLength']);
          this['updatePageIcon']();
          this.playTargetSpine(0);
        }

        startDetect() {
          if (!this._initLoadLanguageFlag) {
            this._isRunningReLoadLanguage = true;
            this.startReLoadLanguageSpine();
          } else {
            super.startDetect();
          }
        }

        playTargetSpine(id) {
          if (!this._initLoadLanguageFlag || this._isRunningReLoadLanguage) {
            return;
          } else {
            super.playTargetSpine(id);
            /*
            if (!this._dirtyFlag) {
                this._dirtyFlag = true;
            } else {
                super.playTargetSpine(id);
            }*/
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d1d2ac54a14aa3bf34aa511fd499555acb995787.js.map
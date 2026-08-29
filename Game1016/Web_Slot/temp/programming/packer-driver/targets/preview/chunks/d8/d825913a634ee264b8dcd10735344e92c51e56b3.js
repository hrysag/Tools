System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CustomAnimationController, AnimationStateType, MultiSpineControllerProperties, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, MultiSpineController;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCustomAnimationController(extras) {
    _reporterNs.report("CustomAnimationController", "./CustomAnimationController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationPlayInfo(extras) {
    _reporterNs.report("AnimationPlayInfo", "../Definitions/AnimationDataOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineCtrlPropDef(extras) {
    _reporterNs.report("SpineCtrlPropDef", "./AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationStateType(extras) {
    _reporterNs.report("AnimationStateType", "./AniStateLists/AnimationPlayStateBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "./SpineController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIStopOptions(extras) {
    _reporterNs.report("IStopOptions", "../Definitions/IStopOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlaySelector(extras) {
    _reporterNs.report("PlaySelector", "../Definitions/IPlayOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMultiSpineControllerProperties(extras) {
    _reporterNs.report("MultiSpineControllerProperties", "./Properties/MultiSpineControllerProperties", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineMultiPropertyDef(extras) {
    _reporterNs.report("SpineMultiPropertyDef", "./Properties/MultiSpineControllerProperties", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CustomAnimationController = _unresolved_2.CustomAnimationController;
    }, function (_unresolved_3) {
      AnimationStateType = _unresolved_3.AnimationStateType;
    }, function (_unresolved_4) {
      MultiSpineControllerProperties = _unresolved_4.MultiSpineControllerProperties;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "be92f7bmqVOQJxhe4SDI4fo", "MultiSpineController", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 播放多個spineController的控制器
       * PS:就是同一個prefab裡面掛一堆spineController要一起播放的控制器
       */

      _export("MultiSpineController", MultiSpineController = (_dec = ccclass('MultiSpineController'), _dec2 = property({
        type: _crd && MultiSpineControllerProperties === void 0 ? (_reportPossibleCrUseOfMultiSpineControllerProperties({
          error: Error()
        }), MultiSpineControllerProperties) : MultiSpineControllerProperties,
        visible: true,
        tooltip: 'multiSpine'
      }), _dec3 = property({
        tooltip: '回收回到預設狀態,不做動畫本身清除重置<中軟專屬要勾選>'
      }), _dec4 = property({
        tooltip: 'prefabKey(用來辨識prefab的)'
      }), _dec(_class = (_class2 = class MultiSpineController extends (_crd && CustomAnimationController === void 0 ? (_reportPossibleCrUseOfCustomAnimationController({
        error: Error()
      }), CustomAnimationController) : CustomAnimationController) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_multiSCProperties", _descriptor, this);

          _initializerDefineProperty(this, "goBackDefaultWithoutDestroy", _descriptor2, this);

          _initializerDefineProperty(this, "prefabKey", _descriptor3, this);

          //--prefab的key(用來辨識prefab的)
          //--他會依照animationPlayStateList的clipsInfo來決定要播放的動畫
          //@property({ type: MultiAnimationStateList, displayName: 'multiAnimationStateList', visible: true, tooltip: '動畫索引與狀態清單' })
          //protected _animationStateList: MultiAnimationStateList = new MultiAnimationStateList();
          this._mapSpineController = new Map();
          this._dirtyFirstOnLoad = false;
          this._spineAniCallback = void 0;
          this.generalAniCompleteCheck = void 0;
        }

        onLoad() {
          if (this._dirtyFirstOnLoad) return;
          this._dirtyFirstOnLoad = true;
          var propertyList = this._multiSCProperties.spineControllerPropertyList;

          for (var _property of propertyList) {
            this._mapSpineController.set(_property.key, _property.spineController);
          }

          this.init();
        }

        testBtnEvent(ev, value) {
          var _this = this;

          return _asyncToGenerator(function* () {
            console.log('testBtnEvent:', ev, value); //this.playAni(0);
            //this.playAni({ targetName: 'Default' });
            //this.playAni(AnimationStateType.Win);

            yield _this.playAniInPromise((_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
              error: Error()
            }), AnimationStateType) : AnimationStateType).Win); //this.changePlayTime(0.3);

            console.log();
          })();
        }

        testBtnEvent2(ev, value) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            console.log('testBtnEvent:', ev, value); //this.playAni(0);
            //this.playAni({ targetName: 'Default' });
            //this.playAni(AnimationStateType.Win);
            //await this.playAniInPromise(AnimationStateType.Win);
            //this.changePlayTime(0.3);

            _this2.gotoPlayLastFrame();

            console.log();
          })();
        }

        init() {
          if (!this._dirtyFirstOnLoad) return;

          for (var [key, controller] of this._mapSpineController) {
            controller.init();
          }

          this.generalAniCompleteCheck = () => {
            this.onSpineCompleteHandler();
          };
        } //--要補替換skin


        getSpineControllerByKey(key) {
          if (this._mapSpineController.has(key)) {
            return this._mapSpineController.get(key) || null;
          }

          return null;
        }

        getMultiSpineController() {
          var controllers = [];

          for (var [key, controller] of this._mapSpineController) {
            controllers.push(controller);
          }

          return controllers;
        }

        playAniWithAniCtrDef(value) {}

        pauseAni() {
          for (var [key, controller] of this._mapSpineController) {
            controller.pauseAni();
          }
        }

        resumeAni() {
          for (var [key, controller] of this._mapSpineController) {
            controller.resumeAni();
          }
        }
        /**
         * 20251020新增方法
         * @param value 取得播放的動畫資料key
         * @param time 移動到某個時間點開始播放
         */


        changePlayTime(time) {
          for (var [key, controller] of this._mapSpineController) {
            controller.changePlayTime(time);
          }
        }
        /**
         * 20251217新增方法
         * @param value 
         * @param time 
         */


        changeSpeed(value, time) {
          for (var [key, controller] of this._mapSpineController) {
            var spine = controller.spine; //--先這樣了20251217

            if (controller) {
              controller.changePlayInfo(value, time);
            }
            /*
            const aniCtrlInfo: SpineCtrlPropDef = controller.getAniPlayDataByPlaySelector(value);
            const ani = spine.findAnimation(aniCtrlInfo.targetName);
            if (!ani) continue;
            const duration = ani.duration;
            const speed = duration / time;
            aniCtrlInfo.timeScale = speed;*/

          }
        }
        /**
         * 20251020新增方法
         * 直接播放到最後一格
         * @param value 
         */


        gotoPlayLastFrame(value) {
          for (var [key, controller] of this._mapSpineController) {
            controller.gotoPlayLastFrame(value);
          }
        }

        setAniDataInfo(value) {} //--20251011-新增直接查詢播放資料的功能(他不會改變當前播放狀態)


        peakAniDataInfo(value) {
          var playInfos = [];

          for (var [key, controller] of this._mapSpineController) {
            var aniCtrlInfo = controller.peakAniDataInfo(value);

            if (aniCtrlInfo) {
              playInfos.push(aniCtrlInfo);
            }
          }

          return playInfos;
        } //============================個別操作========================================


        getSingleSpineControllerByKey(key) {
          if (this._mapSpineController.has(key)) {
            return this._mapSpineController.get(key) || null;
          }

          return null;
        }

        playAni(value) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            //--這裡要檢查這一包map裡面有沒有做loop的.沒有送事件,有啥都不送
            var checkLoop = false;

            for (var [key, controller] of _this3._mapSpineController) {
              var aniCtrlInfo = controller.getAniPlayDataByPlaySelector(value);

              if (aniCtrlInfo.loop) {
                checkLoop = true;
                break;
              }
            }

            _this3.isPlaying = true;

            if (checkLoop) {
              for (var [_key, _controller] of _this3._mapSpineController) {
                _controller.playAni(value);
              }
            } else {
              //--這裡如果沒有loop的就只會播放一次+傳送完成後續動作
              //await this.doRaceMultiControllerPlay(value);
              yield _this3.doMultiControllerPlay(value);

              if (!_this3.generalAniCompleteCheck) {
                //console.log('checkDebug', this.node.name, value, this.prefabKey);
                _this3.generalAniCompleteCheck = () => _this3.onSpineCompleteHandler();
              }

              _this3.generalAniCompleteCheck();
            }
          })();
        }

        playSingleAniByKey(key, value) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            if (_this4._mapSpineController.has(key)) {
              var controller = _this4._mapSpineController.get(key);

              if (controller) {
                _this4.isPlaying = true;
                var aniCtrlInfo = controller.getAniPlayDataByPlaySelector(value);

                if (aniCtrlInfo.loop) {
                  controller.playAni(value);
                } else {
                  yield _this4.doSingleControllerPlay(value, controller);

                  _this4.generalAniCompleteCheck();
                }
              }
            }
          })();
        }

        playAniWithCallBack(callBack, backDefault, value) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            _this5._spineAniCallback = () => {
              callBack();
              _this5._spineAniCallback = undefined;
            };

            _this5.isPlaying = true;
            yield _this5.doMultiControllerPlay(value);

            _this5.onSpineCompleteHandler();
          })();
        }

        playSingleAniWithCallBack(key, callBack, value) {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            if (_this6._mapSpineController.has(key)) {
              var controller = _this6._mapSpineController.get(key);

              if (controller) {
                //controller.playAniWithCallBack(callBack, value);
                _this6._spineAniCallback = () => {
                  callBack();
                  _this6._spineAniCallback = undefined;
                };

                _this6.isPlaying = true;
                yield _this6.doSingleControllerPlay(value, controller);

                _this6.onSingleSpineCompleteHandler(key);
              }
            }
          })();
        }

        playAniInPromise(value) {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            _this7.isPlaying = true;
            yield _this7.doMultiControllerPlay(value);

            _this7.onSpineCompleteHandler();

            return Promise.resolve();
          })();
        }

        playSingleAniInPromise(key, value) {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            if (_this8._mapSpineController.has(key)) {
              var controller = _this8._mapSpineController.get(key);

              if (controller) {
                _this8.isPlaying = true;
                yield _this8.doSingleControllerPlay(value, controller);

                _this8.onSingleSpineCompleteHandler(key);
              }
            }

            return Promise.resolve();
          })();
        }

        doRaceMultiControllerPlay(value) {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            var promises = [];

            for (var [key, controller] of _this9._mapSpineController) {
              if (controller) {
                //const playInfo= this.getPlayStateBySCKey(key);
                promises.push(controller.playAniInPromise(value));
              }
            }

            yield Promise.race(promises);
          })();
        }

        doMultiControllerPlay(value) {
          var _this10 = this;

          return _asyncToGenerator(function* () {
            //console.log('check_value_doMultiControllerPlay:', value);
            var promises = [];

            for (var [key, controller] of _this10._mapSpineController) {
              if (controller) {
                //const playInfo= this.getPlayStateBySCKey(key);
                //--test

                /*
                const playInfo: SpineCtrlPropDef = controller.peakAniDataInfo(value) as SpineCtrlPropDef;
                const targetNodeId=controller.targetNodeId;
                const spAni=controller.spine.findAnimation(playInfo.targetName);
                const spDur= spAni?spAni.duration:0;
                console.log();
                */
                //--test
                promises.push(controller.playAniInPromise(value));
              }
            }

            yield Promise.all(promises);
          })();
        }

        doSingleControllerPlay(selector, controller) {
          return _asyncToGenerator(function* () {
            yield controller.playAniInPromise(selector);
          })();
        } //--多的

        /*
        protected getPlayStateBySCKey(key:string): AnimationStateType 
        {
            for(let item of this._animationStateList.clipsInfo)
            {
                if(item.spineControllerKey== key)
                {
                    return item.AniStateType;
                }
            }
            return AnimationStateType.Default;
        }*/
        //====================停止/清除系列============================================================================

        /**
         * <這邊不會掛上監聽就單純的for中軟美術切回default的動畫狀態>
         * 播放動畫預設狀態,有動畫播放
         */


        goBackToDefault(flag) {
          if (flag === void 0) {
            flag = true;
          }

          if (flag) {
            this.onSpineCompleteHandler();
          }

          this.isPlaying = true;

          for (var [key, controller] of this._mapSpineController) {
            var aniCtrlInfo = controller.getAniPlayDataByPlaySelector((_crd && AnimationStateType === void 0 ? (_reportPossibleCrUseOfAnimationStateType({
              error: Error()
            }), AnimationStateType) : AnimationStateType).Default);
            controller.goBackToDefault(flag);
          }
        } //--結束流程使用


        onAniComplete() {
          //--清除流程
          this.safeResolveSpineCallback(); //this.safeResolveSpinePromise();

          this.forceSafeResolveSpinePromise(); //this.generalAniCompleteCheck = null;
        }

        onSingleAniComplete(key) {
          for (var [k, controller] of this._mapSpineController) {
            if (k === key) {
              controller.forceSafeResolveSpineCallback();
              controller.forceSafeResolveSpinePromise();
              break;
            }
          }
        }

        beforeDestroy() {
          this.forceToDoBeforeDestroy();
          this.generalAniCompleteCheck = null;
        } //--回pool前會呼叫


        resetData() {
          for (var [key, controller] of this._mapSpineController) {
            controller.resetData();
          }

          this.onAniComplete(); //-拔掉所有的promise/callback

          this.forceToDoBeforeDestroy(false); //--針對自己做就好了

          this.generalAniCompleteCheck = null; //-進到pool前清掉,拿出來會在init

          this.tokenID = ''; //--單一的識別碼

          this.slotMachineIndexInfo = null;
          this.isPlaying = false;
          this.groupID = [];
        }

        stopAni() {
          for (var [key, controller] of this._mapSpineController) {
            controller.stopAni();
          }

          this.onSpineCompleteHandler();
        }

        stopSingleAniByKey(key) {
          if (this._mapSpineController.has(key)) {
            var controller = this._mapSpineController.get(key);

            if (controller) {
              controller.stopAni();
              this.onSingleSpineCompleteHandler(key);
            }
          }
        }

        stopNow() {
          for (var [key, controller] of this._mapSpineController) {
            controller.stopNow();
          }

          this.onSpineCompleteHandler();
        }

        stopNowByKey(key) {
          if (this._mapSpineController.has(key)) {
            var controller = this._mapSpineController.get(key);

            if (controller) {
              controller.stopNow();
              this.onSingleSpineCompleteHandler(key);
            }
          }
        }

        stopWith(opt) {
          if (opt === void 0) {
            opt = {};
          }

          for (var [key, controller] of this._mapSpineController) {
            controller.stopWith(opt);
          }

          if (opt.resolveCallback) {
            this.safeResolveSpineCallback();
          }

          if (opt.resolvePromises) {
            this.forceSafeResolveSpinePromise();
          }
        }

        stopWithSingle(key, opt) {
          if (opt === void 0) {
            opt = {};
          }

          if (this._mapSpineController.has(key)) {
            var controller = this._mapSpineController.get(key);

            if (controller) {
              controller.stopWith(opt);
            }

            if (opt.resolveCallback) {
              this.safeResolveSpineCallback();
            }
          }
        }

        stopAndRecycle() {
          for (var [key, controller] of this._mapSpineController) {
            controller.stopAndRecycle();
          }

          this.onSpineCompleteHandler();
        }

        stopPromiseAni() {
          for (var [key, controller] of this._mapSpineController) {
            controller.stopPromiseAni();
          }

          this.onSpineCompleteHandler();
        }

        stopSinglePromiseAniByKey(key) {
          if (this._mapSpineController.has(key)) {
            var controller = this._mapSpineController.get(key);

            if (controller) {
              controller.stopPromiseAni();
              this.onSingleSpineCompleteHandler(key);
            }
          }
        }

        forceToStopAniByEmpty() {
          for (var [key, controller] of this._mapSpineController) {
            controller.forceToStopAniByEmpty();
          }

          this.onSpineCompleteHandler();
        }

        forceToStopSingleAniByEmpty(key) {
          if (this._mapSpineController.has(key)) {
            var controller = this._mapSpineController.get(key);

            if (controller) {
              controller.forceToStopAniByEmpty();
              this.onSingleSpineCompleteHandler(key);
            }
          }
        }

        forceToStopAni() {
          for (var [key, controller] of this._mapSpineController) {
            controller.forceToStopAni();
          }

          this.onSpineCompleteHandler();
        }

        forceToStopSingleAniByKey(key) {
          if (this._mapSpineController.has(key)) {
            var controller = this._mapSpineController.get(key);

            if (controller) {
              controller.forceToStopAni();
              this.onSingleSpineCompleteHandler(key);
            }
          }
        }

        forceToDoBeforeDestroy(flag) {
          if (flag === void 0) {
            flag = true;
          }

          if (flag) {
            //--外部強行呼叫使用的
            for (var [key, controller] of this._mapSpineController) {
              controller.forceToDoBeforeDestroy();
            }

            this.onSpineCompleteHandler();
          }

          if (this.goBackDefaultWithoutDestroy) {
            this.goBackToDefault(false);
          }
        } //--銷毀前處理掉promise resolve避免沒銷毀的pending promise

        /*
        protected safeResolveSpinePromise(resolve?: () => void): void {
            
            if (resolve) {
                resolve();
            } else if (this._spineAniResolvePromise) {
                this._spineAniResolvePromise();
            }
            this._spineAniResolvePromise = null;
        }*/


        forceSafeResolveSpinePromise() {
          if (!this._mapSpineController) {
            console.log();
          } else {
            for (var [key, controller] of this._mapSpineController) {
              controller.forceSafeResolveSpinePromise();
            }
          }
        }

        forceSingleSafeResolveSpinePromise(key) {
          for (var [k, controller] of this._mapSpineController) {
            if (k === key) {
              controller.forceSafeResolveSpinePromise();
              break;
            }
          }
        } //--銷毀前處理掉spine complete callback


        safeResolveSpineCallback() {
          var _this$_spineAniCallba;

          (_this$_spineAniCallba = this._spineAniCallback) == null || _this$_spineAniCallba.call(this);
          this._spineAniCallback = undefined;
        }

        onSpineCompleteHandler() {
          //--這裡可以做判斷要不要進入清理流程
          this.isPlaying = false;
          this.onAniComplete();
        }

        onSingleSpineCompleteHandler(key) {
          //--這裡可以做判斷要不要進入清理流程
          this.isPlaying = false;
          this.onSingleAniComplete(key);
        }

        onObjInstance() {} //-不能用onDestroy這個字component拿去用了


        onAfterDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_multiSCProperties", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new (_crd && MultiSpineControllerProperties === void 0 ? (_reportPossibleCrUseOfMultiSpineControllerProperties({
            error: Error()
          }), MultiSpineControllerProperties) : MultiSpineControllerProperties)();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "goBackDefaultWithoutDestroy", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "prefabKey", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d825913a634ee264b8dcd10735344e92c51e56b3.js.map
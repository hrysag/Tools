System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GuiBasic, GUIEvent, Digits, LoadingResManager, GameUtils, TweenMaxCocosPlugin, Notifycation, GuiNotifycationSubbscriptionSubject, Button, find, Layers, Vec3, Node, Component, instantiate, Sprite, v3, UITransform, color, log, PropType, SoundsManager, PropBtn, Fish1PropGuiView, _crd;

  function _reportPossibleCrUseOfGuiBasic(extras) {
    _reporterNs.report("GuiBasic", "../../../../framework/game/guiCore/GuiBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGUIEvent(extras) {
    _reporterNs.report("GUIEvent", "../../../../framework/game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiOption(extras) {
    _reporterNs.report("GuiOption", "../../../../framework/game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDigits(extras) {
    _reporterNs.report("Digits", "../../../../framework/utils/Digits", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../../../framework/utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenMaxCocosPlugin(extras) {
    _reporterNs.report("TweenMaxCocosPlugin", "../../../../framework/utils/TweenMaxPlugin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifycation(extras) {
    _reporterNs.report("Notifycation", "../../../../framework/abstract/mvvm/Notifycation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject(extras) {
    _reporterNs.report("GuiNotifycationSubbscriptionSubject", "../../../../framework/game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropType(extras) {
    _reporterNs.report("PropType", "../../../model/Fish1ModelDefinitions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundsManager(extras) {
    _reporterNs.report("SoundsManager", "../../../../framework/logic/audio/SoundsManager", _context.meta, extras);
  }

  _export({
    PropBtn: void 0,
    Fish1PropGuiView: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      find = _cc.find;
      Layers = _cc.Layers;
      Vec3 = _cc.Vec3;
      Node = _cc.Node;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Sprite = _cc.Sprite;
      v3 = _cc.v3;
      UITransform = _cc.UITransform;
      color = _cc.color;
      log = _cc.log;
    }, function (_unresolved_2) {
      GuiBasic = _unresolved_2.GuiBasic;
    }, function (_unresolved_3) {
      GUIEvent = _unresolved_3.GUIEvent;
    }, function (_unresolved_4) {
      Digits = _unresolved_4.Digits;
    }, function (_unresolved_5) {
      LoadingResManager = _unresolved_5.LoadingResManager;
    }, function (_unresolved_6) {
      GameUtils = _unresolved_6.GameUtils;
    }, function (_unresolved_7) {
      TweenMaxCocosPlugin = _unresolved_7.TweenMaxCocosPlugin;
    }, function (_unresolved_8) {
      Notifycation = _unresolved_8.Notifycation;
    }, function (_unresolved_9) {
      GuiNotifycationSubbscriptionSubject = _unresolved_9.GuiNotifycationSubbscriptionSubject;
    }, function (_unresolved_10) {
      PropType = _unresolved_10.PropType;
    }, function (_unresolved_11) {
      SoundsManager = _unresolved_11.SoundsManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15edahjVBlCOZ3TxjkRIRI9", "Fish1PropGuiView", undefined);
      /**
       * Created by EricHuang on 2023/11/14.
       */


      __checkObsolete__(['AnimationClip', 'Button', 'find', 'Layers', 'UIOpacity', 'Vec2', 'Vec3']);

      __checkObsolete__(['Node']);

      __checkObsolete__(['Component']);

      __checkObsolete__(['SpriteFrame']);

      __checkObsolete__(['instantiate']);

      __checkObsolete__(['Animation']);

      __checkObsolete__(['Sprite']);

      __checkObsolete__(['v3']);

      __checkObsolete__(['v2']);

      __checkObsolete__(['Size']);

      __checkObsolete__(['UITransform']);

      __checkObsolete__(['color']);

      __checkObsolete__(['log']);

      _export("PropBtn", PropBtn = class PropBtn extends Component {
        //--test--

        /*
        private totalTimeInSeconds:number=10;
        
        private updateIntervalInMillis:number=1000/60;
         private fillRange:number=0;
        */
        set defaultColdDownTime(value) {
          this._defaultColdDownTime = value;
          log('resetcolddownTime', this._defaultColdDownTime);
        }

        get defaultColdDownTime() {
          return this._defaultColdDownTime;
        }

        constructor() {
          super();
          this.id = void 0;
          //--0=召喚,1=冰凍,2=狂暴
          this.isRunning = void 0;
          this.isLock = void 0;
          this.ogPosition = void 0;
          this._digits = void 0;
          this._effectDigits = void 0;
          this._animation = void 0;
          this._coldDownMask = void 0;
          this._defaultColdDownTime = void 0;
          //--秒為單位
          this._amount = void 0;
          this._lightCount = void 0;
          //---黃色亮點
          this._light = void 0;
          //--黃色框框
          this._ogLightCountPos = void 0;

          this.propBtnHandler = e => {
            log('check_prop_id', this.id);
            (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
              error: Error()
            }), SoundsManager) : SoundsManager).getInstance().play('sounds/button');
            this.node.emit((_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).USE_PROP, {
              type: (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                error: Error()
              }), GUIEvent) : GUIEvent).USE_PROP,
              sendObj: this.id
            });
          };

          this._defaultColdDownTime = 0;
          this.isRunning = false;
          this.isLock = false;
          this._amount = -1;
          this.ogPosition = null;
        }

        onLoad() {
          this._digits = this.node.getChildByName('sprite').getChildByName('count').getChildByName('label').addComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
            error: Error()
          }), Digits) : Digits);
          this._digits.diplayLayer = Layers.Enum.UI_2D;
          let textures = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames('num_props1_').sort((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).sortDigitsSpriteFrames);
          this._digits.textures = textures;
          this._digits.digitScale = 0.9;
          this._digits.padding = 1; //--effect digits

          this._effectDigits = this.node.getChildByName('lightCount').getChildByName('label').addComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
            error: Error()
          }), Digits) : Digits);

          this._effectDigits.node.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          this._effectDigits.diplayLayer = Layers.Enum.UI_2D;
          textures = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames('num_props2_').sort((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).sortDigitsSpriteFrames);
          this._effectDigits.textures = textures;
          this._effectDigits.digitScale = 0.9;
          this._effectDigits.padding = 1;
          /*
          this._animation=this.node.getComponent(Animation);
           let clips:AnimationClip[]=this._animation.clips;
           this._animation.defaultClip=clips[0];
           log('check_animation_data_prop',clips);
          */

          this.updatePropCount(0);
          this._coldDownMask = this.node.getChildByName('cdTime');
          this._coldDownMask.getComponent(Sprite).fillRange = 0;
          this._coldDownMask.active = false;
          this._lightCount = this.node.getChildByName('lightCount');

          this._lightCount.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          this._lightCount.active = false;
          this._light = this.node.getChildByName('light');

          this._light.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          this._light.active = false; //this._ogLightCountPos=v2(this._lightCount.position.x,this._lightCount.position.y);

          log('hello_prop_gui_Component', this._coldDownMask, this._ogLightCountPos); //this._coldDownMask.addComponent(TweenMaxCocosPlugin);

          this.node.on(Node.EventType.TOUCH_START, this.propBtnHandler);
        }

        updateColdDownTime(elapsedTimeInSeconds) {
          let percentageElapsed = (this._defaultColdDownTime - elapsedTimeInSeconds) / this._defaultColdDownTime * 100;
          let value = percentageElapsed / 100; // 將百分比轉換為 fillRange 的值

          this._coldDownMask.getComponent(Sprite).fillRange = Number(value.toFixed(2));

          if (elapsedTimeInSeconds >= this._defaultColdDownTime) {
            //log('finish colddown_propID',this.id);
            this._coldDownMask.getComponent(Sprite).fillRange = 0;
            this._coldDownMask.active = false; //--finish

            this.isRunning = false;
            this.unLock(); //this.isLock=false;

            this.node.emit('fihishColdDown', this.id);
          } //--test-
          //let tweenComponent=this._coldDownMask.getComponent(TweenMaxCocosPlugin);

          /*
          TweenMax.to(testObj,10,{
              x:10,
              onUpdateParams:[testObj],
              onUpdate:(value)=>
              {
                  log('testObj_precent',value);
               }
          });
          */
          //log('check_updateTimeFrequency',1000/60);

          /*
          let elapsedTimeInSeconds: number = 0;
           let timer=window.setInterval(()=>
          {
              elapsedTimeInSeconds += this.updateIntervalInMillis / 1000;
              const percentageElapsed = (elapsedTimeInSeconds / this.totalTimeInSeconds) * 100;
              this.fillRange = percentageElapsed / 100; // 將百分比轉換為 fillRange 的值
               log('check_elapsedTimeInSeconds',elapsedTimeInSeconds);
              log(`Elapsed Time: ${elapsedTimeInSeconds.toFixed(2)} seconds`);
              log(`Fill Range: ${this.fillRange.toFixed(2)}`);
              
              if (elapsedTimeInSeconds >= this.totalTimeInSeconds) 
              {
                  clearInterval(timer);
                  log('Time limit reached!');
                  // 可以在這裡添加您想要的其他操作
              }
           },this.updateIntervalInMillis);
          */

          /*
          TweenMax.to(tweenComponent,this._defaultColdDownTime,
          {
              fillRange:0,
              onComplete:()=>
              {
                  log('coldDown is reday',this._defaultColdDownTime);
                   this.isRunning=false;
                   this.isLock=false;
                   this.node.on(Node.EventType.MOUSE_DOWN,this.propBtnHandler);
               }
          });
          */

        }

        canUsePropBefore() {
          //--lock down
          this._coldDownMask.getComponent(Sprite).fillRange = 1;
          this._coldDownMask.active = true; //this.node.off(Node.EventType.MOUSE_DOWN,this.propBtnHandler);

          this.isRunning = true; //this.isLock=true;

          this.lock();
        }

        updatePropCount(value) {
          log('updatePropCount_', this.id, value);

          if (this._amount != value) {
            this._amount = value;
            this.lightTween(); //---更新道具數量

            this._effectDigits.display(value, 'center');

            this.digitsTween(); //this._animation.play();

            this._digits.display(value, 'center');
          }
        }

        digitsTween() {
          let tweenComponent = this._effectDigits.node.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          if (this._effectDigits) {
            log('run_tween_prop_digits');

            let tweenComponent = this._effectDigits.node.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

            if (TweenMax.isTweening(tweenComponent)) {
              TweenMax.killTweensOf(tweenComponent);
              this._effectDigits.node.active = false;
            }

            this._effectDigits.node.active = true;

            this._effectDigits.node.setScale(v3(1.5, 1.5, 1.5));

            TweenMax.to(tweenComponent, .3, {
              scale: 1,
              onCompleteParams: [tweenComponent],
              onComplete: value => {
                TweenMax.to(value, .2, {
                  onCompleteParams: [value],
                  onComplete: target => {
                    target.node.active = false;
                  }
                });
              }
            });
          }
        }

        lightTween() {
          if (this._light) {
            log('run_tween_prop_btn');

            let tweenComponent = this._light.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

            if (TweenMax.isTweening(tweenComponent)) {
              TweenMax.killTweensOf(tweenComponent);
              this._light.active = false;
            }

            this._light.active = true;
            this._light.getComponent(Sprite).color = color(255, 255, 255, 128);

            this._light.setScale(v3(1.5, 1.5, 1.5));

            TweenMax.to(tweenComponent, .3, {
              scale: 1,
              sprColorAlpha: 255,
              onCompleteParams: [tweenComponent],
              onComplete: value => {
                TweenMax.to(value, .2, {
                  onCompleteParams: [value],
                  onComplete: target => {
                    target.node.active = false;
                  }
                });
              }
            });
          }

          if (this._lightCount) {
            log('run_tween_prop_btn');

            let tweenComponent = this._lightCount.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

            if (TweenMax.isTweening(tweenComponent)) {
              TweenMax.killTweensOf(tweenComponent);
              this._lightCount.active = false;
            }

            this._lightCount.active = true;
            this._lightCount.getComponent(Sprite).color = color(255, 255, 255, 128); //this._lightCount.setScale(v3(1.5,1.5,1.5));

            TweenMax.to(tweenComponent, .3, {
              //scale:1,
              sprColorAlpha: 255,
              onCompleteParams: [tweenComponent],
              onComplete: value => {
                TweenMax.to(value, .2, {
                  onCompleteParams: [value],
                  onComplete: target => {
                    target.node.active = false;
                  }
                });
              }
            });
          }
        }

        stopColdDown() {
          /*
          let tweenComponent=this._coldDownMask.getComponent(TweenMaxCocosPlugin);
          
          if(TweenMax.isTweening(tweenComponent))
          {
              TweenMax.killTweensOf(tweenComponent);
               this._coldDownMask.getComponent(Sprite).fillRange=0;
               this.unLock();
          }*/
          //if(this.isRunning || this._coldDownMask.getComponent(Sprite).fillRange!=0)
          //{
          this._coldDownMask.getComponent(Sprite).fillRange = 0;
          log('stopColdDown', this.id, this._coldDownMask.getComponent(Sprite));
          this._coldDownMask.active = false; //--finish

          this.isRunning = false;
          this.unLock(); //}
        }

        lock() {
          if (!this.isLock) {
            this.node.getComponent(Button).interactable = false; //this.node.off(Node.EventType.MOUSE_DOWN,this.propBtnHandler);

            this.node.off(Node.EventType.TOUCH_START, this.propBtnHandler);
            this.isLock = true;
          }
        }

        unLock() {
          if (this.isLock) {
            this.node.getComponent(Button).interactable = true; //this.node.on(Node.EventType.MOUSE_DOWN,this.propBtnHandler);

            this.node.on(Node.EventType.TOUCH_START, this.propBtnHandler);
            this.isLock = false;
          }
        }

        getPositionData() {
          log('getPositionData', this.node);
          let uiTransform = this.node.getComponent(UITransform);
          let coinContainSizeData = uiTransform.contentSize;
          let gp = this.node.parent.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(this.ogPosition.x, this.ogPosition.y, 0));
          return {
            x: gp.x,
            y: gp.y,
            width: coinContainSizeData.width,
            height: coinContainSizeData.height
          };
        }

      });

      _export("Fish1PropGuiView", Fish1PropGuiView = class Fish1PropGuiView extends (_crd && GuiBasic === void 0 ? (_reportPossibleCrUseOfGuiBasic({
        error: Error()
      }), GuiBasic) : GuiBasic) {
        set roomStatus(value) {
          this._roomStatus = value;
        }

        set defaultcdTimes(value) {
          this._defaultcdTimes = value;
          this.reSetDefaultcdTime();
        }

        constructor() {
          super();
          //--裝載全部的GUI的node
          this._stageContainer = void 0;
          this._props = void 0;
          this._defaultcdTimes = void 0;
          this._ogPositions = void 0;
          this._isFreeze = void 0;
          this._roomStatus = void 0;

          this.coldDownFinish = e => {
            //log('coldDownFinish_check_cdReady',e);
            if (e == (_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
              error: Error()
            }), PropType) : PropType).PROP_CALL) {
              if (this._isFreeze) {
                this._props[(_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
                  error: Error()
                }), PropType) : PropType).PROP_CALL - 1].getComponent(PropBtn).lock();
              }
            } else if (e == (_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
              error: Error()
            }), PropType) : PropType).PROP_FREEZE) {
              this._isFreeze = false;

              this._props[(_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
                error: Error()
              }), PropType) : PropType).PROP_CALL - 1].getComponent(PropBtn).unLock();
            }
          };

          //----send event
          this.usepropBtnHandler = e => {
            //-this.node.emit(GUIEvent.USE_PROP,{type:GUIEvent.USE_PROP,sendObj:this.id});
            //this.evt
            (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
              error: Error()
            }), Notifycation) : Notifycation).getInstance().emit((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
              error: Error()
            }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).USE_PROP, e.sendObj);
          };

          this._props = [];
          this._defaultcdTimes = [];
          this._ogPositions = [];
          this._roomStatus = 0;
        }
        /**
         * step1.
         * overrite it
         * @param value guiData before layout
        */


        setData(value) {
          super.setData(value);
          this._stageContainer = find(value.other.container);
          this._defaultcdTimes = value.other.dcd;
        }
        /**
         * step2.
         * overrite it
         */


        init() {//this._defultType=[GUIEvent.BTN_MUTE,GUIEvent.BTN_EXCHANGE,GUIEvent.BTN_HISTORY,GUIEvent.BTN_HELP,GUIEvent.BTN_EXIT];
        }

        async setLayout() {
          return new Promise(resolve => {
            let propPrefabNode = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getPrefab('prefab/gui/propBtns'));
            log('propPrefabNode', propPrefabNode);

            this._stageContainer.addChild(propPrefabNode); //let targetNodes=propPrefabNode.children;


            let targetNodes = ['itemCallBtn', 'itemFrozenBtn', 'itemCrazyBtn'];
            let len = targetNodes.length;
            let btnNode;
            let btnComponent;
            let ogPosition;

            for (let i = 0; i < len; i++) {
              //btnNode=targetNodes[i];
              btnNode = propPrefabNode.getChildByName(targetNodes[i]);
              btnComponent = btnNode.addComponent(PropBtn);
              btnComponent.id = i + 1; //--PropType(PROP_CALL=1/PROP_FREEZE=2/PROP_CRAZY=3)

              btnComponent.defaultColdDownTime = this._defaultcdTimes[i];
              btnNode.on((_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                error: Error()
              }), GUIEvent) : GUIEvent).USE_PROP, this.usepropBtnHandler);
              btnNode.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);
              ogPosition = btnNode.position;
              btnComponent.ogPosition = v3(btnNode.position.x, btnNode.position.y);
              this._ogPositions[i] = btnNode.position.x;
              btnNode.setPosition(v3(ogPosition.x + 200, ogPosition.y));
              this._props[i] = btnNode;
              btnNode.on('fihishColdDown', this.coldDownFinish);
            } //---完成的時候做


            resolve(); //--test

            /*
            TweenMax.to({},5,
            {
                onComplete:()=>
                {
                    log('check_test_finish');
                    //this._props[0].getComponent(PropBtn).updatePropCount(45);
                    //this._props[0].getComponent(PropBtn).updateColdDownTime();;
                    this.openShow();
                }
            });
            */
          });
        }

        getPropMenuPositions() {
          let positionData;
          let btnComponent;
          let rData = {};

          for (let i = 0; i < this._props.length; i++) {
            btnComponent = this._props[i].getComponent(PropBtn);
            positionData = btnComponent.getPositionData();
            rData[btnComponent.id] = positionData;
          }

          return rData;
        }

        checkPropIsRunning(propType) {
          return this._props[propType - 1].getComponent(PropBtn).isRunning;
        }

        lockPropBtn(propType) {
          this._props[propType - 1].getComponent(PropBtn).lock();
        }

        unLockPropBtn(propType) {
          this._props[propType - 1].getComponent(PropBtn).unLock();
        }

        openAllProprsBtn() {
          let len = this._props.length;

          for (let i = 0; i < len; i++) {
            //--房間變更狀態(一般0/冰凍1/金龍來襲2/金龍死亡3)
            if (this._roomStatus != 1 && this._roomStatus != 2) {
              this._props[i].getComponent(PropBtn).unLock();
            }
          }
        }

        closeAllPropsBtn() {
          let len = this._props.length;

          for (let i = 0; i < len; i++) {
            this._props[i].getComponent(PropBtn).lock();
          }
        }

        stopColdDown(propType) {
          log('lock_down_stopColdDown', propType); //--ps..陣列是從0開始

          this._props[propType - 1].getComponent(PropBtn).stopColdDown();
        } //public usePropStartToColdDown(propType:number,time:number):void


        updateColdDownTime(coldDownValue) {
          //this._props[propType].getComponent(PropBtn).updateColdDownTime(time);
          //canUsePropBefore
          //log('updateColdDownTime',coldDownValue);
          let propBtnComponent;

          for (let i in coldDownValue) {
            //log('check_forin',i);
            propBtnComponent = this._props[Number(i) - 1].getComponent(PropBtn);
            /*
            if(propBtnComponent.isRunning!=coldDownValue[i].isRunning && coldDownValue[i].timeCount!=0 && !coldDownValue[i].isFinish)
            {
                propBtnComponent.canUsePropBefore();
            }*/

            if (propBtnComponent.isRunning && coldDownValue[i].timeCount != 0) {
              propBtnComponent.updateColdDownTime(coldDownValue[i].timeCount);
            }
            /*
            if(propBtnComponent.isRunning && coldDownValue[i].isRunning && coldDownValue[i].timeCount!=0)
            {
                propBtnComponent.updateColdDownTime(coldDownValue[i].timeCount);
            
            }else if(coldDownValue[i].timeCount!=0 && coldDownValue[i].isFinish)
            {
                propBtnComponent.updateColdDownTime(coldDownValue[i].timeCount);
            }*/

          }
        }
        /**
         * 
         * @param value propType=道具編號(不是陣列編號),index=座位編號
         */


        beforeUseProp(value) {
          //-canUsePropBefore
          this._props[value.propType - 1].getComponent(PropBtn).canUsePropBefore();

          if (value.propType == (_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
            error: Error()
          }), PropType) : PropType).PROP_FREEZE) {
            this._isFreeze = true;
            this.lockPropBtn((_crd && PropType === void 0 ? (_reportPossibleCrUseOfPropType({
              error: Error()
            }), PropType) : PropType).PROP_CALL);
          }
        } //--???


        autoUseProps(propType) {
          if (!this._props[propType - 1].getComponent(PropBtn).isLock) {
            (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
              error: Error()
            }), Notifycation) : Notifycation).getInstance().emit((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
              error: Error()
            }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).USE_PROP, propType); //Notifycation.getInstance().emit(GuiNotifycationSubbscriptionSubject.GUI_NOTIFYCATION,GUIEvent.USE_PROP,e.sendObj);
          }
        } //--要確認一下server進來的資料

        /**
         * 更新背包道具
         * key=PropType(PROP_CALL/PROP_FREEZE/PROP_CRAZY)
         * time--檢查預設時間是否跟server給的cd時間是否相同
         * count=數量
         */


        setProps(props) {
          let len = this._props.length;
          let propBtnComponent;

          for (let i = 0; i < len; i++) {
            propBtnComponent = this._props[i].getComponent(PropBtn);
            propBtnComponent.updatePropCount(props[i + 1].count);

            if (propBtnComponent.defaultColdDownTime != props[i + 1].time) {
              propBtnComponent.defaultColdDownTime = props[i + 1].time;
            }
          }
        }
        /**
         * 
         * @param propType 
         * @param dcdTime second
         */


        setPropDefaultColdDownTime(propType, dcdTime) {
          this._props[propType].getComponent(PropBtn).defaultColdDownTime = dcdTime;
        }

        openShow() {
          let len = this._props.length;
          let tweenComponent;
          let count = 0;

          for (let i = 0; i < len; i++) {
            tweenComponent = this._props[i].getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);
            TweenMax.to(tweenComponent, .7, {
              x: this._ogPositions[i],
              delay: i * 0.08,
              ease: Bounce.easeOut,
              onComplete: () => {
                count++;

                if (count == len) {
                  //--unlockall
                  this.openAllProprsBtn();
                }
              }
            });
          }
        }

        roomToDefault() {
          this._isFreeze = false;
        }

        reSetDefaultcdTime() {
          let len = this._props.length;

          for (let i = 0; i < len; i++) {
            let btnComponent = this._props[i].getComponent(PropBtn);

            btnComponent.defaultColdDownTime = this._defaultcdTimes[i];
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=92858ff7d361225ac2970f2844fdc42382ac87b0.js.map
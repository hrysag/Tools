System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BlockInputEvents, Component, instantiate, Label, sp, Sprite, Node, find, v3, log, GuiBasic, LoadingResManager, GUIEvent, Notifycation, GuiNotifycationSubbscriptionSubject, CocosGameSetting, GameUtils, Digits, SoundsManager, RoomBtn, Fish1LobbyGuiView, _crd;

  function _reportPossibleCrUseOfGuiBasic(extras) {
    _reporterNs.report("GuiBasic", "../../../../framework/game/guiCore/GuiBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiOption(extras) {
    _reporterNs.report("GuiOption", "../../../../framework/game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGUIEvent(extras) {
    _reporterNs.report("GUIEvent", "../../../../framework/game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNotifycation(extras) {
    _reporterNs.report("Notifycation", "../../../../framework/abstract/mvvm/Notifycation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject(extras) {
    _reporterNs.report("GuiNotifycationSubbscriptionSubject", "../../../../framework/game/guiCore/GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCocosGameSetting(extras) {
    _reporterNs.report("CocosGameSetting", "../../../../framework/utils/CocosGameSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../../../framework/utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDigits(extras) {
    _reporterNs.report("Digits", "../../../../framework/utils/Digits", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundsManager(extras) {
    _reporterNs.report("SoundsManager", "../../../../framework/logic/audio/SoundsManager", _context.meta, extras);
  }

  _export({
    RoomBtn: void 0,
    Fish1LobbyGuiView: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      BlockInputEvents = _cc.BlockInputEvents;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      Node = _cc.Node;
      find = _cc.find;
      v3 = _cc.v3;
      log = _cc.log;
    }, function (_unresolved_2) {
      GuiBasic = _unresolved_2.GuiBasic;
    }, function (_unresolved_3) {
      LoadingResManager = _unresolved_3.LoadingResManager;
    }, function (_unresolved_4) {
      GUIEvent = _unresolved_4.GUIEvent;
    }, function (_unresolved_5) {
      Notifycation = _unresolved_5.Notifycation;
    }, function (_unresolved_6) {
      GuiNotifycationSubbscriptionSubject = _unresolved_6.GuiNotifycationSubbscriptionSubject;
    }, function (_unresolved_7) {
      CocosGameSetting = _unresolved_7.CocosGameSetting;
    }, function (_unresolved_8) {
      GameUtils = _unresolved_8.GameUtils;
    }, function (_unresolved_9) {
      Digits = _unresolved_9.Digits;
    }, function (_unresolved_10) {
      SoundsManager = _unresolved_10.SoundsManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e721F6CT1EJr+hC0/ZLKJ4", "Fish1LobbyGuiView", undefined);
      /**
       * Created by EricHuang on 2023/9/28.
       */


      __checkObsolete__(['BlockInputEvents', 'sys']);

      __checkObsolete__(['Component']);

      __checkObsolete__(['instantiate']);

      __checkObsolete__(['Label']);

      __checkObsolete__(['sp']);

      __checkObsolete__(['Sprite']);

      __checkObsolete__(['SpriteFrame']);

      __checkObsolete__(['Node']);

      __checkObsolete__(['find']);

      __checkObsolete__(['v3']);

      __checkObsolete__(['log']);

      _export("RoomBtn", RoomBtn = class RoomBtn extends Component {
        //private _btnNode:Node;
        set roomType(value) {
          this._roomType = value;
        }

        set strRoomTitle(value) {
          this._strRoomTitle = value;
        }

        constructor() {
          super();
          this._roomType = void 0;
          //private _roomRateLabel:Label;
          this._roomRateLabel = void 0;
          this._roomTitleNode = void 0;
          this._roomSpine = void 0;
          this._strRoomTitle = void 0;
          this._overAniNode = void 0;

          this.btnClickEvtHandler = e => {
            log('btnClick', e);

            if (e.type == Node.EventType.TOUCH_START) {
              (_crd && SoundsManager === void 0 ? (_reportPossibleCrUseOfSoundsManager({
                error: Error()
              }), SoundsManager) : SoundsManager).getInstance().play('sounds/button'); //this.node.emit(GUIEvent.SET_PLAYER_ROOM,new GUIEvent(GUIEvent.SET_PLAYER_ROOM,this._roomType));

              this.node.emit((_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                error: Error()
              }), GUIEvent) : GUIEvent).SET_PLAYER_ROOM, {
                type: (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                  error: Error()
                }), GUIEvent) : GUIEvent).SET_PLAYER_ROOM,
                sendObj: this._roomType
              });
            } else if (e.type == Node.EventType.MOUSE_ENTER) {
              //this._overAniNode
              let tweenObj = {
                scale: 1
              };
              TweenMax.to(tweenObj, .1, {
                scale: 1.2,
                yoyo: true,
                repeat: 1,
                onUpdate: () => {
                  this._overAniNode.scale = v3(tweenObj.scale, tweenObj.scale, tweenObj.scale);
                }
              });
            }
          };

          this._roomType = -1;
          this._overAniNode = null;
        }

        onLoad() {
          log('check_singleRoomData', this.node); //let btn=this.node.getComponent(Button);

          if (this.node.getChildByName('button').getChildByName('label')) {
            //this._roomRateLabel=this.node.getChildByName('button').getChildByName('label')!.getComponent(Label);
            //this._roomRateLabel.string='1:1';
            this._roomRateLabel = this.node.getChildByName('button').getChildByName('label').addComponent(_crd && Digits === void 0 ? (_reportPossibleCrUseOfDigits({
              error: Error()
            }), Digits) : Digits);
            let digitsTextures = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrames('num_lobby_').sort((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).sortDigitsSpriteFrames); //log('LobbyRoomNameTexture',digitsTextures);

            this._roomRateLabel.textures = digitsTextures;
            this._roomRateLabel.symbolStr = [':', 'K'];
            this._roomRateLabel.symbolIndex = [12, 13];

            this._roomRateLabel.displayWithStr('1:1', 'center');
          }
          /**
           * 注意! skel檔案為spine輸出的2進位檔案...
           * 在creator當中,在sp.Skeleton component裡面的Animation需要選取(下拉)
           * 裡面就是setAnimation需要的name,如果不指定,會無法播放QQ
           */


          if (this.node.getChildByName('spine')) {
            //-https://docs.cocos.com/creator/3.6/manual/zh/asset/spine.html
            this._overAniNode = this.node.getChildByName('spine'); //--set spine

            this._roomSpine = this.node.getChildByName('spine').getComponent(sp.Skeleton); //this._roomSpine.setAnimation(0,true,);
            //this._roomSpine.animation='你要的動畫名字'
          } //--換語系可能會需要再重新對一次位置    


          this._roomTitleNode = this.node.getChildByName('button').getChildByName('tx');

          if (this._strRoomTitle != '') {
            log('check_roomTitleNode', this._roomTitleNode, this._strRoomTitle);
            this.setRoomName();
          } //this.node.on(NodeEventType.MOUSE_ENTER,this.mouseStatusEvtHandler);

        }

        start() {}

        setRoomRatio(ratioData) {
          if (this._roomRateLabel) {
            if (ratioData == '' || ratioData == undefined || ratioData == null) {
              ratioData = '0:0';
            }

            let ratio = ratioData;
            let aryRatio = ratio.split(':');

            this._roomRateLabel.displayWithStr((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).repK(aryRatio[0]) + ':' + (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).repK(aryRatio[1]), 'center'); //this._roomRateLabel.string=GameUtils.repK(aryRatio[0])+':'+ GameUtils.repK(aryRatio[1]);


            log('setRoomRatio', this._roomType);

            if (this._roomType < 2) {
              this.node.on(Node.EventType.TOUCH_START, this.btnClickEvtHandler);
              this.node.on(Node.EventType.TOUCH_END, this.btnClickEvtHandler);
            }
          }
        }

        setRoomName(str) {
          let strIndex = str ? str : this._strRoomTitle;

          if (strIndex != '' && this._roomType >= 0) {
            let spriteFrame = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getSpriteFrameFromSpriteAtlas('fishHunter_' + (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
              error: Error()
            }), CocosGameSetting) : CocosGameSetting).Game_Lang, strIndex);

            if (spriteFrame) {
              //log('check_titleNode',this._roomTitleNode);
              let spr = this._roomTitleNode.getComponent(Sprite);

              spr.spriteFrame = spriteFrame;
            }
          }
        }

        removeAndDestory() {
          this.node.off(Node.EventType.TOUCH_START, this.btnClickEvtHandler);
          this.node.off(Node.EventType.TOUCH_END, this.btnClickEvtHandler);

          if (this._roomSpine) {
            this._roomSpine.clearTracks();

            log('remove', this._roomSpine);
          }
        }

      });

      _export("Fish1LobbyGuiView", Fish1LobbyGuiView = class Fish1LobbyGuiView extends (_crd && GuiBasic === void 0 ? (_reportPossibleCrUseOfGuiBasic({
        error: Error()
      }), GuiBasic) : GuiBasic) {
        //多語系要在處理
        constructor() {
          super();
          //-extends Node implements IfGui
          this._lobbyNode = void 0;
          this._aryBtn = void 0;
          this._accoundLabel = void 0;
          this._container = void 0;
          this._arylobbyNames = void 0;
          this._versionLabel = void 0;

          this.btnHandler = e => {
            log('room_btn_evt', e); //this.emit(e.type,e);

            (_crd && Notifycation === void 0 ? (_reportPossibleCrUseOfNotifycation({
              error: Error()
            }), Notifycation) : Notifycation).getInstance().emitSync((_crd && GuiNotifycationSubbscriptionSubject === void 0 ? (_reportPossibleCrUseOfGuiNotifycationSubbscriptionSubject({
              error: Error()
            }), GuiNotifycationSubbscriptionSubject) : GuiNotifycationSubbscriptionSubject).GUI_NOTIFYCATION, (_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).SET_PLAYER_ROOM, e);
          };

          this._aryBtn = [];
          this._arylobbyNames = []; //this._container=find('Canvas');
        }
        /**
         * step1.
         * overrite it
         * @param value guiData before layout
        */


        setData(value) {
          super.setData(value);
          this._arylobbyNames = value.other.lobbyNames;
          this._container = find(value.other.container);
          log('check_lobbyNames', this._arylobbyNames, this._container);
        }
        /**
         * step2.
         * overrite it
        */


        init() {//--do something about initGuiData
        } //--override--step3
        //--layout ur gui


        async setLayout() {
          return new Promise(resolve => {
            this._lobbyNode = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getPrefab('prefab/gui/lobby')); //this.addChild(this._lobbyNode);

            let bg = this._lobbyNode.getChildByName('bg').getComponent(Sprite);

            bg.addComponent(BlockInputEvents);
            log('initLobbyGui', this._lobbyNode);
            this._versionLabel = this._lobbyNode.getChildByName('version').getComponent(Label);
            this._accoundLabel = this._lobbyNode.getChildByName('player').getChildByName('label').getComponent(Label); //--這邊長度可能是2或是以上

            let rooms = this._lobbyNode.getChildByName('room').children; //let roomNames:string[]=['tx_shark','tx_dragon',''];


            for (let i = 0; i < rooms.length; i++) {
              let btn = rooms[i].addComponent(RoomBtn);
              log('check_rooms', rooms[i]); //btn.init(rooms[i]);

              btn.roomType = i;
              btn.strRoomTitle = this._arylobbyNames[i];

              this._aryBtn.push(btn);

              btn.node.on((_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
                error: Error()
              }), GUIEvent) : GUIEvent).SET_PLAYER_ROOM, this.btnHandler); //超詭異的感應區怪怪的

              /*
              let size:Size=rooms[i].getComponent(UITransform).contentSize;
              let btnSensor=new Node('graphic_node'+i);
              btnSensor.layer=Layers.Enum.UI_2D;
              let gp:Graphics=btnSensor.addComponent(Graphics);
              gp.fillColor=color(255,255,255,128);
              gp.rect(-size.width/2,-size.height/2,size.width,size.height);
              gp.fill();
              let ancher:UITransform=btnSensor.addComponent(UITransform);
              ancher.width=size.width;//--這邊要設定的跟你要感應的區域大小相同才不會跑掉
              ancher.height=size.height;
              ancher.anchorX=ancher.anchorY=.5;
              this._lobbyNode.addChild(btnSensor);
              btnSensor.setPosition(v3(rooms[i].position.x,rooms[i].position.y,0));
              btnSensor.on(Node.EventType.MOUSE_ENTER,(e)=>
              {
                  log('mouseOver');
              });*/

              /**
               * prfab他的最上層的node一定要掛uitranfrom component不然會看見
               * 記得在prefab裡面存檔,即可預覽
               * 以下為舊的廳房資訊
               *  string fold = 0;  // x 倍場， ex. 1 為一倍場、100 為百倍場
                  string denom = 1; // 開分比
                  新版的就已 [ '1:5', '2:1', '4:1' ] 來取代,fold=在ary當中的index
                  */
            } //let canvasNode:Node=find('Canvas');


            this.addChild(this._lobbyNode);

            this._container.addChild(this); //---完成的時候做


            resolve();
          });
        }

        //--do something after layout

        /**
         * override-step4
         * do something after layoutgui
         */
        layoutComplete() {
          //this._layoutCompleteFreebackFunction();
          log('finsih_initLobbyGui');
        }

        setRoomData(roomRate, uiseId) {
          log('setRoomData_gui', roomRate, uiseId); //---20230804-先暫時這樣

          let len = 3; //--ps因為server似乎沒有協調好,送進來['1:5', '1:1', '2:1', '4:1', 'NA']這種資料

          for (let i = 0; i < len; i++) {
            if (roomRate[i] != '') {
              this._aryBtn[i].setRoomRatio(roomRate[i]);
            }
          }

          log('check_label', this._accoundLabel.useSystemFont); //this._accoundLabel.color=color(208,208,208,128);--色碼用rgba來表示

          this._accoundLabel.string = uiseId;
        }

        remove() {
          for (let i = 0; i < this._aryBtn.length; i++) {
            this._aryBtn[i].node.off((_crd && GUIEvent === void 0 ? (_reportPossibleCrUseOfGUIEvent({
              error: Error()
            }), GUIEvent) : GUIEvent).SET_PLAYER_ROOM, this.btnHandler);

            this._aryBtn[i].removeAndDestory();
          } //this._container.removeChild(this._lobbyNode);


          this._container.removeChild(this);
        }

        setLauncherVersionNumber(value) {
          this._versionLabel.string = value;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0208adba4ddfc968c5295c4bb6d8dc3c5817b595.js.map
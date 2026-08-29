System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, MouseBehaviorBase, GameEventBase, Node, v2, UITransform, v3, sys, log, MouseBehaviorClick, _crd;

  function _reportPossibleCrUseOfMouseBehaviorBase(extras) {
    _reporterNs.report("MouseBehaviorBase", "../../game/mouseBehavior/mouseBehaviorBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEventBase(extras) {
    _reporterNs.report("GameEventBase", "../../game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFClickShoot(extras) {
    _reporterNs.report("IFClickShoot", "../../game/mouseBehavior/MouseBehaviorDefinitionsBase", _context.meta, extras);
  }

  _export("MouseBehaviorClick", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      v2 = _cc.v2;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      sys = _cc.sys;
      log = _cc.log;
    }, function (_unresolved_2) {
      MouseBehaviorBase = _unresolved_2.MouseBehaviorBase;
    }, function (_unresolved_3) {
      GameEventBase = _unresolved_3.GameEventBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d4d0hRCGdF6psIrr30wsP1", "MouseBehaviorClick", undefined);
      /**
       * Created by EricHuang on 2023/10/01.
       */


      __checkObsolete__(['EventTouch', 'Node', 'Vec2', 'macro', 'v2', 'view', 'View', 'UITransform', 'Size', 'Graphics', 'color', 'Layers', 'find', 'v3', 'sys']);

      __checkObsolete__(['CameraComponent']);

      __checkObsolete__(['log']);

      _export("MouseBehaviorClick", MouseBehaviorClick = class MouseBehaviorClick extends (_crd && MouseBehaviorBase === void 0 ? (_reportPossibleCrUseOfMouseBehaviorBase({
        error: Error()
      }), MouseBehaviorBase) : MouseBehaviorBase) {
        /*
        protected _cameraComponentForUitransform:CameraComponent;
         set cameraComponentForUitransform(value:CameraComponent)
        {
           this._cameraComponentForUitransform=value; 
        }*/
        get block() {
          return this._block;
        }

        constructor() {
          super();
          this._leaveClick = void 0;
          this._strMouse2dAction = void 0;
          this._mobilePositions = void 0;
          this._flagLongpress = void 0;
          this._directionPoint = void 0;
          this._directionShoot = void 0;
          //--定向射擊
          this._drillblock = void 0;
          //--用於由砲台發射的特殊子彈,有表演時間,結束才能擊發
          //--在定向射擊計時器尚未結束前取消定向射擊,會打出最後一發,但因為相關參數被重設了,所以就以一般子彈打出
          this._lastShootForDirection = void 0;
          //--20230417-定向射擊再區間取消的最後一發
          this._block = void 0;
          this._uiTransForm = void 0;

          this.sensorClickHandler = e => {
            log('checkMosueClickEvt', e);

            if (e.type == Node.EventType.TOUCH_START) {
              log('sensorClickHandler_TOUCH_START');
              this.mouseStartHandler(e);
            } else if (e.type == Node.EventType.TOUCH_CANCEL) {
              this.mouseLeaveHandler(e);
            } else if (e.type == Node.EventType.TOUCH_END) {
              this.mouseEndHandler(e);
            } else if (e.type == Node.EventType.TOUCH_MOVE || e.type == Node.EventType.MOUSE_MOVE) {
              this.mouseMoveHandler(e);
            } //let mp:{endX:number,endY:number}=this.getMousePosition(e);
            //log('sensorClickHandler',mp);
            //this.node.emit(GameEventBase.CLICK_SHOOT,mp);
            //Notifycation.getInstance().emitSync(MouseBehaviorNotifycationSubbscriptionSubject.MOUSE_BEHAVIOR_NOTIFYCATION,MouseBehaviorShootEvent.CLICK_SHOOT,mp);

          };

          log('MouseBehaviorClick_super_init');
          this._strMouse2dAction = "up";
          this._mobilePositions = null;
          this._flagLongpress = false;
          this._leaveClick = false;
          this._lastShootForDirection = false;
          this._directionPoint = v2(-1, -1);
          this._drillblock = false;
          this._directionShoot = false;
          this._block = false; //this._block=true;
        }

        set directionShoot(value) {
          this._directionShoot = value;
        }

        get directionShoot() {
          return this._directionShoot;
        }
        /*
        public setCameraComponentForUitransform(value:CameraComponent):void
        {
            this._cameraComponentForUitransform=value; 
        }*/


        init() {
          this.register();
        }

        setCreditToClickArea(value) {
          if (value > 0) {
            this._block = false;
          } else {
            this._block = true;
          }
        }

        checkBlockAll() {
          return this._block;
        }

        blockALL(value) {
          log("check_drill", value);

          if (value != undefined) {
            this._drillblock = value;
          }

          this._block = true;
        }

        unBlockALL() {
          this._block = false;
        } //--設定玩家的座位(座位不同會需要旋轉,因此感應區必須調整Y軸的位置)


        setPosition(value) {}

        onLoad() {
          this._uiTransForm = this.node.getComponent(UITransform);
          /*
          log('mouseClick_onloaded');
           let testNode:Node=new Node('testClickNode');
          
          let uitransfrom=testNode.addComponent(UITransform);
           uitransfrom.contentSize=new Size(1920,1080);
           this.node.addChild(testNode);
           testNode.on(Node.EventType.TOUCH_START,()=>
          {
               log('block_clock');
          });*/
        } //--step1 do init(addEventListen)
        //this.node.on(Node.EventType.TOUCH_START,this.sensorClickHandler)


        register() {
          log('mouseClass_register', sys.isMobile, this.node);
          /*
          let testClickNode=new Node('testClickNode');
           this.node.addChild(testClickNode);
           //macro.ENABLE_MULTI_TOUCH = false;//--關閉多點觸控
          
          testClickNode.on(Node.EventType.TOUCH_START,this.sensorClickHandler);
           testClickNode.on(Node.EventType.TOUCH_END,this.sensorClickHandler);
          
          testClickNode.on(Node.EventType.TOUCH_MOVE,this.sensorClickHandler);
          
          testClickNode.on(Node.EventType.MOUSE_MOVE,this.sensorClickHandler);
          
          testClickNode.on(Node.EventType.TOUCH_CANCEL,this.sensorClickHandler);//--離開區域
          */
          //--for test

          this.node.on(Node.EventType.TOUCH_MOVE, this.sensorClickHandler);
          this.node.on(Node.EventType.TOUCH_START, this.sensorClickHandler);
          this.node.on(Node.EventType.TOUCH_END, this.sensorClickHandler);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.sensorClickHandler); //--離開區域
          //this.node.on(Node.EventType.MOUSE_MOVE,this.sensorClickHandler);

          /*
          if(sys.isMobile)
          {
              this.node.on(Node.EventType.TOUCH_MOVE,this.sensorClickHandler);
          
          }else{
              
              this.node.on(Node.EventType.MOUSE_MOVE,this.sensorClickHandler);
          }*/
          //--test--
          //this._block=true;
        }

        mouseStartHandler(e) {
          log('mouseStartHandler', this._block);

          if (this._block) {
            this.node.emit((_crd && GameEventBase === void 0 ? (_reportPossibleCrUseOfGameEventBase({
              error: Error()
            }), GameEventBase) : GameEventBase).BLOCK_CLICK, {
              isAuto: false
            });
          } else {
            this._strMouse2dAction = "down";
            this._lastShootForDirection = false; // let clickObj:{endX:number,endY:number};

            var clickObj = this.getMousePosition(e); //-{endX:number,endY:number}

            if (clickObj) {
              this._mobilePositions = {
                endX: clickObj.endX,
                endY: clickObj.endY
              };
              clickObj.longPress = false;

              if (this._directionShoot) {
                //--可以不斷的變換定向選擇的位置
                this._directionPoint.x = clickObj.endX;
                this._directionPoint.y = clickObj.endY;
                clickObj.direction = true;
              } else {
                clickObj.direction = false;
              }
            } else {
              this._mobilePositions = null;
            }

            this._leaveClick = false;
            log('sensorClickHandler', clickObj);
            this.node.emit((_crd && GameEventBase === void 0 ? (_reportPossibleCrUseOfGameEventBase({
              error: Error()
            }), GameEventBase) : GameEventBase).CLICK_SHOOT, clickObj);
          }
        }

        mouseEndHandler(e) {
          this._leaveClick = true;
          this._strMouse2dAction = "up";
        }

        mouseMoveHandler(e) {
          //--這邊要在實作檢查是否在區域內

          /*
          let mousePosition:Vec2=e.getUILocation();
           let boundingBox = this.node.getBoundingBoxToWorld();
           if(!boundingBox.contains(touchLocation))
          {
              this.leaveSensorArea(); 
          }
          */
          //this._test=e;
          this._mobilePositions = this.getMousePosition(e);
        }

        leaveSensorArea() {}

        mouseLeaveHandler(e) {
          if (!this._drillblock) {
            this._leaveClick = true; //log("mouseOut__leaveClick");
          }

          this._strMouse2dAction = "over"; //----??檢查是否還要用@@?

          log('mouseLeaveHandler');
        }

        getMousePosition(value) {
          //let mPosition:{endX:number,endY:number}=null;
          //--這個是螢幕左下角為(0,0)的螢幕坐標系

          /**
           * 
           * https://forum.cocos.org/t/topic/85219
           * https://forum.cocos.org/t/topic/90634/15
           * 
           * getUILocation=
           * 講白一點他就是
           * 屏幕坐标=也就是你实际看到的屏幕的坐标，ui 坐标=屏幕+适配后的坐标。
           * getLocation 获取的就是屏幕坐标，getUILocation 获取的是 ui 世界的坐标。
           * 其他有带 UI 关键字的都是类似
           * 这个跟适配相关，UILocation 获取的是屏幕空间的坐标，可以看作是 UI 节点的世界坐标，
           * 
           * 
           * 屏幕空间是按照设计分辨率来的，比如你的设计分辨率是 640 x 1136，
           * 哪么点击屏幕中心 getUILocation 返回的就是 （320，568）。
             目前相机里面计算射线是根据逻辑分辨率来的，比如 iphone 6 的是 375 x 667 ，
             如果你点击中心，UILocation 依然会根据设计分辨率返回，相对于逻辑分辨率这个时候就不对了，
             getLocation 是基于逻辑分辨率的，使用这个才可以获得正确的世界空间下的射线。
           */
          //let mousePosition:Vec2=value.getUILocation();
          var mPosition;

          if (value) {
            /*
            let mousePosition:Vec2=value.getLocation();
            
            log('check_clickPos',mousePosition);
             let wpos=this._cameraComponentForUitransform.screenToWorld(v3(mousePosition.x,mousePosition.y));
                 mPosition={endX:wpos.x,endY:wpos.y};
                 if(mPosition.endX<this._boundaryWorldPosPoint.x || mPosition.endX >this._boundaryWorldPosPoint.w || mPosition.endY<this._boundaryWorldPosPoint.y || mPosition.endY>this._boundaryWorldPosPoint.h)
            {
                
                mPosition=null;
                 }*/

            /*
            let mousePosition:Vec2=value.getLocation();
             let wpos=this._cameraComponentForUitransform.screenToWorld(v3(mousePosition.x,mousePosition.y));
             mPosition={endX:wpos.x,endY:wpos.y};
            */
            var mousePosition = value.getLocation();

            var wpos = this._cameraComponentForUitransform.screenToWorld(v3(mousePosition.x, mousePosition.y)); //let mouseNode=find('Canvas/mouseNode');


            var localPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(v3(wpos.x, wpos.y));
            mPosition = {
              endX: localPos.x,
              endY: localPos.y
            }; //--實際
            //mPosition={endX:wpos.x,endY:wpos.y};//--test--

            log('wtf_click_locPos', localPos, wpos, this._boundaryWp);
            /*
            let testNode:Node=new Node();
            let graphic:Graphics=testNode.addComponent(Graphics);
            //-graphic 不受到UIOpacity組件影響~有夠78(coloc 0-255)
            graphic.fillColor=color(255,255,255,255);
            graphic.rect(-50,-50,100,100);
            graphic.fill();
            testNode.layer=Layers.Enum.UI_2D;
             mouseNode.addChild(testNode);
                 testNode.setPosition(localPos);
            */

            if (localPos.x < this._boundaryWp.x || localPos.x > this._boundaryWp.w || localPos.y < this._boundaryWp.y || localPos.y > this._boundaryWp.h) {
              // 点击位置在节点区域外
              log('outSideQQ');
              mPosition = null;
            }
          } else {
            mPosition = null;
          } //log('mousePosition>>'+'\n'+'wxy'+wxy+'\n'+'wwh'+wwh+'\n'+'mousePosition:'+mousePosition+'\n'+'mPosition:'+mPosition.endX,mPosition.endY);

          /*
          let testNode:Node=new Node();
          let graphic:Graphics=testNode.addComponent(Graphics);
          //-graphic 不受到UIOpacity組件影響~有夠78(coloc 0-255)
          graphic.fillColor=color(128,2,1,255);
          graphic.rect(-50,-50,100,100);
          graphic.fill();
          testNode.layer=Layers.Enum.UI_2D;
           this.node.addChild(testNode);
           let cameraNode=find('Canvas/CameraGUI');
           let wpos=cameraNode.getComponent(CameraComponent).screenToWorld(v3(mousePosition.x,mousePosition.y));
          
          let lpos=this.node.getComponent(UITransform).convertToNodeSpaceAR(wpos);     
           //testNode.setPosition(v3(0,0,0));---中間
          testNode.setPosition(lpos);
          */

          /*
          if(value instanceof EventTouch)
          {
              let mousePosition:Vec2=value.getUILocation();
               mPosition={endX:mousePosition.x,endY:mousePosition.y};
          }*/
          //let mouseX = view.getVisibleSize().width / 2 + view.getVisibleSize().width / 2 * view.getVisibleSize().width / view.getViewportRect().width;
          //let mouseY = view.getVisibleSize().height / 2 + view.getVisibleSize().height / 2 * view.getVisibleSize().height / view.getViewportRect().height;

          /*
          log('mouseMove',this._test);
          let m=this._test.getUILocation();  
          let testObj={endX:m.x,endY:m.y};
          */
          //-{endX: 1550.9818412162163, endY: 206.26346564440993}
          //-{x: 49.999999999999886, y: 90, w: 1820, h: 940}
          //log('check_clickData',this._boundaryWp,AREA_BOUNDARY.x,AREA_BOUNDARY.y,AREA_BOUNDARY.w,AREA_BOUNDARY.h,testInOutSide);


          log('check_clickData', mPosition);
          return mPosition;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=46a916127a74c43f4626bbe052ab364f87e92240.js.map
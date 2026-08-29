System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, v3, UITransform, Size, AREA_BOUNDARY, CocosGameSetting, log, MouseBehaviorBase, _crd;

  function _reportPossibleCrUseOfAREA_BOUNDARY(extras) {
    _reporterNs.report("AREA_BOUNDARY", "../../game/mouseBehavior/MouseBehaviorDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCocosGameSetting(extras) {
    _reporterNs.report("CocosGameSetting", "../../utils/CocosGameSetting", _context.meta, extras);
  }

  _export("MouseBehaviorBase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      v3 = _cc.v3;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
      log = _cc.log;
    }, function (_unresolved_2) {
      AREA_BOUNDARY = _unresolved_2.AREA_BOUNDARY;
    }, function (_unresolved_3) {
      CocosGameSetting = _unresolved_3.CocosGameSetting;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b864EY2KBE4oVhfzoD6WSw", "mouseBehaviorBase", undefined);
      /**
       * Created by EricHuang on 2023/10/01.
       */


      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Node', 'Graphics', 'color', 'Layers', 'v3', 'Vec2', 'CameraComponent', 'UITransform', 'Size']);

      __checkObsolete__(['log']);

      _export("MouseBehaviorBase", MouseBehaviorBase = class MouseBehaviorBase extends Component {
        set cameraComponentForUitransform(value) {
          this._cameraComponentForUitransform = value;
        }

        constructor() {
          super();
          this._coordinateMode = void 0;
          this._mobilePositions = void 0;
          this._flagLongpress = void 0;
          //--2020-10-15(長按擊發紀錄按鈕)
          this._boundaryWp = void 0;
          //protected _boundaryWorldPosPoint:{x:number,y:number,w:number,h:Number}
          this._cameraComponentForUitransform = void 0;

          this.sensorClickHandler = e => {};

          this._boundaryWp = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
          }; //this._boundaryWorldPosPoint={x:0,y:0,w:0,h:0};

          this._cameraComponentForUitransform = null;
        }

        onLoad() {//--this.node是mouseNode
          //super.onLoad();
          //-https://blog.csdn.net/weixin_45686592/article/details/122738703
          //--座標互轉
          //-https://blog.csdn.net/weixin_44209860/article/details/126509442?spm=1001.2101.3001.6650.9&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-9-126509442-blog-87436951.235%5Ev38%5Epc_relevant_anti_vip&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-9-126509442-blog-87436951.235%5Ev38%5Epc_relevant_anti_vip&utm_relevant_index=10
          //-https://blog.csdn.net/bark2003/article/details/124009301?spm=1001.2101.3001.6650.5&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-5-124009301-blog-122738703.235%5Ev38%5Epc_relevant_anti_vip&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-5-124009301-blog-122738703.235%5Ev38%5Epc_relevant_anti_vip&utm_relevant_index=6
          //-https://www.twblogs.net/a/5cc1de6fbd9eee397114143e
          //this.register();
        }
        /**
         * 以畫面中心點為0,0
         * 左邊的邊界為-gameWidth/2,右邊的邊界為gameWidth/2
         * 上面的邊界為gameheight/2,下面的邊界為-gameHeight/2
         * @param x 距離左邊的距離
         * @param y 距離下面的距離
         * @param w 距離右邊的距離
         * @param h 距離上面的距離
         */
        //public setBoundary(x:number,y:number,w:number,h:number):void


        setBoundary(w, h) {
          let uitransfrom = this.node.getComponent(UITransform);
          uitransfrom.contentSize = new Size(w, h);
          uitransfrom.anchorX = 0.5;
          uitransfrom.anchorY = 0.5;
          let distanceW = ((_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
            error: Error()
          }), CocosGameSetting) : CocosGameSetting).Game_Width - w) / 2;
          let distanceH = ((_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
            error: Error()
          }), CocosGameSetting) : CocosGameSetting).Game_Height - h) / 2;
          (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
            error: Error()
          }), AREA_BOUNDARY) : AREA_BOUNDARY).x = -((_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
            error: Error()
          }), CocosGameSetting) : CocosGameSetting).Game_Width / 2) + distanceW;
          (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
            error: Error()
          }), AREA_BOUNDARY) : AREA_BOUNDARY).y = -((_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
            error: Error()
          }), CocosGameSetting) : CocosGameSetting).Game_Height / 2) + distanceH;
          (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
            error: Error()
          }), AREA_BOUNDARY) : AREA_BOUNDARY).w = (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
            error: Error()
          }), CocosGameSetting) : CocosGameSetting).Game_Width / 2 - distanceW;
          (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
            error: Error()
          }), AREA_BOUNDARY) : AREA_BOUNDARY).h = (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
            error: Error()
          }), CocosGameSetting) : CocosGameSetting).Game_Height / 2 - distanceH;
          this._boundaryWp.x = (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
            error: Error()
          }), AREA_BOUNDARY) : AREA_BOUNDARY).x;
          this._boundaryWp.y = (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
            error: Error()
          }), AREA_BOUNDARY) : AREA_BOUNDARY).y;
          this._boundaryWp.w = (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
            error: Error()
          }), AREA_BOUNDARY) : AREA_BOUNDARY).w;
          this._boundaryWp.h = (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
            error: Error()
          }), AREA_BOUNDARY) : AREA_BOUNDARY).h;
          /*
          let wxy=this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(this._boundaryWp.x,this._boundaryWp.y));
          
          let wwh=this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(this._boundaryWp.w,this._boundaryWp.h));
           this._boundaryWorldPosPoint={x:wxy.x,y:wxy.y,w:wwh.x,h:wwh.y};
          */

          log('check_setBoundary', (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
            error: Error()
          }), AREA_BOUNDARY) : AREA_BOUNDARY).x, (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
            error: Error()
          }), AREA_BOUNDARY) : AREA_BOUNDARY).y, (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
            error: Error()
          }), AREA_BOUNDARY) : AREA_BOUNDARY).w, (_crd && AREA_BOUNDARY === void 0 ? (_reportPossibleCrUseOfAREA_BOUNDARY({
            error: Error()
          }), AREA_BOUNDARY) : AREA_BOUNDARY).h); //-{x: 49.99999999999966, y: 90, w: 1819.9999999999995, h: 939.9999999999998}
          //-910 -450 860 400 
          //--test--

          /*
          let testNode:Node=new Node();
          let graphic:Graphics=testNode.addComponent(Graphics);
           graphic.fillColor=color(255,255,255,128);
          graphic.rect(AREA_BOUNDARY.x, AREA_BOUNDARY.y,CocosGameSetting.Game_Width-w,CocosGameSetting.Game_Height-h);
          graphic.fill();
          testNode.layer=Layers.Enum.UI_2D;
          this.node.addChild(testNode);
          testNode.setPosition(v3(0,0));
          */
          //--test--
        } //--點擊區域是固定的


        afterRotationPos(value) {
          let uitransfrom = this.node.getComponent(UITransform); //let containSize=uitransfrom.contentSize;

          uitransfrom.node.setPosition(v3(0, 0));
          uitransfrom.node.setPosition(v3(uitransfrom.node.position.x, uitransfrom.node.position.y + value)); //log('afterRotationPos_mouseClick',value,uitransfrom.node.position,containSize,AREA_BOUNDARY.w,AREA_BOUNDARY.h);

          /*
          let testNode:Node=new Node();
          let graphic:Graphics=testNode.addComponent(Graphics);
           graphic.fillColor=color(255,255,255,128);
          graphic.rect(AREA_BOUNDARY.x, AREA_BOUNDARY.y,containSize.width,containSize.height);
          graphic.fill();
          testNode.layer=Layers.Enum.UI_2D;
          this.node.addChild(testNode);
          testNode.setPosition(v3(uitransfrom.node.position.x,uitransfrom.node.position.y));
          */
        } //--step1 do init(addEventListen)
        //this.node.on(Node.EventType.TOUCH_START,this.sensorClickHandler)
        //--設定玩家的座位(座位不同會需要旋轉,因此感應區必須調整Y軸的位置)


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=07916b775343a1b0dec9f14d235b32614ba7585e.js.map
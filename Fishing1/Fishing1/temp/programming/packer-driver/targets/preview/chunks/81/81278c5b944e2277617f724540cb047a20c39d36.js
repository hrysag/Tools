System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Node, Layout, Sprite, v3, UITransform, Size, Layers, GameUtils, log, Digits, _crd;

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../utils/GameUtils", _context.meta, extras);
  }

  _export("Digits", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Node = _cc.Node;
      Layout = _cc.Layout;
      Sprite = _cc.Sprite;
      v3 = _cc.v3;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
      Layers = _cc.Layers;
      log = _cc.log;
    }, function (_unresolved_2) {
      GameUtils = _unresolved_2.GameUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b6e9e6mSzpEKJWDZRtlCp0K", "Digits", undefined);
      /**
       * Created by EricHuang on 2023/8/9.
       */


      __checkObsolete__(['Component', 'Node', 'SpriteFrame', 'Layout', 'Sprite', 'v3', 'UITransform', 'Vec3', 'Size']);

      __checkObsolete__(['Layers']);

      __checkObsolete__(['Rect']);

      __checkObsolete__(['log']);

      /**
      * 
      * 數字工具 ,  預設texture 10 是逗號 11 是小數點
      * @export
      * @class Digits
      * @extends {Sprite}
      */
      _export("Digits", Digits = class Digits extends Component {
        //-------setter
        set pointIndex(value) {
          this._pointIndex = value;
        }
        /** 
        * 設定上下數字與圖片高度差
        * @param value		 
        */
        //set topGap(value: number) { this._imgTopGap = value; }
        //set bottomGap(value: number) { this._imgBotGap = value; }

        /**
        * @param value	
        * ps--因為裝載一堆node的最上層node他並不會動態的改變寬高資訊,
        * 所以要自己設定一個最大值,方便之後算對齊使用
        */


        set containSize(value) {
          this._containSize = value;
        }
        /**
        *  設定是否使用逗號
        * @param value
        */


        set useCommand(value) {
          this._useCommand = value;
        }

        set floatScale(value) {
          this._floatScale = value;
        }

        set digitScale(value) {
          this._digitScale = value;
        }
        /**
        * 設定特殊字串 , 請以array方式塞入,例如['-' , 'x' ]
        * @param value{Array<string>}
        */


        set symbolStr(value) {
          this._symbolStr = value;
        }
        /**
        *  
        * 特殊字的相對應index,順序請與symbolStr相同
        * @param value{Array<number>}
        * @memberOf Digits
        */


        set symbolIndex(value) {
          this._symbolIndex = value;
        }
        /**
        *  設定數字間距(cocos layout不支援負數的樣子,爛)
        * @param num
        */


        set padding(num) {
          this._padding = num;
        } //set symboPadding(value: number[]) { this._symboPadding = value; }

        /**
        * 設定符號間距 請在 數字間距後設定 否則會以數字間距為預設
        * @param value
        */

        /*
        set signPadding(value: number) 
           {
           this._signPadding = value;
        }*/


        set textures(value) {
          this._textures = value; //log('check_digits_of_textures_afterSort',this._textures);
        }

        set diplayLayer(value) {
          this._diplayLayer = value;
        } //-- NONE = 0,CONTAINER = 1, CHILDREN = 2


        set resizeMode(value) {
          this._resizeMode = value;
          this._layout.resizeMode = this._resizeMode;
        } //=====getter================================================


        get txt() {
          return this._txt;
        }
        /**
        * Creates an instance of Digits.
        * @param {SpriteFrame[]} textures 全部數字的texture(0~9)
        * PS-如果是透過node.addcomponent的方式建構component.
        * 是沒有辦法送入建構式的,所以要透過其他的方式送進建構式的參數
        * 這邊開了setter方法來塞textures
        */


        constructor(textures) {
          super();
          //逗點的texture index
          this._pointIndex = 11;
          //小數點的texture index
          this._padding = 0;
          //數字間距
          this._digitScale = 1;
          //一般數字的縮放值 
          this._floatScale = 1;
          //小數點的縮放值
          //protected _signPadding: number = 0;  //符號間距 ,
          this._useCommand = false;
          //是否使用逗號
          this._textures = void 0;
          //SpriteFrame
          this.arrDigit = void 0;
          //全部數字的array
          this.direction = void 0;
          //對齊方式
          //protected container: Node;	 //數字容器
          this._symbolStr = void 0;
          //特殊字的字串(請以array方式塞入例如['-' , 'x' ])
          this._symbolIndex = void 0;
          //特殊字的相對應index,順序請與_symbolStr相同
          this._containSize = void 0;
          //--設定最上層的文字框(node)的範圍
          //private _symboPadding: number[];
          //private _imgTopGap: number = 0;  // 圖片範圍與圖內數字的上間距
          //private _imgBotGap: number = 0;  // 圖片範圍與圖內數字的下間距
          this._uiTransform = void 0;
          this.floatNumIndex = Number.MAX_VALUE;
          this._layout = void 0;
          this._resizeMode = void 0;
          this._diplayLayer = void 0;
          this._txt = void 0;
          this._textures = textures;
          this._diplayLayer = Layers.Enum.UI_2D;
          this._txt = 0; //-- NONE = 0,CONTAINER = 1, CHILDREN = 2
          //https://docs.cocos.com/creator/manual/zh/ui-system/components/editor/layout.html

          this._resizeMode = Layout.ResizeMode.CONTAINER;
        }

        onLoad() {
          if (!this.node.getComponent(UITransform)) {
            this._uiTransform = this.node.addComponent(UITransform);
          } else {
            this._uiTransform = this.node.getComponent(UITransform);
          }

          this._layout = this.node.addComponent(Layout); //--透過不斷改變padding left/right的起始位置來做對齊的動作

          /**
           * ps--這邊padding left/right是指從左邊或是右邊開始排的啟動距離(他會依序排列耶)
           * 假設123456,從右邊開始排會變成654321(從左到右看起來會這樣)
           * 也可以直接把餵進去的資料反轉塞也是一樣啦
           */
          //-- NONE = 0, HORIZONTAL = 1, VERTICAL = 2, GRID = 3 

          this._layout.type = Layout.Type.HORIZONTAL; //--LEFT_TO_RIGHT = 0,RIGHT_TO_LEFT = 1

          this._layout.horizontalDirection = Layout.HorizontalDirection.LEFT_TO_RIGHT; //this._layout.alignHorizontal=true;
          //-- NONE = 0,CONTAINER = 1, CHILDREN = 2
          //this._layout.resizeMode=Layout.ResizeMode.NONE;
          //--選擇container才能選用負數的padding
          //this._layout.resizeMode=Layout.ResizeMode.CONTAINER;

          this._layout.resizeMode = this._resizeMode; //this.node.addChild(this.container);
        }
        /**
        *  顯示數字
        * @param digits 數字
        * @param direction 對齊方式 left ,right ,center
        */


        display(digits, direction) {
          if (direction === void 0) {
            direction = "left";
          }

          this._txt = digits;

          if (typeof digits == "string") {
            digits = parseFloat(digits);
          }

          this.floatNumIndex = Number.MAX_VALUE;
          this.removeAllTexts();
          this.arrDigit = [];
          this.direction = direction;
          var arr;

          if (this._useCommand) {
            arr = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).addCommas(digits.toString()).split("");
          } else {
            arr = digits.toString().split(""); //數字轉array
          }

          var sp;
          var spNode;
          var uiTransformComponent;
          var ogSize; //let ogSize:Rect;

          var length = arr.length;

          for (var i = 0; i < length; i++) {
            var index = arr[i];

            if (arr[i] == ".") {
              this.floatNumIndex = i;
              spNode = new Node();
              spNode.layer = this._diplayLayer;
              sp = spNode.addComponent(Sprite);
              uiTransformComponent = spNode.addComponent(UITransform);
              sp.trim = false;
              sp.sizeMode = Sprite.SizeMode.RAW;
              sp.spriteFrame = this._textures[this._pointIndex];
              ogSize = sp.spriteFrame.originalSize;
              uiTransformComponent.contentSize = new Size(ogSize.width, ogSize.height);
            } else if (arr[i] == ",") {
              spNode = new Node();
              spNode.layer = this._diplayLayer;
              sp = spNode.addComponent(Sprite);
              uiTransformComponent = spNode.addComponent(UITransform);
              sp.trim = false;
              sp.sizeMode = Sprite.SizeMode.RAW;
              sp.spriteFrame = this._textures[Digits.commandIndex];
              ogSize = sp.spriteFrame.originalSize;
              uiTransformComponent.contentSize = new Size(ogSize.width, ogSize.height);
            } else {
              spNode = new Node();
              spNode.layer = this._diplayLayer;
              sp = spNode.addComponent(Sprite);
              uiTransformComponent = spNode.addComponent(UITransform);
              sp.trim = false;
              sp.sizeMode = Sprite.SizeMode.RAW;
              sp.spriteFrame = this._textures[index]; //--媽的超雷!他的裁切的rect尺寸跟originalSize對不起來
              //ogSize=sp.spriteFrame.rect;

              ogSize = sp.spriteFrame.originalSize;
              uiTransformComponent.contentSize = new Size(ogSize.width, ogSize.height); //log('check_DigitsData',arr[i],test,sp,this._textures[index]);
              //log('check_DigitsData',arr[i],sp,this._textures[index]);
            }

            if (i > this.floatNumIndex) {
              spNode.setScale(v3(this._floatScale, this._floatScale, this._floatScale));
            } else {
              spNode.setScale(v3(this._digitScale, this._digitScale, this._digitScale));
            }

            this.arrDigit.push(spNode);
          }

          this.layout(arr);
        }

        displayWithStr(digits, direction) {
          if (direction === void 0) {
            direction = "left";
          }

          log('check_displayWithStr', digits);
          this._txt = digits;
          this.floatNumIndex = Number.MAX_VALUE;
          this.removeAllTexts();
          this.arrDigit = [];
          this.direction = direction;
          var arr;

          if (this._useCommand) {
            arr = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).addCommas(digits.toString()).split("");
          } else {
            arr = digits.toString().split(""); //數字轉array
          }

          var sp;
          var spNode;
          var uiTransformComponent; //let ogSize:Size;

          var ogSize;
          var length = arr.length;

          for (var i = 0; i < length; i++) {
            var index = arr[i];
            var isSymbol = false;

            if (this._symbolStr != null) {
              for (var j = 0; j < this._symbolStr.length; j++) {
                if (arr[i] == this._symbolStr[j]) {
                  spNode = new Node();
                  spNode.layer = this._diplayLayer;
                  sp = spNode.addComponent(Sprite);
                  uiTransformComponent = spNode.addComponent(UITransform);
                  sp.trim = false;
                  sp.sizeMode = Sprite.SizeMode.RAW;
                  sp.spriteFrame = this._textures[this._symbolIndex[j]];
                  ogSize = sp.spriteFrame.originalSize;
                  uiTransformComponent.contentSize = new Size(ogSize.width, ogSize.height);
                  isSymbol = true;
                }
              }
            }

            if (arr[i] == ".") {
              this.floatNumIndex = i;
              spNode = new Node();
              spNode.layer = this._diplayLayer;
              sp = spNode.addComponent(Sprite);
              uiTransformComponent = spNode.addComponent(UITransform);
              sp.trim = false;
              sp.sizeMode = Sprite.SizeMode.RAW;
              sp.spriteFrame = this._textures[this._pointIndex];
              ogSize = sp.spriteFrame.originalSize;
              uiTransformComponent.contentSize = new Size(ogSize.width, ogSize.height);
            } else if (arr[i] == ",") {
              spNode = new Node();
              spNode.layer = this._diplayLayer;
              sp = spNode.addComponent(Sprite);
              uiTransformComponent = spNode.addComponent(UITransform);
              sp.trim = false;
              sp.sizeMode = Sprite.SizeMode.RAW;
              sp.spriteFrame = this._textures[Digits.commandIndex];
              ogSize = sp.spriteFrame.originalSize;
              uiTransformComponent.contentSize = new Size(ogSize.width, ogSize.height);
            } else if (!isSymbol) {
              spNode = new Node();
              spNode.layer = this._diplayLayer;
              sp = spNode.addComponent(Sprite);
              sp.type = Sprite.Type.SIMPLE;
              uiTransformComponent = spNode.addComponent(UITransform);
              sp.trim = false; //sp.sizeMode=Sprite.SizeMode.CUSTOM;

              sp.sizeMode = Sprite.SizeMode.RAW; //this._textures[index].reset();
              //log('check_DigitsData',arr[i],sp,this._textures,index);

              sp.spriteFrame = this._textures[index];
              ogSize = sp.spriteFrame.originalSize; //ogSize=sp.spriteFrame.rect;

              uiTransformComponent.contentSize = new Size(ogSize.width, ogSize.height);
            }

            if (i > this.floatNumIndex) {
              spNode.setScale(v3(this._floatScale, this._floatScale, this._floatScale));
            } else {
              spNode.setScale(v3(this._digitScale, this._digitScale, this._digitScale));
            }

            this.arrDigit.push(spNode);
          }

          this.layout(arr);
        }

        layout(digitsStr) {
          this._layout.spacingX = this._padding;
          var sp;
          var length = this.arrDigit.length;

          for (var i = 0; i < length; i++) {
            sp = this.arrDigit[i];
            this.node.addChild(sp);
          } //this._layout.type=1;


          var allTextSize = this.updateTextsSize();
          var distance = 0;

          this._layout.updateLayout(); //this.checkSpriteFrameSize();
          //return;


          if (this.direction == "center") {
            distance = (this._uiTransform.contentSize.width - allTextSize.w) / 2;
          } else if (this.direction == "right") {
            distance = this._uiTransform.contentSize.width - allTextSize.w;
          } else {
            //--靠左
            distance = 0;
          }

          this._layout.paddingLeft = distance;
          /*
                if(this.direction == "center")
                {
                     this.container.x = -this.container.width / 2;
                 }else if(this.direction == "right"){
                     this.container.x = -this.container.width;
                 }else{
                     this.container.x = 0;
                }*/
          //this.container.y = -(this._imgTopGap + this.container.height - this._imgBotGap) / 2; //-this.container.height / 2;
        }

        checkSpriteFrameSize() {
          for (var i = 0; i < this.arrDigit.length; i++) {
            log('afterUpdateNode', this.arrDigit[i].getComponent(Sprite).spriteFrame);
          }
        }

        removeAllTexts() {
          var sprite;
          var targetNode;

          while (this.node.children.length > 0) {
            targetNode = this.node.children[0];
            sprite = targetNode.getComponent(Sprite); //this.node.removeComponent(sprite);

            this.node.removeChild(targetNode);
            sprite.destroy();
          }
        }

        updateTextsSize() {
          var children = this.node.children;
          var size;
          var totalwidth = 0;
          var maxHeight = 0;
          var nodeContantSize = {
            w: 0,
            h: 0
          };

          for (var i = 0; i < children.length; i++) {
            //--照順序取完
            size = children[i].getComponent(UITransform).contentSize;
            totalwidth += size.width;
            maxHeight = Math.max(maxHeight, size.height);
          }

          nodeContantSize.w = totalwidth + (children.length - 1) * this._padding;
          nodeContantSize.h = maxHeight;
          return nodeContantSize;
        }

      });

      Digits.commandIndex = 10;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=81278c5b944e2277617f724540cb047a20c39d36.js.map
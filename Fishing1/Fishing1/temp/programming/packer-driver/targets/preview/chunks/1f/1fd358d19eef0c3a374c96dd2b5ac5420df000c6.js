System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Node, Sprite, v3, UITransform, Size, v2, Layers, GameUtils, CocoDigits, _crd;

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../utils/GameUtils", _context.meta, extras);
  }

  _export("CocoDigits", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      v3 = _cc.v3;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
      v2 = _cc.v2;
      Layers = _cc.Layers;
    }, function (_unresolved_2) {
      GameUtils = _unresolved_2.GameUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7763aji9ztK8Y7Z7rJgti5D", "CocoDigits", undefined);
      /**
       * Created by EricHuang on 2023/8/9.
       */


      __checkObsolete__(['Component', 'Node', 'SpriteFrame', 'Layout', 'Sprite', 'v3', 'UITransform', 'Vec3', 'Size', 'v2']);

      __checkObsolete__(['Layers']);

      __checkObsolete__(['Rect']);

      /**
      * 
      * 數字工具 ,  預設texture 10 是逗號 11 是小數點
      * @export
      * @class Digits
      * @extends {Sprite}
      */
      _export("CocoDigits", CocoDigits = class CocoDigits extends Component {
        /** Marcus 2019/9/26
         * 設定上下數字與圖片高度差
         * @param value		 
         */
        set topGap(value) {
          this._imgTopGap = value;
        }

        set bottomGap(value) {
          this._imgBotGap = value;
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
         * 設定特殊字串 , 請以array方式塞入 
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
         *  設定數字間距
         * @param num
         */


        set padding(num) {
          this._padding = num;
          this._signPadding = num;
        }

        set symboPadding(value) {
          this._symboPadding = value;
        }
        /**
         * 設定符號間距 請在 數字間距後設定 否則會以數字間距為預設
         * @param value
         */


        set signPadding(value) {
          this._signPadding = value;
        }

        set textures(value) {
          this._textures = value; //console.log('check_digits_of_textures_afterSort',this._textures);
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
          //小數點的texture index
          this._uiTransform = void 0;
          this._padding = 0;
          //數字間距
          this._digitScale = 1;
          //一般數字的縮放值 
          this._floatScale = .5;
          //小數點的縮放值
          this._signPadding = 0;
          //符號間距 ,
          this._useCommand = false;
          //是否使用逗號
          this._textures = void 0;
          //Texture
          this.arrDigit = void 0;
          //全部數字的array
          this.direction = void 0;
          //對齊方式
          this.container = void 0;
          //數字容器
          this._symbolStr = void 0;
          //特殊字的字串(請以array方式塞入例如['-' , 'x' ])
          this._symbolIndex = void 0;
          //特殊字的相對應index,順序請與_symbolStr相同
          this._symboPadding = void 0;
          this._imgTopGap = 0;
          // 圖片範圍與圖內數字的上間距
          this._imgBotGap = 0;
          // 圖片範圍與圖內數字的下間距
          this.floatNumIndex = Number.MAX_VALUE;
          this._textures = textures;
        }

        onLoad() {
          if (!this.node.getComponent(UITransform)) {
            this._uiTransform = this.node.addComponent(UITransform);
          } else {
            this._uiTransform = this.node.getComponent(UITransform);
          }

          this.container = new Node('CocosDigits');
          this.container.addComponent(UITransform);
        } //--要再修 20231008


        removeAllTexts() {
          var sprite;
          var targetNode;

          while (this.container.children.length > 0) {
            targetNode = this.container.children[0];
            sprite = targetNode.getComponent(Sprite); //this.node.removeComponent(sprite);

            this.container.removeChild(targetNode);
            sprite.destroy();
          }

          this.node.removeChild(this.container);
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

          if (typeof digits == "string") {
            digits = parseFloat(digits);
          }

          this.floatNumIndex = Number.MAX_VALUE;
          this.removeAllTexts();
          this.arrDigit = new Array();
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
          var length = arr.length;
          var spNode;
          var uiTransformComponent;
          var ogSize;

          for (var i = 0; i < length; i++) {
            var index = arr[i];

            if (arr[i] == ".") {
              this.floatNumIndex = i;
              this.floatNumIndex = i;
              spNode = new Node();
              spNode.layer = Layers.Enum.UI_2D;
              sp = spNode.addComponent(Sprite);
              uiTransformComponent = spNode.addComponent(UITransform);
              sp.sizeMode = Sprite.SizeMode.RAW;
              sp.spriteFrame = this._textures[CocoDigits.pointIndex];
              ogSize = sp.spriteFrame.originalSize;
              uiTransformComponent.contentSize = new Size(ogSize.width, ogSize.height);
            } else if (arr[i] == ",") {
              spNode = new Node();
              spNode.layer = Layers.Enum.UI_2D;
              sp = spNode.addComponent(Sprite);
              uiTransformComponent = spNode.addComponent(UITransform);
              sp.sizeMode = Sprite.SizeMode.RAW;
              sp.spriteFrame = this._textures[CocoDigits.commandIndex];
              ogSize = sp.spriteFrame.originalSize;
              uiTransformComponent.contentSize = new Size(ogSize.width, ogSize.height);
            } else {
              spNode = new Node();
              spNode.layer = Layers.Enum.UI_2D;
              sp = spNode.addComponent(Sprite);
              uiTransformComponent = spNode.addComponent(UITransform);
              sp.sizeMode = Sprite.SizeMode.RAW;
              sp.spriteFrame = this._textures[index];
              ogSize = sp.spriteFrame.originalSize;
              uiTransformComponent.contentSize = new Size(ogSize.width, ogSize.height);
            }

            if (i > this.floatNumIndex) {
              //sp.scale.set(this._floatScale, this._floatScale);
              spNode.setScale(v3(this._floatScale, this._floatScale));
            } else {
              //sp.scale.set(this._digitScale, this._digitScale);
              spNode.setScale(v3(this._digitScale, this._digitScale));
            }

            this.arrDigit.push(spNode);
          }

          this.layout(arr);
        }

        displayWithStr(digits, direction) {
          if (direction === void 0) {
            direction = "left";
          }

          this.floatNumIndex = Number.MAX_VALUE;
          /*
          var des = this.container.removeChildren();
          for (const child of des) {
              child.destroy();
          } */

          this.removeAllTexts();
          this.arrDigit = new Array();
          this.direction = direction;
          var arr;

          if (this._useCommand) {
            arr = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).addCommas(digits.toString()).split("");
          } else {
            arr = digits.toString().split(""); //數字轉array
          }

          console.log('check_displayWithStr', digits, arr);
          var length = arr.length;
          var spNode;
          var uiTransformComponent;
          var ogSize;
          var sp;

          for (var i = 0; i < length; i++) {
            var index = arr[i];
            var isSymbol = false;

            if (this._symbolStr != null) {
              for (var j = 0; j < this._symbolStr.length; j++) {
                if (arr[i] == this._symbolStr[j]) {
                  //sp = new Sprite(this.textures[this._symbolIndex[j]]);
                  //isSymbol = true;
                  spNode = new Node();
                  spNode.layer = Layers.Enum.UI_2D;
                  sp = spNode.addComponent(Sprite);
                  uiTransformComponent = spNode.addComponent(UITransform); //uiTransformComponent.anchorX=uiTransformComponent.anchorY=0.5;

                  sp.sizeMode = Sprite.SizeMode.RAW;
                  sp.trim = false;
                  sp.spriteFrame = this._textures[this._symbolIndex[j]];
                  ogSize = sp.spriteFrame.originalSize;
                  uiTransformComponent.contentSize = new Size(ogSize.width, ogSize.height);
                  isSymbol = true;
                }
              }
            }

            if (arr[i] == ".") {
              this.floatNumIndex = i; //sp = new Sprite(this.textures[Tools.Digits.pointIndex]);

              spNode = new Node();
              spNode.layer = Layers.Enum.UI_2D;
              sp = spNode.addComponent(Sprite);
              uiTransformComponent = spNode.addComponent(UITransform); //uiTransformComponent.anchorX=uiTransformComponent.anchorY=0.5;

              sp.sizeMode = Sprite.SizeMode.RAW;
              sp.trim = false;
              sp.spriteFrame = this._textures[CocoDigits.pointIndex];
              ogSize = sp.spriteFrame.originalSize;
              uiTransformComponent.contentSize = new Size(ogSize.width, ogSize.height);
            } else if (arr[i] == ",") {
              //sp = new Sprite(this.textures[Tools.Digits.commandIndex]);
              spNode = new Node();
              spNode.layer = Layers.Enum.UI_2D;
              sp = spNode.addComponent(Sprite);
              uiTransformComponent = spNode.addComponent(UITransform); //uiTransformComponent.anchorX=uiTransformComponent.anchorY=0.5;

              sp.trim = false;
              sp.sizeMode = Sprite.SizeMode.RAW;
              sp.spriteFrame = this._textures[CocoDigits.commandIndex];
              ogSize = sp.spriteFrame.originalSize;
              uiTransformComponent.contentSize = new Size(ogSize.width, ogSize.height);
            } else if (!isSymbol) {
              //sp = new Sprite(this.textures[index]);
              //sp = new Sprite(this.textures[index]);
              spNode = new Node();
              spNode.layer = Layers.Enum.UI_2D;
              sp = spNode.addComponent(Sprite);
              uiTransformComponent = spNode.addComponent(UITransform); //uiTransformComponent.anchorX=uiTransformComponent.anchorY=0.5;

              sp.sizeMode = Sprite.SizeMode.RAW;
              sp.trim = false;
              sp.spriteFrame = this._textures[index];
              ogSize = sp.spriteFrame.originalSize;
              uiTransformComponent.contentSize = new Size(ogSize.width, ogSize.height);
            }

            var testSizecheck = spNode.getComponent(UITransform).contentSize;
            var testSP = spNode.getComponent(Sprite).spriteFrame.originalSize;

            if (i > this.floatNumIndex) {
              //sp.scale.set(this._floatScale, this._floatScale);
              // 处理小数点后的字符
              console.log('check_scale_notNumber_' + '\n' + arr[i] + '\n' + '_testSizecheck_' + '\n' + testSizecheck.width + '\n' + '_testSP_' + '\n' + testSP);
              spNode.setScale(v3(this._floatScale, this._floatScale, this._floatScale));
            } else {
              //sp.scale.set(this._digitScale, this._digitScale);
              // 处理小数点前的字
              console.log('check_scale_number_' + '\n' + arr[i] + '\n' + '_testSizecheck_' + '\n' + testSizecheck.width + '\n' + '_testSP_' + '\n' + testSP); //spNode.setScale(v3(this._digitScale,this._digitScale,this._digitScale));
            } //this.arrDigit.push(sp);


            this.arrDigit.push(spNode);
          }

          this.layout(arr);
        }

        layout(digitsStr) {
          var sp;
          var length = this.arrDigit.length;
          var nx = 0;
          var ny = 0;
          var size;
          var containerWidth = 0;
          console.log('setlayout', digitsStr);

          for (var i = 0; i < length; i++) {
            sp = this.arrDigit[i];
            var test = this.container.getComponent(UITransform).contentSize;
            console.log('test_container_width', test.width);

            if (i != 0) {
              if (digitsStr[i] == "." || digitsStr[i] == "," || digitsStr[i - 1] == "." || digitsStr[i - 1] == ",") {
                size = sp.getComponent(UITransform).contentSize; //nx=size.width + this._signPadding;

                nx = containerWidth + this._signPadding;
                containerWidth += size.width;
              } else {
                var nowPadding = this._padding;

                if (this._symbolStr != null && this._symbolStr.length != 0) {
                  for (var j = 0; j < this._symbolStr.length; j++) {
                    if (digitsStr[i] == this._symbolStr[j] || digitsStr[i - 1] == this._symbolStr[j]) {
                      if (this._symboPadding && this._symboPadding[j] != null) {
                        nowPadding = this._symboPadding[j];
                      } else {
                        nowPadding = this._signPadding;
                      }

                      break;
                    }
                  }
                }

                nx = containerWidth + nowPadding;
                size = sp.getComponent(UITransform).contentSize;
                containerWidth += size.width; //sp.x = this.container.width + nowPadding;
              }

              if (i > this.floatNumIndex) {
                // Marcus 2019/9/26 美術出的圖常常沒至底，導致數字會無法對齊，故修改配合
                // sp.y += (this.arrDigit[0].height - this._imgBotGap) * (1 - this._floatScale); //this.arrDigit[0].height - sp.height;
                var firstHiget = this.arrDigit[0].getComponent(UITransform).contentSize.height;
                var spHeight = sp.getComponent(UITransform).contentSize.height;
                ny = firstHiget - spHeight - this._imgBotGap * (1 - this._floatScale); //sp.y = this.arrDigit[0].height - sp.height - this._imgBotGap *(1-this._floatScale)
              }
            } else {
              size = sp.getComponent(UITransform).contentSize;
              containerWidth += size.width;
            }

            this.container.addChild(sp);
            sp.setPosition(v3(nx, ny));
          }

          this.container.getComponent(UITransform).anchorPoint = v2(0.5, 0.5);
          var parentSize = this.node.getComponent(UITransform).contentSize;
          var containerSize = this.container.getComponent(UITransform).contentSize;
          var containerAnchor = this.container.getComponent(UITransform).anchorPoint;
          var parentAnchor = this.node.getComponent(UITransform).anchorPoint;

          if (this.direction == "center") {
            // 计算子节点相对于父节点的位置
            var posX = containerSize.width * containerAnchor.x - parentSize.width * parentAnchor.x;
            var posY = containerSize.height * containerAnchor.y - parentSize.height * parentAnchor.y; // 设置子节点的位置

            this.container.setPosition(posX, this.container.position.y); // 将子节点添加到父节点

            this.node.addChild(this.container);
          } else if (this.direction == "right") {
            //distance=this._uiTransform.contentSize.width-allTextSize.w;
            //--靠右 bug
            var _posX = containerSize.width * containerAnchor.x - parentSize.width * parentAnchor.x;

            var _posY = containerSize.height * containerAnchor.y - parentSize.height * parentAnchor.y; // 设置子节点的位置


            this.container.setPosition(_posX, _posY); // 将子节点添加到父节点

            this.node.addChild(this.container);
          } else {
            //--靠左 bug
            //distance=0;
            var _posX2 = -(parentSize.width * parentAnchor.x) + containerSize.width * containerAnchor.x;

            var _posY2 = containerSize.height * containerAnchor.y - parentSize.height * parentAnchor.y; // 设置子节点的位置


            this.container.setPosition(_posX2, _posY2); // 将子节点添加到父节点

            this.node.addChild(this.container);
          } // Marcus 2019/9/26 美術出的圖常常沒至底，導致數字中心點偏移，故修改配合
          //this.container.y = -(this._imgTopGap + this.container.height - this._imgBotGap) / 2; //-this.container.height / 2;

        }

      });

      CocoDigits.commandIndex = 10;
      //逗點的texture index
      CocoDigits.pointIndex = 11;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1fd358d19eef0c3a374c96dd2b5ac5420df000c6.js.map
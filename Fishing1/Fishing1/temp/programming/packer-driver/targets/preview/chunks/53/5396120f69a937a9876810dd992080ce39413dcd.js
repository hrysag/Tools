System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LoadingResManager, GameUtils, CocosGameSetting, find, Material, ParticleSystem2D, UIOpacity, UITransform, v4, v3, Node, utils, Mesh, MeshRenderer, instantiate, CameraComponent, color, log, TweenMaxCocosPlugin, BgAniEffect, _crd;

  function _reportPossibleCrUseOfLoadingResManager(extras) {
    _reporterNs.report("LoadingResManager", "../../../../framework/logic/loading/LoadingResManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../../../framework/utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOffrustumInfoData(extras) {
    _reporterNs.report("frustumInfoData", "../../../../framework/utils/GameUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCocosGameSetting(extras) {
    _reporterNs.report("CocosGameSetting", "../../../../framework/utils/CocosGameSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenMaxCocosPlugin(extras) {
    _reporterNs.report("TweenMaxCocosPlugin", "../../../../framework/utils/TweenMaxPlugin", _context.meta, extras);
  }

  _export("BgAniEffect", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      Material = _cc.Material;
      ParticleSystem2D = _cc.ParticleSystem2D;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      v4 = _cc.v4;
      v3 = _cc.v3;
      Node = _cc.Node;
      utils = _cc.utils;
      Mesh = _cc.Mesh;
      MeshRenderer = _cc.MeshRenderer;
      instantiate = _cc.instantiate;
      CameraComponent = _cc.CameraComponent;
      color = _cc.color;
      log = _cc.log;
    }, function (_unresolved_2) {
      LoadingResManager = _unresolved_2.LoadingResManager;
    }, function (_unresolved_3) {
      GameUtils = _unresolved_3.GameUtils;
    }, function (_unresolved_4) {
      CocosGameSetting = _unresolved_4.CocosGameSetting;
    }, function (_unresolved_5) {
      TweenMaxCocosPlugin = _unresolved_5.TweenMaxCocosPlugin;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d001reLQVJDZ5Im+LmDsCN", "BgAniEffect", undefined);
      /**
       * Created by EricHuang on 2023/10/25.
       */
      //-https://docs.cocos.com/creator/3.0/manual/zh/material-system/overview.html
      //-https://docs.cocos.com/creator/manual/zh/material-system/material-script.html
      //-https://forum.cocos.org/t/topic/124637
      //-https://forum.cocos.org/search?q=%40boyue%20%23Creator
      //-https://forum.cocos.org/t/plane/94843/6


      __checkObsolete__(['find', 'Material', 'ParticleSystem2D', 'UIOpacity', 'UITransform', 'v4', 'Vec4']);

      __checkObsolete__(['Vec3']);

      __checkObsolete__(['v3']);

      __checkObsolete__(['Scene']);

      __checkObsolete__(['SpriteFrame']);

      __checkObsolete__(['Texture2D']);

      __checkObsolete__(['Node']);

      __checkObsolete__(['ModelComponent']);

      __checkObsolete__(['utils']);

      __checkObsolete__(['primitives']);

      __checkObsolete__(['Mesh']);

      __checkObsolete__(['MeshRenderer']);

      __checkObsolete__(['instantiate']);

      __checkObsolete__(['CameraComponent']);

      __checkObsolete__(['gfx']);

      __checkObsolete__(['ImageAsset']);

      __checkObsolete__(['Color', 'color']);

      __checkObsolete__(['log']);

      _export("BgAniEffect", BgAniEffect = class BgAniEffect {
        //--背景都一樣的大小
        //private _darkMaterial:Material;//--背景變黑用的material
        //private _whiteMaterial:Material//--背景變白用的material
        constructor() {
          var _mesh$struct, _mesh$struct2;

          this._container3DScene = void 0;
          this._container = void 0;
          //--wave用的
          this._aryImgBg = void 0;
          this._nowIndex = void 0;
          this._motionTime = void 0;
          //--轉場用的(time=0,直接換)
          this._prevNodeBg = void 0;
          this._nowNodeBg = void 0;
          this._frustum = void 0;
          this._allWaveNode = void 0;
          this._particle2d = void 0;
          this._sceneCameraNode = void 0;
          this._canvasCameraNode = void 0;
          this._bgWH = void 0;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          this._container3DScene = args[0].other.scene;
          this._sceneCameraNode = this._container3DScene.getChildByName(args[0].other.sceneCameraNode);
          this._canvasCameraNode = find(args[0].other.canvasCameraNode);
          this._container = args[0].container;
          this._motionTime = args[0].other.motionTime;
          this._nowIndex = 0;
          this._nowNodeBg = null;
          this._prevNodeBg = null;
          this._aryImgBg = [];
          this._frustum = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).getFrustumData();
          /*
          //---背景變黑的material
          let darkMaterial=new Material();
           darkMaterial.name='black_material';
            darkMaterial.initialize(
          {
              effectName:'builtin-unlit',
              //--這個就是pass裡面的基礎定義選項
              defines:
              {
                  USE_COLOR:true
                  //USE_VERTEX_COLOR:true
              }
           });
           darkMaterial.setProperty('mainColor',Color.BLACK);
           //---背景變白的material
          this._whiteMaterial=new Material();
           this._whiteMaterial.name='white_material';
           this._whiteMaterial.initialize(
          {
              effectName:'builtin-unlit',
              //--這個就是pass裡面的基礎定義選項
              defines:
              {
                  USE_COLOR:true
                  //-USE_VERTEX_COLOR
              }
           });
            this._whiteMaterial.setProperty('mainColor',Color.WHITE);
           */

          var materialsInfo = args[0].other.spriteFrameIds;
          var len = materialsInfo.length;

          for (var i = 0; i < len; i++) {
            var material = new Material(); //--effectName=屬性檢查器裡面的Effect名字
            //--講白了就是你自己定義屬性檢查器裡面的初始資料
            //--細節看engine裡面的 IMaterialInfo定義builtin-unlit
            //-https://docs.cocos.com/creator/manual/zh/material-system/material-script.html

            material.initialize({
              effectName: 'builtin-unlit',
              //--不受光
              //technique:1,//--for test transparent--這樣改變rgba的alpha值可獲得半透明
              technique: 0,
              //--這個就是pass裡面的基礎定義選項
              defines: {
                USE_TEXTURE: true,
                USE_COLOR: true //USE_VERTEX_COLOR:true

              }
            }); //--上述的defines資訊詳見這裡(預設是全部關閉=0)
            //--https://docs.cocos.com/creator/manual/zh/shader/macros.html
            //let spriteFrame:SpriteFrame=LoadingResManager.getInstance().getSpriteFrame(materialsInfo[i]);
            //let imageAsset:ImageAsset=LoadingResManager.getInstance().getImageAsset(materialsInfo[i]);

            var texture = (_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
              error: Error()
            }), LoadingResManager) : LoadingResManager).getInstance().getTexture2d(materialsInfo[i]); //log('check_bgTexture',texture);
            //let texture:Texture2D=new Texture2D();
            //texture.image=(<Texture2D>spriteFrame.texture).image;
            //texture.image=imageAsset;
            //--開始塞GL資訊

            /**
             * setting sahder code 中的< uniform >變數
             * 該uniform類型的變數是已經被定義好的
             * mainTexture,color,texture,uvTransform,time,cameraPosition
             * modelMatrix,viewMatrix,projectionMatrix,normalMatrix
             * lightDirection,lightColor.....諸如此類的
             * 但實際還是要看你使用的effect他裡面的shader code定義的變數
             */

            material.setProperty('mainTexture', texture); //material.setProperty('mainColor',color(0,0,0,255));
            //--透明度測試
            //material.setProperty('mainColor',color(255,255,255,50));
            //material.setProperty('tilingOffset',new Vec4(1,-1,0,0));//--UV與偏移座標--這樣寫webgl2.0會拉扯開

            var planeNode = new Node(materialsInfo[i]);
            var modelComponent = planeNode.addComponent(MeshRenderer); //--內建建立平面(內建是躺在Y周上垂直X軸的樣式)
            //let mesh=utils.MeshUtils.createMesh(primitives.plane({width:CocosGameSetting.Game_Width,length:CocosGameSetting.Game_Height,widthSegments:1,lengthSegments:1}));
            //--逆時針採點-1.左下 2.右下 3.右上 4.左上(這是cocos 採點的順序)
            //collider worldpoint= [new Vec2(-1, -1), new Vec2(1, -1), new Vec2(1, 1), new Vec2(-1, 1)];

            var vertices = [-(_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
              error: Error()
            }), CocosGameSetting) : CocosGameSetting).Game_Width / 2, -(_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
              error: Error()
            }), CocosGameSetting) : CocosGameSetting).Game_Height / 2, 0, // 左下 (v1)
            (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
              error: Error()
            }), CocosGameSetting) : CocosGameSetting).Game_Width / 2, -(_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
              error: Error()
            }), CocosGameSetting) : CocosGameSetting).Game_Height / 2, 0, // 右下 (v2)
            (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
              error: Error()
            }), CocosGameSetting) : CocosGameSetting).Game_Width / 2, (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
              error: Error()
            }), CocosGameSetting) : CocosGameSetting).Game_Height / 2, 0, // 右上 (v3)
            -(_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
              error: Error()
            }), CocosGameSetting) : CocosGameSetting).Game_Width / 2, (_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
              error: Error()
            }), CocosGameSetting) : CocosGameSetting).Game_Height / 2, 0 // 左上 (v4)
            ];
            var colorData = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]; //--半透明測試

            var normals = void 0;
            /*
            let uv = [
                0, 0, //  v1 的 UV
                0, 1, //  v2 的 UV
                1, 1, //  v3 的 UV
                1, 0  //  v4 的 UV
            ];*/

            /**
             *  左下角：(0, 0)
                右下角：(1, 0)
                右上角：(1, 1)
                左上角：(0, 1)
                 let uv = [
                0, 0, //  v1 的 UV
                1, 0, //  v2 的 UV
                1, 1, //  v3 的 UV
                0, 1  //  v4 的 UV
            ];--上下左右顛倒
             */

            var uv = [0, 1, //  v1 的 UV
            1, 1, //  v2 的 UV
            1, 0, //  v3 的 UV
            0, 0 //  v4 的 UV
            ];
            var indices = [0, 1, 2, // 三角形1的頂點index
            0, 2, 3 // 三角形2的頂點index
            ];
            var geometryData = {
              positions: vertices,
              colors: colorData,
              indices: indices,
              normals: normals,
              uvs: uv
            };

            var _mesh = new Mesh();

            utils.MeshUtils.createMesh(geometryData, _mesh, {
              calculateBounds: true
            });
            modelComponent.mesh = _mesh;
            modelComponent.material = material;

            this._container3DScene.addChild(planeNode); //planeNode.active=false;//--for test 20241009--
            //-x軸轉90度
            //planeNode.setRotationFromEuler(90,0,0);
            //planeNode.setRotationFromEuler(0,0,180);


            planeNode.setPosition(v3(0, 0, -10000));
            planeNode.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

            this._aryImgBg.push(planeNode);
          } //--背景的大小都一樣才能先存起來?


          var mesh = this._aryImgBg[0].getComponent(MeshRenderer).mesh;

          var max = (_mesh$struct = mesh.struct) == null ? void 0 : _mesh$struct.maxPosition;
          var min = (_mesh$struct2 = mesh.struct) == null ? void 0 : _mesh$struct2.minPosition; //--抽出來的點{x: 960, y: 0, z: 540}
          //--ps x軸有被旋轉過90

          var w = 0;
          var h = 0;

          if (max && min) {
            w = Math.abs(max.x - min.x);
            h = Math.abs(max.z - min.z);
          }

          this._bgWH = {
            w: w,
            h: h
          };
          log('check_meshRange', this._bgWH);
          this._allWaveNode = instantiate((_crd && LoadingResManager === void 0 ? (_reportPossibleCrUseOfLoadingResManager({
            error: Error()
          }), LoadingResManager) : LoadingResManager).getInstance().getPrefab(args[0].other.prefabId));

          this._allWaveNode.addComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          this._allWaveNode.addComponent(UIOpacity); //log('check_BgAniEffect',args[0],this._aryImgBg,this._allWaveNode);


          this._container.addChild(this._allWaveNode);

          this._allWaveNode.setPosition(v3((_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
            error: Error()
          }), CocosGameSetting) : CocosGameSetting).Game_Width / 2, 0, 0));

          this._particle2d = this._allWaveNode.getChildByName('bubble').getComponent(ParticleSystem2D);

          this._particle2d.stopSystem();

          this._allWaveNode.active = false;
          this._nowNodeBg = this._aryImgBg[0]; //-AttributeName.ATTR_COLOR
          //let data=testMesh.readAttribute(0,gfx.AttributeName.ATTR_TEX_COORD);
          //--

          /**
           * 這取不到..可能是因為utils.MeshUtils.createMesh 在預設的primitives.plane
           * geometry根本沒有給color..
           * 以下為create mesh要給geometry color的程式內容
           *  if (geometry.colors && geometry.colors.length > 0) {
              attr = null;
              if (geometry.attributes) {
                  for (const att of geometry.attributes) {
                      if (att.name === AttributeName.ATTR_COLOR) {
                          attr = att;
                          break;
                      }
                  }
              }
           * 
           */

          /*
          let testMesh=this._nowNodeBg.getComponent(MeshRenderer).mesh;
          
          let data=testMesh.readAttribute(0,gfx.AttributeName.ATTR_COLOR);
           let techniqueId=this._nowNodeBg.getComponent(MeshRenderer).material.technique;
           let effectAsset=this._nowNodeBg.getComponent(MeshRenderer).material.effectAsset;
           log('testMesh@@',data,testMesh,effectAsset.techniques[techniqueId]);
          */
        }

        getBg() {
          log('check_bgEffect', this._nowNodeBg.position);
          return this._nowNodeBg;
        }

        changeBg() {
          //return;
          var prevIndex = this._nowIndex;
          this._nowIndex++;

          if (this._nowIndex > this._aryImgBg.length - 1) {
            this._nowIndex = 0;
          }

          if (TweenMax.isTweening(this._nowNodeBg.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin))) {
            TweenMax.killTweensOf(this._nowNodeBg.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin));

            this._nowNodeBg.setPosition(v3(0, 0, -5000));
          }

          if (TweenMax.isTweening(this._allWaveNode.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin))) {
            TweenMax.killTweensOf(this._allWaveNode.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
              error: Error()
            }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin));

            this._particle2d.stopSystem();

            this._allWaveNode.active = false;
          } //--改變深度


          this._prevNodeBg = this._aryImgBg[prevIndex];
          this._nowNodeBg = this._aryImgBg[this._nowIndex];

          this._prevNodeBg.setPosition(v3(0, 0, -5000));

          this._nowNodeBg.setPosition(v3(0, 0, -4500)); //this.bgToWhite();


          if (this._motionTime > 0) {
            this.changeMotion();
          }
        }
        /**
         * 20231030--
         * 特殊賠率的爆炸效果(背景黑)
         */


        bgToDarkBlack() {
          //return;
          var modelComponent = this._nowNodeBg.getComponent(MeshRenderer);

          modelComponent.materials[0].setProperty('mainColor', color(0, 0, 0, 255));
          TweenMax.to({}, 0.15, {
            onCompleteParams: [modelComponent],
            onComplete: value => {
              value.materials[0].setProperty('mainColor', color(255, 255, 255, 255));
            }
          });
        }
        /**
        * 20231030--
        * 閃電的爆炸效果(背景白)
        */


        bgToWhite() {
          var modelComponent = this._aryImgBg[this._nowIndex].getComponent(MeshRenderer);

          modelComponent.materials[0].setProperty('colorScaleAndCutoff', v4(100000, 100000, 100000, 100000)); //return;

          TweenMax.to({}, 0.15, {
            onCompleteParams: [modelComponent],
            onComplete: value => {
              //let meshRenderComponent:MeshRenderer=this._aryImgBg[this._nowIndex].getComponent(MeshRenderer);
              value.materials[0].setProperty('colorScaleAndCutoff', v4(1, 1, 1, 1)); //value.material=value.getMaterialInstance(0);
            }
          });
        }

        changeMotion() {
          this._nowNodeBg.setPosition(this._frustum.rightPoint + this._bgWH.w / 2, 0);

          this._allWaveNode.setPosition(v3((_crd && CocosGameSetting === void 0 ? (_reportPossibleCrUseOfCocosGameSetting({
            error: Error()
          }), CocosGameSetting) : CocosGameSetting).Game_Width / 2, 0, 0));

          this._allWaveNode.active = true;
          this._allWaveNode.getComponent(UIOpacity).opacity = 255;

          this._particle2d.resetSystem();

          var twComponent = this._nowNodeBg.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
            error: Error()
          }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin);

          TweenMax.to(twComponent, this._motionTime, {
            x: 0,
            onUpdateParams: [twComponent],
            onUpdate: value => {
              //--3d 2 2d   
              var cameraComponent = this._sceneCameraNode.getComponent(CameraComponent);

              var bgPos = v3(value.node.position.x - this._bgWH.w / 2, value.node.position.y, value.node.position.z); //---world to screen

              var wts = cameraComponent.worldToScreen(bgPos); //--canvas camera cameracomponent

              var canvasCameraComponent = this._canvasCameraNode.getComponent(CameraComponent); //--screen to world


              var wp = canvasCameraComponent.screenToWorld(wts);

              var mpos = this._container.getComponent(UITransform).convertToNodeSpaceAR(wp);

              this._allWaveNode.setPosition(mpos.x, 0);
            },
            onComplete: () => {
              //log('changeMotion_complete');
              this._particle2d.stopSystem();

              TweenMax.to(this._allWaveNode.getComponent(_crd && TweenMaxCocosPlugin === void 0 ? (_reportPossibleCrUseOfTweenMaxCocosPlugin({
                error: Error()
              }), TweenMaxCocosPlugin) : TweenMaxCocosPlugin), .3, {
                opacity: 0,
                onComplete: () => {
                  this._allWaveNode.active = false;
                }
              });
            }
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5396120f69a937a9876810dd992080ce39413dcd.js.map
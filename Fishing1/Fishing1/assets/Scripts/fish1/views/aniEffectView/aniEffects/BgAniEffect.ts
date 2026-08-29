/**
 * Created by EricHuang on 2023/10/25.
 */

//-https://docs.cocos.com/creator/3.0/manual/zh/material-system/overview.html
//-https://docs.cocos.com/creator/manual/zh/material-system/material-script.html
//-https://forum.cocos.org/t/topic/124637
//-https://forum.cocos.org/search?q=%40boyue%20%23Creator
//-https://forum.cocos.org/t/plane/94843/6

import { LoadingResManager } from "../../../../framework/logic/loading/LoadingResManager";
import {GameUtils,frustumInfoData} from '../../../../framework/utils/GameUtils';
import {CocosGameSetting} from '../../../../framework/utils/CocosGameSetting';
import {find, Material, ParticleSystem2D, UIOpacity, UITransform, v4, Vec4} from 'cc';
import {Vec3} from 'cc';
import {v3} from 'cc';
import {Scene} from 'cc';
import {SpriteFrame} from 'cc';
import {Texture2D} from 'cc';
import {Node} from 'cc';
import {ModelComponent} from 'cc';
import {utils} from 'cc';
import {primitives} from 'cc';
import {Mesh} from 'cc';
import {MeshRenderer} from 'cc';
import {instantiate} from 'cc';
import {CameraComponent} from 'cc';
import {gfx} from 'cc';
import {ImageAsset} from 'cc';
import {Color,color} from 'cc';
import {log} from 'cc';
import { TweenMaxCocosPlugin } from "../../../../framework/utils/TweenMaxPlugin";

export  class BgAniEffect
{
    private _container3DScene:Scene;

    private _container:Node;//--wave用的

    private _aryImgBg:Node[];

    private _nowIndex:number;

    private _motionTime:number;//--轉場用的(time=0,直接換)

    private _prevNodeBg:Node;

    private _nowNodeBg:Node;

    private _frustum:frustumInfoData;

    private _allWaveNode:Node;

    private _particle2d:ParticleSystem2D;

    private _sceneCameraNode:Node;

    private _canvasCameraNode:Node;

    private _bgWH:{w:number,h:number};//--背景都一樣的大小

    //private _darkMaterial:Material;//--背景變黑用的material

    //private _whiteMaterial:Material//--背景變白用的material


    constructor(...args)
    {
        this._container3DScene=args[0].other.scene;

        this._sceneCameraNode=this._container3DScene.getChildByName(args[0].other.sceneCameraNode);

        this._canvasCameraNode=find(args[0].other.canvasCameraNode);

        this._container=args[0].container;

        this._motionTime=args[0].other.motionTime;

        this._nowIndex=0;

        this._nowNodeBg=null;

        this._prevNodeBg=null;

        this._aryImgBg=[];

        this._frustum=GameUtils.getFrustumData();
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
        
        let materialsInfo:string[]=args[0].other.spriteFrameIds;

        let len:number=materialsInfo.length;

        for(let i:number=0;i<len;i++)
        {
            let material:Material=new Material();

            //--effectName=屬性檢查器裡面的Effect名字
            //--講白了就是你自己定義屬性檢查器裡面的初始資料
            //--細節看engine裡面的 IMaterialInfo定義builtin-unlit
            //-https://docs.cocos.com/creator/manual/zh/material-system/material-script.html
            material.initialize(
            {
                effectName:'builtin-unlit',//--不受光
                //technique:1,//--for test transparent--這樣改變rgba的alpha值可獲得半透明
                technique:0,
                //--這個就是pass裡面的基礎定義選項
                defines:
                {
                    USE_TEXTURE:true,

                    USE_COLOR:true

                    //USE_VERTEX_COLOR:true
                    
                }
    
            });
            //--上述的defines資訊詳見這裡(預設是全部關閉=0)
            //--https://docs.cocos.com/creator/manual/zh/shader/macros.html
            

            //let spriteFrame:SpriteFrame=LoadingResManager.getInstance().getSpriteFrame(materialsInfo[i]);
            //let imageAsset:ImageAsset=LoadingResManager.getInstance().getImageAsset(materialsInfo[i]);
            let texture=LoadingResManager.getInstance().getTexture2d(materialsInfo[i]);

            //log('check_bgTexture',texture);
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
            material.setProperty('mainTexture',texture);

            //material.setProperty('mainColor',color(0,0,0,255));
            //--透明度測試
            //material.setProperty('mainColor',color(255,255,255,50));


            //material.setProperty('tilingOffset',new Vec4(1,-1,0,0));//--UV與偏移座標--這樣寫webgl2.0會拉扯開
           

            let planeNode:Node=new Node(materialsInfo[i]);

            let modelComponent:MeshRenderer=planeNode.addComponent(MeshRenderer);

            //--內建建立平面(內建是躺在Y周上垂直X軸的樣式)
            //let mesh=utils.MeshUtils.createMesh(primitives.plane({width:CocosGameSetting.Game_Width,length:CocosGameSetting.Game_Height,widthSegments:1,lengthSegments:1}));
            //--逆時針採點-1.左下 2.右下 3.右上 4.左上(這是cocos 採點的順序)
            //collider worldpoint= [new Vec2(-1, -1), new Vec2(1, -1), new Vec2(1, 1), new Vec2(-1, 1)];
          

            let  vertices = [
                -CocosGameSetting.Game_Width/2, -CocosGameSetting.Game_Height/2, 0,  // 左下 (v1)
                CocosGameSetting.Game_Width/2, -CocosGameSetting.Game_Height/2, 0,   // 右下 (v2)
                CocosGameSetting.Game_Width/2, CocosGameSetting.Game_Height/2, 0,    // 右上 (v3)
                -CocosGameSetting.Game_Width/2, CocosGameSetting.Game_Height/2, 0     // 左上 (v4)
            ];
            
            let colorData=
            [
             
              255,255,255,255,
              255,255,255,255,
              255,255,255,255,
              255,255,255,255
              
            ];
            //--半透明測試

            
            let normals:
            [
                // 頂點法線
                0, 0, 1,   
                0, 0, 1,   
                0, 0, 1,   
                0, 0, 1   
    
            ];

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

            let uv = [
                0, 1, //  v1 的 UV
                1, 1, //  v2 的 UV
                1, 0, //  v3 的 UV
                0, 0  //  v4 的 UV
            ];
            

            let indices = [
                0, 1, 2,  // 三角形1的頂點index
                0, 2, 3,  // 三角形2的頂點index
            ];

            let geometryData:primitives.IGeometry =
            {
                positions:vertices,
                colors:colorData,
                indices:indices,
                normals:normals,
                uvs:uv
            }

            let mesh:Mesh=new Mesh();

            utils.MeshUtils.createMesh(geometryData,mesh,{ calculateBounds: true });

            modelComponent.mesh=mesh;

            modelComponent.material=material;
 

            this._container3DScene.addChild(planeNode);

          
            //planeNode.active=false;//--for test 20241009--
            //-x軸轉90度
            //planeNode.setRotationFromEuler(90,0,0);
            //planeNode.setRotationFromEuler(0,0,180);

            

            planeNode.setPosition(v3(0,0,-10000));

            planeNode.addComponent(TweenMaxCocosPlugin);


            this._aryImgBg.push(planeNode);
        }

        //--背景的大小都一樣才能先存起來?
        let mesh:Mesh=this._aryImgBg[0].getComponent(MeshRenderer).mesh;

        let max=mesh.struct?.maxPosition;

        let min=mesh.struct?.minPosition;
        //--抽出來的點{x: 960, y: 0, z: 540}
        //--ps x軸有被旋轉過90
        let w:number=0;

        let h:number=0;

        if(max && min)
        {
           w=Math.abs(max.x - min.x);

           h=Math.abs(max.z - min.z);
        }

        this._bgWH={w:w,h:h};

        log('check_meshRange',this._bgWH);

        this._allWaveNode=instantiate(LoadingResManager.getInstance().getPrefab(args[0].other.prefabId));
         
        this._allWaveNode.addComponent(TweenMaxCocosPlugin);
        
        this._allWaveNode.addComponent(UIOpacity);

        //log('check_BgAniEffect',args[0],this._aryImgBg,this._allWaveNode);

        this._container.addChild(this._allWaveNode);

        this._allWaveNode.setPosition(v3(CocosGameSetting.Game_Width/2,0,0));
        
        this._particle2d=this._allWaveNode.getChildByName('bubble').getComponent(ParticleSystem2D);
        
        this._particle2d.stopSystem();

        this._allWaveNode.active=false;
        
        this._nowNodeBg=this._aryImgBg[0];

       

        //-AttributeName.ATTR_COLOR
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

    public getBg():Node
    {
        log('check_bgEffect',this._nowNodeBg.position);
        
        return this._nowNodeBg;
    }

    public changeBg():void
    {
        
        //return;

        let prevIndex:number=this._nowIndex;
        
        this._nowIndex++;

        if(this._nowIndex>this._aryImgBg.length-1)
        {
            this._nowIndex=0;
        }

        if(TweenMax.isTweening(this._nowNodeBg.getComponent(TweenMaxCocosPlugin)))
        {
            TweenMax.killTweensOf(this._nowNodeBg.getComponent(TweenMaxCocosPlugin));
            
            this._nowNodeBg.setPosition(v3(0,0,-5000));
        }

        if(TweenMax.isTweening(this._allWaveNode.getComponent(TweenMaxCocosPlugin)))
        {
            TweenMax.killTweensOf(this._allWaveNode.getComponent(TweenMaxCocosPlugin));
            
            this._particle2d.stopSystem();
            
            this._allWaveNode.active=false;
        }

        //--改變深度
        this._prevNodeBg=this._aryImgBg[prevIndex];

        this._nowNodeBg=this._aryImgBg[this._nowIndex];

        this._prevNodeBg.setPosition(v3(0,0,-5000)); 

        this._nowNodeBg.setPosition(v3(0,0,-4500));  

        //this.bgToWhite();

        if(this._motionTime>0)
        {
            this.changeMotion();
        }

    }


    /**
     * 20231030--
     * 特殊賠率的爆炸效果(背景黑)
     */
    public bgToDarkBlack():void
    {
        //return;
        let modelComponent:MeshRenderer=this._nowNodeBg.getComponent(MeshRenderer);

        modelComponent.materials[0].setProperty('mainColor',color(0,0,0,255));
        
        TweenMax.to({},0.15,
        {
            
            onCompleteParams:[modelComponent],

            onComplete:(value)=>
            {
               value.materials[0].setProperty('mainColor',color(255,255,255,255));
            }
        });
        
    }

     /**
     * 20231030--
     * 閃電的爆炸效果(背景白)
     */
    public bgToWhite():void
    {
        
        let modelComponent:MeshRenderer=this._aryImgBg[this._nowIndex].getComponent(MeshRenderer);

        modelComponent.materials[0].setProperty('colorScaleAndCutoff',v4(100000,100000,100000,100000));
        
        //return;
        TweenMax.to({},0.15,
        {
            onCompleteParams:[modelComponent],
            onComplete:(value)=>
            {
                //let meshRenderComponent:MeshRenderer=this._aryImgBg[this._nowIndex].getComponent(MeshRenderer);
                value.materials[0].setProperty('colorScaleAndCutoff',v4(1,1,1,1));
                //value.material=value.getMaterialInstance(0);
            }
        });
        
    }



    private changeMotion():void
    {
        
        this._nowNodeBg.setPosition(this._frustum.rightPoint+(this._bgWH.w/2),0);

        this._allWaveNode.setPosition(v3(CocosGameSetting.Game_Width/2,0,0));
       
        this._allWaveNode.active=true;

        this._allWaveNode.getComponent(UIOpacity).opacity=255;

        this._particle2d.resetSystem();

        let twComponent:TweenMaxCocosPlugin=this._nowNodeBg.getComponent(TweenMaxCocosPlugin);

        TweenMax.to(twComponent,this._motionTime,
        {
            x:0,
            onUpdateParams:[twComponent],
            onUpdate:(value)=>
            {
                
                //--3d 2 2d   
                let cameraComponent=this._sceneCameraNode.getComponent(CameraComponent);
                
                let bgPos:Vec3=v3(value.node.position.x-(this._bgWH.w/2),value.node.position.y,value.node.position.z);

                //---world to screen
                let wts:Vec3=cameraComponent.worldToScreen(bgPos);
                
                //--canvas camera cameracomponent
                let canvasCameraComponent=this._canvasCameraNode.getComponent(CameraComponent);

                //--screen to world
                let wp=canvasCameraComponent.screenToWorld(wts);

                let mpos=this._container.getComponent(UITransform).convertToNodeSpaceAR(wp);

                this._allWaveNode.setPosition(mpos.x,0);
                
            },
            onComplete:()=>
            {
                //log('changeMotion_complete');
                
                this._particle2d.stopSystem(); 

                TweenMax.to(this._allWaveNode.getComponent(TweenMaxCocosPlugin),.3,
                {
                    opacity:0,
                    onComplete:()=>
                    {
                        this._allWaveNode.active=false; 
                    }
                })
               

            }
        });


    }



}

            
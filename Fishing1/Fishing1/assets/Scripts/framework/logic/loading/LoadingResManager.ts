/**
 * Created by EricHuang on 2023/08/21.
 */
import {LoadingManager} from '../../game/loading/LoadingManager';
import {LoadingEvent} from '../../game/events/eventBase';
import {FileConfigLoadingOption} from '../../game/loading/LoadingDefinitions';
import LZMA from '../../../../Libs/lzma/LZMA';
import {AssetManager,assetManager,BufferAsset,ImageAsset,SpriteAtlas,Prefab,SpriteFrame,Texture2D,JsonAsset,AnimationClip, AudioSource, AudioClip} from 'cc';
import {log} from 'cc';

export class LoadingResManager extends LoadingManager
{
    public map: { [key: string]: any };

    
    private _bundleMap:{[key:string]:AssetManager.Bundle}
    
    private static _instance:LoadingResManager;
    
    public static getInstance(): LoadingResManager { return (LoadingResManager._instance) ? LoadingResManager._instance : new LoadingResManager(); }
   
    constructor()
    {
        super();
        if (LoadingResManager._instance != null)
        {
            throw new Error('plz use getInstance()');
        }
        LoadingResManager._instance = this;
        
        this.map = {};
        
        this._bundleMap={};
        
        this._loadingQueue = [];
        
    }

    public getPrefab(id: string): Prefab 
    {
        //log('getPrefab',this.map);
        return this.map[id];
    }

    public getSpriteFrame(id: string): SpriteFrame
    {
        return this.map[id];
    }

    public getTexture2d(id: string): Texture2D
    {
      return this.map[id];
    }

    public getImageAsset(id: string): ImageAsset
    {
      return this.map[id];
    }

    public getJsonData(id: string): JsonAsset
    {
        return this.map[id];
    }

    public getAudio(id:string):AudioClip
    {
        return this.map[id];
    }

    public getAnimationClip(id:string):AnimationClip
    {
        log('checkAssets',assetManager.assets);
        let r:AnimationClip=null;
        assetManager.assets.forEach((assets,key)=>{
        
        if(assets instanceof AnimationClip)
        {
            //log('checkMap_key',key,'contant',assets.name);
            if(assets.name==id)
            {
                r=assets;
            }

        }
        //-C:\Users\ren-yang\Desktop\cocos2Test\Projects\Fishing1\assets\game\animation\2d\fish\fish11Swim.anim
        //-db://assets/GameResources/prefab/fish/fish_01.prefab---挖操,直接在資源管理器裏面右鍵可以直接複製URL位置或是path位置
        //-C:\Users\ren-yang\Desktop\cocos2Test\Projects\Fishing1\assets\GameResources\prefab\fish\fish_01.prefab          
                
        })

        return r;
            
    }

    //--20231020-有載進Atlas就可以透過getSpriteFrame來取得
    public getSpriteFrameFromSpriteAtlas(atlasId:string,frameId:string):SpriteFrame
    {
        let spr:SpriteFrame=null;
        let atlas:SpriteAtlas=this.map[atlasId];
        
        if(atlas)
        {
        spr=atlas.getSpriteFrame(frameId);
        }

        log('getSpriteFrameFromSpriteAtlas',this.map,atlasId,frameId);
        return spr;
    }

    /*----透過getSpriteFrames就可以了
    public getSpriteFramesFromSpriteAtlas(atlasId:string,frameId:string):SpriteFrame[]
    {
        let r:SpriteFrame[]=[];
        let atlas:SpriteAtlas=this.map[atlasId];
        log('getSpriteFramesFromSpriteAtlas',this.map,atlasId,frameId);
        
        return r;
    }*/



    public getSpriteFrames(id:string):SpriteFrame[]
    {
        let r:SpriteFrame[]=[];
        
        assetManager.assets.forEach((assets,key)=>
        {
            
            if(assets instanceof SpriteFrame)
            {
                //log('checkMap_key',key,'contant',assets.name);
                if(assets.name.indexOf(id)!=-1)
                {
                r.push(assets as any as SpriteFrame);
                }
            }  
        })
        
        return r;
        
    }



    /**
    * https://docs.cocos.com/creator/manual/zh/asset/sprite-frame.html
    * boundle載一次就好了,剩下就從裡面解析他的東西,不需要每次拿boundle裡面的東西就要載一次boundle
    */
    public async startLoad():Promise<void>
    {
        log('wtfStartLoading');
        try {
            for (const option of this._loadingQueue) 
            {
              let bundle;
              
              if (option.bundleId) {
                if(this._bundleMap[option.bundleId])
                {
                   
                  bundle=this._bundleMap[option.bundleId];
                 
      
                }else{
                  
                  bundle = await this.loadBundle(option.bundleId);
                  this._bundleMap[option.bundleId]=bundle;
                  log(`Bundle@@@@@@@@ ${option.bundleId} loaded successfully`, bundle);
                }
                
              }
      
              if (option.spriteFrameId) 
              {
                const spriteFrame = await this.loadSpriteFrame(bundle, option.spriteFrameId);
                this.map[option.spriteFrameId] = spriteFrame;
                //log(`SpriteFrame ${option.spriteFrameId} loaded successfully`);
                this.emit(LoadingEvent.ASSETS_IS_UPDATE);
              }
      
              if (option.prefabId) {
                const prefab = await this.loadPrefab(bundle, option.prefabId);
                this.map[option.prefabId] = prefab;
                //log(`Prefab ${option.prefabId} loaded successfully`);
                this.emit(LoadingEvent.ASSETS_IS_UPDATE);
              }
      
              if(option.texture2dId)
              {
                const texture2d = await this.loadTexture(bundle, option.texture2dId);
                this.map[option.texture2dId] = texture2d;
                //log(`texture2d ${option.texture2dId} loaded successfully`);
                this.emit(LoadingEvent.ASSETS_IS_UPDATE);
              }

              if(option.textureImageAssetId)
              {
                const texture2DImageAsset = await this.loadImageAsset(bundle, option.textureImageAssetId);
                this.map[option.textureImageAssetId] = texture2DImageAsset;
                //log(`textureImageAssetId ${option.textureImageAssetId} loaded successfully`,texture2DImageAsset);
                this.emit(LoadingEvent.ASSETS_IS_UPDATE);
              }
      
              if(option.lzmaId)
              {
                 
                  const lzmaBuffer = await this.loadArrayBuffer(bundle,option.lzmaId); // 加载LZMA文件
                  //log('lzmaBuffer',lzmaBuffer);
                  const jsonText = await this.decompressLZMA(lzmaBuffer); // 解LZMA
                  //log('check_jsonText',jsonText);
                  //log(`lzma ${option.lzmaId} loaded successfully`); 
                  this.map[option.lzmaId] = jsonText;
                  this.emit(LoadingEvent.ASSETS_IS_UPDATE);
      
              }
      
              if(option.jsonId)
              {
                  //log('loadtestCheck@',option);
                  //--取2進位資料可以
                  const json = await this.loadJson(bundle,option.jsonId);
                  this.map[option.jsonId] = json;
                  //log(`json ${option.jsonId} loaded successfully`);
                  this.emit(LoadingEvent.ASSETS_IS_UPDATE);
              }
      
      
              if(option.arrayBufferId)
              {
                  //log('loadtestCheck@',option);
                  //--取2進位資料可以
                  const buffer = await this.loadArrayBuffer(bundle,option.arrayBufferId); // 加载LZMA文件
                  this.map[option.arrayBufferId] = buffer;
                  //log(`buffer ${option.arrayBufferId} loaded successfully`);
                  this.emit(LoadingEvent.ASSETS_IS_UPDATE);
              }
      
              if(option.plist)
              {
                 
                
                let SpriteAtlas=await this.loadSpriteAtlas(bundle,option.plist);
                this.map[option.plist]=SpriteAtlas;
                
                this.emit(LoadingEvent.ASSETS_IS_UPDATE);
              }


              if(option.audioId)
              {
                let audioClip=await this.loadAudio(bundle,option.audioId);  
                this.map[option.audioId]=audioClip;
                //log('check_audio_map',this.map);
                this.emit(LoadingEvent.ASSETS_IS_UPDATE);
                //log(`audioClip ${option.audioId} loaded successfully`);
              }
      
              
      
            }
      
            log('check_allBoundleMap',this.map);
            this.emit(LoadingEvent.ASSETS_IS_READY);
      
            //cc.director.emit('assetsLoaded');
          } catch (error) {
            console.error('Failed to load assets:', error);
          }

    }

    private loadBundle(bundleName: string): Promise<AssetManager.Bundle>
    {
        return new Promise((resolve, reject) => 
        {
            assetManager.loadBundle(bundleName, (err, bundle) => {
                if (err) {
                reject(err);

                } else {
                resolve(bundle);
                }
            });
        });
    }


    //--https://docs.cocos.com/creator/3.1/manual/zh/asset/dynamic-load-resources.html
    private loadSpriteFrame(bundle: AssetManager.Bundle, assetName: string): Promise<SpriteFrame> {
        return new Promise((resolve, reject) => 
        {
        bundle.load(assetName, SpriteFrame, (err, spriteFrame) => {
            if (err) {
            reject(err);
            } else {
            resolve(spriteFrame);
            }
        });
        });
    }

    private loadImageAsset(bundle: AssetManager.Bundle, textureName: string):Promise<ImageAsset>
    {
        return new Promise((resolve, reject)=>
        {
            bundle.load(textureName, ImageAsset,(err,texture2DImageAsset)=>
            {
            if(err){
                reject(err);
            }else{
                resolve(texture2DImageAsset);
            }   
            });
        });

    }

    private loadTexture(bundle: AssetManager.Bundle, textureName: string):Promise<Texture2D>
    {
        return new Promise((resolve, reject)=>
        {
            bundle.load(textureName, Texture2D,(err,texture2D)=>
            {
            if(err){
                reject(err);
            }else{
                resolve(texture2D);
            }   
            });
        });

    }


    private loadPrefab(bundle: AssetManager.Bundle, prefabName: string): Promise<Prefab> 
    {
        return new Promise((resolve, reject) => 
        {
          bundle.load(prefabName, Prefab, (err, prefab) => {
            if (err) {
              reject(err);
            } else {
              resolve(prefab);
            }
          });
        });
    }

    private async loadArrayBuffer(bundle: AssetManager.Bundle,arrayBufferId: string): Promise<BufferAsset>
    {
        return new Promise((resolve, reject) => 
        {
        bundle.load(arrayBufferId, BufferAsset, (err, bufferAsset) => {
            if (err) {
            reject(err);
            } else {
            resolve(bufferAsset);
            }
        });
        });
    }

    private async decompressLZMA(buffer: BufferAsset): Promise<string>
    {
       
        return new Promise<string>((resolve, reject)=>
        {
            try {
                let outStream=LZMA.decompressFile((<BufferAsset>buffer).buffer()); 
                let data = JSON.parse(outStream.toString());
                resolve(data);
            }catch (error) {
                reject(error);
            }
            
        
        })
    }

    private async loadJson(bundle: AssetManager.Bundle, jsonId: string): Promise<JsonAsset>
    {
        
        return new Promise((resolve, reject) => 
        {
            bundle.load(jsonId, JsonAsset, (err, bufferAsset) => {
                if (err) {
                reject(err);
                } else {
                resolve(bufferAsset);
                }
            });
        });

    }

    private async loadSpriteAtlas(bundle: AssetManager.Bundle, plist: string): Promise<SpriteAtlas>
    {
        
        return new Promise((resolve, reject) => 
        {
            bundle.load(plist, SpriteAtlas, (err, spriteAtlas) => {
                if (err) {
                reject(err);
                } else {
                resolve(spriteAtlas);
                }
            });
        });

    }


    private async loadAudio(bundle: AssetManager.Bundle,audio:string):Promise<AudioClip>
    {
        return new Promise((resolve, reject) => 
        {
            bundle.load(audio,AudioClip, (err, audioClip) => {
                if (err) {
                reject(err);
                } else {
                resolve(audioClip);
                }
            });
        });
  
    }

    /*
    private sortIndexforBoundle():void
    {
        let boundles:FileConfigLoadingOption[]=[];
        for(let i:number=0;i<this.loadingQueue.length;i++)
        {
            if(this.loadingQueue[i].bundleId)
            {

            } 
        }

        
    }*/






} 


System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LoadingManager, LoadingEvent, LZMA, assetManager, BufferAsset, ImageAsset, SpriteAtlas, Prefab, SpriteFrame, Texture2D, JsonAsset, AnimationClip, AudioClip, log, LoadingResManager, _crd;

  function _reportPossibleCrUseOfLoadingManager(extras) {
    _reporterNs.report("LoadingManager", "../../game/loading/LoadingManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingEvent(extras) {
    _reporterNs.report("LoadingEvent", "../../game/events/eventBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLZMA(extras) {
    _reporterNs.report("LZMA", "../../../../Libs/lzma/LZMA", _context.meta, extras);
  }

  _export("LoadingResManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
      BufferAsset = _cc.BufferAsset;
      ImageAsset = _cc.ImageAsset;
      SpriteAtlas = _cc.SpriteAtlas;
      Prefab = _cc.Prefab;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
      JsonAsset = _cc.JsonAsset;
      AnimationClip = _cc.AnimationClip;
      AudioClip = _cc.AudioClip;
      log = _cc.log;
    }, function (_unresolved_2) {
      LoadingManager = _unresolved_2.LoadingManager;
    }, function (_unresolved_3) {
      LoadingEvent = _unresolved_3.LoadingEvent;
    }, function (_unresolved_4) {
      LZMA = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "739c2fdI3BAyYjkBtKjAPMO", "LoadingResManager", undefined);
      /**
       * Created by EricHuang on 2023/08/21.
       */


      __checkObsolete__(['AssetManager', 'assetManager', 'BufferAsset', 'ImageAsset', 'SpriteAtlas', 'Prefab', 'SpriteFrame', 'Texture2D', 'JsonAsset', 'AnimationClip', 'AudioSource', 'AudioClip']);

      __checkObsolete__(['log']);

      _export("LoadingResManager", LoadingResManager = class LoadingResManager extends (_crd && LoadingManager === void 0 ? (_reportPossibleCrUseOfLoadingManager({
        error: Error()
      }), LoadingManager) : LoadingManager) {
        static getInstance() {
          return LoadingResManager._instance ? LoadingResManager._instance : new LoadingResManager();
        }

        constructor() {
          super();
          this.map = void 0;
          this._bundleMap = void 0;

          if (LoadingResManager._instance != null) {
            throw new Error('plz use getInstance()');
          }

          LoadingResManager._instance = this;
          this.map = {};
          this._bundleMap = {};
          this._loadingQueue = [];
        }

        getPrefab(id) {
          //log('getPrefab',this.map);
          return this.map[id];
        }

        getSpriteFrame(id) {
          return this.map[id];
        }

        getTexture2d(id) {
          return this.map[id];
        }

        getImageAsset(id) {
          return this.map[id];
        }

        getJsonData(id) {
          return this.map[id];
        }

        getAudio(id) {
          return this.map[id];
        }

        getAnimationClip(id) {
          log('checkAssets', assetManager.assets);
          let r = null;
          assetManager.assets.forEach((assets, key) => {
            if (assets instanceof AnimationClip) {
              //log('checkMap_key',key,'contant',assets.name);
              if (assets.name == id) {
                r = assets;
              }
            } //-C:\Users\ren-yang\Desktop\cocos2Test\Projects\Fishing1\assets\game\animation\2d\fish\fish11Swim.anim
            //-db://assets/GameResources/prefab/fish/fish_01.prefab---挖操,直接在資源管理器裏面右鍵可以直接複製URL位置或是path位置
            //-C:\Users\ren-yang\Desktop\cocos2Test\Projects\Fishing1\assets\GameResources\prefab\fish\fish_01.prefab          

          });
          return r;
        } //--20231020-有載進Atlas就可以透過getSpriteFrame來取得


        getSpriteFrameFromSpriteAtlas(atlasId, frameId) {
          let spr = null;
          let atlas = this.map[atlasId];

          if (atlas) {
            spr = atlas.getSpriteFrame(frameId);
          }

          log('getSpriteFrameFromSpriteAtlas', this.map, atlasId, frameId);
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


        getSpriteFrames(id) {
          let r = [];
          assetManager.assets.forEach((assets, key) => {
            if (assets instanceof SpriteFrame) {
              //log('checkMap_key',key,'contant',assets.name);
              if (assets.name.indexOf(id) != -1) {
                r.push(assets);
              }
            }
          });
          return r;
        }
        /**
        * https://docs.cocos.com/creator/manual/zh/asset/sprite-frame.html
        * boundle載一次就好了,剩下就從裡面解析他的東西,不需要每次拿boundle裡面的東西就要載一次boundle
        */


        async startLoad() {
          log('wtfStartLoading');

          try {
            for (const option of this._loadingQueue) {
              let bundle;

              if (option.bundleId) {
                if (this._bundleMap[option.bundleId]) {
                  bundle = this._bundleMap[option.bundleId];
                } else {
                  bundle = await this.loadBundle(option.bundleId);
                  this._bundleMap[option.bundleId] = bundle;
                  log(`Bundle@@@@@@@@ ${option.bundleId} loaded successfully`, bundle);
                }
              }

              if (option.spriteFrameId) {
                const spriteFrame = await this.loadSpriteFrame(bundle, option.spriteFrameId);
                this.map[option.spriteFrameId] = spriteFrame; //log(`SpriteFrame ${option.spriteFrameId} loaded successfully`);

                this.emit((_crd && LoadingEvent === void 0 ? (_reportPossibleCrUseOfLoadingEvent({
                  error: Error()
                }), LoadingEvent) : LoadingEvent).ASSETS_IS_UPDATE);
              }

              if (option.prefabId) {
                const prefab = await this.loadPrefab(bundle, option.prefabId);
                this.map[option.prefabId] = prefab; //log(`Prefab ${option.prefabId} loaded successfully`);

                this.emit((_crd && LoadingEvent === void 0 ? (_reportPossibleCrUseOfLoadingEvent({
                  error: Error()
                }), LoadingEvent) : LoadingEvent).ASSETS_IS_UPDATE);
              }

              if (option.texture2dId) {
                const texture2d = await this.loadTexture(bundle, option.texture2dId);
                this.map[option.texture2dId] = texture2d; //log(`texture2d ${option.texture2dId} loaded successfully`);

                this.emit((_crd && LoadingEvent === void 0 ? (_reportPossibleCrUseOfLoadingEvent({
                  error: Error()
                }), LoadingEvent) : LoadingEvent).ASSETS_IS_UPDATE);
              }

              if (option.textureImageAssetId) {
                const texture2DImageAsset = await this.loadImageAsset(bundle, option.textureImageAssetId);
                this.map[option.textureImageAssetId] = texture2DImageAsset; //log(`textureImageAssetId ${option.textureImageAssetId} loaded successfully`,texture2DImageAsset);

                this.emit((_crd && LoadingEvent === void 0 ? (_reportPossibleCrUseOfLoadingEvent({
                  error: Error()
                }), LoadingEvent) : LoadingEvent).ASSETS_IS_UPDATE);
              }

              if (option.lzmaId) {
                const lzmaBuffer = await this.loadArrayBuffer(bundle, option.lzmaId); // 加载LZMA文件
                //log('lzmaBuffer',lzmaBuffer);

                const jsonText = await this.decompressLZMA(lzmaBuffer); // 解LZMA
                //log('check_jsonText',jsonText);
                //log(`lzma ${option.lzmaId} loaded successfully`); 

                this.map[option.lzmaId] = jsonText;
                this.emit((_crd && LoadingEvent === void 0 ? (_reportPossibleCrUseOfLoadingEvent({
                  error: Error()
                }), LoadingEvent) : LoadingEvent).ASSETS_IS_UPDATE);
              }

              if (option.jsonId) {
                //log('loadtestCheck@',option);
                //--取2進位資料可以
                const json = await this.loadJson(bundle, option.jsonId);
                this.map[option.jsonId] = json; //log(`json ${option.jsonId} loaded successfully`);

                this.emit((_crd && LoadingEvent === void 0 ? (_reportPossibleCrUseOfLoadingEvent({
                  error: Error()
                }), LoadingEvent) : LoadingEvent).ASSETS_IS_UPDATE);
              }

              if (option.arrayBufferId) {
                //log('loadtestCheck@',option);
                //--取2進位資料可以
                const buffer = await this.loadArrayBuffer(bundle, option.arrayBufferId); // 加载LZMA文件

                this.map[option.arrayBufferId] = buffer; //log(`buffer ${option.arrayBufferId} loaded successfully`);

                this.emit((_crd && LoadingEvent === void 0 ? (_reportPossibleCrUseOfLoadingEvent({
                  error: Error()
                }), LoadingEvent) : LoadingEvent).ASSETS_IS_UPDATE);
              }

              if (option.plist) {
                let SpriteAtlas = await this.loadSpriteAtlas(bundle, option.plist);
                this.map[option.plist] = SpriteAtlas;
                this.emit((_crd && LoadingEvent === void 0 ? (_reportPossibleCrUseOfLoadingEvent({
                  error: Error()
                }), LoadingEvent) : LoadingEvent).ASSETS_IS_UPDATE);
              }

              if (option.audioId) {
                let audioClip = await this.loadAudio(bundle, option.audioId);
                this.map[option.audioId] = audioClip; //log('check_audio_map',this.map);

                this.emit((_crd && LoadingEvent === void 0 ? (_reportPossibleCrUseOfLoadingEvent({
                  error: Error()
                }), LoadingEvent) : LoadingEvent).ASSETS_IS_UPDATE); //log(`audioClip ${option.audioId} loaded successfully`);
              }
            }

            log('check_allBoundleMap', this.map);
            this.emit((_crd && LoadingEvent === void 0 ? (_reportPossibleCrUseOfLoadingEvent({
              error: Error()
            }), LoadingEvent) : LoadingEvent).ASSETS_IS_READY); //cc.director.emit('assetsLoaded');
          } catch (error) {
            console.error('Failed to load assets:', error);
          }
        }

        loadBundle(bundleName) {
          return new Promise((resolve, reject) => {
            assetManager.loadBundle(bundleName, (err, bundle) => {
              if (err) {
                reject(err);
              } else {
                resolve(bundle);
              }
            });
          });
        } //--https://docs.cocos.com/creator/3.1/manual/zh/asset/dynamic-load-resources.html


        loadSpriteFrame(bundle, assetName) {
          return new Promise((resolve, reject) => {
            bundle.load(assetName, SpriteFrame, (err, spriteFrame) => {
              if (err) {
                reject(err);
              } else {
                resolve(spriteFrame);
              }
            });
          });
        }

        loadImageAsset(bundle, textureName) {
          return new Promise((resolve, reject) => {
            bundle.load(textureName, ImageAsset, (err, texture2DImageAsset) => {
              if (err) {
                reject(err);
              } else {
                resolve(texture2DImageAsset);
              }
            });
          });
        }

        loadTexture(bundle, textureName) {
          return new Promise((resolve, reject) => {
            bundle.load(textureName, Texture2D, (err, texture2D) => {
              if (err) {
                reject(err);
              } else {
                resolve(texture2D);
              }
            });
          });
        }

        loadPrefab(bundle, prefabName) {
          return new Promise((resolve, reject) => {
            bundle.load(prefabName, Prefab, (err, prefab) => {
              if (err) {
                reject(err);
              } else {
                resolve(prefab);
              }
            });
          });
        }

        async loadArrayBuffer(bundle, arrayBufferId) {
          return new Promise((resolve, reject) => {
            bundle.load(arrayBufferId, BufferAsset, (err, bufferAsset) => {
              if (err) {
                reject(err);
              } else {
                resolve(bufferAsset);
              }
            });
          });
        }

        async decompressLZMA(buffer) {
          return new Promise((resolve, reject) => {
            try {
              let outStream = (_crd && LZMA === void 0 ? (_reportPossibleCrUseOfLZMA({
                error: Error()
              }), LZMA) : LZMA).decompressFile(buffer.buffer());
              let data = JSON.parse(outStream.toString());
              resolve(data);
            } catch (error) {
              reject(error);
            }
          });
        }

        async loadJson(bundle, jsonId) {
          return new Promise((resolve, reject) => {
            bundle.load(jsonId, JsonAsset, (err, bufferAsset) => {
              if (err) {
                reject(err);
              } else {
                resolve(bufferAsset);
              }
            });
          });
        }

        async loadSpriteAtlas(bundle, plist) {
          return new Promise((resolve, reject) => {
            bundle.load(plist, SpriteAtlas, (err, spriteAtlas) => {
              if (err) {
                reject(err);
              } else {
                resolve(spriteAtlas);
              }
            });
          });
        }

        async loadAudio(bundle, audio) {
          return new Promise((resolve, reject) => {
            bundle.load(audio, AudioClip, (err, audioClip) => {
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


      });

      LoadingResManager._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=509c0533e0bb8d064ded0ae090e409922fc9d6ac.js.map
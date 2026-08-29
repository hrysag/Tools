System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, Component, EffectAsset, Material, Sprite, SpriteFrame, UITransform, VideoClip, PlayMode, WaninPlayer, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, property, requireComponent, WaninAnimation;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayMode(extras) {
    _reporterNs.report("PlayMode", "./WaninPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaninPlayer(extras) {
    _reporterNs.report("WaninPlayer", "./WaninPlayer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      assetManager = _cc.assetManager;
      Component = _cc.Component;
      EffectAsset = _cc.EffectAsset;
      Material = _cc.Material;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      VideoClip = _cc.VideoClip;
    }, function (_unresolved_2) {
      PlayMode = _unresolved_2.PlayMode;
      WaninPlayer = _unresolved_2.WaninPlayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eea0dgb9IlBlbWkRsWFJgF1", "WaninAnimation", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Component', 'EffectAsset', 'Material', 'Node', 'Sprite', 'SpriteFrame', 'UITransform', 'VideoClip']);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("WaninAnimation", WaninAnimation = (_dec = ccclass('WaninAnimation'), _dec2 = requireComponent(Sprite), _dec3 = property(VideoClip), _dec(_class = _dec2(_class = (_class2 = class WaninAnimation extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "videoClipList", _descriptor, this);

          this.player = null;
          this.isLoaded = false;
          this.sprite = void 0;
          this.onInitCompleteCallback = null;
        }

        init(onInitComplete = null) {
          this.isLoaded = false;
          this.player = new (_crd && WaninPlayer === void 0 ? (_reportPossibleCrUseOfWaninPlayer({
            error: Error()
          }), WaninPlayer) : WaninPlayer)();
          this.onInitCompleteCallback = onInitComplete;
          this.sprite = this.getComponent(Sprite);
          this.loadEffectFromBundle().then(effect => {
            let material = new Material();
            material.initialize({
              effectAsset: effect
            });
            let height = this.node.getComponent(UITransform).height;
            let colorUVScale = height / (2 * height + 16);
            let alphaUVScale = height / (2 * height + 16);
            let alphaUVOffset = (height + 16) / (2 * height + 16);
            material.setProperty('colorUVScale', colorUVScale);
            material.setProperty('alphaUVScale', alphaUVScale);
            material.setProperty('alphaUVOffset', alphaUVOffset);
            this.sprite.setSharedMaterial(material, 0);
            return this.loadAsset();
          }).then(() => {
            this.isLoaded = true;
          });
        }

        update(dt) {
          var _this$player;

          (_this$player = this.player) == null || _this$player.update(dt);
        }

        async loadAsset() {
          await this.loadMp4();
        }

        async loadMp4() {
          let url = [];

          for (let clipItem of this.videoClipList) {
            url.push(clipItem.nativeUrl);
          }

          await this.player.loadVideo(url);

          if (this.isLoaded === true) {
            return;
          } // 依照載入的影片開啟對應的Decoder


          this.player.createDecoder().then(() => {
            var _this$onInitCompleteC;

            // 建一個SpriteFrame
            const spriteFrame = new SpriteFrame(); // 影片產生的RenderTexture  * 影片播放時會一直更新此RenderTexture

            spriteFrame.texture = this.player.GetRenderTexture();
            this.sprite.spriteFrame = spriteFrame;
            (_this$onInitCompleteC = this.onInitCompleteCallback) == null || _this$onInitCompleteC.call(this);
          });
        } // public play(mode: PlayMode = PlayMode.Once, list: number[] = [], onComplete?: () => void): void {
        //     this.player.play(mode, list);
        //     this.player.event.onEnd = () => {
        //         onComplete();
        //         // 清除事件
        //         this.player.event.onEnd = null;
        //     };
        // }


        playOncePromise(clipIDs) {
          return new Promise((resolve, reject) => {
            this.playOnce(clipIDs, resolve);
          });
        }

        playOnce(clipIDs, onComplete) {
          if (this.isLoaded === false) {
            console.log('影片尚未載入完成');
            return;
          }

          let resultIDs = clipIDs.map(id => id + 1);
          this.player.play((_crd && PlayMode === void 0 ? (_reportPossibleCrUseOfPlayMode({
            error: Error()
          }), PlayMode) : PlayMode).Once, resultIDs);

          this.player.event.onEnd = () => {
            // 清除事件
            this.player.event.onEnd = null;
            onComplete == null || onComplete();
          };
        }

        closeDecoder() {
          this.player.closeDecoder(); // 要再使用要重新init一次
        }

        onDestroy() {
          this.player.closeDecoder();
        }

        playLoop(clipIDs) {
          if (this.isLoaded === false) {
            console.log('影片尚未載入完成');
            return;
          }

          let resultIDs = clipIDs.map(id => id + 1);
          this.player.play((_crd && PlayMode === void 0 ? (_reportPossibleCrUseOfPlayMode({
            error: Error()
          }), PlayMode) : PlayMode).RepeatAll, resultIDs);
        }

        pause() {
          this.player.pause(true);
        }

        resume() {
          this.player.pause(false);
        }

        async loadEffectFromBundle() {
          return new Promise((resolve, reject) => {
            assetManager.loadBundle('WaninPlayerEffect', (err, bundle) => {
              if (err) {
                reject(err);
                return;
              }

              bundle.load('playerEffect', EffectAsset, (err, effect) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(effect);
                }
              });
            });
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "videoClipList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class) || _class));
      /*
              let a = this.clip._nativeAsset;
              console.log(a.innerHTML)
              const str = a.innerHTML
              const container = document.createElement("div"); // 創建一個容器
              container.innerHTML = str;
              const element = container.firstChild; // 取得轉換後的元素
              console.log(element.src); // <source> 元素
              
      */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c0f8a786b805c5d5cb1d3d7ae6348b698a555029.js.map
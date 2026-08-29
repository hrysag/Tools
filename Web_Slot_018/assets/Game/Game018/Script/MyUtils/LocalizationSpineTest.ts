import { _decorator, assetManager, SpriteAtlas, Component, resources, SpriteFrame, Sprite, director } from 'cc';
import { SlotAttaches } from 'db://assets/Scripts/GameScripts/SlotAttaches';
import { SlotRelayLang } from 'db://assets/Scripts/Utils/Config';
import { Debug } from 'db://assets/Scripts/Utils/Debug';
import { LocalizationSpine } from 'db://assets/Scripts/GameScripts/LocalizationSpine';
import { SkeletonExtension } from 'db://assets/Scripts/GameScripts/SkeletonExtension';
const { ccclass, requireComponent, property } = _decorator;

@ccclass('LocalizationSpineTest')
@requireComponent(SkeletonExtension)
export class LocalizationSpineTest extends LocalizationSpine {
    @property({ type: SpriteAtlas, visible: true, displayName: 'testSpriteAtlas' })
    public testSpriteAtlas: SpriteAtlas = null;
    @property({ type: Sprite, visible: true, displayName: 'testSprite' })
    public testSprite: Sprite = null;
    constructor() {
        super();
    }

    public override async loadAllSpine(langKey: SlotRelayLang): Promise<void> {
        let promiseList: Promise<void>[] = [];
        const langString = SlotRelayLang[langKey];
        let localizationSpine = this.getComponent(SkeletonExtension);

        if (localizationSpine === null) {
            console.error(`Node "${this.node.name}" LocalizationSpine No SpineAttach`);
        }

        let attachments = localizationSpine.slotAttaches;

        for (let i = 0; i < attachments.length; i++) {
            let name = attachments[i].spriteFrame.name;
            promiseList.push(this.loadSpine2(langString, name, attachments[i]));
        }

        await Promise.all(promiseList);
        localizationSpine.checkAndUpdateSlot();
    }

    private loadSpine2(langString: string, name: string, attachment: SlotAttaches): Promise<void> {
        //const spritePath = `Game/ImageLocalization/${langString}/${name}/spriteFrame`; // 這是 spriteFrame 的路徑（從 auto-atlas 切出來的）
        //console.log('🔍 @@ Loading SpriteFrame:', spritePath, this.testSpriteAtlas);

        //let bundle = assetManager.getBundle('resources');
        //console.log('checkBundle:', bundle);
        let path = `Game/ImageLocalization/${langString}/${name}/spriteFrame`;
        return new Promise<void>((resolve, reject) => {
            resources.load(path, SpriteFrame, (err, texture: SpriteFrame) => {
                if (err) {
                    console.log(err);
                    // 如果不存在該圖片，則使用英文圖片
                    if (err.message.includes("Bundle resources doesn't contain")) {
                        this.loadSpine2(SlotRelayLang[SlotRelayLang.en], name, attachment)
                            .then(() => {

                                resolve();
                            })
                    }
                    else {
                        Debug.LogWarning("LocalizationSpine loadImage err: " + err.message);
                        resolve();
                    }
                }
                else {
                    attachment.spriteFrame = texture;
                    this.testSprite.spriteFrame = texture;
                    console.log('testSprite@@@@@@:', this.testSprite);
                    resolve();
                }
            });
        })
        /*
        //--這樣可以直接取得 spriteFrame--
        return new Promise<void>((resolve, reject) => {
            let spr = this.testSpriteAtlas.getSpriteFrame(name);
            console.log('spr:', spr);
            this.testSprite.spriteFrame = spr;
            console.log('testSprite:', this.testSprite);
            resolve();
        });*/
        //--這樣也是可以的,但spine是沒法度--
        /*
        if (bundle) {

            return new Promise<void>((resolve, reject) => {
                bundle.load(spritePath, SpriteFrame, (err, spriteFrame) => {
                    if (err) {
                        reject(err);
                    } else {
                        attachment.spriteFrame = spriteFrame;
                        console.log('🔍 @@ Loaded Success_spriteFrame', spriteFrame);
                        this.testSprite.spriteFrame = spriteFrame;
                        resolve();
                    }


                });
            });

        } else {
            console.warn('Bundle not found');
        }*/

        /*
        return new Promise<void>((resolve) => {
            resources.load(spritePath, SpriteFrame, (err, spriteFrame) => {
                if (err) {
                    console.warn(`❌ Failed to load spriteFrame ${spritePath}:`, err.message);

                    // fallback 到英文語系
                    if (langString !== 'en') {
                        this.loadSpine2('en', name, attachment).then(resolve);
                    } else {
                        Debug.LogWarning(`LocalizationSpine loadImage err: ${err.message}`);
                        resolve();
                    }
                    return;
                }

                attachment.spriteFrame = spriteFrame;
                resolve();
            });
        });*/
    }
}



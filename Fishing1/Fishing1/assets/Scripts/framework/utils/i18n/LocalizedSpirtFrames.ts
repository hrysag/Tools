import { _decorator, Component, Asset, Sprite, Button, SpriteFrame, assetManager, error, SpriteAtlas, AssetManager, log } from 'cc';

const { ccclass, menu, property } = _decorator;

@ccclass('LocalizedSpirtFrames')
@menu('i18n/LocalizedSpirtFrames')
export default class LocalizedSpirtFrames extends Component {

    public static language: string = '';
    public spNames: string[] = [];

    @property({ tooltip: 'ProjectName/spritePath' })
    public spritePath: string = '';

    @property([SpriteFrame])
    private spriteFrames: (SpriteFrame | null)[] = [];

    @property(SpriteAtlas)
    private atlas: SpriteAtlas = null!;

    private resource: Asset = null!;

    public onLoad (): void {
        this.fetchRender();
    }

    public getIndex(idx: number): SpriteFrame | null {
        return this.spriteFrames[idx];
    }

    public decRef (): void {
        if (this.resource) {
            this.resource.decRef();
            this.resource = null!;
        }
    }

    private fetchRender (): void {
        if (LocalizedSpirtFrames.language === '') {
            error(`LocalizedSpirtFrames language not initialized`);
            return;
        }

        const bundleName = this.spritePath.split('/')[0];
        const bundle = assetManager.getBundle(bundleName);
        if (!bundle) {
            error(`No bundle loaded : ${bundleName}`);
            return;
        }

        const dir = this.spritePath.slice(0, this.spritePath.length - 2);
        const newSpritePath = dir + LocalizedSpirtFrames.language;

        this.getSpriteFrameName(this.atlas);

        if (this.spritePath !== '' && this.spritePath !== newSpritePath) {
            const path = newSpritePath.substr(newSpritePath.indexOf('/'));
            this.spritePath = newSpritePath;

            bundle.load(path, SpriteAtlas, (err, atlas: SpriteAtlas) => {
                if (err) {
                    error(`${err} in ${this.name} ${newSpritePath}`);
                } else {
                    this.resource = atlas;
                    this.resource.addRef();

                    for (let i = 0; i < this.spriteFrames.length; i++) {
                        const spriteFrames = this.spriteFrames[i];
                        if (spriteFrames !== null) {
                            this.spriteFrames[i] = atlas.getSpriteFrame(this.spNames[i]);
                        }
                    }
                }
            });
        }
    }
    private getSpriteFrameName (atlas: SpriteAtlas): void {
        const keys = Object.keys(atlas.spriteFrames);
        for (const sp of this.spriteFrames) {
            for (const key of keys) {
                if (sp === atlas.spriteFrames[key]) {
                    this.spNames.push(key);
                    break;
                }
            }
        }
    }
}
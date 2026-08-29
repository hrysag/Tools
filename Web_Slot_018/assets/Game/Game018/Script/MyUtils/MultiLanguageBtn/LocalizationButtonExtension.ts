import { _decorator, Button, CCString, Component, resources, Sprite, SpriteFrame } from 'cc';
import { ButtonStatus, SlotRelayLang } from 'db://assets/Scripts//Utils/Config';
import { Debug } from 'db://assets/Scripts//Utils/Debug';
import { LocalizationButton } from 'db://assets/Scripts/GameScripts/LocalizationButton';
const { ccclass, requireComponent, property } = _decorator;

@ccclass('LocalizationButtonExtension')
@requireComponent(Button)
export class LocalizationButtonExtension extends LocalizationButton {

    // 只填入按鈕前綴名稱 後面要加上 _狀態_語言名稱
    // btn_normal_tw  btn_pressed_tw  btn_hover_tw  btn_disabled_tw
    @property(CCString)
    resourcePath: string = '';
    private _btnStatusMap: Map<ButtonStatus, SpriteFrame> = new Map<ButtonStatus, SpriteFrame>();


    public override loadButtonImage(langKey: SlotRelayLang): Promise<void[]> {
        return Promise.all([
            this.loadImageByStatusNew(langKey, ButtonStatus.Normal),
            this.loadImageByStatusNew(langKey, ButtonStatus.Pressed),
            this.loadImageByStatusNew(langKey, ButtonStatus.Hover),
            this.loadImageByStatusNew(langKey, ButtonStatus.Disabled)
        ]);
    }

    public getSpriteFrameByStatus(status: ButtonStatus): SpriteFrame {
        return this._btnStatusMap.get(status);
    }

    private loadImageByStatusNew(langKey: SlotRelayLang, status: ButtonStatus): Promise<void> {
        const langString = SlotRelayLang[langKey];
        this.resourcePath = this.resourcePath.trim();
        if (this.resourcePath) {
            let path = `Game/ImageLocalization/${langString}/${this.resourcePath}_${status}/spriteFrame`;
            return new Promise<void>((resolve, reject) => {
                resources.load(path, SpriteFrame, (err, spriteFrame: SpriteFrame) => {
                    if (err) {
                        // 如果不存在該圖片，則使用英文圖片
                        if (err.message.includes("Bundle resources doesn't contain") && langKey !== SlotRelayLang.en) {
                            this.loadImageByStatusNew(SlotRelayLang.en, status)
                                .then(() => {
                                    resolve();
                                })
                        }
                        else {
                            Debug.LogWarning("LocalizationButton loadImage err: " + err.message);
                            resolve();
                        }

                    }
                    else {

                        switch (status) {
                            case ButtonStatus.Normal:
                                //this.getComponent(Button).normalSprite = spriteFrame;
                                //this.getComponent(Button).target.getComponent(Sprite).spriteFrame = spriteFrame;
                                this._btnStatusMap.set(ButtonStatus.Normal, spriteFrame);
                                break;
                            case ButtonStatus.Pressed:
                                //this.getComponent(Button).pressedSprite = spriteFrame;
                                this._btnStatusMap.set(ButtonStatus.Pressed, spriteFrame);
                                break;
                            case ButtonStatus.Hover:
                                //this.getComponent(Button).hoverSprite = spriteFrame;
                                this._btnStatusMap.set(ButtonStatus.Hover, spriteFrame);
                                break;
                            case ButtonStatus.Disabled:
                                //this.getComponent(Button).disabledSprite = spriteFrame;
                                this._btnStatusMap.set(ButtonStatus.Disabled, spriteFrame);
                                break;
                        }
                        resolve();
                    }
                });
            });
        }
        else {
            console.error(`Node "${this.node.name}" LocalizationButton No resource path`);
            return Promise.resolve();
        }
    }
}



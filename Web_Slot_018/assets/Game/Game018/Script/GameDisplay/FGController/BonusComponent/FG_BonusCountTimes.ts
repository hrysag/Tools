import { _decorator, Component, Node, SpriteFrame, Sprite, Label, Vec2, v2, v3 } from 'cc';
import { FindComponent } from '../../../MyUtils/FindComponent';
import { BasicPoolObject } from '../../../MyUtils/ObjectPoolManager/Compoents/BasicPoolObject';
import { Localization } from 'db://assets/Scripts/GameScripts/Localization';
import { LocalizationSprite } from 'db://assets/Scripts/GameScripts/LocalizationSprite';
import { SlotRelayLang } from 'db://assets/Scripts/Utils/Config'
const { ccclass, property } = _decorator;

@ccclass('FG_BonusCountTimes')
export class FG_BonusCountTimes extends BasicPoolObject {

    @property({ type: SpriteFrame, displayName: 'Camp0_bg_spriteFrame', visible: true, tooltip: '陣營0底圖' })
    private _camp0_bg_spriteFrame: SpriteFrame = null;

    @property({ type: SpriteFrame, displayName: 'Camp1_bg_spriteFrame', visible: true, tooltip: '陣營1底圖' })
    private _camp1_bg_spriteFrame: SpriteFrame = null;

    @property({ type: Node, displayName: 'BG_node', visible: true, tooltip: '換底圖的node' })
    private _bg_node: Node = null;

    @property({ type: Node, displayName: 'BonusTimesNode', visible: true, tooltip: '計算bonus Time的node' })
    private _bonusTimesNode: Node = null;

    @property({ type: Vec2, displayName: 'BonusTimes_cnTw', visible: true, tooltip: '計算BT_語系cn/tw的node位置' })
    private _bonusTimes_cnTw: Vec2 = new Vec2(0, 0);
    @property({ type: Vec2, displayName: 'BonusTimes_cnEn', visible: true, tooltip: '計算BT_語系en的node位置' })
    private _bonusTimes_cnEn: Vec2 = new Vec2(0, 0);

    @property({ type: Node, displayName: 'BonusTimes_Title', visible: true, tooltip: '計算語系Title的node' })
    private _bonusTimes_Title: Node = null;
    @property({ type: Vec2, displayName: 'BonusTimes_Title_cnTw', visible: true, tooltip: '計算語系Title_tw的node位置' })
    private _bonusTimes_Title_cnTw: Vec2 = new Vec2(0, 0);
    @property({ type: Vec2, displayName: 'BonusTimes_Title_cnEn', visible: true, tooltip: '計算語系Title_en的node位置' })
    private _bonusTimes_Title_cnEn: Vec2 = new Vec2(0, 0);

    private _currentLanguageKey: SlotRelayLang = null;
    private _timesLabel: Label = null;

    protected onLoad(): void {
        //this._bg_node.active = true;
    }

    public override resetData(): void {
        this.reSet();
    }

    public reSet(): void {
        this._timesLabel.string = '';
    }

    public init(): void {
        this._timesLabel = this._bonusTimesNode.getComponent(Label);
        this.loadLanguageSprite();
    }

    private async loadLanguageSprite(): Promise<void> {
        const currentLanguageKey = Localization.instance.currentLangKey;
        if (this._currentLanguageKey != currentLanguageKey) {
            this._currentLanguageKey = Localization.instance.currentLangKey;
            const localizationSprite = FindComponent.findComponentInChildren(this._bonusTimes_Title, LocalizationSprite);
            if (localizationSprite) {
                await localizationSprite.loadImage(currentLanguageKey);
                let titlePos;
                let countTimesPos;
                if (this._currentLanguageKey == SlotRelayLang.cn || this._currentLanguageKey == SlotRelayLang.tw) {
                    titlePos = this._bonusTimes_Title_cnTw;
                    countTimesPos = this._bonusTimes_cnTw;
                } else {
                    titlePos = this._bonusTimes_Title_cnEn;
                    countTimesPos = this._bonusTimes_cnEn;
                }
                this._bonusTimes_Title.setPosition(v3(titlePos.x, titlePos.y, 0));
                this._bonusTimesNode.setPosition(v3(countTimesPos.x, countTimesPos.y, 0));
            }

        }
    }

    public setFgCountTimes(count: number): void {
        if (this._timesLabel) {
            this._timesLabel.string = count.toString();
        }
    }

    public setCamp(camp: number): void {
        if (camp == 0) {
            this._bg_node.getComponent(Sprite).spriteFrame = this._camp0_bg_spriteFrame;
        } else {
            this._bg_node.getComponent(Sprite).spriteFrame = this._camp1_bg_spriteFrame;
        }
    }


}



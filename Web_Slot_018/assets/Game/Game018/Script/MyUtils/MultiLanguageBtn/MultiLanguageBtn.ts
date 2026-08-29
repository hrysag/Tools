import { _decorator, Component, Node, Button, Sprite } from 'cc';
import { LocalizationButtonExtension } from './LocalizationButtonExtension';
import { GameUtils } from '../GameUtils';
import { FindComponent } from '../FindComponent';
const { ccclass, property } = _decorator;

@ccclass('MultiLanguageBtn')
export class MultiLanguageBtn extends Button {

    @property({ type: Sprite, visible: true, displayName: 'TargetSprite', tooltip: '用來換圖片的sprite' })
    private _targetSprite: Sprite = null;
    private _localizationButton: LocalizationButtonExtension = null;

    public init(): void {
        this._localizationButton = FindComponent.findComponentInChildren(this.node, LocalizationButtonExtension);
        this.changeSpriteFrame('normal');
    }

    protected _applyTransition(state: any): void {
        super._applyTransition(state); // 這行會套用顏色/圖片/縮放
        this.changeSpriteFrame(state);
        //console.log('check_buttonState', state);
    }

    private changeSpriteFrame(state: any): void {
        let spriteFrame = this._localizationButton.getSpriteFrameByStatus(state);
        if (spriteFrame) {
            this._targetSprite.spriteFrame = spriteFrame;
        }
    }

}



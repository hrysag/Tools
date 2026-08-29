import { _decorator, CCString, Component, Enum, Node, SpriteFrame } from 'cc';
import { SlotRelayLang } from './Config';
const { ccclass, property } = _decorator;

@ccclass('LangKeyButtonFramePair')
export class LangKeyButtonFramePair {
    @property({
        displayName: "Key",
        type: Enum(SlotRelayLang),
        serializable: true,
    } as any)
    public lang: SlotRelayLang = SlotRelayLang.en;

    @property({
        displayName: "NormalSpriteFrame",
        type: SpriteFrame,
        serializable: true,
    } as any)
    public normalSpriteFrame: SpriteFrame | null = null;

    @property({
        displayName: "PressedSpriteFrame",
        type: SpriteFrame,
        serializable: true,
    } as any)
    public pressedSpriteFrame: SpriteFrame | null = null;

    @property({
        displayName: "HoverSpriteFrame",
        type: SpriteFrame,
        serializable: true,
    } as any)
    public hoverSpriteFrame: SpriteFrame | null = null;

    @property({
        displayName: "DisabledSpriteFrame",
        type: SpriteFrame,
        serializable: true,
    } as any)
    public disabledSpriteFrame: SpriteFrame | null = null;
}



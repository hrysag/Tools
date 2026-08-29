import { _decorator, Enum, SpriteFrame } from 'cc';
import { SlotRelayLang } from './Config';

const { ccclass, property } = _decorator;

@ccclass('LangKeySpriteFramePair')
export class LangKeySpriteFramePair {
    @property({
        displayName: "Key",
        type: Enum(SlotRelayLang),
        serializable: true,
    } as any)
    public lang: SlotRelayLang = SlotRelayLang.en;

    @property({
        displayName: "SpriteFrame",
        type: SpriteFrame,
        serializable: true,
    } as any)
    public spriteFrame: SpriteFrame | null = null;
}



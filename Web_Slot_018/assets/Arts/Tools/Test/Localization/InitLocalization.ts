import { _decorator, Component, Enum } from 'cc';
import { Localization } from 'db://assets/Scripts/GameScripts/Localization';
import { SlotRelayLang } from 'db://assets/Scripts/Utils/Config';
const { ccclass, property } = _decorator;

@ccclass('InitLocalization')
export class InitLocalization extends Component {
    @property({ type: Enum(SlotRelayLang) })
    language: SlotRelayLang = SlotRelayLang.en;

    start() {
        Localization.instance.init('', SlotRelayLang[this.language]);
    }
}



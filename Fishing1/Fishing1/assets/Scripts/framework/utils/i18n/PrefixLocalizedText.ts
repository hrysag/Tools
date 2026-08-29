import { _decorator, Component, Label, RichText, error } from 'cc';
import { i18n } from './LanguageData';

const { ccclass, menu, property } = _decorator;

@ccclass('PrefixLocalizedText')
@menu('i18n/PrefixLocalizedText')
export default class PrefixLocalizedText extends Component {

    @property
    private dataID: string = '';

    @property
    private prefix: string = '';

    public onLoad (): void {
        this.updateLabel();
    }

    public updateLabel (): void {
        const label = this.getComponent(Label);
        const richText = this.getComponent(RichText);

        if (!label && !richText) {
            error('Failed to update localized label, label component is invalid!');
            return;
        }

        const localizedString = i18n.t(this.dataID, {});
        if (localizedString) {
            if (label) {
                label.string = this.prefix + localizedString;
            } else if (richText) {
                richText.string = this.prefix + localizedString;
            }
        }
    }
}

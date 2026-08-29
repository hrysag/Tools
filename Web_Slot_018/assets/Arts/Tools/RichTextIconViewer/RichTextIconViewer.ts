import { _decorator, CCString, Component, Node, RichText, SpriteFrame } from 'cc';
import { KeySpriteFramePair } from 'db://assets/Scripts/Utils/KeySpriteFramePair';
const { ccclass, property } = _decorator;

@ccclass('RichTextIconViewer')
export class RichTextIconViewer extends Component {

    @property(RichText)
    private myRichText: RichText;

    @property(RichText)
    private tipRichText: RichText;

    @property([KeySpriteFramePair])
    private keySpriteFramePair: KeySpriteFramePair[] = [];

    @property(CCString)
    private text: string = '';

    @property(CCString)
    private tipText: string = '';
    start() {
        this.myRichText.addSpriteFrame(this.keySpriteFramePair);
        this.myRichText.string = this.text;
        this.tipRichText.addSpriteFrame(this.keySpriteFramePair);
        this.tipRichText.string = this.tipText;


    }

}



import { _decorator, Component, Node, SpriteFrame, CCInteger } from 'cc';
import { IconData } from 'db://assets/Scripts/ReelTemplate/ReelTemplate_2/Scripts/Model/IconData';
import { ReelRoundState } from 'db://assets/Scripts/ReelTemplate/ReelTemplate_2/Scripts/Model/ReelData';
const { ccclass, property } = _decorator;

@ccclass('IconData018')

export class IconData018 extends IconData {

    @property({ type: SpriteFrame, visible: true, displayName: 'RightSide_SpriteFrame', tooltip: '右側盤面的圖片' })
    private _rightSide_SpriteFrames: SpriteFrame[] = [];


    @property({ type: SpriteFrame, visible: true, displayName: 'LeftSide_BlurSpriteFrame', tooltip: '左側盤面的模糊圖片' })
    private _leftSide_BlurSpriteFrames: SpriteFrame[] = [];

    @property({ type: SpriteFrame, visible: true, displayName: 'RightSide_BlurSpriteFrame', tooltip: '右側盤面的模糊圖片' })
    private _rightSide_BlurSpriteFrames: SpriteFrame[] = [];

    @property({ type: CCInteger, range: [0, 255], visible: true, tooltip: '特殊模式壓黑後的明亮度' })
    private _sp_darkBrightness: number = 0;

    set sp_darkBrightness(value: number) {
        this._sp_darkBrightness = value;
    }

    get sp_darkBrightness(): number {
        return this._sp_darkBrightness;
    }

    get rightSide_SpriteFrames(): SpriteFrame[] {
        return this._rightSide_SpriteFrames;
    }

    set rightSide_SpriteFrames(spriteFrames: SpriteFrame[]) {
        this._rightSide_SpriteFrames = spriteFrames;
    }

    get leftSide_BlurSpriteFrames(): SpriteFrame[] {
        return this._leftSide_BlurSpriteFrames;
    }

    set leftSide_BlurSpriteFrames(spriteFrames: SpriteFrame[]) {
        this._leftSide_BlurSpriteFrames = spriteFrames;
    }

    get rightSide_BlurSpriteFrames(): SpriteFrame[] {
        return this._rightSide_BlurSpriteFrames;
    }

    set rightSide_BlurSpriteFrames(spriteFrames: SpriteFrame[]) {
        this._rightSide_BlurSpriteFrames = spriteFrames;
    }

    public reelId: number = -1;
    //--icon 在這個reel裡面的index
    public iconIndexInReel: number = -1;
    //--這個在iconData裡面也有類似的屬性...在考慮要不要寫進去.或是不做更動.
    //public iconId: number=-1;
    //--陣營的編號(阿里巴巴/四十大盜)--camp=0是阿里巴巴, camp=1是四十大盜
    public camp: number = -1;

    public rollState: ReelRoundState = ReelRoundState.Unknown;



    /**
     * 1.wild圖案在轉的時候呈現wild的圖案(沒有猜拳)
     * 2.停輪的時候才開始猜拳
     * 3.猜拳的結果是在轉輪的時候就已經決定好了
     * 4.wild又分為左右兩邊(阿里巴巴/四十大盜)
     * 
     * 5.freeGame模式下的symbol_09(寶箱(阿里巴巴)/錢袋(四十大盜))是分陣營呈現的
     * 
     * <原始的_spriteFrameList為左側NG圖案>
     * 0-5是一般symbol
     * 6-8是特殊wild
     * 9-FG左側陣營使用的特殊圖案<寶箱>
     * 10-wild旋轉的symbol(server 6-7-8為wild圖案)
     * 在旋轉的時候要替換成wild圖案
     * 到定點後滿足條件及開啟動態圖案(旋轉猜拳)
     * 結束後替換成(6-8wild圖案)
     * 
     * <<<新>_rightSide_SpriteFrames為右側NG圖案>>
     * 9-FG右側陣營使用的特殊圖案<錢袋>
     * 其餘與原始的_spriteFrameList一樣的內容
     
     * 
     * <<新>_leftSide_BlurSpriteFrames為左側NG模糊圖案>>
     * 0-5是一般symbol
     * 6-左側FG特殊圖案<寶箱>
     * WILD不呈現模糊
     * 
     * <新>_rightSide_BlurSpriteFrames為右側NG模糊圖案
     * 6-右側FG特殊圖案<錢袋>
     * 
     * SpriteNode==>最終結果
     * BlurModeSprite==>模糊模式
     * 
     */


}



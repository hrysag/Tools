import { _decorator, Component, Node, CCFloat, CCInteger, Vec2, Vec3, v3 } from 'cc';
import { IconReel } from 'db://assets/Scripts/ReelTemplate/ReelTemplate_2/Scripts/IconReel';
import { GameState } from '../DefinitionGameData/GameStateConfigDef';
const { ccclass, property } = _decorator;

const ROLL_SPEED_MULTIPLIER: number = 1.5;//--forecast的滾輪速度倍數

@ccclass('GameReel018')

export class GameReel018 extends IconReel {

    /*
        reel本身(上面由reelView管理)
        1.只負責抓取icon的node,負責表演icon的滾動
        2.透過property綁進來的rootNode(裝icon的node),主要就是移動這個
        (恩=..=||)
        3.ReelData=滾輪相關設定
    */

    @property(CCFloat)
    private readyHandMaxStopSpeed: number = 4;

    @property(CCFloat)
    private readyHandGradualStopSpeed: number = 0.5;

    @property({ type: CCInteger, visible: true, displayName: 'camp', tooltip: '陣營:0<阿里>,1<大盜>' })
    private _camp: number = 0;

    get camp() {
        return this._camp;
    }

    set camp(value) {
        this._camp = value;
    }

    @property({ type: Vec3, visible: true, displayName: 'Reel_NG_Pos', tooltip: '滾輪NG的位置' })
    private _reelNGPos: Vec3 = new Vec3();

    @property({ type: Vec3, visible: true, displayName: 'Reel_FG_Pos', tooltip: '滾輪FG的位置' })
    private _reelFGPos: Vec3 = new Vec3();
    private _offsetXForCamp1: Vec3 = null; //0709-78美術自己做的圖就是偏的還要我改每一軸的位置

    private inReadyHand: boolean = false;
    private originSpeed: number = 0;
    private rollMinSpeed: number = 0;

    public override init(reelID: number, iconNodes: Node[], havePrepareIcon: boolean, showIcons?: Node[]): void {

        super.init(reelID, iconNodes, havePrepareIcon, showIcons);
        this.originSpeed = this.gameReelData.rollSpeed;

        if (this.readyHandMaxStopSpeed >= this.originSpeed) {
            this.readyHandMaxStopSpeed = this.originSpeed - 1;
        }
        this.rollMinSpeed = this.originSpeed - this.readyHandMaxStopSpeed;

        this.startPullIcon.node.active = false; //開始產生在下面的prepare gameIcon不顯示(永遠)
    }


    public changeGameMode(gameState: number, campIndex?: number | undefined): void {

        if (gameState == GameState.NORMAL) {
            this.node.setPosition(this._reelNGPos);
        } else if (gameState == GameState.FREE_GAME) {
            //--camp=0<阿里>,1<大盜>
            if (campIndex === 1 && !this._offsetXForCamp1) {
                const offsetX = (campIndex === 1) ? -4 : 0; //0709-78美術自己做的圖就是偏的還要我改每一軸的位置
                this._offsetXForCamp1 = v3(this._reelFGPos.x + offsetX, this._reelFGPos.y, this._reelFGPos.z);
            }
            const targetPos = (campIndex === 1) ? this._offsetXForCamp1 : this._reelFGPos;
            this.node.setPosition(targetPos);
        }
    }


    public enterReadyHandMode() {

        this.inReadyHand = true;
        //console.log('rollSpeed', this.gameReelData.rollSpeed);
        this.gameReelData.rollSpeed = this.originSpeed * ROLL_SPEED_MULTIPLIER;
        //console.log('after_rollSpeed', this.gameReelData.rollSpeed);
    }

    public exitReadyHandMode() {
        this.inReadyHand = false;
        this.gameReelData.rollSpeed = this.originSpeed;
        this.currentDuration = 1 / this.gameReelData.rollSpeed;
    }

}



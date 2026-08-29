import { _decorator, Animation, Color, Node, Prefab, Skeleton, sp, Sprite, SpriteFrame, UIOpacity, Vec3 } from "cc";
import { SymbolItem } from "./SymbolItem";
import { UtilsKit } from "../lib/UtilsKit";
const { ccclass, property } = _decorator;

@ccclass("BigWingsSymbol")
export class BigWingsSymbol extends SymbolItem {
    public static scatterId: number = 1;

    @property({ type: [SpriteFrame], tooltip: "symbol圖" })
    public symbolSpriteFrame: SpriteFrame[] = [];

    @property({ type: [sp.SkeletonData], tooltip: "skeleton json" })
    public symbolSpineData: sp.SkeletonData[] = [];

    @property({ type: [sp.SkeletonData], tooltip: "bot skeleton json" })
    public botSpineData: sp.SkeletonData[] = [];

    public sprite: Node;
    public botSpine: Node;
    public frame: Node;
    public symSpine: Node;
    public lockSpine: Node;


    get height(): number {
        return 200;
    }


    changeSymbolID(id: number) {
        if (!this.sprite) {
            let len: number = this.node.children.length;
            for (let i: number = 0; i < len; i++) {
                let child: Node = this.node.children[i];
                if (child.name == "sprite") {
                    this.sprite = child;
                    this.sprite.active = true;
                } else if (child.name == "botSpine") {
                    this.botSpine = child;
                    this.botSpine.active = false;
                } else if (child.name == "frame") {
                    this.frame = child;
                    this.frame.active = false;
                } else if (child.name == "symSpine") {
                    this.symSpine = child;
                    this.symSpine.active = false;
                } else if (child.name == "lock") {
                    this.lockSpine = child;
                    this.lockSpine.active = false;
                } else {
                    child.active = false;
                }
            }
        }

        this._symbolID = id;
        // sprite
        this.sprite.getComponent(Sprite).spriteFrame = this.symbolSpriteFrame[this._symbolID];


        // this.win();
        // this.idle();
    }

    private hasBot(): boolean {
        return 2 <= this._symbolID && this._symbolID <= 5;
    }
    private isWild(): boolean {
        return this._symbolID == 0 || this._symbolID == 12 || this._symbolID == 13;
    }

    /**
     * M1~M4有底版（蛋、玉璽、葫蘆、玉佩）
     *
     * 
     * symbol圖片順序
     * -sprite
     * -symbol底層
     * -連線框
     * -symbol spine
     *
     * Wild圖片順序
     * -sprite
     * -symbol底層 (沒顯示)
     * -symbol spine
     * -連線框
     */

    win(id?): Promise<void> {
        return new Promise(async resolve => {
            this.sprite.active = false;
            let changed = false;
            if (id && this._symbolID != id) { this.changeSymbolID(id); changed = true; }
            const skeletonComponent: sp.Skeleton = this.symSpine.getComponent(sp.Skeleton);
            if (!skeletonComponent.skeletonData || changed) skeletonComponent.skeletonData = this.symbolSpineData[this._symbolID];


            // console.error("playWin", this._symbolID);
            skeletonComponent.premultipliedAlpha = false;

            this.node.active = true;
            let ani = "";
            switch (this._symbolID) {
                case 12:
                    ani = "11_connect";
                    break;
                case 13:
                    ani = "13_connect";
                    if (skeletonComponent.getCurrent(0)?.animation.name == "13_connect") resolve();

                    // adjust position by the index of golden wild
                    // this.symSpine.position = new Vec3(this.symSpine.position.x, this.symSpine.position.y + (pos - 1.5) * this.height, 0);
                    // this.frame.position = new Vec3(this.frame.position.x, this.frame.position.y + (pos - 1.5) * this.height, 0);
                    break;
                default:
                    ani = "connect";
                    break;
            }
            this.symSpine.active = true;
            this.symSpine.getComponent(sp.Skeleton).setAnimation(0, ani, true);

            this.botSpine.active = false;
            // 底板
            if (this.hasBot()) {
                const s: sp.Skeleton = this.botSpine.getComponent(sp.Skeleton);
                s.skeletonData = this.botSpineData[this._symbolID - 2];
                this.botSpine.active = true;
                s.setAnimation(0, "connect", true);
            }

            // 連線框
            let frame: sp.Skeleton = this.frame.getComponent(sp.Skeleton);
            ani = this._symbolID == 13 ? "connect_1x4" : "connect_1x1";
            this.frame.active = true;
            frame.setAnimation(0, ani, true);
            this.frame.setSiblingIndex(this.isWild() ? 3 : 2);

            // await UtilsKit.SetSkeletonAnimation(this.frame, 0, ani, false, true);

            await UtilsKit.Defer(1000 * 2);
            // this.reset();
            resolve();
        });
    }

    appear(): Promise<void> {
        if (!this.isWild() && this._symbolID !== BigWingsSymbol.scatterId) return;
        return new Promise(async resolve => {
            this.node.active = true;
            this.sprite.active = false;
            this.symSpine.active = true;
            const skeletonComponent: sp.Skeleton = this.symSpine.getComponent(sp.Skeleton);
            if (!skeletonComponent.skeletonData) skeletonComponent.skeletonData = this.symbolSpineData[this._symbolID];

            let ani = "";
            switch (this._symbolID) {
                case 0:
                    ani = "12_appear";
                    break;
                case 12:
                    ani = "11_appear";
                    break;
                default:
                    ani = "appear";
                    break;
            }


            await UtilsKit.SetSkeletonAnimation(this.symSpine, 0, ani, false, true);
            // this.reset();
            resolve();
        });
    }

    idle(): Promise<void> {
        if (this._symbolID !== BigWingsSymbol.scatterId && !this.isWild()) return;
        return new Promise(async resolve => {
            let ani = "";
            switch (this._symbolID) {
                case 13:
                    ani = "13_idle";
                    break;
                case 12:
                    ani = "11_idle";
                    break;
                default:
                    ani = "idle";
                    break;
            }
            this.node.active = true;
            this.sprite.active = false;
            this.frame.active = false;
            this.symSpine.active = true;
            const skeletonComponent: sp.Skeleton = this.symSpine.getComponent(sp.Skeleton);
            if (skeletonComponent.getCurrent(0)?.animation.name == ani) resolve();
            if (!skeletonComponent.skeletonData) skeletonComponent.skeletonData = this.symbolSpineData[this._symbolID];

            skeletonComponent.setAnimation(0, ani, true);
        });
    }

    expand(pos: number): Promise<void> {
        if (this._symbolID !== 0) return;
        console.error("Expand :", pos);
        return new Promise(async resolve => {
            this.sprite.active = false;
            this.symSpine.active = true;
            const skeletonComponent: sp.Skeleton = this.symSpine.getComponent(sp.Skeleton);
            if (!skeletonComponent.skeletonData) skeletonComponent.skeletonData = this.symbolSpineData[this._symbolID];
            skeletonComponent.setAnimation(0, `12_expanding${pos + 1}`, false);

            const siblingIndex = this.node.parent.children.length - 1;
            this.node.setSiblingIndex(siblingIndex);
            // console.log(pos);
            // this.changeToWild(pos);
            // this.sprite.active = true;


            await UtilsKit.SetSkeletonAnimation(this.symSpine, 0, `12_expanding${pos + 1}`, false, true);


            resolve();
        });
    }

    changeToWild(pos = 0) {
        this._symbolID = 13;
        this.sprite.getComponent(Sprite).spriteFrame = this.symbolSpriteFrame[13];
        this.sprite.position = new Vec3(this.sprite.position.x, this.sprite.position.y + (pos - 1.5) * this.height, 0);
        const siblingIndex = this.node.parent.children.length - 1;
        this.node.setSiblingIndex(siblingIndex);
    }



    lock(): Promise<void> {

        return new Promise(async resolve => {
            this.lockSpine.active = true;
            await UtilsKit.SetSkeletonAnimation(this.lockSpine, 0, "lock", false, true);

            resolve();
        });
    }

    reset() {
        this.frame.active = false;
        this.botSpine.active = false;
        this.symSpine.active = false;
        this.sprite.active = true;
    }
    recycle() {
        this.symSpine.getComponent(sp.Skeleton).skeletonData = null;
        this.symSpine.active = false;
        this.frame.active = false;
        this.botSpine.active = false;
        this.symSpine.position = new Vec3(0, 0, 0);
        this.sprite.position = new Vec3(0, 0, 0);
        this.frame.position = new Vec3(0, 0, 0);
        super.recycle();
    }
}

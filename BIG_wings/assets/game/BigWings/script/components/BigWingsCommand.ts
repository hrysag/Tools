import { _decorator, Button, Sprite, CCFloat, CCString,CCBoolean ,EventTouch, Node, Vec3, tween, UITransform, UIOpacity, SpriteFrame, Color, color, Label, Font, sp, Tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScaleArgument')
class ScaleArgument {
    @property(Node)
    public target: Node = null!;
    @property(CCFloat)
    public zoomScale: number = 0.9;
    @property(CCFloat)
    public duration: number = 0.1;
}
@ccclass('DisableOpacity')
class DisableOpacity {
    @property(UIOpacity)
    public uiOpacity: UIOpacity = null!;
    @property(CCFloat)
    public opacity: number = 150;
}
@ccclass('SyncSpriteTransition')
class SyncSpriteTransition {
    @property(Node)
    public target: Node = null!;
    @property(SpriteFrame)
    public normalSprite: SpriteFrame = null;
    @property(SpriteFrame)
    public pressedSprite: SpriteFrame = null;
    @property(SpriteFrame)
    public hoverSprite: SpriteFrame = null;
    @property(SpriteFrame)
    public disabledSprite: SpriteFrame = null;
}
@ccclass('CustomButtonSyncLabel')
class CustomButtonSyncLabel {
    @property(Font)
    public normalFont: Font = new Font;
    @property(Font)
    public hoverFont: Font = new Font;
    @property(Font)
    public disabledFont: Font = new Font;
}
@ccclass('SpineStatus')
class SpineStatus {
    @property(CCString)
    public normal: string = "";
    @property(CCBoolean)
    public normalAniLoop: Boolean;
    @property(CCString)
    public pressed: string = "";
    @property(CCBoolean)
    public pressedAniLoop: Boolean;
    @property(CCString)
    public hover: string = "";
    @property(CCBoolean)
    public hoverAniLoop: Boolean;
    @property(CCString)
    public disabled: string = "";
    @property(CCBoolean)
    public disabledAniLoop: Boolean;
}

@ccclass('BigWingsCommand')
export class BigWingsCommand extends Button {

    @property(Node)
    public Label: Node = null!;
    @property(Node)
    public Spine: Node = null!;

    @property({ type: [SyncSpriteTransition], tooltip: "需要與按鈕狀態同步的 Sprite 物件" })
    public syncSpriteTransition: SyncSpriteTransition[] = [];
    @property({ type: [ScaleArgument], tooltip: "按鈕按下後 Node Scale 需要改變的資訊" })
    public scaleArgument: ScaleArgument[] = [];
    @property({ type: [Sprite], tooltip: "按鈕禁用後 Sprite 物件需要啟用灰階功能" })
    public spriteDisabledGray: Sprite[] = [];
    @property({ type: [DisableOpacity], tooltip: "按鈕禁用後 Opacity 需要改變的資訊" })
    public spriteDisabledOpacity: DisableOpacity[] = [];
    @property({ type: [Node], tooltip: "按鈕 Hover 時需要啟用的按鈕" })
    public hoverNode: Node[] = [];
    @property({ type: [Node], tooltip: "按鈕按下時需要啟用的按鈕" })
    public downNode: Node[] = [];
    @property([CustomButtonSyncLabel])
    private syncLabelTexture: CustomButtonSyncLabel[] = [];
    @property([SpineStatus])
    private SpineStatus: SpineStatus[] = [];


    private disableAllDownNode: () => void;

    private handleScaleArgument(duration?: number, initialScale?: Vec3, destScale?: Vec3) {
        for (const data of this.scaleArgument) {
            Tween.stopAllByTarget(data.target);

            if (initialScale) {
                data.target.setScale(new Vec3(initialScale.x, initialScale.y, 1));
            }

            let initialScaleX: number = data.target.getScale().x;
            let initialScaleY: number = data.target.getScale().y;
            let destScaleX: number;
            let destScaleY: number;

            if (destScale) {
                destScaleX = destScale.x;
                destScaleY = destScale.y;

                if (destScaleX == initialScaleX && destScaleY == initialScaleY) {
                    continue;
                }
            }

            let tweenDuration: number;
            if (duration) {
                tweenDuration = duration;
            }

            let dummyValue: { value: number } = { value: 0 };
            tween(dummyValue)
                .to(tweenDuration ? tweenDuration : data.duration, { value: 1 }, {
                    onUpdate: (target: { value: number }, ratio: number) => {
                        if (!destScaleX) {
                            destScaleX = data.zoomScale;
                            destScaleY = data.zoomScale;
                        }
                        let currentScaleX: number = initialScaleX + target.value * (destScaleX - initialScaleX);
                        let currentScaleY: number = initialScaleY + target.value * (destScaleY - initialScaleY);
                        data.target.setScale(new Vec3(currentScaleX, currentScaleY, 1));
                    },
                    easing: 'sineOut' 
                })
                .start();

        }
    }

    protected _onTouchBegan(event?: EventTouch): void {
        super._onTouchBegan(event);
        // console.log("按下按鈕")

        if (!this._interactable) return;

        if (this.downNode.length > 0) {
            if (!this.disableAllDownNode) {
                this.disableAllDownNode = () => {
                    for (const data of this.downNode) {
                        data.active = false;
                    }
                }
            }

            this.unschedule(this.disableAllDownNode);
            for (const data of this.downNode) {
                data.active = true;
            }
            this.scheduleOnce(this.disableAllDownNode, 1);
        }

        this.handleScaleArgument(0.05, new Vec3(1, 1, 1));

    }
    protected _onTouchEnded(event?: EventTouch): void {
        super._onTouchEnded(event);
        // console.log("放開按鈕")
        for (const data of this.hoverNode) {
            data.active = false;
        }

        this.handleScaleArgument(null, null, new Vec3(1, 1, 1));

        // console.log("Button End");
    }

    protected _onTouchCancel(event?: EventTouch): void {
        super._onTouchCancel(event);

        this.handleScaleArgument(null, null, new Vec3(1, 1, 1));

        // console.log("Button Cancel");
    }
    protected _onMouseMoveIn(): void {
        super._onMouseMoveIn();

        if (!this._interactable) return;

        for (const data of this.hoverNode) {
            data.active = true;
        }
        this.handleScaleArgument(null, new Vec3(1, 1, 1), new Vec3(1.1, 1.1, 1.1));
        // console.log("Button Move In");
    }

    protected _onMouseMoveOut(): void {
        super._onMouseMoveOut();

        for (const data of this.hoverNode) {
            data.active = false;
        }
        this.handleScaleArgument(null, null, new Vec3(1, 1, 1));
        // console.log("Button Move Out");
    }


    protected _onTouchMove(event?: EventTouch): void {
        super._onTouchMove(event);
        if (!this._interactable) return;
        // mobile phone will not emit _onMouseMoveOut,
        // so we have to do hit test when touch moving
        /*
        if (!event)
            return;

        const touch = (event).touch;
        if (!touch)
            return;

        const hit = this.node.getComponent(UITransform)!.hitTest(touch.getLocation());
        if (hit) {
            this.handleScaleArgument(0.05);
            // console.log("Button Move hit");
        } else {
            this.handleScaleArgument(null, null, new Vec3(1, 1, 1));
            // console.log("Button Move doesn't hit");
        }
        
        event.propagationStopped = true;
        */
    }

    protected _updateState(): void {
        super._updateState();

        //同步更新sprite圖片四態
        for (const data of this.syncSpriteTransition) {
            data.target.getComponent(Sprite).spriteFrame = data[`${this._getButtonState()}Sprite`];
        }

        //這個專案應該不會用到這個
        // //同步更新label顏色四態
        // for (const data of this.syncLabelTransitionColor) {
        //     data.target.getComponent(Label).color = data[`${this._getButtonState()}Color`];
        // }
        for (const data of this.syncLabelTexture) {
            if (data[`${this._getButtonState()}Font`])
                this.Label.getComponent(Label).font = data[`${this._getButtonState()}Font`];
        }
        for (const data of this.syncLabelTexture) {
            if (data[`${this._getButtonState()}Font`])
                this.Label.getComponent(Label).font = data[`${this._getButtonState()}Font`];
        }


        //禁用時的灰階變化
        for (const data of this.spriteDisabledGray) {
            data.grayscale = !this.interactable;
        }
        for (const data of this.SpineStatus) {
            if (data[`${this._getButtonState()}`]){
                this.Spine.getComponent(sp.Skeleton).setAnimation(0, data[`${this._getButtonState()}`], data[`${this._getButtonState()}AniLoop`]);
            }else{
                this.Spine.getComponent(sp.Skeleton).clearAnimation()
                // this.Spine.getComponent(sp.Skeleton).setAnimation(0, data[`${this._getButtonState()}`], data[`${this._getButtonState()}AniLoop`]);

            }
        }

        //禁用時的透明度變化
        for (const data of this.spriteDisabledOpacity) {
            if (this.interactable) {
                data.uiOpacity.opacity = 255;
            } else {
                data.uiOpacity.opacity = data.opacity;
            }
        }
    }
}


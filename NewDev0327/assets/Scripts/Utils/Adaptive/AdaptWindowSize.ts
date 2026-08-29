import { _decorator, Canvas, EPSILON, Label, Node, screen, Size, UITransform, view, Widget } from 'cc';
import { IWindowResize, ScreenAdapter } from '../Orientation';
import { Orientation } from '../../GameScripts/Definition';
import { BUILD, EDITOR, PREVIEW } from 'cc/env';
const { ccclass, property } = _decorator;

type ResizeListener = (newSize: Size) => void;

@ccclass('AdaptWindowSize')
export class AdaptWindowSize extends IWindowResize {
    @property({ visible: true, editorOnly: true, readonly: true })
    private _description: string = 'Auto resize the node to fit the window size while window size changes.';

    @property({ visible: true, tooltip: '設定自適應拓展的最大範圍，0表示不限制' })
    public maxSize: Size = new Size(1400, 1400);

    protected _resizeListeners: ResizeListener[] = [];

    protected _uiTransform: UITransform | null = null;
    protected _canvasTransform: UITransform | null = null;
    protected _canvasHtmlElement: HTMLElement | null = null;

    start() {
        this._uiTransform = this.node.getComponent(UITransform);

        const canvas = this.getCanvasFromParentRecursively(this.node);
        if (canvas) {
            this._canvasTransform = canvas.getComponent(UITransform);
        } else {
            console.error('AdaptWindowSize: Canvas not found');
            return;
        }

        this._canvasHtmlElement = document.getElementById('GameCanvas');
    }

    /**
     * 註冊UITransform的ContentSize修改事件，會在ContentSize修改，所有Child的Widget updateAlignment後觸發
     * @param listener 註冊的事件
     */
    public addResizeListener(listener: ResizeListener): void {
        if (this._resizeListeners.indexOf(listener) === -1) {
            this._resizeListeners.push(listener);
        }
    }

    /**
     * 移除UITransform的ContentSize修改事件
     * @param listener 移除的事件
     */
    public removeResizeListener(listener: ResizeListener): void {
        if (!this._resizeListeners) {
            return;
        }

        const index = this._resizeListeners.indexOf(listener);
        if (index !== -1) {
            this._resizeListeners.splice(index, 1);
        }
    }

    public onEnable(): void {
        this.onWindowResize(ScreenAdapter.UI_Orientation);
    }

    public override onWindowResize(orientation: Orientation): void {
        this.scheduleOnce(() => {
            this.onResize(orientation);
        });
    }

    protected onResize(orientation: Orientation) {
        if (!this.node.activeInHierarchy) {
            return;
        }

        if (!this._uiTransform || !this._canvasTransform || !this._canvasHtmlElement) {
            console.error('AdaptWindowSize: UITransform or CanvasTransform or CanvasHtmlElement not found');
            return;
        }

        let actualWidth = this._canvasHtmlElement.clientWidth || 1;
        let actualHeight = this._canvasHtmlElement.clientHeight || 1;

        let preferredWidth = this._canvasHtmlElement.clientWidth || 1;
        let preferredHeight = this._canvasHtmlElement.clientHeight || 1;

        const viewSize = view.getVisibleSizeInPixel();
        if (orientation === Orientation.Landscape) {
            // 防止除零錯誤
            const canvasWidth = this._canvasTransform.contentSize.width || 1;
            const canvasHeight = this._canvasTransform.contentSize.height || 1;
            const actualAspectRatio = preferredWidth / preferredHeight;
            const canvasAspectRatio = canvasWidth / canvasHeight;
            if (EDITOR) {
                // 編輯器下要考慮 DPR , Mac 下通常是 2 , Windows 下通常是 1
                viewSize.width /= screen.devicePixelRatio;
                viewSize.height /= screen.devicePixelRatio;
                const viewWidth = Math.max(viewSize.width, EPSILON);
                const viewHeight = Math.max(viewSize.height, EPSILON);

                if (actualAspectRatio > canvasAspectRatio) {
                    actualWidth = preferredWidth / viewWidth * canvasWidth;
                    actualHeight = preferredHeight / viewHeight * canvasHeight;
                } else {
                    actualWidth = canvasWidth * viewHeight / preferredHeight;
                    actualHeight = canvasHeight;
                }
            } else if (PREVIEW || BUILD) {
                viewSize.width /= screen.devicePixelRatio;
                viewSize.height /= screen.devicePixelRatio;
                const viewWidth = Math.max(viewSize.width, EPSILON);
                const viewHeight = Math.max(viewSize.height, EPSILON);

                if (actualAspectRatio > canvasAspectRatio) {
                    actualWidth = preferredWidth * canvasHeight / preferredHeight;
                    actualHeight = canvasHeight;
                } else {
                    actualWidth = canvasWidth;
                    actualHeight = preferredHeight * canvasWidth / preferredWidth;
                }
            }
        } else {
            // 防止除零錯誤
            const canvasWidth = this._canvasTransform.contentSize.width || 1;
            const canvasHeight = this._canvasTransform.contentSize.height || 1;
            const actualAspectRatio = preferredHeight / preferredWidth;
            const canvasAspectRatio = canvasHeight / canvasWidth;

            if (EDITOR) {
                viewSize.width /= screen.devicePixelRatio;
                viewSize.height /= screen.devicePixelRatio;
                const viewWidth = Math.max(viewSize.width, EPSILON);
                const viewHeight = Math.max(viewSize.height, EPSILON);

                if (actualAspectRatio < canvasAspectRatio) {
                    actualWidth = preferredWidth / viewWidth * canvasWidth;
                    actualHeight = preferredHeight / viewHeight * canvasHeight;
                } else {
                    actualWidth = canvasWidth * viewHeight / preferredHeight;
                    actualHeight = canvasHeight;
                }
            } else if (PREVIEW || BUILD) {
                viewSize.width /= screen.devicePixelRatio;
                viewSize.height /= screen.devicePixelRatio;
                const viewWidth = Math.max(viewSize.width, EPSILON);
                const viewHeight = Math.max(viewSize.height, EPSILON);

                if (actualAspectRatio > canvasAspectRatio) {
                    actualWidth = canvasWidth;
                    actualHeight = preferredHeight * canvasWidth / preferredWidth;
                } else {
                    actualWidth = preferredWidth * canvasHeight / preferredHeight;
                    actualHeight = canvasHeight;
                }
            }
        }

        if (this.maxSize.width > 0 && actualWidth > this.maxSize.width) {
            actualWidth = this.maxSize.width;
        }
        if (this.maxSize.height > 0 && actualHeight > this.maxSize.height) {
            actualHeight = this.maxSize.height;
        }

        this._uiTransform.setContentSize(actualWidth, actualHeight);

        const widgets = this.node.getComponentsInChildren(Widget);
        for (let i = 0; i < widgets.length; i++) {
            widgets[i].updateAlignment();
        }

        for (let i = 0; i < this._resizeListeners.length; i++) {
            this._resizeListeners[i](new Size(actualWidth, actualHeight));
        }
    }

    /**
     * 遞迴向上尋找Canvas
     * @param node 
     * @returns 從node網上找第一個Canvas, 或是找不到Canvas時回傳null
     */
    protected getCanvasFromParentRecursively(node: Node): Canvas | null {
        let canvas = node.getComponent(Canvas);
        if (canvas) {
            return canvas;
        }

        if (node.parent) {
            return this.getCanvasFromParentRecursively(node.parent);
        }

        return null;
    }
}



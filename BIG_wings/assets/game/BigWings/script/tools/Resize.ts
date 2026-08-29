import { _decorator, Size, view, ResolutionPolicy, director, game, screen, macro } from 'cc';

export class Resize {
    private leftBG: HTMLDivElement;
    private rightBG: HTMLDivElement;

    constructor(leftBG: HTMLDivElement, rightBG: HTMLDivElement) {
        this.leftBG = leftBG;
        game.canvas.parentNode.appendChild(this.leftBG);

        this.rightBG = rightBG;
        game.canvas.parentNode.appendChild(this.rightBG);

        view.setOrientation(macro.ORIENTATION_PORTRAIT);
        view.setResolutionPolicy(ResolutionPolicy.EXACT_FIT);

        this.resize();
        window.addEventListener('resize', this.resize);
        // view.setResizeCallback(this.resize);
    }

    public resize: () => void = () => {

        const devicePixelRatio: number = screen.devicePixelRatio;
        const designResolutionSize: Size = view.getDesignResolutionSize();
        screen.windowSize = new Size(window.innerWidth, window.innerHeight);
        const windowSize: Size = screen.windowSize;

        const containerW: number = windowSize.width;
        const containerH: number = windowSize.height;
        const designW: number = designResolutionSize.width;
        const designH: number = designResolutionSize.height;
        const scaleX: number = containerW / designW;
        const scaleY: number = containerH / designH;

        let scale: number = 0;
        let contentW: number;
        let contentH: number;
        if (scaleX < scaleY) {
            scale = scaleX;
            contentW = containerW;
            contentH = designH * scale;
        }
        else {
            scale = scaleY;
            contentW = designW * scale;
            contentH = containerH;
        }

        let x: number = Math.round(0.5 * (containerW - contentW) / devicePixelRatio);
        let y: number = Math.round(0.5 * (containerH - contentH) / devicePixelRatio);
        let w: number = Math.round(contentW / devicePixelRatio);
        let h: number = Math.round(contentH / devicePixelRatio);
        game.canvas.style.position = "absolute";
        game.canvas.style.width = `${w}px`;
        game.canvas.style.height = `${h}px`;
        game.canvas.style.left = `${x}px`;
        game.canvas.style.top = `${y}px`;

        director.root.resize(contentW, contentH);

        x += w;
        w = (Math.round(containerW / devicePixelRatio) - w) * 0.5;
        h = Math.round(containerH / devicePixelRatio);

        this.leftBG.style.width = `${w}px`;
        // this.leftBG.style.height = `${h}px`;

        this.rightBG.style.left = `${x}px`;
        this.rightBG.style.width = `${w}px`;
        // this.rightBG.style.height = `${h}px`;
    };
}

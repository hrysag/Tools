import { _decorator, Color, Component, Node, Vec3 } from 'cc';
import { TextureLineGraphics } from '../components/TextureLineGraphics/script/TextureLineGraphics';
const { ccclass, property } = _decorator;

@ccclass('LineRope')
export class LineRope extends Component {

    protected ropeGraphic: TextureLineGraphics

    private points: Vec3[];

    private segmentSide: number[];

    private eachSegmentHeight: number;


    private tempPointUpDownLength: number;
    private tempPointsLength: number;
    private tempCheckUpDown: number;
    private tempNowSideLength: number;


    @property({ type: Number, tooltip: "left and right segment length" })
    protected segmentLengthLR: number = 0;
    @property({ type: Number, tooltip: "width between wheelItems" })
    protected segmentWidth: number = 0;
    @property({ type: Number, tooltip: "height between wheelItems" })
    protected segmentHeight: number = 0;
    @property({ type: Number, tooltip: "num of wheelItems in one wheel" })
    protected wheelItemNum: number = 0;

    /**
     * Fold the Line
     * @param foldAry array length based on wheel length, ex: [0,1,2,2,1] as 5 wheels 3 items
     */
    foldLine(foldAry: number[]) {
        this.points = [];

        for (let index = 0; index < foldAry.length; index++) {

            this.eachSegmentHeight = -foldAry[index] * this.segmentHeight;

            if (index == 0) {
                for (let i = 0; i < 2; i++) {
                    this.points[i] = new Vec3(i * this.segmentLengthLR, this.eachSegmentHeight);
                }
            } else {
                this.tempPointsLength = this.points.length;
                this.tempCheckUpDown = foldAry[index] - foldAry[index - 1];
                this.tempNowSideLength = this.segmentSide[Math.abs(this.tempCheckUpDown)];

                if (this.tempCheckUpDown > 0) {
                    this.tempPointUpDownLength = -this.segmentHeight * Math.abs(this.tempCheckUpDown);
                } else if (this.tempCheckUpDown < 0) {
                    this.tempPointUpDownLength = this.segmentHeight * Math.abs(this.tempCheckUpDown);
                } else {
                    this.tempPointUpDownLength = 0;
                }

                for (let i = 0; i < 1; i++) {
                    this.points[this.tempPointsLength + i] = new Vec3(this.points[this.tempPointsLength - 1].x + this.segmentWidth / this.tempNowSideLength * (i + 1) * this.tempNowSideLength, this.points[this.tempPointsLength - 1].y + this.tempPointUpDownLength * (i + 1));
                }
            }
        }

        this.tempPointsLength = this.points.length;
        this.points[this.tempPointsLength] = new Vec3(this.points[this.tempPointsLength - 1].x + this.segmentLengthLR, this.points[this.tempPointsLength - 1].y);

        this.ropeGraphic.clear();
        this.ropeGraphic.moveTo(this.points[0].x, this.points[1].y);
        for (let i = 1; i < this.points.length; i++) {
            this.ropeGraphic.lineTo(this.points[i].x, this.points[i].y);
        }
        this.ropeGraphic.stroke();


    }

    private getSideLength(a: number, b: number): number {
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    }

    onLoad(): void {
        this.segmentSide = [];
        this.segmentSide[0] = 1;
        for (let i = 1; i < this.wheelItemNum; i++) {
            this.segmentSide[i] = this.getSideLength(this.segmentWidth, this.segmentHeight * (i + 1));
        }

        this.ropeGraphic = this.getComponent(TextureLineGraphics);
    }

    start() {
        
    }

    update(deltaTime: number) {

    }
}


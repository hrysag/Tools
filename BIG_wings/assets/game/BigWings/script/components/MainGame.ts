import { _decorator, Component, instantiate, Node ,UIOpacity} from 'cc';
import { LineRope } from '../wheel/LineRope';
const { ccclass, property } = _decorator;

@ccclass('MainGame')
export class MainGame extends Component {

    @property({ type: Node, tooltip: "RopeNode" })
    protected ropeNode: Node = null;

    protected _grid: any;
    protected _lines: any;

    protected _buildAni: number[] = [];

    protected _lineContainer: Node;

    protected _lineList: Object = {};
    protected _drawLines: Node[] = [];
    protected _drawLinesPool: Node[] = [];

    set lines(v) { this._lines = v; this.organizeLines(); }
    set lineList(l: object) { this.setLineList(l); }

    start() {
        this._lineContainer = new Node();
        this.node.addChild(this._lineContainer);
    }

    update(deltaTime: number) {

    }


    lineTest(){
        this.lines = [
            {
              "LineID": 1,
              "GridNum": 5,
              "Grids": [
                2,
                6,
                10,
                14,
                18
              ],
              "Payoff": 30,
              "Element": [
                4,
                0,
                12,
                12,
                0
              ],
              "ElementID": 4
            },
            {
              "LineID": 4,
              "GridNum": 5,
              "Grids": [
                4,
                8,
                12,
                16,
                20
              ],
              "Payoff": 12,
              "Element": [
                11,
                0,
                12,
                12,
                0
              ],
              "ElementID": 11
            },
            {
              "LineID": 5,
              "GridNum": 3,
              "Grids": [
                2,
                7,
                12
              ],
              "Payoff": 2.4,
              "Element": [
                4,
                0,
                12,
                10,
                0
              ],
              "ElementID": 4
            },
            {
              "LineID": 7,
              "GridNum": 3,
              "Grids": [
                1,
                5,
                10
              ],
              "Payoff": 2.4,
              "Element": [
                4,
                0,
                12,
                10,
                0
              ],
              "ElementID": 4
            },
            {
              "LineID": 10,
              "GridNum": 5,
              "Grids": [
                3,
                8,
                12,
                16,
                19
              ],
              "Payoff": 12,
              "Element": [
                8,
                0,
                12,
                12,
                0
              ],
              "ElementID": 8
            },
            {
              "LineID": 12,
              "GridNum": 3,
              "Grids": [
                4,
                7,
                10
              ],
              "Payoff": 0.6,
              "Element": [
                11,
                0,
                12,
                10,
                0
              ],
              "ElementID": 11
            },
            {
              "LineID": 13,
              "GridNum": 3,
              "Grids": [
                2,
                5,
                10
              ],
              "Payoff": 2.4,
              "Element": [
                4,
                0,
                12,
                10,
                0
              ],
              "ElementID": 4
            },
            {
              "LineID": 16,
              "GridNum": 3,
              "Grids": [
                4,
                7,
                12
              ],
              "Payoff": 0.6,
              "Element": [
                11,
                0,
                12,
                10,
                0
              ],
              "ElementID": 11
            },
            {
              "LineID": 17,
              "GridNum": 3,
              "Grids": [
                2,
                7,
                10
              ],
              "Payoff": 2.4,
              "Element": [
                4,
                0,
                12,
                10,
                0
              ],
              "ElementID": 4
            },
            {
              "LineID": 19,
              "GridNum": 5,
              "Grids": [
                1,
                6,
                10,
                14,
                17
              ],
              "Payoff": 30,
              "Element": [
                4,
                0,
                12,
                12,
                0
              ],
              "ElementID": 4
            },
            {
              "LineID": 22,
              "GridNum": 3,
              "Grids": [
                3,
                7,
                10
              ],
              "Payoff": 0.6,
              "Element": [
                8,
                0,
                12,
                10,
                0
              ],
              "ElementID": 8
            },
            {
              "LineID": 24,
              "GridNum": 3,
              "Grids": [
                3,
                7,
                12
              ],
              "Payoff": 0.6,
              "Element": [
                8,
                0,
                12,
                10,
                0
              ],
              "ElementID": 8
            },
            {
              "LineID": 26,
              "GridNum": 5,
              "Grids": [
                3,
                6,
                10,
                14,
                17
              ],
              "Payoff": 12,
              "Element": [
                8,
                0,
                12,
                12,
                0
              ],
              "ElementID": 8
            },
            {
              "LineID": 27,
              "GridNum": 3,
              "Grids": [
                1,
                5,
                10
              ],
              "Payoff": 2.4,
              "Element": [
                4,
                0,
                12,
                10,
                0
              ],
              "ElementID": 4
            },
            {
              "LineID": 30,
              "GridNum": 5,
              "Grids": [
                4,
                7,
                10,
                14,
                17
              ],
              "Payoff": 12,
              "Element": [
                11,
                0,
                12,
                12,
                0
              ],
              "ElementID": 11
            },
            {
              "LineID": 32,
              "GridNum": 3,
              "Grids": [
                4,
                8,
                12
              ],
              "Payoff": 0.6,
              "Element": [
                11,
                0,
                12,
                10,
                0
              ],
              "ElementID": 11
            },
            {
              "LineID": 34,
              "GridNum": 3,
              "Grids": [
                3,
                8,
                12
              ],
              "Payoff": 0.6,
              "Element": [
                8,
                0,
                12,
                10,
                0
              ],
              "ElementID": 8
            },
            {
              "LineID": 35,
              "GridNum": 3,
              "Grids": [
                1,
                6,
                10
              ],
              "Payoff": 2.4,
              "Element": [
                4,
                0,
                12,
                10,
                0
              ],
              "ElementID": 4
            },
            {
              "LineID": 37,
              "GridNum": 3,
              "Grids": [
                2,
                5,
                10
              ],
              "Payoff": 2.4,
              "Element": [
                4,
                0,
                12,
                10,
                0
              ],
              "ElementID": 4
            },
            {
              "LineID": 40,
              "GridNum": 3,
              "Grids": [
                4,
                7,
                10
              ],
              "Payoff": 0.6,
              "Element": [
                11,
                0,
                12,
                10,
                0
              ],
              "ElementID": 11
            },
            {
              "LineID": 41,
              "GridNum": 3,
              "Grids": [
                2,
                5,
                10
              ],
              "Payoff": 2.4,
              "Element": [
                4,
                0,
                12,
                10,
                0
              ],
              "ElementID": 4
            },
            {
              "LineID": 44,
              "GridNum": 3,
              "Grids": [
                4,
                7,
                12
              ],
              "Payoff": 0.6,
              "Element": [
                11,
                0,
                12,
                10,
                0
              ],
              "ElementID": 11
            },
            {
              "LineID": 46,
              "GridNum": 5,
              "Grids": [
                2,
                7,
                12,
                16,
                19
              ],
              "Payoff": 30,
              "Element": [
                4,
                0,
                12,
                12,
                0
              ],
              "ElementID": 4
            },
            {
              "LineID": 48,
              "GridNum": 5,
              "Grids": [
                2,
                7,
                12,
                16,
                20
              ],
              "Payoff": 30,
              "Element": [
                4,
                0,
                12,
                12,
                0
              ],
              "ElementID": 4
            },
            {
              "LineID": 49,
              "GridNum": 3,
              "Grids": [
                1,
                5,
                10
              ],
              "Payoff": 2.4,
              "Element": [
                4,
                0,
                12,
                10,
                0
              ],
              "ElementID": 4
            }
          ]

          this.drawLines();
    }

    protected organizeLines(): void {
        this._grid = [];
        this._buildAni = [];
        if (this._lines.length > 0) {
            this._grid = this._lines
                .map(line => line.Grids)
                .reduce((a, b) => a.concat(b))
                .filter((value, index, self) => self.indexOf(value) === index)
                .sort((a, b) => a - b);

        }
        this._buildAni = this._grid.concat();


        console.error(`this._grid`, this._grid);
        console.error(`this._buildAni`, this._buildAni);

    }

    protected setLineList(l: Object): void {
        for (let i in l) {
            this._lineList[i] = l[i].map((n) => (n - 1) % 4);
        };
    }

    protected drawLines(): void {
        this._drawLines = [];
        this._lines.forEach((e, index: number) => {
            let line = this.getLinePool(e.LineID);
            this._drawLines.push(line);
        })
    }

    protected getLinePool(card: number) {
        var item: Node = new Node(`line pool ${card}`);
        if (this._drawLinesPool == null || this._drawLinesPool.length == 0) {
            item = instantiate(this.ropeNode);
            item.getComponent(LineRope).onLoad();
        } else {
            item = this._drawLinesPool.shift();
        }
        console.log("getLines", item.getComponent(LineRope));
        
        item.getComponent(LineRope).foldLine(this._lineList[card]);
        item.active = true;
        item.setPosition(0, 1470);
        item.name = `LineID${card}`;
        this._lineContainer.addChild(item);
        return item;
    }

    protected addLinePool(line: Node) {
        if (this._drawLinesPool == null) this._drawLinesPool = [];
        line.setPosition(0, 0);
        // line.active = false;
        // line.name = "";
        this.node.removeChild(line);
        this._drawLinesPool.push(line);
    }

    public showLine(id: number): void {
      let line = this.getLinePool(id);
      // line.active = true;
      line.getComponent(UIOpacity).opacity = 255;
      this._lineContainer.addChild(line);
      this._drawLines.push(line);
    }
    public resetLine(): void {
      this._drawLines.forEach(l => this.addLinePool(l));
      this._drawLines = [];
    }
}


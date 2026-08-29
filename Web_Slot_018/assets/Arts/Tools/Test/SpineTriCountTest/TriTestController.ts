import { _decorator, Component, director, game, instantiate, Node, Prefab, profiler } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TriTestController')
export class TriTestController extends Component {

    @property(Prefab)
    mesh1000: Prefab = null;

    @property(Prefab)
    WH_BH: Prefab = null;

    @property(Prefab)
    WH_BL: Prefab = null;

    @property(Prefab)
    WL_BL: Prefab = null;

    start() {
        profiler.showStats();
    }

    private onFPS30() {
        game.frameRate = 30;
    }

    private onFPS60() {
        game.frameRate = 60;
    }

    private createMesh1000() {
        for (let i = 0; i < 5; i++) {
            let node = instantiate(this.mesh1000);
            node.parent = this.node;
        }
    }

    private createWH_BH() {
        for (let i = 0; i < 5; i++) {
            let node = instantiate(this.WH_BH);
            node.parent = this.node;
        }
    }

    private createWH_BL() {
        for (let i = 0; i < 5; i++) {
            let node = instantiate(this.WH_BL);
            node.parent = this.node;
        }
    }

    private createWL_BL() {
        for (let i = 0; i < 5; i++) {
            let node = instantiate(this.WL_BL);
            node.parent = this.node;
        }
    }

    private destroyAll() {
        let children = [...this.node.children];
        for (let i = 0; i < children.length; i++) {
            children[i].destroy();
        }
    }

    private destroyOne() {
        if (this.node.children.length > 0) {
            this.node.children[0].destroy();
        }
    }
}




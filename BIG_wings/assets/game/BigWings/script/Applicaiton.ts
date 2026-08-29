import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { BasePresenter } from './lib/BasePresenter';
import { BaseModel } from './lib/BaseModel';
import { BaseView } from './lib/BaseView';
import { Resize } from './tools/Resize';
import { BigWingsView } from './components/BigWingsView';
export interface IAppliction {
    relese();
}

@ccclass('Application')
export class Application extends Component implements IAppliction {

    private static singleton: Application = null;

    protected isSingleton: boolean = false;

    onLoad() {
        this.resize();
        // this.setup();
    }
    public async setup() {

        console.log(this.getComponent(BigWingsView), this);
        let model: BaseModel = new BaseModel();
        let view: BaseView = new BaseView();
        let presenter: BasePresenter = new BasePresenter(model, view);
        // view.presenter = presenter;
        presenter.registerRecvEvents();
        presenter.registerHandleProgressEvents();
        let event: any = false;
        console.log(`Connect`, event = await presenter.connect().catch(() => { return false; }));
        if (event === false) return;

        console.log(`login:`, await presenter.login().catch(e => e.error));
        console.log(`gameCode:`, await presenter.takeMachine());
        console.log(`getMachineDetail:`, await presenter.getMachineDetail());
        console.log(`onLoadInfo:`, await presenter.onLoadInfo());
        console.log(`creditExchange:`, await presenter.creditExchange('1:1', 100));
        console.log(`balanceExchange:`, await presenter.balanceExchange());
        console.log(`JoinGame:`, await presenter.joinGame().catch((e) => { return e; }));
        console.log(`LeaveGame:`, await presenter.leaveGame().catch((e) => { return e; }));
        console.log(`Exit:`, await presenter.exit());

    }
    update(deltaTime: number) {
    }

    resize() {
        var leftBG: HTMLDivElement = document.createElement("div");
        leftBG.style.position = "absolute";
        leftBG.style.width = "100%";
        leftBG.style.height = "100%";
        leftBG.style.zIndex = "-1";
        leftBG.style.backgroundSize = "cover";
        leftBG.style.backgroundPosition = "right center";
        leftBG.style.backgroundImage = "url('https://demo.casinovir999.net/app/flash/pig/game/casinoH5/BigWings/assets/image/bg_stretch1_land.jpg')";

        var rightBG: HTMLDivElement = document.createElement("div");
        rightBG.style.position = "absolute";
        rightBG.style.width = "100%";
        rightBG.style.height = "100%";
        rightBG.style.zIndex = "-1";
        rightBG.style.backgroundSize = "cover";
        rightBG.style.backgroundPosition = "left center";
        rightBG.style.backgroundImage = "url('https://demo.casinovir999.net/app/flash/pig/game/casinoH5/BigWings/assets/image/bg_stretch2_land.jpg')";

        new Resize(leftBG, rightBG);
    }
    public relese() {
        if (this.isSingleton) Application.singleton = null;
    }
    public static getInstance(): Application {
        if (!Application.singleton) {
            Application.singleton = new Application();
            Application.singleton.isSingleton = true;
        }
        return Application.singleton;
    }
}
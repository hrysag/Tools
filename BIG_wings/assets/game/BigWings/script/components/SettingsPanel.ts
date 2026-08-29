
import { CCString, Component, Prefab, _decorator, instantiate, Node, Label, CCBoolean, EventHandler, Button, Input, CCObject, CCInteger, Toggle } from "cc";
import { AlertPanel } from "./AlertPanel";
const { ccclass, property, menu } = _decorator;


@ccclass()
@menu('BigWings/SettingsPanel')
export class SettingsPanel extends Component {
    
    // @property( { type: CCBoolean } )
    protected useContainer: boolean = false;

    @property( { type: Node } )
    protected navigationBar: Node;

    // @property( { type: Node } )
    // protected backgroud: Node;

    @property( { type: Node } )
    protected tabBar: Node;
    
    @property( { type: Node } )
    protected viewControllers: Node[] = [];

    @property( { type: Node } )
    protected tabBarItems: Node[] = [];
    
    @property( { type: CCInteger } )
    public get selectedIndex(): number { 
        return this._selectedIndex;
    }
    public set selectedIndex(value: number) {
        console.log(`selectedIndex: ${value}`, this._selectedIndex);
        
        if (this._selectedIndex !== value) {
            this.selectedTabBarItem(value);
            this.showView(value);
        }
        this._selectedIndex = value;
    }

    @property( { type: CCInteger, visible: false } )
    public _selectedIndex: number = 3;

    protected helpButton: Node;

    protected infoButton: Node;

    @property( { type: Node } )
    protected closeButton: Node;

    // public title: string;

    protected onLoad(): void {
        // 初始化
        if (this.tabBar) {
            this.tabBar.parent.active = true;
            this.tabBar.active = true;
        }
        if (this.navigationBar) {
            this.navigationBar.parent.active = true;
            this.navigationBar.active = true;
        }

        if (this.closeButton) {
            this.closeButton.on(Button.EventType.CLICK, () => this.hide());
        }
        if (this.infoButton) {
            this.infoButton.on(Button.EventType.CLICK, () => {});
        }
        console.log(`Menu`, this.tabBarItems.length);

        // (this.tabBarItems[0] as Node).on(Button.EventType.CLICK, () => {
        //     console.log(`tabBarItems`);
        // });

        console.log(`AlertPanel.getInstance()`, AlertPanel.getInstance());
        this.selectedTabBarItem(this._selectedIndex);
        this.showView(this._selectedIndex);
    }
    protected start(): void {
        this.registerTabBarItemEvent();

    }
    protected selectedTabBarItem(selectedIndex: number): void { 
        const { tabBarItems } = this;

        tabBarItems.forEach((item, index) => {
            let button = item.getComponent(Toggle);
            button.isChecked = (index === selectedIndex);
        });

        
    }
    protected showView(selectedIndex: number): void {
        const { viewControllers } = this;
        console.log(`showView: ${selectedIndex}`);
        
        viewControllers.forEach((view, index) => {
            return view.active = (index === selectedIndex);
        });

    }
    protected registerTabBarItemEvent(): void {
        const { tabBarItems } = this;

        tabBarItems.forEach((item, index) => {

            item.on(Button.EventType.CLICK, () => {
                this.selectedIndex = index;
                if (index != 0) return;
                let button = item.getComponent(Toggle);
                button.node.on(Toggle.EventType.CLICK, async () => {
                    await AlertPanel.getInstance().alert({
                        message: '您確定要離開遊戲?',
                        confirmButtonText: '離開',
                        confirmButtonVisible: true,
                        cancelButtonText: '繼續',
                        cancelButtonVisible: true
                    });
                    
                }, this);
            })
        });
    }
    public show(selectedIndex?: number): void {
        if (typeof selectedIndex == 'number') {
            this.selectedIndex = selectedIndex;
        }
        this.node.active = true;
    }
    public hide(): void {
        this.node.active = false;
    }

}
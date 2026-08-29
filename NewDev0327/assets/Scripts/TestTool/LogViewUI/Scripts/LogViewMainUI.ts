import { _decorator, Component, Node, Toggle } from 'cc';
import { Debug } from '../../../Utils/Core';
import { DraggableButton } from './DraggableButton';
import { FunctionLogData, VirtualFunctionLogData } from './LogViewDefine';
import { LogViewFunctionStackPanel } from './LogViewFunctionStackPanel';
import { LogViewCoverageInfoPanel } from './LogViewCoverageInfoPanel';
import { addEventHandlerToToggle } from '../../../Utils/Core/CCExtension';
const { ccclass, property, executionOrder } = _decorator;

enum PanelType {
    FunctionStack = 'FunctionStack',
    CoverageInfo = 'CoverageInfo'
}

@ccclass('LogViewMainUI')
@executionOrder(-1)
export class LogViewMainUI extends Component {
    @property({ type: DraggableButton })
    protected panelSwitch: DraggableButton = null;
    @property({ type: LogViewFunctionStackPanel })
    protected logViewFunctionStackPanel: LogViewFunctionStackPanel = null;
    @property({ type: LogViewCoverageInfoPanel })
    protected logViewCoverageInfoPanel: LogViewCoverageInfoPanel = null;
    @property({ type: Node })
    protected toggleContainerNode: Node = null;
    @property({ type: Toggle })
    protected functionStackToggle: Toggle = null;
    @property({ type: Toggle })
    protected coverageInfoToggle: Toggle = null;

    private static _instance: LogViewMainUI = null;
    public static get instance(): LogViewMainUI {
        if (this._instance == null) {
            Debug.LogWarning("LogViewUIPanel _instance 為空");
        }
        return this._instance;
    }

    protected virtualFunctionLogDataIndex: number = 0;
    protected currentPanelType: PanelType = PanelType.FunctionStack;
    protected isShowingPanel: boolean = false;

    protected start(): void {
        LogViewMainUI._instance = this.node.getComponent(LogViewMainUI);
        this.init();
    }

    protected init(): void {
        this.logViewFunctionStackPanel.init();
        this.logViewCoverageInfoPanel.init();

        this.panelSwitch.registerClickEvent(this.onPanelSwitchClick, this);
        // 必須直接從 CCExtension 引用，否則在測試站作為 bundle 載入時會抓不到
        addEventHandlerToToggle(this.functionStackToggle.node, this, 'onToggleClick', PanelType.FunctionStack);
        addEventHandlerToToggle(this.coverageInfoToggle.node, this, 'onToggleClick', PanelType.CoverageInfo);
    }

    protected onPanelSwitchClick(): void {
        if (!this.isShowingPanel) {
            this.isShowingPanel = true;
            this.toggleContainerNode.active = true;
            this.showPanel();
        } else {
            this.isShowingPanel = false;
            this.toggleContainerNode.active = false;
            this.hidePanel();
        }
    }

    protected onToggleClick(e: Toggle, customEventData: PanelType): void {
        if (e.isChecked) {
            this.currentPanelType = customEventData;
            this.showPanel();
        }
    }

    protected showPanel(): void {
        switch (this.currentPanelType) {
            case PanelType.FunctionStack:
                this.logViewCoverageInfoPanel.node.active = false;
                this.logViewFunctionStackPanel.node.active = true;
                break;
            case PanelType.CoverageInfo:
                this.logViewFunctionStackPanel.node.active = false;
                this.logViewCoverageInfoPanel.node.active = true;
                break;
            default:
                break;
        }
    }

    protected hidePanel(): void {
        switch (this.currentPanelType) {
            case PanelType.FunctionStack:
                this.logViewFunctionStackPanel.node.active = false;
                break;
            case PanelType.CoverageInfo:
                this.logViewCoverageInfoPanel.node.active = false;
                break;
            default:
                break;
        }
    }

    public registerClass(target: string, funcList: string[]): void {
        this.logViewCoverageInfoPanel.registerClass(target, funcList);
    }

    public addFunctionLogData(functionLogDataList: FunctionLogData[]): void {
        const flattedFunctionLogDataList = this.flattenFunctionData(functionLogDataList);
        this.logViewFunctionStackPanel.addVirtualLogData(flattedFunctionLogDataList);
        flattedFunctionLogDataList.forEach((item) => {
            this.logViewCoverageInfoPanel.addFunctionExecutedCount(item.target, item.function);
        });
        this.logViewCoverageInfoPanel.updateList();
    }

    protected flattenFunctionData(functionLogDataList: FunctionLogData[]): VirtualFunctionLogData[] {
        const result: VirtualFunctionLogData[] = [];
        const stack: [number, FunctionLogData][] = [];
        for (let i = functionLogDataList.length - 1; i >= 0; i--) {
            stack.push([0, functionLogDataList[i]]);
        }
        while (stack.length > 0) {
            const current = stack.pop();
            const virtualLog = new VirtualFunctionLogData();
            virtualLog.target = current[1].target;
            virtualLog.function = current[1].function;
            virtualLog.cost = current[1].cost;
            virtualLog.layer = current[0];
            virtualLog.isShowing = current[0] === 0;
            virtualLog.isExpanding = false;
            virtualLog.canExpand = current[1].children.length > 0;
            virtualLog.index = this.virtualFunctionLogDataIndex;
            result.push(virtualLog);
            for (let i = current[1].children.length - 1; i >= 0; i--) {
                stack.push([current[0] + 1, current[1].children[i]]);
            }
            this.virtualFunctionLogDataIndex++;
        }
        return result;
    }
}

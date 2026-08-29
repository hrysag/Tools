import { _decorator, Component, Node } from 'cc';
const { ccclass } = _decorator;

@ccclass('AnimationEventDispatcher')
export class AnimationEventDispatcher extends Component {

    /**
     * Animation Event 呼叫入口
     * @param nodePath 子節點路徑 (ex: "UI/WinEffect")
     * @param componentName component class name
     * @param functionName 要呼叫的 function
     */
    public dispatch(nodePath: string, componentName: string, functionName: string, param?: string) {

        const targetNode = this.node.getChildByPath(nodePath);

        if (!targetNode) {
            console.warn(`AnimationEventDispatcher: node not found -> ${nodePath}`);
            return;
        }

        const comp = targetNode.getComponent(componentName as any);

        if (!comp) {
            console.warn(`AnimationEventDispatcher: component not found -> ${componentName}`);
            return;
        }

        const fn = (comp as any)[functionName];

        if (typeof fn !== 'function') {
            console.warn(`AnimationEventDispatcher: function not found -> ${functionName}`);
            return;
        }

        fn.call(comp, param);
    }
}
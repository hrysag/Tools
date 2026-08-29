import { Animation, Component, Node, UITransform, debug, director, sp } from "cc";
import { playAnimOnEnable } from "../../../../common/script/anim/playAnimOnEnable";

export class UtilsKit {
    /**
     * 延遲事件
     * @param duration 單位：毫秒
    */
    public static Defer(duration: number = 0): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => resolve(), duration);
        });
    }

    /**
     * 延遲事件(藉由 cocos api "scheduleOnce")
     * @param duration 單位：秒
    */
    public static DeferByScheduleOnce(duration: number = 0): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            let scene = director.getScene();
            let rootNode: Node = scene.children[0];
            rootNode.getComponent(UITransform).scheduleOnce(() => resolve(), duration / 1000);
        });

        // return new Promise<void>((resolve, reject) => {
        //     setTimeout(() => resolve(), duration);
        // });
    }

    /**
     * 播放動畫
     * @param node 持有動畫 Component 的 Node
     * @param animationName 動畫名稱(如果沒給即為預設動畫)
     * @param awaitFINISHED 是否監聽 FINISHED 事件
     * @returns 
     */
    public static PlayAnimation(node: Node, animationName?: string, awaitFINISHED?: boolean): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const animationComponent: Animation = node.getComponent(Animation);

            if (node.getComponent(playAnimOnEnable)) {
                if (node.active) {
                    node.active = false;
                }
                node.active = true;
            } else {
                animationComponent.play(animationName);
            }

            if (awaitFINISHED) {
                const onAnimationFinished = () => {
                    animationComponent.off(Animation.EventType.FINISHED, onAnimationFinished.bind(this));
                    animationComponent.stop();
                    resolve();
                };
                animationComponent.on(Animation.EventType.FINISHED, onAnimationFinished.bind(this));
            } else {
                resolve();
            }
        });
    }

    /**
     * 播放 Skeleton 動畫
     * @param node 持有 Skeleton Component 的 Node
     * @param trackIndex 動畫通道索引
     * @param animationName 動畫名稱
     * @param loop 是否循環
     * @param awaitFINISHED 是否等待 Complete
     * @returns 
     */
    public static SetSkeletonAnimation(node: Node, trackIndex: number, animationName: string, loop?: boolean, awaitComplete?: boolean): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const skeletonComponent: sp.Skeleton = node.getComponent(sp.Skeleton);

            skeletonComponent.setAnimation(trackIndex, animationName, loop);

            if (awaitComplete) {
                const onAnimationComplete = (trackEntry, loopCount) => {
                    skeletonComponent.setCompleteListener(null);
                    resolve();
                };
                skeletonComponent.setCompleteListener(onAnimationComplete.bind(this));
            } else {
                resolve();
            }
        });
    }

    /**
     * 規格化數值(取小數點後2位)
     * @param num 數值
     * @returns 
     */
    public static NumberSpecification(num: number): string {
        return num.toLocaleString('zh', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    }

   
    /**
     * 批次綁定事件 , 可以指定事件名稱與目標
     * @param ary 
     *            描述每個 bindTarget 與 callback 的資料   
     *            可以個別指定 event 與 target  
     *            若沒有指定則使用 opts 的 defaultEvent 與 defaultTarget
     * 
     *            @variables bindTarget 綁定的目標 accept Component or Node
     *            @variables callback 事件的 callback. 
     *            @optional event 事件名稱
     *            @optional target callback 的 this 指向
     * 
     * @param opts 預設的 event 與 target
     */
    public static BindEvents(ary: {
        bindTarget: Component | Node,
        callback: Function;
        event?: string;
        target?: any;
    }[],
        opts: { defaultEvent: string, defaultTarget: any; } = { defaultEvent: 'click', defaultTarget: this }) {

        let { defaultEvent, defaultTarget } = opts;

        if (defaultEvent == null) defaultEvent = 'click';
        if (defaultTarget == null) defaultTarget = <any>this;

        ary.forEach((data) => {

            let { bindTarget, callback, target, event } = data;

            if (!target) target = defaultTarget;
            if (!event) event = defaultEvent;

            if (!bindTarget) return;
            if (!callback) return;


            let node: Node = bindTarget instanceof Component ? bindTarget.node : bindTarget;

            if (!node) return;

            debug(`bindEvent: ${bindTarget.name}::${event}==>${callback.name}`);
            node.on(event, callback, target);
        });


    }

}
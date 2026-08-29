import { Component, EventHandler, js, Node, ScrollView } from "cc";
import { Debug } from "db://assets/Scripts/Utils/Core";

// 暫時放在這裡 之後可以考慮移到 CCExtension
export function addEventHandlerToScrollEvent(scrollViewNode: Node, component: Component, callback: string, customEventData: string = ''): void {

    const scrollEventHandler = createEventHandler(component, callback, customEventData);

    const scrollView = scrollViewNode.getComponent(ScrollView);
    if (!scrollView) {
        Debug.LogError(`${scrollViewNode.name}  不存在 ScrollView  Component!!`);
    }
    const scrollEvents = scrollView.scrollEvents;
    const index = scrollEvents.indexOf(scrollEventHandler);
    if (index > -1) {
        scrollEvents.splice(index, 1);
    }

    scrollEvents.push(scrollEventHandler);
}

function createEventHandler(component: Component, callback: string, customEventData: string = ''): EventHandler {
    const eventHandler = new EventHandler();
    eventHandler.target = component.node; // 這個 node 節點是你的事件處理代碼組件所属的節點
    eventHandler.component = js.getClassName(component);// 這個是腳本類名
    eventHandler.handler = callback; // 參數是 event: EventTouch, customEventData: string
    eventHandler.customEventData = customEventData;
    return eventHandler;
}
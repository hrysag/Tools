import { _decorator, Button, Component, DynamicAtlasManager, dynamicAtlasManager, EventHandler, EventTouch, macro, Node, NodeEventType } from 'cc';
import { Debug } from '../../Scripts/Utils/Debug';
import { Utility } from '../../Scripts/Utils/Utility';
import { GenericUIManager } from './GenericUIManager';
import { SlotRelayLang } from '../../Scripts/Utils/Config';
import { GenericUIConfig } from './GenericUIConfig';
import { PlayerInfo } from '../../Scripts/Player/PlayerInfo';
import { GameSetting } from '../../Scripts/GameScripts/GameSetting';
const { ccclass, property } = _decorator;

@ccclass('ZGenericUISceneTest')
export class ZGenericUISceneTest extends Component {

    @property(Node)
    private button: Node;

    @property(Node)
    private spriteNode: Node;

    start() {
        // const clickEventHandler = new EventHandler();
        // clickEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点
        // clickEventHandler.component = 'ZGenericUISceneTest';// 这个是脚本类名
        // clickEventHandler.handler = 'onBtnClick';
        // clickEventHandler.customEventData = 'foobar';
        // const button = this.button.getComponent(Button);
        // button.clickEvents.push(clickEventHandler);

        // this.spriteNode.on(NodeEventType.MOUSE_DOWN, () => {
        //     Debug.Log("Sprite click");
        // });
        // Node.EventType

        // let name = this.name;
        // Debug.Log(name);
        // Debug.Log(this.constructor.name);
        // Debug.Log(name.indexOf('<'));
        // Debug.Log(name.indexOf('>'));
        // Debug.Log(name.slice(name.indexOf('<'), name.indexOf('>')));
        // Utility.addEventHandlerToButton(this.button, this, this.onBtnClick, 'wahaha');

        GenericUIManager.instance.init(SlotRelayLang.tw);

        // 為了測試，直接把GameSetting裡面的下注金額列表設定進去，一般要透過PlayerInfo來設定
        GenericUIManager.instance.setBetSelectInfos(GameSetting.platformBetValueList);
        GenericUIManager.instance.setBetValue(GameSetting.platformBetValueList[0]);
        // GenericUIManager.instance.setBetSelectInfos(GenericUIConfig.BET_VALUE_LIST, PlayerInfo.betMin, PlayerInfo.betMax);
        // GenericUIManager.instance.setTwoLevelTurboMode(true);
        console.log(DynamicAtlasManager.instance.enabled);
        console.log(macro.CLEANUP_IMAGE_CACHE)
    }


    update(deltaTime: number) {

    }

    onBtnClick(event: EventTouch, data: string) {

    }
}



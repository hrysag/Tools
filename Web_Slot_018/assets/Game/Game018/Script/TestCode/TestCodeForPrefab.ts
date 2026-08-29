import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { Localization } from 'db://assets/Scripts/GameScripts/Localization';
import { LocalizationSpine } from 'db://assets/Scripts/GameScripts/LocalizationSpine';
import { FindComponent } from '../MyUtils/FindComponent';
const { ccclass, property } = _decorator;

@ccclass('TestCodeForPrefab')
export class TestCodeForPrefab extends Component {

    @property({ type: Prefab, tooltip: "Prefab to instantiate" })
    public testPrefab: Prefab | null = null;

    private _testPrefabNodeTarget: Node;

    protected onLoad(): void {

        this._testPrefabNodeTarget = instantiate(this.testPrefab);
        console.log('testCode onLoad');
        this.node.addChild(this._testPrefabNodeTarget);
        //this._testPrefabNodeTarget.parent = this.node;



        return;
        this.node.once(Node.EventType.CHILD_ADDED, () => {
            console.log('testCode onLoad CHILD_ADDED');
            this.testLoadLanguageSpine();
        })
        this.node.addChild(this._testPrefabNodeTarget);
    }

    private async testLoadLanguageSpine(): Promise<void> {
        const currentLanguageKey = Localization.instance.currentLangKey;
        const localizationSpine = FindComponent.findComponentInChildren(this._testPrefabNodeTarget, LocalizationSpine);
        if (localizationSpine) {
            await localizationSpine.loadAllSpine(currentLanguageKey);
            //targetPrefabNode.active = true;
            console.log('completed loadSpineLanguage');
        }
    }

}



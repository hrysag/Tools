import { _decorator, CCFloat, Component, Node, Prefab, instantiate, Vec3 } from 'cc';
import { SpineController } from '../../MyUtils/AnimationSystem/Components/SpineController';
import { AnimationControllersPoolManager } from '../../MyUtils/AnimationSystem/AnimationControllersPoolManager';
import { AudioManager, SOUND_TYPE } from 'db://assets/Scripts/Audio/AudioManager';
import { SoundList, AudioSourceList } from '../../DefinitionGameData/SoundList';
const { ccclass, property } = _decorator;
const LIGHT_PREFAB_NAME: string = 'NG_CollectLight';

@ccclass('RPSCollection')
export class RPSCollection extends Component {

    //@property({ type: Prefab, visible: true, displayName: 'light Prefab', tooltip: '顯示蒐集燈號的Prefab' })
    //private _lightPrefab: Prefab = null;

    @property({ type: [Vec3], visible: true, displayName: 'light position', tooltip: '燈號的位置' })
    private _lightPos: Vec3[] = [];

    @property({ type: Node, visible: true, displayName: 'light BG', tooltip: '燈號的BG' })
    private _lightBG: Node = null;

    @property({ type: Node, visible: true, displayName: 'light container', tooltip: '放所有燈號的容器' })
    private _lightContainer: Node = null;

    @property({ type: Node, visible: true, displayName: 'door Light Effect', tooltip: '門框的特效' })
    private _doorLightEffectNode: Node = null;

    private _mapRunningLight: Map<number, SpineController>;
    private _spineDoorLightEffect: SpineController = null;
    private _startCamp: number;//--開啟燈號系統的陣營(由第一把的贏方開啟)
    private _level: number;

    public init() {
        this._startCamp = -1;
        this._level = 0;
        this._spineDoorLightEffect = this._doorLightEffectNode.getComponent(SpineController);
        this._spineDoorLightEffect.init();
        this._doorLightEffectNode.active = false;

        this._mapRunningLight = new Map(
            [
                [1, null],
                [2, null],
                [3, null]
            ]
        );

    }

    public reset(): void {
        this._startCamp = -1;
        this._level = 0;
    }

    public openCollectionLightSystem(camp: number): void {

        if (this._startCamp == -1) {
            this._startCamp = camp;
        }
    }

    //--20250731 新增
    public appearCollectionLights(): void {
        for (const [key, value] of this._mapRunningLight) {
            if (value) {
                const light: Node = value.node;
                light.active = true;
            }
        }
        this._doorLightEffectNode.active = true;
    }

    //--20250731 新增
    public hideCollectionLights(): void {

        for (const [key, value] of this._mapRunningLight) {
            if (value) {
                const light: Node = value.node;
                light.active = false;
            }
        }
        this._doorLightEffectNode.active = false;
    }

    public closeCollectionLightSystem(): void {

        for (const [key, value] of this._mapRunningLight) {
            if (value) {
                value.resetData();
                const light: Node = value.node;
                this._lightContainer.removeChild(light);
                //this.recycleLightNode(light);  
                AnimationControllersPoolManager.getInstance().pushInstancePrefabNodeToPool(LIGHT_PREFAB_NAME, light);
                this._mapRunningLight.set(key, null);
            }

        }
        this._spineDoorLightEffect.forceToStopAni();//-沒有勾選afterPlayDoStop選項stopAni不會執行
        this._doorLightEffectNode.active = false;
        this.reset();
    }

    public async setLevel(level: number): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            if (level == 0) resolve();//--平手不處理
            let lightComponent: SpineController = null;
            let lightComponent_1: SpineController = null;
            let lightComponent_2: SpineController = null;
            let previousLevel: number = this._level;
            this._level += level;
            if (this._level < 1) {
                this._level = 0;//--這種情況..有點不太可能會發生
            }

            //--level正數表示升級,負數表示降級(不處理平手狀態)
            if (previousLevel < this._level) {
                if (this._level == 1) {
                    AudioManager.instance.playSound(SoundList.GemCollect, SOUND_TYPE.ONE_SHOT, AudioSourceList.BasicAS);
                    //---default to 1 
                    lightComponent = this.getLightNodeComponent(this._level);
                    lightComponent.node.active = true;
                    //await lightComponent.playAniInPromise('default_to_01');
                    await lightComponent.playAniInPromise('default_to_01');
                    lightComponent.playAni('01_loop');
                    //--01_loop-->這個不會發光
                    resolve();

                } else if (this._level == 2) {
                    AudioManager.instance.playSound(SoundList.GemCollect, SOUND_TYPE.ONE_SHOT, AudioSourceList.BasicAS);
                    //--1 to 2
                    lightComponent = this.getLightNodeComponent(this._level);
                    lightComponent.node.active = true;
                    //await lightComponent.playAniInPromise('01_to_02');//--一開始出現都要用default_to_01
                    await lightComponent.playAniInPromise('default_to_01');//--一開始出現都要用default_to_01
                    lightComponent.playAni('02_loop');

                    lightComponent_1 = this.getLightNodeComponent(1);
                    await lightComponent_1.playAni('01_to_02');
                    lightComponent_1.playAni('02_loop');
                    resolve();

                    //--2勝之後..兩顆都要loop-->02_loop

                } else if (this._level == 3) {
                    AudioManager.instance.playSound(SoundList.GemLight, SOUND_TYPE.ONE_SHOT, AudioSourceList.BasicAS);
                    //--2 to 3 
                    lightComponent = this.getLightNodeComponent(this._level);
                    lightComponent.node.active = true;
                    //await lightComponent.playAniInPromise('02_to_03');
                    lightComponent.playAniInPromise('02_to_03');
                    lightComponent.playAni('03_loop');

                    lightComponent_1 = this.getLightNodeComponent(1);
                    lightComponent_1.node.active = true;
                    lightComponent_1.playAni('03_loop');

                    lightComponent_2 = this.getLightNodeComponent(2);
                    lightComponent_2.node.active = true;
                    lightComponent_2.playAni('03_loop');

                    //--show door light effect
                    this._doorLightEffectNode.active = true;
                    await this._spineDoorLightEffect.playAniInPromise('02_to_03');
                    this._spineDoorLightEffect.playAni('03_loop');
                    resolve();

                }
            } else {
                //--20250527--平手或是輸了不處理
                resolve();
                //--降級(3就結束啦,所以也不會有3to2,只會有2to1,1to0就直接結束了)
                //--3就結束啦(3勝結束)不會有3to2(即level=2)
                //--1to0就直接結束了(1勝一敗隨即結束)(即level=0)
                //--2to1在兩勝後,規則沒有說到2勝1敗結束,只有提到3勝結束(即level=1)
                /*
                if (this._level == 1) {
                    //--2toDefault(閃一下)+default(消失)
                    lightComponent = this.getLightNodeComponent(2);
                    lightComponent.node.active = true;
                    await lightComponent.playAniInPromise('02_to_default');
                    lightComponent.node.active = false;
                    resolve();
                } else if (this._level == 0) {
                    //--1toDefault(閃一下)+default(消失)
                    lightComponent = this.getLightNodeComponent(1);
                    lightComponent.node.active = true;
                    await lightComponent.playAniInPromise('01_to_default');
                    lightComponent.node.active = false;
                    resolve();
                } else {
                    resolve();
                }*/
            }
        });

    }

    private getLightNodeComponent(lv: number): SpineController {
        let lightEffectComponent: SpineController = this._mapRunningLight.get(lv);
        if (lightEffectComponent === null) {
            lightEffectComponent = this.createLightNode(lv);
            this._mapRunningLight.set(lv, lightEffectComponent);
        }
        return lightEffectComponent;
    }
    /**
     * 
     * @param lv 1-3
     */
    private createLightNode(lv: number): SpineController {

        const light: Node = AnimationControllersPoolManager.getInstance().getPrefabNode(LIGHT_PREFAB_NAME);
        this._lightContainer.addChild(light);
        const spineAniComponent: SpineController = light.getComponent(SpineController);
        spineAniComponent.init();
        this.changeSkin(spineAniComponent);
        light.setPosition(this._lightPos[lv - 1]);
        light.active = false;
        return spineAniComponent;
    }

    private changeSkin(spineAniComponent: SpineController): void {
        const skinName: string = 'FG_0' + this._startCamp;
        //console.log('changetSkin_wild', skinName);
        spineAniComponent.changeSkin(skinName);
    }

}



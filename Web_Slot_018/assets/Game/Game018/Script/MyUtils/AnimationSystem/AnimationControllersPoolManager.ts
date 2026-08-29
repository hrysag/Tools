/**
 * Created by EricHuang on 2025/2/13.
 */
import { _decorator, Node, Prefab, instantiate, Component, CCString, CCBoolean } from 'cc';
import { IAnimationControl } from './Definitions/IAnimationControl';
import { IBasicPoolObject } from '../ObjectPoolManager/Definitions/IBasicPoolObject';
import { AnimationController } from './Components/AnimationController';
import { SpineController } from './Components/SpineController';
import { MixedASController } from './Components/MixedASController';
import { CustomAnimationController } from './Components/CustomAnimationController';
import { AnimationPrefabPropertyDef } from './Definitions/AnimationPrefabPropertyDef';
import { AniSysTools } from './AniTools/AniSysTools';

const { ccclass, property } = _decorator;

export type AnimationComponentType = IAnimationControl & Component;

const PREFAB_TYPE_DEFAULT = 'default';


@ccclass('AnimationControllersPoolManager')

export class AnimationControllersPoolManager {

    //-https://forum.cocosengine.org/t/best-way-to-implement-mapping-properties/43243

    //https://docs.cocos.com/creator/3.8/manual/zh/ui-system/components/engine/list-with-data.html

    @property({ type: [AnimationPrefabPropertyDef], visible: true, displayName: 'Prefab List', tooltip: '塞入尚未實體化的prefab,依照key當作索引' })
    private _prefabForPropertyList: AnimationPrefabPropertyDef[] = [];

    private _maxMumPrefabNodeListCount: number;
    private _prefabObjectPool: Map<string, Node[]>;//--這個是用來存放實例化後的prefab object pool
    private _prefabMap: { [key: string]: Prefab };//--未被實體化的prefab,準備用來被clone
    private static _instance: AnimationControllersPoolManager | null = null;
    public static getInstance(): AnimationControllersPoolManager {
        return (AnimationControllersPoolManager._instance) ? AnimationControllersPoolManager._instance : new AnimationControllersPoolManager();
    };

    set maxMumPrefabNodeListCount(value: number) {
        this._maxMumPrefabNodeListCount = value;
    }

    constructor() {

        if (AnimationControllersPoolManager._instance != null) {
            throw new Error('plz use getInstance() to get NotifyCation');
        }

        AnimationControllersPoolManager._instance = this;
        this._maxMumPrefabNodeListCount = 5;//--default
        this._prefabObjectPool = new Map<string, Node[]>();

    }

    public init(): void {
        this._prefabMap = {};
        this._prefabObjectPool.set(PREFAB_TYPE_DEFAULT, []);
    }

    public setPrefabForPropertyList(prefabForPropertyList: AnimationPrefabPropertyDef[]): void {
        this._prefabForPropertyList = prefabForPropertyList;
        this._prefabMap = {};
        this._prefabObjectPool.set(PREFAB_TYPE_DEFAULT, []);
        for (let prefabProperty of this._prefabForPropertyList) {
            this.addTargetToPrefabMap(prefabProperty);
        }
    }
    /*
    protected onLoad(): void {
        //--映射到map

        this._prefabMap = {};

        for (let prefabProperty of this._prefabForPropertyList) {

            this.addTargetToPrefabMap(prefabProperty);
        }

    }*/

    //----prefab map-----
    public addTargetToPrefabMap(prefabProperty: AnimationPrefabPropertyDef): void {
        if (prefabProperty.prefab) {
            if (!this._prefabMap[prefabProperty.key]) {
                this._prefabMap[prefabProperty.key] = prefabProperty.prefab;
            }
        } else {
            console.warn('AnimationControllersPoolManager_prefab is null');
        }
    }

    public removeTargetFromPrefabMap(prefabNodeListID: string): void {
        if (this._prefabMap[prefabNodeListID]) {
            delete this._prefabMap[prefabNodeListID];
        }
    }

    public getTargetPrefab(prefabNodeListID: string): Prefab {
        return this._prefabMap[prefabNodeListID];
    }

    //----prefab map-----


    public cleanAllPools(): void {

        for (let targetList of this._prefabObjectPool.values()) {
            for (let node of targetList) {
                node.destroy();
            }

            targetList.length = 0;
        }

    }

    public getPoolSize(prefabNodeListID: string): number {

        if (this._prefabObjectPool.has(prefabNodeListID)) {
            return this._prefabObjectPool.get(prefabNodeListID).length;
        }
        return 0;
    }

    public expandPool(prefabNodeListID: string, amount: number): void {

        if (this._prefabMap[prefabNodeListID]) {

            for (let i = 0; i < amount; i++) {
                let node = instantiate(this._prefabMap[prefabNodeListID]);
                this.pushInstancePrefabNodeToPool(prefabNodeListID, node);
            }
        }
    }

    public getInstantiatedNodeFromPoolById(id: string): Node | null {
        let prefabNode: Node = null;

        for (let list of this._prefabObjectPool.values()) {
            for (let node of list) {
                if (node.name === id) {
                    prefabNode = node;
                    break;
                }
            }
        }

        return prefabNode;
    }




    /**
     * 用來創造產生prefab的node
     * @param prefabNodeListID 這個是prefab的key,是自己在IDE裡面定義的,這邊只是做一個映射
     * @returns 
     */
    public getPrefabNode(prefabNodeListID: string): Node {

        let prefabNode: Node = null;

        if (this._prefabObjectPool.has(prefabNodeListID)) {
            let prefabNodeInfoList = this._prefabObjectPool.get(prefabNodeListID);
            if (prefabNodeInfoList.length > 0) {

                //--靠北這個uuid是針對IDE的,instantiate後的node不會有這種鬼東西啦
                prefabNode = prefabNodeInfoList.pop();

            } else {

                prefabNode = instantiate(this._prefabMap[prefabNodeListID]);
            }

        } else {

            this._prefabObjectPool.set(prefabNodeListID, []);
            prefabNode = instantiate(this._prefabMap[prefabNodeListID]);
        }

        return prefabNode;
    }




    public pushInstancePrefabNodeToPool(prefabNodeListID: string, prefabNode: Node): void {

        let prefabNodeList: Node[] = this._prefabObjectPool.has(prefabNodeListID) ? this._prefabObjectPool.get(prefabNodeListID) : this._prefabObjectPool.get(PREFAB_TYPE_DEFAULT);
        let aniExtensionComponent = AniSysTools.findAndGetIAniComponent(prefabNode) as IBasicPoolObject;
        if (prefabNodeList.length < this._maxMumPrefabNodeListCount) {
            (<IBasicPoolObject>aniExtensionComponent).resetData();
            prefabNode.active = false;//-要去觸發onDisable
            prefabNodeList.push(prefabNode);
            //console.log();

        } else {
            //-這邊component會被觸發destroy
            prefabNode.removeFromParent();
            (<IBasicPoolObject>aniExtensionComponent).beforeDestroy();
            prefabNode.destroy();
            prefabNode = null;
        }

        //this.checkPoolStatusAfterPush();
    }

    public checkPoolStatusAfterPush(): void {
        console.log('=== Prefab Pool 狀態 ===');

        for (const [key, list] of this._prefabObjectPool.entries()) {
            console.log(`Pool ID: ${key}, Size: ${list.length}`);
        }
        console.log('=======================');
    }


}

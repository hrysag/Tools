import { Node, Component } from "cc";
import { AnimationController } from "../Components/AnimationController";
import { SpineController } from "../Components/SpineController";
import { MixedASController } from "../Components/MixedASController";
import { CustomAnimationController } from "../Components/CustomAnimationController";
import { IAnimationControl } from "../Definitions/IAnimationControl";
import { IBasicPoolObject } from "../../ObjectPoolManager/Definitions/IBasicPoolObject";
import { BasicPoolObject } from "../../ObjectPoolManager/Compoents/BasicPoolObject";
import { FindComponent } from "../../FindComponent";

export type AnimationComponentType = IAnimationControl & Component;

export class AniSysTools {

    //--直接取回class的方式去找--
    public static getTargetNodeComponent(targetNode: Node): new (...args: any[]) => Component | null {

        const componentConstructors: (new (...args: any[]) => Component)[] = [
            AnimationController,
            SpineController,
            MixedASController,
            CustomAnimationController,
            BasicPoolObject
        ];

        //--直接去挖建構式的方式去找--
        for (const constructor of componentConstructors) {
            if (FindComponent.findComponentInChildren(targetNode, constructor)) {
                return constructor;
            }

            /*
            if (targetNode.getComponent(constructor)) {
                return constructor;
            }*/
        }

        console.warn('No animation component found on targetNode:', targetNode.name);
        return null;
    }

    //--透過class直接挖出component--
    public static findAndGetIAniComponent(targetNode: Node): Component {

        const componentConstructors: (new (...args: any[]) => Component)[] = [
            AnimationController,
            SpineController,
            MixedASController,
            CustomAnimationController,
            BasicPoolObject
        ];

        for (const constructor of componentConstructors) {

            const component = FindComponent.findComponentInChildren(targetNode, constructor)

            if (component) {
                return component;
            }

        }

        console.warn('No animation component found on targetNode:', targetNode.name);
        return null;

    }

    public static isIBasicPoolObject(component: any): component is IBasicPoolObject {
        return (
            typeof component === 'object' &&
            component !== null &&
            typeof component.beforeDestroy === 'function' &&
            typeof component.resetData === 'function'
        );
    }

    //確保 Component 實作 IBasicPoolObject
    public static isIBasicPoolObjectComponent(component: Component): component is Component & IBasicPoolObject {
        return AniSysTools.isIBasicPoolObject(component);
    }

    //--直接找實作BasicPoolObject的component
    public static getIBasicPoolObjectComponentConstructor(targetNode: Node): (new (...args: any[]) => Component) | null {
        return FindComponent.findComponentConstructorByCheckFunction(targetNode, AniSysTools.isIBasicPoolObjectComponent);
    }



}
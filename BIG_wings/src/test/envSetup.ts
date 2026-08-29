import 'jest';
import {afterEach, beforeEach, describe, expect, jest, test} from '@jest/globals';
import { Emitter } from 'strict-event-emitter';
export class MockNode extends Emitter<any> {
    static EventType = {
        ACTIVE_IN_HIERARCHY_CHANGED: "active-in-hierarchy-changed"
    }
    layer: any;
    name: string;
    _childern: any[] = [];
    get childern() { return this._childern; }
    _components: {} = {};
    get components() { return this._components; }
    parent: MockNode;
    // 顯示物件
    active: boolean = false;
    position: {
        x: number,
        y: number
    } = {x: 0, y: 0};
    setPosition(x, y) {
        this.position.x = x;
        this.position.y = y;
    }
    getPosition() {
        return this.position;
    }
    setSiblingIndex(id) {
        
    }
    getChildByName(name: string) {
        return new MockNode(this);
    }
    getComponent(instance) {
        if (instance == MockLabel) {
            if (this._components.hasOwnProperty(instance.name)) {
                return this._components[instance.name];
            } else {
                return this._components[instance.name] = new MockLabel();
            }
        }
        if (instance == MockAnimation) {
            if (this._components.hasOwnProperty(instance.name)) {
                return this._components[instance.name];
            } else {
                return this._components[instance.name] = new MockAnimation();
            }
        } else {
            if (this._components.hasOwnProperty(instance.name)) {
                return this._components[instance.name];
            } else {
                return this._components[instance.name] = new instance();
            }
        }

    }
    
    addComponent(instance) {
        if (!this._components[instance.name]) {
            return this._components[instance.name] = new instance();
        } else {
            return null;
        }
    }
    addChild(instance) {
        this._childern.push(instance);
    }

    constructor(parent: MockNode) {
        super();
        this.parent = parent;
        this.name = this.constructor.name;
    }
}
export const MockLayers = {
    Enum: {
        UI_2D: 6,
    }
}
export class MockMask {
    static Type = jest.fn();
}
export class MockGraphics {
    static Type = jest.fn();
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    clear() {}
    rect(x, y, width, height) {
        this.x = x;
        this.y = x;
        this.width = width;
        this.height = height;
    }
    fill() {}
    stroke() {}
}
export class MockUITransform {
    contentSize: {
        width: number, height: number
    } = { width: 0, height: 0 };

    get width(): number { return this.contentSize.width; }
    set width(value: number) { this.contentSize.width = value; }
    get height(): number { return this.contentSize.height; }
    set height(value: number) { this.contentSize.height = value; }
}
export class MockAnimation extends Emitter<any> {
    mockGroupFn: any = {
        play: jest.fn(),
        stop: jest.fn(),
    }
    static EventType = {
        FINISHED: "finished",
        LASTFRAME: "lastframe",
        RESUME: "resume",
        PAUSE: "pause",
        STOP: "stop",
        PLAY: "play",
    }
    play(...args) {
        this.mockGroupFn.play();
    }
    stop(...args) {
        this.mockGroupFn.stop();
    }
}

export class Skeleton {
    mockGroupFn: any = {
        setCompleteListener: jest.fn()
    }
    setAnimation(...args) {

    }
    setCompleteListener(callback) {
        if (callback) {
            this.mockGroupFn.setCompleteListener();
            callback();
        }
    }
}
export class sp {
    static Skeleton = Skeleton;
}
enum HorizontalAlign { LEFT, CENTER, RIGHT }
enum VerticalTextAlignment { TOP, CENTER, BOTTOM }
export class MockLabel {
    static Type = jest.fn();
    static HorizontalAlign = HorizontalAlign;
    static VerticalTextAlignment = VerticalTextAlignment;
    string = '';
    node: MockNode = new MockNode(null);

}

export class MockInput {
    static EventType = jest.fn();
}
export class MockButton extends Emitter<any> {
    static EventType = jest.fn();
    node: MockNode = new MockNode(null);
    enabled: boolean = false;
    constructor() {
        super();
    }
}

export class MockToggle extends MockButton {
    isChecked: boolean = false;
}

class MockComponent {
    testcase = {
        addComponent: jest.fn(),
        getComponent: jest.fn(),
    }
    _components: {} = {};
    schedule(){ jest.fn() }
    addComponent() { 
        const { testcase } = this;
        testcase.addComponent();
    }
    getComponent(instance) { 
        const { testcase } = this;
        console.log(`getComponent`, instance.name);
        testcase.getComponent();
        
        if (instance == MockMask) {
            if (this._components.hasOwnProperty(instance.name)) {
                return this._components[instance.name];
            } else {
                return this._components[instance.name] = new MockMask();
            }
        }
        if (instance == MockGraphics) {
            if (this._components.hasOwnProperty(instance.name)) {
                return this._components[instance.name];
            } else {
                return this._components[instance.name] = new MockGraphics();
            }
        }
        if (instance == MockUITransform) {
            if (this._components.hasOwnProperty(instance.name)) {
                return this._components[instance.name];
            } else {
                return this._components[instance.name] = new MockUITransform();
            }
        }
        if (this._components.hasOwnProperty(instance.name)) {
            return this._components[instance.name];
        } else {
            return this._components[instance.name] = {};
        }
     }
    node: MockNode = new MockNode(root);
}
let root:MockNode = new MockNode(null);

// 模擬cocos engine modules framework 
jest.mock('cc', () => {
    return {
        __esModule: true,
        CCBoolean: jest.fn(),
        CCString: jest.fn(),
        CCInteger: jest.fn(),
        Component: MockComponent,
        _decorator: {
            ccclass: () => {},
            property: () => {},
            menu: () => {}
        },
        Mask: MockMask,
        Graphics: MockGraphics,
        UITransform: MockUITransform,
        Vec3: jest.fn(),
        Color: jest.fn(),
        Rect: jest.fn(),
        Prefab: class Prefab {
            name: string = 'prefab';
        },
        Button: MockButton,
        Toggle: MockToggle,
        Node: MockNode,
        Input: MockInput,
        Label: MockLabel,
        Animation: MockAnimation,
        sp: sp,
        instantiate: function (Instance) {
            console.log('instantiate', Instance);
            return new Instance();
        },
        Layers: MockLayers
      }
}, { virtual: true });


export class envSetup {
    // cocos simulator
}
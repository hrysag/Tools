import { Node, find, error, _decorator, Component, Animation, resources, view, macro, log, Mask, screen, ResolutionPolicy, v3 } from 'cc';
import LZMA from './LZMA'
import ConnectToGSDemo from './ConnectToGSDemo';
import { Util } from '../Libs/fish-common-lib/types/definitions';
import { i18n } from '../Scripts/framework/utils/i18n/LanguageData';
import LocalizedSprite from '../Scripts/framework/utils/i18n/LocalizedSprite';
const { ccclass, property } = _decorator;

@ccclass('Main')
export class Main extends Component {

    fishPath: object
    fishPathPosIndex: number = -1
    theFish: Node
    step: number = 0
    createTime: number = -1

    @property(Animation)
    fishAni: Animation;

    protected async onLoad() {
        i18n.init('en');

        view.setOrientation(macro.ORIENTATION_LANDSCAPE);
        view.setResizeCallback(() => {
            this.updateViewport()
        });
        this.updateViewport();

        const util: Util = window.util;
        // 本地開發用，production 則是直接取location.search上的 d=xxxx
        const url = await util.general.loginWithDemo({
            account: 'akb142',
            lang: 'cn',
            env: 'DEV',
            gameType: '38003'
        });
        const data: any = util.general.parseEntryData(url.split('d=')[1])
        // i18n.init(data.lang);
        console.log('--==--')
        console.log(data)
        new ConnectToGSDemo().connect(data.sid);
    }

    protected start(): void {
        this.theFish = find('Fish2', this.node);
        this.loadFishPathFile();

        const s = find('Sprite', this.node);
        const ls = s.getComponent(LocalizedSprite);
        ls.fetchRender();
    }

    protected update(deltaTime: number) {
        const state = this.fishAni.getState(this.fishAni.defaultClip.name)
        if (!state.isPlaying) {
            state.play()
        }

        this.moveFish(deltaTime);
    }

    protected switchMask() {
        const mask = this.getComponent(Mask);
        mask.enabled = !mask.enabled
    }

    private updateViewport() {
        const policy = view.getResolutionPolicy();
        const width = screen.windowSize.width;
        const height =  screen.windowSize.height;
        const ratio = width / height;

        if (ratio >= 16 / 9) {
            policy.setContentStrategy(ResolutionPolicy.ContentStrategy.FIXED_HEIGHT)
        } else {
            policy.setContentStrategy(ResolutionPolicy.ContentStrategy.FIXED_WIDTH)
        }
        view.setResolutionPolicy(policy);
    }

    private loadFishPathFile() {
        resources.load('common-path.json', (err, asset) => {
            if (err) {
                error('load failed')
                return
            }
            log(LZMA);
            // log(asset._nativeAsset); // 這裡嘗試過將binary string直接轉成array buffer 會失敗，所以還是在跑一次fetch走建立File流程
            log(asset.nativeUrl);

            fetch(asset.nativeUrl)
            .then(response => response.blob())
            .then(blob => {
                const file = new File([blob], asset.name, { type: blob.type });
                log('File:', file);
                const fileReader = new FileReader();
                fileReader.onload = (event) => {
                    const fileContent = event.target.result;
                    log('File content:', fileContent);
                    const decodedStr = LZMA.decode(fileContent).toString()
                    log(decodedStr);
                    this.fishPath = JSON.parse(decodedStr);
                };
                fileReader.onerror = (event) =>  {
                    error('Error reading file:', event.target.error);
                };
                fileReader.readAsArrayBuffer(file);
            })
            .catch(error => {
              error('Error creating File:', error);
            });
        })
    }

    private moveFish(deltaTime: number) {
        if (!this.theFish) {
            return
        }
        if (!this.fishPath) {
            return
        }
        this.step += deltaTime;

        if (this.step >= 0.15) { // update every 150ms

            if (this.createTime == -1) {
                this.createTime = new Date().getTime();
            }
            // 先隨意設定10秒重生一次
            if (new Date().getTime() - this.createTime > 10000) {
                this.createTime = new Date().getTime();
                this.fishPathPosIndex = -1;
            }

            this.step = 0
            const type = 0
            const pathID = 0;
            const data = this.fishPath[type].pathData[pathID].NodeData;
            this.fishPathPosIndex = this.fishPathPosIndex < data.length - 1 ? this.fishPathPosIndex + 1 : this.fishPathPosIndex
            const d = data[this.fishPathPosIndex];
            this.theFish.setPosition(v3(d.x, d.y, 0));
            this.theFish.angle = d.rotate;
        }
        
    }
}


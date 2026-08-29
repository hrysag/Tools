"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function () { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const package_json_1 = __importDefault(require("../../../package.json"));
const CoreService = __importStar(require("../../CoreService"));
const MAX_PIXEL_COUNT = 92274688;
module.exports = Editor.Panel.define({
    listeners: {
        // show() { console.log('show'); },
        // hide() { console.log('hide'); },
    },
    template: (0, fs_1.readFileSync)((0, path_1.join)(__dirname, '../../../static/template/default/index.html'), 'utf-8'),
    style: (0, fs_1.readFileSync)((0, path_1.join)(__dirname, '../../../static/style/default/index.css'), 'utf-8'),
    $: {
        textureTargetFolderInput: '#texture-target-folder-input',
        refreshTextureInfoButton: '#refresh-texture-info-button',
        closeMipmapButton: '#close-mipmap-button',
        trimModeToNoneButton: '#trim-mode-to-none-button',
        convertPrefabMaskButton: '#convert-prefab-mask-button',
        convertSceneMaskButton: '#convert-scene-mask-button',
        allOperationButton: '#all-operation-button',
        totalTextureAmountText: '#total-texture-amount-text',
        totalMemoryText: '#total-memory-text',
        totalPixelCountText: '#total-pixel-count-text',
        textureInfoContainer: '#texture-info-container',
    },
    methods: {
        initFolderDefaultInput() {
            const folderInput = this.$.textureTargetFolderInput;
            folderInput.value = 'Arts/Game/, Game/, resources/';
        },
        async refreshAllTextureInfo() {
            const totalTextureAmountText = this.$.totalTextureAmountText;
            const totalMemoryText = this.$.totalMemoryText;
            const totalPixelText = this.$.totalPixelCountText;
            const container = this.$.textureInfoContainer;
            totalTextureAmountText.innerText = '';
            totalMemoryText.innerText = '';
            container.innerHTML = '讀取貼圖資源中...';
            this.disableAllButton();
            const allTargetFolder = this.getTargetFolder();
            const allTextureInfo = await CoreService.getAllTextureInfo(allTargetFolder);
            container.innerHTML = '';
            let totalSize = 0;
            let totalPixel = 0;
            allTextureInfo.forEach((textureInfo) => {
                const wrapper = CoreService.createTextureInfoElement(textureInfo);
                container.appendChild(wrapper);
                totalSize += textureInfo.size;
                totalPixel += textureInfo.width * textureInfo.height;
            });
            totalTextureAmountText.innerText = `${allTextureInfo.length}`;
            totalMemoryText.innerText = `${CoreService.getFormattedSize(totalSize)}`;
            totalPixelText.innerText = `${CoreService.addComma(totalPixel)}`;
            if (totalPixel >= MAX_PIXEL_COUNT) {
                totalPixelText.style.color = 'red';
            }
            else {
                totalPixelText.style.color = 'white';
            }
            this.enableAllButton();
        },
        disableAllButton() {
            this.$.refreshTextureInfoButton.disabled = true;
            this.$.closeMipmapButton.disabled = true;
            this.$.trimModeToNoneButton.disabled = true;
        },
        getTargetFolder() {
            const folderInput = this.$.textureTargetFolderInput;
            const allTargetFolder = folderInput.value.split(',');
            // 先寫死
            // const allTargetFolder = ['Arts/Game', 'Game/', 'resources/'];
            return allTargetFolder;
        },
        enableAllButton() {
            this.$.refreshTextureInfoButton.disabled = false;
            this.$.closeMipmapButton.disabled = false;
            this.$.trimModeToNoneButton.disabled = false;
        },
        async closeAllTextureMipmap() {
            const allTargetFolder = this.getTargetFolder();
            await CoreService.closeAllTextureMipmap(allTargetFolder);
            this.refreshAllTextureInfo();
        },
        async trimModeToNone() {
            const allTargetFolder = this.getTargetFolder();
            await CoreService.setTrimTypeToNone(allTargetFolder);
            this.refreshAllTextureInfo();
        },
        async onConvertPrefabMaskBtnClick() {
            const allTargetFolder = this.getTargetFolder();
            Editor.Message.send(package_json_1.default.name, 'convert-prefab', allTargetFolder);
        },
        async onConvertSceneMaskBtnClick() {
            const options = {
                name: package_json_1.default.name,
                method: 'scanMask',
                args: [],
            };
            const allMaskInfo = await Editor.Message.request('scene', 'execute-scene-script', options);
            await CoreService.convertMaskType(allMaskInfo.details, false);
        },
        async onAllOperationBtnClick() {
            await this.trimModeToNone();
            await this.closeAllTextureMipmap();
            await this.onConvertSceneMaskBtnClick();
            await this.onConvertPrefabMaskBtnClick();
            this.refreshAllTextureInfo();
        }
    },
    ready() {
        this.$.refreshTextureInfoButton.onclick = () => this.refreshAllTextureInfo();
        this.$.closeMipmapButton.onclick = () => this.closeAllTextureMipmap();
        this.$.trimModeToNoneButton.onclick = () => this.trimModeToNone();
        this.$.convertPrefabMaskButton.onclick = () => this.onConvertPrefabMaskBtnClick();
        this.$.convertSceneMaskButton.onclick = () => this.onConvertSceneMaskBtnClick();
        this.$.allOperationButton.onclick = () => this.onAllOperationBtnClick();
        this.initFolderDefaultInput();
        this.refreshAllTextureInfo();
    },
    beforeClose() { },
    close() { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvcGFuZWxzL2RlZmF1bHQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJCQUFrQztBQUNsQywrQkFBNEI7QUFFNUIseUVBQWdEO0FBQ2hELCtEQUFpRDtBQUdqRCxNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUM7QUFFakMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNqQyxTQUFTLEVBQUU7SUFDUCxtQ0FBbUM7SUFDbkMsbUNBQW1DO0tBQ3RDO0lBQ0QsUUFBUSxFQUFFLElBQUEsaUJBQVksRUFBQyxJQUFBLFdBQUksRUFBQyxTQUFTLEVBQUUsNkNBQTZDLENBQUMsRUFBRSxPQUFPLENBQUM7SUFDL0YsS0FBSyxFQUFFLElBQUEsaUJBQVksRUFBQyxJQUFBLFdBQUksRUFBQyxTQUFTLEVBQUUseUNBQXlDLENBQUMsRUFBRSxPQUFPLENBQUM7SUFDeEYsQ0FBQyxFQUFFO1FBQ0Msd0JBQXdCLEVBQUUsOEJBQThCO1FBQ3hELHdCQUF3QixFQUFFLDhCQUE4QjtRQUN4RCxpQkFBaUIsRUFBRSxzQkFBc0I7UUFDekMsb0JBQW9CLEVBQUUsMkJBQTJCO1FBQ2pELHVCQUF1QixFQUFFLDZCQUE2QjtRQUN0RCxzQkFBc0IsRUFBRSw0QkFBNEI7UUFDcEQsa0JBQWtCLEVBQUUsdUJBQXVCO1FBQzNDLHNCQUFzQixFQUFFLDRCQUE0QjtRQUNwRCxlQUFlLEVBQUUsb0JBQW9CO1FBQ3JDLG1CQUFtQixFQUFFLHlCQUF5QjtRQUM5QyxvQkFBb0IsRUFBRSx5QkFBeUI7S0FDbEQ7SUFDRCxPQUFPLEVBQUU7UUFDTCxzQkFBc0I7WUFDbEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyx3QkFBNEMsQ0FBQztZQUN4RSxXQUFXLENBQUMsS0FBSyxHQUFHLCtCQUErQixDQUFDO1FBQ3hELENBQUM7UUFFRCxLQUFLLENBQUMscUJBQXFCO1lBQ3ZCLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxzQkFBNkMsQ0FBQztZQUNwRixNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQXNDLENBQUM7WUFDdEUsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBMEMsQ0FBQztZQUN6RSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLG9CQUFtQyxDQUFDO1lBRTdELHNCQUFzQixDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDN0MsZUFBZSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7WUFDNUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7WUFDbkMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFFeEIsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQy9DLE1BQU0sY0FBYyxHQUFrQixNQUFNLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUUzRixTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUN6QixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUF3QixFQUFFLEVBQUU7Z0JBQ2hELE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDbEUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0IsU0FBUyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQzlCLFVBQVUsSUFBSSxXQUFXLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7WUFFSCxzQkFBc0IsQ0FBQyxTQUFTLEdBQUcsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDOUQsZUFBZSxDQUFDLFNBQVMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ3pFLGNBQWMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDakUsSUFBSSxVQUFVLElBQUksZUFBZSxFQUFFLENBQUM7Z0JBQ2hDLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUN2QyxDQUFDO2lCQUFNLENBQUM7Z0JBQ0osY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1lBQ3pDLENBQUM7WUFFRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0IsQ0FBQztRQUVELGdCQUFnQjtZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsd0JBQThDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN0RSxJQUFJLENBQUMsQ0FBQyxDQUFDLGlCQUF1QyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDL0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxvQkFBMEMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZFLENBQUM7UUFFRCxlQUFlO1lBQ1gsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyx3QkFBNEMsQ0FBQztZQUN4RSxNQUFNLGVBQWUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyRCxNQUFNO1lBQ04sZ0VBQWdFO1lBQ2hFLE9BQU8sZUFBZSxDQUFDO1FBQzNCLENBQUM7UUFFRCxlQUFlO1lBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyx3QkFBOEMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxDQUFDLENBQUMsaUJBQXVDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUNoRSxJQUFJLENBQUMsQ0FBQyxDQUFDLG9CQUEwQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDeEUsQ0FBQztRQUVELEtBQUssQ0FBQyxxQkFBcUI7WUFDdkIsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQy9DLE1BQU0sV0FBVyxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFFRCxLQUFLLENBQUMsY0FBYztZQUNoQixNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDL0MsTUFBTSxXQUFXLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDakMsQ0FBQztRQUVELEtBQUssQ0FBQywyQkFBMkI7WUFDN0IsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQy9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHNCQUFXLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzdFLENBQUM7UUFFRCxLQUFLLENBQUMsMEJBQTBCO1lBQzVCLE1BQU0sT0FBTyxHQUFvQztnQkFDN0MsSUFBSSxFQUFFLHNCQUFXLENBQUMsSUFBSTtnQkFDdEIsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLElBQUksRUFBRSxFQUFFO2FBQ1gsQ0FBQztZQUVGLE1BQU0sV0FBVyxHQUFHLE1BQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzNGLE1BQU0sV0FBVyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xFLENBQUM7UUFFRCxLQUFLLENBQUMsc0JBQXNCO1lBQ3hCLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzVCLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDbkMsTUFBTSxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztZQUN4QyxNQUFNLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1lBRXpDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ2pDLENBQUM7S0FDSjtJQUNELEtBQUs7UUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLHdCQUE4QyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNuRyxJQUFJLENBQUMsQ0FBQyxDQUFDLGlCQUF1QyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM1RixJQUFJLENBQUMsQ0FBQyxDQUFDLG9CQUEwQyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEYsSUFBSSxDQUFDLENBQUMsQ0FBQyx1QkFBNkMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDeEcsSUFBSSxDQUFDLENBQUMsQ0FBQyxzQkFBNEMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDdEcsSUFBSSxDQUFDLENBQUMsQ0FBQyxrQkFBd0MsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFFL0YsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUNELFdBQVcsS0FBSyxDQUFDO0lBQ2pCLEtBQUssS0FBSyxDQUFDO0NBQ2QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IFRleHR1cmVJbmZvIH0gZnJvbSAnLi4vLi4vU2NlbmVTY3JpcHQnO1xyXG5pbXBvcnQgcGFja2FnZUpTT04gZnJvbSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJztcclxuaW1wb3J0ICogYXMgQ29yZVNlcnZpY2UgZnJvbSAnLi4vLi4vQ29yZVNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeGVjdXRlU2NlbmVTY3JpcHRNZXRob2RPcHRpb25zIH0gZnJvbSAnQGNvY29zL2NyZWF0b3ItdHlwZXMvZWRpdG9yL3BhY2thZ2VzL3NjZW5lL0B0eXBlcy9wdWJsaWMnO1xyXG5cclxuY29uc3QgTUFYX1BJWEVMX0NPVU5UID0gOTIyNzQ2ODg7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEVkaXRvci5QYW5lbC5kZWZpbmUoe1xyXG4gICAgbGlzdGVuZXJzOiB7XHJcbiAgICAgICAgLy8gc2hvdygpIHsgY29uc29sZS5sb2coJ3Nob3cnKTsgfSxcclxuICAgICAgICAvLyBoaWRlKCkgeyBjb25zb2xlLmxvZygnaGlkZScpOyB9LFxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiByZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICcuLi8uLi8uLi9zdGF0aWMvdGVtcGxhdGUvZGVmYXVsdC9pbmRleC5odG1sJyksICd1dGYtOCcpLFxyXG4gICAgc3R5bGU6IHJlYWRGaWxlU3luYyhqb2luKF9fZGlybmFtZSwgJy4uLy4uLy4uL3N0YXRpYy9zdHlsZS9kZWZhdWx0L2luZGV4LmNzcycpLCAndXRmLTgnKSxcclxuICAgICQ6IHtcclxuICAgICAgICB0ZXh0dXJlVGFyZ2V0Rm9sZGVySW5wdXQ6ICcjdGV4dHVyZS10YXJnZXQtZm9sZGVyLWlucHV0JyxcclxuICAgICAgICByZWZyZXNoVGV4dHVyZUluZm9CdXR0b246ICcjcmVmcmVzaC10ZXh0dXJlLWluZm8tYnV0dG9uJyxcclxuICAgICAgICBjbG9zZU1pcG1hcEJ1dHRvbjogJyNjbG9zZS1taXBtYXAtYnV0dG9uJyxcclxuICAgICAgICB0cmltTW9kZVRvTm9uZUJ1dHRvbjogJyN0cmltLW1vZGUtdG8tbm9uZS1idXR0b24nLFxyXG4gICAgICAgIGNvbnZlcnRQcmVmYWJNYXNrQnV0dG9uOiAnI2NvbnZlcnQtcHJlZmFiLW1hc2stYnV0dG9uJyxcclxuICAgICAgICBjb252ZXJ0U2NlbmVNYXNrQnV0dG9uOiAnI2NvbnZlcnQtc2NlbmUtbWFzay1idXR0b24nLFxyXG4gICAgICAgIGFsbE9wZXJhdGlvbkJ1dHRvbjogJyNhbGwtb3BlcmF0aW9uLWJ1dHRvbicsXHJcbiAgICAgICAgdG90YWxUZXh0dXJlQW1vdW50VGV4dDogJyN0b3RhbC10ZXh0dXJlLWFtb3VudC10ZXh0JyxcclxuICAgICAgICB0b3RhbE1lbW9yeVRleHQ6ICcjdG90YWwtbWVtb3J5LXRleHQnLFxyXG4gICAgICAgIHRvdGFsUGl4ZWxDb3VudFRleHQ6ICcjdG90YWwtcGl4ZWwtY291bnQtdGV4dCcsXHJcbiAgICAgICAgdGV4dHVyZUluZm9Db250YWluZXI6ICcjdGV4dHVyZS1pbmZvLWNvbnRhaW5lcicsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGluaXRGb2xkZXJEZWZhdWx0SW5wdXQoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvbGRlcklucHV0ID0gdGhpcy4kLnRleHR1cmVUYXJnZXRGb2xkZXJJbnB1dCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBmb2xkZXJJbnB1dC52YWx1ZSA9ICdBcnRzL0dhbWUvLCBHYW1lLywgcmVzb3VyY2VzLyc7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYXN5bmMgcmVmcmVzaEFsbFRleHR1cmVJbmZvKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbFRleHR1cmVBbW91bnRUZXh0ID0gdGhpcy4kLnRvdGFsVGV4dHVyZUFtb3VudFRleHQgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxNZW1vcnlUZXh0ID0gdGhpcy4kLnRvdGFsTWVtb3J5VGV4dCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbFBpeGVsVGV4dCA9IHRoaXMuJC50b3RhbFBpeGVsQ291bnRUZXh0IGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuJC50ZXh0dXJlSW5mb0NvbnRhaW5lciBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIHRvdGFsVGV4dHVyZUFtb3VudFRleHQuaW5uZXJUZXh0ID0gJ+iyvOWclue4veaVuOmHjzogJztcclxuICAgICAgICAgICAgdG90YWxNZW1vcnlUZXh0LmlubmVyVGV4dCA9ICfosrzlnJbnuL1HUFXoqJjmhrbpq5TlpKflsI86ICc7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAn6K6A5Y+W6LK85ZyW6LOH5rqQ5LitLi4uJztcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlQWxsQnV0dG9uKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbGxUYXJnZXRGb2xkZXIgPSB0aGlzLmdldFRhcmdldEZvbGRlcigpO1xyXG4gICAgICAgICAgICBjb25zdCBhbGxUZXh0dXJlSW5mbzogVGV4dHVyZUluZm9bXSA9IGF3YWl0IENvcmVTZXJ2aWNlLmdldEFsbFRleHR1cmVJbmZvKGFsbFRhcmdldEZvbGRlcik7XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGxldCB0b3RhbFNpemUgPSAwO1xyXG4gICAgICAgICAgICBsZXQgdG90YWxQaXhlbCA9IDA7XHJcbiAgICAgICAgICAgIGFsbFRleHR1cmVJbmZvLmZvckVhY2goKHRleHR1cmVJbmZvOiBUZXh0dXJlSW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IENvcmVTZXJ2aWNlLmNyZWF0ZVRleHR1cmVJbmZvRWxlbWVudCh0ZXh0dXJlSW5mbyk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFNpemUgKz0gdGV4dHVyZUluZm8uc2l6ZTtcclxuICAgICAgICAgICAgICAgIHRvdGFsUGl4ZWwgKz0gdGV4dHVyZUluZm8ud2lkdGggKiB0ZXh0dXJlSW5mby5oZWlnaHQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdG90YWxUZXh0dXJlQW1vdW50VGV4dC5pbm5lclRleHQgPSBgJHthbGxUZXh0dXJlSW5mby5sZW5ndGh9YDtcclxuICAgICAgICAgICAgdG90YWxNZW1vcnlUZXh0LmlubmVyVGV4dCA9IGAke0NvcmVTZXJ2aWNlLmdldEZvcm1hdHRlZFNpemUodG90YWxTaXplKX1gO1xyXG4gICAgICAgICAgICB0b3RhbFBpeGVsVGV4dC5pbm5lclRleHQgPSBgJHtDb3JlU2VydmljZS5hZGRDb21tYSh0b3RhbFBpeGVsKX1gO1xyXG4gICAgICAgICAgICBpZiAodG90YWxQaXhlbCA+PSBNQVhfUElYRUxfQ09VTlQpIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsUGl4ZWxUZXh0LnN0eWxlLmNvbG9yID0gJ3JlZCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFBpeGVsVGV4dC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlQWxsQnV0dG9uKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZGlzYWJsZUFsbEJ1dHRvbigpOiB2b2lkIHtcclxuICAgICAgICAgICAgKHRoaXMuJC5yZWZyZXNoVGV4dHVyZUluZm9CdXR0b24gYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgKHRoaXMuJC5jbG9zZU1pcG1hcEJ1dHRvbiBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAodGhpcy4kLnRyaW1Nb2RlVG9Ob25lQnV0dG9uIGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0VGFyZ2V0Rm9sZGVyKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICAgICAgY29uc3QgZm9sZGVySW5wdXQgPSB0aGlzLiQudGV4dHVyZVRhcmdldEZvbGRlcklucHV0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbFRhcmdldEZvbGRlciA9IGZvbGRlcklucHV0LnZhbHVlLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgIC8vIOWFiOWvq+atu1xyXG4gICAgICAgICAgICAvLyBjb25zdCBhbGxUYXJnZXRGb2xkZXIgPSBbJ0FydHMvR2FtZScsICdHYW1lLycsICdyZXNvdXJjZXMvJ107XHJcbiAgICAgICAgICAgIHJldHVybiBhbGxUYXJnZXRGb2xkZXI7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZW5hYmxlQWxsQnV0dG9uKCk6IHZvaWQge1xyXG4gICAgICAgICAgICAodGhpcy4kLnJlZnJlc2hUZXh0dXJlSW5mb0J1dHRvbiBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgKHRoaXMuJC5jbG9zZU1pcG1hcEJ1dHRvbiBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgKHRoaXMuJC50cmltTW9kZVRvTm9uZUJ1dHRvbiBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhc3luYyBjbG9zZUFsbFRleHR1cmVNaXBtYXAoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbFRhcmdldEZvbGRlciA9IHRoaXMuZ2V0VGFyZ2V0Rm9sZGVyKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IENvcmVTZXJ2aWNlLmNsb3NlQWxsVGV4dHVyZU1pcG1hcChhbGxUYXJnZXRGb2xkZXIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGFzeW5jIHRyaW1Nb2RlVG9Ob25lKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgICAgICBjb25zdCBhbGxUYXJnZXRGb2xkZXIgPSB0aGlzLmdldFRhcmdldEZvbGRlcigpO1xyXG4gICAgICAgICAgICBhd2FpdCBDb3JlU2VydmljZS5zZXRUcmltVHlwZVRvTm9uZShhbGxUYXJnZXRGb2xkZXIpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hBbGxUZXh0dXJlSW5mbygpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGFzeW5jIG9uQ29udmVydFByZWZhYk1hc2tCdG5DbGljaygpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxsVGFyZ2V0Rm9sZGVyID0gdGhpcy5nZXRUYXJnZXRGb2xkZXIoKTtcclxuICAgICAgICAgICAgRWRpdG9yLk1lc3NhZ2Uuc2VuZChwYWNrYWdlSlNPTi5uYW1lLCAnY29udmVydC1wcmVmYWInLCBhbGxUYXJnZXRGb2xkZXIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGFzeW5jIG9uQ29udmVydFNjZW5lTWFza0J0bkNsaWNrKCkge1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zOiBFeGVjdXRlU2NlbmVTY3JpcHRNZXRob2RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogcGFja2FnZUpTT04ubmFtZSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3NjYW5NYXNrJyxcclxuICAgICAgICAgICAgICAgIGFyZ3M6IFtdLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYWxsTWFza0luZm8gPSBhd2FpdCBFZGl0b3IuTWVzc2FnZS5yZXF1ZXN0KCdzY2VuZScsICdleGVjdXRlLXNjZW5lLXNjcmlwdCcsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBhd2FpdCBDb3JlU2VydmljZS5jb252ZXJ0TWFza1R5cGUoYWxsTWFza0luZm8uZGV0YWlscywgZmFsc2UpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGFzeW5jIG9uQWxsT3BlcmF0aW9uQnRuQ2xpY2soKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudHJpbU1vZGVUb05vbmUoKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jbG9zZUFsbFRleHR1cmVNaXBtYXAoKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5vbkNvbnZlcnRTY2VuZU1hc2tCdG5DbGljaygpO1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLm9uQ29udmVydFByZWZhYk1hc2tCdG5DbGljaygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQWxsVGV4dHVyZUluZm8oKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVhZHkoKSB7XHJcbiAgICAgICAgKHRoaXMuJC5yZWZyZXNoVGV4dHVyZUluZm9CdXR0b24gYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLm9uY2xpY2sgPSAoKSA9PiB0aGlzLnJlZnJlc2hBbGxUZXh0dXJlSW5mbygpO1xyXG4gICAgICAgICh0aGlzLiQuY2xvc2VNaXBtYXBCdXR0b24gYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlQWxsVGV4dHVyZU1pcG1hcCgpO1xyXG4gICAgICAgICh0aGlzLiQudHJpbU1vZGVUb05vbmVCdXR0b24gYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLm9uY2xpY2sgPSAoKSA9PiB0aGlzLnRyaW1Nb2RlVG9Ob25lKCk7XHJcbiAgICAgICAgKHRoaXMuJC5jb252ZXJ0UHJlZmFiTWFza0J1dHRvbiBhcyBIVE1MQnV0dG9uRWxlbWVudCkub25jbGljayA9ICgpID0+IHRoaXMub25Db252ZXJ0UHJlZmFiTWFza0J0bkNsaWNrKCk7XHJcbiAgICAgICAgKHRoaXMuJC5jb252ZXJ0U2NlbmVNYXNrQnV0dG9uIGFzIEhUTUxCdXR0b25FbGVtZW50KS5vbmNsaWNrID0gKCkgPT4gdGhpcy5vbkNvbnZlcnRTY2VuZU1hc2tCdG5DbGljaygpO1xyXG4gICAgICAgICh0aGlzLiQuYWxsT3BlcmF0aW9uQnV0dG9uIGFzIEhUTUxCdXR0b25FbGVtZW50KS5vbmNsaWNrID0gKCkgPT4gdGhpcy5vbkFsbE9wZXJhdGlvbkJ0bkNsaWNrKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdEZvbGRlckRlZmF1bHRJbnB1dCgpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaEFsbFRleHR1cmVJbmZvKCk7XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlQ2xvc2UoKSB7IH0sXHJcbiAgICBjbG9zZSgpIHsgfSxcclxufSk7XHJcbiJdfQ==
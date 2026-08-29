"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../Utils");
/**
 * @zh 如果希望兼容 3.3 之前的版本可以使用下方的代码
 * @en You can add the code below if you want compatibility with versions prior to 3.3
 */
// Editor.Panel.define = Editor.Panel.define || function(options: any) { return options }
const fs_1 = require("fs");
const path_1 = require("path");
let addComponent = null;
module.exports = Editor.Panel.define({
    listeners: {
        show() { },
        hide() { },
    },
    template: (0, fs_1.readFileSync)((0, path_1.join)(__dirname, '../../static/template/importJsonPanels/index.html'), 'utf-8'),
    style: (0, fs_1.readFileSync)((0, path_1.join)(__dirname, '../../static/style/importJsonPanels/index.css'), 'utf-8'),
    $: {
        btn: '#btn',
        nodeField: '#nodeField',
        jsonSelect: '#jsonSelect',
    },
    methods: {
        async addComponent() {
            const nodeUuid = this.$.nodeField.value; // 這就是面板裡選的場景 Node
            if (!nodeUuid) {
                (0, Utils_1.showWarn)('請在面板選一個場景 Node');
                return;
            }
            const jsonUUID = this.$.jsonSelect.value;
            if (!jsonUUID) {
                (0, Utils_1.showWarn)('請選擇json檔案');
                return;
            }
            const result = await Editor.Message.request('component-json-tools', 'import-component-props', nodeUuid, jsonUUID);
            if (result) {
                (0, Utils_1.showLog)(`✅ 加入組件完成`);
            }
            else {
                (0, Utils_1.showLog)(`❌ 加入組件失敗`);
            }
        }
    },
    async ready() {
        addComponent = this.addComponent.bind(this);
        this.$.btn.addEventListener('click', addComponent);
    },
    beforeClose() {
        this.$.btn.removeEventListener('click', addComponent);
        addComponent = null;
    },
    close() { },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zb3VyY2UvaW1wb3J0SnNvblBhbmVscy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9DQUFrRTtBQUVsRTs7O0dBR0c7QUFDSCx5RkFBeUY7QUFFekYsMkJBQWtDO0FBQ2xDLCtCQUE0QjtBQUU1QixJQUFJLFlBQVksR0FBUSxJQUFJLENBQUM7QUFFN0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNqQyxTQUFTLEVBQUU7UUFDUCxJQUFJLEtBQUssQ0FBQztRQUNWLElBQUksS0FBSyxDQUFDO0tBQ2I7SUFDRCxRQUFRLEVBQUUsSUFBQSxpQkFBWSxFQUFDLElBQUEsV0FBSSxFQUFDLFNBQVMsRUFBRSxtREFBbUQsQ0FBQyxFQUFFLE9BQU8sQ0FBQztJQUNyRyxLQUFLLEVBQUUsSUFBQSxpQkFBWSxFQUFDLElBQUEsV0FBSSxFQUFDLFNBQVMsRUFBRSwrQ0FBK0MsQ0FBQyxFQUFFLE9BQU8sQ0FBQztJQUM5RixDQUFDLEVBQUU7UUFDQyxHQUFHLEVBQUUsTUFBTTtRQUNYLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLFVBQVUsRUFBRSxhQUFhO0tBQzVCO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsS0FBSyxDQUFDLFlBQVk7WUFDZCxNQUFNLFFBQVEsR0FBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsa0JBQWtCO1lBQ3BFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDWixJQUFBLGdCQUFRLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDM0IsT0FBTztZQUNYLENBQUM7WUFFRCxNQUFNLFFBQVEsR0FBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQWtCLENBQUMsS0FBSyxDQUFDO1lBRWxELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDWixJQUFBLGdCQUFRLEVBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3RCLE9BQU87WUFDWCxDQUFDO1lBRUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FDdkMsc0JBQXNCLEVBQ3RCLHdCQUF3QixFQUN4QixRQUFRLEVBQ1IsUUFBUSxDQUNYLENBQUM7WUFFRixJQUFJLE1BQU0sRUFBRSxDQUFDO2dCQUNULElBQUEsZUFBTyxFQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3hCLENBQUM7aUJBQ0ksQ0FBQztnQkFDRixJQUFBLGVBQU8sRUFBQyxVQUFVLENBQUMsQ0FBQztZQUN4QixDQUFDO1FBQ0wsQ0FBQztLQUNKO0lBQ0QsS0FBSyxDQUFDLEtBQUs7UUFDUCxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3RELFlBQVksR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUNELEtBQUssS0FBSyxDQUFDO0NBQ2QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2hvd0xvZywgc2hvd1dhcm4sIHNob3dFcnJvciwgd2FpdFRpbWUgfSBmcm9tICcuLi9VdGlscyc7XHJcblxyXG4vKipcclxuICogQHpoIOWmguaenOW4jOacm+WFvOWuuSAzLjMg5LmL5YmN55qE54mI5pys5Y+v5Lul5L2/55So5LiL5pa555qE5Luj56CBXHJcbiAqIEBlbiBZb3UgY2FuIGFkZCB0aGUgY29kZSBiZWxvdyBpZiB5b3Ugd2FudCBjb21wYXRpYmlsaXR5IHdpdGggdmVyc2lvbnMgcHJpb3IgdG8gMy4zXHJcbiAqL1xyXG4vLyBFZGl0b3IuUGFuZWwuZGVmaW5lID0gRWRpdG9yLlBhbmVsLmRlZmluZSB8fCBmdW5jdGlvbihvcHRpb25zOiBhbnkpIHsgcmV0dXJuIG9wdGlvbnMgfVxyXG5cclxuaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSBcImZzXCI7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tIFwicGF0aFwiO1xyXG5cclxubGV0IGFkZENvbXBvbmVudDogYW55ID0gbnVsbDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRWRpdG9yLlBhbmVsLmRlZmluZSh7XHJcbiAgICBsaXN0ZW5lcnM6IHtcclxuICAgICAgICBzaG93KCkgeyB9LFxyXG4gICAgICAgIGhpZGUoKSB7IH0sXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IHJlYWRGaWxlU3luYyhqb2luKF9fZGlybmFtZSwgJy4uLy4uL3N0YXRpYy90ZW1wbGF0ZS9pbXBvcnRKc29uUGFuZWxzL2luZGV4Lmh0bWwnKSwgJ3V0Zi04JyksXHJcbiAgICBzdHlsZTogcmVhZEZpbGVTeW5jKGpvaW4oX19kaXJuYW1lLCAnLi4vLi4vc3RhdGljL3N0eWxlL2ltcG9ydEpzb25QYW5lbHMvaW5kZXguY3NzJyksICd1dGYtOCcpLFxyXG4gICAgJDoge1xyXG4gICAgICAgIGJ0bjogJyNidG4nLFxyXG4gICAgICAgIG5vZGVGaWVsZDogJyNub2RlRmllbGQnLFxyXG4gICAgICAgIGpzb25TZWxlY3Q6ICcjanNvblNlbGVjdCcsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGFzeW5jIGFkZENvbXBvbmVudCgpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZVV1aWQgPSAodGhpcy4kLm5vZGVGaWVsZCBhcyBhbnkpLnZhbHVlOyAvLyDpgJnlsLHmmK/pnaLmnb/oo6HpgbjnmoTloLTmma8gTm9kZVxyXG4gICAgICAgICAgICBpZiAoIW5vZGVVdWlkKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93V2Fybign6KuL5Zyo6Z2i5p2/6YG45LiA5YCL5aC05pmvIE5vZGUnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QganNvblVVSUQgPSAodGhpcy4kLmpzb25TZWxlY3QgYXMgYW55KS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICghanNvblVVSUQpIHtcclxuICAgICAgICAgICAgICAgIHNob3dXYXJuKCfoq4vpgbjmk4dqc29u5qqU5qGIJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEVkaXRvci5NZXNzYWdlLnJlcXVlc3QoXHJcbiAgICAgICAgICAgICAgICAnY29tcG9uZW50LWpzb24tdG9vbHMnLFxyXG4gICAgICAgICAgICAgICAgJ2ltcG9ydC1jb21wb25lbnQtcHJvcHMnLFxyXG4gICAgICAgICAgICAgICAgbm9kZVV1aWQsXHJcbiAgICAgICAgICAgICAgICBqc29uVVVJRCxcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHNob3dMb2coYOKchSDliqDlhaXntYTku7blrozmiJBgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3dMb2coYOKdjCDliqDlhaXntYTku7blpLHmlZdgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyByZWFkeSgpIHtcclxuICAgICAgICBhZGRDb21wb25lbnQgPSB0aGlzLmFkZENvbXBvbmVudC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuJC5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRDb21wb25lbnQpO1xyXG4gICAgfSxcclxuICAgIGJlZm9yZUNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuJC5idG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRDb21wb25lbnQpO1xyXG4gICAgICAgIGFkZENvbXBvbmVudCA9IG51bGw7XHJcbiAgICB9LFxyXG4gICAgY2xvc2UoKSB7IH0sXHJcbn0pOyJdfQ==
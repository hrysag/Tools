"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
/**
 * @zh 如果希望兼容 3.3 之前的版本可以使用下方的代码
 * @en You can add the code below if you want compatibility with versions prior to 3.3
 */
// Editor.Panel.define = Editor.Panel.define || function(options: any) { return options }
module.exports = Editor.Panel.define({
    listeners: {
        show() { console.log('show'); },
        hide() { console.log('hide'); },
    },
    template: (0, fs_extra_1.readFileSync)((0, path_1.join)(__dirname, '../../../static/template/default/index.html'), 'utf-8'),
    style: (0, fs_extra_1.readFileSync)((0, path_1.join)(__dirname, '../../../static/style/default/index.css'), 'utf-8'),
    $: {
        app: '#app',
        btnCopy: '#btnCopy',
        btnClear: '#btnClear',
        frameStyle: '#frameStyle',
        currentlySelected: '#currentlySelected'
    },
    methods: {
        sendResult(any) {
            // console.log(`callBack:${any}`);
            if (this.$.app) {
                this.$.app.innerHTML = any;
            }
        },
        currentlySelected(assets) {
            if (this.$.currentlySelected) {
                this.$.currentlySelected.innerHTML = assets ? `目前選擇：${assets}` : '';
            }
        }
    },
    ready() {
        var _a;
        if (this.$.btnCopy) {
            (_a = this.$.btnCopy) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
                var _a;
                if (((_a = this.$.currentlySelected) === null || _a === void 0 ? void 0 : _a.innerHTML) === '') {
                    alert('你沒有選擇任何Assets!');
                    return;
                }
                sendRun();
                if (this.$.app) {
                    this.$.app.innerHTML = 'Loading...';
                }
            });
        }
        if (this.$.btnClear) {
            this.$.btnClear.addEventListener('click', () => {
                if (this.$.app) {
                    this.$.app.innerHTML = '';
                }
            });
        }
    },
    beforeClose() { },
    close() { },
});
function sendRun() {
    console.log(`sendRun`);
    // Editor.Message.broadcast(`get-panel:Request`);
    Editor.Message.broadcast(`send-run-bundle`);
}

import { readFileSync } from 'fs';
import { join } from 'path';
import { showLog, showWarn, showError, waitTime } from '../../Utils';
import * as CoreService from '../../CoreService';

module.exports = Editor.Panel.define({
    listeners: {

    },
    template: readFileSync(join(__dirname, '../../../static/template/default/index.html'), 'utf-8'),
    style: readFileSync(join(__dirname, '../../../static/style/default/index.css'), 'utf-8'),
    $: {
        panelBody: '#panel-body',
        downloadInjectScriptButton: '#download-inject-script-button',
        resumeTestCodeButton: '#resume-test-code-button',
        insertTestCodeButton: '#insert-test-code-button',
        currentParent: '#current-parent',
    },
    methods: {
        initPanelElement() {
            const body = this.$.panelBody as HTMLDivElement;
            CoreService.createScriptUI(body);
            this.setupScrollTracking();
        },
        setupScrollTracking() {
            const body = this.$.panelBody as HTMLDivElement;
            const currentParentEl = this.$.currentParent as HTMLElement;

            body.addEventListener('scroll', () => {
                const rows = body.querySelectorAll('.row') as NodeListOf<HTMLElement>;
                let currentParent = '';

                // 找出當前可見區域的第一個元素
                for (const row of Array.from(rows)) {
                    const rect = row.getBoundingClientRect();
                    const bodyRect = body.getBoundingClientRect();

                    // 檢查元素是否在可見區域內
                    if (rect.top >= bodyRect.top && rect.top <= bodyRect.bottom) {
                        if (row.dataset.parentId === '') {
                            // 這是父元素
                            currentParent = row.dataset.label || '';
                        } else {
                            // 這是子元素,找出它的父元素
                            const parentRow = body.querySelector(`[data-id="${row.dataset.parentId}"]`) as HTMLElement;
                            if (parentRow) {
                                currentParent = parentRow.dataset.label || '';
                            }
                        }
                        break;
                    }
                }

                currentParentEl.textContent = currentParent;
            });
        },
        onInsertTestCodeButtonClick() {
            const body = this.$.panelBody as HTMLDivElement;
            const checkedMap = CoreService.getCheckedMap(body);
            CoreService.rewriteSelectedScript(checkedMap);
            CoreService.saveCurrentPanelSettingToProfile(checkedMap);
        },
        onResumeTestCodeButtonClick() {
            const body = this.$.panelBody as HTMLDivElement;
            const checkedMap = CoreService.getCheckedMap(body);
            CoreService.restoreOriginalScript(checkedMap);
        },
        onDownloadInjectScriptButtonClick() {
            const body = this.$.panelBody as HTMLDivElement;
            const checkedMap = CoreService.getCheckedMap(body);
            CoreService.downloadInjectScript(checkedMap);
            CoreService.saveCurrentPanelSettingToProfile(checkedMap);
        },
        // 綁定事件處理函數並保存引用
        boundOnDownloadInjectScriptButtonClick: null as any,
        boundOnInsertDecoratorButtonClick: null as any,
        boundOnResumeTestCodeButtonClick: null as any,
    },
    ready() {
        this.initPanelElement();
        // 保存綁定後的函數引用
        this.boundOnDownloadInjectScriptButtonClick = this.onDownloadInjectScriptButtonClick.bind(this);
        this.boundOnInsertDecoratorButtonClick = this.onInsertTestCodeButtonClick.bind(this);
        this.boundOnResumeTestCodeButtonClick = this.onResumeTestCodeButtonClick.bind(this);

        (this.$.insertTestCodeButton as HTMLButtonElement).addEventListener('click', this.boundOnInsertDecoratorButtonClick);
        (this.$.resumeTestCodeButton as HTMLButtonElement).addEventListener('click', this.boundOnResumeTestCodeButtonClick);
        (this.$.downloadInjectScriptButton as HTMLButtonElement).addEventListener('click', this.boundOnDownloadInjectScriptButtonClick);
    },
    beforeClose() { },
    close() {
        (this.$.insertTestCodeButton as HTMLButtonElement).removeEventListener('click', this.boundOnInsertDecoratorButtonClick);
        (this.$.resumeTestCodeButton as HTMLButtonElement).removeEventListener('click', this.boundOnResumeTestCodeButtonClick);
        (this.$.downloadInjectScriptButton as HTMLButtonElement).removeEventListener('click', this.boundOnDownloadInjectScriptButtonClick);
    },
});

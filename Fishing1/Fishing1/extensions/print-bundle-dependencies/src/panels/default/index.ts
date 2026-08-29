import { readFileSync } from 'fs-extra';
import { join } from 'path';
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
    template: readFileSync(join(__dirname, '../../../static/template/default/index.html'), 'utf-8'),
    style: readFileSync(join(__dirname, '../../../static/style/default/index.css'), 'utf-8'),
    $: {
        app: '#app',
        btnCopy: '#btnCopy',
        btnClear: '#btnClear',
        frameStyle:'#frameStyle',
        currentlySelected: '#currentlySelected'

    },
    methods: {
        sendResult(any: any) {
            // console.log(`callBack:${any}`);
            if(this.$.app){
                this.$.app.innerHTML = any;
            }
        },
        currentlySelected(assets: string) {
            if (this.$.currentlySelected) {
                this.$.currentlySelected.innerHTML = assets ? `目前選擇：${assets}` : '';
            }
        }
    },
    ready() {
        if(this.$.btnCopy){
            this.$.btnCopy?.addEventListener('click', ()=>{
                if (this.$.currentlySelected?.innerHTML === '') {
                    alert('你沒有選擇任何Assets!');
                    return;
                }
                sendRun();
                if (this.$.app) {
                    this.$.app.innerHTML = 'Loading...';
                }
            });
        }
        if(this.$.btnClear){
            this.$.btnClear.addEventListener('click', ()=>{
                if (this.$.app) {
                    this.$.app.innerHTML = '';
                }
            })
        }
        
        
    },
    beforeClose() { },
    close() { },
});

function sendRun(){
    console.log(`sendRun`);
    // Editor.Message.broadcast(`get-panel:Request`);
    Editor.Message.broadcast(`send-run-bundle`);
}



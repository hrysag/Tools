"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
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
const CoreService = __importStar(require("../../CoreService"));
const Const_1 = require("../../Const");
const package_json_1 = __importDefault(require("../../../package.json"));
/**
 * @zh 如果希望兼容 3.3 之前的版本可以使用下方的代码
 * @en You can add the code below if you want compatibility with versions prior to 3.3
 */
// Editor.Panel.define = Editor.Panel.define || function(options: any) { return options }
module.exports = Editor.Panel.define({
    listeners: {
    // show() { console.log('show'); },
    // hide() { console.log('hide'); },
    },
    template: (0, fs_1.readFileSync)((0, path_1.join)(__dirname, '../../../static/template/default/index.html'), 'utf-8'),
    style: (0, fs_1.readFileSync)((0, path_1.join)(__dirname, '../../../static/style/default/index.css'), 'utf-8'),
    $: {
        selectTemplate: '#select-template',
        templateHint: '#template-hint',
        inputName: '#input-name',
        inputNameError: '#input-name-error',
        btnCreate: '#btn-create',
    },
    methods: {
        setTemplateList() {
            const templateList = [
                {
                    label: '空白模板',
                    value: Const_1.BLANK_TEMPLATE,
                },
                {
                    label: 'HTML面板',
                    value: Const_1.HTML_TEMPLATE,
                },
            ];
            const selectTemplate = this.$.selectTemplate;
            templateList.forEach((item) => {
                const option = document.createElement('option');
                option.value = item.value;
                option.textContent = item.label;
                selectTemplate.appendChild(option);
            });
        },
        onTemplateSelectChange() {
            const selectTemplate = this.$.selectTemplate;
            const templateHint = this.$.templateHint;
            const template = selectTemplate.value;
            const hint = CoreService.getTemplateHint(template);
            templateHint.style.display = 'block';
            templateHint.textContent = hint;
            this.checkCreateBtnCanEnable();
        },
        onInputNameChange() {
            this.checkCreateBtnCanEnable();
        },
        createExtension() {
            const selectTemplate = this.$.selectTemplate;
            const btnCreate = this.$.btnCreate;
            const inputName = this.$.inputName;
            const template = selectTemplate.value;
            const name = inputName.value;
            btnCreate.disabled = true;
            Editor.Message.request(package_json_1.default.name, 'create-extension', template, name).then(() => {
                this.checkCreateBtnCanEnable();
            });
        },
        checkCreateBtnCanEnable() {
            const selectTemplate = this.$.selectTemplate;
            const btnCreate = this.$.btnCreate;
            const inputName = this.$.inputName;
            const inputNameError = this.$.inputNameError;
            const templateValue = selectTemplate.value;
            const checkInputNameResult = CoreService.checkInputName(inputName.value);
            if (checkInputNameResult) {
                inputNameError.style.display = 'block';
                inputNameError.textContent = checkInputNameResult;
                btnCreate.disabled = true;
            }
            else if (!templateValue) {
                inputNameError.style.display = 'block';
                inputNameError.textContent = '請選擇模板';
                btnCreate.disabled = true;
            }
            else {
                inputNameError.style.display = 'none';
                btnCreate.disabled = false;
            }
        },
        // 綁定事件處理函數並保存引用
        boundOnInputNameChange: null,
        boundCreateExtension: null,
        boundOnTemplateSelectChange: null,
    },
    ready() {
        this.setTemplateList();
        this.checkCreateBtnCanEnable();
        // 保存綁定後的函數引用
        this.boundOnInputNameChange = this.onInputNameChange.bind(this);
        this.boundCreateExtension = this.createExtension.bind(this);
        this.boundOnTemplateSelectChange = this.onTemplateSelectChange.bind(this);
        this.$.inputName.addEventListener('input', this.boundOnInputNameChange);
        this.$.btnCreate.addEventListener('click', this.boundCreateExtension);
        this.$.selectTemplate.addEventListener('change', this.boundOnTemplateSelectChange);
    },
    beforeClose() { },
    close() {
        // 使用保存的函數引用來移除事件監聽器
        if (this.boundOnInputNameChange) {
            this.$.inputName.removeEventListener('input', this.boundOnInputNameChange);
        }
        if (this.boundCreateExtension) {
            this.$.btnCreate.removeEventListener('click', this.boundCreateExtension);
        }
        if (this.boundOnTemplateSelectChange) {
            this.$.selectTemplate.removeEventListener('change', this.boundOnTemplateSelectChange);
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvcGFuZWxzL2RlZmF1bHQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJCQUFrQztBQUNsQywrQkFBNEI7QUFFNUIsK0RBQWlEO0FBQ2pELHVDQUE0RDtBQUM1RCx5RUFBZ0Q7QUFDaEQ7OztHQUdHO0FBQ0gseUZBQXlGO0FBQ3pGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDakMsU0FBUyxFQUFFO0lBQ1AsbUNBQW1DO0lBQ25DLG1DQUFtQztLQUN0QztJQUNELFFBQVEsRUFBRSxJQUFBLGlCQUFZLEVBQUMsSUFBQSxXQUFJLEVBQUMsU0FBUyxFQUFFLDZDQUE2QyxDQUFDLEVBQUUsT0FBTyxDQUFDO0lBQy9GLEtBQUssRUFBRSxJQUFBLGlCQUFZLEVBQUMsSUFBQSxXQUFJLEVBQUMsU0FBUyxFQUFFLHlDQUF5QyxDQUFDLEVBQUUsT0FBTyxDQUFDO0lBQ3hGLENBQUMsRUFBRTtRQUNDLGNBQWMsRUFBRSxrQkFBa0I7UUFDbEMsWUFBWSxFQUFFLGdCQUFnQjtRQUM5QixTQUFTLEVBQUUsYUFBYTtRQUN4QixjQUFjLEVBQUUsbUJBQW1CO1FBQ25DLFNBQVMsRUFBRSxhQUFhO0tBQzNCO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsZUFBZTtZQUNYLE1BQU0sWUFBWSxHQUFHO2dCQUNqQjtvQkFDSSxLQUFLLEVBQUUsTUFBTTtvQkFDYixLQUFLLEVBQUUsc0JBQWM7aUJBQ3hCO2dCQUNEO29CQUNJLEtBQUssRUFBRSxRQUFRO29CQUNmLEtBQUssRUFBRSxxQkFBYTtpQkFDdkI7YUFDSixDQUFDO1lBQ0YsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFtQyxDQUFDO1lBQ2xFLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVB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RCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBK0IsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDcEcsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFvQyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNqSCxDQUFDO0lBQ0wsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xyXG5cclxuaW1wb3J0ICogYXMgQ29yZVNlcnZpY2UgZnJvbSAnLi4vLi4vQ29yZVNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCTEFOS19URU1QTEFURSwgSFRNTF9URU1QTEFURSB9IGZyb20gJy4uLy4uL0NvbnN0JztcclxuaW1wb3J0IHBhY2thZ2VKU09OIGZyb20gJy4uLy4uLy4uL3BhY2thZ2UuanNvbic7XHJcbi8qKlxyXG4gKiBAemgg5aaC5p6c5biM5pyb5YW85a65IDMuMyDkuYvliY3nmoTniYjmnKzlj6/ku6Xkvb/nlKjkuIvmlrnnmoTku6PnoIFcclxuICogQGVuIFlvdSBjYW4gYWRkIHRoZSBjb2RlIGJlbG93IGlmIHlvdSB3YW50IGNvbXBhdGliaWxpdHkgd2l0aCB2ZXJzaW9ucyBwcmlvciB0byAzLjNcclxuICovXHJcbi8vIEVkaXRvci5QYW5lbC5kZWZpbmUgPSBFZGl0b3IuUGFuZWwuZGVmaW5lIHx8IGZ1bmN0aW9uKG9wdGlvbnM6IGFueSkgeyByZXR1cm4gb3B0aW9ucyB9XHJcbm1vZHVsZS5leHBvcnRzID0gRWRpdG9yLlBhbmVsLmRlZmluZSh7XHJcbiAgICBsaXN0ZW5lcnM6IHtcclxuICAgICAgICAvLyBzaG93KCkgeyBjb25zb2xlLmxvZygnc2hvdycpOyB9LFxyXG4gICAgICAgIC8vIGhpZGUoKSB7IGNvbnNvbGUubG9nKCdoaWRlJyk7IH0sXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IHJlYWRGaWxlU3luYyhqb2luKF9fZGlybmFtZSwgJy4uLy4uLy4uL3N0YXRpYy90ZW1wbGF0ZS9kZWZhdWx0L2luZGV4Lmh0bWwnKSwgJ3V0Zi04JyksXHJcbiAgICBzdHlsZTogcmVhZEZpbGVTeW5jKGpvaW4oX19kaXJuYW1lLCAnLi4vLi4vLi4vc3RhdGljL3N0eWxlL2RlZmF1bHQvaW5kZXguY3NzJyksICd1dGYtOCcpLFxyXG4gICAgJDoge1xyXG4gICAgICAgIHNlbGVjdFRlbXBsYXRlOiAnI3NlbGVjdC10ZW1wbGF0ZScsXHJcbiAgICAgICAgdGVtcGxhdGVIaW50OiAnI3RlbXBsYXRlLWhpbnQnLFxyXG4gICAgICAgIGlucHV0TmFtZTogJyNpbnB1dC1uYW1lJyxcclxuICAgICAgICBpbnB1dE5hbWVFcnJvcjogJyNpbnB1dC1uYW1lLWVycm9yJyxcclxuICAgICAgICBidG5DcmVhdGU6ICcjYnRuLWNyZWF0ZScsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNldFRlbXBsYXRlTGlzdCgpIHtcclxuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGVMaXN0ID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAn56m655m95qih5p2/JyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogQkxBTktfVEVNUExBVEUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnSFRNTOmdouadvycsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IEhUTUxfVEVNUExBVEUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RUZW1wbGF0ZSA9IHRoaXMuJC5zZWxlY3RUZW1wbGF0ZSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgICAgICAgICAgdGVtcGxhdGVMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0ubGFiZWw7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RUZW1wbGF0ZS5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uVGVtcGxhdGVTZWxlY3RDaGFuZ2UoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdFRlbXBsYXRlID0gdGhpcy4kLnNlbGVjdFRlbXBsYXRlIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZUhpbnQgPSB0aGlzLiQudGVtcGxhdGVIaW50IGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBzZWxlY3RUZW1wbGF0ZS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgaGludCA9IENvcmVTZXJ2aWNlLmdldFRlbXBsYXRlSGludCh0ZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlSGludC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgdGVtcGxhdGVIaW50LnRleHRDb250ZW50ID0gaGludDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tDcmVhdGVCdG5DYW5FbmFibGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uSW5wdXROYW1lQ2hhbmdlKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQ3JlYXRlQnRuQ2FuRW5hYmxlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVFeHRlbnNpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdFRlbXBsYXRlID0gdGhpcy4kLnNlbGVjdFRlbXBsYXRlIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCBidG5DcmVhdGUgPSB0aGlzLiQuYnRuQ3JlYXRlIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSB0aGlzLiQuaW5wdXROYW1lIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHNlbGVjdFRlbXBsYXRlLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gaW5wdXROYW1lLnZhbHVlO1xyXG4gICAgICAgICAgICBidG5DcmVhdGUuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBFZGl0b3IuTWVzc2FnZS5yZXF1ZXN0KHBhY2thZ2VKU09OLm5hbWUsICdjcmVhdGUtZXh0ZW5zaW9uJywgdGVtcGxhdGUsIG5hbWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0NyZWF0ZUJ0bkNhbkVuYWJsZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoZWNrQ3JlYXRlQnRuQ2FuRW5hYmxlKCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RUZW1wbGF0ZSA9IHRoaXMuJC5zZWxlY3RUZW1wbGF0ZSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgYnRuQ3JlYXRlID0gdGhpcy4kLmJ0bkNyZWF0ZSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXROYW1lID0gdGhpcy4kLmlucHV0TmFtZSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dE5hbWVFcnJvciA9IHRoaXMuJC5pbnB1dE5hbWVFcnJvciBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlVmFsdWUgPSBzZWxlY3RUZW1wbGF0ZS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tJbnB1dE5hbWVSZXN1bHQgPSBDb3JlU2VydmljZS5jaGVja0lucHV0TmFtZShpbnB1dE5hbWUudmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNoZWNrSW5wdXROYW1lUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dE5hbWVFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIGlucHV0TmFtZUVycm9yLnRleHRDb250ZW50ID0gY2hlY2tJbnB1dE5hbWVSZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBidG5DcmVhdGUuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0ZW1wbGF0ZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dE5hbWVFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIGlucHV0TmFtZUVycm9yLnRleHRDb250ZW50ID0gJ+iri+mBuOaTh+aooeadvyc7XHJcbiAgICAgICAgICAgICAgICBidG5DcmVhdGUuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5wdXROYW1lRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIGJ0bkNyZWF0ZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g57aB5a6a5LqL5Lu26JmV55CG5Ye95pW45Lim5L+d5a2Y5byV55SoXHJcbiAgICAgICAgYm91bmRPbklucHV0TmFtZUNoYW5nZTogbnVsbCBhcyBhbnksXHJcbiAgICAgICAgYm91bmRDcmVhdGVFeHRlbnNpb246IG51bGwgYXMgYW55LFxyXG4gICAgICAgIGJvdW5kT25UZW1wbGF0ZVNlbGVjdENoYW5nZTogbnVsbCBhcyBhbnksXHJcbiAgICB9LFxyXG4gICAgcmVhZHkoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRUZW1wbGF0ZUxpc3QoKTtcclxuICAgICAgICB0aGlzLmNoZWNrQ3JlYXRlQnRuQ2FuRW5hYmxlKCk7XHJcblxyXG4gICAgICAgIC8vIOS/neWtmOe2geWumuW+jOeahOWHveaVuOW8leeUqFxyXG4gICAgICAgIHRoaXMuYm91bmRPbklucHV0TmFtZUNoYW5nZSA9IHRoaXMub25JbnB1dE5hbWVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJvdW5kQ3JlYXRlRXh0ZW5zaW9uID0gdGhpcy5jcmVhdGVFeHRlbnNpb24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJvdW5kT25UZW1wbGF0ZVNlbGVjdENoYW5nZSA9IHRoaXMub25UZW1wbGF0ZVNlbGVjdENoYW5nZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICAodGhpcy4kLmlucHV0TmFtZSBhcyBIVE1MSW5wdXRFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuYm91bmRPbklucHV0TmFtZUNoYW5nZSk7XHJcbiAgICAgICAgKHRoaXMuJC5idG5DcmVhdGUgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZENyZWF0ZUV4dGVuc2lvbik7XHJcbiAgICAgICAgKHRoaXMuJC5zZWxlY3RUZW1wbGF0ZSBhcyBIVE1MU2VsZWN0RWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5ib3VuZE9uVGVtcGxhdGVTZWxlY3RDaGFuZ2UpO1xyXG4gICAgfSxcclxuICAgIGJlZm9yZUNsb3NlKCkgeyB9LFxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgLy8g5L2/55So5L+d5a2Y55qE5Ye95pW45byV55So5L6G56e76Zmk5LqL5Lu255uj6IG95ZmoXHJcbiAgICAgICAgaWYgKHRoaXMuYm91bmRPbklucHV0TmFtZUNoYW5nZSkge1xyXG4gICAgICAgICAgICAodGhpcy4kLmlucHV0TmFtZSBhcyBIVE1MSW5wdXRFbGVtZW50KS5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuYm91bmRPbklucHV0TmFtZUNoYW5nZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJvdW5kQ3JlYXRlRXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgICAgICh0aGlzLiQuYnRuQ3JlYXRlIGFzIEhUTUxCdXR0b25FbGVtZW50KS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRDcmVhdGVFeHRlbnNpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ib3VuZE9uVGVtcGxhdGVTZWxlY3RDaGFuZ2UpIHtcclxuICAgICAgICAgICAgKHRoaXMuJC5zZWxlY3RUZW1wbGF0ZSBhcyBIVE1MU2VsZWN0RWxlbWVudCkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5ib3VuZE9uVGVtcGxhdGVTZWxlY3RDaGFuZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
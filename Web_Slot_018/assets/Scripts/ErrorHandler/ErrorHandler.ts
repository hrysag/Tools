
import { MessageBox } from '../../GenericUI/Scripts/MessageBox';
import { Localization } from '../GameScripts/Localization';
import { ErrorCode, ErrorCodeToMsg, ErrorCodeToTitle, ErrorCodeEventProcess, ErrorCodeCancelEvent, MessageReplaceFlag, ShowErrorCodeFlag, DefaultTitle, DefaultMsg, ErrorMessageLanguageKey, ErrorTitleLanguageKey } from "./ErrorHandleDefine";
//最多顯示重要錯誤的次數
const ImportantErrorCountMax: number = 1;
export class ErrorHandler {
    private _importantErrorCount: number = 0;
    private static s_Instance: ErrorHandler = null;

    private constructor() { }

    public static get Instance(): ErrorHandler {
        if (ErrorHandler.s_Instance == null) {
            ErrorHandler.s_Instance = new ErrorHandler();
        }
        return ErrorHandler.s_Instance;
    }

    //觸發 Error Code
    public TriggerError(errorCode: ErrorCode, isShowConfirm: boolean = false, callback?: Function) {
        const title = this.getTitle(errorCode);
        const content = this.getContent(errorCode);
        const confirm = this.getConfirmEvent(errorCode);

        MessageBox.instance.showMsgBox(title, content, isShowConfirm, callback);
    }
    //取得Error title
    private getTitle(errorCode: ErrorCode): string {
        let title: string = Localization.instance.t(ErrorTitleLanguageKey + DefaultTitle);
        for (let errorTitle in ErrorCodeToTitle) {
            const errorCodeArray: number[] = (<any>ErrorCodeToTitle)[errorTitle]
            if (errorCodeArray.indexOf(errorCode) != -1) {
                title = Localization.instance.t(ErrorTitleLanguageKey + errorTitle);
                if (title == "") {
                    title = errorTitle;
                }

                return title;
            }
        }
        return title;
    }

    //Get Error Message
    private getContent(errorCode: ErrorCode): string {
        let content: string = Localization.instance.t(ErrorMessageLanguageKey + DefaultMsg);
        for (let errorContent in ErrorCodeToMsg) {
            const errorCodeArray: number[] = (<any>ErrorCodeToMsg)[errorContent]
            if (errorCodeArray.indexOf(errorCode) != -1) {
                content = Localization.instance.t(ErrorMessageLanguageKey + errorContent);
                if (content == "") {
                    content = errorContent;
                }
            }
        }
        if (ShowErrorCodeFlag) {
            content = content.replace(MessageReplaceFlag, `(${errorCode})`);
        }
        else {
            content = content.replace(MessageReplaceFlag, ``);
        }
        return content;
    }


    //取得對應的Error Handle 處理事件
    private getConfirmEvent(errorCode: ErrorCode) {
        return this.triggerConfirmEvent.bind(ErrorCodeEventProcess.Default);
    }

    //Trigger Error event
    private triggerConfirmEvent(event: ErrorCodeEventProcess) {
        switch (event) {
            case ErrorCodeEventProcess.Back:
                location.reload();
                break;
            default:
                console.log("[triggerConfirmEvent] default event")
                break;

        }
    }
    /*
        //檢查是否需要 取消按鈕
        private isNeedCancel(errorCode: ErrorCode): boolean {
            for (let event in ErrorCodeCancelEvent) {
                const errorCodeArray: number[] = ErrorCodeCancelEvent[event]
                if (errorCodeArray.indexOf(errorCode) != -1) {
                    return true
                }
            }
            return false;
        }
    
        //檢查是否需要顯示背景
        private isShowBG(errorCode: ErrorCode): boolean {
            return ErrorCodeNoShowBGEvent.indexOf(errorCode) == -1;
        }
    */
}
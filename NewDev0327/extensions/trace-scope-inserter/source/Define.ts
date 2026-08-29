export class PanelData {
    public id: string = '';
    public parentId: string = '';
    public label: string = '';
}

export class CheckedData {
    public rewriteBody: boolean = false;
    public outputLog: boolean = false;
    public callByPromiseAll: boolean = false;

    public outputLogEnabled: boolean = false;
    public callByPromiseAllEnabled: boolean = false;

    public checkOutputLog(): boolean {
        return this.outputLog && this.outputLogEnabled;
    }

    public checkCallByPromiseAll(): boolean {
        return this.callByPromiseAll && this.callByPromiseAllEnabled;
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckedData = exports.PanelData = void 0;
class PanelData {
    constructor() {
        this.id = '';
        this.parentId = '';
        this.label = '';
    }
}
exports.PanelData = PanelData;
class CheckedData {
    constructor() {
        this.rewriteBody = false;
        this.outputLog = false;
        this.callByPromiseAll = false;
        this.outputLogEnabled = false;
        this.callByPromiseAllEnabled = false;
    }
    checkOutputLog() {
        return this.outputLog && this.outputLogEnabled;
    }
    checkCallByPromiseAll() {
        return this.callByPromiseAll && this.callByPromiseAllEnabled;
    }
}
exports.CheckedData = CheckedData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmaW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL0RlZmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLFNBQVM7SUFBdEI7UUFDVyxPQUFFLEdBQVcsRUFBRSxDQUFDO1FBQ2hCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDO0NBQUE7QUFKRCw4QkFJQztBQUVELE1BQWEsV0FBVztJQUF4QjtRQUNXLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBRWxDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyw0QkFBdUIsR0FBWSxLQUFLLENBQUM7SUFTcEQsQ0FBQztJQVBVLGNBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNuRCxDQUFDO0lBRU0scUJBQXFCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztJQUNqRSxDQUFDO0NBQ0o7QUFmRCxrQ0FlQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYW5lbERhdGEge1xyXG4gICAgcHVibGljIGlkOiBzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBwYXJlbnRJZDogc3RyaW5nID0gJyc7XHJcbiAgICBwdWJsaWMgbGFiZWw6IHN0cmluZyA9ICcnO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tlZERhdGEge1xyXG4gICAgcHVibGljIHJld3JpdGVCb2R5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgb3V0cHV0TG9nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgY2FsbEJ5UHJvbWlzZUFsbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBvdXRwdXRMb2dFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgY2FsbEJ5UHJvbWlzZUFsbEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgY2hlY2tPdXRwdXRMb2coKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3V0cHV0TG9nICYmIHRoaXMub3V0cHV0TG9nRW5hYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hlY2tDYWxsQnlQcm9taXNlQWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbGxCeVByb21pc2VBbGwgJiYgdGhpcy5jYWxsQnlQcm9taXNlQWxsRW5hYmxlZDtcclxuICAgIH1cclxufVxyXG4iXX0=
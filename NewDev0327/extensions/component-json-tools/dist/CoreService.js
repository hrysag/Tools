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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.afterReload = afterReload;
exports.exportComponentProps = exportComponentProps;
exports.importComponentProps = importComponentProps;
exports.exportJsonForComponent = exportJsonForComponent;
exports.handleCompData = handleCompData;
exports.createComponentData = createComponentData;
const fs = __importStar(require("fs"));
const Utils_1 = require("./Utils");
const Const_1 = require("./Const");
let lastPath = Editor.Project.path + '\\assets';
function afterReload() {
}
async function exportComponentProps(nodeUUID, compName, filename) {
    // 取得 Node 資訊
    const nodeInfo = await Editor.Message.request('scene', 'query-node', nodeUUID);
    // 找指定的 component
    const comp = nodeInfo.__comps__.find((c) => c.type === compName);
    if (!comp) {
        (0, Utils_1.showWarn)(`Node 上沒有找到 ${compName}`);
        return;
    }
    // 序列化屬性
    const json = JSON.stringify(comp.value, null, 2);
    const savePath = await Editor.Dialog.save({
        title: '請輸出匯出檔名',
        filters: [{ name: 'JSON', extensions: ['json'] }],
        path: lastPath + `\\${filename}.json`,
    });
    if (!savePath.canceled) {
        fs.writeFileSync(savePath.filePath, json, 'utf-8');
        (0, Utils_1.showLog)(`已輸出到 ${savePath.filePath}`);
        await Editor.Message.request('scene', 'save-scene');
        lastPath = savePath.filePath;
        return savePath.filePath;
    }
    else {
        (0, Utils_1.showLog)(`匯出取消`);
        return null;
    }
}
async function importComponentProps(nodeUUID, jsonUUID) {
    // 取得 json 資訊
    const jsonAsset = await Editor.Message.request('asset-db', 'query-asset-info', jsonUUID);
    const json = fs.readFileSync(jsonAsset.file, 'utf-8');
    const jsonData = JSON.parse(json);
    const match = jsonData.name.value.match(/<([^>]+)>/);
    const componentName = match[1];
    let nodeInfo = await Editor.Message.request('scene', 'query-node', nodeUUID);
    let comp = nodeInfo.__comps__.find((c) => c.type === componentName);
    if (!comp) {
        (0, Utils_1.showLog)(`[ImportJson] Node 上沒有找到 ${componentName}，創建新組件`);
        await Editor.Message.request('scene', 'create-component', {
            uuid: nodeUUID,
            component: componentName,
        });
        nodeInfo = await Editor.Message.request('scene', 'query-node', nodeUUID);
        comp = nodeInfo.__comps__.find((c) => c.type === componentName);
        if (!comp) {
            (0, Utils_1.showLog)(`[ImportJson] Node 添加組件失敗 ${componentName}`);
            return false;
        }
    }
    const compIndex = nodeInfo.__comps__.indexOf(comp);
    let count = 0;
    // 設定屬性
    for (const key in jsonData) {
        count++;
        if (count <= Const_1.BasePropertyCount) { // 略過基本屬性
            continue;
        }
        if (jsonData[key].type === 'cc.RealCurve' && !jsonData[key].value.keyFrames) {
            jsonData[key].value = Const_1.defaultRealCurvePoints;
        }
        await Editor.Message.request('scene', 'set-property', {
            uuid: nodeUUID,
            path: `__comps__[${compIndex}].${key}`,
            dump: {
                type: jsonData[key].type,
                value: jsonData[key].value,
            },
        });
    }
    return true;
}
async function exportJsonForComponent(nodeUUID, compName, filename) {
    // 取得 Node 資訊
    const nodeInfo = await Editor.Message.request('scene', 'query-node', nodeUUID);
    // 找指定的 component
    const comp = nodeInfo.__comps__.find((c) => c.type === compName);
    if (!comp) {
        (0, Utils_1.showWarn)(`Node 上沒有找到 ${compName}`);
        return;
    }
    let newData = await handleCompData(comp);
    let compData = createComponentData(newData);
    // 序列化屬性
    let json = JSON.stringify(compData, null, 2);
    const savePath = await Editor.Dialog.save({
        title: '請輸入匯出檔名',
        filters: [{ name: 'JSON', extensions: ['json'] }],
        path: lastPath + `\\${filename}.json`,
    });
    if (!savePath.canceled) {
        fs.writeFileSync(savePath.filePath, json, 'utf-8');
        lastPath = savePath.filePath;
        await Editor.Message.request('scene', 'save-scene');
        (0, Utils_1.showLog)(`[ExportJson] 已輸出到 ${savePath.filePath}`);
    }
    else {
        (0, Utils_1.showLog)(`[ExportJson] 匯出取消`);
    }
}
/**
 * 刪除不需要的屬性
 * @param originData component所有屬性資料
 */
function handleCompData(originData) {
    let handleCompData = originData.value;
    let count = 0;
    for (const key in handleCompData) {
        count++;
        if (count <= Const_1.BasePropertyCount + 3) { // 略過基本屬性，還有importJson跟exportJson
            delete handleCompData[key];
        }
        else {
            break;
        }
    }
    return handleCompData;
}
/**
 * 產生組件資料
 * @param originData component屬性資料
 * @returns
 */
function createComponentData(originData) {
    let componentData = {};
    for (const key in originData) {
        if (typeof originData[key].value === 'object') {
            const isArray = Array.isArray(originData[key].value);
            const isRealCurve = originData[key].type === 'cc.RealCurve';
            if (isRealCurve && !isArray) {
                let realCurveData = {};
                if (!originData[key].value.keyFrames) {
                    realCurveData.value = Const_1.defaultRealCurvePoints;
                }
                else {
                    realCurveData.value = originData[key].value;
                }
                realCurveData.isRealCurve = true;
                componentData[key] = realCurveData;
            }
            else {
                componentData[key] = createComponentData(originData[key].value);
            }
        }
        else {
            componentData[key] = originData[key].value;
        }
    }
    return componentData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29yZVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvQ29yZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxrQ0FFQztBQUVELG9EQWtDQztBQUVELG9EQXNEQztBQUVELHdEQW1DQztBQU1ELHdDQWdCQztBQU9ELGtEQThCQztBQXBNRCx1Q0FBeUI7QUFDekIsbUNBQWlFO0FBQ2pFLG1DQUFvRTtBQUVwRSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7QUFFaEQsU0FBZ0IsV0FBVztBQUUzQixDQUFDO0FBRU0sS0FBSyxVQUFVLG9CQUFvQixDQUFDLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxRQUFnQjtJQUMzRixhQUFhO0lBQ2IsTUFBTSxRQUFRLEdBQUcsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRS9FLGlCQUFpQjtJQUNqQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQztJQUNqRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDUixJQUFBLGdCQUFRLEVBQUMsY0FBYyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLE9BQU87SUFDWCxDQUFDO0lBRUQsUUFBUTtJQUNSLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFakQsTUFBTSxRQUFRLEdBQTZDLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEYsS0FBSyxFQUFFLFNBQVM7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QUFDO1lBQ3ZDLENBQUM7aUJBQ0ksQ0FBQztnQkFDRixhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BFLENBQUM7UUFDTCxDQUFDO2FBQ0ksQ0FBQztZQUNGLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQy9DLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxhQUFhLENBQUM7QUFDekIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IHNob3dMb2csIHNob3dXYXJuLCBzaG93RXJyb3IsIHdhaXRUaW1lIH0gZnJvbSAnLi9VdGlscyc7XG5pbXBvcnQgeyBCYXNlUHJvcGVydHlDb3VudCwgZGVmYXVsdFJlYWxDdXJ2ZVBvaW50cyB9IGZyb20gJy4vQ29uc3QnO1xuXG5sZXQgbGFzdFBhdGggPSBFZGl0b3IuUHJvamVjdC5wYXRoICsgJ1xcXFxhc3NldHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWZ0ZXJSZWxvYWQoKSB7XG5cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4cG9ydENvbXBvbmVudFByb3BzKG5vZGVVVUlEOiBzdHJpbmcsIGNvbXBOYW1lOiBzdHJpbmcsIGZpbGVuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIC8vIOWPluW+lyBOb2RlIOizh+ioilxuICAgIGNvbnN0IG5vZGVJbmZvID0gYXdhaXQgRWRpdG9yLk1lc3NhZ2UucmVxdWVzdCgnc2NlbmUnLCAncXVlcnktbm9kZScsIG5vZGVVVUlEKTtcblxuICAgIC8vIOaJvuaMh+WumueahCBjb21wb25lbnRcbiAgICBjb25zdCBjb21wID0gbm9kZUluZm8uX19jb21wc19fLmZpbmQoKGMpID0+IGMudHlwZSA9PT0gY29tcE5hbWUpO1xuICAgIGlmICghY29tcCkge1xuICAgICAgICBzaG93V2FybihgTm9kZSDkuIrmspLmnInmib7liLAgJHtjb21wTmFtZX1gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIOW6j+WIl+WMluWxrOaAp1xuICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShjb21wLnZhbHVlLCBudWxsLCAyKTtcblxuICAgIGNvbnN0IHNhdmVQYXRoOiB7IGNhbmNlbGVkOiBib29sZWFuOyBmaWxlUGF0aDogc3RyaW5nOyB9ID0gYXdhaXQgRWRpdG9yLkRpYWxvZy5zYXZlKHtcbiAgICAgICAgdGl0bGU6ICfoq4vovLjlh7rljK/lh7rmqpTlkI0nLFxuICAgICAgICBmaWx0ZXJzOiBbeyBuYW1lOiAnSlNPTicsIGV4dGVuc2lvbnM6IFsnanNvbiddIH1dLFxuICAgICAgICBwYXRoOiBsYXN0UGF0aCArIGBcXFxcJHtmaWxlbmFtZX0uanNvbmAsXG4gICAgfSlcblxuICAgIGlmICghc2F2ZVBhdGguY2FuY2VsZWQpIHtcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhzYXZlUGF0aC5maWxlUGF0aCwganNvbiwgJ3V0Zi04Jyk7XG5cbiAgICAgICAgc2hvd0xvZyhg5bey6Ly45Ye65YiwICR7c2F2ZVBhdGguZmlsZVBhdGh9YCk7XG5cbiAgICAgICAgYXdhaXQgRWRpdG9yLk1lc3NhZ2UucmVxdWVzdCgnc2NlbmUnLCAnc2F2ZS1zY2VuZScpO1xuXG4gICAgICAgIGxhc3RQYXRoID0gc2F2ZVBhdGguZmlsZVBhdGg7XG4gICAgICAgIHJldHVybiBzYXZlUGF0aC5maWxlUGF0aDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNob3dMb2coYOWMr+WHuuWPlua2iGApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRDb21wb25lbnRQcm9wcyhub2RlVVVJRDogc3RyaW5nLCBqc29uVVVJRDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgLy8g5Y+W5b6XIGpzb24g6LOH6KiKXG4gICAgY29uc3QganNvbkFzc2V0ID0gYXdhaXQgRWRpdG9yLk1lc3NhZ2UucmVxdWVzdCgnYXNzZXQtZGInLCAncXVlcnktYXNzZXQtaW5mbycsIGpzb25VVUlEKTtcbiAgICBjb25zdCBqc29uID0gZnMucmVhZEZpbGVTeW5jKGpzb25Bc3NldC5maWxlLCAndXRmLTgnKTtcbiAgICBjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2UoanNvbik7XG5cbiAgICBjb25zdCBtYXRjaCA9IGpzb25EYXRhLm5hbWUudmFsdWUubWF0Y2goLzwoW14+XSspPi8pO1xuICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSBtYXRjaFsxXTtcblxuICAgIGxldCBub2RlSW5mbyA9IGF3YWl0IEVkaXRvci5NZXNzYWdlLnJlcXVlc3QoJ3NjZW5lJywgJ3F1ZXJ5LW5vZGUnLCBub2RlVVVJRCk7XG4gICAgbGV0IGNvbXAgPSBub2RlSW5mby5fX2NvbXBzX18uZmluZCgoYykgPT4gYy50eXBlID09PSBjb21wb25lbnROYW1lKTtcblxuICAgIGlmICghY29tcCkge1xuICAgICAgICBzaG93TG9nKGBbSW1wb3J0SnNvbl0gTm9kZSDkuIrmspLmnInmib7liLAgJHtjb21wb25lbnROYW1lfe+8jOWJteW7uuaWsOe1hOS7tmApO1xuICAgICAgICBhd2FpdCBFZGl0b3IuTWVzc2FnZS5yZXF1ZXN0KCdzY2VuZScsICdjcmVhdGUtY29tcG9uZW50Jywge1xuICAgICAgICAgICAgdXVpZDogbm9kZVVVSUQsXG4gICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudE5hbWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5vZGVJbmZvID0gYXdhaXQgRWRpdG9yLk1lc3NhZ2UucmVxdWVzdCgnc2NlbmUnLCAncXVlcnktbm9kZScsIG5vZGVVVUlEKTtcbiAgICAgICAgY29tcCA9IG5vZGVJbmZvLl9fY29tcHNfXy5maW5kKChjKSA9PiBjLnR5cGUgPT09IGNvbXBvbmVudE5hbWUpO1xuICAgICAgICBpZiAoIWNvbXApIHtcbiAgICAgICAgICAgIHNob3dMb2coYFtJbXBvcnRKc29uXSBOb2RlIOa3u+WKoOe1hOS7tuWkseaVlyAke2NvbXBvbmVudE5hbWV9YCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb21wSW5kZXggPSBub2RlSW5mby5fX2NvbXBzX18uaW5kZXhPZihjb21wKTtcblxuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICAvLyDoqK3lrprlsazmgKdcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBqc29uRGF0YSkge1xuICAgICAgICBjb3VudCsrO1xuXG4gICAgICAgIGlmIChjb3VudCA8PSBCYXNlUHJvcGVydHlDb3VudCkgeyAvLyDnlaXpgY7ln7rmnKzlsazmgKdcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGpzb25EYXRhW2tleV0udHlwZSA9PT0gJ2NjLlJlYWxDdXJ2ZScgJiYgIWpzb25EYXRhW2tleV0udmFsdWUua2V5RnJhbWVzKSB7XG4gICAgICAgICAgICBqc29uRGF0YVtrZXldLnZhbHVlID0gZGVmYXVsdFJlYWxDdXJ2ZVBvaW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IEVkaXRvci5NZXNzYWdlLnJlcXVlc3QoJ3NjZW5lJywgJ3NldC1wcm9wZXJ0eScsIHtcbiAgICAgICAgICAgIHV1aWQ6IG5vZGVVVUlELFxuICAgICAgICAgICAgcGF0aDogYF9fY29tcHNfX1ske2NvbXBJbmRleH1dLiR7a2V5fWAsXG4gICAgICAgICAgICBkdW1wOiB7XG4gICAgICAgICAgICAgICAgdHlwZToganNvbkRhdGFba2V5XS50eXBlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBqc29uRGF0YVtrZXldLnZhbHVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleHBvcnRKc29uRm9yQ29tcG9uZW50KG5vZGVVVUlEOiBzdHJpbmcsIGNvbXBOYW1lOiBzdHJpbmcsIGZpbGVuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyDlj5blvpcgTm9kZSDos4foqIpcbiAgICBjb25zdCBub2RlSW5mbyA9IGF3YWl0IEVkaXRvci5NZXNzYWdlLnJlcXVlc3QoJ3NjZW5lJywgJ3F1ZXJ5LW5vZGUnLCBub2RlVVVJRCk7XG5cbiAgICAvLyDmib7mjIflrprnmoQgY29tcG9uZW50XG4gICAgY29uc3QgY29tcCA9IG5vZGVJbmZvLl9fY29tcHNfXy5maW5kKChjKSA9PiBjLnR5cGUgPT09IGNvbXBOYW1lKTtcbiAgICBpZiAoIWNvbXApIHtcbiAgICAgICAgc2hvd1dhcm4oYE5vZGUg5LiK5rKS5pyJ5om+5YiwICR7Y29tcE5hbWV9YCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbmV3RGF0YSA9IGF3YWl0IGhhbmRsZUNvbXBEYXRhKGNvbXApO1xuICAgIGxldCBjb21wRGF0YSA9IGNyZWF0ZUNvbXBvbmVudERhdGEobmV3RGF0YSk7XG4gICAgLy8g5bqP5YiX5YyW5bGs5oCnXG4gICAgbGV0IGpzb24gPSBKU09OLnN0cmluZ2lmeShjb21wRGF0YSwgbnVsbCwgMik7XG5cbiAgICBjb25zdCBzYXZlUGF0aDogeyBjYW5jZWxlZDogYm9vbGVhbjsgZmlsZVBhdGg6IHN0cmluZzsgfSA9IGF3YWl0IEVkaXRvci5EaWFsb2cuc2F2ZSh7XG4gICAgICAgIHRpdGxlOiAn6KuL6Ly45YWl5Yyv5Ye65qqU5ZCNJyxcbiAgICAgICAgZmlsdGVyczogW3sgbmFtZTogJ0pTT04nLCBleHRlbnNpb25zOiBbJ2pzb24nXSB9XSxcbiAgICAgICAgcGF0aDogbGFzdFBhdGggKyBgXFxcXCR7ZmlsZW5hbWV9Lmpzb25gLFxuICAgIH0pXG5cbiAgICBpZiAoIXNhdmVQYXRoLmNhbmNlbGVkKSB7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoc2F2ZVBhdGguZmlsZVBhdGgsIGpzb24sICd1dGYtOCcpO1xuXG4gICAgICAgIGxhc3RQYXRoID0gc2F2ZVBhdGguZmlsZVBhdGg7XG5cbiAgICAgICAgYXdhaXQgRWRpdG9yLk1lc3NhZ2UucmVxdWVzdCgnc2NlbmUnLCAnc2F2ZS1zY2VuZScpO1xuXG4gICAgICAgIHNob3dMb2coYFtFeHBvcnRKc29uXSDlt7LovLjlh7rliLAgJHtzYXZlUGF0aC5maWxlUGF0aH1gKTtcblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2hvd0xvZyhgW0V4cG9ydEpzb25dIOWMr+WHuuWPlua2iGApO1xuICAgIH1cbn1cblxuLyoqXG4gKiDliKrpmaTkuI3pnIDopoHnmoTlsazmgKdcbiAqIEBwYXJhbSBvcmlnaW5EYXRhIGNvbXBvbmVudOaJgOacieWxrOaAp+izh+aWmVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ29tcERhdGEob3JpZ2luRGF0YTogYW55KTogYW55IHtcbiAgICBsZXQgaGFuZGxlQ29tcERhdGE6IGFueSA9IG9yaWdpbkRhdGEudmFsdWU7XG5cbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGhhbmRsZUNvbXBEYXRhKSB7XG4gICAgICAgIGNvdW50Kys7XG5cbiAgICAgICAgaWYgKGNvdW50IDw9IEJhc2VQcm9wZXJ0eUNvdW50ICsgMykgeyAvLyDnlaXpgY7ln7rmnKzlsazmgKfvvIzpgoTmnIlpbXBvcnRKc29u6LefZXhwb3J0SnNvblxuICAgICAgICAgICAgZGVsZXRlIGhhbmRsZUNvbXBEYXRhW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoYW5kbGVDb21wRGF0YTtcbn1cblxuLyoqXG4gKiDnlKLnlJ/ntYTku7bos4fmlplcbiAqIEBwYXJhbSBvcmlnaW5EYXRhIGNvbXBvbmVudOWxrOaAp+izh+aWmVxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb21wb25lbnREYXRhKG9yaWdpbkRhdGE6IGFueSk6IGFueSB7XG4gICAgbGV0IGNvbXBvbmVudERhdGE6IGFueSA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb3JpZ2luRGF0YSkge1xuICAgICAgICBpZiAodHlwZW9mIG9yaWdpbkRhdGFba2V5XS52YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KG9yaWdpbkRhdGFba2V5XS52YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBpc1JlYWxDdXJ2ZSA9IG9yaWdpbkRhdGFba2V5XS50eXBlID09PSAnY2MuUmVhbEN1cnZlJztcblxuICAgICAgICAgICAgaWYgKGlzUmVhbEN1cnZlICYmICFpc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlYWxDdXJ2ZURhdGE6IGFueSA9IHt9O1xuICAgICAgICAgICAgICAgIGlmICghb3JpZ2luRGF0YVtrZXldLnZhbHVlLmtleUZyYW1lcykge1xuICAgICAgICAgICAgICAgICAgICByZWFsQ3VydmVEYXRhLnZhbHVlID0gZGVmYXVsdFJlYWxDdXJ2ZVBvaW50cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWxDdXJ2ZURhdGEudmFsdWUgPSBvcmlnaW5EYXRhW2tleV0udmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVhbEN1cnZlRGF0YS5pc1JlYWxDdXJ2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50RGF0YVtrZXldID0gcmVhbEN1cnZlRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudERhdGFba2V5XSA9IGNyZWF0ZUNvbXBvbmVudERhdGEob3JpZ2luRGF0YVtrZXldLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbXBvbmVudERhdGFba2V5XSA9IG9yaWdpbkRhdGFba2V5XS52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnREYXRhO1xufSJdfQ==
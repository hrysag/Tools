// @ts-ignore
import packageJSON from '../package.json';
/**
 * @en 
 * @zh 为扩展的主进程的注册方法
 */
let getBundleArray: any[] = [];
let getScriptUuidArray: any[] = [];
let getSpriteFrameArray: any[] = [];
let getAudioClipArray: any[] = [];
let allUrl: any[] = [];
let saveUUIDArray:any = {}
let currentUUIDCount = 0;
let allUUIDCount = 0;
let showEnd = false;
let haveBundle = false;
let bundleTypeCount: any[] = [];
let bundleData: any[] = [];
let checkSelectedAssetsInterval: NodeJS.Timer | null = null;

export const load = function() {
    checkSelectedAssetsInterval = setInterval(async ()=> {
        const ab = await Editor.Selection.getSelected('asset');
        const abInNames = await ab.reduce(async (p, c) => {
            const info = await Editor.Message.request('asset-db', 'query-asset-info', c);
            const previous = await p;
            return previous ? previous + ',' + info!.name : info!.name;
        }, Promise.resolve(''));
        Editor.Message.broadcast('send-to-panel-selected-assets', abInNames);
    }, 1000);
};

export const unload = function() {
    if (checkSelectedAssetsInterval != null) {
        clearInterval(checkSelectedAssetsInterval);
    }
}

export const methods: { [key: string]: (...any: any) => any } = {
    openPanel() {
        Editor.Panel.open(packageJSON.name);
    },
    sendRun(){
        sendResult();
    },
    sendTypesResult(any: number[]){
        // console.log(`收到check bundle廣播:${any}`);
        bundleTypeCount = any;
    },
    sendDataResult(any: string[]){
        console.log(`bundleArray:${any}`);
        bundleData = any;
        setBundleData();
        
    }
};

export function sendResult() {
    console.log(`執行sendResult`);
    getBundleArray = [];
    getScriptUuidArray = [];
    getSpriteFrameArray = [];
    getAudioClipArray = [];
    allUrl = [];
    currentUUIDCount = 0;
    allUUIDCount = 0;
    showEnd = false;
    haveBundle = false;
    selectAssetGetUseBundle();
    
}

// 選asset上的資料夾，印出名稱跟是否為bundle
async function selectAssetGetUseBundle() {
    const ab = await Editor.Selection.getSelected('asset');

    for(let i = 0; i < ab.length; i++){
        getSelectUUids(ab[i]);
    }
    setTimeout(() => {
        if(!haveBundle){
          callBackResult('無');
        }
     }, 1000);
}

async function getSelectUUids(ab: string) {
    const getFile = await Editor.Message.request('asset-db', 'query-asset-info', ab);
    // console.log(`getFile:${JSON.stringify(getFile)}`);
    if(getFile !== null){
        if(getFile.isDirectory){
            analyzeFolder(getFile.url, getFile.file);
            return;
        }
        // console.log(JSON.stringify(getFile));
        const isPrefab = getFile.type === 'cc.Prefab';
        const isScene = getFile.type === 'cc.SceneAsset';
        if(isPrefab || isScene){
            analyzeJson(getFile.url);
        }
    }
}

async function analyzeFolder(url: string, path: string){
    // console.log(`analyzeFolder`);
    const Fs = require('fs');
    var fileNames = Fs.readdirSync(path);
    let subFiles: string[] = [];
    fileNames.forEach((element: string | string[]) => {

        if(!element.includes('.meta')){
            subFiles.push(`${url}/${element}`);
        }
    });

    subFiles.forEach(subPath => {
        getSelectUUids(subPath);
    });
}

async function analyzeJson(uuid: string) {
    const assetInfo = await Editor.Message.request('asset-db', 'query-asset-info', uuid);
    const jsonUrl = assetInfo?.library['.json'];
    // console.log(`assetInfo:${JSON.stringify(assetInfo)}`);
    // console.log(`json:${JSON.stringify(assetInfo.library)}`);
    // console.log(assetInfo.library['.json']);
    const Fs = require('fs');
    var data = Fs.readFileSync(jsonUrl, 'utf8');
    data = JSON.parse(data);
    
    // console.log(`analyzeJson:${JSON.stringify(data)}`);
    // 偵測script、sprite、audioClip
    for (const iterator of data) {
        const type = iterator['__type__'];
        const sprite = iterator['_spriteFrame'];
        const effectClip = iterator['effectClips'];
        const musicClip = iterator['musicClips'];
        // 偵測script
        if(!type.includes('cc.') && !type.includes('sp.')){
            if(!getScriptUuidArray.includes(type)){
                const tmpId = await Editor.Utils.UUID.decompressUUID(type);
                if(tmpId !== null){
                    getScriptUuidArray.push(tmpId);
                }
            }
        }
        // 偵測spriteFrame
        if(sprite){
            const spriteUuid = sprite['__uuid__'];
            getSpriteFrameArray.push(spriteUuid);
        }
        // 偵測音效
        if(effectClip){
            for (const clip of effectClip) {
                const clipUuid = clip['__uuid__'];
                getAudioClipArray.push(clipUuid);
            }
        }
        // 偵測音樂
        if(musicClip){
            for (const clip of musicClip) {
                const clipUuid = clip['__uuid__'];
                getAudioClipArray.push(clipUuid);
            }
        }
        
    }

    allUUIDCount = allUUIDCount + getScriptUuidArray.length + getSpriteFrameArray.length + getAudioClipArray.length;
    haveBundle = allUUIDCount > 0;
    for(let i = 0; i < getScriptUuidArray.length; i++){
        currentUUIDCount++;
        getAssetPath(getScriptUuidArray[i]);
    }

    for(let i = 0; i < getSpriteFrameArray.length; i++){
        currentUUIDCount++;
        getAssetPath(getSpriteFrameArray[i]);
    }

    for(let i = 0; i < getAudioClipArray.length; i++){
        currentUUIDCount++;
        getAssetPath(getAudioClipArray[i]);
    }

}

// 搜尋uuid得到asset上物件的url
async function getAssetPath(uuid: string) {
    // 指定資料夾得到資料夾的data（name、url）
    const data = await Editor.Message.request('asset-db', 'query-asset-info', uuid);
    // console.log(`fileName:${data.name} url:${data.url}`);
    if(data !== null){
        // console.log(`data uuid:${data.uuid}`);
        allUrl.push(data.url);
        saveUUIDArray[data.url] = data.uuid;
        returnDirname(data.url);
    }
    
}

// 依url向上搜尋使用的bundle
async function returnDirname(url: string) {
    const getMeta = await Editor.Message.request('asset-db', 'query-asset-meta', url);
    // console.log(`getMeta:${url} ${getMeta.uuid} ${getMeta.userData.isBundle}`);
    if(url.includes('core')){
        return;
    }
    
    if(getMeta !== null){
        if(getMeta.userData.isBundle){
            // console.log(`getMeta:${url} ${getMeta.uuid} ${getMeta.userData.isBundle}`);
            // console.log(`getMeta.name:${url}`);
            getUsingBundle(url);
        }else if (url.includes('internal')) {
            getUsingBundle(url, 'internal');            
        }else{
            const dirname = Editor.Utils.Path.dirname(url);
            returnDirname(dirname);
        }
    }
}

// 印出使用的bundleName
async function getUsingBundle(url: string, bundleName?:string) {
    const Path = require('path');
    var extension = Path.extname(url);
    var fileName = typeof(bundleName) == 'undefined' ? Path.basename(url, extension): bundleName;
    if(!getBundleArray.includes(fileName)){
        getBundleArray.push(fileName);
        if(currentUUIDCount === allUUIDCount && !showEnd){
            setTimeout(() => {
                showDependBundleDetail();
              }, 1000);
            showEnd = true;
        }
        // console.log(`getBundleName:${getBundleName.name}`);
    }
    
    // const getBundleName = await Editor.Message.request('asset-db', 'query-asset-info', uuid);
    // if(!getBundleArray.includes(getBundleName.name)){
    //     getBundleArray.push(getBundleName.name);
    //     // console.log(`getBundleName:${getBundleName.name}`);
    // }
}

// 印出bundle數量及uuid
async function showDependBundleDetail() {

    let bundleData:any = {};
    getBundleArray.sort();
    for(let i = 0; i < allUrl.length; i++){
        for(let j = 0; j < getBundleArray.length; j++){
            if(allUrl[i].includes(getBundleArray[j])){
                const uuid = saveUUIDArray[allUrl[i]];
                bundleData[uuid] = getBundleArray[j];
                // console.log(`url:${allUrl[i]} bundle:${getBundleArray[j]}`);
                // console.log(`uuid:${saveUUIDArray[allUrl[i]]}`);
            }
            if(allUrl[i].valueOf){

            }
        }
    }

    let bundleDataToArray = [];
    for (const key in bundleData) {
        bundleDataToArray.push([key, bundleData[key]]);
    }
    //依bundle排序
    bundleDataToArray.sort(function(a,b){
        var x = a[1].toLowerCase();
        var y = b[1].toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    });

    let typeCount = bundleDataToArray.length;
    let bundleTypes = [];
    //取的各bundle到數量
    for(let i = bundleDataToArray.length - 1; i >= 0; i--){
       
       if(i - 1 >= 0 && bundleDataToArray[i-1][1] !== bundleDataToArray[i][1] || i === 0){
            bundleTypes.push(typeCount - i);
            typeCount = i;
       }
    }
    bundleTypes.reverse();
    let changeCount = 0;
    //印出bundle數量跟uuid
    for(let i = 0; i < bundleDataToArray.length; i++){
        let changeTitle = i === 0 || i - 1 >= 0 && bundleDataToArray[i-1][1] !== bundleDataToArray[i][1];
        if(changeTitle){
            // console.log(`[${bundleDataToArray[i][1]} = ${bundleTypes[changeCount]}]`);
            changeCount++;
        }
        // console.log(`${bundleDataToArray[i][0]}`);
    }
    
    Editor.Message.broadcast("send-result:bundleType", bundleTypes);
    Editor.Message.broadcast("send-result:bundleData", bundleDataToArray);
    console.log(`[結束偵測]`);
}

export function callBackResult(cb:any) {
    Editor.Message.broadcast("send-to-panel", cb);
}



export function setBundleData(){
    let value = '';
    let title = '';
    let content = '';
    let valueArray = [];
    let titleArray = [];
    let changeCount = 0;
    for(let i = 0; i < bundleData.length; i++){
        let changeTitle = i === 0 || i - 1 >= 0 && bundleData[i-1][1] !== bundleData[i][1];
        if(changeTitle){
        
            // console.log(`print [${bundleData[i][1]} = ${bundleTypeCount[changeCount]}]`);
            title = `[${bundleData[i][1]} = ${bundleTypeCount[changeCount]}]`;
            titleArray.push(title);
            // content = content + '<details><summary>'+title+'</summary><ul>'+value+'</ul></details>';
            changeCount++;
        }

        
        if (i === 0 || i - 1 >= 0 && bundleData[i - 1][1] === bundleData[i][1]) {
            value = value + `<p>${bundleData[i][0]}</p>`;
        }
        else {
            valueArray.push(value);
            value =`<p>${bundleData[i][0]}</p>`;
        }
        if(i === bundleData.length - 1){
            valueArray.push(value);
        }
    }
    for(let i = 0; i < changeCount; i++){
        content = content + '<div><details><summary>'+titleArray[i]+'</summary><ul>'+valueArray[i]+'</ul></details></div>'
        // content = content + '<ui-selection header='+titleArray[i]+'><div>'+valueArray[i]+'</ui-selection>';
    }

    
    callBackResult(content);
    
}


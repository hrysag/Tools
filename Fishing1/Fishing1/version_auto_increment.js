const fs = require('fs');

const fName = 'package.json';
const applicationEJS = 'build-templates/web-mobile/application.ejs';
const VERSION_REPLACER = /window.game_version\ \=\ \'\d+\.\d+\.\d+\';/g;

async function start() {
    try {
        const version = await loadPackage();
        await loadApplication(version);
    } catch {
        process.exit(1);
    }
    process.exit(0);
}

start();

async function loadPackage() {
    return new Promise((resolve, reject) => {
        fs.readFile(fName, 'utf8', (err, data) => {
            if (err) {
                console.error('讀取檔案時發生錯誤:', err);
                return;
            }
        
            try {
                // 將讀取到的 JSON 字串轉換為 JavaScript 物件
                const jsonObj = JSON.parse(data);
        
                let gameVersion = jsonObj.game_version.split('.');
                let thirdNum = gameVersion[2];
                thirdNum = parseInt(thirdNum, 10) + 1;
                gameVersion[2] = thirdNum;
                jsonObj.game_version = gameVersion.join('.');
        
                // 將修改後的 JavaScript 物件轉換回 JSON 字串
                const updatedJsonStr = JSON.stringify(jsonObj, null, 2); // 使用 2 個空格進行縮排
        
                // 將更新後的 JSON 字串寫回檔案
                fs.writeFile(fName, updatedJsonStr, 'utf8', (err) => {
                    if (err) {
                        console.error('寫入檔案時發生錯誤:', err);
                        reject();
                    } else {
                        console.log('package.json已成功更新!');
                        resolve(jsonObj.game_version);
                    }
                });
            } catch (parseError) {
                console.error('解析 JSON 時發生錯誤:', parseError);
                reject();
            }
        });
    })
}

async function loadApplication(version) {
    return new Promise((resolve, reject) => {
        fs.readFile(applicationEJS, 'utf8',  (err, data) => {
            if (err) {
                console.error('讀取檔案時發生錯誤:', err);
                reject();
                return;
            }

            const newly = data.replace(VERSION_REPLACER, `window.game_version = \'${version}\';`);
            try {
                fs.writeFileSync(applicationEJS, newly, 'utf-8');
            } catch {
                reject('寫檔到build-template/web-mobile/application.ejs 失敗');
            }
            console.log('application.ejs成功更新,版本:' + version)
            resolve();
        });
    })
    
}
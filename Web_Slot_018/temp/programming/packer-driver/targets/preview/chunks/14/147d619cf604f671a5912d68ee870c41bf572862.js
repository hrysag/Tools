System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "cc/env", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, EventHandler, js, director, assetManager, Camera, Canvas, view, RenderTexture, resources, instantiate, Prefab, Label, error, gfx, Color, Vec3, UITransform, tween, BinaryBuffer, Debug, EDITOR, PREVIEW, GameSetting, Utility, _crd;

  function _reportPossibleCrUseOfBinaryBuffer(extras) {
    _reporterNs.report("BinaryBuffer", "../Communication/BinaryBuffer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "./Debug", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSetting(extras) {
    _reporterNs.report("GameSetting", "../GameScripts/GameSetting", _context.meta, extras);
  }

  _export("Utility", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      EventHandler = _cc.EventHandler;
      js = _cc.js;
      director = _cc.director;
      assetManager = _cc.assetManager;
      Camera = _cc.Camera;
      Canvas = _cc.Canvas;
      view = _cc.view;
      RenderTexture = _cc.RenderTexture;
      resources = _cc.resources;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Label = _cc.Label;
      error = _cc.error;
      gfx = _cc.gfx;
      Color = _cc.Color;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      BinaryBuffer = _unresolved_2.BinaryBuffer;
    }, function (_unresolved_3) {
      Debug = _unresolved_3.Debug;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
      PREVIEW = _ccEnv.PREVIEW;
    }, function (_unresolved_4) {
      GameSetting = _unresolved_4.GameSetting;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e8c2bvbdqJI56WRySm4f8gN", "UtilityOld", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EventHandler', 'EventTouch', 'Node', 'js', 'director', 'assetManager', 'Camera', 'Canvas', 'view', 'RenderTexture', 'resources', 'instantiate', 'Prefab', 'Label', 'error', 'gfx', 'Color', 'EventMouse', 'Vec3', 'UITransform', 'tween']);

      _export("Utility", Utility = class Utility {
        // 以下封包處理相關========================================
        static numberArrayToBase64(numberArray) {
          if (numberArray.some(v => v > 255)) {
            error("numberArrayToBase64 error: numberArray has value > 255");
            return null;
          }

          var byteArray = new Uint8Array(numberArray);
          return this.uint8ArrayToBase64(byteArray);
        }

        static byteArrayToArrayBuffer(byteArray) {
          if (byteArray.some(v => v > 255)) {
            error("byteArrayToArrayBuffer error: byteArray has value > 255");
            return null;
          }

          var uint8Array = new Uint8Array(byteArray.length);

          for (var i = 0; i < uint8Array.length; i++) {
            uint8Array[i] = byteArray[i];
          }

          return uint8Array.buffer;
        }

        static base64ToArrayBuffer(base64) {
          var binaryString = window.atob(base64);
          var bytes = new Uint8Array(binaryString.length);

          for (var i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }

          return bytes.buffer;
        }

        static uint8ArrayToBase64(bytes) {
          var binary = '';
          var len = bytes.byteLength;

          for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
          }

          return window.btoa(binary);
        } // 將Uint8Array 轉成 BinaryBuffer


        static uint8ArrayToBinaryBuffer(bytes) {
          return new (_crd && BinaryBuffer === void 0 ? (_reportPossibleCrUseOfBinaryBuffer({
            error: Error()
          }), BinaryBuffer) : BinaryBuffer)(bytes.buffer);
        } // 將base64字串 轉成 BinaryBuffer


        static base64ToBinaryBuffer(base64) {
          var binaryBuffer = new (_crd && BinaryBuffer === void 0 ? (_reportPossibleCrUseOfBinaryBuffer({
            error: Error()
          }), BinaryBuffer) : BinaryBuffer)(this.base64ToArrayBuffer(base64));
          return binaryBuffer;
        }

        static binaryBufferToDecimalArray(binaryBuffer) {
          var success = true;
          var decimalArray = [];

          while (success) {
            var result = binaryBuffer.getByte();
            success = result[0];

            if (success) {
              decimalArray.push(result[1]);
            }
          }

          return decimalArray;
        } // 將byte array 轉成 BinaryBuffer


        static byteArrayToBinaryBuffer(byteArray) {
          var binaryBuffer = new (_crd && BinaryBuffer === void 0 ? (_reportPossibleCrUseOfBinaryBuffer({
            error: Error()
          }), BinaryBuffer) : BinaryBuffer)(this.byteArrayToArrayBuffer(byteArray));
          return binaryBuffer;
        } // 將base64字串轉乘number[]( byte array) 測試用


        static base64ToByteArray(base64) {
          var binaryString = atob(base64);
          var bytes = [];

          for (var i = 0; i < binaryString.length; i++) {
            bytes.push(binaryString.charCodeAt(i));
          }

          return bytes;
        }

        static base64ToByteArray16(base64) {
          var binaryString = atob(base64);
          var bytes = [];

          for (var i = 0; i < binaryString.length; i++) {
            bytes.push(binaryString.charCodeAt(i));
          }

          var result = bytes.map(v => v.toString(16).toUpperCase()).map(v => v.length === 1 ? '0' + v : v);
          return result;
        } // 以上封包處理相關========================================


        static addEventHandlerToButton(buttonNode, component, callback, customEventData) {
          if (customEventData === void 0) {
            customEventData = '';
          }

          var clickEventHandler = new EventHandler();
          clickEventHandler.target = component.node; // 這個 node 節點是你的事件處理代碼組件所属的節點

          clickEventHandler.component = js.getClassName(component); // 這個是腳本類名

          clickEventHandler.handler = callback; // 參數是 event: EventTouch, customEventData: string

          clickEventHandler.customEventData = customEventData;
          var button = buttonNode.getComponent(Button);

          if (!button) {
            (_crd && Debug === void 0 ? (_reportPossibleCrUseOfDebug({
              error: Error()
            }), Debug) : Debug).LogError(buttonNode.name + "  \u4E0D\u5B58\u5728 Button  Component!!");
          }

          var buttonClickEvents = button.clickEvents;
          var index = buttonClickEvents.indexOf(clickEventHandler);

          if (index > -1) {
            buttonClickEvents.splice(index, 1);
          }

          buttonClickEvents.push(clickEventHandler);
        }

        static waitPromise(seconds, signal) {
          if (signal === void 0) {
            signal = undefined;
          }

          return new Promise((resolve, reject) => {
            var _tween = tween({}).delay(seconds).call(() => {
              resolve(null);
            }).start();

            if (signal) {
              signal.addEventListener('abort', () => {
                _tween.stop();

                resolve(null);
              });
            }
          });
        }

        static getRandomInt(max) {
          return Math.floor(Math.random() * max);
        }

        static preloadScenePromise(sceneName, onProgress) {
          return new Promise((resolve, reject) => {
            director.preloadScene(sceneName, onProgress, () => {
              var bundle = assetManager.bundles.find(bundle => !!bundle.getSceneInfo(sceneName));

              if (bundle) {
                bundle.loadScene(sceneName, (err, scene) => {
                  if (!err) {
                    resolve(scene);
                  } else {
                    reject(err);
                  }
                });
              } else {
                reject("Bundle not found");
              }
            });
          });
        }

        static getCurrentTime() {
          var nowDate = new Date();
          var hours = nowDate.getHours();
          var min = nowDate.getMinutes();
          var seconds = nowDate.getSeconds();
          var minStr = min < 10 ? "0" + min : "" + min;
          var year = nowDate.getFullYear();
          var month = nowDate.getMonth() + 1;
          var date = nowDate.getDate();
          var str = year + "/" + month + "/" + date + "  " + hours + ":" + minStr + ":" + seconds;
          return str;
        }

        static getURLParams(url) {
          // 創建 URLSearchParams 物件並傳入網址的 search 部分
          var params = new URLSearchParams(new URL(url).search); // 宣告一個空的 JSON 物件

          var paramsMap = new Map(); // 使用 forEach 方法遍歷 URLSearchParams 物件並將參數加入 JSON 物件中

          params.forEach((value, key) => {
            paramsMap.set(key, value);
          });
          return paramsMap;
        }

        static getURLLanguage() {
          var _params$get;

          var params = this.getURLParams(window.location.href);
          return (_params$get = params.get('lang')) != null ? _params$get : "tw"; // 要在Editor檢查不同語系時，直接替換tw, cn, en, vn
        }

        static getHost() {
          var url = "testgame.apex-win.com";

          if (EDITOR || PREVIEW) {
            return url;
          }

          if (window.location.host.includes("localhost")) {
            return url;
          }

          return window.location.host;
        }

        static screenShot() {
          return new Promise((resolve, reject) => {
            var cam = director.getScene().getComponentInChildren(Canvas).cameraComponent;
            var newCamNode = instantiate(cam.node);
            var newCam = newCamNode.getComponent(Camera);
            newCamNode.parent = cam.node.parent;
            var renderTex = new RenderTexture();
            newCam.clearFlags = gfx.ClearFlagBit.ALL;
            newCam.clearColor = new Color(0, 0, 0, 0);
            renderTex.initialize({
              width: Math.floor(view.getVisibleSize().width),
              height: Math.floor(view.getVisibleSize().height)
            });
            newCam.targetTexture = renderTex;
            newCam.scheduleOnce(() => {
              var data = renderTex.readPixels();
              var canvas = document.createElement('canvas');
              var ctx = canvas.getContext('2d');
              canvas.width = renderTex.width;
              canvas.height = renderTex.height;
              var width = renderTex.width;
              var height = renderTex.height;
              var rowBytes = width * 4;

              for (var row = 0; row < height; row++) {
                var srow = height - 1 - row;
                var imageData = ctx.createImageData(width, 1);
                var start = srow * width * 4;

                for (var i = 0; i < rowBytes; i++) {
                  imageData.data[i] = data[start + i];
                }

                ctx.putImageData(imageData, 0, row);
              }

              var dataURL = canvas.toDataURL("image/png");
              newCamNode.destroy();
              resolve(dataURL);
            });
          });
        }

        static isDev() {
          return EDITOR || PREVIEW;
        }

        static getCurrentTimeStampInSeconds() {
          var timestampInSeconds = Math.floor(Date.now() / 1000);
          return timestampInSeconds;
        }

        static getBrowserAndDeviceInfo() {
          var userAgent = navigator.userAgent; // 检查是否是 iPhone

          var isIphone = /iPhone/.test(userAgent); // 检查是否是 Android 设备

          var isAndroid = /Android/.test(userAgent); // 检查是否是 Safari

          var isSafari = /^((?!chrome|android).)*safari/i.test(userAgent); // 检查是否是 Chrome

          var isChrome = /Chrome/.test(userAgent) && !/Edge/.test(userAgent); // 检查是否是 iPad（如果需要区分）

          var isIpad = /iPad/.test(userAgent); // 检查是否是 iOS 设备（包含 iPhone 和 iPad）

          var isIos = /iPhone|iPad|iPod/.test(userAgent);
          return {
            isIphone: isIphone,
            isAndroid: isAndroid,
            isSafari: isSafari,
            isChrome: isChrome,
            isIpad: isIpad,
            isIos: isIos
          };
        }

        static setIntervalWithLimit(callback, interval, maxCount) {
          var count = 0;
          var intervalId = setInterval(function () {
            count++;
            callback(count); // 執行回呼函數並傳入當前次數

            if (count >= maxCount) {
              clearInterval(intervalId); // 停止 setInterval
            }
          }, interval); // 設定間隔時間

          return intervalId;
        }

        static getTimezoneFormat() {
          var date = new Date();
          var timezoneOffset = date.getTimezoneOffset(); // 計算小時和分鐘的時區差異

          var hoursOffset = Math.floor(Math.abs(timezoneOffset) / 60);
          var minutesOffset = Math.abs(timezoneOffset) % 60;
          var sign = timezoneOffset > 0 ? '-' : '+'; // 格式化成 "+HH:MM" 或 "-HH:MM"
          // const formattedOffset = `UTC${sign}${String(hoursOffset).padStart(2, '0')}:${String(minutesOffset).padStart(2, '0')}`;

          var formattedOffset = "UTC" + sign + String(hoursOffset);
          return formattedOffset;
        }

        static loadResourcePrefab(url) {
          return new Promise((resolve, reject) => {
            resources.load(url, Prefab, (err, prefab) => {
              if (err) {
                reject(err);
              } else {
                var node = instantiate(prefab);
                resolve(node);
              }
            });
          });
        }

        static replaceRichTextImgKey(str) {
          // return str.replace(/<<([^>]+)>>/g, "<img src='$1' height=60 align=center />");
          return str.replace(/(\S?)<<([^>]+)>>(\S?)/g, (match, before, content, after) => {
            // 確保前後有空格
            var prefix = before && before !== ' ' ? before + " " : before;
            var suffix = after && after !== ' ' ? " " + after : after;
            return prefix + "<img src='" + content + "' height=60 align=center />" + suffix;
          });
        }

        static getCurrentCanvas() {
          return director.getScene().getComponentInChildren(Canvas);
        }

        static getPayTableURL(gameID, lang) {
          var timestamp = new Date().getTime();
          var payTableURL = (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).payTableURL;
          payTableURL = payTableURL.replace("[gameID]", gameID.toLowerCase());
          payTableURL = payTableURL.replace("[lang]", lang);
          payTableURL += "&timestamp=" + timestamp;
          return payTableURL;
        }

        static getRuleURL(gameID, lang) {
          var timestamp = new Date().getTime();
          var ruleURL = (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).ruleURL;
          ruleURL = ruleURL.replace("[gameID]", gameID.toLowerCase());
          ruleURL = ruleURL.replace("[lang]", lang);
          ruleURL += "&timestamp=" + timestamp;
          return ruleURL;
        }

        static getHistoryURL(lang, recordJsonString) {
          // let historyURL = "https://dev-gamerecord.apex-win.com/#/game-list?lang=[lang]&history=[json]";
          // if (this.isTestEnvironment() === false) {
          //     historyURL = `https://gamerecord.apex-win.com/#/game-list?lang=[lang]&history=[json]`;
          // }
          var historyURL = (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
            error: Error()
          }), GameSetting) : GameSetting).historyURL;
          var timestamp = new Date().getTime();
          historyURL = historyURL.replace("[lang]", lang);
          historyURL = historyURL.replace("[json]", recordJsonString);
          historyURL += "&timestamp=" + timestamp;
          return historyURL;
        }

        static isTestEnvironment() {
          return window.location.host.includes('test');
        }

        static checkLabelBold(langKey) {
          var allLabels = director.getScene().getComponentsInChildren(Label);
          var isSafari = Utility.getBrowserAndDeviceInfo().isSafari; // let isChinese = langKey === "tw" || "cn";

          if (isSafari) {
            for (var label of allLabels) {
              label.isBold = false;
            }
          }
        } // 測試EventMouse所在的區域是否在Node範圍內


        static isEventMouseInNode(camera, event, node) {
          var screenSpacePos = camera.screenToWorld(event.getLocation().toVec3(), new Vec3());
          var localSpacePos = node.inverseTransformPoint(new Vec3(), screenSpacePos);
          var contentSize = node.getComponent(UITransform).contentSize;
          var halfWidth = contentSize.width / 2;
          var halfHeight = contentSize.height / 2;

          if (localSpacePos.x > -halfWidth && localSpacePos.x < halfWidth && localSpacePos.y > -halfHeight && localSpacePos.y < halfHeight) {
            return true;
          }

          return false;
        }

        static getEventLocalPos(camera, event, node) {
          var screenSpacePos = camera.screenToWorld(event.getLocation().toVec3(), new Vec3());
          var localSpacePos = node.inverseTransformPoint(new Vec3(), screenSpacePos);
          return localSpacePos;
        }

        static getEventScreenPos(camera, event) {
          var screenSpacePos = camera.screenToWorld(event.getLocation().toVec3(), new Vec3());
          return screenSpacePos;
        } // ---計時器功能------


        static startPerformanceTimer() {
          this.startTimer = Date.now();
        }

        static endPerformanceTimer() {
          var endTimer = Date.now();
          var duration = endTimer - this.startTimer;
          return duration;
        } // ------------------


      });

      Utility.startTimer = 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=147d619cf604f671a5912d68ee870c41bf572862.js.map
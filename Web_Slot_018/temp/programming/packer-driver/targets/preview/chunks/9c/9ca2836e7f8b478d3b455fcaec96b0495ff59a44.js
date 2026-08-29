System.register(["__unresolved_0", "cc", "__unresolved_1", "cc/env", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, Button, Camera, Canvas, Color, director, EventHandler, gfx, instantiate, js, Label, Prefab, RenderTexture, resources, tween, UITransform, Vec3, view, Debug, EDITOR, PREVIEW, GameSetting, _crd, _startTimer;

  // 測試EventMouse所在的區域是否在Node範圍內
  function addEventHandlerToButton(buttonNode, component, callback, customEventData) {
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

  function waitPromise(seconds, signal) {
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

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function preloadScenePromise(sceneName, onProgress) {
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

  function getCurrentTime() {
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

  function getURLParams(url) {
    // 創建 URLSearchParams 物件並傳入網址的 search 部分
    var params = new URLSearchParams(new URL(url).search); // 宣告一個空的 JSON 物件

    var paramsMap = new Map(); // 使用 forEach 方法遍歷 URLSearchParams 物件並將參數加入 JSON 物件中

    params.forEach((value, key) => {
      paramsMap.set(key, value);
    });
    return paramsMap;
  }

  function getURLLanguage() {
    var _params$get;

    var params = getURLParams(window.location.href);
    return (_params$get = params.get('lang')) != null ? _params$get : "tw"; // 要在Editor檢查不同語系時，直接替換tw, cn, en, vn
  }

  function getHost() {
    var url = "testgame.apex-win.com";

    if (EDITOR || PREVIEW) {
      return url;
    }

    if (window.location.host.includes("localhost")) {
      return url;
    }

    return window.location.host;
  }

  function screenShot() {
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

  function isDev() {
    return EDITOR || PREVIEW;
  }

  function getCurrentTimeStampInSeconds() {
    var timestampInSeconds = Math.floor(Date.now() / 1000);
    return timestampInSeconds;
  }

  function getBrowserAndDeviceInfo() {
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

  function setIntervalWithLimit(callback, interval, maxCount) {
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

  function getTimezoneFormat() {
    var date = new Date();
    var timezoneOffset = date.getTimezoneOffset(); // 計算小時和分鐘的時區差異

    var hoursOffset = Math.floor(Math.abs(timezoneOffset) / 60);
    var minutesOffset = Math.abs(timezoneOffset) % 60;
    var sign = timezoneOffset > 0 ? '-' : '+'; // 格式化成 "+HH:MM" 或 "-HH:MM"
    // const formattedOffset = `UTC${sign}${String(hoursOffset).padStart(2, '0')}:${String(minutesOffset).padStart(2, '0')}`;

    var formattedOffset = "UTC" + sign + String(hoursOffset);
    return formattedOffset;
  }

  function loadResourcePrefab(url) {
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

  function replaceRichTextImgKey(str) {
    // return str.replace(/<<([^>]+)>>/g, "<img src='$1' height=60 align=center />");
    return str.replace(/(\S?)<<([^>]+)>>(\S?)/g, (match, before, content, after) => {
      // 確保前後有空格
      var prefix = before && before !== ' ' ? before + " " : before;
      var suffix = after && after !== ' ' ? " " + after : after;
      return prefix + "<img src='" + content + "' height=60 align=center />" + suffix;
    });
  }

  function getCurrentCanvas() {
    return director.getScene().getComponentInChildren(Canvas);
  }

  function getPayTableURL(gameID, lang) {
    var timestamp = new Date().getTime();
    var payTableURL = (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
      error: Error()
    }), GameSetting) : GameSetting).payTableURL;
    payTableURL = payTableURL.replace("[gameID]", gameID.toLowerCase());
    payTableURL = payTableURL.replace("[lang]", lang);
    payTableURL += "&timestamp=" + timestamp;
    return payTableURL;
  }

  function getRuleURL(gameID, lang) {
    var timestamp = new Date().getTime();
    var ruleURL = (_crd && GameSetting === void 0 ? (_reportPossibleCrUseOfGameSetting({
      error: Error()
    }), GameSetting) : GameSetting).ruleURL;
    ruleURL = ruleURL.replace("[gameID]", gameID.toLowerCase());
    ruleURL = ruleURL.replace("[lang]", lang);
    ruleURL += "&timestamp=" + timestamp;
    return ruleURL;
  }

  function getHistoryURL(lang, recordJsonString) {
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

  function isTestEnvironment() {
    return window.location.host.includes('test');
  }

  function checkLabelBold(langKey) {
    var allLabels = director.getScene().getComponentsInChildren(Label);
    var isSafari = getBrowserAndDeviceInfo().isSafari; // let isChinese = langKey === "tw" || "cn";

    if (isSafari) {
      for (var label of allLabels) {
        label.isBold = false;
      }
    }
  }

  function isEventMouseInNode(camera, event, node) {
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

  function getEventLocalPos(camera, event, node) {
    var screenSpacePos = camera.screenToWorld(event.getLocation().toVec3(), new Vec3());
    var localSpacePos = node.inverseTransformPoint(new Vec3(), screenSpacePos);
    return localSpacePos;
  }

  function getEventScreenPos(camera, event) {
    var screenSpacePos = camera.screenToWorld(event.getLocation().toVec3(), new Vec3());
    return screenSpacePos;
  } // ---計時器功能------


  function startPerformanceTimer() {
    _startTimer = Date.now();
  }

  function endPerformanceTimer() {
    var endTimer = Date.now();
    var duration = endTimer - _startTimer;
    return duration;
  } // ------------------


  function _reportPossibleCrUseOfDebug(extras) {
    _reporterNs.report("Debug", "../Debug", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSetting(extras) {
    _reporterNs.report("GameSetting", "../../GameScripts/GameSetting", _context.meta, extras);
  }

  _export({
    addEventHandlerToButton: addEventHandlerToButton,
    waitPromise: waitPromise,
    getRandomInt: getRandomInt,
    preloadScenePromise: preloadScenePromise,
    getCurrentTime: getCurrentTime,
    getURLParams: getURLParams,
    getURLLanguage: getURLLanguage,
    getHost: getHost,
    screenShot: screenShot,
    isDev: isDev,
    getCurrentTimeStampInSeconds: getCurrentTimeStampInSeconds,
    getBrowserAndDeviceInfo: getBrowserAndDeviceInfo,
    setIntervalWithLimit: setIntervalWithLimit,
    getTimezoneFormat: getTimezoneFormat,
    loadResourcePrefab: loadResourcePrefab,
    replaceRichTextImgKey: replaceRichTextImgKey,
    getCurrentCanvas: getCurrentCanvas,
    getPayTableURL: getPayTableURL,
    getRuleURL: getRuleURL,
    getHistoryURL: getHistoryURL,
    isTestEnvironment: isTestEnvironment,
    checkLabelBold: checkLabelBold,
    isEventMouseInNode: isEventMouseInNode,
    getEventLocalPos: getEventLocalPos,
    getEventScreenPos: getEventScreenPos,
    startPerformanceTimer: startPerformanceTimer,
    endPerformanceTimer: endPerformanceTimer
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
      Button = _cc.Button;
      Camera = _cc.Camera;
      Canvas = _cc.Canvas;
      Color = _cc.Color;
      director = _cc.director;
      EventHandler = _cc.EventHandler;
      gfx = _cc.gfx;
      instantiate = _cc.instantiate;
      js = _cc.js;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      RenderTexture = _cc.RenderTexture;
      resources = _cc.resources;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      view = _cc.view;
    }, function (_unresolved_2) {
      Debug = _unresolved_2.Debug;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
      PREVIEW = _ccEnv.PREVIEW;
    }, function (_unresolved_3) {
      GameSetting = _unresolved_3.GameSetting;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dabd7A3D3NPh5Arbyx65wWH", "CCExtension", undefined);

      __checkObsolete__(['assetManager', 'Button', 'Camera', 'Canvas', 'Color', 'Component', 'director', 'EventHandler', 'EventMouse', 'EventTouch', 'gfx', 'instantiate', 'js', 'Label', 'Node', 'Prefab', 'RenderTexture', 'resources', 'tween', 'UITransform', 'Vec3', 'view']);

      _startTimer = 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ca2836e7f8b478d3b455fcaec96b0495ff59a44.js.map
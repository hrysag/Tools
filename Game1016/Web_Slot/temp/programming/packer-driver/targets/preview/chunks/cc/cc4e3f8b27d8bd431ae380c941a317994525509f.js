System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, addEventHandlerToButton, addEventHandlerToToggle, checkLabelBold, endPerformanceTimer, getBrowserAndDeviceInfo, getCurrentCanvas, getCurrentTime, getCurrentTimeStampInSeconds, getEventLocalPos, getEventScreenPos, getGameCode, getHistoryURL, getHost, getPayTableURL, getRandomInt, getRuleURL, getTimezoneFormat, getURLLanguage, getURLParams, isDev, isEventMouseInNode, isTestEnvironment, loadResourcePrefab, preloadScenePromise, replaceRichTextImgKey, screenShot, setIntervalWithLimit, makeSkippablePromise, startPerformanceTimer, waitPromise, base64ToArrayBuffer, base64ToBinaryBuffer, base64ToByteArray, base64ToByteArray16, binaryBufferToDecimalArray, byteArrayToArrayBuffer, byteArrayToBinaryBuffer, numberArrayToBase64, uint8ArrayToBase64, uint8ArrayToBinaryBuffer, _utility, _crd, Utility;

  function _reportPossibleCrUseOfBinaryBuffer(extras) {
    _reporterNs.report("BinaryBuffer", "../../Communication/BinaryBuffer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddEventHandlerToButton(extras) {
    _reporterNs.report("addEventHandlerToButton", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddEventHandlerToToggle(extras) {
    _reporterNs.report("addEventHandlerToToggle", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcheckLabelBold(extras) {
    _reporterNs.report("checkLabelBold", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfendPerformanceTimer(extras) {
    _reporterNs.report("endPerformanceTimer", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetBrowserAndDeviceInfo(extras) {
    _reporterNs.report("getBrowserAndDeviceInfo", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetCurrentCanvas(extras) {
    _reporterNs.report("getCurrentCanvas", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetCurrentTime(extras) {
    _reporterNs.report("getCurrentTime", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetCurrentTimeStampInSeconds(extras) {
    _reporterNs.report("getCurrentTimeStampInSeconds", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetEventLocalPos(extras) {
    _reporterNs.report("getEventLocalPos", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetEventScreenPos(extras) {
    _reporterNs.report("getEventScreenPos", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetGameCode(extras) {
    _reporterNs.report("getGameCode", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetHistoryURL(extras) {
    _reporterNs.report("getHistoryURL", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetHost(extras) {
    _reporterNs.report("getHost", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPayTableURL(extras) {
    _reporterNs.report("getPayTableURL", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetRandomInt(extras) {
    _reporterNs.report("getRandomInt", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetRuleURL(extras) {
    _reporterNs.report("getRuleURL", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetTimezoneFormat(extras) {
    _reporterNs.report("getTimezoneFormat", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetURLLanguage(extras) {
    _reporterNs.report("getURLLanguage", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetURLParams(extras) {
    _reporterNs.report("getURLParams", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisDev(extras) {
    _reporterNs.report("isDev", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisEventMouseInNode(extras) {
    _reporterNs.report("isEventMouseInNode", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisTestEnvironment(extras) {
    _reporterNs.report("isTestEnvironment", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloadResourcePrefab(extras) {
    _reporterNs.report("loadResourcePrefab", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpreloadScenePromise(extras) {
    _reporterNs.report("preloadScenePromise", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfreplaceRichTextImgKey(extras) {
    _reporterNs.report("replaceRichTextImgKey", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfscreenShot(extras) {
    _reporterNs.report("screenShot", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetIntervalWithLimit(extras) {
    _reporterNs.report("setIntervalWithLimit", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmakeSkippablePromise(extras) {
    _reporterNs.report("makeSkippablePromise", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstartPerformanceTimer(extras) {
    _reporterNs.report("startPerformanceTimer", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfwaitPromise(extras) {
    _reporterNs.report("waitPromise", "./CCExtension", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbase64ToArrayBuffer(extras) {
    _reporterNs.report("base64ToArrayBuffer", "./PacketHandle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbase64ToBinaryBuffer(extras) {
    _reporterNs.report("base64ToBinaryBuffer", "./PacketHandle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbase64ToByteArray(extras) {
    _reporterNs.report("base64ToByteArray", "./PacketHandle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbase64ToByteArray2(extras) {
    _reporterNs.report("base64ToByteArray16", "./PacketHandle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbinaryBufferToDecimalArray(extras) {
    _reporterNs.report("binaryBufferToDecimalArray", "./PacketHandle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbyteArrayToArrayBuffer(extras) {
    _reporterNs.report("byteArrayToArrayBuffer", "./PacketHandle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbyteArrayToBinaryBuffer(extras) {
    _reporterNs.report("byteArrayToBinaryBuffer", "./PacketHandle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnumberArrayToBase(extras) {
    _reporterNs.report("numberArrayToBase64", "./PacketHandle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuint8ArrayToBase(extras) {
    _reporterNs.report("uint8ArrayToBase64", "./PacketHandle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuint8ArrayToBinaryBuffer(extras) {
    _reporterNs.report("uint8ArrayToBinaryBuffer", "./PacketHandle", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      addEventHandlerToButton = _unresolved_2.addEventHandlerToButton;
      addEventHandlerToToggle = _unresolved_2.addEventHandlerToToggle;
      checkLabelBold = _unresolved_2.checkLabelBold;
      endPerformanceTimer = _unresolved_2.endPerformanceTimer;
      getBrowserAndDeviceInfo = _unresolved_2.getBrowserAndDeviceInfo;
      getCurrentCanvas = _unresolved_2.getCurrentCanvas;
      getCurrentTime = _unresolved_2.getCurrentTime;
      getCurrentTimeStampInSeconds = _unresolved_2.getCurrentTimeStampInSeconds;
      getEventLocalPos = _unresolved_2.getEventLocalPos;
      getEventScreenPos = _unresolved_2.getEventScreenPos;
      getGameCode = _unresolved_2.getGameCode;
      getHistoryURL = _unresolved_2.getHistoryURL;
      getHost = _unresolved_2.getHost;
      getPayTableURL = _unresolved_2.getPayTableURL;
      getRandomInt = _unresolved_2.getRandomInt;
      getRuleURL = _unresolved_2.getRuleURL;
      getTimezoneFormat = _unresolved_2.getTimezoneFormat;
      getURLLanguage = _unresolved_2.getURLLanguage;
      getURLParams = _unresolved_2.getURLParams;
      isDev = _unresolved_2.isDev;
      isEventMouseInNode = _unresolved_2.isEventMouseInNode;
      isTestEnvironment = _unresolved_2.isTestEnvironment;
      loadResourcePrefab = _unresolved_2.loadResourcePrefab;
      preloadScenePromise = _unresolved_2.preloadScenePromise;
      replaceRichTextImgKey = _unresolved_2.replaceRichTextImgKey;
      screenShot = _unresolved_2.screenShot;
      setIntervalWithLimit = _unresolved_2.setIntervalWithLimit;
      makeSkippablePromise = _unresolved_2.makeSkippablePromise;
      startPerformanceTimer = _unresolved_2.startPerformanceTimer;
      waitPromise = _unresolved_2.waitPromise;
    }, function (_unresolved_3) {
      base64ToArrayBuffer = _unresolved_3.base64ToArrayBuffer;
      base64ToBinaryBuffer = _unresolved_3.base64ToBinaryBuffer;
      base64ToByteArray = _unresolved_3.base64ToByteArray;
      base64ToByteArray16 = _unresolved_3.base64ToByteArray16;
      binaryBufferToDecimalArray = _unresolved_3.binaryBufferToDecimalArray;
      byteArrayToArrayBuffer = _unresolved_3.byteArrayToArrayBuffer;
      byteArrayToBinaryBuffer = _unresolved_3.byteArrayToBinaryBuffer;
      numberArrayToBase64 = _unresolved_3.numberArrayToBase64;
      uint8ArrayToBase64 = _unresolved_3.uint8ArrayToBase64;
      uint8ArrayToBinaryBuffer = _unresolved_3.uint8ArrayToBinaryBuffer;
    }, function (_unresolved_4) {
      var _exportObj = {};

      for (var _key in _unresolved_4) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _unresolved_4[_key];
      }

      _export(_exportObj);
    }, function (_unresolved_5) {
      var _exportObj2 = {};

      for (var _key2 in _unresolved_5) {
        if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _unresolved_5[_key2];
      }

      _export(_exportObj2);
    }, function (_unresolved_6) {
      var _exportObj3 = {};

      for (var _key3 in _unresolved_6) {
        if (_key3 !== "default" && _key3 !== "__esModule") _exportObj3[_key3] = _unresolved_6[_key3];
      }

      _export(_exportObj3);
    }, function (_unresolved_7) {
      var _exportObj4 = {};

      for (var _key4 in _unresolved_7) {
        if (_key4 !== "default" && _key4 !== "__esModule") _exportObj4[_key4] = _unresolved_7[_key4];
      }

      _export(_exportObj4);
    }, function (_unresolved_8) {
      var _exportObj5 = {};

      for (var _key5 in _unresolved_8) {
        if (_key5 !== "default" && _key5 !== "__esModule") _exportObj5[_key5] = _unresolved_8[_key5];
      }

      _export(_exportObj5);
    }, function (_unresolved_9) {
      var _exportObj6 = {};

      for (var _key6 in _unresolved_9) {
        if (_key6 !== "default" && _key6 !== "__esModule") _exportObj6[_key6] = _unresolved_9[_key6];
      }

      _export(_exportObj6);
    }, function (_unresolved_10) {
      var _exportObj7 = {};

      for (var _key7 in _unresolved_10) {
        if (_key7 !== "default" && _key7 !== "__esModule") _exportObj7[_key7] = _unresolved_10[_key7];
      }

      _export(_exportObj7);
    }, function (_unresolved_11) {
      var _exportObj8 = {};

      for (var _key8 in _unresolved_11) {
        if (_key8 !== "default" && _key8 !== "__esModule") _exportObj8[_key8] = _unresolved_11[_key8];
      }

      _export(_exportObj8);
    }, function (_unresolved_12) {
      var _exportObj9 = {};

      for (var _key9 in _unresolved_12) {
        if (_key9 !== "default" && _key9 !== "__esModule") _exportObj9[_key9] = _unresolved_12[_key9];
      }

      _export(_exportObj9);
    }, function (_unresolved_13) {
      var _exportObj10 = {};

      for (var _key10 in _unresolved_13) {
        if (_key10 !== "default" && _key10 !== "__esModule") _exportObj10[_key10] = _unresolved_13[_key10];
      }

      _export(_exportObj10);
    }, function (_unresolved_14) {
      var _exportObj11 = {};

      for (var _key11 in _unresolved_14) {
        if (_key11 !== "default" && _key11 !== "__esModule") _exportObj11[_key11] = _unresolved_14[_key11];
      }

      _export(_exportObj11);
    }, function (_unresolved_15) {
      var _exportObj12 = {};

      for (var _key12 in _unresolved_15) {
        if (_key12 !== "default" && _key12 !== "__esModule") _exportObj12[_key12] = _unresolved_15[_key12];
      }

      _export(_exportObj12);
    }, function (_unresolved_16) {
      var _exportObj13 = {};

      for (var _key13 in _unresolved_16) {
        if (_key13 !== "default" && _key13 !== "__esModule") _exportObj13[_key13] = _unresolved_16[_key13];
      }

      _export(_exportObj13);
    }, function (_unresolved_17) {
      var _exportObj14 = {};

      for (var _key14 in _unresolved_17) {
        if (_key14 !== "default" && _key14 !== "__esModule") _exportObj14[_key14] = _unresolved_17[_key14];
      }

      _export(_exportObj14);
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9d6e7vy8vpGV64QOYx9XWqa", "index", undefined);

      __checkObsolete__(['Camera', 'Canvas', 'Component', 'EventMouse', 'EventTouch', 'Node', 'Vec3']);

      _utility = class _utility {};

      _utility.numberArrayToBase64 = numberArray => (_crd && numberArrayToBase64 === void 0 ? (_reportPossibleCrUseOfnumberArrayToBase({
        error: Error()
      }), numberArrayToBase64) : numberArrayToBase64)(numberArray);

      _utility.byteArrayToArrayBuffer = byteArray => (_crd && byteArrayToArrayBuffer === void 0 ? (_reportPossibleCrUseOfbyteArrayToArrayBuffer({
        error: Error()
      }), byteArrayToArrayBuffer) : byteArrayToArrayBuffer)(byteArray);

      _utility.base64ToArrayBuffer = base64 => (_crd && base64ToArrayBuffer === void 0 ? (_reportPossibleCrUseOfbase64ToArrayBuffer({
        error: Error()
      }), base64ToArrayBuffer) : base64ToArrayBuffer)(base64);

      _utility.uint8ArrayToBase64 = bytes => (_crd && uint8ArrayToBase64 === void 0 ? (_reportPossibleCrUseOfuint8ArrayToBase({
        error: Error()
      }), uint8ArrayToBase64) : uint8ArrayToBase64)(bytes);

      _utility.uint8ArrayToBinaryBuffer = bytes => (_crd && uint8ArrayToBinaryBuffer === void 0 ? (_reportPossibleCrUseOfuint8ArrayToBinaryBuffer({
        error: Error()
      }), uint8ArrayToBinaryBuffer) : uint8ArrayToBinaryBuffer)(bytes);

      _utility.base64ToBinaryBuffer = base64 => (_crd && base64ToBinaryBuffer === void 0 ? (_reportPossibleCrUseOfbase64ToBinaryBuffer({
        error: Error()
      }), base64ToBinaryBuffer) : base64ToBinaryBuffer)(base64);

      _utility.binaryBufferToDecimalArray = binaryBuffer => (_crd && binaryBufferToDecimalArray === void 0 ? (_reportPossibleCrUseOfbinaryBufferToDecimalArray({
        error: Error()
      }), binaryBufferToDecimalArray) : binaryBufferToDecimalArray)(binaryBuffer);

      _utility.byteArrayToBinaryBuffer = byteArray => (_crd && byteArrayToBinaryBuffer === void 0 ? (_reportPossibleCrUseOfbyteArrayToBinaryBuffer({
        error: Error()
      }), byteArrayToBinaryBuffer) : byteArrayToBinaryBuffer)(byteArray);

      _utility.base64ToByteArray = base64 => (_crd && base64ToByteArray === void 0 ? (_reportPossibleCrUseOfbase64ToByteArray({
        error: Error()
      }), base64ToByteArray) : base64ToByteArray)(base64);

      _utility.base64ToByteArray16 = base64 => (_crd && base64ToByteArray16 === void 0 ? (_reportPossibleCrUseOfbase64ToByteArray2({
        error: Error()
      }), base64ToByteArray16) : base64ToByteArray16)(base64);

      _utility.addEventHandlerToButton = function (buttonNode, component, callback, customEventData) {
        if (customEventData === void 0) {
          customEventData = '';
        }

        return (_crd && addEventHandlerToButton === void 0 ? (_reportPossibleCrUseOfaddEventHandlerToButton({
          error: Error()
        }), addEventHandlerToButton) : addEventHandlerToButton)(buttonNode, component, callback, customEventData);
      };

      _utility.addEventHandlerToToggle = function (toggleNode, component, callback, customEventData) {
        if (customEventData === void 0) {
          customEventData = '';
        }

        return (_crd && addEventHandlerToToggle === void 0 ? (_reportPossibleCrUseOfaddEventHandlerToToggle({
          error: Error()
        }), addEventHandlerToToggle) : addEventHandlerToToggle)(toggleNode, component, callback, customEventData);
      };

      _utility.waitPromise = function (seconds, signal) {
        if (signal === void 0) {
          signal = undefined;
        }

        return (_crd && waitPromise === void 0 ? (_reportPossibleCrUseOfwaitPromise({
          error: Error()
        }), waitPromise) : waitPromise)(seconds, signal);
      };

      _utility.getRandomInt = max => (_crd && getRandomInt === void 0 ? (_reportPossibleCrUseOfgetRandomInt({
        error: Error()
      }), getRandomInt) : getRandomInt)(max);

      _utility.preloadScenePromise = (sceneName, onProgress) => (_crd && preloadScenePromise === void 0 ? (_reportPossibleCrUseOfpreloadScenePromise({
        error: Error()
      }), preloadScenePromise) : preloadScenePromise)(sceneName, onProgress);

      _utility.getCurrentTime = () => (_crd && getCurrentTime === void 0 ? (_reportPossibleCrUseOfgetCurrentTime({
        error: Error()
      }), getCurrentTime) : getCurrentTime)();

      _utility.getURLParams = url => (_crd && getURLParams === void 0 ? (_reportPossibleCrUseOfgetURLParams({
        error: Error()
      }), getURLParams) : getURLParams)(url);

      _utility.getURLLanguage = () => (_crd && getURLLanguage === void 0 ? (_reportPossibleCrUseOfgetURLLanguage({
        error: Error()
      }), getURLLanguage) : getURLLanguage)();

      _utility.getGameCode = () => (_crd && getGameCode === void 0 ? (_reportPossibleCrUseOfgetGameCode({
        error: Error()
      }), getGameCode) : getGameCode)();

      _utility.getHost = () => (_crd && getHost === void 0 ? (_reportPossibleCrUseOfgetHost({
        error: Error()
      }), getHost) : getHost)();

      _utility.screenShot = () => (_crd && screenShot === void 0 ? (_reportPossibleCrUseOfscreenShot({
        error: Error()
      }), screenShot) : screenShot)();

      _utility.isDev = () => (_crd && isDev === void 0 ? (_reportPossibleCrUseOfisDev({
        error: Error()
      }), isDev) : isDev)();

      _utility.getCurrentTimeStampInSeconds = () => (_crd && getCurrentTimeStampInSeconds === void 0 ? (_reportPossibleCrUseOfgetCurrentTimeStampInSeconds({
        error: Error()
      }), getCurrentTimeStampInSeconds) : getCurrentTimeStampInSeconds)();

      _utility.getBrowserAndDeviceInfo = () => (_crd && getBrowserAndDeviceInfo === void 0 ? (_reportPossibleCrUseOfgetBrowserAndDeviceInfo({
        error: Error()
      }), getBrowserAndDeviceInfo) : getBrowserAndDeviceInfo)();

      _utility.setIntervalWithLimit = (callback, interval, maxCount) => (_crd && setIntervalWithLimit === void 0 ? (_reportPossibleCrUseOfsetIntervalWithLimit({
        error: Error()
      }), setIntervalWithLimit) : setIntervalWithLimit)(callback, interval, maxCount);

      _utility.getTimezoneFormat = () => (_crd && getTimezoneFormat === void 0 ? (_reportPossibleCrUseOfgetTimezoneFormat({
        error: Error()
      }), getTimezoneFormat) : getTimezoneFormat)();

      _utility.loadResourcePrefab = url => (_crd && loadResourcePrefab === void 0 ? (_reportPossibleCrUseOfloadResourcePrefab({
        error: Error()
      }), loadResourcePrefab) : loadResourcePrefab)(url);

      _utility.replaceRichTextImgKey = str => (_crd && replaceRichTextImgKey === void 0 ? (_reportPossibleCrUseOfreplaceRichTextImgKey({
        error: Error()
      }), replaceRichTextImgKey) : replaceRichTextImgKey)(str);

      _utility.getCurrentCanvas = () => (_crd && getCurrentCanvas === void 0 ? (_reportPossibleCrUseOfgetCurrentCanvas({
        error: Error()
      }), getCurrentCanvas) : getCurrentCanvas)();

      _utility.getPayTableURL = (gameID, lang) => (_crd && getPayTableURL === void 0 ? (_reportPossibleCrUseOfgetPayTableURL({
        error: Error()
      }), getPayTableURL) : getPayTableURL)(gameID, lang);

      _utility.getRuleURL = (gameID, lang) => (_crd && getRuleURL === void 0 ? (_reportPossibleCrUseOfgetRuleURL({
        error: Error()
      }), getRuleURL) : getRuleURL)(gameID, lang);

      _utility.getHistoryURL = (lang, recordJsonString) => (_crd && getHistoryURL === void 0 ? (_reportPossibleCrUseOfgetHistoryURL({
        error: Error()
      }), getHistoryURL) : getHistoryURL)(lang, recordJsonString);

      _utility.isTestEnvironment = () => (_crd && isTestEnvironment === void 0 ? (_reportPossibleCrUseOfisTestEnvironment({
        error: Error()
      }), isTestEnvironment) : isTestEnvironment)();

      _utility.checkLabelBold = langKey => (_crd && checkLabelBold === void 0 ? (_reportPossibleCrUseOfcheckLabelBold({
        error: Error()
      }), checkLabelBold) : checkLabelBold)(langKey);

      _utility.isEventMouseInNode = (camera, event, node) => (_crd && isEventMouseInNode === void 0 ? (_reportPossibleCrUseOfisEventMouseInNode({
        error: Error()
      }), isEventMouseInNode) : isEventMouseInNode)(camera, event, node);

      _utility.getEventLocalPos = (camera, event, node) => (_crd && getEventLocalPos === void 0 ? (_reportPossibleCrUseOfgetEventLocalPos({
        error: Error()
      }), getEventLocalPos) : getEventLocalPos)(camera, event, node);

      _utility.getEventScreenPos = (camera, event) => (_crd && getEventScreenPos === void 0 ? (_reportPossibleCrUseOfgetEventScreenPos({
        error: Error()
      }), getEventScreenPos) : getEventScreenPos)(camera, event);

      _utility.startPerformanceTimer = () => (_crd && startPerformanceTimer === void 0 ? (_reportPossibleCrUseOfstartPerformanceTimer({
        error: Error()
      }), startPerformanceTimer) : startPerformanceTimer)();

      _utility.endPerformanceTimer = () => (_crd && endPerformanceTimer === void 0 ? (_reportPossibleCrUseOfendPerformanceTimer({
        error: Error()
      }), endPerformanceTimer) : endPerformanceTimer)();

      _utility.makeSkippablePromise = promise => (_crd && makeSkippablePromise === void 0 ? (_reportPossibleCrUseOfmakeSkippablePromise({
        error: Error()
      }), makeSkippablePromise) : makeSkippablePromise)(promise);

      _export("Utility", Utility = _utility);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cc4e3f8b27d8bd431ae380c941a317994525509f.js.map
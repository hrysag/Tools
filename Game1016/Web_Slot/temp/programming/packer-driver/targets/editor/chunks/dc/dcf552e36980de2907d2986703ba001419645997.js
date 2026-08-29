System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BinaryBuffer, _crd;

  // 以下封包處理相關========================================
  // 將Uint8Array 轉成 BinaryBuffer
  // 將base64字串 轉成 BinaryBuffer
  // 將byte array 轉成 BinaryBuffer
  // 將base64字串轉乘number[]( byte array) 測試用
  function numberArrayToBase64(numberArray) {
    if (numberArray.some(v => v > 255)) {
      console.error("numberArrayToBase64 error: numberArray has value > 255");
      return null;
    }

    let byteArray = new Uint8Array(numberArray);
    return uint8ArrayToBase64(byteArray);
  }

  function byteArrayToArrayBuffer(byteArray) {
    if (byteArray.some(v => v > 255)) {
      console.error("byteArrayToArrayBuffer error: byteArray has value > 255");
      return null;
    }

    var uint8Array = new Uint8Array(byteArray.length);

    for (var i = 0; i < uint8Array.length; i++) {
      uint8Array[i] = byteArray[i];
    }

    return uint8Array.buffer;
  }

  function base64ToArrayBuffer(base64) {
    var binaryString = window.atob(base64);
    var bytes = new Uint8Array(binaryString.length);

    for (var i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes.buffer;
  }

  function uint8ArrayToBase64(bytes) {
    let binary = '';
    let len = bytes.byteLength;

    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    return window.btoa(binary);
  }

  function uint8ArrayToBinaryBuffer(bytes) {
    return new (_crd && BinaryBuffer === void 0 ? (_reportPossibleCrUseOfBinaryBuffer({
      error: Error()
    }), BinaryBuffer) : BinaryBuffer)(bytes.buffer);
  }

  function base64ToBinaryBuffer(base64) {
    let binaryBuffer = new (_crd && BinaryBuffer === void 0 ? (_reportPossibleCrUseOfBinaryBuffer({
      error: Error()
    }), BinaryBuffer) : BinaryBuffer)(base64ToArrayBuffer(base64));
    return binaryBuffer;
  }

  function binaryBufferToDecimalArray(binaryBuffer) {
    let success = true;
    let decimalArray = [];

    while (success) {
      let result = binaryBuffer.getByte();
      success = result[0];

      if (success) {
        decimalArray.push(result[1]);
      }
    }

    return decimalArray;
  }

  function byteArrayToBinaryBuffer(byteArray) {
    let binaryBuffer = new (_crd && BinaryBuffer === void 0 ? (_reportPossibleCrUseOfBinaryBuffer({
      error: Error()
    }), BinaryBuffer) : BinaryBuffer)(byteArrayToArrayBuffer(byteArray));
    return binaryBuffer;
  }

  function base64ToByteArray(base64) {
    var binaryString = atob(base64);
    var bytes = [];

    for (var i = 0; i < binaryString.length; i++) {
      bytes.push(binaryString.charCodeAt(i));
    }

    return bytes;
  }

  function base64ToByteArray16(base64) {
    var binaryString = atob(base64);
    var bytes = [];

    for (var i = 0; i < binaryString.length; i++) {
      bytes.push(binaryString.charCodeAt(i));
    }

    let result = bytes.map(v => v.toString(16).toUpperCase()).map(v => v.length === 1 ? '0' + v : v);
    return result;
  } // 以上封包處理相關========================================


  function _reportPossibleCrUseOfBinaryBuffer(extras) {
    _reporterNs.report("BinaryBuffer", "../../Communication/BinaryBuffer", _context.meta, extras);
  }

  _export({
    numberArrayToBase64: numberArrayToBase64,
    byteArrayToArrayBuffer: byteArrayToArrayBuffer,
    base64ToArrayBuffer: base64ToArrayBuffer,
    uint8ArrayToBase64: uint8ArrayToBase64,
    uint8ArrayToBinaryBuffer: uint8ArrayToBinaryBuffer,
    base64ToBinaryBuffer: base64ToBinaryBuffer,
    binaryBufferToDecimalArray: binaryBufferToDecimalArray,
    byteArrayToBinaryBuffer: byteArrayToBinaryBuffer,
    base64ToByteArray: base64ToByteArray,
    base64ToByteArray16: base64ToByteArray16
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BinaryBuffer = _unresolved_2.BinaryBuffer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "edc27q85YxLdKKTuO2Mg2vo", "PacketHandle", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dcf552e36980de2907d2986703ba001419645997.js.map
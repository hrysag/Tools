System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, NetConst, ArrayUtil, BinaryBufferWriter, error, BinaryBuffer, _crd;

  function _reportPossibleCrUseOfNetConst(extras) {
    _reporterNs.report("NetConst", "./NetConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArrayUtil(extras) {
    _reporterNs.report("ArrayUtil", "./ArrayUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBinaryBufferWriter(extras) {
    _reporterNs.report("BinaryBufferWriter", "./BinaryBufferWriter", _context.meta, extras);
  }

  _export("BinaryBuffer", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
    }, function (_unresolved_2) {
      NetConst = _unresolved_2.NetConst;
    }, function (_unresolved_3) {
      ArrayUtil = _unresolved_3.ArrayUtil;
    }, function (_unresolved_4) {
      BinaryBufferWriter = _unresolved_4.BinaryBufferWriter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "232acnCR7BJXL9h1eIppBQT", "BinaryBuffer", undefined);

      /**
       * 從二進位Buffer讀出資料用.
       */
      __checkObsolete__(['error']);

      _export("BinaryBuffer", BinaryBuffer = class BinaryBuffer {
        ReadLittleEndianLong(arg0) {
          return this.getPositiveLong(arg0)[1];
        }

        ReadAttachedLengthString() {
          return this.getString()[1];
        }

        constructor(buffer) {
          this.USE_LITTLE_ENDIAN = false;
          this.m_Buffer = null;
          this.m_DataView = null;
          this.m_nReadIndex = 0;
          this.m_Buffer = buffer;
          this.m_DataView = new DataView(this.m_Buffer);
          this.m_nReadIndex = 0;
        }

        getArrayBuffer() {
          return this.m_Buffer;
        }

        getReadIndex() {
          return this.m_nReadIndex;
        }

        hasUnreadData() {
          if (this.m_nReadIndex >= this.m_Buffer.byteLength) {
            return false;
          }

          return true;
        }

        getCurrentReadPos() {
          return this.m_nReadIndex;
        }

        setReadPosition(iReadPos) {
          this.m_nReadIndex = iReadPos;

          if (this.m_nReadIndex < 0) {
            this.m_nReadIndex = 0;
          } else {
            let iTotalLength = this.getCount();

            if (this.m_nReadIndex > iTotalLength) {
              this.m_nReadIndex = iTotalLength;
            }
          }
        }
        /**
         * 跳過幾個位元組.
         * @param iBytes 
         */


        skipBytes(iLength) {
          if (iLength <= 0) {
            return;
          }

          this.m_nReadIndex += iLength;
          let iTotalLength = this.getCount();

          if (this.m_nReadIndex > iTotalLength) {
            this.m_nReadIndex = iTotalLength;
          }
        }
        /**
         * 取出某範圍的bytes, 不會影響讀取位置.
         * @param iStartPos 起始讀取位置.
         * @param iLength 讀取bytes數.
         * @return BinaryBuffer  取出來的資料放進新的BinaryBuffer, 失敗傳回null.
         */


        getBytesRanged(iStartPos, iLength) {
          if (iStartPos < 0 || iLength <= 0) {
            return null;
          }

          if (iStartPos + iLength > this.getCount()) {
            return null;
          }

          let dataView = new BinaryBuffer(this.m_Buffer.slice(iStartPos, iStartPos + iLength));
          return dataView;
        }
        /**
         * 取出某範圍的資料組合成整數(BigEndian), 不會影響讀取位置.
         * @param iStartPos 起始讀取位置.
         * @param iLength 讀取bytes數.
         * @return number  取出來的資料, 失敗傳回0.
         */


        getNumberRanged(iStartPos, iLength) {
          if (iStartPos < 0 || iLength <= 0) {
            return 0;
          }

          if (iStartPos + iLength > this.getCount()) {
            return 0;
          }

          let nNumber = 0;
          let arbtNumber = [];

          for (let i = 0; i < iLength; ++i) {
            arbtNumber[i] = this.m_DataView.getUint8(iStartPos + i);
          }

          nNumber = (_crd && ArrayUtil === void 0 ? (_reportPossibleCrUseOfArrayUtil({
            error: Error()
          }), ArrayUtil) : ArrayUtil).convertArrayToNumber(arbtNumber);
          return nNumber;
        }
        /**
         * 取出bytes.
         * @param iLength 取出的bytes數, 如果超過範圍或者傳入-1, 則會取出剩下所有資料.
         * @return BinaryBuffer  取出來的資料放進新的BinaryBuffer.
         */


        getBytes(iLength) {
          if (iLength < 0 || iLength > this.getUnreadCount()) {
            // 超過範圍就讀取全部.
            iLength = this.getUnreadCount();
          }

          let dataView = new BinaryBuffer(this.m_Buffer.slice(this.m_nReadIndex, this.m_nReadIndex + iLength));
          this.m_nReadIndex += iLength;
          return dataView;
        } // 取bytes array 含長度  等於 先取一個長度 在往後取該長度的陣列
        // 例如  [3, 15, 27, 12, 8 ....] => [15, 27 , 12] 


        getBytesArray_WithLength() {
          let byteResult = this.getByte();

          if (byteResult[0]) {
            let len = byteResult[1];
            let result = this.getBytesArray(len);
            return result;
          }

          return null;
        }

        getBytesArray(iLength) {
          let binaryBuffer = this.getBytes(iLength);
          let result = [];

          for (let i = 0; i < iLength; i++) {
            let byte = binaryBuffer.getByte();

            if (byte[0] === true) {
              result.push(byte[1]);
            } else {
              error(`getBytesArray 解析${i}時長度不足，出現錯誤`);
              result.push(0);
            }
          }

          return result;
        }

        getBytesArrayAll() {
          const iLength = this.m_Buffer.byteLength;
          let binaryBuffer = this.getBytes(iLength);
          let result = [];

          for (let i = 0; i < iLength; i++) {
            let byte = binaryBuffer.getByte();

            if (byte[0] === true) {
              result.push(byte[1]);
            } else {
              break;
            }
          }

          return result;
        }

        UnzipByteArray(bytes) {
          let result = [];

          for (let item of bytes) {
            let strHex = item.toString(16).padStart(2, "0");
            result.push(parseInt(strHex[1], 16)); // 前面先放 1

            result.push(parseInt(strHex[0], 16)); // 後面才放 0 這是公司壓縮的格式
          }

          return result;
        }

        getBytesArrayAndUnzip(iLength) {
          let bytes = this.getBytesArray(iLength);
          let result = this.UnzipByteArray(bytes);
          return result;
        }
        /**
         * 取出字串, 前3bytes紀錄長度.
         */


        getString_MegaSize() {
          let ret = this.getPositiveNumber((_crd && NetConst === void 0 ? (_reportPossibleCrUseOfNetConst({
            error: Error()
          }), NetConst) : NetConst).SAVE_BITS_MEGA_STRING); // 3bytes記錄長度.

          if (!ret[0]) {
            return [false, null];
          }

          let szRet = this.getString_WithLength(ret[1]);
          return [null != szRet, szRet];
        }
        /**
         * 取出字串, 前2bytes紀錄長度.
         */


        getString() {
          let ret = this.getPositiveNumber((_crd && NetConst === void 0 ? (_reportPossibleCrUseOfNetConst({
            error: Error()
          }), NetConst) : NetConst).SAVE_BITS_STRING); // 2bytes紀錄長度.

          if (!ret[0]) {
            return [false, null];
          }

          let szRet = this.getString_WithLength(ret[1]);
          return [null != szRet, szRet];
        }

        getByte() {
          let binaryBuffer = this.getBytes(1);
          var byteArray = new Uint8Array(binaryBuffer.getArrayBuffer());
          let success = false;

          if (Number.isInteger(byteArray == null ? void 0 : byteArray[0])) {
            success = true;
          }

          return [success, byteArray == null ? void 0 : byteArray[0]];
        }
        /**
         * 取出字串, 自帶長度.
         * @param iLength 字串bytes數.
         * @return string 字串, 找不到傳回null.
         */


        getString_WithLength(iLength) {
          let szRet = null;

          if (this.getUnreadCount() >= iLength) {
            let buffer = this.m_Buffer.slice(this.m_nReadIndex, this.m_nReadIndex + iLength);

            if (buffer) {
              this.m_nReadIndex += iLength; // TextDecoder IE不支援, 先用別的方式.
              //szRet = this.fromUTF8Array(buffer);

              let view = new DataView(buffer);
              let arbtNumber = [];

              for (let i = 0; i < iLength; ++i) {
                arbtNumber[i] = view.getUint8(i);
              }

              szRet = (_crd && ArrayUtil === void 0 ? (_reportPossibleCrUseOfArrayUtil({
                error: Error()
              }), ArrayUtil) : ArrayUtil).convertUtf16ArrayToString(arbtNumber);
            }
          }

          return szRet;
        }

        mergeFrom(dataView) {
          if (null == dataView || null == this.m_DataView) {
            return;
          }

          let iLength1 = this.m_DataView.byteLength;
          let iLength2 = dataView.getCount();

          if (0 == iLength2) {
            return;
          }

          let mergedBuffer = new Uint8Array(iLength1 + iLength2);
          let firstBuffer = new Uint8Array(this.m_DataView.buffer);
          let secondBuffer = new Uint8Array(dataView.m_Buffer);

          if (iLength1 > 0) {
            mergedBuffer.set(firstBuffer);
          }

          if (iLength2 > 0) {
            mergedBuffer.set(secondBuffer);
          }

          this.m_Buffer = mergedBuffer.buffer;
          this.m_DataView = new DataView(this.m_Buffer);
        }

        getPositiveNumber(iDigits) {
          if (iDigits <= 0 || iDigits > 8 || this.getUnreadCount() < iDigits) {
            return [false, 0];
          }

          let iValue = 0;
          let bSucceed = true;

          try {
            for (let i = 0; i < iDigits; ++i) {
              // iDigit=3: 傳回  [0]*65536 + [1]*256 + [2] 
              iValue += this.m_DataView.getUint8(this.m_nReadIndex + i) << 8 * (iDigits - i - 1);
            }

            this.m_nReadIndex += iDigits;
          } catch (error) {
            bSucceed = false;
            iValue = 0;
          }

          return [bSucceed, iValue];
        } // 平常不會用.


        getPositiveNumberLittleEndian(iDigits) {
          if (iDigits <= 0 || iDigits > 8 || this.getUnreadCount() < iDigits) {
            return [false, 0];
          }

          let iValue = 0;
          let bSucceed = true;

          try {
            for (let i = 0; i < iDigits; ++i) {
              // iDigit=3: 傳回  [2]*65536 + [1]*256 + [0] 
              iValue += this.m_DataView.getUint8(this.m_nReadIndex + i) << 8 * i;
            }

            this.m_nReadIndex += iDigits;
          } catch (error) {
            bSucceed = false;
            iValue = 0;
          }

          return [bSucceed, iValue];
        }

        getSingle(useLittleEndian = true) {
          let [boolean, num] = this.getFloat32(useLittleEndian);
          return [boolean, boolean ? new Decimal(num) : null];
        }

        getFloat32(useLittleEndian = true) {
          if (this.getUnreadCount() < 4) {
            return [false, 0];
          }

          let fValue = 0;
          let bSucceed = true;

          try {
            fValue = this.m_DataView.getFloat32(this.m_nReadIndex, useLittleEndian);
            this.m_nReadIndex += 4;
          } catch (error) {
            bSucceed = false;
          }

          return [bSucceed, fValue];
        }

        getFloat64(useLittleEndian = true) {
          if (this.getUnreadCount() < 8) {
            return [false, 0];
          }

          let fValue = 0;
          let bSucceed = true;

          try {
            fValue = this.m_DataView.getFloat64(this.m_nReadIndex, useLittleEndian);
            this.m_nReadIndex += 8;
          } catch (error) {
            bSucceed = false;
          }

          return [bSucceed, fValue];
        }

        getInt8() {
          if (this.getUnreadCount() < 1) {
            return [false, 0];
          }

          let fValue = 0;
          let bSucceed = true;

          try {
            fValue = this.m_DataView.getInt8(this.m_nReadIndex);
            this.m_nReadIndex += 1;
          } catch (error) {
            bSucceed = false;
          }

          return [bSucceed, fValue];
        }

        getInt16() {
          if (this.getUnreadCount() < 2) {
            return [false, 0];
          }

          let fValue = 0;
          let bSucceed = true;

          try {
            fValue = this.m_DataView.getInt16(this.m_nReadIndex, this.USE_LITTLE_ENDIAN);
            this.m_nReadIndex += 2;
          } catch (error) {
            bSucceed = false;
          }

          return [bSucceed, fValue];
        }

        getInt32() {
          if (this.getUnreadCount() < 4) {
            return [false, 0];
          }

          let fValue = 0;
          let bSucceed = true;

          try {
            fValue = this.m_DataView.getInt32(this.m_nReadIndex, this.USE_LITTLE_ENDIAN);
            this.m_nReadIndex += 4;
          } catch (error) {
            bSucceed = false;
          }

          return [bSucceed, fValue];
        }

        getUint8() {
          if (this.getUnreadCount() < 1) {
            return [false, 0];
          }

          let fValue = 0;
          let bSucceed = true;

          try {
            fValue = this.m_DataView.getUint8(this.m_nReadIndex);
            this.m_nReadIndex += 1;
          } catch (error) {
            bSucceed = false;
          }

          return [bSucceed, fValue];
        }
        /**
         * 取出一個unit8的數值, 但不改變已讀位置.
         */


        peekUint8() {
          if (this.getUnreadCount() < 1) {
            return [false, 0];
          }

          let fValue = 0;
          let bSucceed = true;

          try {
            fValue = this.m_DataView.getUint8(this.m_nReadIndex);
          } catch (error) {
            bSucceed = false;
          }

          return [bSucceed, fValue];
        }

        getUint16() {
          if (this.getUnreadCount() < 2) {
            return [false, 0];
          }

          let fValue = 0;
          let bSucceed = true;

          try {
            fValue = this.m_DataView.getUint16(this.m_nReadIndex, this.USE_LITTLE_ENDIAN);
            this.m_nReadIndex += 2;
          } catch (error) {
            bSucceed = false;
          }

          return [bSucceed, fValue];
        }

        getUint32() {
          if (this.getUnreadCount() < 4) {
            return [false, 0];
          }

          let fValue = 0;
          let bSucceed = true;

          try {
            fValue = this.m_DataView.getUint32(this.m_nReadIndex, this.USE_LITTLE_ENDIAN);
            this.m_nReadIndex += 4;
          } catch (error) {
            bSucceed = false;
          }

          return [bSucceed, fValue];
        }

        getUint32ByBig() {
          if (this.getUnreadCount() < 4) {
            return [false, 0];
          }

          let fValue = 0;
          let bSucceed = true;

          try {
            fValue = this.m_DataView.getUint32(this.m_nReadIndex, false);
            this.m_nReadIndex += 4;
          } catch (error) {
            bSucceed = false;
          }

          return [bSucceed, fValue];
        }

        getLong(bUnsigned = false) {
          return this.getPositiveLong(8, bUnsigned);
        }

        getPositiveLongByBig(iDigits, bUnsigned = true) {
          if (this.getUnreadCount() < iDigits || iDigits < 0 || iDigits > 8) {
            return [false, dcodeIO.Long.ZERO];
          }

          let bSucceed = true;
          let lValue = dcodeIO.Long.fromNumber(0, bUnsigned);

          try {
            for (let i = iDigits - 1; i >= 0; i--) {
              lValue = lValue.add(dcodeIO.Long.fromNumber(this.m_DataView.getUint8(this.m_nReadIndex)).shiftLeft(8 * i));
              this.m_nReadIndex++; // xsh5core.Log.info("getLong pos: " + i + " => " + this.m_DataView.getUint8(this.m_nReadIndex + i));
            } // this.m_nReadIndex += 1;

          } catch (error) {
            bSucceed = false;
          }

          return [bSucceed, lValue];
        }

        getPositiveLong(iDigits, bUnsigned = true) {
          if (this.getUnreadCount() < iDigits || iDigits < 0 || iDigits > 8) {
            return [false, dcodeIO.Long.ZERO];
          }

          let bSucceed = true;
          let lValue = dcodeIO.Long.fromNumber(0, bUnsigned);

          try {
            for (let i = 0; i < iDigits; ++i) {
              lValue = lValue.add(dcodeIO.Long.fromNumber(this.m_DataView.getUint8(this.m_nReadIndex + i)).shiftLeft(8 * i)); // Log.info("getLong pos: " + i + " => " + this.m_DataView.getUint8(this.m_nReadIndex + i));
            }

            this.m_nReadIndex += iDigits;
          } catch (error) {
            bSucceed = false;
          }

          return [bSucceed, lValue];
        }

        getCount() {
          if (!this.m_DataView) {
            return 0;
          }

          return this.m_DataView.byteLength;
        }

        getUnreadCount() {
          return this.m_Buffer.byteLength - this.m_nReadIndex;
        }
        /**
         * 讀取剩於資料轉成int
         */


        getUnreadUint8Array() {
          let dataInt8Array = [];

          if (this.getUnreadCount() <= 0) {
            return [false, null];
          }

          let bSucceed = true;

          try {
            while (this.getUnreadCount() > 0) {
              dataInt8Array.push(this.m_DataView.getUint8(this.m_nReadIndex));
              this.m_nReadIndex += 1;
            }
          } catch (error) {
            bSucceed = false;
          }

          return [true, new Uint8Array(dataInt8Array)];
        } //add by humbert


        getUInt24() {
          if (this.getUnreadCount() < 3) {
            return [false, 0];
          }

          let fValue = 0;
          let bSucceed = true;

          try {
            for (let i = 2; i >= 0; i--) {
              fValue += this.m_DataView.getUint8(this.m_nReadIndex) * Math.pow(256, i);
              this.m_nReadIndex++;
            }
          } catch (error) {
            bSucceed = false;
          }

          return [bSucceed, fValue];
        }
        /**
         *  utf-8陣列轉成字串(Javascript應該是utf-16).
         */


        fromUTF8Array(buffer) {
          // array of bytes
          var str = '',
              i;
          let iCount = buffer.byteLength;
          let dataView = new DataView(buffer);

          for (i = 0; i < iCount; i++) {
            var value = dataView.getUint8(i);

            if (value < 0x80) {
              str += String.fromCharCode(value);
            } else if (value > 0xBF && value < 0xE0) {
              str += String.fromCharCode((value & 0x1F) << 6 | dataView.getUint8(i + 1) & 0x3F);
              i += 1;
            } else if (value > 0xDF && value < 0xF0) {
              str += String.fromCharCode((value & 0x0F) << 12 | (dataView.getUint8(i + 1) & 0x3F) << 6 | dataView.getUint8(i + 2) & 0x3F);
              i += 2;
            } else {
              // surrogate pair
              var charCode = ((value & 0x07) << 18 | (dataView.getUint8(i + 1) & 0x3F) << 12 | (dataView.getUint8(i + 2) & 0x3F) << 6 | dataView.getUint8(i + 3) & 0x3F) - 0x010000;
              str += String.fromCharCode(charCode >> 10 | 0xD800, charCode & 0x03FF | 0xDC00);
              i += 3;
            }
          }

          return str.toString();
        }

        static fromInt8Array(data) {
          let buffer = new ArrayBuffer(data.length);
          let view = new Int8Array(buffer);

          for (let i = 0, n = data.length; i < n; i++) {
            view.fill(data[i], i);
          }

          return new BinaryBuffer(view.buffer);
        }

        toString() {
          let szText = "";
          let nOldReadPos = this.getCurrentReadPos();
          this.setReadPosition(0);

          for (let i = 0; i < this.getCount(); i++) {
            szText = szText + this.getUint8()[1].toString() + ", ";
          }

          this.setReadPosition(nOldReadPos);
          return szText;
        } //模擬Unity的BytesReader


        ReadAttatchedLengthBytes() {
          let length = this.getUint16()[1];
          let arrTemp = [];

          for (let i = 0; i < length; i++) {
            arrTemp.push(this.getUint8()[1]);
          }

          return this.GetBinaryBuffer(arrTemp);
        }

        ReadBool() {
          return this.getUint8()[1] ? true : false;
        }

        readUnsignedByte() {
          return this.getUint8()[1];
        }

        ReadByte() {
          return this.getUint8()[1];
        }

        ReadBigEndianUShort() {
          return this.getUint16()[1];
        }

        ReadBigEndianULong(num) {
          return this.getPositiveLongByBig(num)[1];
        }

        ReadLittleEndianULong(num) {
          if (num = 8) return this.getLong(true)[1];else window.alert("ReadLittleEndianULong:無此方法");
        }

        ReadBigEndianUInt(num) {
          return this.getPositiveLongByBig(num)[1].toNumber();
        }

        readInt() {
          return this.getInt32()[1];
        }

        set Position(value) {
          this.setReadPosition(value);
        }

        get Position() {
          return this.getCurrentReadPos();
        }

        GetBinaryBuffer(arrTemp) {
          let binaryBufferWriter = new (_crd && BinaryBufferWriter === void 0 ? (_reportPossibleCrUseOfBinaryBufferWriter({
            error: Error()
          }), BinaryBufferWriter) : BinaryBufferWriter)();
          binaryBufferWriter.addByteNumberArray(arrTemp);
          let arrayBuffer = binaryBufferWriter.toArrayBuffer();
          let data = new BinaryBuffer(arrayBuffer);
          return data;
        }

        static GetBinaryBuffer(arrTemp) {
          let binaryBufferWriter = new (_crd && BinaryBufferWriter === void 0 ? (_reportPossibleCrUseOfBinaryBufferWriter({
            error: Error()
          }), BinaryBufferWriter) : BinaryBufferWriter)();
          binaryBufferWriter.addByteNumberArray(arrTemp);
          let arrayBuffer = binaryBufferWriter.toArrayBuffer();
          let data = new BinaryBuffer(arrayBuffer);
          return data;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2509de1050c7a25bb2314308cbe6a17929314f47.js.map
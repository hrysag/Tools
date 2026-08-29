System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NetConst, ArrayUtil, IteratorFactory, List, DataBinaryBuffer, DataByteArray, DataLittleEndianBytes, DataBytes, Data8Bytes, Data4Bytes, Data2Bytes, DataFloat32, DataString, DataString_MegaSize, DataString16, DataLong, DataLongByBig, BinaryBufferWriter, _crd;

  function _reportPossibleCrUseOfNetConst(extras) {
    _reporterNs.report("NetConst", "./NetConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArrayUtil(extras) {
    _reporterNs.report("ArrayUtil", "./ArrayUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIteratorFactory(extras) {
    _reporterNs.report("IteratorFactory", "./IteratorFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfList(extras) {
    _reporterNs.report("List", "./List", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIterator(extras) {
    _reporterNs.report("Iterator", "./Iterator", _context.meta, extras);
  }

  _export({
    DataBinaryBuffer: void 0,
    DataByteArray: void 0,
    DataLittleEndianBytes: void 0,
    DataBytes: void 0,
    Data8Bytes: void 0,
    Data4Bytes: void 0,
    Data2Bytes: void 0,
    DataFloat32: void 0,
    DataString: void 0,
    DataString_MegaSize: void 0,
    DataString16: void 0,
    DataLong: void 0,
    DataLongByBig: void 0,
    BinaryBufferWriter: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      NetConst = _unresolved_2.NetConst;
    }, function (_unresolved_3) {
      ArrayUtil = _unresolved_3.ArrayUtil;
    }, function (_unresolved_4) {
      IteratorFactory = _unresolved_4.IteratorFactory;
    }, function (_unresolved_5) {
      List = _unresolved_5.List;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e9fa28FVtG1JuaBqO49nwj", "BinaryBufferWriter", undefined); // import { BinaryBuffer } from "./BinaryBuffer";


      // =============== 以下處理各種型別的轉換 ===============
      // TODO -- 資源回收.
      _export("DataBinaryBuffer", DataBinaryBuffer = class DataBinaryBuffer {
        constructor(compositor) {
          this.m_Compositor = null;
          this.m_Compositor = compositor;
        }

        getSize() {
          return this.m_Compositor.getSize();
        }

        writeTo(dataView, iOffset) {
          this.m_Compositor.writeTo(dataView, iOffset);
          return this.m_Compositor.getSize();
        }

      });

      _export("DataByteArray", DataByteArray = class DataByteArray {
        constructor(arbtArray) {
          this.m_arbtArray = null;
          this.m_arbtArray = arbtArray;
        }

        getSize() {
          return this.m_arbtArray.length;
        }

        writeTo(dataView, iOffset) {
          var iLength = this.m_arbtArray.length;

          for (var i = 0; i < iLength; ++i) {
            dataView.setUint8(iOffset + i, this.m_arbtArray[i]);
          }

          return this.m_arbtArray.length;
        }

      });

      _export("DataLittleEndianBytes", DataLittleEndianBytes = class DataLittleEndianBytes {
        constructor(nValue, iDigits) {
          this.m_nValue = 0;
          this.m_iDigits = 0;
          this.m_nValue = nValue;
          this.m_iDigits = iDigits;
        }

        getSize() {
          return this.m_iDigits;
        }

        writeTo(dataView, iOffset) {
          // 低位元在前.
          var iValue = this.m_nValue;

          for (var i = this.m_iDigits - 1; i >= 0; --i) {
            dataView.setUint8(iOffset + this.m_iDigits - i - 1, iValue & 0xff);
            iValue >>= 8;
          }

          return this.m_iDigits;
        }

      });

      _export("DataBytes", DataBytes = class DataBytes {
        constructor(nValue, iDigits) {
          this.m_nValue = 0;
          this.m_iDigits = 0;
          this.m_nValue = nValue;
          this.m_iDigits = iDigits;
        }

        getSize() {
          return this.m_iDigits;
        }

        writeTo(dataView, iOffset) {
          // 傳給server時, 高位元在前.
          var iValue = this.m_nValue;

          for (var i = this.m_iDigits - 1; i >= 0; --i) {
            dataView.setUint8(iOffset + i, iValue & 0xff);
            iValue >>= 8;
          }

          return this.m_iDigits;
        }

      });

      _export("Data8Bytes", Data8Bytes = class Data8Bytes extends DataBytes {
        constructor(iValue, useLittleEndian) {
          if (useLittleEndian === void 0) {
            useLittleEndian = true;
          }

          super(iValue, 8);
          this.m_UseLittleEndian = true;
          this.m_UseLittleEndian = useLittleEndian;
        } // float64 . 沒有long型態, 儲存long資料精度會跑掉.


        writeTo(dataView, iOffset) {
          dataView.setFloat64(iOffset, this.m_nValue, this.m_UseLittleEndian);
          return this.m_iDigits;
        }

      });

      _export("Data4Bytes", Data4Bytes = class Data4Bytes extends DataBytes {
        constructor(iValue) {
          super(iValue, 4);
        }

        writeTo(dataView, iOffset) {
          dataView.setUint32(iOffset, this.m_nValue, false); // big endian.

          return this.m_iDigits;
        }

      });

      _export("Data2Bytes", Data2Bytes = class Data2Bytes extends DataBytes {
        constructor(iValue) {
          super(iValue, 2);
        }

        writeTo(dataView, iOffset) {
          dataView.setUint16(iOffset, this.m_nValue, false); // big endian.

          return this.m_iDigits;
        }

      });

      _export("DataFloat32", DataFloat32 = class DataFloat32 extends DataBytes {
        constructor(iValue) {
          super(iValue, 4);
        }

        writeTo(dataView, iOffset) {
          dataView.setFloat32(iOffset, this.m_nValue, false); // big endian.

          return this.m_iDigits;
        }

      });

      _export("DataString", DataString = class DataString {
        constructor(szValue, bWithLength) {
          if (bWithLength === void 0) {
            bWithLength = true;
          }

          //private m_utf8: any[] = null;		
          this.m_utf8 = null;
          // 這邊是utf-8字串.
          this.m_bWithLength = true;
          this.m_utf8 = unescape(encodeURI(szValue)); // 轉utf8字串.
          //this.m_utf8 = UtilString.toUTF8Array(szValue);	

          this.m_bWithLength = bWithLength;
        }

        getSize() {
          return this.m_utf8.length + (this.m_bWithLength ? (_crd && NetConst === void 0 ? (_reportPossibleCrUseOfNetConst({
            error: Error()
          }), NetConst) : NetConst).SAVE_BITS_STRING : 0);
        }

        writeTo(dataView, iOffset) {
          var iStringLength = this.m_utf8.length;

          if (this.m_bWithLength) {
            dataView.setUint16(iOffset, iStringLength, false);
            iOffset += (_crd && NetConst === void 0 ? (_reportPossibleCrUseOfNetConst({
              error: Error()
            }), NetConst) : NetConst).SAVE_BITS_STRING;
          }

          for (var i = 0; i < iStringLength; i++) {
            //dataView.setUint8(iOffset + i, this.m_utf8[i]);
            dataView.setUint8(iOffset + i, this.m_utf8.charCodeAt(i));
          } //Log.warning("長度:" + iStringLength.toString());


          return this.getSize();
        }

      });

      _export("DataString_MegaSize", DataString_MegaSize = class DataString_MegaSize {
        constructor(szValue, bWithLength) {
          if (bWithLength === void 0) {
            bWithLength = true;
          }

          //private m_utf8: any[] = null;
          this.m_utf8 = null;
          // 這邊是utf-8字串.
          this.m_bWithLength = true;
          this.m_utf8 = unescape(encodeURI(szValue)); //this.m_utf8 = UtilString.toUTF8Array(szValue);	

          this.m_bWithLength = bWithLength;
        }

        getSize() {
          return this.m_utf8.length + (this.m_bWithLength ? (_crd && NetConst === void 0 ? (_reportPossibleCrUseOfNetConst({
            error: Error()
          }), NetConst) : NetConst).SAVE_BITS_STRING : 0);
        }

        writeTo(dataView, iOffset) {
          // 傳給server時, 高位元在前.
          var iStringLength = this.m_utf8.length;

          if (this.m_bWithLength) {
            var iValue = iStringLength;

            for (var _i = (_crd && NetConst === void 0 ? (_reportPossibleCrUseOfNetConst({
              error: Error()
            }), NetConst) : NetConst).SAVE_BITS_MEGA_STRING - 1; _i >= 0; --_i) {
              // 3 bytes紀錄長度.
              dataView.setUint8(iOffset + _i, iValue & 0xff);
              iValue >>= 8;
            }

            iOffset += (_crd && NetConst === void 0 ? (_reportPossibleCrUseOfNetConst({
              error: Error()
            }), NetConst) : NetConst).SAVE_BITS_MEGA_STRING;
          } // 紀錄文字.


          for (var i = 0; i < iStringLength; i++) {
            //dataView.setUint8(iOffset + i, this.m_utf8[i]);
            dataView.setUint8(iOffset + i, this.m_utf8.charCodeAt(i));
          }

          return this.getSize();
        }

      });
      /**
       * 字串以UTF-16編碼方式轉換成bytes
       */


      _export("DataString16", DataString16 = class DataString16 {
        constructor(szValue, bWithLength) {
          if (bWithLength === void 0) {
            bWithLength = true;
          }

          this.m_szValue = null;
          this.m_utf16 = null;
          this.m_bWithLength = true;
          this.m_szValue = szValue;
          this.m_utf16 = (_crd && ArrayUtil === void 0 ? (_reportPossibleCrUseOfArrayUtil({
            error: Error()
          }), ArrayUtil) : ArrayUtil).convertStringToUtf16Array(this.m_szValue);
          this.m_bWithLength = bWithLength;
        }

        getSize() {
          return this.m_utf16.length + (this.m_bWithLength ? (_crd && NetConst === void 0 ? (_reportPossibleCrUseOfNetConst({
            error: Error()
          }), NetConst) : NetConst).SAVE_BITS_STRING : 0);
        }

        writeTo(dataView, iOffset) {
          var iLength = this.m_utf16.length;

          if (this.m_bWithLength) {
            dataView.setUint16(iOffset, iLength, false);
            iOffset += (_crd && NetConst === void 0 ? (_reportPossibleCrUseOfNetConst({
              error: Error()
            }), NetConst) : NetConst).SAVE_BITS_STRING;
          }

          for (var i = 0; i < this.m_utf16.length; i++) {
            dataView.setUint8(iOffset + i, this.m_utf16[i]);
          } // Log.warning("長度:" + this.m_utf16.length);


          return this.getSize();
        }

      });

      _export("DataLong", DataLong = class DataLong {
        constructor(lValue, iDigits) {
          this.m_lValue = null;
          this.m_iDigits = 8;
          this.m_iDigits = !iDigits || iDigits < 0 || iDigits >= this.m_iDigits ? this.m_iDigits : iDigits;
          this.m_lValue = lValue; // Log.info("DataLong => " + lValue.toString(10));
        }

        getSize() {
          return this.m_iDigits;
        }

        writeTo(dataView, iOffset) {
          // 傳給server時, 高位元在前.
          var iValue = null;

          for (var i = this.m_iDigits - 1; i >= 0; --i) {
            iValue = this.m_lValue.shiftRight(8 * i).and(0xff).toNumber(); // iValue = this.m_lValue.div(Math.pow(2, (8 * i))).toNumber();

            dataView.setUint8(iOffset + i, iValue); // Log.info("DataLong pos: " + i + " => " + dataView.getUint8(iOffset + i));
          }

          return this.m_iDigits;
        }

      });

      _export("DataLongByBig", DataLongByBig = class DataLongByBig {
        constructor(lValue, iDigits) {
          this.m_lValue = null;
          this.m_iDigits = 8;
          this.m_iDigits = !iDigits || iDigits < 0 || iDigits >= this.m_iDigits ? this.m_iDigits : iDigits;
          this.m_lValue = lValue; // xsh5core.Log.info("DataLong => " + lValue.toString(10));
        }

        getSize() {
          return this.m_iDigits;
        }

        writeTo(dataView, iOffset) {
          // 傳給server時, 高位元在前.
          var iValue = null;
          var move = 0;

          for (var i = this.m_iDigits - 1; i >= 0; --i) {
            iValue = this.m_lValue.shiftRight(8 * i).and(0xff).toNumber(); // iValue = this.m_lValue.div(Math.pow(2, (8 * i))).toNumber();

            dataView.setUint8(iOffset + move, iValue);
            move++; // xsh5core.Log.info("DataLong pos: " + i + " => " + dataView.getUint8(iOffset + i));
          }

          return this.m_iDigits;
        }

      });
      /*
      export class UtilString {
      	public static toUTF8Array(str) { 
      		var utf8 = []; 
      		for (var i=0; i < str.length; i++) { 
      			var charcode = str.charCodeAt(i); 
      			if (charcode < 0x80) utf8.push(charcode); 
      			else if (charcode < 0x800) { 
      				utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f)); 
      			} 
      			else if (charcode < 0xd800 || charcode >= 0xe000) { 
      				utf8.push(0xe0 | (charcode >> 12), 0x80 | ((charcode>>6) & 0x3f), 0x80 | (charcode & 0x3f)); 
      			}
      			else { 
      				i++; 
      				// UTF-16 encodes 0x10000-0x10FFFF by 
      				// subtracting 0x10000 and splitting the 
      				// 20 bits of 0x0-0xFFFFF into two halves 
      				charcode = 0x10000 + (((charcode & 0x3ff)<<10) | (str.charCodeAt(i) & 0x3ff));
      				utf8.push(0xf0 | (charcode >>18), 
      					0x80 | ((charcode>>12) & 0x3f),  
      					0x80 | ((charcode>>6) & 0x3f),  
      					0x80 | (charcode & 0x3f));
      			} 
      		} 
      		return utf8; 
      	}  
      }	
      */

      /** 
       * 把資料寫入二進位Buffer用.
      */


      _export("BinaryBufferWriter", BinaryBufferWriter = class BinaryBufferWriter {
        constructor() {
          this.m_listData = new (_crd && List === void 0 ? (_reportPossibleCrUseOfList({
            error: Error()
          }), List) : List)();
        }

        addString(szValue, bWithLength) {
          if (bWithLength === void 0) {
            bWithLength = true;
          }

          this.m_listData.add(new DataString(szValue.toString(), bWithLength));
        }

        addString_MegaSize(szValue, bWithLength) {
          if (bWithLength === void 0) {
            bWithLength = true;
          }

          this.m_listData.add(new DataString_MegaSize(szValue.toString(), bWithLength));
        }
        /**
         * 字串以UTF-16編碼方式轉換成bytes，再寫入Buffer
         * @param szValue 
         * @param bWithLength 是否寫入字串長度
         */


        addString16(szValue, bWithLength) {
          if (bWithLength === void 0) {
            bWithLength = true;
          }

          this.m_listData.add(new DataString16(szValue.toString(), bWithLength));
        }

        addInt8(btValue) {
          this.m_listData.add(new DataBytes(btValue, 1));
        }

        addInt16(sValue) {
          this.m_listData.add(new Data2Bytes(sValue));
        } //寫入little位


        addInt32ByLittle(inValue) {
          this.m_listData.add(new DataLittleEndianBytes(inValue, 4));
        }

        addInt32(iValue) {
          this.m_listData.add(new Data4Bytes(iValue));
        }

        addFloat32(fValue) {
          this.m_listData.add(new DataFloat32(fValue));
        }

        addFloat64(lValue, useLittleEndian) {
          if (useLittleEndian === void 0) {
            useLittleEndian = true;
          }

          this.m_listData.add(new Data8Bytes(lValue, useLittleEndian));
        }
        /** 在指定index插入內容,
         * iDigits: index,
         * iValue: 內容
         */


        addPositiveNumber(iValue, iDigits) {
          this.m_listData.add(new DataBytes(iValue, iDigits));
        }

        addLong(lValue) {
          this.m_listData.add(new DataLong(lValue));
        }

        addLongByBig(lValue) {
          this.m_listData.add(new DataLongByBig(lValue));
        }

        addPositiveLong(lValue, iDigits) {
          this.m_listData.add(new DataLong(lValue, iDigits));
        } // 加入byte array (每個number代表一個byte).


        addByteNumberArray(arbtArray) {
          this.m_listData.add(new DataByteArray(arbtArray));
        } // 平常不會用.


        addPositiveNumberLittleEndian(iValue, iDigits) {
          this.m_listData.add(new DataLittleEndianBytes(iValue, iDigits));
        }

        insertBufferWriter(target) {
          this.m_listData.insert(new DataBinaryBuffer(target));
        }

        insertInt8(btValue) {
          this.m_listData.insert(new DataBytes(btValue, 1));
        }

        insertInt16(sValue) {
          this.m_listData.insert(new Data2Bytes(sValue));
        }

        insertInt32(iValue) {
          this.m_listData.insert(new Data4Bytes(iValue));
        }

        insertNumber(iValue, iDigits) {
          this.m_listData.insert(new DataBytes(iValue, iDigits));
        }

        insertFloat64(lValue, useLittleEndian) {
          if (useLittleEndian === void 0) {
            useLittleEndian = true;
          }

          this.m_listData.insert(new Data8Bytes(lValue, useLittleEndian));
        }

        addBufferWriter(target) {
          this.m_listData.add(new DataBinaryBuffer(target));
        }

        toArrayBuffer() {
          var iBufferSize = this.getSize();
          var arrayBuffer = new ArrayBuffer(iBufferSize);
          var dataView = new DataView(arrayBuffer, 0);
          var iter = (_crd && IteratorFactory === void 0 ? (_reportPossibleCrUseOfIteratorFactory({
            error: Error()
          }), IteratorFactory) : IteratorFactory).createListIterator(this.m_listData);
          var data = iter.getFirst();
          var iOffset = 0; // 寫入內容.

          while (data) {
            iOffset += data.writeTo(dataView, iOffset);
            data = iter.getNext();
          }

          return arrayBuffer;
        }
        /**
         * 轉成ArrayBuffer, 並在前面加上3 bytes封包大小資訊.
         */


        toArrayBufferWithSize() {
          var iPacketSize = this.getSize();
          var iBufferSize = iPacketSize + (_crd && NetConst === void 0 ? (_reportPossibleCrUseOfNetConst({
            error: Error()
          }), NetConst) : NetConst).HEADER_SIZE;
          var arrayBuffer = new ArrayBuffer(iBufferSize);
          var dataView = new DataView(arrayBuffer, 0);
          var iter = (_crd && IteratorFactory === void 0 ? (_reportPossibleCrUseOfIteratorFactory({
            error: Error()
          }), IteratorFactory) : IteratorFactory).createListIterator(this.m_listData);
          var data = iter.getFirst();
          var iOffset = 0; // 寫入表頭.

          var headerData = new DataBytes(iPacketSize, (_crd && NetConst === void 0 ? (_reportPossibleCrUseOfNetConst({
            error: Error()
          }), NetConst) : NetConst).HEADER_SIZE);
          iOffset += headerData.writeTo(dataView, iOffset); // 寫入內容.

          while (data) {
            iOffset += data.writeTo(dataView, iOffset);
            data = iter.getNext();
          }

          return arrayBuffer;
        }

        getSize() {
          var iter = this.m_listData.getIterator();
          var data = iter.getFirst();
          var iSize = 0;

          while (data) {
            iSize += data.getSize();
            data = iter.getNext(); // Log.info(" " + (<any>data).constructor.name + " > " + data.getSize());
          }

          return iSize;
        }

        writeTo(dataView, iOffset) {
          var iter = this.m_listData.getIterator();
          var data = iter.getFirst();

          while (data) {
            iOffset += data.writeTo(dataView, iOffset);
            data = iter.getNext();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1367111ae5dee05d1a852139f59e6e78afdc30d7.js.map
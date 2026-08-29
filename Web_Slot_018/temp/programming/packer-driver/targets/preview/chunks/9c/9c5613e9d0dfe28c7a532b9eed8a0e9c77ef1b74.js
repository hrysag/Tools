System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CConnectLog, ByteWriterHelper, ByteReaderHelper, _crd, DataSize;

  function _reportPossibleCrUseOfCConnectLog(extras) {
    _reporterNs.report("CConnectLog", "./CConnectLog", _context.meta, extras);
  }

  _export({
    ByteWriterHelper: void 0,
    ByteReaderHelper: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      CConnectLog = _unresolved_2.CConnectLog;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7d316epI1JKwqvJr6ELtTKL", "ByteArray", undefined);

      _export("DataSize", DataSize = /*#__PURE__*/function (DataSize) {
        DataSize[DataSize["Byte"] = 1] = "Byte";
        DataSize[DataSize["Int"] = 4] = "Int";
        DataSize[DataSize["DoubleAndLong"] = 8] = "DoubleAndLong";
        return DataSize;
      }({}));

      _export("ByteWriterHelper", ByteWriterHelper = class ByteWriterHelper {
        constructor(size) {
          if (size === void 0) {
            size = 1;
          }

          this.buffer = void 0;
          this._currentPosition = void 0;
          this.buffer = new Uint8Array(new ArrayBuffer(size));
          this._currentPosition = 0;
        }

        get Buffer() {
          return this.buffer;
        }

        get Position() {
          return this._currentPosition;
        }

        set Position(value) {
          if (value < 0 || value > this.buffer.length) {
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.ErrorLog("ByteWriterHelper Out of range");
            return;
          }

          this._currentPosition = value;
        } //動態拓展 buffer


        DynamicExpand(size) {
          var newBuffer = new Uint8Array(new ArrayBuffer(this.buffer.length + size));
          newBuffer.set(this.buffer);
          this.buffer = newBuffer;
        }

        WriteByte(value) {
          if (this.Position + DataSize.Byte > this.buffer.length) {
            this.DynamicExpand(this.Position + DataSize.Byte - this.buffer.length);
          }

          this.buffer[this.Position] = value;
          this.Position += DataSize.Byte;
        }

        WriteBytes(value) {
          if (this.Position + value.length > this.buffer.length) {
            this.DynamicExpand(this.Position + value.length - this.buffer.length);
          }

          this.buffer.set(value, this.Position);
          this.Position += value.length;
        }

        WriteInt(value) {
          if (this.Position + DataSize.Int > this.buffer.length) {
            this.DynamicExpand(this.Position + DataSize.Int - this.buffer.length);
          }

          this.buffer[this.Position] = value >> 24 & 0xFF;
          this.buffer[this.Position + 1] = value >> 16 & 0xFF;
          this.buffer[this.Position + 2] = value >> 8 & 0xFF;
          this.buffer[this.Position + 3] = value & 0xFF;
          this.Position += DataSize.Int;
        }

        static ConvertToIntByte(value, count) {
          var buffer = new ArrayBuffer(count);
          var bufferView = new Uint8Array(buffer);

          for (var x = 0; x < count; x++) {
            bufferView[x] = value >> 8 * (count - x - 1) & 0xFF;
          }

          return bufferView;
        }

        static ConvertToInt16(value, isBigEndian) {
          if (isBigEndian === void 0) {
            isBigEndian = false;
          }

          var buffer = new ArrayBuffer(2); // 2 bytes for int16

          var view = new DataView(buffer);
          view.setInt16(0, value, isBigEndian); // false 表示 big-endian, true 表示 little-endian

          return new Uint8Array(buffer);
        }

        static CopyBytes(source, copyIndex, length) {
          var buffer = new ArrayBuffer(length);
          var bufferView = new Uint8Array(buffer);

          for (var x = copyIndex; x < source.length; x++) {
            bufferView[x - copyIndex] = source[x];
          }

          return bufferView;
        }

        static ConvertToUnicodeStringByte(value) {
          var bt = new ByteWriterHelper();
          var buffer = new ArrayBuffer(value.length * 2);
          var view = new Uint16Array(buffer);

          for (var i = 0; i < value.length; i++) {
            // 將字符的 Unicode 編碼存入 Uint16Array
            view[i] = value.charCodeAt(i);
          } //跟著放大


          bt.WriteBytes(ByteWriterHelper.ConvertToIntByte(view.length * 2, 2));
          bt.WriteBytes(new Uint8Array(buffer));
          return bt.buffer;
        }

        static ConvertToStringByte(str) {
          //default 使用 UTF-8 編碼
          var encoder = new TextEncoder();
          var bt = new ByteWriterHelper();
          bt.WriteBytes(ByteWriterHelper.ConvertToIntByte(encoder.encode(str).length, 2));
          bt.WriteBytes(encoder.encode(str));
          return bt.buffer;
        }

        static ConvertToDoubleByte(value) {
          var buffer = new ArrayBuffer(DataSize.DoubleAndLong);
          var view = new DataView(buffer);
          view.setFloat64(0, value, true); // True 表示 little-endian

          return new Uint8Array(buffer);
        }

      });

      _export("ByteReaderHelper", ByteReaderHelper = class ByteReaderHelper extends Uint8Array {
        constructor(buffer) {
          super(buffer);
          //目前的資料 Position
          this._currentPosition = void 0;
          this._currentPosition = 0;
        }

        get Position() {
          return this._currentPosition;
        }

        set Position(value) {
          if (value < 0 || value > this.length) {
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.ErrorLog("ByteReaderHelper Out of range");
            return;
          }

          this._currentPosition = value;
        }

        ReadByte() {
          if (this.Position > this.length) {
            //超過長度存取
            return 0;
          }

          var value = this[this.Position];
          this._currentPosition += DataSize.Byte;
          return value;
        }

        ReadStringByUnicode(length) {
          var buffer = new Uint16Array(length / 2);
          var result = '';

          for (var i = 0; i < length; i += 2) {
            buffer[i / 2] = this[this.Position] | this[this.Position + 1] << 8;
            this.Position += 2;
          } //decode


          result = String.fromCharCode.apply(null, buffer);
          return result;
        }

        ReadString() {
          //先取得字串長度
          var nameLength = this.ReadInt(2);
          return this.ReadStringByUnicode(nameLength);
        }

        ReadLongString() {
          //先取得字串長度
          var nameLength = this.ReadInt(3);
          return this.ReadStringByUnicode(nameLength);
        }

        ReadStringArray() {
          var length = this.ReadByte();
          var restringArray = [];

          for (var x = 0; x < length; x++) {
            restringArray.push(this.ReadString());
          }

          return restringArray;
        }

        ReadDouble() {
          var value = 0;

          if (this.Position > this.length) {
            //超過長度存取
            return value;
          }

          var readByte = this.slice(this.Position, this.Position + DataSize.DoubleAndLong);
          var buffer = new ArrayBuffer(DataSize.DoubleAndLong);
          var view = new DataView(buffer); // 將每個 byte 放入 DataView 中

          for (var i = 0; i < readByte.length; i++) {
            view.setUint8(i, readByte[i]);
          } //True 表示 little-endian


          value = view.getFloat64(0, true);
          this._currentPosition += DataSize.DoubleAndLong;
          return value;
        }

        ReadDoubleArray() {
          var value = [];
          var length = this.ReadInt(3);

          for (var i = 0; i < length; i++) {
            value.push(this.ReadDouble());
          }

          this._currentPosition += length;
          return value;
        }

        ReadInt(count) {
          var value = 0;

          if (this.Position > this.length || count && count > this.length) {
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.ErrorLog("ByteReaderHelper Out of range");
            return value;
          } //讀取指定數量的 byte 組成的 int


          while (count > 0) {
            value <<= 8;
            value += this.ReadByte();
            count--;
          }

          return value;
        }

        ReadLong() {
          var value = 0;

          if (this.Position > this.length || this.Position + DataSize.DoubleAndLong > this.length) {
            (_crd && CConnectLog === void 0 ? (_reportPossibleCrUseOfCConnectLog({
              error: Error()
            }), CConnectLog) : CConnectLog).Instance.ErrorLog("ByteReaderHelper Out of range");
            return value;
          }

          var byte = this.slice(this.Position, this.Position + DataSize.DoubleAndLong);
          var dataView = new DataView(byte.buffer);
          var number = dataView.getUint32(0, true);
          this._currentPosition += DataSize.DoubleAndLong;
          return number;
        }

        ReadByteIncludeLength() {
          var length = this.ReadInt(2);
          var value = this.slice(this.Position, this.Position + length);
          this.Position += length;
          return value;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9c5613e9d0dfe28c7a532b9eed8a0e9c77ef1b74.js.map
System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HalfByte_IntArray, IntArray, SizeBegin_IntArray, _crd;

  function _reportPossibleCrUseOfBinaryBuffer(extras) {
    _reporterNs.report("BinaryBuffer", "../Communication/BinaryBuffer", _context.meta, extras);
  }

  _export({
    HalfByte_IntArray: void 0,
    IntArray: void 0,
    SizeBegin_IntArray: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4592eJ5kkFPP4msBof5NSSr", "BinaryBufferParser", undefined);

      _export("HalfByte_IntArray", HalfByte_IntArray = class HalfByte_IntArray {
        constructor(byteSize) {
          this.byteSize = 0;
          this.value = [];
          this.byteSize = byteSize;
        }

        Parse(buffer) {
          this.value = buffer.getBytesArrayAndUnzip(this.byteSize);
        }

      });

      _export("IntArray", IntArray = class IntArray {
        constructor() {
          this.value = [];
        }

        Parse(buffer, amount) {
          for (let i = 0; i < amount; i++) {
            this.value.push(buffer.getByte()[1]);
          }
        }

      });

      _export("SizeBegin_IntArray", SizeBegin_IntArray = class SizeBegin_IntArray {
        constructor() {
          this.value = [];
        }

        Parse(buffer) {
          this.value = buffer.getBytesArray_WithLength();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=64b5dc9e44871c04abf0acc16ef52ec478e04714.js.map
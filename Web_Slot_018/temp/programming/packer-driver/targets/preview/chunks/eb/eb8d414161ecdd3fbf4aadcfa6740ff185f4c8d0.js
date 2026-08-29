System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ArrayUtil, _crd;

  _export("ArrayUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85535BPvJNDILE8eKFhCMpu", "ArrayUtil", undefined);

      /**
      * Array工具
      */
      _export("ArrayUtil", ArrayUtil = class ArrayUtil {
        // 

        /**
         * 將陣列轉成正整數. 
         * @param arbtNumber 每個number代表一個byte, 以BigEndian排列.
         * @return number 正整數, 如果發生溢位則傳回0.
         */
        static convertArrayToNumber(arbtNumber) {
          if (!arbtNumber) return 0;
          var iLength = arbtNumber.length;
          var nValue = 0;

          try {
            for (var i = 0; i < iLength; ++i) {
              nValue += arbtNumber[i] << 8 * (iLength - i - 1);
            }
          } catch (error) {
            nValue = 0;
          }

          return nValue;
        }
        /**
         * 將正整數轉成number陣列.
         * @param nValue 要轉換的數字, 須為正整數.
         * @param iDigits 處理幾位數
         * @return number[] 轉換的結果, 陣列大小等於iDigits, 每個number存放一個byte的資料.
         */
        // 


        static convertNumberToArray(nValue, iDigits) {
          if (iDigits <= 0) {
            return null;
          }

          var arbtNumber = [];

          for (var i = 0; i < iDigits; ++i) {
            arbtNumber[i] = nValue >> 8 * (iDigits - i - 1) & 0xff;
          }

          return arbtNumber;
        }
        /**
         * 將字串的字碼以number陣列的形式傳回. 
         * @param szData 
         * @return number[] 每2個number代表一個utf16的字元. (LittleEndian)
         */


        static convertStringToUtf16Array(szData) {
          var aruiArray = [];
          var iLength = szData.length; // TODO: test 是字數?

          var iCharCode = 0;

          for (var i = 0; i < iLength; ++i) {
            iCharCode = szData.charCodeAt(i);
            aruiArray[2 * i] = iCharCode & 0xff;
            aruiArray[2 * i + 1] = iCharCode >> 8 & 0xff;
          }

          return aruiArray;
        }
        /**
         * 將utf-16陣列轉成字串.
         * @param arbtArray 每2個number代表一個utf16的字元. (LittleEndian)
         * @return string 失敗傳回空字串.
         */


        static convertUtf16ArrayToString(arbtArray) {
          if (null == arbtArray) {
            return "";
          }

          var iLength = arbtArray.length / 2; // TODO: test 是字數?

          var aruiCharCode = [];

          for (var i = 0; i < iLength; ++i) {
            // aruiCharCode[i] = arbtArray[i * 2] + (arbtArray[i * 2 + 1] << 8);
            aruiCharCode[i] = String.fromCharCode(arbtArray[i * 2] + (arbtArray[i * 2 + 1] << 8));
          }

          return aruiCharCode.join(""); //2021-02-26改用join，不然會爆掉
          // return String.fromCharCode.apply(null, aruiCharCode);
        } // // 將整數轉成iDigits個byte, 高位元在前.
        // public static numberToBytes(iValue: number, iDigits: number): Uint8Array {
        // 	if (iDigits <= 0) {
        // 		return null;
        // 	}
        // 	let arbtData: Uint8Array = new Uint8Array[iDigits];
        // 	// 傳給server時, 高位元在前.
        // 	for (let i = iDigits - 1; i >= 0; --i) {
        // 		arbtData[i] = iValue & 0xff;
        // 		iValue >>= 8;
        // 	}
        // 	return arbtData;
        // }
        // // 合併兩個byte array.
        // public static merge(arbtData1: Uint8Array, arbtData2: Uint8Array): Uint8Array {
        // 	let iLength1: number = 0;
        // 	let iLength2: number = 0;
        // 	if (arbtData1) {
        // 		iLength1 = arbtData1.length;
        // 	}
        // 	if (arbtData2) {
        // 		iLength2 = arbtData2.length;
        // 	}
        // 	if (0 == (iLength1 + iLength2)) {
        // 		return null;
        // 	}
        // 	let arbtMerge: Uint8Array = new Uint8Array[iLength1 + iLength2];
        // 	if (iLength1 > 0) {
        // 		arbtMerge.set(arbtData1);
        // 	}
        // 	if (iLength2 > 0) {
        // 		arbtMerge.set(arbtData2, iLength1);
        // 	}
        // 	return arbtMerge;
        // }
        // // 複製byte array.
        // public static duplicate(arbtSource: Uint8Array): Uint8Array {
        // 	if (arbtSource) {
        // 		return null;
        // 	}
        // 	let arbtDuplicate: Uint8Array = new Uint8Array[arbtSource.length];
        // 	arbtDuplicate.set(arbtSource);
        // 	return arbtDuplicate;
        // }
        // // 在陣列後端添加一個數字.
        // public static append(arbtData: Uint8Array, btData: number): Uint8Array {
        // 	return ArrayUtil.merge(arbtData, new Uint8Array[(btData)]);
        // }
        // // 在陣列前端插入一個數字.
        // public static insertFirst(btData: number, arbtData: Uint8Array): Uint8Array {
        // 	return ArrayUtil.merge(new Uint8Array[(btData)], arbtData);
        // }

        /**
         * 數字陣列重新排序(小至大)
         * @param array 
         */


        static sortNumAsce(array) {
          array.sort((a, b) => a - b);
        }
        /**
         * 數字陣列重新排序(大至小)
         * @param array 
         */


        static sortNumDesc(array) {
          array.sort((a, b) => b - a);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eb8d414161ecdd3fbf4aadcfa6740ff185f4c8d0.js.map
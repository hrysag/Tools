System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Utility, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ScreenShotTool;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "db://assets/Scripts/Utils/Utility", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Utility = _unresolved_2.Utility;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "713c58imWtGMJdT1ljoiO8u", "ScreenShotTool", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScreenShotTool", ScreenShotTool = (_dec = ccclass('ScreenShotTool'), _dec2 = property(Node), _dec(_class = (_class2 = class ScreenShotTool extends Component {
        constructor() {
          super(...arguments);
          this.isLeftCtrlDown = false;

          _initializerDefineProperty(this, "printBtn", _descriptor, this);
        }

        start() {// input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          // input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        onPrintBtnClick() {
          this.printBtn.active = false;
          this.scheduleOnce(() => {
            (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).screenShot().then(dataURL => {
              this.printBtn.active = true;
              this.saveDataURLAsPNG(dataURL, 'screenshot.png');
            });
          }, 0.001);
        }

        saveDataURLAsPNG(dataURL, filename) {
          // 下載圖片
          // 创建一个链接元素
          var link = document.createElement('a'); // 设置下载文件的名称和Base64 URL

          link.download = filename || "download.png";
          link.href = dataURL; // 模拟点击链接以触发下载

          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(link.href);
        }
        /*
            private saveDataURLAsPNG(dataURL, filename) {
                // 解析 dataURL，轉換為 Blob
                const byteString = atob(dataURL.split(',')[1]); // 取得 base64 編碼的部分
                const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0]; // 取得 MIME 類型
        
                // 建立 ArrayBuffer 並填入數據
                const arrayBuffer = new ArrayBuffer(byteString.length);
                const uint8Array = new Uint8Array(arrayBuffer);
        
                for (let i = 0; i < byteString.length; i++) {
                    uint8Array[i] = byteString.charCodeAt(i);
                }
        
                // 建立 Blob
                const blob = new Blob([uint8Array], { type: mimeString });
        
                // 產生下載連結
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = filename || "download.png";
        
                // 觸發下載
                document.body.appendChild(link);
                link.click();
        
                // 清理 DOM
                document.body.removeChild(link);
                URL.revokeObjectURL(link.href);
            }
        */

        /*
            private onKeyDown(event: EventKeyboard) {
                if (event.keyCode === KeyCode.CTRL_LEFT) {
                    this.isLeftCtrlDown = true;
                }
                else if (this.isLeftCtrlDown && event.keyCode === KeyCode.KEY_P) {
                    if (this.isLeftCtrlDown) {
                        Utility.screenShot()
                            .then((dataURL: string) => {
                                // 下載圖片
                                // 创建一个链接元素
                                var link = document.createElement('a');
                                // 设置下载文件的名称和Base64 URL
                                link.download = 'screenshot.png';
                                link.href = dataURL;
                                // 模拟点击链接以触发下载
                                link.click();
                            });
                    }
                }
            }
        
            private onKeyUp(event: EventKeyboard) {
                if (event.keyCode === KeyCode.CTRL_LEFT) {
                    this.isLeftCtrlDown = false;
                }
            }
            */


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "printBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=45889d88b079b501cba3f6ad2e7cb13180eb3bc3.js.map
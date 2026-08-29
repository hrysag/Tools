System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCBoolean, Node, ResizeStateList, ResizeHandler, IWindowResize, Orientation, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, MultiWindowResize;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfResizeStateList(extras) {
    _reporterNs.report("ResizeStateList", "../Definitions/BasicResizeState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResizeHandler(extras) {
    _reporterNs.report("ResizeHandler", "./ResizeHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWindowResize(extras) {
    _reporterNs.report("IWindowResize", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "db://assets/Scripts/ModuleEntry", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCBoolean = _cc.CCBoolean;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ResizeStateList = _unresolved_2.ResizeStateList;
    }, function (_unresolved_3) {
      ResizeHandler = _unresolved_3.ResizeHandler;
    }, function (_unresolved_4) {
      IWindowResize = _unresolved_4.IWindowResize;
      Orientation = _unresolved_4.Orientation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e8f6acRETRNzpA3WzSal/KW", "MultiWindowResize", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'Component', 'Node', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 很多情況下工具庫當中的resize相關component你需要同時使用到多個
       * 這個component就是讓你可以同時使用多個resize component
       * 你可以透過_resizeStateList你去依照陣列的順序自己去組合出符合你心中預期行為的resize動作
       * PS-基礎方法集合了大部分resize提供的行為模式
       * 新增模式:
       * SET_UI_TRANSFORM_CUSTOM_CONTAINER
       * 可以與你指定的容器做UITransform的同步
       * 
       */

      _export("MultiWindowResize", MultiWindowResize = (_dec = ccclass('MultiWindowResize'), _dec2 = property({
        type: _crd && ResizeStateList === void 0 ? (_reportPossibleCrUseOfResizeStateList({
          error: Error()
        }), ResizeStateList) : ResizeStateList,
        displayName: 'ResizeStateList',
        visible: true,
        tooltip: '狀態控制Resize清單'
      }), _dec3 = property(CCBoolean), _dec4 = property([Node]), _dec5 = property([Node]), _dec(_class = (_class2 = class MultiWindowResize extends (_crd && IWindowResize === void 0 ? (_reportPossibleCrUseOfIWindowResize({
        error: Error()
      }), IWindowResize) : IWindowResize) {
        constructor() {
          super();

          //--他會依照ResizeStateList的狀態來做相關的反映+組合
          _initializerDefineProperty(this, "_resizeStateList", _descriptor, this);

          _initializerDefineProperty(this, "switchChild", _descriptor2, this);

          _initializerDefineProperty(this, "landscape", _descriptor3, this);

          _initializerDefineProperty(this, "portrait", _descriptor4, this);

          this._currentOrientation = (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape;
          this._currentContainer = null;
          this._previousContainer = null;
          this._resizeHandler = new (_crd && ResizeHandler === void 0 ? (_reportPossibleCrUseOfResizeHandler({
            error: Error()
          }), ResizeHandler) : ResizeHandler)();
        }

        onWindowResize(orientation) {
          // Handle window resize logic here
          if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            this.changeToLandscape();
          } else if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait) {
            this.changeToPortrait();
          }

          this.doDefaultResizeProcess(orientation);
        } //--override it


        doDefaultResizeProcess(value) {} //--自己override..


        doChangeAnimation(target) {} //--自己override..


        doCustomProcess(target) {}

        changeToLandscape() {
          for (let i = 0; i < this.landscape.length; i += 1) {
            const landscapeNode = this.landscape[i];
            const portraitNode = this.portrait[i]; // 注意順序

            landscapeNode.active = true;
            this._currentContainer = landscapeNode;
            this._previousContainer = portraitNode;

            if (this.switchChild) {
              while (portraitNode.children.length !== 0) {
                const target = portraitNode.children[0];
                target.removeFromParent(); // 強制脫離當前 parent

                landscapeNode.addChild(target); //--有針對node做added事件的可以在這邊觸發

                this._resizeHandler.applyMultiResize(target, this._resizeStateList, landscapeNode);
              }
            }

            portraitNode.active = false;
          }
        }

        changeToPortrait() {
          for (let i = 0; i < this.landscape.length; i += 1) {
            const landscapeNode = this.landscape[i];
            const portraitNode = this.portrait[i]; // 注意順序

            portraitNode.active = true;
            this._currentContainer = portraitNode;
            this._previousContainer = landscapeNode;

            if (this.switchChild) {
              while (landscapeNode.children.length !== 0) {
                const target = landscapeNode.children[0];
                target.removeFromParent(); // 強制脫離當前 parent

                portraitNode.addChild(target); //--有針對node做added事件的可以在這邊觸發
                //this.doMultiProcessAfterResize(target);

                this._resizeHandler.applyMultiResize(target, this._resizeStateList, portraitNode);
              }
            }

            landscapeNode.active = false;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_resizeStateList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new (_crd && ResizeStateList === void 0 ? (_reportPossibleCrUseOfResizeStateList({
            error: Error()
          }), ResizeStateList) : ResizeStateList)();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "switchChild", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "landscape", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "portrait", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b2311f4ee1fd406bd233b6ce144277862e20c1f9.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, PrefabList, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, SlotMachineViewBase;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPrefabList(extras) {
    _reporterNs.report("PrefabList", "./Util/PrefabList", _context.meta, extras);
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
      PrefabList = _unresolved_2.PrefabList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c110cczPm9BrogAPS93dp6w", "SlotMachineViewBase", undefined);

      __checkObsolete__(['__private', '_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 用來管理表演的元件，icon為基礎的元件，滾輪類型可以替換
       */

      _export("SlotMachineViewBase", SlotMachineViewBase = (_dec = ccclass('SlotMachineViewBase'), _dec2 = property({
        type: Node,
        visible: true,
        tooltip: 'icon元件root'
      }), _dec3 = property({
        type: _crd && PrefabList === void 0 ? (_reportPossibleCrUseOfPrefabList({
          error: Error()
        }), PrefabList) : PrefabList,
        visible: true,
        tooltip: 'icon元件列表'
      }), _dec(_class = (_class2 = class SlotMachineViewBase extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_iconRoot", _descriptor, this);

          _initializerDefineProperty(this, "_iconPrefabList", _descriptor2, this);
        }

        get iconPrefabList() {
          return this._iconPrefabList;
        }
        /**
        * 開始滾輪表演
        * @param reelIDs 要表演的滾輪，沒有傳入預設全部滾輪表演 ex:[2,1,0]代表從2開始停，0最後停
        */


        createIcon() {
          for (var index = 0; index < this._iconPrefabList.length; index++) {
            this._iconPrefabList[index].createInstance(this._iconRoot);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_iconRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_iconPrefabList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f563aaa65bb0cab280714e0c08ee432c66b87263.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, IWindowResize, Orientation, _dec, _class, _crd, ccclass, property, LoadingPrefab;

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
    }, function (_unresolved_2) {
      IWindowResize = _unresolved_2.IWindowResize;
      Orientation = _unresolved_2.Orientation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "83dabYdhpxKVohKYk6Lbviu", "LoadingPrefab", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      //import { IWindowResize } from 'db://assets/Scripts/Utils/IWindowResize';
      //port { Orientation } from 'db://assets/Scripts/Utils/Config';
      ({
        ccclass,
        property
      } = _decorator);

      _export("LoadingPrefab", LoadingPrefab = (_dec = ccclass('LoadingPrefab'), _dec(_class = class LoadingPrefab extends (_crd && IWindowResize === void 0 ? (_reportPossibleCrUseOfIWindowResize({
        error: Error()
      }), IWindowResize) : IWindowResize) {
        onWindowResize(orientation) {
          if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Landscape) {
            // Handle landscape orientation
            this.node.setPosition(0, 61, 0);
          } else if (orientation === (_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
            error: Error()
          }), Orientation) : Orientation).Portrait) {
            // Handle portrait orientation
            this.node.setPosition(0, 92, 0);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=028087a31c5467500aa0ab4b88961223c5ddaffe.js.map
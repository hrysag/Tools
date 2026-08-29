System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AnimationController, SpineController, MultiSpineController, CustomAnimationController, BasicPoolObject, FindComponent, AniSysTools, _crd;

  function _reportPossibleCrUseOfAnimationController(extras) {
    _reporterNs.report("AnimationController", "../Components/AnimationController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "../Components/SpineController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMultiSpineController(extras) {
    _reporterNs.report("MultiSpineController", "../ReferencePathForAnimationSysV2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCustomAnimationController(extras) {
    _reporterNs.report("CustomAnimationController", "../Components/CustomAnimationController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIBasicPoolObject(extras) {
    _reporterNs.report("IBasicPoolObject", "../../ObjectPoolManager/Definitions/IBasicPoolObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBasicPoolObject(extras) {
    _reporterNs.report("BasicPoolObject", "../../ObjectPoolManager/Compoents/BasicPoolObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFindComponent(extras) {
    _reporterNs.report("FindComponent", "../../FindComponent", _context.meta, extras);
  }

  _export("AniSysTools", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      AnimationController = _unresolved_2.AnimationController;
    }, function (_unresolved_3) {
      SpineController = _unresolved_3.SpineController;
    }, function (_unresolved_4) {
      MultiSpineController = _unresolved_4.MultiSpineController;
    }, function (_unresolved_5) {
      CustomAnimationController = _unresolved_5.CustomAnimationController;
    }, function (_unresolved_6) {
      BasicPoolObject = _unresolved_6.BasicPoolObject;
    }, function (_unresolved_7) {
      FindComponent = _unresolved_7.FindComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1ba2aFMlyBItIlUzYHhepBr", "AniSysTools", undefined);

      __checkObsolete__(['Node', 'Component']);

      //export type AnimationComponentType = IAnimationControl & Component;
      _export("AniSysTools", AniSysTools = class AniSysTools {
        //--直接取回class的方式去找--
        static getTargetNodeComponent(targetNode) {
          /** 依類別參考搜尋，回傳「建構子本身」，優先 MultiSpineController */
          var componentConstructors = [_crd && MultiSpineController === void 0 ? (_reportPossibleCrUseOfMultiSpineController({
            error: Error()
          }), MultiSpineController) : MultiSpineController, //--第一優先(因為它裡面包含多個spineController)
          _crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
            error: Error()
          }), AnimationController) : AnimationController, _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
            error: Error()
          }), SpineController) : SpineController, _crd && CustomAnimationController === void 0 ? (_reportPossibleCrUseOfCustomAnimationController({
            error: Error()
          }), CustomAnimationController) : CustomAnimationController, _crd && BasicPoolObject === void 0 ? (_reportPossibleCrUseOfBasicPoolObject({
            error: Error()
          }), BasicPoolObject) : BasicPoolObject]; //--直接去挖建構式的方式去找--

          for (var ctor of componentConstructors) {
            if ((_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
              error: Error()
            }), FindComponent) : FindComponent).findComponentInChildren(targetNode, ctor)) {
              return ctor;
            }
          }

          console.warn('No animation component found on targetNode:', targetNode.name);
          return null;
        } //--一次撈全部的component


        static findComponentsInNode(targetNode) {
          var componentConstructors = [_crd && MultiSpineController === void 0 ? (_reportPossibleCrUseOfMultiSpineController({
            error: Error()
          }), MultiSpineController) : MultiSpineController, //--第一優先(因為它裡面包含多個spineController)不須要拿這個
          _crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
            error: Error()
          }), AnimationController) : AnimationController, _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
            error: Error()
          }), SpineController) : SpineController, _crd && CustomAnimationController === void 0 ? (_reportPossibleCrUseOfCustomAnimationController({
            error: Error()
          }), CustomAnimationController) : CustomAnimationController, _crd && BasicPoolObject === void 0 ? (_reportPossibleCrUseOfBasicPoolObject({
            error: Error()
          }), BasicPoolObject) : BasicPoolObject];
          var components = [];

          for (var ctor of componentConstructors) {
            var component = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
              error: Error()
            }), FindComponent) : FindComponent).findComponentInChildren(targetNode, ctor);

            if (component) {
              components.push(component);
            }
          }

          return components;
        } //--透過class直接挖出component--


        static findAndGetIAniComponent(targetNode) {
          var componentConstructors = [_crd && MultiSpineController === void 0 ? (_reportPossibleCrUseOfMultiSpineController({
            error: Error()
          }), MultiSpineController) : MultiSpineController, //--第一優先(因為它裡面包含多個spineController)
          _crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
            error: Error()
          }), AnimationController) : AnimationController, _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
            error: Error()
          }), SpineController) : SpineController, _crd && CustomAnimationController === void 0 ? (_reportPossibleCrUseOfCustomAnimationController({
            error: Error()
          }), CustomAnimationController) : CustomAnimationController, _crd && BasicPoolObject === void 0 ? (_reportPossibleCrUseOfBasicPoolObject({
            error: Error()
          }), BasicPoolObject) : BasicPoolObject];

          for (var ctor of componentConstructors) {
            var component = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
              error: Error()
            }), FindComponent) : FindComponent).findComponentInChildren(targetNode, ctor);

            if (component) {
              return component;
            }
          }

          console.warn('No animation component found on targetNode:', targetNode.name);
          return null;
        }

        static isIBasicPoolObject(component) {
          return typeof component === 'object' && component !== null && typeof component.beforeDestroy === 'function' && typeof component.resetData === 'function';
        } //確保 Component 實作 IBasicPoolObject


        static isIBasicPoolObjectComponent(component) {
          return AniSysTools.isIBasicPoolObject(component);
        } //--直接找實作BasicPoolObject的component


        static getIBasicPoolObjectComponentConstructor(targetNode) {
          return (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
            error: Error()
          }), FindComponent) : FindComponent).findComponentConstructorByCheckFunction(targetNode, AniSysTools.isIBasicPoolObjectComponent);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dc7f043571ca51b59ea11b30530a9427e4b625f2.js.map
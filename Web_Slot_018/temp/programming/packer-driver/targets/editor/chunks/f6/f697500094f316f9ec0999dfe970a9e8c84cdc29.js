System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AnimationController, SpineController, MixedASController, CustomAnimationController, BasicPoolObject, FindComponent, AniSysTools, _crd;

  function _reportPossibleCrUseOfAnimationController(extras) {
    _reporterNs.report("AnimationController", "../Components/AnimationController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineController(extras) {
    _reporterNs.report("SpineController", "../Components/SpineController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMixedASController(extras) {
    _reporterNs.report("MixedASController", "../Components/MixedASController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCustomAnimationController(extras) {
    _reporterNs.report("CustomAnimationController", "../Components/CustomAnimationController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAnimationControl(extras) {
    _reporterNs.report("IAnimationControl", "../Definitions/IAnimationControl", _context.meta, extras);
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
      MixedASController = _unresolved_4.MixedASController;
    }, function (_unresolved_5) {
      CustomAnimationController = _unresolved_5.CustomAnimationController;
    }, function (_unresolved_6) {
      BasicPoolObject = _unresolved_6.BasicPoolObject;
    }, function (_unresolved_7) {
      FindComponent = _unresolved_7.FindComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e9761kYj1JBrCg7JefOUvI", "AniSysTools", undefined);

      __checkObsolete__(['Node', 'Component']);

      _export("AniSysTools", AniSysTools = class AniSysTools {
        //--直接取回class的方式去找--
        static getTargetNodeComponent(targetNode) {
          const componentConstructors = [_crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
            error: Error()
          }), AnimationController) : AnimationController, _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
            error: Error()
          }), SpineController) : SpineController, _crd && MixedASController === void 0 ? (_reportPossibleCrUseOfMixedASController({
            error: Error()
          }), MixedASController) : MixedASController, _crd && CustomAnimationController === void 0 ? (_reportPossibleCrUseOfCustomAnimationController({
            error: Error()
          }), CustomAnimationController) : CustomAnimationController, _crd && BasicPoolObject === void 0 ? (_reportPossibleCrUseOfBasicPoolObject({
            error: Error()
          }), BasicPoolObject) : BasicPoolObject]; //--直接去挖建構式的方式去找--

          for (const constructor of componentConstructors) {
            if ((_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
              error: Error()
            }), FindComponent) : FindComponent).findComponentInChildren(targetNode, constructor)) {
              return constructor;
            }
            /*
            if (targetNode.getComponent(constructor)) {
                return constructor;
            }*/

          }

          console.warn('No animation component found on targetNode:', targetNode.name);
          return null;
        } //--透過class直接挖出component--


        static findAndGetIAniComponent(targetNode) {
          const componentConstructors = [_crd && AnimationController === void 0 ? (_reportPossibleCrUseOfAnimationController({
            error: Error()
          }), AnimationController) : AnimationController, _crd && SpineController === void 0 ? (_reportPossibleCrUseOfSpineController({
            error: Error()
          }), SpineController) : SpineController, _crd && MixedASController === void 0 ? (_reportPossibleCrUseOfMixedASController({
            error: Error()
          }), MixedASController) : MixedASController, _crd && CustomAnimationController === void 0 ? (_reportPossibleCrUseOfCustomAnimationController({
            error: Error()
          }), CustomAnimationController) : CustomAnimationController, _crd && BasicPoolObject === void 0 ? (_reportPossibleCrUseOfBasicPoolObject({
            error: Error()
          }), BasicPoolObject) : BasicPoolObject];

          for (const constructor of componentConstructors) {
            const component = (_crd && FindComponent === void 0 ? (_reportPossibleCrUseOfFindComponent({
              error: Error()
            }), FindComponent) : FindComponent).findComponentInChildren(targetNode, constructor);

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
//# sourceMappingURL=f697500094f316f9ec0999dfe970a9e8c84cdc29.js.map
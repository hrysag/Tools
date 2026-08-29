System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UITransform, ResizeStateType, ResizeHandler, _crd;

  function _reportPossibleCrUseOfResizeState(extras) {
    _reporterNs.report("ResizeState", "../Definitions/BasicResizeState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResizeStateType(extras) {
    _reporterNs.report("ResizeStateType", "../Definitions/BasicResizeState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResizeStateList(extras) {
    _reporterNs.report("ResizeStateList", "../Definitions/BasicResizeState", _context.meta, extras);
  }

  _export("ResizeHandler", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      ResizeStateType = _unresolved_2.ResizeStateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6f80zusd9MQpApr1+TvS1t", "ResizeHandler", undefined);

      __checkObsolete__(['Node', 'UITransform']);

      _export("ResizeHandler", ResizeHandler = class ResizeHandler {
        constructor() {
          this._resizeActionMap = void 0;
          this._resizeActionMap = {};
          this.initializeDefaultActions();
        }
        /**
         * 自己註冊啦...
         * @param resizeStateType The type of the resize state.
         * @param action The action to be executed when the resize state is triggered.
         */


        registerAction(resizeStateType, action) {
          if (!this._resizeActionMap[resizeStateType]) {
            this._resizeActionMap[resizeStateType] = action;
          } else {
            console.warn(`Action for ${resizeStateType} is already registered.`);
          }
        }

        initializeDefaultActions() {
          this._resizeActionMap[(_crd && ResizeStateType === void 0 ? (_reportPossibleCrUseOfResizeStateType({
            error: Error()
          }), ResizeStateType) : ResizeStateType).RESIZE] = target => this.doResize(target);

          this._resizeActionMap[(_crd && ResizeStateType === void 0 ? (_reportPossibleCrUseOfResizeStateType({
            error: Error()
          }), ResizeStateType) : ResizeStateType).SET_SCALE_TO_DEFAULT] = target => this.doSetScaleDefault(target);

          this._resizeActionMap[(_crd && ResizeStateType === void 0 ? (_reportPossibleCrUseOfResizeStateType({
            error: Error()
          }), ResizeStateType) : ResizeStateType).SET_SCALE_TO_SWITCH] = (target, container) => this.doSetScaleToSwitch(target, container); // ... 其他所有 do... 的方法都移到這裡 ...


          this._resizeActionMap[(_crd && ResizeStateType === void 0 ? (_reportPossibleCrUseOfResizeStateType({
            error: Error()
          }), ResizeStateType) : ResizeStateType).SET_UI_TRANSFORM_SWITCH_CONTAINER] = (target, container) => this.doSwitchUITransform(target, container);

          this._resizeActionMap[(_crd && ResizeStateType === void 0 ? (_reportPossibleCrUseOfResizeStateType({
            error: Error()
          }), ResizeStateType) : ResizeStateType).SET_UI_TRANSFORM_CUSTOM_CONTAINER] = (target, container, state) => this.doSetCustomUITransform(target, state);

          this._resizeActionMap[(_crd && ResizeStateType === void 0 ? (_reportPossibleCrUseOfResizeStateType({
            error: Error()
          }), ResizeStateType) : ResizeStateType).DEFAULT] = () => {
            /* do nothing */
          };
        }

        applyMultiResize(target, resizeStateList, currentContainer) {
          for (const stateInfo of resizeStateList.stateInfo) {
            const action = this._resizeActionMap[stateInfo.resizeStateType];

            if (action) {
              // 傳入目標節點、當前容器和狀態資訊
              action(target, currentContainer, stateInfo);
            } else {
              this.doDefaultResize(target);
            }
          }
        } //=================<private/protected function>============================================================================================
        //--自己override..


        doChangeAnimation(target) {} //--自己override..


        doCustomProcess(target) {}

        doResize(target) {
          return;
        } //--自己override..


        doDefaultResize(target) {//--do nothing
        }

        doSwitchUITransform(target, currentContainer) {
          if (target && currentContainer) {
            // Perform UI transform on the target node
            const currentUITransform = currentContainer.getComponent(UITransform);

            if (currentUITransform) {
              const targetTransform = target.getComponent(UITransform);
              targetTransform.setContentSize(currentUITransform.contentSize.width, currentUITransform.contentSize.height);
            }
          }
        }

        doSetScaleToSwitch(target, currentContainer) {
          if (target && currentContainer) {
            target.setScale(currentContainer.scale.x, currentContainer.scale.y, currentContainer.scale.z);
          }
        }

        doSetScaleDefault(target) {
          target == null || target.setScale(1, 1, 1);
        }

        doSetPositionDefault(target) {
          target == null || target.setPosition(0, 0, 0);
        }

        doSetPositionToSwitch(target, currentContainer) {
          if (target && currentContainer) {
            target.setPosition(currentContainer.position);
          }
        } //--交換自定義的node的uiTransform


        doSetCustomUITransform(target, custom) {
          if (target) {
            // Perform UI transform on the target node
            const targetUITransform = custom.customChangeUITransformTarget.getComponent(UITransform);
            const contentSize = targetUITransform.contentSize;

            if (targetUITransform) {
              // Apply the desired UI transformation
              const targetTransform = target.getComponent(UITransform);
              targetTransform.setContentSize(contentSize.width, contentSize.height);
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=53011844e2427be3876e67f8833489e8c8bad491.js.map
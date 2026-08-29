System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Vec3, Sprite, Color, UITransform, Size, Widget, UniTask, easeFunctions, EaseType, _crd, UniTimeEffectFactory;

  function _reportPossibleCrUseOfUniTask(extras) {
    _reporterNs.report("UniTask", "./UniTimer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeaseFunctions(extras) {
    _reporterNs.report("easeFunctions", "../../Core", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEaseType(extras) {
    _reporterNs.report("EaseType", "../../Core", _context.meta, extras);
  }

  _export("UniTimeEffectFactory", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      UniTask = _unresolved_2.UniTask;
    }, function (_unresolved_3) {
      easeFunctions = _unresolved_3.easeFunctions;
      EaseType = _unresolved_3.EaseType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf1319fInRNA5Loc8mfobMI", "UniTimeEffectFactory", undefined);

      __checkObsolete__(['Node', 'Vec3', 'Sprite', 'Color', 'UITransform', 'Size', 'Widget']);

      (function (_UniTimeEffectFactory) {
        var Node;

        (function (_Node) {
          function moveTo(node, dest, duration, options) {
            if (options === void 0) {
              options = {};
            }

            var {
              ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
                error: Error()
              }), EaseType) : EaseType).Linear,
              isLocal = true,
              easedValueCustom
            } = options;
            var startPos;
            var param = new (_crd && UniTask === void 0 ? (_reportPossibleCrUseOfUniTask({
              error: Error()
            }), UniTask) : UniTask)();
            param.duration = duration;

            param.onStart = () => {
              startPos = isLocal ? node.position.clone() : node.worldPosition.clone();
            };

            param.onUpdate = progress => {
              // 計算緩動後的進度
              var easedProgress = 0;

              if (easedValueCustom !== null && easedValueCustom !== undefined) {
                easedProgress = easedValueCustom.evaluate(progress);
              } else {
                easedProgress = (_crd && easeFunctions === void 0 ? (_reportPossibleCrUseOfeaseFunctions({
                  error: Error()
                }), easeFunctions) : easeFunctions)[ease](progress);
              } // 插值計算當前位置


              var tempPos = new Vec3();
              Vec3.lerp(tempPos, startPos, dest, easedProgress); // 設置位置

              if (isLocal) {
                node.setPosition(tempPos);
              } else {
                node.setWorldPosition(tempPos);
              }
            };

            param.onComplete = () => {
              // 確保最終位置正確
              if (isLocal) {
                node.setPosition(dest);
              } else {
                node.setWorldPosition(dest);
              }
            };

            return param;
          }

          _Node.moveTo = moveTo;

          function moveFrom(node, from, dest, duration, options) {
            if (options === void 0) {
              options = {};
            }

            var {
              ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
                error: Error()
              }), EaseType) : EaseType).Linear,
              isLocal = true,
              easedValueCustom
            } = options;
            var param = new (_crd && UniTask === void 0 ? (_reportPossibleCrUseOfUniTask({
              error: Error()
            }), UniTask) : UniTask)();
            param.duration = duration;

            param.onStart = () => {
              // 設置起始位置
              if (isLocal) {
                node.setPosition(from);
              } else {
                node.setWorldPosition(from);
              }
            };

            param.onUpdate = progress => {
              // 計算緩動後的進度
              var easedProgress = 0;

              if (easedValueCustom !== null && easedValueCustom !== undefined) {
                easedProgress = easedValueCustom.evaluate(progress);
              } else {
                easedProgress = (_crd && easeFunctions === void 0 ? (_reportPossibleCrUseOfeaseFunctions({
                  error: Error()
                }), easeFunctions) : easeFunctions)[ease](progress);
              } // 插值計算當前位置


              var tempPos = new Vec3();
              Vec3.lerp(tempPos, from, dest, easedProgress); // 設置位置

              if (isLocal) {
                node.setPosition(tempPos);
              } else {
                node.setWorldPosition(tempPos);
              }
            };

            param.onComplete = () => {
              // 確保最終位置正確
              if (isLocal) {
                node.setPosition(dest);
              } else {
                node.setWorldPosition(dest);
              }
            };

            return param;
          }

          _Node.moveFrom = moveFrom;

          function moveBy(node, offset, duration, options) {
            if (options === void 0) {
              options = {};
            }

            var {
              ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
                error: Error()
              }), EaseType) : EaseType).Linear,
              easedValueCustom
            } = options;
            var startPos;
            var endPos;
            var param = new (_crd && UniTask === void 0 ? (_reportPossibleCrUseOfUniTask({
              error: Error()
            }), UniTask) : UniTask)();
            param.duration = duration;

            param.onStart = () => {
              startPos = node.position.clone();
              endPos = new Vec3(startPos.x + offset.x, startPos.y + offset.y, startPos.z + offset.z);
            };

            param.onUpdate = progress => {
              // 計算緩動後的進度
              var easedProgress = 0;

              if (easedValueCustom !== null && easedValueCustom !== undefined) {
                easedProgress = easedValueCustom.evaluate(progress);
              } else {
                easedProgress = (_crd && easeFunctions === void 0 ? (_reportPossibleCrUseOfeaseFunctions({
                  error: Error()
                }), easeFunctions) : easeFunctions)[ease](progress);
              } // 插值計算當前位置


              var tempPos = new Vec3();
              Vec3.lerp(tempPos, startPos, endPos, easedProgress); // MoveBy 使用本地座標

              node.setPosition(tempPos);
            };

            param.onComplete = () => {
              // 確保最終位置正確
              node.setPosition(endPos);
            };

            return param;
          }

          _Node.moveBy = moveBy;

          function scaleTo(node, scale, duration, options) {
            if (options === void 0) {
              options = {};
            }

            var {
              ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
                error: Error()
              }), EaseType) : EaseType).Linear,
              easedValueCustom
            } = options;
            var startScale;
            var param = new (_crd && UniTask === void 0 ? (_reportPossibleCrUseOfUniTask({
              error: Error()
            }), UniTask) : UniTask)();
            param.duration = duration;

            param.onStart = () => {
              startScale = node.scale.clone();
            };

            param.onUpdate = progress => {
              // 計算緩動後的進度
              var easedProgress = 0;

              if (easedValueCustom !== null && easedValueCustom !== undefined) {
                easedProgress = easedValueCustom.evaluate(progress);
              } else {
                easedProgress = (_crd && easeFunctions === void 0 ? (_reportPossibleCrUseOfeaseFunctions({
                  error: Error()
                }), easeFunctions) : easeFunctions)[ease](progress);
              } // 插值計算當前縮放


              var tempScale = new Vec3();
              Vec3.lerp(tempScale, startScale, scale, easedProgress);
              node.setScale(tempScale);
            };

            param.onComplete = () => {
              // 確保最終縮放正確
              node.setScale(scale);
            };

            return param;
          }

          _Node.scaleTo = scaleTo;

          function rotateTo(node, rotation, duration, options) {
            if (options === void 0) {
              options = {};
            }

            var {
              ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
                error: Error()
              }), EaseType) : EaseType).Linear,
              easedValueCustom
            } = options;
            var startRotation;
            var param = new (_crd && UniTask === void 0 ? (_reportPossibleCrUseOfUniTask({
              error: Error()
            }), UniTask) : UniTask)();
            param.duration = duration;

            param.onStart = () => {
              startRotation = node.eulerAngles.clone();
            };

            param.onUpdate = progress => {
              // 計算緩動後的進度
              var easedProgress = 0;

              if (easedValueCustom !== null && easedValueCustom !== undefined) {
                easedProgress = easedValueCustom.evaluate(progress);
              } else {
                easedProgress = (_crd && easeFunctions === void 0 ? (_reportPossibleCrUseOfeaseFunctions({
                  error: Error()
                }), easeFunctions) : easeFunctions)[ease](progress);
              } // 插值計算當前旋轉


              var tempRotation = new Vec3();
              Vec3.lerp(tempRotation, startRotation, rotation, easedProgress);
              node.setRotationFromEuler(tempRotation);
            };

            param.onComplete = () => {
              // 確保最終旋轉正確
              node.setRotationFromEuler(rotation);
            };

            return param;
          }

          _Node.rotateTo = rotateTo;

          function resizeTo(node, size, duration, options) {
            if (options === void 0) {
              options = {};
            }

            var {
              ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
                error: Error()
              }), EaseType) : EaseType).Linear,
              easedValueCustom
            } = options;
            var uiTransform = node.getComponent(UITransform);
            var startSize = uiTransform.contentSize.clone();
            var param = new (_crd && UniTask === void 0 ? (_reportPossibleCrUseOfUniTask({
              error: Error()
            }), UniTask) : UniTask)();
            param.duration = duration;

            param.onStart = () => {
              startSize = uiTransform.contentSize.clone();
            };

            param.onUpdate = progress => {
              // 計算緩動後的進度
              var easedProgress = 0;

              if (easedValueCustom !== null && easedValueCustom !== undefined) {
                easedProgress = easedValueCustom.evaluate(progress);
              } else {
                easedProgress = (_crd && easeFunctions === void 0 ? (_reportPossibleCrUseOfeaseFunctions({
                  error: Error()
                }), easeFunctions) : easeFunctions)[ease](progress);
              } // 插值計算當前大小


              var tempSize = new Size();
              tempSize.width = startSize.width + (size.width - startSize.width) * easedProgress;
              tempSize.height = startSize.height + (size.height - startSize.height) * easedProgress;
              uiTransform.setContentSize(tempSize);
              var widgets = node.getComponentsInChildren(Widget);
              widgets.forEach(widget => {
                widget.updateAlignment();
              });
            };

            param.onComplete = () => {
              // 確保最終大小正確
              uiTransform.setContentSize(size);
            };

            return param;
          }

          _Node.resizeTo = resizeTo;
        })(Node || (Node = _UniTimeEffectFactory.Node || (_UniTimeEffectFactory.Node = {})));

        var Sprite;

        (function (_Sprite) {
          function colorTo(sprite, color, duration, options) {
            if (options === void 0) {
              options = {};
            }

            var {
              ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
                error: Error()
              }), EaseType) : EaseType).Linear
            } = options;
            var startColor;
            var param = new (_crd && UniTask === void 0 ? (_reportPossibleCrUseOfUniTask({
              error: Error()
            }), UniTask) : UniTask)();
            param.duration = duration;

            param.onStart = () => {
              startColor = sprite.color.clone();
            };

            param.onUpdate = progress => {
              var easedProgress = (_crd && easeFunctions === void 0 ? (_reportPossibleCrUseOfeaseFunctions({
                error: Error()
              }), easeFunctions) : easeFunctions)[ease](progress); // 插值計算當前顏色

              var tempColor = new Color();
              Color.lerp(tempColor, startColor, color, easedProgress);
              sprite.color = tempColor;
            };

            param.onComplete = () => {
              // 確保最終顏色正確
              sprite.color = color;
            };

            return param;
          }

          _Sprite.colorTo = colorTo;

          function fadeTo(sprite, alpha, duration, options) {
            if (options === void 0) {
              options = {};
            }

            var {
              ease = (_crd && EaseType === void 0 ? (_reportPossibleCrUseOfEaseType({
                error: Error()
              }), EaseType) : EaseType).Linear
            } = options;
            var startAlpha;
            var param = new (_crd && UniTask === void 0 ? (_reportPossibleCrUseOfUniTask({
              error: Error()
            }), UniTask) : UniTask)();
            param.duration = duration;

            param.onStart = () => {
              startAlpha = sprite.color.a;
            };

            param.onUpdate = progress => {
              var easedProgress = (_crd && easeFunctions === void 0 ? (_reportPossibleCrUseOfeaseFunctions({
                error: Error()
              }), easeFunctions) : easeFunctions)[ease](progress); // 插值計算當前透明度

              var currentAlpha = startAlpha + (alpha - startAlpha) * easedProgress;
              var newColor = sprite.color.clone();
              newColor.a = Math.max(0, Math.min(255, currentAlpha));
              sprite.color = newColor;
            };

            param.onComplete = () => {
              // 確保最終透明度正確
              var finalColor = sprite.color.clone();
              finalColor.a = Math.max(0, Math.min(255, alpha));
              sprite.color = finalColor;
            };

            return param;
          }

          _Sprite.fadeTo = fadeTo;
        })(Sprite || (Sprite = _UniTimeEffectFactory.Sprite || (_UniTimeEffectFactory.Sprite = {})));

        var Utility;

        (function (_Utility) {
          function delay(duration) {
            var param = new (_crd && UniTask === void 0 ? (_reportPossibleCrUseOfUniTask({
              error: Error()
            }), UniTask) : UniTask)();
            param.duration = duration;

            param.onUpdate = () => {}; // 空更新


            return param;
          }

          _Utility.delay = delay;

          function callback(callback) {
            var param = new (_crd && UniTask === void 0 ? (_reportPossibleCrUseOfUniTask({
              error: Error()
            }), UniTask) : UniTask)();
            param.duration = 0;
            param.onComplete = callback;
            return param;
          }

          _Utility.callback = callback;

          function custom(duration, onUpdate, onComplete, onStart) {
            var param = new (_crd && UniTask === void 0 ? (_reportPossibleCrUseOfUniTask({
              error: Error()
            }), UniTask) : UniTask)();
            param.duration = duration;
            param.onUpdate = onUpdate;
            param.onComplete = onComplete;
            param.onStart = onStart;
            return param;
          }

          _Utility.custom = custom;
        })(Utility || (Utility = _UniTimeEffectFactory.Utility || (_UniTimeEffectFactory.Utility = {})));
      })(UniTimeEffectFactory || _export("UniTimeEffectFactory", UniTimeEffectFactory = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b10c6fd22c99541f95f7f58a700f2cbcc122c65c.js.map
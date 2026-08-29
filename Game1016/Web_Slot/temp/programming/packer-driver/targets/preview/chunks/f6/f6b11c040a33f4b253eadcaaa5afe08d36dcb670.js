System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, easing, _crd, easeFunctions, EaseType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      easing = _cc.easing;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6ad28uOF4VPNZsi3ZeOJN5k", "TweenExt", undefined);

      __checkObsolete__(['_decorator', 'easing']);

      _export("easeFunctions", easeFunctions = [easing.linear, easing.quadIn, easing.quadOut, easing.quadInOut, easing.cubicIn, easing.cubicOut, easing.cubicInOut, easing.quartIn, easing.quartOut, easing.quartInOut, easing.quintIn, easing.quintOut, easing.quintInOut, easing.sineIn, easing.sineOut, easing.sineInOut, easing.expoIn, easing.expoOut, easing.expoInOut, easing.circIn, easing.circOut, easing.circInOut, easing.elasticIn, easing.elasticOut, easing.elasticInOut, easing.backIn, easing.backOut, easing.backInOut, easing.bounceIn, easing.bounceOut, easing.bounceInOut, easing.smooth, easing.fade, easing.quadOutIn, easing.cubicOutIn, easing.quartOutIn, easing.quintOutIn, easing.sineOutIn, easing.expoOutIn, easing.circOutIn, easing.elasticOutIn, easing.backOutIn, easing.bounceOutIn // 继续添加其他函数...
      ]);

      _export("EaseType", EaseType = /*#__PURE__*/function (EaseType) {
        EaseType[EaseType["Linear"] = 0] = "Linear";
        EaseType[EaseType["QuadIn"] = 1] = "QuadIn";
        EaseType[EaseType["QuadOut"] = 2] = "QuadOut";
        EaseType[EaseType["QuadInOut"] = 3] = "QuadInOut";
        EaseType[EaseType["CubicIn"] = 4] = "CubicIn";
        EaseType[EaseType["CubicOut"] = 5] = "CubicOut";
        EaseType[EaseType["CubicInOut"] = 6] = "CubicInOut";
        EaseType[EaseType["QuartIn"] = 7] = "QuartIn";
        EaseType[EaseType["QuartOut"] = 8] = "QuartOut";
        EaseType[EaseType["QuartInOut"] = 9] = "QuartInOut";
        EaseType[EaseType["QuintIn"] = 10] = "QuintIn";
        EaseType[EaseType["QuintOut"] = 11] = "QuintOut";
        EaseType[EaseType["QuintInOut"] = 12] = "QuintInOut";
        EaseType[EaseType["SineIn"] = 13] = "SineIn";
        EaseType[EaseType["SineOut"] = 14] = "SineOut";
        EaseType[EaseType["SineInOut"] = 15] = "SineInOut";
        EaseType[EaseType["ExpoIn"] = 16] = "ExpoIn";
        EaseType[EaseType["ExpoOut"] = 17] = "ExpoOut";
        EaseType[EaseType["ExpoInOut"] = 18] = "ExpoInOut";
        EaseType[EaseType["CircIn"] = 19] = "CircIn";
        EaseType[EaseType["CircOut"] = 20] = "CircOut";
        EaseType[EaseType["CircInOut"] = 21] = "CircInOut";
        EaseType[EaseType["ElasticIn"] = 22] = "ElasticIn";
        EaseType[EaseType["ElasticOut"] = 23] = "ElasticOut";
        EaseType[EaseType["ElasticInOut"] = 24] = "ElasticInOut";
        EaseType[EaseType["BackIn"] = 25] = "BackIn";
        EaseType[EaseType["BackOut"] = 26] = "BackOut";
        EaseType[EaseType["BackInOut"] = 27] = "BackInOut";
        EaseType[EaseType["BounceIn"] = 28] = "BounceIn";
        EaseType[EaseType["BounceOut"] = 29] = "BounceOut";
        EaseType[EaseType["BounceInOut"] = 30] = "BounceInOut";
        EaseType[EaseType["Smooth"] = 31] = "Smooth";
        EaseType[EaseType["Fade"] = 32] = "Fade";
        EaseType[EaseType["QuadOutIn"] = 33] = "QuadOutIn";
        EaseType[EaseType["CubicOutIn"] = 34] = "CubicOutIn";
        EaseType[EaseType["QuartOutIn"] = 35] = "QuartOutIn";
        EaseType[EaseType["QuintOutIn"] = 36] = "QuintOutIn";
        EaseType[EaseType["SineOutIn"] = 37] = "SineOutIn";
        EaseType[EaseType["ExpoOutIn"] = 38] = "ExpoOutIn";
        EaseType[EaseType["CircOutIn"] = 39] = "CircOutIn";
        EaseType[EaseType["ElasticOutIn"] = 40] = "ElasticOutIn";
        EaseType[EaseType["BackOutIn"] = 41] = "BackOutIn";
        EaseType[EaseType["BounceOutIn"] = 42] = "BounceOutIn";
        return EaseType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f6b11c040a33f4b253eadcaaa5afe08d36dcb670.js.map
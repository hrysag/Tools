System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function bezierEase(p1, p2) {
    var arr = [0];
    var stepArr = 0.05;
    var stepBaz = 0.05;
    var baz = bezierEase0(p1, p2);
    var [prevBaz, nextBaz, tBaz] = [{
      x: 0,
      y: 0
    }, baz(stepBaz), stepBaz];

    for (var x = stepArr; x <= 1 - stepArr / 2; x += stepArr) {
      while (x > nextBaz.x && tBaz < 2) {
        prevBaz = nextBaz;
        tBaz += stepBaz;
        nextBaz = baz(tBaz);
      }

      arr.push(linInp(x, prevBaz.x, nextBaz.x, prevBaz.y, nextBaz.y));
    }

    arr.push(1);
    return fraction => {
      var iLeft = Math.min(Math.max(Math.floor(fraction / stepArr), 0), arr.length - 2);
      return linInp(fraction, iLeft * stepArr, (iLeft + 1) * stepArr, arr[iLeft], arr[iLeft + 1]);
    };

    function linInp(x, xFrom, xTo, yFrom, yTo) {
      return (x - xFrom) / (xTo - xFrom) * (yTo - yFrom) + yFrom;
    } // https://stackoverflow.com/questions/16227300, https://github.com/gre/bezier-easing/blob/master/src/index.js


    function bezierEase0(p1, p2) {
      var cX = 3 * p1.x; // const cX = 3 * (p1.x - p0.x);

      var cY = 3 * p1.y; // const cY = 3 * (p1.y - p0.y);

      var bX = 3 * (p2.x - p1.x) - cX; // const bX = 3 * (p2.x - p1.x) - cX;

      var bY = 3 * (p2.y - p1.y) - cY; // const bY = 3 * (p2.y - p1.y) - cY;

      var aX = 1 - cX - bX; // const aX = p3.x - p0.x - cX - bX;

      var aY = 1 - cY - bY; // const aY = p3.y - p0.y - cY - bY;

      return t => {
        var x = ((aX * t + bX) * t + cX) * t; // const x = ((aX * t + bX) * t + cX) * t + p0.x;

        var y = ((aY * t + bY) * t + cY) * t; // const y = ((aY * t + bY) * t + cY) * t + p0.y;

        return {
          x,
          y
        };
      };
    }
  }

  _export("bezierEase", bezierEase);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4f1d3GLtSNJzoT3D49vyoLm", "cubic-bezier", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fed04eea034967aecaccd329f15358324de17a09.js.map
System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, UIOpacity, LineRope, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, MainGame;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLineRope(extras) {
    _reporterNs.report("LineRope", "../wheel/LineRope", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      LineRope = _unresolved_2.LineRope;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "79fc88yhsxLOafYd1uiOxaV", "MainGame", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainGame", MainGame = (_dec = ccclass('MainGame'), _dec2 = property({
        type: Node,
        tooltip: "RopeNode"
      }), _dec(_class = (_class2 = class MainGame extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ropeNode", _descriptor, this);

          this._grid = void 0;
          this._lines = void 0;
          this._buildAni = [];
          this._lineContainer = void 0;
          this._lineList = {};
          this._drawLines = [];
          this._drawLinesPool = [];
        }

        set lines(v) {
          this._lines = v;
          this.organizeLines();
        }

        set lineList(l) {
          this.setLineList(l);
        }

        start() {
          this._lineContainer = new Node();
          this.node.addChild(this._lineContainer);
        }

        update(deltaTime) {}

        lineTest() {
          this.lines = [{
            "LineID": 1,
            "GridNum": 5,
            "Grids": [2, 6, 10, 14, 18],
            "Payoff": 30,
            "Element": [4, 0, 12, 12, 0],
            "ElementID": 4
          }, {
            "LineID": 4,
            "GridNum": 5,
            "Grids": [4, 8, 12, 16, 20],
            "Payoff": 12,
            "Element": [11, 0, 12, 12, 0],
            "ElementID": 11
          }, {
            "LineID": 5,
            "GridNum": 3,
            "Grids": [2, 7, 12],
            "Payoff": 2.4,
            "Element": [4, 0, 12, 10, 0],
            "ElementID": 4
          }, {
            "LineID": 7,
            "GridNum": 3,
            "Grids": [1, 5, 10],
            "Payoff": 2.4,
            "Element": [4, 0, 12, 10, 0],
            "ElementID": 4
          }, {
            "LineID": 10,
            "GridNum": 5,
            "Grids": [3, 8, 12, 16, 19],
            "Payoff": 12,
            "Element": [8, 0, 12, 12, 0],
            "ElementID": 8
          }, {
            "LineID": 12,
            "GridNum": 3,
            "Grids": [4, 7, 10],
            "Payoff": 0.6,
            "Element": [11, 0, 12, 10, 0],
            "ElementID": 11
          }, {
            "LineID": 13,
            "GridNum": 3,
            "Grids": [2, 5, 10],
            "Payoff": 2.4,
            "Element": [4, 0, 12, 10, 0],
            "ElementID": 4
          }, {
            "LineID": 16,
            "GridNum": 3,
            "Grids": [4, 7, 12],
            "Payoff": 0.6,
            "Element": [11, 0, 12, 10, 0],
            "ElementID": 11
          }, {
            "LineID": 17,
            "GridNum": 3,
            "Grids": [2, 7, 10],
            "Payoff": 2.4,
            "Element": [4, 0, 12, 10, 0],
            "ElementID": 4
          }, {
            "LineID": 19,
            "GridNum": 5,
            "Grids": [1, 6, 10, 14, 17],
            "Payoff": 30,
            "Element": [4, 0, 12, 12, 0],
            "ElementID": 4
          }, {
            "LineID": 22,
            "GridNum": 3,
            "Grids": [3, 7, 10],
            "Payoff": 0.6,
            "Element": [8, 0, 12, 10, 0],
            "ElementID": 8
          }, {
            "LineID": 24,
            "GridNum": 3,
            "Grids": [3, 7, 12],
            "Payoff": 0.6,
            "Element": [8, 0, 12, 10, 0],
            "ElementID": 8
          }, {
            "LineID": 26,
            "GridNum": 5,
            "Grids": [3, 6, 10, 14, 17],
            "Payoff": 12,
            "Element": [8, 0, 12, 12, 0],
            "ElementID": 8
          }, {
            "LineID": 27,
            "GridNum": 3,
            "Grids": [1, 5, 10],
            "Payoff": 2.4,
            "Element": [4, 0, 12, 10, 0],
            "ElementID": 4
          }, {
            "LineID": 30,
            "GridNum": 5,
            "Grids": [4, 7, 10, 14, 17],
            "Payoff": 12,
            "Element": [11, 0, 12, 12, 0],
            "ElementID": 11
          }, {
            "LineID": 32,
            "GridNum": 3,
            "Grids": [4, 8, 12],
            "Payoff": 0.6,
            "Element": [11, 0, 12, 10, 0],
            "ElementID": 11
          }, {
            "LineID": 34,
            "GridNum": 3,
            "Grids": [3, 8, 12],
            "Payoff": 0.6,
            "Element": [8, 0, 12, 10, 0],
            "ElementID": 8
          }, {
            "LineID": 35,
            "GridNum": 3,
            "Grids": [1, 6, 10],
            "Payoff": 2.4,
            "Element": [4, 0, 12, 10, 0],
            "ElementID": 4
          }, {
            "LineID": 37,
            "GridNum": 3,
            "Grids": [2, 5, 10],
            "Payoff": 2.4,
            "Element": [4, 0, 12, 10, 0],
            "ElementID": 4
          }, {
            "LineID": 40,
            "GridNum": 3,
            "Grids": [4, 7, 10],
            "Payoff": 0.6,
            "Element": [11, 0, 12, 10, 0],
            "ElementID": 11
          }, {
            "LineID": 41,
            "GridNum": 3,
            "Grids": [2, 5, 10],
            "Payoff": 2.4,
            "Element": [4, 0, 12, 10, 0],
            "ElementID": 4
          }, {
            "LineID": 44,
            "GridNum": 3,
            "Grids": [4, 7, 12],
            "Payoff": 0.6,
            "Element": [11, 0, 12, 10, 0],
            "ElementID": 11
          }, {
            "LineID": 46,
            "GridNum": 5,
            "Grids": [2, 7, 12, 16, 19],
            "Payoff": 30,
            "Element": [4, 0, 12, 12, 0],
            "ElementID": 4
          }, {
            "LineID": 48,
            "GridNum": 5,
            "Grids": [2, 7, 12, 16, 20],
            "Payoff": 30,
            "Element": [4, 0, 12, 12, 0],
            "ElementID": 4
          }, {
            "LineID": 49,
            "GridNum": 3,
            "Grids": [1, 5, 10],
            "Payoff": 2.4,
            "Element": [4, 0, 12, 10, 0],
            "ElementID": 4
          }];
          this.drawLines();
        }

        organizeLines() {
          this._grid = [];
          this._buildAni = [];

          if (this._lines.length > 0) {
            this._grid = this._lines.map(line => line.Grids).reduce((a, b) => a.concat(b)).filter((value, index, self) => self.indexOf(value) === index).sort((a, b) => a - b);
          }

          this._buildAni = this._grid.concat();
          console.error(`this._grid`, this._grid);
          console.error(`this._buildAni`, this._buildAni);
        }

        setLineList(l) {
          for (let i in l) {
            this._lineList[i] = l[i].map(n => (n - 1) % 4);
          }

          ;
        }

        drawLines() {
          this._drawLines = [];

          this._lines.forEach((e, index) => {
            let line = this.getLinePool(e.LineID);

            this._drawLines.push(line);
          });
        }

        getLinePool(card) {
          var item = new Node(`line pool ${card}`);

          if (this._drawLinesPool == null || this._drawLinesPool.length == 0) {
            item = instantiate(this.ropeNode);
            item.getComponent(_crd && LineRope === void 0 ? (_reportPossibleCrUseOfLineRope({
              error: Error()
            }), LineRope) : LineRope).onLoad();
          } else {
            item = this._drawLinesPool.shift();
          }

          console.log("getLines", item.getComponent(_crd && LineRope === void 0 ? (_reportPossibleCrUseOfLineRope({
            error: Error()
          }), LineRope) : LineRope));
          item.getComponent(_crd && LineRope === void 0 ? (_reportPossibleCrUseOfLineRope({
            error: Error()
          }), LineRope) : LineRope).foldLine(this._lineList[card]);
          item.active = true;
          item.setPosition(0, 1470);
          item.name = `LineID${card}`;

          this._lineContainer.addChild(item);

          return item;
        }

        addLinePool(line) {
          if (this._drawLinesPool == null) this._drawLinesPool = [];
          line.setPosition(0, 0); // line.active = false;
          // line.name = "";

          this.node.removeChild(line);

          this._drawLinesPool.push(line);
        }

        showLine(id) {
          let line = this.getLinePool(id); // line.active = true;

          line.getComponent(UIOpacity).opacity = 255;

          this._lineContainer.addChild(line);

          this._drawLines.push(line);
        }

        resetLine() {
          this._drawLines.forEach(l => this.addLinePool(l));

          this._drawLines = [];
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ropeNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bc722b66b6198493368e5e7ceb286b5d03e62116.js.map
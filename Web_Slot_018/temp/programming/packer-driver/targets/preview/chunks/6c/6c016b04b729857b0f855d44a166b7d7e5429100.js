System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, NodeExt, _crd;

  _export("NodeExt", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96b6cLdlrJBKr7iy6b7PY/8", "NodeExt", undefined);

      __checkObsolete__(['_decorator', 'Node']);

      _export("NodeExt", NodeExt = class NodeExt {
        static findNodes(node, name, recursive) {
          if (recursive === void 0) {
            recursive = true;
          }

          var result = [];

          if (node.name === name) {
            result.push(node);
          }

          if (recursive) {
            this.findNodeInChild(node.children, name, result);
          }

          return result;
        }

        static findNodeInChild(nodeChildren, name, result) {
          for (var i = 0; i < nodeChildren.length; i++) {
            var child = nodeChildren[i];

            if (child.name === name) {
              result.push(child);
            }

            this.findNodeInChild(child.children, name, result);
          }

          return result;
        }

        static getHierachy(node) {
          var pNode = node.parent;
          var result = node.name;

          while (pNode !== null) {
            result = pNode.name + '/' + result;
            pNode = pNode.parent;
          }

          return result;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6c016b04b729857b0f855d44a166b7d7e5429100.js.map
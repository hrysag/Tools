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

      _cclegacy._RF.push({}, "2f605BxoyVJUof9s82JULKC", "NodeExt", undefined);

      __checkObsolete__(['_decorator', 'Node']);

      _export("NodeExt", NodeExt = class NodeExt {
        static findNodes(node, name, recursive = true) {
          let result = [];

          if (node.name === name) {
            result.push(node);
          }

          if (recursive) {
            this.findNodeInChild(node.children, name, result);
          }

          return result;
        }

        static findNodeInChild(nodeChildren, name, result) {
          for (let i = 0; i < nodeChildren.length; i++) {
            let child = nodeChildren[i];

            if (child.name === name) {
              result.push(child);
            }

            this.findNodeInChild(child.children, name, result);
          }

          return result;
        }

        static getHierachy(node) {
          let pNode = node.parent;
          let result = node.name;

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
//# sourceMappingURL=1298d717aded8aba669e2dec91ce004b8029b63e.js.map
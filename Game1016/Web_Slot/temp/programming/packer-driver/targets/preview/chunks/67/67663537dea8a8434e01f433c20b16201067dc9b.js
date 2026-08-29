System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, FindNode, _crd;

  _export("FindNode", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53dacxYdJ9OxoF23SuUjFq3", "FindNode", undefined);

      __checkObsolete__(['Node', 'Component']);

      _export("FindNode", FindNode = class FindNode {
        /**
         * 在節點的所有子節點中（包括子節點的子節點...）根據名稱尋找第一個匹配的節點。
         * 找到後立即返回並中斷遍歷。
         *
         * @param parentNode 要開始搜尋的父節點。
         * @param targetName 要尋找的子節點名稱。
         * @returns 找到的節點，如果沒有找到則返回 null。
         */
        static findChildByNameRecursive(parentNode, targetName) {
          if (!parentNode) {
            return null;
          } // 先檢查直接子節點


          for (var i = 0; i < parentNode.children.length; i++) {
            var child = parentNode.children[i];

            if (child.name === targetName) {
              return child;
            } // 遞迴搜尋子節點的子節點


            var foundInChildren = this.findChildByNameRecursive(child, targetName);

            if (foundInChildren) {
              return foundInChildren;
            }
          } // 沒有在任何子節點（包括後代節點）中找到


          return null;
        }
        /**
         * 在節點的所有直接子節點中尋找所有名稱匹配的節點。
         *
         * @param parentNode 要搜尋的父節點。
         * @param targetName 要尋找的子節點名稱。
         * @returns 包含所有匹配節點的陣列，如果沒有找到則返回空陣列。
         */


        static findChildrenByName(parentNode, targetName) {
          if (!parentNode || !parentNode.children) {
            return [];
          }

          var results = [];

          for (var child of parentNode.children) {
            if (child.name === targetName) {
              results.push(child);
            }
          }

          return results;
        }
        /**
         * 在節點的所有子節點中（包括子節點的子節點...）遞迴尋找所有名稱匹配的節點。
         *
         * @param parentNode 要開始搜尋的父節點。
         * @param targetName 要尋找的子節點名稱。
         * @returns 包含所有匹配節點的陣列，如果沒有找到則返回空陣列。
         */


        static findAllChildrenByNameRecursive(parentNode, targetName) {
          if (!parentNode) {
            return [];
          }

          var results = [];

          for (var child of parentNode.children) {
            if (child.name === targetName) {
              results.push(child);
            }

            var foundInChildren = this.findAllChildrenByNameRecursive(child, targetName);
            results.push(...foundInChildren);
          }

          return results;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=67663537dea8a8434e01f433c20b16201067dc9b.js.map
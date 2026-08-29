System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, FindComponent, _crd;

  _export("FindComponent", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9d306LnULJGHL22odImlW2L", "FindComponent", undefined);
      /**
       * Created by EricHuang on 2025/2/13.
       */


      __checkObsolete__(['Node', 'Component']);

      _export("FindComponent", FindComponent = class FindComponent {
        /**
         * 在巢狀結構中尋找指定的component,一旦找到即終止
         * @param node 
         * @param typename 
         */
        static findComponentInChildren(rootNode, componentType) {
          if (!rootNode) {
            return null;
          } // 檢查當前節點是否包含指定 Component


          var component = rootNode.getComponent(componentType);

          if (component) {
            return component;
          } // 遞迴遍歷子節點


          for (var child of rootNode.children) {
            var foundComponent = this.findComponentInChildren(child, componentType);

            if (foundComponent) {
              return foundComponent;
            }
          }

          return null; // 沒有找到指定的 Component
        }

        static findComponentInMultiNode(rootNode, componentType) {
          if (!rootNode || !rootNode.children) {
            return null;
          }

          for (var child of rootNode.children) {
            var _component = FindComponent.findComponentInChildren(child, componentType);

            if (_component) {
              return _component;
            }
          }

          return null; // 沒有找到指定的 Component
        }

        static findALLCompsInChildren(rootNode, componentType) {
          var results = []; // 儲存找到的 Component

          if (!rootNode) {
            return results;
          }

          var checkNode = node => {
            var component = node.getComponent(componentType);

            if (component) {
              results.push(component);
            }

            for (var child of node.children) {
              checkNode(child);
            }
          };

          checkNode(rootNode); // 開始遞迴檢查

          return results; // 回傳包含所有找到的 Component 的陣列
        }

        static findComponentByCheckFunction(targetNode, checkFunction) {
          if (!targetNode) {
            return null;
          }

          var checkNode = node => {
            // 檢查當前節點的所有 Component
            var components = node.getComponents(Component);

            for (var _component2 of components) {
              // 使用提供的檢查函式檢查 Component
              if (checkFunction(_component2)) {
                return _component2;
              }
            } // 遞迴檢查子節點


            for (var child of node.children) {
              var foundComponent = checkNode(child);

              if (foundComponent) {
                return foundComponent;
              }
            }

            return null;
          };

          return checkNode(targetNode);
        }

        static findComponentConstructorByCheckFunction(targetNode, checkFunction) {
          var foundComponent = this.findComponentByCheckFunction(targetNode, checkFunction);
          return foundComponent ? foundComponent.constructor : null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0e6b375b5bb02995d279751cfab70c3c4d728003.js.map
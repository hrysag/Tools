module.exports = {
    meta: {
        type: "problem", // 規則類型：指出程式碼可能有問題
        docs: {
            description: "檢查 cc.tween() 是否遺漏 start()", // 說明規則用途
        },
        messages: {
            tweenMissingStart: "tween chain 遺漏 start()", // report 時顯示的訊息
        },
    },

    create(context) {
        /**
         * findRootCallee
         * 用於找到呼叫鏈的最頂層函式名稱，例如：
         * tween(...).to(...).call(...) -> 返回 'tween'
         * @param {CallExpression} node 
         * @returns {string|null} 根函式名稱
         */
        function findRootCallee(node) {
            let callee = node.callee;
            // 如果是 MemberExpression（連鎖呼叫），往上找到最頂層 object
            while (callee.type === "MemberExpression") {
                callee = callee.object;
            }
            // 如果頂層仍然是 CallExpression，遞迴找根函式
            if (callee.type === "CallExpression") {
                return findRootCallee(callee);
            }
            // 如果是 Identifier，回傳名稱
            if (callee.type === "Identifier") {
                return callee.name;
            }
            return null;
        }

        /**
         * getLastCallee
         * 取得呼叫鏈的最後一個函式名稱，例如：
         * tween(...).to(...).start(); -> 返回 'start'
         * tween(...).delay(); -> 返回 'delay'
         * @param {CallExpression} node 
         * @returns {string|null} 最後一個函式名稱
         */
        function getLastCallee(node) {
            if (node.callee.type === "MemberExpression") {
                const prop = node.callee.property;
                if (prop.type === "Identifier") {
                    return prop.name;
                }
            } else if (node.callee.type === "Identifier") {
                return node.callee.name;
            }
            return null;
        }

        return {
            /**
             * CallExpression 事件
             * 每當 ESLint 解析到呼叫表達式（例如函式呼叫）時會觸發
             * @param {CallExpression} node 
             */
            CallExpression(node) {
                // 只檢查單獨表達式語句，不處理賦值或其他複雜用法
                // 例如 const t = tween(...).to(...) 本身不需要 start，就會跳過檢查
                if (node.parent.type !== 'ExpressionStatement') {
                    return;
                }
                const topCallee = findRootCallee(node);
                if (topCallee === 'tween') {
                    const lastCallee = getLastCallee(node);

                    // 最頂層是 tween 且最後一個函式不是 start，就報錯
                    if (lastCallee !== 'start') {
                        context.report({
                            node,
                            messageId: 'tweenMissingStart'
                        });
                    }
                }
            }
        };
    }
};
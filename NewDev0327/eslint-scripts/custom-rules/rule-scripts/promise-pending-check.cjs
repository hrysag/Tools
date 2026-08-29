const StatementType = Object.freeze({
    EXPRESSION: 'ExpressionStatement',
    BLOCK: 'BlockStatement',
    IF: 'IfStatement',
    FOR: 'ForStatement',
    FOR_OF: 'ForOfStatement',
    WHILE: 'WhileStatement',
    VARIABLE: 'VariableDeclaration',
    SWITCH: 'SwitchStatement',
    BREAK: 'BreakStatement',
    CONTINUE: 'ContinueStatement',
    RETURN: 'ReturnStatement',
});

const ExpressionType = Object.freeze({
    CALL: 'CallExpression',
    MEMBER: 'MemberExpression',
    FUNCTION: 'FunctionExpression',
    ARROW_FUNCTION: 'ArrowFunctionExpression',
    CHAIN: 'ChainExpression',
    ASSIGNMENT: 'AssignmentExpression',
});

const IDENTIFIER = 'Identifier';

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: '檢查 promise 是否無法 resolve 或 reject',
        },
        messages: {
            missingArguments: '遺漏 resolve/reject 參數承接',
            promiseMayKeepPending: 'Promise 遺漏 resolve 或 reject',
            assignmentWarning: 'resolve/reject 被賦值給變數或屬性,無法靜態分析是否會被呼叫,請人工確認。確認完成後請使用 Quick Fix 忽略此行',
            branchMissingResolve: '此分支遺漏 resolve 或 reject',
            branchMissingElse: '遺漏 else 分支處理 resolve 或 reject',
        },
    },

    create(context) {
        // ============================================================
        // Layer 4: 最底層 - 識別符檢查
        // ============================================================

        /**
         * 檢查識別符是否為 resolve 或 reject
         * @param {string} name - 識別符名稱
         * @param {string} resolveName - resolve 參數名稱
         * @param {string} rejectName - reject 參數名稱
         * @returns {boolean}
         */
        function isResolveOrReject(name, resolveName, rejectName) {
            return name === resolveName || name === rejectName;
        }

        // ============================================================
        // Layer 3: 表達式分析層
        // ============================================================

        /**
         * 分析表達式是否包含 resolve 或 reject 呼叫
         * @param {Object} expression - AST 表達式節點
         * @param {string} resolveName - resolve 參數名稱
         * @param {string} rejectName - reject 參數名稱
         * @param {Object} context - 用於收集 report 資訊
         * @returns {Object} { found: boolean, hasAssignment: boolean }
         */
        function analyzeExpression(expression, resolveName, rejectName, context = {}) {
            if (!expression) return { found: false, hasAssignment: false };

            switch (expression.type) {
                case ExpressionType.CALL:
                    return analyzeCallExpression(expression, resolveName, rejectName, context);

                case ExpressionType.CHAIN:
                    return analyzeExpression(expression.expression, resolveName, rejectName, context);

                case IDENTIFIER:
                    return {
                        found: isResolveOrReject(expression.name, resolveName, rejectName),
                        hasAssignment: false
                    };

                case ExpressionType.ARROW_FUNCTION:
                case ExpressionType.FUNCTION:
                    return analyzeFunctionExpression(expression, resolveName, rejectName, context);

                default:
                    return { found: false, hasAssignment: false };
            }
        }

        /**
         * 分析函數表達式（用於 callback 中的 resolve/reject）
         * @param {Object} funcExpr - 函數表達式節點
         * @param {string} resolveName - resolve 參數名稱
         * @param {string} rejectName - reject 參數名稱
         * @param {Object} context - 用於收集 report 資訊
         * @returns {Object} { found: boolean, hasAssignment: boolean }
         */
        function analyzeFunctionExpression(funcExpr, resolveName, rejectName, context = {}) {
            // Arrow functions can have either block bodies or expression bodies
            if (funcExpr.body.type === StatementType.BLOCK) {
                // Block body: { resolve(); }
                return analyzeStatements(funcExpr.body.body, resolveName, rejectName, context);
            } else {
                // Expression body: resolve()
                return analyzeExpression(funcExpr.body, resolveName, rejectName, context);
            }
        }

        /**
         * 分析呼叫表達式(包含參數和鏈式呼叫)
         * @param {Object} callExpr - 呼叫表達式節點
         * @param {string} resolveName - resolve 參數名稱
         * @param {string} rejectName - reject 參數名稱
         * @param {Object} context - 用於收集 report 資訊
         * @returns {Object} { found: boolean, hasAssignment: boolean }
         */
        function analyzeCallExpression(callExpr, resolveName, rejectName, context = {}) {
            let result = { found: false, hasAssignment: false };

            // 檢查 callee 本身(例如:resolve())
            if (callExpr.callee.type === IDENTIFIER) {
                if (isResolveOrReject(callExpr.callee.name, resolveName, rejectName)) {
                    result.found = true;
                    return result;
                }
            }

            // 檢查鏈式呼叫(例如:foo().bar().resolve())
            if (callExpr.callee.type === ExpressionType.MEMBER) {
                const chainResult = analyzeCallChain(callExpr.callee, resolveName, rejectName, context);
                if (chainResult.found) {
                    result.found = true;
                    result.hasAssignment = result.hasAssignment || chainResult.hasAssignment;
                    return result;
                }
            }

            // 檢查參數(例如:doSomething(resolve) 或 doSomething(() => resolve()))
            if (callExpr.arguments) {
                for (const arg of callExpr.arguments) {
                    const argResult = analyzeExpression(arg, resolveName, rejectName, context);
                    if (argResult.found) {
                        result.found = true;
                    }
                    result.hasAssignment = result.hasAssignment || argResult.hasAssignment;
                }
            }

            return result;
        }

        /**
         * 分析鏈式呼叫(Member Expression)
         * @param {Object} memberExpr - Member 表達式節點
         * @param {string} resolveName - resolve 參數名稱
         * @param {string} rejectName - reject 參數名稱
         * @param {Object} context - 用於收集 report 資訊
         * @returns {Object} { found: boolean, hasAssignment: boolean }
         */
        function analyzeCallChain(memberExpr, resolveName, rejectName, context = {}) {
            let current = memberExpr;

            // 遍歷鏈式結構找到最底層的呼叫
            while (current.type === ExpressionType.MEMBER) {
                current = current.object;
            }

            // 如果底層是呼叫表達式,分析它
            if (current.type === ExpressionType.CALL) {
                return analyzeCallExpression(current, resolveName, rejectName, context);
            }

            return { found: false, hasAssignment: false };
        }

        /**
         * 檢查函數表達式是否在其 body 中使用了 resolve 或 reject
         * @param {Object} funcExpr - 函數表達式節點
         * @param {string} resolveName - resolve 參數名稱
         * @param {string} rejectName - reject 參數名稱
         * @returns {boolean}
         */
        function checkFunctionUsesResolveReject(funcExpr, resolveName, rejectName) {
            if (!funcExpr || ![ExpressionType.FUNCTION, ExpressionType.ARROW_FUNCTION].includes(funcExpr.type)) {
                return false;
            }

            // 遞歸檢查函數 body 中是否包含 resolve/reject 的引用
            function checkNode(node) {
                if (!node) return false;

                // 檢查識別符
                if (node.type === IDENTIFIER) {
                    return isResolveOrReject(node.name, resolveName, rejectName);
                }

                // 檢查呼叫表達式
                if (node.type === ExpressionType.CALL) {
                    if (node.callee.type === IDENTIFIER && isResolveOrReject(node.callee.name, resolveName, rejectName)) {
                        return true;
                    }
                    // 檢查參數
                    if (node.arguments) {
                        for (const arg of node.arguments) {
                            if (checkNode(arg)) return true;
                        }
                    }
                }

                // 檢查 block statement
                if (node.type === StatementType.BLOCK && node.body) {
                    for (const stmt of node.body) {
                        if (checkNode(stmt)) return true;
                    }
                }

                // 檢查 expression statement
                if (node.type === StatementType.EXPRESSION && node.expression) {
                    return checkNode(node.expression);
                }

                return false;
            }

            return checkNode(funcExpr.body);
        }

        // ============================================================
        // Layer 2: 語句分析層
        // ============================================================

        /**
         * 分析單一語句
         * @param {Object} statement - AST 語句節點
         * @param {string} resolveName - resolve 參數名稱
         * @param {string} rejectName - reject 參數名稱
         * @param {Object} context - 用於收集 report 資訊
         * @returns {Object} { found: boolean, hasAssignment: boolean }
         */
        function analyzeStatement(statement, resolveName, rejectName, context = {}) {
            if (!statement) return { found: false, hasAssignment: false };

            switch (statement.type) {
                case StatementType.EXPRESSION:
                    // 檢查是否為賦值表達式
                    if (statement.expression.type === 'AssignmentExpression') {
                        const right = statement.expression.right;
                        if (right.type === IDENTIFIER && isResolveOrReject(right.name, resolveName, rejectName)) {
                            // 找到賦值,記錄節點並標記
                            if (context.assignmentNodes) {
                                context.assignmentNodes.push(statement);
                            }
                            return { found: false, hasAssignment: true };
                        } else if ([ExpressionType.FUNCTION, ExpressionType.ARROW_FUNCTION].includes(right.type)) {
                            const found = checkFunctionUsesResolveReject(right, resolveName, rejectName);
                            if (found) {
                                if (context.assignmentNodes) {
                                    context.assignmentNodes.push(statement);
                                }
                                return { found: false, hasAssignment: true };
                            } else {
                                return { found: false, hasAssignment: false };
                            }
                        }
                    }
                    return analyzeExpression(statement.expression, resolveName, rejectName, context);

                case StatementType.BLOCK:
                    return analyzeStatements(statement.body, resolveName, rejectName, context);

                case StatementType.IF:
                    return analyzeIfStatement(statement, resolveName, rejectName, context);

                case StatementType.SWITCH:
                    return analyzeSwitchStatement(statement, resolveName, rejectName, context);

                case StatementType.WHILE:
                case StatementType.FOR:
                case StatementType.FOR_OF:
                    return analyzeLoopStatement(statement, resolveName, rejectName, context);

                case StatementType.VARIABLE:
                    // 檢查變數宣告中的函數定義是否捕獲了 resolve/reject
                    if (statement.declarations) {
                        for (const declarator of statement.declarations) {
                            const init = declarator.init;
                            if (init && [ExpressionType.FUNCTION, ExpressionType.ARROW_FUNCTION].includes(init.type)) {
                                // 檢查函數內是否使用了 resolve/reject
                                if (checkFunctionUsesResolveReject(init, resolveName, rejectName)) {
                                    // 記錄節點並標記為賦值
                                    if (context.assignmentNodes) {
                                        context.assignmentNodes.push(statement);
                                    }
                                    return { found: false, hasAssignment: true };
                                }
                            }
                        }
                    }
                    return { found: false, hasAssignment: false };

                case StatementType.BREAK:
                case StatementType.CONTINUE:
                case StatementType.RETURN:
                    context.hasInterruptStatement = true;
                    return { found: false, hasAssignment: false };

                default:
                    return { found: false, hasAssignment: false };
            }
        }

        /**
         * 分析 if 語句(需要if 和 else 都有 resolve/reject)
         * @param {Object} ifStmt - if 語句節點
         * @param {string} resolveName - resolve 參數名稱
         * @param {string} rejectName - reject 參數名稱
         * @param {Object} context - 用於收集 report 資訊,包含 reportContext
         * @returns {Object} { found: boolean, hasAssignment: boolean }
         */
        function analyzeIfStatement(ifStmt, resolveName, rejectName, context = {}) {
            const consequentStatements = ifStmt.consequent.type === StatementType.BLOCK
                ? ifStmt.consequent.body
                : [ifStmt.consequent];

            const consequentResult = analyzeStatements(consequentStatements, resolveName, rejectName, context);

            // 如果沒有 else 分支,則不保證所有路徑都會 resolve
            if (!ifStmt.alternate) {
                // 報告缺少 else 分支 (無論 consequent 是否有 resolve)
                if (context.reportContext) {
                    context.reportContext.report({
                        node: ifStmt,
                        messageId: 'branchMissingElse'
                    });
                    // 標記已經報告過分支級別的錯誤
                    if (context.hasBranchReport !== undefined) {
                        context.hasBranchReport = true;
                    }
                }
                return { found: false, hasAssignment: consequentResult.hasAssignment };
            }

            // 檢查 alternate 是否為 else if (IfStatement) 或 else (其他類型)
            let alternateResult;
            if (ifStmt.alternate.type === StatementType.IF) {
                // else if 情況:遞歸分析,但不在這裡報告 (讓遞歸處理)
                alternateResult = analyzeIfStatement(ifStmt.alternate, resolveName, rejectName, context);
            } else {
                // else 情況:分析 else block
                const alternateStatements = ifStmt.alternate.type === StatementType.BLOCK
                    ? ifStmt.alternate.body
                    : [ifStmt.alternate];
                alternateResult = analyzeStatements(alternateStatements, resolveName, rejectName, context);
            }

            // 只在非 else-if 的情況下標記遺漏的分支
            if (context.reportContext) {
                if (!consequentResult.found) {
                    context.reportContext.report({
                        node: ifStmt.consequent,
                        messageId: 'branchMissingResolve'
                    });
                    // 標記已經報告過分支級別的錯誤
                    if (context.hasBranchReport !== undefined) {
                        context.hasBranchReport = true;
                    }
                }
                // 只有當 alternate 不是 IfStatement 時才報告
                if (!alternateResult.found && ifStmt.alternate.type !== StatementType.IF) {
                    context.reportContext.report({
                        node: ifStmt.alternate,
                        messageId: 'branchMissingResolve'
                    });
                    // 標記已經報告過分支級別的錯誤
                    if (context.hasBranchReport !== undefined) {
                        context.hasBranchReport = true;
                    }
                }
            }

            // 兩個分支都必須有 resolve/reject
            const bothFound = consequentResult.found && alternateResult.found;
            const hasAssignment = consequentResult.hasAssignment || alternateResult.hasAssignment;

            return { found: bothFound, hasAssignment };
        }

        /**
         * 分析 switch 語句(需要所有 case 都有 resolve/reject)
         * @param {Object} switchStmt - switch 語句節點
         * @param {string} resolveName - resolve 參數名稱
         * @param {string} rejectName - reject 參數名稱
         * @param {Object} context - 用於收集 report 資訊
         */
        function analyzeSwitchStatement(switchStmt, resolveName, rejectName, context = {}) {
            const cases = switchStmt.cases;
            let hasAssignment = false;
            for (const caseStmt of cases) {
                const result = analyzeStatements(caseStmt.consequent, resolveName, rejectName, context);
                if (!result.found) {
                    if (result.hasAssignment) {
                        hasAssignment = true;
                    } else {
                        context.reportContext.report({
                            node: caseStmt,
                            messageId: 'branchMissingResolve'
                        });
                    }
                }
            }
            return { found: true, hasAssignment };
        }

        /**
         * 分析迴圈語句
         * @param {Object} loopStmt - 迴圈語句節點
         * @param {string} resolveName - resolve 參數名稱
         * @param {string} rejectName - reject 參數名稱
         * @param {Object} context - 用於收集 report 資訊
         * @returns {Object} { found: boolean, hasAssignment: boolean }
         */
        function analyzeLoopStatement(loopStmt, resolveName, rejectName, context = {}) {
            // 分析迴圈 body
            let bodyStatements = [];

            if (loopStmt.body) {
                if (loopStmt.body.type === StatementType.BLOCK) {
                    bodyStatements = loopStmt.body.body;
                } else {
                    bodyStatements = [loopStmt.body];
                }
            }

            // 檢查 body 內是否有 resolve/reject
            const result = analyzeStatements(bodyStatements, resolveName, rejectName, context);

            // 如果 body 內有 resolve/reject，認為可以通過
            // 注意：這是實用策略，假設迴圈會執行
            return result;
        }

        // ============================================================
        // Layer 1: 最上層 - 語句陣列分析
        // ============================================================

        /**
         * 分析語句陣列(主要入口)
         * @param {Array} statements - 語句陣列
         * @param {string} resolveName - resolve 參數名稱
         * @param {string} rejectName - reject 參數名稱
         * @param {Object} context - 用於收集 report 資訊
         * @returns {Object} { found: boolean, hasAssignment: boolean }
         */
        function analyzeStatements(statements, resolveName, rejectName, context = {}) {
            let result = { found: false, hasAssignment: false };

            for (const statement of statements) {
                const stmtResult = analyzeStatement(statement, resolveName, rejectName, context);
                if (context.hasInterruptStatement) {
                    context.hasInterruptStatement = false;
                    break;
                }
                if (stmtResult.found) {
                    result.found = true;
                }
                result.hasAssignment = result.hasAssignment || stmtResult.hasAssignment;
            }

            return result;
        }

        return {
            NewExpression(node) {
                if (node.callee.name !== 'Promise') return;

                const executor = node.arguments[0];
                if (!executor || ![ExpressionType.FUNCTION, ExpressionType.ARROW_FUNCTION].includes(executor.type)) {
                    return;
                }

                const resolveArg = executor.params[0];
                const rejectArg = executor.params[1];

                const resolveName = resolveArg ? resolveArg.name : '';
                const rejectName = rejectArg ? rejectArg.name : '';

                // 如果沒有任何參數,無法檢查
                if (!resolveName && !rejectName) {
                    context.report({
                        node: node.arguments[0],
                        messageId: 'missingArguments',
                    });
                    return;
                };

                const body = executor.body.type === StatementType.BLOCK
                    ? executor.body.body
                    : [executor.body];

                // 建立 context 用於收集賦值節點和報告
                const analysisContext = {
                    assignmentNodes: [],
                    reportContext: context,
                    hasBranchReport: false  // 追蹤是否已經報告過分支級別的錯誤
                };

                // 使用新的分層架構分析
                const result = analyzeStatements(body, resolveName, rejectName, analysisContext);

                // 如果有賦值行為,發出警告
                if (result.hasAssignment && analysisContext.assignmentNodes.length > 0) {
                    for (const assignmentNode of analysisContext.assignmentNodes) {
                        context.report({
                            node: assignmentNode,
                            messageId: 'assignmentWarning'
                        });
                    }
                }

                // 如果完全沒有 resolve/reject(包含賦值),發出錯誤
                // 但如果已經報告過分支級別的錯誤,就不要再報告 Promise 級別的錯誤
                if (!result.found && !result.hasAssignment && !analysisContext.hasBranchReport) {
                    context.report({
                        node: executor.body,
                        messageId: 'promiseMayKeepPending'
                    });
                }
            }
        };
    }
};


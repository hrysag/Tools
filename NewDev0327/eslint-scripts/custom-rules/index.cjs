const tweenMissingStart = require("./rule-scripts/tween-missing-start.cjs");
const promisePendingCheck = require("./rule-scripts/promise-pending-check.cjs");
const scriptImportPolicy = require("./rule-scripts/script-import-policy.cjs");

module.exports = {
  rules: {
    "tween-missing-start": tweenMissingStart,
    "promise-pending-check": promisePendingCheck,
    "scripts-import-policy": scriptImportPolicy,
  }
};
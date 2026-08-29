// export class BaseDataEvent<Define extends Record<string, any>, Event extends keyof Define = keyof Define> {
//     static create<Define extends Record<string, any>, E extends keyof Define = keyof Define>(event: E, data?: Define[E]) {
//         return new BaseDataEvent(event, data);
//     } 
//     constructor(public type: Event, public data?: Define[Event]) {
//     }
// }
// export type DataMapToEvtMap<T extends Record<string, any>> = {
//     [event in keyof T]: BaseDataEvent<T, event>
// };
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c6c99hBqmBG87EqKKW9Yac0", "DataEvent", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c578feece94cc07e98d521d5600db05471b0bf5e.js.map
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, protocolAndDomainRE, localhostDomainRE, nonLocalhostDomainRE;

  /**
   * Loosely validate a URL `string`.
   *
   * @param {String} string
   * @return {Boolean}
   */
  function isUrl(string) {
    if (typeof string !== 'string') {
      return false;
    }

    var match = string.match(protocolAndDomainRE);

    if (!match) {
      return false;
    }

    var everythingAfterProtocol = match[1];

    if (!everythingAfterProtocol) {
      return false;
    }

    if (localhostDomainRE.test(everythingAfterProtocol) || nonLocalhostDomainRE.test(everythingAfterProtocol)) {
      return true;
    }

    return false;
  }

  _export("isUrl", isUrl);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9acb6cS0BtD76FVR0AoNcIO", "isURL", undefined);

      /**
       * RegExps.
       * A URL must match #1 and then at least one of #2/#3.
       * Use two levels of REs to avoid REDOS.
       */
      protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;
      localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/;
      nonLocalhostDomainRE = /^[^\s\.]+\.\S{2,}$/;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=25d1027855ad73e6afc8816cf6c279881fb43064.js.map
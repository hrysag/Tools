System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Utility, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, GameRecord;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../../../Utils/Core", _context.meta, extras);
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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Utility = _unresolved_2.Utility;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "52578CTx+xISapABH179gQq", "GameRecord", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameRecord", GameRecord = (_dec = ccclass('GameRecord'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec(_class = (_class2 = class GameRecord extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "recordTime", _descriptor, this);

          _initializerDefineProperty(this, "recordID", _descriptor2, this);

          _initializerDefineProperty(this, "playerID", _descriptor3, this);

          _initializerDefineProperty(this, "betValue", _descriptor4, this);

          _initializerDefineProperty(this, "winScore", _descriptor5, this);

          _initializerDefineProperty(this, "originalScore", _descriptor6, this);

          _initializerDefineProperty(this, "finalScore", _descriptor7, this);

          this.id = '';
          //交易序號
          this.slotdata = '';
          //盤⾯資料
          this.time = '';
          //timestamp (utc+0)
          this.version = '';
          //版本號
          this.bet = '';
          //押注⾦額
          this.win = '';
          //贏分
          this.account = '';
          //玩家id
          this.total = '';
          //玩家spin 結束後財產
          this.before_total = '';
          //玩家spin 開始前財產
          this.timeFormat = '';
        }

        init() {
          var url = window.location.href;
          var urlParams = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).getURLParams(url);

          if (!(_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).isDev()) {
            this.slotdata = urlParams.get('slotdata');
            this.id = urlParams.get('id');
            this.time = urlParams.get('time');
            this.version = urlParams.get('version');
            this.bet = urlParams.get('bet');
            this.win = urlParams.get('win');
            this.account = urlParams.get('account');
            this.total = urlParams.get('total');
            this.before_total = urlParams.get('before_total');
          } else {
            this.slotdata = '';
            this.id = '12345';
            this.time = '1721962280';
            this.version = '1.5';
            this.bet = '300';
            this.win = '100';
            this.account = 'myID';
            this.total = '800';
            this.before_total = '1000';
          }

          this.timeFormat = this.getTimeFormatByTimestamp(parseInt(this.time));
          this.setRecordID(this.id);
          this.setPlayerID(this.account);
          this.setRecordTime(this.timeFormat);
          this.setBetValue(this.bet);
          this.setWinScore(this.win);
          this.setOriginalScore(this.before_total);
          this.setFinalScore(this.total);
        }

        setRecordTime(time) {
          this.recordTime.string = time;
        }

        setRecordID(id) {
          this.recordID.string = id;
        }

        setPlayerID(id) {
          this.playerID.string = id;
        }

        setBetValue(value) {
          this.betValue.string = parseFloat(value).fixed().numberComma();
        }

        setWinScore(score) {
          this.winScore.string = parseFloat(score).fixed().numberComma();
        }

        setOriginalScore(score) {
          this.originalScore.string = parseFloat(score).fixed().numberComma();
        }

        setFinalScore(score) {
          this.finalScore.string = parseFloat(score).fixed().numberComma();
        }

        getTimeFormatByTimestamp(timestamp) {
          var date = new Date(timestamp * 1000); // 使用 toLocaleString 方法并传递时区选项

          var options = {
            timeZone: 'Asia/Taipei',
            // 设定时区，例如：Asia/Taipei
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false // 使用24小时制

          };
          var formattedDateTime = date.toLocaleString('zh-TW', options);
          return formattedDateTime;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "recordTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "recordID", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playerID", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "betValue", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "winScore", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "originalScore", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "finalScore", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0605f673e5297e7eac4b50a9053fc71c570c35f6.js.map
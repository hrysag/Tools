System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GuisCenterFWBase, Node, log, GuiBasic, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfIfGui(extras) {
    _reporterNs.report("IfGui", "./GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuiOption(extras) {
    _reporterNs.report("GuiOption", "./GuiDefinitionsBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuisCenterFWBase(extras) {
    _reporterNs.report("GuisCenterFWBase", "./GuisCenterFWBase", _context.meta, extras);
  }

  _export("GuiBasic", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      log = _cc.log;
    }, function (_unresolved_2) {
      GuisCenterFWBase = _unresolved_2.GuisCenterFWBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a3498VRWdNPw4yrdrcXT4zj", "GuiBase", undefined);
      /**
       * Created by EricHuang on 2023/9/18.
       * 可能要刪掉這個....
       */


      __checkObsolete__(['Component', 'Node']);

      __checkObsolete__(['log']);

      _export("GuiBasic", GuiBasic = class GuiBasic extends Node {
        /**
         * ps-
         * Component再被添加到node的時候,這個node才會有值
         * 该组件被附加到的节点。组件总会附加到一个节点
        */
        //public emitter:EventTarget;
        constructor(ids) {
          if (ids === void 0) {
            ids = '';
          }

          super(); //this.emitter=new EventTarget();
          //this.id='';

          this.ids = ids;
        }
        /*--20230621已取消,用promise來取代
        set layoutCompleteFreebackFunction(func:() => void)
        {
            this._layoutCompleteFreebackFunction=func;
            
        }*/

        /**
         * step1.
         * overrite it
         * @param value guiData before layout
         */


        setData(value) {
          //--這邊要再修掉
          //GuisCenterFWBase.aryMapGuiClass[this.id]=this;
          (_crd && GuisCenterFWBase === void 0 ? (_reportPossibleCrUseOfGuisCenterFWBase({
            error: Error()
          }), GuisCenterFWBase) : GuisCenterFWBase).aryMapGuiClass[value.id] = this;
          this.ids = value.id; //--381之後會讀不到這個interface的屬性...

          log('test_guiInterface', this.ids);
        } //public init(others?:any):void

        /**
         * step2.
         * overrite it
         */


        init() {//--do something about initGuiData
        }
        /**
         * step3
         */


        execute() {
          var _this = this;

          return _asyncToGenerator(function* () {
            yield _this.setLayout();

            _this.layoutComplete();
          })();
        }
        /**
          * override it
          * do ur layout
          * 
          */


        setLayout() {
          return _asyncToGenerator(function* () {})();
        } //--do something after layout

        /**
         * override-step4
         * do something after layoutgui
         */


        layoutComplete() {//this._layoutCompleteFreebackFunction();
        }

        remove() {} //getCompontItem(id:string):Component
        //getNodeItem(id:string):Node
        //--override it-------return this


        getCompontItem(id) {
          var r;
          return r;
        }
        /*
        public getNodeItem(id:string):Node
        {
            let r:Node; 
            return r;
        }*/


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a5a41ca5e1d40c4fefe0e81276b9fe1fc115dc53.js.map
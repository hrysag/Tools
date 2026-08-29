System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, FacadeForGameView, _crd;

  function _reportPossibleCrUseOfAbstractViewModel(extras) {
    _reporterNs.report("AbstractViewModel", "./AbstractViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbstractModel(extras) {
    _reporterNs.report("AbstractModel", "./AbstractModel", _context.meta, extras);
  }

  _export("FacadeForGameView", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7feef0Cm7RLJarZwyWEZ4oU", "Facade", undefined);

      /**
       * Created by EricHuang on 2023/9/07.
       */
      __checkObsolete__(['Component', 'director', 'Node']);

      /**
       * 只會產生一唯一一筆vm資料,並且回傳該vm component
       */
      __checkObsolete__(['log']);

      _export("FacadeForGameView", FacadeForGameView = class FacadeForGameView {
        static getInstance() {
          return FacadeForGameView._instance ? FacadeForGameView._instance : new FacadeForGameView();
        } //private _classMap: {[key:string]:new ()=> AbstractViewModel}
        //private _classMap: new ()=> AbstractViewModel;
        //private _classMap: {[key:string]: T}


        constructor() {
          this._classVM = void 0;
          this._realVM = void 0;
          this._realModel = void 0;

          if (FacadeForGameView._instance != null) {
            throw new Error('plz use getInstance() to get FacadeForGameView');
          }

          FacadeForGameView._instance = this; //this._classMap={};

          this._realVM = null;
        }

        getClassInstance(className) {
          if (this._realVM) {
            log('get_vm');
            return this._realVM;
          } else {
            log('create_vm');
            this._realVM = new this._classVM();

            this._realVM.addModel(this._realModel);

            this._realVM.init();

            return this._realVM;
          }
          /*
          if(this._realVM)
          {
              log('return_realVM');
              return this._realVM;
           }else if(!this._realVM && this._classMap[className])
          {
              log('return_create_realVM');
               let instance=this._classMap[className];
               let node:Node=new Node(className);
              
              this._realVM=node.addComponent(instance);
               this._realVM.addModel(this._realModel);
              
               //cocos creator就是那麼機掰, Object.defineProperty
               //必須要其中的物件是component然後附加到node上面才會正常啟動.
               //不然會出現[重複定義屬性]的雞掰問題.
               //這也是vm非得繼承component的關係
              
              director.addPersistRootNode(node);//--加到node後才會觸發onload
              
              delete this._classMap[className];
               log('wtf_nodes',director.getScene());
              
              return this._realVM;
              
          }else{
              
              console.error(`Class '${className}' not found in classMap.`);
              
              return null;
          }*/

        }

        setModelInstance(instance) {
          if (!this._realModel) {
            this._realModel = instance;
          }
        } //public addClassInstance<T extends new ()=> AbstractViewModel>(className: string, instance: T ): void


        addClassInstance(instance) {
          this._classVM = instance;
          /*
          if (!this._classMap[className]) 
          {
             this._classMap[className] = instance;
           } else {
              
              console.error(`Class '${className}' already exists in classMap.`);
          }*/
        }

      });

      FacadeForGameView._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fe063809e517a0baed6afc1cb9dc2493cd30f824.js.map
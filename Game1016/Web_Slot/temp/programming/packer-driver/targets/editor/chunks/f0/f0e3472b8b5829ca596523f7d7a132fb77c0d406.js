System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AnimationSelectionResolver, _crd;

  function _reportPossibleCrUseOfPlaySelector(extras) {
    _reporterNs.report("PlaySelector", "../Definitions/IPlayOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateLike(extras) {
    _reporterNs.report("StateLike", "../Definitions/IPlayOptions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropLike(extras) {
    _reporterNs.report("PropLike", "../Definitions/IPlayOptions", _context.meta, extras);
  }

  _export("AnimationSelectionResolver", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8084aeGHq1OSJeKLaA4U9bG", "AniSelectionResolver", undefined);

      /**
       *  this.resolveTargetName('MyClip');                  // 直接 targetName
          this.resolveTargetName('SuperWin');                // 自訂 stateKey → 轉成對應 targetName
          this.resolveTargetName(AnimationStateType.Win);    // Enum stateKey
          this.resolveTargetName({ aniState: 'SuperWin' });  // 指定 stateKey
          this.resolveTargetName({ targetName: 'MyClip' });  // 指定 targetName
          this.resolveTargetName(0);                         // 取第 0 筆 AnimationState 的 targetName
       */
      _export("AnimationSelectionResolver", AnimationSelectionResolver = class AnimationSelectionResolver {
        /**
         * 
         * @param stateListProvider 提供「狀態清單」，是 _animationStateList.clipsInfo
         * @param propListProvider 提供「播放資料清單」，是 _animationPlayStateList.clipsInfo
         * @param keySelector 如何從 state 取出 key（若 state.getStateKey 未提供）
         * @param enumToKey 將 Enum 數值轉成 key 的方法，例如：(v)=>AnimationStateType[v]
         * @param logger 可選：log 函式（丟 console.warn/console.debug 之類的）
         */
        constructor(stateListProvider, propListProvider, keySelector, enumToKey, logger = () => {}) {
          /**
           * 狀態清單的映射表（O(1)）
           * 「狀態清單」_animationStateList.clipsInfo
           * stateKey -> targetName(狀態當索引換_animationPlayStateList的索引)
           */
          this.stateKey2Target = new Map();
          this._disposed = false;

          /**
           * targetName -> PropDef(用targetName當索引)
           * 「播放資料清單」是 _animationPlayStateList.clipsInfo
           */
          this.targetName2Prop = new Map();
          this.stateListProvider = void 0;
          this.propListProvider = void 0;
          this.keySelector = void 0;
          this.enumToKey = void 0;
          this.logger = void 0;
          //-提供「狀態清單」，是 _animationStateList.clipsInfo
          this.stateListProvider = stateListProvider; //-提供「播放資料清單」，是 _animationPlayStateList.clipsInfo

          this.propListProvider = propListProvider; //-如何從 state 取出 key（若 state.getStateKey 未提供）

          this.keySelector = keySelector; //-將 Enum 數值轉成 key 的方法，例如：(v) => AnimationStateType[v]

          this.enumToKey = enumToKey; //-可選：log 函式（丟 console.warn/console.debug 之類的）

          this.logger = logger;
        }
        /** 重新建立兩張快取表（變動/更新clipsInfo 後請呼叫） */


        rebuildAnimationCaches() {
          var _this$stateListProvid, _this$propListProvide;

          if (this._disposed) return;
          this.stateKey2Target.clear();
          this.targetName2Prop.clear();
          const states = (_this$stateListProvid = this.stateListProvider()) != null ? _this$stateListProvid : [];

          for (const st of states) {
            var _ref, _st$getStateKey, _this$keySelector, _st$targetName;

            if (!st) continue;
            const key = ((_ref = (_st$getStateKey = st.getStateKey == null ? void 0 : st.getStateKey()) != null ? _st$getStateKey : (_this$keySelector = this.keySelector) == null ? void 0 : _this$keySelector.call(this, st)) != null ? _ref : '').trim(); //-切掉空白字元

            const tgt = ((_st$targetName = st.targetName) != null ? _st$targetName : '').trim();
            if (!key || !tgt) continue;
            this.stateKey2Target.set(key, tgt);
          }

          const props = (_this$propListProvide = this.propListProvider()) != null ? _this$propListProvide : [];

          for (const def of props) {
            var _def$targetName;

            const tgt = ((_def$targetName = def == null ? void 0 : def.targetName) != null ? _def$targetName : '').trim();
            if (!tgt) continue;
            this.targetName2Prop.set(tgt, def);
          }
        }
        /** 當快取尚未建好時自動重建一次 */


        ensureCachesBuilt() {
          if (this._disposed) return;

          if (this.stateKey2Target.size === 0 || this.targetName2Prop.size === 0) {
            this.rebuildAnimationCaches();
          }
        }
        /** 把任何 PlaySelector 解析成 targetName（O(1)） */


        processMapInfoNameFast(value) {
          if (this._disposed) return;
          if (value == null) return ''; // string：先當 targetName 查，沒有再當 stateKey 映射

          if (typeof value === 'string') {
            const v = value.trim();
            if (this.targetName2Prop.has(v)) return v;
            const mapped = this.stateKey2Target.get(v);
            if (mapped) return mapped;
            this.logger('warn', '[Resolver] not found by targetName or stateKey:', v);
            return '';
          } // number：當作 stateList 的 index


          if (typeof value === 'number') {
            var _this$stateListProvid2, _this$stateListProvid3, _list$idx$targetName, _list$idx;

            if (this.enumToKey) {
              const key = this.enumToKey(value);
              const mapped = this.stateKey2Target.get(key);
              if (mapped) return mapped; // ← 直接用 enum 名稱對到 targetName
            }

            const list = (_this$stateListProvid2 = (_this$stateListProvid3 = this.stateListProvider) == null ? void 0 : _this$stateListProvid3.call(this)) != null ? _this$stateListProvid2 : [];
            const idx = Math.trunc(value);

            if (idx < 0 || idx >= list.length) {
              this.logger('warn', '[Resolver] AnimationState index out of range:', value, '(length=', list.length, ')');
              return '';
            }

            const tgt = ((_list$idx$targetName = (_list$idx = list[idx]) == null ? void 0 : _list$idx.targetName) != null ? _list$idx$targetName : '').trim();
            if (!tgt) this.logger('warn', '[Resolver] empty targetName at index:', idx);
            return tgt || '';
          } // object：優先 targetName，其次 aniState（enum 或字串）


          if (value.targetName) return value.targetName.trim();

          if (value.aniState !== undefined) {
            const key = typeof value.aniState === 'string' ? value.aniState.trim() : this.enumToKey ? this.enumToKey(value.aniState) : String(value.aniState);
            const mapped = this.stateKey2Target.get(key);
            if (mapped) return mapped;
            this.logger('warn', '[Resolver] aniState not found or empty targetName:', value.aniState);
          }

          return '';
        }
        /** 直接取得對應的 PropDef（若找不到回傳 undefined） */


        resolveProp(value) {
          if (this._disposed) return undefined; //console.log('use_resolveProp:', value);

          this.ensureCachesBuilt();
          const targetName = this.processMapInfoNameFast(value);
          return targetName ? this.targetName2Prop.get(targetName) : undefined;
        }

        onDispose() {
          this._disposed = true;
          this.stateKey2Target.clear();
          this.targetName2Prop.clear();

          this.stateListProvider = () => [];

          this.propListProvider = () => [];

          this.keySelector = undefined;
          this.enumToKey = undefined;

          this.logger = () => {};
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f0e3472b8b5829ca596523f7d7a132fb77c0d406.js.map
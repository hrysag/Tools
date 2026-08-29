System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, SymbolAniHandoffManager, _crd;

  function _reportPossibleCrUseOfIReelInfo(extras) {
    _reporterNs.report("IReelInfo", "../../BasicGameDataDefinition/BasicGameDataDefinition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISymbolOwnerAgent(extras) {
    _reporterNs.report("ISymbolOwnerAgent", "./IAniHandoff", _context.meta, extras);
  }

  _export("SymbolAniHandoffManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3d97AChfNOHpa5xi4Z/UWe", "SymbolAniHandoffManager", undefined);

      __checkObsolete__(['Game', 'Node']);

      ;

      /**
       * 負責管理符號動畫的控制權轉移
       * 這裡只會紀錄資料(reelIndex+iconIndex+symbolId=key)與控制權轉移的邏輯
       */
      _export("SymbolAniHandoffManager", SymbolAniHandoffManager = class SymbolAniHandoffManager {
        _log(tag, payload = {}, level = 'log') {//return;
          //const fn = level === 'warn' ? console.warn : level === 'error' ? console.error : console.log;
          // 輸出格式：[handoff log] TAG #序號  {...payload}
          //fn(`${SymbolAniHandoffManager.LOG_PREFIX} ${tag} #${++this._seq}`, payload);
          //GameUtilsTools.debugLog(SymbolAniHandoffManager.LOG_PREFIX, `${tag} #${this._seq}`, payload, level);
        } // === tracing fields ===


        constructor() {
          //--ownerList
          //protected _ownerMap: Map<number, ISymbolOwnerAgent>;
          this._ownerMap = void 0;
          this._registry = void 0;
          //=========debug mode=====================================
          // === tracing fields ===
          this._traceOn = true;
          // 關掉就靜音
          this._seq = 0;
          this._registry = new Map();
          this._ownerMap = new Map();
        } //--pick的用法
        //-https://www.typescriptlang.org/docs/handbook/utility-types.html
        //-https://pjchender.dev/ironman-2021/ironman-2021-day17/
        //-這邊就是利用pick的方式抽出3個屬性來當作索引字串

        /**
         * 會利用reelIndex與iconIndex與symbolId三個屬性來組成一個字串作為key當作單一識別碼
         * 同時確保同一個位置可以持有多筆不同的資料,且symbolId在遊戲中同一格不可能出現兩次
         * @param info 最少要是reelIndex與iconIndex和symbolId三個屬性
         * @returns 
         */


        makeKey(info) {
          return `${info.reelIndex}:${info.iconIndex}:${info.symbolId}`;
        }

        getOwnerById(ownerId) {
          return this._ownerMap.get(ownerId);
        }

        ensureOwnerRegistered(owner) {
          if (!this._ownerMap.has(owner.ownerId)) {
            this._ownerMap.set(owner.ownerId, owner);
          }
        }
        /** 預先註冊一個 Owner（可選，用不到可不叫） */


        registerOwner(owner) {
          this.ensureOwnerRegistered(owner);
        }
        /** 移除 owner 實體（注意：不會清理 _registry 裡指向該 ownerId 的項目） */


        unregisterOwner(ownerId) {
          this._ownerMap.delete(ownerId);
        }
        /** 直接從 registry 搜 ownerId（較快，不掃 Registry） */


        findOwnerById(ownerId) {
          return this.getOwnerById(ownerId);
        } // ====== 資料註冊 / 查詢 ======


        register(info, owner) {
          this.ensureOwnerRegistered(owner);
          const key = this.makeKey(info);

          const prev = this._registry.get(key);

          if (!prev) {
            this._registry.set(key, {
              info,
              ownerId: owner.ownerId
            });

            this._log('REGISTER', {
              key,
              ownerId: owner.ownerId,
              info
            });
          } else {
            const overwritten = prev.ownerId !== owner.ownerId;

            this._registry.set(key, {
              info,
              ownerId: owner.ownerId
            });

            this._log(overwritten ? 'REGISTER_REBIND' : 'REGISTER_DUP', {
              key,
              fromOwner: prev.ownerId,
              toOwner: owner.ownerId,
              info
            });
          } //this._registry.set(this.makeKey(info), { info, ownerId: owner.ownerId });

        } //public multiRegisty(info: Pick<I, 'reelIndex' | 'iconIndex' | 'symbolId'>[], owner: OwnerAgent): Promise<void> {


        multiRegisty(info, owner) {
          this.ensureOwnerRegistered(owner);
          let rebind = 0,
              dup = 0,
              fresh = 0;

          for (const item of info) {
            const key = this.makeKey(item);

            const prev = this._registry.get(key);

            if (!prev) fresh++;else if (prev.ownerId !== owner.ownerId) rebind++;else dup++;

            this._registry.set(key, {
              info: item,
              ownerId: owner.ownerId
            });
          }

          this._log('MULTI_REGISTER', {
            targetOwner: owner.ownerId,
            fresh,
            rebind,
            dup,
            total: info.length
          });
          /*
          for (const item of info) {
              this._registry.set(this.makeKey(item), { info: item, ownerId: owner.ownerId });
          }*/
          //return Promise.resolve();

        }
        /**
         * 只限定現有的ownerId來轉移..這裡不會產生新的owner
         * @param info 要註冊的symbol位置資訊
         * @param targetOwnerId 
         * @returns 
         */


        multiRegistryByID(info, targetOwnerId) {
          const owner = this.findOwnerById(targetOwnerId);
          if (!owner) return Promise.resolve();

          for (const item of info) {
            this._registry.set(this.makeKey(item), {
              info: item,
              ownerId: owner.ownerId
            });
          }

          return Promise.resolve();
        }

        getInfoByOwnerAgent(info, owner) {
          var _entry$ownerId;

          const key = this.makeKey(info);

          const entry = this._registry.get(key);

          if (entry && entry.ownerId === owner.ownerId) return info;

          this._log('GET_INFO_MISS', {
            key,
            expectedOwner: owner.ownerId,
            actualOwner: (_entry$ownerId = entry == null ? void 0 : entry.ownerId) != null ? _entry$ownerId : null
          }, 'warn');

          return null;
          /*    
          const targetKey = this.makeKey(info);
          const entry = this._registry.get(targetKey);
          if (entry && entry.ownerId === owner.ownerId) {
              return info;
          }*/
        }

        getOwner(info) {
          const entry = this._registry.get(this.makeKey(info));

          return entry ? this.getOwnerById(entry.ownerId) : undefined;
        }

        getOwnerId(info) {
          var _this$_registry$get;

          return (_this$_registry$get = this._registry.get(this.makeKey(info))) == null ? void 0 : _this$_registry$get.ownerId;
        }

        getAllOwnersInCell(reelIndex, iconIndex) {
          const result = [];

          for (const {
            info,
            ownerId
          } of this._registry.values()) {
            if (info.reelIndex === reelIndex && info.iconIndex === iconIndex) {
              const owner = this.getOwnerById(ownerId);
              if (owner) result.push({
                info,
                owner
              });else console.warn(`[getAllOwnersInCell] ownerId=${ownerId} not found in _ownerMap`);
            }
          }

          return result;
        } // ====== 交接（批次 / 單筆 / 指定） ======

        /**
         * 由目前 owner 主動將自己擁有的<所有-ALL>動畫位置資料交給另一個 owner（透過 ownerId 找）
         */


        handoffByOwnerId(currentOwner, targetOwnerId) {
          const newOwner = this.findOwnerById(targetOwnerId);

          if (!newOwner) {
            this._log('HANDOFF_OWNER_MISS_TARGET', {
              targetOwnerId
            }, 'warn');

            return;
          }

          if (currentOwner.ownerId === newOwner.ownerId) {
            this._log('HANDOFF_NOOP_SAME_OWNER', {
              ownerId: currentOwner.ownerId
            });

            return; //-自己回家吃大便
          }

          let moved = 0;

          for (const [key, entry] of this._registry.entries()) {
            if (entry.ownerId !== currentOwner.ownerId) continue;
            const targetNode = currentOwner.beforeRelease(entry.info);
            newOwner.afterAcquire(entry.info, targetNode);

            this._registry.set(key, {
              info: entry.info,
              ownerId: newOwner.ownerId
            });

            moved++;
          } //this._log('HANDOFF_ALL', { from: currentOwner.ownerId, to: newOwner.ownerId, moved });

        }
        /**
         * 單筆交接 — 指定一個 symbol 轉交給指定的 ownerId
         * PS:在轉移所有權的時候可以利用info夾帶你想要夾出去的資料(必須吻合約束汎型)
         * @param info 要交接的 symbol 位置信息（必須包含 symbolId）
         * @param targetOwnerId 目標 owner 的唯一 ID
         */


        async handoffSingleByOwnerId(info, targetOwnerId) {
          const key = this.makeKey(info);

          const entry = this._registry.get(key);

          if (!entry) {
            this._log('HANDOFF_SINGLE_MISS_ENTRY', {
              key,
              targetOwnerId
            }, 'warn');

            return;
          } //const { owner: currentOwner } = entry;


          if (entry.ownerId === targetOwnerId) {
            this._log('HANDOFF_SINGLE_NOOP', {
              key,
              ownerId: targetOwnerId
            });

            return; // 相同 owner 不處理
          }

          const currentOwner = this.getOwnerById(entry.ownerId);

          if (!currentOwner) {
            this._log('HANDOFF_SINGLE_MISS_CURRENT_OWNER', {
              key,
              currentOwnerId: entry.ownerId
            }, 'warn');

            return;
          }

          let newOwner = this.findOwnerById(targetOwnerId);

          if (!newOwner) {
            //--再找不到的情況下...考慮直接幫指定的owner直接註冊轉手
            //--PS-就是在還沒轉交的時候(slot2show,要主動將資料交給另一個owner,此時show尚未註冊任何持有者)
            // this._ownerMap.set(targetOwnerId, someOwnerInstance);
            let allNewOwner = this.findOwnerById(targetOwnerId);

            if (!allNewOwner) {
              this._log('HANDOFF_SINGLE_MISS_TARGET_OWNER', {
                key,
                targetOwnerId
              }, 'warn');

              return;
              return;
            } else {
              this.register(info, allNewOwner);
              newOwner = this.findOwnerById(targetOwnerId);
            }
          }

          const targetNode = currentOwner.beforeRelease(info);
          await newOwner.afterAcquire(info, targetNode);

          this._registry.set(key, {
            info,
            ownerId: newOwner.ownerId
          }); //this.debugCheckAllOwners();


          this._log('HANDOFF_SINGLE_OK', {
            key,
            from: currentOwner.ownerId,
            to: newOwner.ownerId
          });
        } //--PS:在轉移所有權的時候可以利用info夾帶你想要夾出去的資料(必須吻合約束汎型)


        handoff(info, newOwner) {
          const key = this.makeKey(info); //console.log('useHandoff', key, info, newOwner);
          //--for test---
          //this.debugCheckAllOwners();
          //console.log('===use:Handoff_test===');
          //--for test---

          const entry = this._registry.get(key);

          if (!entry) {
            this._log('HANDOFF_MISS_ENTRY', {
              key,
              to: newOwner.ownerId
            }, 'warn');

            return Promise.resolve();
          }

          if (entry.ownerId === newOwner.ownerId) {
            this._log('HANDOFF_NOOP_SAME_OWNER', {
              key,
              ownerId: newOwner.ownerId
            });

            return; //--相同的Owner不處理
          }

          const currentOwner = this.getOwnerById(entry.ownerId);

          if (!currentOwner) {
            this._log('HANDOFF_MISS_CURRENT_OWNER', {
              key,
              currentOwnerId: entry.ownerId
            }, 'warn');

            return Promise.resolve();
          }

          this.ensureOwnerRegistered(newOwner);
          const targetNode = currentOwner.beforeRelease(info); // 位置資料已經在 info 裡

          newOwner.afterAcquire(info, targetNode);

          this._registry.set(key, {
            info,
            ownerId: newOwner.ownerId
          });

          this._log('HANDOFF_OK', {
            key,
            from: currentOwner.ownerId,
            to: newOwner.ownerId
          });

          return Promise.resolve();
        }

        async multiHandoffBySameOwnerID(infos, targetOwnerId) {
          const multiTargetNode = new Map();
          const newOwner = this.findOwnerById(targetOwnerId);

          if (!newOwner) {
            this._log('MULTI_HANDOFF_MISS_TARGET_OWNER', {
              targetOwnerId,
              total: infos.length
            }, 'warn');

            return Promise.resolve();
          }

          let moved = 0,
              missEntry = 0,
              missCurr = 0,
              skippedSame = 0;

          for (const info of infos) {
            const key = this.makeKey(info);

            const entry = this._registry.get(key);

            if (!entry) {
              missEntry++; //console.warn(`No entry found for key: ${key}`);

              continue;
            }

            if (entry.ownerId === newOwner.ownerId) {
              skippedSame++;
              continue; //--相同的Owner不處理
            }

            const currentOwner = this.getOwnerById(entry.ownerId);

            if (!currentOwner) {
              missCurr++;
              continue;
            }

            const targetNode = currentOwner.beforeRelease(info); // 位置資料已經在 info 裡

            multiTargetNode.set(key, {
              data: info,
              node: targetNode
            });

            this._registry.set(key, {
              info,
              ownerId: newOwner.ownerId
            });

            moved++;
          }

          await newOwner.afterMultiAcquire(multiTargetNode);

          this._log('MULTI_HANDOFF_BY_ID', {
            targetOwnerId,
            moved,
            missedEntry: missEntry,
            missedCurrentOwner: missCurr,
            skippedSame,
            total: infos.length
          }); //this.debugCheckAllOwners();
          //console.log('===use:multiHandoffBySameOwnerID_test===');

        }

        async multiHandoffBySameOwner(infos, newOwner) {
          let moved = 0,
              missEntry = 0,
              missCurr = 0,
              skippedSame = 0;
          const multiTargetNode = new Map();

          for (const info of infos) {
            const key = this.makeKey(info); //console.log('useHandoff', key, info, newOwner);

            const entry = this._registry.get(key);

            if (!entry) {
              missEntry++;
              continue;
            }

            if (entry.ownerId === newOwner.ownerId) {
              skippedSame++;
              continue; //--相同的Owner不處理
            }

            const currentOwner = this.getOwnerById(entry.ownerId);

            if (!currentOwner) {
              //console.warn(`Current ownerId=${entry.ownerId} not found for key=${key}`);
              missCurr++;
              continue;
            }

            this.ensureOwnerRegistered(newOwner);
            const targetNode = currentOwner.beforeRelease(info); // 位置資料已經在 info 裡

            multiTargetNode.set(key, {
              data: info,
              node: targetNode
            });

            this._registry.set(key, {
              info,
              ownerId: newOwner.ownerId
            });

            moved++;
          }

          await newOwner.afterMultiAcquire(multiTargetNode);

          this._log('MULTI_HANDOFF', {
            to: newOwner.ownerId,
            moved,
            missedEntry: missEntry,
            missedCurrentOwner: missCurr,
            skippedSame,
            total: infos.length
          }); // this.debugCheckAllOwners();
          //console.log('===use:multiHandoffBySameOwner_test===');

        }

        unRegister(info) {
          const key = this.makeKey(info);

          const had = this._registry.delete(key); //this._registry.delete(this.makeKey(info));


          this._log(had ? 'UNREGISTER_OK' : 'UNREGISTER_MISS', {
            key,
            info
          }, had ? 'log' : 'warn'); //this.debugCheckAllOwners();
          //console.log('===use:unRegister_test===');

        }

        multiUnRegister(infos) {
          for (const info of infos) {
            const key = this.makeKey(info);

            const had = this._registry.delete(key);

            this._log(had ? 'MULTI_UNREGISTER_OK' : 'MULTI_UNREGISTER_MISS', {
              key,
              info
            }, had ? 'log' : 'warn');
          }
        }

        unRegisterAllBySameOwner(owner) {
          const ownerId = owner.ownerId;

          for (const [key, entry] of this._registry.entries()) {
            if (entry.ownerId === ownerId) {
              this._registry.delete(key);
            }
          }
        }

        debugSnapshotStats() {
          const byOwner = {};

          for (const {
            ownerId
          } of this._registry.values()) {
            var _byOwner$ownerId;

            byOwner[ownerId] = ((_byOwner$ownerId = byOwner[ownerId]) != null ? _byOwner$ownerId : 0) + 1;
          }

          const snap = {
            owners: this._ownerMap.size,
            entries: this._registry.size,
            byOwner
          };

          this._log('SNAPSHOT', snap);

          return snap;
        }

        debugCheckAllOwners() {
          //return;
          for (const [key, entry] of this._registry.entries()) {
            const owner = this.getOwnerById(entry.ownerId);
            /*
            GameUtilsTools.debugLog(SymbolAniHandoffManager.LOG_PREFIX, 'debugCheckAllOwners',
                {
                    message: `Entry key=${key}, ownerId=${entry.ownerId}, ownerFound=${!!owner}`
                });
            */
          } //console.log('=======now_debugCheckAllOwners_allMap=======' + '\n', this._registry);

        }

        releaseAll() {
          this._registry.clear();
        }

      });

      // 序號，方便串 log
      SymbolAniHandoffManager.LOG_PREFIX = '[handoff log]';

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=46abe26c543f165114a03312deb2a3dd694a2fc5.js.map
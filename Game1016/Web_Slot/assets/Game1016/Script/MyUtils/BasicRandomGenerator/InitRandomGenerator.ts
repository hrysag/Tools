import { IStrategyRandomGenerator } from './IStrategyRandomGenerator';

export interface IRandomData {
    groupSize: number; //--每組的大小
    totalGroups: number; //--總共幾組
    randomGroupSource: number[]; //--亂數來源
}

export class InitRandomGenerator implements IStrategyRandomGenerator<IRandomData> {

    public generate(value: IRandomData): number[][] {
        const { randomGroupSource: source, totalGroups, groupSize: k } = value;
        const n = source.length;
    
        // --- 基本檢查 ---
        if (totalGroups <= 0) return [];
        if (k <= 0) throw new Error(`groupSize(${k}) 必須 > 0`);
        if (k > n) throw new Error(`groupSize(${k}) 不能大於來源長度(${n})`);
        if (k === n && totalGroups > 1) {
          // 只有一種可能的集合，第二組起一定與上一組相同（就算順序不同，內容依然相同）
          throw new Error(`當 groupSize === source.length 時，只能產生 1 組與上一組內容不同的結果。`);
        }
    
        const result: number[][] = [];
    
        for (let i = 0; i < totalGroups; i++) {
          // 先複製並打散來源
          const bag = this.shuffleArray(source);
    
          if (i === 0) {
            // 第一組無限制
            result.push(bag.slice(0, k));
            continue;
          }
    
          // 之後每一組：先排除上一組，再補到足數
          const prev = result[i - 1];
          const prevSet = new Set(prev);
    
          // 1) 先從「不在上一組」的池子拿
          const poolNotPrev: number[] = [];
          const poolPrev: number[] = [];
          for (const x of bag) {
            (prevSet.has(x) ? poolPrev : poolNotPrev).push(x);
          }
    
          const group: number[] = [];
    
          // 先拿盡量多的「非上一組元素」
          const takeFromNotPrev = Math.min(k, poolNotPrev.length);
          group.push(...poolNotPrev.slice(0, takeFromNotPrev));
    
          // 2) 若不夠，再從「上一組」補到足數（因為 group 已含至少 1 個不同元素 → 內容必定不同）
          if (group.length < k) {
            // 為了更隨機，對上一組也打散後補
            const prevShuffled = this.shuffleArray(prev);
            group.push(...prevShuffled.slice(0, k - group.length));
          }
    
          result.push(group);
        }
    
        return result;
      }
  
    private removeMatchingElements(arr: number[], toRemove: number[]): number[] 
    {
        const setA = new Set(arr);
        return toRemove.filter(element => !setA.has(element));

    }
    // 隨機取 k 個（不重複）
    private sampleK(arr: number[], k: number): number[] {
      //return this.shuffleArray(arr).slice(0, k);
      return arr.slice(0,k);
    }
  
    private shuffleArray<T>(arr: T[]): T[] {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
  }
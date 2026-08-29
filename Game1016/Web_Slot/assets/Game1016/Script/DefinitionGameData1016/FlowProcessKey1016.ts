import { BasicShowResultProcessKey } from '../MyUtils/AsyncScope/Definitions/BasicGameFlowProcessKey';

function extendProcessKeys<
  Base extends Record<string, string | null | object>,
  Ext extends Record<string, string>
>(base: Base, ext: Ext) {
  return { ...base, ...ext } as const;
}

export const ShowResultProcessKey1016 = extendProcessKeys(
  BasicShowResultProcessKey,
  { Wild_MOVEMENT: 'WILD_MOVEMENT', Wild_NO_MOVEMENT: 'WILD_NO_MOVEMENT' }

);
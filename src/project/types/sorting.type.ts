import {
  SortingType,
  SortingDirection,
} from '../const/const';

type TSortingType=(typeof SortingType) [keyof typeof SortingType];
type TSortingDirection = (typeof SortingDirection) [keyof typeof SortingDirection];
type TSortingKey = `${TSortingDirection}${TSortingType}`

export type { TSortingType, TSortingDirection, TSortingKey };

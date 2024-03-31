import { SortingType, SortingDirection } from '../const/const';

type TSortingType = (typeof SortingType)[keyof typeof SortingType];

type TSortingDirection = (typeof SortingDirection)[keyof typeof SortingDirection];

type TSortingKey = `${TSortingType}-${TSortingDirection}`;

export type { TSortingType, TSortingDirection, TSortingKey };

<<<<<<< HEAD
import {
  SortingType,
  SortingDirection,
} from '../const/const';

type TSortingType=(typeof SortingType) [keyof typeof SortingType];
type TSortingDirection = (typeof SortingDirection) [keyof typeof SortingDirection];
type TSortingKey = `${TSortingDirection}${TSortingType}`

=======
import { SortingType, SortingDirection } from '../const/const';

type TSortingType = (typeof SortingType)[keyof typeof SortingType];

type TSortingDirection = (typeof SortingDirection)[keyof typeof SortingDirection];

type TSortingKey = `${TSortingDirection}${TSortingType}`;

>>>>>>> 7155c6c (fix after rewiew)
export type { TSortingType, TSortingDirection, TSortingKey };

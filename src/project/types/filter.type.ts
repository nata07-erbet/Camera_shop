import {
  FilterCategoryMap,
  FilterTypeMap,
  FilterLevelMap,
} from '../const/const';


type TFilterPrice = {
  priceMin: number;
  priceMax: number;
};

type TFilterCategory = typeof FilterCategoryMap[keyof typeof FilterCategoryMap];
type TFilterType = typeof FilterTypeMap[keyof typeof FilterTypeMap];
type TFilterLevel = typeof FilterLevelMap[keyof typeof FilterLevelMap];


type TFilterData = {
  category: TFilterCategory | null;
  levels: TFilterLevel[];
  types: TFilterType[];
}

export type { TFilterCategory, TFilterType, TFilterLevel, TFilterData, TFilterPrice };

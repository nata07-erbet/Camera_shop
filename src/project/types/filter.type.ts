import {
  FilterCategoryMap,
  FilterTypeMap,
  FilterLevelMap,
} from '../const/const';

type TFilterCategory = typeof FilterCategoryMap[keyof typeof FilterCategoryMap];
type TFilterType = typeof FilterTypeMap[keyof typeof FilterTypeMap];
type TFilterLevel = typeof FilterLevelMap[keyof typeof FilterLevelMap];

type TFilterFeatures = {
  category: TFilterCategory | null;
  levels: TFilterLevel[];
  types: TFilterType[];
}

type TFilterPriceRange = [number | null, number | null];

export type { TFilterCategory, TFilterType, TFilterLevel, TFilterFeatures, TFilterPriceRange };

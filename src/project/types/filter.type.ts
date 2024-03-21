import {
  FilterCategoryMap,
  FilterTypeMap,
  FilterLevelMap
} from '../const/const';

type TFilterCategory = keyof typeof FilterCategoryMap;
type TFilterType = keyof typeof FilterTypeMap;
type TFilterLevel = keyof typeof FilterLevelMap;

export type { TFilterCategory, TFilterType, TFilterLevel };

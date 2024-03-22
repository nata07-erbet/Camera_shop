import {
  FilterCategoryMap,
  FilterTypeMap,
  FilterLevelMap
} from '../const/const';

type TFilterCategory = (typeof FilterCategoryMap)[keyof typeof FilterCategoryMap];
type TFilterType = (typeof FilterTypeMap)[keyof typeof FilterTypeMap];
type TFilterLevel =(typeof FilterLevelMap)[keyof typeof FilterLevelMap];

type TFilterData = {
  'category': TFilterCategory | null;
  'types': TFilterType[];
  'levels': TFilterLevel[];
}

export type { TFilterCategory, TFilterType, TFilterLevel, TFilterData };

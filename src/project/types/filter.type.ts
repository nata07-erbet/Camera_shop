import {
  FilterCategoryMap,
  FilterTypeMap,
  FilterLevelMap
} from '../const/const';

<<<<<<< HEAD
type TFilterCategory = (typeof FilterCategoryMap)[keyof typeof FilterCategoryMap];
type TFilterType = (typeof FilterTypeMap)[keyof typeof FilterTypeMap];
type TFilterLevel =(typeof FilterLevelMap)[keyof typeof FilterLevelMap];

type TFilterData = {
  'category': TFilterCategory | null;
  'types': TFilterType[];
  'levels': TFilterLevel[];
=======
type TFilterCategory = typeof FilterCategoryMap[keyof typeof FilterCategoryMap];
type TFilterType = typeof FilterTypeMap[keyof typeof FilterTypeMap];
type TFilterLevel = typeof FilterLevelMap[keyof typeof FilterLevelMap];

type TFilterData = {
  category: TFilterCategory | null;
  levels: TFilterLevel[];
  types: TFilterType[];
>>>>>>> 7155c6c (fix after rewiew)
}

export type { TFilterCategory, TFilterType, TFilterLevel, TFilterData };

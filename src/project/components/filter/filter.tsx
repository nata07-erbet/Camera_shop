import { ChangeEvent, FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  FilterCategoryMap,
  FilterTypeMap,
  FilterLevelMap,
} from '../../const/const';

import {
  TFilterCategory,
  TFilterType,
  TFilterLevel,
  TFilterFeatures,
  TFilterPriceRange,
} from '../../types/index';

type FormInputs = {
  priceFrom: string;
  priceTo: string;
};

const INITIAL_FILTER_DATA: TFilterFeatures = {
  category: null,
  levels: [],
  types: [],
};

const AvailableTypes: Record<TFilterCategory, TFilterType[]> = {
  [FilterCategoryMap.photocamera]: [
    FilterTypeMap.collection,
    FilterTypeMap.digital,
    FilterTypeMap.film,
    FilterTypeMap.snapshot,
  ],
  [FilterCategoryMap.videocamera]: [
    FilterTypeMap.collection,
    FilterTypeMap.digital,
  ],
};

const checkIfTypeAvailable = (category: TFilterCategory, type: TFilterType) =>
  AvailableTypes[category].includes(type);

type FilterProps = {
  initFilters: Partial<TFilterFeatures>;
  initPriceRange: Partial<TFilterPriceRange>;
  onFeaturesChange: (data: TFilterFeatures) => void;
  onPricesChange: (data: TFilterPriceRange) => void;
  onReset: () => void;
  minPrice: number;
  maxPrice: number;
};

function Filter({
  initFilters,
  initPriceRange,
  onFeaturesChange,
  onPricesChange,
  onReset,
  minPrice,
  maxPrice,
}: FilterProps) {
  const [filterData, setFilterData] = useState<TFilterFeatures>({
    ...INITIAL_FILTER_DATA,
    ...initFilters,
  });

  const { setValue, register, watch, handleSubmit, reset } = useForm<FormInputs>({
    defaultValues: {
      priceFrom: initPriceRange[0] ? String(initPriceRange[0]) : undefined,
      priceTo: initPriceRange[1] ? String(initPriceRange[1]) : undefined,
    },
    mode: 'all',
  });

  const handleCategoryChange = (category: TFilterCategory, checked: boolean) => {
    const newData: TFilterFeatures = {
      ...filterData,
      category: checked ? category : null,
      types: filterData.types.filter((type) =>
        checkIfTypeAvailable(category, type)
      ),
    };
    setFilterData(newData);
    onFeaturesChange(newData);
  };

  const handleTypeChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = evt.target;
    const type = FilterTypeMap[value as keyof typeof FilterTypeMap];
    const newData: TFilterFeatures = {
      ...filterData,
      types: checked
        ? [...filterData.types, type]
        : filterData.types.filter((el) => el !== type),
    };
    setFilterData(newData);
    onFeaturesChange(newData);
  };

  const handleLevelChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = evt.target;
    const type = FilterLevelMap[value as keyof typeof FilterLevelMap];
    const newData: TFilterFeatures = {
      ...filterData,
      levels: checked
        ? [...filterData.levels, type]
        : filterData.levels.filter((el) => el !== type),
    };
    setFilterData(newData);
    onFeaturesChange(newData);
  };

  const handleResetClick = () => {
    setFilterData(INITIAL_FILTER_DATA);
    onFeaturesChange(INITIAL_FILTER_DATA);
    reset();
    onReset();
  };

  const handleFormSubmit = (evt: FormEvent) => {
    handleSubmit(() => true)(evt);
  };

  const currentPriceFrom = watch('priceFrom');
  const currentPriceTo = watch('priceTo');
  const priceFromNum: TFilterPriceRange[0] = currentPriceFrom ? Number(currentPriceFrom) : null;
  const priceToNum: TFilterPriceRange[1] = currentPriceTo ? Number(currentPriceTo) : null;

  const handlePriceFromChange = () => {
    if (priceFromNum === null) {
      onPricesChange([null, priceToNum]);
      return;
    }

    let value = priceFromNum;
    if (priceFromNum < minPrice) {
      value = minPrice;
    } else if (
      priceToNum &&
      priceToNum > priceFromNum
    ) {
      value = priceToNum;
    }

    setValue('priceFrom', value.toString());
    onPricesChange([value, priceToNum]);
  };

  const handlePriceToChange = () => {
    if (priceToNum === null) {
      onPricesChange([priceFromNum, null]);
      return;
    }

    let value = priceToNum;
    if (priceToNum > maxPrice) {
      value = maxPrice;
    } else if (
      priceFromNum &&
      priceToNum < priceFromNum
    ) {
      value = priceFromNum;
    }

    setValue('priceTo', value.toString());
    onPricesChange([priceFromNum, value]);
  };

  return (
    <div className="catalog-filter">
      <form action="#" onSubmit={handleFormSubmit}>
        <h2 className="visually-hidden">Фильтр</h2>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Цена,₽</legend>
          <div className="catalog-filter__price-range">
            <div className="custom-input">
              <label>
                <input
                  type="number"
                  placeholder={
                    Number.isSafeInteger(minPrice)
                      ? minPrice.toString()
                      : undefined
                  }
                  {...register('priceFrom', {
                    onBlur: handlePriceFromChange,
                  })}
                />
              </label>
            </div>
            <div className="custom-input">
              <label>
                <input
                  type="number"
                  placeholder={
                    Number.isSafeInteger(maxPrice)
                      ? maxPrice.toString()
                      : undefined
                  }
                  {...register('priceTo', {
                    onBlur: handlePriceToChange,
                  })}
                />
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Категория</legend>
          {(
            Object.entries(FilterCategoryMap) as [
              keyof typeof FilterCategoryMap,
              TFilterCategory
            ][]
          ).map(([key, value]) => (
            <div className="custom-checkbox catalog-filter__item" key={key}>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value={key}
                  checked={filterData.category === value}
                  onChange={(evt) => handleCategoryChange(value, evt.target.checked)}
                />
                <span className="custom-checkbox__icon" />
                <span className="custom-checkbox__label">{value}</span>
              </label>
            </div>
          ))}
        </fieldset>

        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Тип камеры</legend>
          {(
            Object.entries(FilterTypeMap) as [
              keyof typeof FilterTypeMap,
              TFilterType
            ][]
          ).map(([key, value]) => (
            <div className="custom-checkbox catalog-filter__item" key={key}>
              <label>
                <input
                  type="checkbox"
                  name="type"
                  value={key}
                  checked={filterData.types.includes(value)}
                  onChange={handleTypeChange}
                  disabled={Boolean(
                    filterData.category &&
                      !checkIfTypeAvailable(filterData.category, value)
                  )}
                />
                <span className="custom-checkbox__icon" />
                <span className="custom-checkbox__label">{value}</span>
              </label>
            </div>
          ))}
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Уровень</legend>
          {(
            Object.entries(FilterLevelMap) as [
              keyof typeof FilterLevelMap,
              TFilterLevel
            ][]
          ).map(([key, value]) => (
            <div className="custom-checkbox catalog-filter__item" key={key}>
              <label>
                <input
                  type="checkbox"
                  checked={filterData.levels.includes(value)}
                  name={key}
                  value={key}
                  onChange={handleLevelChange}
                />
                <span className="custom-checkbox__icon" />
                <span className="custom-checkbox__label">{value}</span>
              </label>
            </div>
          ))}
        </fieldset>
        <button
          className="btn catalog-filter__reset-btn"
          type="reset"
          onClick={handleResetClick}
        >
          Сбросить фильтры
        </button>
      </form>
    </div>
  );
}

export { Filter };

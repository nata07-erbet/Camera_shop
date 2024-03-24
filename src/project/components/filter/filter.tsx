import { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  FilterCategoryMap,
  FilterTypeMap,
  FilterLevelMap
} from '../../const/const';

import {
  TFilterCategory,
  TFilterType,
  TFilterLevel,
  TFilterPrice
} from '../../types/index';

type TFilterData = {
  category: TFilterCategory | null;
  levels: TFilterLevel[];
  types: TFilterType[];
}

const checkInputMaxValue = (min: number, value: RegExp) => {
  if(min === 0) {
    value = /^[1-9][0-9]?|100000$/;
  }
  return value;
};

const INITIAL_FILTER_DATA: TFilterData = { category: null, levels: [], types: [] };

const AvailableTypes: Record<TFilterCategory, TFilterType[]> = {
  [FilterCategoryMap.photocamera]: [FilterTypeMap.collection, FilterTypeMap.digital, FilterTypeMap.film, FilterTypeMap.snapshot],
  [FilterCategoryMap.videocamera]: [FilterTypeMap.collection, FilterTypeMap.digital],
};

const checkIfTypeAvailable = (category: TFilterCategory, type: TFilterType) => AvailableTypes[category].includes(type);

type FilterProps = {
  onChange: (data: TFilterData) => void;
};

type FormInputs = {
  minPrice: number;
  maxPrice: number;
};

function Filter ({ onChange }: FilterProps) {
  const [ filterData, setFilterData ] = useState<TFilterData>(INITIAL_FILTER_DATA);

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<FormInputs>({mode: 'all'});

  const handleCategoryChange = (category: TFilterCategory) => {
    const newData: TFilterData = {
      ...filterData,
      category,
      types: filterData.types.filter((type) => checkIfTypeAvailable(category, type)),
    };
    setFilterData(newData);
    onChange(newData);
  };

  const handleTypeChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = evt.target;
    const type = FilterTypeMap[value as keyof typeof FilterTypeMap];
    const newData: TFilterData = {
      ...filterData,
      types: checked ? [...filterData.types, type] : filterData.types.filter((el) => el !== type),
    };
    setFilterData(newData);
    onChange(newData);
  };

  const handleLevelChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = evt.target;
    const type = FilterLevelMap[value as keyof typeof FilterLevelMap];
    const newData: TFilterData = {
      ...filterData,
      levels: checked ? [...filterData.levels, type] : filterData.levels.filter((el) => el !== type),
    };
    setFilterData(newData);
    onChange(newData);
  };

  const handleResetClick = () => {
    setFilterData(INITIAL_FILTER_DATA);
    onChange(INITIAL_FILTER_DATA);
  };

  const handleFormSubmit: SubmitHandler<FormInputs> = (data) => {

    const formData: TFilterPrice = {
      priceMin: data.minPrice,
      priceMax: data.maxPrice
    };

    console.log(formData);
  };

  const minPriceValue = watch('minPrice');
  const maxPriceValue = watch('maxPrice');

  return(
    <div className="catalog-filter">
      <form
        action="#"
        onSubmit={(evt) => handleSubmit(handleFormSubmit)(evt)} // что за дичь?
      >
        <h2 className="visually-hidden">Фильтр</h2>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Цена,₽</legend>
          <div className="catalog-filter__price-range">
            <div className="custom-input">
              <label>
                <input
                  type="number"
                  placeholder="от"
                  {
                    ...register('minPrice', {
                      pattern: {
                        value: /^[0-9]{1,7}/,
                        message: `${minPriceValue} быть больше или равно нулю`
                      },
                    })
                  }
                />
              </label>
              {errors.minPrice && (
                <p className='min-price-error'>{minPriceValue} быть больше или равно нулю</p>
              ) }
            </div>
            <div className="custom-input">
              <label>
                <input
                  type="number"
                  placeholder="до"
                  {
                    ...register('maxPrice', {
                      validate: (value) => value > 0
                    })
                  }
                />
              </label>
              {errors.maxPrice && (
                <p className='max-price-error'>{maxPriceValue} быть больше нуля</p>
              )}
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
                  type="radio"
                  name="category"
                  value={key}
                  checked={filterData.category === value}
                  onChange={() => handleCategoryChange(value)}
                />
                <span className="custom-checkbox__icon" />
                <span className="custom-checkbox__label">
                  {value}
                </span>
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
                  disabled={Boolean(filterData.category && !checkIfTypeAvailable(filterData.category, value))}
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

export { Filter};

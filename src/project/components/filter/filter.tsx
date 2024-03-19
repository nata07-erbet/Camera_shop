import { useState } from 'react';
import {
  FilterCategoryMap,
  FilterTypeMap,
  FilterLevelMap
} from '../../const/const';

import { TFilterCategory, TFilterType, TFilterLevel } from '../../types/index';

function Filter () {
  const [ currentCategoryItem, setCurrentCategoryItem ] = useState<TFilterCategory>();
  const [ currentTypeItem, setCurrentTypeItem ] = useState<TFilterType>();
  const [ currentLevelItem, setCurrentLevelItem ] = useState<TFilterLevel>();
  const [ isReset, setIsReset ] = useState(false);

  const isDisabled = () => {
    if(currentCategoryItem === 'videocamera') {
      return true;
    }
  };

  const handleCategoryChange = (key: TFilterCategory) => {
    setCurrentCategoryItem(key);
  };

  const handleTypeChange = (key: TFilterType) => {
    setCurrentTypeItem(key);
  };

  const handleTypeLevel = (key: TFilterLevel) => {
    setCurrentLevelItem(key);
  };

  const handleButtonClick = () => {
    setIsReset((prevState) => !prevState);
  };

  return(
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Цена,₽</legend>
          <div className="catalog-filter__price-range">
            <div className="custom-input">
              <label>
                <input type="number" name="price" placeholder="от" />
              </label>
            </div>
            <div className="custom-input">
              <label>
                <input
                  type="number"
                  name="priceUp"
                  placeholder="до"
                />
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Категория</legend>
          {(
            Object.entries(FilterCategoryMap) as [
              TFilterCategory,
              (typeof FilterCategoryMap)[TFilterCategory]
            ][]
          ).map(([key, value]) => (
            <div className="custom-checkbox catalog-filter__item" key={key}>
              <label>
                <input
                  type="checkbox"
                  checked={ key === currentCategoryItem && !isReset}
                  name={key}
                  onChange={() => handleCategoryChange(key)}
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
              TFilterType,
              (typeof FilterTypeMap)[TFilterType]
            ][]
          ).map(([key, value]) => (
            <div className="custom-checkbox catalog-filter__item" key={key}>
              <label>
                <input
                  type="checkbox"
                  checked={key === currentTypeItem && !isReset }
                  name={key}
                  onChange={() => handleTypeChange(key)}
                  disabled={isDisabled()}
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
              TFilterLevel ,
              (typeof FilterLevelMap)[TFilterLevel ]
            ][]
          ).map(([key, value]) => (
            <div className="custom-checkbox catalog-filter__item" key={key}>
              <label>
                <input
                  type="checkbox"
                  checked={key === currentLevelItem && !isReset }
                  name={key}
                  onChange={() => handleTypeLevel(key)}
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
          onClick={handleButtonClick}
        >
          Сбросить фильтры
        </button>
      </form>
    </div>
  );
}

export { Filter};

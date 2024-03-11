import {
  FilterCategoryMap,
  FilterTypeMap,
  FilterLevelMap
} from '../../const/const';

function Filter () {
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
          {Object.entries(FilterCategoryMap)
            .map(([key, value]) => (
              <div className="custom-checkbox catalog-filter__item" key={key}>
                <label>
                  <input
                    type="checkbox"
                    name={key}
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
          {Object.entries(FilterTypeMap)
            .map(([key, value]) => (
              <div className="custom-checkbox catalog-filter__item" key={key}>
                <label>
                  <input
                    type="checkbox"
                    name={key}
                  />
                  <span className="custom-checkbox__icon" />
                  <span className="custom-checkbox__label">{value}</span>
                </label>
              </div>
            ))}
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Уровень</legend>
          {Object.entries(FilterLevelMap)
            .map(([key, value]) => (
              <div className="custom-checkbox catalog-filter__item" key={key}>
                <label>
                  <input type="checkbox" name="zero"/>
                  <span className="custom-checkbox__icon" />
                  <span className="custom-checkbox__label">{value}</span>
                </label>
              </div>
            ))}
        </fieldset>
        <button
          className="btn catalog-filter__reset-btn"
          type="reset"
        >
          Сбросить фильтры
        </button>
      </form>
    </div>
  );
}

export { Filter};

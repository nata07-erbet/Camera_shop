import { ChangeEvent, useState } from 'react';
import { TProduct } from '../../types';
import { SearchComponent } from '../search-component/search-component';

function Search () {
  const [ ListResultSearch, setListResultSearch ] = useState<TProduct[]>([]);
  const [ searchLine, setSearchLine ] = useState('');

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchLine(evt.target.value);
  };

  return (
    <>
      <form>
        <label>
          <svg
            className="form-search__icon"
            width={16}
            height={16}
            aria-hidden="true"
          >
            <use xlinkHref="#icon-lens" />
          </svg>
          <input
            className="form-search__input"
            type="text"
            autoComplete="off"
            placeholder="Поиск по сайту"
            value={searchLine}
            onChange={handleInputChange}
          />
        </label>
        <ul className="form-search__select-list">
          {ListResultSearch.map((product) => (
            <SearchComponent
              key={product.id}
              product={product}
            />))}
        </ul>
      </form>
      <button className="form-search__reset" type="reset">
        <svg width={10} height={10} aria-hidden="true">
          <use xlinkHref="#icon-close" />
        </svg>
        <span className="visually-hidden">Сбросить поиск</span>
      </button>
    </>
  );
}

export { Search };

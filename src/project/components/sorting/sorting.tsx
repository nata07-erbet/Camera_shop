import { useState } from 'react';
import {
  SortMap,
  ForLabelSorted,
} from '../../const/const';

type TSort = (typeof ForLabelSorted)[keyof typeof ForLabelSorted];
const SORT: TSort [] = ['sortPrice', 'sortPopular'];

function Sorting () {
  const [ currentSort, setCurrentSort ] = useState('');


  const handleSortingClick = (sort: TSort) => {
    setCurrentSort(sort);
  };


  return(
    <div className="catalog-sort" data-testid="sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            {SORT .map((sort) => (
              <div className="catalog-sort__btn-text" key={sort}>
                <input
                  type="radio"
                  id={sort}
                  name="sort"
                  onClick={() => handleSortingClick(sort)}
                  checked = { sort === currentSort }
                />
                <label htmlFor={ForLabelSorted[sort]}>{SortMap[sort]}</label>
              </div>
            ))}
          </div>
          <div className="catalog-sort__order">
            <div className="catalog-sort__btn catalog-sort__btn--up">
              <input
                type="radio"
                id="up"
                name="sort-icon"
                defaultChecked
                aria-label="По возрастанию"
              />
              <label htmlFor="up">
                <svg width={16} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-sort" />
                </svg>
              </label>
            </div>
            <div className="catalog-sort__btn catalog-sort__btn--down">
              <input
                type="radio"
                id="down"
                name="sort-icon"
                aria-label="По убыванию"
              />
              <label htmlFor="down">
                <svg width={16} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-sort" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export { Sorting };

import { useState } from 'react';
import {
  SortMap,
  SortingMap,
  ForLabelSorted,
} from '../../const/const';

export type TSort = (typeof ForLabelSorted)[keyof typeof ForLabelSorted];
export type TSorting = 'up' | 'down';

const SORT: TSort [] = ['sortPrice', 'sortPopular'];

type SortingProps = {
  onSort: (sort: TSort) => void;
  onSortUp: () => void;
};

function Sorting ({ onSort, onSortUp }: SortingProps) {
  const [ currentSort, setCurrentSort ] = useState('');


  const handleSortingClick = (sort: TSort) => {
    setCurrentSort(sort);
    onSort(sort);
  };

  const handleClickUp = () => {
    onSortUp();
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
            {(
              Object.entries(SortingMap) as [
              TSorting,
              (typeof SortingMap)[TSorting]
            ][]
            ).map(([key, value]) => (
              <div
                className={`catalog-sort__btn catalog-sort__btn--${key}`}
                key={key}
              >
                <input
                  type="radio"
                  id={key}
                  name="sort-icon"
                  defaultChecked
                  aria-label={value}
                  onClick={handleClickUp}
                />
                <label htmlFor={key}>
                  <svg width={16} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-sort" />
                  </svg>
                </label>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}

export { Sorting };

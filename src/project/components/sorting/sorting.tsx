import {
  SortMap,
  SortingMap,
  ForLabelSorted,
} from '../../const/const';

export type TCurrentSort = (typeof ForLabelSorted)[keyof typeof ForLabelSorted];
export type TActiveSort= 'up' | 'down';

const SORT: TCurrentSort [] = ['sortPrice', 'sortPopular'];

type SortingProps = {
  currentSort: TCurrentSort;
  activeSort: TActiveSort;
  onSort: (sort: TCurrentSort) => void;
  onSortToggle : (type: TActiveSort) => void;
};

function Sorting ({ currentSort, activeSort, onSort, onSortToggle }: SortingProps) {


  const handleSortingClick = (type: TCurrentSort) => {
    onSort(type);
  };

  const handleClickToggle = (key: TActiveSort) => {
    onSortToggle(key);
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
                  checked ={sort === currentSort}
                />
                <label htmlFor={ForLabelSorted[sort]}>{SortMap[sort]}</label>
              </div>
            ))}
          </div>
          <div className="catalog-sort__order">
            {(
              Object.entries(SortingMap) as [
                TActiveSort,
              (typeof SortingMap)[TActiveSort]
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
                  checked={key === activeSort}
                  aria-label={value}
                  onClick={() => handleClickToggle(key)}
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

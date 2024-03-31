import { useState } from 'react';
import {
  SortingTypeLabel,
  SortingDirectionLabel,
  SortingDirection,
} from '../../const/const';
import { TSortingType, TSortingDirection, TSortingKey } from '../../types';

const SORT_TYPES: TSortingType[] = ['rating', 'price'];

type SortingProps = {
  initSorting: TSortingKey | null;
  onSort: (key: TSortingKey) => void;
};

const DEFAULT_DIRECTION: TSortingDirection = 'asc';
const DEFAULT_TYPE: TSortingType = 'price';

function Sorting ({ initSorting, onSort }: SortingProps) {

  const initValues = (initSorting?.split('-') as [TSortingType, TSortingDirection]) ?? [null, null];

  const [currentType, setCurrentType] = useState<TSortingType | null>(initValues[0]);
  const [currentDirection, setCurrentDirection] = useState<TSortingDirection | null>(initValues[1]);

  const handleTypeChange = (type: TSortingType) => {
    setCurrentType(type);
    onSort(`${type}-${currentDirection ?? DEFAULT_DIRECTION}`);
  };

  const handleDirectionChange = (direction: TSortingDirection) => {
    setCurrentDirection(direction);
    onSort(`${currentType ?? DEFAULT_TYPE}-${direction}`);
  };

  return(
    <div className="catalog-sort" data-testid="sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            {SORT_TYPES.map((type) => (
              <div className="catalog-sort__btn-text" key={type}>
                <input
                  type="radio"
                  id={type}
                  name="sort"
                  onChange={() => handleTypeChange(type)}
                  checked ={type === currentType}
                />
                <label htmlFor={type}>{SortingTypeLabel[type]}</label>
              </div>
            ))}
          </div>
          <div className="catalog-sort__order">
            {(Object.entries(SortingDirection) as [string, TSortingDirection][]).map(([key, value]) => (
              <div
                className={`catalog-sort__btn catalog-sort__btn--${key}`}
                key={key}
              >
                <input
                  type="radio"
                  id={key}
                  name="sort-icon"
                  checked={value === currentDirection}
                  aria-label={SortingDirectionLabel[value]}
                  onChange={() => handleDirectionChange(value)}
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

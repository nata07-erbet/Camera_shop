import classNames from 'classnames';
import { PanginationButton} from '../../const/const';
import { TUsePaginationProps, usePagination } from '../../hooks/use-pagination';
import { MouseEvent } from 'react';

type PaginationProps = TUsePaginationProps

const Pagination = ({ currentPage, pagesAmount, ...rest }: PaginationProps) => {
  const { currentRange, setPage, previousPage, nextPage } = usePagination({ currentPage, pagesAmount, ...rest});
  const handlePageClick = (page: number) => {
    setPage(page);
  };

  const handlePreviousClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    if (previousPage) {
      handlePageClick(previousPage);
    }
  };

  const handleNextClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    if (nextPage) {
      handlePageClick(nextPage);
    }
  };

  if (pagesAmount <= 1) {
    return null;
  }

  return(
    <div className="pagination" data-testid='pagination-component'>
      <ul className="pagination__list">
        {previousPage && (
          <li className="pagination__item">
            <a
              className="pagination__link pagination__link--text"
              onClick={handlePreviousClick}
            >
              {PanginationButton.Prev}
            </a>
          </li>
        )}
        {currentRange.map((page) => (
          <li
            className='pagination__item'
            key={page}
          >
            <a
              className={
                classNames(
                  'pagination__link',
                  {
                    'pagination__link--active': page === currentPage,
                  }
                )
              }
              onClick={(evt) => {
                evt.preventDefault();
                handlePageClick(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}
        {nextPage && (
          <li className="pagination__item">
            <a
              className="pagination__link pagination__link--text"
              onClick={handleNextClick}
            >
              {PanginationButton.Next}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export { Pagination};

import { Link, useLocation, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import { PanginationButton} from '../../const/const';
import { TUsePaginationProps, usePagination } from '../../hooks/use-pagination';

type PaginationProps = TUsePaginationProps

const Pagination = ({ currentPage, pagesAmount, ...rest }: PaginationProps) => {
  const { pathname } = useLocation();
  const [search] = useSearchParams();
  const { currentRange, setPage, previousPage, nextPage } = usePagination({ currentPage, pagesAmount, ...rest});

  const generatePath = (pageNum: number): string => {
    search.set('page', pageNum.toString());
    return `${pathname}?${search.toString()}`;
  };

  const handlePageClick = (page: number) => {
    setPage(page);
  };

  const handlePreviousClick = () => {
    if (previousPage) {
      handlePageClick(previousPage);
    }
  };

  const handleNextClick = () => {
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
            <Link
              className="pagination__link pagination__link--text"
              to={generatePath(previousPage)}
              onClick={handlePreviousClick}
            >
              {PanginationButton.Prev}
            </Link>
          </li>
        )}
        {currentRange.map((page) => (
          <li
            className='pagination__item'
            key={page}
          >
            <Link
              className={
                classNames(
                  'pagination__link',
                  {
                    'pagination__link--active': page === currentPage,
                  }
                )
              }
              to={generatePath(page)}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </Link>
          </li>
        ))}
        {nextPage && (
          <li className="pagination__item">
            <Link
              className="pagination__link pagination__link--text"
              to={generatePath(nextPage)}
              onClick={handleNextClick}
            >
              {PanginationButton.Next}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export { Pagination};

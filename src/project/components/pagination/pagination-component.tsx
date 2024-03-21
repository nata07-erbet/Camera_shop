import { Link, useLocation, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import { PanginationButton} from '../../const/const';
import { usePagination } from '../../hooks/use-pagination';

interface PaginationProps {
  pagesAmount: number;
  onPageClick: (page: number) => void;
}

const Pagination = ({ pagesAmount, onPageClick }: PaginationProps) => {
  const { pathname } = useLocation();
  const [search] = useSearchParams();
  const initPage = Number(search.get('page'));
  const { currentPage, currentRange, setPage, previousPage, nextPage } = usePagination({ initPage: initPage || undefined, pagesAmount});

  const generatePath = (pageNum: number): string => {
    search.set('page', pageNum.toString());
    return `${pathname}?${search.toString()}`;
  };

  const handlePageClick = (page: number) => {
    setPage(page);
    onPageClick(page);
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

import { Link, useLocation,} from 'react-router-dom';
import classNames from 'classnames';
import { PanginationButton} from '../../const/const';
import { usePagination } from '../../hooks/use-pagination';

interface PaginationProps {
  pagesAmount: number;
  onPageClick: (page: number) => void;
}

const Pagination = ({ pagesAmount, onPageClick }: PaginationProps) => {
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search);
  const initPage = params.get('page');
  const { currentPage, currentRange, setPage, previousPage, nextPage } = usePagination({ initPage: initPage ? Number(initPage) : undefined, pagesAmount});

  const generatePath = (pageNum: number): string => {
    params.set('page', pageNum.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handlePreviousClick = () => {
    if (previousPage) {
      setPage(previousPage);
      onPageClick(previousPage);
    }

  };

  const handlePageClick = (page: number) => {
    setPage(page);
    onPageClick(page);
  };

  const handleNextClick = () => {
    if (nextPage) {
      setPage(nextPage);
      onPageClick(nextPage);
    }
  };

  return(
    <div className="pagination">
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

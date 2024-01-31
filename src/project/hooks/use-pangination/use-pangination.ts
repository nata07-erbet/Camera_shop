import { useState } from 'react';
import { TUsePangination } from './use-pangination.interface';
import { INITAL_PAGE_BY_PANGINATION } from '../../const/const';

type UsePanginationProps = {
  productsPerPage: number;
  countOfMocks: number;
}

function usePangination ({productsPerPage, countOfMocks}: UsePanginationProps): TUsePangination  {
  const [page, setPage] = useState(INITAL_PAGE_BY_PANGINATION);

  const pageCount = Math.ceil(countOfMocks / productsPerPage);
  const lastContentIndex = pageCount * productsPerPage;
  const firstContentIndex = lastContentIndex - productsPerPage;

  const changePage = (direction: boolean) =>{
    setPage((page) => {
      if(direction) {
        if(page === pageCount) {
          return page;
        }
        return page + 1;

      } else {
        if(page === INITAL_PAGE_BY_PANGINATION ) {
          return page;
        }
        return page - 1;
      }
    });
  };

  return {
    page,
    totalPages: pageCount,
    firstContentIndex,
    lastContentIndex,
    prevPage: () => void,
    nextPage: () => void,
    setPage: () => void,
  }
};

export { usePangination };

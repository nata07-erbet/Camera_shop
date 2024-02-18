import * as React from 'react';

type TUsePaginationProps = {
  pagesAmount: number;
  initPage?: number;
};

type TUsePaginationReturn = {
  currentPage: number;
  currentRange: number[];
  setPage: (num: number) => void;
  previousPage: number | null;
  nextPage: number | null;
};

const DEFAULT_PAGE_NUM = 1;
const MAX_VISIBLE_LINKS_AMOUNT = 3;

const usePagination = ({ pagesAmount, initPage }: TUsePaginationProps): TUsePaginationReturn => {
  const [currentPage, setCurrentPage] = React.useState(initPage || DEFAULT_PAGE_NUM);
  const calculateRange = React.useCallback((page: number) => {
    const range = Array.from({ length: pagesAmount }, (_, i) => i + 1);
    const start = Math.min(page - 1, pagesAmount - MAX_VISIBLE_LINKS_AMOUNT);
    const end = Math.min(start + MAX_VISIBLE_LINKS_AMOUNT, pagesAmount);
    return range.slice(start, end);
  }, [pagesAmount]);

  const [currentRange, setCurrentRange] = React.useState(calculateRange(currentPage));

  const previousPage = currentRange[0] > 1 ? currentRange[0] - 1 : null;
  const nextPage = currentRange[currentRange.length - 1] < pagesAmount ? currentRange[currentRange.length - 1] + 1 : null;

  const setPage = React.useCallback((page: number) => {
    setCurrentPage(page);

    if ([previousPage, nextPage].includes(page)) {
      setCurrentRange(calculateRange(page));
    }
  }, [calculateRange, nextPage, previousPage]);

  return {
    currentPage,
    currentRange,
    setPage,
    nextPage,
    previousPage
  };
};

export { usePagination };

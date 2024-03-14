import { useCallback, useState } from 'react';

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
const MAX_PAGES_IN_RANGE = 3;

const usePagination = ({ pagesAmount, initPage = DEFAULT_PAGE_NUM }: TUsePaginationProps): TUsePaginationReturn => {
  const [currentPage, setCurrentPage] = useState(initPage);
  const ranges: number[][] = Array.from({ length: pagesAmount }, (_, i) => i + 1).reduce((acc, page, idx) => {
    const rangeIdx = Math.floor(idx / MAX_PAGES_IN_RANGE);
    if (!acc[rangeIdx]) {
      acc[rangeIdx] = [];
    }
    acc[rangeIdx].push(page);
    return acc;
  }, [] as number[][]);
  const [currentRange, setCurrentRange] = useState(ranges[initPage % MAX_PAGES_IN_RANGE]);
  const previousPage = currentRange[0] > 1 ? currentRange[0] - 1 : null;
  const nextPage = currentRange[currentRange.length - 1] < pagesAmount ? currentRange[currentRange.length - 1] + 1 : null;

  const setPage = useCallback((page: number) => {
    setCurrentPage(page);

    if ([previousPage, nextPage].includes(page)) {
      setCurrentRange(ranges[page % MAX_PAGES_IN_RANGE]);
    }
  }, [nextPage, previousPage, ranges]);

  return {
    currentPage,
    currentRange,
    setPage,
    nextPage,
    previousPage
  };
};

export { usePagination };

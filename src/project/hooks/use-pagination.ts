import { useCallback, useMemo, useState } from 'react';

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
  const ranges: number[][] = useMemo(() =>
    Array.from({ length: pagesAmount }, (_, i) => i + 1).reduce((acc, page, idx) => {
      const rangeIdx = Math.floor(idx / MAX_PAGES_IN_RANGE);
      if (!acc[rangeIdx]) {
        acc[rangeIdx] = [];
      }
      acc[rangeIdx].push(page);
      return acc;
    },
    [] as number[][]), [pagesAmount]
  );
  const initRangeIdx = ranges.findIndex((range) => range.includes(initPage));
  if (initRangeIdx === -1) {
    throw new Error('Initial page is out of range');
  }

  const [currentRangeIdx, setCurrentRangeIdx] = useState(initRangeIdx);
  const currentRange = ranges[currentRangeIdx];
  const previousPage = currentRange[0] > 1 ? currentRange[0] - 1 : null;
  const nextPage = currentRange[currentRange.length - 1] < pagesAmount ? currentRange[currentRange.length - 1] + 1 : null;

  const setPage = useCallback((page: number) => {
    setCurrentPage(page);

    if ([previousPage].includes(page)) {
      setCurrentRangeIdx((prev) => prev - 1);
    } else if ([nextPage].includes(page)) {
      setCurrentRangeIdx((prev) => prev + 1);
    }

  }, [nextPage, previousPage]);

  return {
    currentPage,
    currentRange,
    setPage,
    nextPage,
    previousPage
  };
};

export { usePagination };

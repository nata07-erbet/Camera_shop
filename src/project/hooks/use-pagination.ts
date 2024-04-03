import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

type TUsePaginationProps = {
  currentPage: number;
  pagesAmount: number;
  onPageChange: (page: number) => void;
};

type TUsePaginationReturn = {
  currentPage: number;
  currentRange: number[];
  setPage: (num: number) => void;
  previousPage: number | null;
  nextPage: number | null;
};

const MAX_PAGES_IN_RANGE = 3;

const usePagination = ({ pagesAmount, currentPage, onPageChange }: TUsePaginationProps): TUsePaginationReturn => {
  const [search, setSearchParams] = useSearchParams();
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

  let initRangeIdx = ranges.findIndex((range) => range.includes(currentPage));
  if (initRangeIdx === -1) {
    initRangeIdx = 0;
  }

  const [currentRangeIdx, setCurrentRangeIdx] = useState(initRangeIdx);
  const currentRange = ranges[currentRangeIdx];
  const previousPage = (currentRange && currentRange[0] > 1) ? currentRange[0] - 1 : null;
  const nextPage = (currentRange && currentRange[currentRange.length - 1] < pagesAmount) ? currentRange[currentRange.length - 1] + 1 : null;

  const setPage = useCallback((page: number) => {
    onPageChange(page);

    if ([previousPage].includes(page)) {
      setCurrentRangeIdx((prev) => prev - 1);
    } else if ([nextPage].includes(page)) {
      setCurrentRangeIdx((prev) => prev + 1);
    }

  }, [nextPage, onPageChange, previousPage]);

  useEffect(() => {
    if (!currentPage) {
      return;
    }

    if (currentPage === 1) {
      search.delete('page');
    } else {
      search.set('page', currentPage.toString());
    }
    setSearchParams(search);
  }, [currentPage, search, setSearchParams]);

  return {
    currentPage,
    currentRange,
    setPage,
    nextPage,
    previousPage
  };
};

export { usePagination };
export type { TUsePaginationProps };

import { useCallback, useEffect, useMemo, useState } from 'react';

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

  const initRangeIdx = ranges.findIndex((range) => range.includes(currentPage));
  const [currentRangeIdx, setCurrentRangeIdx] = useState(initRangeIdx);
  const currentRange = ranges[currentRangeIdx] ?? ranges[0];
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
    if (initRangeIdx === -1) {
      const newRangeIdx = 0;
      const newPage = ranges[0][0];
      onPageChange(newPage);
      setCurrentRangeIdx(newRangeIdx);
    }
  }, [currentRange, initRangeIdx, onPageChange, ranges]);

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

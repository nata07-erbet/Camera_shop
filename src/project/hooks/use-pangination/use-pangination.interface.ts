type TUsePangination ={
  page: number;
  totalPages: number;
  firstContentIndex: number;
  lastContentIndex: number;
  prevPage: () => void;
  nextPage: () => void;
  setPage: () => void;
}


export type { TUsePangination };

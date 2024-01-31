import { NetworkInterfaceInfoIPv4 } from "os";

type UsePanginationProps = {
  productsPerPage: number;
  countOfMocks: number;
}

type UsePanginationReturn ={
  currentPage: number;
  totalPages: number;
  firstContentIndex: number;
  lastContentIndex: number;
  prevPage: () => void;
  setPage: () => void;
}

type usePangination = (T: UsePanginationProps) => UsePanginationReturn;

export type { usePangination }

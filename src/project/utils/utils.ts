import { PRODUCT_VIEW_COUNT, SIMILAR_VIEW_COUNT } from '../const/const';
import { TProduct } from '../types/index';

function getRandomInteger(min: number, max: number): number {
  const rand: number = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function FormattedDate(date: string) {
  const dateObj = new Date(date);
  const formatDate = dateObj.toLocaleDateString('ru', {day: 'numeric', month: 'long'});

  return formatDate;
}

const getTotalPageCount = (cardCount: number): number =>
  Math.ceil(cardCount / PRODUCT_VIEW_COUNT);

const getSimilarPageCount = (cardCount: number): number =>
  Math.ceil(cardCount / SIMILAR_VIEW_COUNT);

const getSortUpByPrice = (a: TProduct, b: TProduct) => (a.price - b.price);
const getSortDownByPrice = (a: TProduct, b: TProduct) => (b.price - a.price);

const getSortUpByRating = (a: TProduct, b: TProduct) => (a.rating - b.rating);
const getSortDownByRating = (a: TProduct, b: TProduct) => (b.rating - a.rating);

const sorting: Record<string, (products: TProduct[]) => TProduct[]> = {
  LowToHighPrice: (products: TProduct[]) => products.toSorted(getSortUpByPrice),
  HighToLowPrice: (products: TProduct[]) => products.toSorted(getSortDownByPrice),
  LowToHigh: (products: TProduct[]) => products.toSorted(getSortUpByRating),
  HighToLowRating: (products: TProduct[]) => products.toSorted(getSortDownByRating),
};

export {
  getRandomInteger,
  FormattedDate,
  getTotalPageCount,
  getSimilarPageCount,
  getSortUpByRating,
  getSortDownByRating,
  getSortUpByPrice,
  getSortDownByPrice,
  sorting
};

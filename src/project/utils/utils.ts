import { PRODUCT_VIEW_COUNT, SIMILAR_VIEW_COUNT, ForLabelSorted } from '../const/const';
import { TProduct } from '../types/product.type';

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

const getSortUp = (a: number, b: number) => a - b;
const getSortDown = (a: number, b: number) => b - a;


export {
  getRandomInteger,
  FormattedDate,
  getTotalPageCount,
  getSimilarPageCount,
  getSortUp,
  getSortDown
};

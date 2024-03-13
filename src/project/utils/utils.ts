import { PRODUCT_VIEW_COUNT, SIMILAR_VIEW_COUNT } from '../const/const';

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

export { getRandomInteger, FormattedDate, getTotalPageCount, getSimilarPageCount };

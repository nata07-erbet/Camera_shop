import dayjs from 'dayjs';

function getRandomInteger(min: number, max: number): number {
  const rand: number = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function FormattedDate(date: string): string {
  const formatDate = dayjs(date).format('DD MMMM');
  return formatDate;
}


export { getRandomInteger, FormattedDate };

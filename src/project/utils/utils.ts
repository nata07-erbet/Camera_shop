
function getRandomInteger(min: number, max: number): number {
  const rand: number = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function FormattedDate(date: string) {
  const dateObj = new Date(date);
  const formatDate = dateObj.toLocaleDateString('ru', {day: 'numeric', month: 'long'});

  return formatDate;
}

export { getRandomInteger, FormattedDate };

import { TRating } from '../../types';

type RatingProps ={
  rating: TRating;
  reviewCount?: number;
}


function Rating ({rating, reviewCount}: RatingProps) {
  const MAX_RATING = 5;
  const starsFull = Array.from({length: Number(rating)}, () => '');
  const statsEmpty = Array.from({length: MAX_RATING - Number(rating) }, () => '');

  return (
    <div className="rate product__rate">
      {starsFull.map((star) => (
        <svg width={17} height={16} aria-hidden="true" key={star}>
          <use xlinkHref="#icon-full-star" />
        </svg>
      ))}

      {statsEmpty.map((star) => (
        <svg width={17} height={16} aria-hidden="true" key={star}>
          <use xlinkHref="#icon-star" />
        </svg>
      ))}

      <p className="visually-hidden">Рейтинг: {rating}</p>
      <p className="rate__count">
        <span className="visually-hidden">Всего оценок:</span>{reviewCount}
      </p>
    </div>
  );
}

export { Rating };

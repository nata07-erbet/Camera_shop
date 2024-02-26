import { TRating } from '../../types';
import { RatingMap } from '../../const/const';

type RatingProps = {
  rating: TRating;
  reviewCount?: number;
};

const stars = Object.keys(RatingMap).sort((a, b) => Number(a) - Number(b));

function Rating({ rating, reviewCount }: RatingProps) {
  const starsFull = stars.slice(0, Number(rating));
  const starsEmpty = stars.slice(Number(rating));

  return (
    <div className="rate product__rate" data-testid="rate">
      {starsFull.map((star) => (
        <svg width={17} height={16} aria-hidden="true" key={star}>
          <use xlinkHref="#icon-full-star" />
        </svg>
      ))}

      {starsEmpty.map((star) => (
        <svg width={17} height={16} aria-hidden="true" key={star}>
          <use xlinkHref="#icon-star" />
        </svg>
      ))}

      <p className="visually-hidden">Рейтинг: {String(rating)}</p>
      <p className="rate__count">
        <span className="visually-hidden">Всего оценок:</span>
        {reviewCount}
      </p>
    </div>
  );
}

export { Rating };

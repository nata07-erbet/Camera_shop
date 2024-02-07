import { RatingTitleMap } from '../../const/const';

type RatingRewiewProps = {
  rating: 1 | 2 | 3 | 4 | 5;
  onInputChange: () => void;
}

function RatingRewiew ({rating, onInputChange}: RatingRewiewProps) {
  const handleInputChange = () => {
    onInputChange();
  };

  return (
    <fieldset className="rate form-review__item">
      <legend className="rate__caption">
        Рейтинг
        <svg width={9} height={9} aria-hidden="true">
          <use xlinkHref="#icon-snowflake" />
        </svg>
      </legend>
      <div className="rate__bar">
        <div className="rate__group">
          {Object
            .values(RatingTitleMap)
            .reverse()
            .map((title, id) => (
              <>
                <input
                  key={title}
                  className="visually-hidden"
                  id={`star-${id}`}
                  name="rate"
                  type="radio"
                  defaultValue={id}
                  onChange={handleInputChange}
                />
                <label
                  className="rate__label"
                  htmlFor={`star-${id}`}
                  title={title}
                />
              </>
            ))}


        </div>
        <div className="rate__progress">
          <span className="rate__stars">{rating}</span> <span>/</span>{' '}
          <span className="rate__all-stars">5</span>
        </div>
      </div>
      <p className="rate__message">Нужно оценить товар</p>
    </fieldset>
  );
}

export { RatingRewiew };

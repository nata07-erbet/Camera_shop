import { Fragment, useState, ChangeEvent } from 'react';
import { RatingMap } from '../../const/const';


function RatingRewiew () {
  const [rating, setRating] = useState('');

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
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
            .entries(RatingMap)
            .reverse()
            .map(([key, value]) => (
              <Fragment key={key}>
                <input
                  key={key}
                  className="visually-hidden"
                  id={`star-${key}`}
                  name="rate"
                  type="radio"
                  defaultValue={key}
                  onChange={handleInputChange}
                />
                <label
                  className="rate__label"
                  htmlFor={`star-${key}`}
                  title={value}
                />
              </Fragment>
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

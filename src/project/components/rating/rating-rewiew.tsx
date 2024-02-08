import { ChangeEvent, Fragment, useState} from 'react';
import { RatingMap } from '../../const/const';

function RatingRewiew () {
  const [rating, setRating] = useState('0');

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  //как это значение передать наверх для валидации формы?
  const isValed = () => rating !== '' && !rating.match(/[1-5]/);


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
                  value={key}
                  defaultValue={0}
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

import { useState } from 'react';
import { PopUp, PopUpProps } from './pop-up';
import { RatingRewiew } from '../../components/rating/rating-rewiew';

type PopupAddRewiew = PopUpProps & {
  onSubmit: () => void;}


function PopupAddRewiew ({ onSubmit, ...props }: PopupAddRewiew) {
  const [isRatingValid, setRatingValid] = useState(false);

  const validateForm = () => isRatingValid;
  const validateRating = (value: string) => setRatingValid(Boolean(value && value.match(/^[1-5]$/)));

  const handleFormSubmit = () => {
    const isValid = validateForm();

    if(isValid) {
      onSubmit();
    }
    onSubmit();
  };

  return(
    <PopUp {...props}>
      <p className="title title--h4">Оставить отзыв</p>
      <div className="form-review">
        <form
          method="post"
          onSubmit={handleFormSubmit}
        >
          <div className="form-review__rate">
            <RatingRewiew
              onChange = {validateRating}
              error = {!isRatingValid && '  Проставьте рейтинг'}
            />
            <div className="custom-input form-review__item">
              <label>
                <span className="custom-input__label">
                      Ваше имя
                  <svg width={9} height={9} aria-hidden="true">
                    <use xlinkHref="#icon-snowflake" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Введите ваше имя"
                  minLength={2}
                  maxLength={15}
                  required
                  autoFocus
                />
              </label>
              <p className="custom-input__error">Нужно указать имя</p>
            </div>
            <div className="custom-input form-review__item">
              <label>
                <span className="custom-input__label">
                      Достоинства
                  <svg width={9} height={9} aria-hidden="true">
                    <use xlinkHref="#icon-snowflake" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="user-plus"
                  placeholder="Основные преимущества товара"
                  minLength={10}
                  maxLength={160}
                  required
                />
              </label>
              <p className="custom-input__error">Нужно указать достоинства</p>
            </div>
            <div className="custom-input form-review__item">
              <label>
                <span className="custom-input__label">
                      Недостатки
                  <svg width={9} height={9} aria-hidden="true">
                    <use xlinkHref="#icon-snowflake" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="user-minus"
                  placeholder="Главные недостатки товара"
                  minLength={10}
                  maxLength={160}
                  required
                />
              </label>
              <p className="custom-input__error">Нужно указать недостатки</p>
            </div>
            <div className="custom-textarea form-review__item">
              <label>
                <span className="custom-textarea__label">
                      Комментарий
                  <svg width={9} height={9} aria-hidden="true">
                    <use xlinkHref="#icon-snowflake" />
                  </svg>
                </span>
                <textarea
                  name="user-comment"
                  minLength={10}
                  maxLength={160}
                  placeholder="Поделитесь своим опытом покупки"
                  defaultValue={''}
                />
              </label>
              <div className="custom-textarea__error">
                  Нужно добавить комментарий
              </div>
            </div>
          </div>
          <button
            className="btn btn--purple form-review__btn"
            type="submit"
          >
                Отправить отзыв
          </button>
        </form>

      </div>

    </PopUp>

  );
}

export { PopupAddRewiew };

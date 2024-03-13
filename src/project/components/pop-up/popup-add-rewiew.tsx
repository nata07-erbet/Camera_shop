import { ChangeEvent, FormEvent, useState } from 'react';
import { PopUpMain, PopUpMainProps } from './index';
import { RatingRewiew } from '../../components/rating/rating-rewiew';
import classNames from 'classnames';
import {
  NAME_MIN,
  NAME_MAX,
  DATA_MIN,
  DATA_MAX
} from '../../const/const';

type PopupAddRewiew = PopUpMainProps & {
  onSubmit: () => void;}


function PopupAddRewiew ({ onSubmit, ...props }: PopupAddRewiew) {
  const [ name, setName ] = useState('');
  const [ userPlus, setUserPlus ] = useState('');
  const [ userMinus, setUserMinus ] = useState('');
  const [ comment, setComment ] = useState('');

  const [ isRatingValid, setRatingValid ] = useState(false);
  const [isNameValid , setIsNameValid ] = useState(true);
  const [ isUserPlusValid, setUserPlusValid ] = useState(true);
  const [ isUserMinusValid, setIsUserMinusValid ] = useState(true);
  const [ isCommentValid, setCommentValid ] = useState(true);

  const validateName = (value: string) => setIsNameValid(value.length >= NAME_MIN && value.length <= NAME_MAX);
  const validateUserPlus = (value: string) => setUserPlusValid(value.length >= DATA_MIN && value.length <= DATA_MAX);
  const validateUserMinus = (value: string) => setIsUserMinusValid(value.length >= DATA_MIN && value.length <= DATA_MAX);
  const validateComment = (value: string) => setCommentValid(value.length >= DATA_MIN && value.length <= DATA_MAX);


  const validateForm = () => isRatingValid && isNameValid && isUserPlusValid && isUserMinusValid && isCommentValid;

  const validateRating = (value: string) => setRatingValid(Boolean(value && value.match(/^[1-5]$/)));


  const handleInputNameChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
    validateName(evt.target.value);
  };

  const handleInputUserPlusChange = (evt:ChangeEvent<HTMLInputElement>) => {
    setUserPlus(evt.target.value);
    validateUserPlus(evt.target.value);
  };

  const handleInputUserMinusChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setUserMinus(evt.target.value);
    validateUserMinus(evt.target.value);
  };

  const handleInputCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
    validateComment(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLElement>) => {
    evt.preventDefault();

    const isValid = validateForm();

    if(isValid) {
      onSubmit();
    }
    onSubmit();
  };


  return(
    <PopUpMain {...props}>
      <p className="title title--h4">Оставить отзыв</p>
      <div className="form-review">
        <form
          action="#"
          method="post"
          onSubmit={handleFormSubmit}
        >
          <div className="form-review__rate">
            <RatingRewiew
              onChange = {validateRating}
              error = {!isRatingValid && (
                <p className="rate__message">Нужно оценить товар</p>
              )}
            />
            <div className={
              classNames(
                'custom-input',
                'form-review__item',
                { 'is-invalid': !isNameValid}
              )
            }
            >
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
                  required
                  autoFocus
                  data-testid="nameElement"
                  onChange={handleInputNameChange}
                />
              </label>
              { !isNameValid && (
                <p className="custom-input__error">Нужно указать имя</p>
              )}
            </div>
            <div className={classNames(
              'custom-input',
              'form-review__item',
              {'is-invalid' : !isUserPlusValid}
            )}
            >
              <label>
                <span className="custom-input__label">
                      Достоинства
                  <svg width={9} height={9} aria-hidden="true">
                    <use xlinkHref="#icon-snowflake" />
                  </svg>
                </span>
                <input
                  className='is-invalid'
                  type="text"
                  name="user-plus"
                  placeholder="Основные преимущества товара"
                  minLength={10}
                  maxLength={160}
                  required
                  data-testid="positiveElement"
                  onChange={handleInputUserPlusChange}
                />
              </label>
              {!isUserPlusValid && (
                <p className="custom-input__error">Нужно указать достоинства</p>
              )}
            </div>
            <div className={
              classNames(
                'custom-input',
                'form-review__item',
                {'is-invalid': !isUserMinusValid}
              )
            }
            >
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
                  data-testid="negativeElement"
                  onChange= {handleInputUserMinusChange}
                />
              </label>
              {!isUserMinusValid && (
                <p className="custom-input__error">Нужно указать недостатки</p>
              )}
            </div>
            <div className={classNames(
              'custom-textarea',
              'form-review__item',
              {'is-invalid' : !isCommentValid}
            )}
            >
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
                  data-testid="commentElement"
                  onChange={handleInputCommentChange}
                />
              </label>
              {!isCommentValid && (
                <div className="custom-textarea__error">
                 Нужно добавить комментарий
                </div>
              )}

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
    </PopUpMain>
  );
}

export { PopupAddRewiew };

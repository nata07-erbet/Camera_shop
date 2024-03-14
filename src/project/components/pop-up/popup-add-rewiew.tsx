import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { PopUpMain, PopUpMainProps } from './index';
import { RatingMap } from '../../const/const';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

type PopupAddRewiew = PopUpMainProps & {
  onSubmit: () => void;}

type FormInputs = {
  rate: string;
  name: string;
  userPlus: string;
  userMinus: string;
  comment: string;
}

function PopupAddRewiew ({ onSubmit, ...props }: PopupAddRewiew) {
  const [rating, setRating] = useState('0');
  const [ name, setName ] = useState('');
  const [ userPlus, setUserPlus ] = useState('');
  const [ userMinus, setUserMinus ] = useState('');
  const [ comment, setComment ] = useState('');

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  const handleInputNameChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  };

  const handleInputUserPlusChange = (evt:ChangeEvent<HTMLInputElement>) => {
    setUserPlus(evt.target.value);
  };

  const handleInputUserMinusChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setUserMinus(evt.target.value);
  };

  const handleInputCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const onFormSubmit = (evt: FormEvent<HTMLElement>) => {
    evt.preventDefault();
    onSubmit();
  };

  const {
    register,
    formState:{ errors },
    handleSubmit
  } = useForm<FormInputs>();


  return(
    <PopUpMain {...props}>
      <p className="title title--h4">Оставить отзыв</p>
      <div className="form-review">
        <form
          action="#"
          method="post"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <div className="form-review__rate">
            <fieldset className={
              classNames(
                'rate',
                'form-review__item',
                {'is-invalid': !!errors.rate}
              )
            }
            >
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
                          type="radio"
                          value={key}
                          defaultValue={0}
                          {
                            ...register('rate', {
                              required: 'Нужно проставить рейтинг',
                              pattern: {
                                value: /^[1-5]$/,
                                message: 'Rate must contain from 1 to 5 stars'
                              }
                            })
                          }
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
              {errors.rate && (
                <p className="rate__message">Нужно оценить товар</p>
              )}
            </fieldset>
            <div className={
              classNames(
                'custom-input',
                'form-review__item',
                { 'is-invalid': errors.name}
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
                  value={name}
                  placeholder="Введите ваше имя"
                  data-testid="nameElement"
                  autoFocus
                  {...register('name', {
                    required: 'Введите ваше имя',
                    pattern: {
                      value: /^\w{3,10}$/,
                      message: 'Name must contain from 3 to 10 letters'
                    }
                  })}
                  onChange={handleInputNameChange}
                />
              </label>
              { errors.name && (
                <p className="custom-input__error">Нужно указать имя</p>
              )}
            </div>
            <div className={classNames(
              'custom-input',
              'form-review__item',
              {'is-invalid' : errors.userPlus}
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
                  type="text"
                  value={userPlus}
                  placeholder="Основные преимущества товара"
                  {...register('userPlus', {
                    required: 'Основные преимущества товара',
                    pattern: {
                      value: /^\w{10,160}$/,
                      message: 'userPlus must contain from 10 to 160 letters'
                    }
                  })}
                  data-testid="positiveElement"
                  onChange={handleInputUserPlusChange}
                />
              </label>
              {errors.userPlus && (
                <p className="custom-input__error">Нужно указать достоинства</p>
              )}
            </div>
            <div className={
              classNames(
                'custom-input',
                'form-review__item',
                {'is-invalid': errors.userMinus}
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
                  value={userMinus}
                  placeholder="Главные недостатки товара"
                  {...register('userMinus', {
                    required: 'Главные недостатки товара',
                    pattern: {
                      value: /^\w{10,160}$/,
                      message: 'userMinus must contain from 10 to 160 letters'
                    }
                  })}
                  data-testid="negativeElement"
                  onChange= {handleInputUserMinusChange}
                />
              </label>
              {errors.userMinus && (
                <p className="custom-input__error">Нужно указать недостатки</p>
              )}
            </div>
            <div className={classNames(
              'custom-textarea',
              'form-review__item',
              {'is-invalid' : errors.comment}
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
                  placeholder="Поделитесь своим опытом покупки"
                  defaultValue={''}
                  value={comment}
                  data-testid="commentElement"
                  {...register('comment', {
                    required: 'Поделитесь своим опытом покупки',
                    pattern: {
                      value: /^\w{10,160}$/,
                      message: 'Comment must contain from 10 to 160 letters'
                    }
                  })
                  }
                  onChange={handleInputCommentChange}
                />
              </label>
              {errors.comment && (
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

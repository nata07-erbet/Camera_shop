import { Fragment } from 'react';
import { PopUpMain, PopUpMainProps } from './index';
import { RatingMap, ReqPath } from '../../const/const';
import { SubmitHandler, useForm } from 'react-hook-form';
import classNames from 'classnames';
import { TPostRewiew } from '../../types';
import { api } from '../../services';
import {  SettingValidation } from '../../const/const'

type IPopupAddRewiew = PopUpMainProps & {
  productId: number;
  onSubmit: () => void;
}

type FormInputs = {
  rate: string;
  name: string;
  userPlus: string;
  userMinus: string;
  comment: string;
}

function PopupAddRewiew ({ productId, onSubmit, ...props }: IPopupAddRewiew) {


  const {
    register,
    formState:{ errors },
    handleSubmit,
    watch,
    setError,
  } = useForm<FormInputs>({
    mode: 'all'
  });

  const ratingValue = watch('rate');


  const handleFormSubmit: SubmitHandler<FormInputs> = (data) => {
    const formData: TPostRewiew = {
      cameraId: productId,
      userName: data.name,
      advantage: data.userPlus,
      disadvantage: data.userMinus,
      review: data.comment,
      rating: +data.rate
    };

    api.post(ReqPath.postRewiews, formData)
      .then(onSubmit)
      .catch((err) => setError('root', err));
  };
  console.log(errors);
  return(
    <PopUpMain {...props}>
      <p className="title title--h4">Оставить отзыв</p>
      <div className="form-review">
        <form
          action="#"
          method="post"
          onSubmit={(evt) => handleSubmit(handleFormSubmit)(evt)}
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
                          {
                            ...register('rate', {
                              required: 'Нужно проставить рейтинг',
                              pattern: {
                                value: /^[1-5]$/,
                                message: 'Rate must contain from 1 to 5 stars'
                              }
                            })
                          }
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
                  <span className="rate__stars">{ratingValue}</span> <span>/</span>{' '}
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
                  placeholder="Введите ваше имя"
                  data-testid="nameElement"
                  autoFocus
                  {...register('name', {
                    required: 'Введите ваше имя',
                    minLength: {
                      value: SettingValidation.UserMin,
                      message: 'Name must contain from 3 to 10 letters'
                    },
                    maxLength: {
                      value: SettingValidation.UserMax,
                      message: 'Name must contain from 3 to 10 letters'
                    }
                  })}
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
                  placeholder="Основные преимущества товара"
                  {...register('userPlus', {
                    required: 'Основные преимущества товара',
                    pattern: {
                      value: /^\w{10,160}$/,
                      message: 'userPlus must contain from 10 to 160 letters'
                    }
                  })}
                  data-testid="positiveElement"
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
                  placeholder="Главные недостатки товара"
                  {...register('userMinus', {
                    required: 'Главные недостатки товара',
                    pattern: {
                      value: /^\w{10,160}$/,
                      message: 'userMinus must contain from 10 to 160 letters'
                    }
                  })}
                  data-testid="negativeElement"
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
                  data-testid="commentElement"
                  {...register('comment', {
                    required: 'Поделитесь своим опытом покупки',
                    pattern: {
                      value: /^\w{10,160}$/,
                      message: 'Comment must contain from 10 to 160 letters'
                    }
                  })
                  }
                />
              </label>
              {errors.comment && (
                <div className="custom-textarea__error">
                 Нужно добавить комментарий
                </div>
              )}

            </div>
          </div>
          {errors.root && (
            <p className="custom-input__error custom-input__error--root" style={{ color: 'red', fontSize: 12, maxWidth: 400 }}>При отправке произошла ошибка: {errors.root.message}</p>
          )}
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

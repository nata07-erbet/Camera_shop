import { useState } from 'react';
import { basketProductsMock } from '../../mocks/basket-mock';
import classNames from 'classnames';
import { api } from '../../services';
import { ReqPath } from '../../const/const';
import { TCoupon } from '../../types/coupon.type';
import { SubmitHandler, useForm } from 'react-hook-form';

type OrderProps = {
  onSubmit: () => void;
};

function Order ({onSubmit}: OrderProps){
  const summary = basketProductsMock.reduce((acc: number, currentValue) =>
    acc + currentValue.price * currentValue.count, 0);

  const [ discount, setDiscount ] = useState(17);
  const [stylePromo, setStylePromo ] = useState('');

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setError
  } = useForm<FormInputs>({
    mode: 'all'
  });

  const styleDiscount = classNames(
    'basket__summary-value--bonus',
    {'basket__summary-value': discount === 0}
  );

  const classPromoIsValid = classNames(
    'custom-input',
    'is-valid'
  );

  const classPromoIsInValid = classNames(
    'custom-input',
    'is-invalid'
  );

  const isValidatePromo = (value: string) =>
    (value === 'camera-333' || value === 'camera-444' || value === 'camera-555' && value !== ' ');

  type FormInputs = {
    promo: 'camera-333' | 'camera-444' | 'camera-555';
  };

  const couponValue = watch('promo');

  const handleClickCheckCoupon = () => {
    if(isValidatePromo(couponValue)) {
      setStylePromo(classPromoIsValid);
    } else {
      setStylePromo(classPromoIsInValid);
    }
  };


  const handleFormSubmit: SubmitHandler<FormInputs> = (data) => {
    const formData: TCoupon = {
      coupon: data.promo
    };


    api.post(ReqPath.postCoupons, formData)
      .then(onSubmit)
      .catch((err) => setError('root', err));
  };
  return (
    <div className="basket__summary">
      <div className="basket__promo">
        <p className="title title--h4">
                    Если у вас есть промокод на скидку, примените его в этом
                    поле
        </p>
        <div className="basket-form">
          <form
            action="#"
            onSubmit={(evt) => handleSubmit(handleFormSubmit)(evt)}
          >
            <div className={stylePromo}>
              <label>
                <span className="custom-input__label">Промокод</span>
                <input
                  type="text"
                  placeholder="Введите промокод"
                  {
                    ...register('promo', {
                      validate: {isValidatePromo},
                    })
                  }
                />
              </label>
              <p className="custom-input__error">Промокод неверный</p>
              <p className="custom-input__success">Промокод принят!</p>
            </div>
            <button
              className="btn"
              type="submit"
              onClick={handleClickCheckCoupon}
              >
                Применить
            </button>
          </form>
        </div>
      </div>
      <div className="basket__summary-order">
        <p className="basket__summary-item">
          <span className="basket__summary-text">Всего:</span>
          <span className="basket__summary-value">{summary}₽</span>
        </p>
        <p className="basket__summary-item">
          <span className="basket__summary-text">Скидка:</span>
          <span className={styleDiscount}>
            {discount}₽
          </span>
        </p>
        <p className="basket__summary-item">
          <span className="basket__summary-text basket__summary-text--total">
                      К оплате:
          </span>
          <span className="basket__summary-value basket__summary-value--total">
            {summary - discount}₽
          </span>
        </p>
        <button className="btn btn--purple" type="submit">
                    Оформить заказ
        </button>
      </div>
    </div>
  );
}

export { Order };

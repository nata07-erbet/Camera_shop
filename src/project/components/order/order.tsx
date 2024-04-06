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
  const styleDiscount = classNames(
    'basket__summary-value--bonus',
    {'basket__summary-value': discount === 0}
  );

  type FormInputs = {
    promo: TCoupon
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setError
  } = useForm<FormInputs>({
    mode: 'all';
  });

  const couponValue = watch('promo');

  const handleFormSubmit: SubmitHandler<FormInputs> = (data) => {
    const couponData: FormInputs =  {
      promo: data.coupon
    }

    api.post(ReqPath.postCoupons, couponData)
      .then(onSubmit);
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
            onSubmit={handleSubmit(handleFormSubmit)(evt)}
          >
            <div className="custom-input">
              <label>
                <span className="custom-input__label">Промокод</span>
                <input
                  type="text"
                  placeholder="Введите промокод"
                  value={1}
                  {
                    ...register('promo', {

                    })
                  }
                />
              </label>
              <p className="custom-input__error">Промокод неверный</p>
              <p className="custom-input__success">
                          Промокод принят!
              </p>
            </div>
            <button className="btn" type="submit">
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

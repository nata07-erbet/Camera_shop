import { ChangeEvent, useState } from 'react';
import { basketProductsMock } from '../../mocks/basket-mock';
import classNames from 'classnames';
import { api } from '../../services';
import { ReqPath } from '../../const/const';
import { TCoupon, TOrder } from '../../types/index';
import { SubmitHandler, useForm } from 'react-hook-form';


function Order (){

  const [stylePromo, setStylePromo ] = useState('');
  const [ perCent, setPercent ] = useState<number>(0);

  const totalSum = basketProductsMock.reduce((acc: number, currentValue) =>
    acc + currentValue.price * currentValue.count, 0);
  const totalDiscount = (totalSum * perCent) / 100;
  const totalSumWithDiscount = totalSum - totalDiscount;
  const allIdProductsArr = basketProductsMock.map((product) => product.id);

  const {
    register,
    handleSubmit,
    watch,
    setError
  } = useForm<FormInputsPromo>({
    mode: 'all'
  });

  const styleDiscount = classNames(
    'basket__summary-value--bonus',
    {'basket__summary-value': perCent === 0}
  );

  const classPromoIsValid = classNames(
    'custom-input',
    'is-valid'
  );

  const classPromoIsInValid = classNames(
    'custom-input',
    'is-invalid'
  );

  const isValidatePromo = (valueInput: string) =>
    (valueInput === 'camera-333' ||
    valueInput === 'camera-444' ||
    valueInput === 'camera-555' &&
    valueInput !== ' ');

  type FormInputsPromo = {
    coupon: TCoupon;
  };

  type FormInputsOrder = {
    camerasIds: number[];
    coupon: TCoupon;
  }

  const couponValue = watch('promo');

  const handleClickCheckCoupon = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();


    const formData: TCoupon = {
      coupon: couponValue
    };

    if(isValidatePromo(couponValue)) {
      setStylePromo(classPromoIsValid);
    } else {
      setStylePromo(classPromoIsInValid);
    }

    api.post(ReqPath.postCoupons, formData)
      .then((response) => setPercent(response.data))
      .catch((err) => setError('root', err));
  };

  const handleFormSubmit: SubmitHandler<FormInputsOrder> = () => {
    // что писать сюда?
  };

  const handleClickButtonSubmitOrder = () => {
    const formData: TOrder = {
      camerasIds: allIdProductsArr,
      coupon: couponValue
    };

    api.post(ReqPath.postOrders, formData)
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
          <span className="basket__summary-value">{totalSum.toLocaleString()}₽</span>
        </p>
        <p className="basket__summary-item">
          <span className="basket__summary-text">Скидка:</span>
          <span className={styleDiscount}>
            {totalDiscount.toLocaleString()}₽
          </span>
        </p>
        <p className="basket__summary-item">
          <span className="basket__summary-text basket__summary-text--total">
                      К оплате:
          </span>
          <span className="basket__summary-value basket__summary-value--total">
            {totalSumWithDiscount.toLocaleString()}
            ₽
          </span>
        </p>
        <button
          className="btn btn--purple"
          type="submit"
          onClick={handleClickButtonSubmitOrder}
          disabled={basketProductsMock.length === 0}
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
}

export { Order };

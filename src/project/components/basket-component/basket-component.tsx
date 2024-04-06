import { ChangeEvent, useState } from 'react';
import { TProductLocalStorage } from '../../types';

import {
  MAX_PRODUCTS_IN_BASKET,
  MIN_PRODUCTS_IN_BASKET } from '../../const/const';

type BasketComponentProps = {
  product: TProductLocalStorage;
  onButtonDeleteProduct: () => void;
};

function BasketComponent ({product, onButtonDeleteProduct}: BasketComponentProps) {
  const [ value, setValue ] = useState<number>(product.count);

  const handleChangeCount = (evt: ChangeEvent<HTMLInputElement>) => {
    const count = evt.target.value.replace(/^0/, '');
    setValue(Number(count));
  };

  const handleClickCountBack = () => {
    if (value > MIN_PRODUCTS_IN_BASKET) {
      setValue((prevState) => prevState - 1);
    } else if (value === MIN_PRODUCTS_IN_BASKET) {
      return MIN_PRODUCTS_IN_BASKET;
    }
  };

  const handleClickCountNext = () => {
    if (value < MAX_PRODUCTS_IN_BASKET) {
      setValue((prevState) => prevState + 1);
    } else {
      return MAX_PRODUCTS_IN_BASKET;
    }
  };

  const handleButtonDeleteProduct = () => {
    onButtonDeleteProduct();
  };


  return (
    <li className="basket-item" key={product.id}>
      <div className="basket-item__img">
        <picture>
          <source
            type="image/webp"
            srcSet={product.previewImgWebp2x}
          />
          <img
            src={product.previewImg}
            srcSet={product.previewImg2x}
            width={140}
            height={120}
            alt={product.name}
          />
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{product.name}</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item">
            <span className="basket-item__article">Артикул:</span>{''}
            <span className="basket-item__number">{product.vendorCode}</span>
          </li>
          <li className="basket-item__list-item">
            {product.type} фотокамера
          </li>
          <li className="basket-item__list-item">
            {product.level} уровень
          </li>
        </ul>
      </div>
      <p className="basket-item__price">
        <span className="visually-hidden"> Цена:</span>{product.price}₽
      </p>
      <div className="quantity">
        <button
          className="btn-icon btn-icon--prev"
          aria-label="уменьшить количество товара"
          onClick={handleClickCountBack}
        >
          <svg width={7} height={12} aria-hidden="true">
            <use xlinkHref="#icon-arrow" />
          </svg>
        </button>
        <label className="visually-hidden" htmlFor="counter1" />
        <input
          type="number"
          id={`counter${value}`}
          value={value}
          defaultValue={MIN_PRODUCTS_IN_BASKET}
          min={MIN_PRODUCTS_IN_BASKET }
          max={MAX_PRODUCTS_IN_BASKET}
          aria-label="количество товара"
          onChange={handleChangeCount}
        />
        <button
          className="btn-icon btn-icon--next"
          aria-label="увеличить количество товара"
          onClick={handleClickCountNext}
        >
          <svg width={7} height={12} aria-hidden="true">
            <use xlinkHref="#icon-arrow" />
          </svg>
        </button>
      </div>
      <div className="basket-item__total-price">
        <span className="visually-hidden">Общая цена:</span>{product.price * value }₽
      </div>
      <button
        className="cross-btn"
        type="button"
        aria-label="Удалить товар"
        onClick={handleButtonDeleteProduct}
      >
        <svg width={10} height={10} aria-hidden="true">
          <use xlinkHref="#icon-close" />
        </svg>
      </button>
    </li>
  );
}

export { BasketComponent };

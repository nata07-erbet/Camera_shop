import { TProduct } from '../../types';

type BasketListProps = {
  products: TProduct[];
};

const MAX_BASKET = 5;

function BasketList ({products}:BasketListProps) {

  return (
    <ul className="basket__list" data-testid="basket-list">
      {products
        .slice(0, MAX_BASKET)
        .map((product) =>(
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
              >
                <svg width={7} height={12} aria-hidden="true">
                  <use xlinkHref="#icon-arrow" />
                </svg>
              </button>
              <label className="visually-hidden" htmlFor="counter1" />
              <input
                type="number"
                id="counter1"
                value={3}
                defaultValue={1}
                min={1}
                max={99}
                aria-label="количество товара"
              />
              <button
                className="btn-icon btn-icon--next"
                aria-label="увеличить количество товара"
              >
                <svg width={7} height={12} aria-hidden="true">
                  <use xlinkHref="#icon-arrow" />
                </svg>
              </button>
            </div>
            <div className="basket-item__total-price">
              <span className="visually-hidden">Общая цена:</span>{product.price * 3 }₽
            </div>
            <button
              className="cross-btn"
              type="button"
              aria-label="Удалить товар"
            >
              <svg width={10} height={10} aria-hidden="true">
                <use xlinkHref="#icon-close" />
              </svg>
            </button>
          </li>
        ))}
    </ul>
  );
}

export { BasketList };

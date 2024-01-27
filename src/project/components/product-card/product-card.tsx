import { TProduct } from '../../types/';

type ProductCardProps = {
  product: TProduct;
}
function ProductCard ({product}: ProductCardProps) {
  const { name } = product;

  return (
    <div className="product-card is-active">
      <div className="product-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet="img/content/fast-shot.webp, img/content/fast-shot@2x.webp 2x"
          />
          <img
            src="img/content/fast-shot.jpg"
            srcSet="img/content/fast-shot@2x.jpg 2x"
            width={280}
            height={240}
            alt="Фотоаппарат FastShot MR-5"
          />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <svg width={17} height={16} aria-hidden="true">
            <use xlinkHref="#icon-full-star" />
          </svg>
          <svg width={17} height={16} aria-hidden="true">
            <use xlinkHref="#icon-full-star" />
          </svg>
          <svg width={17} height={16} aria-hidden="true">
            <use xlinkHref="#icon-full-star" />
          </svg>
          <svg width={17} height={16} aria-hidden="true">
            <use xlinkHref="#icon-full-star" />
          </svg>
          <svg width={17} height={16} aria-hidden="true">
            <use xlinkHref="#icon-star" />
          </svg>
          <p className="visually-hidden">Рейтинг: 4</p>
          <p className="rate__count">
            <span className="visually-hidden">Всего оценок:</span>12
          </p>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>18 970 ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">
      Купить
        </button>
        <a className="btn btn--transparent" href="#">
      Подробнее
        </a>
      </div>
    </div>

  );
}

export { ProductCard };

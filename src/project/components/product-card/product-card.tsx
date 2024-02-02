import { TProduct } from '../../types/';
import { Rating } from '../../components/rating/rating';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';


type ProductCardProps = {
  product: TProduct;
  onClickButton: (id: TProduct['id']) => void;
}

const isRetina = false;

function ProductCard ({ product, onClickButton }: ProductCardProps) {
  const {
    id,
    name,
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x,
    rating,
    reviewCount,
    price
  } = product;

  const handleButtonClickBuy = () => {
    onClickButton(id);
  };

  return (
    <div className="product-card is-active">
      <div className="product-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={
              isRetina ? `${previewImgWebp}` : `${previewImgWebp2x}`
            }
          />
          <img
            src={previewImg}
            srcSet={previewImg2x}
            width={280}
            height={240}
            alt={name}
          />
        </picture>
      </div>
      <div className="product-card__info">
        <Rating rating={rating} reviewCount={reviewCount}/>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{price}₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button
          className="btn btn--purple product-card__btn"
          type="button"
          onClick={handleButtonClickBuy}
        >
          Купить
        </button>
        <Link className="btn btn--transparent" to={AppRoute.Product}>
          Подробнее
        </Link>
      </div>
    </div>
  );
}

export { ProductCard };

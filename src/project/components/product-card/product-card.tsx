import { TProduct } from '../../types/';
import { Rating } from '../../components/rating/rating';
import { Link} from 'react-router-dom';
import { generatePath } from 'react-router';
import { AppRoute } from '../../const/const';

type ProductCardProps = {
  product: TProduct;
  onClickButton?: (id: TProduct['id']) => void | undefined;
  onChangeDisabled?: (id: TProduct['id']) => void | undefined;
  isAddedBasket: boolean;
}
function ProductCard ({ product, onClickButton, onChangeDisabled, isAddedBasket }: ProductCardProps) {

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

  const href = generatePath(AppRoute.Product, {
    productId: id.toString(),
    tab: null
  });

  const handleButtonClickBuy = () => {
    onClickButton?.(id);
    onChangeDisabled?.(id);
  };

  return (
    <div className="product-card is-active" data-testid="product">
      <div className="product-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`/${previewImgWebp}, /${previewImgWebp2x} 2x`}
          />
          <img
            src={`/${previewImg}`}
            srcSet={`/${previewImg2x} 2x`}
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
          disabled={isAddedBasket}
        >
          {isAddedBasket ? ' В Корзине' : ' Купить'}

        </button>
        <Link
          className="btn btn--transparent"
          to={href}
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}

export { ProductCard };

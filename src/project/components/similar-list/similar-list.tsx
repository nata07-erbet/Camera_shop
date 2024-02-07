import { TProduct } from '../../types/index';
import { Rating } from '../../components/rating/rating';

type SimilarListProps = {
  similarProducts: TProduct[];
};

function SimilarList ({similarProducts}: SimilarListProps) {
  const isRetina = true;

  return (
    <div className="product-similar__slider-list">
      {similarProducts
        .slice(0, 3)
        .map((similar) => (
          <div className="product-card is-active" key={similar.id}>
            <div className="product-card__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet={!isRetina ? `/${similar.previewImgWebp}` : `/${similar.previewImgWebp2x}`}
                />
                <img
                  src={`/${similar.previewImg}`}
                  srcSet={`/${similar.previewImg2x}`}
                  width={280}
                  height={240}
                  alt={similar.name}
                />
              </picture>
            </div>
            <div className="product-card__info">
              <Rating rating={similar.rating} reviewCount={similar.reviewCount}/>
              <p className="product-card__title">{similar.name}</p>
              <p className="product-card__price">
                <span className="visually-hidden">Цена:</span>{similar.price}₽
              </p>
            </div>
            <div className="product-card__buttons">
              <button
                className="btn btn--purple product-card__btn"
                type="button"
              >
              Купить
              </button>
              <a className="btn btn--transparent" href="#">
              Подробнее
              </a>
            </div>
          </div>
        ))}
    </div>
  );
}

export { SimilarList };

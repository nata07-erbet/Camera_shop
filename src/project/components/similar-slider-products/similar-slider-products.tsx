import { SimilarList } from '../similar-list/similar-list';
import { TProduct } from '../../types/index';

type SimilarSliderProductsProps = {
  similarProducts: TProduct[];
}

function SimilarSliderProducts ({similarProducts}: SimilarSliderProductsProps) {
  return(
    <section className="product-similar">
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>

        <div className="product-similar__slider">
          <SimilarList similarProducts={similarProducts}/>
          <button
            className="slider-controls slider-controls--prev"
            type="button"
            aria-label="Предыдущий слайд"
            disabled
          >
            <svg width={7} height={12} aria-hidden="true">
              <use xlinkHref="#icon-arrow" />
            </svg>
          </button>
          <button
            className="slider-controls slider-controls--next"
            type="button"
            aria-label="Следующий слайд"
          >
            <svg width={7} height={12} aria-hidden="true">
              <use xlinkHref="#icon-arrow" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export { SimilarSliderProducts };

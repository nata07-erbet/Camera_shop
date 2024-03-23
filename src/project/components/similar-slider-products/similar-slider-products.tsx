import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './similar-slider-products.css';

import { Navigation } from 'swiper/modules';
import { TProduct } from '../../types/index';
import { SIMILAR_VIEW_COUNT } from '../../const/const';
import { ProductCard } from '../product-card/product-card';

type SimilarSliderProductsProps = {
  similarProducts: TProduct[];
};

const params: SwiperProps = {
  navigation: {
    enabled: true,
    prevEl: '.slider-controls--prev',
    nextEl: '.slider-controls--next',
  },

  modules: [Navigation],
  slidesPerView: SIMILAR_VIEW_COUNT,
  watchSlidesProgress: true,
  allowTouchMove: false,
  slidesPerGroup: SIMILAR_VIEW_COUNT,
  className: 'product-similar__slider-list'
};

function SimilarSliderProducts ({similarProducts}: SimilarSliderProductsProps) {
  return(
    <section className="product-similar" data-testid="slider">
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>
        <div className="product-similar__slider">
          <div className="product-similar__slider-list" data-testid="similar">
            <Swiper {...params}>
              {similarProducts
                .map((product) =>(
                  <SwiperSlide key={product.id}>
                    <ProductCard key={product.id} product={product} />
                  </SwiperSlide>
                ))}
            </Swiper>
            <button
              className="slider-controls slider-controls--prev"
              type="button"
              aria-label="Предыдущий слайд"
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
      </div>
    </section>
  );
}

export { SimilarSliderProducts };

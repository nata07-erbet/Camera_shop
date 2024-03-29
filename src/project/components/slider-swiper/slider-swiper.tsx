import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider-swiper.css';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Banner } from '../banner/banner';
import { TBanner } from '../../types/index';

type SliderSwiperProps = {
  banners: TBanner[];
}

const params: SwiperProps = {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination:{
    type: 'bullets',
    clickable: true,
  },
  navigation: true,
  modules:[Autoplay, Pagination, Navigation],
  className: 'my-swiper',
};

function SliderSwiper({banners}: SliderSwiperProps){
  return(
    <Swiper {...params} data-testid="swiper" >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <Banner banner={banner} />
        </SwiperSlide>
      ))}
    </Swiper>
  );

}

export { SliderSwiper};

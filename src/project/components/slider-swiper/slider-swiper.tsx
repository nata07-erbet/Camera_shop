import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Banner } from '../banner/banner';
import { TBanner } from '../../types/index';

type SliderSwiperProps = {
  banners: TBanner[];
}

function SliderSwiper({banners}: SliderSwiperProps){
  const params = {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination:{
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: true,
    modules:[Autoplay, Pagination, Navigation],
    className: 'mySwiper',

    renderBullet: function (index: number, el: string) {
      return `<span class="${ el }">${ index + 1 }</span>`;
    }
  };

  return(
    <Swiper {...params} >
      <SwiperSlide>
        <Banner banners={banners} />
      </SwiperSlide>
    </Swiper>
  );

}

export { SliderSwiper};

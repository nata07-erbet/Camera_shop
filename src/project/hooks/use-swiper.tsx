import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function useSwiper() {
  const swiper = new Swiper('.swiper', {
    centeredSlides: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      clickable: true,
    },
    navigation: true,

    // renderBullet: function (index: number, className: string) {
    //   return `<span class="${ className }">${ index + 1 }</span>`;
    // },
  });

  return swiper;
}

export { useSwiper };

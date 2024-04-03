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
      bulletActiveClass: 'visually-hidden',
    },
    navigation: true,
  });

  return swiper;
}
export { useSwiper };

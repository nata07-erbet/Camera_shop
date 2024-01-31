import { TBanner } from '../../types/index';

type BannerProps = {
  banners: TBanner[];
}
function Banner ({banners}: BannerProps) {
  const isRetina = true;

  return (
    <div className="banner">
      {banners.map((banner) => (
        <>
          <picture>
            <source
              type="image/webp"
              srcSet={isRetina ? banner.previewImgWebp2x : banner.previewImgWebp}
            />
            <img
              src={banner.previewImg}
              srcSet={banner.previewImg2x}
              width={1280}
              height={280}
              alt={banner.name}
            />
          </picture>
          <p className="banner__info">
            <span className="banner__message">Новинка!</span>
            <span className="title title--h1">
              {banner.name}
            </span>
            <span className="banner__text">
              Профессиональная камера от&nbsp;известного производителя
            </span>
            <a className="btn" href="#">
               Подробнее
            </a>
          </p>
        </>
      ))}
      <picture>
        <source
          type="image/webp"
          srcSet="img/content/banner-bg.webp, img/content/banner-bg@2x.webp 2x"
        />
        <img
          src="img/content/banner-bg.jpg"
          srcSet="img/content/banner-bg@2x.jpg 2x"
          width={1280}
          height={280}
          alt="баннер"
        />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">
        Cannonball&nbsp;Pro&nbsp;MX&nbsp;8i
        </span>
        <span className="banner__text">
        Профессиональная камера от&nbsp;известного производителя
        </span>
        <a className="btn" href="#">
        Подробнее
        </a>
      </p>
    </div>
  );
}

export { Banner };

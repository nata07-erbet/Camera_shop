import { TBanner } from '../../types/index';
import { Link, generatePath} from 'react-router-dom';
import { AppRoute } from '../../const/const';

type BannerProps = {
  banner: TBanner;
}

function Banner ({banner}: BannerProps) {

  return (
    <div className="banner" key={banner.id}>
      <picture>
        <source
          type="image/webp"
          srcSet={banner.previewImgWebp2x}
        />
        <img
          src={banner.previewImg}
          srcSet={banner.previewImg2x}
          width={1280}
          height={280}
          alt={banner.name}
        />
      </picture>
      <p className="banner__info" data-testid ='banner-offer'>
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">
          {banner.name}
        </span>
        <span className="banner__text">
          Профессиональная камера от&nbsp;известного производителя
        </span>
        <Link className="btn" to={generatePath(AppRoute.Product,
          {
            productId: banner.id.toString(),
            tab: null
          }
        )}
        >
          Подробнее
        </Link>
      </p>
    </div>
  );
}

export { Banner };

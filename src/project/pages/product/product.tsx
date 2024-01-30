import { Header} from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { UpBtn } from '../../components/up-btn/up-btn';
import { BreadCrumbs } from '../../components/breadcrumbs/breadcrumbs';
import {SimilarSliderProducts } from '../../components/similar-slider-products/similar-slider-products';
import { TProduct, TGetRewiew } from '../../types/index';
import classNames from 'classnames';
import { useState } from 'react';
import { Rating } from '../../components/rating/rating';
import { MOCK_START, MOCK_END } from '../../const/const';
import { getRandomInteger } from '../../utils/utils';
import { Rewiews } from '../../components/rewiews/rewiews';

// import { useParams } from 'react-router';

type ProductProps = {
  products: TProduct[];
  similarProducts: TProduct[];
  rewiews: TGetRewiew[];
}


function Product ({products, similarProducts, rewiews}: ProductProps) {
  const isRetina = true;
  const [isActive, setIsActive] = useState(true);

  const tabClassAct = classNames(
    'tabs__element',
    {
      'is-active': isActive,
      disabled: !isActive
    },
  );

  const tabClassNoAct = classNames(
    'tabs__element',
    {
      'is-active': !isActive,
      disabled: !isActive
    },
  );

  // const param = useParams();
  // const id = Number(param);

  //для проверки корректности отбражения данных
  const id = getRandomInteger(MOCK_START, MOCK_END);

  const currentProduct = products.find((product) => product.id === id);

  //потом будет спиннер
  if(!currentProduct) {
    return null;
  }

  const {
    name,
    previewImgWebp,
    previewImgWebp2x,
    previewImg,
    previewImg2x,
    price,
    rating,
    reviewCount
  } = currentProduct;

  return (
    <>
      <Header />
      <main>
        <div className="page-content">
          <BreadCrumbs />
          <div className="page-content__section">
            <section className="product">
              <div className="container">
                <div className="product__img">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={ isRetina ? previewImgWebp : previewImgWebp2x }
                    />
                    <img
                      src={previewImg}
                      srcSet={previewImg2x}
                      width={560}
                      height={480}
                      alt={name}
                    />
                  </picture>
                </div>
                <div className="product__content">
                  <h1 className="title title--h3">{name}</h1>
                  <Rating rating={rating} reviewCount={reviewCount}/>
                  <p className="product__price">
                    <span className="visually-hidden">Цена:</span>{price}₽;
                  </p>
                  <button className="btn btn--purple" type="button">
                    <svg width={24} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-add-basket" />
                    </svg>
                Добавить в корзину
                  </button>
                  <div className="tabs product__tabs">
                    <div className="tabs__controls product__tabs-controls">
                      <button
                        className={classNames(
                          'tabs__control',
                          {'is-active': !isActive}
                        )}
                        type="button"
                        onClick={() => setIsActive(true)} // хз не меняет состояние
                      >
                        Характеристики
                      </button>

                      <button
                        className={classNames(
                          'tabs__control',
                          {'is-active': isActive}
                        )}
                        type="button"
                        onClick={() => setIsActive(false)} // хз не меняет состояние
                      >
                    Описание
                      </button>
                    </div>

                    <div className="tabs__content">
                      <div className={tabClassNoAct}>
                        <ul className="product__tabs-list">
                          <li className="item-list">
                            <span className="item-list__title">Артикул:</span>
                            <p className="item-list__text"> DA4IU67AD5</p>
                          </li>
                          <li className="item-list">
                            <span className="item-list__title">Категория:</span>
                            <p className="item-list__text">Видеокамера</p>
                          </li>
                          <li className="item-list">
                            <span className="item-list__title">Тип камеры:</span>
                            <p className="item-list__text">Коллекционная</p>
                          </li>
                          <li className="item-list">
                            <span className="item-list__title">Уровень:</span>
                            <p className="item-list__text">Любительский</p>
                          </li>
                        </ul>
                      </div>
                      <div className={tabClassAct}>
                        <div className="product__tabs-text">
                          <p>
                        Немецкий концерн BRW разработал видеокамеру Das Auge IV
                        в&nbsp;начале 80-х годов, однако она до&nbsp;сих пор
                        пользуется популярностью среди коллекционеров
                        и&nbsp;яростных почитателей старинной техники.
                          </p>
                          <p>
                        Вы&nbsp;тоже можете прикоснуться к&nbsp;волшебству
                        аналоговой съёмки, заказав этот чудо-аппарат. Кто знает,
                        может с&nbsp;Das Auge IV&nbsp;начнётся ваш путь
                        к&nbsp;наградам всех престижных кинофестивалей.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="page-content__section">
            <SimilarSliderProducts similarProducts={similarProducts} />
          </div>
          <div className="page-content__section">
            <Rewiews rewiews={rewiews}/>
          </div>
        </div>
      </main>
      <UpBtn />
      <Footer />
    </>
  );
}

export { Product };

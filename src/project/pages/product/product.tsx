/* eslint-disable no-alert */
import { useState } from 'react';
import { useParams, useNavigate, generatePath } from 'react-router-dom';
import classNames from 'classnames';

import { AppRoute, AppRouteTab, DEFAULT_TAB, TabsMap} from '../../const/const';
import { Header} from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { UpBtn } from '../../components/up-btn/up-btn';
import { BreadCrumbs } from '../../components/breadcrumbs/breadcrumbs';
import {SimilarSliderProducts } from '../../components/similar-slider-products/similar-slider-products';
import { TProduct, TGetRewiew } from '../../types/index';
import { Rating } from '../../components/rating/rating';
import { Rewiews } from '../../components/rewiews/rewiews';
import { PopupBasketSuccess, PopupAddRewiew, PopRewiewSuccess, PopupAddBasket } from '../../components/pop-up/index';

type ProductProps = {
  products: TProduct[];
  similarProducts: TProduct[];
  rewiews: TGetRewiew[];
}

type TTab = typeof AppRouteTab[keyof typeof AppRouteTab];
const TABS: TTab[] = ['characteristic', 'description'];

function Product ({products, similarProducts, rewiews}: ProductProps) {
  const navigate = useNavigate();

  const { productId } = useParams<{productId: string}>();
  const { tab: savedTab } = useParams<{tab: TTab}>();

  const [currentTab, setCurrentTab] = useState<TTab>(savedTab || DEFAULT_TAB);
  const [ isAddedBasket, setIsAddedBasket ] = useState(false);
  const [ isAddedBasketSuccess, setIsAddedBasketSuccess ] = useState(false);
  const [ isAddRewiewPopUpShowed, setIsRewiewPopUpShowed ] = useState(false);
  const [ isSuccessfulPopupShowed, setIsSuccessfulPopupShowed ] = useState(false);

  const isRetina = true;
  const currentProduct = products.find((product) => product.id === Number(productId));

  const isActive = currentTab === DEFAULT_TAB;

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

  const handleClickButtonAddbasket = () => {
    setIsAddedBasket((prevState) => !prevState);
  };

  const handlePopupAddBasketClose = () => {
    setIsAddedBasket((prevState) => !prevState);
  };

  const handleButtonAddRewiewClick = () => {
    setIsRewiewPopUpShowed((prevState) => !prevState);
  };

  const handleSubmitForm = () => {
    setIsSuccessfulPopupShowed((prevState) => !prevState);
    setIsRewiewPopUpShowed((prevState) => !prevState);

  };

  const handlePopupAddRewiewClose = () => {
    setIsRewiewPopUpShowed((prevState) => !prevState);
  };

  const handlePopRewiewSuccessClose = () => {
    setIsSuccessfulPopupShowed((prevState) => !prevState);
  };

  const handlePopupBasketSuccessClose = () => {
    setIsAddedBasketSuccess((prevState) => !prevState);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const handleClickTab = (tab: TTab) => {
    setCurrentTab(tab);
    if (currentProduct) {
      navigate(generatePath(AppRoute.Product, {
        productId: currentProduct.id.toString(),
        tab
      }));
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="page-content">
          <BreadCrumbs currentProduct={currentProduct} />
          <div className="page-content__section">
            <section className="product">
              <div className="container">
                <div className="product__img">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={ isRetina ? `/${previewImgWebp}` : `/${previewImgWebp2x}` }
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
                  <button
                    className="btn btn--purple" type="button"
                    onClick={handleClickButtonAddbasket}
                  >
                    <svg width={24} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-add-basket" />
                    </svg>
                    Добавить в корзину
                  </button>
                  <div className="tabs product__tabs">
                    <div className="tabs__controls product__tabs-controls">
                      {TABS.map((tab) => (
                        <button key={tab}
                          className={classNames(
                            'tabs__control',
                            {'is-active': tab === currentTab}
                          )}
                          type="button"
                          onClick={() => handleClickTab(tab)}
                        >
                          {TabsMap[tab]}
                        </button>))}
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
            <Rewiews rewiews={rewiews} onButtonAddRewiewClick={handleButtonAddRewiewClick}/>
          </div>
        </div>
      </main>
      <UpBtn onScrollTop ={handleScrollToTop}/>
      <PopupAddBasket product={currentProduct}
        opened={isAddedBasket}
        onClose={handlePopupAddBasketClose}
      />
      <PopupBasketSuccess
        opened={isAddedBasketSuccess}
        onClose={handlePopupBasketSuccessClose}
      />
      <PopupAddRewiew
        onSubmit={handleSubmitForm}
        onClose={handlePopupAddRewiewClose}
        opened={isAddRewiewPopUpShowed}
      />
      <PopRewiewSuccess
        onClose={handlePopRewiewSuccessClose}
        opened={isSuccessfulPopupShowed}
      />
      <Footer />
    </>
  );
}

export { Product };

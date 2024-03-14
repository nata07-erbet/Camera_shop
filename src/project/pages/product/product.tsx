import { useEffect, useState } from 'react';
import { useParams, useNavigate, generatePath } from 'react-router-dom';
import classNames from 'classnames';

import { AppRoute, AppRouteTab, DEFAULT_TAB, TabsMap, ReqPath} from '../../const/const';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { UpBtn } from '../../components/up-btn/up-btn';
import { BreadCrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { SimilarSliderProducts } from '../../components/similar-slider-products/similar-slider-products';
import { TProduct, TGetRewiew } from '../../types/index';
import { Rating } from '../../components/rating/rating';
import { Rewiews } from '../../components/rewiews/rewiews';
import {
  PopupBasketSuccess,
  PopupAddRewiew,
  PopupRewiewSuccess,
  PopupAddBasket,
} from '../../components/pop-up/index';
import axios from 'axios';

type TTab = (typeof AppRouteTab)[keyof typeof AppRouteTab];
const TABS: TTab[] = ['characteristic', 'description'];

function Product() {
  const [currentProduct, setCurrentProduct] = useState<TProduct | null>(null);
  const [similarProducts, setSimilarProducts ] = useState<TProduct[]>([]);
  const [rewiews, setRewiews] = useState<TGetRewiew[]>([]);
  const { productId, tab: savedTab } = useParams<{ productId: string; tab: TTab }>();

  useEffect(() => {
    if (productId) {
      axios.get<TProduct>(`${ReqPath.getProducts}/${productId}`)
        .then((resolve) => setCurrentProduct(resolve.data));

      axios.get<TGetRewiew[]>(`${ReqPath.getProducts}/${productId}/${ReqPath.getRewiews}`)
        .then((resolve) => setRewiews(resolve.data));

      axios.get<TProduct[]>(`${ReqPath.getProducts}/${productId}/${ReqPath.getSimilar}`)
        .then((resolve) => setSimilarProducts(resolve.data));
    }
  }, [productId]);

  const navigate = useNavigate();

  const [currentTab, setCurrentTab] = useState<TTab>(savedTab || DEFAULT_TAB);
  const [isAddedBasket, setIsAddedBasket] = useState(false);
  const [isAddedBasketSuccess, setIsAddedBasketSuccess] = useState(false);
  const [isAddRewiewPopUpMainShowed, setIsRewiewPopUpMainShowed] = useState(false);
  const [isSuccessfulPopupShowed, setIsSuccessfulPopupShowed] = useState(false);

  const isActive = currentTab === DEFAULT_TAB;

  const tabClassAct = classNames('tabs__element', {
    'is-active': isActive,
    disabled: !isActive,
  });

  const tabClassNoAct = classNames('tabs__element', {
    'is-active': !isActive,
    disabled: !isActive,
  });

  const handleClickButtonAddbasket = () => {
    setIsAddedBasket((prevState) => !prevState);
  };

  const handlePopupAddBasketClose = () => {
    setIsAddedBasket((prevState) => !prevState);
  };

  const handleButtonAddRewiewClick = () => {
    setIsRewiewPopUpMainShowed((prevState) => !prevState);
  };

  const handleSubmitForm = () => {
    setIsSuccessfulPopupShowed(true);
    console.log(isSuccessfulPopupShowed);
    setIsRewiewPopUpMainShowed(false);
  };

  const handlePopupAddRewiewClose = () => {
    setIsRewiewPopUpMainShowed((prevState) => !prevState);
  };

  const handlePopupRewiewSuccessClose = () => {
    setIsSuccessfulPopupShowed((prevState) => !prevState);
  };

  const handlePopupBasketSuccessClose = () => {
    setIsAddedBasketSuccess((prevState) => !prevState);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleClickTab = (tab: TTab) => {
    setCurrentTab(tab);
    if (currentProduct) {
      navigate(
        generatePath(AppRoute.Product, {
          productId: currentProduct.id.toString(),
          tab,
        })
      );
    }
  };

  return (
    <div className="wrapper">
      <Header/>
      <main data-testid="product-page">
        {currentProduct && (
          <div className="page-content">
            <BreadCrumbs currentProduct={currentProduct} />
            <div className="page-content__section">
              <section className="product">
                <div className="container">
                  <div className="product__img">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet={`/${currentProduct.previewImgWebp}`}
                      />
                      <img
                        src={currentProduct.previewImg}
                        srcSet={currentProduct.previewImg2x}
                        width={560}
                        height={480}
                        alt={currentProduct.name}
                      />
                    </picture>
                  </div>
                  <div className="product__content">
                    <h1 className="title title--h3" data-testid='product-name'>{currentProduct.name}</h1>
                    <Rating rating={currentProduct.rating} reviewCount={currentProduct.reviewCount} />
                    <p className="product__price">
                      <span className="visually-hidden">Цена:</span>
                      {currentProduct.price.toLocaleString()}₽
                    </p>
                    <button
                      className="btn btn--purple"
                      type="button"
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
                          <button
                            key={tab}
                            className={classNames('tabs__control', {
                              'is-active': tab === currentTab,
                            })}
                            type="button"
                            onClick={() => handleClickTab(tab)}
                          >
                            {TabsMap[tab]}
                          </button>
                        ))}
                      </div>

                      <div className="tabs__content">
                        <div className={tabClassAct}>
                          <ul className="product__tabs-list">
                            <li className="item-list">
                              <span className="item-list__title">Артикул:</span>
                              <p className="item-list__text">{currentProduct.vendorCode}</p>
                            </li>
                            <li className="item-list">
                              <span className="item-list__title">Категория:</span>
                              <p className="item-list__text">{currentProduct.category}</p>
                            </li>
                            <li className="item-list">
                              <span className="item-list__title">
                                Тип камеры:
                              </span>
                              <p className="item-list__text">{currentProduct.type}</p>
                            </li>
                            <li className="item-list">
                              <span className="item-list__title">Уровень:</span>
                              <p className="item-list__text">{currentProduct.level}</p>
                            </li>
                          </ul>
                        </div>
                        <div className={tabClassNoAct}>
                          <div className="product__tabs-text">
                            <p>{currentProduct.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {similarProducts.length > 0 && (
              <div className="page-content__section">
                <SimilarSliderProducts similarProducts={similarProducts} />
              </div>
            )}
            {rewiews.length > 0 && (
              <div className="page-content__section">
                <Rewiews
                  rewiews={rewiews}
                  onButtonAddRewiewClick={handleButtonAddRewiewClick}
                />
              </div>
            )}
          </div>
        )}
      </main>
      <UpBtn onScrollTop={handleScrollToTop} />
      {currentProduct && (
        <PopupAddBasket
          product={currentProduct}
          opened={isAddedBasket}
          onClose={handlePopupAddBasketClose}
        />
      )}
      <PopupBasketSuccess
        opened={isAddedBasketSuccess}
        onClose={handlePopupBasketSuccessClose}
      />
      <PopupAddRewiew
        onSubmit={handleSubmitForm}
        onClose={handlePopupAddRewiewClose}
        opened={isAddRewiewPopUpMainShowed}
      />
      <PopupRewiewSuccess
        onClose={handlePopupRewiewSuccessClose}
        opened={isSuccessfulPopupShowed}
      />
      <Footer />
    </div>
  );
}

export { Product };

import { useState, useCallback } from 'react';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { SliderSwiper } from '../../components/slider-swiper/slider-swiper';
import { TProduct, TBanner } from '../../types/index';
import { ProductCardList } from '../../components/product-card-list/product-card-list';
import { Pagination } from '../../components/pagination/pagination-component';
import { BreadCrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { Filter } from '../../components/filter/filter';
import { Sorting } from '../../components/sorting/sorting';
import { PopupAddBasket } from '../../components/pop-up/index';
import { PRODUCT_VIEW_COUNT, ReqPath } from '../../const/const';
import { useEffect } from 'react';
import axios from 'axios';

type CatalogProps = {
  products: TProduct[];
  banners: TBanner[];
};

const getTotalPageCount = (cardCount: number): number =>
  Math.ceil(cardCount / PRODUCT_VIEW_COUNT);

function Catalog({ banners }: CatalogProps) {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    axios.get(`${ReqPath.getCameras}`)
      .then((response) => setProducts(response.data));
  }, []);

  const showPagination = products.length > PRODUCT_VIEW_COUNT;
  const [isModalAddProductShow, setIsModalAddProductShow] =
    useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<TProduct['id'] | null>(null);
  const [productsToShow, setProductsToShow] = useState(
    products.slice(0, PRODUCT_VIEW_COUNT)
  );



  const pagesAmount = getTotalPageCount(products.length);

  const handleClickButton = (productId: TProduct['id']) => {
    setIsModalAddProductShow((prevState) => !prevState);
    setSelectedId(productId); //id =2
  };

  const handleModalAddProductShowClose = () => {
    setIsModalAddProductShow((prevState) => !prevState);
  };

  const handlePageClick = useCallback(
    (page: number) => {
      setProductsToShow(
        products.slice(
          (page - 1) * PRODUCT_VIEW_COUNT,
          page * PRODUCT_VIEW_COUNT
        )
      );
    },
    [products]
  );

  const buyingProduct = products.find((product) => product.id === selectedId);
  const isActiveMainPage = true;

  return (
    <>
      <Header />
      <main data-testid="main-page">
        <SliderSwiper banners={banners} />
        <div className="page-content">
          <BreadCrumbs isActiveMainPage={isActiveMainPage} />
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
              <div className="page-content__columns">
                <div className="catalog__aside">
                  <Filter />
                </div>
                <div className="catalog__content">
                  <Sorting />
                  <ProductCardList
                    products={productsToShow}
                    onClickButton={handleClickButton}
                  />
                  {showPagination && (
                    <Pagination
                      onPageClick={handlePageClick}
                      pagesAmount={pagesAmount}
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
        {buyingProduct && (
          <PopupAddBasket
            product={buyingProduct}
            opened={isModalAddProductShow}
            onClose={handleModalAddProductShowClose}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export { Catalog };

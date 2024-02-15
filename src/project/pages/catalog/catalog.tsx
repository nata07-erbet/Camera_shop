import { Header} from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { SliderSwiper } from '../../components/slider-swiper/slider-swiper';
import { TProduct, TBanner } from '../../types/index';
import { ProductCardList } from '../../components/product-card-list/product-card-list';
import { Pangination } from '../../components/pangination/pangination';
import { BreadCrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { Filter } from '../../components/filter/filter';
import { Sorting } from '../../components/sorting/sorting';
import { useState, useCallback } from 'react';
import { PopupAddBasket } from '../../components/pop-up/index';
import { useNavigate } from 'react-router';
import { AppRoute, PRODUCT_VIEW_COUNT } from '../../const/const';

type CatalogProps = {
  products: TProduct[];
  banners: TBanner[];
};

const getTotalPageCount = (cardCount: number): number =>
  Math.ceil(cardCount / PRODUCT_VIEW_COUNT);


function Catalog ({products, banners}: CatalogProps) {
  const navigate = useNavigate();

  const isPaginationShow = () => {
    if(products.length >= 9) {
      return true;
    }
  };
  const [isModalAddProductShow, setIsModalAddProductShow] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<TProduct['id'] | null>(null);

  const [page, setPage ] = useState(1);

  const lastContebtIndex = page * getTotalPageCount(products.length);
  const firstContentIndex = lastContebtIndex - getTotalPageCount(products.length);

  const handleClickButton = (productId: TProduct['id']) => {
    setIsModalAddProductShow((prevState) => !prevState);
    setSelectedId(productId); //id =2
  };

  const handleModalAddProductShowClose = () => {
    setIsModalAddProductShow((prevState) => !prevState);
  };

  const handlePrevPageClick = useCallback(() =>{
    const currentPage = page;
    const prev = currentPage - 1;

    setPage(prev > 0 ? prev : currentPage);

  }, [page]);

  const handleNextPageClick = useCallback(() => {
    const currentPage = page;
    const next = currentPage + 1;
    const total = getTotalPageCount(products.length);

    setPage (next <= total ? next : currentPage);
  }, [page, products.length]);


  const buyingProduct = products.find((product) => product.id === selectedId);

  if(!buyingProduct) {
    navigate(AppRoute.Main);
  }

  const isActiveMainPage = true;

  const prorerty = {
    left: page === 1,
    right: page === getTotalPageCount(products.length)
  };

  return (
    <>
      <Header />
      <main>
        <SliderSwiper banners={banners} />
        <div className="page-content">
          <BreadCrumbs isActiveMainPage={isActiveMainPage}/>
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
                    products={products}
                    onClickButton={handleClickButton}
                    first={firstContentIndex}
                    last={lastContebtIndex}
                  />
                  {isPaginationShow() && (
                    <Pangination
                      onPrevPageClick={handlePrevPageClick}
                      onNextPageClick={handleNextPageClick}
                      disable={prorerty}
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
        { buyingProduct && < PopupAddBasket
          product={buyingProduct}
          opened={isModalAddProductShow}
          onClose={handleModalAddProductShowClose}
        />}
      </main>
      <Footer />
    </>
  );
}

export { Catalog };

import { useState, useCallback } from 'react';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { SliderSwiper } from '../../components/slider-swiper/slider-swiper';
import { TProduct, TBanner, TSortingKey } from '../../types/index';
import { ProductCardList } from '../../components/product-card-list/product-card-list';
import { Pagination } from '../../components/pagination/pagination-component';
import { BreadCrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { Filter } from '../../components/filter/filter';
import { Sorting } from '../../components/sorting/sorting';
import { PopupAddBasket } from '../../components/pop-up/index';
import { PRODUCT_VIEW_COUNT, ReqPath } from '../../const/const';
import { useEffect } from 'react';
import { getTotalPageCount } from '../../utils/utils';
import { api } from '../../services';
import { sorting } from '../../utils/utils';

import {
  TFilterCategory,
  TFilterType,
  TFilterLevel,
  TFilterData
} from '../../types/index';


const sortProducts = (products: TProduct[], label: TSortingKey) => {
  switch(label) {
    case 'LowToHighRating':
      return sorting.LowToHighRating(products);

    case 'HighToLowRating':
      return sorting.HighToLowRating(products);

    case 'HighToLowPrice':
      return sorting.HighToLowPrice(products);

    case 'LowToHighPrice':
    default:
      return sorting.LowToHighPrice(products);
  }
};

function Catalog() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [banners, setBanners] = useState<TBanner[]>([]);
  const [selectedId, setSelectedId] = useState<TProduct['id'] | null>(null);
  const [productsToShow, setProductsToShow] = useState<TProduct[]>([]);
  const [isModalAddProductShow, setIsModalAddProductShow] = useState<boolean>(false);

  const [ currentSortItem, setCurrentSortItem ] = useState<TSortingKey | null>(null);


  const [ currentCategoryItem, setCurrentCategoryItem ] = useState<TFilterCategory | null>(null);
  const [ currentTypeItem, setCurrentTypeItem ] = useState<TFilterType | null>(null);
  const [ currentLevelItem, setCurrentLevelItem ] = useState<TFilterLevel | null>(null);


  useEffect(() => {
    api.get<TProduct[]>(`${ReqPath.getProducts}`)
      .then((response) => {
        setProducts(response.data);
        setProductsToShow(response.data.slice(0, PRODUCT_VIEW_COUNT));
      });

    api.get<TBanner[]>(`${ReqPath.getBanners}`)
      .then((response) => setBanners(response.data));
  }, []);


  const handleSortButton = (sort: TSortingKey) => {
    setCurrentSortItem(sort);
  };

  const handleFilterChange = (data: TFilterData) => {
    console.log('data');
  };

  const showPagination = products.length > PRODUCT_VIEW_COUNT;
  const pagesAmount = getTotalPageCount(products.length);

  const handleClickButton = (productId: TProduct['id']) => {
    setIsModalAddProductShow((prevState) => !prevState);
    setSelectedId(productId);
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

  const filterProducts = (category: TFilterCategory, prods: TProduct[]) => {
    prods.filter((prod) => prod.category === category);
  };

  const result = currentCategoryItem ? filterProducts(currentCategoryItem, products) : products;
  console.log(result);

  const filteredProducts = result;

  const currentProducts = currentSortItem ? sortProducts(filteredProducts, currentSortItem) : products;

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
                  <Filter onChange={() => handleFilterChange(data)} />
                </div>
                <div className="catalog__content">
                  <Sorting
                    onSort={handleSortButton}
                  />
                  <ProductCardList
                    products={currentProducts}
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

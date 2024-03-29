import { useState, useCallback, useMemo } from 'react';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { SliderSwiper } from '../../components/slider-swiper/slider-swiper';
import { TProduct, TBanner, TFilterData, TSortingKey } from '../../types/index';
import { ProductCardList } from '../../components/product-card-list/product-card-list';
import { Pagination } from '../../components/pagination/pagination-component';
import { BreadCrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { Filter } from '../../components/filter/filter';
import { Sorting } from '../../components/sorting/sorting';
import { PopupAddBasket, PopupBasketSuccess } from '../../components/pop-up/index';
import { PRODUCT_VIEW_COUNT, ReqPath } from '../../const/const';
import { useEffect } from 'react';
import { getTotalPageCount } from '../../utils/utils';
import { api } from '../../services';
import { sorting } from '../../utils/utils';

const filterProducts = (products: TProduct[], filters: TFilterData) => products.filter((el) =>
  (!filters?.category || el.category === filters?.category) &&
  (!filters?.levels.length || filters.levels.includes(el.level)) &&
  (!filters?.types.length || filters.types.includes(el.type))
);

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

const DEFAULT_PAGE_NUM = 1;

function Catalog() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [banners, setBanners] = useState<TBanner[]>([]);
  const [selectedId, setSelectedId] = useState<TProduct['id'] | null>(null);
  const [isModalAddProductShow, setIsModalAddProductShow] = useState<boolean>(false);
  const [isModalBasketSuccessShow, setIsModalBasketSuccessShow] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE_NUM);
  const [currentSorting, setCurrentSorting] = useState<TSortingKey | null>(null);
  const [filters, setFilters] = useState<TFilterData | null>(null);
  const [ minPrice, setMinPrice ] = useState<TProduct['price'] | null>();
  const [ maxPrice, setMaxPrice ] = useState<TProduct['price'] | null>();
  const [isBuyed, setIsBuyed] = useState(false);

  const { pathname } = useLocation();
  const [ searchParams ] = useSearchParams();
  const navigate = useNavigate();

  const generatePathSort = (sort: string): string => {
    searchParams.set('sort', sort);

    return `${pathname}?${searchParams.toString()}`;
  };

  const generatePathToFilter = (filter: string): string => {
    searchParams.set('filter', filter);
    return `${pathname}${searchParams.toString()}`;
  };


  const filteredProducts = useMemo(() => {
    const result = filters ? filterProducts(products, filters) : products;
    return result;
  }, [filters, products]);

  const pagesAmount = getTotalPageCount(filteredProducts.length);

  const currentProducts = useMemo(() => {
    let result = filteredProducts;
    if (currentSorting) {
      result = sortProducts(result, currentSorting);
    }
    return result.slice(
      (currentPage - 1) * PRODUCT_VIEW_COUNT,
      currentPage * PRODUCT_VIEW_COUNT
    );
  }, [currentPage, currentSorting, filteredProducts]);


  useEffect(() => {
    if (pagesAmount < currentPage) {
      setCurrentPage(DEFAULT_PAGE_NUM);
    }
  }, [currentPage, pagesAmount]);

  useEffect(() => {
    api.get<TProduct[]>(`${ReqPath.getProducts}`)
      .then((response) => {
        setProducts(response.data);
      });

    api.get<TBanner[]>(`${ReqPath.getBanners}`)
      .then((response) => setBanners(response.data));
  }, []);


  const handleSortChange = (sort: TSortingKey) => {
    setCurrentSorting(sort);

    navigate(generatePathSort(sort));
  };

  const handleClickButton = (productId: TProduct['id']) => {
    setIsModalAddProductShow((prevState) => !prevState);
    setSelectedId(productId);
  };

  const handleModalAddProductShowClose = () => {
    setIsModalAddProductShow((prevState) => !prevState);
    setIsBuyed((prev) => !prev);
  };

  const handleModalBasketSuccessClose = () => {
    setIsModalBasketSuccessShow(false);
    setIsBuyed((prev) => !prev);
  };

  const handlePopUpAddBasketSuccessShow = () => {
    setIsModalBasketSuccessShow(true);
    setIsModalAddProductShow(false);
  };

  const handleClickButtonClose = () => {
    setIsModalBasketSuccessShow(false);
  };

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
    },
    []
  );

  const handleFiltersChange = useCallback(
    (filterData: TFilterData) => {
      setFilters(filterData);
      generatePathToFilter(filterData);
    },[generatePathToFilter]);

  const handleDisabledButton = () => {
    setIsBuyed(true);
  };

  const minPriceCatalog = currentProducts.map((product: TProduct) => product.price).sort().reverse().shift();
  const maxPriceCatalog = currentProducts.map((product: TProduct) => product.price).sort().shift();

  console.log(minPriceCatalog);

  useEffect(() => {
    let isMounted = true;

    if(isMounted) {
      setMinPrice(minPriceCatalog);
      setMaxPrice(maxPriceCatalog);
    }

    return () => {
      isMounted = false;
    };

  },[maxPriceCatalog, minPriceCatalog]
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
                  <Filter
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    onChange={handleFiltersChange}
                  />
                </div>
                <div className="catalog__content">
                  <Sorting
                    onSort={handleSortChange}
                  />
                  <ProductCardList
                    products={currentProducts}
                    onClickButton={handleClickButton}
                    onChangeDisabled={handleDisabledButton}
                    disabledState={isBuyed}
                  />
                  <Pagination
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    pagesAmount={pagesAmount}
                  />
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
            onPopupAddBasketSuccessShow={handlePopUpAddBasketSuccessShow}
          />
        )}
        <PopupBasketSuccess
          opened={isModalBasketSuccessShow}
          onClose={handleModalBasketSuccessClose}
          onClickButtonClose={handleClickButtonClose}
        />
      </main>
      <Footer />
    </>
  );
}

export { Catalog };

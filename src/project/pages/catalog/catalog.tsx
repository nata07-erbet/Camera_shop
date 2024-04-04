import { useState, useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { SliderSwiper } from '../../components/slider-swiper/slider-swiper';
import {
  TProduct,
  TBanner,
  TFilterFeatures,
  TSortingKey,
  TFilterCategory,
  TFilterLevel,
  TFilterType,
  TFilterPriceRange,
} from '../../types/index';
import { ProductCardList } from '../../components/product-card-list/product-card-list';
import { Pagination } from '../../components/pagination/pagination-component';
import { BreadCrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { Filter } from '../../components/filter/filter';
import { Sorting } from '../../components/sorting/sorting';
import { PopupAddBasket, PopupBasketSuccess, } from '../../components/pop-up/index';
import { PRODUCT_VIEW_COUNT, ReqPath } from '../../const/const';
import { useEffect } from 'react';
import { getTotalPageCount } from '../../utils/utils';
import { api } from '../../services';
import { sorting } from '../../utils/utils';

const filterProductsByFeatures = (
  products: TProduct[],
  filters: TFilterFeatures
) =>
  products.filter(
    (el) =>
      (!filters?.category || el.category === filters?.category) &&
      (!filters?.levels.length || filters.levels.includes(el.level)) &&
      (!filters?.types.length || filters.types.includes(el.type))
  );

const filterProductsByPrice = (
  products: TProduct[],
  [priceFrom, priceTo]: Partial<TFilterPriceRange>
) =>
  products.filter(
    (el) =>
      (typeof priceFrom !== 'number' || priceFrom <= el.price) &&
      (typeof priceTo !== 'number' || priceTo >= el.price)
  );

const sortProducts = (products: TProduct[], label: TSortingKey) =>
  sorting[label](products);

type TSearchParams = Partial<TFilterFeatures> & {
  page?: number;
  sort?: TSortingKey;
  priceFrom?: number;
  priceTo?: number;
};

const DEFAULT_PAGE_NUM = 1;

function Catalog() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [banners, setBanners] = useState<TBanner[]>([]);
  const [selectedId, setSelectedId] = useState<TProduct['id'] | null>(null);
  const [isModalAddProductShow, setIsModalAddProductShow] =
    useState<boolean>(false);

  const [ isModalAddProductSuccessShow, setIsModalAddProductSuccessShow ] = useState<boolean>(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    searchParams.has('page')
      ? Number(searchParams.get('page'))
      : DEFAULT_PAGE_NUM
  );
  const [filters, setFilters] = useState<TFilterFeatures | null>(null);
  const [priceRange, setPriceRange] = useState<Partial<TFilterPriceRange>>([
    searchParams.has('priceFrom')
      ? Number(searchParams.get('priceFrom'))
      : undefined,
    searchParams.has('priceTo')
      ? Number(searchParams.get('priceTo'))
      : undefined,
  ]);
  const [currentSorting, setCurrentSorting] = useState<TSortingKey | null>(
    searchParams.get('sort') as TSortingKey
  );

  const filteredProductsByFeatures = useMemo(() => {
    const result = filters
      ? filterProductsByFeatures(products, filters)
      : products;
    return result;
  }, [filters, products]);

  const filteredProductsByPrice = useMemo(
    () => filterProductsByPrice(filteredProductsByFeatures, priceRange),
    [filteredProductsByFeatures, priceRange]
  );

  const pagesAmount = getTotalPageCount(filteredProductsByPrice.length);

  const currentProducts = useMemo(() => {
    let result = filteredProductsByPrice;
    if (currentSorting) {
      result = sortProducts(result, currentSorting);
    }
    return result.slice(
      (currentPage - 1) * PRODUCT_VIEW_COUNT,
      currentPage * PRODUCT_VIEW_COUNT
    );
  }, [currentPage, currentSorting, filteredProductsByPrice]);

  useEffect(() => {
    api.get<TProduct[]>(`${ReqPath.getProducts}`).then((response) => {
      setProducts(response.data);
      setIsLoaded(true);
    });

    api
      .get<TBanner[]>(`${ReqPath.getBanners}`)
      .then((response) => setBanners(response.data));
  }, []);

  const handleSortChange = (sort: TSortingKey) => {
    setCurrentSorting(sort);
  };

  const handleClickButton = (productId: TProduct['id']) => {
    setIsModalAddProductShow((prevState) => !prevState);
    setSelectedId(productId);
  };

  const handleModalAddProductShowClose = () => {
    setIsModalAddProductShow(false);
  };

  const handleModalAddProductSuccessShowClose = () => {
    setIsModalAddProductShow(false);
    setIsModalAddProductSuccessShow(false);
  };

  const handleClickButtonClose = () => {
    setIsModalAddProductSuccessShow(false);
  };

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handlePriceChange = useCallback((range: TFilterPriceRange) => {
    setPriceRange(range);
  }, []);

  const handleFiltersChange = useCallback((filterData: TFilterFeatures) => {
    setFilters(filterData);
  }, []);

  const handlePopupAddBasketSuccessShow = () => {
    setIsModalAddProductSuccessShow(true);
    setIsModalAddProductShow(false);
  };

  const updateSearchParams = useCallback(
    (params: TSearchParams) => {
      const entries = Object.entries(params);
      if (entries.length === 0) {
        setSearchParams();
        return;
      }

      setSearchParams((prev) => {
        entries.forEach(([key, value]) => {
          if (Array.isArray(value)) {
            prev.delete(key);
            value.forEach((el) => prev.append(key, el));
          } else if (value) {
            prev.set(key, value.toString());
          }
        });
        return prev;
      });
    },
    [setSearchParams]
  );

  useEffect(() => {
    if (isLoaded && pagesAmount < currentPage) {
      setCurrentPage(DEFAULT_PAGE_NUM);
    }
  }, [currentPage, isLoaded, pagesAmount]);

  useEffect(() => {
    const params: TSearchParams = {
      ...(filters ?? {}),
      priceFrom: priceRange[0],
      priceTo: priceRange[1],
      page: currentPage,
      sort: currentSorting ?? undefined,
    };
    updateSearchParams(params);
  }, [currentPage, currentSorting, filters, priceRange, updateSearchParams]);

  const prices = filteredProductsByFeatures.map(
    (product: TProduct) => product.price
  );
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const buyingProduct = products.find((product) => product.id === selectedId);

  return (
    <>
      <Header/>
      <main data-testid="main-page">
        <SliderSwiper banners={banners} />
        <div className="page-content">
          <BreadCrumbs isActiveMainPage />
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
              <div className="page-content__columns">
                <div className="catalog__aside">
                  <Filter
                    initFilters={{
                      category: searchParams.get('category') as TFilterCategory,
                      levels: searchParams.getAll('levels') as TFilterLevel[],
                      types: searchParams.getAll('types') as TFilterType[],
                    }}
                    initPriceRange={priceRange}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    onFeaturesChange={handleFiltersChange}
                    onPricesChange={handlePriceChange}
                    onReset={() => updateSearchParams({})}
                  />
                </div>
                <div className="catalog__content">
                  <Sorting
                    initSorting={currentSorting}
                    onSort={handleSortChange}
                  />
                  {isLoaded && (
                    <ProductCardList
                      products={currentProducts}
                      onClickButton={handleClickButton}
                      isAddedBasket={isModalAddProductSuccessShow}
                    />
                  )}
                  {isLoaded && (
                    <Pagination
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                      pagesAmount={pagesAmount}
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
        {buyingProduct && (
          <>
            <PopupAddBasket
              product={buyingProduct}
              opened={isModalAddProductShow}
              onClose={handleModalAddProductShowClose}
              onPopupAddBasketSuccessShow={ handlePopupAddBasketSuccessShow }
            />
            <PopupBasketSuccess
              opened={isModalAddProductSuccessShow}
              onClose={handleModalAddProductSuccessShowClose}
              onClickButtonClose={handleClickButtonClose}
            />
          </>

        )}
      </main>
      <Footer />
    </>
  );
}

export { Catalog };

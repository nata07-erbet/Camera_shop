import { useState, useCallback, useMemo } from 'react';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { SliderSwiper } from '../../components/slider-swiper/slider-swiper';
import { TProduct, TBanner, TSortingKey, TFilterData} from '../../types/index';
import { ProductCardList } from '../../components/product-card-list/product-card-list';
import { Pagination } from '../../components/pagination/pagination-component';
import { BreadCrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { Filter } from '../../components/filter/filter';
import { Sorting } from '../../components/sorting/sorting';
import { PopupAddBasket } from '../../components/pop-up/index';
import { PRODUCT_VIEW_COUNT, ReqPath, DEFAULT_PAGE_NUM } from '../../const/const';
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

function Catalog() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [banners, setBanners] = useState<TBanner[]>([]);
  const [selectedId, setSelectedId] = useState<TProduct['id'] | null>(null);
  const [ isModalAddProductShow, setIsModalAddProductShow] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE_NUM);

  const [ currentSortItem, setCurrentSortItem ] = useState<TSortingKey | null>(null);
  const [ filters, setFilters ] = useState<TFilterData>();

  useEffect(() => {
    api.get<TProduct[]>(`${ReqPath.getProducts}`)
      .then((response) => {
        setProducts(response.data);
      });

    api.get<TBanner[]>(`${ReqPath.getBanners}`)
      .then((response) => setBanners(response.data));
  }, []);

  const pagesAmount = getTotalPageCount(products.length);
  
  const filteredProducts = useMemo(() => {
    const result = filters ? filterProducts(products, filters) : products;
    return result.slice(
      (currentPage - 1) * PRODUCT_VIEW_COUNT,
      currentPage * PRODUCT_VIEW_COUNT);
  }, [currentPage, filters, products]);

  const currentProducts = useMemo(() => {
    let result = filteredProducts;

    if(currentSortItem) {
      result = sortProducts(result, currentSortItem);
    }
    return result;
  }, [filteredProducts, currentSortItem]);

  const handleFilterChange = useCallback(
    (filterData: TFilterData) => {
      setFilters(filterData);
    },[]);

  const handleSortButton = (sort: TSortingKey) => {
    setCurrentSortItem(sort);
  };

  const showPagination = products.length > PRODUCT_VIEW_COUNT;


  const handleClickButton = (productId: TProduct['id']) => {
    setIsModalAddProductShow((prevState) => !prevState);
    setSelectedId(productId);
  };

  const handleModalAddProductShowClose = () => {
    setIsModalAddProductShow((prevState) => !prevState);
  };

  const handlePageClick = useCallback(
    (page: number) => {
      setProducts(
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
                  <Filter onChange={handleFilterChange} />
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

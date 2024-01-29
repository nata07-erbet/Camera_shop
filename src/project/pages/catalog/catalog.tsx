import { Header} from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Banner } from '../../components/banner/banner';
import { TProducts } from '../../types/index';
import { ProductCardList } from '../../components/product-card-list/product-card-list';
import { Pangination } from '../../components/pangination/pangination';
import { BreadCrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { Filter } from '../../components/filter/filter';
import { Sorting } from '../../components/sorting/sorting';

type CatalogProps = {
  products: TProducts;
};

function Catalog ({products}: CatalogProps) {

  const isPaginationShow = (products: TProducts): boolean => {
    products.length >=9 ? 'true' : 'false';
  };

  return (
    <>
      <Header />
      <main>
        <Banner />
        <div className="page-content">
          <BreadCrumbs />
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
              <div className="page-content__columns">
                <div className="catalog__aside">
                <Filter />
                </div>
                <div className="catalog__content">
                  <Sorting />
                  <ProductCardList products={products} />
                  {isPaginationShow(products) ? (
                     <Pangination />
                  ) : (
                    ''
                  )}

                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export { Catalog };

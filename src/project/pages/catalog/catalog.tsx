import { Header} from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Banner } from '../../components/banner/banner';
import { TProduct, TBanner } from '../../types/index';
import { ProductCardList } from '../../components/product-card-list/product-card-list';
import { Pangination } from '../../components/pangination/pangination-component';
import { BreadCrumbsMain } from '../../components/breadcrumbs/breadcrumbs-main';
import { Filter } from '../../components/filter/filter';
import { Sorting } from '../../components/sorting/sorting';
import { useState } from 'react';
import { AddProductBasketPop } from '../../components/pop-up/popup-product-basket';

type CatalogProps = {
  products: TProduct[];
  banners: TBanner[];
};


function Catalog ({products, banners}: CatalogProps) {

  const isPaginationShow = () => {
    if(products.length >= 9) {
      return true;
    }
  };
  const [isModalAddProductShow, setIsModalAddProductShow] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<TProduct['id'] | null>(null);

  const handleClickButton = (productId: TProduct['id']) => {
    setIsModalAddProductShow((prevState) => !prevState);
    setSelectedId(productId); //id =2
  };
  const buyingProduct: TProduct | undefined = products.find((product) => product.id === selectedId);

  return (
    <>
      <Header />
      <main>
        <Banner banners={banners} />
        <div className="page-content">
          <BreadCrumbsMain />
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
                  />
                  {isPaginationShow() && <Pangination />}
                </div>
              </div>
            </div>
          </section>
        </div>
        { isModalAddProductShow && < AddProductBasketPop product={buyingProduct}/>}
      </main>
      <Footer />
    </>
  );
}

export { Catalog };

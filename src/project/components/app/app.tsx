import { Catalog } from '../../pages/catalog/catalog';
import { Product } from '../../pages/product/product';
import { NotFoundPage } from '../../pages/404/404';
import { Basket } from '../../pages/basket/basket';
import { productsMocks } from '../../mocks/products-mock';
import { similarMocks } from '../../mocks/similar-mocks';
import { getRewiewsMock } from '../../mocks/get-rewiews-mock';

function App () {

  return(
    <>
      <Catalog products={productsMocks } />
      <Product products={productsMocks} similarProducts={similarMocks} rewiews={getRewiewsMock} />
      <NotFoundPage />
      <Basket products={productsMocks}/>
    </>
  );
}

export { App};


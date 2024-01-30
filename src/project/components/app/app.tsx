import { Catalog } from '../../pages/catalog/catalog';
import { Product } from '../../pages/product/product';
import { NotFoundPage } from '../../pages/404/404';
import { Basket } from '../../pages/basket/basket';
import { productsMocks } from '../../mocks/products-mock';
import { similarMocks } from '../../mocks/similar-mocks';


function App () {

  return(
    <>
      <Catalog products={ productsMocks } />
      <Product products={ productsMocks } similarProducts={similarMocks} />
      <NotFoundPage />
      <Basket />
    </>
  );
}

export { App};


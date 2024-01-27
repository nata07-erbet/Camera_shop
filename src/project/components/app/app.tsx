import { Catalog } from '../../pages/catalog/catalog';
import { Product } from '../../pages/product/product';
import { NotFoundPage } from '../../pages/404/404';
import { Basket } from '../../pages/basket/basket';
import { productsMocks } from '../../mocks/products-mock';

function App () {
  return(
    <>
      <Catalog mocks={ productsMocks } />
      <Product />
      <NotFoundPage />
      <Basket />
    </>
  );
}

console.log(productsMocks);
export { App};


import { Catalog } from '../../pages/catalog/catalog';
import { Product } from '../../pages/product/product';
import { NotFoundPage } from '../../pages/404/404';
import { Basket } from '../../pages/basket/basket';

function App () {
  return(
    <>
      <Catalog />
      <Product />
      <NotFoundPage />
      <Basket />
    </>
  );
}

export { App};


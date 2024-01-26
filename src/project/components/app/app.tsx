import { Catalog } from '../../pages/catalog/catalog';
import { Product } from '../../pages/product/product';
import { NotFoundPage } from '../../pages/404/404';
import { Basket } from '../../pages/basket/basket';

import { AddRewiew } from '../../pop-up/add-rewiew/add-rewiew';

function App () {
  return(
    <>
      <Catalog />
      <Product />
      <NotFoundPage />
      <Basket />
      <AddRewiew />
    </>
  );
}

export { App};


import { Catalog } from '../../pages/catalog/catalog';
import { Product } from '../../pages/product/product';
import { NotFoundPage } from '../../pages/404/404';
import { Basket } from '../../pages/basket/basket';

import { AddRewiew } from '../../components/add-rewiew/add-rewiew';
import { RemoveFromBasket } from '../remove-from-basket/remove-from-basket';

function App () {
  return(
    <>
      <Catalog />
      <Product />
      <NotFoundPage />
      <Basket />
      <AddRewiew />
      <RemoveFromBasket />
    </>
  );
}

export { App};


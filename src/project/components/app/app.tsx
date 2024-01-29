import { Catalog } from '../../pages/catalog/catalog';
import { Product } from '../../pages/product/product';
import { NotFoundPage } from '../../pages/404/404';
import { Basket } from '../../pages/basket/basket';
import { productsMocks } from '../../mocks/products-mock';
import { useParams} from 'react-router-dom';


function App () {

  return(
    <>
      <Catalog products={ productsMocks } />
      <Product products={ productsMocks } />
      <NotFoundPage />
      <Basket />
    </>
  );
}

export { App};


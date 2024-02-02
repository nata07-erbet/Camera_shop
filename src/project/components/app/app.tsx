import { createBrowserRouter , RouterProvider} from 'react-router-dom';

import { Catalog } from '../../pages/catalog/catalog';
import { Product } from '../../pages/product/product';
import { NotFoundPage } from '../../pages/404/404';
import { Basket } from '../../pages/basket/basket';
import { productsMocks } from '../../mocks/products-mock';
import { similarMocks } from '../../mocks/similar-mocks';
import { bannersMock } from '../../mocks/banners-mock';
import { getRewiewsMock } from '../../mocks/get-rewiews-mock';
import { AppRoute } from '../../const/const';
import { AddProductBasketPage } from '../add-product-basket/add-product-basket';
import { AddProductSuccess } from '../pop-up/popup-product-basket-success';

const router = createBrowserRouter([
  {
    path: AppRoute.Main,
    element:<Catalog products={productsMocks } banners={bannersMock} />
  },
  {
    children: [
      {
        path: AppRoute.AddBasket,
        element: <AddProductBasketPage products={productsMocks } banners={bannersMock}/>
      },
      {
        path: AppRoute.AddBasketSuccess,
        element: <AddProductSuccess />
      }
    ]
  },

  {
    path: `${AppRoute.Product}/:productId`,
    element: <Product products={productsMocks} similarProducts={similarMocks} rewiews={getRewiewsMock} />
  },

  {
    path: AppRoute.Basket,
    element: <Basket products={productsMocks}/>
  },

  {
    path:'*',
    element: <NotFoundPage />
  }
]);

function App () {
  return(
    <RouterProvider router={router} />
  );
}

export { App };


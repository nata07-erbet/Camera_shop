import { Catalog } from '../pages/catalog/catalog';
import { Product } from '../pages/product/product';
import { NotFoundPage } from '../pages/404/404';
import { Basket } from '../pages/basket/basket';
import { productsMocks } from '../mocks/products-mock';
import { similarMocks } from '../mocks/similar-mocks';
import { bannersMock } from '../mocks/banners-mock';
import { getRewiewsMock } from '../mocks/get-rewiews-mock';
import { AppRoute } from '../const/const';
import { LoadingScreen } from '../components/loading-screen/loading-screen';

const routesConfig = [
  {
    path: AppRoute.Main,
    element: (
      <Catalog
        banners={bannersMock}
        data-testid="main-page"
      />
    ),
  },

  {
    path: AppRoute.Product,
    element: (
      <Product
        products={productsMocks}
        similarProducts={similarMocks}
        rewiews={getRewiewsMock}
      />
    ),
  },

  {
    path: AppRoute.Basket,
    element: <Basket products={productsMocks} />,
  },

  {
    path: '*',
    element: <NotFoundPage />,
  },
  {
    path: AppRoute.Loader,
    element: <LoadingScreen />,
  },
];

export { routesConfig };

import { Catalog } from '../pages/catalog/catalog';
import { Product } from '../pages/product/product';
import { NotFoundPage } from '../pages/404/404';
import { Basket } from '../pages/basket/basket';
import { AppRoute } from '../const/const';
import { LoadingScreen } from '../components/loading-screen/loading-screen';

const routesConfig = [
  {
    path: AppRoute.Main,
    element: (
      <Catalog
        data-testid="main-page"
      />
    ),
  },

  {
    path: AppRoute.Product,
    element: (
      <Product/>
    ),
  },

  {
    path: AppRoute.Basket,
    element: <Basket/>,
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

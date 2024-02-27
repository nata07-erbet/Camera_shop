import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testUtils';
import { AppRoute } from '../../const/const';
import { generatePath } from 'react-router';

describe('Application Routing', () => {
  it('should render "MainPage" when user navigates to "/"', () => {
    const expectData = 'main-page';
    const expectedText = 'Каталог фото- и видеотехники';

    renderWithRouter(AppRoute.Main);

    expect(screen.getByTestId(expectData)).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render "Product-page" when user navigates to "/product"', () => {
    const expectData = 'product-page';

    renderWithRouter(generatePath(AppRoute.Product, { productId: '1', tab: null }));

    expect(screen.getByTestId(expectData)).toBeInTheDocument();
  });

  it('should render "Basket-page" when user navigates to "/basket"', () => {
    const expectData = 'basket-page';

    renderWithRouter(AppRoute.Basket);

    expect(screen.getByTestId(expectData)).toBeInTheDocument();
  });
  it('should render "ErrorPage" when user navigates to "/unknown-route"', () => {
    const expectData = 'error-page';

    renderWithRouter('/unknown-route');

    expect(screen.getByTestId(expectData)).toBeInTheDocument();
  });
});

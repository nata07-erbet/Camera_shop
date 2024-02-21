import { render, screen } from '@testing-library/react';
import { App } from './app';
import { withHistory } from '../../utils/mock-component/mock-component';

describe('Application Routing', () => {
  it('should render "MainPage" when user navigates to "/"', () => {
    const withHistoryComponent = withHistory(<App />);

    const expectData = 'main-page';
    const expectedText = 'Каталог фото- и видеотехники';

    render(withHistoryComponent);

    expect(screen.getByTestId(expectData)).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
  it('should render "Product-page" when user navigates to "/product"', () => {
    const withHistoryComponent = withHistory(<App />);

    const expectedText = 'Главная';
    const expectData = 'product-page';

    render(withHistoryComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByTestId(expectData)).toBeInTheDocument();
  });
  it('should render "Basket-page" when user navigates to "/basket"', () => {
    const withHistoryComponent = withHistory(<App />);
    const expectedText = 'Главная';
    const expectData = 'basket-page';

    render(withHistoryComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByTestId(expectData)).toBeInTheDocument();
  });
  it('should render "ErrorPage" when user navigates to "/unknown-route"', () => {
    const withHistoryComponent = withHistory(<App />);
    const expectData = 'error-page';
    const expectedText = '404 Not Found';

    render(withHistoryComponent);

    expect(screen.getByTestId(expectData)).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});

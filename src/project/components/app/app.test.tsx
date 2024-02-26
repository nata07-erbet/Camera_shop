import { render, screen } from '@testing-library/react';
import { App } from './app';

describe('Application Routing', () => {
  it('should render "MainPage" when user navigates to "/"', () => {
    const expectData = 'main-page';
    const expectedText = 'Каталог фото- и видеотехники';

    render(<App />);

    expect(screen.getByTestId(expectData)).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render "Product-page" when user navigates to "/product"', () => {
    const expectData = 'product-page';

    render(<App />);

    expect(screen.getByTestId(expectData)).toBeInTheDocument();
  });

  it('should render "Basket-page" when user navigates to "/basket"', () => {
    const expectData = 'basket-page';

    render(<App />);

    expect(screen.getByTestId(expectData)).toBeInTheDocument();
  });
  it('should render "ErrorPage" when user navigates to "/unknown-route"', () => {
    const expectData = 'error-page';

    render(<App />);

    expect(screen.getByTestId(expectData)).toBeInTheDocument();
  });
});

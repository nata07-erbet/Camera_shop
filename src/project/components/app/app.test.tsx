import {render, screen} from '@testing-library/react';
import { App } from './app';
import { withHelmet } from '../../utils/mock-component/mock-component';


describe('Application Routing', () => {

  it('should render "MainPage" when user navigates to "/"', () => {
    const withHelmetComponent = withHelmet(<App />);

    const expectData = 'main-page';
    const expectedText = 'Каталог фото- и видеотехники';

    render(withHelmetComponent);

    expect(screen.getByTestId(expectData)).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
  it('should render "Product-page" when user navigates to "/product"', () => {
    const withHelmetComponent = withHelmet(<App />);

    const expectedText = 'Главная';
    const expectData = 'product-page';

    render(withHelmetComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByTestId(expectData)).toBeInTheDocument();
  });
  it('should render "Basket-page" when user navigates to "/basket"', () => {
    const withHelmetComponent = withHelmet(<App />);
    const expectedText = 'Главная';
    const expectData = 'basket-page';

    render(withHelmetComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByTestId(expectData)).toBeInTheDocument();
  });
  it('should render "ErrorPage" when user navigates to "/unknown-route"', () => {
    const withHelmetComponent = withHelmet(<App />);
    const expectData = 'error-page';
    const expectedText = '404 Not Found';

    render(withHelmetComponent);

    expect(screen.getByTestId(expectData)).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});

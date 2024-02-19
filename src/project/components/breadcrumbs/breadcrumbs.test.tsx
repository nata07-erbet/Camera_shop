import { render, screen } from '@testing-library/react';
import { withHelmet } from '../../utils/mock-component/mock-component';
import { productsMocks } from '../../mocks/products-mock';
import { BreadCrumbs } from './breadcrumbs';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const expectedText = 'breadcrumbs-list';
    const prepareComponent = withHelmet(<BreadCrumbs currentProduct={productsMocks[0]} isActiveMainPage isActiveBasketPage />);

    render(prepareComponent);

    expect(screen.getByTestId(expectedText)).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component/mock-component';
import { productsMocks } from '../../mocks/products-mock';
import { BreadCrumbs } from './breadcrumbs';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const expectedTestId = 'breadcrumbs-list';
    const prepareComponent = withHistory(
      <BreadCrumbs
        currentProduct={productsMocks[0]}
        isActiveMainPage
        isActiveBasketPage
      />
    );

    render(prepareComponent);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});

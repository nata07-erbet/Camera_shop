import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component/mock-component';
import { productsMocks } from '../../mocks/products-mock';
import { BasketList } from './basket-list';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const expectedText = 'basket-list';
    const prepareComponent = withHistory(
      <BasketList products={productsMocks} />
    );

    render(prepareComponent);

    expect(screen.getByTestId(expectedText)).toBeInTheDocument();
  });
});

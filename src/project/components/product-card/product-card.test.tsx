import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { ProductCard } from './product-card';
import { productsMocks } from '../../mocks/products-mock';

describe('component: productsMocks', () => {
  it('should render correctly', () => {
    const expectedTestId = 'product';
    const preparedComponent = withHistory(
      <ProductCard
        product={productsMocks[0]}
        onClickButton={vi.fn()}
      />
    );

    render(preparedComponent);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});

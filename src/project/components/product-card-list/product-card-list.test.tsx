import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { ProductCardList } from './product-card-list';
import { productsMocks } from '../../mocks/products-mock';

describe('component: productsMocks', () => {
  it('should render correctly', () => {
    const expectedTestId = 'product-container';
    const preparedComponent = withHistory(
      <ProductCardList
        products={productsMocks}
        onClickButton={function (): void {}}
      />
    );

    render(preparedComponent);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});

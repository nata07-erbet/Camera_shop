import { withHelmet } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { ProductCard } from './product-card';
import { productsMocks } from '../../mocks/products-mock';
import userEvent from '@testing-library/user-event';


describe('component: productsMocks', () => {
  it('should render correctly', () => {
    const expectedTestId = 'Добавить товар в корзину';
    const preparedComponent = withHelmet(<ProductCard product={productsMocks[0]} onClickButton={function (): void {} } />);

    render(preparedComponent);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('when user clicked  button', async () => {
    await userEvent.click(screen.getByRole('button'));
  });
});

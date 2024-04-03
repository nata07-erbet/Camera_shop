import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { PopupAddBasket } from './index';
import { productsMocks } from '../../mocks/products-mock';

describe('component: PopupAddBasket', () => {
  it('should render correctly', () => {
    const expectedText = 'Добавить товар в корзину';
    const preparedComponent = withHistory(
      <PopupAddBasket
        product={productsMocks[0]}
        onPopupAddBasketSuccessShow={vi.fn()}
      />
    );

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});

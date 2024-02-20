import { withHelmet } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { PopupAddBasket } from './index';
import { productsMocks } from '../../mocks/products-mock';
import userEvent from '@testing-library/user-event'


describe('component: PopupAddBasket', () => {
  it('should render correctly', () => {
    const expectedText = 'Добавить товар в корзину';
    const preparedComponent = withHelmet(<PopupAddBasket product={productsMocks[0]} />);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('when user clicked  button', async () => {

    const preparedComponent = withHelmet(<PopupAddBasket product={productsMocks[0]} />);
    await userEvent.click(screen.getByRole('button'));
    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

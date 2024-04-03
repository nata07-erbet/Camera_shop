import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { PopupBasketSuccess } from './index';

describe('component: PopupBasketSuccess', () => {
  it('should render correctly', () => {
    const expectedText = 'Товар успешно добавлен в корзину';
    const preparedComponent = withHistory(<PopupBasketSuccess onClickButtonClose={vi.fn()} />);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});

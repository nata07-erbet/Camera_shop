import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { RemoveFromBasket } from './remove-from-basket';

describe('component: RemoveFromBasket', () => {
  it('should render correctly', () => {
    const expectedText = 'Удалить этот товар?';
    const preparedComponent = withHistory(<RemoveFromBasket />);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});

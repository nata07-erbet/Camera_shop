import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component/mock-component';
import { BasketList } from './basket-list';


describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const expectedText = 'basket-list';
    const prepareComponent = withHistory(
      <BasketList onButtonDeleteProduct={vi.fn()}/>
    );

    render(prepareComponent);

    expect(screen.getByTestId(expectedText)).toBeInTheDocument();
  });
});

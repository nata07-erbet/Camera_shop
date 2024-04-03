import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component/mock-component';
import { Basket } from './basket';

describe('Component: Basket', () => {
  it('should render correctly', () => {
    const expectedHeaderText = 'Корзина';

    render(withHistory(<Basket/>));

    const basketPage = screen.getByTestId('basket-page');

    expect(basketPage).toBeInTheDocument();
    expect(basketPage).toContainElement(screen.getAllByText(expectedHeaderText)[0]);
  });
});


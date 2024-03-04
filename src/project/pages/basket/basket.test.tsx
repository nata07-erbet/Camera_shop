import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component/mock-component';
import { Basket } from './basket';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const expectedHeaderText = 'Корзина';

    render(withHistory(<Basket/>));

    expect(screen.getByText(expectedHeaderText)).toBeInTheDocument();
  });
});


import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component/mock-component';
import { Product } from './product';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const expectedText = 'Цена';

    render(withHistory(<Product/>));

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});

import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('component: Header', () => {
  it('should render correctly', () => {
    const expectedText = 'Каталог';
    const preparedComponent = withHistory(<Header />);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});

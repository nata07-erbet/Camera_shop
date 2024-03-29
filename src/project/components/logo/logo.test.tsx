import { render, screen } from '@testing-library/react';
import { Logo } from './logo';
import { withHistory } from '../../utils/mock-component/mock-component';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const expectedText = 'logotype';
    const prepareComponent = withHistory(<Logo />);

    render(prepareComponent);

    expect(screen.getByTestId(expectedText)).toBeInTheDocument();
  });
});

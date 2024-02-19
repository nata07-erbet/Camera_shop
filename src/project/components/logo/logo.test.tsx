import { render, screen} from '@testing-library/react';
import { Logo } from './logo';
import { withHelmet } from '../../utils/mock-component/mock-component';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const expectedText = 'logotype';
    const prepareComponent = withHelmet(<Logo />);

    render(prepareComponent);

    expect(screen.getAllByTestId(expectedText)).toBeInTheDocument();
  });
});

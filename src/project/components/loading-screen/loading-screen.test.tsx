import { render, screen} from '@testing-library/react';
import { LoadingScreen } from './loading-screen';

describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    const expectedText = 'Loading...';

    render(<LoadingScreen />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});


import { render, screen } from '@testing-library/react';
import { withHelmet } from '../../utils/mock-component/mock-component';
import { NotFoundPage } from '../404/404';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const expectedHeaderText = '404 Not found';
    const expectedLinkText = 'Go to main Page';

    render(withHelmet(<NotFoundPage />));

    expect(screen.getByText(expectedHeaderText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });
});

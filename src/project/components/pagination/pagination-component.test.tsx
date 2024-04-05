import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component/mock-component';
import { Pagination } from './pagination-component';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const expectedText = 'pagination-component';
    const prepareComponent = withHistory(
      <Pagination
        currentPage={1}
        pagesAmount={2}
        onPageChange={vi.fn()}
      />
    );

    render(prepareComponent);

    expect(screen.getByTestId(expectedText)).toBeInTheDocument();
  });

  it('should not render if pagesAmount <= 1', () => {
    const expectedText = 'pagination-component';
    const prepareComponent = withHistory(
      <Pagination
        currentPage={1}
        pagesAmount={1}
        onPageChange={vi.fn()}
      />
    );

    render(prepareComponent);

    expect(screen.queryByTestId(expectedText)).not.toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { withHelmet } from '../../utils/mock-component/mock-component';
import { INITAL_PAGE_BY_PANGINATION } from '../../const/const';
import { Pagination } from './pagination-component';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const expectedText = 'pagination-component';
    const prepareComponent = withHelmet(
      <Pagination pagesAmount={INITAL_PAGE_BY_PANGINATION} onPageClick={function (): void {}}/>);

    render(prepareComponent);

    expect(screen.getByTestId(expectedText)).toBeInTheDocument();
  });
});

import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { UpBtn } from './up-btn';

describe('component: Sorting', () => {
  it('should render correctly', () => {
    const expectedTestId = 'up';

    const preparedComponent = withHistory(
      <UpBtn onScrollTop={vi.fn()} />
    );

    render(preparedComponent);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});

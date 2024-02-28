import { withHistory } from '../../utils/mock-component/mock-component';
import { render, screen } from '@testing-library/react';
import { Sorting } from './sorting';

describe('component: Sorting', () => {
  it('should render correctly', () => {
    const expectedTestId = 'sort';

    const preparedComponent = withHistory(<Sorting />);

    render(preparedComponent);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
